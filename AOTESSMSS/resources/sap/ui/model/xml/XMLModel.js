/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/ClientModel','sap/ui/model/Context','./XMLListBinding','./XMLPropertyBinding','./XMLTreeBinding','jquery.sap.xml'],function(q,C,a,X,b,c){"use strict";var d=C.extend("sap.ui.model.xml.XMLModel",{constructor:function(D){C.apply(this,arguments);this.oNameSpaces=null;if(D&&D.documentElement){this.setData(D);}},metadata:{publicMethods:["setXML","getXML","setNameSpace"]}});d.prototype.setXML=function(x){var o=q.sap.parseXML(x);if(o.parseError.errorCode!=0){var p=o.parseError;q.sap.log.fatal("The following problem occurred: XML parse Error for "+p.url+" code: "+p.errorCode+" reason: "+p.reason+" src: "+p.srcText+" line: "+p.line+" linepos: "+p.linepos+" filepos: "+p.filepos);this.fireParseError({url:p.url,errorCode:p.errorCode,reason:p.reason,srcText:p.srcText,line:p.line,linepos:p.linepos,filepos:p.filepos});}this.setData(o);};d.prototype.getXML=function(){return q.sap.serializeXML(this.oData);};d.prototype.setData=function(D){this.oData=D;this.checkUpdate();};d.prototype.loadData=function(u,p,A,t,e,h){var f=this;A=(A!==false);t=t||"GET";e=e===undefined?this.bCache:e;this.fireRequestSent({url:u,type:t,async:A,headers:h,info:"cache="+e,infoObject:{cache:e}});this._ajax({url:u,async:A,cache:e,dataType:'xml',data:p,headers:h,type:t,success:function(D){if(!D){q.sap.log.fatal("The following problem occurred: No data was retrieved by service: "+u);}f.setData(D);f.fireRequestCompleted({url:u,type:t,async:A,headers:h,info:"cache="+e,infoObject:{cache:e},success:true});},error:function(g,i,j){var E={message:i,statusCode:g.status,statusText:g.statusText,responseText:g.responseText};q.sap.log.fatal("The following problem occurred: "+i,g.responseText+","+g.status+","+g.statusText);f.fireRequestCompleted({url:u,type:t,async:A,headers:h,info:"cache="+e,infoObject:{cache:e},success:false,errorobject:E});f.fireRequestFailed(E);}});};d.prototype.setNameSpace=function(n,p){if(!p){p="";}if(!this.oNameSpaces){this.oNameSpaces={};}this.oNameSpaces[p]=n;};d.prototype.bindProperty=function(p,o,P){var B=new b(this,p,o,P);return B;};d.prototype.bindList=function(p,o,s,f,P){var B=new X(this,p,o,s,f,P);return B;};d.prototype.bindTree=function(p,o,f,P,s){var B=new c(this,p,o,f,P,s);return B;};d.prototype.setProperty=function(p,v,o,A){var O=p.substring(0,p.lastIndexOf("/")+1),P=p.substr(p.lastIndexOf("/")+1);if(!this.resolve(p,o)){return false;}if(!this.oData.documentElement){q.sap.log.warning("Trying to set property "+p+", but no document exists.");return false;}var e;if(P.indexOf("@")==0){e=this._getObject(O,o);if(e[0]){e[0].setAttribute(P.substr(1),v);this.checkUpdate(false,A);return true;}}else{e=this._getObject(p,o);if(e[0]){q(e[0]).text(v);this.checkUpdate(false,A);return true;}}return false;};d.prototype.getProperty=function(p,o){var r=this._getObject(p,o);if(r&&typeof r!="string"){r=q(r[0]).text();}return r;};d.prototype.getObject=function(p,o){var O=this._getObject(p,o);if(Array.isArray(O)){O=O[0];}return O;};d.prototype._getObject=function(p,o){var r=this.oData.documentElement;if(!r){return null;}var n=this.isLegacySyntax()?[r]:[];if(o instanceof a){n=this._getObject(o.getPath());}else if(o){n=[o];}if(!p){return n;}var P=p.split("/"),s,i=0;if(!P[0]){n=r;i++;}n=n.length==undefined?[n]:n;n=n[0]?n:null;while(n&&n.length>0&&P[i]){s=P[i];if(s.indexOf("@")==0){n=this._getAttribute(n[0],s.substr(1));}else if(s=="text()"){n=q(n[0]).text();}else if(isNaN(s)){n=this._getChildElementsByTagName(n[0],s);}else{n=[n[s]];}i++;}return n;};d.prototype._getAttribute=function(n,N){if(!this.oNameSpaces||N.indexOf(":")==-1){return n.getAttribute(N);}var s=this._getNameSpace(N),l=this._getLocalName(N);if(n.getAttributeNS){return n.getAttributeNS(s,l);}else{if(!this.oDocNSPrefixes){this.oDocNSPrefixes=this._getDocNSPrefixes();}var p=this.oDocNSPrefixes[s];N=(p?p+":":"")+l;return n.getAttribute(N);}};d.prototype._getChildElementsByTagName=function(n,N){var e=n.childNodes,r=[];if(this.oNameSpaces){var s=this._getNameSpace(N),l=this._getLocalName(N),f;q.each(e,function(i,o){f=o.localName||o.baseName;if(o.nodeType==1&&f==l&&o.namespaceURI==s){r.push(o);}});}else{q.each(e,function(i,o){if(o.nodeType==1&&o.nodeName==N){r.push(o);}});}return r;};d.prototype._getNameSpace=function(n){var i=n.indexOf(":"),p="";if(i>0){p=n.substr(0,i);}return this.oNameSpaces[p];};d.prototype._getLocalName=function(n){var i=n.indexOf(":"),l=n;if(i>0){l=n.substr(i+1);}return l;};d.prototype._getDocNSPrefixes=function(){var p={},D=this.oData&&this.oData.documentElement;if(!D){return p;}var A=D.attributes;q.each(A,function(i,o){var n=o.name,v=o.value;if(n=="xmlns"){p[v]="";}else if(n.indexOf("xmlns")==0){p[v]=n.substr(6);}});return p;};d.prototype._resolve=function(p,o){var i=!q.sap.startsWith(p,"/"),r=p;if(i){if(o){r=o.getPath()+"/"+p;}else{r=this.isLegacySyntax()?"/"+p:undefined;}}return r;};d.prototype.isList=function(p,o){return false;};d.prototype._setMetaModel=function(m){this._oMetaModel=m;};d.prototype.getMetaModel=function(){return this._oMetaModel;};return d;});
