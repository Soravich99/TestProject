/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/BindingMode','sap/ui/model/Model','./ResourcePropertyBinding'],function(q,B,M,R){"use strict";var a=M.extend("sap.ui.model.resource.ResourceModel",{constructor:function(d){M.apply(this,arguments);this.aCustomBundles=[];this.bReenhance=false;this.bAsync=!!(d&&d.async);this.sDefaultBindingMode=d.defaultBindingMode||B.OneWay;this.mSupportedBindingModes={"OneWay":true,"TwoWay":false,"OneTime":!this.bAsync};if(this.bAsync&&this.sDefaultBindingMode==B.OneTime){q.sap.log.warning("Using binding mode OneTime for asynchronous ResourceModel is not supported!");}this.oData=d;if(d&&d.bundle){this._oResourceBundle=d.bundle;}else if(d&&(d.bundleUrl||d.bundleName)){_(this);}else{throw new Error("At least bundle, bundleName or bundleUrl must be provided!");}},metadata:{publicMethods:["getResourceBundle"]}});a.loadResourceBundle=function(d,A){var c=sap.ui.getCore().getConfiguration(),r,u,l,i;l=d.bundleLocale;if(!l){l=c.getLanguage();}i=c.getOriginInfo();u=b(d.bundleUrl,d.bundleName);r=q.sap.resources({url:u,locale:l,includeInfo:i,async:A});return r;};a.prototype.enhance=function(d){var t=this,r,p=this.bAsync?new Promise(function(e){r=e;}):null;function c(){if(q.sap.resources.isBundle(d)){t._oResourceBundle._enhance(d);t.checkUpdate(true);if(p){r(true);}}else{var e=a.loadResourceBundle(d,t.bAsync);if(e instanceof Promise){e.then(function(f){t._oResourceBundle._enhance(f);t.checkUpdate(true);r(true);},function(){r(true);});}else if(e){t._oResourceBundle._enhance(e);t.checkUpdate(true);}}}if(this._oPromise){Promise.resolve(this._oPromise).then(c);}else{c();}if(!this.bReenhance){this.aCustomBundles.push(d);}return p;};a.prototype.bindProperty=function(p){var o=new R(this,p);return o;};a.prototype.getProperty=function(p){return this._oResourceBundle?this._oResourceBundle.getText(p):null;};a.prototype.getResourceBundle=function(){if(!this.bAsync){return this._oResourceBundle;}else{var p=this._oPromise;if(p){return new Promise(function(r,c){function d(o){r(o);}p.then(d,d);});}else{return Promise.resolve(this._oResourceBundle);}}};a.prototype._handleLocalizationChange=function(){_(this);};a.prototype._reenhance=function(){this.bReenhance=true;this.aCustomBundles.forEach(function(d){this.enhance(d);}.bind(this));this.bReenhance=false;};function _(m){var d=m.oData;if(d&&(d.bundleUrl||d.bundleName)){var r=a.loadResourceBundle(d,d.async);if(r instanceof Promise){var e={url:b(d.bundleUrl,d.bundleName),async:true};m.fireRequestSent(e);m._oPromise=r;m._oPromise.then(function(o){m._oResourceBundle=o;m._reenhance();delete m._oPromise;m.checkUpdate(true);m.fireRequestCompleted(e);});}else{m._oResourceBundle=r;m._reenhance();m.checkUpdate(true);}}}function b(c,d){var u=c;if(d){u=q.sap.getModulePath(d,'.properties');}return u;}return a;});
