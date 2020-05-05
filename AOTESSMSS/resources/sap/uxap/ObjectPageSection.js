/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/InvisibleText","./ObjectPageSectionBase","sap/ui/Device","sap/m/Button","sap/ui/core/StashedControlSupport","./ObjectPageSubSection","./library","sap/m/library"],function(I,O,D,B,S,a,l,m){"use strict";var b=m.ButtonType;var c=O.extend("sap.uxap.ObjectPageSection",{metadata:{library:"sap.uxap",properties:{showTitle:{type:"boolean",group:"Appearance",defaultValue:true},titleUppercase:{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"subSections",aggregations:{subSections:{type:"sap.uxap.ObjectPageSubSection",multiple:true,singularName:"subSection"},ariaLabelledBy:{type:"sap.ui.core.InvisibleText",multiple:false,visibility:"hidden"},_showHideAllButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"},_showHideButton:{type:"sap.m.Button",multiple:false,visibility:"hidden"}},associations:{selectedSubSection:{type:"sap.uxap.ObjectPageSubSection",multiple:false}},designTime:true}});c.MEDIA_RANGE=D.media.RANGESETS.SAP_STANDARD;c._getClosestSection=function(s){var o=(typeof s==="string"&&sap.ui.getCore().byId(s))||s;return(o instanceof a)?o.getParent():o;};c.prototype._expandSection=function(){O.prototype._expandSection.call(this)._updateShowHideAllButton(!this._thereAreHiddenSubSections());};c.prototype.init=function(){O.prototype.init.call(this);this._sContainerSelector=".sapUxAPObjectPageSectionContainer";};c.prototype.exit=function(){this._detachMediaContainerWidthChange(this._updateImportance,this);};c.prototype._getImportanceLevelToHide=function(C){var o=this._getObjectPageLayout(),M=C||this._getCurrentMediaContainerRange(),s=o&&o.getShowOnlyHighImportance();return this._determineTheLowestLevelOfImportanceToShow(M.name,s);};c.prototype._updateImportance=function(C){var o=this._getObjectPageLayout(),i=this._getImportanceLevelToHide(C);this.getSubSections().forEach(function(s){s._applyImportanceRules(i);});this._applyImportanceRules(i);this._updateShowHideAllButton(false);if(o&&this.getDomRef()){o._requestAdjustLayout();}};c.prototype._determineTheLowestLevelOfImportanceToShow=function(M,s){if(s||M==="Phone"){return l.Importance.High;}if(M==="Tablet"){return l.Importance.Medium;}return l.Importance.Low;};c.prototype.connectToModels=function(){this.getSubSections().forEach(function(s){s.connectToModels();});};c.prototype._allowPropagationToLoadedViews=function(A){this.getSubSections().forEach(function(s){s._allowPropagationToLoadedViews(A);});};c.prototype.onBeforeRendering=function(){var A="ariaLabelledBy";if(!this.getAggregation(A)){this.setAggregation(A,this._getAriaLabelledBy(),true);}this._detachMediaContainerWidthChange(this._updateImportance,this);this._updateImportance();};c.prototype.onAfterRendering=function(){this._attachMediaContainerWidthChange(this._updateImportance,this);};c.prototype._getAriaLabelledBy=function(){return new I({text:this._getInternalTitle()||this.getTitle()}).toStatic();};c.prototype._setSubSectionsFocusValues=function(){var s=this.getSubSections()||[],L=this.getSelectedSubSection(),p;if(s.length===0){return this;}if(s.length===1){s[0]._setToFocusable(false);return this;}s.forEach(function(o){if(L===o.sId){o._setToFocusable(true);p=true;}else{o._setToFocusable(false);}});if(!p){s[0]._setToFocusable(true);}return this;};c.prototype._disableSubSectionsFocus=function(){var s=this.getSubSections()||[];s.forEach(function(o){o._setToFocusable(false);});return this;};c.prototype._thereAreHiddenSubSections=function(){return this.getSubSections().some(function(s){return s._getIsHidden();});};c.prototype._updateShowHideSubSections=function(h){this.getSubSections().forEach(function(s){if(h&&s._shouldBeHidden()){s._updateShowHideState(true);}else if(!h){s._updateShowHideState(false);}});};c.prototype._getShouldDisplayShowHideAllButton=function(){return this.getSubSections().some(function(s){return s._shouldBeHidden();});};c.prototype._showHideContentAllContent=function(){var s=this._thereAreHiddenSubSections();if(this._getIsHidden()&&s){this._updateShowHideState(false);}this._updateShowHideSubSections(!s);this._updateShowHideAllButton(s);};c.prototype._updateShowHideState=function(h){this._updateShowHideButton(h);this._getShowHideAllButton().setVisible(this._getShouldDisplayShowHideAllButton());return O.prototype._updateShowHideState.call(this,h);};c.prototype._updateShowHideAllButton=function(h){this._getShowHideAllButton().setVisible(this._getShouldDisplayShowHideAllButton()).setText(this._getShowHideAllButtonText(h));};c.prototype._getShowHideAllButton=function(){if(!this.getAggregation("_showHideAllButton")){this.setAggregation("_showHideAllButton",new B({visible:this._getShouldDisplayShowHideAllButton(),text:this._getShowHideAllButtonText(!this._thereAreHiddenSubSections()),press:this._showHideContentAllContent.bind(this),type:b.Transparent}).addStyleClass("sapUxAPSectionShowHideButton"),true);}return this.getAggregation("_showHideAllButton");};c.prototype._getShowHideButtonText=function(h){return l.i18nModel.getResourceBundle().getText(h?"HIDE":"SHOW");};c.prototype._getShowHideAllButtonText=function(h){return l.i18nModel.getResourceBundle().getText(h?"HIDE_ALL":"SHOW_ALL");};c.prototype._updateShowHideButton=function(h){this._getShowHideButton().setVisible(this._shouldBeHidden()).setText(this._getShowHideButtonText(!h));};c.prototype._getShowHideButton=function(){if(!this.getAggregation("_showHideButton")){this.setAggregation("_showHideButton",new B({visible:this._shouldBeHidden(),text:this._getShowHideButtonText(!this._getIsHidden()),press:this._showHideContent.bind(this),type:b.Transparent}).addStyleClass("sapUxAPSectionShowHideButton"),true);}return this.getAggregation("_showHideButton");};S.mixInto(c);return c;});