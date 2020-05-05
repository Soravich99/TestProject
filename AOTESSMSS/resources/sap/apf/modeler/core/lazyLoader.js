/*!
 * SAP APF Analysis Path Framework
 *
 * (c) Copyright 2012-2014 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.apf.modeler.core.lazyLoader");(function(){'use strict';sap.apf.modeler.core.LazyLoader=function(a,l,d){var H=a.constructors.Hashtable;var o={id:null,instance:null,messageObject:null,isInitializing:false,callbacksFromAsyncGet:new H(a.instances.messageHandler)},b=null;if(d){o.id=d.id;o.instance=d.instance;}this.type="lazyLoader";this.getId=function(){return o.id;};this.getInstance=function(){return o.instance;};this.isInitializing=function(){return o.isInitializing;};this.reset=function(){b=o.instance;o={id:null,instance:null,messageObject:null,isInitializing:false,callbacksFromAsyncGet:new H(a.instances.messageHandler)};};this.asyncGetInstance=function(i,e){function p(g){if(g===null){return undefined;}return g;}var f;if(!i){return;}if(o.id&&i!==o.id){this.reset();}if(o.id&&(o.instance||o.messageObject)){f=p(o.messageObject);e(o.instance,f,o.id);return;}m(e);if(!o.isInitializing){o.isInitializing=true;o.id=i;l(i,c,b);}};function c(i,e,f){if(i!==o.id){return;}o.isInitializing=false;if(!f){o.instance=e;}else{o.messageObject=f;}o.callbacksFromAsyncGet.each(function(k,g){g.forEach(function(h){h(o.instance,f,o.id);});});o.callbacksFromAsyncGet=null;}function m(e){var i;var f,g;g=o.callbacksFromAsyncGet.getItem(e);if(!g){o.callbacksFromAsyncGet.setItem(e,[e]);return;}f=false;for(i=0;i<g.length;i++){if(g[i]===e){f=true;break;}}if(!f){g.push(e);}}};}());
