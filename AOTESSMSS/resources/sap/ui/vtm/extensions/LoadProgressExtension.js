/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","../Extension"],function(q,S){"use strict";var L=S.extend("sap.ui.vtm.extensions.LoadProgressExtension",{metadata:{interfaces:["sap.ui.vtm.interfaces.IDownloadProgressExtension","sap.ui.vtm.interfaces.ILoadProgressExtension"]},constructor:function(i,s){S.apply(this,arguments);},initialize:function(v){this._scene=v.getScene();this._rb=sap.ui.vtm.getResourceBundle();this._oDialog=new sap.ui.vtm.ProgressDialog({progressBarVisible:false});this._downloadInfoByViewable=new Map();this._loadInfoByViewable=new Map();this._boundDownloadStartedHandler=this._downloadStartedHandler.bind(this);this._boundDownloadProgressHandler=this._downloadProgressHandler.bind(this);this._boundDownloadCompletedHandler=this._downloadCompletedHandler.bind(this);this._boundLoadStartedHandler=this._loadStartedHandler.bind(this);this._boundLoadProgressHandler=this._loadProgressHandler.bind(this);this._boundLoadCompletedHandler=this._loadCompletedHandler.bind(this);this._scene.attachDownloadStarted(this._boundDownloadStartedHandler);},_setDownloadPercentComplete:function(p){if(this._oDialog.getPercentComplete()!==p){this._oDialog.setPercentComplete(p);this._oDialog.setProgressText(this._rb.getText("PROGRESS_DOWNLOADING_0",[p]));sap.ui.getCore().applyChanges();}},_downloadProgressHandler:function(e){if(!this.getEnabled()){return;}var v=e.getParameter("viewable");var d=e.getParameter("downloadedBytes");var t=e.getParameter("totalBytes");this._downloadInfoByViewable.set(v,{downloadedBytes:d,totalBytes:t});var b=0,a=0;this._downloadInfoByViewable.forEach(function(c){b+=c.downloadedBytes;a+=c.totalBytes;});var p=a==0?0.0:Math.floor(b/a*100);this._setDownloadPercentComplete(p);},_downloadStartedHandler:function(e){if(!this.getEnabled()){return;}this._openDialog();},_setLoadPercentComplete:function(p){if(this._oDialog.getPercentComplete()!==p){this._oDialog.setPercentComplete(p);this._oDialog.setProgressText(this._rb.getText("PROGRESS_LOADING_0",[p]));sap.ui.getCore().applyChanges();}},_loadProgressHandler:function(e){if(!this.getEnabled()){return;}var v=e.getParameter("viewable");var p=e.getParameter("percentage");this._loadInfoByViewable.set(v,{percentComplete:p});var a=0;var l=0;this._loadInfoByViewable.forEach(function(b){a+=b.percentComplete;l++;});var o=l==0?0:Math.floor(a/l);this._setLoadPercentComplete(o);},_downloadCompletedHandler:function(e){this._downloadInfoByViewable.clear();var v=e.getParameter("viewableLoadInfos");var a=v.every(function(b){return b.getStatus()===sap.ui.vtm.ViewableLoadStatus.DownloadFailed;});if(a){this._closeDialog();}},_loadStartedHandler:function(e){this._oDialog.setProgressText(this._rb.getText("PROGRESS_LOADING"));sap.ui.getCore().applyChanges();},_loadCompletedHandler:function(e){this._loadInfoByViewable.clear();this._closeDialog();},_openDialog:function(){if(!this._oDialog.isOpen()){this._scene.attachDownloadProgress(this._boundDownloadProgressHandler);this._scene.attachDownloadCompleted(this._boundDownloadCompletedHandler);this._scene.attachLoadStarted(this._boundLoadStartedHandler);this._scene.attachLoadProgress(this._boundLoadProgressHandler);this._scene.attachLoadCompleted(this._boundLoadCompletedHandler);this._oDialog.open();this._setDownloadPercentComplete(0);}},_closeDialog:function(){this._scene.detachDownloadProgress(this._boundDownloadProgressHandler);this._scene.detachDownloadCompleted(this._boundDownloadCompletedHandler);this._scene.detachLoadStarted(this._boundLoadStartedHandler);this._scene.detachLoadProgress(this._boundLoadProgressHandler);this._scene.detachLoadCompleted(this._boundLoadCompletedHandler);this._oDialog.close();}});return L;});
