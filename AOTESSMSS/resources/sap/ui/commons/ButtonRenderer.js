/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var B={};B.render=function(r,o){r.addClass("sapUiBtn");r.write("<button type=\"button\"");r.writeControlData(o);if(o.getTooltip_AsString()){r.writeAttributeEscaped("title",o.getTooltip_AsString());}if(o.getStyled()){r.addClass("sapUiBtnS");}if(o.getLite()){r.addClass("sapUiBtnLite");}else{r.addClass("sapUiBtnNorm");}var s=o.getStyle();if(s!=""&&s!=sap.ui.commons.ButtonStyle.Default){r.addClass("sapUiBtn"+q.sap.encodeHTML(s));}r.writeAccessibilityState(o,{role:'button',disabled:!o.getEnabled()});if(!o.getEnabled()){r.write(" tabIndex=\"-1\"");r.addClass("sapUiBtnDsbl");}else{r.write(" tabIndex=\"0\"");r.addClass("sapUiBtnStd");}var i=false;if(!o.getText()&&o.getIcon()){r.addClass("sapUiBtnIconOnly");i=true;var I=sap.ui.core.IconPool.getIconInfo(o.getIcon()),t=o.getTooltip_AsString();if(t||(I&&I.name)){r.writeAttributeEscaped("title",t||I.name);}}if(o.getIcon()&&o.getText()){r.addClass("sapUiBtnIconAndText");}if(o.getWidth()&&o.getWidth()!=''){r.addStyle("width",o.getWidth());r.addClass("sapUiBtnFixedWidth");}if(o.getHeight()&&o.getHeight()!=''){r.addStyle("height",o.getHeight());}r.writeStyles();if(this.renderButtonAttributes){this.renderButtonAttributes(r,o);}if(!!sap.ui.Device.browser.internet_explorer&&(!document.documentMode||document.documentMode<10)){r.addClass("sapUiBtnNoGradient");}r.writeClasses();r.write(">");if(this.renderButtonContentBefore){this.renderButtonContentBefore(r,o);}var u=false;if(sap.ui.core.IconPool.isIconURI(o.getIcon())){u=true;}if(o.getIconFirst()){if(u){this.writeIconHtml(r,o);}else if(this._getIconForState(o,"base")){this.writeImgHtml(r,o,i);}}if(o.getText()){if(!o.getIcon()&&!this.renderButtonContentBefore&&!this.renderButtonContentAfter){r.writeEscaped(o.getText());}else{r.write("<span class=\"sapUiBtnTxt\">");r.writeEscaped(o.getText());r.write("</span>");}}if(!o.getIconFirst()){if(u){this.writeIconHtml(r,o);}else if(this._getIconForState(o,"base")){this.writeImgHtml(r,o,i);}}if(this.renderButtonContentAfter){this.renderButtonContentAfter(r,o);}r.write("</button>");};B.onactive=function(o){o.$().addClass("sapUiBtnAct").removeClass("sapUiBtnStd");o.$("img").attr("src",this._getIconForState(o,"active"));};B.ondeactive=function(o){o.$().addClass("sapUiBtnStd").removeClass("sapUiBtnAct");o.$("img").attr("src",this._getIconForState(o,"deactive"));};B.onblur=function(o){o.$().removeClass("sapUiBtnFoc");o.$("img").attr("src",this._getIconForState(o,"blur"));if(!!sap.ui.Device.browser.internet_explorer){B.onmouseout(o);}};B.onfocus=function(o){o.$().addClass("sapUiBtnFoc");o.$("img").attr("src",this._getIconForState(o,"focus"));};B.onmouseout=function(o){o.$().removeClass("sapUiBtnAct");o.$().addClass("sapUiBtnStd");o.$("img").attr("src",this._getIconForState(o,"mouseout"));};B.onmouseover=function(o){o.$("img").attr("src",this._getIconForState(o,"mouseover"));};B._getIconForState=function(o,s){if(!o.getEnabled()){s="disabled";}switch(s){case"focus":case"blur":case"base":if(o.$().hasClass("sapUiBtnAct")){var i=o.getIconSelected()||o.getIconHovered();return i?i:o.getIcon();}else if(o.$().hasClass("sapUiBtnFoc")){return o.getIcon();}return o.getIcon();case"mouseout":if(o.$().hasClass("sapUiBtnFoc")){return o.getIcon();}return o.getIcon();case"active":var i=o.getIconSelected()||o.getIconHovered();return i?i:o.getIcon();case"mouseover":case"deactive":var i=o.getIconHovered();return i?i:o.getIcon();}return o.getIcon();};B.writeImgHtml=function(r,o,i){var a=r,c=this._getIconForState(o,"base");a.write("<img");a.writeAttribute("id",o.getId()+"-img");a.writeAttributeEscaped("src",c);if(o.getTooltip_AsString()&&!o.getText()){a.writeAttributeEscaped("alt",o.getTooltip_AsString());}else{a.writeAttribute("alt","");}if(!i){a.writeAttribute("role","presentation");}a.addClass("sapUiBtnIco");if(o.getText()){a.addClass(o.getIconFirst()?"sapUiBtnIcoL":"sapUiBtnIcoR");}a.writeClasses();a.write("/>");};B.writeIconHtml=function(r,o){var a=r;var c=[];var A=b(o);c.push("sapUiBtnIco");if(o.getText()){c.push(o.getIconFirst()?"sapUiBtnIcoL":"sapUiBtnIcoR");}a.writeIcon(o.getIcon(),c,A);};B.changeIcon=function(o){if(sap.ui.core.IconPool.isIconURI(o.getIcon())){var i=sap.ui.core.IconPool.getIconInfo(o.getIcon());var I=o.$("icon");I.attr("data-sap-ui-icon-content",i.content);if(!i.skipMirroring){I.addClass("sapUiIconMirrorInRTL");}else{I.removeClass("sapUiIconMirrorInRTL");}}else if(o.$().hasClass("sapUiBtnAct")){o.$("img").attr("src",this._getIconForState(o,"active"));}else if(o.$().hasClass("sapUiBtnFoc")){o.$("img").attr("src",this._getIconForState(o,"focus"));}else if(o.$().hasClass("sapUiBtnStd")){o.$("img").attr("src",this._getIconForState(o,"base"));}};function b(o){var a={},t=o.getTooltip_AsString();a["id"]=o.getId()+"-icon";if(t){a["title"]=null;a["aria-label"]=null;a["aria-hidden"]=true;}return a;}return B;},true);
