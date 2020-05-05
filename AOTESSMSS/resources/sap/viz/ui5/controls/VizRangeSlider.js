/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/m/RangeSlider'],function(l,R){"use strict";var V=R.extend("sap.viz.ui5.controls.VizRangeSlider",{metadata:{library:"sap.viz",properties:{left:{type:"string",group:"Data",defaultValue:"0px"},top:{type:"string",group:"Data",defaultValue:"0px"},height:{type:"string",group:"Data",defaultValue:"0px"},showPercentageLabel:{type:"boolean",group:"Appearance",defaultValue:"true"},showStartEndLabel:{type:"boolean",group:"Appearance",defaultValue:"true"}}}});V.prototype._recalculateRange=function(){R.prototype._recalculateRange.apply(this,arguments);var a=this.getDomRef("leftMock");var r=this.getDomRef("rightMock");var d=this.getDomRef("label");var b=this.getRange();var m=Math.min(b[0],b[1]);var c=Math.max(b[0],b[1]);a.style.right=(this.getMax()-m)/(this.getMax()-this.getMin())*100+"%";r.style.left=(c-this.getMin())/(this.getMax()-this.getMin())*100+"%";d.style.left=(c+m)/(this.getMax()-this.getMin())*50+"%";d.innerHTML=((c-m)/(this.getMax()-this.getMin())*100).toFixed(0)+"%";return this;};V.prototype._ontouchmove=function(I,a,h,b,e){var o,r,c,d,p=e.targetTouches?e.targetTouches[0].pageX:e.pageX,m=this.getMax(),M=this.getMin(),f=[],g=[];e.preventDefault();e.setMarked();if(e.isMarked("delayedMouseEvent")||!this.getEnabled()||e.button){return;}o=this._calculateHandlePosition(p,b)-I;for(var i=0;i<a.length;i++){f[i]=a[i]+o;}g=this._getNormalizedRange(this.getRange(),a,h);r=f.every(function(v,j){return v===g[j];});c=f.every(function(v){return(v>=M&&v<=m);});d=g.indexOf(M)>-1||g.indexOf(m)>-1;if(!r){if((h.length===1)||c||!d){if(h.length===1){this._positionCheck(h,o,a);}else{h.map(function(H){this._updateHandle(H,a[this._getIndexOfHandle(H)]+o);},this);}}this._adjustTooltipsContainer();g=this._getNormalizedRange(this.getRange(),a,h);}this.setRange(g);};V.prototype._positionCheck=function(h,o,I){var a=this._getIndexOfHandle(h[0]);var r=this.getRange();var p=I[a]+o;var t=[];for(var i=0;i<r.length;i++){t[i]=r[i];}t[a]=p;if(t[0]>=t[1]-1){p=r[1-a]+((a===1)?1:-1);}this._updateHandle(h[0],p);};V.prototype.ontouchstart=function(e){var t=e.targetTouches[0],C=this.getRenderer().CSS_CLASS,E="."+C,v,h,r,H,f,F;if(!this.getEnabled()){return;}e.setMarked();if(e.target.className.indexOf("sapMInput")===-1){e.preventDefault();}this._recalculateStyles();if(["number","text"].indexOf(e.target.type)>-1){return;}v=this._calculateHandlePosition(t.pageX);r=this.getRange();h=[this._mHandleTooltip.start.handle,this._mHandleTooltip.end.handle];H=this._getIndexOfHandle(e.target);f=h.reduce(function(A,o){return Math.abs(A-o.offsetLeft);},0);var a=0;if(H!==-1){h=[this.getDomRef(H===0?"handle1":"handle2")];a=v-r[H];}else if(v<Math.min.apply(Math,r)||v>Math.max.apply(Math,r)){h=[v<Math.min.apply(Math,r)?this._mHandleTooltip.start.handle:this._mHandleTooltip.end.handle];this._updateHandle(h[0],v);this._fireChangeAndLiveChange({range:this.getRange()});}jQuery(document).on("touchend"+E+" touchcancel"+E+" mouseup"+E,this._ontouchend.bind(this,h)).on("touchmove"+E+(e.originalEvent.type!=="touchstart"?" mousemove"+E:""),this._ontouchmove.bind(this,v,this.getRange(),h,a));h.map(function(o){if(o.className.indexOf(C+"HandlePressed")===-1){o.className+=" "+C+"HandlePressed";}});F=h.length===1?h[0]:this.getDomRef("progress");jQuery.sap.delayedCall(0,F,"focus");};V.prototype.setParentFrame=function(v){this._parentFrame=v;};V.prototype._adjustRangeValue=function(v,h){var m=this.getMax(),M=this.getMin(),s=this.getStep(),a=h||0,f;if(this._bInitialRangeChecks){return v;}f=Math.abs((v-M)%s);if(f!==0){v=f*2>=s?v+s-f:v-f;}var b=a<0?a:0;var c=a>0?a:0;if(v<M+b){v=M+b;}else if(v>m+c){v=m+c;}return v;};V.prototype._calculateHandlePosition=function(v,h){var m=this.getMax(),M=this.getMin(),a=h||0,n;n=((v-this._fSliderPaddingLeft-this._fSliderOffsetLeft)/this._fSliderWidth)*(m-M)+M;if(this._bRTL){n=this._convertValueToRtlMode(n);}return this._adjustRangeValue(n,a);};V.prototype._updateSliderValues=function(o,h){var r=this.getRange(),m=this.getMax(),M=this.getMin(),f=Math.max.apply(null,r),a=Math.min.apply(null,r),i=this._getIndexOfHandle(h),O=o<0?-1:1,H=i>-1?[h]:[this._mHandleTooltip.start.handle,this._mHandleTooltip.end.handle];if(H.length===1){if((f-a<=1)&&((i===1&&O===-1)||(i===0&&O===1))){return;}a=f=r[i];}if(f+o>m){o=O*(Math.abs(m)-Math.abs(f));}else if(a+o<M){o=O*(Math.abs(a)-Math.abs(M));}H.map(function(c){this._updateHandle(c,r[this._getIndexOfHandle(c)]+o);},this);};V.CHARACTER_WIDTH_PX=12;V.prototype._updateTooltipContent=function(t,n){var r=this.getRange();var m=Math.max(r[0],r[1]);var a=Math.min(r[0],r[1]);m=(m>this.getMax())?this.getMax():m;a=(a<this.getMin())?this.getMin():a;var s=this._mHandleTooltip.start.tooltip;var p=(t===s)?"start":"end";if(a===m){if(a===0){m++;}if(a===100){a--;}}var c=this._parentFrame._getDataRange(a,m).displayValues[p];t.text(c);var b=this.getDomRef('LeftTooltip');var d=this.getDomRef('RightTooltip');var e=Math.max(b.innerHTML.length,d.innerHTML.length);e=e*V.CHARACTER_WIDTH_PX;this._iLongestRangeTextWidth=e;b.style.width=this._iLongestRangeTextWidth+"px";d.style.width=this._iLongestRangeTextWidth+"px";this._recalculateStyles();this.$("TooltipsContainer").css("min-width",(this._fTooltipHalfWidthPercent*4)+"%");};V.prototype._adjustTooltipsContainer=function(){var c,t=this.getDomRef("TooltipsContainer"),a=this._bRTL?"right":"left",A=this._bRTL?"left":"right",r=this.getRange(),s=this._getPercentOfValue(r[0]>r[1]?r[1]:r[0]),e=this._getPercentOfValue(r[0]>r[1]?r[0]:r[1]),T=this._fHandleWidthPercent/2,f=(e-s)/2>this._fTooltipHalfWidthPercent?this._fTooltipHalfWidthPercent:(e-s)/2,b=Math.floor(100-2*this._fTooltipHalfWidthPercent-f+this._fHandleWidthPercent),C=parseFloat(t.style[a]),d=parseFloat(t.style[A]);if(s-this._fTooltipHalfWidthPercent<=T){C=-1*this._fHandleWidthPercent;}else if(s>=b){C=100-4*this._fTooltipHalfWidthPercent+this._fHandleWidthPercent;}else if((e-s>this._fTooltipHalfWidthPercent*2)&&(s>-1*this._fTooltipHalfWidthPercent)){C=s-this._fTooltipHalfWidthPercent;}else{c=s-this._fTooltipHalfWidthPercent-(this._fTooltipHalfWidthPercent*2-(e-s))/2;if(c<=-1*this._fHandleWidthPercent){C=-1*this._fHandleWidthPercent;}else{C=c;}}if(e>=(100-T)||(100-e-this._fTooltipHalfWidthPercent)<-this._fHandleWidthPercent){d=-1*this._fHandleWidthPercent;}else{d=100-e-this._fTooltipHalfWidthPercent;}t.style[a]=C+"%";t.style[A]=d+"%";this._swapTooltips(r);};V.prototype.onfocusin=function(e){R.prototype.onfocusin.apply(this,arguments);this.$("progress").addClass("hover");};V.prototype.onfocusout=function(e){R.prototype.onfocusout.apply(this,arguments);this.$("progress").removeClass("hover");};return V;},true);
