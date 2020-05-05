/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Control','sap/ui/core/InvisibleText','sap/ui/core/EnabledPropagator','sap/ui/core/library','sap/ui/Device'],function(l,C,I,E,c,D){"use strict";var T=c.TextDirection;var a=c.TextAlign;var L=C.extend("sap.m.Link",{metadata:{interfaces:["sap.ui.core.IShrinkable","sap.ui.core.IFormContent"],library:"sap.m",properties:{text:{type:"string",group:"Data",defaultValue:''},enabled:{type:"boolean",group:"Behavior",defaultValue:true},target:{type:"string",group:"Behavior",defaultValue:null},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},href:{type:"sap.ui.core.URI",group:"Data",defaultValue:null},wrapping:{type:"boolean",group:"Appearance",defaultValue:false},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:a.Initial},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:T.Inherit},subtle:{type:"boolean",group:"Behavior",defaultValue:false},emphasized:{type:"boolean",group:"Behavior",defaultValue:false}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{press:{allowPreventDefault:true}},designTime:true}});E.call(L.prototype);L.prototype.onBeforeRendering=function(){};L.prototype.onsapspace=function(e){this._handlePress(e);if(this.getHref()&&!e.isDefaultPrevented()){e.preventDefault();e.setMarked();var o=document.createEvent('MouseEvents');o.initEvent('click',false,true);this.getDomRef().dispatchEvent(o);}};L.prototype._handlePress=function(e){if(this.getEnabled()){e.setMarked();if(!this.firePress()||!this.getHref()){e.preventDefault();}}else{e.preventDefault();}};L.prototype.onsapenter=L.prototype._handlePress;if(D.support.touch){L.prototype.ontap=L.prototype._handlePress;}else{L.prototype.onclick=L.prototype._handlePress;}L.prototype.ontouchstart=function(e){if(this.getEnabled()){e.setMarked();}};L.prototype.setText=function(t){var $=this.$();this.setProperty("text",t,true);t=this.getProperty("text");if(this.writeText){this.writeText(t);}else{$.text(t);}if(t){$.attr("tabindex","0");}else{$.attr("tabindex","-1");}return this;};L.prototype.setHref=function(u){this.setProperty("href",u,true);if(this.getEnabled()){u=this.getProperty("href");if(!u){this.$().removeAttr("href");}else{this.$().attr("href",u);}}return this;};L.prototype.setSubtle=function(s){this.setProperty("subtle",s,true);var $=this.$();if($.length){$.toggleClass("sapMLnkSubtle",s);if(s){L._addToDescribedBy($,this._sAriaLinkSubtleId);}else{L._removeFromDescribedBy($,this._sAriaLinkSubtleId);}}if(s&&!L.prototype._sAriaLinkSubtleId){L.prototype._sAriaLinkSubtleId=L._getARIAInvisibleTextId("LINK_SUBTLE");}return this;};L.prototype.setEmphasized=function(e){this.setProperty("emphasized",e,true);var $=this.$();if($.length){$.toggleClass("sapMLnkEmphasized",e);if(e){L._addToDescribedBy($,this._sAriaLinkEmphasizedId);}else{L._removeFromDescribedBy($,this._sAriaLinkEmphasizedId);}}if(e&&!L.prototype._sAriaLinkEmphasizedId){L.prototype._sAriaLinkEmphasizedId=L._getARIAInvisibleTextId("LINK_EMPHASIZED");}return this;};L.prototype.setWrapping=function(w){this.setProperty("wrapping",w,true);this.$().toggleClass("sapMLnkWrapping",w);return this;};L.prototype.setEnabled=function(e){e=this.validateProperty("enabled",e);if(e!==this.getProperty("enabled")){this.setProperty("enabled",e,true);var $=this.$();$.toggleClass("sapMLnkDsbl",!e);if(e){$.attr("disabled",false);if(this.getText()){$.attr("tabindex","0");}else{$.attr("tabindex","-1");}$.removeAttr("aria-disabled");if(this.getHref()){$.attr("href",this.getHref());}}else{$.attr("disabled",true);$.attr("tabindex","-1");$.attr("aria-disabled",true);$.removeAttr("href");}}return this;};L.prototype.setWidth=function(w){this.setProperty("width",w,true);this.$().toggleClass("sapMLnkMaxWidth",!w);this.$().css("width",w);return this;};L.prototype.setTarget=function(t){this.setProperty("target",t,true);if(!t){this.$().removeAttr("target");}else{this.$().attr("target",t);}return this;};L._getResourceBundle=function(){return sap.ui.getCore().getLibraryResourceBundle("sap.m");};L._getARIAInvisibleTextId=function(r){var R=L._getResourceBundle();return new I({text:R.getText(r)}).toStatic().getId();};L._addToDescribedBy=function($,i){var A=$.attr("aria-describedby");if(A){$.attr("aria-describedby",A+" "+i);}else{$.attr("aria-describedby",i);}};L._removeFromDescribedBy=function($,i){var A=$.attr("aria-describedby");if(A&&A.indexOf(i)!==-1){A=A.replace(i,'');if(A.length>1){$.attr("aria-describedby",A);}else{$.removeAttr("aria-describedby");}}};L.prototype.getAccessibilityInfo=function(){return{role:"link",type:sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_LINK"),description:this.getText()||this.getHref()||"",focusable:this.getEnabled(),enabled:this.getEnabled()};};L.prototype.getFormDoNotAdjustWidth=function(){return true;};return L;});
