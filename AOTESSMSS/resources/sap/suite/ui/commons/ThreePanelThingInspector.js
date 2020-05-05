/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./library','sap/ui/ux3/library','sap/ui/ux3/ThingInspector','sap/ui/ux3/ThingInspectorRenderer','sap/suite/ui/commons/ThreePanelThingViewer'],function(l,U,T,a,b){"use strict";var c=T.extend("sap.suite.ui.commons.ThreePanelThingInspector",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{showHeader:{type:"boolean",group:"Misc",defaultValue:true},logo:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},sidebarWidth:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'224px'}},aggregations:{menuContent:{type:"sap.ui.commons.Link",multiple:true,singularName:"menuContent"}}},renderer:a});c.prototype.init=function(){T.prototype.init.apply(this);this._oThingViewer.destroy();this._oThingViewer=new b(this.getId()+"-thingViewer");this.setAggregation("thingViewer",this._oThingViewer);this._oThingViewer.attachFacetSelected(function(e){var i=e.getParameters().item;if(this.fireFacetSelected({id:i.getId(),key:i.getKey(),item:i})){this.setSelectedFacet(i);}else{e.preventDefault();}},this);};c.prototype.setShowHeader=function(s){this._oThingViewer.setShowHeader(s);return this;};c.prototype.getShowHeader=function(){this._oThingViewer.getShowHeader();};c.prototype.setLogo=function(u){this._oThingViewer.setLogo(u);return this;};c.prototype.getLogo=function(){this._oThingViewer.getLogo();};c.prototype.getSidebarWidth=function(){this._oThingViewer.getSidebarWidth();};c.prototype.setSidebarWidth=function(w){this._oThingViewer.setSidebarWidth(w);return this;};c.prototype.addMenuContent=function(C){this._oThingViewer.addMenuContent(C);return this;};c.prototype.insertMenuContent=function(C,i){this._oThingViewer.insertMenuContent(C,i);return this;};c.prototype.getMenuContent=function(){return this._oThingViewer.getMenuContent();};c.prototype.removeMenuContent=function(C){return this._oThingViewer.removeMenuContent(C);};c.prototype.removeAllMenuContent=function(){return this._oThingViewer.removeAllMenuContent();};c.prototype.indexOfMenuContent=function(C){return this._oThingViewer.indexOfMenuContent(C);};c.prototype.destroyMenuContent=function(){this._oThingViewer.destroyMenuContent();return this;};return c;});
