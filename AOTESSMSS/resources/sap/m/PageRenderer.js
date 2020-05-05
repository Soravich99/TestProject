/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var P={};P.render=function(r,p){var h=null,f=null,s=p.getShowFooter(),S=null,L=this._isLightHeader(p),o=p.getLandmarkInfo();if(p.getShowHeader()){h=p._getAnyHeader();}if(p.getShowSubHeader()){S=p.getSubHeader();}f=p.getFooter();r.write("<div");r.writeControlData(p);r.addClass("sapMPage");r.addClass("sapMPageBg"+p.getBackgroundDesign());if(h){r.addClass("sapMPageWithHeader");}if(S){r.addClass("sapMPageWithSubHeader");}if(f&&s){r.addClass("sapMPageWithFooter");}if(!p.getContentOnlyBusy()){r.addClass("sapMPageBusyCoversAll");}if(p.getFloatingFooter()){r.addClass("sapMPageFloatingFooter");}r.writeClasses();var t=p.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.writeAccessibilityState(p,p._formatLandmarkInfo(o,"Root"));r.write(">");if(h){var H=p._getHeaderTag(o);r.write("<"+H);r.addClass("sapMPageHeader");r.writeAccessibilityState(p,p._formatLandmarkInfo(o,"Header"));r.writeClasses();r.write(">");this.renderBarControl(r,p,h,{context:"header",styleClass:L?"":"sapContrastPlus"});r.write("</"+H+">");}if(S){var a=p._getSubHeaderTag(o);r.write("<"+a);r.addClass("sapMPageSubHeader");r.writeAccessibilityState(p,p._formatLandmarkInfo(o,"SubHeader"));r.writeClasses();r.write(">");this.renderBarControl(r,p,S,{context:"subHeader",styleClass:L?"":"sapContrastPlus"});r.write("</"+a+">");}r.write('<section id="'+p.getId()+'-cont"');r.writeAccessibilityState(p,p._formatLandmarkInfo(o,"Content"));if(p.getEnableScrolling()){r.addClass("sapMPageEnableScrolling");r.writeClasses();}r.write('>');var c=p.getContent();var l=c.length;for(var i=0;i<l;i++){r.renderControl(c[i]);}r.write("</section>");if(f){var F=p._getFooterTag(o);r.write("<"+F);r.addClass("sapMPageFooter");if(!p.getShowFooter()){r.addClass("sapUiHidden");}r.writeAccessibilityState(p,p._formatLandmarkInfo(o,"Footer"));r.writeClasses();r.write(">");this.renderBarControl(r,p,f,{context:"footer"});r.write("</"+F+">");}r.write("</div>");};P.renderBarControl=function(r,p,b,o){if(!b){return;}b._applyContextClassFor(o.context.toLowerCase());b.addStyleClass(o.styleClass||"");r.renderControl(b);};P._isLightHeader=function(p){var c=p,o=p.getParent(),s,C;while(o){s=(o&&o.getMetadata().getName())||"";C=c.getMetadata().getName();if((s==="sap.m.Popover"||s==="sap.m.Dialog")&&C==="sap.m.NavContainer"){return true;}if(o&&["sap.m.SplitApp","sap.m.SplitContainer"].indexOf(s)>-1&&C==="sap.m.NavContainer"&&/\-Master$/.test(c.getId())){return true;}c=o;o=c.getParent();}return false;};return P;},true);
