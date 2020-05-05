/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/Object","sap/ui/core/Core","sap/gantt/misc/Format"],function(q,B,C,F){"use strict";var T=B.extend("sap.gantt.eventHandler.TimePopoverHandler",{constructor:function(c){B.call(this);this._bSelectShape=false;this._bDragShape=false;this._iOffsetX=0;this._iOffsetY=-28;this._oSourceChart=c;this._oTimePopoverModel=undefined;}});T.prototype.handleTimePopover=function(e){this._handleTimePopoverDragStart(e);};T.prototype._handleTimePopoverDragStart=function(e){this._bSelectShape=false;this._bDragShape=false;this._calcPositionGap();q(document.body).unbind("mousemove.shapeDragDrop");q(document).unbind("mouseup.shapeDragDrop");q(document.body).bind("mousemove.shapeDragDrop",this._handleTimePopoverDragging.bind(this));q(document).bind("mouseup.shapeDragDrop",this._handleTimePopoverEnd.bind(this));};T.prototype._calcPositionGap=function(e){var t;var r=C.getConfiguration().getRTL();if(this._oSourceChart.getGhostAlignment()===sap.gantt.dragdrop.GhostAlignment.Start){this._iOffsetX=r?this._oSourceChart._oDraggingData.dragStartPoint.shapeWidth:-this._oSourceChart._oDraggingData.dragStartPoint.shapeWidth;}else if(this._oSourceChart.getGhostAlignment()===sap.gantt.dragdrop.GhostAlignment.None){t=r?this._oSourceChart._oDraggingData.dragStartPoint.x-this._oSourceChart._oDraggingData.dragStartPoint.shapeX:this._oSourceChart._oDraggingData.dragStartPoint.x-this._oSourceChart._oDraggingData.dragStartPoint.shapeX-this._oSourceChart._oDraggingData.dragStartPoint.shapeWidth;this._iOffsetX=Math.ceil(t);}else if(this._oSourceChart.getGhostAlignment()===sap.gantt.dragdrop.GhostAlignment.End){this._iOffsetX=0;}var R=this._oSourceChart.getBaseRowHeight();this._iOffsetY=parseInt(-(R)/2,10);};T.prototype._handleTimePopoverDragging=function(e){var d=d3.select("#dragDropShadow");var a=d[0];if(this._oSourceChart.getEnableShapeTimeDisplay()&&a[0]){var p=this._getPopoverPosition(e);this._displayTimePopover(p,a);}};T.prototype._displayTimePopover=function(p,d){if(!this._isDraggingShape()){this._changeDraggingStatus();}else if(!this._existsPopover()){this._buildPopover(p);this.oTimePopover.openBy(d);}else{this._updatePopover(p);}};T.prototype._buildPopover=function(p){var s=sap.ui.getCore().getLibraryResourceBundle("sap.gantt").getText("GNT_CURRENT_START");var e=sap.ui.getCore().getLibraryResourceBundle("sap.gantt").getText("GNT_CURRENT_END");this.oTimePopover=new sap.m.ResponsivePopover({showArrow:false,showHeader:false,offsetX:"{time>/offsetX}",offsetY:"{time>/offsetY}",placement:"{time>/placement}",content:[new sap.m.FlexBox({alignItems:"Center",items:[new sap.m.Panel({content:[new sap.m.FlexBox({alignItems:"Center",justifyContent:"End",items:[new sap.m.Label({text:s})]}).addStyleClass("sapUiTinyMargin"),new sap.m.FlexBox({alignItems:"Center",justifyContent:"End",items:[new sap.m.Label({text:e})]}).addStyleClass("sapUiTinyMargin")]}).addStyleClass("sapUiNoContentPadding"),new sap.m.Panel({content:[new sap.m.FlexBox({justifyContent:"Start",items:[new sap.m.Label({text:"{time>/startNewDate}"})]}).addStyleClass("sapUiTinyMargin"),new sap.m.FlexBox({justifyContent:"Start",items:[new sap.m.Label({text:"{time>/endNewDate}"})]}).addStyleClass("sapUiTinyMargin")]}).addStyleClass("sapUiNoContentPadding")]})]});this._oTimePopoverModel=new sap.ui.model.json.JSONModel(p);this.oTimePopover.setModel(this._oTimePopoverModel,"time");};T.prototype._updatePopover=function(p){this._oTimePopoverModel=new sap.ui.model.json.JSONModel();this._oTimePopoverModel.setData(p);this.oTimePopover.setModel(this._oTimePopoverModel,"time");};T.prototype._calPopoverPosition=function(s,e){var g=this._oSourceChart.getLocale();var S=F.abapTimestampToTimeLabel(new Date(s),g);var E=F.abapTimestampToTimeLabel(new Date(e),g);var p={startNewDate:S,endNewDate:E,offsetX:this._iOffsetX,offsetY:this._iOffsetY,placement:sap.m.PlacementType.Right};return p;};T.prototype._changeDraggingStatus=function(){if(this._bSelectShape){this._bDragShape=true;}if(!this._bSelectShape){this._bSelectShape=true;}};T.prototype._isDraggingShape=function(){return this._bSelectShape&&this._bDragShape;};T.prototype._existsPopover=function(){return this.oTimePopover!==undefined;};T.prototype._getPopoverPosition=function(e){this._oSourceChart._collectDraggingShapeData(this._oSourceChart._oDraggingData,e);var t=this._oSourceChart._oDraggingData.targetData;var p=this._calPopoverPosition(t["mouseTimestamp"].startTime,t["mouseTimestamp"].endTime);return p;};T.prototype._handleTimePopoverEnd=function(){if(this.oTimePopover){this.oTimePopover.destroy();this.oTimePopover=undefined;}q(document.body).unbind("mousemove.shapeDragDrop");q(document.body).unbind("mouseup.shapeDragDrop");};return T;},true);
