/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/commons/library','./util/DateUtils','sap/ui/commons/Label','sap/ui/core/Control','sap/ui/core/format/DateFormat'],function(q,l,C,D,L,a,b){"use strict";var c=a.extend("sap.suite.ui.commons.DateRangeScroller",{metadata:{deprecated:true,library:"sap.suite.ui.commons",associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{change:{parameters:{dateRange:{type:"any"}}}}}});var d="d";var W="w";var M="m";var Y="y";var e="c";var w=7;c.getFormattedDate=function(r,o,f){var g;var F;switch(r){case(d):g=f||b.getDateInstance({pattern:"MMMM d, YYYY"});F=g.format(o.startDate,false);break;case(W):case(e):var s=f||b.getDateInstance({pattern:'MMMM d'});var E=f||b.getDateInstance({pattern:'MMMM d, YYYY'});if(o.startDate.getYear()!==o.endDate.getYear()){s=E;}else if(o.startDate.getMonth()===o.endDate.getMonth()){E=f||b.getDateInstance({pattern:'d, YYYY'});}var S=s.format(o.startDate,false);var h=E.format(o.endDate,false);F=S+" - "+h;break;case(M):g=f||b.getDateInstance({pattern:'MMMM YYYY'});F=g.format(o.startDate,false);break;case(Y):g=f||b.getDateInstance({pattern:'YYYY'});F=g.format(o.startDate,false);break;default:F=o.startDate+" - "+o.endDate;break;}return F;};c.updateDateRangeValue=function(r,o,R,f){R.setText(c.getFormattedDate(r,o,f));if(R.isActive()){R.rerender();}};c.adjustDateByStep=function(f,s){if(s===0){return;}f.setDate(f.getDate()+s);};c.adjustRangeByStep=function(r,s){var S=r.startDate;var E=r.endDate;S.setDate(S.getDate()+s);E.setDate(E.getDate()+s);};c.isValidDuration=function(i,u){var v=false;if(i===undefined){v=true;}else if(!isNaN(i)&&isFinite(i)){if((i>=1)&&(!u||i<=u)){v=true;}}if(!v){q.sap.log.error("DateRangeScroller duration value ='"+i+"' is invalid.");}return v;};c.prototype.init=function(){this._sRangeType=d;this._iCustomDuration=1;this._oDateFormat=null;this._oDateRangeLabel=new L(this.getId()+"-dateRangeLabel",{labelFor:this.getId()});this._oDateRangeLabel.addStyleClass("sapSuiteUiCommonsDateRangeScrollerLabel");var s=new Date();D.resetDateToStartOfDay(s);var E=new Date();D.resetDateToEndOfDay(E);this._oDateRange={startDate:s,endDate:E};c.updateDateRangeValue(d,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);};c.prototype.setDateRangeDay=function(i){if(D.isValidDate(i)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());D.resetDateToStartOfDay(this._oDateRange.startDate);D.resetDateToEndOfDay(this._oDateRange.endDate);c.updateDateRangeValue(d,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=d;}return this;};c.prototype.setDateRangeWeek=function(i,s){var f=w;var F=1;if(s){f=s.duration;F=s.firstDayOfWeek;}if(f===undefined){f=w;}else if(f&&!isNaN(f)){f=parseInt(f,10);}if(F===undefined){F=1;}else if(F&&!isNaN(F)){F=parseInt(F,10);}if((F===null)||F===""||isNaN(F)||F<0||F>6){q.sap.log.error("DateRangeScroller oSettings.firstDayOfWeek value ='"+s.firstDayOfWeek+"' is invalid.");}else if(D.isValidDate(i)&&c.isValidDuration(f,w)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());var g=f;var h=F;D.resetDateToStartOfWeek(this._oDateRange.startDate,F);D.resetDateToEndOfWeek(this._oDateRange.endDate,{iDuration:g,iFirstDayOfWeek:h});c.updateDateRangeValue(W,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=W;}return this;};c.prototype.setDateRangeMonth=function(i){if(D.isValidDate(i)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());D.resetDateToStartOfMonth(this._oDateRange.startDate);D.resetDateToEndOfMonth(this._oDateRange.endDate);c.updateDateRangeValue(M,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=M;}return this;};c.prototype.setDateRangeYear=function(i){if(D.isValidDate(i)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());D.resetDateToStartOfYear(this._oDateRange.startDate);D.resetDateToEndOfYear(this._oDateRange.endDate);c.updateDateRangeValue(Y,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=Y;}return this;};c.prototype.setDateRangeCustom=function(i,f){if(f===undefined){f=this._iCustomDuration;}else if(f&&!isNaN(f)){f=parseInt(f,10);}if(D.isValidDate(i)&&c.isValidDuration(f)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());D.resetDateToStartOfDay(this._oDateRange.startDate);c.adjustDateByStep(this._oDateRange.endDate,f-1);D.resetDateToEndOfDay(this._oDateRange.endDate);c.updateDateRangeValue(e,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=e;this._iCustomDuration=f;}return this;};c.prototype.incrementDateRange=function(){switch(this._sRangeType){case(d):c.adjustRangeByStep(this._oDateRange,1);c.updateDateRangeValue(d,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(W):c.adjustRangeByStep(this._oDateRange,w);c.updateDateRangeValue(W,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(e):c.adjustRangeByStep(this._oDateRange,this._iCustomDuration);c.updateDateRangeValue(e,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(M):var s=this._oDateRange.startDate.getMonth()+1;this._oDateRange.startDate.setMonth(s);this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());D.resetDateToEndOfMonth(this._oDateRange.endDate);c.updateDateRangeValue(M,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(Y):s=this._oDateRange.startDate.getFullYear()+1;this._oDateRange.startDate.setFullYear(s);this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());D.resetDateToEndOfYear(this._oDateRange.endDate);c.updateDateRangeValue(Y,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;default:return this;}var o=this.getDateRange();this.fireChange({dateRange:o});return this;};c.prototype.decrementDateRange=function(){switch(this._sRangeType){case(d):c.adjustRangeByStep(this._oDateRange,-1);c.updateDateRangeValue(d,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(W):c.adjustRangeByStep(this._oDateRange,-w);c.updateDateRangeValue(W,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(e):c.adjustRangeByStep(this._oDateRange,-this._iCustomDuration);c.updateDateRangeValue(e,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(M):var s=this._oDateRange.startDate.getMonth()-1;this._oDateRange.startDate.setMonth(s);this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());D.resetDateToEndOfMonth(this._oDateRange.endDate);c.updateDateRangeValue(M,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(Y):s=this._oDateRange.startDate.getFullYear()-1;this._oDateRange.startDate.setFullYear(s);this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());D.resetDateToEndOfYear(this._oDateRange.endDate);c.updateDateRangeValue(Y,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;default:return this;}var o=this.getDateRange();this.fireChange({dateRange:o});return this;};c.prototype.getDateRange=function(){var o={startDate:new Date(this._oDateRange.startDate.getTime()),endDate:new Date(this._oDateRange.endDate.getTime())};return o;};c.prototype.setDateFormat=function(o){if(o&&o instanceof b){this._oDateFormat=o;}else{this._oDateFormat=null;}c.updateDateRangeValue(this._sRangeType,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);};c.prototype.onclick=function(E){switch(E.target){case q.sap.byId(this.getId()+'-decrementScrollButton')[0]:this.decrementDateRange();break;case q.sap.byId(this.getId()+'-incrementScrollButton')[0]:this.incrementDateRange();break;default:break;}q.sap.byId(this.getId()+"-labelarea").focus();};c.prototype.onsapright=function(E){this.incrementDateRange();E.preventDefault();E.stopPropagation();};c.prototype.onsapleft=function(E){this.decrementDateRange();E.preventDefault();E.stopPropagation();};c.prototype.onsapup=function(E){this.incrementDateRange();E.preventDefault();E.stopPropagation();};c.prototype.onsapdown=function(E){this.decrementDateRange();E.preventDefault();E.stopPropagation();};return c;});
