sap.ui.define([],function(){"use strict";return sap.ui.base.Object.extend("sap.ushell.renderers.fiori2.search.SearchNavigationObject",{constructor:function(p){this._model=sap.ushell.renderers.fiori2.search.getModelSingleton();if(p){this.setHref(p.href);this.setText(p.text);this.setTarget(p.target);this.setLoggingType(p.loggingType);this.setPositionInList(p.positionInList);}if(typeof this._loggingType==='undefined'){this.setLoggingType(this._model.eventLogger.ITEM_NAVIGATE);}},getPositionInList:function(){return this._positionInList;},setPositionInList:function(p){this._positionInList=p;},getHref:function(){return this._href;},setHref:function(h){this._href=h;},getText:function(){return this._text;},setText:function(t){this._text=t;},getTarget:function(){return this._target;},setTarget:function(t){this._target=t;},getLoggingType:function(){return this._loggingType;},setLoggingType:function(l){this._loggingType=l;},performNavigation:function(p){this.trackNavigation(p);if(!this._target){window.open(this._href);}else{window.open(this._href,this._target);}},trackNavigation:function(p){try{this._model.eventLogger.logEvent({type:(p&&p.loggingType)||this.getLoggingType(),targetUrl:this.getHref(),positionInList:this.getPositionInList()});}catch(e){}},isEqualTo:function(o){if(!o){return false;}return this.getHref()==o.getHref();}});});
