// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(['sap/m/NotificationListItem','sap/m/BusyIndicator','sap/m/Button','sap/m/NotificationListGroup','sap/m/List','sap/m/IconTabFilter','sap/m/IconTabBar','sap/m/Text','sap/m/VBox','sap/m/CustomListItem'],function(N,B,a,b,L,I,c,T,V,C){"use strict";sap.ui.jsview("sap.ushell.renderers.fiori2.notifications.Notifications",{createContent:function(o){var t=this;this.oBusyIndicator=new B('notificationsByTypeBusyIndicator',{size:"1rem"});this.oPreviousTabKey="sapUshellNotificationIconTabByDate";this.oPreviousByDateSorting=undefined;this.oActionListItemTemplate=new a({text:"{ActionText}",type:{parts:["Nature"],formatter:function(n){switch(n){case"POSITIVE":return"Accept";case"NEGATIVE":return"Reject";default:return"Default";}}},press:function(E){t.actionButtonPressHandler(E);}});this.actionButtonPressHandler=function(E){var n=E.getSource().getBindingContext().getPath(),g=this.getModel().getProperty(n),p=n.split("/"),h=t.oIconTabBar.getSelectedKey(),P=h==='sapUshellNotificationIconTabByType'?"/"+p[1]+"/"+p[2]+"/"+p[3]+"/"+p[4]:"/"+p[1]+"/"+p[2]+"/"+p[3],j=this.getModel().getProperty(P),s=j.Id;this.oPressActionEventPath=n;this.getModel().setProperty(P+"/Busy",true);o.executeAction(s,g.ActionId).done(function(r){if(r&&r.isSucessfull){sap.ui.require(['sap/m/MessageToast'],function(M){if(r.message&&r.message.length){M.show(r.message,{duration:4000});}else{var A=this.oPressActionEventPath,k=this.getModel().getProperty(A),l=k.ActionText;M.show(sap.ushell.resources.i18n.getText("ActionAppliedToNotification",l),{duration:4000});}}.bind(this));if(r.DeleteOnReturn!==false){o.removeNotificationFromModel(s);o.cleanModel();}}else{if(r){sap.ushell.Container.getService('Message').error(r.message);}else{sap.ushell.Container.getService('Message').error(sap.ushell.resources.i18n.getText('notificationsFailedExecuteAction'));}}this.getModel().setProperty(P+"/Busy",false);}.bind(this)).fail(function(){this.getModel().setProperty(P+"/Busy",false);sap.ushell.Container.getService('Message').error(sap.ushell.resources.i18n.getText('notificationsFailedExecuteAction'));}.bind(this));};this.oActionGroupItemTemplate=new a({text:"{GroupActionText}",type:{parts:["Nature"],formatter:function(n){switch(n){case"POSITIVE":return"Accept";case"NEGATIVE":return"Reject";default:return"Default";}}},press:function(E){var n=this.getBindingContext().getPath(),g=this.getModel().getProperty(n),p=n.split("/"),P="/"+p[1]+"/"+p[2],h=this.getModel().getProperty(P),j=[];if(h.aNotifications){h.aNotifications.forEach(function(k,l){j.push(k.Id);this.getModel().setProperty(P+"/Busy",true);}.bind(this));}this.getModel().setProperty(n+"/Busy",true);o.executeBulkAction(j,g.ActionId,this.getProperty("text"),h,n,P);}});this.addStyleClass('sapUshellNotificationsView');this.oNotificationListItemTemplate=new N({press:function(E){var g=this.getBindingContext(),m=g.sPath,M=this.getModel().getProperty(m),s=M.NavigationTargetObject,A=M.NavigationTargetAction,p=M.NavigationTargetParams,n=M.Id;o.onListItemPress.call(o,n,s,A,p);},datetime:{path:"CreatedAt",formatter:sap.ushell.utils.formatDate.bind(o)},description:"{SubTitle}",title:{parts:["SensitiveText","Text"],formatter:function(s,g){return s?s:g;}},buttons:{path:"Actions",templateShareable:true,sorter:new sap.ui.model.Sorter('Nature',true),template:this.oActionListItemTemplate},unread:{parts:["IsRead"],formatter:function(g){return!g;}},close:function(E){var n=this.getBindingContext().getPath(),g=this.getModel().getProperty(n),s=g.Id;o.dismissNotification(s);},busy:{parts:["Busy"],formatter:function(g){if(g){return g;}return false;}},priority:{parts:["Priority"],formatter:function(p){if(p){p=p.charAt(0)+p.substr(1).toLowerCase();return sap.ui.core.Priority[p];}}}}).addStyleClass("sapUshellNotificationsListItem").addStyleClass('sapContrastPlus').addStyleClass('sapContrast');this.oNotificationGroupTemplate=new b({title:"{GroupHeaderText}",collapsed:"{Collapsed}",showEmptyGroup:true,enableCollapseButtonWhenEmpty:true,datetime:{path:"CreatedAt",formatter:sap.ushell.utils.formatDate.bind(o)},buttons:{path:"Actions",templateShareable:true,sorter:new sap.ui.model.Sorter('Nature',true),template:this.oActionGroupItemTemplate},items:{path:"aNotifications",templateShareable:true,template:this.oNotificationListItemTemplate},onCollapse:function(E){var g=E.getSource(),p=g.getBindingContext().getPath();if(!g.getCollapsed()){t.getModel().setProperty(p+"/Busy",true);t.expandedGroupIndex=p.substring(p.lastIndexOf("/")+1);o.onExpandGroup(g);}},close:function(E){var n=this.getBindingContext().getPath(),p=n.split("/"),P="/"+p[1]+"/"+p[2],g=this.getModel().getProperty(P),h=[];g.aNotifications.forEach(function(j,k){h.push(j.Id);});o.dismissBulkNotifications(h,g);},autoPriority:false,priority:{parts:["Priority"],formatter:function(p){if(p){p=p.charAt(0)+p.substr(1).toLowerCase();return sap.ui.core.Priority[p];}}},busy:{parts:["Busy"],formatter:function(g){if(g){return g;}return false;}}});this.oNotificationsListDate=new L({id:"sapUshellNotificationsListDate",mode:sap.m.ListMode.None,noDataText:sap.ushell.resources.i18n.getText('noNotificationsMsg'),items:{path:"/notificationsByDateDescending/aNotifications",template:this.oNotificationListItemTemplate,templateShareable:true},growing:true,growingThreshold:400,growingScrollToLoad:true}).addStyleClass("sapUshellNotificationsList");this.oNotificationsListDate.onAfterRendering=function(){o.handleEmptyList();this.oNotificationsListDate.$().parent().parent().scroll(this._triggerRetrieveMoreData.bind(t));if(o._oTopNotificationData){o.scrollToItem(o._oTopNotificationData);}this.oNotificationsListDate.addStyleClass('sapContrast sapContrastPlus');}.bind(this);this.oNotificationsListPriority=new L({id:"sapUshellNotificationsListPriority",mode:sap.m.ListMode.None,noDataText:sap.ushell.resources.i18n.getText('noNotificationsMsg'),items:{path:"/notificationsByPriorityDescending/aNotifications",template:this.oNotificationListItemTemplate,templateShareable:true},growing:true,growingThreshold:400,growingScrollToLoad:true}).addStyleClass("sapUshellNotificationsList");this.oNotificationsListPriority.onAfterRendering=function(){o.handleEmptyList();this.oNotificationsListPriority.$().parent().parent().scroll(this._triggerRetrieveMoreData.bind(t));if(o._oTopNotificationData){o.scrollToItem(o._oTopNotificationData);}this.oNotificationsListPriority.addStyleClass('sapContrast sapContrastPlus');}.bind(this);this.triggerRetrieveMoreData=function(p){if(!this.getModel().getProperty("/"+p+"/inUpdate")){var n=this.getController().getItemsFromModel(p),g=n?n.length:0,h=g?this.getController().getBasicBufferSize():0,j=h*2/3,k=Math.floor(g-j),l=p==="notificationsByPriorityDescending"?this.oNotificationsListPriority.getItems()[k]:this.oNotificationsListDate.getItems()[k],m=this.getController().getTopOffSet();if(l&&l.getDomRef()&&jQuery(l.getDomRef()).offset().top<=m){this.getController().getNextBuffer(p);}}};this.triggerRetrieveMoreDataForExpandedGroup=function(){if(!this.getModel().getProperty("/notificationsByTypeDescending/inUpdate")){var g=this.getModel().getProperty("/notificationsByTypeDescending"),n=g.length,h=this.getModel().getProperty("/notificationsByTypeDescending")[this.expandedGroupIndex].aNotifications.length,j=h+n,k=j?this.getController().getBasicBufferSize():0,l=k*2/3,m=Math.floor(j-l),p=this.oNotificationsListType.getItems()[this.expandedGroupIndex].getItems()[m],q=this.getController().getTopOffSet();if(p&&p.getDomRef()&&jQuery(p.getDomRef()).offset().top<=q){o.getNextBufferForType();}}};this._triggerRetrieveMoreData=function(){this.triggerRetrieveMoreData(o.sCurrentSorting);};this.oNotificationsListType=new L({id:"sapUshellNotificationsListType",mode:sap.m.ListMode.SingleSelect,noDataText:sap.ushell.resources.i18n.getText('noNotificationsMsg'),items:{path:"/notificationsByTypeDescending",template:t.oNotificationGroupTemplate,templateShareable:true}}).addStyleClass("sapUshellNotificationsList").addStyleClass('sapContrastPlus').addStyleClass('sapContrast');this.oNotificationsListType.onAfterRendering=function(){this.oNotificationsListType.$().parent().parent().scroll(this.triggerRetrieveMoreDataForExpandedGroup.bind(t));}.bind(this);var i=new I({id:"sapUshellNotificationIconTabByDate",key:"sapUshellNotificationIconTabByDate",text:sap.ushell.resources.i18n.getText('notificationsSortByDate'),tooltip:sap.ushell.resources.i18n.getText('notificationsSortByDateDescendingTooltip')});var d=new I({id:"sapUshellNotificationIconTabByType",key:"sapUshellNotificationIconTabByType",text:sap.ushell.resources.i18n.getText('notificationsSortByType'),tooltip:sap.ushell.resources.i18n.getText('notificationsSortByTypeTooltip'),content:this.oNotificationsListType});var e=new I({id:"sapUshellNotificationIconTabByPrio",key:"sapUshellNotificationIconTabByPrio",text:sap.ushell.resources.i18n.getText('notificationsSortByPriority'),tooltip:sap.ushell.resources.i18n.getText('notificationsSortByPriorityTooltip')});this.oIconTabBar=new c('notificationIconTabBar',{backgroundDesign:sap.m.BackgroundDesign.Transparent,expandable:false,selectedKey:"sapUshellNotificationIconTabByDate",items:[i,d,e],select:function(g){var k=g.getParameter("key"),h=g.getParameter("item");if(k==="sapUshellNotificationIconTabByDate"){if(((t.oPreviousTabKey==="sapUshellNotificationIconTabByDate")&&((t.oPreviousByDateSorting===t.oController.oSortingType.NOTIFICATIONS_BY_DATE_DESCENDING)||t.oPreviousByDateSorting===undefined))||((t.oPreviousTabKey!=="sapUshellNotificationIconTabByDate")&&(t.oPreviousByDateSorting===t.oController.oSortingType.NOTIFICATIONS_BY_DATE_ASCENDING))){t.oController.sCurrentSorting=t.oController.oSortingType.NOTIFICATIONS_BY_DATE_ASCENDING;h.setTooltip(sap.ushell.resources.i18n.getText('notificationsSortByDateAscendingTooltip'));t.oNotificationsListDate.bindItems("/notificationsByDateAscending/aNotifications",t.oNotificationListItemTemplate);if(o.getItemsFromModel(o.oSortingType.NOTIFICATIONS_BY_DATE_ASCENDING).length===0){o.getNextBuffer(o.oSortingType.NOTIFICATIONS_BY_DATE_ASCENDING);}t.oPreviousByDateSorting=t.oController.oSortingType.NOTIFICATIONS_BY_DATE_ASCENDING;}else{t.oController.sCurrentSorting=t.oController.oSortingType.NOTIFICATIONS_BY_DATE_DESCENDING;h.setTooltip(sap.ushell.resources.i18n.getText('notificationsSortByDateDescendingTooltip'));t.oNotificationsListDate.bindItems("/notificationsByDateDescending/aNotifications",t.oNotificationListItemTemplate);if(o.getItemsFromModel(o.oSortingType.NOTIFICATIONS_BY_DATE_DESCENDING).length===0){o.getNextBuffer(o.oSortingType.NOTIFICATIONS_BY_DATE_DESCENDING);}t.oPreviousByDateSorting=t.oController.oSortingType.NOTIFICATIONS_BY_DATE_DESCENDING;}t.oPreviousTabKey="sapUshellNotificationIconTabByDate";}else if(k==="sapUshellNotificationIconTabByType"&&t.oPreviousTabKey!=="sapUshellNotificationIconTabByType"){t.oController.sCurrentSorting=t.oController.oSortingType.NOTIFICATIONS_BY_TYPE_DESCENDING;t.getController().reloadGroupHeaders();h.removeAllContent();h.addContent(t.oBusyIndicator);t.oIconTabBar.addStyleClass('sapUshellNotificationIconTabByTypeWithBusyIndicator');t.oPreviousTabKey="sapUshellNotificationIconTabByType";}else{t.oController.sCurrentSorting=t.oController.oSortingType.NOTIFICATIONS_BY_PRIORITY_DESCENDING;if(o.getItemsFromModel(o.oSortingType.NOTIFICATIONS_BY_PRIORITY_DESCENDING).length===0){o.getNextBuffer(o.oSortingType.NOTIFICATIONS_BY_PRIORITY_DESCENDING);}t.oPreviousTabKey="sapUshellNotificationIconTabByPrio";}t.oPreviousTabKey=k;}}).addStyleClass('sapUshellNotificationTabBar');this.oIconTabBar.addEventDelegate({onsaptabprevious:function(E){var O=E.originalEvent,s=O.srcElement,g=s.classList,h;h=jQuery.inArray('sapMITBFilter',g)>-1;if(h===true){E.preventDefault();sap.ushell.renderers.fiori2.AccessKeysHandler.setIsFocusHandledByAnotherHandler(true);sap.ushell.renderers.fiori2.AccessKeysHandler.sendFocusBackToShell(E);}}});var f=this.oIconTabBar.onAfterRendering;this.oIconTabBar.onAfterRendering=function(){if(f){f.apply(this,arguments);}var g=sap.ui.getCore().byId('notificationIconTabBar--header');if(g){g.addStyleClass('sapContrastPlus');g.addStyleClass('sapUshellTabBarHeader');}};return[this.oIconTabBar];},getMoreCircle:function(t){var m=new T({text:sap.ushell.resources.i18n.getText('moreNotifications')}),n=new T({text:""}).addStyleClass("sapUshellNotificationsMoreCircleCount"),M=new V({items:[n,m],alignItems:sap.m.FlexAlignItems.Center}).addStyleClass("sapUshellNotificationsMoreCircle"),o=new T({text:sap.ushell.resources.i18n.getText('moreNotificationsAvailable_message'),textAlign:"Center"}).addStyleClass("sapUshellNotificationsMoreHelpingText"),d=new T({text:sap.ushell.resources.i18n.getText('processNotifications_message'),textAlign:"Center"}).addStyleClass("sapUshellNotificationsMoreHelpingText"),v=new V({items:[M,o,d]}).addStyleClass("sapUshellNotificationsMoreVBox"),l=new C({type:sap.m.ListType.Inactive,content:v}).addStyleClass("sapUshellNotificationsMoreListItem").addStyleClass('sapContrastPlus');n.setModel(this.getModel());n.bindText("/"+t+"/moreNotificationCount");this.oMoreListItem=l;return l;},getControllerName:function(){return"sap.ushell.renderers.fiori2.notifications.Notifications";}});},false);
