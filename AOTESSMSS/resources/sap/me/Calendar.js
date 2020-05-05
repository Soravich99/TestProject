/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2016 SAP SE. All rights reserved
    
 */
sap.ui.define(['jquery.sap.global','./CalendarDate','./library','sap/ui/core/Control','sap/ui/core/LocaleData','sap/ui/core/IconPool','sap/ui/core/date/UniversalDate'],function(q,C,l,a,L,I,U){"use strict";var b=a.extend("sap.me.Calendar",{metadata:{library:"sap.me",properties:{visible:{type:"boolean",group:"Misc",defaultValue:true},hideNavControls:{type:"boolean",group:"Misc",defaultValue:false},hideMonthTitles:{type:"boolean",group:"Misc",defaultValue:false},monthsPerRow:{type:"int",group:"Misc",defaultValue:1},dayWidth:{type:"int",group:"Misc",defaultValue:45},dayHeight:{type:"int",group:"Misc",defaultValue:50},weeksPerRow:{type:"int",group:"Misc",defaultValue:1},singleRow:{type:"boolean",group:"Misc",defaultValue:null},monthsToDisplay:{type:"int",group:"Misc",defaultValue:1},currentDate:{type:"string",group:"Misc",defaultValue:null},enableMultiselection:{type:"boolean",group:"Misc",defaultValue:false},firstDayOffset:{type:"int",group:"Misc",defaultValue:0},disabledWeekDays:{type:"any",group:"Misc",defaultValue:null},disabledDates:{type:"any",group:"Misc",defaultValue:null},swipeToNavigate:{type:"boolean",group:"Misc",defaultValue:false},design:{type:"sap.me.CalendarDesign",group:"Appearance",defaultValue:sap.me.CalendarDesign.Approval},selectionMode:{type:"sap.me.CalendarSelectionMode",group:"Behavior",defaultValue:sap.me.CalendarSelectionMode.SINGLE},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},days:{type:"any",group:"Appearance",defaultValue:null},months:{type:"any",group:"Appearance",defaultValue:null}},events:{tapOnDate:{parameters:{date:{type:"string"},didSelect:{type:"boolean"}}},changeCurrentDate:{parameters:{currentDate:{type:"string"}}},changeRange:{parameters:{fromDate:{type:"string"},toDate:{type:"string"}}}}}});b.prototype.init=function(){this.__setCurrentDate((new C().toDateString()),true);var o=sap.m.getLocaleData();this.setDays(o.getDays("abbreviated"));this.setMonths(o.getMonths("abbreviated"));var p=new sap.ui.core.Icon({src:I.getIconURI("navigation-left-arrow")});p.addStyleClass("sapMeCalendarPrevious");p.attachPress(null,this._gotoPrevious,this);p.setParent(this);this._oPrevBtn=p;var n=new sap.ui.core.Icon({src:I.getIconURI("navigation-right-arrow")});n.addStyleClass("sapMeCalendarNext");n.attachPress(null,this._gotoNext,this);n.setParent(this);this._oNextBtn=n;this._oDatesClasses={};this._$interactiveDates=null;this._oLocale=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();this._oLocaleData=L.getInstance(this._oLocale);this._bRtl=sap.ui.getCore().getConfiguration().getRTL();};b.prototype.exit=function(){this._oPrevBtn.destroy();delete this._oPrevBtn;this._oNextBtn.destroy();delete this._oNextBtn;delete this._oDatesClasses;delete this._$interactiveDates;delete this._$fromDate;delete this._$toDate;};b.prototype.onBeforeRendering=function(){delete this._$interactiveDates;};b.prototype.onAfterRendering=function(){var $=this.$();var c=null;var d=this.getDisabledWeekDays()||[];var e=[];var i;var D;for(i=0;i<d.length;i++){e.push(".sapMeCalendarWeekDay"+d[i]);}var f=this.getSingleRow()||this.getMonthsToDisplay()===1;if(!f){e.push(".sapMeCalendarDayNotInCurrentMonth");}if(e.length){var t=e.join(", ");$.find(".sapMeCalendarMonth > div.sapMeCalendarMonthDays").children(t).css({"pointer-events":"none"});c=$.find(".sapMeCalendarMonth > div.sapMeCalendarMonthDays > .sapMeCalendarMonthDay:not("+t+")");}else{c=$.find(".sapMeCalendarMonth > div.sapMeCalendarMonthDays > .sapMeCalendarMonthDay");}var g=this.getDisabledDates()||[];for(i=0;i<g.length;i++){D=g[i];c.children("input[value='"+D+"']").parent().css({"pointer-events":"none"});}for(D in this._oDatesClasses){var s=this._oDatesClasses[D].join(" ");c.children("input[value='"+D+"']").parent().addClass(s);}this._$interactiveDates=c;var h=this.getHideNavControls();this._oPrevBtn.$().css({display:h?"none":""});this._oNextBtn.$().css({display:h?"none":""});};b.prototype.setEnableMultiselection=function(e){return this.setProperty("selectionMode",e?sap.me.CalendarSelectionMode.MULTIPLE:sap.me.CalendarSelectionMode.SINGLE,true);};b.prototype.getEnableMultiselection=function(){return this.getProperty("selectionMode")==sap.me.CalendarSelectionMode.MULTIPLE;};b.prototype.setHideNavControls=function(h){if(this.getDomRef()){this._oPrevBtn.$().css({display:h?"none":""});this._oNextBtn.$().css({display:h?"none":""});}return this.setProperty("hideNavControls",h,true);};b.prototype.setHideMonthTitles=function(h){if(this.getDomRef()){this.$().find(".sapMeCalendarMonthName").css({visibility:h?"hidden":""});}return this.setProperty("hideMonthTitles",h,true);};b.prototype.setFirstDayOffset=function(o){o=o%this.getDays().length;return this.setProperty("firstDayOffset",o);};b.prototype.setWeeksPerRow=function(w){w=w%5;return this.setProperty("weeksPerRow",w);};b.prototype.setDisabledWeekDays=function(w){w=w||[];return this.setProperty("disabledWeekDays",w);};b.prototype.setDisabledDates=function(d){d=d||[];var i;for(i=0;i<d.length;i++){var D=d[i];if(typeof D==="string"){D=C.parseFromToDateString(D);}var s=D.toDateString();d[i]=s;}return this.setProperty("disabledDates",d);};b.prototype.ontouchstart=function(e){if(!this.getSwipeToNavigate()){this._gestureStart(e);}};b.prototype._gestureStart=function(e){this._$fromDate=this.getEnableMultiselection()?this._getDateDomRef(e.target):null;};b.prototype.ontouchmove=function(e){if(!this.getSwipeToNavigate()){this._gestureMove(e);}};b.prototype._gestureMove=function(e){if(this._$fromDate){if(!this._$toDate){this._$fromDate.addClass("sapMeCalendarHighlight");this._$toDate=this._$fromDate;}e.stopPropagation();e.preventDefault();var d=e.target;if(e.touches.length){var t=e.touches[0];d=document.elementFromPoint(t.clientX,t.clientY);}var $=this._getDateDomRef(d);if($&&$!=this._$toDate){this._$toDate.removeClass("sapMeCalendarHighlight");this._$fromDate.addClass("sapMeCalendarHighlight");$.addClass("sapMeCalendarHighlight");this._$toDate=$;}}};b.prototype.ontouchend=function(e){if(!this.getSwipeToNavigate()){this._gestureEnd(e);}};b.prototype._gestureEnd=function(e){if(this._$fromDate&&this._$toDate){e.stopPropagation();e.preventDefault();var f=this._getDateValue(this._$fromDate);var t=this._getDateValue(this._$toDate);this._$fromDate.removeClass("sapMeCalendarHighlight");this._$toDate.removeClass("sapMeCalendarHighlight");this.toggleDatesRangeSelection(f,t,true);this.fireChangeRange({fromDate:f,toDate:t});}delete this._$fromDate;delete this._$toDate;};b.prototype.ontap=function(e){this._gestureSelect(e);};b.prototype._gestureSelect=function(e){var $=this._getDateDomRef(e.target);if(sap.ui.Device.browser.msie&&sap.ui.Device.browser.version<11){if($.css("pointer-events")=="none"){return;}}if($){var d=this._getDateValue($);var D=!$.hasClass("sapMeCalendarSelected");if(!this.getEnableMultiselection()){if(this.getSelectionMode()==sap.me.CalendarSelectionMode.SINGLE){this.unselectAllDates();}else if(this.getSelectedDates().length>1){this.unselectAllDates();}}if((this.getSelectionMode()==sap.me.CalendarSelectionMode.RANGE)&&(this.getSelectedDates().length==1)){var f=this.getSelectedDates()[0];this.toggleDatesRangeSelection(f,d,true);this.fireChangeRange({fromDate:f,toDate:d});}else{$.toggleClass("sapMeCalendarSelected",D);this._updateDatesWithClass("sapMeCalendarSelected",d,D);this.fireTapOnDate({didSelect:D,date:d});}}};b.prototype.onswipeleft=function(e){if(this.getSwipeToNavigate()){if(!this._bRtl){this._gotoNext();}else{this._gotoPrevious();}}};b.prototype.onswiperight=function(e){if(this.getSwipeToNavigate()){if(!this._bRtl){this._gotoPrevious();}else{this._gotoNext();}}};b.prototype.getSelectedDates=function(){return this._getDatesWithStyleClass("sapMeCalendarSelected");};b.prototype.toggleDatesSelection=function(d,s){this._toggleDatesStyleClass("sapMeCalendarSelected",d,s);};b.prototype.toggleDatesType=function(d,t,s){this._toggleDatesStyleClass("sapMeCalendar"+t,d,s);};b.prototype.removeTypesOfAllDates=function(){this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type00);this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type01);this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type04);this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type06);this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type07);this._removeStyleClassOfAllDates("sapMeCalendar"+sap.me.CalendarEventType.Type10);};b.prototype.unselectAllDates=function(){this._removeStyleClassOfAllDates("sapMeCalendarSelected");};b.prototype.toggleDatesRangeSelection=function(d,D,s){this._toggleDatesRangeStyleClass("sapMeCalendarSelected",d,D,s);};b.prototype._getDatesWithStyleClass=function(s){var d=[];var D;for(D in this._oDatesClasses){if(q.inArray(s,this._oDatesClasses[D])!==-1){d.push(D);}}return d;};b.prototype._toggleDatesRangeStyleClass=function(c,d,D,A){var u;var o;if(typeof d=="string"){u=C.parseFromToDateString(d);}else if(d instanceof Date){u=new U(d.getTime());}if(typeof D=="string"){o=C.parseFromToDateString(D);}else if(D instanceof Date){o=new U(D.getTime());}if(u&&o&&typeof u.getTime=="function"&&typeof o.getTime=="function"){if(u.getTime()>o.getTime()){var t=new U(u.getTime());u=o;o=t;}var e=[];var f=new U(u.getTime());var g;while(o-f>=0){g=new Date(f.getTime());e.push(g.toDateString());f.setDate(f.getDate()+1);}this._toggleDatesStyleClass(c,e,A);}};b.prototype._toggleDatesStyleClass=function(c,d,A){var i;for(i=0;i<d.length;i++){var D=d[i];if(typeof D=="string"){D=C.parseFromToDateString(D);}else if(D instanceof Date){D=new U(D.getTime());}D=new Date(D.getTime());var s=D.toDateString();d[i]=s;this._updateDatesWithClass(c,s,A);if(this._$interactiveDates){this._$interactiveDates.children("input[value='"+s+"']").parent().toggleClass(c,A);}}};b.prototype._removeStyleClassOfAllDates=function(c){var d;for(d in this._oDatesClasses){this._updateDatesWithClass(c,d,false);}if(this._$interactiveDates){this._$interactiveDates.removeClass(c);}};b.prototype._gotoPrevious=function(){var s=this.getSingleRow();if(s){this._oInternalDate.previousWeek();}else{this._oInternalDate.previousMonth();}var c=this._oInternalDate.toDateString();this.setCurrentDate(c);this.fireChangeCurrentDate({currentDate:c});};b.prototype._gotoNext=function(){var s=this.getSingleRow();if(s){this._oInternalDate.nextWeek();}else{this._oInternalDate.nextMonth();}var c=this._oInternalDate.toDateString();this.setCurrentDate(c);this.fireChangeCurrentDate({currentDate:c});};b.prototype._updateDatesWithClass=function(c,d,A){var s=this._oDatesClasses[d]||[];var i=q.inArray(c,s);if(A&&i===-1){s.push(c);}else if(!A&&i!==-1){s.splice(i,1);}if(s.length===0){this._oDatesClasses[d]=null;delete this._oDatesClasses[d];}else{this._oDatesClasses[d]=s;}};b.prototype._getDateValue=function($){return $.children("input").eq(0).val();};b.prototype._getMonthDate=function(d){var $=q(d);var c=q(this.getDomRef());while($&&$!=c&&!$.hasClass("sapMeCalendarMonthDay")){$=$.parent();}return $&&$.parent().hasClass("sapMeCalendarMonth")?$:null;};b.prototype._getDateDomRef=function(d){var $=d?q(d):null;var t=this.getId();var c=null;while($&&$[0].id!=t&&!$.hasClass("sapMeCalendarMonth")){if($.hasClass("sapMeCalendarMonthDay")&&$.parent().hasClass("sapMeCalendarMonthDays")){c=$;break;}$=$.parent();}return c;};b.prototype._checkLanguageRegion=function(c,r){return(r===this._oLocale.getRegion()&&c===this._oLocale.getLanguage());};b.prototype._getIntervalPattern=function(p){return this._oLocaleData.getIntervalPattern(p);};b.prototype.getCurrentDate=function(){return this._oInternalDate.toDateString();};b.prototype.setCurrentDate=function(s){this.__setCurrentDate(s,false);return this;};b.prototype.__setCurrentDate=function(s,S){this._oInternalDate=new C(C.parseFromToDateString(s));this.setProperty("currentDate",this._oInternalDate.toDateString(),S);};b.parseDate=function(s){var d=C.parseFromToDateString(s,true);return new Date(d.getTime());};b.prototype._getCalendarFirstDate=function(){var f=new U(this._oInternalDate._date.getTime());if(this.getSingleRow()){f.setHours(12);var d=f.getDay()-this.getFirstDayOffset();var c;if(d<0){c=(7-Math.abs(d))%7;}else{c=d;}f.setDate(f.getDate()-c);}else{q.sap.log.error("You cannot use this method in a non single row calendar, returning current date.");}return f;};b.prototype.isWeekend=function(d){var s=this._oLocaleData.getWeekendStart(),e=this._oLocaleData.getWeekendEnd(),i=false;if(s<=e){i=(s<=d)&&(d<=e);}else{i=(d>=s)||(d<=e);}return i;};return b;},true);
