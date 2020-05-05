/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2017 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","sap/m/Label","sap/m/LabelRenderer","sap/ui/comp/library","./BindingUtil","./AnnotationHelper","./SmartField"],function(q,C,L,a,l,B,A,S){"use strict";var b=L.extend("sap.ui.comp.smartfield.SmartLabel",{metadata:{library:"sap.ui.comp"},renderer:a.render});b.prototype.init=function(){this._sSmartFieldId=null;this._bMetaDataApplied=false;this._fInnerControlsCreatedHandlers=null;};b.prototype._bindProperties=function(){var s=this._getField();if(s){var o=new B();var i=null;this.setVisible(s.getVisible());if(!this._bTextSetExplicitly){i=s.getBindingInfo("textLabel");if(i){this.bindProperty("text",o.toBinding(i));}else if(!this.getBindingInfo("text")){this._setText(s.getTextLabel());}}i=s.getBindingInfo("tooltipLabel");if(i){this.bindProperty("tooltip",o.toBinding(i));}else{this.setTooltip(s.getTooltipLabel());}}};b.prototype.onFieldVisibilityChange=function(c){this.setVisible(c.getSource().getVisible());};b.prototype.getLabelInfo=function(){var m,o;var s=this._getField();if(s){this._bindProperties();m=s.getDataProperty();if(m){o=this._getLabelInfo(m);if(o){if(o.text&&!this._bTextSetExplicitly){this._setProperty(this,"text",o.text);}if(o.quickinfo){this._setProperty(this,"tooltip",o.quickinfo);}}}}};b.prototype._setProperty=function(o,p,v){var P;if(o&&p){if(v.match(/{@i18n>.+}/gi)){o.bindProperty(p,v.substring(1,v.length-1));}else{P=p.substring(0,1).toUpperCase()+p.substring(1);if(!o.getBindingInfo(p)&&(!o["get"+P]())){o["set"+P](v);}}}};b.prototype.setLabelFor=function(s){var c=sap.ui.getCore();var o=this._getField();var n="";if(s){if(typeof s==="string"){n=s;}else if(s.getId){n=s.getId();}}if(n.length>0&&n===this._sSmartFieldId){return this;}if(o){if(this._fChange){o.detachEvent("_change",this._fChange);this._fChange=null;}if(this._fInitialized){o.detachInitialise(this._fInitialized);this._fInitialized=null;}this.detachFieldVisibilityChange(o);this._bMetaDataApplied=false;}if(n.length>0){this._sSmartFieldId=n;this._setLabelFor();}else{this._sSmartFieldId=null;}L.prototype.setLabelFor.apply(this,arguments);var d=c.byId(this.getLabelFor())||null;if(d&&(typeof d.attachVisibleChanged==="function")){d.attachVisibleChanged(this.onFieldVisibilityChange,this);}return this;};b.prototype._getField=function(){if(this._sSmartFieldId){return sap.ui.getCore().byId(this._sSmartFieldId);}return null;};b.prototype._setLabelFor=function(){var d,s=this._getField();if(s&&!this._bMetaDataApplied){this._bMetaDataApplied=true;if(s.getDataProperty){d=s.getDataProperty();if(d){this.getLabelInfo();}else{if(!this._fInitialized){this._fInitialized=this.getLabelInfo.bind(this);s.attachInitialise(this._fInitialized);}if(!this._fChange){this._fChange=function(e){if(e.getParameter("name")==="textLabel"){this.getLabelInfo();}else if(e.getParameter("name")==="mandatory"){this.invalidate();}}.bind(this);s.attachEvent("_change",this._fChange);}}this._lateUpdateLabelFor(s);}}};b.prototype.updateLabelFor=function(c){var i=c.slice(0);if(i&&i.length>0){this.invalidate();i.splice(0,1);this.updateAriaLabeledBy(i);}};b.prototype.updateAriaLabeledBy=function(c){if(c){for(var i=0;i<c.length;i++){var o=c[i];if(typeof o.addAriaLabelledBy==="function"){o.removeAriaLabelledBy(this);o.addAriaLabelledBy(this);}}}};b.prototype.setText=function(v){this.setProperty("text",v);this._bTextSetExplicitly=true;return this;};b.prototype._setText=function(v){this.setProperty("text",v);};b.prototype._getLabelInfo=function(p){var o=new A();if(p&&p.property){return{text:o.getLabel(p.property),quickinfo:o.getQuickInfo(p.property)};}};b.prototype._delayUpdateLabelFor=function(s){var t=this;if(s.attachInnerControlsCreated&&!this._fInnerControlsCreatedHandlers){this._fInnerControlsCreatedHandlers=function(e){t.updateLabelFor(e.getParameters());};s.attachInnerControlsCreated(this._fInnerControlsCreatedHandlers);}};b.prototype._lateUpdateLabelFor=function(s){var i;if(s&&(s instanceof S)){i=s.getInnerControls();if(i&&(i.length>0)){this.updateLabelFor(i);}else{this._delayUpdateLabelFor(s);}}};b.prototype.onBeforeRendering=function(){if(this._sSmartFieldId){var s=this._getField();if(!this._bMetaDataApplied){this._setLabelFor();if(s.getId()===this.getLabelFor()){this._lateUpdateLabelFor(s);}}}};b.prototype.detachFieldVisibilityChange=function(c){if(c&&(typeof c.detachVisibleChanged==="function")){c.detachVisibleChanged(this.onFieldVisibilityChange,this);}};b.prototype.destroy=function(s){var o=this._getField();delete this._bTextSetExplicitly;if(o){if(this._fInnerControlsCreatedHandlers&&o.detachInnerControlsCreated){o.detachInnerControlsCreated(this._fInnerControlsCreatedHandlers);this._fInnerControlsCreatedHandlers=null;}if(this._fInitialized&&o.detachInitialise){o.detachInitialise(this._fInitialized);this._fInitialized=null;}if(this._fChange){o.detachEvent("_change",this._fChange);this._fChange=null;}}this._sSmartFieldId=null;return L.prototype.destroy.apply(this,arguments);};b.prototype.exit=function(){L.prototype.exit.apply(this,arguments);this.detachFieldVisibilityChange(sap.ui.getCore().byId(this.getLabelFor()));};return b;},true);
