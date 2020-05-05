/*!
 * SAP APF Analysis Path Framework
 * 
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare('sap.apf.modeler.ui.utils.textPoolHelper');jQuery.sap.require("sap.apf.modeler.ui.utils.optionsValueModelBuilder");(function(){'use strict';sap.apf.modeler.ui.utils.SuggestionTextHandler=function(t){this.oTextPool=t;};sap.apf.modeler.ui.utils.SuggestionTextHandler.prototype.manageSuggestions=function(e,s){var c=e.getSource();var o=new sap.apf.modeler.ui.utils.OptionsValueModelBuilder();var v=e.getParameter("suggestValue");var m=o.convert(s,s.length);var u=v.toUpperCase();var l=v.toLowerCase();var f=[new sap.ui.model.Filter("key",sap.ui.model.FilterOperator.Contains,u),new sap.ui.model.Filter("key",sap.ui.model.FilterOperator.Contains,l)];var F=new sap.ui.model.Filter(f,false);c.setModel(null);c.removeAllSuggestionItems();c.setModel(m);c.getBinding("suggestionItems").filter(F);};sap.apf.modeler.ui.utils.SuggestionTextHandler.prototype.manageSuggestionTexts=function(e,t){var s=[];var E=this.oTextPool.getTextsByTypeAndLength(t.TextElementType,t.MaximumLength);if(E.length!==0){E.forEach(function(o){s.push(o.TextElementDescription);});this.manageSuggestions(e,s);}};sap.apf.modeler.ui.utils.TranslationFormatMap={APPLICATION_TITLE:{TextElementType:"XTIT",MaximumLength:250},CATEGORY_TITLE:{TextElementType:"XTIT",MaximumLength:60},FACETFILTER_LABEL:{TextElementType:"XFLD",MaximumLength:50},STEP_TITLE:{TextElementType:"XTIT",MaximumLength:100},STEP_LONG_TITLE:{TextElementType:"XTIT",MaximumLength:200},STEP_CORNER_TEXT:{TextElementType:"XFLD",MaximumLength:25},REPRESENTATION_LABEL:{TextElementType:"XTIT",MaximumLength:80},REPRESENTATION_CORNER_TEXT:{TextElementType:"XFLD",MaximumLength:25},NAVTARGET_TITLE:{TextElementType:"XTIT",MaximumLength:200},STEPFILTERPROPERTY_LABEL:{TextElementType:"XTIT",MaximumLength:80}};}());
