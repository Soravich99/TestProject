/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control'],function(q,l,C){"use strict";var a=C.extend("sap.ui.commons.CheckBox",{metadata:{library:"sap.ui.commons",properties:{checked:{type:"boolean",group:"Data",defaultValue:false,bindable:"bindable"},text:{type:"string",group:"Appearance",defaultValue:null},enabled:{type:"boolean",group:"Behavior",defaultValue:true},editable:{type:"boolean",group:"Behavior",defaultValue:true},valueState:{type:"sap.ui.core.ValueState",group:"Data",defaultValue:sap.ui.core.ValueState.None},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},name:{type:"string",group:"Misc",defaultValue:null}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{change:{parameters:{checked:{type:"boolean"}}}}}});a.prototype.onclick=function(e){if(!!sap.ui.Device.browser.internet_explorer&&!this.getEnabled()){this.$().attr("tabindex",0).addClass("sapUiCbFoc");}this.userToggle(e);};a.prototype.onfocusout=function(e){if(!!sap.ui.Device.browser.internet_explorer&&!this.getEnabled()){this.$().attr("tabindex",-1).removeClass("sapUiCbFoc");}};a.prototype.onsapspace=function(e){this.userToggle(e);};a.prototype.userToggle=function(e){e.preventDefault();if(this.getEnabled()&&this.getEditable()){this.toggle();this.fireChange({checked:this.getChecked()});}else{this.getDomRef().focus();}};a.prototype.toggle=function(){this.setChecked(!this.getChecked());return this;};a.prototype.getAccessibilityInfo=function(){var b=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");return{role:"checkbox",type:b.getText("ACC_CTR_TYPE_CHECKBOX"),description:(this.getText()||"")+(this.getChecked()?(" "+b.getText("ACC_CTR_STATE_CHECKED")):""),focusable:this.getEnabled(),enabled:this.getEnabled(),editable:this.getEditable()};};return a;},true);
