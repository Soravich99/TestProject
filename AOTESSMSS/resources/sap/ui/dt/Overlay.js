/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Control','sap/ui/dt/MutationObserver','sap/ui/dt/ElementUtil','sap/ui/dt/OverlayUtil','sap/ui/dt/DOMUtil','jquery.sap.dom'],function(q,C,M,E,O,D){"use strict";var o="overlay-container";var a;var m;var b=C.extend("sap.ui.dt.Overlay",{metadata:{library:"sap.ui.dt",properties:{visible:{type:"boolean",defaultValue:true},lazyRendering:{type:"boolean",defaultValue:true},focusable:{type:"boolean",defaultValue:false}},associations:{element:{type:"sap.ui.core.Element"}},aggregations:{designTimeMetadata:{type:"sap.ui.dt.DesignTimeMetadata",multiple:false}},events:{focusableChange:{parameters:{focusable:{type:"boolean"}}},destroyed:{parameters:{}},visibleChanged:{parameters:{visible:"boolean"}}}}});b.getOverlayContainer=function(){if(!a){a=q.sap.byId(o);if(!a.length){a=q("<div id='"+o+"'></div>").appendTo("body");}}return a.get(0);};b.removeOverlayContainer=function(){if(a){a.remove();}a=null;};b.getMutationObserver=function(){if(!m){m=new M();}return m;};b.destroyMutationObserver=function(){if(m){m.destroy();m=null;}};b.prototype.init=function(){this._bVisible=null;this._domRefScrollHandler=this._onSyncScrollWithDomRef.bind(this);this.attachBrowserEvent("scroll",this._onOverlayScroll,this);};b.prototype.exit=function(){var e=this._mGeometry?this._mGeometry.domRef:null;if(e){this._detachDomRefScrollHandler(e);}if(this._aScrollContainers){this._aScrollContainers.forEach(function(s,i){if(this.getElementInstance()){var $=this.getDesignTimeMetadata().getAssociatedDomRef(this.getElementInstance(),s.domRef);if($&&$.length){var S=$.get(0);this._detachDomRefScrollHandler(S);}}window.cancelAnimationFrame(s._iSyncScrollWithDomRef);}.bind(this));}this._restoreVisibility();delete this._oDomRef;delete this._bVisible;window.clearTimeout(this._iCloneDomTimeout);window.cancelAnimationFrame(this._iSyncScrollWithDomRef);this.fireDestroyed();};b.prototype._restoreVisibility=function(){if(this._oCloneDomRefVisibility){sap.ui.dt.Overlay.getMutationObserver().ignoreOnce({target:q(this._oCloneDomRefVisibility.domRef).get(0),type:"attributes"});q(this._oCloneDomRefVisibility.domRef).css("visibility",this._oCloneDomRefVisibility.visibility);delete this._oCloneDomRefVisibility;}};b.prototype._onChildRerenderedEmpty=function(){return true;};b.prototype.onAfterRendering=function(){if(this._aScrollContainers&&!this._oDomRef){this._aScrollContainers.forEach(function(s,i){if(!s.overlayDomRef){s.overlayDomRef=this.$().find('> .sapUiDtOverlayChildren > [data-sap-ui-dt-scrollContainerIndex="'+i+'"]');}}.bind(this));}this._oDomRef=this.getDomRef();if(this._oDomRef){this._updateDom();}var f=this.isFocusable();if(f){this.$().attr("tabindex",0);}else{this.$().attr("tabindex",null);}};b.prototype.getDomRef=function(){return this._oDomRef||C.prototype.getDomRef.apply(this,arguments);};b.prototype.getAssociatedDomRef=function(){throw new Error("This method is abstract and needs to be implemented");};b.prototype.getElementInstance=function(){return E.getElementInstance(this.getElement());};b.prototype.hasFocus=function(){return document.activeElement===this.getFocusDomRef();};b.prototype.setFocusable=function(f){f=!!f;if(this.isFocusable()!==f){this.setProperty("focusable",f);this.toggleStyleClass("sapUiDtOverlayFocusable",f);this.fireFocusableChange({focusable:f});}return this;};b.prototype.isFocusable=function(){return this.getFocusable();};b.prototype.applyStyles=function(){delete this._mGeometry;if(!this._oDomRef){return;}if(!this.isVisible()){this.$().css("display","none");return;}var g=this.getGeometry();if(g&&g.visible){this._ensureDomOrder();var $=this.$();this._setOverlaySize($,g,this.getParent());if(g.domRef){this._handleOverflowScroll(g,$,this.getParent());this._cloneDomRef(g.domRef);}if(this._aScrollContainers&&this._aScrollContainers.length){this._aScrollContainers.forEach(function(s,i){if(this.getDesignTimeMetadata().getAssociatedDomRef(this.getElementInstance(),s.domRef)){var S=this.getDesignTimeMetadata().getAssociatedDomRef(this.getElementInstance(),s.domRef).get(0);this._setOverlaySize(s.overlayDomRef,D.getGeometry(S),this);this._handleOverflowScroll(D.getGeometry(S),s.overlayDomRef,this);this._attachDomRefScrollHandler(s.overlayDomRef,S);}else{this._deleteDummyContainer(s.overlayDomRef);s.scrollEvents=false;s.overlayDomRef.css("display","none");}}.bind(this));}this.getChildren().forEach(function(c){c.applyStyles();});}else{this.$().css("display","none");}};b.prototype._setOverlaySize=function($,g,c){$.css("display","block");var d=(c&&c instanceof b)?c.$():null;if(c._aScrollContainers&&$.attr("class")!=="sapUiDtOverlayScrollContainer"){var s=this._getScrollContainerIndex(c);if(s>-1){var e=c.$().find('> .sapUiDtOverlayChildren > [data-sap-ui-dt-scrollContainerIndex="'+s+'"]');d=e;}}var S=D.getScrollbarWidth();var f=g.size;var p=d?d.scrollTop():null;var P=d?d.scrollLeft():null;var h=d?d.offset():null;if(h&&q('html').attr('dir')==='rtl'&&D.hasVerticalScrollBar(c.getDomRef())){h.left+=S;}var i=D.getOffsetFromParent(g.position,h,p,P);$.css("width",f.width+"px");$.css("height",f.height+"px");$.css("top",i.top+"px");$.css("left",i.left+"px");};b.prototype._deleteDummyContainer=function($){if($.find("> .sapUiDtDummyScrollContainer").length>0){$.find("> .sapUiDtDummyScrollContainer").remove();if(this.getParent()&&this.getParent().$){var c=this.getParent().$();c.removeClass("sapUiDtOverlayWithScrollBar");c.removeClass("sapUiDtOverlayWithScrollBarVertical");c.removeClass("sapUiDtOverlayWithScrollBarHorizontal");}}};b.prototype._handleOverflowScroll=function(g,$,c){var d=g.domRef;var s=g.size;var z=D.getZIndex(d);if(z){$.css("z-index",z);}var e=D.getOverflows(d);if(e){if(e.overflowX){$.css("overflow-x",e.overflowX);}if(e.overflowY){$.css("overflow-y",e.overflowY);}var S=d.scrollHeight;var i=d.scrollWidth;if(S>Math.ceil(s.height)||i>Math.ceil(s.width)){var f=$.find("> .sapUiDtDummyScrollContainer");if(!f.length){f=q("<div class='sapUiDtDummyScrollContainer' style='height: "+S+"px; width: "+i+"px;'></div>");if(c.$&&D.hasVerticalScrollBar(g.domRef)){c.$().addClass("sapUiDtOverlayWithScrollBar");c.$().addClass("sapUiDtOverlayWithScrollBarVertical");}if(c.$&&D.hasHorizontalScrollBar(g.domRef)){c.$().addClass("sapUiDtOverlayWithScrollBar");c.$().addClass("sapUiDtOverlayWithScrollBarHorizontal");}$.append(f);}else{f.css({"height":S,"width":i});}}else{this._deleteDummyContainer($);}this._attachDomRefScrollHandler(g.domRef,$);this._syncScrollWithDomRef(g.domRef,$);}};b.prototype._attachDomRefScrollHandler=function(d,$){this._detachDomRefScrollHandler(d);if(d){q(d).on("scroll",null,[d,$],this._domRefScrollHandler);}};b.prototype._detachDomRefScrollHandler=function(d){if(d){q(d).off("scroll",this._domRefScrollHandler);}};b.prototype._onSyncScrollWithDomRef=function(e){var s=e.data[0];var $=e.data[1];var S;var c=q($).attr("data-sap-ui-dt-scrollcontainerindex")||q(s).attr("data-sap-ui-dt-scrollcontainerindex");if(c){S=this._aScrollContainers[c];}else{S=this;}window.cancelAnimationFrame(S._iSyncScrollWithDomRef);S._iSyncScrollWithDomRef=window.requestAnimationFrame(function(){this._syncScrollWithDomRef(s,$);delete S._iSyncScrollWithDomRef;}.bind(this));};b.prototype._syncScrollWithDomRef=function(d,c){D.syncScroll(d,c);};b.prototype._getScrollContainerIndex=function(c,d){};b.prototype.getGeometry=function(f){if(f||!this._mGeometry){var d=this.getAssociatedDomRef();var c;if(d){var i=this.isRoot();c=q.makeArray(d).map(function($){return D.getGeometry($,i);});}else{c=this.getChildren().map(function(e){return e.getGeometry(true);});}if(c.length){this._mGeometry=c.length>1?O.getGeometry(c):c[0];}else{delete this._mGeometry;}}return this._mGeometry;};b.prototype._cloneDomRef=function(d){var $=this.$();var c=$.find(">.sapUiDtClonedDom");var v=this.getDesignTimeMetadata().getCloneDomRef();if(v){if(d){var f=function(){if(v!==true){d=D.getDomRefForCSSSelector(d,v);}if(!c.length){c=q("<div class='sapUiDtClonedDom'></div>").prependTo($);}else{c.empty();}this._restoreVisibility();D.cloneDOMAndStyles(d,c);this._oCloneDomRefVisibility={domRef:q(d),visibility:q(d).css("visibility")};sap.ui.dt.Overlay.getMutationObserver().ignoreOnce({target:q(d).get(0),type:"attributes"});q(d).css("visibility","hidden");}.bind(this);if(!this._bClonedDom){this._bClonedDom=true;f();}else{window.clearTimeout(this._iCloneDomTimeout);this._iCloneDomTimeout=window.setTimeout(f,0);}}}else{c.remove();}};b.prototype._updateDom=function(){var A;if(!document.getElementById(this.getId())&&document.getElementById(this.getParent().getId())){A=true;}if(this.isRoot()){this._ensureIsInOverlayContainer();this.applyStyles();}else if(A){this.applyStyles();}};b.prototype._ensureDomOrder=function(){var $=this.$();var p=this.getParent();if(!p||!p.$){return;}var c=p.$();var d=c.find(">.sapUiDtOverlayChildren");var s=p.getChildren();var S=this._getScrollContainerIndex(p);if(S>-1){d=d.find('> [data-sap-ui-dt-scrollContainerIndex="'+S+'"]');s=s.filter(function(g){return p._aScrollContainers[S].aggregations.indexOf(g.getAggregationName())>-1;});}var i;var P;var e;var f=s.indexOf(this)-1;while(f>=0){P=this._getScrollContainerIndex(p,s[f]);if(P>-1){e=q(d.children()[f]);}else{e=s[f].$();}if(e.length){break;}f--;}if(e&&e.length){i=$.prev().get(0)===e.get(0);}else{i=d.children().index($)===0;}if(!i){if(e&&e.length){e.after($);}else{d.prepend($);}}};b.prototype._ensureIsInOverlayContainer=function(){var $=this.$();var c=$.parent();var a=b.getOverlayContainer();var p=c.length?c.get(0):null;if(a!==p){$.appendTo(a);}};b.prototype._onOverlayScroll=function(){var g=this.getGeometry();var d=g?g.domRef:null;if(d){D.syncScroll(this.$(),d);}};b.prototype.setVisible=function(v){v=!!v;if(this.getVisible()!==v){if(!v){this._restoreVisibility();}this.setProperty("visible",v);this._bVisible=v;this.fireVisibleChanged({visible:v});}return this;};b.prototype.getVisible=function(){if(this._bVisible===null){if(!this.getLazyRendering()){return true;}var e=this.getElementInstance();if(!e){return false;}var d=this.getDesignTimeMetadata();return d?!d.isIgnored(e):false;}else{return this.getProperty("visible");}};b.prototype.isVisible=function(){return this.getVisible();};b.prototype.isVisibleInDom=function(){return this.$().is(":visible");};b.prototype.isRoot=function(){var p=this.getParent();if(!p||!p.getDomRef){return true;}};return b;},true);
