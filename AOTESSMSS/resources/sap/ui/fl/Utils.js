/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Component"],function(q,C){"use strict";var l=["VENDOR","PARTNER","CUSTOMER_BASE","CUSTOMER","USER"];var L={};l.forEach(function(s,i){L[s]=i;});var U={_aLayers:l,_mLayersIndex:L,_sTopLayer:l[l.length-1],_sMaxLayer:l[l.length-1],DEFAULT_APP_VERSION:"DEFAULT_APP_VERSION",APP_ID_AT_DESIGN_TIME:"${pro"+"ject.art"+"ifactId}",log:{error:function(m,d,c){q.sap.log.error(m,d,c);},warning:function(m,d,c){q.sap.log.warning(m,d,c);},debug:function(m,d,c){q.sap.log.debug(m,d,c);}},getXSRFTokenFromControl:function(c){var m;if(!c){return"";}if(c&&typeof c.getModel==="function"){m=c.getModel();return U._getXSRFTokenFromModel(m);}return"";},_getXSRFTokenFromModel:function(m){var h;if(!m){return"";}if(typeof m.getHeaders==="function"){h=m.getHeaders();if(h){return h["x-csrf-token"];}}return"";},getComponentClassName:function(c){var a;if(c){a=this.getAppComponentForControl(c);if(a){var v=this._getComponentStartUpParameter(a,"sap-app-id");if(v){return v;}if(a.getManifestEntry("sap.ui5")&&a.getManifestEntry("sap.ui5").appVariantId){return a.getManifestEntry("sap.ui5").appVariantId;}}}return U.getComponentName(a);},isVariantByStartupParameter:function(c){if(c){var a=this.getAppComponentForControl(c);if(a){return!!this._getComponentStartUpParameter(a,"sap-app-id");}}return false;},getAppComponentClassNameForComponent:function(c){return U.getComponentClassName(c);},getAppDescriptor:function(c){var m=null,o=null,a=null;if(c){o=this.getAppComponentForControl(c);if(o&&o.getMetadata){a=o.getMetadata();if(a&&a.getManifest){m=a.getManifest();}}}return m;},getSiteId:function(c){var s=null,o=null;if(c){o=this.getAppComponentForControl(c);if(o){s=this._getComponentStartUpParameter(o,"hcpApplicationId");}}return s;},getSiteIdByComponentData:function(c){var s=null;s=this._getStartUpParameter(c,"hcpApplicationId");return s;},isAppVariantMode:function(c){return(U.isVendorLayer()&&U.isApplicationVariant(c));},isBinding:function(p){var i=false;if(p&&typeof p==="string"&&p.substring(0,1)==="{"&&p.slice(-1)==="}"){i=true;}return i;},isVendorLayer:function(){if(U.getCurrentLayer(false)==="VENDOR"){return true;}return false;},isApplicationVariant:function(c){var f=U.getComponentClassName(c);var a=U.getAppComponentForControl(c);var s=U.getComponentName(a);return f!==s;},setMaxLayerParameter:function(m){this._sMaxLayer=m||this._sTopLayer;},getLayerIndex:function(s){return this._mLayersIndex[s];},isOverMaxLayer:function(s){return(this.getLayerIndex(s)>this.getLayerIndex(this._sMaxLayer));},isLayerAboveCurrentLayer:function(s){var c=U.getCurrentLayer(false);if(this.getLayerIndex(c)>this.getLayerIndex(s)){return-1;}else if(this.getLayerIndex(c)===this.getLayerIndex(s)){return 0;}else{return 1;}},isLayerFilteringRequired:function(){return!(this._sTopLayer===this._sMaxLayer);},_getComponentStartUpParameter:function(c,p){var s=null;if(p){if(c&&c.getComponentData){s=this._getStartUpParameter(c.getComponentData(),p);}}return s;},_getStartUpParameter:function(c,p){if(c&&c.startupParameters&&p){if(q.isArray(c.startupParameters[p])){return c.startupParameters[p][0];}}},getComponentName:function(c){var s="";if(c){s=c.getMetadata().getName();}if(s.length>0&&s.indexOf(".Component")<0){s+=".Component";}return s;},_getComponent:function(c){var o;if(c){o=sap.ui.getCore().getComponent(c);}return o;},_getComponentIdForControl:function(c){var s="",i=0;do{i++;s=U._getOwnerIdForControl(c);if(s){return s;}if(c&&typeof c.getParent==="function"){c=c.getParent();}else{return"";}}while(c&&i<100);return"";},getComponentForControl:function(c){return U._getComponentForControl(c);},getAppComponentForControl:function(c){var o;if(c instanceof sap.ui.core.Component){o=c;}else{o=this._getComponentForControl(c);}return this._getAppComponentForComponent(o);},_getComponentForControl:function(c){var o=null;var s=null;if(c){s=U._getComponentIdForControl(c);if(s){o=U._getComponent(s);}}return o;},_getAppComponentForComponent:function(c){var s=null;if(c&&c.getAppComponent){return c.getAppComponent();}if(c&&c.oComponentData&&c.oComponentData.appComponent){return c.oComponentData.appComponent;}if(c&&c.getManifestEntry){s=c.getManifestEntry("sap.app");}else{return c;}if(s&&s.type&&s.type!=="application"){if(c instanceof sap.ui.core.Component){c=this._getComponentForControl(c);}return this.getAppComponentForControl(c);}return c;},getViewForControl:function(c){return U.getFirstAncestorOfControlWithControlType(c,sap.ui.core.mvc.View);},getFirstAncestorOfControlWithControlType:function(c,a){if(c instanceof a){return c;}if(c&&typeof c.getParent==="function"){c=c.getParent();return U.getFirstAncestorOfControlWithControlType(c,a);}},hasControlAncestorWithId:function(c,a){var o;if(c===a){return true;}o=sap.ui.getCore().byId(c);while(o){if(o.getId()===a){return true;}if(typeof o.getParent==="function"){o=o.getParent();}else{return false;}}return false;},_isView:function(c){return c instanceof sap.ui.core.mvc.View;},_getOwnerIdForControl:function(c){return C.getOwnerIdFor(c);},getCurrentLayer:function(i){var u,a;if(i){return"USER";}u=this._getUriParameters();a=u.mParams["sap-ui-layer"];if(a&&a.length>0){return a[0];}return"CUSTOMER";},doesSharedVariantRequirePackage:function(){var c;c=U.getCurrentLayer(false);if((c==="VENDOR")||(c==="PARTNER")||(c==="CUSTOMER_BASE")){return true;}return false;},getClient:function(){var u,c;u=this._getUriParameters();c=u.mParams["sap-client"];if(c&&c.length>0){return c[0];}return undefined;},_getUriParameters:function(){return q.sap.getUriParameters();},isHotfixMode:function(){var u,i,I;u=this._getUriParameters();i=u.mParams["hotfix"];if(i&&i.length>0){I=i[0];}return(I==="true");},convertBrowserLanguageToISO639_1:function(b){if(!b||typeof b!=="string"){return"";}var n=b.indexOf("-");if((n<0)&&(b.length<=2)){return b.toUpperCase();}if(n>0&&n<=2){return b.substring(0,n).toUpperCase();}return"";},getCurrentLanguage:function(){var s=sap.ui.getCore().getConfiguration().getLanguage();return U.convertBrowserLanguageToISO639_1(s);},getControlType:function(c){var m;if(c&&typeof c.getMetadata==="function"){m=c.getMetadata();if(m&&typeof m.getElementName==="function"){return m.getElementName();}}},asciiToString:function(a){var b=a.split(",");var p="";q.each(b,function(i,c){p+=String.fromCharCode(c);});return p;},stringToAscii:function(s){var a="";for(var i=0;i<s.length;i++){a+=s.charCodeAt(i)+",";}a=a.substring(0,a.length-1);return a;},_fnCheckElementIsNoClone:function(e){var E=true;if(e.getBindingContext&&e.getBindingContext()){var b=e.getBindingContext().getPath().split("/");var s=b[b.length-1];E=isNaN(s);}return E;},checkControlId:function(c,a,s){var b=c instanceof sap.ui.base.ManagedObject?c.getId():c;if(!a){c=c instanceof sap.ui.base.ManagedObject?c:sap.ui.getCore().byId(b);a=U.getAppComponentForControl(c);}var i=sap.ui.base.ManagedObjectMetadata.isGeneratedId(b);if(!i||this.hasLocalIdSuffix(c,a)){return true;}else{var h=b.indexOf("--")!==-1;if(!s&&!h&&this._fnCheckElementIsNoClone(c)){this.log.warning("Generated id attribute found, to offer flexibility a stable control id is needed "+"to assign the changes to, but for this control the id was generated by SAPUI5",b);}return false;}},hasLocalIdSuffix:function(c,a){var s=(c instanceof sap.ui.base.ManagedObject)?c.getId():c;if(!a){this.log.error("determination of a local id suffix failed due to missing app component for "+s);return false;}return!!a.getLocalId(s);},_getAllUrlParameters:function(){return window.location.search.substring(1);},isDebugEnabled:function(){if(sap.ui.getCore().getConfiguration().getDebug()){return true;}var d=window["sap-ui-debug"]||"";var D=d.split(",");return D.indexOf("sap.ui.fl")!==-1;},getUrlParameter:function(p){return q.sap.getUriParameters().get(p);},createDefaultFileName:function(n){var f=q.sap.uid().replace(/-/g,"_");if(n){f+='_'+n;}return f;},createNamespace:function(p,s){var r=p.reference.replace('.Component','');var n='apps/'+r+"/"+s+"/";return n;},isApplication:function(m){return(m&&m.getEntry("sap.app")&&m.getEntry("sap.app").type==="application");},getFlexReference:function(m){if(m){if(m.getEntry("sap.ui5")){if(m.getEntry("sap.ui5").appVariantId){return m.getEntry("sap.ui5").appVariantId;}if(m.getEntry("sap.ui5").componentName){return m.getEntry("sap.ui5").componentName+".Component";}}if(m.getEntry("sap.app")&&m.getEntry("sap.app").id){var a=m.getEntry("sap.app").id;if(a===U.APP_ID_AT_DESIGN_TIME&&m.getComponentName){a=m.getComponentName();}return a+".Component";}}this.log.warning("No Manifest received.");return"";},getAppVersionFromManifest:function(m){var v="";if(m){var s=(m.getEntry)?m.getEntry("sap.app"):m["sap.app"];if(s&&s.applicationVersion&&s.applicationVersion.version){v=s.applicationVersion.version;}}else{this.log.warning("No Manifest received.");}return v;},isCustomerDependentLayer:function(s){return(["CUSTOMER","CUSTOMER_BASE"].indexOf(s)>-1);},execPromiseQueueSequentially:function(p,a){if(p.length===0){if(a){return Promise.resolve();}return new U.FakePromise();}var P=p.shift();if(typeof P==="function"){var r=P();return r.then(function(){if(!a&&r instanceof Promise){a=true;}}).catch(function(e){this.log.error("Error during execPromiseQueueSequentially processing occured: "+(e&&e.message));}.bind(this)).then(function(){return this.execPromiseQueueSequentially(p,a);}.bind(this));}else{this.log.error("Changes could not be applied, promise not wrapped inside function.");return this.execPromiseQueueSequentially(p,a);}},FakePromise:function(i,e){this.vValue=i;this.vError=e;U.FakePromise.prototype.then=function(f){if(!this.vError){try{this.vValue=f(this.vValue,true);}catch(E){this.vError=E;this.vValue=null;return this;}if(this.vValue instanceof Promise){return this.vValue;}}return this;};U.FakePromise.prototype.catch=function(f){if(this.vError){this.vValue=f(this.vError,true);this.vError=null;if(this.vValue instanceof Promise){return this.vValue;}}return this;};if(this.vValue instanceof Promise){return this.vValue;}},getChangeFromChangesMap:function(c,s){var r;Object.keys(c).forEach(function(a){c[a].some(function(o){if(o.getId()===s){r=o;return true;}});});return r;}};return U;},true);
