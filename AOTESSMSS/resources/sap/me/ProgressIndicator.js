/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2016 SAP SE. All rights reserved
    
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control'],function(q,l,C){"use strict";var P=C.extend("sap.me.ProgressIndicator",{metadata:{deprecated:true,library:"sap.me",properties:{visible:{type:"boolean",group:"Behavior",defaultValue:true},enabled:{type:"boolean",group:"Behavior",defaultValue:true},barColor:{type:"sap.ui.core.BarColor",group:"Appearance",defaultValue:sap.ui.core.BarColor.NEUTRAL},displayValue:{type:"string",group:"Appearance",defaultValue:'0%'},percentValue:{type:"int",group:"Data",defaultValue:0},showValue:{type:"boolean",group:"Appearance",defaultValue:true},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'}}}});P.prototype.setEndBar=function(){var w=this.getPercentValue();var a;var b=this.getBarColor();var t;this.oBar=this.getDomRef("bar");this.oEnd=this.getDomRef("end");this.oBox=this.getDomRef("box");q(this.oEnd).removeClass('sapUIMeProgIndEndHidden');q(this.oEnd).addClass('sapUIMeProgIndEnd');if(w>100){a=(10000/w)+'%';}else{a='100%';}if(w>100){t=(w-100)*20;}else{t=(100-w)*20;}q(this.oBox).animate({width:a},0,'linear');q(this.oEnd).animate({left:a},t,'linear');q(this.oBar).animate({width:w+'%'},t,'linear');if(!this.oThis){this.oThis=this.$();}};P.prototype.setEndBarGoesBack=function(p){var w=this.getPercentValue();var a;var b=this.getBarColor();var t;this.oBar=this.getDomRef("bar");this.oEnd=this.getDomRef("end");this.oBox=this.getDomRef("box");if(p>100){a=(10000/p)+'%';}else{a='100%';}q(this.oEnd).removeClass('sapUIMeProgIndEnd');q(this.oEnd).addClass('sapUIMeProgIndEndHidden');if(w>100){t=(w-100)*20;}else{t=(100-w)*20;}q(this.oBox).animate({width:a},0,'linear');q(this.oEnd).animate({left:a},t,'linear');q(this.oBar).animate({width:w+'%'},t,'linear');if(!this.oThis){this.oThis=this.$();}};P.prototype.setPercentValue=function(p){var w=this.getPercentValue();var a;var b=this.getBarColor();this.oBar=this.getDomRef("bar");this.oEnd=this.getDomRef("end");this.oBox=this.getDomRef("box");var t=this;var c;if(p<0){p=0;}if(p>100){a=(10000/p)+'%';}else{a='100%';}if(!this.oBar){c=p*20;this.setProperty('percentValue',p,true);q(this.oBar).animate({width:p+'%'},c,'linear');return this;}if(p>100&&w<=100){c=(100-w)*20;this.setProperty('percentValue',p,true);q(this.oBar).animate({width:'100%'},c,'linear',function(){t.setEndBar();});}else if(p<=100&&w>100){c=(w-100)*20;this.setProperty('percentValue',p,true);q(this.oBar).animate({width:'100%'},c,'linear',function(){t.setEndBarGoesBack();});}else if(p>100&&w>100){if(p>w){c=(p-w)*20;}else{c=(w-p)*20;}a=(10000/p)+'%';this.setProperty('percentValue',p,true);q(this.oBox).animate({width:a},0,'linear');q(this.oEnd).animate({left:a},c,'linear');q(this.oBar).animate({width:p+'%'},c,'linear',function(){});if(!this.oThis){this.oThis=this.$();}}else{if(p>w){c=(p-w)*20;}else{c=(w-p)*20;}this.setProperty('percentValue',p,true);q(this.oBar).animate({width:p+'%'},c,'linear');if(!this.oThis){this.oThis=this.$();}}return this;};return P;},true);
