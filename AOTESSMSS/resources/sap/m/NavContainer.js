/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control','sap/ui/core/RenderManager','sap/ui/Device','jquery.sap.events'],function(q,a,C,R,D){"use strict";var N=C.extend("sap.m.NavContainer",{metadata:{library:"sap.m",properties:{autoFocus:{type:"boolean",group:"Behavior",defaultValue:true},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},visible:{type:"boolean",group:"Appearance",defaultValue:true},defaultTransitionName:{type:"string",group:"Appearance",defaultValue:"slide"}},defaultAggregation:"pages",aggregations:{pages:{type:"sap.ui.core.Control",multiple:true,singularName:"page"}},associations:{initialPage:{type:"sap.ui.core.Control",multiple:false}},events:{navigate:{allowPreventDefault:true,parameters:{from:{type:"sap.ui.core.Control"},fromId:{type:"string"},to:{type:"sap.ui.core.Control"},toId:{type:"string"},firstTime:{type:"boolean"},isTo:{type:"boolean"},isBack:{type:"boolean"},isBackToTop:{type:"boolean"},isBackToPage:{type:"boolean"},direction:{type:"string"}}},afterNavigate:{parameters:{from:{type:"sap.ui.core.Control"},fromId:{type:"string"},to:{type:"sap.ui.core.Control"},toId:{type:"string"},firstTime:{type:"boolean"},isTo:{type:"boolean"},isBack:{type:"boolean"},isBackToTop:{type:"boolean"},isBackToPage:{type:"boolean"},direction:{type:"string"}}}}}});var u=sap.ui.getCore().getConfiguration().getAnimation(),g=function(d){return u?d:0;},h=function(c){return!!(c&&c.getParent());};N.prototype.init=function(){this._pageStack=[];this._aQueue=[];this._mVisitedPages={};this._mFocusObject={};this._iTransitionsCompleted=0;this._bNeverRendered=true;this._bNavigating=false;this._bRenderingInProgress=false;};N.prototype.exit=function(){this._mFocusObject=null;};N.prototype.onBeforeRendering=function(){var p=this.getCurrentPage();if(this._bNeverRendered&&p){var b=p.getId();if(!this._mVisitedPages[b]){this._mVisitedPages[b]=true;var n={from:null,fromId:null,to:p,toId:b,firstTime:true,isTo:false,isBack:false,isBackToPage:false,isBackToTop:false,direction:"initial"};var e=q.Event("BeforeFirstShow",n);e.srcControl=this;e.data=this._oToDataBeforeRendering||{};e.backData={};p._handleEvent(e);e=q.Event("BeforeShow",n);e.srcControl=this;e.data=this._oToDataBeforeRendering||{};e.backData={};p._handleEvent(e);}}};N.prototype.onAfterRendering=function(){var p=this.getCurrentPage(),f,n,b,e;if(this._bNeverRendered&&p){this._bNeverRendered=false;delete this._bNeverRendered;b=p.getId();if(!this._isInsideAPopup()&&this.getAutoFocus()){f=N._applyAutoFocusTo(b);if(f){this._mFocusObject[b]=f;}}n={from:null,fromId:null,to:p,toId:b,firstTime:true,isTo:false,isBack:false,isBackToTop:false,isBackToPage:false,direction:"initial"};e=q.Event("AfterShow",n);e.srcControl=this;e.data=this._oToDataBeforeRendering||{};e.backData={};p._handleEvent(e);}};N.prototype._getActualInitialPage=function(){var p=this.getInitialPage();if(p){var b=sap.ui.getCore().byId(p);if(b){return b;}else{q.sap.log.error("NavContainer: control with ID '"+p+"' was set as 'initialPage' but was not found as a DIRECT child of this NavContainer (number of current children: "+this.getPages().length+").");}}var c=this.getPages();return(c.length>0?c[0]:null);};N.prototype.getPage=function(p){var P=this.getPages();for(var i=0;i<P.length;i++){if(P[i]&&(P[i].getId()==p)){return P[i];}}return null;};N.prototype._ensurePageStackInitialized=function(d){if(this._pageStack.length===0){var p=this._getActualInitialPage();if(p){this._pageStack.push({id:p.getId(),isInitial:true,data:d||{}});}}return this._pageStack;};N.prototype.getCurrentPage=function(){var s=this._ensurePageStackInitialized();if(s.length>=1){return this.getPage(s[s.length-1].id);}else{q.sap.log.warning(this+": page stack is empty but should have been initialized - application failed to provide a page to display");return undefined;}};N.prototype.getPreviousPage=function(){var s=this._ensurePageStackInitialized();if(s.length>1){return this.getPage(s[s.length-2].id);}else if(s.length==1){return undefined;}else{q.sap.log.warning(this+": page stack is empty but should have been initialized - application failed to provide a page to display");}};N.prototype.currentPageIsTopPage=function(){var s=this._ensurePageStackInitialized();return(s.length===1);};N.prototype.insertPreviousPage=function(p,t,d){var s=this._ensurePageStackInitialized();if(this._pageStack.length>0){var i=s.length-1;var b={id:p,transition:t,data:d};if(i===0){b.isInitial=true;delete s[s.length-1].isInitial;}s.splice(i,0,b);}else{q.sap.log.warning(this+": insertPreviousPage called with empty page stack; ignoring");}return this;};N._applyAutoFocusTo=function(i){var f=q.sap.byId(i).firstFocusableDomRef();if(f){q.sap.focus(f);}return f;};N.prototype._applyAutoFocus=function(n){var p=n.toId,d,A=this.getAutoFocus(),b=n.isBack||n.isBackToPage||n.isBackToTop;if(!n.bFocusInsideFromPage){return;}if(b){d=this._mFocusObject!=null?this._mFocusObject[p]:null;if(d){q.sap.focus(d);}else if(A){N._applyAutoFocusTo(p);}}else if(n.isTo&&A){N._applyAutoFocusTo(p);}};N.prototype._afterTransitionCallback=function(n,d,b){var e=q.Event("AfterShow",n);e.data=d||{};e.backData=b||{};e.srcControl=this;n.to._handleEvent(e);e=q.Event("AfterHide",n);e.srcControl=this;n.from._handleEvent(e);this._iTransitionsCompleted++;this._bNavigating=false;this._applyAutoFocus(n);this.fireAfterNavigate(n);q.sap.log.info(this+": _afterTransitionCallback called, to: "+n.toId);if(n.to.hasStyleClass("sapMNavItemHidden")){q.sap.log.warning(this.toString()+": target page '"+n.toId+"' still has CSS class 'sapMNavItemHidden' after transition. This should not be the case, please check the preceding log statements.");n.to.removeStyleClass("sapMNavItemHidden");}this._dequeueNavigation();};N.prototype._dequeueNavigation=function(){var n=this._aQueue.shift();if(typeof n==="function"){n();}};N.prototype._isInPageStack=function(p){return this._pageStack.some(function(P){return P.id===p;});};N.prototype._safeBackToPage=function(p,t,d,T){var c;if(!this.getPage(p)){return this;}c=this.getCurrentPage();if(c&&c.getId()===p){return this;}if(this._isInPageStack(p)){return this.backToPage(p,d,T);}else{return this.to(p,t,d,T);}};N.prototype._isFocusInControl=function(c){return q(document.activeElement).closest(c.$()).length>0;};N.prototype.to=function(p,t,d,T,f){if(p instanceof C){p=p.getId();}if(typeof(t)!=="string"){T=d;d=t;}t=t||this.getDefaultTransitionName();T=T||{};d=d||{};var F={id:p,transition:t,data:d};this._ensurePageStackInitialized(d);if(this._bNavigating){q.sap.log.info(this.toString()+": Cannot navigate to page "+p+" because another navigation is already in progress. - navigation will be executed after the previous one");this._aQueue.push(q.proxy(function(){this.to(p,t,d,T,true);},this));return this;}if(this._bNeverRendered){this._oToDataBeforeRendering=d;}var o=this.getCurrentPage();if(o&&(o.getId()===p)){q.sap.log.warning(this.toString()+": Cannot navigate to page "+p+" because this is the current page.");if(f){this._dequeueNavigation();}if(this._pageStack.length===1){this._pageStack[0].transition=F.transition;}return this;}var b=this.getPage(p);if(b){if(!o){q.sap.log.warning("Navigation triggered to page with ID '"+p+"', but the current page is not known/aggregated by "+this);return this;}var n={from:o,fromId:o.getId(),to:b,toId:p,firstTime:!this._mVisitedPages[p],isTo:true,isBack:false,isBackToTop:false,isBackToPage:false,direction:"to",bFocusInsideFromPage:this._isFocusInControl(o)};if(n.bFocusInsideFromPage){this._mFocusObject[o.getId()]=document.activeElement;}var c=this.fireNavigate(n);if(c){a.closeKeyboard();var e=q.Event("BeforeHide",n);e.srcControl=this;o._handleEvent(e);if(!this._mVisitedPages[p]){e=q.Event("BeforeFirstShow",n);e.srcControl=this;e.data=d||{};e.backData={};b._handleEvent(e);}e=q.Event("BeforeShow",n);e.srcControl=this;e.data=d||{};e.backData={};b._handleEvent(e);this._pageStack.push(F);q.sap.log.info(this.toString()+": navigating to page '"+p+"': "+b.toString());this._mVisitedPages[p]=true;if(!this.getDomRef()){q.sap.log.info("'Hidden' 'to' navigation in not-rendered NavContainer "+this.toString());if(this._bRenderingInProgress){q.sap.delayedCall(0,this,this.invalidate);}return this;}var i;if(!(i=b.getDomRef())||i.parentNode!=this.getDomRef()||R.isPreservedContent(i)){b.addStyleClass("sapMNavItemRendering");q.sap.log.debug("Rendering 'to' page '"+b.toString()+"' for 'to' navigation");var r=sap.ui.getCore().createRenderManager();r.render(b,this.getDomRef());r.destroy();b.addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemRendering");}var j=N.transitions[t]||N.transitions["slide"];var k=this._iTransitionsCompleted;var l=this;window.setTimeout(function(){if(l&&(l._iTransitionsCompleted<k+1)){q.sap.log.warning("Transition '"+t+"' 'to' was triggered five seconds ago, but has not yet invoked the end-of-transition callback.");}},g(5000));this._bNavigating=true;j.to.call(this,o,b,q.proxy(function(){this._afterTransitionCallback(n,d);},this),T);}else{q.sap.log.info("Navigation to page with ID '"+p+"' has been aborted by the application");}}else{q.sap.log.warning("Navigation triggered to page with ID '"+p+"', but this page is not known/aggregated by "+this);}return this;};N.prototype.back=function(b,t){this._backTo("back",b,t);return this;};N.prototype.backToPage=function(p,b,t){this._backTo("backToPage",b,t,p);return this;};N.prototype.backToTop=function(b,t){this._backTo("backToTop",b,t);return this;};N.prototype._backTo=function(t,b,T,r){if(this._bNavigating){q.sap.log.warning(this.toString()+": Cannot navigate back because another navigation is already in progress. - navigation will be executed after the previous one");this._aQueue.push(q.proxy(function(){this._backTo(t,b,T,r);},this));return this;}if(this._pageStack.length<=1){if(this._pageStack.length===1&&!this._pageStack[0].isInitial){throw new Error("Initial page not found on the stack. How did this happen?");}return this;}else{if(r instanceof C){r=r.getId();}var f=this._pageStack[this._pageStack.length-1];var c=f.transition;var F=this.getPage(f.id);var o;var d;if(t==="backToTop"){o=this._getActualInitialPage();d=null;}else if(t==="backToPage"){var i=this._findClosestPreviousPageInfo(r);if(!i){q.sap.log.error(this.toString()+": Cannot navigate backToPage('"+r+"') because target page was not found among the previous pages.");return this;}o=sap.ui.getCore().byId(i.id);if(!o){q.sap.log.error(this.toString()+": Cannot navigate backToPage('"+r+"') because target page does not exist anymore.");return this;}d=i.data;}else{o=this.getPreviousPage();d=this._pageStack[this._pageStack.length-2].data;}if(!o){q.sap.log.error("NavContainer back navigation: target page is not defined or not aggregated by this NavContainer. Aborting navigation.");return;}var e=o.getId();b=b||{};T=T||{};var n={from:F,fromId:F.getId(),to:o,toId:e,firstTime:!this._mVisitedPages[e],isTo:false,isBack:(t==="back"),isBackToPage:(t==="backToPage"),isBackToTop:(t==="backToTop"),direction:t,bFocusInsideFromPage:this._isFocusInControl(F)};var j=this.fireNavigate(n);if(j){a.closeKeyboard();var E=q.Event("BeforeHide",n);E.srcControl=this;F._handleEvent(E);if(!this._mVisitedPages[e]){E=q.Event("BeforeFirstShow",n);E.srcControl=this;E.backData=b||{};E.data={};o._handleEvent(E);}E=q.Event("BeforeShow",n);E.srcControl=this;E.backData=b||{};E.data=d||{};o._handleEvent(E);this._pageStack.pop();q.sap.log.info(this.toString()+": navigating back to page "+o.toString());this._mVisitedPages[e]=true;if(t==="backToTop"){this._pageStack=[];q.sap.log.info(this.toString()+": navigating back to top");this.getCurrentPage();}else if(t==="backToPage"){var p=[],k;while(this._pageStack[this._pageStack.length-1].id!==r){k=this._pageStack.pop();p.push(k.id);}q.sap.log.info(this.toString()+": navigating back to specific page "+o.toString()+" across the pages: "+p.join(", "));}if(!this.getDomRef()){q.sap.log.info("'Hidden' back navigation in not-rendered NavContainer "+this.toString());return this;}var l=N.transitions[c]||N.transitions["slide"];var m=this._iTransitionsCompleted;var s=this;window.setTimeout(function(){if(s&&(s._iTransitionsCompleted<m+1)){q.sap.log.warning("Transition '"+c+"' 'back' was triggered five seconds ago, but has not yet invoked the end-of-transition callback.");}},g(5000));this._bNavigating=true;var v;if(!(v=o.getDomRef())||v.parentNode!=this.getDomRef()||R.isPreservedContent(v)){o.addStyleClass("sapMNavItemRendering");q.sap.log.debug("Rendering 'to' page '"+o.toString()+"' for back navigation");var w=sap.ui.getCore().createRenderManager();var x=this.$().children().index(F.getDomRef());w.renderControl(o);w.flush(this.getDomRef(),false,x);w.destroy();o.addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemRendering");}if(F.getId()===o.getId()){q.sap.log.info("Transition is skipped when navigating back to the same page instance"+o.toString());this._afterTransitionCallback(n,d,b);return this;}l.back.call(this,F,o,q.proxy(function(){this._afterTransitionCallback(n,d,b);},this),T);}}return this;};N.prototype._findClosestPreviousPageInfo=function(r){for(var i=this._pageStack.length-2;i>=0;i--){var b=this._pageStack[i];if(b.id===r){return b;}}return null;};N.transitions=N.transitions||{};N.transitions["show"]={to:function(f,t,c){t.removeStyleClass("sapMNavItemHidden");f&&f.addStyleClass("sapMNavItemHidden");c();},back:function(f,t,c){t.removeStyleClass("sapMNavItemHidden");f&&f.addStyleClass("sapMNavItemHidden");c();}};if(q.support.cssTransitions){N.transitions["slide"]={to:function(f,t,c){f.addStyleClass("sapMNavItemCenter");window.setTimeout(function(){t.addStyleClass("sapMNavItemRight");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){q(this).unbind("webkitTransitionEnd transitionend");if(!o){o=true;}else{T=false;if(h(t)){t.removeStyleClass("sapMNavItemSliding").removeStyleClass("sapMNavItemCenter");}if(h(f)){f.removeStyleClass("sapMNavItemSliding").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemLeft");}c();}};f.$().bind("webkitTransitionEnd transitionend",A);t.$().bind("webkitTransitionEnd transitionend",A);t.addStyleClass("sapMNavItemSliding").addStyleClass("sapMNavItemCenter").removeStyleClass("sapMNavItemRight");f.addStyleClass("sapMNavItemSliding").removeStyleClass("sapMNavItemCenter").addStyleClass("sapMNavItemLeft");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()));}},g(400));},g(60));},0);},back:function(f,t,c){t.addStyleClass("sapMNavItemLeft");t.removeStyleClass("sapMNavItemHidden");f.addStyleClass("sapMNavItemCenter");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){q(this).unbind("webkitTransitionEnd transitionend");if(!o){o=true;}else{T=false;if(h(t)){t.removeStyleClass("sapMNavItemSliding").removeStyleClass("sapMNavItemCenter");}if(h(f)){f.removeStyleClass("sapMNavItemSliding").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemRight");}c();}};f.$().bind("webkitTransitionEnd transitionend",A);t.$().bind("webkitTransitionEnd transitionend",A);if(D.browser.webkit){window.setTimeout(function(){t.$().css("box-shadow","0em 1px 0em rgba(128, 128, 1280, 0.1)");window.setTimeout(function(){t.$().css("box-shadow","");},g(50));},0);}t.addStyleClass("sapMNavItemSliding").addStyleClass("sapMNavItemCenter").removeStyleClass("sapMNavItemLeft");f.addStyleClass("sapMNavItemSliding").removeStyleClass("sapMNavItemCenter").addStyleClass("sapMNavItemRight");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()));}},g(400));},g(100));}};}else{N.transitions["slide"]={to:function(f,t,c){var T=t.$();T.css("left","100%");t.removeStyleClass("sapMNavItemHidden");T.animate({left:"0%"},g(300));var F=f.$();F.animate({left:"-100%"},g(300),function(){f.addStyleClass("sapMNavItemHidden");F.css("left","0");c();});},back:function(f,t,c){var T=t.$();T.css("left","-100%");t.removeStyleClass("sapMNavItemHidden");T.animate({left:"0%"},g(300));var F=f.$();F.animate({left:"100%"},g(300),function(){f.addStyleClass("sapMNavItemHidden");F.css("left","0");c();});}};}if(q.support.cssTransitions){N.transitions["fade"]={to:function(f,t,c){t.addStyleClass("sapMNavItemTransparent");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var A=null;var T=true;A=function(){q(this).unbind("webkitTransitionEnd transitionend");T=false;if(h(f)){f.addStyleClass("sapMNavItemHidden");}if(h(t)){t.removeStyleClass("sapMNavItemFading").removeStyleClass("sapMNavItemOpaque");}c();};t.$().bind("webkitTransitionEnd transitionend",A);t.addStyleClass("sapMNavItemFading").removeStyleClass("sapMNavItemTransparent").addStyleClass("sapMNavItemOpaque");window.setTimeout(function(){if(T){A.apply(t.$());}},g(600));},g(10));},back:function(f,t,c){f.addStyleClass("sapMNavItemOpaque");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var A=null;var T=true;A=function(){q(this).unbind("webkitTransitionEnd transitionend");T=false;if(h(f)){f.removeStyleClass("sapMNavItemFading").addStyleClass("sapMNavItemHidden");f.removeStyleClass("sapMNavItemTransparent");}c();};f.$().bind("webkitTransitionEnd transitionend",A);f.addStyleClass("sapMNavItemFading").removeStyleClass("sapMNavItemOpaque");f.addStyleClass("sapMNavItemTransparent");window.setTimeout(function(){if(T){A.apply(t.$());}},g(600));},g(10));}};}else{N.transitions["fade"]={to:function(f,t,c){var T=t.$();T.css("opacity","0");t.removeStyleClass("sapMNavItemHidden");T.animate({opacity:"1"},g(500),function(){f.addStyleClass("sapMNavItemHidden");c();});},back:function(f,t,c){var F=f.$();t.removeStyleClass("sapMNavItemHidden");F.animate({opacity:"0"},g(500),function(){f.addStyleClass("sapMNavItemHidden");F.css("opacity","1");c();});}};}if(q.support.cssTransitions){N.transitions["flip"]={to:function(f,t,c){var b=this;window.setTimeout(function(){b.$().addClass("sapMNavFlip");t.addStyleClass("sapMNavItemFlipNext");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){q(this).unbind("webkitTransitionEnd transitionend");if(!o){o=true;}else{T=false;if(h(t)){t.removeStyleClass("sapMNavItemFlipping");}if(h(f)){f.removeStyleClass("sapMNavItemFlipping").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemFlipPrevious");}b.$().removeClass("sapMNavFlip");c();}};f.$().bind("webkitTransitionEnd transitionend",A);t.$().bind("webkitTransitionEnd transitionend",A);t.addStyleClass("sapMNavItemFlipping").removeStyleClass("sapMNavItemFlipNext");f.addStyleClass("sapMNavItemFlipping").addStyleClass("sapMNavItemFlipPrevious");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()));}},g(600));},g(60));},0);},back:function(f,t,c){var b=this;b.$().addClass("sapMNavFlip");t.addStyleClass("sapMNavItemFlipPrevious");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){q(this).unbind("webkitTransitionEnd transitionend");if(!o){o=true;}else{T=false;if(h(t)){t.removeStyleClass("sapMNavItemFlipping");}if(h(f)){f.removeStyleClass("sapMNavItemFlipping").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemFlipNext");}b.$().removeClass("sapMNavFlip");c();}};f.$().bind("webkitTransitionEnd transitionend",A);t.$().bind("webkitTransitionEnd transitionend",A);t.addStyleClass("sapMNavItemFlipping").removeStyleClass("sapMNavItemFlipPrevious");f.addStyleClass("sapMNavItemFlipping").addStyleClass("sapMNavItemFlipNext");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()));}},g(600));},g(60));}};}else{N.transitions["flip"]=N.transitions["slide"];}if(q.support.cssTransitions){N.transitions["door"]={to:function(f,t,c){var b=this;window.setTimeout(function(){b.$().addClass("sapMNavDoor");t.addStyleClass("sapMNavItemDoorInNext");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){q(this).unbind("webkitAnimationEnd animationend");if(!o){o=true;}else{T=false;if(h(t)){t.removeStyleClass("sapMNavItemDooring").removeStyleClass("sapMNavItemDoorInNext");}if(h(f)){f.removeStyleClass("sapMNavItemDooring").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemDoorInPrevious");}b.$().removeClass("sapMNavDoor");c();}};f.$().bind("webkitAnimationEnd animationend",A);t.$().bind("webkitAnimationEnd animationend",A);t.addStyleClass("sapMNavItemDooring");f.addStyleClass("sapMNavItemDooring").addStyleClass("sapMNavItemDoorInPrevious");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()));}},g(1000));},g(60));},0);},back:function(f,t,c){var b=this;b.$().addClass("sapMNavDoor");t.addStyleClass("sapMNavItemDoorOutNext");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){q(this).unbind("webkitAnimationEnd animationend");if(!o){o=true;}else{T=false;if(h(t)){t.removeStyleClass("sapMNavItemDooring").removeStyleClass("sapMNavItemDoorOutNext");}if(h(f)){f.removeStyleClass("sapMNavItemDooring").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemDoorOutPrevious");}b.$().removeClass("sapMNavDoor");c();}};f.$().bind("webkitAnimationEnd animationend",A);t.$().bind("webkitAnimationEnd animationend",A);t.addStyleClass("sapMNavItemDooring");f.addStyleClass("sapMNavItemDooring").addStyleClass("sapMNavItemDoorOutPrevious");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()));}},g(1000));},g(60));}};}else{N.transitions["door"]=N.transitions["slide"];}N.prototype.addCustomTransition=function(n,t,b){if(N.transitions[n]){q.sap.log.warning("Transition with name "+n+" already exists in "+this+". It is now being replaced by custom transition.");}N.transitions[n]={to:t,back:b};return this;};N.addCustomTransition=N.prototype.addCustomTransition;N.prototype.forceInvalidation=N.prototype.invalidate;N.prototype.invalidate=function(s){if(s==this){}else if(!s){this.forceInvalidation();}else if(s instanceof C){var I=false,p=this.getPages(),l=p.length;for(var i=0;i<l;i++){if(p[i]===s){I=true;break;}}if((!I||s===this.getCurrentPage())&&!this._isInsideAPopup()){this.forceInvalidation();}}else{this.forceInvalidation();}};N.prototype._isInsideAPopup=function(){var s;s=function(c){if(!c){return false;}if(c.getMetadata().isInstanceOf("sap.ui.core.PopupInterface")){return true;}return s(c.getParent());};return s(this);};N.prototype.removePage=function(p){p=this.removeAggregation("pages",p,p!==this.getCurrentPage());this._onPageRemoved(p);return p;};N.prototype._onPageRemoved=function(p){if(!p){return;}p.$().remove();p.removeStyleClass("sapMNavItemHidden");p.removeStyleClass("sapMNavItem");var s=this._ensurePageStackInitialized();this._pageStack=s.filter(function(P){return p.getId()!==P.id;});};N.prototype.removeAllPages=function(){var p=this.getPages();if(!p){return[];}for(var i=0;i<p.length;i++){this._onPageRemoved(p[i]);}return this.removeAllAggregation("pages");};N.prototype.addPage=function(p){var P=this.getPages();if(q.inArray(p,P)>-1){return this;}this.addAggregation("pages",p,true);p.addStyleClass("sapMNavItem");var i=P.length;if(i===0&&this.getPages().length===1&&this.getDomRef()){this._ensurePageStackInitialized();this.rerender();this._fireAdaptableContentChange(p);}return this;};N.prototype.insertPage=function(p,i){var P=this.getPages().length;this.insertAggregation("pages",p,i,true);p.addStyleClass("sapMNavItem");if(P===0&&this.getPages().length===1&&this.getDomRef()){this._ensurePageStackInitialized();this.rerender();this._fireAdaptableContentChange(p);}return this;};N.prototype._getAdaptableContent=function(){return this.getCurrentPage();};N.prototype._fireAdaptableContentChange=function(p){if(p&&this.mEventRegistry["_adaptableContentChange"]){this.fireEvent("_adaptableContentChange",{"parent":this,"adaptableContent":p});}};return N;});
