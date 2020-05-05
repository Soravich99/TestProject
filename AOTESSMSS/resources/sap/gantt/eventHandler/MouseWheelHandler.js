/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/ui/Device","sap/ui/base/Object"],function(q,D,B){"use strict";var M=B.extend("sap.gantt.eventHandler.MouseWheelHandler",{constructor:function(c){B.call(this);this._oSourceChart=c;this._lastCalledMouseWheelZoom=0;this._iMouseWheelZoomTimer=undefined;}});M.prototype.handleEvent=function(e){var o=e.originalEvent;var i=o.shiftKey;var I=o.ctrlKey;var s=this._getScrollDelta(o);var b=false;if(i){if(I){b=this._handleZoom(e,s);}else{this._handleHScroll(e,s);}}else{this._handleVScroll(e,s);}return b;};M.prototype._getScrollDelta=function(e){var s=0;if(D.browser.firefox){s=e.detail;}else{s=e.deltaY||e.deltaX;}return s;};M.prototype._handleZoom=function(e,s){var o=e.originalEvent;var z=this._oSourceChart.getAxisTimeStrategy();var i=false;if(z.getMouseWheelZoomType()!==sap.gantt.MouseWheelZoomType.None){var Z=s<0;if((!Z&&z.getZoomLevel()>0)||(Z&&z.getZoomLevel()<z.getZoomLevels()-1)){if(this._oSourceChart._destroyCursorLine){this._oSourceChart._destroyCursorLine();}var t=(!this._iMouseWheelZoomTimer&&(Date.now()-this._lastCalledMouseWheelZoom>100))?0:100;if(t===0){this._updateVisibleHorizon(o,s);}else{this._iMouseWheelZoomTimer=this._iMouseWheelZoomTimer||q.sap.delayedCall(t,this,this._updateVisibleHorizon,[o,s]);}i=true;}this._preventBubbleAndDefault(e);}return i;};M.prototype._updateVisibleHorizon=function(e,s){this._lastCalledMouseWheelZoom=Date.now();var z=this._oSourceChart.getAxisTimeStrategy();var $=q(this._oSourceChart.getDomSelectorById("svg"));if($){var m=(D.browser.edge?e.clientX:e.pageX)-$.offset().left||e.offsetX;var t=z.getAxisTime().viewToTime(m);z.updateVisibleHorizonOnMouseWheelZoom(t,s);}this._iMouseWheelZoomTimer=undefined;};M.prototype._handleHScroll=function(e,s){var h=this._oSourceChart.getTTHsbDom();var S=false;var b=s>0;if(h){if(b){S=Math.round(h.scrollLeft)===h.scrollWidth-h.clientWidth;}else{S=h.scrollLeft===0;}if(!S){this._preventBubbleAndDefault(e);h.scrollLeft+=s;}}};M.prototype._handleVScroll=function(e,s){var v=this._oSourceChart.getTTVsbDom();var S=false;var b=s>0;if(v){if(b){S=Math.round(v.scrollTop)===v.scrollHeight-v.clientHeight;}else{S=v.scrollTop===0;}if(!S){this._preventBubbleAndDefault(e);var r=s/this._oSourceChart.getBaseRowHeight();if(r>1){r=Math.floor(r);}v.scrollTop+=r*this._getScrollingPixelsForRow();}}};M.prototype._getScrollingPixelsForRow=function(){var t=this._oSourceChart._oTT;if(t){var v=t.getVisibleRowCount();var s=Math.max(1,v-t.getFixedRowCount()-t.getFixedBottomRowCount());var r=this._oSourceChart.getBaseRowHeight();var V=s*r;var b=t.getBinding("rows").getLength();var T=Math.max(b,v+1);var i=T*r;var a=Math.max(1,i-V-this._getRowHeightsDelta());var m;if(v>b){m=b;}else{m=Math.max(0,b-v-1);}return Math.ceil(a/Math.max(1,m));}return 0;};M.prototype._getRowHeightsDelta=function(){var t=this._oSourceChart._oTT;if(t){var i=t.getBinding("rows").getLength();var v=t.getVisibleRowCount();var e=this._oSourceChart.getBaseRowHeight()*v;var r=this._oSourceChart._getRowHeights();if(v>i){r=r.slice(0,i);}var R=r.reduce(function(a,b){return a+b;},0)-e;if(R>0){R=Math.ceil(R);}return Math.max(0,R);}return 0;};M.prototype._preventBubbleAndDefault=function(e){e.preventDefault();e.stopPropagation();};return M;},true);
