/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(["jquery.sap.global","./library","sap/m/library","sap/ui/core/Control","sap/ui/Device","sap/ui/core/ResizeHandler"],function(q,l,M,C,D,R){"use strict";var L=C.extend("sap.suite.ui.microchart.LineMicroChart",{metadata:{library:"sap.suite.ui.microchart",properties:{size:{type:"sap.m.Size",group:"Appearance",defaultValue:"Auto"},threshold:{type:"float",group:"Appearance",defaultValue:0},minXValue:{type:"float",group:"Appearance"},maxXValue:{type:"float",group:"Appearance"},minYValue:{type:"float",group:"Appearance"},maxYValue:{type:"float",group:"Appearance"},leftTopLabel:{type:"string",group:"Data",defaultValue:null},rightTopLabel:{type:"string",group:"Data",defaultValue:null},leftBottomLabel:{type:"string",group:"Data",defaultValue:null},rightBottomLabel:{type:"string",group:"Data",defaultValue:null},color:{type:"any",group:"Appearance",defaultValue:"Neutral"},showPoints:{type:"boolean",group:"Appearance",defaultValue:false}},defaultAggregation:"points",aggregations:{points:{type:"sap.suite.ui.microchart.LineMicroChartPoint",multiple:true,bindable:"bindable"}},events:{press:{}}}});L.MIN_SIZE_CHART=5;L.EDGE_CASE_HEIGHT_SHOWBOTTOMLABEL=16;L.EDGE_CASE_HEIGHT_SHOWTOPLABEL=32;L.EDGE_CASE_WIDTH_RESIZEFONT=168;L.EDGE_CASE_HEIGHT_RESIZEFONT=72;L.prototype.ontap=function(e){if(D.browser.msie){this.$().focus();}this.firePress();};L.prototype.onkeydown=function(e){if(e.which===q.sap.KeyCodes.SPACE){e.preventDefault();}};L.prototype.onkeyup=function(e){if(e.which===q.sap.KeyCodes.ENTER||e.which===q.sap.KeyCodes.SPACE){this.firePress();e.preventDefault();}};L.prototype.attachEvent=function(e,d,f,o){C.prototype.attachEvent.call(this,e,d,f,o);if(this.hasListeners("press")){this.$().attr("tabindex",0).addClass("sapSuiteUiMicroChartPointer");}return this;};L.prototype.detachEvent=function(e,f,o){C.prototype.detachEvent.call(this,e,f,o);if(!this.hasListeners("press")){this.$().removeAttr("tabindex").removeClass("sapSuiteUiMicroChartPointer");}return this;};L.prototype.onclick=function(){if(D.browser.msie||D.browser.edge){this.$().focus();}this.firePress();};L.prototype.onsapspace=L.prototype.onclick;L.prototype.onsapenter=L.prototype.onclick;L.prototype.getTooltip_AsString=function(){var t=this.getTooltip_Text();if(!t){t=this._createTooltipText();}else if(l._isTooltipSuppressed(t)){t=null;}return t;};L.prototype._getAccessibilityControlType=function(){return this._oRb.getText("ACC_CTR_TYPE_LINEMICROCHART");};L.prototype.getThreshold=function(){if(this._bThresholdNull){return null;}else{return this.getProperty("threshold");}};L.prototype.init=function(){this._bFocusMode=false;this._bSemanticMode=false;this._aNormalizedPoints=[];this._minXScale=null;this._maxXScale=null;this._minYScale=null;this._maxYScale=null;this._fNormalizedThreshold=0;this._bScalingValid=false;this._bThresholdNull=false;this._bNoTopLabels=false;this._bNoBottomLabels=false;this._oRb=sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.microchart");this._bThemeApplied=true;if(!sap.ui.getCore().isInitialized()){this._bThemeApplied=false;sap.ui.getCore().attachInit(this._handleCoreInitialized.bind(this));}else{this._handleCoreInitialized();}};L.prototype._handleCoreInitialized=function(){this._bThemeApplied=sap.ui.getCore().isThemeApplied();if(!this._bThemeApplied){sap.ui.getCore().attachThemeChanged(this._handleThemeApplied,this);}};L.prototype._handleThemeApplied=function(){this._bThemeApplied=true;this.invalidate();sap.ui.getCore().detachThemeChanged(this._handleThemeApplied,this);};L.prototype.onBeforeRendering=function(){if(l._isInGenericTile(this)){l._removeStandardMargins(this);}if(this.getPoints().length>0){this._setModeFlags();this._normalizePoints();}this._unbindMouseEnterLeaveHandler();};L.prototype.onAfterRendering=function(){if(this.getSize()===M.Size.Responsive){this._sResizeHandlerId=R.register(this,this._onResize.bind(this));this._onResize();}this._bindMouseEnterLeaveHandler();};L.prototype.exit=function(){this._deregisterResizeHandler();};L.prototype.validateProperty=function(p,v){if(p==="threshold"){if(v===null){this._bThresholdNull=true;}else{this._bThresholdNull=false;}}if(v===null||v===undefined){return C.prototype.validateProperty.apply(this,[p,null]);}if(p==="color"&&((!M.ValueCSSColor.isValid(v)||v==="")&&(!M.ValueCSSColor.isValid(v.below)||v.below===""||!M.ValueCSSColor.isValid(v.above)||v.above===""))){q.sap.log.warning("Color property of LineMicroChart must be of type sap.m.ValueCSSColor either as single value or as composite value (above: value, below: value)");v=null;}else if(q.inArray(p,["minXValue","maxXValue","minYValue","maxYValue"])>=0){if(!q.isNumeric(v)){q.sap.log.warning("Property "+p+" of LineMicroChart is not numeric and it will be reset to default");v=null;}}return C.prototype.validateProperty.apply(this,[p,v]);};L.prototype._setModeFlags=function(){this._bFocusMode=false;this._bSemanticMode=false;var p=this.getPoints();this._minXScale=this._maxXScale=p[0].getX();if(this._bThresholdNull){this._minYScale=this._maxYScale=p[0].getY();}else{this._minYScale=this._maxYScale=this.getThreshold();}for(var i=0;i<p.length;i++){this._minXScale=Math.min(p[i].getX(),this._minXScale);this._maxXScale=Math.max(p[i].getX(),this._maxXScale);this._minYScale=Math.min(p[i].getY(),this._minYScale);this._maxYScale=Math.max(p[i].getY(),this._maxYScale);if(p[i].getMetadata().getName()==="sap.suite.ui.microchart.LineMicroChartEmphasizedPoint"){this._bFocusMode=true;if(p[i].getColor()!==M.ValueColor.Neutral&&p[i].getShow()){this._bSemanticMode=true;}}}if(!this._bFocusMode){if(this.getColor()&&this.getColor().above&&this.getColor().below&&!this._bThresholdNull){this._bSemanticMode=true;}else{this._bSemanticMode=false;}}if(this._bFocusMode&&this._bSemanticMode&&this.getColor()!==M.ValueColor.Neutral){q.sap.log.info("Property Color of LineMicroChart has no effect if EmphasizedPoints with colors different from Neutral are used.");}if(this._bFocusMode&&this.getShowPoints()){q.sap.log.info("Property ShowPoints of LineMicroChart has no effect if EmphasizedPoints are used.");}if(this.getColor()&&this.getColor().above&&this.getColor().below&&this._bThresholdNull){q.sap.log.info("Property Color of LineMicroChart has no effect if it is composed of colors for above and below when property Threshold is null");}var s=this.getLeftTopLabel(),r=this.getRightTopLabel(),a=this.getLeftBottomLabel(),b=this.getRightBottomLabel();if(b.length===0&&a.length===0){this._bNoBottomLabels=true;}else{this._bNoBottomLabels=false;}if(s.length===0&&r.length===0){this._bNoTopLabels=true;}else{this._bNoTopLabels=false;}};L.prototype._normalizePoints=function(){this._aNormalizedPoints=[];var m=this._minXScale,a=this._maxXScale,b=this._minYScale,c=this._maxYScale;if(q.isNumeric(this.getMinXValue())){this._minXScale=this.getMinXValue();if(!q.isNumeric(this.getMaxXValue())&&this._minXScale>a){q.sap.log.error("Property minXValue of LineMicroChart must be smaller to at least one X value of the points aggregation if property maxXValue is not set");}}if(q.isNumeric(this.getMaxXValue())){this._maxXScale=this.getMaxXValue();if(!q.isNumeric(this.getMinXValue())&&this._maxXScale<m){q.sap.log.error("Property maxXValue of LineMicroChart must be greater to at least one X value of the points aggregation if property minXValue is not set");}}if(q.isNumeric(this.getMinYValue())){this._minYScale=this.getMinYValue();if(!q.isNumeric(this.getMaxYValue())&&this._minYScale>c){q.sap.log.error("Property minYValue of LineMicroChart must be greater to threshold or at least one Y value of the points aggregation if property maxYValue is not set");}}if(q.isNumeric(this.getMaxYValue())){this._maxYScale=this.getMaxYValue();if(!q.isNumeric(this.getMinYValue())&&this._maxYScale<b){q.sap.log.error("Property maxYValue of LineMicroChart must be smaller to threshold or at least one Y value of the points aggregation if property minYValue is not set");}}if(this.getMaxYValue()<this.getMinYValue()){q.sap.log.error("Property maxYValue of LineMicroChart must not be smaller to minYValue");}if(this.getMaxXValue()<this.getMinXValue()){q.sap.log.error("Property maxXValue of LineMicroChart must not be smaller to minXValue");}var p=this.getPoints(),x=this._maxXScale-this._minXScale,y=this._maxYScale-this._minYScale,n,N;this._bScalingValid=x>=0&&y>=0;if(this._bScalingValid){for(var i=0;i<p.length;i++){if(this._minXScale===this._maxXScale&&p[i].getX()===this._maxXScale){n=50;}else{n=(((p[i].getX()-this._minXScale)/x)*100);}if(this._minYScale===this._maxYScale&&p[i].getY()===this._maxYScale){N=50;}else{N=(((p[i].getY()-this._minYScale)/y)*100);}this._aNormalizedPoints.push({x:n,y:N});}this._fNormalizedThreshold=((this.getThreshold()-this._minYScale)/y)*100;}};L.prototype._onResize=function(){this._adjustToParent();var c=this.$(),$=this.$("sapSuiteLMCSvgElement"),p=this.$("sapSuiteLMCPointsContainer"),i=parseInt(c.width(),10),a=parseInt(c.height(),10),b,d,t=c.find(".sapSuiteLMCLeftTopLabel, .sapSuiteLMCRightTopLabel"),B=c.find(".sapSuiteLMCLeftBottomLabel, .sapSuiteLMCRightBottomLabel");if(a<=L.EDGE_CASE_HEIGHT_RESIZEFONT||i<=L.EDGE_CASE_WIDTH_RESIZEFONT){c.addClass("sapSuiteLMCSmallFont");}else{c.removeClass("sapSuiteLMCSmallFont");}b=parseInt($.width(),10);d=parseInt($.height(),10);if(d<=L.MIN_SIZE_CHART||b<L.MIN_SIZE_CHART){$.css("visibility","hidden");p.hide();}else{$.css("visibility","");p.show();}if(a<=L.EDGE_CASE_HEIGHT_SHOWTOPLABEL){t.css("visibility","hidden");}else if(this._updateLabelVisibility(t)){c.addClass("sapSuiteLMCNoTopLabels");}if(a<=L.EDGE_CASE_HEIGHT_SHOWBOTTOMLABEL){B.css("visibility","hidden");}else if(this._updateLabelVisibility(B)){c.addClass("sapSuiteLMCNoBottomLabels");}};L.prototype._isLabelTruncated=function(a){var $=q(a);return $.prop("offsetWidth")<$.prop("scrollWidth")||$.prop("offsetLeft")<0;};L.prototype._updateLabelVisibility=function(a){if(a.length===0){return false;}var t=this._isLabelTruncated(a[0]);if(!t&&a.length>1){t=this._isLabelTruncated(a[1]);}if(t){a.css("visibility","hidden");}else{a.css("visibility","");}return t;};L.prototype._adjustToParent=function(){var c=this.$(),p,P,o=this.getParent();if(!o){return;}if(o.getMetadata().getName()==="sap.m.FlexBox"){p=o.getHeight();P=o.getWidth();}else if(q.isFunction(o.getRootNode)){p=Math.round(q(o.getRootNode()).height());P=Math.round(q(o.getRootNode()).width());}if(p){c.height(p);}if(P){c.width(P);}};L.prototype._createTooltipText=function(){var t="";var s=this.getLeftTopLabel();var S=this.getLeftBottomLabel();var e=this.getRightTopLabel();var E=this.getRightBottomLabel();var i=true;if(s||S){t+=this._oRb.getText(("LINEMICROCHART_START"))+": "+S+" "+s;i=false;}if(e||E){t+=(i?"":"\n")+this._oRb.getText(("LINEMICROCHART_END"))+": "+E+" "+e;}return t;};L.prototype._addTitleAttribute=function(){if(!this.$().attr("title")){this.$().attr("title",this.getTooltip_AsString());}};L.prototype._removeTitleAttribute=function(){if(this.$().attr("title")){this.$().removeAttr("title");}};L.prototype._bindMouseEnterLeaveHandler=function(){this.$().bind("mouseenter.tooltip",this._addTitleAttribute.bind(this));this.$().bind("mouseleave.tooltip",this._removeTitleAttribute.bind(this));};L.prototype._unbindMouseEnterLeaveHandler=function(){this.$().unbind("mouseenter.tooltip");this.$().unbind("mouseleave.tooltip");};L.prototype._deregisterResizeHandler=function(){if(this._sResizeHandlerId){R.deregister(this._sResizeHandlerId);this._sResizeHandlerId=null;}};l._overrideGetAccessibilityInfo(L.prototype);return L;});
