/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");jQuery.sap.require("sap.ca.ui.model.type.Date");sap.ca.ui.charts.DefaultFormatterFunction={SHORTNUMBER:"ShortNumber",STANDARDNUMBER:"StandardNumber",SHORTDATE:"ShortDate",MEDIUMDATE:"MediumDate",LONGDATE:"LongDate",DAYSAGODATE:"DaysAgoDate"};
sap.ca.ui.charts.ChartFormatter=function(){if(sap.ca.ui.charts.ChartFormatter.caller!=sap.ca.ui.charts.ChartFormatter.getInstance){throw new Error("This object cannot be instantiated");}this.formatFunctions=[];};
sap.ca.ui.charts.ChartFormatter.getInstance=function(){if(!this.instance){this.instance=new sap.ca.ui.charts.ChartFormatter();}return this.instance;};
sap.ca.ui.charts.ChartFormatter.prototype.addFormatter=function(c,l,f){if(typeof f!="string"&&typeof f!="function"){jQuery.sap.log.error("Cannot add formatter : formatter must be a string or a function");return null;}if(c&&l){var a=this._getFormatString(c,l,f);this._pushToFormatFunctions(a,f);this._customizeFormatter();return a;}else{jQuery.sap.log.error("Cannot add formatter : chart and label must be set");return null;}};
sap.ca.ui.charts.ChartFormatter.prototype._customizeFormatter=function(){sap.viz.api.env.Format.numericFormatter(this);};
sap.ca.ui.charts.ChartFormatter.prototype.format=function(v,f){if(f){if(this.formatFunctions[f]){return this.formatFunctions[f](v);}else{var a;if(this._legacyBubbleFormatter!=null&&typeof this._legacyBubbleFormatter=="function"){a=this._legacyBubbleFormatter(v,f);if(a&&a!=v){return a;}}return v;}}else{return v;}};
sap.ca.ui.charts.ChartFormatter.prototype._getFormatString=function(c,l,f){var a="";if(typeof f=="string"){a=f;}else{a=c.getId()+l;}return a;};
sap.ca.ui.charts.ChartFormatter.prototype._pushToFormatFunctions=function(f,a){if(typeof a=="string"){switch(a){case sap.ca.ui.charts.DefaultFormatterFunction.SHORTNUMBER:if(!this.formatFunctions[f])this.formatFunctions[f]=this._getShortNumberFormatter();break;case sap.ca.ui.charts.DefaultFormatterFunction.STANDARDNUMBER:if(!this.formatFunctions[f])this.formatFunctions[f]=this._getStandardNumberFormatter();break;case sap.ca.ui.charts.DefaultFormatterFunction.SHORTDATE:if(!this.formatFunctions[f])this.formatFunctions[f]=this._getShortDateFormatter();break;case sap.ca.ui.charts.DefaultFormatterFunction.MEDIUMDATE:if(!this.formatFunctions[f])this.formatFunctions[f]=this._getMediumDateFormatter();break;case sap.ca.ui.charts.DefaultFormatterFunction.LONGDATE:if(!this.formatFunctions[f])this.formatFunctions[f]=this._getLongDateFormatter();break;case sap.ca.ui.charts.DefaultFormatterFunction.DAYSAGODATE:if(!this.formatFunctions[f])this.formatFunctions[f]=this._getDaysAgoDateFormatter();break;}}else{this.formatFunctions[f]=a;}};
sap.ca.ui.charts.ChartFormatter.prototype._getShortNumberFormatter=function(){var n=sap.ca.ui.model.format.NumberFormat.getInstance({style:'short'});return jQuery.proxy(n.format,n);};
sap.ca.ui.charts.ChartFormatter.prototype._getStandardNumberFormatter=function(){var n=sap.ca.ui.model.format.NumberFormat.getInstance({style:'Standard'});return jQuery.proxy(n.format,n);};
sap.ca.ui.charts.ChartFormatter.prototype._getShortDateFormatter=function(){var f=function(v){if(!this.shortDateType){this.shortDateType=new sap.ca.ui.model.type.Date({style:'short',source:{pattern:"timestamp"}});}return this.shortDateType.formatValue(v,"string");};return jQuery.proxy(f,this);};
sap.ca.ui.charts.ChartFormatter.prototype._getMediumDateFormatter=function(){var f=function(v){if(!this.mediumDateType){this.mediumDateType=new sap.ca.ui.model.type.Date({style:'medium',source:{pattern:"timestamp"}});}return this.mediumDateType.formatValue(v,"string");};return jQuery.proxy(f,this);};
sap.ca.ui.charts.ChartFormatter.prototype._getLongDateFormatter=function(){var f=function(v){if(!this.longDateType){this.longDateType=new sap.ca.ui.model.type.Date({style:'long',source:{pattern:"timestamp"}});}return this.longDateType.formatValue(v,"string");};return jQuery.proxy(f,this);};
sap.ca.ui.charts.ChartFormatter.prototype._getDaysAgoDateFormatter=function(){var f=function(v){if(!this.daysAgoDateType){this.daysAgoDateType=new sap.ca.ui.model.type.Date({style:'daysAgo',source:{pattern:"timestamp"}});}return this.daysAgoDateType.formatValue(v,"string");};return jQuery.proxy(f,this);};
