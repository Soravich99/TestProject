// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(function(){"use strict";sap.ui.controller("sap.ushell.renderers.fiori2.userActivitiesHandler.userActivitiesHandler",{onInit:function(){this.oModel=sap.ui.getCore().byId("mainShell").getModel();this.isTrackingEnable=this.oModel.getProperty("/enableTrackingActivity")!=undefined?this.oModel.getProperty("/enableTrackingActivity"):true;this.currentTrackingMode=this.isTrackingEnable;this.oView.trackUserActivitySwitch.setState(this.isTrackingEnable);},getContent:function(){var d=jQuery.Deferred();d.resolve(this.getView());return d.promise();},getValue:function(){return jQuery.Deferred().resolve(" ");},onCancel:function(){var d=jQuery.Deferred();if(this.currentTrackingMode!=this.isTrackingEnable){this.isTrackingEnable=!this.isTrackingEnable;this.oView.trackUserActivitySwitch.setState(this.isTrackingEnable);}d.resolve();return d.promise();},onSave:function(){var d=jQuery.Deferred();if(this.currentTrackingMode!=this.isTrackingEnable){this.oModel.setProperty("/enableTrackingActivity",this.isTrackingEnable);this.writeUserActivityModeToPersonalization(this.isTrackingEnable);this.currentTrackingMode=this.isTrackingEnable;sap.ui.getCore().byId('meAreaIconTabBar').setVisible(this.isTrackingEnable);var m=sap.ui.getCore().byId('meArea');if(this.isTrackingEnable){var a=m.getController();if(!a.oUserRecentsSrvc){a.oUserRecentsSrvc=sap.ushell.Container.getService('UserRecents');}a.refreshRecentActivities();a.refreshFrequentActivities();d.resolve();}else{d.resolve();}}else{d.resolve();}return d.promise();},writeUserActivityModeToPersonalization:function(i){var d,p;try{p=this._getPersonalizer().setPersData(i);}catch(e){jQuery.sap.log.error("Personalization service does not work:");jQuery.sap.log.error(e.name+": "+e.message);d=new jQuery.Deferred();d.reject(e);p=d.promise();}return p;},_getPersonalizer:function(){var p=sap.ushell.Container.getService("Personalization");var c=sap.ui.core.Component.getOwnerComponentFor(this);var s={keyCategory:p.constants.keyCategory.FIXED_KEY,writeFrequency:p.constants.writeFrequency.LOW,clientStorageAllowed:true};var P={container:"flp.settings.FlpSettings",item:"userActivitesTracking"};return p.getPersonalizer(P,s,c);},_handleCleanHistory:function(){var t=this;var s=sap.ushell.Container.getService("UserRecents");s.clearRecentActivities();a();function a(){sap.ui.require(['sap/m/MessageToast'],function(M){var m=sap.ushell.resources.i18n.getText("savedChanges");M.show(m,{duration:3000,width:"15em",my:"center bottom",at:"center bottom",of:window,offset:"0 -50",collision:"fit fit"});});};},_handleTrackUserActivitySwitch:function(i){this.isTrackingEnable=i;},});},false);
