/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/type/Date','sap/ui/model/odata/type/ODataType','./InputBase','sap/ui/core/LocaleData','sap/ui/core/library','sap/ui/core/format/DateFormat'],function(q,S,O,I,L,c,D){"use strict";var C=c.CalendarType;var a=I.extend("sap.m.DateTimeField",{metadata:{"abstract":true,library:"sap.m",properties:{displayFormat:{type:"string",group:"Appearance",defaultValue:null},valueFormat:{type:"string",group:"Data",defaultValue:null},dateValue:{type:"object",group:"Data",defaultValue:null}}}});a.prototype.setValue=function(v){v=this.validateProperty("value",v);var o=this.getValue();if(v===o){return this;}else{this._lastValue=v;}this.setProperty("value",v);this._bValid=true;var d;if(v){d=this._parseValue(v);if(!d||d.getTime()<this._oMinDate.getTime()||d.getTime()>this._oMaxDate.getTime()){this._bValid=false;q.sap.log.warning("Value can not be converted to a valid date",this);}}this.setProperty("dateValue",d);if(this.getDomRef()){var s;if(d){s=this._formatValue(d);}else{s=v;}if(this._$input.val()!==s){this._$input.val(s);this._curpos=this._$input.cursorPos();}}return this;};a.prototype.setDateValue=function(d){if(this._isValidDate(d)){throw new Error("Date must be a JavaScript date object; "+this);}if(q.sap.equal(this.getDateValue(),d)){return this;}d=this._dateValidation(d);var v=this._formatValue(d,true);if(v!==this.getValue()){this._lastValue=v;}this.setProperty("value",v);if(this.getDomRef()){var o=this._formatValue(d);if(this._$input.val()!==o){this._$input.val(o);this._setLabelVisibility();this._curpos=this._$input.cursorPos();}}return this;};a.prototype.setValueFormat=function(v){this.setProperty("valueFormat",v,true);var V=this.getValue();if(V){this._handleDateValidation(this._parseValue(V));}return this;};a.prototype.setDisplayFormat=function(d){this.setProperty("displayFormat",d,true);this.updateDomValue(this._formatValue(this.getDateValue()));return this;};a.prototype.getDisplayFormatType=function(){return null;};a.prototype._dateValidation=function(d){this._bValid=true;this.setProperty("dateValue",d);return d;};a.prototype._handleDateValidation=function(d){this._bValid=true;this.setProperty("dateValue",d);};a.prototype._getPlaceholder=function(){var p=this.getPlaceholder();if(!p){p=this._getDisplayFormatPattern();if(!p){p=this._getDefaultDisplayStyle();}if(this._checkStyle(p)){var l=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();var o=L.getInstance(l);p=this._getPlaceholderPattern(o,p);}}return p;};a.prototype._getPlaceholderPattern=function(l,p){return l.getDatePattern(p);};a.prototype._parseValue=function(v,d){return this._getFormatter(d).parse(v);};a.prototype._formatValue=function(d,v){if(d){return this._getFormatter(!v).format(d);}return"";};a.prototype._getDefaultDisplayStyle=function(){return"medium";};a.prototype._getDefaultValueStyle=function(){return"short";};a.prototype._getFormatter=function(d){var p=this._getBoundValueTypePattern(),r=false,f,b=this.getBinding("value"),s;if(b&&b.oType&&b.oType.oOutputFormat){r=!!b.oType.oOutputFormat.oFormatOptions.relative;s=b.oType.oOutputFormat.oFormatOptions.calendarType;}if(!p){if(d){p=(this.getDisplayFormat()||this._getDefaultDisplayStyle());s=this.getDisplayFormatType();}else{p=(this.getValueFormat()||this._getDefaultValueStyle());s=C.Gregorian;}}if(!s){s=sap.ui.getCore().getConfiguration().getCalendarType();}if(d){if(p===this._sUsedDisplayPattern&&s===this._sUsedDisplayCalendarType){f=this._oDisplayFormat;}}else{if(p===this._sUsedValuePattern&&s===this._sUsedValueCalendarType){f=this._oValueFormat;}}if(f){return f;}return this._getFormatterInstance(f,p,r,s,d);};a.prototype._getFormatterInstance=function(f,p,r,s,d){if(this._checkStyle(p)){f=this._getFormatInstance({style:p,strictParsing:true,relative:r,calendarType:s},d);}else{f=this._getFormatInstance({pattern:p,strictParsing:true,relative:r,calendarType:s},d);}if(d){this._sUsedDisplayPattern=p;this._sUsedDisplayCalendarType=s;this._oDisplayFormat=f;}else{this._sUsedValuePattern=p;this._sUsedValueCalendarType=s;this._oValueFormat=f;}return f;};a.prototype._getFormatInstance=function(A,d){return D.getInstance(A);};a.prototype._checkStyle=function(p){return(p==="short"||p==="medium"||p==="long"||p==="full");};a.prototype._getDisplayFormatPattern=function(){return this._getBoundValueTypePattern()||this.getDisplayFormat();};a.prototype._getBoundValueTypePattern=function(){var b=this.getBinding("value"),B=b&&b.getType&&b.getType();if(B instanceof S){return B.getOutputPattern();}if(B instanceof O&&B.oFormat){return B.oFormat.oFormatOptions.pattern;}return undefined;};a.prototype._isValidDate=function(d){return d&&q.type(d)!=="date";};return a;});
