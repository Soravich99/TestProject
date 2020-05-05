/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/dt/test/Test','sap/ui/dt/DesignTime','sap/ui/dt/test/Element'],function(q,T,D,E){"use strict";function t(){return new Promise(function(r){function o(){sap.ui.getCore().detachThemeChanged(o);r();}sap.ui.getCore().attachThemeChanged(o);});}function w(){if(sap.ui.getCore().isThemeApplied()){return Promise.resolve();}else{return t();}}var a=T.extend("sap.ui.dt.test.ElementEnablementTest",{metadata:{library:"sap.ui.dt",properties:{type:{type:"string"},create:{type:"any"},timeout:{type:"int",defaultValue:0},groupPostfix:{type:"string"}}}});a.prototype.init=function(){this._aAggregatedTestResult=null;this._aAggregatedInfoResult=null;this._sAggregation=null;this._$TestAreaDomRef=null;};a.prototype.exit=function(){if(this._oDesignTime){this._oDesignTime.destroy();}window.clearTimeout(this._iTimeout);this._oElement.destroy();if(this._$TestAreaDomRef){this._$TestAreaDomRef.remove();delete this._$TestAreaDomRef;}};a.prototype.run=function(){return this._setup().then(function(){this._mResult=this.createSuite("Element Enablement Test");var e=this.addGroup(this._mResult.children,this.getType(),"Given that a DesignTime is created for "+this.getType());this._testAggregations(e.children);this._mResult=this.aggregate(this._mResult);return this._mResult;}.bind(this));};a.prototype._createElement=function(){var s=this.getType();var c=this.getCreate();var b=q.sap.getObject(s);var e;if(c){e=c();}else{e=new b();}if(e.addStyleClass){e.addStyleClass("minSize");}return e;};a.prototype._getTestArea=function(){if(!this._$TestAreaDomRef){this._$TestAreaDomRef=q("<div id='"+this.getId()+"--testArea"+"'></div>").css({height:"500px",width:"1000px"}).appendTo("body");}return this._$TestAreaDomRef;};a.prototype._setup=function(){window.clearTimeout(this._iTimeout);this._bNoRenderer=false;this._bErrorDuringRendering=false;return new Promise(function(r,R){w().then(function(){this._oElement=this._createElement();try{this._oElement.getRenderer();}catch(e){this._bNoRenderer=true;}if(!this._bNoRenderer){try{this._oElement.placeAt(this._getTestArea().get(0));sap.ui.getCore().applyChanges();}catch(e){this._bErrorDuringRendering=true;}if(!this._bErrorDuringRendering){this._oDesignTime=new D({rootElements:[this._oElement]});this._oDesignTime.attachEventOnce("synced",function(){sap.ui.getCore().applyChanges();if(this.getTimeout()){this._iTimeout=window.setTimeout(function(){r();},this.getTimeout());}else{r();}},this);}else{r();}}else{r();}}.bind(this));}.bind(this));};a.prototype._testAggregations=function(b){var A=this.addGroup(b,"Aggregations","Each aggregation needs to be ignored or has a visible domRef maintained in the metadata",this.getGroupPostfix());if(this._bNoRenderer){this.addTest(A.children,true,"Control has no renderer","Control has no renderer, not supported by the element test (requires a special element test)",T.STATUS.UNKNOWN);}else if(this._bErrorDuringRendering){this.addTest(A.children,true,"Error during rendering","Element can't be rendered, not supported by the DesignTime (please, provide a create method for this element)",T.STATUS.ERROR);}else{var m=E.getAggregationsInfo(this._oElement);for(var s in m){var c=m[s];var d=this.addGroup(A.children,s,(c.ignored?"Aggregation ignored":"Aggregation tests"));if(!c.ignored){this.addTest(d.children,c.overlayVisible,"Overlay Visible","Overlay domRef is visible in DOM");if(c.domRefDeclared){this.addTest(d.children,c.domRefDeclared,"Dom Ref Declared","DomRef is declared in design time metadata");this.addTest(d.children,c.domRefFound,"Dom Ref Found","Declared DomRef is found in DOM");this.addTest(d.children,c.domRefVisible,"Dom Ref Visible","Declared DomRef is visible");}else if(c.overlayVisible){this.addTest(d.children,c.overlayGeometryCalculatedByChildren,"Overlay Geometry calculated by children","Control might work based on DT Heuristic, but safer with domRefDeclared",T.STATUS.PARTIAL_SUPPORTED);}else{this.addTest(d.children,false,"Overlay Dom Ref","Overlay domRef is not declared and aggregation overlay is not visible (please, declare domRef for this aggregation)",T.STATUS.PARTIAL_SUPPORTED);}if(c.overlayTooSmall){this.addTest(d.children,false,"Overlay too small","Aggregation Overlay is too small to be accessible, please ensure to render it big enough that it can be reach by a user. If content is needed, provide a create method for this element",T.STATUS.PARTIAL_SUPPORTED);}}}}};return a;},true);
