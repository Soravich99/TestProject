/*!
* UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["jquery.sap.global","./library","sap/ui/core/Control","./MessageStripUtilities","./Text","./Link","./FormattedText","sap/ui/core/library","sap/ui/Device"],function(q,l,C,M,T,L,F,c,D){"use strict";var a=c.MessageType;var b=C.extend("sap.m.MessageStrip",{metadata:{library:"sap.m",properties:{text:{type:"string",group:"Appearance",defaultValue:""},type:{type:"sap.ui.core.MessageType",group:"Appearance",defaultValue:a.Information},customIcon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""},showIcon:{type:"boolean",group:"Appearance",defaultValue:false},showCloseButton:{type:"boolean",group:"Appearance",defaultValue:false},enableFormattedText:{type:"boolean",group:"Appearance",defaultValue:false}},defaultAggregation:"link",aggregations:{link:{type:"sap.m.Link",multiple:false,singularName:"link"},_formattedText:{type:"sap.m.FormattedText",multiple:false,visibility:"hidden"},_text:{type:"sap.m.Text",multiple:false,visibility:"hidden"}},events:{close:{}}}});b.prototype.init=function(){this.data("sap-ui-fastnavgroup","true",true);this.setAggregation("_text",new T());};b.prototype.setText=function(t){var f=this.getAggregation("_formattedText");if(f){f.setHtmlText(t);}this.getAggregation("_text").setText(t);return this.setProperty("text",t);};b.prototype.setType=function(t){if(t===a.None){q.sap.log.warning(M.MESSAGES.TYPE_NOT_SUPPORTED);t=a.Information;}return this.setProperty("type",t);};b.prototype.setEnableFormattedText=function(e){var f=this.getAggregation("_formattedText");if(e){if(!f){f=new F();f._setUseLimitedRenderingRules(true);this.setAggregation("_formattedText",f);}f.setHtmlText(this.getText());}return this.setProperty("enableFormattedText",e);};b.prototype.setAggregation=function(n,o,s){if(n==="link"&&o instanceof L){o.addAriaLabelledBy(this.getId());}C.prototype.setAggregation.call(this,n,o,s);return this;};b.prototype.ontap=M.handleMSCloseButtonInteraction;b.prototype.onsapenter=M.handleMSCloseButtonInteraction;b.prototype.onsapspace=M.handleMSCloseButtonInteraction;b.prototype.ontouchmove=function(e){e.setMarked();};b.prototype.close=function(){var f=function(){this.fireClose();this.setVisible(false);}.bind(this);if(!sap.ui.getCore().getConfiguration().getAnimation()){f();return;}if(D.browser.internet_explorer&&D.browser.version<10){M.closeTransitionWithJavascript.call(this,f);}else{M.closeTransitionWithCSS.call(this,f);}};return b;});