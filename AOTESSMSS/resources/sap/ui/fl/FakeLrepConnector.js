/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/thirdparty/URI","sap/ui/fl/Utils","sap/ui/fl/LrepConnector","sap/ui/fl/Cache","sap/ui/fl/ChangePersistenceFactory"],function(q,u,F,L,C,a){"use strict";var l=Object.create(L.prototype);b._oBackendInstances={};function b(i){this.sInitialComponentJsonPath=i;}for(var p in l){if(typeof l[p]==='function'){b.prototype[p]=(function(p){return function(){throw new Error('Method '+p+'() is not implemented in FakeLrepConnector.');};}(p));}}b.prototype.loadChanges=function(s){var i=this.sInitialComponentJsonPath;return new Promise(function(r,e){q.getJSON(i).done(function(R){var f={changes:R,componentClassName:s};r(f);}).fail(function(f){e(f);});});};b.prototype.create=function(e,f,i){if(!i){return Promise.resolve();}if(!e.creation){e.creation=new Date().toISOString();}return Promise.resolve({response:e,status:'success'});};b.prototype.update=function(e,f,g,i){if(!i){return Promise.resolve();}return Promise.resolve({response:e,status:'success'});};b.prototype.deleteChange=function(e,i){if(!i){return Promise.resolve();}return Promise.resolve({response:undefined,status:'nocontent'});};b.prototype.send=function(U,m,D,o){return new Promise(function(r,e){d(U,m,D,o,r,e);c(U,m,D,o,r,e);h(U,m,D,o,r,e);});};function h(U,m,D,o,r){if(U.match(/^\/sap\/bc\/ui2\/app_index\/ui5_app_mani_first_supported\//)&&m==='GET'){r({response:false,status:"success"});}}function c(U,m,D,o,r){if(U.match(/^\/sap\/bc\/lrep\/actions\/make_changes_transportable\//)&&m==='POST'){r();}}function d(U,m,D,o,r,e){if(U.match(/^\/sap\/bc\/lrep\/actions\/gettransports\//)){r({response:{"transports":[{"transportId":"U31K008488","description":"The Ultimate Transport","owner":"Fantasy Owner","locked":false}],"localonly":false,"errorCode":""}});}}b.enableFakeConnector=function(i,A,s){function r(){b.enableFakeConnector.original=L.createConnector;L.createConnector=function(){if(!b._oFakeInstance){b._oFakeInstance=new b(i);}return b._oFakeInstance;};}if(A&&s){var o=a.getChangePersistenceForComponent(A,s);if(!(o._oConnector instanceof b)){C.clearEntry(A,s);if(!b._oBackendInstances[A]){b._oBackendInstances[A]={};}b._oBackendInstances[A][s]=o._oConnector;o._oConnector=new b(i);}r();return;}C.clearEntries();if(b.enableFakeConnector.original){return;}r();};b.disableFakeConnector=function(A,s){function r(){if(b.enableFakeConnector.original){L.createConnector=b.enableFakeConnector.original;b.enableFakeConnector.original=undefined;b._oFakeInstance=undefined;}}if(A&&s){var o=a.getChangePersistenceForComponent(A,s);if(!(o._oConnector instanceof L)){C.clearEntry(A,s);if(b._oBackendInstances[A]&&b._oBackendInstances[A][s]){o._oConnector=b._oBackendInstances[A][s];b._oBackendInstances[A][s]=undefined;}}r();return;}C.clearEntries();r();};return b;},true);
