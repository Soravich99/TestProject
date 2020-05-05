/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["sap/ui/fl/Utils", "sap/ui/base/ManagedObject"], function(Utils, ManagedObject) {

	"use strict";

	return {
		/** Function determining the control targeted by the change.
		* The function differs between local ids generated starting with 1.40 and the global ids generated in previous versions.
		*
		* @param {object} oSelector - Target of a flexiblity change
		* @param {string} oSelector.id - id of the control targeted by the change
		* @param {boolean} oSelector.isLocalId - true if the id within the selector is a local id or a global id
		* @param {sap.ui.core.UIComponent} oAppComponent
		* @param {object} mAdditionalSelectorInformation additional mapped data which is added to the selector
		* @param {Element} oView - For XML processing only: XML node of the view
		* @returns {sap.ui.core.Control|Element} - Control targeted within the selector
		* @throws {Exception} oException - in case no control could be determined an error is thrown
		* @public
		*/
		bySelector: function (oSelector, oAppComponent, oView) {
		   var sControlId = this.getControlIdBySelector(oSelector, oAppComponent);
		   return this._byId(sControlId, oView);
		},

		/** Function determining the control id from selector.
		* The function differs between local ids generated starting with 1.40 and the global ids generated in previous versions.
		*
		* @param {object} oSelector - Target of a flexiblity change
		* @param {string} oSelector.id - id of the control targeted by the change
		* @param {boolean} oSelector.isLocalId - true if the id within the selector is a local id or a global id
		* @param {sap.ui.core.UIComponent} oAppComponent
		* @returns {sap.ui.core.Control} - control targeted within the selector
		* @throws {Exception} oException - in case no control could be determined an error is thrown
		* @public
		*/
		getControlIdBySelector: function (oSelector, oAppComponent) {
			if (!oSelector){
				return undefined;
			}

		   if (typeof oSelector === "string") {
		      oSelector = {
		         id: oSelector
		      };
		   }

		   var sControlId = oSelector.id;

		   if (oSelector.idIsLocal) {
		      if (oAppComponent) {
		         sControlId = oAppComponent.createId(sControlId);
		      } else {
		         throw new Error("App Component instance needed to get a control's id from selector");
		      }
		   } else {
		      // does nothing except in the case of a FLP prefix
		      var pattern = /^application-[^-]*-[^-]*-component---/igm;
		      var bHasFlpPrefix = !!pattern.exec(oSelector.id);
		      if (bHasFlpPrefix) {
		         sControlId = sControlId.replace(/^application-[^-]*-[^-]*-component---/g, "");
		         if (oAppComponent) {
		            sControlId = oAppComponent.createId(sControlId);
		         } else {
		            throw new Error("App Component instance needed to get a control's id from selector");
		         }
		      }
		   }

		   return sControlId;
		},


		/** Function for determining the selector later used to apply a change for a given control.
		 * The function differs between local ids generated starting with 1.40 and the global ids generated in previous versions.
		 *
		 * @param {sap.ui.core.Control | string} vControl - control or id string for which the selector should be determined
		 * @param {object} mAdditionalSelectorInformation additional mapped data which is added to the selector
		 * @param {sap.ui.core.Component} (optional) oAppComponent application component, needed only if vControl is a string or XML Node
		 * @returns {object} - oSelector
		 * @returns {string} - oSelector.id id used for determination of the flexibility target
		 * @returns {boolean} - oSelector.idIsLocal flag if the selector.id has to be concatenated with the application component id
		 * while applying the change.
		 * @throws {Exception} oException - in case no control could be determined an error is thrown
		 * @public
		 */
		getSelector: function (vControl, oAppComponent, mAdditionalSelectorInformation) {
			var sControlId = vControl;
			if (vControl instanceof ManagedObject) {
				sControlId = vControl.getId();
			} else {
				if (!oAppComponent) {
					throw new Error("App Component instance needed to get a selector from string id");
				}
			}

			if (mAdditionalSelectorInformation && (mAdditionalSelectorInformation.id || mAdditionalSelectorInformation.idIsLocal)) {
				throw new Error("A selector of control with the id '" + sControlId + "' was requested, " +
					"but core properties were overwritten by the additionally passed information.");
			}

			var bValidId = Utils.checkControlId(vControl, oAppComponent);

			if (!bValidId) {
				throw new Error("Generated id attribute found - to offer flexibility a stable control id is needed to assign the changes to, but for this control the id was generated by SAPUI5 " + sControlId);
			}

			var oSelector = jQuery.extend(mAdditionalSelectorInformation || {}, {
				id: "",
				idIsLocal: false
			}, true);


			if (Utils.hasLocalIdSuffix(vControl, oAppComponent)) {
				// get local Id for control at root component and use it as selector id
				var sLocalId = oAppComponent.getLocalId(sControlId);
				oSelector.id = sLocalId;
				oSelector.idIsLocal = true;
			} else {
				oSelector.id = sControlId;
			}

			return oSelector;
		}
	};
});

