/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","../library","sap/ui/core/Control","sap/ui/core/Core","sap/suite/ui/commons/statusindicator/util/AnimationPropertiesResolver"],function(q,l,C,c,A){"use strict";var S=C.extend("sap.suite.ui.commons.statusindicator.StatusIndicator",{metadata:{library:"sap.suite.ui.commons",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},value:{type:"int",defaultValue:0},viewBox:{type:"string",defaultValue:null},ariaLabel:{type:"string",defaultValue:null}},defaultAggregation:"groups",aggregations:{groups:{type:"sap.suite.ui.commons.statusindicator.ShapeGroup",multiple:true},propertyThresholds:{type:"sap.suite.ui.commons.statusindicator.PropertyThreshold",multiple:true},discreteThresholds:{type:"sap.suite.ui.commons.statusindicator.DiscreteThreshold",multiple:true}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{press:{}}}});S.prototype.init=function(){if(C.prototype.init){C.prototype.init.apply(this,arguments);}this._sortedPropertyThresholds=[];this._sortedDiscreteThresholds=[];this._bStarted=false;this._oCurrentAnimationPromise=null;this._oAnimationPropertiesResolver=new A(this);};S.prototype._internalIds=Object.freeze({svgNodeId:"svg"});S.prototype.addPropertyThreshold=function(t){this.addAggregation("propertyThresholds",t,true);if(this._sortedPropertyThresholds.filter(function(e){return e.getToValue()===t.getToValue();}).length>0){q.sap.log.fatal("There are two or more property thresholds with the same toValue in thresholds "+"aggregation. The last threshold from them has the highest priority");}this._sortedPropertyThresholds.push(t);this._sortedPropertyThresholds.sort(function(a,b){return a.getToValue()-b.getToValue();});};S.prototype.addDiscreteThreshold=function(t){this.addAggregation("discreteThresholds",t,true);if(this._sortedDiscreteThresholds.filter(function(e){return e.getValue()===t.getValue();}).length>0){q.sap.log.fatal("There are two or more discrete thresholds with the same value in thresholds "+"aggregation. The last threshold from them has the highest priority");}this._sortedDiscreteThresholds.push(t);this._sortedDiscreteThresholds.sort(function(a,b){return a.getValue()-b.getValue();});};S.prototype._discreteThresholdsEnabled=function(){return this._sortedDiscreteThresholds.length>0;};S.prototype._getDiscreteThresholdForValue=function(v){var r=null;this._sortedDiscreteThresholds.every(function(t){if(v>=t.getValue()){r=t;return true;}});return r;};S.prototype._propertyThresholdsEnabled=function(){return this._sortedPropertyThresholds.length>0;};S.prototype._getPropertyThresholdForValue=function(v){var r=null;this._sortedPropertyThresholds.some(function(t){if(v<=t.getToValue()){r=t;return true;}});return r;};S.prototype._getFullId=function(i){return this.getId()+"-"+i;};S.prototype.onBeforeRendering=function(){var t=this;this.getGroups().forEach(function(g){g._injectAnimationPropertiesResolver(t._oAnimationPropertiesResolver);});};S.prototype.onAfterRendering=function(){this._start();};S.prototype._start=function(){this._bStarted=true;this._propagateValueToGroups();};S.prototype._shouldInvertGroupUpdateOrder=function(g){var t;g.some(function(o,i){t=i;return o.newValue!==100;});var G;this.getGroups().some(function(o,i){G=i;return!o._showsFullProgress();});return(t<G);};S.prototype._propagateValueToGroups=function(){var g=this._computeGroupValueDistribution();var i=this._shouldInvertGroupUpdateOrder(g);if(i){g=g.reverse();}this._updateAccessibilityDOM();this._oCurrentAnimationPromise=g.reduce(function(a,G){return a.then(function(r){if(r&&r.cancelled){q.sap.log.debug("Group animation cancelled.");return r;}else{return G.group._setValue(G.newValue);}});},Promise.resolve());return this._oCurrentAnimationPromise;};S.prototype._computeGroupValueDistribution=function(){var v=this.getValue();var t=this._getTotalWeight();return this.getGroups().map(function(g){var G=g.getWeight()/t;var n;if(v===0){n=0;}else if(v>=100*G){n=100;}else{n=Math.round(v/G);}v-=Math.round(n*G);return{group:g,newValue:n};});};S.prototype.setValue=function(v){v=Math.round(v);if(v>100){v=100;}if(v<0){v=0;}this.setProperty("value",v,true);if(this._bStarted){this._propagateValueToGroups();}return this;};S.prototype._getTotalWeight=function(){return this.getGroups().reduce(function(a,g){return a+g.getWeight();},0);};S.prototype.ontap=S.prototype.firePress;S.prototype.onsapenter=S.prototype.firePress;S.prototype.onsapspace=S.prototype.firePress;S.prototype._getGroupElements=function(){var g=this._computeGroupValueDistribution();g.forEach(function(G){G.group._setInitialValue(G.newValue);});return this.getGroups().reduce(function(a,G){return a.concat(G._getHtmlElements());},[]);};S.prototype._updateAccessibilityDOM=function(){var v=this.getValue();this.$().attr("aria-valuenow",v);this.$().attr("aria-valuetext",this._createValueTextMessage(v));};S.prototype._createValueTextMessage=function(v){var d=null;var a=null;var p=null;var r=sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons");if(this._discreteThresholdsEnabled()){var D=this._getDiscreteThresholdForValue(v);if(D){d=D.getAriaLabel();a=true;}else{d=this._sortedDiscreteThresholds[0].getAriaLabel();a=false;}}if(this._propertyThresholdsEnabled()){var P=this._getPropertyThresholdForValue(v);if(P){p=P.getAriaLabel();}}var V;if(d){if(p){if(a){V=r.getText("STATUS_INDICATOR_VALUE_ABOVE_THRESHOLD_COLOR",[v,d,p]);}else{V=r.getText("STATUS_INDICATOR_VALUE_BELOW_THRESHOLD_COLOR",[v,d,p]);}}else{if(a){V=r.getText("STATUS_INDICATOR_VALUE_ABOVE_THRESHOLD",[v,d]);}else{V=r.getText("STATUS_INDICATOR_VALUE_BELOW_THRESHOLD",[v,d]);}}}else if(p){V=r.getText("STATUS_INDICATOR_VALUE_COLOR",[v,p]);}else{V=r.getText("STATUS_INDICATOR_VALUE",[v]);}return V;};return S;},true);
