// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(function(){"use strict";var S=function(d){this.getAlias=function(){return d.alias;};this.getBaseUrl=function(){return d.baseUrl;};this.getClient=function(){return d.client;};this.getName=function(){return d.system;};this.getPlatform=function(){return d.platform;};this.adjustUrl=function(u){if(u.indexOf('/')!==0||u==='/'){throw new Error("Invalid URL: "+u);}if(d.baseUrl===";o="){if(d.alias){u=u+";o="+d.alias;}}else if(d.baseUrl){u=d.baseUrl.replace(/\/$/,"")+u;}if(d.client){u+=(u.indexOf("?")>=0?"&":"?")+"sap-client="+d.client;}return u;};this.toString=function(){return JSON.stringify(d);};};return S;},true);
