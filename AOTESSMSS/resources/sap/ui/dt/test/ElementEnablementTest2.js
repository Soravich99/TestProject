/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/ManagedObject','sap/ui/dt/test/Element','sap/ui/fl/registry/ChangeRegistry'],function(q,M,E,C){"use strict";var a=M.extend("sap.ui.dt.test.ElementEnablementTest2",{metadata:{library:"sap.ui.dt",properties:{type:{type:"string"}}}});a.prototype.init=function(){};a.prototype.exit=function(){};a.prototype.run=function(){return this._setup().then(function(d){var A;this._mResult={name:this.getType(),actions:undefined};if(!this._bError){A=this._testActions(d);}if(A){this._mResult.actions=A;}return this._mResult;}.bind(this));};a.prototype._setup=function(){window.clearTimeout(this._iTimeout);this._bNotSupported=false;this._bError=false;var e=q.sap.getObject(this.getType());return e.getMetadata().loadDesignTime().catch(function(o){this._bError=true;}.bind(this));};a.prototype._testActions=function(d){var A;var p;var m=[];var b=[];var c=false;var e=false;var i=0;if(!d||(!d.actions&&!d.aggregations)){this._bNotSupported=true;}else{if(d.actions){for(var s in d.actions){b[i]=s;m[i]={action:s,aggregation:"self"};i=i+1;}c=true;}if(d.aggregations){for(var f in d.aggregations){var o=d.aggregations[f];if(o.propagateMetadata){p=(p)?p+", "+f:"propagate ("+f;}for(var s in o.actions){i=b.indexOf(s);if(i===-1){b.push(s);i=b.indexOf(s);m[i]={action:s,aggregation:f};}else{m[i].aggregation=m[i].aggregation+", "+f;}e=true;}}}if(!c&&!e){this._bNotSupported=true;return A;}m.forEach(function(g){A=(A)?A+", ":"";A=A+g.action+" ("+g.aggregation+")";});if(p){p=p+")";A=A+" + "+p;}return A;}};return a;},true);
