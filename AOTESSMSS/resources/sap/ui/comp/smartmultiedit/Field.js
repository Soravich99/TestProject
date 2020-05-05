/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2017 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","../library","sap/m/MultiEditField","./ControlHelper","./LabelProvider","sap/ui/core/Item"],function(q,l,M,C,L,I){"use strict";var F=M.extend("sap.ui.comp.smartmultiedit.Field",{metadata:{library:"sap.ui.comp",designTime:true,properties:{propertyName:{type:"string",group:"Misc",defaultValue:null,bindable:false}},aggregations:{},events:{},associations:{}},fragment:"sap.m.MultiEditField"});F.prototype.init=function(){M.prototype.init.apply(this);this._oRb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.comp");this._getBoolTrueItem=q.sap.getter(new I({key:"_sap_ui_comp_smartmultiedit_true",text:this._oRb.getText("SMARTFIELD_CB_YES")}));this._getBoolFalseItem=q.sap.getter(new I({key:"_sap_ui_comp_smartmultiedit_false",text:this._oRb.getText("SMARTFIELD_CB_NO")}));this._oControlHelper=new C({fieldInstance:this});this._oControlHelper.enrichBeforeFactory();this.attachEvent("_valueHelpRequest",this._onValueHelpRequest,this);};F.prototype.exit=function(){M.prototype.exit.apply(this);this._oControlHelper.destroy();if(this._oControlFactory){this._oControlFactory.destroy();}if(this._oLabelProvider){this._oLabelProvider.destroy();}this._getBoolTrueItem().destroy();this._getBoolFalseItem().destroy();};F.prototype.getRawValue=function(){var r={},v,s=this.getSelectedItem(),p=this.getPropertyName();if(s===this._getBoolTrueItem()){v=true;}else if(s===this._getBoolFalseItem()){v=false;}else if(this.isBlankSelected()){v=null;}else if(s){v=s.data("value");}if(!this.isKeepExistingSelected()&&typeof v!=="undefined"){r[p]=v;}return r;};F.prototype.initialize=function(e){return new Promise(function(r){var o;if(!this._oControlFactory){this._oControlFactory=this._oControlHelper.createFactory({entitySet:e,propertyName:this.getPropertyName()});}this._oControlHelper.enrichAfterFactory();this._oControlFactory._init(this._oControlFactory._oMeta);o=this.getAssociation("ariaLabelledBy");if(o&&!this._oLabelProvider){this._oLabelProvider=new L({fieldInstance:this,labelInstance:sap.ui.getCore().byId(o),metaDataProperty:this._oControlFactory._oMetaData.property.property});}this._oControlHelper.addControlInitialization(this._oControlFactory).then(function(){this._updateItems();r();}.bind(this));}.bind(this));};F.prototype._onValueHelpRequest=function(){if(this._oControlHelper){this._oControlHelper.triggerValueSelection();}};F.prototype._updateItems=function(){var t=this._oControlHelper.getControlName();if(t==="sap.m.CheckBox"){this.setProperty("showValueHelp",false,true);this.addAggregation("items",this._getBoolTrueItem(),true);this.addAggregation("items",this._getBoolFalseItem(),true);this.setProperty("selectedItem",this._getKeepAll(),true);this.invalidate();}};return F;});