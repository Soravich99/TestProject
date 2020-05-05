/*
 * ! UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','../transport/TransportSelection','sap/ui/model/Context','sap/ui/model/json/JSONModel','sap/ui/model/Filter','sap/ui/Device','sap/ui/core/TextAlign','sap/ui/core/InvisibleText','sap/ui/core/Control','sap/ui/core/Icon','sap/ui/core/ValueState','sap/ui/layout/HorizontalLayout','sap/ui/layout/Grid','sap/m/SearchField','sap/m/RadioButton','sap/m/ScreenSize','sap/m/PopinDisplay','sap/m/ColumnListItem','sap/m/Column','sap/m/Text','sap/m/Bar','sap/m/Table','sap/m/Page','sap/m/PlacementType','sap/m/ButtonType','sap/m/Toolbar','sap/m/ToolbarSpacer','sap/m/Button','sap/m/CheckBox','sap/m/Dialog','sap/m/Input','sap/m/Label','sap/m/Title','sap/m/ResponsivePopover','sap/m/SelectList','sap/m/ObjectIdentifier','sap/m/OverflowToolbar','sap/m/OverflowToolbarPriority','sap/m/OverflowToolbarLayoutData','sap/m/VBox','sap/ui/fl/Utils','../changeHandler/BaseTreeModifier'],function(q,T,C,J,F,D,a,I,b,c,V,H,G,S,R,d,P,e,f,g,B,h,i,j,k,l,m,n,o,p,r,L,s,t,u,O,v,w,x,y,z,A){"use strict";var E=b.extend("sap.ui.fl.variants.VariantManagement",{metadata:{library:"sap.ui.fl",designTime:true,properties:{showExecuteOnSelection:{type:"boolean",group:"Misc",defaultValue:false},showShare:{type:"boolean",group:"Misc",defaultValue:false},showSetAsDefault:{type:"boolean",group:"Misc",defaultValue:true},showFavorites:{type:"boolean",group:"Misc",defaultValue:false},industrySolutionMode:{type:"boolean",group:"Misc",defaultValue:false},vendorLayer:{type:"boolean",group:"Misc",defaultValue:false},manualVariantKey:{type:"boolean",group:"Misc",defaultValue:false},showSave:{type:"boolean",group:"Misc",defaultValue:true},showSaveAs:{type:"boolean",group:"Misc",defaultValue:true},showManage:{type:"boolean",group:"Misc",defaultValue:true},showVariantListFooter:{type:"boolean",group:"Misc",defaultValue:true},inErrorState:{type:"boolean",group:"Misc",defaultValue:false}},associations:{"for":{type:"sap.ui.core.Control",multiple:true}},events:{save:{parameters:{name:{type:"string"},overwrite:{type:"boolean"},key:{type:"string"},execute:{type:"boolean"},def:{type:"boolean"},global:{type:"boolean"},lifecyclePackage:{type:"string"},lifecycleTransportId:{type:"string"}}},manage:{}}},renderer:function(K,M){K.write("<div ");K.writeControlData(M);K.addClass("sapUiFlVarMngmt");K.writeClasses();var N={"labelledby":{value:M.oVariantInvisibleText.getId(),append:true}};K.writeAccessibilityState(M,N);var Q=M._oRb.getText("VARIANT_MANAGEMENT_TRIGGER_TT");K.write(" title='"+Q+"'");K.write(" tabindex='0'>");K.renderControl(M.oVariantLayout);K.write("</div>");}});E.MODEL_NAME="$FlexVariants";E.INNER_MODEL_NAME="$sapUiFlVariants";E.MAX_NAME_LEN=100;E.COLUMN_FAV_IDX=0;E.COLUMN_NAME_IDX=1;E.prototype.init=function(){this.attachModelContextChange(this._setModel,this);this._oRb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.fl");this._createInnerModel();this.oVariantInvisibleText=new I({text:{parts:[{path:'currentVariant',model:E.MODEL_NAME},{path:"modified",model:E.MODEL_NAME}],formatter:function(N,Q){if(Q){N=this._oRb.getText("VARIANT_MANAGEMENT_SEL_VARIANT_MOD",[N]);}else{N=this._oRb.getText("VARIANT_MANAGEMENT_SEL_VARIANT",[N]);}}.bind(this)}});this.oVariantText=new s(this.getId()+"-text",{text:{path:'currentVariant',model:E.MODEL_NAME,formatter:function(N){var Q=this.getSelectedVariantText(N);return Q;}.bind(this)}});this.oVariantText.addStyleClass("sapUiFlVarMngmtClickable");this.oVariantText.addStyleClass("sapMTitleStyleH4");this.oVariantText.addStyleClass("sapUiFlVarMngmtTitle");if(D.system.phone){this.oVariantText.addStyleClass("sapUiFlVarMngmtTextMaxWidth");}var K=new L(this.getId()+"-modified",{text:"*",visible:{path:"modified",model:E.MODEL_NAME,formatter:function(N){return(N===null||N===undefined)?false:N;}}});K.setVisible(false);K.addStyleClass("sapUiFlVarMngmtModified");K.addStyleClass("sapUiFlVarMngmtClickable");K.addStyleClass("sapUiFlVarMngmtClickableHover");var M=new c(this.getId()+"-trigger",{src:"sap-icon://slim-arrow-down"});M.addStyleClass("sapUiFlVarMngmtTriggerBtn");this.oVariantLayout=new H({content:[this.oVariantText,K,M,this.oVariantInvisibleText]});this.oVariantLayout.addStyleClass("sapUiFlVarMngmtLayout");this.addDependent(this.oVariantLayout);};E.prototype.getTitle=function(){return this.oVariantText;};E.prototype._createInnerModel=function(){var M=new J({showManage:true,showSave:true,showSaveAs:true,showExecuteOnSelection:false,showShare:false,showSetAsDefault:true,showFavorites:false});this.setModel(M,E.INNER_MODEL_NAME);this._bindProperties();};E.prototype._bindProperties=function(){this.bindProperty("showManage",{path:"/showManage",model:E.INNER_MODEL_NAME});this.bindProperty("showSave",{path:"/showSave",model:E.INNER_MODEL_NAME});this.bindProperty("showSaveAs",{path:"/showSaveAs",model:E.INNER_MODEL_NAME});this.bindProperty("showShare",{path:"/showShare",model:E.INNER_MODEL_NAME});this.bindProperty("showExecuteOnSelection",{path:"/showExecuteOnSelection",model:E.INNER_MODEL_NAME});this.bindProperty("showShare",{path:"/showShare",model:E.INNER_MODEL_NAME});this.bindProperty("showSetAsDefault",{path:"/showSetAsDefault",model:E.INNER_MODEL_NAME});this.bindProperty("showFavorites",{path:"/showFavorites",model:E.INNER_MODEL_NAME});this.bindProperty("showVariantListFooter",{path:"/showVariantListFooter",model:E.INNER_MODEL_NAME});};E.prototype.setInitialDefaultVariantKey=function(K){this._sInitialDefaultVariantKey=K;};E.prototype.getInitialDefaultVariantKey=function(){return this._sInitialDefaultVariantKey;};E.prototype.setDefaultVariantKey=function(K){var M=this.getModel(E.MODEL_NAME);if(M&&this.oContext){M.setProperty(this.oContext+"/defaultVariant",K);}};E.prototype.getDefaultVariantKey=function(){var M=this.getModel(E.MODEL_NAME);if(M&&this.oContext){return M.getProperty(this.oContext+"/defaultVariant");}return null;};E.prototype.setSelectedVariantKey=function(K){var M,N=this.getModel(E.MODEL_NAME);if(N&&this.oContext){M=this._getLocalId();N.updateCurrentVariant(M,K);}return this;};E.prototype.getSelectedVariantKey=function(){var M=this.getModel(E.MODEL_NAME);if(M&&this.oContext){return M.getProperty(this.oContext+"/currentVariant");}return null;};E.prototype.getVariants=function(){return this._getItems();};E.prototype.setModified=function(K){var M=this.getModel(E.MODEL_NAME);if(M&&this.oContext){M.setProperty(this.oContext+"/modified",K);}};E.prototype.getModified=function(){var M=this.getModel(E.MODEL_NAME);if(M&&this.oContext){return M.getProperty(this.oContext+"/modified");}return false;};E.prototype.getSelectedVariantText=function(K){var M=this._getItemByKey(K);if(M){return M.title;}return"";};E.prototype.getStandardVariantKey=function(){var K=this._getItems();if(K&&K[0]){return K[0].key;}return null;};E.prototype._getItems=function(){var K=[];if(this.oContext&&this.oContext.getObject()){K=this.oContext.getObject().variants;}return K;};E.prototype._getItemByKey=function(K){var M=null,N=this._getItems();N.some(function(Q){if(Q.key===K){M=Q;}return(M!=null);});return M;};E.prototype._setBindingContext=function(){var M,K;if(!this.oContext){M=this.getModel(E.MODEL_NAME);if(M){K=this._getLocalId();if(K){M.ensureStandardEntryExists(K);this.oContext=new C(M,"/"+K);this.setBindingContext(this.oContext,E.MODEL_NAME);}}}};E.prototype._getLocalId=function(){return A.getSelector(this,z.getComponentForControl(this)).id;};E.prototype._setModel=function(){this._setBindingContext();};E.prototype.handleOpenCloseVariantPopover=function(){if(!this.bPopoverOpen){this._openVariantList();}else if(this.oVariantPopOver&&this.oVariantPopOver.isOpen()){this.oVariantPopOver.close();}else if(this.getInErrorState()&&this.oErrorVariantPopOver&&this.oErrorVariantPopOver.isOpen()){this.oErrorVariantPopOver.close();}};E.prototype.onclick=function(K){this.handleOpenCloseVariantPopover();};E.prototype.onkeydown=function(K){if(K.which===q.sap.KeyCodes.F4||K.which===q.sap.KeyCodes.SPACE||K.altKey===true&&K.which===q.sap.KeyCodes.ARROW_UP||K.altKey===true&&K.which===q.sap.KeyCodes.ARROW_DOWN){this._openVariantList();}};E.prototype._openInErrorState=function(){var K;if(!this.oErrorVariantPopOver){if(this.oErrorVariantPopOver&&this.oErrorVariantPopOver.isOpen()){this.oErrorVariantPopOver.close();return;}K=new y({fitContainer:true,alignItems:sap.m.FlexAlignItems.Center,items:[new c({size:"4rem",color:"lightgray",src:"sap-icon://message-error"}),new s({titleStyle:sap.ui.core.TitleLevel.H2,text:this._oRb.getText("VARIANT_MANAGEMENT_ERROR_TEXT1")}),new g({textAlign:sap.ui.core.TextAlign.Center,text:this._oRb.getText("VARIANT_MANAGEMENT_ERROR_TEXT2")})]});K.addStyleClass("sapUiFlVarMngmtErrorPopover");this.oErrorVariantPopOver=new t(this.getId()+"-errorpopover",{title:this._oRb.getText("VARIANT_MANAGEMENT_VARIANTS"),contentWidth:"400px",placement:j.Bottom,content:[new i(this.getId()+"-errorselpage",{showSubHeader:false,showNavButton:false,showHeader:false,content:[K]})],afterOpen:function(){this.bPopoverOpen=true;}.bind(this),afterClose:function(){setTimeout(function(){this.bPopoverOpen=false;}.bind(this),100);}.bind(this),contentHeight:"300px"});this.oErrorVariantPopOver.addStyleClass("sapUiFlVarMngmtPopover");}if(this.bPopoverOpen){return;}this.bPopoverOpen=true;this.oErrorVariantPopOver.openBy(this.oVariantLayout);};E.prototype._createVariantList=function(){if(!this.oContext||this.oVariantPopOver){return;}var K=new n(this.getId()+"-manage",{text:this._oRb.getText("VARIANT_MANAGEMENT_MANAGE"),enabled:true,press:function(){this._openManagementDialog();}.bind(this),layoutData:new x({priority:w.Low}),visible:{path:"/showManage",model:E.INNER_MODEL_NAME}});this.oVariantSaveBtn=new n(this.getId()+"-mainsave",{text:this._oRb.getText("VARIANT_MANAGEMENT_SAVE"),press:function(){this._handleVariantSave();}.bind(this),enabled:{path:"modified",model:E.MODEL_NAME,formatter:function(Q){return Q;}},layoutData:new x({priority:w.Low}),visible:{path:"/showSave",model:E.INNER_MODEL_NAME}});this.oVariantSaveAsBtn=new n(this.getId()+"-saveas",{text:this._oRb.getText("VARIANT_MANAGEMENT_SAVEAS"),press:function(){this._openSaveAsDialog();}.bind(this),layoutData:new x({priority:w.Low}),visible:{path:"/showSaveAs",model:E.INNER_MODEL_NAME}});this._oVariantList=new u(this.getId()+"-list",{selectedKey:{path:"currentVariant",model:E.MODEL_NAME},itemPress:function(Q){var U=null;if(Q&&Q.getParameters()){var W=Q.getParameters().item;if(W){U=W.getKey();}}if(U){this.setSelectedVariantKey(U);this.oVariantPopOver.close();}}.bind(this)});this._oVariantList.setNoDataText(this._oRb.getText("VARIANT_MANAGEMENT_NODATA"));var M=new sap.ui.core.Item({key:'{'+E.MODEL_NAME+">key}",text:'{'+E.MODEL_NAME+">title}"});this._oVariantList.bindAggregation("items",{path:"variants",model:E.MODEL_NAME,template:M});if(this.getModified()){var N=this._getItemByKey(this.getSelectedVariantKey());if(N){if(!N.readOnly||(this._isIndustrySolutionModeAndVendorLayer()&&(this.getStandardVariantKey()===N.key))){this.oVariantSaveBtn.setEnabled(true);}}}this._oSearchField=new S(this.getId()+"-search");this._oSearchField.attachLiveChange(function(Q){this._triggerSearch(Q,this._oVariantList);}.bind(this));this.oVariantSelectionPage=new i(this.getId()+"-selpage",{subHeader:new l({content:[this._oSearchField]}),content:[this._oVariantList],footer:new v({content:[new m(this.getId()+"-spacer"),this.oVariantSaveBtn,this.oVariantSaveAsBtn,K]}),showNavButton:false,showHeader:false,showFooter:{path:"/showVariantListFooter",model:E.INNER_MODEL_NAME}});this.oVariantPopOver=new t(this.getId()+"-popover",{title:this._oRb.getText("VARIANT_MANAGEMENT_VARIANTS"),contentWidth:"400px",placement:j.Bottom,content:[this.oVariantSelectionPage],afterOpen:function(){this.bPopoverOpen=true;}.bind(this),afterClose:function(){setTimeout(function(){this.bPopoverOpen=false;}.bind(this),100);}.bind(this),contentHeight:"300px"});this.oVariantPopOver.addStyleClass("sapUiFlVarMngmtPopover");if(this.oVariantLayout.$().closest(".sapUiSizeCompact").length>0){this.oVariantPopOver.addStyleClass("sapUiSizeCompact");}this.addDependent(this.oVariantPopOver);};E.prototype._openVariantList=function(){var K;if(this.getInErrorState()){this._openInErrorState();return;}if(this.bPopoverOpen){return;}if(this.oVariantPopOver&&this.oVariantPopOver.isOpen()){this.oVariantPopOver.close();return;}this.bPopoverOpen=true;this._createVariantList();this._oSearchField.setValue("");this._oVariantList.getBinding("items").filter(this._getFilters());this.oVariantSelectionPage.setShowSubHeader(this._oVariantList.getItems().length>9?true:false);this.oVariantSaveBtn.setEnabled(false);this.oVariantSaveAsBtn.setEnabled(true);if(this._isIndustrySolutionModeAndVendorLayer()&&this.getManualVariantKey()&&(this.getStandardVariantKey()===this.getCurrentVariantKey())){this.oVariantSaveBtn.setEnabled(false);this.oVariantSaveAsBtn.setEnabled(true);}if(this.getModified()){K=this._getItemByKey(this.getSelectedVariantKey());if(!K.readOnly||(this._isIndustrySolutionModeAndVendorLayer()&&(this.getStandardVariantKey()===K.key))){this.oVariantSaveBtn.setEnabled(true);}}this.oVariantPopOver.openBy(this.oVariantLayout);};E.prototype._triggerSearch=function(K,M){if(!K){return;}var N=K.getParameters();if(!N){return;}var Q=N.newValue?N.newValue:"";var U=new F({path:"title",operator:sap.ui.model.FilterOperator.Contains,value1:Q});M.getBinding("items").filter(this._getFilters(U));};E.prototype._createSaveAsDialog=function(){if(!this.oSaveAsDialog){this.oInputName=new r(this.getId()+"-name",{liveChange:function(N){this._checkVariantNameConstraints(this.oInputName,this.oSaveSave);}.bind(this)});var K=new L(this.getId()+"-namelabel",{text:this._oRb.getText("VARIANT_MANAGEMENT_NAME"),required:true});K.setLabelFor(this.oInputName);this.oDefault=new o(this.getId()+"-default",{text:this._oRb.getText("VARIANT_MANAGEMENT_SETASDEFAULT"),visible:{path:"/showSetAsDefault",model:E.INNER_MODEL_NAME},width:"100%"});this.oExecuteOnSelect=new o(this.getId()+"-execute",{text:this._oRb.getText("VARIANT_MANAGEMENT_EXECUTEONSELECT"),visible:{path:"/showExecuteOnSelection",model:E.INNER_MODEL_NAME},width:"100%"});this.oShare=new o(this.getId()+"-share",{text:this._oRb.getText("VARIANT_MANAGEMENT_SHARE"),visible:{path:"/showShare",model:E.INNER_MODEL_NAME},select:function(N){this._handleShareSelected(N);}.bind(this),width:"100%"});this.oInputManualKey=new r(this.getId()+"-key",{liveChange:function(N){this._checkVariantNameConstraints(this.oInputManualKey);}.bind(this)});this.oLabelKey=new L(this.getId()+"-keylabel",{text:this._oRb.getText("VARIANT_MANAGEMENT_KEY"),required:true});this.oLabelKey.setLabelFor(this.oInputManualKey);this.oSaveSave=new n(this.getId()+"-variantsave",{text:this._oRb.getText("VARIANT_MANAGEMENT_OK"),press:function(){this._bSaveCanceled=false;this._handleVariantSaveAs(this.oInputName.getValue());}.bind(this),enabled:true});var M=new G({defaultSpan:"L6 M6 S12"});if(this.getShowSetAsDefault()){M.addContent(this.oDefault);}if(this.getShowShare()){M.addContent(this.oShare);}if(this.getShowExecuteOnSelection()){M.addContent(this.oExecuteOnSelect);}this.oSaveAsDialog=new p(this.getId()+"-savedialog",{title:this._oRb.getText("VARIANT_MANAGEMENT_SAVEDIALOG"),beginButton:this.oSaveSave,endButton:new n(this.getId()+"-variantcancel",{text:this._oRb.getText("VARIANT_MANAGEMENT_CANCEL"),press:function(){this._bSaveCanceled=true;this.oSaveAsDialog.close();}.bind(this)}),content:[K,this.oInputName,this.oLabelKey,this.oInputManualKey,M],stretch:D.system.phone});this.oSaveAsDialog.addStyleClass("sapUiPopupWithPadding");this.oSaveAsDialog.addStyleClass("sapUiFlVarMngmtSaveDialog");if(this.oVariantLayout.$().closest(".sapUiSizeCompact").length>0){this.oSaveAsDialog.addStyleClass("sapUiSizeCompact");}this.addDependent(this.oSaveAsDialog);}};E.prototype._openSaveAsDialog=function(){this._createSaveAsDialog();this.oInputName.setValue(this.getSelectedVariantText(this.getSelectedVariantKey()));this.oSaveSave.setEnabled(false);this.oInputName.setEnabled(true);this.oInputName.setValueState(V.None);this.oInputName.setValueStateText(null);this.oDefault.setSelected(false);this.oShare.setSelected(false);this.oExecuteOnSelect.setSelected(false);if(this._isIndustrySolutionModeAndVendorLayer()&&this.getManualVariantKey()){this.oInputName.setValue(this._oRb.getText("VARIANT_MANAGEMENT_STANDARD"));this.oInputName.setEnabled(false);}if(this.oVariantPopOver){this.oVariantPopOver.close();}this.sTransport=null;this.sPackage=null;if(this.getManualVariantKey()){this.oInputManualKey.setVisible(true);this.oInputManualKey.setEnabled(true);this.oInputManualKey.setValueState(V.None);this.oInputManualKey.setValueStateText(null);this.oLabelKey.setVisible(true);}else{this.oInputManualKey.setVisible(false);this.oLabelKey.setVisible(false);}this.oSaveAsDialog.open();};E.prototype._handleVariantSaveAs=function(N){var K=null,M=N.trim(),Q=this.oInputManualKey.getValue().trim(),U="",W="";if(M==""){this.oInputName.setValueState(V.Error);this.oInputName.setValueStateText(this._oRb.getText("VARIANT_MANAGEMENT_ERROR_EMPTY"));return;}if(this.getManualVariantKey()){if(Q==""){this.oInputManualKey.setValueState(V.Error);this.oInputManualKey.setValueStateText(this._oRb.getText("VARIANT_MANAGEMENT_ERROR_EMPTY"));return;}K=Q;}if(this.oSaveAsDialog){this.oSaveAsDialog.close();}if(this.oDefault.getSelected()){this.setDefaultVariantKey(K);}if(this.oShare.getSelected()){W=this.sPackage;U=this.sTransport;}this.setModified(false);this.fireSave({key:K,name:M,overwrite:false,def:this.oDefault.getSelected(),execute:this.oExecuteOnSelect.getSelected(),global:this.oShare.getSelected(),lifecyclePackage:W,lifecycleTransportId:U});};E.prototype._handleVariantSave=function(){var K=this._getItemByKey(this.getSelectedVariantKey());var M=false;if(this.getDefaultVariantKey()===K.key){M=true;}if(K.global){var N=function(U,W){if(this.oVariantPopOver){this.oVariantPopOver.close();}this.sPackage=U;this.sTransport=W;this.fireSave({name:K.title,overwrite:true,key:K.key,def:M,global:this._isIndustrySolutionModeAndVendorLayer(),lifecyclePackage:this.sPackage,lifecycleTransportId:this.sTransport});}.bind(this);var Q=function(U){this.sTransport=null;this.sPackage=null;}.bind(this);this._assignTransport(K,N,Q);}else{if(this.oVariantPopOver){this.oVariantPopOver.close();}this.fireSave({name:K.title,overwrite:true,key:K.key,def:M});}this.setModified(false);};E.prototype._handleShareSelected=function(K){this.sTransport=null;this.sPackage=null;if(K.getParameters().selected){var M=function(Q,U){this.sTransport=U;this.sPackage=Q;}.bind(this);var N=function(Q){this.oShare.setSelected(false);this.sTransport=null;this.sPackage=null;}.bind(this);this._assignTransport(null,M,N);}};E.prototype.openManagementDialog=function(K){if(K&&this.oManagementDialog){this.oManagementDialog.destroy();this.oManagementDialog=undefined;}this._openManagementDialog();};E.prototype._triggerSearchInManageDialog=function(K,M){if(!K){return;}var N=K.getParameters();if(!N){return;}var Q=N.newValue?N.newValue:"";var U=[this._getFilterNotDeleted(),new F({filters:[new F({path:"title",operator:sap.ui.model.FilterOperator.Contains,value1:Q}),new F({path:"author",operator:sap.ui.model.FilterOperator.Contains,value1:Q})],and:false})];M.getBinding("items").filter(U);this._bDeleteOccured=true;};E.prototype._createManagementDialog=function(){if(!this.oManagementDialog){this.oManagementTable=new h(this.getId()+"-managementTable",{growing:true,columns:[new f({width:"3rem",visible:{path:"/showFavorites",model:E.INNER_MODEL_NAME}}),new f({header:new g({text:this._oRb.getText("VARIANT_MANAGEMENT_NAME")}),width:"14rem"}),new f({header:new g({text:this._oRb.getText("VARIANT_MANAGEMENT_VARIANTTYPE")}),width:"8rem",demandPopin:true,popinDisplay:P.Inline,minScreenWidth:d.Tablet,visible:{path:"/showShare",model:E.INNER_MODEL_NAME}}),new f({header:new g({text:this._oRb.getText("VARIANT_MANAGEMENT_DEFAULT")}),width:"4rem",demandPopin:true,popinDisplay:P.Inline,minScreenWidth:d.Tablet,visible:{path:"/showSetAsDefault",model:E.INNER_MODEL_NAME}}),new f({header:new g({text:this._oRb.getText("VARIANT_MANAGEMENT_EXECUTEONSELECT")}),width:"5rem",hAlign:a.Center,demandPopin:true,popinDisplay:P.Inline,minScreenWidth:"800px",visible:{path:"/showExecuteOnSelection",model:E.INNER_MODEL_NAME}}),new f({header:new g({text:this._oRb.getText("VARIANT_MANAGEMENT_AUTHOR")}),width:"8rem",demandPopin:true,popinDisplay:P.Inline,minScreenWidth:"900px"}),new f({width:"2rem",hAlign:a.Center}),new f({visible:false})]});this.oManagementSave=new n(this.getId()+"-managementsave",{text:this._oRb.getText("VARIANT_MANAGEMENT_OK"),enabled:true,press:function(){this._handleManageSavePressed();}.bind(this)});this.oManagementCancel=new n(this.getId()+"-managementcancel",{text:this._oRb.getText("VARIANT_MANAGEMENT_CANCEL"),press:function(){this.oManagementDialog.close();this._handleManageCancelPressed();}.bind(this)});this.oManagementDialog=new p(this.getId()+"-managementdialog",{customHeader:new B(this.getId()+"-managementHeader",{contentMiddle:[new g(this.getId()+"-managementHeaderText",{text:this._oRb.getText("VARIANT_MANAGEMENT_MANAGEDIALOG")})]}),beginButton:this.oManagementSave,endButton:this.oManagementCancel,content:[this.oManagementTable],stretch:D.system.phone});this._oSearchFieldOnMgmtDialog=new S();this._oSearchFieldOnMgmtDialog.attachLiveChange(function(M){this._triggerSearchInManageDialog(M,this.oManagementTable);}.bind(this));var K=new B(this.getId()+"-mgmHeaderSearch",{contentRight:[this._oSearchFieldOnMgmtDialog]});this.oManagementDialog.setSubHeader(K);if(this.oVariantLayout.$().closest(".sapUiSizeCompact").length>0){this.oManagementDialog.addStyleClass("sapUiSizeCompact");}this.addDependent(this.oManagementDialog);this.oManagementTable.bindAggregation("items",{path:"variants",model:E.MODEL_NAME,factory:this._templateFactoryManagementDialog.bind(this)});this.oManagementTable.getBinding("items").filter(this._getFilterNotDeleted());this._bDeleteOccured=false;}};E.prototype._setFavoriteIcon=function(K,M){if(K){K.setSrc(M?"sap-icon://favorite":"sap-icon://unfavorite");K.setTooltip(this._oRb.getText(M?"VARIANT_MANAGEMENT_FAV_DEL_TOOLTIP":"VARIANT_MANAGEMENT_FAV_ADD_TOOLTIP"));}};E.prototype._templateFactoryManagementDialog=function(K,M){var N=null,Q,U,W,X,Y=M.getObject();if(!Y){return undefined;}var Z=function(f1){this._checkVariantNameConstraints(f1.oSource,this.oManagementSave,f1.oSource.getBindingContext(E.MODEL_NAME).getObject().key);}.bind(this);var $=function(f1){this._handleManageTitleChanged(f1.oSource.getBindingContext(E.MODEL_NAME).getObject());}.bind(this);var _=function(f1){if(f1.getParameters().selected===true){this._handleManageDefaultVariantChange(f1.oSource,f1.oSource.getBindingContext(E.MODEL_NAME).getObject());}}.bind(this);var a1=function(f1){this._handleManageExecuteOnSelectionChanged(f1.oSource.getBindingContext(E.MODEL_NAME).getObject());}.bind(this);var b1=function(f1){this._handleManageDeletePressed(f1.oSource.getBindingContext(E.MODEL_NAME).getObject());}.bind(this);var c1=function(f1){this._handleManageFavoriteChanged(f1.oSource,f1.oSource.getBindingContext(E.MODEL_NAME).getObject());}.bind(this);if(Y.key!==this.getStandardVariantKey()){if(Y.readOnly){N=this._oRb.getText("VARIANT_MANAGEMENT_WRONG_LAYER");}else if(Y.textReadOnly){N=this._oRb.getText("VARIANT_MANAGEMENT_WRONG_LANGUAGE");}}if((Y.key===this.getStandardVariantKey())||Y.readOnly||Y.textReadOnly){X=new O({title:'{'+E.MODEL_NAME+">title}"});if(N){X.setTooltip(N);}}else{X=new r({liveChange:Z,change:$,value:'{'+E.MODEL_NAME+">title}"});}U=new n({icon:"sap-icon://sys-cancel",enabled:true,type:k.Transparent,press:b1,tooltip:this._oRb.getText("VARIANT_MANAGEMENT_DELETE"),visible:!Y.readOnly});this._assignColumnInfoForDeleteButton(U);Q=(Y.readOnly===false);W=this.oContext.getPath();var d1=new c({src:{path:"favorite",model:E.MODEL_NAME,formatter:function(f1){return f1?"sap-icon://favorite":"sap-icon://unfavorite";}},tooltip:{path:'favorite',model:E.MODEL_NAME,formatter:function(f1){return this._oRb.getText(f1?"VARIANT_MANAGEMENT_FAV_DEL_TOOLTIP":"VARIANT_MANAGEMENT_FAV_ADD_TOOLTIP");}.bind(this)},press:c1});d1.addStyleClass("sapUiFlVarMngmtFavColor");var e1=new e({cells:[d1,X,new g({text:this._oRb.getText(Y.global?"VARIANT_MANAGEMENT_SHARED":"VARIANT_MANAGEMENT_PRIVATE"),wrapping:false}),new R({groupName:this.getId(),select:_,selected:{path:W+"/defaultVariant",model:E.MODEL_NAME,formatter:function(f1){return(Y.key===f1)?true:false;}}}),new o({enabled:Q,select:a1,selected:'{'+E.MODEL_NAME+">executeOnSelect}"}),new g({text:'{'+E.MODEL_NAME+">author}",textAlign:"Begin"}),U,new g({text:'{'+E.MODEL_NAME+">key}"})]});return e1;};E.prototype._openManagementDialog=function(){this._createManagementDialog();this.setInitialDefaultVariantKey(this.getDefaultVariantKey());if(this.oVariantPopOver){this.oVariantPopOver.close();}this.oManagementSave.setEnabled(false);this._oSearchFieldOnMgmtDialog.setValue("");if(this._bDeleteOccured){this._bDeleteOccured=false;this.oManagementTable.bindAggregation("items",{path:"variants",model:E.MODEL_NAME,factory:this._templateFactoryManagementDialog.bind(this)});this.oManagementTable.getBinding("items").filter(this._getFilterNotDeleted());}this.oManagementDialog.open();};E.prototype._assignColumnInfoForDeleteButton=function(K){if(!this._oInvisibleDeleteColumnName){this._oInvisibleDeleteColumnName=new I({text:this._oRb.getText("VARIANT_MANAGEMENT_ACTION_COLUMN")});this.oManagementDialog.addContent(this._oInvisibleDeleteColumnName);}if(this._oInvisibleDeleteColumnName){K.addAriaLabelledBy(this._oInvisibleDeleteColumnName);}};E.prototype._handleManageDefaultVariantChange=function(K,M){var N=M.key;if(!this._anyInErrorState(this.oManagementTable)){this.oManagementSave.setEnabled(true);}if(!M.favorite&&K){M.favorite=!M.favorite;this._setFavoriteIcon(K.getParent().getCells()[E.COLUMN_FAV_IDX],M.favorite);}this.setDefaultVariantKey(N);};E.prototype._handleManageCancelPressed=function(){var K,M=this._getItems(),N;M.forEach(function(Q){Q.toBeDeleted=false;Q.title=Q.originalTitle;Q.favorite=Q.originalFavorite;Q.executeOnSelection=Q.originalExecuteOnSelection;});K=this.getInitialDefaultVariantKey();if(K!==this.getDefaultVariantKey()){this.setDefaultVariantKey(K);}N=this.getModel(E.MODEL_NAME);if(N){N.checkUpdate();}};E.prototype._handleManageFavoriteChanged=function(K,M){if(!this._anyInErrorState(this.oManagementTable)){this.oManagementSave.setEnabled(true);}if((this.getDefaultVariantKey()===M.key)&&M.favorite){return;}M.favorite=!M.favorite;this._setFavoriteIcon(K,M.favorite);if(M.global){var N=function(U,W){M.lifecyclePackage=U;M.lifecycleTransportId=W;};var Q=function(U){M.favorite=M.originalFavorite;this._setFavoriteIcon(K,M.favorite);}.bind(this);this._assignTransport(M,N,Q);}};E.prototype._handleManageDeletePressed=function(K){var M,N=K.key;if(!this._anyInErrorState(this.oManagementTable)){this.oManagementSave.setEnabled(true);}K.toBeDeleted=true;if((N===this.getDefaultVariantKey())){this.setDefaultVariantKey(this.getStandardVariantKey());}if(K.global){var Q=function(W,X){K.lifecyclePackage=W;K.lifecycleTransportId=X;};var U=function(W){K.toBeDeleted=false;};this._assignTransport(K,Q,U);}M=this.getModel(E.MODEL_NAME);if(M){M.checkUpdate();}};E.prototype._handleManageExecuteOnSelectionChanged=function(K){if(!this._anyInErrorState(this.oManagementTable)){this.oManagementSave.setEnabled(true);}if(K.global){var M=function(Q,U){K.lifecyclePackage=Q;K.lifecycleTransportId=U;};var N=function(Q){K.executeOnSelection=K.originalExecuteOnSelection;};this._assignTransport(K,M,N);}};E.prototype._handleManageTitleChanged=function(K){if(!this._anyInErrorState(this.oManagementTable)){this.oManagementSave.setEnabled(true);}if(!K.title.localeCompare(K.originalTitle)){if(K.global){var M=function(Q,U){K.lifecyclePackage=Q;K.lifecycleTransportId=U;};var N=function(Q){K.title=K.originalTitle;};this._assignTransport(K,M,N);}}};E.prototype._handleManageSavePressed=function(){var K=this._getItems();this.fireManage();this.oManagementDialog.close();K.some(function(M){if(M.toBeDeleted){this._bDeleteOccured=true;if(M.key===this.getSelectedVariantKey()){this.setModified(false);this.setSelectedVariantKey(this.getStandardVariantKey());return true;}}return false;}.bind(this));};E.prototype._anyInErrorState=function(M){var K,N,Q=false;if(M){K=M.getItems();K.some(function(U){N=U.getCells()[E.COLUMN_NAME_IDX];if(N&&N.getValueState&&(N.getValueState()===V.Error)){Q=true;}return Q;});}return Q;};E.prototype._getFilters=function(K){var M=[];if(K){M.push(K);}M.push(this._getFilterNotDeleted());if(this.getShowFavorites()){M.push(this._getFilterFavorites());}return M;};E.prototype._getFilterNotDeleted=function(){return new F({path:"toBeDeleted",operator:sap.ui.model.FilterOperator.NE,value1:true});};E.prototype._getFilterFavorites=function(){return new F({path:"favorite",operator:sap.ui.model.FilterOperator.EQ,value1:true});};E.prototype._checkVariantNameConstraints=function(K,M,N){if(!K){return;}var Q=K.getValue();Q=Q.trim();if(!this._checkIsDuplicate(Q,N)){if(Q===""){K.setValueState(V.Error);K.setValueStateText(this._oRb.getText("VARIANT_MANAGEMENT_ERROR_EMPTY"));}else if(Q.length>E.MAX_NAME_LEN){K.setValueState(V.Error);K.setValueStateText(this._oRb.getText("VARIANT_MANAGEMENT_MAX_LEN",[E.MAX_NAME_LEN]));}else{K.setValueState(V.None);K.setValueStateText(null);}}else{K.setValueState(V.Error);K.setValueStateText(this._oRb.getText("VARIANT_MANAGEMENT_ERROR_DUPLICATE"));}if(M){if(K.getValueState()===V.Error){M.setEnabled(false);}else{M.setEnabled(true);}}};E.prototype._checkIsDuplicate=function(K,M){var N=false,Q=this._getItems(),U=K.toLowerCase();Q.some(function(W){if(W.title.toLowerCase()===U){if(M&&(M===W.key)){return false;}N=true;}return N;});return N;};E.prototype._isIndustrySolutionModeAndVendorLayer=function(){if(this.getIndustrySolutionMode()&&this.getVendorLayer()){return true;}return false;};E.prototype._selectTransport=function(K,M,N,Q){var U=new T();U.selectTransport(K,M,N,Q);};E.prototype._assignTransport=function(K,M,N){var Q=null;var U={type:"variant",name:"",namespace:"","package":""};if(K){U["package"]=K.lifecyclePackage;U["name"]=K.key;U["namespace"]=K.namespace;Q=K.lifecycleTransportId;}var _=function(Y){M(Y.getParameters().selectedPackage,Y.getParameters().selectedTransport);};var W=function(Y){N(Y);};if(Q!=null&&Q.trim().length>0){M(U["package"],Q);}else{var X=false;if(this.oVariantLayout.$().closest(".sapUiSizeCompact").length>0){X=true;}this._selectTransport(U,_,W,X);}};E.prototype.exit=function(){if(this.oDefault&&!this.oDefault._bIsBeingDestroyed){this.oDefault.destroy();}this.oDefault=undefined;if(this.oShare&&!this.oShare._bIsBeingDestroyed){this.oShare.destroy();}this.oShare=undefined;if(this.oExecuteOnSelect&&!this.oExecuteOnSelect._bIsBeingDestroyed){this.oExecuteOnSelect.destroy();}this.oExecuteOnSelect=undefined;this._oRb=undefined;this.oContext=undefined;this._oVariantList=undefined;this.oVariantSelectionPage=undefined;this.oVariantLayout=undefined;this.oVariantText=undefined;this.oVariantInvisibleText=undefined;this._oSearchField=undefined;this._oSearchFieldOnMgmtDialog=undefined;};return E;},true);
