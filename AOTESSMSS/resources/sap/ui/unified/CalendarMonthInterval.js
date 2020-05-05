/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Control','sap/ui/core/LocaleData','sap/ui/unified/calendar/CalendarUtils','./calendar/Header','./calendar/MonthsRow','./calendar/YearPicker','sap/ui/unified/calendar/CalendarDate','sap/ui/core/Renderer','sap/ui/core/format/DateFormat','sap/ui/Device','sap/ui/core/Locale'],function(q,C,L,a,H,M,Y,b,R,D,c,d){"use strict";var e=C.extend("sap.ui.unified.CalendarMonthInterval",{metadata:{library:"sap.ui.unified",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},startDate:{type:"object",group:"Data"},intervalSelection:{type:"boolean",group:"Behavior",defaultValue:false},singleSelection:{type:"boolean",group:"Behavior",defaultValue:true},months:{type:"int",group:"Appearance",defaultValue:12},pickerPopup:{type:"boolean",group:"Appearance",defaultValue:false},minDate:{type:"object",group:"Misc",defaultValue:null},maxDate:{type:"object",group:"Misc",defaultValue:null}},aggregations:{selectedDates:{type:"sap.ui.unified.DateRange",multiple:true,singularName:"selectedDate"},specialDates:{type:"sap.ui.unified.DateTypeRange",multiple:true,singularName:"specialDate"},header:{type:"sap.ui.unified.calendar.Header",multiple:false,visibility:"hidden"},monthsRow:{type:"sap.ui.unified.calendar.MonthsRow",multiple:false,visibility:"hidden"},yearPicker:{type:"sap.ui.unified.calendar.YearPicker",multiple:false,visibility:"hidden"},calendarPicker:{type:"sap.ui.unified.Calendar",multiple:false,visibility:"hidden"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},legend:{type:"sap.ui.unified.CalendarLegend",multiple:false}},events:{select:{},cancel:{},startDateChange:{}}}});e.prototype.init=function(){this._iMode=0;this.data("sap-ui-fastnavgroup","true",true);this._oYearFormat=D.getDateInstance({format:"y"});this._oMinDate=a._minDate();this._oMaxDate=a._maxDate();this._initializeHeader();this._initializeMonthsRow();this._initilizeYearPicker();this._iDaysMonthsHead=15;};e.prototype.exit=function(){if(this._sInvalidateContent){q.sap.clearDelayedCall(this._sInvalidateContent);}};e.prototype.onBeforeRendering=function(){var F=this.getAggregation("monthsRow");var G=this._getFocusedDate();k.call(this);F.displayDate(G.toLocalJSDate());};e.prototype._initializeHeader=function(){var F=new H(this.getId()+"--Head",{visibleButton0:false,visibleButton1:false,visibleButton2:true});F.attachEvent("pressPrevious",this._handlePrevious,this);F.attachEvent("pressNext",this._handleNext,this);F.attachEvent("pressButton2",r,this);this.setAggregation("header",F);};e.prototype._initializeMonthsRow=function(){var F=new M(this.getId()+"--MonthsRow");F.attachEvent("focus",u,this);F.attachEvent("select",t,this);F._bNoThemeChange=true;this.setAggregation("monthsRow",F);};e.prototype._initilizeYearPicker=function(){this.setAggregation("yearPicker",this._createYearPicker());};e.prototype._createYearPicker=function(){var F=new Y(this.getId()+"--YP",{columns:0,years:6});F.attachEvent("select",w,this);F.attachEvent("pageChange",B,this);F._oMinDate.setYear(this._oMinDate.getYear());F._oMaxDate.setYear(this._oMaxDate.getYear());return F;};e.prototype._getCalendarPicker=function(){var F=this.getAggregation("calendarPicker");if(!F){F=new E(this.getId()+"--Cal");F.setPopupMode(true);F.attachEvent("select",v,this);F.attachEvent("cancel",function(G){this._oPopup.close();},this);this.setAggregation("calendarPicker",F);}return F;};e.prototype.setStartDate=function(S){a._checkJSDateObject(S);if(q.sap.equal(this.getStartDate(),S)){return this;}var F=S.getFullYear();a._checkYearInValidRange(F);this.setProperty("startDate",S,true);this._oStartDate=b.fromLocalJSDate(S);this._oStartDate.setDate(1);var G=this.getAggregation("monthsRow");G.setStartDate(S);k.call(this);var I=this._getFocusedDate().toLocalJSDate();if(!G.checkDateFocusable(I)){this._setFocusedDate(this._oStartDate);G.displayDate(S);}return this;};e.prototype.invalidate=function(O){if(!this._bDateRangeChanged&&(!O||!(O instanceof sap.ui.unified.DateRange))){C.prototype.invalidate.apply(this,arguments);}else if(this.getDomRef()&&this._iMode==0&&!this._sInvalidateContent){this._sInvalidateContent=q.sap.delayedCall(0,this,x);}};e.prototype.removeAllSelectedDates=function(){this._bDateRangeChanged=true;var F=this.removeAllAggregation("selectedDates");return F;};e.prototype.destroySelectedDates=function(){this._bDateRangeChanged=true;var F=this.destroyAggregation("selectedDates");return F;};e.prototype.removeAllSpecialDates=function(){this._bDateRangeChanged=true;var F=this.removeAllAggregation("specialDates");return F;};e.prototype.destroySpecialDates=function(){this._bDateRangeChanged=true;var F=this.destroyAggregation("specialDates");return F;};e.prototype.setLocale=function(F){if(this._sLocale!=F){this._sLocale=F;this._oLocaleData=undefined;this.invalidate();}return this;};e.prototype.getLocale=function(){if(!this._sLocale){this._sLocale=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale().toString();}return this._sLocale;};e.prototype._getFocusedDate=function(){if(!this._oFocusedDate){h.call(this);}return this._oFocusedDate;};e.prototype._setFocusedDate=function(F){a._checkCalendarDate(F);this._oFocusedDate=new b(F);};e.prototype.focusDate=function(F){var G=false;var I=this.getAggregation("monthsRow");if(F&&!I.checkDateFocusable(F)){y.call(this,b.fromLocalJSDate(F));G=true;}p.call(this,F,false);if(G){this.fireStartDateChange();}return this;};e.prototype.displayDate=function(F){p.call(this,F,true);return this;};e.prototype.setMonths=function(F){this.setProperty("months",F,true);F=this._getMonths();var G=this.getAggregation("monthsRow");G.setMonths(F);if(!G.checkDateFocusable(this._getFocusedDate().toLocalJSDate())){var S=f.call(this);this._setFocusedDate(this._oStartDate);G.setDate(S.toLocalJSDate());}if(!this.getPickerPopup()){var I=this.getAggregation("yearPicker");var J=Math.floor(F/2);if(J>20){J=20;}I.setYears(J);}k.call(this);if(this.getDomRef()){if(this._getShowItemHeader()){this.$().addClass("sapUiCalIntHead");}else{this.$().removeClass("sapUiCalIntHead");}}return this;};e.prototype._getMonths=function(){var F=this.getMonths();if(c.system.phone&&F>6){return 6;}else{return F;}};e.prototype._getLocaleData=function(){if(!this._oLocaleData){var F=this.getLocale();var G=new d(F);this._oLocaleData=L.getInstance(G);}return this._oLocaleData;};e.prototype.setPickerPopup=function(P){var F;this.setProperty("pickerPopup",P,true);if(P){if(this.getAggregation("yearPicker")){this.getAggregation("yearPicker").destroy();}}else{if(!this.getAggregation("yearPicker")){this.setAggregation("yearPicker",this._createYearPicker());}F=this.getAggregation("yearPicker");F.setColumns(0);F.setYears(6);}return this;};e.prototype.setMinDate=function(F){if(q.sap.equal(F,this.getMinDate())){return this;}if(!F){this._oMinDate=a._minDate();}else{a._checkJSDateObject(F);this._oMinDate=b.fromLocalJSDate(F);this._oMinDate.setDate(1);var G=this._oMinDate.getYear();a._checkYearInValidRange(G);if(this._oMaxDate.isBefore(this._oMinDate)){q.sap.log.warning("minDate > maxDate -> maxDate set to end of the month",this);this._oMaxDate=b.fromLocalJSDate(F);this._oMaxDate.setDate(a._daysInMonth(this._oMaxDate));this.setProperty("maxDate",this._oMaxDate.toLocalJSDate(),true);}if(this._oFocusedDate){if(this._oFocusedDate.isBefore(this._oMinDate)){q.sap.log.warning("focused date < minDate -> minDate focused",this);this.focusDate(F);}}if(this._oStartDate&&this._oStartDate.isBefore(this._oMinDate)){q.sap.log.warning("start date < minDate -> minDate set as start date",this);_.call(this,new b(this._oMinDate),true,true);}}this.setProperty("minDate",F,false);if(this.getPickerPopup()){var I=this._getCalendarPicker();I.setMinDate(F);}else{var J=this.getAggregation("yearPicker");J._oMinDate.setYear(this._oMinDate.getYear());}return this;};e.prototype.setMaxDate=function(F){if(q.sap.equal(F,this.getMaxDate())){return this;}if(!F){this._oMaxDate=a._maxDate();}else{a._checkJSDateObject(F);this._oMaxDate=b.fromLocalJSDate(F);this._oMaxDate.setDate(a._daysInMonth(this._oMaxDate));var G=this._oMaxDate.getYear();a._checkYearInValidRange(G);if(this._oMinDate.isAfter(this._oMaxDate)){q.sap.log.warning("maxDate < minDate -> minDate set to begin of the month",this);this._oMinDate=b.fromLocalJSDate(F);this._oMinDate.setDate(1);this.setProperty("minDate",this._oMinDate.toLocalJSDate(),true);}if(this._oFocusedDate){if(this._oFocusedDate.isAfter(this._oMaxDate)){q.sap.log.warning("focused date > maxDate -> maxDate focused",this);this.focusDate(F);}}if(this._oStartDate){var I=new b(this._oStartDate);I.setDate(1);I.setMonth(I.getMonth()+this._getMonths());I.setDate(0);if(I.isAfter(this._oMaxDate)){var S=new b(this._oMaxDate);S.setDate(1);S.setMonth(S.getMonth()-this._getMonths()+1);if(S.isSameOrAfter(this._oMinDate)){q.sap.log.warning("end date > maxDate -> maxDate set as end date",this);_.call(this,S,true,true);}}}}this.setProperty("maxDate",F,false);if(this.getPickerPopup()){var J=this._getCalendarPicker();J.setMaxDate(F);}else{var K=this.getAggregation("yearPicker");K._oMaxDate.setYear(this._oMaxDate.getYear());}return this;};e.prototype.onclick=function(F){if(F.isMarked("delayedMouseEvent")){return;}if(F.target.id==this.getId()+"-cancel"){this.onsapescape(F);}};e.prototype.onmousedown=function(F){F.preventDefault();F.setMark("cancelAutoClose");};e.prototype.onsapescape=function(F){if(this.getPickerPopup()){s.call(this);this.fireCancel();}else{switch(this._iMode){case 0:this.fireCancel();break;case 1:j.call(this);break;}}};e.prototype.onsaptabnext=function(F){var G=this.getAggregation("header"),I,J;if(q.sap.containsOrEquals(this.getDomRef("content"),F.target)){q.sap.focus(G.getDomRef("B2"));if(!this._bPoupupMode){J=this.getAggregation("monthsRow");q(J._oItemNavigation.getItemDomRefs()[J._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");if(!this.getPickerPopup()){I=this.getAggregation("yearPicker");if(I.getDomRef()){q(I._oItemNavigation.getItemDomRefs()[I._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}}}F.preventDefault();}};e.prototype.onsaptabprevious=function(F){var G=this.getAggregation("header"),I,J;if(q.sap.containsOrEquals(this.getDomRef("content"),F.target)){if(this._bPoupupMode){q.sap.focus(G.getDomRef("B2"));F.preventDefault();}}else if(F.target.id==G.getId()+"-B2"){switch(this._iMode){case 0:I=this.getAggregation("monthsRow");I._oItemNavigation.focusItem(I._oItemNavigation.getFocusedIndex());break;case 1:if(!this.getPickerPopup()){J=this.getAggregation("yearPicker");J._oItemNavigation.focusItem(J._oItemNavigation.getFocusedIndex());}break;}F.preventDefault();}};e.prototype.onfocusin=function(F){if(F.target.id==this.getId()+"-end"){var G=this.getAggregation("header"),I,J;q.sap.focus(G.getDomRef("B2"));if(!this._bPoupupMode){I=this.getAggregation("monthsRow");q(I._oItemNavigation.getItemDomRefs()[I._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");if(!this.getPickerPopup()){J=this.getAggregation("yearPicker");if(J.getDomRef()){q(J._oItemNavigation.getItemDomRefs()[J._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}}}}this.$("end").attr("tabindex","-1");};e.prototype.onsapfocusleave=function(F){var G,I;if(!F.relatedControlId||!q.sap.containsOrEquals(this.getDomRef(),sap.ui.getCore().byId(F.relatedControlId).getFocusDomRef())){this.$("end").attr("tabindex","0");if(!this._bPoupupMode){switch(this._iMode){case 0:G=this.getAggregation("monthsRow");q(G._oItemNavigation.getItemDomRefs()[G._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");break;case 1:if(!this.getPickerPopup()){I=this.getAggregation("yearPicker");q(I._oItemNavigation.getItemDomRefs()[I._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}break;}}}};e.prototype._handlePrevious=function(F){var G,I,S,J;switch(this._iMode){case 0:G=this._getFocusedDate();I=this._getMonths();S=new b(f.call(this));S.setMonth(S.getMonth()-I);G.setMonth(G.getMonth()-I);this._setFocusedDate(G);_.call(this,S,true);break;case 1:if(!this.getPickerPopup()){J=this.getAggregation("yearPicker");J.previousPage();m.call(this);}break;}};e.prototype._handleNext=function(F){var G,I,S,J;switch(this._iMode){case 0:G=this._getFocusedDate();I=this._getMonths();S=new b(f.call(this));S.setMonth(S.getMonth()+I);G.setMonth(G.getMonth()+I);this._setFocusedDate(G);_.call(this,S,true);break;case 1:if(!this.getPickerPopup()){J=this.getAggregation("yearPicker");J.nextPage();m.call(this);}break;}};e.prototype._showOverlay=function(){this.$("contentOver").css("display","");};e.prototype._hideOverlay=function(){this.$("contentOver").css("display","none");};e.prototype._getShowItemHeader=function(){var F=this.getMonths();if(F>this._iDaysMonthsHead){return true;}else{return false;}};function _(S,F,G){var I=new b(this._oMaxDate);I.setDate(1);I.setMonth(I.getMonth()-this._getMonths()+1);if(I.isBefore(this._oMinDate)){I=new b(this._oMinDate);I.setMonth(I.getMonth()+this._getMonths()-1);}if(S.isBefore(this._oMinDate)){S=new b(this._oMinDate);}else if(S.isAfter(I)){S=I;}S.setDate(1);var J=S.toLocalJSDate();this.setProperty("startDate",J,true);this._oStartDate=S;var K=this.getAggregation("monthsRow");K.setStartDate(J);k.call(this);if(F){var N=this._getFocusedDate().toLocalJSDate();if(!K.checkDateFocusable(N)){this._setFocusedDate(S);K.setDate(J);}else{K.setDate(N);}}if(!G){this.fireStartDateChange();}}function f(){if(!this._oStartDate){this._oStartDate=this._getFocusedDate();this._oStartDate.setDate(1);}return this._oStartDate;}function g(N){var F=this._getFocusedDate();var G=this.getAggregation("monthsRow");if(!N){G.setDate(F.toLocalJSDate());}else{G.displayDate(F.toLocalJSDate());}k.call(this);}function h(){var S=this.getSelectedDates();if(S&&S[0]&&S[0].getStartDate()){this._oFocusedDate=b.fromLocalJSDate(S[0].getStartDate());}else{this._oFocusedDate=new b();}this._oFocusedDate.setDate(1);if(this._oFocusedDate.isBefore(this._oMinDate)){this._oFocusedDate=new b(this._oMinDate);}else if(this._oFocusedDate.isAfter(this._oMaxDate)){this._oFocusedDate=new b(this._oMaxDate);}}function i(){var F=this._getFocusedDate();var G=this.getAggregation("yearPicker");if(G.getDomRef()){G.$().css("display","");}else{var I=sap.ui.getCore().createRenderManager();var $=this.$("content");I.renderControl(G);I.flush($[0],false,true);I.destroy();}this._showOverlay();G.setDate(F.toLocalJSDate());if(this._iMode==0){var J=this.getAggregation("monthsRow");q(J._oItemNavigation.getItemDomRefs()[J._oItemNavigation.getFocusedIndex()]).attr("tabindex","-1");}m.call(this);this._iMode=1;}function j(N){this._iMode=0;var F=this.getAggregation("yearPicker");F.$().css("display","none");this._hideOverlay();if(!N){g.call(this);var G=this.getAggregation("monthsRow");q(G._oItemNavigation.getItemDomRefs()[G._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}}function k(){n.call(this);l.call(this);}function l(){var F=new b(f.call(this));var G=this._getMonths();var I=F.getYear();var J=this._oMaxDate.getYear();var K=this._oMinDate.getYear();var N=F.getMonth();var O=this._oMaxDate.getMonth();var P=this._oMinDate.getMonth();var Q=this.getAggregation("header");if(I<K||(I==K&&N<=P)){Q.setEnabledPrevious(false);}else{Q.setEnabledPrevious(true);}F.setMonth(F.getMonth()+G-1);I=F.getYear();N=F.getMonth();if(I>J||(I==J&&N>=O)){Q.setEnabledNext(false);}else{Q.setEnabledNext(true);}}function m(){var F=this.getAggregation("yearPicker");var G=F.getYears();var I=b.fromLocalJSDate(F.getFirstRenderedDate());I.setYear(I.getYear()+Math.floor(G/2));var J=this.getAggregation("header");var K=new b(this._oMaxDate);K.setYear(K.getYear()-Math.ceil(G/2));K.setMonth(11,31);var N=new b(this._oMinDate);N.setYear(N.getYear()+Math.floor(G/2)+1);N.setMonth(0,1);J.setEnabledNext(!I.isAfter(K));J.setEnabledPrevious(!I.isBefore(N));}function n(){var T;var S=f.call(this);var F=this._oYearFormat.format(S.toUTCJSDate(),true);var G=new b(S);G.setMonth(G.getMonth()+this._getMonths()-1);var I=this._oYearFormat.format(G.toUTCJSDate(),true);if(F!=I){var J=this._getLocaleData();var P=J.getIntervalPattern();T=P.replace(/\{0\}/,F).replace(/\{1\}/,I);}else{T=F;}var K=this.getAggregation("header");K.setTextButton2(T);}function o(F,N){var G;var I=false;if(F.isBefore(this._oMinDate)){G=this._oMinDate;I=true;}else if(F.isAfter(this._oMaxDate)){G=this._oMaxDate;I=true;}else{G=F;}this._setFocusedDate(G);if(I||N){y.call(this,G);g.call(this,false);this.fireStartDateChange();}}function p(F,S){if(!F){return;}var G=b.fromLocalJSDate(F);if(this._oFocusedDate&&this._oFocusedDate.isSame(G)){return;}var I=G.getYear();a._checkYearInValidRange(I);if(a._isOutside(G,this._oMinDate,this._oMaxDate)){throw new Error("Date must not be in valid range (minDate and maxDate); "+this);}this._setFocusedDate(G);if(this.getDomRef()&&this._iMode==0){g.call(this,S);}}function r(F){if(this.getPickerPopup()){this._showCalendarPicker();}else{if(this._iMode!=1){i.call(this);}else{j.call(this);}}}e.prototype._showCalendarPicker=function(){var F=this._getFocusedDate(true).toLocalJSDate();var G=this._getCalendarPicker();var S=new sap.ui.unified.DateRange({startDate:F});G.displayDate(F,false);G.removeAllSelectedDates();G.addSelectedDate(S);G.setMinDate(this.getMinDate());G.setMaxDate(this.getMaxDate());z.call(this,G);this._showOverlay();};function s(N){if(this._oPopup&&this._oPopup.isOpen()){this._oPopup.close();}this._hideOverlay();if(!N){g.call(this);var F=this.getAggregation("monthsRow");q(F._oItemNavigation.getItemDomRefs()[F._oItemNavigation.getFocusedIndex()]).attr("tabindex","0");}}function t(F){this.fireSelect();}function u(F){var G=b.fromLocalJSDate(F.getParameter("date"));var N=F.getParameter("notVisible");o.call(this,G,N);}function v(F){var G=new b(this._getFocusedDate());var I=this._getCalendarPicker();var S=I.getSelectedDates()[0].getStartDate();var N=b.fromLocalJSDate(S);N.setMonth(G.getMonth());N.setDate(G.getDate());o.call(this,N,true);s.call(this);}function w(F){var G=new b(this._getFocusedDate());var I=this.getAggregation("yearPicker");var J=b.fromLocalJSDate(I.getDate());J.setMonth(G.getMonth());J.setDate(G.getDate());G=J;o.call(this,G,true);j.call(this);}function x(){this._sInvalidateContent=undefined;var F=this.getAggregation("monthsRow");F._bDateRangeChanged=true;F._bInvalidateSync=true;F.invalidate();F._bInvalidateSync=undefined;this._bDateRangeChanged=undefined;}function y(F){var G=this.getAggregation("monthsRow");var S=f.call(this);var I=G._oItemNavigation.getFocusedIndex();S=new b(F);S.setMonth(S.getMonth()-I);_.call(this,S,false,true);}function z(P){if(!this._oPopup){q.sap.require("sap.ui.core.Popup");this._oPopup=new sap.ui.core.Popup();this._oPopup.setAutoClose(true);this._oPopup.setAutoCloseAreas([this.getDomRef()]);this._oPopup.setDurations(0,0);this._oPopup._oCalendar=this;this._oPopup.attachClosed(A,this);this._oPopup.onsapescape=function(I){this._oCalendar.onsapescape(I);};}this._oPopup.setContent(P);var F=this.getAggregation("header");var G=sap.ui.core.Popup.Dock;this._oPopup.open(0,G.CenterTop,G.CenterTop,F,null,"flipfit",true);}function A(F){s.call(this);}function B(F){m.call(this);}var E=sap.ui.unified.Calendar.extend("CustomYearPicker",{renderer:R.extend(sap.ui.unified.CalendarRenderer)});E.prototype._initializeHeader=function(){var F=new H(this.getId()+"--Head",{visibleButton1:false});F.attachEvent("pressPrevious",this._handlePrevious,this);F.attachEvent("pressNext",this._handleNext,this);F.attachEvent("pressButton2",this._handleButton2,this);this.setAggregation("header",F);};E.prototype.onAfterRendering=function(){sap.ui.unified.Calendar.prototype.onAfterRendering.apply(this,arguments);var F=this.getAggregation("header");F.$("B2").css("background-color","inherit").css("color","inherit").css("cursor","inherit").css("pointer-events","none");this._showYearPicker();};E.prototype.onThemeChanged=function(){sap.ui.unified.Calendar.prototype.onThemeChanged.apply(this,arguments);var F=this.getAggregation("header");F.$("B2").css("background-color","inherit").css("color","inherit").css("cursor","inherit").css("pointer-events","none");};E.prototype._selectYear=function(){var F=this.getAggregation("yearPicker");var G=this.getSelectedDates()[0];if(!G){G=new sap.ui.unified.DateRange();}G.setStartDate(F.getDate());this.addSelectedDate(G);this.fireSelect();};E.prototype.onsapescape=function(F){this.fireCancel();};E.prototype._shouldFocusB2OnTabPrevious=function(F){return false;};return e;});
