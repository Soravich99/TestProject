(function(){"use strict";jQuery.sap.declare("sap.ovp.cards.CommonUtils");sap.ovp.cards.CommonUtils={app:undefined,navigationHandler:undefined,supportedCards:["sap.ovp.cards.list","sap.ovp.cards.table","sap.ovp.cards.stack","sap.ovp.cards.linklist","sap.ovp.cards.charts.analytical","sap.ovp.cards.charts.bubble","sap.ovp.cards.charts.donut","sap.ovp.cards.charts.line"],enable:function(a,n){this.app=a;this.navigationHandler=n;},getApp:function(){return this.app;},getNavigationHandler:function(){return this.navigationHandler;},createKeyForCB:function(t,T){return t.indexOf(T)+1;},errorHandlingForAPI:function(m,r,e){var E={};E.message=m;if(e){E._oError=e;E.getActualError=function(){return E._oError;};}jQuery.sap.log.error(E.message);r(E);},checkIfAPIIsUsed:function(c){var C=false;var o=c.getOwnerComponent();if(!!o){var a=o.getComponentData();if(!!a&&a.ovpCardsAsApi){C=true;}}return C;},recreateCard:function(c,C){var m=C.manifest;var s;for(var a in m.cards){s=a;}var o=m.cards[s];if(o.template==="sap.ovp.cards.charts.analytical"){o.settings.chartAnnotationPath=c.chartAnnotationPath;o.settings.navigation=c.navigation;}o.settings.annotationPath=c.annotationPath;o.settings.dynamicSubtitleAnnotationPath=c.dynamicSubtitleAnnotationPath;o.settings.presentationAnnotationPath=c.presentationAnnotationPath;o.settings.selectionAnnotationPath=c.selectionAnnotationPath;o.settings.selectionPresentationAnnotationPath=c.selectionPresentationAnnotationPath;o.settings.dataPointAnnotationPath=c.dataPointAnnotationPath;o.settings.identificationAnnotationPath=c.identificationAnnotationPath;o.settings.headerAnnotationPath=c.headerAnnotationPath;o.settings.selectedKey=c.selectedKey;if(o){m.cards[s]=o;sap.ovp.cards.CommonUtils.createCardComponent(C.parentView,m,C.containerId);}},createCardComponent:function(v,m,c){return new Promise(function(r,a){var C,b,M="";if(!!m){for(var d in m.cards){C=m.cards[d];b=d;}if(!!C&&!!b){if(!!C.template&&!!C.model&&!!C.settings){if(this.supportedCards.indexOf(C.template)!==-1){if(!!c&&typeof c==='string'){if(!!v){var o=v.getModel(C.model);var g=o.getMetaModel().loaded();g.then(function(){var e={async:true,name:C.template,componentData:{model:o,ovpCardsAsApi:true,parentView:v,manifest:m,containerId:c,showDateInRelativeFormat:m.showDateInRelativeFormat,disableTableCardFlexibility:m.disableTableCardFlexibility,template:C.template,i18n:null,cardId:b,settings:C.settings,appComponent:null,mainComponent:null}};sap.ui.component(e).then(function(f){var h=v.byId(c);if(!!h){var O=h.getComponentInstance();f.setModel(o);h.setComponent(f);if(O){setTimeout(function(){O.destroy();},0);}r(true);}else{M="Component Container '"+c+"' is not present in the current View";this.errorHandlingForAPI(M,a);}}.bind(this),function(E){M="Component creation failed";this.errorHandlingForAPI(M,a,E);}.bind(this));}.bind(this),function(e){M="MetaModel was not loaded";this.errorHandlingForAPI(M,a,e);}.bind(this));}else{M="First argument oView is null";this.errorHandlingForAPI(M,a);}}else{M="ContainerId should be of type string and not null";this.errorHandlingForAPI(M,a);}}else{M=C.template+" card type is not supported in the API";this.errorHandlingForAPI(M,a);}}else{M="Cards template or model or settings are not defined";this.errorHandlingForAPI(M,a);}}else{M="Cards manifest entry or cardId is null";this.errorHandlingForAPI(M,a);}}else{M="Second argument oManifest is null";this.errorHandlingForAPI(M,a);}}.bind(this));},getUnitColumn:function(m,e){var t,p=e.property;for(var i=0,l=p.length;i<l;i++){if(p[i].name==m){if(p[i].hasOwnProperty("Org.OData.Measures.V1.ISOCurrency")){return p[i]["Org.OData.Measures.V1.ISOCurrency"].Path?p[i]["Org.OData.Measures.V1.ISOCurrency"].Path:p[i]["Org.OData.Measures.V1.ISOCurrency"].String;}else if(p[i].hasOwnProperty("Org.OData.Measures.V1.Unit")){t=p[i]["Org.OData.Measures.V1.Unit"].Path?p[i]["Org.OData.Measures.V1.Unit"].Path:p[i]["Org.OData.Measures.V1.Unit"].String;if(t&&t!="%"){return t;}else{return null;}}else if(p[i].hasOwnProperty("sap:unit")){return p[i]["sap:unit"];}break;}}return null;},onHeaderClicked:function(){},onContentClicked:function(e){},getContentDensityClass:function(){if(this._sContentDensityClass===undefined){if(jQuery(document.body).hasClass("sapUiSizeCozy")||jQuery(document.body).hasClass("sapUiSizeCompact")){if(jQuery(document.body).hasClass("sapUiSizeCozy")===true){this._sContentDensityClass="sapUiSizeCozy";}else if(jQuery(document.body).hasClass("sapUiSizeCompact")===true){this._sContentDensityClass="sapUiSizeCompact";}else{this._sContentDensityClass="";}}else if(!sap.ui.Device.support.touch){this._sContentDensityClass="sapUiSizeCompact";}else{this._sContentDensityClass="sapUiSizeCozy";}}return this._sContentDensityClass;},_setCardpropertyDensityAttribute:function(){var c=this.getContentDensityClass();if(c==="sapUiSizeCompact"){return"compact";}else if(c==="sapUiSizeCozy"){return"cozy";}else if(!sap.ui.Device.support.touch){return"compact";}else{return"cozy";}},getPixelPerRem:function(){var f=parseFloat(getComputedStyle(document.documentElement).fontSize);return f;},showODataErrorMessages:function(e){var m=[],E,r,a="";if(e&&e.responseText){var R=e.responseText;if(R){try{r=JSON.parse(R);}catch(b){jQuery.sap.log.error("Failed parsing response as JSON: "+R);}if(r&&r.error){E=r.error;}}}if(E&&E.innererror&&E.innererror.errordetails){m=E.innererror.errordetails;}if(E&&E.message&&jQuery.isArray(m)){m.unshift({message:E.message.value,severity:"error"});}if(m&&m.length>0){var A={};jQuery.each(m,function(i,M){var s=M.message;if(jQuery.sap.endsWith(s,".")){s=s.substr(0,s.length-1);}if(!A[s]){A[s]=true;a=a+s+" ";}});}return a;}};}());
