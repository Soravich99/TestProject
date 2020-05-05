/*!
 * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(w,d){var m=Math,a=d.createElement('div').style,v=(function(){var e='t,webkitT,MozT,msT,OT'.split(','),t,i=0,l=e.length;for(;i<l;i++){t=e[i]+'ransform';if(t in a){return e[i].substr(0,e[i].length-1);}}return false;})(),c=v?'-'+v.toLowerCase()+'-':'',b=F('transform'),f=F('transitionProperty'),g=F('transitionDuration'),h=F('transformOrigin'),j=F('transitionTimingFunction'),k=F('transitionDelay'),n=(/android/gi).test(navigator.appVersion),o=(/iphone|ipad/gi).test(navigator.appVersion),p=(/hp-tablet/gi).test(navigator.appVersion),q=F('perspective')in a,r='ontouchstart'in w&&!p,s=v!==false,u=F('transition')in a,R='onorientationchange'in w?'orientationchange':'resize',S=r?'touchstart':'mousedown',M=r?'touchmove':'mousemove',E=r?'touchend':'mouseup',C=r?'touchcancel':'mouseup',T=(function(){if(v===false)return false;var t={'':'transitionend','webkit':'webkitTransitionEnd','Moz':'transitionend','O':'otransitionend','ms':'MSTransitionEnd'};return t[v];})(),z=(function(){return w.requestAnimationFrame||w.webkitRequestAnimationFrame||w.mozRequestAnimationFrame||w.oRequestAnimationFrame||w.msRequestAnimationFrame||function(e){return setTimeout(e,1);};})(),A=(function(){return w.cancelRequestAnimationFrame||w.webkitCancelAnimationFrame||w.webkitCancelRequestAnimationFrame||w.mozCancelRequestAnimationFrame||w.oCancelRequestAnimationFrame||w.msCancelRequestAnimationFrame||clearTimeout;})(),B=q?' translateZ(0)':'',D=function(l,t){var x=this,i;x.wrapper=typeof l=='object'?l:d.getElementById(l);x.wrapper.style.overflow='hidden';x.scroller=x.wrapper.children[0];x.options={hScroll:true,vScroll:true,x:0,y:0,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,useTransition:false,topOffset:0,checkDOMChanges:false,handleClick:true,hScrollbar:true,vScrollbar:true,fixedScrollbar:n,hideScrollbar:o,fadeScrollbar:o&&q,scrollbarClass:'',zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:'scroll',snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){e.preventDefault();},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(i in t)x.options[i]=t[i];x.x=x.options.x;x.y=x.options.y;x.options.useTransform=s&&x.options.useTransform;x.options.hScrollbar=x.options.hScroll&&x.options.hScrollbar;x.options.vScrollbar=x.options.vScroll&&x.options.vScrollbar;x.options.zoom=x.options.useTransform&&x.options.zoom;x.options.useTransition=u&&x.options.useTransition;if(x.options.zoom&&n){B='';}x.scroller.style[f]=x.options.useTransform?c+'transform':'top left';x.scroller.style[g]='0';x.scroller.style[h]='0 0';if(x.options.useTransition)x.scroller.style[j]='cubic-bezier(0.33,0.66,0.66,1)';if(x.options.useTransform)x.scroller.style[b]='translate('+x.x+'px,'+x.y+'px)'+B;else x.scroller.style.cssText+=';position:absolute;top:'+x.y+'px;left:'+x.x+'px';if(x.options.useTransition)x.options.fixedScrollbar=true;x.refresh();x._bind(R,w);x._bind(S);if(!r){if(x.options.wheelAction!='none'){x._bind('DOMMouseScroll');x._bind('mousewheel');}}if(x.options.checkDOMChanges)x.checkDOMTime=setInterval(function(){x._checkDOMChanges();},500);};D.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var t=this;switch(e.type){case S:if(!r&&e.button!==0)return;t._start(e);break;case M:t._move(e);break;case E:case C:t._end(e);break;case R:t._resize();break;case'DOMMouseScroll':case'mousewheel':t._wheel(e);break;case T:t._transitionEnd(e);break;}},_checkDOMChanges:function(){if(this.moved||this.zoomed||this.animating||(this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))return;this.refresh();},_scrollbar:function(e){var t=this,i;if(!t[e+'Scrollbar']){if(t[e+'ScrollbarWrapper']){if(s)t[e+'ScrollbarIndicator'].style[b]='';t[e+'ScrollbarWrapper'].parentNode.removeChild(t[e+'ScrollbarWrapper']);t[e+'ScrollbarWrapper']=null;t[e+'ScrollbarIndicator']=null;}return;}if(!t[e+'ScrollbarWrapper']){i=d.createElement('div');if(t.options.scrollbarClass)i.className=t.options.scrollbarClass+e.toUpperCase();else i.style.cssText='position:absolute;z-index:100;'+(e=='h'?'height:7px;bottom:1px;left:2px;right:'+(t.vScrollbar?'7':'2')+'px':'width:7px;bottom:'+(t.hScrollbar?'7':'2')+'px;top:2px;right:1px');i.style.cssText+=';pointer-events:none;'+c+'transition-property:opacity;'+c+'transition-duration:'+(t.options.fadeScrollbar?'350ms':'0')+';overflow:hidden;opacity:'+(t.options.hideScrollbar?'0':'1');t.wrapper.appendChild(i);t[e+'ScrollbarWrapper']=i;i=d.createElement('div');if(!t.options.scrollbarClass){i.style.cssText='position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);'+c+'background-clip:padding-box;'+c+'box-sizing:border-box;'+(e=='h'?'height:100%':'width:100%')+';'+c+'border-radius:3px;border-radius:3px';}i.style.cssText+=';pointer-events:none;'+c+'transition-property:'+c+'transform;'+c+'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);'+c+'transition-duration:0;'+c+'transform: translate(0,0)'+B;if(t.options.useTransition)i.style.cssText+=';'+c+'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';t[e+'ScrollbarWrapper'].appendChild(i);t[e+'ScrollbarIndicator']=i;}if(e=='h'){t.hScrollbarSize=t.hScrollbarWrapper.clientWidth;t.hScrollbarIndicatorSize=m.max(m.round(t.hScrollbarSize*t.hScrollbarSize/t.scrollerW),8);t.hScrollbarIndicator.style.width=t.hScrollbarIndicatorSize+'px';t.hScrollbarMaxScroll=t.hScrollbarSize-t.hScrollbarIndicatorSize;t.hScrollbarProp=t.hScrollbarMaxScroll/t.maxScrollX;}else{t.vScrollbarSize=t.vScrollbarWrapper.clientHeight;t.vScrollbarIndicatorSize=m.max(m.round(t.vScrollbarSize*t.vScrollbarSize/t.scrollerH),8);t.vScrollbarIndicator.style.height=t.vScrollbarIndicatorSize+'px';t.vScrollbarMaxScroll=t.vScrollbarSize-t.vScrollbarIndicatorSize;t.vScrollbarProp=t.vScrollbarMaxScroll/t.maxScrollY;}t._scrollbarPos(e,true);},_resize:function(){var t=this;setTimeout(function(){t.refresh();},n?200:0);},_pos:function(x,y){if(this.zoomed)return;x=this.hScroll?x:0;y=this.vScroll?y:0;if(this.options.useTransform){this.scroller.style[b]='translate('+x+'px,'+y+'px) scale('+this.scale+')'+B;}else{x=m.round(x);y=m.round(y);this.scroller.style.left=x+'px';this.scroller.style.top=y+'px';}this.x=x;this.y=y;this._scrollbarPos('h');this._scrollbarPos('v');},_scrollbarPos:function(e,i){var t=this,l=e=='h'?t.x:t.y,x;if(!t[e+'Scrollbar'])return;l=t[e+'ScrollbarProp']*l;if(l<0){if(!t.options.fixedScrollbar){x=t[e+'ScrollbarIndicatorSize']+m.round(l*3);if(x<8)x=8;t[e+'ScrollbarIndicator'].style[e=='h'?'width':'height']=x+'px';}l=0;}else if(l>t[e+'ScrollbarMaxScroll']){if(!t.options.fixedScrollbar){x=t[e+'ScrollbarIndicatorSize']-m.round((l-t[e+'ScrollbarMaxScroll'])*3);if(x<8)x=8;t[e+'ScrollbarIndicator'].style[e=='h'?'width':'height']=x+'px';l=t[e+'ScrollbarMaxScroll']+(t[e+'ScrollbarIndicatorSize']-x);}else{l=t[e+'ScrollbarMaxScroll'];}}t[e+'ScrollbarWrapper'].style[k]='0';t[e+'ScrollbarWrapper'].style.opacity=i&&t.options.hideScrollbar?'0':'1';t[e+'ScrollbarIndicator'].style[b]='translate('+(e=='h'?l+'px,0)':'0,'+l+'px)')+B;},_start:function(e){var t=this,i=r?e.touches[0]:e,l,x,y,G,H;if(!t.enabled)return;if(t.options.onBeforeScrollStart)t.options.onBeforeScrollStart.call(t,e);if(t.options.useTransition||t.options.zoom)t._transitionTime(0);t.moved=false;t.animating=false;t.zoomed=false;t.distX=0;t.distY=0;t.absDistX=0;t.absDistY=0;t.dirX=0;t.dirY=0;if(t.options.zoom&&r&&e.touches.length>1){G=m.abs(e.touches[0].pageX-e.touches[1].pageX);H=m.abs(e.touches[0].pageY-e.touches[1].pageY);t.touchesDistStart=m.sqrt(G*G+H*H);t.originX=m.abs(e.touches[0].pageX+e.touches[1].pageX-t.wrapperOffsetLeft*2)/2-t.x;t.originY=m.abs(e.touches[0].pageY+e.touches[1].pageY-t.wrapperOffsetTop*2)/2-t.y;if(t.options.onZoomStart)t.options.onZoomStart.call(t,e);}if(t.options.momentum){if(t.options.useTransform){l=getComputedStyle(t.scroller,null)[b].replace(/[^0-9\-.,]/g,'').split(',');x=+(l[12]||l[4]);y=+(l[13]||l[5]);}else{x=+getComputedStyle(t.scroller,null).left.replace(/[^0-9-]/g,'');y=+getComputedStyle(t.scroller,null).top.replace(/[^0-9-]/g,'');}if(x!=t.x||y!=t.y){if(t.options.useTransition)t._unbind(T);else A(t.aniTime);t.steps=[];t._pos(x,y);if(t.options.onScrollEnd)t.options.onScrollEnd.call(t);}}t.absStartX=t.x;t.absStartY=t.y;t.startX=t.x;t.startY=t.y;t.pointX=i.pageX;t.pointY=i.pageY;t.startTime=e.timeStamp||Date.now();if(t.options.onScrollStart)t.options.onScrollStart.call(t,e);t._bind(M,w);t._bind(E,w);t._bind(C,w);},_move:function(e){var t=this,i=r?e.touches[0]:e,l=i.pageX-t.pointX,x=i.pageY-t.pointY,y=t.x+l,G=t.y+x,H,I,J,K=e.timeStamp||Date.now();if(t.options.onBeforeScrollMove)t.options.onBeforeScrollMove.call(t,e);if(t.options.zoom&&r&&e.touches.length>1){H=m.abs(e.touches[0].pageX-e.touches[1].pageX);I=m.abs(e.touches[0].pageY-e.touches[1].pageY);t.touchesDist=m.sqrt(H*H+I*I);t.zoomed=true;J=1/t.touchesDistStart*t.touchesDist*this.scale;if(J<t.options.zoomMin)J=0.5*t.options.zoomMin*Math.pow(2.0,J/t.options.zoomMin);else if(J>t.options.zoomMax)J=2.0*t.options.zoomMax*Math.pow(0.5,t.options.zoomMax/J);t.lastScale=J/this.scale;y=this.originX-this.originX*t.lastScale+this.x,G=this.originY-this.originY*t.lastScale+this.y;this.scroller.style[b]='translate('+y+'px,'+G+'px) scale('+J+')'+B;if(t.options.onZoom)t.options.onZoom.call(t,e);return;}t.pointX=i.pageX;t.pointY=i.pageY;if(y>0||y<t.maxScrollX){y=t.options.bounce?t.x+(l/2):y>=0||t.maxScrollX>=0?0:t.maxScrollX;}if(G>t.minScrollY||G<t.maxScrollY){G=t.options.bounce?t.y+(x/2):G>=t.minScrollY||t.maxScrollY>=0?t.minScrollY:t.maxScrollY;}t.distX+=l;t.distY+=x;t.absDistX=m.abs(t.distX);t.absDistY=m.abs(t.distY);if(t.absDistX<6&&t.absDistY<6){return;}if(t.options.lockDirection){if(t.absDistX>t.absDistY+5){G=t.y;x=0;}else if(t.absDistY>t.absDistX+5){y=t.x;l=0;}}t.moved=true;t._pos(y,G);t.dirX=l>0?-1:l<0?1:0;t.dirY=x>0?-1:x<0?1:0;if(K-t.startTime>300){t.startTime=K;t.startX=t.x;t.startY=t.y;}if(t.options.onScrollMove)t.options.onScrollMove.call(t,e);},_end:function(e){if(r&&e.touches.length!==0)return;var t=this,i=r?e.changedTouches[0]:e,l,x,y={dist:0,time:0},G={dist:0,time:0},H=(e.timeStamp||Date.now())-t.startTime,I=t.x,J=t.y,K,L,N,O,P;t._unbind(M,w);t._unbind(E,w);t._unbind(C,w);if(t.options.onBeforeScrollEnd)t.options.onBeforeScrollEnd.call(t,e);if(t.zoomed){P=t.scale*t.lastScale;P=Math.max(t.options.zoomMin,P);P=Math.min(t.options.zoomMax,P);t.lastScale=P/t.scale;t.scale=P;t.x=t.originX-t.originX*t.lastScale+t.x;t.y=t.originY-t.originY*t.lastScale+t.y;t.scroller.style[g]='200ms';t.scroller.style[b]='translate('+t.x+'px,'+t.y+'px) scale('+t.scale+')'+B;t.zoomed=false;t.refresh();if(t.options.onZoomEnd)t.options.onZoomEnd.call(t,e);return;}if(!t.moved){if(r){if(t.doubleTapTimer&&t.options.zoom){clearTimeout(t.doubleTapTimer);t.doubleTapTimer=null;if(t.options.onZoomStart)t.options.onZoomStart.call(t,e);t.zoom(t.pointX,t.pointY,t.scale==1?t.options.doubleTapZoom:1);if(t.options.onZoomEnd){setTimeout(function(){t.options.onZoomEnd.call(t,e);},200);}}else if(this.options.handleClick){t.doubleTapTimer=setTimeout(function(){t.doubleTapTimer=null;l=i.target;while(l.nodeType!=1)l=l.parentNode;if(l.tagName!='SELECT'&&l.tagName!='INPUT'&&l.tagName!='TEXTAREA'){x=d.createEvent('MouseEvents');x.initMouseEvent('click',true,true,e.view,1,i.screenX,i.screenY,i.clientX,i.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);x._fake=true;l.dispatchEvent(x);}},t.options.zoom?250:0);}}t._resetPos(400);if(t.options.onTouchEnd)t.options.onTouchEnd.call(t,e);return;}if(H<300&&t.options.momentum){y=I?t._momentum(I-t.startX,H,-t.x,t.scrollerW-t.wrapperW+t.x,t.options.bounce?t.wrapperW:0):y;G=J?t._momentum(J-t.startY,H,-t.y,(t.maxScrollY<0?t.scrollerH-t.wrapperH+t.y-t.minScrollY:0),t.options.bounce?t.wrapperH:0):G;I=t.x+y.dist;J=t.y+G.dist;if((t.x>0&&I>0)||(t.x<t.maxScrollX&&I<t.maxScrollX))y={dist:0,time:0};if((t.y>t.minScrollY&&J>t.minScrollY)||(t.y<t.maxScrollY&&J<t.maxScrollY))G={dist:0,time:0};}if(y.dist||G.dist){N=m.max(m.max(y.time,G.time),10);if(t.options.snap){K=I-t.absStartX;L=J-t.absStartY;if(m.abs(K)<t.options.snapThreshold&&m.abs(L)<t.options.snapThreshold){t.scrollTo(t.absStartX,t.absStartY,200);}else{O=t._snap(I,J);I=O.x;J=O.y;N=m.max(O.time,N);}}t.scrollTo(m.round(I),m.round(J),N);if(t.options.onTouchEnd)t.options.onTouchEnd.call(t,e);return;}if(t.options.snap){K=I-t.absStartX;L=J-t.absStartY;if(m.abs(K)<t.options.snapThreshold&&m.abs(L)<t.options.snapThreshold)t.scrollTo(t.absStartX,t.absStartY,200);else{O=t._snap(t.x,t.y);if(O.x!=t.x||O.y!=t.y)t.scrollTo(O.x,O.y,O.time);}if(t.options.onTouchEnd)t.options.onTouchEnd.call(t,e);return;}t._resetPos(200);if(t.options.onTouchEnd)t.options.onTouchEnd.call(t,e);},_resetPos:function(t){var e=this,i=e.x>=0?0:e.x<e.maxScrollX?e.maxScrollX:e.x,l=e.y>=e.minScrollY||e.maxScrollY>0?e.minScrollY:e.y<e.maxScrollY?e.maxScrollY:e.y;if(i==e.x&&l==e.y){if(e.moved){e.moved=false;if(e.options.onScrollEnd)e.options.onScrollEnd.call(e);}if(e.hScrollbar&&e.options.hideScrollbar){if(v=='webkit')e.hScrollbarWrapper.style[k]='300ms';e.hScrollbarWrapper.style.opacity='0';}if(e.vScrollbar&&e.options.hideScrollbar){if(v=='webkit')e.vScrollbarWrapper.style[k]='300ms';e.vScrollbarWrapper.style.opacity='0';}return;}e.scrollTo(i,l,t||0);},_wheel:function(e){var t=this,i,l,x,y,G;if('wheelDeltaX'in e){i=e.wheelDeltaX/12;l=e.wheelDeltaY/12;}else if('wheelDelta'in e){i=l=e.wheelDelta/12;}else if('detail'in e){i=l=-e.detail*3;}else{return;}if(t.options.wheelAction=='zoom'){G=t.scale*Math.pow(2,1/3*(l?l/Math.abs(l):0));if(G<t.options.zoomMin)G=t.options.zoomMin;if(G>t.options.zoomMax)G=t.options.zoomMax;if(G!=t.scale){if(!t.wheelZoomCount&&t.options.onZoomStart)t.options.onZoomStart.call(t,e);t.wheelZoomCount++;t.zoom(e.pageX,e.pageY,G,400);setTimeout(function(){t.wheelZoomCount--;if(!t.wheelZoomCount&&t.options.onZoomEnd)t.options.onZoomEnd.call(t,e);},400);}return;}x=t.x+i;y=t.y+l;if(x>0)x=0;else if(x<t.maxScrollX)x=t.maxScrollX;if(y>t.minScrollY)y=t.minScrollY;else if(y<t.maxScrollY)y=t.maxScrollY;if(t.maxScrollY<0){t.scrollTo(x,y,0);}},_transitionEnd:function(e){var t=this;if(e.target!=t.scroller)return;t._unbind(T);t._startAni();},_startAni:function(){var t=this,e=t.x,i=t.y,l=Date.now(),x,y,G;if(t.animating)return;if(!t.steps.length){t._resetPos(400);return;}x=t.steps.shift();if(x.x==e&&x.y==i)x.time=0;t.animating=true;t.moved=true;if(t.options.useTransition){t._transitionTime(x.time);t._pos(x.x,x.y);t.animating=false;if(x.time)t._bind(T);else t._resetPos(0);return;}G=function(){var H=Date.now(),I,J;if(H>=l+x.time){t._pos(x.x,x.y);t.animating=false;if(t.options.onAnimationEnd)t.options.onAnimationEnd.call(t);t._startAni();return;}H=(H-l)/x.time-1;y=m.sqrt(1-H*H);I=(x.x-e)*y+e;J=(x.y-i)*y+i;t._pos(I,J);if(t.animating)t.aniTime=z(G);};G();},_transitionTime:function(t){t+='ms';this.scroller.style[g]=t;if(this.hScrollbar)this.hScrollbarIndicator.style[g]=t;if(this.vScrollbar)this.vScrollbarIndicator.style[g]=t;},_momentum:function(e,t,i,l,x){var y=0.0006,G=m.abs(e)/t,H=(G*G)/(2*y),I=0,J=0;if(e>0&&H>i){J=x/(6/(H/G*y));i=i+J;G=G*i/H;H=i;}else if(e<0&&H>l){J=x/(6/(H/G*y));l=l+J;G=G*l/H;H=l;}H=H*(e<0?-1:1);I=G/y;return{dist:H,time:m.round(I)};},_offset:function(e){var l=-e.offsetLeft,t=-e.offsetTop;while(e=e.offsetParent){l-=e.offsetLeft;t-=e.offsetTop;}if(e!=this.wrapper){l*=this.scale;t*=this.scale;}return{left:l,top:t};},_snap:function(x,y){var t=this,i,l,e,G,H,I;e=t.pagesX.length-1;for(i=0,l=t.pagesX.length;i<l;i++){if(x>=t.pagesX[i]){e=i;break;}}if(e==t.currPageX&&e>0&&t.dirX<0)e--;x=t.pagesX[e];H=m.abs(x-t.pagesX[t.currPageX]);H=H?m.abs(t.x-x)/H*500:0;t.currPageX=e;e=t.pagesY.length-1;for(i=0;i<e;i++){if(y>=t.pagesY[i]){e=i;break;}}if(e==t.currPageY&&e>0&&t.dirY<0)e--;y=t.pagesY[e];I=m.abs(y-t.pagesY[t.currPageY]);I=I?m.abs(t.y-y)/I*500:0;t.currPageY=e;G=m.round(m.max(H,I))||200;return{x:x,y:y,time:G};},_bind:function(t,e,i){(e||this.scroller).addEventListener(t,this,!!i);},_unbind:function(t,e,i){(e||this.scroller).removeEventListener(t,this,!!i);},destroy:function(){var t=this;t.scroller.style[b]='';t.hScrollbar=false;t.vScrollbar=false;t._scrollbar('h');t._scrollbar('v');t._unbind(R,w);t._unbind(S);t._unbind(M,w);t._unbind(E,w);t._unbind(C,w);if(!t.options.hasTouch){t._unbind('DOMMouseScroll');t._unbind('mousewheel');}if(t.options.useTransition)t._unbind(T);if(t.options.checkDOMChanges)clearInterval(t.checkDOMTime);if(t.options.onDestroy)t.options.onDestroy.call(t);},refresh:function(){var t=this,e,i,l,x,y=0,G=0;if(t.scale<t.options.zoomMin)t.scale=t.options.zoomMin;t.wrapperW=t.wrapper.clientWidth||1;t.wrapperH=t.wrapper.clientHeight||1;t.minScrollY=-t.options.topOffset||0;t.scrollerW=m.round(t.scroller.offsetWidth*t.scale);t.scrollerH=m.round((t.scroller.offsetHeight+t.minScrollY)*t.scale);t.maxScrollX=t.wrapperW-t.scrollerW;t.maxScrollY=t.wrapperH-t.scrollerH+t.minScrollY;t.dirX=0;t.dirY=0;if(t.options.onRefresh)t.options.onRefresh.call(t);t.hScroll=t.options.hScroll&&t.maxScrollX<0;t.vScroll=t.options.vScroll&&(!t.options.bounceLock&&!t.hScroll||t.scrollerH>t.wrapperH);t.hScrollbar=t.hScroll&&t.options.hScrollbar;t.vScrollbar=t.vScroll&&t.options.vScrollbar&&t.scrollerH>t.wrapperH;e=t._offset(t.wrapper);t.wrapperOffsetLeft=-e.left;t.wrapperOffsetTop=-e.top;if(typeof t.options.snap=='string'){t.pagesX=[];t.pagesY=[];x=t.scroller.querySelectorAll(t.options.snap);for(i=0,l=x.length;i<l;i++){y=t._offset(x[i]);y.left+=t.wrapperOffsetLeft;y.top+=t.wrapperOffsetTop;t.pagesX[i]=y.left<t.maxScrollX?t.maxScrollX:y.left*t.scale;t.pagesY[i]=y.top<t.maxScrollY?t.maxScrollY:y.top*t.scale;}}else if(t.options.snap){t.pagesX=[];while(y>=t.maxScrollX){t.pagesX[G]=y;y=y-t.wrapperW;G++;}if(t.maxScrollX%t.wrapperW)t.pagesX[t.pagesX.length]=t.maxScrollX-t.pagesX[t.pagesX.length-1]+t.pagesX[t.pagesX.length-1];y=0;G=0;t.pagesY=[];while(y>=t.maxScrollY){t.pagesY[G]=y;y=y-t.wrapperH;G++;}if(t.maxScrollY%t.wrapperH)t.pagesY[t.pagesY.length]=t.maxScrollY-t.pagesY[t.pagesY.length-1]+t.pagesY[t.pagesY.length-1];}t._scrollbar('h');t._scrollbar('v');if(!t.zoomed){t.scroller.style[g]='0';t._resetPos(400);}},scrollTo:function(x,y,t,e){var G=this,H=x,i,l;G.stop();if(!H.length)H=[{x:x,y:y,time:t,relative:e}];for(i=0,l=H.length;i<l;i++){if(H[i].relative){H[i].x=G.x-H[i].x;H[i].y=G.y-H[i].y;}G.steps.push({x:H[i].x,y:H[i].y,time:H[i].time||0});}G._startAni();},scrollToElement:function(e,t){var i=this,l;e=e.nodeType?e:i.scroller.querySelector(e);if(!e)return;l=i._offset(e);l.left+=i.wrapperOffsetLeft;l.top+=i.wrapperOffsetTop;l.left=l.left>0?0:l.left<i.maxScrollX?i.maxScrollX:l.left;l.top=l.top>i.minScrollY?i.minScrollY:l.top<i.maxScrollY?i.maxScrollY:l.top;t=t===undefined?m.max(m.abs(l.left)*2,m.abs(l.top)*2):t;i.scrollTo(l.left,l.top,t);},scrollToPage:function(e,i,t){var l=this,x,y;t=t===undefined?400:t;if(l.options.onScrollStart)l.options.onScrollStart.call(l);if(l.options.snap){e=e=='next'?l.currPageX+1:e=='prev'?l.currPageX-1:e;i=i=='next'?l.currPageY+1:i=='prev'?l.currPageY-1:i;e=e<0?0:e>l.pagesX.length-1?l.pagesX.length-1:e;i=i<0?0:i>l.pagesY.length-1?l.pagesY.length-1:i;l.currPageX=e;l.currPageY=i;x=l.pagesX[e];y=l.pagesY[i];}else{x=-l.wrapperW*e;y=-l.wrapperH*i;if(x<l.maxScrollX)x=l.maxScrollX;if(y<l.maxScrollY)y=l.maxScrollY;}l.scrollTo(x,y,t);},disable:function(){this.stop();this._resetPos(0);this.enabled=false;this._unbind(M,w);this._unbind(E,w);this._unbind(C,w);},enable:function(){this.enabled=true;},stop:function(){if(this.options.useTransition)this._unbind(T);else A(this.aniTime);this.steps=[];this.moved=false;this.animating=false;},zoom:function(x,y,e,t){var i=this,l=e/i.scale;if(!i.options.useTransform)return;i.zoomed=true;t=t===undefined?200:t;x=x-i.wrapperOffsetLeft-i.x;y=y-i.wrapperOffsetTop-i.y;i.x=x-x*l+i.x;i.y=y-y*l+i.y;i.scale=e;i.refresh();i.x=i.x>0?0:i.x<i.maxScrollX?i.maxScrollX:i.x;i.y=i.y>i.minScrollY?i.minScrollY:i.y<i.maxScrollY?i.maxScrollY:i.y;i.scroller.style[g]=t+'ms';i.scroller.style[b]='translate('+i.x+'px,'+i.y+'px) scale('+e+')'+B;i.zoomed=false;},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating;}};function F(e){if(v==='')return e;e=e.charAt(0).toUpperCase()+e.substr(1);return v+e;}a=null;if(typeof exports!=='undefined')exports.iScroll=D;else w.iScroll=D;})(window,document);
