sap.ui.define([], function() {
	"use strict";
	/* Templating helper functions that are specific to the ListReport Template */
	var AnnotationHelper = {
		resolveMetaModelPath: function(oContext) {
			var sPath = oContext.getObject();
			var oModel = oContext.getModel();
			var oMetaModel = oModel.getProperty("/metaModel");
			return oMetaModel.createBindingContext(sPath);
		},
		/* The context definition for the ListReport
			1. only check if there is a default presentation variant for now. If it exists we
			   need to check if it has a LineItem annotation and use this one rather than the default LineItem annotation
			Compare with similar function in AnalyticalListReport
		*/
		createWorkingContext: function(oContext) {
			var oParameter = oContext.getObject(),
				oModel = oContext.getModel(),
				oMetaModel = oModel.getProperty("/metaModel"),
				oEntitySet = oMetaModel.getODataEntitySet(oParameter.entitySet),
				oEntityType = oMetaModel.getODataEntityType(oEntitySet.entityType),
				sAnnotationPath = "",
				oWorkingContext = {};
			/* Find default PresentationVariant */
			sAnnotationPath = oEntityType.$path + "/com.sap.vocabularies.UI.v1.PresentationVariant";
			oWorkingContext.presentationVariantQualifier = "";
			oWorkingContext.presentationVariant = oMetaModel.getObject(sAnnotationPath);
			oWorkingContext.presentationVariantPath = sAnnotationPath;
			/* Determine LineItem and Chart via PV */
			if (oWorkingContext.presentationVariant && oWorkingContext.presentationVariant.Visualizations) {
				oWorkingContext.presentationVariant.Visualizations.forEach(function(visualization) {
					/* get rid of the @ and put a / in front */
					var sPath = "/" + visualization.AnnotationPath.slice(1);
					if (sPath.indexOf("com.sap.vocabularies.UI.v1.LineItem") > -1) {
						sAnnotationPath = oEntityType.$path + sPath;
						oWorkingContext.lineItem = oMetaModel.getObject(sAnnotationPath);
						oWorkingContext.lineItemPath = sAnnotationPath;
						oWorkingContext.lineItemQualifier = sAnnotationPath.split("#")[1] || "";
					}
				});
			}
			/* Fall back to defaults without qualifier */
			if (!oWorkingContext.lineItem) {
				sAnnotationPath = oEntityType.$path + "/com.sap.vocabularies.UI.v1.LineItem";
				oWorkingContext.lineItem = oMetaModel.getObject(sAnnotationPath);
				oWorkingContext.lineItemPath = sAnnotationPath;
				oWorkingContext.lineItemQualifier = "";
			}

			oWorkingContext.tableChartTabs = [];
			var sAnnotation, oVariants, i, oItem, oVariant;
			oVariants = oParameter && oParameter.manifest && oParameter.manifest["sap.ui.generic.app"] && oParameter.manifest["sap.ui.generic.app"].pages && oParameter.manifest["sap.ui.generic.app"].pages[0].component && 
				oParameter.manifest["sap.ui.generic.app"].pages[0].component.settings && oParameter.manifest["sap.ui.generic.app"].pages[0].component.settings.quickVariantSelectionX &&
				oParameter.manifest["sap.ui.generic.app"].pages[0].component.settings.quickVariantSelectionX.variants;
			for (i in oVariants) {
				oVariant = {};
				sAnnotation = "";
				oItem = {};
				oItem.key = oVariants[i].key;
				oItem.variantAnnotationPath = oVariants[i].annotationPath;
				oItem.variantQualifier = oItem.variantAnnotationPath.split("#")[1] || "";

				oVariant = oEntityType[oItem.variantAnnotationPath];
				// oVariant is SelectionPresentationVariant
				if (oVariant && oVariant.PresentationVariant) {
					// for the case that under PresentationVariant an annotation path is specified to the presentation variant
					// comment 2017/11/30: annotation path is not correct. the presentation variant should be referenced via path
					// see BCP:1780445623
					var oPresentationVariantAnnotation;
					if (oVariant.PresentationVariant.Path) {
						var sPresentationVariantPath = oVariant.PresentationVariant.Path.split("@")[1];
						oPresentationVariantAnnotation = sPresentationVariantPath && oEntityType[sPresentationVariantPath];
						oItem.presentationVariantQualifier = sPresentationVariantPath.split("#")[1] || "";
					} else {
						oPresentationVariantAnnotation = oVariant.PresentationVariant;
					}
					sAnnotation = oPresentationVariantAnnotation.Visualizations && oPresentationVariantAnnotation.Visualizations[0].AnnotationPath;
				} else if (oVariant && oVariant.Visualizations) {
					// oVariant is PresentationVariant
					sAnnotation =  oVariant.Visualizations[0].AnnotationPath;
				}
				if (sAnnotation) {
					// get rid of the @ and put a / in front
					var sRelativePath = "/" + sAnnotation.slice(1);
					
					if (sAnnotation.indexOf("com.sap.vocabularies.UI.v1.Chart") > -1) {
						oItem.smartControl = "chart";
						oItem.chartAbsolutePath = oEntityType.$path + sRelativePath;
					} else if (sAnnotation.indexOf("com.sap.vocabularies.UI.v1.LineItem") > -1) {
						oItem.smartControl = "table";
						sAnnotationPath = oEntityType.$path + sRelativePath;
						oItem.lineItem = oMetaModel.getObject(sAnnotationPath);
						oItem.lineItemPath = sAnnotationPath;
						oItem.lineItemQualifier = sAnnotationPath.split("#")[1] || "";
					}
				}
				/* Fall back to default lineItem without qualifier */
				if (!(oItem.chartAbsolutePath || oItem.lineItemPath)) {
					sAnnotationPath = oEntityType.$path + "/com.sap.vocabularies.UI.v1.LineItem";
					oItem.lineItem = oMetaModel.getObject(sAnnotationPath);
					oItem.lineItemPath = sAnnotationPath;
					oItem.lineItemQualifier = "";
				}
				oItem.controlQualifier = sAnnotation && sAnnotation.split("#")[1] || "";
				oWorkingContext.tableChartTabs.push(oItem);
			}

			oModel.setProperty("/workingContext", oWorkingContext);
			return "/workingContext";
		},

		checkIfSmartChart: function(oEntityType, oTabItem) {
			var bIsSmartChart = false, sAnnotation, sAnnotationPath, oVariant;
			sAnnotationPath = oTabItem.annotationPath;
			oVariant = !!sAnnotationPath && oEntityType[sAnnotationPath];
			if (oVariant && oVariant.PresentationVariant && oVariant.PresentationVariant.Visualizations) {
				// oVariant is SelectionPresentationVariant
				sAnnotation =  oVariant.PresentationVariant.Visualizations[0].AnnotationPath;
			} else if (oVariant && oVariant.Visualizations) {
				// oVariant is PresentationVariant
				sAnnotation =  oVariant.Visualizations[0].AnnotationPath;
			}
			if (sAnnotation && sAnnotation.indexOf("com.sap.vocabularies.UI.v1.Chart") > -1) {
				bIsSmartChart = true;
			}
			return bIsSmartChart;
		},

		checkIfChartQualifier: function(oWorkingContext, iTabItem) {
			return !!(AnnotationHelper.getChartQualifier(oWorkingContext, iTabItem));
		},

		getChartQualifier: function(oWorkingContext, iTabItem) {
			var sChartQualifier, i, sKey;
			for (i in oWorkingContext.tableChartTabs) {
				sKey = oWorkingContext.tableChartTabs[i].key;
				if (sKey === iTabItem.key) {
					sChartQualifier = oWorkingContext.tableChartTabs[i].controlQualifier;
					break;
				}
			}
			return sChartQualifier;
		},

		getPresentationVariantQualifier: function(oWorkingContext, iTabItem) {
			var sVariantQualifier, i, sKey;
			for (i in oWorkingContext.tableChartTabs) {
				sKey = oWorkingContext.tableChartTabs[i].key;
				if (sKey === iTabItem.key) {
					sVariantQualifier = oWorkingContext.tableChartTabs[i].variantQualifier;
					break;
				}
			}
			return sVariantQualifier;
		},

		getChartAnnotationPath: function(iTabItem) {
			var sChartAnnotationPath, oModel, oObject, i, aTableTabs, sVariantAnnotationPath, sChartAnnotationPath, sChartActionsAnnotationPath, oBindingContextPath;
			oModel = iTabItem.getModel();
			var oMetaModel = oModel.getProperty("/metaModel");
			oObject = oModel.getObject(iTabItem.sPath);
			aTableTabs = oModel.getData("workingContext")["workingContext"].tableChartTabs;
			for (i in aTableTabs) {
				sVariantAnnotationPath = aTableTabs[i].variantAnnotationPath;
				if (sVariantAnnotationPath === oObject.annotationPath) {
					sChartAnnotationPath = aTableTabs[i].chartAbsolutePath;
					sChartActionsAnnotationPath = sChartAnnotationPath + '/Actions';
					oBindingContextPath = oMetaModel.createBindingContext(sChartActionsAnnotationPath);
					return oBindingContextPath;
				}
			}
		},

		checkIfChartNavigationIsEnabled: function(oItabItem, aSubPages, sEntitySetFromManifest) {
			var bTemp = oItabItem.showItemNavigationOnChart;
			if (!bTemp) {
				return false;
			}

			// Only one subpage is allowed in the list report that is why no loop over the aSubPages
			// only interne Navigation is supported so far for the Chart in List Report
				if (aSubPages && aSubPages[0] && aSubPages[0].entitySet === sEntitySetFromManifest && (!aSubPages[0].navigation || aSubPages[0].navigation && !aSubPages[0].navigation['display'])) { // check that the internal navigation is not overwritten by the external one
					return true;
				}
			
			return false;
		},

		/*
		 * for analytical table, grid table and tree table only
		 * applies if the document.body is in "sapUiSizeCompact" mode and condencedTableLayout mode in manifest/settings is set
		 */
		setSizeCondensedCssClass: function(bCondencedTableLayout) {
			var sCompactClass = "sapUiSizeCompact", sCondensedClass = "sapUiSizeCondensed", oBody;
			if (!bCondencedTableLayout) {
				return;
			}
			oBody = jQuery(document.body);
			if (oBody.hasClass(sCompactClass) ) {
				return sCondensedClass;
			}
		},

		/*
		 * for analytical table, grid table and tree table only
		 * in case of condensed mode, the wrapping of links will be set to false, because of flickering of the table!
		 */
		setLinkWrapping: function(bCondencedTableLayout) {
			var sCompactClass = "sapUiSizeCompact", oBody;
			if (!bCondencedTableLayout) {
				return true;
			}
			oBody = jQuery(document.body);
			if (oBody.hasClass(sCompactClass) && bCondencedTableLayout) {
				return false;
			} else {
				return true;
			}
		}
	};
	
	return AnnotationHelper;
}, /* bExport= */ true);
