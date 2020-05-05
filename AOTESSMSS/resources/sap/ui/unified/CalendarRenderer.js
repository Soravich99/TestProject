/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={};C.render=function(r,c){c._iMode=0;var I=c.getId();var t=c.getTooltip_AsString();var m=c.getAggregation("month");var w=c.getWidth();r.write("<div");r.writeControlData(c);r.addClass("sapUiCal");if(m.length>1){r.addClass("sapUiCalMulti");}r.writeAttribute("tabindex","-1");var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified");var A={labelledby:{value:"",append:false}};if(c._bPoupupMode){A["role"]="dialog";}r.writeAccessibilityState(c,A);if(t){r.writeAttributeEscaped('title',t);}if(w){r.addClass("sapUiCalWidth");r.addStyle("width",w);r.writeStyles();}if(c._getSecondaryCalendarType()){r.addClass("sapUiCalSecType");}if(this.addAttributes){this.addAttributes(r,c);}r.writeClasses();r.write(">");var h=c.getAggregation("header");r.renderControl(h);r.write("<div id=\""+I+"-content\" class=\"sapUiCalContent\">");for(var i=0;i<m.length;i++){var M=m[i];r.renderControl(M);}this.renderCalContentOverlay(r,c,I);if(!c._bNamesLengthChecked){var o=c.getAggregation("monthPicker");r.renderControl(o);}r.write("</div>");r.write("<button id=\""+I+"-cancel\" class=\"sapUiCalCancel\" tabindex=\"-1\">");r.write(a.getText("CALENDAR_CANCEL"));r.write("</button>");r.write("<div id=\""+I+"-end\" tabindex=\"0\" style=\"width:0;height:0;position:absolute;right:0;bottom:0;\"></div>");this.renderCalContentAndArrowsOverlay(r,c,I);r.write("</div>");};C.renderCalContentOverlay=function(r,c,i){r.write("<div id=\""+i+"-contentOver\" class=\"sapUiCalContentOver\" style=\"display:none;\"></div>");};C.renderCalContentAndArrowsOverlay=function(r,c,i){};return C;},true);
