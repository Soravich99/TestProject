/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/fl/LrepConnector","sap/ui/fl/Cache","sap/ui/fl/Utils","sap/ui/base/EventProvider"],function(q,L,C,U,E){"use strict";var S=function(s){E.apply(this);if(!s){throw new Error("no flex settings provided");}if(!s.defaultLayerPermissions){s.defaultLayerPermissions={"VENDOR":true,"CUSTOMER_BASE":true,"CUSTOMER":true,"USER":false};}if(!s.developerModeLayerPermissions){s.developerModeLayerPermissions={"VENDOR":true,"CUSTOMER_BASE":true,"CUSTOMER":false,"USER":false};}if(!(S._IS_VARIANT_SHARING_ENABLED in s)){s.isVariantSharingEnabled=true;}this._oSettings=s;this._hasMergeErrorOccured=false;};S.prototype=q.sap.newObject(E.prototype);S.events={flexibilityAdaptationButtonAllowedChanged:"flexibilityAdaptationButtonAllowedChanged",changeModeUpdated:"changeModeUpdated"};S._instance=undefined;S._bFlexChangeMode=true;S._bFlexibilityAdaptationButtonAllowed=false;S._oEventProvider=new E();S._IS_VARIANT_SHARING_ENABLED="isVariantSharingEnabled";S.fireEvent=function(e,p){S._oEventProvider.fireEvent(e,p);};S.attachEvent=function(e,c){S._oEventProvider.attachEvent(e,c);};S.detachEvent=function(e,c){S._oEventProvider.detachEvent(e,c);};S.getInstance=function(){if(S._instance){return Promise.resolve(S._instance);}var p=C.getFlexDataPromise();if(p){return p.then(function(f){var s={};if(f.changes&&f.changes.settings){s=f.changes.settings;}return S._storeInstance(s);},function(){return S._loadSettings();});}return S._loadSettings();};S._loadSettings=function(){return L.createConnector().loadSettings().then(function(s){return S._storeInstance(s);});};S._storeInstance=function(s){if(!S._instance){S._instance=new S(s);}return S._instance;};S.getInstanceOrUndef=function(){var s;if(S._instance){s=S._instance;}return s;};S.isFlexChangeMode=function(){var f=this._isFlexChangeModeFromUrl();if(f!==undefined){return f;}return S._bFlexChangeMode;};S._isFlexChangeModeFromUrl=function(){var f;var u=q.sap.getUriParameters();if(u&&u.mParams&&u.mParams['sap-ui-fl-changeMode']&&u.mParams['sap-ui-fl-changeMode'][0]){if(u.mParams['sap-ui-fl-changeMode'][0]==='true'){f=true;}else if(u.mParams['sap-ui-fl-changeMode'][0]==='false'){f=false;}}return f;};S.activateFlexChangeMode=function(){var f=true;S._setFlexChangeMode(f);};S.leaveFlexChangeMode=function(){var f=false;S._setFlexChangeMode(f);};S._setFlexChangeMode=function(f){if(S._bFlexChangeMode===f){return;}S._bFlexChangeMode=f;var p={bFlexChangeMode:f};S.fireEvent(S.events.changeModeUpdated,p);};S.isFlexibilityAdaptationButtonAllowed=function(){return S._bFlexibilityAdaptationButtonAllowed;};S.allowFlexibilityAdaptationButton=function(){var f=true;S.setFlexibilityAdaptationButtonAllowed(f);};S.disallowFlexibilityAdaptationButton=function(){var f=false;S.setFlexibilityAdaptationButtonAllowed(f);};S.setFlexibilityAdaptationButtonAllowed=function(f){if(S._bFlexibilityAdaptationButtonAllowed===f){return;}S._bFlexibilityAdaptationButtonAllowed=f;var p={bFlexibilityAdaptationButtonAllowed:f};S.fireEvent(S.events.flexibilityAdaptationButtonAllowedChanged,p);};S.prototype.isKeyUser=function(){var i=false;if(this._oSettings.isKeyUser){i=this._oSettings.isKeyUser;}return i;};S.prototype.isModelS=function(){var i=false;if(this._oSettings.isAtoAvailable){i=this._oSettings.isAtoAvailable;}return i;};S.prototype.isAtoEnabled=function(){var i=false;if(this._oSettings.isAtoEnabled){i=this._oSettings.isAtoEnabled;}return i;};S.prototype.isAtoAvailable=function(){var i=false;if(this._oSettings.isAtoAvailable){i=this._oSettings.isAtoAvailable;}return i;};S.prototype.isProductiveSystem=function(){var i=false;if(this._oSettings.isProductiveSystem){i=this._oSettings.isProductiveSystem;}return i;};S.prototype.isVariantSharingEnabled=function(){return(this._oSettings.isVariantSharingEnabled===true);};S.prototype.setMergeErrorOccured=function(e){this._hasMergeErrorOccoured=e;};S.prototype.hasMergeErrorOccured=function(){return this._hasMergeErrorOccured;};S.prototype.getDefaultLayerPermissions=function(){return this._oSettings.defaultLayerPermissions;};S.prototype.getDeveloperModeLayerPermissions=function(){return this._oSettings.developerModeLayerPermissions;};return S;},true);
