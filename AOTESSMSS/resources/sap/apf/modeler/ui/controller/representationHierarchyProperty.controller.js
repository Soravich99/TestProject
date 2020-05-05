/*!
 * SAP APF Analysis Path Framework
 *
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.apf.core.constants");jQuery.sap.require("sap.apf.modeler.ui.utils.treeTableDisplayOptionsValueBuilder");jQuery.sap.require("sap.apf.modeler.ui.utils.textManipulator");sap.ui.define(["sap/apf/modeler/ui/controller/propertyType"],function(B){"use strict";var t=new sap.apf.modeler.ui.utils.TextManipulator();function _(e,c){var i;var s=c.oStepPropertyMetadataHandler.oStep.getService();var E=c.oStepPropertyMetadataHandler.oStep.getEntitySet();var h=c.oStepPropertyMetadataHandler.oStep.getHierarchyProperty();c.oConfigurationEditor.getHierarchyNodeIdAsPromise(s,E,h).done(function(n){i=c.oStepPropertyMetadataHandler.hasTextPropertyOfDimension(e,n);});return i;}return B.extend("sap.apf.modeler.ui.controller.representationHierarchyProperty",{onBeforeRendering:function(){var c=this;c.byId("idPropertyType").setEnabled(false);},setLabelDisplayOptionTypeAsPromise:function(o){var d=jQuery.Deferred();var a,l,m,L,c=this,b=[];a=new sap.apf.modeler.ui.utils.TreeTableDisplayOptionsValueBuilder(c.oTextReader,o);l=sap.apf.core.constants.representationMetadata.labelDisplayOptions;L=c.oRepresentation.getHierarchyPropertyLabelDisplayOption();m=a.getLabelDisplayOptions();c.oStepPropertyMetadataHandler.getEntityTypeMetadataAsPromise().done(function(e){if((L===l.TEXT)&&!_(e,c)){m=a.getValidatedLabelDisplayOptions();b=t.addPrefixText([L],c.oTextReader);L=b[0];}c.byId("idLabelDisplayOptionType").setModel(m);c.byId("idLabelDisplayOptionType").setSelectedKey(L);d.resolve();});return d.promise();},changeLabelDisplayOption:function(l){var c=this;c.oRepresentation.setHierarchyPropertyLabelDisplayOption(l);},getAllPropertiesAsPromise:function(){var c=this,s,p,h=[];var S=c.oStepPropertyMetadataHandler.oStep;var d=jQuery.Deferred();S.getConsumablePropertiesForRepresentation(c.oRepresentation.getId()).done(function(r){r.available.forEach(function(P){if(P===c.oStepPropertyMetadataHandler.getHierarchicalProperty()){h.push(P);}});s=c.getSelectedProperty();if(s!==undefined){p=h.indexOf(s)!==-1?h:h.concat(s);if(r.available.indexOf(s)!==-1){h=p;s=s;}else{h=h.concat(t.addPrefixText([s],c.oTextReader));s=t.addPrefixText([s],c.oTextReader)[0];}}d.resolve({aAllProperties:h,sSelectedKey:s});});return d.promise();},enableDisableLabelDisplayOptionTypeAsPromise:function(){var i,c=this;var d=jQuery.Deferred();var a=c.byId("idLabelDisplayOptionType");c.oStepPropertyMetadataHandler.getEntityTypeMetadataAsPromise().done(function(e){var I=_(e,c);for(i=0;i<a.getItems().length;i++){a.getItems()[i].setEnabled(true);if(i>0&&!I){a.getItems()[i].setEnabled(false);}}d.resolve();});return d.promise();},getPropertyTextLabelKey:function(){var c=this;return c.oRepresentation.getHierarchyPropertyTextLabelKey();},setPropertyTextLabelKey:function(p,l){var c=this;c.oRepresentation.setHierarchyPropertyTextLabelKey(l);},setNextPropertyInParentObject:function(){return;},removeAddedProperty:function(){return;},addRemovedProperty:function(){return;},removePropertyFromParentObject:function(){return;},setFocusOnRemoveIcons:function(){return;}});});
