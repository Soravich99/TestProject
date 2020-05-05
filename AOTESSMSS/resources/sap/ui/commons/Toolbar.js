/*!
 # * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control','sap/ui/core/Popup','sap/ui/core/delegate/ItemNavigation','./ToolbarRenderer'],function(q,l,C,P,I,T){"use strict";var a=C.extend("sap.ui.commons.Toolbar",{metadata:{interfaces:["sap.ui.core.Toolbar"],library:"sap.ui.commons",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'auto'},design:{type:"sap.ui.commons.ToolbarDesign",group:"Appearance",defaultValue:sap.ui.commons.ToolbarDesign.Flat},standalone:{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.commons.ToolbarItem",multiple:true,singularName:"item"},rightItems:{type:"sap.ui.commons.ToolbarItem",multiple:true,singularName:"rightItem"}}}});a.prototype.init=function(){this.bOpen=false;this.oDomRef=null;this.oInnerRef=null;this.oOverflowDomRef=null;this._oOverflowPopup=null;this.sOriginalStylePropertyWidth=null;this.bHasRightItems=false;this._bRendering=false;this.bRtl=sap.ui.getCore().getConfiguration().getRTL();this._detectVisibleItemCountChangeTimer=null;var t=this;this.oItemDelegate={onAfterRendering:q.proxy(t._itemRendered,t)};this.data("sap-ui-fastnavgroup","true",true);};a.prototype.onBeforeRendering=function(){T.emptyOverflowPopup(this,false);this.cleanup();this.$("mn").unbind("keydown",this._handleKeyDown);this.bFirstTime=true;this._bRendering=true;};a.prototype.onAfterRendering=function(){this._bRendering=false;this.oDomRef=this.getDomRef();this.oInnerRef=this.oDomRef.firstChild.firstChild;q(this.oInnerRef).css("visibility","visible");var o=this.getId()+"-mn";this.oOverflowDomRef=q.sap.domById(o);if(!this.oItemNavigation){this.oItemNavigation=new I();this.addDelegate(this.oItemNavigation);}this.$("mn").bind("keydown",q.proxy(this._handleKeyDown,this));this.sResizeListenerId=sap.ui.core.ResizeHandler.register(this.oDomRef,q.proxy(this.ontoolbarresize,this));var R=this.getRightItems().length;this.bHasRightItems=R>0;if(this.bHasRightItems){this.sRightSideResizeListenerId=sap.ui.core.ResizeHandler.register(this.oDomRef.lastChild,q.proxy(this.onrightsideresize,this));this.updateAfterResize(true);this._observeVisibleItemCountChange(40);}else{this.updateAfterResize(true);this._observeVisibleItemCountChange(350);}};a.prototype._handleKeyDown=function(e){if((e.keyCode==q.sap.KeyCodes.SPACE)&&(e.target.id===this.getId()+"-mn")){this.handleOverflowButtonTriggered();e.preventDefault();e.stopPropagation();}};a.prototype.exit=function(){this.cleanup();if(this.oItemNavigation){this.removeDelegate(this.oItemNavigation);this.oItemNavigation.destroy();delete this.oItemNavigation;}this.oItemDelegate=undefined;q(window).unbind("resize",this.onwindowresize);r.call(this);};a.prototype.updateAfterResize=function(d){if(this._bRendering){return;}var v=this.getVisibleItemInfo();this._oLastVisibleItem=v.oLastVisibleItem;this._oFirstInvisibleItem=v.oFirstInvisibleItem;this._iLastVisibleItemTop=v.iLastVisibleItemTop;this.updateItemNavigation(v.iAllItemsBeforeBreak,d);this.updateOverflowIcon(v.bOverflow);if(this.sUpdateItemNavigationTimer){q.sap.clearDelayedCall(this.sUpdateItemNavigationTimer);this.sUpdateItemNavigationTimer=null;}};a.prototype._detectVisibleItemCountChange=function(){if(!this.getDomRef()){if(this._detectVisibleItemCountChangeTimer){q.sap.clearDelayedCall(this._detectVisibleItemCountChangeTimer);this._detectVisibleItemCountChangeTimer=null;}return;}if(this._oLastVisibleItem&&this._oFirstInvisibleItem){var d=this._oLastVisibleItem.offsetLeft;var f=this._oFirstInvisibleItem.offsetLeft;var e=this._oLastVisibleItem.offsetTop;var i=this.bRtl?(f<d):(f>d);if((e!=this._iLastVisibleItemTop)||(!this.bOpen&&i)){if(this.bOpen){this.closePopup(true);}this.updateAfterResize(false);}}else if(this._oLastVisibleItem&&!this._oFirstInvisibleItem){if(this._oLastVisibleItem.offsetTop!=this._iLastVisibleItemTop){this.updateAfterResize(false);}}this._observeVisibleItemCountChange(350);if(this.bFirstTime&&this.bHasRightItems){this.onrightsideresize();this.bFirstTime=false;}};a.prototype._observeVisibleItemCountChange=function(i){this._detectVisibleItemCountChangeTimer=q.sap.delayedCall(i,this,"_detectVisibleItemCountChange");};a.prototype.updateItemNavigation=function(A,d){this.oItemNavigation.setRootDomRef(this.oDomRef);var L=g.call(this);var e=[];for(var i=0;i<A;i++){var D=L[i].getFocusDomRef();if(D){e.push(D);}}e.push(this.oOverflowDomRef);this.iLeftItemDomRefCount=e.length;var R=this.getRightItems();for(var i=0;i<R.length;i++){var D=R[i].getFocusDomRef();if(D){e.push(D);}}this.oItemNavigation.setItemDomRefs(e);this.iItemDomRefCount=e.length;if(d){for(var i=A;i<L.length;i++){var D=L[i].getFocusDomRef();var $=q(D);if(D&&($.attr("tabindex")=="0")){$.attr("tabIndex",-1);}}}};a.prototype.getVisibleItemInfo=function(d){var v=0;if(this.oInnerRef){var e=d?this.oInnerRef.childNodes:this.oInnerRef.parentNode.querySelectorAll("#"+this.oInnerRef.id+' > :not(.sapUiHiddenPlaceholder)');this.bRtl=sap.ui.getCore().getConfiguration().getRTL();var L,E,f=0,h,j,k=0,o=null,F=null,m,A,O=false;for(var i=1,n=e.length;i<n;i++){E=e[i];h=E.offsetLeft;if(i==1){j=e[0].offsetWidth;k=e[0].offsetLeft;}if(this.bRtl){f=E.offsetWidth;L=!b.call(this,E)&&(h+f>=k+j);}else{L=!b.call(this,E)&&(h<=k)&&(E.offsetTop>e[0].offsetTop);}if(L){v=i;o=e[i-1];F=E;m=o.offsetTop;O=true;break;}else if(b.call(this,E)){v=i;o=e[i-1];F=null;m=o.offsetTop;O=false;break;}else{k=h;j=f;}}A=c.call(this,o);}return{"count":v,"oLastVisibleItem":o,"oFirstInvisibleItem":F,"iLastVisibleItemTop":m,"iAllItemsBeforeBreak":A,"bOverflow":O};};a.prototype.updateOverflowIcon=function(o){this.oOverflowDomRef.style.display=o||this.bOpen?"block":"none";};a.prototype.onclick=function(e){if(e.target.id===this.getId()+"-mn"){this.handleOverflowButtonTriggered();e.preventDefault();e.stopPropagation();}};a.prototype.onsapdown=function(e){if(e.target.id===this.getId()+"-mn"){if(!this.bOpen){this.handleOverflowButtonTriggered();e.preventDefault();e.stopImmediatePropagation();}}};a.prototype.onsapup=function(e){if(e.target.id===this.getId()+"-mn"){if(this.bOpen){this.handleOverflowButtonTriggered();e.preventDefault();e.stopPropagation();}}};a.prototype.handleOverflowButtonTriggered=function(){if(!this.bPopupInitialized){this._oOverflowPopup=new sap.ui.commons.ToolbarOverflowPopup(this);this.popup=new P(this._oOverflowPopup,false,true,true);this.popup.setAutoCloseAreas([this.getId()+"-mn"]);this.bPopupInitialized=true;}if(this.bOpen){this.closePopup(false);}else{this.openPopup();}};a.prototype.openPopup=function(){this.getRenderer().setActive(this);var d=q(this.getDomRef());this.sOriginalStylePropertyWidth=d.prop('style').width;d.width(d.width());T.fillOverflowPopup(this);this.popup.attachEvent("opened",this.handlePopupOpened,this);this.popup.attachEvent("closed",this.handlePopupClosed,this);q(window).bind("resize",q.proxy(this.onwindowresize,this));var D=0;this.popup.open(D,P.Dock.EndTop,P.Dock.EndBottom,this.$("mn"),"","fit",true);};a.prototype.handlePopupOpened=function(){var L=g.call(this);var A=this.getVisibleItemInfo().iAllItemsBeforeBreak;this.bOpen=true;var n=[];for(var i=A;i<L.length;i++){var d=L[i].getFocusDomRef();if(d){n.push(d);}}this.popup.getContent().initItemNavigation(n);};a.prototype.closePopup=function(R){this._bResetFocus=R;this.popup.close();q(window).unbind("resize",this.onwindowresize);};a.prototype.handlePopupClosed=function(){this.getRenderer().unsetActive(this);this.bOpen=false;T.emptyOverflowPopup(this);var A=this.getVisibleItemInfo().iAllItemsBeforeBreak;this.updateItemNavigation(A,true);if(this._bResetFocus){this.oItemNavigation.focusItem(this.iLeftItemDomRefCount-1);}this._bResetFocus=false;};a.prototype.prepareFocusInfoRedirect=function(o){if(o&&!o._orig_getFocusInfo){var i=this.getId();o._orig_getFocusInfo=o.getFocusInfo;o.getFocusInfo=function(){return{id:i,childInfo:this._orig_getFocusInfo()};};var t=this;o._orig_applyFocusInfo=o.applyFocusInfo;o.applyFocusInfo=function(f){return t.applyFocusInfo(f.childInfo);};}return o;};a.prototype.cleanupFocusInfoRedirect=function(o){if(o){o.getFocusInfo=o._orig_getFocusInfo;delete o._orig_getFocusInfo;delete o._orig_applyFocusInfo;}return o;};a.prototype.insertItem=function(i,d){this.insertAggregation("items",this.prepareFocusInfoRedirect(i),d);i.addDelegate(this.oItemDelegate);return this;};a.prototype.addItem=function(i){this.addAggregation("items",this.prepareFocusInfoRedirect(i));i.addDelegate(this.oItemDelegate);return this;};a.prototype.removeItem=function(e){var t=this.removeAggregation("items",e);t.removeDelegate(this.oItemDelegate);return this.cleanupFocusInfoRedirect(t);};a.prototype.removeAllItems=function(){var t=this.removeAllAggregation("items");for(var i=0,L=t.length;i<L;i++){t[i]=this.cleanupFocusInfoRedirect(t[i]);t[i].removeDelegate(this.oItemDelegate);}return t;};a.prototype.insertRightItem=function(i,d){this.insertAggregation("rightItems",this.prepareFocusInfoRedirect(i),d);i.addDelegate(this.oItemDelegate);return this;};a.prototype.addRightItem=function(i){this.addAggregation("rightItems",this.prepareFocusInfoRedirect(i));i.addDelegate(this.oItemDelegate);return this;};a.prototype.removeRightItem=function(e){var t=this.removeAggregation("rightItems",e);t.removeDelegate(this.oItemDelegate);return this.cleanupFocusInfoRedirect(t);};a.prototype.removeAllRightItems=function(){var t=this.removeAllAggregation("rightItems");for(var i=0,L=t.length;i<L;i++){t[i]=this.cleanupFocusInfoRedirect(t[i]);t[i].removeDelegate(this.oItemDelegate);}return t;};a.prototype.getFocusInfo=function(){var i=this.getId();if(this.bOpen){return{id:i,childId:i};}else{return{id:i};}};a.prototype.applyFocusInfo=function(f){if(f){var s=f.childId;if(this.bOpen&&s){if(s===this.getId()){return;}var o=sap.ui.getCore().byId(s);var d;if(o&&this.popup&&(d=this.popup.getContent())&&q.sap.containsOrEquals(d.getDomRef(),o.getDomRef())){d.applyFocusInfo(f.childInfo);return;}}}this.focus();};sap.ui.core.Element.extend("sap.ui.commons.ToolbarOverflowPopup",{constructor:function(t){this.oToolbar=t;var i=t.getId()+"-pu";sap.ui.core.Element.call(this,i);},exit:function(){this.$().remove();},initItemNavigation:function(n){if(!this.oItemNavigation){this.oItemNavigation=new I();this.addDelegate(this.oItemNavigation);}this.oItemNavigation.setRootDomRef(T.getPopupArea(this.oToolbar));this.oItemNavigation.setItemDomRefs(n);this.oItemNavigation.focusItem(0);},getDomRef:function(){var p=T.getPopupArea(this.oToolbar);if(p){return p.parentNode;}else{return null;}},isActive:function(){return T.getPopupArea(this.oToolbar)!=null;},onsapescape:function(e){this.oToolbar.closePopup(true);},onsaptabnext:function(e){this.oToolbar.closePopup(true);e.preventDefault();e.stopPropagation();},onsaptabprevious:function(e){this.oToolbar.closePopup(true);e.preventDefault();e.stopPropagation();}});a.prototype._itemRendered=function(){if(this.oItemNavigation){this.updateAfterResize(true);}else{if(!this.sUpdateItemNavigationTimer){this.sUpdateItemNavigationTimer=q.sap.delayedCall(0,this,"updateAfterResize",[true]);}}};a.prototype.onwindowresize=function(e){if(this.bOpen){this.closePopup(true);}};a.prototype.ontoolbarresize=function(e){if(this.bOpen){this.closePopup(true);}};a.prototype.onrightsideresize=function(){if(!this.getDomRef()){this.cleanup();return;}if(this.getRightItems().length>0){var R=this.oDomRef.lastChild;var i=R.offsetWidth;if(this.bRtl){q(this.oInnerRef).css("margin-left",(i+10)+"px");}else{q(this.oInnerRef).css("margin-right",(i+10)+"px");}var f=this.oDomRef.firstChild.firstChild.firstChild;var o=this.getDomRef("mn").offsetWidth;var m=f.offsetWidth+i+o+20;q(this.oDomRef).css("min-width",m+"px");q(this.oInnerRef).css("visibility","visible");}};a.prototype.cleanup=function(){if(this._detectVisibleItemCountChangeTimer){q.sap.clearDelayedCall(this._detectVisibleItemCountChangeTimer);this._detectVisibleItemCountChangeTimer=null;}if(this.sUpdateItemNavigationTimer){q.sap.clearDelayedCall(this.sUpdateItemNavigationTimer);this.sUpdateItemNavigationTimer=null;}if(this.sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);this.sResizeListenerId=null;}if(this.sRightSideResizeListenerId){sap.ui.core.ResizeHandler.deregister(this.sRightSideResizeListenerId);this.sRightSideResizeListenerId=null;}};function g(){var i=[];this.getItems().forEach(function(d){if(d instanceof sap.ui.commons.ToolbarSeparator||d.getVisible()){i.push(d);}});return i;}function b(e){var o=this.getId()+"-mn";return e.id===o;}function c(L){var A=0;var d=g.call(this);d.forEach(function(e,i){if(e.getDomRef()===L){A=i+1;return false;}});return A;}return a;function r(){if(this.bPopupInitialized){this._oOverflowPopup.destroy();this._oOverflowPopup=null;this.popup.detachOpened(this.handlePopupOpened,this);this.popup.detachClosed(this.handlePopupClosed,this);this.popup.destroy();this.popup=null;this.bPopupInitialized=false;}}},true);
