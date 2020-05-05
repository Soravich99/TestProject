// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define([],function(){"use strict";var A=function(){};A.prototype.loadAppsData=function(m,p,l){var a=sap.ushell.Container.getService("AllMyApps");this.oPopover=p;if(!a.isEnabled()){return;}else{this.iNumberOfProviders=0;this.oModel=m;if(a.isHomePageAppsEnabled()){this._handleGroupsData();}if(a.isExternalProviderAppsEnabled()){this._handleExternalProvidersData(m);}if(a.isCatalogAppsEnabled()){this._handleCatalogs(l);}if(!a.isCatalogAppsEnabled()||(a.isCatalogAppsEnabled()&&l)){var e=sap.ui.getCore().getEventBus();e.publish("launchpad","allMyAppsMasterLoaded");}}};A.prototype._handleGroupsData=function(){var t=this,g=this._getGroupsData(),h={title:sap.ushell.resources.i18n.getText("allMyApps_homeEntryTitle")},p;g.done(function(G){h.groups=G;h.type=sap.ushell.Container.getService("AllMyApps").getProviderTypeEnum().HOME;if(G.length===0){return;}p=t.oModel.getProperty("/AppsData");if(p){var i=t._getIndexByType(p,h.type);if(i!==undefined){p[i]=h;}else{p.unshift(h);}}t.oModel.setProperty("/AppsData",p);t.iNumberOfProviders+=1;});};A.prototype._getIndexByType=function(p,a){if(p.length<=0){return 0;}for(var i=0;i<p.length;i++){if(p[i].type===a){return i;}}};A.prototype._getGroupsData=function(){var t=this,l=sap.ushell.Container.getService("LaunchPage"),d=new jQuery.Deferred(),g=l.getGroups(),D=l.getDefaultGroup(),p=[],G=[],i,T,o,s,a,b,c,e,n;t.oDefaultGroup=undefined;p.push(D);p.push(g);jQuery.when(p).then(function(f){p[0].done(function(h){t.oDefaultGroup=h;});p[1].done(function(h){for(i=0;i<h.length;i++){n=0;T=h[i];if(l.isGroupVisible(T)===false){continue;}if(l.getGroupId(T)===l.getGroupId(t.oDefaultGroup)){s=sap.ushell.resources.i18n.getText("my_group");}else{s=l.getGroupTitle(T);}o={};o.title=s;o.apps=[];a=l.getGroupTiles(T);for(b=0;b<a.length;b++){c=a[b];if(l.isTileIntentSupported(c)){e=t._getAppEntityFromTile(c);if(e){o.apps.push(e);}else{n++;}}}o.numberCustomTiles=n;if(n===1){o.sCustomLabel=sap.ushell.resources.i18n.getText("allMyApps_customStringSingle");o.sCustomLink=sap.ushell.resources.i18n.getText("allMyApps_customLinkHomePageSingle");}else{o.sCustomLabel=sap.ushell.resources.i18n.getText("allMyApps_customString",[n]);o.sCustomLink=sap.ushell.resources.i18n.getText("allMyApps_customLinkHomePage");}o.handlePress=function(j,k){window.hasher.setHash("#Shell-home");this.oPopover.close();var B=sap.ui.getCore().getEventBus();B.subscribe("launchpad","dashboardModelContentLoaded",function(){B.publish("launchpad","scrollToGroupByName",{groupName:k.title,isInEditTitle:false});},this);B.publish("launchpad","scrollToGroupByName",{groupName:k.title,isInEditTitle:false});}.bind(t);if(o.apps.length>0||o.numberCustomTiles>0){G.push(o);}}d.resolve(G);});});return d.promise();};A.prototype._handleExternalProvidersData=function(){var t=this,e=sap.ushell.Container.getService("AllMyApps").getDataProviders(),E=Object.keys(e),s,o,a,b,i,c;if(E.length>0){for(i=0;i<E.length;i++){s=E[i];o=e[s];a=o.getTitle();b={};b.title=a;c=o.getData();c.done(function(p){if(p&&(p.length>0)){b.groups=p;b.type=sap.ushell.Container.getService("AllMyApps").getProviderTypeEnum().EXTERNAL;t.oModel.setProperty("/AppsData/"+t.iNumberOfProviders,b);t.iNumberOfProviders+=1;var d=sap.ui.getCore().getEventBus();d.publish("launchpad","allMyAppsMasterLoaded");}});}}};A.prototype._handleNotFirstCatalogsLoad=function(){var m=this.oModel.getProperty("/AppsData"),c=sap.ushell.Container.getService("AllMyApps").getProviderTypeEnum().CATALOG;if(m.length&&m[m.length-1].type===c){this.bFirstCatalogLoaded=true;sap.ui.getCore().getEventBus().publish("launchpad","allMyAppsFirstCatalogLoaded",{bFirstCatalogLoadedEvent:true});}};A.prototype._handleCatalogs=function(l){if(!l){this._handleNotFirstCatalogsLoad();}else{this.bFirstCatalogLoaded=false;this.aPromises=[];sap.ushell.Container.getService("LaunchPage").getCatalogs().done(function(c){jQuery.when.apply(jQuery,this.aPromises).then(this._onDoneLoadingCatalogs.bind(this));}.bind(this)).fail(function(a){this._onGetCatalogsFail(sap.ushell.resources.i18n.getText("fail_to_load_catalog_msg"));}.bind(this)).progress(this._addCatalogToModel.bind(this));}};A.prototype._addCatalogToModel=function(c){var p={apps:[],numberCustomTiles:0,type:sap.ushell.Container.getService("AllMyApps").getProviderTypeEnum().CATALOG},t=this,P,i,a,o,l=sap.ushell.Container.getService("LaunchPage"),C=l.getCatalogTiles(c);this.aPromises.push(C);C.done(function(b){if(b.length===0){return;}var s=l.getCatalogTitle(c);P=t.oModel.getProperty("/AppsData");for(i=0;i<P.length;i++){if((P[i].type===sap.ushell.Container.getService("AllMyApps").getProviderTypeEnum().CATALOG)&&(P[i].title===s)){p=P[i];break;}}p.title=l.getCatalogTitle(c);for(a=0;a<b.length;a++){if(l.isTileIntentSupported(b[a])){o=t._getAppEntityFromTile(b[a]);if(o){p.apps.push(o);}else{p.numberCustomTiles++;}}}if(p.numberCustomTiles===1){p.sCustomLabel=sap.ushell.resources.i18n.getText("allMyApps_customStringSingle");p.sCustomLink=sap.ushell.resources.i18n.getText("allMyApps_customLinkAppFinderSingle");}else{p.sCustomLabel=sap.ushell.resources.i18n.getText("allMyApps_customString",[p.numberCustomTiles]);p.sCustomLink=sap.ushell.resources.i18n.getText("allMyApps_customLinkAppFinder");}p.handlePress=function(e,d){this.oPopover.close();window.hasher.setHash("#Shell-home&/appFinder/catalog/"+JSON.stringify({catalogSelector:d.title,tileFilter:"",tagFilter:"[]",targetGroup:""}));}.bind(t);if(p.apps.length>0||p.numberCustomTiles>0){t.oModel.setProperty("/AppsData/"+i,p);if(t.bFirstCatalogLoaded===false){sap.ui.getCore().getEventBus().publish("launchpad","allMyAppsFirstCatalogLoaded",{bFirstCatalogLoadedEvent:true});t.bFirstCatalogLoaded=true;}t.iNumberOfProviders+=1;}});};A.prototype._onGetCatalogsFail=function(m){sap.ushell.Container.getService('Message').show(sap.ushell.services.Message.Type.INFO,m);};A.prototype._onDoneLoadingCatalogs=function(){var e=sap.ui.getCore().getEventBus();if(!this.bFirstCatalogLoaded){e.publish('launchpad','allMyAppsNoCatalogsLoaded');}};A.prototype._getAppEntityFromTile=function(c){var a,l=sap.ushell.Container.getService("LaunchPage"),t=l.getCatalogTilePreviewTitle(c),T=l.getCatalogTilePreviewSubtitle(c),s=l.getCatalogTileTargetURL(c);if(s&&(t||T)){a={};a.url=s;if(t){a.title=t;a.subTitle=T;}else{a.title=T;}return a;}};return new A();},true);
