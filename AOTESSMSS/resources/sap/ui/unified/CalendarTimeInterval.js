/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Control','sap/ui/core/LocaleData','sap/ui/unified/calendar/CalendarUtils','./calendar/Header','./calendar/TimesRow','./calendar/DatesRow','./calendar/MonthPicker','./calendar/YearPicker','sap/ui/core/date/UniversalDate','./library','sap/ui/core/format/DateFormat','sap/ui/Device','sap/ui/core/Locale','sap/ui/core/library'],function(q,C,L,a,H,T,D,M,Y,U,l,b,c,d,e){"use strict";var f=e.CalendarType;var g=C.extend("sap.ui.unified.CalendarTimeInterval",{metadata:{library:"sap.ui.unified",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},startDate:{type:"object",group:"Data"},intervalSelection:{type:"boolean",group:"Behavior",defaultValue:false},singleSelection:{type:"boolean",group:"Behavior",defaultValue:true},items:{type:"int",group:"Appearance",defaultValue:12},intervalMinutes:{type:"int",group:"Appearance",defaultValue:60},pickerPopup:{type:"boolean",group:"Appearance",defaultValue:false},minDate:{type:"object",group:"Misc",defaultValue:null},maxDate:{type:"object",group:"Misc",defaultValue:null}},aggregations:{selectedDates:{type:"sap.ui.unified.DateRange",multiple:true,singularName:"selectedDate"},specialDates:{type:"sap.ui.unified.DateTypeRange",multiple:true,singularName:"specialDate"},header:{type:"sap.ui.unified.calendar.Header",multiple:false,visibility:"hidden"},timesRow:{type:"sap.ui.unified.calendar.TimesRow",multiple:false,visibility:"hidden"},datesRow:{type:"sap.ui.unified.calendar.Month",multiple:false,visibility:"hidden"},monthPicker:{type:"sap.ui.unified.calendar.MonthPicker",multiple:false,visibility:"hidden"},yearPicker:{type:"sap.ui.unified.calendar.YearPicker",multiple:false,visibility:"hidden"},calendarPicker:{type:"sap.ui.unified.Calendar",multiple:false,visibility:"hidden"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},legend:{type:"sap.ui.unified.CalendarLegend",multiple:false}},events:{select:{},cancel:{},startDateChange:{}}}});g.prototype.init=function(){this._iMode=0;this._oYearFormat=b.getDateInstance({format:"y"});this.data("sap-ui-fastnavgroup","true",true);this._oMinDate=new U(new Date(Date.UTC(1,0,1)));this._oMinDate.getJSDate().setUTCFullYear(1);this._oMaxDate=new U(new Date(Date.UTC(9999,11,31,23,59,59)));this._initializeHeader();this._initializeTimesRow();this._initilizeMonthPicker();this._initilizeYearPicker();this.setPickerPopup(false);this._iItemsHead=15;};g.prototype._initializeHeader=function(){var Z=new H(this.getId()+"--Head");Z.attachEvent("pressPrevious",this._handlePrevious,this);Z.attachEvent("pressNext",this._handleNext,this);this.setAggregation("header",Z);};g.prototype._initializeTimesRow=function(){var Z=new T(this.getId()+"--TimesRow");Z.attachEvent("focus",F,this);Z.attachEvent("select",E,this);Z._bNoThemeChange=true;this.setAggregation("timesRow",Z);};g.prototype._initilizeMonthPicker=function(){this.setAggregation("monthPicker",this._createMonthPicker());};g.prototype._initilizeYearPicker=function(){this.setAggregation("yearPicker",this._createYearPicker());};g.prototype._createDatesRow=function(){var Z=new D(this.getId()+"--DatesRow",{days:18,selectedDates:[new sap.ui.unified.DateRange(this.getId()+"--Range")]});Z.attachEvent("focus",J,this);Z.attachEvent("select",I,this);Z._bNoThemeChange=true;Z.getIntervalSelection=function(){return this.getProperty("intervalSelection");};Z.getSingleSelection=function(){return this.getProperty("singleSelection");};Z.getSelectedDates=function(){return this.getAggregation("selectedDates",[]);};Z.getSpecialDates=function(){return this.getAggregation("specialDates",[]);};Z.getAriaLabelledBy=function(){return this.getAssociation("ariaLabelledBy",[]);};return Z;};g.prototype._createMonthPicker=function(){var Z=new M(this.getId()+"--MP",{columns:0,months:6});Z.attachEvent("select",K,this);Z._bNoThemeChange=true;Z.attachEvent("pageChange",W,this);return Z;};g.prototype._createYearPicker=function(){var Z=new Y(this.getId()+"--YP",{columns:0,years:6});Z.attachEvent("select",N,this);Z.attachEvent("pageChange",X,this);Z._oMinDate.setYear(this._oMinDate.getUTCFullYear());Z._oMaxDate.setYear(this._oMaxDate.getUTCFullYear());return Z;};g.prototype.exit=function(){if(this._sInvalidateContent){q.sap.clearDelayedCall(this._sInvalidateContent);}};g.prototype.onBeforeRendering=function(){var Z=this.getAggregation("timesRow");var $=this._getFocusedDate();t.call(this);Z.displayDate(a._createLocalDate($,true));};g.prototype._getCalendarPicker=function(){var Z=this.getAggregation("calendarPicker");if(!Z){Z=new sap.ui.unified.Calendar(this.getId()+"--Cal",{});Z.setPopupMode(true);Z.attachEvent("select",G,this);Z.attachEvent("cancel",function($){this._oPopup.close();},this);this.setAggregation("calendarPicker",Z);}return Z;};g.prototype.setStartDate=function(Z){a._checkJSDateObject(Z);if(q.sap.equal(this.getStartDate(),Z)){return this;}var $=Z.getFullYear();a._checkYearInValidRange($);var a1=this.getMinDate();if(a1&&Z.getTime()<a1.getTime()){q.sap.log.warning("startDate < minDate -> minDate as startDate set",this);Z=new Date(a1);}var b1=this.getMaxDate();if(b1&&Z.getTime()>b1.getTime()){q.sap.log.warning("startDate > maxDate -> maxDate as startDate set",this);Z=new Date(b1);}this.setProperty("startDate",Z,true);var c1=this.getAggregation("timesRow");c1.setStartDate(Z);this._oUTCStartDate=new U(c1._getStartDate().getTime());t.call(this);var d1=a._createLocalDate(this._getFocusedDate(),true);if(!c1.checkDateFocusable(d1)){this._setFocusedDate(this._oUTCStartDate);c1.displayDate(Z);}return this;};g.prototype.invalidate=function(Z){if(!this._bDateRangeChanged&&(!Z||!(Z instanceof sap.ui.unified.DateRange))){if(!Z||(!(Z instanceof D||Z instanceof M||Z instanceof Y||Z instanceof H))){C.prototype.invalidate.apply(this,arguments);}}else if(this.getDomRef()&&this._iMode==0&&!this._sInvalidateContent){this._sInvalidateContent=q.sap.delayedCall(0,this,O);}};g.prototype.removeAllSelectedDates=function(){this._bDateRangeChanged=true;var Z=this.removeAllAggregation("selectedDates");return Z;};g.prototype.destroySelectedDates=function(){this._bDateRangeChanged=true;var Z=this.destroyAggregation("selectedDates");return Z;};g.prototype.removeAllSpecialDates=function(){this._bDateRangeChanged=true;var Z=this.removeAllAggregation("specialDates");return Z;};g.prototype.destroySpecialDates=function(){this._bDateRangeChanged=true;var Z=this.destroyAggregation("specialDates");return Z;};g.prototype.setIntervalMinutes=function(Z){if(Z>=720){throw new Error("Only intervals < 720 minutes are allowed; "+this);}if(1440%Z>0){throw new Error("A day must be divisible by the interval size; "+this);}this.setProperty("intervalMinutes",Z,false);var $=this.getAggregation("timesRow");var a1=a._createLocalDate(this._getFocusedDate(),true);if(!$.checkDateFocusable(a1)){var b1=h.call(this);this._setFocusedDate(b1);$.setDate(a._createLocalDate(b1,true));}return this;};g.prototype.setLocale=function(Z){if(this._sLocale!=Z){this._sLocale=Z;this._oLocaleData=undefined;this.invalidate();}return this;};g.prototype.getLocale=function(){if(!this._sLocale){this._sLocale=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale().toString();}return this._sLocale;};g.prototype._getFocusedDate=function(){if(!this._oFocusedDate){j.call(this);}return this._oFocusedDate;};g.prototype._setFocusedDate=function(Z){if(!(Z instanceof U)){throw new Error("Date must be a UniversalDate object "+this);}this._oFocusedDate=new U(Z.getTime());};g.prototype.focusDate=function(Z){var $=false;var a1=this.getAggregation("timesRow");if(!a1.checkDateFocusable(Z)){var b1=a._createUniversalUTCDate(Z,undefined,true);P.call(this,b1);$=true;}y.call(this,Z,false);if($){this.fireStartDateChange();}return this;};g.prototype.displayDate=function(Z){y.call(this,Z,true);return this;};g.prototype.setItems=function(Z){this.setProperty("items",Z,true);Z=this._getItems();var $=this.getAggregation("timesRow");$.setItems(Z);var a1=a._createLocalDate(this._getFocusedDate(),true);if(!$.checkDateFocusable(a1)){var b1=h.call(this);this._setFocusedDate(b1);$.setDate(a._createLocalDate(b1,true));}if(!this.getPickerPopup()){var c1=this.getAggregation("datesRow");var d1=Math.floor(Z*1.5);if(d1>31){d1=31;}c1.setDays(d1);var e1=this.getAggregation("monthPicker");var f1=Math.floor(Z/2);if(f1>12){f1=12;}e1.setMonths(f1);var g1=this.getAggregation("yearPicker");var h1=Math.floor(Z/2);if(h1>20){h1=20;}g1.setYears(h1);}t.call(this);if(this.getDomRef()){if(this._getShowItemHeader()){this.$().addClass("sapUiCalIntHead");}else{this.$().removeClass("sapUiCalIntHead");}}return this;};g.prototype._getItems=function(){var Z=this.getItems();if(c.system.phone&&Z>6){return 6;}else{return Z;}};g.prototype._getLocaleData=function(){if(!this._oLocaleData){var Z=this.getLocale();var $=new d(Z);this._oLocaleData=L.getInstance($);}return this._oLocaleData;};g.prototype.setPickerPopup=function(Z){var $=this.getAggregation("header"),a1,b1,c1;this.setProperty("pickerPopup",Z,true);if(a1){a1.destroy();}if(Z){$.setVisibleButton0(false);$.setVisibleButton1(true);$.setVisibleButton2(false);$.detachEvent("pressButton1",A,this);$.attachEvent("pressButton1",A,this);if(this.getAggregation("datesRow")){this.getAggregation("datesRow").destroy();}if(this.getAggregation("monthPicker")){this.getAggregation("monthPicker").destroy();}if(this.getAggregation("yearPicker")){this.getAggregation("yearPicker").destroy();}}else{$.setVisibleButton0(true);$.setVisibleButton1(true);$.setVisibleButton2(true);$.detachEvent("pressButton0",z,this);$.attachEvent("pressButton0",z,this);$.detachEvent("pressButton1",A,this);$.attachEvent("pressButton1",A,this);$.detachEvent("pressButton2",B,this);$.attachEvent("pressButton2",B,this);if(!this.getAggregation("datesRow")){this.setAggregation("datesRow",this._createDatesRow());}if(!this.getAggregation("yearPicker")){this.setAggregation("yearPicker",this._createYearPicker());}if(!this.getAggregation("monthPicker")){this.setAggregation("monthPicker",this._createMonthPicker());}b1=this.getAggregation("monthPicker");c1=this.getAggregation("yearPicker");b1.setColumns(0);b1.setMonths(6);c1.setColumns(0);c1.setYears(6);}return this;};g.prototype.setMinDate=function(Z){var $,a1,b1,c1;if(q.sap.equal(Z,this.getMinDate())){return this;}if(!Z){a._updateUTCDate(this._oMinDate.getJSDate(),1,0,1,0,0,0,0);}else{a._checkJSDateObject(Z);this._oMinDate=a._createUniversalUTCDate(Z,undefined,true);$=this.getAggregation("timesRow");this._oMinDate=$._getIntervalStart(this._oMinDate);a1=this._oMinDate.getUTCFullYear();a._checkYearInValidRange(a1);if(this._oMaxDate.getTime()<this._oMinDate.getTime()){q.sap.log.warning("minDate > maxDate -> maxDate set to end of the month",this);this._oMaxDate=a._createUniversalUTCDate(Z,undefined,true);a._updateUTCDate(this._oMaxDate,null,this._oMaxDate.getUTCMonth()+1,0,23,59,59,0);this.setProperty("maxDate",a._createLocalDate(this._oMaxDate,true),true);}if(this._oFocusedDate){if(this._oFocusedDate.getTime()<this._oMinDate.getTime()){q.sap.log.warning("focused date < minDate -> minDate focused",this);this.focusDate(Z);}}if(this._oUTCStartDate&&this._oUTCStartDate.getTime()<this._oMinDate.getTime()){q.sap.log.warning("start date < minDate -> minDate set as start date",this);_.call(this,new U(this._oMinDate.getTime()),true,true);}}this.setProperty("minDate",Z,false);if(this.getPickerPopup()){c1=this._getCalendarPicker();c1.setMinDate(Z);}else{b1=this.getAggregation("yearPicker");b1._oMinDate.setYear(this._oMinDate.getUTCFullYear());}return this;};g.prototype.setMaxDate=function(Z){var $,a1,b1,c1,d1,e1;if(q.sap.equal(Z,this.getMaxDate())){return this;}if(!Z){a._updateUTCDate(this._oMaxDate.getJSDate(),9999,11,31,23,59,59,0);}else{a._checkJSDateObject(Z);this._oMaxDate=a._createUniversalUTCDate(Z,undefined,true);$=this.getAggregation("timesRow");this._oMaxDate=$._getIntervalStart(this._oMaxDate);this._oMaxDate.setUTCMinutes(this._oMaxDate.getUTCMinutes()+this.getIntervalMinutes());this._oMaxDate.setUTCMilliseconds(-1);a1=this._oMaxDate.getUTCFullYear();a._checkYearInValidRange(a1);if(this._oMinDate.getTime()>this._oMaxDate.getTime()){q.sap.log.warning("maxDate < minDate -> minDate set to begin of the month",this);this._oMinDate=a._createUniversalUTCDate(Z,undefined,true);a._updateUTCDate(this._oMinDate,null,null,1,0,0,0,0);this.setProperty("minDate",a._createLocalDate(this._oMinDate,true),true);}if(this._oFocusedDate){if(this._oFocusedDate.getTime()>this._oMaxDate.getTime()){q.sap.log.warning("focused date > maxDate -> maxDate focused",this);this.focusDate(Z);}}if(this._oUTCStartDate){b1=new U(this._oUTCStartDate.getTime());b1.setUTCMinutes(b1.getUTCMinutes()+this.getIntervalMinutes()*(this._getItems()-1));if(b1.getTime()>this._oMaxDate.getTime()){c1=new U(this._oMaxDate.getTime());c1.setUTCMinutes(c1.getUTCMinutes()-this.getIntervalMinutes()*(this._getItems()-1));if(c1.getTime()>=this._oMinDate.getTime()){q.sap.log.warning("end date > maxDate -> maxDate set as end date",this);_.call(this,c1,true,true);}}}}this.setProperty("maxDate",Z,false);if(this.getPickerPopup()){e1=this._getCalendarPicker();e1.setMaxDate(Z);}else{d1=this.getAggregation("yearPicker");d1._oMaxDate.setYear(this._oMaxDate.getUTCFullYear());}return this;};g.prototype.onclick=function(Z){if(Z.isMarked("delayedMouseEvent")){return;}if(Z.target.id==this.getId()+"-cancel"){this.onsapescape(Z);}};g.prototype.onmousedown=function(Z){Z.preventDefault();Z.setMark("cancelAutoClose");};g.prototype.onsapescape=function(Z){if(this.getPickerPopup()){k.call(this);this.fireCancel();}else{switch(this._iMode){case 0:this.fireCancel();break;case 1:n.call(this);break;case 2:p.call(this);break;case 3:s.call(this);break;}}};g.prototype.onsaptabnext=function(Z){var $=this.getAggregation("header"),a1,b1,c1;if(q.sap.containsOrEquals(this.getDomRef("content"),Z.target)){if(this.getPickerPopup()){q.sap.focus($.getDomRef("B1"));}else{q.sap.focus($.getDomRef("B0"));}if(!this._bPoupupMode){c1=this.getAggregation("timesRow");q(c1._oItemNavigation.getItemDomRefs()[c1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");if(!this.getPickerPopup()){a1=this.getAggregation("monthPicker");b1=this.getAggregation("yearPicker");if(a1.getDomRef()){q(a1._oItemNavigation.getItemDomRefs()[a1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}if(b1.getDomRef()){q(b1._oItemNavigation.getItemDomRefs()[b1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}}}Z.preventDefault();}else if(Z.target.id==$.getId()+"-B0"){q.sap.focus($.getDomRef("B1"));Z.preventDefault();}else if(!this.getPickerPopup()&&(Z.target.id==$.getId()+"-B1")){q.sap.focus($.getDomRef("B2"));Z.preventDefault();}};g.prototype.onsaptabprevious=function(Z){var $=this.getAggregation("header"),a1,b1,c1;if(q.sap.containsOrEquals(this.getDomRef("content"),Z.target)){if(this._bPoupupMode){q.sap.focus($.getDomRef("B2"));Z.preventDefault();}}else if(Z.target.id==$.getId()+"-B0"){c1=this.getAggregation("timesRow");switch(this._iMode){case 0:c1._oItemNavigation.focusItem(c1._oItemNavigation.getFocusedIndex());break;case 2:if(!this.getPickerPopup()){a1=this.getAggregation("monthPicker");a1._oItemNavigation.focusItem(a1._oItemNavigation.getFocusedIndex());}break;case 3:if(!this.getPickerPopup()){b1=this.getAggregation("yearPicker");b1._oItemNavigation.focusItem(b1._oItemNavigation.getFocusedIndex());}break;}Z.preventDefault();}else if(Z.target.id==$.getId()+"-B2"){q.sap.focus($.getDomRef("B1"));Z.preventDefault();}else if(Z.target.id==$.getId()+"-B1"){if(!this.getPickerPopup()){q.sap.focus($.getDomRef("B0"));}else{c1=this.getAggregation("timesRow");c1._oItemNavigation.focusItem(c1._oItemNavigation.getFocusedIndex());}Z.preventDefault();}};g.prototype.onfocusin=function(Z){if(Z.target.id==this.getId()+"-end"){var $=this.getAggregation("header"),a1,b1,c1;if(this.getPickerPopup()){q.sap.focus($.getDomRef("B1"));}else{q.sap.focus($.getDomRef("B2"));}if(!this._bPoupupMode){a1=this.getAggregation("timesRow");q(a1._oItemNavigation.getItemDomRefs()[a1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");if(!this.getPickerPopup()){b1=this.getAggregation("monthPicker");c1=this.getAggregation("yearPicker");if(b1.getDomRef()){q(b1._oItemNavigation.getItemDomRefs()[b1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}if(c1.getDomRef()){q(c1._oItemNavigation.getItemDomRefs()[c1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}}}}this.$("end").attr("tabindex","-1");};g.prototype.onsapfocusleave=function(Z){if(!Z.relatedControlId||!q.sap.containsOrEquals(this.getDomRef(),sap.ui.getCore().byId(Z.relatedControlId).getFocusDomRef())){this.$("end").attr("tabindex","0");if(!this._bPoupupMode){var $,a1,b1;switch(this._iMode){case 0:$=this.getAggregation("timesRow");q($._oItemNavigation.getItemDomRefs()[$._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");break;case 2:if(!this.getPickerPopup()){a1=this.getAggregation("monthPicker");q(a1._oItemNavigation.getItemDomRefs()[a1._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}break;case 3:if(!this.getPickerPopup()){b1=this.getAggregation("yearPicker");q(b1._oItemNavigation.getItemDomRefs()[b1._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}break;}}}};g.prototype._handlePrevious=function(Z){var $=this._getFocusedDate(),a1,b1,c1,d1,e1,f1,g1,h1;switch(this._iMode){case 0:a1=this._getItems();b1=new U(h.call(this).getTime());c1=this.getIntervalMinutes();b1.setUTCMinutes(b1.getUTCMinutes()-a1*c1);$.setUTCMinutes($.getUTCMinutes()-a1*c1);this._setFocusedDate($);_.call(this,b1,true);break;case 1:if(!this.getPickerPopup()){d1=this.getAggregation("datesRow");e1=a._createUniversalUTCDate(d1.getDate());f1=d1.getDays();if(e1.getUTCDate()<=f1){e1.setUTCDate(1);}else{e1.setUTCDate(e1.getUTCDate()-f1);}Q.call(this,e1);}break;case 2:if(!this.getPickerPopup()){g1=this.getAggregation("monthPicker");if(g1.getMonths()<12){g1.previousPage();u.call(this);}else{$.setUTCFullYear($.getUTCFullYear()-1);P.call(this,$);this._setFocusedDate($);t.call(this);V.call(this,$.getUTCFullYear(),g1);this.fireStartDateChange();}}break;case 3:if(!this.getPickerPopup()){h1=this.getAggregation("yearPicker");h1.previousPage();v.call(this);}break;}};g.prototype._handleNext=function(Z){var $=this._getFocusedDate();switch(this._iMode){case 0:var a1=this._getItems();var b1=new U(h.call(this).getTime());var c1=this.getIntervalMinutes();b1.setUTCMinutes(b1.getUTCMinutes()+a1*c1);$.setUTCMinutes($.getUTCMinutes()+a1*c1);this._setFocusedDate($);_.call(this,b1,true);break;case 1:if(!this.getPickerPopup()){var d1=this.getAggregation("datesRow");var e1=a._createUniversalUTCDate(d1.getDate());var f1=new U(e1.getTime());f1.setUTCDate(1);f1.setUTCMonth(f1.getUTCMonth()+1);f1.setUTCDate(0);var g1=d1.getDays();if(e1.getUTCDate()+g1>f1.getUTCDate()){e1.setUTCDate(f1.getUTCDate());}else{e1.setUTCDate(e1.getUTCDate()+g1);}Q.call(this,e1);}break;case 2:if(!this.getPickerPopup()){var h1=this.getAggregation("monthPicker");if(h1.getMonths()<12){h1.nextPage();u.call(this);}else{$.setUTCFullYear($.getUTCFullYear()+1);P.call(this,$);this._setFocusedDate($);t.call(this);V.call(this,$.getUTCFullYear(),h1);this.fireStartDateChange();}}break;case 3:if(!this.getPickerPopup()){var i1=this.getAggregation("yearPicker");i1.nextPage();v.call(this);}break;}};g.prototype._getShowItemHeader=function(){var Z=this.getItems();if(Z>this._iItemsHead){return true;}else{return false;}};function _(Z,$,a1){var b1=new U(this._oMaxDate.getTime());b1.setUTCMinutes(b1.getUTCMinutes()-this.getIntervalMinutes()*(this._getItems()-1));if(b1.getTime()<this._oMinDate.getTime()){b1=new U(this._oMinDate.getTime());b1.setUTCMinutes(b1.getUTCMinutes()+this.getIntervalMinutes()*(this._getItems()-1));}if(Z.getTime()<this._oMinDate.getTime()){Z=new U(this._oMinDate.getTime());}else if(Z.getTime()>b1.getTime()){Z=b1;}var c1=this.getAggregation("timesRow");var d1=a._createLocalDate(Z,true);c1.setStartDate(d1);this._oUTCStartDate=new U(c1._getStartDate().getTime());d1=a._createLocalDate(this._oUTCStartDate,true);this.setProperty("startDate",d1,true);t.call(this);if($){var e1=a._createLocalDate(this._getFocusedDate(),true);if(!c1.checkDateFocusable(e1)){this._setFocusedDate(Z);c1.setDate(d1);}else{c1.setDate(e1);}}if(!a1){this.fireStartDateChange();}}function h(){if(!this._oUTCStartDate){var Z=this.getAggregation("timesRow");Z.setStartDate(a._createLocalDate(this._getFocusedDate(),true));this._oUTCStartDate=new U(Z._getStartDate().getTime());this._setFocusedDate(this._oUTCStartDate);}return this._oUTCStartDate;}function i(Z){var $=this._getFocusedDate();var a1=this.getAggregation("timesRow");if(!Z){a1.setDate(a._createLocalDate($,true));}else{a1.displayDate(a._createLocalDate($,true));}t.call(this);}function j(){var Z=this.getSelectedDates();if(Z&&Z[0]&&Z[0].getStartDate()){this._oFocusedDate=a._createUniversalUTCDate(Z[0].getStartDate(),undefined,true);}else{var $=new Date();this._oFocusedDate=a._createUniversalUTCDate($,undefined,true);}if(this._oFocusedDate.getTime()<this._oMinDate.getTime()){this._oFocusedDate=new U(this._oMinDate.getTime());}else if(this._oFocusedDate.getTime()>this._oMaxDate.getTime()){this._oFocusedDate=new U(this._oMaxDate.getTime());}}g.prototype._showCalendarPicker=function(){var Z=a._createLocalDate(this._getFocusedDate(),true);var $=this._getCalendarPicker();var a1=new sap.ui.unified.DateRange({startDate:Z});$.displayDate(Z,false);$.removeAllSelectedDates();$.addSelectedDate(a1);$.setMinDate(this.getMinDate());$.setMaxDate(this.getMaxDate());R.call(this,$);this._showOverlay();};g.prototype._showOverlay=function(){this.$("contentOver").css("display","");};g.prototype._hideOverlay=function(){this.$("contentOver").css("display","none");};function k(Z){if(this._oPopup&&this._oPopup.isOpen()){this._oPopup.close();}this._hideOverlay();if(!Z){i.call(this);var $=this.getAggregation("timesRow");q($._oItemNavigation.getItemDomRefs()[$._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}}function m(){if(this._iMode==3){s.call(this,true);}else if(this._iMode==2){p.call(this,true);}var Z=this._getFocusedDate();var $=this._getItems();var a1=this.getAggregation("datesRow");var b1=a1.getSelectedDates()[0];b1.setStartDate(a._createLocalDate(Z,true));var c1=new U(Z.getTime());c1.setUTCDate(1);c1.setUTCMonth(c1.getUTCMonth()+1);c1.setUTCDate(0);var d1=c1.getUTCDate();var e1=Math.floor($*1.5);if(e1>d1){e1=d1;}a1.setDays(e1);if(a1.getDomRef()){a1.$().css("display","");}else{var f1=sap.ui.getCore().createRenderManager();var g1=this.$("content");f1.renderControl(a1);f1.flush(g1[0],false,true);f1.destroy();}this._showOverlay();Q.call(this,Z);if(this._iMode==0){var h1=this.getAggregation("timesRow");q(h1._oItemNavigation.getItemDomRefs()[h1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}this._iMode=1;}function n(Z){this._iMode=0;var $=this.getAggregation("datesRow");$.$().css("display","none");this._hideOverlay();if(!Z){i.call(this);var a1=this.getAggregation("timesRow");q(a1._oItemNavigation.getItemDomRefs()[a1._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}}function o(){if(this._iMode==1){n.call(this,true);}else if(this._iMode==3){s.call(this,true);}var Z=this._getFocusedDate();var $=this.getAggregation("monthPicker");if($.getDomRef()){$.$().css("display","");}else{var a1=sap.ui.getCore().createRenderManager();var b1=this.$("content");a1.renderControl($);a1.flush(b1[0],false,true);a1.destroy();}this._showOverlay();$.setMonth(Z.getUTCMonth());V.call(this,Z.getUTCFullYear(),$);if(this._iMode==0){var c1=this.getAggregation("timesRow");q(c1._oItemNavigation.getItemDomRefs()[c1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}this._iMode=2;u.call(this);}function p(Z){this._iMode=0;var $=this.getAggregation("monthPicker");$.$().css("display","none");this._hideOverlay();if(!Z){i.call(this);var a1=this.getAggregation("timesRow");q(a1._oItemNavigation.getItemDomRefs()[a1._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}}function r(){if(this._iMode==1){n.call(this,true);}else if(this._iMode==2){p.call(this,true);}var Z=this._getFocusedDate();var $=this.getAggregation("yearPicker");if($.getDomRef()){$.$().css("display","");}else{var a1=sap.ui.getCore().createRenderManager();var b1=this.$("content");a1.renderControl($);a1.flush(b1[0],false,true);a1.destroy();}this._showOverlay();$.setDate(Z.getJSDate());if(this._iMode==0){var c1=this.getAggregation("timesRow");q(c1._oItemNavigation.getItemDomRefs()[c1._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}v.call(this);this._iMode=3;}function s(Z){this._iMode=0;var $=this.getAggregation("yearPicker");$.$().css("display","none");this._hideOverlay();if(!Z){i.call(this);var a1=this.getAggregation("timesRow");q(a1._oItemNavigation.getItemDomRefs()[a1._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}}function t(){w.call(this);u.call(this,true);}function u(Z){var $=new U(h.call(this).getTime());var a1=this._getItems();var b1=$.getJSDate().getUTCFullYear();var c1=this._oMaxDate.getJSDate().getUTCFullYear();var d1=this._oMinDate.getJSDate().getUTCFullYear();var e1=$.getJSDate().getUTCMonth();var f1=this._oMaxDate.getJSDate().getUTCMonth();var g1=this._oMinDate.getJSDate().getUTCMonth();var h1=$.getJSDate().getUTCDate();var i1=this._oMaxDate.getJSDate().getUTCDate();var j1=this._oMinDate.getJSDate().getUTCDate();var k1=$.getJSDate().getUTCHours();var l1=this._oMaxDate.getJSDate().getUTCHours();var m1=this._oMinDate.getJSDate().getUTCHours();var n1=$.getJSDate().getUTCMinutes();var o1=this._oMaxDate.getJSDate().getUTCMinutes();var p1=this._oMinDate.getJSDate().getUTCMinutes();var q1=this.getAggregation("header");if(this._iMode==2&&!Z){var r1=this.getAggregation("monthPicker");var s1=r1.getMonths();var t1=r1.getStartMonth();var u1=t1+s1-1;if(t1==0||(b1==d1&&t1<=g1)){q1.setEnabledPrevious(false);}else{q1.setEnabledPrevious(true);}if(u1>10||(b1==c1&&u1>=f1)){q1.setEnabledNext(false);}else{q1.setEnabledNext(true);}return;}if((b1<d1||(b1==d1&&(!Z||(e1<g1||(e1==g1&&(h1<j1||(h1==j1&&(k1<m1||(k1==m1&&n1<=p1)))))))))||((this._iMode==1||this._iMode==2)&&this.getPickerPopup())){q1.setEnabledPrevious(false);}else{q1.setEnabledPrevious(true);}$.setUTCMinutes($.getUTCMinutes()+(a1)*this.getIntervalMinutes()-1);b1=$.getJSDate().getUTCFullYear();e1=$.getJSDate().getUTCMonth();h1=$.getJSDate().getUTCDate();k1=$.getJSDate().getUTCHours();n1=$.getJSDate().getUTCMinutes();if((b1>c1||(b1==c1&&(!Z||(e1>f1||(e1==f1&&(h1>i1||(h1==i1&&(k1>l1||(k1==l1&&n1>=o1)))))))))||((this._iMode==1||this._iMode==2)&&this.getPickerPopup())){q1.setEnabledNext(false);}else{q1.setEnabledNext(true);}}function v(){var Z=this.getAggregation("yearPicker");var $=Z.getYears();var a1=a._createUniversalUTCDate(Z.getFirstRenderedDate());a1.setUTCFullYear(a1.getUTCFullYear()+Math.floor($/2));var b1=this.getAggregation("header");var c1=new U(this._oMaxDate);c1.setUTCFullYear(c1.getUTCFullYear()-Math.ceil($/2));c1.setUTCMonth(11,31);var d1=new U(this._oMinDate);d1.setUTCFullYear(d1.getUTCFullYear()+Math.floor($/2)+1);d1.setUTCMonth(0,1);if(a1.getTime()>c1.getTime()){b1.setEnabledNext(false);}else{b1.setEnabledNext(true);}if(a1.getTime()<d1.getTime()){b1.setEnabledPrevious(false);}else{b1.setEnabledPrevious(true);}}function w(){var Z=this.getAggregation("header");var $;var a1=h.call(this);var b1;var c1=this._getLocaleData();var d1=[];var e1=[];var f1;var g1=false;var h1;var i1=f.Gregorian;var j1=false;if(c1.oLocale.sLanguage.toLowerCase()==="ja"||c1.oLocale.sLanguage.toLowerCase()==="zh"){h1=b.getDateInstance({format:"d"}).format(a1,true);}else{h1=(a1.getUTCDate()).toString();}if(this._bLongMonth||!this._bNamesLengthChecked){d1=c1.getMonthsStandAlone("wide");}else{g1=true;d1=c1.getMonthsStandAlone("abbreviated");e1=c1.getMonthsStandAlone("wide");}var k1=a1.getUTCMonth();$=d1[k1];if(g1){f1=e1[d1[k1]];}if(!this.getPickerPopup()){Z.setTextButton0(h1);Z.setTextButton1($);Z.setTextButton2(this._oYearFormat.format(a1,true));}else{b1=b.getInstance({style:"long",strictParsing:true,relative:j1,calendarType:i1},c1.oLocale);f1=h1=b1.format(a._createLocalDate(a1,true));Z.setTextButton1(h1);}if(g1){Z.setAriaLabelButton1(f1);}}function x(Z,$){var a1;var b1=false;if(Z.getTime()<this._oMinDate.getTime()){a1=this._oMinDate;b1=true;}else if(Z.getTime()>this._oMaxDate.getTime()){a1=this._oMaxDate;b1=true;}else{a1=Z;}this._setFocusedDate(a1);if(b1||$){P.call(this,a1);i.call(this,false);this.fireStartDateChange();}}function y(Z,$){if(Z&&(!this._oFocusedDate||this._oFocusedDate.getTime()!=Z.getTime())){a._checkJSDateObject(Z);Z=a._createUniversalUTCDate(Z,undefined,true);var a1=Z.getUTCFullYear();a._checkYearInValidRange(a1);if(Z.getTime()<this._oMinDate.getTime()||Z.getTime()>this._oMaxDate.getTime()){throw new Error("Date must not be in valid range (minDate and maxDate); "+this);}this._setFocusedDate(Z);if(this.getDomRef()&&this._iMode==0){i.call(this,$);}}}function z(Z){if(this._iMode!=1){m.call(this);}else{n.call(this);}}function A(Z){if(this.getPickerPopup()){this._showCalendarPicker();}else{if(this._iMode!=2){o.call(this);}else{p.call(this);}}}function B(Z){if(this._iMode!=3){r.call(this);}else{s.call(this);}}function E(Z){this.fireSelect();}function F(Z){var $=a._createUniversalUTCDate(Z.getParameter("date"),undefined,true);var a1=Z.getParameter("notVisible");x.call(this,$,a1);}function G(Z){var $=Z.getSource(),a1=$.getSelectedDates()[0].getStartDate();var b1=new U(this._getFocusedDate().getTime());var c1=a._createUniversalUTCDate(a1);b1.setUTCDate(c1.getUTCDate());b1.setUTCMonth(c1.getUTCMonth());b1.setUTCFullYear(c1.getUTCFullYear());x.call(this,b1,true);k.call(this);}function I(Z){var $=new U(this._getFocusedDate().getTime());var a1=Z.oSource;var b1=a1.getSelectedDates()[0];var c1=a._createUniversalUTCDate(b1.getStartDate());if(!this.getPickerPopup()||c1.getUTCMonth()==$.getUTCMonth()){$.setUTCDate(c1.getUTCDate());$.setUTCMonth(c1.getUTCMonth());$.setUTCFullYear(c1.getUTCFullYear());x.call(this,$,true);n.call(this);}}function J(Z){var $=new U(this._getFocusedDate().getTime());var a1=a._createUniversalUTCDate(Z.getParameter("date"),undefined,true);var b1=Z.getParameter("otherMonth");if(b1&&a1.getUTCMonth()==$.getUTCMonth()&&a1.getUTCFullYear()==$.getUTCFullYear()){Q.call(this,a1);}}function K(Z){var $=new U(this._getFocusedDate().getTime());var a1=this.getAggregation("monthPicker");var b1=a1.getMonth();$.setUTCMonth(b1);if(b1!=$.getUTCMonth()){$.setUTCDate(0);}x.call(this,$,true);p.call(this);}function N(Z){var $=new U(this._getFocusedDate().getTime());var a1=this.getAggregation("yearPicker");var b1=a._createUniversalUTCDate(a1.getDate());var c1=$.getUTCMonth();b1.setUTCMonth($.getUTCMonth(),$.getUTCDate());b1.setUTCHours($.getUTCHours());b1.setUTCMinutes($.getUTCMinutes());$=b1;if(c1!=$.getUTCMonth()){$.setUTCDate(0);}x.call(this,$,true);s.call(this);}function O(){this._sInvalidateContent=undefined;var Z=this.getAggregation("timesRow");Z._bDateRangeChanged=true;Z._bInvalidateSync=true;Z.invalidate();Z._bInvalidateSync=undefined;this._bDateRangeChanged=undefined;}function P(Z){var $=this.getAggregation("timesRow");var a1=h.call(this);var b1=$._oItemNavigation.getFocusedIndex();a1=new U(Z.getTime());a1.setUTCMinutes(a1.getUTCMinutes()-b1*this.getIntervalMinutes());_.call(this,a1,false,true);}function Q(Z){var $=this.getAggregation("datesRow");var a1=this.getAggregation("header");if(!this.getPickerPopup()){var b1=new U(Z.getTime());b1.setUTCDate(1);b1.setUTCMonth(b1.getUTCMonth()+1);b1.setUTCDate(0);var c1=$.getDays();var d1=new U(Z.getTime());d1.setUTCDate(1+(Math.ceil(Z.getUTCDate()/c1)-1)*c1);if(b1.getUTCDate()-d1.getUTCDate()<c1){d1.setUTCDate(b1.getUTCDate()-c1+1);}$.setStartDate(a._createLocalDate(d1,true));var e1=d1.getJSDate().getUTCFullYear();var f1=this._oMaxDate.getJSDate().getUTCFullYear();var g1=this._oMinDate.getJSDate().getUTCFullYear();var h1=d1.getJSDate().getUTCMonth();var i1=this._oMaxDate.getJSDate().getUTCMonth();var j1=this._oMinDate.getJSDate().getUTCMonth();var k1=d1.getJSDate().getUTCDate();var l1=this._oMaxDate.getJSDate().getUTCDate();var m1=this._oMinDate.getJSDate().getUTCDate();if(k1<=1||(e1==g1&&h1==j1&&k1<=m1)){a1.setEnabledPrevious(false);}else{a1.setEnabledPrevious(true);}if((k1+c1)>=b1.getUTCDate()||(e1==f1&&h1==i1&&k1>=l1)){a1.setEnabledNext(false);}else{a1.setEnabledNext(true);}}else{a1.setEnabledPrevious(false);a1.setEnabledNext(false);}$.setDate(a._createLocalDate(Z,true));}function R(Z){if(!this._oPopup){q.sap.require("sap.ui.core.Popup");this._oPopup=new sap.ui.core.Popup();this._oPopup.setAutoClose(true);this._oPopup.setAutoCloseAreas([this.getDomRef()]);this._oPopup.setDurations(0,0);this._oPopup._oCalendar=this;this._oPopup.attachClosed(S,this);this._oPopup.onsapescape=function(b1){this._oCalendar.onsapescape(b1);};}this._oPopup.setContent(Z);var $=this.getAggregation("header");var a1=sap.ui.core.Popup.Dock;this._oPopup.open(0,a1.CenterTop,a1.CenterTop,$,null,"flipfit",true);}function S(Z){k.call(this);}function V(Z,$){var a1=0;var b1=11;if(Z==this._oMinDate.getUTCFullYear()){a1=this._oMinDate.getUTCMonth();}if(Z==this._oMaxDate.getUTCFullYear()){b1=this._oMaxDate.getUTCMonth();}$.setMinMax(a1,b1);}function W(Z){u.call(this);}function X(Z){v.call(this);}return g;});
