(function(){"use strict";jQuery.sap.declare("sap.ovp.cards.LoadingUtils");sap.ovp.cards.LoadingUtils={bAnimationStarted:false,aCanvas:[],bPageAndCardLoading:false,bAnimationStop:false,startAnimation:function(){var a=jQuery(window).width();var W={speed:(0.02*a),currentPosition:0.01,width:0.2,backgroundColor:"#f5f5f0",waveColor:"#e6e6e6"};var u=function(){W.currentPosition+=W.speed;if(W.currentPosition>a){W.currentPosition=0.01;}};var r=function(d){var p=jQuery(d).parentsUntil(".sapUiComponentContainer");if(p.length===0){return;}var P=p[p.length-1].parentNode.parentNode;if(!P||P.offsetLeft==undefined){return;}var e=P.offsetLeft;var f=d.offsetWidth;var C=d.getContext("2d");var g=C.createLinearGradient(0,0,d.width,0);g.addColorStop(0,W.backgroundColor);if(W.currentPosition>e&&W.currentPosition<(e+f)){var h=(W.currentPosition-e)/f;g.addColorStop(Math.max(h-W.width,0.01),W.backgroundColor);g.addColorStop(h,W.waveColor);g.addColorStop(Math.min(h+W.width,0.99),W.backgroundColor);}g.addColorStop(1,W.backgroundColor);C.fillStyle=g;C.fillRect(0,0,d.width,d.height);};var b=function(){if(!sap.ovp.cards.LoadingUtils.bAnimationStop){u();var C=sap.ovp.cards.LoadingUtils.aCanvas;for(var i=0;i<C.length;i++){r(C[i]);}c(b);}};var w=window,c=w.requestAnimationFrame||w.webkitRequestAnimationFrame||w.msRequestAnimationFrame||w.mozRequestAnimationFrame;b();}};}());
