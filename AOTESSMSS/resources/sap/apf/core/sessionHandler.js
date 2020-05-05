/*!
 * SAP APF Analysis Path Framework
 * 
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.apf.core.sessionHandler");jQuery.sap.require("sap.apf.core.ajax");jQuery.sap.require("sap.apf.utils.filter");jQuery.sap.require("sap.apf.core.constants");jQuery.sap.require("sap.ui.model.odata.ODataUtils");(function(){'use strict';sap.apf.core.SessionHandler=function(i){var a=null;var s=false;var d=false;var b=false;var p='';var x="";var h=new sap.apf.utils.Hashtable(i.instances.messageHandler);var n=0;var c=i.instances.coreApi;var m=i.instances.messageHandler;if(i&&i.functions&&i.functions.serializeApfState&&typeof i.functions.serializeApfState=='function'){s=i.functions.serializeApfState;}if(i&&i.functions&&i.functions.deserializeApfState&&typeof i.functions.deserializeApfState=='function'){d=i.functions.deserializeApfState;}this.type="sessionHandler";this.ajax=function(S){sap.apf.core.ajax(S);};this.getXsrfToken=function(f){var g=jQuery.Deferred();f=e(f);var j=h.getItem(f);if(j!==undefined&&j!==false){return g.resolve(j);}this.fetchXcsrfToken(f).done(function(x){h.setItem(f,x);g.resolve(x);});return g.promise();};function e(f){var g=c.getStartParameterFacade().getSapSystem();if(g){return sap.ui.model.odata.ODataUtils.setOrigin(f,{force:true,alias:g});}return f;}this.fetchXcsrfToken=function(f){var g=jQuery.Deferred();var j="HEAD";if(h.getItem(f)===false){j="GET";}this.ajax({url:c.getUriGenerator().getAbsolutePath(f),type:j,beforeSend:function(l){l.setRequestHeader("x-csrf-token","Fetch");},success:o.bind(this),error:k.bind(this),async:false});n=n+1;function o(D,S,X){x=X.getResponseHeader("x-csrf-token");if(x!==undefined&&x!==null){g.resolve(x);}if(x===null){x="";g.resolve(x);}}function k(r,S,E){if(r.status===405&&h.getItem(f)!==false){h.setItem(f,false);this.fetchXcsrfToken(f).done(function(x){g.resolve(x);});}else{x="";var M=m.createMessageObject({code:5101,aParameters:[]});m.putMessage(M);g.resolve(x);}}return g.promise();};this.setDirtyState=function(f){b=f;};this.isDirty=function(){return b;};this.setPathName=function(f){if(typeof f!='string'){p='';return;}p=f;};this.getPathName=function(){return p;};this.isApfStateAvailable=function(){if(a===null){return false;}return true;};this.storeApfState=function(){var k=true;if(s){s(undefined,k).done(function(f){a=f;});}};this.restoreApfState=function(){if(this.isApfStateAvailable()&&d){c.resetPath();return d(a);}};};}());
