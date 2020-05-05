/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./BarInPageEnabler','./library','sap/ui/core/Control','sap/ui/core/ResizeHandler','sap/ui/Device'],function(q,B,l,C,R,D){"use strict";var a=l.BarDesign;var b=C.extend("sap.m.Bar",{metadata:{interfaces:["sap.m.IBar"],library:"sap.m",properties:{enableFlexBox:{type:"boolean",group:"Misc",defaultValue:false,deprecated:true},translucent:{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},design:{type:"sap.m.BarDesign",group:"Appearance",defaultValue:a.Auto}},aggregations:{contentLeft:{type:"sap.ui.core.Control",multiple:true,singularName:"contentLeft"},contentMiddle:{type:"sap.ui.core.Control",multiple:true,singularName:"contentMiddle"},contentRight:{type:"sap.ui.core.Control",multiple:true,singularName:"contentRight"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},designTime:true}});b.prototype.onBeforeRendering=function(){this._removeAllListeners();};b.prototype.onAfterRendering=function(){this._handleResize();};b.prototype.init=function(){this.data("sap-ui-fastnavgroup","true",true);};b.prototype.exit=function(){this._removeAllListeners();if(this._oflexBox){this._oflexBox.destroy();this._oflexBox=null;}this._$MidBarPlaceHolder=null;this._$RightBar=null;this._$LeftBar=null;};b._aResizeHandlers=["_sResizeListenerId","_sResizeListenerIdMid","_sResizeListenerIdRight","_sResizeListenerIdLeft"];b.prototype._removeAllListeners=function(){var t=this;b._aResizeHandlers.forEach(function(i){t._removeListenerFailsave(i);});};b.prototype._removeListenerFailsave=function(L){if(this[L]){R.deregister(this[L]);this[L]=null;}};b.prototype._handleResize=function(){this._removeAllListeners();var d=!!this.getContentLeft().length,e=!!this.getContentMiddle().length,f=!!this.getContentRight().length;if(!this.getVisible()){return;}if(!d&&!e&&!f){return;}this._$LeftBar=this.$("BarLeft");this._$RightBar=this.$("BarRight");this._$MidBarPlaceHolder=this.$("BarPH");this._updatePosition(d,e,f);this._sResizeListenerId=R.register(this.getDomRef(),q.proxy(this._handleResize,this));if(this.getEnableFlexBox()){return;}if(d){this._sResizeListenerIdLeft=R.register(this._$LeftBar[0],q.proxy(this._handleResize,this));}if(e){this._sResizeListenerIdMid=R.register(this._$MidBarPlaceHolder[0],q.proxy(this._handleResize,this));}if(f){this._sResizeListenerIdRight=R.register(this._$RightBar[0],q.proxy(this._handleResize,this));}};b.prototype._updatePosition=function(d,e,f){if(!d&&!f&&e){return;}if(d&&!e&&!f){return;}if(!d&&!e&&f){return;}var i=this.$().outerWidth(true);this._$RightBar.css({width:""});this._$LeftBar.css({width:""});this._$MidBarPlaceHolder.css({position:"",width:"",visibility:'hidden'});var r=this._$RightBar.outerWidth(true);if(r>i){if(d){this._$LeftBar.css({width:"0px"});}if(e){this._$MidBarPlaceHolder.css({width:"0px"});}this._$RightBar.css({width:i+"px"});return;}var L=this._getBarContainerWidth(this._$LeftBar);if(i<(L+r)){L=i-r;this._$LeftBar.css({width:L+"px"});this._$MidBarPlaceHolder.css({width:"0px"});return;}this._$MidBarPlaceHolder.css(this._getMidBarCss(r,i,L));};b.prototype._getMidBarCss=function(r,i,L){var m=this._$MidBarPlaceHolder.outerWidth(true),d=sap.ui.getCore().getConfiguration().getRTL(),s=d?"right":"left",M={visibility:""};if(this.getEnableFlexBox()){m=i-L-r-parseInt(this._$MidBarPlaceHolder.css('margin-left'),10)-parseInt(this._$MidBarPlaceHolder.css('margin-right'),10);M.position="absolute";M.width=m+"px";M[s]=L;return M;}var S=i-L-r,e=(i/2)-(m/2),f=L>e,g=(i/2)+(m/2),h=(i-r)<g;if(S>0&&(f||h)){M.position="absolute";M.width=S+"px";M.left=d?r:L;}return M;};b.prototype._getBarContainerWidth=function($){var i,d=0,e=$.children(),f=0;if(D.browser.webkit||D.browser.firefox||D.browser.edge){for(i=0;i<e.length;i++){f+=q(e[i]).outerWidth(true);}d=$.outerWidth(true);}else{var o;for(i=0;i<e.length;i++){o=window.getComputedStyle(e[i]);if(o.width=="auto"){f+=q(e[i]).width()+1;}else{f+=parseFloat(o.width);}f+=parseFloat(o.marginLeft);f+=parseFloat(o.marginRight);f+=parseFloat(o.paddingLeft);f+=parseFloat(o.paddingRight);}var g=window.getComputedStyle($[0]);d+=parseFloat(g.width);d+=parseFloat(g.marginLeft);d+=parseFloat(g.marginRight);d+=parseFloat(g.paddingLeft);d+=parseFloat(g.paddingRight);}if(d<f){d=f;}return d;};var c=B.extend("sap.m.BarInAnyContentEnabler",{});c.mContexts={dialogFooter:{contextClass:"sapMFooter-CTX",tag:"Footer"}};c.prototype.getContext=function(){var p=B.prototype.getContext.call();for(var k in c.mContexts){p[k]=c.mContexts[k];}return p;};b.prototype.getContext=c.prototype.getContext;b.prototype.isContextSensitive=c.prototype.isContextSensitive;b.prototype.setHTMLTag=c.prototype.setHTMLTag;b.prototype.getHTMLTag=c.prototype.getHTMLTag;b.prototype.applyTagAndContextClassFor=c.prototype.applyTagAndContextClassFor;b.prototype._applyContextClassFor=c.prototype._applyContextClassFor;b.prototype._applyTag=c.prototype._applyTag;b.prototype._getContextOptions=c.prototype._getContextOptions;b.prototype._setRootAccessibilityRole=c.prototype._setRootAccessibilityRole;b.prototype._getRootAccessibilityRole=c.prototype._getRootAccessibilityRole;return b;});
