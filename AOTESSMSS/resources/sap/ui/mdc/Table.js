/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(["./library",'sap/ui/mdc/XMLComposite','sap/ui/mdc/internal/table/gridtable/GridTable.controller','sap/ui/mdc/internal/table/responsivetable/ResponsiveTable.controller','sap/ui/mdc/internal/field/Field.controller',"sap/m/ListMode",'sap/ui/mdc/Field','sap/ui/model/odata/v4/AnnotationHelper'],function(L,X,G,R,F,a){"use strict";var b="sap.ui.table.Table",c='sap.m.Table';var T=X.extend("sap.ui.mdc.Table",{metadata:{designTime:true,specialSettings:{metadataContexts:{defaultValue:"{ model: 'entitySet', path:'',  name: 'entitySet'},{model: 'sap.fe.deviceModel', path: '/', name: 'sap.fe.deviceModel'}"}},properties:{tableBindingPath:{type:"string",invalidate:"template"},type:{type:"string",defaultValue:"ResponsiveTable",invalidate:"template"},interactionType:{type:"string",defaultValue:"Inactive",invalidate:"template"},settingsDialogType:{type:"string",defaultValue:"ViewSettings"},enabled:{type:"boolean",defaultValue:true,invalidate:false},growingThreshold:{type:"string",defaultValue:"50",invalidate:"template"},growingScrollToLoad:{type:"boolean",defaultValue:true,invalidate:false},listBindingName:{type:"string",invalidate:false},demandPopin:{type:"boolean",group:"Misc",defaultValue:false}},events:{"itemPress":{},"callAction":{},"showError":{}},publicMethods:[]},fragment:"sap.ui.mdc.internal.table.Table"});var I=function(){if(!this.bInitialized){this.oTableController.setSelectionMode();this.oTableController.enableDisableActions();this.oTableController.bindTableCount();this.bInitialized=true;this.detachModelContextChange(I);}};T.prototype.init=function(){X.prototype.init.call(this);var i=this.getInnerTable(),C=i.getMetadata().getName();if([b,c].join(" ").indexOf(C)>-1){if(C===b){this.oTableController=new G(this);}else{this.oTableController=new R(this);}this.oFieldController=new F(null,this);this.attachModelContextChange(I);}};T.prototype.getInnerTable=function(){return this.get_content();};T.prototype.handleDataRequested=function(e){this.oTableController.handleDataRequested(e);};T.prototype.handleDataReceived=function(e){this.oTableController.handleDataReceived(e);};T.prototype.handleSelectionChange=function(e){this.oTableController.enableDisableActions();};T.prototype.handleItemPress=function(e){this.fireItemPress({listItem:e.getParameter("listItem")});};T.prototype.handleCallAction=function(e){this.oTableController.handleCallAction(e);};T.prototype.getSelectedContexts=function(){var i=this.getInnerTable();var s=[];if(i.getMetadata().getName()===b){var S=i.getSelectedIndices();for(var d in S){s.push(i.getContextByIndex(d));}}else{s=i.getSelectedContexts();}return s;};T.prototype.getEntitySet=function(){var l=this.getListBinding().getPath();return l.substr(1);};T.prototype.getListBinding=function(){return this.oTableController.getListBinding();};T.prototype.getListBindingInfo=function(){return this.oTableController.getListBindingInfo();};T.prototype.setShowOverlay=function(){this.getInnerTable().setShowOverlay(true);};T.prototype.onStandardActionClick=function(e){this.oTableController.onStandardActionClick(e);};T.prototype.onContactDetails=function(e){this.oFieldController.onContactDetails(e);};T.prototype.onDraftLinkPressed=function(e){this.oFieldController.onDraftLinkPressed(e);};T.prototype.onDataFieldWithIntentBasedNavigationPressed=function(e){this.oFieldController.onDataFieldWithIntentBasedNavigationPressed(e);};T.prototype._updateColumnsPopinFeature=function(){if(!this.getDemandPopin()){return;}var C=this.getInnerTable().getColumns();if(!C){return;}C=C.filter(function(d){return d.getVisible();});C.sort(function(d,e){return d.getOrder()-e.getOrder();});var o,l=C.length;for(var i=0;i<l;i++){o=C[i];if(i<2){o.setDemandPopin(false);o.setMinScreenWidth("1px");}else{o.setDemandPopin(true);if(o.getPopinDisplay()!="WithoutHeader"){o.setPopinDisplay(sap.m.PopinDisplay.Inline);}o.setMinScreenWidth((i+1)*10+"rem");}}};T.prototype._deactivateColumnsPopinFeature=function(){var C=this._oTable.getColumns();if(!C){return;}var o,l=C.length;for(var i=0;i<l;i++){o=C[i];o.setDemandPopin(false);o.setMinScreenWidth("1px");}};T.prototype.setDemandPopin=function(d){var o=this.getDemandPopin();if(o===d){return;}this.setProperty("demandPopin",d,true);if(d){this._updateColumnsPopinFeature();}else{this._deactivateColumnsPopinFeature();}};T._helper={createAggregationBinding:function(i,e,t,l){if(t){return'{'+t+'}';}var E='',m=i.getInterface(0),M=m.getModel(),s=M.getObject(m.getPath()+"@sapui.name"),n=l?"id: '"+l+"', ":'';if(m.getModel().getObject(m.getPath()+"@com.sap.vocabularies.Common.v1.DraftRoot")){E="$expand : 'DraftAdministrativeData'";}return"{ path : '/"+s+"', parameters : { "+n+" $count : true "+(E?',':'')+E+"}, events : {dataRequested : '.handleDataRequested', dataReceived : '.handleDataReceived'} }";},getSelectionMode:function(C,e,w){C=C.getInterface(0);var l=w['@com.sap.vocabularies.UI.v1.LineItem'];for(var i=0;i<l.length;i++){if(l[i].$Type==="com.sap.vocabularies.UI.v1.DataFieldForAction"&&!l[i].Inline){return sap.m.ListMode.MultiSelect;}}return a.None;},formatDraftLockText:function(d,H,e){if(!d){return sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc").getText("draft.DRAFT_OBJECT");}else if(H){if(e){return L.getText("draft.LOCKED_OBJECT");}else{return L.getText("draft.UNSAVED_CHANGES");}}else{return"";}}};T._helper.createAggregationBinding.requiresIContext=true;T._helper.getSelectionMode.requiresIContext=true;return T;},true);