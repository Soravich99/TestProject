/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var C={};C.createBasicColumnTemplate=function(l,a,t,b){if(!t){t=l;}if(!b){b=a;}var c=new sap.m.Text({wrapping:false});c.bindProperty("text",{path:l,formatter:a});c.bindProperty("tooltip",{path:t,formatter:b});return c;};C.createTreeColumnTemplate=function(){var i=new sap.ui.core.Icon({decorative:false,src:"{iconUrl}",color:"{iconColor}",tooltip:"{iconTooltip}"});i.addStyleClass("sapUiVtmTree_TreeColumn_Icon");i.bindProperty("visible",{path:"iconUrl",formatter:function(b){return b?true:false;}});var n=new sap.ui.vtm.Text({wrapping:false,text:"{name}",tooltip:"{name}",textColor:"{textColor}"});n.addStyleClass("sapUiVtmTree_TreeColumn_NameText");var a=new sap.m.HBox({items:[i,n],alignContent:sap.m.FlexAlignContent.Center,alignItems:sap.m.FlexAlignItems.Center});return a;};C.createMessageStatusColumnTemplate=function(){var m=new sap.ui.core.Icon({decorative:false,useIconTooltip:false,src:"{messageStatusIconUrl}",color:"{messageStatusIconColor}",tooltip:"{messageStatusIconTooltip}"});return m;};C.createVisibilityColumnTemplate=function(){var r=sap.ui.vtm.getResourceBundle();var c=r.getText("COLUMNCELLTOOLTIP_VISIBILITY_CLICK_TO_SHOW");var a=r.getText("COLUMNCELLTOOLTIP_VISIBILITY_CLICK_TO_HIDE");var b=new sap.ui.vk.CheckEye();b.bindProperty("tooltip",{path:"",formatter:function(t){if(!t||t.visibility==null){return null;}return t.visibility?a:c;}});b.bindProperty("checked",{path:"visibility",mode:sap.ui.model.BindingMode.OneWay});b.bindProperty("visible",{path:"",formatter:function(t){if(!t){return false;}return t.visibility===true||t.visibility===false;}});return b;};C.createTreeItemIdColumnTemplate=function(){return C.createBasicColumnTemplate("id");};C._formatValue=function(v){if(v==undefined||v===null){return null;}switch(typeof v){case"string":return v;case"number":return v.toLocaleString();case"boolean":if(!C._true||!C._false){var r=sap.ui.vtm.getResourceBundle();C._trueString=r.getText("BOOLEAN_TRUE");C._falseString=r.getText("BOOLEAN_FALSE");}return v?C._trueString:C._falseString;default:return JSON.stringify(v);}};C.metadataFormatterFactory=function(d,v){return function(t){if(!t||!t.metadata){return null;}var a=sap.ui.vtm.ArrayUtilities.wrap(t.metadata[d]);var f=a.map(C._formatValue);return f.join(v);};};C.createMetadataColumnTemplate=function(c){var l=c.getValueFormatter()||C.metadataFormatterFactory(c.getDescriptor(),", ");var t=c.getTooltipFormatter()||C.metadataFormatterFactory(c.getDescriptor(),"\n");return C.createBasicColumnTemplate("",l,"",t);};C.identifierFormatterFactory=function(d,v){return function(t){if(!t||!t.identifiers){return null;}var a=t.identifiers[d];return(a instanceof Array)?a.join(v):a;};};C.createIdentifierColumnTemplate=function(c){var l=c.getValueFormatter()||C.identifierFormatterFactory(c.getDescriptor(),", ");var t=c.getTooltipFormatter()||C.identifierFormatterFactory(c.getDescriptor(),"\n");return C.createBasicColumnTemplate("",l,"",t);};C.appDataFormatterFactory=function(d,v){return function(t){if(!t||!t.appData){return null;}var a=sap.ui.vtm.ArrayUtilities.wrap(t.appData[d]);var f=a.map(C._formatValue);return f.join(v);};};C.createAppDataColumnTemplate=function(c){var l=c.getValueFormatter()||C.appDataFormatterFactory(c.getDescriptor(),", ");var t=c.getTooltipFormatter()||C.appDataFormatterFactory(c.getDescriptor(),"\n");return C.createBasicColumnTemplate("",l,"",t);};C.matrixFormatterFactory=function(c,a){return function(m){if(!m){return null;}var b=sap.ui.vtm.MatrixUtilities.getMatrixComponentNames();var p=m.map(function(d,i){var e=d.toLocaleString();return q.sap.formatMessage(c,[b[i],e]);});return p.join(a);};};C.createAbsoluteMatrixColumnTemplate=function(){return C.createBasicColumnTemplate("absoluteMatrix",C.matrixFormatterFactory("{1}"," "),"absoluteMatrix",C.matrixFormatterFactory("{0}:\t{1}","\n"));};C.createRelativeMatrixColumnTemplate=function(){return C.createBasicColumnTemplate("relativeMatrix",C.matrixFormatterFactory("{1}"," "),"relativeMatrix",C.matrixFormatterFactory("{0}:\t{1}","\n"));};C.createSceneNodeIdsColumnTemplate=function(){var f=function(t){if(!t){return null;}return sap.ui.vtm.TreeItemUtilities.getSceneNodeIds(t).join(", ");};return C.createBasicColumnTemplate("",f);};C.createOpacityColumnTemplate=function(){var f=function(t){if(!t||t.opacity===undefined||t.opacity===null){return null;}return""+t.opacity*100+"%";};return C.createBasicColumnTemplate("",f);};C.createHighlightColorColumnTemplate=function(){var f=function(t){if(!t||t.highlightColor===undefined||t.sceneHighlightColor===null){return null;}return t.highlightColor;};return C.createBasicColumnTemplate("",f);};return C;},true);
