/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.landvisz.internal.ActionBar");jQuery.sap.require("sap.landvisz.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.landvisz.internal.ActionBar",{metadata:{publicMethods:["getSelectedItem","setSelectedItemSubAction","getSystemId"],library:"sap.landvisz",properties:{"actionLabel":{type:"string",group:"Data",defaultValue:null},"renderingSize":{type:"sap.landvisz.EntityCSSSize",group:"Dimension",defaultValue:sap.landvisz.EntityCSSSize.Regular},"iconSrc":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"actionType":{type:"sap.landvisz.ActionType",group:"Data",defaultValue:sap.landvisz.ActionType.NORMAL},"menuData":{type:"object",group:"Data",defaultValue:null},"actionTooltip":{type:"string",group:"Data",defaultValue:null},"enable":{type:"boolean",group:"Identification",defaultValue:true},"changeView":{type:"boolean",group:"Identification",defaultValue:false}},aggregations:{"menu":{type:"sap.ui.commons.Menu",multiple:true,singularName:"menu"}},events:{"select":{}}}});sap.landvisz.internal.ActionBar.M_EVENTS={'select':'select'};jQuery.sap.require("sap.ui.commons.MenuButton");jQuery.sap.require("sap.ui.commons.Menu");jQuery.sap.require("sap.ui.commons.MenuItem");
sap.landvisz.internal.ActionBar.prototype.init=function(){this.initializationDone=false;this.lastButton=false;this.selectedItem;this.systemId="";};
sap.landvisz.internal.ActionBar.prototype.exit=function(){this.customAction&&this.customAction.destroy();this.oActToolBar&&this.oActToolBar.destroy();this.oToolBarBtn&&this.oToolBarBtn.destroy();};
sap.landvisz.internal.ActionBar.prototype.initControls=function(){var c=this.getId();this.oToolBarBtn;this.oActToolBar;if(!this.customActionIcon&&this.getIconSrc()&&this.getIconSrc()!="")this.customActionIcon=new sap.ui.commons.Image(c+"-CLVCustomActionImg");if(!this.menuButton)this.menuButton=new sap.ui.commons.MenuButton(c+'-'+"MenuButton");};
sap.landvisz.internal.ActionBar.prototype.onclick=function(e){if(this.getEnable()==false)e.preventDefault();else this.fireSelect();};
sap.landvisz.internal.ActionBar.prototype.onsapenter=function(e){if(this.getEnable()==false)e.preventDefault();else this.fireSelect();};
sap.landvisz.internal.ActionBar.prototype.nsapenter=function(e){if(this.getEnable()==false)e.preventDefault();else this.fireSelect();};
sap.landvisz.internal.ActionBar.prototype.getSelectedItem=function(){return this.selectedItem;};
sap.landvisz.internal.ActionBar.prototype.getSystemId=function(){return this.systemId;};
sap.landvisz.internal.ActionBar.prototype.setSelectedItemSubAction=function(s){var m=this.getMenuData();var a=this._addSubActions(m,s);};
sap.landvisz.internal.ActionBar.prototype._addSubActions=function(m,s){for(var i=0;i<m.length;i++){if(this.selectedItem.getText()==m[i].text){m[i].subActions=s;return;}}};
sap.landvisz.internal.ActionBar.prototype._createMenu=function(m){var a=null;var b=null;var c=new sap.ui.commons.Menu();c.addStyleClass("sapLandviszMenuItemBorber");for(var i=0;i<m.length;i++){b=m[i];a=new sap.ui.commons.MenuItem({text:b.text,tooltip:b.tooltip});if(b.customdata){var d=new sap.ui.core.CustomData({key:b.customdata,});a.addCustomData(d);}c.addItem(a);if(b.subActions&&b.subActions.length>0){var s=this._createMenu(b.subActions);a.setSubmenu(s);}}return c;};
