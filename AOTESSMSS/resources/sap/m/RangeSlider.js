/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","./Slider","sap/ui/core/InvisibleText"],function(q,S,I){"use strict";var R=S.extend("sap.m.RangeSlider",{metadata:{library:"sap.m",properties:{value2:{type:"float",group:"Data",defaultValue:100},range:{type:"float[]",group:"Data",defaultValue:[0,100]}}}});var _={RANGE_MOVEMENT_THRESHOLD:32,CHARACTER_WIDTH_PX:8,INPUT_STATE_NONE:"None",INPUT_STATE_ERROR:"Error"};R.prototype.init=function(){var s,e;S.prototype.init.call(this,arguments);this._bInitialRangeChecks=true;this._bRTL=sap.ui.getCore().getConfiguration().getRTL();this._aInitialFocusRange=this.getRange();this._iLongestRangeTextWidth=0;this._fTooltipHalfWidthPercent=0;this._oResourceBundle=sap.ui.getCore().getLibraryResourceBundle('sap.m');this._ariaUpdateDelay=[];s=new I({text:this._oResourceBundle.getText("RANGE_SLIDER_LEFT_HANDLE")});e=new I({text:this._oResourceBundle.getText("RANGE_SLIDER_RIGHT_HANDLE")});this._mHandleTooltip={start:{handle:null,tooltip:null,label:s},end:{handle:null,tooltip:null,label:e}};};R.prototype.exit=function(){this._oResourceBundle=null;this._aInitialFocusRange=null;this._liveChangeLastValue=null;if(this._oRangeLabel){this._oRangeLabel.destroy();}this._oRangeLabel=null;if(this.getInputsAsTooltips()){if(this._mHandleTooltip.start.tooltip){this._mHandleTooltip.start.tooltip.destroy();}if(this._mHandleTooltip.end.tooltip){this._mHandleTooltip.end.tooltip.destroy();}}if(this._mHandleTooltip.start.label){this._mHandleTooltip.start.label.destroy();}if(this._mHandleTooltip.end.label){this._mHandleTooltip.end.label.destroy();}this._mHandleTooltip.start.handle=null;this._mHandleTooltip.start.tooltip=null;this._mHandleTooltip.start.label=null;this._mHandleTooltip.end.handle=null;this._mHandleTooltip.end.tooltip=null;this._mHandleTooltip.end.label=null;this._ariaUpdateDelay=null;this._iDecimalPrecision=null;};R.prototype.onBeforeRendering=function(){var a=[Math.abs(this.getMin()),Math.abs(this.getMax())],r=a[0]>a[1]?0:1,i=!!this.getInputsAsTooltips(),b=this.getRange();this._bInitialRangeChecks=false;this._iDecimalPrecision=this.getDecimalPrecisionOfNumber(this.getStep());this.setRange(b);if(!this._oRangeLabel){this._oRangeLabel=new I({text:this._oResourceBundle.getText("RANGE_SLIDER_RANGE_HANDLE")});}this._validateProperties();this._iLongestRangeTextWidth=((a[r].toString()).length+this.getDecimalPrecisionOfNumber(this.getStep())+1)*_.CHARACTER_WIDTH_PX;if(!this._mHandleTooltip.start.tooltip){this._mHandleTooltip.start.tooltip=i?this._createInputField("LeftTooltip",this._mHandleTooltip.start.label):null;}if(!this._mHandleTooltip.end.tooltip){this._mHandleTooltip.end.tooltip=i?this._createInputField("RightTooltip",this._mHandleTooltip.end.label):null;}this._mHandleTooltip.bTooltipsSwapped=false;if(this.getEnableTickmarks()&&!this.getAggregation("scale")){this.setAggregation("scale",new sap.m.ResponsiveScale());}};R.prototype.onAfterRendering=function(){S.prototype.onAfterRendering.apply(this,arguments);var r=this.getRange(),m=this.getMin(),M=this.getMax(),b=r.reduce(function(a,v){return a||v<m||v>M;});this._mHandleTooltip.start.handle=this.getDomRef("handle1");this._mHandleTooltip.end.handle=this.getDomRef("handle2");if(!this.getInputsAsTooltips()){this._mHandleTooltip.start.tooltip=this.$("LeftTooltip");this._mHandleTooltip.end.tooltip=this.$("RightTooltip");}this._recalculateStyles();if(b){q.sap.log.warning("Warning: "+"Property wrong range: ["+r+"] not in the range: ["+m+","+M+"]",this);}this.$("TooltipsContainer").css("min-width",(this._fTooltipHalfWidthPercent*4)+"%");this._updateHandle(this._mHandleTooltip.start.handle,r[0]);this._updateHandle(this._mHandleTooltip.end.handle,r[1]);if(r[0]>r[1]){this._swapTooltips(r);}};R.prototype._recalculateRange=function(){var h,s,e,p,a=this._bRTL?"right":"left";h=[parseFloat(this._mHandleTooltip.start.handle.style[a]),parseFloat(this._mHandleTooltip.end.handle.style[a])];s=Math.min.apply(Math,h)+"%";e=(100-Math.max.apply(Math,h))+"%";p=this.getDomRef("progress");if(this._bRTL){p.style.left=e;p.style.right=s;}else{p.style.left=s;p.style.right=e;}};R.prototype.getClosestHandleDomRef=function(e){var h=this._mHandleTooltip.start.handle,H=this._mHandleTooltip.end.handle,p=Math.abs(e.pageX-h.offsetLeft-this._fSliderPaddingLeft-this._fSliderOffsetLeft),c=Math.abs(e.clientX-H.offsetLeft-this._fSliderPaddingLeft-this._fSliderOffsetLeft);return p>c?H:h;};R.prototype._getIndexOfHandle=function(h){if(h&&h.getAttribute&&h.getAttribute("data-range-val")==="start"){return 0;}else if(h&&h.getAttribute&&h.getAttribute("data-range-val")==="end"){return 1;}else{return-1;}};R.prototype._updateHandle=function(h,v){var t=(this._mHandleTooltip.start.handle===h)?this._mHandleTooltip.start.tooltip:this._mHandleTooltip.end.tooltip,r=this.getRange(),i=this._getIndexOfHandle(h),p=this._getPercentOfValue(v),d=this._iDecimalPrecision?this._iDecimalPrecision:0,n=Number(this.toFixed(v,d));r[i]=n;this._updateRangePropertyDependencies(r);this._updateHandleDom(h,r,i,n,p);this._updateTooltipContent(t,n);this._adjustTooltipsContainer(p);this._recalculateRange();};R.prototype._updateHandleDom=function(h,r,i,v,p){var m,c=this.getRenderer().CSS_CLASS,f=this.getDomRef("input");if(!!this.getName()){f.setAttribute(h.getAttribute("data-range-val"),r[i]);f.setAttribute("value",this.getValue());}if(this._bRTL){h.style.right=p+"%";}else{h.style.left=p+"%";}if(this.getShowHandleTooltip()){h.title=v;}m=r[0]===r[1];this.$("handle1").toggleClass(c+"HandleOverlap",m);this.$("handle2").toggleClass(c+"HandleOverlap",m);q.sap.clearDelayedCall(this._ariaUpdateDelay[i]);this._ariaUpdateDelay[i]=q.sap.delayedCall(100,this,"_updateHandleAria",[h,v]);};R.prototype._updateHandleAria=function(h,v){var r=this.getRange(),p=this.getDomRef("progress");this._updateHandlesAriaLabels();h.setAttribute("aria-valuenow",v);if(p){p.setAttribute("aria-valuenow",r.join("-"));p.setAttribute("aria-valuetext",this._oResourceBundle.getText('RANGE_SLIDER_RANGE_ANNOUNCEMENT',r));}};R.prototype._updateHandlesAriaLabels=function(){var r=this.getRange(),t=this._mHandleTooltip.start.label;if((r[0]>r[1]&&!this._mHandleTooltip.bAriaHandlesSwapped)||(r[0]<r[1]&&this._mHandleTooltip.bAriaHandlesSwapped)){this._mHandleTooltip.start.label=this._mHandleTooltip.end.label;this._mHandleTooltip.end.label=t;if(this._mHandleTooltip.start.handle){this._mHandleTooltip.start.handle.setAttribute("aria-labelledby",this._mHandleTooltip.start.label.getId());}if(this._mHandleTooltip.end.handle){this._mHandleTooltip.end.handle.setAttribute("aria-labelledby",this._mHandleTooltip.end.label.getId());}this._mHandleTooltip.bAriaHandlesSwapped=!this._mHandleTooltip.bAriaHandlesSwapped;}};R.prototype._updateTooltipContent=function(t,n){var i=this.getInputsAsTooltips(),N=this.toFixed(n,this._iDecimalPrecision);if(!i){t.text(N);}else if(i&&t.getValue()!==N){t.setValueState(_.INPUT_STATE_NONE);t.setValue(N);t.$("inner").attr("value",N);}};R.prototype._swapTooltips=function(r){var t=this._mHandleTooltip.start.tooltip;if((r[0]>=r[1]&&!this._mHandleTooltip.bTooltipsSwapped)||(r[0]<=r[1]&&this._mHandleTooltip.bTooltipsSwapped)){this._mHandleTooltip.start.tooltip=this._mHandleTooltip.end.tooltip;this._mHandleTooltip.end.tooltip=t;this._updateTooltipContent(this._mHandleTooltip.start.tooltip,r[0]);this._updateTooltipContent(this._mHandleTooltip.end.tooltip,r[1]);if(this.getInputsAsTooltips()){this._mHandleTooltip.start.handle.setAttribute("aria-controls",this._mHandleTooltip.start.tooltip.getId());this._mHandleTooltip.end.handle.setAttribute("aria-controls",this._mHandleTooltip.end.tooltip.getId());}this._mHandleTooltip.bTooltipsSwapped=!this._mHandleTooltip.bTooltipsSwapped;}};R.prototype._adjustTooltipsContainer=function(){var c,t=this.getDomRef("TooltipsContainer"),a=this._bRTL?"right":"left",A=this._bRTL?"left":"right",r=this.getRange(),s=this._getPercentOfValue(r[0]>r[1]?r[1]:r[0]),e=this._getPercentOfValue(r[0]>r[1]?r[0]:r[1]),T=this._fHandleWidthPercent/2,f=100-3*this._fTooltipHalfWidthPercent+this._fHandleWidthPercent,C=parseFloat(t.style[a]),b=parseFloat(t.style[A]);if(s<=T){C=-1*this._fHandleWidthPercent;}else if(s>=f){if(b<-1*this._fHandleWidthPercent){C=100-4*this._fTooltipHalfWidthPercent;}else{C=(100-4*this._fTooltipHalfWidthPercent)+this._fHandleWidthPercent;}}else if((e-s>this._fTooltipHalfWidthPercent*2)&&(s>-1*this._fTooltipHalfWidthPercent)){C=s-this._fTooltipHalfWidthPercent;}else{c=s-this._fTooltipHalfWidthPercent-(this._fTooltipHalfWidthPercent*2-(e-s))/2;if(c<=-1*this._fHandleWidthPercent){C=-1*this._fHandleWidthPercent;}else{C=c;}}if(e>=(100-T)||(100-e-this._fTooltipHalfWidthPercent)<-this._fHandleWidthPercent){b=-1*this._fHandleWidthPercent;}else{b=100-e-this._fTooltipHalfWidthPercent;}t.style[a]=C+"%";t.style[A]=b+"%";this._swapTooltips(r);};R.prototype._handleInputChange=function(i,e){var h,a,t=this._mHandleTooltip.bTooltipsSwapped,n=Number(e.getParameter("value"));if(e.getParameter("value")===""||isNaN(n)||n<this.getMin()||n>this.getMax()){i.setValueState(_.INPUT_STATE_ERROR);return;}n=this._adjustRangeValue(n);i.setValueState(_.INPUT_STATE_NONE);h=this._mHandleTooltip.start.tooltip===i?this._mHandleTooltip.start.handle:this._mHandleTooltip.end.handle;this._updateHandle(h,n);if(t!==this._mHandleTooltip.bTooltipsSwapped){a=this._mHandleTooltip.start.tooltip!==i?this._mHandleTooltip.start.tooltip:this._mHandleTooltip.end.tooltip;a.focus();}this._fireChangeAndLiveChange({range:this.getRange()});};R.prototype._updateDOMAfterSetters=function(v,r,h){var p,H;if(this.getDomRef()){p=this._getPercentOfValue(v);H=h===1?this._mHandleTooltip.end:this._mHandleTooltip.start;this._updateHandleDom(H.handle,r,h,v,p);this._updateTooltipContent(H.tooltip,v);return true;}return false;};R.prototype.setStep=function(s){this.setProperty("step",s,true);this._validateProperties();this._iDecimalPrecision=this.getDecimalPrecisionOfNumber(s);return this;};R.prototype.setRange=function(r){r=r.map(this._adjustRangeValue,this);this._updateRangePropertyDependencies(r);if(this._updateDOMAfterSetters(r[0],r,0)&&this._updateDOMAfterSetters(r[1],r,1)){this._recalculateRange();}return this;};R.prototype.setValue=function(v){var r=this.getRange();if(typeof v!=="number"||!isFinite(v)){return this;}v=this._adjustRangeValue(v);r[0]=v;this._updateRangePropertyDependencies(r);if(this._updateDOMAfterSetters(r[0],r,0)){this._recalculateRange();}return this;};R.prototype.setValue2=function(v){var r=this.getRange(),d=this._iDecimalPrecision?this._iDecimalPrecision:0;v=this._adjustRangeValue(v);r[1]=Number(this.toFixed(v,d));this._updateRangePropertyDependencies(r);if(this._updateDOMAfterSetters(r[1],r,1)){this._recalculateRange();}return this;};R.prototype._updateRangePropertyDependencies=function(r){var a=Array.isArray(r)?r.slice():[];if(this.getProperty("value")!==a[0]){this.setProperty("value",a[0],true);}if(this.getProperty("value2")!==a[1]){this.setProperty("value2",a[1],true);}this.setProperty("range",a,true);};R.prototype._calculateHandlePosition=function(v){var m=this.getMax(),M=this.getMin(),n;n=((v-this._fSliderPaddingLeft-this._fSliderOffsetLeft)/this._fSliderWidth)*(m-M)+M;if(this._bRTL){n=this._convertValueToRtlMode(n);}return this._adjustRangeValue(n);};R.prototype._adjustRangeValue=function(v){var m=this.getMax(),M=this.getMin(),s=this.getStep(),f,d=this._iDecimalPrecision?this._iDecimalPrecision:0;if(this._bInitialRangeChecks){return v;}f=Math.abs((v-M)%s);if(f!==0){v=f*2>=s?v+s-f:v-f;}if(v<M){v=M;}else if(v>m){v=m;}return Number(this.toFixed(v,d));};R.prototype.ontouchstart=function(e){var t=e.targetTouches[0],C=this.getRenderer().CSS_CLASS,E="."+C,v,h,r,H,f,F;if(!this.getEnabled()){return;}e.setMarked();if(e.target.className.indexOf("sapMInput")===-1){e.preventDefault();}this._recalculateStyles();if(["number","text"].indexOf(e.target.type)>-1){return;}v=this._calculateHandlePosition(t.pageX);r=this.getRange();h=[this._mHandleTooltip.start.handle,this._mHandleTooltip.end.handle];H=this._getIndexOfHandle(e.target);f=h.reduce(function(a,o){return Math.abs(a-o.offsetLeft);},0);if(v<Math.min.apply(Math,r)||v>Math.max.apply(Math,r)||f<=_.RANGE_MOVEMENT_THRESHOLD){h=[this.getClosestHandleDomRef(t)];this._updateHandle(h[0],v);this._fireChangeAndLiveChange({range:this.getRange()});}else if(H!==-1){h=[this.getDomRef(H===0?"handle1":"handle2")];}q(document).on("touchend"+E+" touchcancel"+E+" mouseup"+E,this._ontouchend.bind(this,h)).on("touchmove"+E+(e.originalEvent.type!=="touchstart"?" mousemove"+E:""),this._ontouchmove.bind(this,v,this.getRange(),h));h.map(function(o){if(o.className.indexOf(C+"HandlePressed")===-1){o.className+=" "+C+"HandlePressed";}});F=h.length===1?h[0]:this.getDomRef("progress");q.sap.delayedCall(0,F,"focus");};R.prototype._ontouchmove=function(f,a,h,e){var o,r,b,c,p=e.targetTouches?e.targetTouches[0].pageX:e.pageX,m=this.getMax(),M=this.getMin(),d=[],g=[];e.preventDefault();e.setMarked();if(e.isMarked("delayedMouseEvent")||!this.getEnabled()||e.button){return;}o=this._calculateHandlePosition(p)-f;for(var i=0;i<a.length;i++){d[i]=a[i]+o;}g=this._getNormalizedRange(this.getRange(),a,h);r=d.every(function(v,j){return v===g[j];});b=d.every(function(v){return(v>=M&&v<=m);});c=g.indexOf(M)>-1||g.indexOf(m)>-1;if(!r){if((h.length===1)||b||!c){h.map(function(H){this._updateHandle(H,a[this._getIndexOfHandle(H)]+o);},this);}this._adjustTooltipsContainer();g=this._getNormalizedRange(this.getRange(),a,h);}this._triggerLiveChange();this.setRange(g);};R.prototype._triggerLiveChange=function(){var f,r=this.getRange();this._liveChangeLastValue=this._liveChangeLastValue||[];f=r.some(function(v,i){return v!==this._liveChangeLastValue[i];},this);if(f){this._liveChangeLastValue=r.slice();this.fireLiveChange({range:r});}};R.prototype._getNormalizedRange=function(r,a,h){var m=this.getMax(),M=this.getMin(),s=Math.abs(a[0]-a[1]),b=[],i,o;for(i=0;i<r.length;i++){b[i]=(r[i]<M?M:r[i]);b[i]=(r[i]>m?m:b[i]);if(h.length===2){if(b[0]==M){b[1]=b[0]+s;}else{o=Math.abs(i-1);b[o]=(b[i]<=M?b[i]+s:b[o]);b[o]=(b[i]>=m?b[i]-s:b[o]);}}}return b;};R.prototype._updateAdvancedTooltipDom=function(){};R.prototype._ontouchend=function(h,e){var n=this.getRange(),c=this.getRenderer().CSS_CLASS;e.setMarked();h&&h.map(function(H){H.className=H.className.replace(new RegExp(" ?"+c+"HandlePressed","gi"),"");});q(document).off("."+c);this._recalculateRange();if(this._aInitialFocusRange[0]!==n[0]||this._aInitialFocusRange[1]!==n[1]){this._aInitialFocusRange=Array.prototype.slice.call(n);this.fireChange({range:n});}this._updateTooltipContent(this._mHandleTooltip.start.tooltip,n[0]);this._updateTooltipContent(this._mHandleTooltip.end.tooltip,n[1]);};R.prototype.onfocusin=function(e){var c=this.getRenderer().CSS_CLASS;this.$("TooltipsContainer").addClass(c+"HandleTooltipsShow");if(!this._hasFocus()){this._aInitialFocusRange=this.getRange();}};R.prototype._updateSliderValues=function(o,h){var r=this.getRange(),m=this.getMax(),M=this.getMin(),f=Math.max.apply(null,r),a=Math.min.apply(null,r),i=this._getIndexOfHandle(h),O=o<0?-1:1,H=i>-1?[h]:[this._mHandleTooltip.start.handle,this._mHandleTooltip.end.handle];if(H.length===1){a=f=r[i];}if(f+o>m){o=O*(Math.abs(m)-Math.abs(f));}else if(a+o<M){o=O*(Math.abs(a)-Math.abs(M));}H.map(function(c){this._updateHandle(c,r[this._getIndexOfHandle(c)]+o);},this);};R.prototype.onsapincrease=function(e){if(["number","text"].indexOf(e.target.type)>-1){return;}e.preventDefault();e.setMarked();if(this.getEnabled()){this._updateSliderValues(this.getStep(),e.target);this._fireChangeAndLiveChange({range:this.getRange()});}};R.prototype.onsapplus=R.prototype.onsapincrease;R.prototype.onsapincreasemodifiers=function(e){if(["number","text"].indexOf(e.target.type)>-1||e.altKey){return;}e.preventDefault();e.stopPropagation();e.setMarked();if(this.getEnabled()){this._updateSliderValues(this._getLongStep(),e.target);this._fireChangeAndLiveChange({range:this.getRange()});}};R.prototype.onsappageup=R.prototype.onsapincreasemodifiers;R.prototype.onsapdecrease=function(e){if(["number","text"].indexOf(e.target.type)>-1){return;}e.preventDefault();e.setMarked();if(this.getEnabled()){this._updateSliderValues(-1*this.getStep(),e.target);this._fireChangeAndLiveChange({range:this.getRange()});}};R.prototype.onsapminus=R.prototype.onsapdecrease;R.prototype.onsapdecreasemodifiers=function(e){if(["number","text"].indexOf(e.target.type)>-1||e.altKey){return;}e.preventDefault();e.stopPropagation();e.setMarked();if(this.getEnabled()){this._updateSliderValues(-1*this._getLongStep(),e.target);this._fireChangeAndLiveChange({range:this.getRange()});}};R.prototype.onsappagedown=R.prototype.onsapdecreasemodifiers;R.prototype.onsaphome=function(e){var h=0,r,H,m;if(["number","text"].indexOf(e.target.type)>-1){return;}e.setMarked();e.preventDefault();h=this._getIndexOfHandle(e.target);r=this.getRange()[h];m=this.getMin();if(this.getEnabled()&&(r!==m)){H=(h===1?this._mHandleTooltip.end:this._mHandleTooltip.start);this._updateHandle(H.handle,m);this._fireChangeAndLiveChange({range:this.getRange()});}};R.prototype.onsapend=function(e){if(["number","text"].indexOf(e.target.type)>-1){return;}e.setMarked();e.preventDefault();if(this.getEnabled()){this._updateSliderValues(this.getMax(),e.target);this._fireChangeAndLiveChange({range:this.getRange()});}};R.prototype.onsapescape=function(){this.setRange(this._aInitialFocusRange);this._fireChangeAndLiveChange({range:this.getRange()});};return R;});
