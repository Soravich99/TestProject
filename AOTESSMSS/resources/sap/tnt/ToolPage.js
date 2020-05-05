/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Control','sap/ui/Device','sap/ui/core/ResizeHandler'],function(l,C,D,R){'use strict';var T=C.extend('sap.tnt.ToolPage',{metadata:{library:'sap.tnt',properties:{sideExpanded:{type:'boolean',group:'Misc',defaultValue:true}},aggregations:{header:{type:'sap.tnt.ToolHeader',multiple:false},sideContent:{type:'sap.tnt.SideNavigation',multiple:false},mainContents:{type:'sap.ui.core.Control',multiple:true,singularName:'mainContent'}},events:{}}});T.prototype.toggleSideContentMode=function(){return this.setSideExpanded(!this.getSideExpanded());};T.prototype.setSideExpanded=function(i){var s=this.getAggregation('sideContent');var d=this.getDomRef();this.setProperty('sideExpanded',i,true);if(s){var n=D.system.phone?true:i;s.setExpanded(n);}if(!d){return this;}if(i){d.querySelector('.sapTntToolPageContentWrapper').classList.remove('sapTntToolPageAsideCollapsed');}else{d.querySelector('.sapTntToolPageContentWrapper').classList.add('sapTntToolPageAsideCollapsed');}return this;};T.prototype.onBeforeRendering=function(){this._deregisterControl();};T.prototype.onAfterRendering=function(){this._ResizeHandler=R.register(this.getDomRef(),this._mediaQueryHandler.bind(this));this._updateLastMediaQuery();};T.prototype.exit=function(){this._deregisterControl();};T.prototype._deregisterControl=function(){if(this._ResizeHandler){R.deregister(this._ResizeHandler);this._ResizeHandler=null;}};T.prototype._mediaQueryHandler=function(){var s=this.getAggregation('sideContent');if(s===null){return;}this._currentMediaQuery=this._getDeviceAsString();if(this._getLastMediaQuery()===this._currentMediaQuery){return;}switch(this._currentMediaQuery){case'Combi':this.setSideExpanded(true);break;case'Tablet':this.setSideExpanded(false);break;case'Phone':this.setSideExpanded(false);s.setExpanded(true);break;default:this.setSideExpanded(true);break;}this._updateLastMediaQuery();};T.prototype._getLastMediaQuery=function(){return this._lastMediaQuery;};T.prototype._updateLastMediaQuery=function(){this._lastMediaQuery=this._getDeviceAsString();return this;};T.prototype._getDeviceAsString=function(){if(D.system.combi){return'Combi';}if(D.system.phone){return'Phone';}if(D.system.tablet){return'Tablet';}return'Desktop';};return T;},true);
