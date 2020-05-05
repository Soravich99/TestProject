// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define([],function(){"use strict";var S="sap.ushell.services.ContentExtension";function C(a,c,p,s){}C.Type={SITE:"site"};C.prototype.registerContentProvider=function(p){var c;function l(E){jQuery.sap.log.error("An error occurred when calling #registerContentProvider",E,S)}if(p===null||typeof p!=="object"||Object.keys(p).length===0){l("parameters must be provided and must be a non-empty object");return;}if(typeof p.id!=="string"||p.id.length===0){l("id parameter should be a non-empty string");return;}if(typeof p.provider!=="object"||p.provider===null){l("provider member must be of type 'object' and not null");return;}if(p.type===C.Type.SITE){if(typeof p.provider.getSite!=="function"){l("Provider must expose a getSite member of type 'function', got '"+(typeof p.provider.getSite)+"' instead");return;}try{c=sap.ushell.Container.getService("CommonDataModel");}catch(e){l(e+"");}if(c){c.registerContentProvider(p.id,p.provider);}return;}l("Unknown type parameter. It should be one should be one of ["+Object.keys(C.Type).map(function(t){return"ContentExtension."+t;}).join(", ")+"] but '"+p.type+"' was provided");};C.hasNoAdapter=true;return C;},true);
