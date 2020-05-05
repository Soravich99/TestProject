/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/LrepConnector","sap/ui/fl/Utils"],function(L,F){"use strict";var T=function(){};T.prototype.getTransports=function(p){var u,c,l,P;u='/sap/bc/lrep/actions/gettransports/';if(p['package']){u+='&package='+p['package'];}if(p.name){u+='&name='+p.name;}if(p.namespace){u+='&namespace='+p.namespace;}if(p.type){u+='&type='+p.type;}c=F.getClient();if(c){u+='&sap-client='+c;}u=u.replace('&','?');l=L.createConnector();P=l.send(u);return P.then(function(r){if(r.response){if(!r.response.localonly){r.response.localonly=false;}if(!r.response.errorCode){r.response.errorCode="";}return Promise.resolve(r.response);}else{return Promise.reject('response is empty');}});};T.prototype.makeChangesTransportable=function(p){var u,c,l;u='/sap/bc/lrep/actions/make_changes_transportable/';c=F.getClient();if(c){u+='?sap-client='+c;}if(!p.transportId){return Promise.reject(new Error("no transportId provided as attribute of mParameters"));}if(!p.changeIds){return Promise.reject(new Error("no changeIds provided as attribute of mParameters"));}l=L.createConnector();return l.send(u,'POST',p);};T.prototype._convertToChangeTransportData=function(l){var t=[];var a=l.length;for(var i=0;i<a;i++){var c=l[i];var d={};d.namespace=c.getNamespace();d.fileName=c.getId();d.fileType=c.getDefinition().fileType;t.push(d);}return t;};return T;},true);
