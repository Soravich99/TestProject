/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/LrepConnector","sap/ui/fl/Utils","sap/ui/fl/Change"],function(L,U,C){"use strict";var a;a={_oLrepConnector:new L(),createOrUpdateCodeExtChange:function(p,o){if(!p.content||!p.content.codeRef){throw new Error("no code reference passed for the code extension change");}if(!p.selector||!p.selector.id){throw new Error("no controller name passed for the code extension change");}if(!p.reference){throw new Error("no reference passed for the code extension change");}p.changeType=p.changeType||"codeExt";var c=C.createInitialFileContent(p);var u="/sap/bc/lrep/content/"+c.namespace+c.fileName+".change";u+="?layer="+c.layer;if(o){if(o.transportId){u+="&changelist="+o.transportId;}if(o.packageName){u+="&package="+o.packageName;}}var m="PUT";return this._oLrepConnector.send(u,m,c,{});},createCodeExtChanges:function(c,o){c=c||[];if(c.length===0){return Promise.resolve();}var p=[];c.forEach(function(b){b.changeType=b.changeType||"codeExt";b.packageName=o.packageName;b.content={codeRef:o.codeRef};p.push(C.createInitialFileContent(b));});return this._oLrepConnector.create(p,o.transportId);},deleteCodeExtChange:function(c,o){if(c.changeType!=="codeExt"||c.fileType!=="change"){throw new Error("the change is not of type 'code extension'");}if(!c.fileName){throw new Error("the extension does not contains a file name");}if(c.namespace===undefined){throw new Error("the extension does not contains a namespace");}var u="/sap/bc/lrep/content/"+c.namespace+c.fileName+".change";if(c.layer){u+="&layer="+c.layer;}if(o){if(o.transportId){u+="&changelist="+o.transportId;}if(o.packageName){u+="&package="+o.packageName;}}u=u.replace("&","?");var m="DELETE";return this._oLrepConnector.send(u,m,c,{});}};return a;},true);
