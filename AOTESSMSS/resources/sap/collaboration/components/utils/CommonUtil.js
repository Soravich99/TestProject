/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2017 SAP SE. All rights reserved
 */
jQuery.sap.require("sap.m.MessageBox");jQuery.sap.require("sap.collaboration.components.utils.MessageQueueUtil");jQuery.sap.declare("sap.collaboration.components.utils.CommonUtil");sap.ui.base.Object.extend("sap.collaboration.components.utils.CommonUtil",{constructor:function(){this.MessageQueueUtil=new sap.collaboration.components.utils.MessageQueueUtil();},getLanguageBundle:function(){if(!this.oLangBundle){jQuery.sap.require("jquery.sap.resources");var l=sap.ui.getCore().getConfiguration().getLanguage();this.oLangBundle=jQuery.sap.resources({url:jQuery.sap.getModulePath("sap.collaboration.components")+"/resources/i18n/messagebundle.properties",locale:l});}return this.oLangBundle;},displayError:function(e){var s=this;var m="";var o={icon:sap.m.MessageBox.Icon.ERROR,title:s.getLanguageBundle().getText("SYSTEM_ERROR_MESSAGEBOX_TITLE")};if(!e||e===""){m=s.getLanguageBundle().getText("SYSTEM_ERROR_MESSAGEBOX_GENERAL_TEXT");}else{m=e;}this.MessageQueueUtil.displayMessage(m,o,"MBox");},showMessage:function(m,o){this.MessageQueueUtil.displayMessage(m,o,"MToast");},isValidDate:function(d){if(Object.prototype.toString.call(d)!=="[object Date]"||isNaN(d.getTime())){jQuery.sap.log.error("DateUtils invalid date="+d);return false;}return true;},isString:function(o){return Object.prototype.toString.call(o)==="[object String]";},isObject:function(o){return Object.prototype.toString.call(o)==="[object Object]";},isFunction:function(o){return Object.prototype.toString.call(o)==="[object Function]";},isArrayOfStrings:function(o){var i;if(Array.isArray(o)){for(i in o){if(!this.isString(o[i])){return false;}}return true;}else{return false;}},getIconFromMimeType:function(v){var i="";if(!v){return"sap-icon://document";}if(v.indexOf('image')===0){i="sap-icon://attachment-photo";}else if(v.indexOf('video')===0){i="sap-icon://attachment-video";}else if(v.indexOf('text')===0){i="sap-icon://attachment-text-file";}else if(v.indexOf('audio')===0){i="sap-icon://attachment-audio";}else if(v.indexOf('audio')===0){i="sap-icon://attachment-audio";}else if(v.indexOf('application')===0){switch(v){case'application/vnd.openxmlformats-officedocument.presentationml.presentation':case'application/vnd.ms-powerpoint':case'application/vnd.openxmlformats-officedocument.presentationml.template':i="sap-icon://ppt-attachment";break;case'application/msword':case'application/vnd.openxmlformats-officedocument.wordprocessingml.document':case'application/vnd.openxmlformats-officedocument.wordprocessingml.template':i="sap-icon://doc-attachment";break;case'application/vnd.ms-excel':case'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':case'application/vnd.openxmlformats-officedocument.spreadsheetml.template':i="sap-icon://excel-attachment";break;case'application/pdf':i="sap-icon://pdf-attachment";break;case'application/xhtml+xml':i="sap-icon://attachment-html";break;case'application/zip':case'application/gzip':i="sap-icon://attachment-zip-file";break;default:i="sap-icon://document";}}else{i="sap-icon://document";}return i;},areArraysEqual:function(a,b){var o=function(x,y){var o=true;for(var p in x){if(x[p]!==y[p]){o=false;break;}}return o;};if(a.length!==b.length){return false;}for(var i=0;i<a.length;i++){if(!o(a[i],b[i])){return false;}}return true;},b64toBlob:function(b,c,s){c=c||'';s=s||512;var a=window.atob(b);var d=[];for(var o=0;o<a.length;o+=s){var e=a.slice(o,o+s);var f=new Array(e.length);for(var i=0;i<e.length;i++){f[i]=e.charCodeAt(i);}var g=new window.Uint8Array(f);d.push(g);}var h=new window.Blob(d,{type:c});return h;},getODataResult:function(d){return d.results?d.results:d;},});
