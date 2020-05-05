/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control','sap/ui/core/Popup','sap/ui/core/LabelEnablement'],function(q,l,C,P,L){"use strict";var a=C.extend("sap.ui.commons.Label",{metadata:{interfaces:["sap.ui.commons.ToolbarItem","sap.ui.core.Label"],library:"sap.ui.commons",properties:{design:{type:"sap.ui.commons.LabelDesign",group:"Appearance",defaultValue:sap.ui.commons.LabelDesign.Standard},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},wrapping:{type:"boolean",group:"Appearance",defaultValue:false},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},text:{type:"string",group:"Misc",defaultValue:''},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:sap.ui.core.TextAlign.Begin},required:{type:"boolean",group:"Appearance",defaultValue:false},requiredAtBegin:{type:"boolean",group:"Misc",defaultValue:null}},associations:{labelFor:{type:"sap.ui.core.Control",multiple:false}}}});a.prototype.onAfterRendering=function(){var f=this._getLabeledControl();if(f){if(this.getTooltip_AsString()==""||!(this.getTooltip()instanceof sap.ui.core.TooltipBase)){if(f.getTooltip()instanceof sap.ui.core.TooltipBase){this.oForTooltip=f.getTooltip();this.addDelegate(this.oForTooltip);}}this._oFor=f;}};a.prototype.onBeforeRendering=function(){if(this.oForTooltip){this.removeDelegate(this.oForTooltip);this.oForTooltip=null;}if(this._oFor){this._oFor=undefined;}};a.prototype.exit=function(){if(this.oForTooltip){this.removeDelegate(this.oForTooltip);this.oForTooltip=null;}if(this._oFor){this._oFor=undefined;}};a.prototype.setReqiuredAtBegin=function(r){return this.setRequiredAtBegin(r);};a.prototype.getReqiuredAtBegin=function(){return this.getRequiredAtBegin();};a.prototype._getLabeledControl=function(){var i=this.getLabelForRendering();if(!i){return null;}return sap.ui.getCore().byId(i);};a.prototype.getAccessibilityInfo=function(){return{description:this.getText()};};L.enrich(a.prototype);return a;},true);
