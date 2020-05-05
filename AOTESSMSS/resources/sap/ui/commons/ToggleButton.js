/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./Button'],function(q,B){"use strict";var T=B.extend("sap.ui.commons.ToggleButton",{metadata:{library:"sap.ui.commons",properties:{pressed:{type:"boolean",group:"Data",defaultValue:false}}}});T.prototype.onclick=function(e){if(this.getEnabled()){this.setPressed(!this.getPressed());if(this.$().is(":visible")){this.firePress({pressed:this.getPressed()});}}e.preventDefault();e.stopPropagation();};T.prototype.setPressed=function(p){var r;if(p!==this.getProperty("pressed")){r=this.getRenderer();this.setProperty("pressed",p,true);if(!this.getPressed()){r.ondeactivePressed(this);}else{r.onactivePressed(this);}r.updateImage(this);}return this;};T.prototype.onAfterRendering=function(){var r=this.getRenderer();if(!this.getPressed()){r.ondeactivePressed(this);}else{r.onactivePressed(this);}};T.prototype.getAccessibilityInfo=function(){var i=B.prototype.getAccessibilityInfo.apply(this,arguments);if(this.getPressed()){i.description=((i.description||"")+" "+sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons").getText("ACC_CTR_STATE_PRESSED")).trim();}return i;};return T;},true);
