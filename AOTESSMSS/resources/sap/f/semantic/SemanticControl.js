/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/ManagedObject","sap/ui/core/Element","./SemanticConfiguration"],function(q,M,E,S){"use strict";var a=E.extend("sap.f.semantic.SemanticControl",{metadata:{library:"sap.f","abstract":true,properties:{visible:{type:"boolean",group:"Appearance",defaultValue:true}},aggregations:{_control:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}}}});a.prototype.setProperty=function(k,v,s){M.prototype.setProperty.call(this,k,v,true);this._applyProperty(k,v,s);return this;};a.prototype.updateAggregation=function(n){this._getControl().updateAggregation(n);};a.prototype.refreshAggregation=function(n){this._getControl().refreshAggregation(n);};a.prototype.setAggregation=function(A,o,s){if(A==='_control'){return M.prototype.setAggregation.call(this,A,o,s);}return this._getControl().setAggregation(A,o,s);};a.prototype.getAggregation=function(A,d){if(A==='_control'){return M.prototype.getAggregation.call(this,A,d);}return this._getControl().getAggregation(A,d);};a.prototype.indexOfAggregation=function(A,o){return this._getControl().indexOfAggregation(A,o);};a.prototype.insertAggregation=function(A,o,i,s){return this._getControl().insertAggregation(A,o,i,s);};a.prototype.addAggregation=function(A,o,s){return this._getControl().addAggregation(A,o,s);};a.prototype.removeAggregation=function(A,o,s){return this._getControl().removeAggregation(A,o,s);};a.prototype.removeAllAggregation=function(A,s){return this._getControl().removeAllAggregation(A,s);};a.prototype.destroyAggregation=function(A,s){return this._getControl().destroyAggregation(A,s);};a.prototype.bindAggregation=function(n,b){return this._getControl().bindAggregation(n,b);};a.prototype.unbindAggregation=function(n,s){return this._getControl().unbindAggregation(n,s);};a.prototype.clone=function(i,l){var C=E.prototype.clone.apply(this,arguments);var p=this._getControl().clone(i,l);C.setAggregation('_control',p);return C;};a.prototype.destroy=function(){var r=E.prototype.destroy.apply(this,arguments);if(this.getAggregation("_control")){this.getAggregation("_control").destroy();}return r;};a.prototype.getDomRef=function(s){return this._getControl().getDomRef(s);};a.prototype.addEventDelegate=function(d,t){q.each(d,function(e,C){if(typeof C==='function'){d[e]=function(o){o.srcControl=this;C.call(t,o);}.bind(this);}}.bind(this));this._getControl().addEventDelegate(d,t);return this;};a.prototype.removeEventDelegate=function(d){this._getControl().removeEventDelegate(d);return this;};a.prototype._getConfiguration=function(){return S.getConfiguration(this.getMetadata().getName());};a.prototype._applyProperty=function(k,v,s){var C=this._getControl(),b;if(C){b="set"+c(k);this._getControl()[b](v,s);}};function c(n){return n.charAt(0).toUpperCase()+n.slice(1);}return a;});
