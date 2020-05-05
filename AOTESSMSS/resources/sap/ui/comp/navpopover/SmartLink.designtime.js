/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2017 SAP SE. All rights reserved
	
 */
sap.ui.define(['./RTAHandler','sap/m/ObjectIdentifier'],function(R,O){"use strict";(function(){O.getMetadata().loadDesignTime().then(function(d){if(d.registerSettingsHandler){d.registerSettingsHandler({getStableElements:function(o){var n;o.fireEvent("ObjectIdentifier.designtime",{caller:"ObjectIdentifier.designtime",registerNavigationPopoverHandler:function(N){n=N;}});return R.getStableElements(n);},isSettingsAvailable:function(){return R.isSettingsAvailable();},execute:function(o,g){var n;o.fireEvent("ObjectIdentifier.designtime",{caller:"ObjectIdentifier.designtime",registerNavigationPopoverHandler:function(N){n=N;}});return R.execute(n,g);}});}});})();return{getStableElements:function(s){return R.getStableElements(s.getNavigationPopoverHandler());},actions:{settings:function(){if(!R.isSettingsAvailable()){jQuery.sap.log.error("sap.ui.comp.navpopover.SmartLink.designtime: 'settings' action is not available");return;}return{handler:function(s,p){return R.execute(s.getNavigationPopoverHandler(),p.getUnsavedChanges,p.styleClass);}};}},annotations:{semanticObjectMapping:{namespace:"com.sap.vocabularies.Common.v1",annotation:"SemanticObjectMapping",target:["Property"],defaultValue:null,appliesTo:["text"],group:["Behavior"],since:"1.48.0"},contact:{namespace:"com.sap.vocabularies.Communication.v1",annotation:"Contact",target:["EntityType"],defaultValue:null,appliesTo:["text","label","value"],group:["Behavior"],since:"1.40.1"}},properties:{semanticObject:{ignore:true},additionalSemanticObjects:{ignore:true},semanticObjectController:{ignore:true},fieldName:{ignore:true},semanticObjectLabel:{ignore:true},createControlCallback:{ignore:true},mapFieldToSemanticObject:{ignore:true},contactAnnotationPath:{ignore:false},ignoreLinkRendering:{ignore:true},enableAvailableActionsPersonalization:{ignore:false},uom:{ignore:true},enabled:{ignore:false}},customData:{}};},false);
