sap.ui.define(["./common.constants","./common.debug.mode"],function(c,d){"use strict";var S="sap/ushell/bootstrap/common/common.boot.script";return a;function a(s){var u;var D=s&&s.defaultUshellConfig;var M=r(c.configMetaPrefix);b(M,D,d,null);u=window[c.ushellConfigNamespace];f(u,"services.Container.adapter.config.userProfilePersonalization");return u;}function f(u,s){var p;if(!u||!s){return;}p=jQuery.sap.getObject(s,undefined,u);if(p.items){jQuery.extend(p,p.items);delete p.items;delete p.__metadata;}}function r(C){var s="meta[name^='"+C+"']:not([name=''])";var M=document.querySelectorAll(s);var g=[];Array.prototype.forEach.call(M,function(o){try{g.push(JSON.parse(o.content));}catch(e){jQuery.sap.log.error(e.message,e.stack,S);}});return g;}function b(M,D,d,s){var C=c.ushellConfigNamespace,e=M,u;if(!window[C]){window[C]={};}u=window[C];if(D){e=[D].concat(M);}e.forEach(function(o){m(u,o,true);});s&&s.forEach(function(o){m(u,o,true);});u["sap-ui-debug"]=d;jQuery.sap.log.info("finally applied sap-ushell-config",JSON.stringify(u),S);}function m(M,C,e){var A;if(!C){return;}A=e?JSON.parse(JSON.stringify(C)):C;Object.keys(A).forEach(function(k){if(typeof M[k]==="object"&&typeof A[k]==="object"){m(M[k],A[k],false);return;}M[k]=A[k];});}});
