/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Button','./Dialog','./SearchField','./Table','./library','sap/ui/core/Control','sap/ui/Device','sap/ui/base/ManagedObject','sap/m/Toolbar','sap/m/Label','sap/m/BusyIndicator','sap/m/Bar','sap/ui/core/theming/Parameters'],function(B,D,S,T,l,C,a,M,b,L,c,d,P){"use strict";var e=l.ListMode;var f=C.extend("sap.m.TableSelectDialog",{metadata:{library:"sap.m",properties:{title:{type:"string",group:"Appearance",defaultValue:null},noDataText:{type:"string",group:"Appearance",defaultValue:null},multiSelect:{type:"boolean",group:"Dimension",defaultValue:false},growingThreshold:{type:"int",group:"Misc",defaultValue:null},contentWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},rememberSelections:{type:"boolean",group:"Behavior",defaultValue:false},contentHeight:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}},defaultAggregation:"items",aggregations:{items:{type:"sap.m.ColumnListItem",multiple:true,singularName:"item",bindable:"bindable"},_dialog:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},columns:{type:"sap.m.Column",multiple:true,singularName:"column",bindable:"bindable"}},events:{confirm:{parameters:{selectedItem:{type:"sap.m.StandardListItem"},selectedItems:{type:"sap.m.StandardListItem[]"},selectedContexts:{type:"string"}}},search:{parameters:{value:{type:"string"},itemsBinding:{type:"any"}}},liveChange:{parameters:{value:{type:"string"},itemsBinding:{type:"any"}}},cancel:{}}}});f.prototype.init=function(){var t=this,i=0,r=null;r=function(){t._oSelectedItem=t._oTable.getSelectedItem();t._aSelectedItems=t._oTable.getSelectedItems();t._oDialog.detachAfterClose(r);t._fireConfirmAndUpdateSelection();};this._bAppendedToUIArea=false;this._bInitBusy=false;this._bFirstRender=true;this._oRb=sap.ui.getCore().getLibraryResourceBundle("sap.m");this._oTable=new T(this.getId()+"-table",{growing:true,growingScrollToLoad:true,mode:e.SingleSelectMaster,modeAnimationOn:false,infoToolbar:new b({visible:false,active:false,content:[new L({text:this._oRb.getText("TABLESELECTDIALOG_SELECTEDITEMS",[0])})]}),selectionChange:function(E){if(t._oDialog){if(!t.getMultiSelect()){t._oDialog.attachAfterClose(r);t._oDialog.close();}else{t._updateSelectionIndicator();}}}});this._oTable.getInfoToolbar().addEventDelegate({onAfterRendering:function(){t._oTable.getInfoToolbar().$().attr('aria-live','polite');}});this._table=this._oTable;this._oBusyIndicator=new c(this.getId()+"-busyIndicator").addStyleClass("sapMTableSelectDialogBusyIndicator",true);this._oSearchField=new S(this.getId()+"-searchField",{width:"100%",liveChange:function(E){var v=E.getSource().getValue(),h=(v?300:0);clearTimeout(i);if(h){i=setTimeout(function(){t._executeSearch(v,"liveChange");},h);}else{t._executeSearch(v,"liveChange");}},search:function(E){t._executeSearch(E.getSource().getValue(),"search");}});this._searchField=this._oSearchField;this._oSubHeader=new d(this.getId()+"-subHeader",{contentMiddle:[this._searchField]});this._oDialog=new D(this.getId()+"-dialog",{stretch:a.system.phone,contentHeight:"2000px",subHeader:this._oSubHeader,content:[this._oBusyIndicator,this._oTable],leftButton:this._getCancelButton(),initialFocus:((a.system.desktop&&this._oSearchField)?this._oSearchField:null)});this._dialog=this._oDialog;this.setAggregation("_dialog",this._oDialog);var g=this._oDialog.onsapescape;this._oDialog.onsapescape=function(E){if(g){g.call(t._oDialog,E);}t._onCancel();};this._oDialog._iVMargin=8*(parseInt(P.get("sapUiFontSize"),10)||16);this._sSearchFieldValue="";this._bFirstRequest=true;this._iTableUpdateRequested=0;};f.prototype.exit=function(){this._oTable=null;this._oSearchField=null;this._oSubHeader=null;this._oBusyIndicator=null;this._sSearchFieldValue=null;this._iTableUpdateRequested=null;this._bFirstRequest=false;this._bInitBusy=false;this._bFirstRender=false;if(this._bAppendedToUIArea){var s=sap.ui.getCore().getStaticAreaRef();s=sap.ui.getCore().getUIArea(s);s.removeContent(this,true);}if(this._oDialog){this._oDialog.destroy();this._oDialog=null;}if(this._oOkButton){this._oOkButton.destroy();this._oOkButton=null;}this._oSelectedItem=null;this._aSelectedItems=null;this._aInitiallySelectedItems=null;this._table=null;this._searchField=null;this._dialog=null;};f.prototype.onAfterRendering=function(){if(this._bInitBusy&&this._bFirstRender){this._setBusy(true);this._bInitBusy=false;this._bFirstRender=false;}return this;};f.prototype.invalidate=function(){if(this._oDialog&&(!arguments[0]||arguments[0]&&arguments[0].getId()!==this.getId()+"-dialog")){this._oDialog.invalidate(arguments);}else{C.prototype.invalidate.apply(this,arguments);}return this;};f.prototype.open=function(s){if(!this.getParent()&&!this._bAppendedToUIArea){var o=sap.ui.getCore().getStaticAreaRef();o=sap.ui.getCore().getUIArea(o);o.addContent(this,true);this._bAppendedToUIArea=true;}this._bFirstRequest=true;this._sSearchFieldValue="";this._oSearchField.setValue(s);this._oDialog.open();if(this._bInitBusy){this._setBusy(true);}this._aInitiallySelectedItems=this._oTable.getSelectedItems();this._updateSelectionIndicator();return this;};f.prototype.setGrowingThreshold=function(v){this._oTable.setGrowingThreshold(v);this.setProperty("growingThreshold",v,true);return this;};f.prototype.setBusy=function(g){this._oSearchField.setEnabled(!g);this._oDialog.setBusy.apply(this._oDialog,arguments);return this;};f.prototype.getBusy=function(){return this._oDialog.getBusy.apply(this._oDialog,arguments);};f.prototype.setBusyIndicatorDelay=function(v){this._oTable.setBusyIndicatorDelay(v);this._oDialog.setBusyIndicatorDelay(v);this.setProperty("busyIndicatorDelay",v,true);return this;};f.prototype.setMultiSelect=function(m){this.setProperty("multiSelect",m,true);if(m){this._oTable.setMode(e.MultiSelect);this._oTable.setIncludeItemInSelection(true);this._oDialog.setRightButton(this._getCancelButton());this._oDialog.setLeftButton(this._getOkButton());}else{this._oTable.setMode(e.SingleSelectMaster);this._oDialog.setLeftButton(this._getCancelButton());}return this;};f.prototype.setTitle=function(t){this.setProperty("title",t,true);this._oDialog.setTitle(t);return this;};f.prototype.setNoDataText=function(n){this._oTable.setNoDataText(n);return this;};f.prototype.getNoDataText=function(){return this._oTable.getNoDataText();};f.prototype.getContentWidth=function(){return this._oDialog.getContentWidth();};f.prototype.setContentWidth=function(w){this._oDialog.setContentWidth(w);return this;};f.prototype.getContentHeight=function(){return this._oDialog.getContentHeight();};f.prototype.setContentHeight=function(h){this._oDialog.setContentHeight(h);return this;};f.prototype.addStyleClass=function(){this._oDialog.addStyleClass.apply(this._oDialog,arguments);return this;};f.prototype.removeStyleClass=function(){this._oDialog.removeStyleClass.apply(this._oDialog,arguments);return this;};f.prototype.toggleStyleClass=function(){this._oDialog.toggleStyleClass.apply(this._oDialog,arguments);return this;};f.prototype.hasStyleClass=function(){return this._oDialog.hasStyleClass.apply(this._oDialog,arguments);};f.prototype.getDomRef=function(){if(this._oDialog){return this._oDialog.getDomRef.apply(this._oDialog,arguments);}else{return null;}};f.prototype._setModel=f.prototype.setModel;f.prototype.setModel=function(m,s){var A=Array.prototype.slice.call(arguments);this._setBusy(false);this._bInitBusy=false;this._iTableUpdateRequested+=1;this._oTable.attachUpdateStarted(this._updateStarted,this);this._oTable.attachUpdateFinished(this._updateFinished,this);this._oTable.setModel(m,s);f.prototype._setModel.apply(this,A);this._updateSelectionIndicator();return this;};f.prototype._callMethodInManagedObject=function(F,A){var g=Array.prototype.slice.call(arguments);if(A==="items"){return this._oTable[F].apply(this._oTable,g.slice(1));}else if(A==="columns"){return this._oTable[F].apply(this._oTable,g.slice(1));}else{return M.prototype[F].apply(this,g.slice(1));}};f.prototype.bindAggregation=function(){var g=Array.prototype.slice.call(arguments);this._callMethodInManagedObject.apply(this,["bindAggregation"].concat(g));return this;};f.prototype.validateAggregation=function(A,o,m){return this._callMethodInManagedObject("validateAggregation",A,o,m);};f.prototype.setAggregation=function(A,o,s){this._callMethodInManagedObject("setAggregation",A,o,s);return this;};f.prototype.getAggregation=function(A,o){return this._callMethodInManagedObject("getAggregation",A,o);};f.prototype.indexOfAggregation=function(A,o){return this._callMethodInManagedObject("indexOfAggregation",A,o);};f.prototype.insertAggregation=function(A,o,i,s){this._callMethodInManagedObject("insertAggregation",A,o,i,s);return this;};f.prototype.addAggregation=function(A,o,s){this._callMethodInManagedObject("addAggregation",A,o,s);return this;};f.prototype.removeAggregation=function(A,o,s){this._callMethodInManagedObject("removeAggregation",A,o,s);return this;};f.prototype.removeAllAggregation=function(A,s){return this._callMethodInManagedObject("removeAllAggregation",A,s);};f.prototype.destroyAggregation=function(A,s){this._callMethodInManagedObject("destroyAggregation",A,s);return this;};f.prototype.getBinding=function(A){return this._callMethodInManagedObject("getBinding",A);};f.prototype.getBindingInfo=function(A){return this._callMethodInManagedObject("getBindingInfo",A);};f.prototype.getBindingPath=function(A){return this._callMethodInManagedObject("getBindingPath",A);};f.prototype.getBindingContext=function(m){return this._oTable&&this._oTable.getBindingContext(m);};f.prototype._setBindingContext=f.prototype.setBindingContext;f.prototype.setBindingContext=function(o,m){var g=Array.prototype.slice.call(arguments);this._oTable.setBindingContext(o,m);f.prototype._setBindingContext.apply(this,g);return this;};f.prototype._executeSearch=function(v,E){var t=this._oTable,o=(t?t.getBinding("items"):undefined),s=(this._sSearchFieldValue!==v);if(this._oDialog.isOpen()&&((s&&E==="liveChange")||E==="search")){this._sSearchFieldValue=v;if(o){this._iTableUpdateRequested+=1;if(E==="search"){this.fireSearch({value:v,itemsBinding:o});}else if(E==="liveChange"){this.fireLiveChange({value:v,itemsBinding:o});}}else{if(E==="search"){this.fireSearch({value:v});}else if(E==="liveChange"){this.fireLiveChange({value:v});}}}return this;};f.prototype._setBusy=function(g){if(this._iTableUpdateRequested){if(g){this._oSearchField.setEnabled(false);this._oTable.addStyleClass('sapMSelectDialogListHide');this._oBusyIndicator.$().css('display','inline-block');}else{this._oSearchField.setEnabled(true);this._oTable.removeStyleClass('sapMSelectDialogListHide');this._oBusyIndicator.$().css('display','none');}}};f.prototype._updateStarted=function(E){if(this.getModel()&&this.getModel()instanceof sap.ui.model.odata.ODataModel){if(this._oDialog.isOpen()&&this._iTableUpdateRequested){this._setBusy(true);}else{this._bInitBusy=true;}}};f.prototype._updateFinished=function(E){this._updateSelectionIndicator();if(this.getModel()&&this.getModel()instanceof sap.ui.model.odata.ODataModel){this._setBusy(false);this._bInitBusy=false;}if(a.system.desktop){if(this._oTable.getItems()[0]){this._oDialog.setInitialFocus(this._oTable.getItems()[0]);}else{this._oDialog.setInitialFocus(this._oSearchField);}if(this._bFirstRequest){var F=this._oTable.getItems()[0];if(!F){F=this._oSearchField;}if(F.getFocusDomRef()){F.getFocusDomRef().focus();}}}this._bFirstRequest=false;this._iTableUpdateRequested=0;};f.prototype._getOkButton=function(){var t=this,o=null;o=function(){t._oSelectedItem=t._oTable.getSelectedItem();t._aSelectedItems=t._oTable.getSelectedItems();t._oDialog.detachAfterClose(o);t._fireConfirmAndUpdateSelection();};if(!this._oOkButton){this._oOkButton=new B(this.getId()+"-ok",{text:this._oRb.getText("MSGBOX_OK"),press:function(){t._oDialog.attachAfterClose(o);t._oDialog.close();}});}return this._oOkButton;};f.prototype._getCancelButton=function(){var t=this;if(!this._oCancelButton){this._oCancelButton=new B(this.getId()+"-cancel",{text:this._oRb.getText("MSGBOX_CANCEL"),press:function(){t._onCancel();}});}return this._oCancelButton;};f.prototype._onCancel=function(E){var t=this,A=null;A=function(){t._oSelectedItem=null;t._aSelectedItems=[];t._sSearchFieldValue=null;t._oDialog.detachAfterClose(A);t.fireCancel();};t._resetSelection();this._oDialog.attachAfterClose(A);this._oDialog.close();};f.prototype._updateSelectionIndicator=function(){var s=this._oTable.getSelectedContextPaths(true).length,i=this._oTable.getInfoToolbar();i.setVisible(!!s);i.getContent()[0].setText(this._oRb.getText("TABLESELECTDIALOG_SELECTEDITEMS",[s]));};f.prototype._fireConfirmAndUpdateSelection=function(){var p={selectedItem:this._oSelectedItem,selectedItems:this._aSelectedItems};Object.defineProperty(p,"selectedContexts",{get:this._oTable.getSelectedContexts.bind(this._oTable,true)});this.fireConfirm(p);this._updateSelection();};f.prototype._updateSelection=function(){if(!this.getRememberSelections()&&!this.bIsDestroyed){this._oTable.removeSelections(true);delete this._oSelectedItem;delete this._aSelectedItems;}};f.prototype._resetSelection=function(){var i=0;if(!this.bIsDestroyed){this._executeSearch("","search");this._oTable.removeSelections();for(;i<this._aInitiallySelectedItems.length;i++){this._oTable.setSelectedItem(this._aInitiallySelectedItems[i]);}}};return f;});
