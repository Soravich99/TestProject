/*!
 * SAP APF Analysis Path Framework
 * 
 * (c) Copyright 2012-2015 SAP SE. All rights reserved
 */
jQuery.sap.declare('sap.apf.core.utils.filterTerm');jQuery.sap.require('sap.apf.core.constants');jQuery.sap.require('sap.apf.utils.utils');(function(){'use strict';sap.apf.core.utils.FilterTerm=function(m,p,o,v,h){this.type="filterTerm";this.propertyName=p;this.operator=o;this.value=v;this.highValue=h;this.messageHandler=m;if(this.operator.length==2){this.operator=this.operator.toUpperCase();}m.check(this.operator!==undefined,"sap.apf.utils.FilterTerm.constructor operator undefined");m.check(jQuery.inArray(this.operator,sap.apf.core.constants.aSelectOpt)>-1,"sap.apf.core.utils.FilterTerm operator "+this.operator+" not supported");m.check(this.propertyName!==undefined,"sap.apf.utils.core.FilterTerm propertyName undefined");m.check(this.value!==undefined,"sap.apf.utils.FilterTerm value undefined");};sap.apf.core.utils.FilterTerm.prototype.isConsistentWithFilter=function(p,v){var a;var i;if(p!==this.propertyName){return true;}if(this.operator===sap.apf.core.constants.FilterOperators.EQ){if(this.value instanceof Date&&v instanceof Date){return(this.value.valueOf()===v.valueOf());}return(this.value===v);}else if(this.operator===sap.apf.core.constants.FilterOperators.LT){if(this.value instanceof Date&&v instanceof Date){return(this.value.valueOf()>v.valueOf());}return(this.value>v);}else if(this.operator===sap.apf.core.constants.FilterOperators.LE){if(this.value instanceof Date&&v instanceof Date){return(this.value.valueOf()>=v.valueOf());}return(this.value>=v);}else if(this.operator===sap.apf.core.constants.FilterOperators.GT){if(this.value instanceof Date&&v instanceof Date){return(this.value.valueOf()<v.valueOf());}return(this.value<v);}else if(this.operator===sap.apf.core.constants.FilterOperators.BT){if(this.value instanceof Date&&v instanceof Date){return(this.value.valueOf()<=v.valueOf()&&v.valueOf()<=this.highValue.valueOf());}return(this.value<=v&&v<=this.highValue);}else if(this.operator===sap.apf.core.constants.FilterOperators.GE){if(this.value instanceof Date&&v instanceof Date){return(this.value.valueOf()<=v.valueOf());}return(this.value<=v);}else if(this.operator===sap.apf.core.constants.FilterOperators.NE){if(this.value instanceof Date&&v instanceof Date){return!(this.value.valueOf()===v.valueOf());}return!(this.value===v);}else if(this.operator===sap.apf.core.constants.FilterOperators.StartsWith){if(this.value.length>v.length){return false;}a=v.slice(0,this.value.length);return(a===this.value);}else if(this.operator===sap.apf.core.constants.FilterOperators.EndsWith){if(this.value.length>v.length){return false;}a=v.slice(-this.value.length);return(a===this.value);}else if(this.operator===sap.apf.core.constants.FilterOperators.Contains){i=v.indexOf(this.value);return(i>-1);}};sap.apf.core.utils.FilterTerm.prototype.toUrlParam=function(c){var s="'";var a=" ";var p="";var v,h;if(c&&c.formatValue){v=c.formatValue(this.propertyName,this.value);if(this.highValue){h=c.formatValue(this.propertyName,this.highValue);}}else{if(typeof this.value==='number'){v=this.value;}else{v=s+sap.apf.utils.escapeOdata(this.value)+s;}if(this.highValue){if(typeof this.value==='number'){h=this.highValue;}else{h=s+sap.apf.utils.escapeOdata(this.highValue)+s;}}}if(this.operator===sap.apf.core.constants.FilterOperators.StartsWith){p='startswith('+sap.apf.utils.escapeOdata(this.propertyName)+','+v+')';p=jQuery.sap.encodeURL(p);}else if(this.operator===sap.apf.core.constants.FilterOperators.EndsWith){p='endswith('+sap.apf.utils.escapeOdata(this.propertyName)+','+v+')';p=jQuery.sap.encodeURL(p);}else if(this.operator===sap.apf.core.constants.FilterOperators.Contains){p='substringof('+v+','+sap.apf.utils.escapeOdata(this.propertyName)+')';p=jQuery.sap.encodeURL(p);}else if(this.operator===sap.apf.core.constants.FilterOperators.BT){p='(('+jQuery.sap.encodeURL(sap.apf.utils.escapeOdata(this.propertyName)+a+"ge"+a+v)+')'+jQuery.sap.encodeURL(a+'and'+a)+'('+jQuery.sap.encodeURL(sap.apf.utils.escapeOdata(this.propertyName)+a+"le"+a+h)+'))';}else{p='('+jQuery.sap.encodeURL(sap.apf.utils.escapeOdata(this.propertyName)+a+this.operator.toLowerCase()+a+v)+')';}return p;};sap.apf.core.utils.FilterTerm.prototype.getProperty=function(){return this.propertyName;};sap.apf.core.utils.FilterTerm.prototype.getOp=function(){return this.operator;};sap.apf.core.utils.FilterTerm.prototype.getValue=function(){return this.value;};sap.apf.core.utils.FilterTerm.prototype.getHighValue=function(){return this.highValue;};sap.apf.core.utils.FilterTerm.prototype.getHash=function(){var s=this.propertyName+this.operator+this.value;if(this.highValue){s+=this.highValue;}return sap.apf.utils.hashCode(s);};sap.apf.core.utils.FilterTerm.prototype.copy=function(){return new sap.apf.core.utils.FilterTerm(this.messageHandler,this.propertyName,this.operator,this.value,this.highValue);};sap.apf.core.utils.FilterTerm.prototype.removeTermsByProperty=function(p){return this.internalRemoveTermsByProperty(p);};sap.apf.core.utils.FilterTerm.prototype.internalRemoveTermsByProperty=function(p){var i=0;var l=0;if(p instanceof Array){l=p.length;for(i=0;i<l;i++){if(this.propertyName===p[i]){return undefined;}}return this.copy();}if(this.propertyName===p){return undefined;}return this.copy();};sap.apf.core.utils.FilterTerm.prototype.removeTerms=function(p,o,v){var i=0;var l=0;if(p instanceof Array){l=p.length;for(i=0;i<l;i++){if(this.propertyName===p[i]&&this.operator===o&&this.value===v){return undefined;}}return this.copy();}if(this.propertyName===p&&this.operator===o&&this.value===v){return undefined;}return this.copy();};sap.apf.core.utils.FilterTerm.prototype.mapToSapUI5FilterExpression=function(){if(this.operator===sap.apf.core.constants.FilterOperators.BT){return new sap.ui.model.Filter({path:this.propertyName,operator:this.operator,value1:this.value,value2:this.highValue});}return new sap.ui.model.Filter({path:this.propertyName,operator:this.operator,value1:this.value});};sap.apf.core.utils.FilterTerm.prototype.traverse=function(v){return v.processTerm(this);};}());
