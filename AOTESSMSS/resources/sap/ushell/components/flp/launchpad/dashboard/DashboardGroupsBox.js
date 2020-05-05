// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/ui/launchpad/AccessibilityCustomData","sap/ui/base/Object","sap/ushell/ui/launchpad/DashboardGroupsContainer"],function(A,b,D){"use strict";var a=b.extend("sap.ushell.components.flp.launchpad.dashboard.DashboardGroupsBox",{metadata:{publicMethods:["createGroupsBox"]},constructor:function(i,s){if(sap.ushell.components.flp.launchpad.dashboard.getDashboardGroupsBox&&sap.ushell.components.flp.launchpad.dashboard.getDashboardGroupsBox()){return sap.ushell.components.flp.launchpad.dashboard.getDashboardGroupsBox();}sap.ushell.components.flp.launchpad.dashboard.getDashboardGroupsBox=jQuery.sap.getter(this.getInterface());this.oController=undefined;this.oGroupsContainer=undefined;this.bTileContainersContentAdded=false;this.isLinkPersonalizationSupported=sap.ushell.Container.getService("LaunchPage").isLinkPersonalizationSupported();sap.ui.getCore().getEventBus().subscribe("launchpad","actionModeActive",this._addTileContainersContent,this);},destroy:function(){sap.ui.getCore().getEventBus().unsubscribe("launchpad","actionModeActive",this._addTileContainersContent,this);sap.ushell.components.flp.launchpad.dashboard.getDashboardGroupsBox=undefined;},createGroupsBox:function(c,m){this.oController=c;var t=this,f,g,T=this._getTileContainerTemplate(c,m),E=function(){return t.oModel.getProperty('/enableLockedGroupsCompactLayout')&&!t.oModel.getProperty('/tileActionModeActive');},d=function(G){var e,p;if(G&&(e=G.getDomRef())){p=e.querySelector('.sapUshellPlusTile');if(p){return p;}}return null;},r=function(l){var p=d(l.currentGroup),e=d(l.endGroup),i=(l.tiles[l.tiles.length-2]===l.item)||(l.endGroup.getTiles().length===0);if(i){t._hidePlusTile(e);}else{t._showPlusTile(e);}if(l.currentGroup!==l.endGroup){t._showPlusTile(p);}};f=function(){sap.ushell.Layout.getLayoutEngine().setExcludedControl(sap.ushell.ui.launchpad.PlusTile);sap.ushell.Layout.getLayoutEngine().setReorderTilesCallback.call(sap.ushell.Layout.layoutEngine,r);};g=function(){if(!sap.ushell.Layout.isInited){sap.ushell.Layout.init({getGroups:this.getGroups.bind(this),getAllGroups:t.getAllGroupsFromModel.bind(t),isTabBarActive:t.isTabBarActive.bind(t),isLockedGroupsCompactLayoutEnabled:E,animationsEnabled:(t.oModel.getProperty('/animationMode')==='full')}).done(f);sap.ui.Device.media.attachHandler(function(){if(!this.bIsDestroyed){sap.ushell.Layout.reRenderGroupsLayout(null);}},this,sap.ui.Device.media.RANGESETS.SAP_STANDARD);var o=this.getDomRef();c.getView().sDashboardGroupsWrapperId=!jQuery.isEmptyObject(o)&&o.parentNode?o.parentNode.id:'';}sap.ushell.Layout.reRenderGroupsLayout(null);if(this.getGroups().length){if(c.bModelInitialized){c._initializeUIActions();}c._addBottomSpace();if(this.getModel().getProperty("/tilesOpacity")){sap.ushell.utils.handleTilesOpacity(this.getModel());}}sap.ui.getCore().getEventBus().publish("launchpad","contentRendered");sap.ui.getCore().getEventBus().publish("launchpad","contentRefresh");var F=new sap.ui.model.Filter("isGroupSelected",sap.ui.model.FilterOperator.EQ,true);var G=t.oModel.getProperty('/homePageGroupDisplay'),h=t.oModel.getProperty("/tileActionModeActive");if(G&&G==="tabs"&&!h){this.getBinding("groups").filter([F]);}else if(!h){F=new sap.ui.model.Filter("isGroupVisible",sap.ui.model.FilterOperator.EQ,true);this.getBinding("groups").filter([F]);}try{sap.ushell.utils.handleTilesVisibility();}catch(e){}};this.isTabBarActive=function(){return this.oModel.getProperty("/homePageGroupDisplay")==="tabs";};this.oGroupsContainer=new D("dashboardGroups",{accessibilityLabel:sap.ushell.resources.i18n.getText("DashboardGroups_label"),groups:{path:"/groups",template:T},displayMode:"{/homePageGroupDisplay}",afterRendering:g});this.oGroupsContainer.addEventDelegate({onsapskipback:function(e){e.preventDefault();sap.ushell.renderers.fiori2.AccessKeysHandler.setIsFocusHandledByAnotherHandler(true);var j=jQuery(".sapUshellAnchorItem:visible:first");if(!j.length){sap.ushell.renderers.fiori2.AccessKeysHandler.sendFocusBackToShell(e);}else{sap.ushell.components.flp.ComponentKeysHandler.goToSelectedAnchorNavigationItem();}},onsapskipforward:function(e){e.preventDefault();var h=jQuery("#sapUshellDashboardFooterDoneBtn:visible");if(h.length){h.focus();}else{if(jQuery("#sapUshellFloatingContainerWrapper:visible").length==1&&(e.originalEvent.srcElement.id)!=""){sap.ui.getCore().getEventBus().publish("launchpad","shellFloatingContainerIsAccessible");}else{sap.ushell.renderers.fiori2.AccessKeysHandler.setIsFocusHandledByAnotherHandler(true);sap.ushell.renderers.fiori2.AccessKeysHandler.sendFocusBackToShell(e);}}},onsaptabnext:function(e){if(t.oModel.getProperty("/tileActionModeActive")){var j=jQuery(document.activeElement).closest(".sapUshellTileContainerHeader");if(!j||j.length===0){e.preventDefault();var h=jQuery("#sapUshellDashboardFooterDoneBtn:visible");if(h.length){h.focus();}}else{var i=jQuery(document.activeElement).closest(".sapUshellTileContainer");var k=jQuery(document.activeElement).hasClass("sapUshellContainerTitle");var l=i.find('.sapUshellHeaderActionButton');var n=l&&l.length>0;var o=false;if(n){o=document.activeElement.id===l.last()[0].id;}if((k&&!n)||(o)){e.preventDefault();var H=i.find(".sapUshellTile:visible, sapUshellLink:visible").length>0;if(H){sap.ushell.components.flp.ComponentKeysHandler.goToLastVisitedTile(i,true);}else{var h=jQuery("#sapUshellDashboardFooterDoneBtn:visible");if(h.length){h.focus();}else{if(jQuery("#sapUshellFloatingContainerWrapper:visible").length==1&&(e.originalEvent.srcElement.id)!=""){sap.ui.getCore().getEventBus().publish("launchpad","shellFloatingContainerIsAccessible");}else{sap.ushell.renderers.fiori2.AccessKeysHandler.setIsFocusHandledByAnotherHandler(true);sap.ushell.renderers.fiori2.AccessKeysHandler.sendFocusBackToShell(e);}}}}}}else{e.preventDefault();if(jQuery("#sapUshellFloatingContainerWrapper:visible").length==1&&(e.originalEvent.srcElement.id)!=""){sap.ui.getCore().getEventBus().publish("launchpad","shellFloatingContainerIsAccessible");}else{sap.ushell.renderers.fiori2.AccessKeysHandler.setIsFocusHandledByAnotherHandler(true);sap.ushell.renderers.fiori2.AccessKeysHandler.sendFocusBackToShell(e);}}},onsaptabprevious:function(e){sap.ushell.renderers.fiori2.AccessKeysHandler.setIsFocusHandledByAnotherHandler(true);var j=jQuery(":focus");if(!t.oModel.getProperty("/tileActionModeActive")||j.hasClass("sapUshellTileContainerHeader")){e.preventDefault();var h=jQuery(".sapUshellAnchorItem:visible:first"),i=jQuery(".sapUshellAnchorItemOverFlow");if(!h.length){sap.ushell.renderers.fiori2.AccessKeysHandler.sendFocusBackToShell(e);}if(i.hasClass("sapUshellShellHidden")){sap.ushell.components.flp.ComponentKeysHandler.goToSelectedAnchorNavigationItem();}else{i.find("button").focus();}}else if(t.oModel.getProperty("/tileActionModeActive")){var k=jQuery(document.activeElement);if(k.hasClass('sapUshellTile')){e.preventDefault();var l=k.closest(".sapUshellTileContainer");var n=l.find('.sapUshellHeaderActionButton:visible').last();if(n.length>0){n.focus();}else{l.find('.sapUshellContainerTitle').focus();}}}}});this.oModel=m;return this.oGroupsContainer;},getAllGroupsFromModel:function(){return this.oModel.getProperty("/groups");},_getTileContainerTemplate:function(c,m){var t=this,T=new sap.ushell.ui.launchpad.TileContainer({headerText:"{title}",tooltip:"{title}",tileActionModeActive:'{/tileActionModeActive}',ieHtml5DnD:c.getView().ieHtml5DnD,enableHelp:'{/enableHelp}',groupId:"{groupId}",defaultGroup:"{isDefaultGroup}",isLastGroup:"{isLastGroup}",isGroupLocked:"{isGroupLocked}",isGroupSelected:"{isGroupSelected}",showHeader:true,editMode:"{editMode}",supportLinkPersonalization:this.isLinkPersonalizationSupported,titleChange:function(e){sap.ui.getCore().getEventBus().publish("launchpad","changeGroupTitle",{groupId:e.getSource().getGroupId(),newTitle:e.getParameter("newTitle")});},showEmptyLinksAreaPlaceHolder:{parts:['links/length','/isInDrag','/homePageGroupDisplay'],formatter:function(n,i,s){return i&&s==='tabs'&&!n;}},showPlaceholder:{parts:["/tileActionModeActive","tiles/length"],formatter:function(d){return(d||!this.groupHasTiles())&&!this.getIsGroupLocked();}},visible:{parts:["/tileActionModeActive","isGroupVisible","visibilityModes"],formatter:function(d,i,v){if(!v[d?1:0]){return false;}return i||d;}},hidden:{parts:['/tileActionModeActive','isGroupVisible'],formatter:function(i,I){return i&&!I;}},links:this._getLinkTemplate(),tiles:this._getTileTemplate(),add:function(e){if(document.toDetail){document.toDetail();}t.oController.getView().parentComponent.getRouter().navTo('appFinder',{'menu':'catalog',filters:JSON.stringify({targetGroup:encodeURIComponent(e.getSource().getBindingContext().sPath)})});},afterRendering:jQuery.proxy(this._tileContainerAfterRenderingHandler,t)});return T;},_getLinkTemplate:function(){var f=new sap.ui.model.Filter("isTileIntentSupported",sap.ui.model.FilterOperator.EQ,true);if(!this.isLinkPersonalizationSupported){return{path:"links",templateShareable:true,template:new sap.ushell.ui.launchpad.LinkTileWrapper({uuid:"{uuid}",tileCatalogId:"{tileCatalogId}",target:"{target}",isLocked:"{isLocked}",tileActionModeActive:"{/tileActionModeActive}",animationRendered:false,debugInfo:"{debugInfo}",ieHtml5DnD:this.oController.getView().ieHtml5DnD,tileViews:{path:"content",factory:function(i,c){return c.getObject();}},afterRendering:function(e){var j=jQuery(this.getDomRef().getElementsByTagName("a"));j.attr("tabindex",-1);}}),filters:[f]};}else{return{path:"links",factory:function(i,c){return c.getObject().content[0];},filters:[f]};}},_getTileTemplate:function(){var f=new sap.ui.model.Filter("isTileIntentSupported",sap.ui.model.FilterOperator.EQ,true);var t=new sap.ushell.ui.launchpad.Tile({"long":"{long}",isDraggedInTabBarToSourceGroup:"{draggedInTabBarToSourceGroup}",uuid:"{uuid}",tileCatalogId:"{tileCatalogId}",isCustomTile:"{isCustomTile}",target:"{target}",isLocked:"{isLocked}",navigationMode:"{navigationMode}",tileActionModeActive:"{/tileActionModeActive}",showActionsIcon:"{showActionsIcon}",rgba:"{rgba}",animationRendered:false,debugInfo:"{debugInfo}",ieHtml5DnD:this.oController.getView().ieHtml5DnD,afterRendering:function(e){var c=e.getSource().getBindingContext(),T;if(c){T=c.getObject();sap.ui.getCore().getEventBus().publish("launchpad","tileRendered",{tileId:T.originalTileId,tileDomElementId:e.getSource().getId()});}},tileViews:{path:"content",factory:function(i,c){return c.getObject();}},coverDivPress:function(e){if(!e.oSource.getBindingContext().getObject().tileIsBeingMoved){sap.ushell.components.flp.ActionMode._openActionsMenu(e);}},showActions:function(e){sap.ushell.components.flp.ActionMode._openActionsMenu(e);},deletePress:function(e){var T=e.getSource(),t=T.getBindingContext().getObject().object,d={originalTileId:sap.ushell.Container.getService("LaunchPage").getTileId(t)};sap.ui.getCore().getEventBus().publish("launchpad","deleteTile",d,this);},press:[this.oController.dashboardTilePress,this.oController]});var v=sap.ui.getCore().byId("viewPortContainer");t.addEventDelegate({onclick:function(e){jQuery.sap.measure.start("FLP:DashboardGroupsBox.onclick","Click on tile","FLP");jQuery.sap.measure.start("FLP:OpenApplicationonClick","Open Application","FLP");function c(){jQuery.sap.measure.end("FLP:DashboardGroupsBox.onclick");v.detachAfterNavigate(c);}v.attachAfterNavigate(c);}});return{path:"tiles",templateShareable:true,template:t,filters:[f]};},_tileContainerAfterRenderingHandler:function(e){e.oSource.bindProperty("showBackground","/tileActionModeActive");e.oSource.bindProperty("showDragIndicator",{parts:['/tileActionModeActive','/enableDragIndicator'],formatter:function(I,d){return I&&d&&!this.getIsGroupLocked()&&!this.getDefaultGroup();}});e.oSource.bindProperty("showEmptyLinksArea",{parts:['/tileActionModeActive','links/length',"isGroupLocked",'/isInDrag','/homePageGroupDisplay'],formatter:function(t,n,c,I,s){if(n){return true;}else if(c){return false;}else{return t||I&&s==='tabs';}}});e.oSource.bindProperty("showMobileActions",{parts:['/tileActionModeActive'],formatter:function(I){return I&&!this.getDefaultGroup();}});e.oSource.bindProperty("showIcon",{parts:['/isInDrag','/tileActionModeActive'],formatter:function(I,c){return(this.getIsGroupLocked()&&(I||c));}});e.oSource.bindProperty("deluminate",{parts:['/isInDrag'],formatter:function(I){return this.getIsGroupLocked()&&I;}});e.oSource.bindProperty("transformationError",{parts:['/isInDrag','/draggedTileLinkPersonalizationSupported'],formatter:function(I,d){return I&&!d;}});if(this.bTileContainersContentAdded&&!e.oSource.getBeforeContent().length){var g=e.oSource.getModel().getProperty("/groups"),i;for(i=0;i<g.length;i++){if(g[i].groupId===e.oSource.getGroupId()){break;}}this._addTileContainerContent(i);}sap.ushell.Layout.reRenderGroupsLayout(null);this._updateFirstGroupHeaderVisibility(e.oSource.getProperty('tileActionModeActive'),e.oSource.getModel().getProperty('/homePageGroupDisplay')!=="tabs");},_updateFirstGroupHeaderVisibility:function(I,e){var g=this.oGroupsContainer.getGroups(),f=undefined,v=0;for(var i=g.length-1;i>=0;--i){g[i].setShowGroupHeader(I||e);if(g[i].getProperty("visible")){f=i;}}this.oModel.getProperty("/groups").forEach(function(o){if(o.isGroupVisible){v++;}});if(f!==undefined){var F,c=false,G=this.oModel.getProperty("/homePageGroupDisplay"),V=I||(v===1&&e)||(G==="tabs"&&v===1);if(v>1||(G==="tabs"&&v>1)){F=g[f].getDomRef();F.getElementsByClassName("sapUshellTileContainerHeader")[0].classList.add("sapUiPseudoInvisibleText");c=true;}g[f].setShowGroupHeader(V,c);}},_addTileContainersContent:function(){if(!this.bTileContainersContentAdded){var g=this.oGroupsContainer.getGroups();g.forEach(function(c,d){this._addTileContainerContent(d);}.bind(this));this.bTileContainersContentAdded=true;}},_addTileContainerContent:function(g){var G=this.oGroupsContainer.getGroups()[g],B;if(G){B=G.getBindingContext().getPath()+'/';G.addBeforeContent(this._getBeforeContent(this.oController,B));G.addAfterContent(this._getAfterContent(this.oController,B));sap.ui.require(["sap/ushell/ui/launchpad/GroupHeaderActions"],function(c){var h=new c({content:this._getHeaderActions(),tileActionModeActive:{parts:['/tileActionModeActive',B+'isDefaultGroup'],formatter:function(i,I){return i&&!I;}},isOverflow:'{/isPhoneWidth}'}).addStyleClass("sapUshellOverlayGroupActionPanel");G.addHeaderAction(h);}.bind(this));}},_getBeforeContent:function(c){var d=new sap.m.Button({icon:"sap-icon://add",text:sap.ushell.resources.i18n.getText("add_group_at"),visible:{parts:["/tileActionModeActive"],formatter:function(t){return(!this.getParent().getIsGroupLocked()&&!this.getParent().getDefaultGroup()&&t);}},enabled:{parts:["/editTitle"],formatter:function(i){return!i;}},press:[this.oController._addGroupHandler]}).addStyleClass("sapUshellAddGroupButton");d.addDelegate({onAfterRendering:function(){jQuery(".sapUshellAddGroupButton").attr("tabindex",-1);}});return d;},_getAfterContent:function(c){var d=new sap.m.Button({icon:"sap-icon://add",text:sap.ushell.resources.i18n.getText("add_group_at"),visible:{parts:["isLastGroup","/tileActionModeActive","/isInDrag"],formatter:function(i,t,e){return(i&&t);}},enabled:{parts:["/editTitle"],formatter:function(i){return!i;}},press:[this.oController._addGroupHandler]}).addStyleClass("sapUshellAddGroupButton");d.addDelegate({onAfterRendering:function(){jQuery(".sapUshellAddGroupButton").attr("tabindex",-1);}});return d;},_getHeaderActions:function(){var s=new sap.m.Button({text:{path:'isGroupVisible',formatter:function(i){if(sap.ui.Device.system.phone){this.setIcon(i?"sap-icon://hide":"sap-icon://show");}return sap.ushell.resources.i18n.getText(i?'HideGroupBtn':'ShowGroupBtn');}},visible:{parts:['/tileActionModeActive','/enableHideGroups','isGroupLocked','isDefaultGroup'],formatter:function(i,I,c,e){return i&&I&&!c&&!e;}},press:function(e){var S=e.getSource(),g=S.getBindingContext();this.oController._changeGroupVisibility(g);}.bind(this)}).addStyleClass("sapUshellHeaderActionButton");var d=new sap.m.Button({text:{path:'removable',formatter:function(i){if(sap.ui.Device.system.phone){if(i){this.setIcon("sap-icon://delete");}else{this.setIcon("sap-icon://refresh");}}return sap.ushell.resources.i18n.getText(i?'DeleteGroupBtn':'ResetGroupBtn');}},visible:{parts:['/tileActionModeActive','isDefaultGroup'],formatter:function(i,I){return i&&!I;}},enabled:{parts:["/editTitle"],formatter:function(i){return!i;}},press:function(e){var S=e.getSource(),g=S.getBindingContext();this.oController._handleGroupDeletion(g);}.bind(this)}).addStyleClass("sapUshellHeaderActionButton");return[s,d];},_hidePlusTile:function(p){if(p){p.className+=" sapUshellHidePlusTile";}},_showPlusTile:function(p){if(p){p.className=p.className.split(' '+'sapUshellHidePlusTile').join('');}}});return a;});
