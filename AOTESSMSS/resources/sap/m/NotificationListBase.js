/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Control','./ListItemBase','./Text','./Image','./OverflowToolbar','sap/ui/core/Icon','sap/ui/core/library','sap/ui/core/Element'],function(l,C,L,T,I,O,a,c,E){'use strict';var P=c.Priority;var N=L.extend('sap.m.NotificationListBase',{metadata:{library:'sap.m',properties:{priority:{type:'sap.ui.core.Priority',group:'Appearance',defaultValue:P.None},title:{type:'string',group:'Appearance',defaultValue:''},datetime:{type:'string',group:'Appearance',defaultValue:''},showButtons:{type:'boolean',group:'Behavior',defaultValue:true},showCloseButton:{type:'boolean',group:'Behavior',defaultValue:true},authorName:{type:'string',group:'Appearance',defaultValue:''},authorPicture:{type:'sap.ui.core.URI',multiple:false}},aggregations:{buttons:{type:'sap.m.Button',multiple:true},_headerTitle:{type:'sap.m.Text',multiple:false,visibility:"hidden"},_dateTime:{type:'sap.m.Text',multiple:false,visibility:'hidden'},_authorName:{type:'sap.m.Text',multiple:false,visibility:"hidden"},_authorImage:{type:'sap.ui.core.Control',multiple:false,visibility:"hidden"},_overflowToolbar:{type:'sap.m.OverflowToolbar',multiple:false,visibility:"hidden"},_closeButton:{type:'sap.m.Button',multiple:false,visibility:"hidden"},_collapseButton:{type:'sap.m.Button',multiple:false,visibility:"hidden"}},events:{close:{}}}});N.prototype.init=function(){this.setAggregation('_overflowToolbar',new O());};N.prototype.setTitle=function(t){var r=this.setProperty('title',t);this._getHeaderTitle().setText(t);return r;};N.prototype.setDatetime=function(d){var r=this.setProperty('datetime',d);this._getDateTimeText().setText(d);return r;};N.prototype.setAuthorName=function(b){var r=this.setProperty('authorName',b);this._getAuthorName().setText(b);return r;};N.prototype.clone=function(){var b=C.prototype.clone.apply(this,arguments);var o=this.getAggregation('_overflowToolbar');b.setAggregation("_overflowToolbar",o.clone(),true);return b;};N.prototype.close=function(){var p=this.getParent();this.fireClose();if(p&&p instanceof E){var d={onAfterRendering:function(){p.focus();p.removeEventDelegate(d);}};p.addEventDelegate(d);}};N.prototype.bindAggregation=function(b,d){if(b=='buttons'){this.getAggregation('_overflowToolbar').bindAggregation('content',d);return this;}else{return C.prototype.bindAggregation.call(this,b,d);}};N.prototype.validateAggregation=function(b,o,m){if(b=='buttons'){this.getAggregation('_overflowToolbar').validateAggregation('content',o,m);return this;}else{return C.prototype.validateAggregation.call(this,b,o,m);}};N.prototype.setAggregation=function(b,o,s){if(b=='buttons'){this.getAggregation('_overflowToolbar').setAggregation('content',o,s);return this;}else{return C.prototype.setAggregation.call(this,b,o,s);}};N.prototype.getAggregation=function(b,d){if(b=='buttons'){var t=this.getAggregation('_overflowToolbar');return t.getContent().filter(function(e){return e instanceof sap.m.Button;});}else{return C.prototype.getAggregation.call(this,b,d);}};N.prototype.indexOfAggregation=function(b,o){if(b=='buttons'){return this.getAggregation('_overflowToolbar').indexOfAggregation('content',o);}else{return C.prototype.indexOfAggregation.call(this,b,o);}};N.prototype.insertAggregation=function(b,o,d,s){if(b=='buttons'){this.getAggregation('_overflowToolbar').insertAggregation('content',o,d,s);return this;}else{return C.prototype.insertAggregation.call(this,b,o,d,s);}};N.prototype.addAggregation=function(b,o,s){if(b=='buttons'){var t=this.getAggregation('_overflowToolbar');return t.addAggregation('content',o,s);}else{return C.prototype.addAggregation.call(this,b,o,s);}};N.prototype.removeAggregation=function(b,o,s){if(b=='buttons'){return this.getAggregation('_overflowToolbar').removeAggregation('content',o,s);}else{return C.prototype.removeAggregation.call(this,b,o,s);}};N.prototype.removeAllAggregation=function(b,s){if(b=='buttons'){return this.getAggregation('_overflowToolbar').removeAllAggregation('content',s);}else{return C.prototype.removeAllAggregation.call(this,b,s);}};N.prototype.destroyAggregation=function(b,s){if(b=='buttons'){return this.getAggregation('_overflowToolbar').destroyAggregation('content',s);}else{return C.prototype.destroyAggregation.call(this,b,s);}};N.prototype.getBinding=function(b){if(b=='buttons'){return this.getAggregation('_overflowToolbar').getBinding('content');}else{return C.prototype.getBinding.call(this,b);}};N.prototype.getBindingInfo=function(b){if(b=='buttons'){return this.getAggregation('_overflowToolbar').getBindingInfo('content');}else{return C.prototype.getBindingInfo.call(this,b);}};N.prototype.getBindingPath=function(b){if(b=='buttons'){return this.getAggregation('_overflowToolbar').getBindingPath('content');}else{return C.prototype.getBindingPath.call(this,b);}};N.prototype._getHeaderTitle=function(){var t=this.getAggregation("_headerTitle");if(!t){t=new T({id:this.getId()+'-title',text:this.getTitle(),maxLines:2});this.setAggregation("_headerTitle",t,true);}return t;};N.prototype._getDateTimeText=function(){var d=this.getAggregation('_dateTime');if(!d){d=new T({id:this.getId()+'-datetime',text:this.getDatetime()}).addStyleClass('sapMNLI-Datetime');this.setAggregation('_dateTime',d,true);}return d;};N.prototype._getAuthorName=function(){var b=this.getAggregation('_authorName');if(!b){b=new T({text:this.getAuthorName()}).addStyleClass('sapMNLI-Text');this.setAggregation('_authorName',b,true);}return b;};N.prototype._getAuthorImage=function(){var b=this.getAggregation('_authorImage');if(!b){var d=this.getAuthorPicture();var e=this.getAuthorName();if(i(d)){b=new a({src:d,alt:e});}else{b=new I({src:d,alt:e});}this.setAggregation('_authorImage',b,true);}return b;};N.prototype._getToolbar=function(){var t=this.getAggregation("_overflowToolbar");if(!t){t=new O();this.setAggregation("_overflowToolbar",t,true);}return t;};function i(s){if(!s){return false;}var r=window.URI.parse(s);return(r.protocol&&r.protocol=='sap-icon');}return N;});
