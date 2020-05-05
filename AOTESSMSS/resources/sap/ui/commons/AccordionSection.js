/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Element'],function(q,l,E){"use strict";var A=E.extend("sap.ui.commons.AccordionSection",{metadata:{library:"sap.ui.commons",properties:{maxHeight:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},enabled:{type:"boolean",group:"Behavior",defaultValue:true},collapsed:{type:"boolean",group:"Behavior",defaultValue:false},title:{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},events:{scroll:{parameters:{left:{type:"int"},top:{type:"int"}}}}}});A.prototype.init=function(){this.oScrollDomRef=null;this.data("sap-ui-fastnavgroup","true",true);};A.prototype.focusFirstControl=function(){var c=this.getContent();if(c[0]){c[0].focus();}};A.prototype.focus=function(){var h=this.getDomRef("hdr");h.focus();};A.prototype.onThemeChanged=function(){var h=this.getDomRef("hdrL");if(h){h.style.width="auto";this.onAfterRendering();}};A.prototype.onAfterRendering=function(){this.oScrollDomRef=this.getDomRef("cont");var c=this.oScrollDomRef,r=this.getDomRef(),a=this.getParent().getDomRef(),d=this.getDomRef("lbl");if(!A._isSizeSet(this.getParent().getWidth())&&A._isSizeSet(this.getMaxHeight())){if(c){var b=c.offsetTop;var t=(r.offsetHeight-b);c.style.height=t+"px";var e=c.offsetHeight;if(e>t){c.style.height=t-(e-t)+"px";}}}d.style.width=a.offsetWidth-30+"px";var s=this.__scrollproxy__;if(!s){s=this.__scrollproxy__=q.proxy(this.onscroll,this);}this.$("cont").bind("scroll",s);};A.prototype.onBeforeRendering=function(){var s=this.__scrollproxy__;if(s){this.$("cont").unbind("scroll",s);}};A.prototype.setEnabled=function(e){this.setProperty("enabled",e,true);var r=this.getDomRef();if(r){if(e){q(r).removeClass("sapUiAcdSectionDis");}else{q(r).addClass("sapUiAcdSectionDis");}}return this;};A.prototype._setCollapsed=function(c){this.setProperty("collapsed",c,true);this._setCollapsedState(c);};A.prototype.setCollapsed=function(c){if(this.getParent()){if(!c){this.getParent().openSection(this.getId());}else{this.getParent().closeSection(this.getId());}}else{this._setCollapsed(c);}return this;};A.prototype._setCollapsedState=function(c){var t=this.getDomRef("tb"),a=this.getDomRef("cont"),b=sap.ui.getCore().getConfiguration().getAccessibility();if(this.getDomRef()){if(c){if(!this.getParent().getWidth()){this.getDomRef().style.width=this.getDomRef().offsetWidth+"px";}q(this.getDomRef()).addClass("sapUiAcdSectionColl");if(t){t.style.display="none";}if(a){a.style.display="none";}if(b){a.setAttribute("aria-expanded","false");a.setAttribute("aria-hidden","true");}this.invalidate();}else{if(!a){this.invalidate();}else{q(this.getDomRef()).removeClass("sapUiAcdSectionColl");if(t){t.style.display="block";}a.style.display="block";if(b){a.setAttribute("aria-expanded","true");}if(this.getMaxHeight()){this.getDomRef().style.height=this.getMaxHeight();}}}}};A._isSizeSet=function(c){return(c&&!(c==="auto")&&!(c==="inherit"));};A.prototype._handleTrigger=function(e){if((e.target.id===this.getId()+"-minL")||(e.target.id===this.getId()+"-minR")){var c=!this.getProperty("collapsed");this._setCollapsed(c);e.preventDefault();e.stopPropagation();}};return A;},true);
