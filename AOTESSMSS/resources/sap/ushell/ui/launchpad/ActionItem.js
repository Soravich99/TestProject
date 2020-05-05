/*!
 * Copyright (c) 2009-2017 SAP SE, All Rights Reserved
 */
sap.ui.define(['sap/m/Button','sap/ushell/library'],function(B,l){"use strict";var A=B.extend("sap.ushell.ui.launchpad.ActionItem",{metadata:{library:"sap.ushell",properties:{actionType:{type:"string",group:"Appearance",defaultValue:'standard'}},events:{press:{},afterRendering:{}}}});A.prototype.init=function(){if(B.prototype.init){B.prototype.init.apply(this,arguments);}this.sOrigType=undefined;};A.prototype.setActionType=function(t){if(!this.sOrigType){this.sOrigType=this.getType();}if(t==='action'){this.setType(sap.m.ButtonType.Unstyled);this.addStyleClass("sapUshellActionItem");}else{this.sOrigType?this.setType(this.sOrigType):this.setType(sap.m.ButtonType.Standard);this.removeStyleClass("sapUshellActionItem");}this.setProperty('actionType',t,true);};return A;});
