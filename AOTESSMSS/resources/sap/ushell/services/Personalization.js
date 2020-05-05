// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/utils","sap/ushell/services/_Personalization/utils","sap/ushell/services/_Personalization/constants.private","sap/ushell/services/_Personalization/constants","sap/ushell/services/_Personalization/ContextContainer","sap/ushell/services/_Personalization/WindowAdapter","sap/ushell/services/_Personalization/TransientPersonalizer","sap/ushell/services/_Personalization/PersonalizationContainer","sap/ushell/services/_Personalization/Personalizer","sap/ushell/services/_Personalization/VariantSetAdapter","sap/ushell/services/_Personalization/Variant","sap/ushell/services/_Personalization/VariantSet","sap/ushell/services/_Personalization/WindowAdapterContainer","sap/ui/core/format/DateFormat"],function(u,p,a,b,C,W,T,P,c,V,d,e,f,D){"use strict";function g(A,o,s,h){this._oConfig=(h&&h.config)||{};this._seed=(h&&h.config&&typeof h.config.seed==="string"&&h.config.seed)||"12345678901AFERANDOMBETTER";while(this._seed.length<40){this._seed=this._seed+this._seed;}this._oAdapterWithBackendAdapter=new W(this,A);this._oAdapterWindowOnly=new W(this,undefined);this._supportsGetWithoutSubsequentLoad=(A&&A.supportsGetWithoutSubsequentLoad===true);this._oContainerMap=new u.Map();this._oPendingOperationsMap=new u.Map();};g.prototype.SAVE_DEFERRED_DROPPED="Deferred save dropped (OK) - Data superseeded by subsequent save";g.prototype.constants=b;g.prototype.getGeneratedKey=function(){var s="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",h=s.length,r="",t=this;var R=function(i){return(t._seed.charCodeAt(i)+Math.floor(Math.random()*h))%h;};if(window&&window.crypto&&window.crypto.getRandomValues){var j=new Uint32Array(40);window.crypto.getRandomValues(j);R=function(i){return(j[i]+t._seed.charCodeAt(i))%s.length;}}var k=function(i){return s[R(i)];};while(r.length<40){r+=k(r.length);}return r;};g.prototype.getPersonalizer=function(o,s,h){return new c(this,this._oAdapterWithBackendAdapter,o,s,h);};g.prototype.getTransientPersonalizer=function(){return new T();};g.prototype.getContainer=function(s,S,o){return this._createContainer(s,S,false,o);};g.prototype.createEmptyContainer=function(s,S,o){return this._createContainer(s,S,true,o);};g.prototype._createContainer=function(s,S,h,o){var i=new jQuery.Deferred(),r,l,j;r=this._adjustScopePickAdapter(s,S,this._oAdapterWithBackendAdapter,this._oAdapterWindowOnly);j=new C(this,r.oAdapterForScope,r.sPrefixedContainerKey,r.oScope,o);if(h&&this._supportsGetWithoutSubsequentLoad){l=new jQuery.Deferred();l.resolve(j);}else{l=j.load();}l.fail(function(){i.reject();}).done(function(){if(h||j._isExpired()){j.clear();}i.resolve(j);});return i.promise();};g.prototype.delContainer=function(s,S){var o={},h,i="",t=this;S=t._adjustScope(S);i=p.addContainerPrefix(s);o=new jQuery.Deferred();h=t._pendingContainerOperations_cancelAddNext(s,null);h.always(function(){t.getContainer(s,S).fail(function(){t._pendingContainerOperations_cancelAddNext(s,o);o.reject();}).done(function(j){var A;t._pendingContainerOperations_cancelAddNext(s,o);if(S.validity===0){A=t._oAdapterWindowOnly;}else{A=t._oAdapterWithBackendAdapter;}A.delAdapterContainer(i,S).fail(function(){o.reject();}).done(function(){o.resolve();});});});return o.promise();};g.prototype._pendingContainerOperations_flushAddNext=function(s,o){var h,S;h=this._oPendingOperationsMap.get(s);if(!h){h=new jQuery.Deferred();h.resolve();}if(o!==null){this._oPendingOperationsMap.put(s,o);}if(!h||h.state()!=="pending"){return h;}clearTimeout(h._sapTimeoutId);h._sapTimeoutId=undefined;if(typeof h._sapFnSave==="function"){S=h._sapFnSave;h._sapFnSave=undefined;S();}return h;};g.prototype._pendingContainerOperations_cancelAddNext=function(s,o){var h;h=this._oPendingOperationsMap.get(s);if(!h){h=new jQuery.Deferred();h.resolve();}if(o!==null){this._oPendingOperationsMap.put(s,o);}if(!h||h.state()!=="pending"){return h;}if(h._sapTimeoutId){clearTimeout(h._sapTimeoutId);h._sapTimeoutId=undefined;h.resolve(g.prototype.SAVE_DEFERRED_DROPPED);}return h;};g.prototype.getPersonalizationContainer=function(s){var h="",o={},i={};if(typeof s!=="string"){throw new u.Error("sContainerKey is not a string: sap.ushell.services.Personalization"," ");}h=p.addContainerPrefix(s);if(this._oContainerMap.containsKey(h)){return this._oContainerMap.get(h).promise();}i=new jQuery.Deferred();o=new P(this._oAdapterWithBackendAdapter,h);o.done(function(j){i.resolve(j);}).fail(function(j){i.reject(j);});this._oContainerMap.put(h,i);return i.promise();};g.prototype.delPersonalizationContainer=function(s){var o={},h="",t=this;h=p.addContainerPrefix(s);o=new jQuery.Deferred();this.getPersonalizationContainer(s).fail(function(){o.reject();}).done(function(i){t._oAdapterWithBackendAdapter.delAdapterContainer(h).fail(function(){o.reject();}).done(function(){t._oContainerMap.remove(h);o.resolve();});});return o.promise();};g.prototype._adjustScope=p.adjustScope;g.prototype._adjustScopePickAdapter=p.adjustScopePickAdapter;g.hasNoAdapter=false;g.ContextContainer=C;g.Variant=d;g.VariantSet=e;g.VariantSetAdapter=V;g.WindowAdapter=W;g.WindowAdapterContainer=f;return g;},true);
