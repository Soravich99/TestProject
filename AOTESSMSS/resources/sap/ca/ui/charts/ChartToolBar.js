/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.ChartToolBar");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ca.ui.charts.ChartToolBar",{metadata:{deprecated:true,library:"sap.ca.ui",properties:{"showPersonalization":{type:"boolean",group:"Misc",defaultValue:false},"showFullScreen":{type:"boolean",group:"Misc",defaultValue:false},"fullScreen":{type:"boolean",group:"Misc",defaultValue:false},"showLegend":{type:"boolean",group:"Misc",defaultValue:true},"chartTitle":{type:"string",group:"Misc",defaultValue:''},"firstDimensionPath":{type:"string",group:"Misc",defaultValue:''},"firstDimensionKeyPath":{type:"string",group:"Misc",defaultValue:''},"firstDimensionTextPath":{type:"string",group:"Misc",defaultValue:''},"secondDimensionPath":{type:"string",group:"Misc",defaultValue:''},"secondDimensionKeyPath":{type:"string",group:"Misc",defaultValue:''},"secondDimensionTextPath":{type:"string",group:"Misc",defaultValue:''}},aggregations:{"charts":{type:"sap.ui.core.Control",multiple:true,singularName:"chart"},"toolBar":{type:"sap.m.Bar",multiple:false}},associations:{"selectedChart":{type:"sap.ui.core.Control",multiple:false},"firstDimensionSelect":{type:"sap.m.Select",multiple:false},"secondDimensionSelect":{type:"sap.m.Select",multiple:false}},events:{"personalizationPressed":{},"firstDimensionKeySelected":{},"secondDimensionKeySelected":{}}}});sap.ca.ui.charts.ChartToolBar.M_EVENTS={'personalizationPressed':'personalizationPressed','firstDimensionKeySelected':'firstDimensionKeySelected','secondDimensionKeySelected':'secondDimensionKeySelected'};
/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.ChartToolBar");jQuery.sap.require("sap.m.Popover");jQuery.sap.require("sap.m.Button");jQuery.sap.require("sap.m.Bar");jQuery.sap.require("sap.m.Select");jQuery.sap.require("sap.m.Dialog");jQuery.sap.require("sap.ca.ui.Overlay");jQuery.sap.require("sap.ca.ui.utils.resourcebundle");sap.ui.getCore().loadLibrary("sap.viz");
sap.ca.ui.charts.ChartToolBar.prototype.init=function(){this._aChartIcons=[];this._oShowLegendButton=new sap.m.Button({icon:"sap-icon://menu",type:sap.m.ButtonType.Transparent,press:jQuery.proxy(this._onLegendButtonPress,this)}).addStyleClass("legendIcon");this._oShowAllChartButton=new sap.m.Button({type:sap.m.ButtonType.Transparent,press:jQuery.proxy(this._onShowAllChartPress,this)}).addStyleClass("allChartsIcon");this._oChartTitle=new sap.m.Label().addStyleClass("chartToolBarTitle");this._oPersonalizationButton=null;this._oShowLegendAndPersonalizationPopover=null;this._oShowLegendButtonSmall=null;this._oShowLegendButtonClone=null;this._oFullScreenButton=null;this._oFullScreenExitButton=null;this._oFullScreenDialog=null;this._oActiveChartButton=null;this._oFirstDimensionSelect=new sap.m.Select({width:"auto",change:jQuery.proxy(function(e){this.fireEvent("firstDimensionKeySelected",{selectedKey:e.getParameter("selectedItem").getKey()});},this)});this.setAssociation("firstDimensionSelect",this._oFirstDimensionSelect,false);this._oSecondDimensionSelect=new sap.m.Select({width:"auto",change:jQuery.proxy(function(e){this.fireEvent("secondDimensionKeySelected",{selectedKey:e.getParameter("selectedItem").getKey()});},this)});this.setAssociation("secondDimensionSelect",this._oSecondDimensionSelect,false);this._oSecondDimensionTemplate=new sap.ui.core.Item();this._oFirstDimensionTemplate=new sap.ui.core.Item();this._oAllChartList=new sap.m.List({mode:sap.m.ListMode.SingleSelectMaster,showSeparators:sap.m.ListSeparators.None,includeItemInSelection:true,width:"20em",select:jQuery.proxy(function(e){var c=e.getParameter("listItem").getCustomData()[0].getValue();this._switchChart(c);},this)});this._mapChartAndTableIdToListId={};this._oShowAllChartPopover=new sap.m.Popover({placement:sap.m.PlacementType.Bottom,showHeader:false,content:[this._oAllChartList]}).addStyleClass("sapCaUiChartToolBarShowAllChartListPopover");this._oToolBar=new sap.m.Bar({translucent:true,width:"100%",contentLeft:[this._oChartTitle,this._oFirstDimensionSelect,this._oSecondDimensionSelect]}).addStyleClass("iconBar");this.setAggregation("toolBar",this._oToolBar);this.sResizeListenerId=null;if(jQuery.device.is.desktop){this.sResizeListenerId=sap.ui.core.ResizeHandler.register(this,jQuery.proxy(this._setSelectMaxWidth,this));}else{sap.ui.Device.orientation.attachHandler(this._setSelectMaxWidth,this);sap.ui.Device.resize.attachHandler(this._setSelectMaxWidth,this);}this._fullScreenModeExit=false;this._fullScreenModeEntered=false;};
sap.ca.ui.charts.ChartToolBar.prototype.setToolBar=function(o,s){this.setAggregation("toolBar",o,s);jQuery.sap.log.warning("ChartToolBar: the built-in toolBar aggregation content should not be overridden");};
sap.ca.ui.charts.ChartToolBar.prototype.setChartTitle=function(v){this._oChartTitle.setText(v);this.setProperty("chartTitle",v);};
sap.ca.ui.charts.ChartToolBar.prototype.setShowLegend=function(v){this.setProperty("showLegend",v);var c=this.getAggregation("charts");var i;if(c){for(i=0;i<c.length;i++){if(c[i].setShowLegend){c[i].setShowLegend(v);jQuery.sap.log.info("ChartToolBar: propagate showLegend to chart id "+c[i].getId());}else{jQuery.sap.log.info("ChartToolBar: chart id "+c[i].getId()+" is missing the showLegend property");}}}};
sap.ca.ui.charts.ChartToolBar.prototype.setFullScreen=function(v){var c=this.getProperty("fullScreen");if(c!=v){if(c){this._onFullScreenExitPress(null);}else{this._onFullScreenPress(null);}this.setProperty("fullScreen",v);}};
sap.ca.ui.charts.ChartToolBar.prototype.setShowFullScreen=function(v){if(v&&!this._oFullScreenButton&&!this._oFullScreenExitButton){this._oFullScreenButton=new sap.m.Button({icon:"sap-icon://full-screen",type:sap.m.ButtonType.Transparent,visible:true,press:jQuery.proxy(this._onFullScreenPress,this)});this._oFullScreenExitButton=new sap.m.Button({icon:"sap-icon://exit-full-screen",type:sap.m.ButtonType.Transparent,visible:false,press:jQuery.proxy(this._onFullScreenExitPress,this)});}this.setProperty("showFullScreen",v);};
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionPath=function(v,i){this._oFirstDimensionSelect.bindAggregation("items",{path:v,template:this._oFirstDimensionTemplate});this.setProperty("firstDimensionPath",v);};
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionKeyPath=function(v,i){this._oFirstDimensionTemplate.bindProperty("key",{path:v});this.setProperty("firstDimensionKeyPath",v);};
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionTextPath=function(v,i){this._oFirstDimensionTemplate.bindProperty("text",{path:v});this.setProperty("firstDimensionTextPath",v);};
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionPath=function(v,i){this._oSecondDimensionSelect.bindAggregation("items",{path:v,template:this._oSecondDimensionTemplate});this.setProperty("secondDimensionPath",v);};
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionKeyPath=function(v,i){this._oSecondDimensionTemplate.bindProperty("key",{path:v});this.setProperty("secondDimensionKeyPath",v);};
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionTextPath=function(v,i){this._oSecondDimensionTemplate.bindProperty("text",{path:v});this.setProperty("secondDimensionTextPath",v);};
sap.ca.ui.charts.ChartToolBar.prototype.setShowPersonalization=function(v){if(v){if(!this._oPersonalizationButton){this._oPersonalizationButton=new sap.m.Button({icon:"sap-icon://action-settings",type:sap.m.ButtonType.Transparent,press:jQuery.proxy(this.firePersonalizationPressed,this)}).addStyleClass("personalizationIcon");}if(!this._oShowLegendAndPersonalizationPopover){if(!this._oShowLegendButtonClone){this._oShowLegendButtonClone=this._oShowLegendButton.clone();}this._oShowLegendAndPersonalizationPopover=new sap.m.Popover({placement:sap.m.PlacementType.Bottom,showHeader:false,content:[this._oShowLegendButtonClone,this._oPersonalizationButton.clone()]});}if(!this._oShowLegendButtonSmall){this._oShowLegendButtonSmall=new sap.m.Button({icon:"sap-icon://overflow",type:sap.m.ButtonType.Transparent,press:jQuery.proxy(function(){this._oShowLegendAndPersonalizationPopover.openBy(this._oShowLegendButtonSmall);},this)}).addStyleClass("legendSmallIcon");}}else if(!this._oShowLegendButtonSmall){this._oShowLegendButtonSmall=this._oShowLegendButton.clone().removeStyleClass("legendIcon").addStyleClass("legendSmallIcon");}this.setProperty("showPersonalization",v);};
sap.ca.ui.charts.ChartToolBar.prototype.onBeforeRendering=function(){this._oFirstDimensionSelect.setVisible(this._oFirstDimensionSelect.getItems().length>0);this._oSecondDimensionSelect.setVisible(this._oSecondDimensionSelect.getItems().length>0);this._oChartTitle.setVisible(this._oFirstDimensionSelect.getItems().length==0&&this._oSecondDimensionSelect.getItems().length==0);this._oToolBar.removeContentRight();var c=0;if(this._aChartIcons.length>1){for(c=0;c<this._aChartIcons.length;c++){this._oToolBar.insertContentRight(this._aChartIcons[c],c);}this._oToolBar.insertContentRight(this._oShowAllChartButton,c++);}if(this._aChartIcons.length>0){this._oToolBar.insertContentRight(this._oShowLegendButton,c++);this._oToolBar.insertContentRight(this._oShowLegendButtonSmall,c++);}if(this.getShowPersonalization()){this._oToolBar.insertContentRight(this._oPersonalizationButton,c++);}if(this.getShowFullScreen()){this._oToolBar.insertContentRight(this._oFullScreenButton,c++);this._oToolBar.insertContentRight(this._oFullScreenExitButton,c++);}};
sap.ca.ui.charts.ChartToolBar.prototype.onAfterRendering=function(){this._setSelectMaxWidth();var s=this;if(this._fullScreenModeExit){if(this._oFullScreenButton&&this._oFullScreenButton.getVisible()){setTimeout(function(){s._oFullScreenButton.focus();},0);}this._fullScreenModeExit=false;}if(this._fullScreenModeEntered){if(this._oFullScreenExitButton&&this._oFullScreenExitButton.getVisible()){setTimeout(function(){s._oFullScreenExitButton.focus();},0);}this._fullScreenModeEntered=false;}};
sap.ca.ui.charts.ChartToolBar.prototype.exit=function(){this._mapChartAndTableIdToListId=null;if(jQuery.device.is.desktop&&this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null;}else{sap.ui.Device.orientation.detachHandler(this._setSelectMaxWidth,this);sap.ui.Device.resize.detachHandler(this._setSelectMaxWidth,this);}if(this._oFirstDimensionTemplate){this._oFirstDimensionTemplate.destroy();this._oFirstDimensionTemplate=null;}if(this._oSecondDimensionTemplate){this._oSecondDimensionTemplate.destroy();this._oSecondDimensionTemplate=null;}if(this._oShowAllChartPopover){if(this._oShowAllChartPopover.isOpen()){this._oShowAllChartPopover.close();}this._oShowAllChartPopover.destroy();this._oShowAllChartPopover=null;}if(this._oShowLegendAndPersonalizationPopover){this._oShowLegendAndPersonalizationPopover.destroy();this._oShowLegendAndPersonalizationPopover=null;}if(this._oFullScreenDialog){if(this._oFullScreenDialog.isOpen()){this._oFullScreenDialog.close();}this._oFullScreenDialog.destroy();this._oFullScreenDialog=null;}if(jQuery.device.is.desktop){if(this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null;}}else{sap.ui.Device.orientation.detachHandler(this._setSelectMaxWidth,this);sap.ui.Device.resize.detachHandler(this._setSelectMaxWidth,this);}};
sap.ca.ui.charts.ChartToolBar.prototype.addChart=function(o,s){this._onAddingChart(o);};
sap.ca.ui.charts.ChartToolBar.prototype.removeAllCharts=function(){var i;for(i=0;i<this._aChartIcons.length;i++){if(this._aChartIcons[i].destroy){this._aChartIcons[i].destroy();}}this._aChartIcons=[];this._oAllChartList.removeAllItems();this._mapChartAndTableIdToListId={};return this.removeAllAggregation("charts");};
sap.ca.ui.charts.ChartToolBar.prototype.removeChart=function(i){jQuery.sap.log.error("ChartToolBar: removeChart method is not supported, doing removeAllCharts instead");return this.removeAllCharts();};
sap.ca.ui.charts.ChartToolBar.prototype.insertChart=function(o,i,s){jQuery.sap.log.error("ChartToolBar: insertChart method is not supported, doing addChart instead");this._onAddingChart(o);};
sap.ca.ui.charts.ChartToolBar.prototype.insertChart=function(o,i,s){this._onAddingChart(o);};
sap.ca.ui.charts.ChartToolBar.prototype.setSelectedChart=function(i,s){var c=null;if(i instanceof sap.ui.core.Control){c=i;}else{c=this._findChartById(i);}var S=!(c instanceof sap.m.Table);this._oShowLegendButton.setEnabled(S);if(this.getShowPersonalization()){if(this._oShowLegendButtonClone){this._oShowLegendButtonClone.setEnabled(S);}}else{if(this._oShowLegendButtonSmall){this._oShowLegendButtonSmall.setEnabled(S);}}this._oAllChartList.setSelectedItemById(this._mapChartAndTableIdToListId[c.getId()]);if(c instanceof sap.m.Table){this._oShowAllChartButton.setIcon("sap-icon://table-chart");}else if(c.getIcon){this._oShowAllChartButton.setIcon(c.getIcon());}else{jQuery.sap.log.error("ChartToolBar:control id "+c.getId()+" is not a sap.m.Table and has no getIcon method");}this.setAssociation("selectedChart",c,s);};
sap.ca.ui.charts.ChartToolBar.prototype.setFirstDimensionSelect=function(i,s){jQuery.sap.log.error("ChartToolBar: setFirstDimensionSelect method is not supported");};
sap.ca.ui.charts.ChartToolBar.prototype.setSecondDimensionSelect=function(i,s){jQuery.sap.log.error("ChartToolBar: setSecondDimensionSelect method is not supported");};
sap.ca.ui.charts.ChartToolBar.prototype._setSelectMaxWidth=function(){if(this._oFirstDimensionSelect.getItems().length>0){var $=this._oToolBar.$();var b=$.find(".sapMBarRight").width();if(b===0){this._oFirstDimensionSelect.setMaxWidth("100%");if(this._oSecondDimensionSelect.getItems().length>0){this._oSecondDimensionSelect.setMaxWidth("100%");}jQuery.sap.log.debug("ChartToolBar: cannot set sap.m.Select maxWidth as sap.m.Bar rightContent width is evaluated to 0");}else{var a=$.width()-b;if(this._oSecondDimensionSelect.getItems().length>0){a=Math.floor(a/2);this._oFirstDimensionSelect.setMaxWidth(a+"px");this._oSecondDimensionSelect.setMaxWidth(a+"px");}else{this._oFirstDimensionSelect.setMaxWidth(a+"px");}}}};
sap.ca.ui.charts.ChartToolBar.prototype._onAddingChart=function(c){if(c.setShowLegend){c.setShowLegend(this.getShowLegend());}this.addAggregation("charts",c);var b=new sap.m.Button({type:sap.m.ButtonType.Transparent,customData:[new sap.ui.core.CustomData({key:'chartId',value:c.getId()})],press:jQuery.proxy(function(e){var C=e.getSource().getCustomData()[0].getValue();this._switchChart(C);},this)}).addStyleClass("chartIcon");if(c instanceof sap.m.Table){b.setIcon("sap-icon://table-chart");}else if(c.getIcon){b.setIcon(c.getIcon());}else{jQuery.sap.log.error("ChartToolBar: inserted control id "+c.getId()+" is not a sap.m.Table and has no getIcon method");}this._aChartIcons.push(b);var s=new sap.m.StandardListItem({icon:b.getIcon(),title:this._findChartName(c),customData:[new sap.ui.core.CustomData({key:'chartId',value:c.getId()})]});this._oAllChartList.addItem(s);this._mapChartAndTableIdToListId[c.getId()]=s.getId();if(this.getAggregation("charts").length==1){this._oAllChartList.setSelectedItem(s);this.setSelectedChart(c);this._oActiveChartButton=b.addStyleClass("activeButton");}};
sap.ca.ui.charts.ChartToolBar.prototype._findChartName=function(c){var l="";if(c.getBindingInfo("label")){var b=c.getBindingInfo("label");if(b.parts&&b.parts.length>0){var p=b.parts[0].path;var m=b.parts[0].model;var M=sap.ui.getCore().getModel(m);if(M){l=M.getProperty(p);}}}else if(c.getLabel){l=c.getLabel();}else if(c instanceof sap.m.Table){l=sap.ca.ui.utils.resourcebundle.getText("ChartToolBar.ChartName.Table");}else{jQuery.sap.log.error("ChartToolBar: can't find chart label for chart id "+c.getId());}return l;};
sap.ca.ui.charts.ChartToolBar.prototype._findChartById=function(I){var c=null;var C=this.getAggregation("charts");var i;if(C){for(i=0;!c&&i<C.length;i++){if(C[i].getId()===I){c=C[i];}}}return c;};
sap.ca.ui.charts.ChartToolBar.prototype._onLegendButtonPress=function(e){this.setShowLegend(!this.getShowLegend());if(this._oShowLegendAndPersonalizationPopover&&this._oShowLegendAndPersonalizationPopover.isOpen()){this._oShowLegendAndPersonalizationPopover.close();}};
sap.ca.ui.charts.ChartToolBar.prototype._onFullScreenExitPress=function(e){jQuery.sap.log.info("ChartToolBar: exiting fullscreen");this._fullScreenModeExit=true;if(this._oFullScreenButton){this._oFullScreenButton.setVisible(true);}if(this._oFullScreenExitButton){this._oFullScreenExitButton.setVisible(false);}if(this._oFullScreenDialog){this._oFullScreenDialog.close();}this.setProperty("fullScreen",false);this.invalidate();};
sap.ca.ui.charts.ChartToolBar.prototype._onFullScreenPress=function(e){jQuery.sap.log.info("ChartToolBar: toggle to fullscreen");this._fullScreenModeEntered=true;if(this._oFullScreenButton){this._oFullScreenButton.setVisible(false);}if(this._oFullScreenExitButton){this._oFullScreenExitButton.setVisible(true);}this._oToolBar.rerender();if(!this._oFullScreenDialog){this._oFullScreenDialog=new sap.ca.ui.Overlay();}this._oFullScreenDialog.open(this,true);this.setProperty("fullScreen",true);this.invalidate();};
sap.ca.ui.charts.ChartToolBar.prototype._switchChart=function(c){var r=null;var i;for(i=0;!r&&i<this._aChartIcons.length;i++){if(this._aChartIcons[i].getCustomData()[0].getValue()===c){r=this._aChartIcons[i];}}if(r){if(this._oActiveChartButton){this._oActiveChartButton.removeStyleClass("activeButton");}this._oActiveChartButton=r;this._oActiveChartButton.addStyleClass("activeButton");}var C=this._findChartById(c);this.setSelectedChart(C);if(this._oShowAllChartPopover.isOpen()){this._oShowAllChartPopover.close();}jQuery.sap.log.info("ChartToolBar: switch to chart id "+c);};
sap.ca.ui.charts.ChartToolBar.prototype._onShowAllChartPress=function(e){this._oShowAllChartPopover.openBy(this._oShowAllChartButton);};
