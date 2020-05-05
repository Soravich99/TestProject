sap.ui.define(function(){"use strict";var P=function(x,y){this.x=x||0;this.y=y||0;};P.prototype.getDistance=function(p){var x=this.x-p.x;var y=this.y-p.y;return Math.floor(Math.sqrt(x*x+y*y));};P.prototype.getSegment=function(o){if(this.x<=o.x&&this.y<=o.y){return 1;}if(this.x<=o.x&&this.y>=o.y){return 2;}if(this.x>=o.x&&this.y>=o.y){return 3;}if(this.x>=o.x&&this.y<=o.y){return 4;}};P.prototype.offset=function(o,O){this.x=this.x+o;this.y=this.y+O;};var R=function(x,X,y,Y){this.x={min:x,max:X};this.y={min:y,max:Y};};var c=(window.innerWidth>0)?window.innerWidth:screen.width;var a=(window.innerHeight>0)?window.innerHeight:screen.height;var b={cpr1:new R(0,c/4,0,a/4),cpr2:new R(c/2,c,0,a/4),cpr3:new R(c/4,3*c/4,a*3/4,a)};var r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(d){return setTimeout(d,1);};var m=function(){this.init();};m.prototype={radiusRange:{min:800,max:900},init:function(){this.Id="shell-shapes";var d={cpr1:b.cpr1,cpr2:b.cpr2,cpr3:b.cpr3},e,f,s,g,i=sap.ui.Device.system.phone;this.shapes=[];var h;for(h in d){e=Math.random(this.radiusRange.max-this.radiusRange.min)+this.radiusRange.min;f=this.getRandomPoint(d[h]);s=this._getSquarePoints(e,f);g=this._calculatebezierCurves(e,s);this.shapes.push({bezierCurves:g,centerPoint:f});}for(var j in this.shapes){var v=this._generateRandomAmorphousShapeValues();this.shapes[j]=this.makeAmorphousShape(this.shapes[j],v.edge0.edgeNum,v.edge0.xOffSet,v.edge0.yOffSet,v.edge0.xStretch);this.shapes[j]=this.makeAmorphousShape(this.shapes[j],v.edge1.edgeNum,v.edge1.xOffSet,v.edge1.yOffSet,v.edge1.xStretch);}sap.ui.Device.resize.attachHandler(this.resizeHandler,this);if(!i){sap.ui.getCore().getEventBus().subscribe("launchpad","afterSwitchState",this.startAnimation,this);}},_generateRandomAmorphousShapeValues:function(){var v={edge0:{edgeNum:0,xOffSet:0,yOffSet:0,xStretch:0},edge1:{edgeNum:0,xOffSet:0,yOffSet:0,xStretch:0}};var n=this._getRandomInt(0,3);for(var e in v){v[e].edgeNum=n;v[e].xOffSet=this._getRandomInt(200,400);v[e].yOffSet=this._getRandomInt(-200,-400);n+=this._getRandomInt(0,1)<0.5?-1:1;if(n===-1){n=3;}if(n===4){n=0;}}n=this._getRandomInt(0,1);if(n<0.5){n=n<0.25?0:1;v["edge"+n].xStretch=this._getRandomInt(0,200);}return v;},getPoint:function(x,y){return new P(x,y);},getRandomPoint:function(d){var x=Math.floor(Math.random()*(d.x.max-d.x.min)+d.x.min),y=Math.floor(Math.random()*(d.y.max-d.y.min)+d.y.min);return new P(x,y);},resizeHandler:function(){var d=jQuery('#'+this.Id)[0];if(d){d.width=window.innerWidth;d.height=window.innerHeight;this.drawShapes();}},enableAnimationDrawing:function(e){this._enableDrawing=e;},startAnimation:function(e,d,D){if(!this._enableDrawing){return;}var f=2500;var t,g=this.shapes[0].centerPoint.x,h=this.shapes[1].centerPoint.x,i=this.shapes[2].centerPoint.x,j,k=parseFloat(jQuery("body").css("font-size")),T=D.getParameter('to'),F=D.getParameter('from');if(!this.leftOffset||!this.rigthOffset){this.setTranslateOffset();}if(sap.ui.getCore().getConfiguration().getRTL()){if(T==="RightCenter"){T="LeftCenter";}else if(T==="LeftCenter"){T="RightCenter";}if(F==="RightCenter"){F="LeftCenter";}else if(F==="LeftCenter"){F="RightCenter";}}if(T==="RightCenter"){j=1;t=this.rigthOffset*k;}if(T==="LeftCenter"){j=-1;t=this.leftOffset*k;}if(T==="Center"){if(F==="RightCenter"){j=-1;t=this.rigthOffset*k;}if(F==="LeftCenter"){j=1;t=this.leftOffset*k;}}this.animateTranslation(g,h,i,t,f,j);},setTranslateOffset:function(){var t=sap.ui.core.theming.Parameters,l,s;if(window.matchMedia('(min-width: 1920px)').matches){l=t.get('sapUshellLeftViewPortWidthL');s=t.get('sapUshellRightViewPortWidthXXL');}else if(window.matchMedia('(min-width: 1600px)').matches){l=t.get('sapUshellLeftViewPortWidthM');s=t.get('sapUshellRightViewPortWidthXL');}else if(window.matchMedia('(min-width: 1440px)').matches){l=t.get('sapUshellLeftViewPortWidthM');s=t.get('sapUshellRightViewPortWidthL');}else if(window.matchMedia('(min-width: 1280px)').matches){l=t.get('sapUshellLeftViewPortWidthM');s=t.get('sapUshellRightViewPortWidthM');}else if(window.matchMedia('(min-width: 1024px)').matches){l=t.get('sapUshellLeftViewPortWidthXS');s=t.get('sapUshellRightViewPortWidthS');}else if(window.matchMedia('(min-width: 601px)').matches){l=t.get('sapUshellLeftViewPortWidthXS');s=t.get('sapUshellRightViewPortWidthXS');}else if(window.matchMedia('(max-width : 600px)').matches){l=(jQuery(window).width()/parseFloat(jQuery("body").css("font-size")))+"";s=(jQuery(window).width()/parseFloat(jQuery("body").css("font-size")))+"";}this.leftOffset=parseInt(l.replace("rem",""),10);this.rigthOffset=parseInt(s.replace("rem",""),10);},animateTranslation:function(d,e,f,t,g,h){var s=new Date().getTime();var i=s+g,j=t,k=t/4,l=t/2,o,n,p,q=this;var u=function(){var v=new Date().getTime(),w=1-Math.pow(1-Math.min((g-(i-v))/g,1),5);o=d+h*k*w;n=e+h*l*w;p=f+h*j*w;q.updateShapes(o,n,p);q.drawShapes();if(w<1){r(u);}};return u();},updateShapes:function(o,d,e){var t=this,f=this.shapes[0].centerPoint.x-o,g=this.shapes[1].centerPoint.x-d,h=this.shapes[2].centerPoint.x-e;this.shapes[0].centerPoint=new P(o,this.shapes[0].centerPoint.y);this.shapes[1].centerPoint=new P(d,this.shapes[1].centerPoint.y);this.shapes[2].centerPoint=new P(e,this.shapes[2].centerPoint.y);this.shapes[0].bezierCurves.forEach(function(i,I){t.shapes[0].bezierCurves[I].controlPoint1=new P(i.controlPoint1.x+f,i.controlPoint1.y);t.shapes[0].bezierCurves[I].controlPoint2=new P(i.controlPoint2.x+f,i.controlPoint2.y);t.shapes[0].bezierCurves[I].startPoint=new P(i.startPoint.x+f,i.startPoint.y);t.shapes[0].bezierCurves[I].endPoint=new P(i.endPoint.x+f,i.endPoint.y);});this.shapes[1].bezierCurves.forEach(function(i,I){t.shapes[1].bezierCurves[I].controlPoint1=new P(i.controlPoint1.x+g,i.controlPoint1.y);t.shapes[1].bezierCurves[I].controlPoint2=new P(i.controlPoint2.x+g,i.controlPoint2.y);t.shapes[1].bezierCurves[I].startPoint=new P(i.startPoint.x+g,i.startPoint.y);t.shapes[1].bezierCurves[I].endPoint=new P(i.endPoint.x+g,i.endPoint.y);});this.shapes[2].bezierCurves.forEach(function(i,I){t.shapes[2].bezierCurves[I].controlPoint1=new P(i.controlPoint1.x+h,i.controlPoint1.y);t.shapes[2].bezierCurves[I].controlPoint2=new P(i.controlPoint2.x+h,i.controlPoint2.y);t.shapes[2].bezierCurves[I].startPoint=new P(i.startPoint.x+h,i.startPoint.y);t.shapes[2].bezierCurves[I].endPoint=new P(i.endPoint.x+h,i.endPoint.y);});},makeAmorphousShape:function(s,d,x,y,e){var f,g,h;switch(d){case 0:f=s.bezierCurves[0].controlPoint1;g=s.bezierCurves[3].controlPoint2;h=this._rotatePoints(x,y,f,g);s.bezierCurves[0].controlPoint1=h[0];s.bezierCurves[3].controlPoint2=h[1];break;case 1:f=s.bezierCurves[0].controlPoint2;g=s.bezierCurves[1].controlPoint1;h=this._rotatePoints(x,y,f,g);s.bezierCurves[0].controlPoint2=h[0];s.bezierCurves[1].controlPoint1=h[1];break;case 2:f=s.bezierCurves[1].controlPoint2;g=s.bezierCurves[2].controlPoint1;h=this._rotatePoints(x,y,f,g);s.bezierCurves[1].controlPoint2=h[0];s.bezierCurves[2].controlPoint1=h[1];break;case 3:f=s.bezierCurves[2].controlPoint2;g=s.bezierCurves[3].controlPoint1;h=this._rotatePoints(x,y,f,g);s.bezierCurves[2].controlPoint2=h[0];s.bezierCurves[3].controlPoint1=h[1];break;}return s;},_rotatePoints:function(d,e,f,g){var x,y,h=[];x=f.x+d;y=f.y+e;h.push(new P(x,y));x=g.x-d;y=g.y-e;h.push(new P(x,y));return h;},_getSquarePoints:function(d,e){var s=[];s[0]=new P(e.x+d,e.y);s[1]=new P(e.x,e.y-d);s[2]=new P(e.x-d,e.y);s[3]=new P(e.x,e.y+d);return s;},_getRandomInt:function(d,e){if(d==0&&e==1){return Math.random();}return Math.floor(Math.random()*(e-d+1))+d;},_calculatebezierCurves:function(d,s){var e=[];var f;var g;var h,i;i=s[0];h=s[1];f=new P(i.x,i.y-d/2);g=new P(i.x-d/2,i.y-d);e.push({startPoint:i,endPoint:h,controlPoint1:f,controlPoint2:g});i=s[1];h=s[2];f=new P(i.x-d/2,i.y);g=new P(i.x-d,i.y+d/2);e.push({startPoint:i,endPoint:h,controlPoint1:f,controlPoint2:g});i=s[2];h=s[3];f=new P(i.x,i.y+d/2);g=new P(i.x+d/2,i.y+d);e.push({startPoint:i,endPoint:h,controlPoint1:f,controlPoint2:g});i=s[3];h=s[0];f=new P(i.x+d/2,i.y);g=new P(i.x+d,i.y-d/2);e.push({startPoint:i,endPoint:h,controlPoint1:f,controlPoint2:g});return e;},drawShapes:function(){var d=jQuery('#'+this.Id)[0],B=sap.ui.core.theming.Parameters.get("sapUshellShellBackgroundShapesColor");if(d&&d.getContext){var e=d.getContext('2d'),s,f,g,h;e.clearRect(0,0,c*2,a*2);if(B){for(var j=0;j<this.shapes.length;j++){e.beginPath();s=this.shapes[j].bezierCurves[0].startPoint;e.moveTo(s.x,s.y);for(var i=0;i<this.shapes[j].bezierCurves.length;i++){f=this.shapes[j].bezierCurves[i].endPoint;g=this.shapes[j].bezierCurves[i].controlPoint1;h=this.shapes[j].bezierCurves[i].controlPoint2;e.bezierCurveTo(Math.floor(g.x),Math.floor(g.y),Math.floor(h.x),Math.floor(h.y),Math.floor(f.x),Math.floor(f.y));}e.closePath();e.fillStyle=B;e.fill();}}}}};var C=new m();return C;},true);
