/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./TextField','./TextView','./library','sap/ui/core/Control','sap/ui/core/ValueStateSupport','sap/ui/core/theming/Parameters'],function(q,T,a,l,C,V,P){"use strict";var I=C.extend("sap.ui.commons.InPlaceEdit",{metadata:{library:"sap.ui.commons",properties:{valueState:{type:"sap.ui.core.ValueState",group:"Data",defaultValue:sap.ui.core.ValueState.None},undoEnabled:{type:"boolean",group:"Misc",defaultValue:true},design:{type:"sap.ui.commons.TextViewDesign",group:"Data",defaultValue:sap.ui.commons.TextViewDesign.Standard}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:false}},events:{change:{parameters:{newValue:{type:"string"}}},liveChange:{parameters:{liveValue:{type:"string"}}}}}});(function(){I.prototype.init=function(){this._bEditMode=false;};I.prototype.exit=function(){this._bEditMode=undefined;this._oDisplayControl=undefined;this._oEditControl=undefined;this._sOldText=undefined;this._sOldTextAvailable=undefined;this._bUseEditButton=undefined;this._iHeight=undefined;if(this._oTextView){this._oTextView.destroy();delete this._oTextView;}if(this._oTextField){this._oTextField.destroy();delete this._oTextField;}if(this._oUndoButton){this._oUndoButton.destroy();delete this._oUndoButton;}if(this._oEditButton){this._oEditButton.destroy();delete this._oEditButton;}var r=this.getContent();if(r){r.detachEvent("_change",p,this);if(r instanceof T){r.detachEvent("change",n,this);r.detachEvent("liveChange",o,this);}}};I.prototype.onBeforeRendering=function(){var t=this;u(t);d(t);var r=this.getTooltip();if(r instanceof sap.ui.core.TooltipBase){if(this._bEditMode){r._currentControl=this._oEditControl;}else{r._currentControl=this._oDisplayControl;}}};I.prototype.onAfterRendering=function(){if(!this._bEditMode&&this.getEditable()&&this._oTextView&&this._oTextView.getDomRef()){this._oTextView.$().attr("tabindex","0");}var $=this.$();var r;var O;if(this._bEditMode){this._oEditControl.$().css("width","100%");if(this._iHeight>0){O=$.height();var D=this._iHeight-O;var M=$.outerHeight(true)-$.outerHeight(false);D=D+M;var t=Math.floor(D/2);var v=D-t;$.css("margin-top",t+"px").css("margin-bottom",v+"px");}}else if(this._oDisplayControl.getMetadata().getName()=="sap.ui.commons.Link"){this._oDisplayControl.$().css("width","auto").css("max-width","100%");}else{var w=this._oDisplayControl.$();w.css("width","100%");if(!this._iHeight&&this._iHeight!=0&&this.getDesign()!=sap.ui.commons.TextViewDesign.Standard){r=w.outerHeight(true);O=$.innerHeight();if(O<r){var x=$.outerHeight()-$.innerHeight();this._iHeight=r+x;}else{this._iHeight=0;}}if(this._iHeight>0){$.css("height",this._iHeight+"px");}}if(this._sOldTextAvailable&&this._oUndoButton&&this._oUndoButton.getDomRef()){this._oUndoButton.$().attr("tabindex","-1");}if(this._oEditButton&&this._oEditButton.getDomRef()){this._oEditButton.$().attr("tabindex","-1");}if(this._delayedCallId){q.sap.clearDelayedCall(this._delayedCallId);this._delayedCallId=null;}if(this.getValueState()==sap.ui.core.ValueState.Success){this._delayedCallId=q.sap.delayedCall(3000,this,"removeValidVisualization");}};I.prototype.removeValidVisualization=function(){var D=this.$();if(D){D.removeClass("sapUiIpeSucc");}};I.prototype.clearOldText=function(){if(!this.getUndoEnabled()){return;}if(this._bEditMode){this._sOldText=this._oEditControl.getValue();this._sOldTextAvailable=true;}else{this._sOldText=undefined;this._sOldTextAvailable=false;}this.rerender();};I.prototype.getRequired=function(){if(this.getContent()&&this.getContent().getRequired){return this.getContent().getRequired();}else{return false;}};I.prototype.getEditable=function(){var r=this.getContent();if(!r||(r.getEditable&&!r.getEditable())||(r.getEnabled&&!r.getEnabled())){return false;}else{return true;}};I.prototype.onsapescape=function(E){if(this.getUndoEnabled()){if(!sap.ui.Device.browser.firefox){var t=this;e(t);}else{this._bEsc=true;}if(this.$().hasClass("sapUiIpeUndo")){E.stopPropagation();}this._oEditControl._bEsc=undefined;this._oEditControl._sValue=undefined;}};I.prototype.onkeypress=function(E){if(this._bEsc){var t=this;this._bEsc=undefined;e(t);}};I.prototype.onkeydown=function(E){if(E.keyCode==q.sap.KeyCodes.F2&&!this._bEditMode){var t=this;s(t);this.$().addClass("sapUiIpeFocus");}};I.prototype.onfocusin=function(E){if(!this._bEditMode){if(!this._bUseEditButton&&E.target.id!=this.getId()+"--X"){var t=this;s(t);}this.$().addClass("sapUiIpeFocus");}else if(this._focusDelay){q.sap.clearDelayedCall(this._focusDelay);this._focusDelay=null;}};I.prototype.ontap=function(E){if(sap.ui.Device.os.name=="iOS"){this.onfocusin(E);}};I.prototype.onfocusout=function(E){if(this._focusDelay){q.sap.clearDelayedCall(this._focusDelay);this._focusDelay=null;}this._focusDelay=q.sap.delayedCall(200,this,"_handleFocusOut",arguments);};I.prototype._handleFocusOut=function(E){var F=document.activeElement;if(!q.sap.containsOrEquals(this.getDomRef(),F)){if(!this._bEditMode){this.$().removeClass("sapUiIpeFocus");}var t=this;b(t);}this._focusDelay=undefined;};I.prototype.setContent=function(r){var O=this.getContent();if(O){O.detachEvent("_change",p,this);if(O instanceof T){O.detachEvent("change",n,this);O.detachEvent("liveChange",o,this);O._propagateEsc=undefined;}}this._sOldText=undefined;this._sOldTextAvailable=false;this._oDisplayControl=undefined;this._oEditControl=undefined;this.setAggregation("content",r);if(r){r.attachEvent("_change",p,this);if(r instanceof T){r.attachEvent("change",n,this);r.attachEvent("liveChange",o,this);r._propagateEsc=true;}}var t=this;u(t);};I.prototype.setValueState=function(v){var r=this.getContent();if(r&&r.setValueState){r.setValueState(v);}else if(this._oEditControl&&this._oEditControl.setValueState){this._oEditControl.setValueState(v);p.call(this);}else{this.setProperty("valueState",v);}};I.prototype.getValueState=function(){var r=this.getContent();if(r&&r.getValueState){return r.getValueState();}else if(this._oEditControl&&this._oEditControl.getValueState){return this._oEditControl.getValueState();}else{return this.getProperty("valueState");}};I.prototype.setTooltip=function(t){var r=this.getContent();if(r){r.setTooltip(t);}else{this._refreshTooltipBaseDelegate(t);this.setAggregation("tooltip",t);}return this;};I.prototype.getTooltip=function(){var r=this.getContent();if(r){return r.getTooltip();}else{return this.getAggregation("tooltip");}};I.prototype.setDesign=function(D){this.setProperty("design",D);this._iHeight=undefined;};I.prototype.clone=function(){var r=this.getContent();if(r){r.detachEvent("_change",p,this);if(r instanceof T){r.detachEvent("change",n,this);r.detachEvent("liveChange",o,this);}}var t=C.prototype.clone.apply(this,arguments);if(r){r.attachEvent("_change",p,this);if(r instanceof T){r.attachEvent("change",n,this);r.attachEvent("liveChange",o,this);}}return t;};I.prototype.getFocusDomRef=function(){if(!this.getDomRef()){return undefined;}if(this._bEditMode){return this._oEditControl.getFocusDomRef();}else{return this._oDisplayControl.getFocusDomRef();}};I.prototype.getIdForLabel=function(){if(this._oDisplayControl&&this._oDisplayControl.getMetadata().getName()=="sap.ui.commons.Link"){return this._oDisplayControl.getId();}else if(this._oEditControl){return this._oEditControl.getId();}else{return this.getId();}};I.prototype.onThemeChanged=function(E){var t=this;i(t);j(t);this._iHeight=undefined;if(this.getDomRef()&&!this._bEditMode){this.rerender();}};I.prototype.getAccessibilityInfo=function(){var r=this.getContent();return r&&r.getAccessibilityInfo?r.getAccessibilityInfo():null;};var c={onAfterRendering:function(){this.onAfterRendering();}};function u(r){var t=r.getContent();if(!t){return;}var v=t.getTooltip();switch(t.getMetadata().getName()){case"sap.ui.commons.TextField":case"sap.ui.commons.ComboBox":case"sap.ui.commons.DropdownBox":if(!r._oTextView){r._oTextView=new a(r.getId()+"--TV",{wrapping:false});r._oTextView.setParent(r);r._oTextView.removeDelegate(c);r._oTextView.addDelegate(c,r);r._oTextView.getTooltip=function(){return this.getParent().getTooltip();};}r._oTextView.setText(t.getValue());r._oTextView.setEnabled(t.getEnabled());r._oTextView.setTextDirection(t.getTextDirection());r._oTextView.setVisible(t.getVisible());r._oTextView.setWidth("100%");r._oTextView.setTextAlign(t.getTextAlign());r._oTextView.setDesign(r.getDesign());r._oTextView.setHelpId(t.getHelpId());r._oTextView.setAccessibleRole(t.getAccessibleRole());if(r._oTextView._oTooltip&&r._oTextView._oTooltip!=v){r._oTextView.removeDelegate(r._oTextView._oTooltip);r._oTextView._oTooltip=undefined;}if(v instanceof sap.ui.core.TooltipBase){if(!r._oTextView._oTooltip||r._oTextView._oTooltip!=v){r._oTextView.addDelegate(v);r._oTextView._oTooltip=v;}}r._oDisplayControl=r._oTextView;r._oEditControl=t;r._bUseEditButton=false;break;case"sap.ui.commons.Link":r._oDisplayControl=t;r._oDisplayControl.removeDelegate(c);r._oDisplayControl.addDelegate(c,r);if(r._oTextField){r._oTextField.setValue(t.getText());r._oTextField.setWidth("100%");r._oEditControl=r._oTextField;if(r._oTextField._oTooltip&&r._oTextField._oTooltip!=v){r._oTextField.removeDelegate(r._oTextField._oTooltip);r._oTextField._oTooltip=undefined;}if(v instanceof sap.ui.core.TooltipBase){if(!r._oTextField._oTooltip||r._oTextField._oTooltip!=v){r._oTextField.addDelegate(v);r._oTextField._oTooltip=v;}}}f(r);r._bUseEditButton=true;break;default:throw new Error("Control not supported for InPlaceEdit");}}function s(r){if(!r._bEditMode&&r.getEditable()){if(!r._oEditControl&&r.getContent().getMetadata().getName()=="sap.ui.commons.Link"){var v=r.getValueState();r._oTextField=new T(r.getId()+"--input",{valueState:v});r._oTextField.setParent(r);r._oTextField.attachEvent('change',m,r);r._oTextField.attachEvent('liveChange',o,r);r._oTextField._propagateEsc=true;r._oTextField.getTooltip=function(){return this.getParent().getTooltip();};}if(!r._sOldTextAvailable&&r.getUndoEnabled()){r._sOldText=g(r);r._sOldTextAvailable=true;}r._bEditMode=true;r.rerender();r._oEditControl.focus();}}function b(r){if(r._bEditMode&&r.getEditable()){r._bEditMode=false;if(r._sOldText==g(r)){r._sOldText=undefined;r._sOldTextAvailable=false;}r.rerender();}}function g(r){var t=r.getContent();if(!t){return undefined;}if(t.getValue){return t.getValue();}else if(t.getText){return t.getText();}}function d(r){if(!r._oUndoButton&&r.getUndoEnabled()){r._oUndoButton=new sap.ui.commons.Button(r.getId()+"--X",{lite:true}).setParent(r);i(r);r._oUndoButton.attachEvent('press',h,r);}if(r._oUndoButton){r._oUndoButton.setEnabled(r.getEditable());}}function i(r){if(r._oUndoButton){var t=P._getThemeImage('_sap_ui_commons_InPlaceEdit_UndoImageURL');var v=P._getThemeImage('_sap_ui_commons_InPlaceEdit_UndoImageDownURL');if(!t){t="sap-icon://decline";}r._oUndoButton.setIcon(t);r._oUndoButton.setIconHovered(v);}}function h(E){var t=this;e(t);if(this._bEditMode){this._oEditControl.focus();this.$().removeClass("sapUiIpeUndo");}}function e(r){if(r.getUndoEnabled()&&r._sOldTextAvailable){var t=r.getContent();if(!t){return;}if(t.setValue){t.setValue(r._sOldText);}else if(t.setText){t.setText(r._sOldText);}if(r._bEditMode){r._oEditControl.setValue(r._sOldText);r._oEditControl.fireChange({newValue:r._sOldText});}else if(t.fireChange){t.fireChange({newValue:r._sOldText});}else{r.fireChange({newValue:r._sOldText});}if(!r._bEditMode){r._sOldText=undefined;r._sOldTextAvailable=false;}}}function f(r){if(!r._oEditButton){r._oEditButton=new sap.ui.commons.Button(r.getId()+"--Edit",{lite:true}).setParent(r);r._oEditButton.addStyleClass("sapUiIpeEBtn");j(r);r._oEditButton.attachEvent('press',k,r);}}function j(r){if(r._oEditButton){var t=P._getThemeImage('_sap_ui_commons_InPlaceEdit_EditImageURL');var v=P._getThemeImage('_sap_ui_commons_InPlaceEdit_EditImageDownURL');if(!t){t="sap-icon://edit";}r._oEditButton.setIcon(t);r._oEditButton.setIconHovered(v);}}function k(E){var t=this;s(t);this.$().addClass("sapUiIpeFocus");}function m(E){var r=this.getContent();if(r.setText){var N=E.getParameter("newValue");r.setText(N);n.apply(this,arguments);}}function n(E){if(this._sOldText!=E.getParameter("newValue")&&this.getUndoEnabled()){this.$().addClass("sapUiIpeUndo");}else{this.$().removeClass("sapUiIpeUndo");}this.fireChange(E.getParameters());}function o(E){if(this._sOldText!=E.getParameter("liveValue")&&this.getUndoEnabled()){this.$().addClass("sapUiIpeUndo");}else{this.$().removeClass("sapUiIpeUndo");}this.fireLiveChange({liveValue:E.getParameter("liveValue")});}function p(){if(!this._bEditMode){this.invalidate();}else{switch(this.getValueState()){case(sap.ui.core.ValueState.Error):if(!this.$().hasClass('sapUiIpeErr')){this.$().addClass('sapUiIpeErr');this.$().removeClass('sapUiIpeWarn');this.$().removeClass('sapUiIpeSucc');}break;case(sap.ui.core.ValueState.Success):if(!this.$().hasClass('sapUiIpeSucc')){this.$().addClass('sapUiIpeSucc');this.$().removeClass('sapUiIpeErr');this.$().removeClass('sapUiIpeWarn');}break;case(sap.ui.core.ValueState.Warning):if(!this.$().hasClass('sapUiIpeWarn')){this.$().addClass('sapUiIpeWarn');this.$().removeClass('sapUiIpeErr');this.$().removeClass('sapUiIpeSucc');}break;default:this.$().removeClass('sapUiIpeWarn');this.$().removeClass('sapUiIpeErr');this.$().removeClass('sapUiIpeSucc');break;}}}}());return I;},true);
