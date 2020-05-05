// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(['sap/ushell/ui/launchpad/AccessibilityCustomData','sap/ushell/ui5service/ShellUIService'],function(A,S){"use strict";sap.ui.controller("sap.ushell.components.flp.launchpad.appfinder.AppFinder",{onInit:function(){sap.ushell.Container.getRenderer("fiori2").createExtendedShellState("appFinderExtendedShellState",function(){sap.ushell.Container.getRenderer("fiori2").showHeaderItem('backBtn',true);sap.ushell.Container.getRenderer("fiori2").showHeaderItem('homeBtn',true);});var v=this.getView(),m=v.getModel(),s=v.showEasyAccessMenu;if(!m.getProperty("/groups")||m.getProperty("/groups").length===0){var d=sap.ushell.components.flp.launchpad.getDashboardManager();d.loadPersonalizedGroups();}this.getView().setModel(this._getSubHeaderModel(),"subHeaderModel");this.oConfig=v.parentComponent.getComponentData().config;this.catalogView=sap.ui.view("catalogView",{type:sap.ui.core.mvc.ViewType.JS,viewName:"sap.ushell.components.flp.launchpad.appfinder.Catalog",height:"100%",viewData:{parentComponent:v.parentComponent,subHeaderModel:this._getSubHeaderModel()}});this.catalogView.addStyleClass('sapUiGlobalBackgroundColor sapUiGlobalBackgroundColorForce');this._addViewCustomData(this.catalogView,"appFinderCatalogTitle");this.oRouter=this.getView().parentComponent.getRouter();this.oRouter.getRoute("catalog").attachPatternMatched(function(e){this._navigateTo.apply(this,["appFinder","catalog"]);}.bind(this));this.oRouter.getRoute("appFinder").attachPatternMatched(this._handleAppFinderNavigation.bind(this));if(!s){v.oPage.addContent(this.catalogView);setTimeout(function(){jQuery('#catalogSelect').focus();},0);}sap.ui.Device.resize.attachHandler(this._resizeHandler.bind(this));},_resizeHandler:function(){var s=this._showOpenCloseSplitAppButton();var c=this.oSubHeaderModel.getProperty('/openCloseSplitAppButtonVisible');if(s!=c){this.oSubHeaderModel.setProperty('/openCloseSplitAppButtonVisible',s);if(s){this.oSubHeaderModel.setProperty('/openCloseSplitAppButtonToggled',false);}}this._toggleViewWithToggleButtonClass(s);},_handleAppFinderNavigation:function(e){var v=this.getView();this._preloadAppHandler();this._getPathAndHandleGroupContext(e);v.createSubHeader();this._toggleViewWithToggleButtonClass(this._showOpenCloseSplitAppButton());if(v.showEasyAccessMenu){this.onShow(e);}else if(v._showSearch('catalog')){v.updateSubHeader('catalog',false);this._toggleViewWithSearchAndTagsClasses('catalog');}sap.ui.getCore().getEventBus().publish("showCatalog");sap.ui.getCore().getEventBus().publish("launchpad","contentRendered");},_showOpenCloseSplitAppButton:function(){return!sap.ui.Device.orientation.landscape||sap.ui.Device.system.phone;},_resetSubHeaderModel:function(){this.oSubHeaderModel.setProperty('/activeMenu',null);this.oSubHeaderModel.setProperty('/search',{searchMode:false,searchTerm:null});this.oSubHeaderModel.setProperty('/tag',{tagMode:false,selectedTags:[]});this.oSubHeaderModel.setProperty('/openCloseSplitAppButtonVisible',this._showOpenCloseSplitAppButton());this.oSubHeaderModel.setProperty('/openCloseSplitAppButtonToggled',false);},_getSubHeaderModel:function(){if(this.oSubHeaderModel){return this.oSubHeaderModel;}this.oSubHeaderModel=new sap.ui.model.json.JSONModel();this._resetSubHeaderModel();return this.oSubHeaderModel;},onTagsFilter:function(e){var t=e.getSource(),s=t.getModel('subHeaderModel'),a=e.getSource().getSelectedItems(),T=a.length>0,o={tagMode:T,selectedTags:[]};a.forEach(function(b,i){o.selectedTags.push(b.getText());});s.setProperty('/activeMenu',this.getCurrentMenuName());s.setProperty('/tag',o);sap.ui.getCore().byId("catalogView").getController().onTag(o);},searchHandler:function(e){var s=e.getSource().getValue(),a=false;if(s==null){return;}var o=this.oSubHeaderModel.getProperty('/search');var b=this.oSubHeaderModel.getProperty('/activeMenu');if(this.getCurrentMenuName()!=b){b=this.getCurrentMenuName();}if(!o.searchMode&&!e.getParameter('clearButtonPressed')){o.searchMode=true;}if(o.searchMode&&sap.ui.Device.system.phone){this.oSubHeaderModel.setProperty("/openCloseSplitAppButtonToggled",false);}if(s!=o.searchTerm){if(this.containsOnlyWhiteSpac(s)){s='*';}o.searchTerm=s;a=true;}this.oSubHeaderModel.setProperty("/search",o);this.oSubHeaderModel.setProperty("/activeMenu",b);this.oSubHeaderModel.refresh(true);if(a){sap.ui.getCore().byId("catalogView").getController().onSearch(o);}},_preloadAppHandler:function(){setTimeout(function(){if(sap.ushell.Container){sap.ushell.Container.getRenderer("fiori2").applyExtendedShellState("appFinderExtendedShellState");}this._updateShellHeader(this.oView.oPage.getTitle());}.bind(this),0);},getCurrentMenuName:function(){return this.currentMenu;},_navigateTo:function(n,m){var g=this.oView.getModel().getProperty("/groupContext");var G=g?g.path:null;if(G){this.oRouter.navTo(n,{'menu':m,filters:JSON.stringify({targetGroup:encodeURIComponent(G)})},true);}else{this.oRouter.navTo(n,{'menu':m},true);}},getSystemsModels:function(){var t=this;if(this.getSystemsPromise){return this.getSystemsPromise;}var g=new jQuery.Deferred();this.getSystemsPromise=g.promise();var m=["userMenu","sapMenu"].map(function(a){var s=new sap.ui.model.json.JSONModel();s.setProperty("/systemSelected",null);s.setProperty("/systemsList",[]);return t.getSystems(a).then(function(r){s.setProperty("/systemsList",r);return s;});});jQuery.when.apply(jQuery,m).then(function(u,s){g.resolve(u,s);});return this.getSystemsPromise;},onSegmentButtonClick:function(e){switch(e.getParameters().id){case"catalog":this._navigateTo("appFinder","catalog");break;case"userMenu":this._navigateTo("appFinder","userMenu");break;case"sapMenu":this._navigateTo("appFinder","sapMenu");break;}},onShow:function(e){var p=e.getParameter('arguments');var m=p.menu;if(m===this.getCurrentMenuName()){return;}var v=this.getView();v._updateSearchWithPlaceHolder(m);this._updateCurrentMenuName(m);this.getSystemsModels().then(function(u,s){var a=s.getProperty("/systemsList");var b=u.getProperty("/systemsList");v.oPage.removeAllContent();var c=(this.currentMenu==='sapMenu'?a:b);if(c&&c.length){v.updateSubHeader(this.currentMenu,true);}else if(v._showSearch(this.currentMenu)){v.updateSubHeader(this.currentMenu,false);}if(this.currentMenu==='catalog'){v.oPage.addContent(this.catalogView);}else if(this.currentMenu==='userMenu'){if(!this.userMenuView){this.userMenuView=new sap.ui.view("userMenuView",{type:sap.ui.core.mvc.ViewType.JS,viewName:"sap.ushell.components.flp.launchpad.appfinder.EasyAccess",height:"100%",viewData:{menuName:"USER_MENU",easyAccessSystemsModel:u,parentComponent:v.parentComponent,subHeaderModel:this._getSubHeaderModel(),enableSearch:this.getView()._showSearch("userMenu")}});this._addViewCustomData(this.userMenuView,"appFinderUserMenuTitle");}v.oPage.addContent(this.userMenuView);}else if(this.currentMenu==='sapMenu'){if(!this.sapMenuView){this.sapMenuView=new sap.ui.view("sapMenuView",{type:sap.ui.core.mvc.ViewType.JS,viewName:"sap.ushell.components.flp.launchpad.appfinder.EasyAccess",height:"100%",viewData:{menuName:"SAP_MENU",easyAccessSystemsModel:s,parentComponent:v.parentComponent,subHeaderModel:this._getSubHeaderModel(),enableSearch:this.getView()._showSearch("sapMenu")}});this._addViewCustomData(this.sapMenuView,"appFinderSapMenuTitle");}v.oPage.addContent(this.sapMenuView);}this._setFocusToSegmentedButton(c);this.oSubHeaderModel.setProperty("/activeMenu",this.currentMenu);if(this.oSubHeaderModel.getProperty("/openCloseSplitAppButtonVisible")){this.oSubHeaderModel.setProperty("/openCloseSplitAppButtonToggled",false);}this.oSubHeaderModel.refresh(true);}.bind(this));},_updateCurrentMenuName:function(m){var v=this.getView();if(!v.showEasyAccessMenu||(m==="sapMenu"&&!v.enableEasyAccessSAPMenu)||(m==="userMenu"&&!v.enableEasyAccessUserMenu)){this.currentMenu="catalog";}else{this.currentMenu=m;}this._toggleViewWithSearchAndTagsClasses(m);},_toggleViewWithSearchAndTagsClasses:function(m){var v=this.getView();if(v._showSearch(m)){v.oPage.addStyleClass('sapUshellAppFinderSearch');}else{v.oPage.removeStyleClass('sapUshellAppFinderSearch');}if(v._showSearchTag(m)){v.oPage.addStyleClass('sapUshellAppFinderTags');}else{v.oPage.removeStyleClass('sapUshellAppFinderTags');}},_toggleViewWithToggleButtonClass:function(b){var v=this.getView();if(b){v.oPage.addStyleClass('sapUshellAppFinderToggleButton');}else{v.oPage.removeStyleClass('sapUshellAppFinderToggleButton');}},_setFocusToSegmentedButton:function(s){var v=this.getView();if(s&&s.length){var b=v.segmentedButton.getSelectedButton();setTimeout(function(){jQuery("#"+b).focus();},0);}else{setTimeout(function(){jQuery('#catalogSelect').focus();},0);}},_getPathAndHandleGroupContext:function(e){var p=e.getParameter('arguments');var d=p.filters;var D=d?JSON.parse(d):d;var P=(D&&decodeURIComponent(D.targetGroup))||"";P=P==='undefined'?undefined:P;this._updateModelWithGroupContext(P);},_updateModelWithGroupContext:function(p){var l=sap.ushell.Container.getService("LaunchPage"),m=this.oView.getModel(),g,G={path:p,id:"",title:""};if(p&&p!==""){var t=function(){var M=m.getProperty("/groups");if(M.length){g=m.getProperty(p);G.id=l.getGroupId(g.object);G.title=g.title||l.getGroupTitle(g.object);return;}setTimeout(t,100);};t();}m.setProperty("/groupContext",G);},getSystems:function(m){var d=new jQuery.Deferred();var c=sap.ushell.Container.getService("ClientSideTargetResolution");if(!c){d.reject("cannot get ClientSideTargetResolution service");}else{c.getEasyAccessSystems(m).done(function(s){var a=[];var b=Object.keys(s);for(var i=0;i<b.length;i++){var C=b[i];a[i]={"systemName":s[C].text,"systemId":C};}d.resolve(a);}).fail(function(e){d.reject("An error occurred while retrieving the systems: "+e);});}return d.promise();},_addViewCustomData:function(v,t){var r=sap.ushell.resources.i18n;v.addCustomData(new A({key:"role",value:"region",writeToDom:true}));v.addCustomData(new A({key:"aria-label",value:r.getText(t),writeToDom:true}));},_initializeShellUIService:function(){this.oShellUIService=new S({scopeObject:this.getOwnerComponent(),scopeType:"component"});},_updateShellHeader:function(t){if(!this.oShellUIService){this._initializeShellUIService();}this.oShellUIService.setTitle(t);this.oShellUIService.setHierarchy([{icon:'sap-icon://home',title:'Home',intent:'#'}]);},containsOnlyWhiteSpac:function(t){if(!t||t==="")return false;var T=t;return(!T.replace(/\s/g,'').length)}});},false);
