// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(['sap/ushell/services/Personalization'],function(P){"use strict";var A=function(s,p,c){this._oConfig=c&&c.config;};A.prototype._getPersonalizationService=function(){return sap.ushell.Container.getService("Personalization");};A.prototype.saveAppState=function(k,s,v,a,c){var p=this._getPersonalizationService(),d=new jQuery.Deferred();p.createEmptyContainer(k,{keyCategory:p.constants.keyCategory.GENERATED_KEY,writeFrequency:p.constants.writeFrequency.HIGH,clientStorageAllowed:false}).done(function(C){C.setItemValue("appStateData",v);C.save().done(function(){d.resolve();}).fail(function(m){d.reject(m);jQuery.sap.log.error(m);});}).fail(function(m){jQuery.sap.log.error(m);d.reject(m);});return d.promise();};A.prototype.loadAppState=function(k){var p=this._getPersonalizationService(),d=new jQuery.Deferred();p.getContainer(k,{keyCategory:p.constants.keyCategory.GENERATED_KEY,writeFrequency:p.constants.writeFrequency.HIGH,clientStorageAllowed:false}).done(function(c){var v=c.getItemValue("appStateData");d.resolve(k,v);}).fail(function(m){jQuery.sap.log.error(m);d.reject(m);});return d.promise();};return A;},true);
