/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2017 SAP SE. All rights reserved
 */
jQuery.sap.require("sap.collaboration.library");jQuery.sap.require("sap.collaboration.components.fiori.notification.NotificationContainer");sap.ui.jsview("sap.collaboration.components.fiori.notification.Notification",{getControllerName:function(){return"sap.collaboration.components.fiori.notification.Notification";},createContent:function(c){this.sPrefixId=this.getViewData().controlId;this.oLangBundle=this.getViewData().langBundle;this.sStyleClassPrefix=this.getViewData().styleClassPrefix;this.iNumberOfNotifications=this.getViewData().numberOfNotifications;this.sNotificationsTargetURL=this.getViewData().notificationsTargetUrl;var C=this.createContainerBox();return C;},createContainerBox:function(){var s=this;this.aProfilePhotos=this.createProfilePhotos();this.oNotificationTypeText=this.createNotificationTypeText();this.oNotificationMessageText=this.createNotificationMessageText();var n=this.createNotificationUnreadCountVBox();var a=this.createNotificationAgeAndGroupVBox();var c=new sap.collaboration.components.fiori.notification.NotificationContainer(this.sPrefixId+"_ContainerBox");for(var i=0;i<this.aProfilePhotos.length;++i){c.addContent(this.aProfilePhotos[i]);}c.addContent(this.oNotificationTypeText);c.addContent(this.oNotificationMessageText);c.addContent(n);c.addContent(a);return c;},createProfilePhotos:function(){var p=[];for(var i=0;i<this.iNumberOfNotifications;++i){p.push(new sap.m.Image(this.sPrefixId+"_ProfileImage"+i,{densityAware:false,decorative:true}).addStyleClass(this.sStyleClassPrefix+"ProfileImage").addStyleClass(this.sStyleClassPrefix+"ProfileImageHidden").addStyleClass(this.sStyleClassPrefix+"CursorPointer"));}return p;},createNotificationTypeText:function(){return new sap.m.Text(this.sPrefixId+"_NotificationType").addStyleClass(this.sStyleClassPrefix+"NotificationTypeText").addStyleClass(this.sStyleClassPrefix+"CursorPointer");},createNotificationMessageText:function(){return new sap.m.Text(this.sPrefixId+"_NotificationMessage").addStyleClass(this.sStyleClassPrefix+"NotificationMessageText").addStyleClass(this.sStyleClassPrefix+"CursorPointer");},createNotificationUnreadCountText:function(){return new sap.m.Text(this.sPrefixId+"_NotificationUnreadCount").addStyleClass(this.sStyleClassPrefix+"NotificationUnreadCountText").addStyleClass(this.sStyleClassPrefix+"CursorPointer");},createNotificationNewNotificationOrErrorText:function(){return new sap.m.Text(this.sPrefixId+"_NewNotificationOrErrorText").addStyleClass(this.sStyleClassPrefix+"CursorPointer");},createNotificationUnreadCountVBox:function(){this.oNotificationUnreadCountText=this.createNotificationUnreadCountText();this.oNotificationNewNotificationOrErrorText=this.createNotificationNewNotificationOrErrorText();var n=new sap.m.VBox(this.sPrefixId+"_UnreadCountVBox",{items:[this.oNotificationUnreadCountText,this.oNotificationNewNotificationOrErrorText]}).addStyleClass(this.sStyleClassPrefix+"NotificationUnreadContainer");return n;},createNotificationAgeAndGroupVBox:function(){this.oNotificationAgeText=new sap.m.Text(this.sPrefixId+"_NotificationAge",{textAlign:sap.ui.core.TextAlign.Right,}).addStyleClass(this.sStyleClassPrefix+"NotificationAgeAndGroupText").addStyleClass(this.sStyleClassPrefix+"CursorPointer");this.oNotificationGroupText=new sap.m.Text(this.sPrefixId+"_NotificationGroup",{textAlign:sap.ui.core.TextAlign.Right,}).addStyleClass(this.sStyleClassPrefix+"NotificationAgeAndGroupText").addStyleClass(this.sStyleClassPrefix+"CursorPointer");var a=new sap.m.VBox(this.sPrefixId+"_AgeAndGroupVBox",{items:[this.oNotificationAgeText,this.oNotificationGroupText]}).addStyleClass(this.sStyleClassPrefix+"NotificationAgeAndGroupContainer");return a;},ontap:function(){window.open(this.sNotificationsTargetURL,window.name);}});
