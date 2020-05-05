/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2016 SAP SE. All rights reserved
    
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control','sap/ui/core/IconPool','sap/ui/core/theming/Parameters'],function(q,l,C,I,P){"use strict";var a=C.extend("sap.me.CalendarLegend",{metadata:{library:"sap.me",properties:{legendForType00:{type:"string",group:"Misc",defaultValue:null},legendForType01:{type:"string",group:"Misc",defaultValue:null},legendForType04:{type:"string",group:"Misc",defaultValue:null},legendForType06:{type:"string",group:"Misc",defaultValue:null},legendForType07:{type:"string",group:"Misc",defaultValue:null},legendForToday:{type:"string",group:"Misc",defaultValue:null},legendForSelected:{type:"string",group:"Misc",defaultValue:null},legendForSelected00:{type:"string",group:"Misc",defaultValue:null},legendForNormal:{type:"string",group:"Misc",defaultValue:null},expandable:{type:"boolean",group:"Misc",defaultValue:true},expanded:{type:"boolean",group:"Misc",defaultValue:true},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'auto'},legendWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'12.5rem'},visible:{type:"boolean",group:"Appearance",defaultValue:true},design:{type:"sap.me.CalendarDesign",group:"Appearance",defaultValue:sap.me.CalendarDesign.Approval}},aggregations:{labels:{type:"sap.m.Label",multiple:true,singularName:"label",visibility:"hidden"},colors:{type:"sap.ui.core.Control",multiple:true,singularName:"color",visibility:"hidden"},icon:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"}}}});a.prototype.init=function(){this._createIcon();I.insertFontFaceStyle();this._legendIndex=[];};a.prototype.setLegendForType00=function(v){this._setLegendLabelByName("ForType00",v);};a.prototype.setLegendForType01=function(v){this._setLegendLabelByName("ForType01",v);};a.prototype.setLegendForType04=function(v){this._setLegendLabelByName("ForType04",v);};a.prototype.setLegendForType06=function(v){this._setLegendLabelByName("ForType06",v);};a.prototype.setLegendForType07=function(v){this._setLegendLabelByName("ForType07",v);};a.prototype.setLegendForToday=function(v){this._setLegendLabelByName("ForToday",v);};a.prototype.setLegendForSelected=function(v){this._setLegendLabelByName("ForSelected",v);};a.prototype.setLegendForSelected00=function(v){this._setLegendLabelByName("ForSelected00",v);};a.prototype.setLegendForNormal=function(v){this._setLegendLabelByName("ForNormal",v);};a.prototype.setExpanded=function(v){this.setProperty("expanded",v);this._changeIconSrc();};a.prototype._setLegendLabelByName=function(n,v){var o=sap.ui.getCore().byId(this.getId()+"-"+n);var c=sap.ui.getCore().byId(this.getId()+'-Color'+n);if(!o){o=new sap.m.Label(this.getId()+'-'+n,{width:"auto"});o.addStyleClass("sapUIMeCalendarLegendLabels");this.addAggregation("labels",o,true);o.setText(v);c=new sap.m.Label(this.getId()+'-Color'+n);c.addStyleClass("sapUIMeLegendColor");c.addStyleClass("sapUIMeLegendColor"+n);this.addAggregation("colors",c,true);this._legendIndex.push(n);}else{o.setText(v);if(!v){this.removeAggregation("colors",c,true);this.removeAggregation("labels",o,true);}else{var i=this._legendIndex.indexOf(n);this.insertAggregation("colors",c,i,true);this.insertAggregation("labels",o,i,true);}}this.setProperty("legend"+n,v);};a.prototype.setExpandable=function(v){this.setProperty("expandable",v);if(!v&&!this.getExpanded()){this.toggleExpandCollapse();}};a.prototype.setVisible=function(v){this.setProperty("visible",v);};a.prototype.toggleExpandCollapse=function(){if(!this.getExpandable())return;var e=!this.getExpanded();var $=this.$("LegendMenu");if(e){this.$("LegendMenu").css("display","none").css("height","auto");$.slideDown('600',"swing",q.proxy(this.onTransitionEnded,this));}else{$.slideUp('600',q.proxy(this.onTransitionEnded,this));}this.setProperty("expanded",e,true);this._changeIconSrc();};a.prototype._createIcon=function(){var i=this.getExpanded()?"collapse":"expand";var c=P.get("sapUiLightIcon");var A=P.get("sapUiHighlight");var s=P.get("sapUiIconInverted");var o=new sap.ui.core.Icon(this.getId()+i,{src:I.getIconURI(i),color:c,activeBackgroundColor:A,activeColor:s,press:q.proxy(this.toggleExpandCollapse,this)});o.addStyleClass("sapUIMeLegendIcon");this.setAggregation("icon",o,true);};a.prototype._getColorBoxStyle=function(i){var b=this.getId()+"-";var s=i.substr(i.indexOf(b)+b.length);s="sapUIMeLegendColor"+s;return s;};a.prototype._changeIconSrc=function(){var i=this.getExpanded()?"collapse":"expand";this.getAggregation("icon").setSrc(I.getIconURI(i));};return a;},true);
