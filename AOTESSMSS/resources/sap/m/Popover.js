/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./Bar','./Button','./InstanceManager','./library','sap/ui/core/Control','sap/ui/core/Popup','sap/ui/core/delegate/ScrollEnablement','sap/ui/core/theming/Parameters','sap/ui/Device','sap/ui/base/ManagedObject','sap/ui/core/library','sap/ui/core/Element','sap/ui/core/ResizeHandler','jquery.sap.keycodes'],function(q,B,a,I,l,C,P,S,b,D,M,c,E,R){"use strict";var d=l.PopupHelper;var O=c.OpenState;var f=l.PlacementType;var g=C.extend("sap.m.Popover",{metadata:{interfaces:["sap.ui.core.PopupInterface"],library:"sap.m",properties:{placement:{type:"sap.m.PlacementType",group:"Behavior",defaultValue:f.Right},showHeader:{type:"boolean",group:"Appearance",defaultValue:true},title:{type:"string",group:"Appearance",defaultValue:null},modal:{type:"boolean",group:"Behavior",defaultValue:false},offsetX:{type:"int",group:"Appearance",defaultValue:0},offsetY:{type:"int",group:"Appearance",defaultValue:0},showArrow:{type:"boolean",group:"Appearance",defaultValue:true},contentWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},contentMinWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},contentHeight:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},enableScrolling:{type:"boolean",group:"Misc",defaultValue:true,deprecated:true},verticalScrolling:{type:"boolean",group:"Misc",defaultValue:true},horizontalScrolling:{type:"boolean",group:"Misc",defaultValue:true},bounce:{type:"boolean",group:"Behavior",defaultValue:null},resizable:{type:"boolean",group:"Dimension",defaultValue:false}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"},customHeader:{type:"sap.ui.core.Control",multiple:false},subHeader:{type:"sap.ui.core.Control",multiple:false},footer:{type:"sap.ui.core.Control",multiple:false},_internalHeader:{type:"sap.m.Bar",multiple:false,visibility:"hidden"},beginButton:{type:"sap.ui.core.Control",multiple:false},endButton:{type:"sap.ui.core.Control",multiple:false}},associations:{leftButton:{type:"sap.m.Button",multiple:false,deprecated:true},rightButton:{type:"sap.m.Button",multiple:false,deprecated:true},initialFocus:{type:"sap.ui.core.Control",multiple:false},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"}},events:{afterOpen:{parameters:{openBy:{type:"sap.ui.core.Control"}}},afterClose:{parameters:{openBy:{type:"sap.ui.core.Control"}}},beforeOpen:{parameters:{openBy:{type:"sap.ui.core.Control"}}},beforeClose:{parameters:{openBy:{type:"sap.ui.core.Control"}}}},designTime:true}});g._bIE9=(D.browser.internet_explorer&&D.browser.version<10);g._bIOS7=D.os.ios&&D.os.version>=7&&D.os.version<8&&D.browser.name==="sf";g.prototype.init=function(){this._arrowOffsetThreshold=4;this._marginTopInit=false;this._marginTop=48;this._marginLeft=10;this._marginRight=10;this._marginBottom=10;this._minDimensions={width:100,height:32};this._$window=q(window);this._initialWindowDimensions={};this.oPopup=new P();this.oPopup.setShadow(true);this.oPopup.setAutoClose(true);this.oPopup.setAnimations(q.proxy(this._openAnimation,this),q.proxy(this._closeAnimation,this));this._placements=[f.Top,f.Right,f.Bottom,f.Left,f.Vertical,f.Horizontal,f.Auto,f.VerticalPreferedTop,f.VerticalPreferedBottom,f.HorizontalPreferedLeft,f.HorizontalPreferedRight,f.VerticalPreferredTop,f.VerticalPreferredBottom,f.HorizontalPreferredLeft,f.HorizontalPreferredRight,f.PreferredRightOrFlip,f.PreferredLeftOrFlip,f.PreferredTopOrFlip,f.PreferredBottomOrFlip];this._myPositions=["center bottom","begin center","center top","end center"];this._atPositions=["center top","end center","center bottom","begin center"];this._offsets=["0 -18","18 0","0 18","-18 0"];this._arrowOffset=18;this._followOfTolerance=32;this._scrollContentList=[sap.m.NavContainer,sap.m.Page,sap.m.ScrollContainer];this._fnAdjustPositionAndArrow=q.proxy(this._adjustPositionAndArrow,this);this._fnOrientationChange=q.proxy(this._onOrientationChange,this);this._fnFollowOf=q.proxy(function(i){var L=i.lastOfRect,r=i.currentOfRect;if(!D.system.desktop||(Math.abs(L.top-r.top)<=this._followOfTolerance&&Math.abs(L.left-r.left)<=this._followOfTolerance)||(Math.abs(L.top+L.height-r.top-r.height)<=this._followOfTolerance&&Math.abs(L.left+L.width-r.left-r.width)<=this._followOfTolerance)){this.oPopup._applyPosition(this.oPopup._oLastPosition,true);}else{this.close();}},this);this.setFollowOf(true);this._oRestoreFocusDelegate={onBeforeRendering:function(){var A=q(document.activeElement),o=A.control(0);this._sFocusControlId=o&&o.getId();},onAfterRendering:function(){if(this._sFocusControlId&&!q.sap.containsOrEquals(this.getDomRef(),document.activeElement)){sap.ui.getCore().byId(this._sFocusControlId).focus();}}};var t=this;this.oPopup._applyPosition=function(p,F){var e=this.getOpenState(),o;if(e===O.CLOSING||e===O.CLOSED){return;}if(F){t._storeScrollPosition();}t._clearCSSStyles();var i=q.inArray(t.getPlacement(),t._placements);if(i>3&&!t._bPosCalced){t._calcPlacement();return;}t._bPosCalced=false;if(t._oOpenBy instanceof E){p.of=t._getOpenByDomRef();}if(!p.of){q.sap.log.warning("sap.m.Popover: in function applyPosition, the openBy element doesn't have any DOM output. "+t);return;}if(!q.sap.containsOrEquals(document.documentElement,p.of)&&p.of.id){o=q.sap.byId(p.of.id);if(o){p.of=o;}else{q.sap.log.warning("sap.m.Popover: in function applyPosition, the openBy element's DOM is already detached from DOM tree and can't be found again by the same id. "+t);return;}}var r=q(p.of).rect();if(F&&t._$window.height()==t._initialWindowDimensions.height&&(r.top+r.height<=0||r.top>=t._$window.height()||r.left+r.width<=0||r.left>=t._$window.width())){t.close();return;}var s=t.getDomRef("scroll");if(!D.system.desktop){q(window).scrollLeft(0);}t._deregisterContentResizeHandler();P.prototype._applyPosition.call(this,p);t._fnAdjustPositionAndArrow();t._restoreScrollPosition();t._registerContentResizeHandler(s);};this.oPopup.close=function(e){var h=typeof e==="boolean";if(e!==true&&(this.touchEnabled||!this._isFocusInsidePopup())&&this.isOpen()){t.fireBeforeClose({openBy:t._oOpenBy});}t._deregisterContentResizeHandler();P.prototype.close.apply(this,h?[]:arguments);t.removeDelegate(t._oRestoreFocusDelegate);};};g.prototype.onBeforeRendering=function(){var n,p;if(!this._initialWindowDimensions.width||!this._initialWindowDimensions.height){this._initialWindowDimensions={width:this._$window.width(),height:this._$window.height()};}if(!this.getHorizontalScrolling()&&!this.getVerticalScrolling()){this._forceDisableScrolling=true;}else if(!this._bVScrollingEnabled&&!this._bHScrollingEnabled&&this._hasSingleScrollableContent()){this._forceDisableScrolling=true;q.sap.log.info("VerticalScrolling and horizontalScrolling in sap.m.Popover with ID "+this.getId()+" has been disabled because there's scrollable content inside");}else{this._forceDisableScrolling=false;}if(!this._forceDisableScrolling){if(!this._oScroller){this._oScroller=new S(this,this.getId()+"-scroll",{horizontal:this.getHorizontalScrolling(),vertical:this.getVerticalScrolling()});}}if(this._bContentChanged){this._bContentChanged=false;n=this._getSingleNavContent();p=this._getSinglePageContent();if(n&&!this.getModal()&&!D.support.touch&&!q.sap.simulateMobileOnDesktop){n.attachEvent("afterNavigate",function(e){q.sap.focus(this.getDomRef());},this);}if(n||p){p=p||n.getCurrentPage();if(p&&p._getAnyHeader){this.addStyleClass("sapMPopoverWithHeaderCont");}if(n){n.attachEvent("navigate",function(e){var o=e.getParameter("to");if(o instanceof sap.m.Page){this.$().toggleClass("sapMPopoverWithHeaderCont",!!o._getAnyHeader());}},this);}}}};g.prototype.onAfterRendering=function(){var $,e,h;if(!this._marginTopInit&&this.getShowArrow()){this._marginTop=2;if(this._oOpenBy){$=q(this._getOpenByDomRef());if(!($.closest("header.sapMIBar").length>0)){e=$.closest(".sapMPage");if(e.length>0){h=e.children("header.sapMIBar");if(h.length>0){this._marginTop+=h.outerHeight();}}}this._marginTopInit=true;}}};g.prototype.exit=function(){this._deregisterContentResizeHandler();D.resize.detachHandler(this._fnOrientationChange);I.removePopoverInstance(this);this.removeDelegate(this._oRestoreFocusDelegate);this._oRestoreFocusDelegate=null;if(this.oPopup){this.oPopup.detachClosed(this._handleClosed,this);this.oPopup.destroy();this.oPopup=null;}if(this._oScroller){this._oScroller.destroy();this._oScroller=null;}if(this._internalHeader){this._internalHeader.destroy();this._internalHeader=null;}if(this._headerTitle){this._headerTitle.destroy();this._headerTitle=null;}};g.prototype.openBy=function(o,s){var p=this.oPopup,e=this.oPopup.getOpenState(),F=this._getInitialFocusId(),h,i,j,k;h=(o.getDomRef&&o.getDomRef())||o;k=q(h).closest(".sapUiSizeCompact");j=b.get("_sap_m_Popover_ForceCompactArrowOffset")==="true";this._bSizeCompact=l._bSizeCompact||!!k.length||this.hasStyleClass("sapUiSizeCompact");this._bUseCompactArrow=this._bSizeCompact||j;this._adaptPositionParams();if(e===O.OPEN||e===O.OPENING){if(this._oOpenBy===o){return this;}else{var m=function(){p.detachClosed(m,this);this.openBy(o);};p.attachClosed(m,this);this.close();return this;}}if(!o){return this;}if(D.support.touch){D.resize.attachHandler(this._fnOrientationChange);}if(!this._oOpenBy||o!==this._oOpenBy){this._oOpenBy=o;}this.fireBeforeOpen({openBy:this._oOpenBy});p.attachOpened(this._handleOpened,this);p.attachClosed(this._handleClosed,this);p.setInitialFocusId(F);i=q.inArray(this.getPlacement(),this._placements);if(i>-1){h=this._getOpenByDomRef();if(!h){q.sap.log.error("sap.m.Popover id = "+this.getId()+": is opened by a control which isn't rendered yet.");return this;}p.setAutoCloseAreas([o]);p.setContent(this);if(i<=3){p.setPosition(this._myPositions[i],this._atPositions[i],h,this._calcOffset(this._offsets[i]),"fit");}else{p._oPosition.of=h;}var t=this;var n=function(){if(p.getOpenState()===O.CLOSING){if(t._sOpenTimeout){clearTimeout(t._sOpenTimeout);t._sOpenTimeout=null;}t._sOpenTimeout=setTimeout(n,150);}else{t._oPreviousFocus=P.getCurrentFocusInfo();p.open();t.addDelegate(t._oRestoreFocusDelegate,t);if(!s){I.addPopoverInstance(t);}}};n();}else{q.sap.log.error(this.getPlacement()+"is not a valid value! It can only be top, right, bottom or left");}return this;};g.prototype.close=function(){var e=this.oPopup.getOpenState(),s,A;if(e===O.CLOSED||e===O.CLOSING){return this;}this.fireBeforeClose({openBy:this._oOpenBy});this.oPopup.close(true);if(this._oPreviousFocus){A=document.activeElement||{};s=(this._oPreviousFocus.sFocusId===sap.ui.getCore().getCurrentFocusedControlId())||(this._oPreviousFocus.sFocusId===A.id);if(!s){P.applyFocusInfo(this._oPreviousFocus);this._oPreviousFocus=null;}}return this;};g.prototype.isOpen=function(){return this.oPopup&&this.oPopup.isOpen();};g.prototype.setFollowOf=function(v){if(v){this.oPopup.setFollowOf(this._fnFollowOf);}else{this.oPopup.setFollowOf(false);}return this;};g.prototype._clearCSSStyles=function(){var s=this.getDomRef().style,$=this.$("cont"),e=$.children(".sapMPopoverScroll"),o=$[0].style,h=e[0].style,i=this.getContentWidth(),j=this.getContentHeight(),k=this.$("arrow"),w,W;if(i.indexOf("%")>0){w=this._$window.width();i=d.calcPercentageSize(i,w);}if(j.indexOf("%")>0){W=this._$window.height();j=d.calcPercentageSize(j,W);}o.width=i||"";o.height=j||"";o.maxWidth="";o.maxHeight="";s.left="";s.right="";s.top="";s.bottom="";s.width="";s.height="";h.width="";h.display="";k.removeClass("sapMPopoverArrRight sapMPopoverArrLeft sapMPopoverArrDown sapMPopoverArrUp sapMPopoverCrossArr sapMPopoverFooterAlignArr sapMPopoverHeaderAlignArr sapContrast sapContrastPlus");k.css({left:"",top:""});};g.prototype._onOrientationChange=function(){var e=this.oPopup.getOpenState();if(!(e===O.OPEN||e===O.OPENING)){return;}this.oPopup._applyPosition(this.oPopup._oLastPosition,true);};g.prototype._handleOpened=function(){var t=this;this.oPopup.detachOpened(this._handleOpened,this);if(!D.support.touch){setTimeout(function(){D.resize.attachHandler(t._fnOrientationChange);},0);}var F=this._getInitialFocusId(),o=sap.ui.getCore().byId(F);q.sap.focus(o?o.getFocusDomRef():q.sap.domById(F));this.fireAfterOpen({openBy:this._oOpenBy});};g.prototype._handleClosed=function(){this.oPopup.detachClosed(this._handleClosed,this);D.resize.detachHandler(this._fnOrientationChange);I.removePopoverInstance(this);if(!this.oPopup._bModal&&!D.system.desktop&&document.activeElement&&!q(document.activeElement).is(":visible")){document.activeElement.blur();}this.fireAfterClose({openBy:this._oOpenBy});};g.prototype.onfocusin=function(e){var s=e.target,$=this.$();if(s.id===this.getId()+"-firstfe"){var L=$.lastFocusableDomRef();q.sap.focus(L);}else if(s.id===this.getId()+"-lastfe"){var F=$.firstFocusableDomRef();q.sap.focus(F);}};g.prototype.onkeydown=function(e){var k=q.sap.KeyCodes,K=e.which||e.keyCode,A=e.altKey;if(K===k.ESCAPE||(A&&K===k.F4)){if(e.originalEvent&&e.originalEvent._sapui_handledByControl){return;}this.close();e.stopPropagation();e.preventDefault();}};g.prototype.onmousedown=function(o){var r=sap.ui.getCore().getConfiguration().getRTL();if(!o.target.classList.contains("sapMPopoverResizeHandle")){return;}var $=q(document);var h=this.$();var t=this;h.addClass('sapMPopoverResizing');o.preventDefault();o.stopPropagation();var i={x:o.pageX,y:o.pageY,width:h.width(),height:h.height()};$.on("mousemove.sapMPopover",function(e){var w,j;if(r){w=i.width+i.x-e.pageX;j=i.height+(i.y-e.pageY);}else{w=i.width+e.pageX-i.x;j=i.height+(i.y-e.pageY);}t.setContentWidth(Math.max(w,t._minDimensions.width)+'px');t.setContentHeight(Math.max(j,t._minDimensions.height)+'px');});$.on("mouseup.sapMPopover",function(){h.removeClass("sapMPopoverResizing");$.off("mouseup.sapMPopover, mousemove.sapMPopover");});};g.prototype._hasSingleNavContent=function(){return!!this._getSingleNavContent();};g.prototype._getSingleNavContent=function(){var e=this._getAllContent();while(e.length===1&&e[0]instanceof sap.ui.core.mvc.View){e=e[0].getContent();}if(e.length===1&&e[0]instanceof sap.m.NavContainer){return e[0];}else{return null;}};g.prototype._getSinglePageContent=function(){var e=this._getAllContent();while(e.length===1&&e[0]instanceof sap.ui.core.mvc.View){e=e[0].getContent();}if(e.length===1&&e[0]instanceof sap.m.Page){return e[0];}else{return null;}};g.prototype._hasSinglePageContent=function(){var e=this._getAllContent();while(e.length===1&&e[0]instanceof sap.ui.core.mvc.View){e=e[0].getContent();}if(e.length===1&&e[0]instanceof sap.m.Page){return true;}else{return false;}};g.prototype._hasSingleScrollableContent=function(){var e=this._getAllContent(),i;while(e.length===1&&e[0]instanceof sap.ui.core.mvc.View){e=e[0].getContent();}if(e.length===1){for(i=0;i<this._scrollContentList.length;i++){if(e[0]instanceof this._scrollContentList[i]){return true;}}return false;}else{return false;}};g.prototype._getOffsetX=function(){var F=this.getPlacement(),i=0;if(this._bHorizontalFlip){var p=this._getOpenByDomRef();var h=p!==undefined;var e=h?p.getBoundingClientRect().width:0;i=F===f.PreferredRightOrFlip?Math.abs(e):-Math.abs(e);}var r=sap.ui.getCore().getConfiguration().getRTL();var o=i*(r?-1:1)+this.getOffsetX()*(r?-1:1);return o;};g.prototype._getOffsetY=function(){var F=this.getPlacement(),i=0;if(this._bVerticalFlip){var p=this._getOpenByDomRef();var h=p!==undefined;var e=h?p.getBoundingClientRect().height:0;i=F==="PreferredTopOrFlip"?-Math.abs(e):Math.abs(e);}return i+this.getOffsetY();};g.prototype._calcOffset=function(o){var i=this._getOffsetX(),e=this._getOffsetY();var p=o.split(" ");var o=(parseInt(p[0],10)+i)+" "+(parseInt(p[1],10)+e);return o;};g.prototype._calcPlacement=function(){var p=this.getPlacement();var o=this._getOpenByDomRef();switch(p){case f.Auto:this._calcAuto();break;case f.Vertical:case f.VerticalPreferedTop:case f.VerticalPreferredTop:case f.VerticalPreferedBottom:case f.VerticalPreferredBottom:case f.PreferredTopOrFlip:case f.PreferredBottomOrFlip:this._calcVertical();break;case f.Horizontal:case f.HorizontalPreferedLeft:case f.HorizontalPreferredLeft:case f.HorizontalPreferedRight:case f.HorizontalPreferredRight:case f.PreferredRightOrFlip:case f.PreferredLeftOrFlip:this._calcHorizontal();break;}this._bPosCalced=true;var i=q.inArray(this._oCalcedPos,this._placements);this.oPopup.setPosition(this._myPositions[i],this._atPositions[i],o,this._calcOffset(this._offsets[i]),"fit");};g.prototype._getDocHeight=function(){var e=document.body,h=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,h.clientHeight,h.offsetHeight);};g.prototype._calcVertical=function(){var $=q(this._getOpenByDomRef());var h=$[0]!==undefined;var p=this.getPlacement()===f.VerticalPreferedTop||this.getPlacement()===f.VerticalPreferredTop;var e=this.getPlacement()===f.VerticalPreferedBottom||this.getPlacement()===f.VerticalPreferredBottom;var i=this.getPlacement()===f.PreferredTopOrFlip;var j=this.getPlacement()===f.PreferredBottomOrFlip;var k=h?$[0].getBoundingClientRect().top:0;var m=h?$[0].getBoundingClientRect().height:0;var o=this._getOffsetY();var t=k-this._marginTop+o;var n=this.$().outerHeight();var r=this._getDocHeight()-($.offset().top+m+this._marginBottom+o);if(p&&t>n+this._arrowOffset){this._bVerticalFlip=false;this._oCalcedPos=f.Top;}else if(i){if(t>n+this._arrowOffset){this._bVerticalFlip=false;this._oCalcedPos=f.Top;}else{this._bVerticalFlip=true;this._oCalcedPos=f.Bottom;}}else if(e&&r>n+this._arrowOffset){this._oCalcedPos=f.Bottom;this._bVerticalFlip=false;}else if(j){if(r>n+this._arrowOffset){this._bVerticalFlip=false;this._oCalcedPos=f.Bottom;}else{this._bVerticalFlip=true;this._oCalcedPos=f.Top;}}else if(t>r){this._oCalcedPos=f.Top;}else{this._oCalcedPos=f.Bottom;}};g.prototype._calcHorizontal=function(){var $=q(this._getOpenByDomRef());var h=$[0]!==undefined;var p=this.getPlacement()===f.HorizontalPreferedLeft||this.getPlacement()===f.HorizontalPreferredLeft;var e=this.getPlacement()===f.HorizontalPreferedRight||this.getPlacement()===f.HorizontalPreferredRight;var i=h?$[0].getBoundingClientRect().left:0;var j=h?$[0].getBoundingClientRect().width:0;var o=this._getOffsetX();var L=i-this._marginLeft+o;var k=i+j;var r=this._$window.width()-k-this._marginRight-o;var m=this.$().outerWidth();var n=this.getPlacement()===f.PreferredLeftOrFlip;var s=this.getPlacement()===f.PreferredRightOrFlip;var t=sap.ui.getCore().getConfiguration().getRTL();if(p&&L>m+this._arrowOffset){this._bHorizontalFlip=false;this._oCalcedPos=t?f.Right:f.Left;}else if(n){if(L>m+this._arrowOffset){this._bHorizontalFlip=false;this._oCalcedPos=t?f.Right:f.Left;}else{this._bHorizontalFlip=true;this._oCalcedPos=t?f.Left:f.Right;}}else if(e&&r>m+this._arrowOffset){this._bHorizontalFlip=false;this._oCalcedPos=t?f.Left:f.Right;}else if(s){if(r>m+this._arrowOffset){this._bHorizontalFlip=false;this._oCalcedPos=t?f.Left:f.Right;}else{this._bHorizontalFlip=true;this._oCalcedPos=t?f.Right:f.Left;}}else if(L>r){this._oCalcedPos=t?f.Right:f.Left;}else{this._oCalcedPos=t?f.Left:f.Right;}};g.prototype._calcAuto=function(){if(this._$window.width()>this._$window.height()){if(this._checkHorizontal()){this._calcHorizontal();}else if(this._checkVertical()){this._calcVertical();}else{this._calcBestPos();}}else{if(this._checkVertical()){this._calcVertical();}else if(this._checkHorizontal()){this._calcHorizontal();}else{this._calcBestPos();}}};g.prototype._checkHorizontal=function(){var $=q(this._getOpenByDomRef());var h=$[0]!==undefined;var p=h?$[0].getBoundingClientRect().left:0;var i=h?$[0].getBoundingClientRect().width:0;var o=this._getOffsetX();var L=p-this._marginLeft+o;var e=p+i;var r=this._$window.width()-e-this._marginRight-o;var j=this.$();var w=j.outerWidth()+this._arrowOffset;if((w<=L)||(w<=r)){return true;}};g.prototype._checkVertical=function(){var $=q(this._getOpenByDomRef());var h=$[0]!==undefined;var p=h?$[0].getBoundingClientRect().top:0;var i=h?$[0].getBoundingClientRect().height:0;var o=this._getOffsetY();var t=p-this._marginTop+o;var e=this._getDocHeight()-$.offset().top-i-this._marginBottom-o;var j=this.$();var H=j.outerHeight()+this._arrowOffset;if((H<=t)||(H<=e)){return true;}};g.prototype._calcBestPos=function(){var $=this.$();var h=$.outerHeight();var w=$.outerWidth();var r=sap.ui.getCore().getConfiguration().getRTL();var e=q(this._getOpenByDomRef());var H=e[0]!==undefined;var p=H?e[0].getBoundingClientRect().left:0;var i=H?e[0].getBoundingClientRect().top:0;var j=H?e[0].getBoundingClientRect().width:0;var k=H?e[0].getBoundingClientRect().height:0;var o=this._getOffsetX();var m=this._getOffsetY();var t=i-this._marginTop+m;var n=this._getDocHeight()-e.offset().top-k-this._marginBottom-m;var L=p-this._marginLeft+o;var s=p+j;var u=this._$window.width()-s-this._marginRight-o;var v=h*w;var A;var x;if((this._$window.height()-this._marginTop-this._marginBottom)>=h){A=h;}else{A=this._$window.height()-this._marginTop-this._marginBottom;}if((this._$window.width()-this._marginLeft-this._marginRight)>=w){x=w;}else{x=this._$window.width()-this._marginLeft-this._marginRight;}var y=(A*(L))/v;var z=(A*(u))/v;var T=(x*(t))/v;var F=(x*(n))/v;var G=Math.max(y,z);var J=Math.max(T,F);if(G>J){if(G===y){this._oCalcedPos=r?f.Right:f.Left;}else if(G===z){this._oCalcedPos=r?f.Left:f.Right;}}else if(J>G){if(J===T){this._oCalcedPos=f.Top;}else if(J===F){this._oCalcedPos=f.Bottom;}}else if(J===G){if(this._$window.height()>this._$window.width()){if(J===T){this._oCalcedPos=f.Top;}else if(J===F){this._oCalcedPos=f.Bottom;}}else{if(G===y){this._oCalcedPos=r?f.Right:f.Left;}else if(G===z){this._oCalcedPos=r?f.Left:f.Right;}}}};g.outerWidth=function(e,i){if(typeof window.SVGElement!=="undefined"&&e instanceof window.SVGElement){return e.getBoundingClientRect().width;}return q(e).outerWidth(!!i);};g.outerHeight=function(e,i){if(typeof window.SVGElement!=="undefined"&&e instanceof window.SVGElement){return e.getBoundingClientRect().height;}return q(e).outerHeight(!!i);};g.prototype._getPositionParams=function($,e,h,i){var o=window.getComputedStyle($[0]),j=window.getComputedStyle(h[0]),p={};p._$popover=$;p._$parent=q(this._getOpenByDomRef());p._$arrow=e;p._$content=h;p._$scrollArea=i;p._$header=$.children(".sapMPopoverHeader");p._$subHeader=$.children(".sapMPopoverSubHeader");p._$footer=$.children(".sapMPopoverFooter");p._fWindowTop=this._$window.scrollTop();p._fWindowRight=this._$window.width();p._fWindowBottom=(g._bIOS7&&D.orientation.landscape&&window.innerHeight)?window.innerHeight:this._$window.height();p._fWindowLeft=this._$window.scrollLeft();p._fDocumentWidth=p._fWindowLeft+p._fWindowRight;p._fDocumentHeight=p._fWindowTop+p._fWindowBottom;p._fArrowHeight=e.outerHeight(true);p._fWidth=g.outerWidth($[0]);p._fWidthInner=p._$scrollArea?(p._$scrollArea.width()||0):0;p._fHeight=g.outerHeight($[0]);p._fHeaderHeight=p._$header.length>0?p._$header.outerHeight(true):0;p._fSubHeaderHeight=p._$subHeader.length>0?p._$subHeader.outerHeight(true):0;p._fFooterHeight=p._$footer.length>0?p._$footer.outerHeight(true):0;p._fOffset=$.offset();p._fOffsetX=this._getOffsetX();p._fOffsetY=this._getOffsetY();p._fMarginTop=p._fWindowTop+this._marginTop;p._fMarginRight=this._marginRight;p._fMarginBottom=this._marginBottom;p._fMarginLeft=p._fWindowLeft+this._marginLeft;p._fPopoverBorderTop=parseFloat(o.borderTopWidth);p._fPopoverBorderRight=parseFloat(o.borderRightWidth);p._fPopoverBorderBottom=parseFloat(o.borderBottomWidth);p._fPopoverBorderLeft=parseFloat(o.borderLeftWidth);p._fContentMarginTop=parseFloat(j.marginTop);p._fContentMarginBottom=parseFloat(j.marginBottom);return p;};g.prototype._recalculateMargins=function(s,p){var r=sap.ui.getCore().getConfiguration().getRTL();switch(s){case f.Left:if(r){p._fMarginLeft=p._$parent.offset().left+g.outerWidth(p._$parent[0],false)+this._arrowOffset-p._fOffsetX;}else{p._fMarginRight=p._fDocumentWidth-p._$parent.offset().left+this._arrowOffset-p._fOffsetX;}break;case f.Right:if(r){p._fMarginRight=p._fDocumentWidth-g.outerWidth(p._$parent[0],false)-p._$parent.offset().left+this._arrowOffset;}else{p._fMarginLeft=p._$parent.offset().left+g.outerWidth(p._$parent[0],false)+this._arrowOffset+p._fOffsetX;}break;case f.Top:p._fMarginBottom=p._fDocumentHeight-p._$parent.offset().top+this._arrowOffset-p._fOffsetY;break;case f.Bottom:p._fMarginTop=p._$parent.offset().top+g.outerHeight(p._$parent[0],false)+this._arrowOffset+p._fOffsetY;break;}};g.prototype._getPopoverPositionCss=function(p){var L,r,t,i,e=p._fDocumentWidth-p._fOffset.left-p._fWidth,h=p._fDocumentHeight-p._fOffset.top-p._fHeight,j=(p._fDocumentWidth-p._fMarginRight-p._fMarginLeft)<p._fWidth,k=(p._fDocumentHeight-p._fMarginTop-p._fMarginBottom)<p._fHeight,o=p._fOffset.left<p._fMarginLeft,s=this.getVerticalScrolling()&&(p._fWidth!==p._fWidthInner)?q.sap.scrollbarSize().width:0,m=e<(p._fMarginRight+s),n=p._fOffset.top<p._fMarginTop,u=h<p._fMarginBottom,v=sap.ui.getCore().getConfiguration().getRTL();if(j){L=p._fMarginLeft;r=p._fMarginRight;}else{if(o){L=p._fMarginLeft;if(v){r="";}}else if(m){r=p._fMarginRight;L="";}}if(k){t=p._fMarginTop;i=p._fMarginBottom;}else{if(n){t=p._fMarginTop;}else if(u){i=p._fMarginBottom;t="";}}var w={top:t,bottom:i-p._fWindowTop,left:L,right:typeof r==="number"?r-p._fWindowLeft:r};return w;};g.prototype._getContentDimensionsCss=function(p){var o={},A=p._$content.height(),m=this._getMaxContentWidth(p),i=this._getMaxContentHeight(p);i=Math.max(i,0);o["max-width"]=m+"px";if(this.getContentHeight()||(A>i)){o["height"]=Math.min(i,A)+"px";}else{o["height"]="";o["max-height"]=i+"px";}return o;};g.prototype._getMaxContentWidth=function(p){return p._fDocumentWidth-p._fMarginLeft-p._fMarginRight-p._fPopoverBorderLeft-p._fPopoverBorderRight;};g.prototype._getMaxContentHeight=function(p){return p._fDocumentHeight-p._fMarginTop-p._fMarginBottom-p._fHeaderHeight-p._fSubHeaderHeight-p._fFooterHeight-p._fContentMarginTop-p._fContentMarginBottom-p._fPopoverBorderTop-p._fPopoverBorderBottom;};g.prototype._isHorizontalScrollbarNeeded=function(p){return this.getHorizontalScrolling()&&(p._$scrollArea.outerWidth(true)<=p._$content.width());};g.prototype._getArrowOffsetCss=function(s,p){var i,r=sap.ui.getCore().getConfiguration().getRTL();p._fWidth=p._$popover.outerWidth();p._fHeight=p._$popover.outerHeight();if(s===f.Left||s===f.Right){i=p._$parent.offset().top-p._$popover.offset().top-p._fPopoverBorderTop+p._fOffsetY+0.5*(g.outerHeight(p._$parent[0],false)-p._$arrow.outerHeight(false));i=Math.max(i,this._arrowOffsetThreshold);i=Math.min(i,p._fHeight-this._arrowOffsetThreshold-p._$arrow.outerHeight());return{"top":i};}else if(s===f.Top||s===f.Bottom){if(r){i=p._$popover.offset().left+g.outerWidth(p._$popover[0],false)-(p._$parent.offset().left+g.outerWidth(p._$parent[0],false))+p._fPopoverBorderRight+p._fOffsetX+0.5*(g.outerWidth(p._$parent[0],false)-p._$arrow.outerWidth(false));i=Math.max(i,this._arrowOffsetThreshold);i=Math.min(i,p._fWidth-this._arrowOffsetThreshold-p._$arrow.outerWidth(false));return{"right":i};}else{i=p._$parent.offset().left-p._$popover.offset().left-p._fPopoverBorderLeft+p._fOffsetX+0.5*(g.outerWidth(p._$parent[0],false)-p._$arrow.outerWidth(false));i=Math.max(i,this._arrowOffsetThreshold);i=Math.min(i,p._fWidth-this._arrowOffsetThreshold-p._$arrow.outerWidth(false));return{"left":i};}}};g.prototype._getArrowPositionCssClass=function(s){switch(s){case f.Left:return"sapMPopoverArrRight";case f.Right:return"sapMPopoverArrLeft";case f.Top:return"sapMPopoverArrDown";case f.Bottom:return"sapMPopoverArrUp";}};g.prototype._getArrowStyleCssClass=function(p){var A=p._$arrow.position(),F=p._$footer.position(),n=this._getSingleNavContent(),o=this._getSinglePageContent(),i=0;if(n||o){o=o||n.getCurrentPage();if(o){i=o._getAnyHeader().$().outerHeight();}}if((A.top+p._fArrowHeight)<(p._fHeaderHeight+p._fSubHeaderHeight)||((A.top+p._fArrowHeight)<i)){return"sapMPopoverHeaderAlignArr";}else if((A.top<(p._fHeaderHeight+p._fSubHeaderHeight))||(A.top<i)||(p._$footer.length&&((A.top+p._fArrowHeight)>F.top)&&(A.top<F.top))){return"sapMPopoverCrossArr";}else if(p._$footer.length&&(A.top>F.top)){return"sapMPopoverFooterAlignArr";}};g.prototype._getCalculatedPlacement=function(){return this._oCalcedPos||this.getPlacement();};g.prototype._adjustPositionAndArrow=function(){var e=this.oPopup.getOpenState();if(!(e===O.OPEN||e===O.OPENING)){return;}var $=this.$(),h=this.$("arrow"),i=this.$("cont"),j=this.$("scroll"),s=this._getCalculatedPlacement(),p=this._getPositionParams($,h,i,j);this._recalculateMargins(s,p);var o=this._getPopoverPositionCss(p),k=this._getContentDimensionsCss(p),H=this._isHorizontalScrollbarNeeded(p);$.css(o);i.css(k);if(H){j.css("display","block");}if(this.getShowArrow()){var A=this._getArrowOffsetCss(s,p),m=this._getArrowPositionCssClass(s),n,u;h.removeAttr("style");h.css(A);h.addClass(m);if(s===f.Top&&p._$footer&&p._$footer.size()){u=true;}if(s===f.Left||s===f.Right){n=this._getArrowStyleCssClass(p);if(n){h.addClass(n);if(n==="sapMPopoverFooterAlignArr"){u=true;}}}if(u){h.addClass("sapContrast sapContrastPlus");}$.css("overflow","visible");}this._afterAdjustPositionAndArrowHook();};g.prototype._adaptPositionParams=function(){if(this.getShowArrow()){this._marginLeft=10;this._marginRight=10;this._marginBottom=10;this._arrowOffset=18;this._offsets=["0 -18","18 0","0 18","-18 0"];if(this._bUseCompactArrow){this._arrowOffset=9;this._offsets=["0 -9","9 0","0 9","-9 0"];}this._myPositions=["center bottom","begin center","center top","end center"];this._atPositions=["center top","end center","center bottom","begin center"];}else{this._marginTop=0;this._marginLeft=0;this._marginRight=0;this._marginBottom=0;this._arrowOffset=0;this._offsets=["0 0","0 0","0 0","0 0"];this._myPositions=["begin bottom","begin center","begin top","end center"];this._atPositions=["begin top","end center","begin bottom","begin center"];}};g.prototype._afterAdjustPositionAndArrowHook=function(){};g.prototype._isPopupElement=function(o){var p=this._getOpenByDomRef();return!!(q(o).closest(sap.ui.getCore().getStaticAreaRef()).length)||!!(q(o).closest(p).length);};g.prototype._getAnyHeader=function(){if(this.getCustomHeader()){return this.getCustomHeader();}else{if(this.getShowHeader()){this._createInternalHeader();return this._internalHeader;}}};g.prototype._createInternalHeader=function(){if(!this._internalHeader){var t=this;this._internalHeader=new B(this.getId()+"-intHeader");this.setAggregation("_internalHeader",this._internalHeader);this._internalHeader.addEventDelegate({onAfterRendering:function(){t._restoreFocus();}});return true;}else{return false;}};g.prototype._animation=function(A,r){var t=null;var T=function(){r.off("webkitTransitionEnd transitionend");clearTimeout(t);setTimeout(function(){A();});};r.on("webkitTransitionEnd transitionend",T);t=setTimeout(T,300);};g.prototype._openAnimation=function(r,i,o){var t=this;setTimeout(function(){r.css("display","block");t._animation(function(){if(!t.oPopup||t.oPopup.getOpenState()!==O.OPENING){return;}o();},r);},D.browser.firefox?50:0);};g.prototype._closeAnimation=function(r,i,e){r.addClass("sapMPopoverTransparent");this._animation(function(){e();r.removeClass("sapMPopoverTransparent");},r);};g.prototype._getInitialFocusId=function(){return this.getInitialFocus()||this._getFirstVisibleButtonId()||this._getFirstFocusableContentElementId()||this.getId();};g.prototype._getFirstVisibleButtonId=function(){var o=this.getBeginButton(),e=this.getEndButton(),s="";if(o&&o.getVisible()){s=o.getId();}else if(e&&e.getVisible()){s=e.getId();}return s;};g.prototype._getFirstFocusableContentElementId=function(){var r="";var $=this.$("cont");var F=$.firstFocusableDomRef();if(F){r=F.id;}return r;};g.prototype._restoreFocus=function(){if(this.isOpen()){var F=this._getInitialFocusId(),o=sap.ui.getCore().byId(F);q.sap.focus(o?o.getFocusDomRef():q.sap.domById(F));}};g.prototype._registerContentResizeHandler=function(s){if(!this._sResizeListenerId){this._sResizeListenerId=R.register(s||this.getDomRef("scroll"),this._fnOrientationChange);}};g.prototype._deregisterContentResizeHandler=function(){if(this._sResizeListenerId){R.deregister(this._sResizeListenerId);this._sResizeListenerId=null;}};g.prototype._storeScrollPosition=function(){var $=this.$("cont");if($.length>0){this._oScrollPosDesktop={x:$.scrollLeft(),y:$.scrollTop()};}};g.prototype._restoreScrollPosition=function(){if(!this._oScrollPosDesktop){return;}var $=this.$("cont");if($.length>0){$.scrollLeft(this._oScrollPosDesktop.x).scrollTop(this._oScrollPosDesktop.y);this._oScrollPosDesktop=null;}};g.prototype._repositionOffset=function(){var e=this.oPopup.getOpenState(),L,p;if(!(e===O.OPEN)){return this;}L=this.oPopup._oLastPosition;p=q.inArray(this.getPlacement(),this._placements);if(p===-1){return this;}if(p<4){L.offset=this._calcOffset(this._offsets[p]);this.oPopup._applyPosition(L);}else{this._calcPlacement();}return this;};g.prototype._getOpenByDomRef=function(){if(!this._oOpenBy){return null;}if(this._oOpenBy instanceof E){return(this._oOpenBy.getPopupAnchorDomRef&&this._oOpenBy.getPopupAnchorDomRef())||this._oOpenBy.getFocusDomRef();}else{return this._oOpenBy;}};g.prototype._getAccessibilityOptions=function(){var A,m={};m.role="dialog";if(this.getShowHeader()&&this._getAnyHeader()){A=Array.prototype.concat(this._getAnyHeader().getId(),this.getAssociation("ariaLabelledBy",[]));m.labelledby=A.join(' ');}return m;};g.prototype.setPlacement=function(p){this.setProperty("placement",p,true);this._bVerticalFlip=false;this._bHorizontalFlip=false;var i=q.inArray(p,this._placements);if(i<=3){this._oCalcedPos=p;}return this;};g.prototype.setTitle=function(t){this.setProperty("title",t,true);if(this._headerTitle){this._headerTitle.setText(t);}else{this._headerTitle=new sap.m.Title(this.getId()+"-title",{text:this.getTitle(),level:"H2"});this._createInternalHeader();this._internalHeader.addContentMiddle(this._headerTitle);}return this;};g.prototype.setBeginButton=function(o){var e=this.getBeginButton();if(e===o){return this;}this._createInternalHeader();this._beginButton=o;if(o){if(e){this._internalHeader.removeAggregation("contentLeft",e,true);}this._internalHeader.addAggregation("contentLeft",o);}else{this._internalHeader.removeContentLeft(e);}return this;};g.prototype.setEndButton=function(o){var e=this.getEndButton();if(e===o){return this;}this._createInternalHeader();this._endButton=o;if(o){if(e){this._internalHeader.removeAggregation("contentRight",e,true);}this._internalHeader.insertAggregation("contentRight",o,1,true);this._internalHeader.invalidate();}else{this._internalHeader.removeContentRight(e);}return this;};g.prototype.setLeftButton=function(v){if(!(v instanceof a)){v=sap.ui.getCore().byId(v);}this.setBeginButton(v);return this.setAssociation("leftButton",v);};g.prototype.setRightButton=function(v){if(!(v instanceof a)){v=sap.ui.getCore().byId(v);}this.setEndButton(v);return this.setAssociation("rightButton",v);};g.prototype.setShowHeader=function(v){if(v===this.getShowHeader()||this.getCustomHeader()){return this;}if(v){if(this._internalHeader){this._internalHeader.$().show();}}else{if(this._internalHeader){this._internalHeader.$().hide();}}this.setProperty("showHeader",v,true);return this;};g.prototype.setModal=function(m,s){if(m===this.getModal()){return this;}this.oPopup.setModal(m,q.trim("sapMPopoverBLayer "+s||""));this.setProperty("modal",m,true);return this;};g.prototype.setOffsetX=function(v){this.setProperty("offsetX",v,true);return this._repositionOffset();};g.prototype.setOffsetY=function(v){this.setProperty("offsetY",v,true);return this._repositionOffset();};g.prototype.setEnableScrolling=function(v){this.setHorizontalScrolling(v);this.setVerticalScrolling(v);var o=this.getEnableScrolling();if(o===v){return this;}this.setProperty("enableScrolling",v,true);return this;};g.prototype.setVerticalScrolling=function(v){this._bVScrollingEnabled=v;var o=this.getVerticalScrolling();if(o===v){return this;}this.$().toggleClass("sapMPopoverVerScrollDisabled",!v);this.setProperty("verticalScrolling",v,true);if(this._oScroller){this._oScroller.setVertical(v);}return this;};g.prototype.setHorizontalScrolling=function(v){this._bHScrollingEnabled=v;var o=this.getHorizontalScrolling();if(o===v){return this;}this.$().toggleClass("sapMPopoverHorScrollDisabled",!v);this.setProperty("horizontalScrolling",v,true);if(this._oScroller){this._oScroller.setHorizontal(v);}return this;};g.prototype.setResizable=function(v){if(!D.system.desktop){v=false;}return this.setProperty("resizable",v,true);};g.prototype.getScrollDelegate=function(){return this._oScroller;};g.prototype.setAggregation=function(A,o,s){if(A==="beginButton"||A==="endButton"){var F="set"+A.charAt(0).toUpperCase()+A.slice(1);return this[F](o);}else{return C.prototype.setAggregation.apply(this,arguments);}};g.prototype.getAggregation=function(A,o){if(A==="beginButton"||A==="endButton"){var s=this["_"+A];return s||o||null;}else{return C.prototype.getAggregation.apply(this,arguments);}};g.prototype.destroyAggregation=function(A,s){var o=q(document.activeElement).control(0);if(A==="beginButton"||A==="endButton"){var e=this["_"+A];if(e){e.destroy();this["_"+A]=null;}}else{C.prototype.destroyAggregation.apply(this,arguments);}o&&o.getDomRef()?o.focus():this.focus();return this;};g.prototype.invalidate=function(o){if(this.isOpen()){C.prototype.invalidate.apply(this,arguments);}return this;};g.prototype.addAggregation=function(A,o,s){if(A==="content"){this._bContentChanged=true;}C.prototype.addAggregation.apply(this,arguments);};g.prototype._getAllContent=function(){return this.getContent();};g.prototype._applyContextualSettings=function(){M.prototype._applyContextualSettings.call(this,M._defaultContextualSettings);};return g;});
