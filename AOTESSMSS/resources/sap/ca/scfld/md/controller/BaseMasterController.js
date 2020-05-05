/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.require("sap.ui.core.mvc.Controller");jQuery.sap.require("sap.ca.scfld.md.app.CommonHeaderFooterHelper");sap.ui.core.mvc.Controller.extend("sap.ca.scfld.md.controller.BaseMasterController",{constructor:function(){var m=jQuery.proxy(function(){var i=true;this.oRouter=sap.ui.core.UIComponent.getRouterFor(this);this.oApplicationImplementation=sap.ca.scfld.md.app.Application.getImpl();this.oApplicationFacade=this.oApplicationImplementation.oConfiguration.oApplicationFacade;this.oConnectionManager=this.oApplicationImplementation.getConnectionManager();this.iRequestCountStart=this.oConnectionManager.iRequestCount;this.oApplicationImplementation.setModels(this);this.oRouter.attachRoutePatternMatched(function(e){var n=e.getParameter("name");var N;var I=i;i=false;this._bIsDetailRoute=false;this._bIsMasterRoute=false;if(n==="detail"){this._bIsDetailRoute=true;var r=this.resolveHash(e);N=r===undefined?"/"+e.getParameter("arguments").contextPath:r;if(!I&&this._hashParam!==N){this._hashParam=N;this._selectDetail();}}if(n==="master"){this._bIsMasterRoute=true;}this._hashParam=N;},this);},this);var a=jQuery.proxy(this.onInit,this);this.onInit=jQuery.proxy(function(){m();a();if(!this.bIsMasterListBindingExists){var l=this.getList();if(l){var b=l.getBinding("items");this.oApplicationImplementation.setMasterListBinding(this,b);}}if(this.iRequestCountStart==this.oConnectionManager.iRequestCount){this.oApplicationImplementation.oMHFHelper.defineMasterHeaderFooter(this);}},this);},onInit:function(){},getPage:function(){return sap.ca.scfld.md.app.CommonHeaderFooterHelper.getPageFromController(this);},resolveHash:function(e){return;},_onMasterListLoaded:function(e){this.onDataLoaded();this.oApplicationImplementation.onMasterRefreshed(this);e.oSource.detachChange(this._onMasterListLoaded,this);},_onMasterListChanged:function(e){this.oApplicationImplementation.onMasterChanged(this);},getHeaderFooterOptions:function(){return null;},setBtnEnabled:function(i,e){if(this._oControlStore.oButtonListHelper){this._oControlStore.oButtonListHelper.setBtnEnabled(i,e);}},setBtnText:function(i,t){if(this._oControlStore.oButtonListHelper){this._oControlStore.oButtonListHelper.setBtnText(i,t);}},refreshHeaderFooterForEditToggle:function(){this.oApplicationImplementation.oMHFHelper.defineMasterHeaderFooterInner(this);},_handleSelect:function(e){this.setListItem(e.getParameter("listItem"));if(!sap.ui.Device.system.phone){this.oApplicationImplementation.oSplitContainer.hideMaster();}},_handleItemPress:function(e){this.setListItem(e.getSource());},getList:function(){return this.byId("list");},setListItem:function(i){var l=this.getList();l.removeSelections();i.setSelected(true);l.setSelectedItem(i,true);this.oRouter.navTo("detail",{contextPath:i.getBindingContext(this.sModelName).getPath().substr(1)},!sap.ui.Device.system.phone);},onDataLoaded:function(){this._selectDetail();},_selectDetail:function(){var l=this.getList();var a=l.getItems();if(!(this._bIsDetailRoute||this._bIsMasterRoute)){return;}if(a.length===0&&this.oRouter._oRoutes.noData!==undefined){this.navToEmptyView();return;}if(!sap.ui.Device.system.phone&&this._bIsMasterRoute&&!l.getSelectedItem()){if(l.getBindingInfo("items").binding.isGrouped()){if(a.length>1){this.setListItem(a[1]);}else{jQuery.sap.log.error("Selection of the first list item failed as there is only 1 item in a grouped list");}}else{this.setListItem(a[0]);}}if(this._bIsDetailRoute){for(var i=0;i<a.length;i++){if((a[i]instanceof sap.m.GroupHeaderListItem)){continue;}if(a[i].getBindingContext(this.sModelName).getPath()!=this._hashParam){continue;}if(!sap.ui.Device.system.phone){l.removeSelections();a[i].setSelected(true);}return;}if(this.isBackendSearch()){this.applyFilterFromContext(this._hashParam);}else{this.navToEmptyView();}}},navToEmptyView:function(){this.showEmptyView();},showEmptyView:function(v,l,i){var L=this.getList();L.removeSelections();var V=this.oRouter.getView(this.getNoDataViewName(),sap.ui.core.mvc.ViewType.XML);var s=this.getSplitContainer();s.addDetailPage(V);if(v===undefined){v=this.oApplicationImplementation.oConfiguration.getDetailTitleKey();}if(i===undefined){if(l===undefined){l=this.oApplicationImplementation.oConfiguration.getDefaultEmptyMessageKey();}}s.to(V.getId(),"show",{viewTitle:v,languageKey:l,infoText:i});return this;},getSplitContainer:function(){return this.getView().getParent().getParent();},getNoDataViewName:function(){return"sap.ca.scfld.md.view.empty";},applySearchPattern:function(f){f=f.toLowerCase();var l=this.getList().getItems();var v;var c=0;var g=null;var C=0;for(var i=0;i<l.length;i++){if(l[i]instanceof sap.m.GroupHeaderListItem){if(g){if(C==0){g.setVisible(false);}else{g.setCount(C);}}g=l[i];C=0;}else{v=this.applySearchPatternToListItem(l[i],f);l[i].setVisible(v);if(v){c++;C++;}}}return c;},applyBackendSearchPattern:function(f,b){},applyFilterFromContext:function(c){this.navToEmptyView();},applySearchPatternToListItem:function(i,f){if(f==""){return true;}var I=i.getBindingContext(this.sModelName).getProperty();for(var k in I){var v=I[k];if(typeof v=="string"){if(v.toLowerCase().indexOf(f)!=-1){return true;}}}if((i.getIntro()&&i.getIntro().toLowerCase().indexOf(f)!=-1)||(i.getTitle()&&i.getTitle().toLowerCase().indexOf(f)!=-1)||(i.getNumber()&&i.getNumber().toLowerCase().indexOf(f)!=-1)||(i.getNumberUnit()&&i.getNumberUnit().toLowerCase().indexOf(f)!=-1)||(i.getFirstStatus()&&i.getFirstStatus().getText().toLowerCase().indexOf(f)!=-1)||(i.getSecondStatus()&&i.getSecondStatus().getText().toLowerCase().indexOf(f)!=-1)){return true;}var a=i.getAttributes();for(var j=0;j<a.length;j++){if(a[j].getText().toLowerCase().indexOf(f)!=-1){return true;}}return false;},_applyClientSideSearch:function(){var f=this._oControlStore.oMasterSearchField.getValue();var c=this.applySearchPattern(f);this.oApplicationImplementation.oMHFHelper.setMasterTitle(this,c);},isLiveSearch:function(){return!this.isBackendSearch();},isBackendSearch:function(){return false;},registerMasterListBind:function(l){if(l){var b=l.getBinding("items");this.oApplicationImplementation.setMasterListBinding(this,b);}if(this.iRequestCountStart==this.oConnectionManager.iRequestCount){this.oApplicationImplementation.oMHFHelper.defineMasterHeaderFooter(this);}}});
