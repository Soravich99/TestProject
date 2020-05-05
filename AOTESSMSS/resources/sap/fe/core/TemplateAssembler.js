/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
        (c) Copyright 2009-2017 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel","sap/fe/core/TemplateComponent","sap/fe/core/internal/testableHelper","sap/fe/core/TemplateUtils"],function(q,C,J,R,T,t,a){"use strict";var A={};var c={};var r=function(o){var s=o.appComponent.getId();A[s]=o;return function(){delete A[s];};};function g(o){var s=o.getId();var e=A[s];return e;}function b(o){return g(o.getAppComponent()).oTemplateContract.componentRegistry[o.getId()];}function d(e,s,o,f,h){o=o||{};o.constructor=function(){C.prototype.constructor.apply(this,arguments);var m=e(f,this);this._templateEventHandlers=Object.freeze(m.handlers||{});this._templateFormatters=Object.freeze(m.formatters||{});this.extensionAPI=Object.freeze(m.extensionAPI||{});this.fnGenericOnInit=function(i){var v=i.getView();var V=v.getId();q.sap.log.info("Init view "+V+" of template "+s);var j=i.getOwnerComponent();var k=b(j);k.oControllerRegistryEntry={onExit:m.onExit||q.noop,oTemplateUtils:f,oAppRegistryEntry:h};c[V]=k.oControllerRegistryEntry;(m.onInit||q.noop)();k.oController=this;k.fnViewRegisteredResolve();delete k.fnViewRegisteredResolve;};};o.onInit=function(){this.fnGenericOnInit(this);delete this.fnGenericOnInit;};o.onExit=function(){var v=this.getView().getId();var i=c[v];i.onExit();delete c[v];q.sap.log.info("View "+v+" of template "+s+" exited");};return C.extend(s,o);}function G(o){var e=o.methods.oControllerSpecification;return e&&function(){var f=o.oComponent.getAppComponent();var h=g(f);return d(e.getMethods,o.oComponent.getTemplateName(),e.oControllerDefinition,o.oTemplateUtils,h);};}r=t.testableStatic(r,"TemplateComponent_RegisterAppComponent");return{getTemplateComponent:function(e,s,o){var f=s+".Component";o=o||{};o.init=function(){var h=this.getComponentData().registryEntry;h.viewRegistered=new Promise(function(i){h.fnViewRegisteredResolve=i;});h.oViewRenderedPromise=new Promise(function(i){h.fnViewRenderedResolve=i;});(T.prototype.init||q.noop).apply(this,arguments);h.componentName=f;h.oComponent=this;h.methods=e(this,h.oTemplateUtils)||{};(h.methods.init||q.noop)();};o.preTemplater=function(p){var h=b(this);if(h.methods.preTemplater){return h.methods.preTemplater(p,h.oTemplateUtils);}else{return Promise.resolve();}};o.preTemplaterReject=function(E){var h=b(this);h.fnViewRegisteredResolve();h.oTemplateUtils.getNavigationController().navigateToMessagePage({text:"Application could not be started due to technical issues.",description:E.message});};o.exit=function(){var i=this.getId();var h=b(this);var j=g(this.getAppComponent());var m=h.methods;(m.exit||q.noop)();delete j.oTemplateContract.componentRegistry[i];(T.prototype.exit||q.noop).apply(this,arguments);};o.onBeforeRendering=function(){var h=b(this);(T.prototype.onBeforeRendering||q.noop).bind(this,h).apply(this,arguments);var m=h.methods;(m.onBeforeRendering||q.noop)();};o.onAfterRendering=function(){var h=b(this);if(h.fnViewRenderedResolve&&!h.fnViewRegisteredResolve){h.fnViewRenderedResolve();delete h.fnViewRenderedResolve;}(T.prototype.onAfterRendering||q.noop).bind(this,h).apply(this,arguments);var m=h.methods;(m.onAftereRendering||q.noop)();};o.setContainer=function(){T.prototype.setContainer.apply(this,arguments);var i=this.getId();var h=this.getAppComponent();var j=g(h);if(!j.oTemplateContract.componentRegistry[i]){var k=this.getComponentData();var l=k.registryEntry;delete k.registryEntry;l.componentCreateResolve(this);delete l.componentCreateResolve;j.oTemplateContract.componentRegistry[i]=l;j.oTemplateContract.oBusyHelper.setBusy(l.viewRegistered,true);l.oTemplateUtils=new a(l,j.oTemplateContract);l.createViewController=G(l);(l.methods.setContainer||q.noop)();}};o.onActivate=q.noop;o.onDeactivate=q.noop;o.refreshBinding=q.noop;return T.extend(f,o);},getRegisterAppComponent:function(){var f=r;r=null;return f;}};});
