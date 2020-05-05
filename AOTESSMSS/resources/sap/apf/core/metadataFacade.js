/*!
 * SAP APF Analysis Path Framework
 * 
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.apf.core.metadataFacade");jQuery.sap.require("sap.apf.utils.utils");(function(){'use strict';sap.apf.core.MetadataFacade=function(I,a){this.type="metadataFacade";var M=I.constructors.MetadataProperty;var m=I.instances.messageHandler;var b=I.instances.metadataFactory;var p;var c;var d={};this.getAllProperties=function(e){var f;var h;var j=0;var i;var k=[];if(p){e(p);}else{f=g();h=f.length;for(i=0;i<h;i++){b.getMetadata(f[i]).done(l);}}function l(n){j++;k=k.concat(n.getAllProperties());if(h==j){p=sap.apf.utils.eliminateDuplicatesInArray(m,k);e(p);}}};this.getAllParameterEntitySetKeyProperties=function(e){var f;var h;var j=0;var i;var k=[];if(c){e(c);}else{f=g();h=f.length;for(i=0;i<h;i++){b.getMetadata(f[i]).done(l);}}function l(n){j++;k=k.concat(n.getParameterEntitySetKeyPropertiesForService());if(h==j){c=sap.apf.utils.eliminateDuplicatesInArray(m,k);e(c);}}};this.getProperty=function(e){var f;var h;var j;var k=jQuery.Deferred();if(d[e]){k.resolve(d[e]);}else{f=g();j=f.length;for(var i=0;i<j;i++){b.getMetadata(f[i]).done(function(l){h=l.getAttributes(e);if(h.name){if(l.getParameterEntitySetKeyPropertiesForService().indexOf(e)>-1){h.isParameterEntitySetKeyProperty=true;}if(l.getAllKeys().indexOf(e)>-1){h.isKey=true;}for(var n in h){if(n==="dataType"){for(var o in h.dataType){h[o]=h.dataType[o];}}}d[e]=new M(h);k.resolve(d[e]);}});}}return k.promise();};function g(){if(typeof a==="string"){return[a];}return b.getServiceDocuments();}};}());
