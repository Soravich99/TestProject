/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(["jquery.sap.global","sap/m/library"],function(q,M){"use strict";var I={};I.render=function(r,c){if(!c._bThemeApplied){return;}var n=c._iVisiblePointsCount,a=100/n;r.write("<div");r.writeControlData(c);r.addClass("sapSuiteILC");r.writeClasses();var A={};A.role="listbox";A.multiselectable=true;A.disabled=!c._isChartEnabled();A.labelledby=c.getAriaLabelledBy();A.describedby=this._getAriaDescribedBy(c,n);r.writeAccessibilityState(c,A);if(!c._isChartEnabled()){var s=c.getTooltip_AsString();if(q.type(s)==="string"){r.writeAttributeEscaped("title",s);}}r.write(">");if(!c.getSelectionEnabled()){this._renderDisabledOverlay(r,c);}this._renderChartCanvas(r,c,n,a);r.write("<div");r.addClass("sapSuiteILCBottomLabelArea");if(c._fNormalizedZero){r.addClass("sapSuiteILCBottomLabelAreaNoDivider");}r.writeClasses();r.write(">");r.write("</div>");r.write("<div");r.addClass("sapSuiteILCInteraction");r.writeClasses();r.write(">");for(var i=0;i<n;i++){this._renderPoint(r,c,i,n,a);}r.write("</div>");r.write("</div>");};I._renderPoint=function(r,c,i,p,a){var P=c.getPoints()[i];r.write("<div");r.writeAttributeEscaped("id",c.getId()+"-point-area-"+i);r.addClass("sapSuiteILCSection");r.addClass("sapSuiteILCCanvasLayout");if(P.getSelected()){r.addClass("sapSuiteILCSelected");}r.writeClasses();r.addStyle("width",q.sap.encodeHTML(a+"%"));r.addStyle("left",q.sap.encodeHTML(i*a+"%"));r.writeStyles();r.write(">");var C=P.getColor();r.write("<div");if(!P._bNullValue){if(P.getSelected()){r.addClass("sapSuiteILCSelected");}if(C!==M.ValueColor.Neutral){r.addClass("sapSuiteICSemanticColor"+C);}r.writeAttributeEscaped("id",c.getId()+"-point-"+i);r.addClass("sapSuiteILCPoint");r.addStyle("bottom",q.sap.encodeHTML(c._aNormalizedValues[i]+"%"));}r.writeClasses();r.writeStyles();r.write("/>");r.write("<div");r.addClass("sapSuiteILCBackgroundArea");r.writeClasses();r.write("/>");var A=this._renderPointLabel(r,c,i,p);var s=P._getSemanticColor();if(s){A+=" "+s;}var t=P.getTooltip_Text();if(t&&q.trim(t).length>0){A=t;}r.write("<div");r.addClass("sapSuiteILCInteractionArea");r.addClass("sapMPointer");r.writeClasses();if(i===0&&c._isChartEnabled()){r.writeAttribute("tabindex","0");}var o={};o.role="option";o.label=A;o.selected=P.getSelected();o.posinset=i+1;o.setsize=p;r.writeAccessibilityState(P,o);if(c._isChartEnabled()){var b=P.getTooltip_AsString();if(q.type(b)==="string"){r.writeAttributeEscaped("title",b);}}r.write("/>");r.write("</div>");};I._renderChartCanvas=function(r,c,d,p){var i,P=c.getPoints();r.write("<div");r.addClass("sapSuiteILCChartCanvas");r.addClass("sapSuiteILCCanvasLayout");r.writeClasses();r.write(">");r.write("<svg");r.addClass("sapSuiteILCSvgElement");r.writeClasses();r.writeAttribute("focusable","false");r.write(">");if(c._fNormalizedZero){r.write("<line");r.writeAttribute("x1","1%");r.writeAttributeEscaped("y1",100-c._fNormalizedZero+"%");r.writeAttribute("x2","99%");r.writeAttributeEscaped("y2",100-c._fNormalizedZero+"%");r.writeAttribute("stroke-width","1");r.addClass("sapSuiteILCDivider");r.writeClasses();r.write("/>");}for(i=1;i<d;i++){if(!P[i-1]._bNullValue&&!P[i]._bNullValue){r.write("<line");r.writeAttributeEscaped("x1",p/2+(i-1)*p+"%");r.writeAttributeEscaped("y1",100-c._aNormalizedValues[i-1]+"%");r.writeAttributeEscaped("x2",p/2+(i*p)+"%");r.writeAttributeEscaped("y2",100-c._aNormalizedValues[i]+"%");r.writeAttribute("stroke-width","2");r.write("/>");}}r.write("</svg>");r.write("</div>");};I._renderPointLabel=function(r,c,i,p){var P=c.getPoints()[i];var B=P.getLabel()||"",t=P.getDisplayedValue();var h;r.write("<div");r.addClass("sapSuiteILCTextElement");r.addClass("sapSuiteILCBottomText");r.addClass("sapMPointer");r.writeClasses();r.write(">");r.writeEscaped(B);r.write("</div>");r.write("<div");r.addClass("sapSuiteILCTextElement");r.addClass("sapSuiteILCToplabel");r.addClass("sapMPointer");if(!P._bNullValue){if(!t){t=P.getValue().toString();}h=[c._aNormalizedValues[i]];if(i>0&&!c.getPoints()[i-1]._bNullValue){h.push((c._aNormalizedValues[i]+c._aNormalizedValues[i-1])/2);}if(i<p-1&&!c.getPoints()[i+1]._bNullValue){h.push((c._aNormalizedValues[i]+c._aNormalizedValues[i+1])/2);}h.sort(function(a,b){return a-b;});if(P.getValue()===c.nMax&&c.nMax!==c.nMin){r.addStyle("bottom",q.sap.encodeHTML(h[h.length-1]+"%"));r.addClass("sapSuiteILCShiftAbove");}else if(P.getValue()===c.nMin&&c.nMax!==c.nMin){r.addStyle("bottom",q.sap.encodeHTML(h[0]+"%"));r.addClass("sapSuiteILCShiftBelow");}else if(Math.abs(c._aNormalizedValues[i]-h[0])<Math.abs(c._aNormalizedValues[i]-h[h.length-1])){r.addStyle("bottom",q.sap.encodeHTML(h[0]+"%"));r.addClass("sapSuiteILCShiftBelow");}else{r.addStyle("bottom",q.sap.encodeHTML(h[h.length-1]+"%"));r.addClass("sapSuiteILCShiftAbove");}}else{t=c._oRb.getText("INTERACTIVECHART_NA");r.addClass("sapSuiteILCShiftBelow");r.addClass("sapSuiteILCNaLabel");}r.writeClasses();r.writeStyles();r.write(">");r.writeEscaped(t);r.write("</div>");return B+" "+t;};I._renderDisabledOverlay=function(r,c){r.write("<div");r.addClass("sapSuiteILCDisabledOverlay");r.writeClasses();r.write(">");r.write("</div>");};I._getAriaDescribedBy=function(c,p){var a=[];for(var i=0;i<p;i++){a.push(c.getId()+"-point-area-"+i);}return a.join(",");};return I;},true);
