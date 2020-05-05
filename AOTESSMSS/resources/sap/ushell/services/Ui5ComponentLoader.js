// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/services/Ui5ComponentHandle","sap/ushell/services/_Ui5ComponentLoader/utils"],function(U,u){"use strict";function a(c,p,C){this._oConfig=(C&&C.config)||{};this.createComponent=function(A,P,w){var o=A||{};var l=u.shouldLoadCoreExt(o);var b=u.isCoreExtAlreadyLoaded();var d=u.shouldUseAmendedLoading(this._oConfig);var L=u.shouldLoadDefaultDependencies(o,this._oConfig,d);var e=o.applicationDependencies||{};u.logAnyApplicationDependenciesMessages(e.name,e.messages);if(!o.ui5ComponentName){return new jQuery.Deferred().resolve(A).promise();}delete o.loadCoreExt;delete o.loadDefaultDependencies;var f=this._createComponentData(o.componentData||{},o.url,o.applicationConfiguration,o.reservedParameters);var s=u.constructAppComponentId(P||{});var i=l&&d&&!b;var g=this._createComponentProperties(i,L,w,o.applicationDependencies||{},o.ui5ComponentName,o.url,s);U.onBeforeApplicationInstanceCreated.call(null,g);var D=new jQuery.Deferred();u.createUi5Component(g,f).then(function(h){var j=new U(h);o.componentHandle=j;var k=l&&(l||b||(d===false));if(k){o.coreResourcesFullyLoaded=k;}D.resolve(o);},function(E){var h=JSON.stringify(g,null,4);u.logInstantiateComponentError(g.name,E+"",E.status,E.stack,h);D.reject(E);});return D.promise();};this._createComponentData=function(b,s,A,t){var o=jQuery.extend(true,{startupParameters:{}},b);if(A){o.config=A;}if(t){o.technicalParameters=t;}if(u.urlHasParameters(s)){var d=u.getParameterMap(s);o.startupParameters=d.startupParameters;if(d["sap-xapp-state"]){o["sap-xapp-state"]=d["sap-xapp-state"];}}return o;};this._createComponentProperties=function(i,l,w,A,s,b,d){var o=jQuery.extend(true,{},A);if(!o.asyncHints){o.asyncHints=l?{"libs":["sap.ca.scfld.md","sap.ca.ui","sap.me","sap.ui.unified"]}:{};}if(i){var P=window["sap-ui-debug"]===true?"sap/fiori/core-ext-light-dbg.js":"sap/fiori/core-ext-light.js";o.asyncHints.preloadBundles=o.asyncHints.preloadBundles||[];o.asyncHints.preloadBundles.push(P);}if(w){o.asyncHints.waitFor=w;}if(!o.name){o.name=s;}if(b){o.url=u.removeParametersFromUrl(b);}if(d){o.id=d;}return o;};};a.hasNoAdapter=true;return a;},true);