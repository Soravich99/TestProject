/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Rectangle"],function(R){"use strict";var C=R.extend("sap.gantt.shape.cal.Calendar",{metadata:{properties:{isBulk:{type:"boolean",defaultValue:true},enableSelection:{type:"boolean",defaultValue:false},calendarName:{type:"string",defaultValue:"nwt"}}}});C.prototype.init=function(){R.prototype.init.apply(this,arguments);var r=sap.ui.getCore().getLibraryResourceBundle("sap.gantt");this.setProperty("ariaLabel",r.getText("ARIA_CALENDAR"));};C.prototype.getCalendarName=function(d){return this._configFirst("calendarName",d);};C.prototype.getIsBulk=function(d){if(this.mShapeConfig.isBulk){return this._configFirst("isBulk",d);}return true;};C.prototype.getEnableSelection=function(d){if(this.mShapeConfig.enableSelection){return this._configFirst("enableSelection",d);}return false;};C.prototype.getX=function(d){if(this.mShapeConfig.x){return this._configFirst("x",d);}return this.mChartInstance._oStatusSet.aViewBoundary[0];};C.prototype.getY=function(d,r){if(this.mShapeConfig.y){return this._configFirst("y",d);}return r.y;};C.prototype.getWidth=function(d){if(this.mShapeConfig.width){return this._configFirst("width",d);}var s=this.mChartInstance._oStatusSet;if(s){return s.aViewBoundary[1]-s.aViewBoundary[0];}else{return 0;}};C.prototype.getHeight=function(d,r){if(this.mShapeConfig.height){return this._configFirst("height",d);}return r.rowHeight;};C.prototype.getFill=function(d,r){if(this.mShapeConfig.hasShapeProperty("fill")){return this._configFirst("fill",d);}var c=this.getCalendarName(d,r);var p=this.mChartInstance.getCalendarDef();if(p){return p.getRefString(c);}};return C;},true);
