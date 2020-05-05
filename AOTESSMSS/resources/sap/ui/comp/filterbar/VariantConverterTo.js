/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2017 SAP SE. All rights reserved
	
 */
sap.ui.define(['jquery.sap.global','sap/ui/comp/library','sap/ui/comp/valuehelpdialog/ValueHelpDialog','sap/ui/comp/odata/ODataType','sap/ui/comp/util/FormatUtil','sap/ui/core/format/DateFormat'],function(q,l,V,O,F,D){"use strict";var a=l.smartfilterbar.FilterType;var b=l.valuehelpdialog.ValueHelpRangeOperation;var A=l.ANALYTICAL_PARAMETER_PREFIX;var c=function(){};c.prototype.convert=function(k,f,d,o,v){var e,i,j,J,n=null,B,s;var S={SelectionVariantID:k};this._sAPILevel=v;if(d&&f){j=JSON.parse(d);if(j){e=this._getFields(f);if(e&&e.length>0){for(i=0;i<e.length;i++){this._convertField(S,e[i],j,o);}}if(j._CUSTOM){if(typeof j._CUSTOM==="string"){J=JSON.parse(j._CUSTOM);}else{J=j._CUSTOM;}for(n in J){if(n){this._addSingleValue(S,n,c._getValue(J[n],true));}}}if(o&&o.getBasicSearchName){B=o.getBasicSearchName();if(B){s=o.getBasicSearchValue();this._addSingleValue(S,B,c._getValue(s,true));}}}}return JSON.stringify(S);};c.prototype._getParameterMetaData=function(n,f){var i,j,g;var d=f.getFilterBarViewMetadata();if(d){for(i=0;i<d.length;i++){g=d[i];for(j=0;j<g.fields.length;j++){if(n===g.fields[j].fieldName){return g.fields[j];}}}}if(f.getAnalyticalParameters){var e=f.getAnalyticalParameters();if(e){for(j=0;j<e.length;j++){if(n===e[j].fieldName){return e[j];}}}}return null;};c.prototype._convertField=function(s,f,C,o){var d,v,e=null,r,g,h,i,j;if(C&&f&&s){d=C[f];if(d){g=this._getParameterMetaData(f,o);if(g){if(g.isCustomFilterField){return;}if(g.filterRestriction===a.single){v=(d.value===undefined)?d:d.value;v=c._getValueWithMetadata(o,g,v,true);this._addSingleValue(s,f,v);}else if(g.filterRestriction===a.interval){if(d.conditionTypeInfo){this._convertFieldByValue(s,f,C,o,g);}else{r=c.addRangeEntry(s,f);if((g.type==="Edm.DateTime")&&!d.high){d.high=d.low;}else if((g.type==="Edm.String")&&!d.high){e="EQ";}if(g.type==="Edm.Time"){this._addRangeMultipleRangeValues(o,g,r,d.ranges,true);}else if(g.type==="Edm.DateTimeOffset"&&!d.high){if(!this._oFormat){this._oFormat=D.getDateTimeInstance({UTC:false});}e="BT";h=F.parseDateTimeOffsetInterval(d.low);if(h&&(h.length===2)&&h[0]){i={low:h[0],high:h[1]};j=this._oFormat.parse(h[0]);if(j){i.low=j.toISOString();}j=this._oFormat.parse(h[1]);if(j){i.high=j.toISOString();}this._addRangeLowHigh(o,g,r,i,"BT");}else{this._addRangeLowHigh(o,g,r,d,"EQ");}}else if(O.isNumeric(g.type)&&!d.high){h=F.parseFilterNumericIntervalData(d.low);if(h&&(h.length===2)&&h[0]){this._addRangeLowHigh(o,g,r,{low:h[0],high:h[1]},"BT");}else{this._addRangeLowHigh(o,g,r,d,"EQ");}}else{this._addRangeLowHigh(o,g,r,d,e);}}}else if(g.filterRestriction===a.multiple){r=c.addRangeEntry(s,f);if(d.items&&d.items.length>0){this._addRangeMultipleSingleValues(o,g,r,d.items);}else if(d.ranges&&d.ranges.length>0){this._addRangeMultipleRangeValues(o,g,r,d.ranges,d.conditionTypeInfo?true:false);}else{this._addRangeSingleValue(r,d.value);}}else{this._convertFieldByValue(s,f,C,o,g);}}else{this._convertFieldByValue(s,f,C,o,g);}}}};c.prototype._convertFieldByValue=function(s,f,C,o,d){var e;var r;if(C&&f&&s){e=C[f];if(e){if(e.conditionTypeInfo){if(e.ranges&&e.ranges.length>0){r=c.addRangeEntry(s,f);c.addRanges(r,e.ranges,o,d);}}else if((e.ranges!==undefined)&&(e.items!==undefined)&&(e.value!==undefined)){r=c.addRangeEntry(s,f);if(e.ranges&&e.ranges.length>0){c.addRanges(r,e.ranges,o,d);}if(e.items&&e.items.length>0){this._addRangeMultipleSingleValues(o,d,r,e.items);}if(e.value){this._addRangeSingleValue(r,c._getValueWithMetadata(o,d,e.value));}}else if((e.items!==undefined)&&e.items&&(e.items.length>0)){r=c.addRangeEntry(s,f);this._addRangeMultipleSingleValues(o,d,r,e.items);}else if((e.low!==undefined)&&e.low&&(e.high!==undefined)&&e.high){r=c.addRangeEntry(s,f);this._addRangeLowHigh(o,d,r,e);}else if((e.value!==undefined)&&e.value){this._addSingleValue(s,f,e.value);}else if(e){this._addSingleValue(s,f,e);}}}};c.addRangeEntry=function(s,f){var o={PropertyName:f,Ranges:[]};if(!s.SelectOptions){s.SelectOptions=[];}s.SelectOptions.push(o);return o.Ranges;};c.addRanges=function(r,R,f,o){var s,d,L,h;for(var i=0;i<R.length;i++){s=R[i].exclude?"E":"I";L=c._getValueWithMetadata(f,o,R[i].value1,true);h=null;if(R[i].operation===b.BT){h=c._getValueWithMetadata(f,o,R[i].value2);}switch(R[i].operation){case b.Contains:d="CP";if(L){L="*"+L+"*";}break;case b.StartsWith:d="CP";if(L){L=L+"*";}break;case b.EndsWith:d="CP";if(L){L="*"+L;}break;case b.Empty:d="EQ";L="";break;case b.EQ:case b.BT:case b.LE:case b.GE:case b.GT:case b.LT:d=R[i].operation;break;default:q.sap.log.error("ValueHelpRangeOperation is not supported '"+R[i].operation+"'");return;}r.push({Sign:s,Option:d,Low:L,High:h});}};c.prototype._addRangeMultipleSingleValues=function(f,o,r,I){for(var i=0;i<I.length;i++){r.push({Sign:"I",Option:"EQ",Low:c._getValueWithMetadata(f,o,I[i].key,true),High:null});}};c.prototype._addRangeMultipleRangeValues=function(f,o,r,I,t){for(var i=0;i<I.length;i++){r.push({Sign:"I",Option:t?"BT":"EQ",Low:c._getValueWithMetadata(f,o,I[i].value1,true),High:t?c._getValueWithMetadata(f,o,I[i].value2):null});}};c.prototype._addRangeSingleValue=function(r,v){r.push({Sign:"I",Option:"EQ",Low:c._getValue(v,true),High:null});};c.prototype._addRangeLowHigh=function(f,o,r,L,s){var d=s||"BT";r.push({Sign:"I",Option:d,Low:c._getValueWithMetadata(f,o,L.low,true),High:c._getValueWithMetadata(f,o,L.high)});};c.prototype._addParamaterSingleValue=function(s,f,v){if(!s.Parameters){s.Parameters=[];}s.Parameters.push({PropertyName:f,PropertyValue:v});};c.prototype._createRangeSingleValue=function(s,f,v){var r=c.addRangeEntry(s,f);this._addRangeSingleValue(r,v);};c.prototype._addSingleValue=function(s,f,v){var n;if(this._sAPILevel){n=f.split(A);if(n.length>1){this._addParamaterSingleValue(s,n[n.length-1],v);}else{this._createRangeSingleValue(s,f,v);}}else{this._addParamaterSingleValue(s,f,v);}};c.prototype._getFields=function(f){var r=[];if(f){for(var i=0;i<f.length;i++){r.push(f[i].name);}}return r;};c._getValue=function(v,u){if((v===null)||(v===undefined)||(v==="")){return(u?"":null);}return""+v;};c._getValueWithMetadata=function(f,o,v,u){if((v===null)||(v===undefined)||(v==="")){return(u?"":null);}else if(f&&o){if((o.type==="Edm.DateTime")||(o.type==="Edm.Time")){if(f&&f.isInUTCMode&&f.isInUTCMode()&&f.getDateInUTCOffset){v=f.getDateInUTCOffset(new Date(v)).toJSON();}if(v.indexOf('Z')===(v.length-1)){v=v.substr(0,v.length-1);}}else if(o.type==="Edm.DateTimeOffset"){v=new Date(v).toJSON();}}return""+v;};return c;},true);