/*!
 * Copyright (c) 2009-2017 SAP SE, All Rights Reserved
 */
sap.ui.define(['sap/ui/core/Control','sap/ushell/library','sap/ushell/override','sap/ushell/ui/launchpad/AccessibilityCustomData'],function(C,l,o,A){"use strict";var T=C.extend("sap.ushell.ui.launchpad.Tile",{metadata:{library:"sap.ushell",properties:{long:{type:"boolean",group:"Misc",defaultValue:false},uuid:{type:"string",group:"Misc",defaultValue:null},tileCatalogId:{type:"string",group:"Misc",defaultValue:null},isCustomTile:{type:"boolean",group:"Misc",defaultValue:false},target:{type:"string",group:"Misc",defaultValue:null},visible:{type:"boolean",group:"Misc",defaultValue:true},debugInfo:{type:"string",group:"Misc",defaultValue:null},rgba:{type:"string",group:"Misc",defaultValue:null},animationRendered:{type:"boolean",group:"Misc",defaultValue:false},isLocked:{type:"boolean",group:"Misc",defaultValue:false},showActionsIcon:{type:"boolean",group:"Misc",defaultValue:false},tileActionModeActive:{type:"boolean",group:"Misc",defaultValue:false},ieHtml5DnD:{type:"boolean",group:"Misc",defaultValue:false},navigationMode:{type:"string",group:"Misc",defaultValue:null},isDraggedInTabBarToSourceGroup:{type:"boolean",group:"Misc",defaultValue:false}},aggregations:{tileViews:{type:"sap.ui.core.Control",multiple:true,singularName:"tileView"},pinButton:{type:"sap.ui.core.Control",multiple:true,singularName:"pinButton"}},events:{press:{},coverDivPress:{},afterRendering:{},showActions:{},deletePress:{}}}});T.prototype.getActionSheetIcon=function(){if(!this.getTileActionModeActive()){return undefined;}if(!this.actionSheetIcon){this.actionSheetIcon=new sap.ui.core.Icon({src:"sap-icon://overflow"});this.actionSheetIcon.setTooltip(sap.ushell.resources.i18n.getText("configuration.category.tile_actions"));this.actionSheetIcon.addStyleClass('sapUshellTileActionIconDivBottomInner');}return this.actionSheetIcon;};T.prototype.ontap=function(e,u){jQuery.sap.log.info("Tile clicked:",this.getDebugInfo(),"sap.ushell.ui.launchpad.Tile");this.firePress();return;};T.prototype.destroy=function(s){this.destroyTileViews();C.prototype.destroy.call(this,s);};T.prototype.addTileView=function(O,s){O.setParent(null);sap.ui.base.ManagedObject.prototype.addAggregation.call(this,"tileViews",O,s);};T.prototype.destroyTileViews=function(){if(this.mAggregations["tileViews"]){this.mAggregations["tileViews"].length=0;}};T.prototype.onAfterRendering=function(){if(this.getIsDraggedInTabBarToSourceGroup()===true){var t=this.getParent();t.removeAggregation("tiles",this,false);}var r;r=this.getRgba();if(r){this._redrawRGBA();}this.fireAfterRendering();};T.prototype._launchTileViaKeyboard=function(e){if(this.getTileActionModeActive()){this.fireCoverDivPress({id:this.getId()});}else{if(e.target.tagName!=="BUTTON"){var t=this.getTileViews()[0],p=false,c,a;if(t.firePress){t.firePress({id:this.getId()});}else if(t.getComponentInstance){c=t.getComponentInstance();if(c._oController&&c._oController.oView.getContent()){a=c._oController.oView.getContent()[0];if(a&&a.firePress){a.firePress({id:this.getId()});}}}else{while(t.getContent&&!p){t=t.getContent()[0];if(t.firePress){t.firePress({id:this.getId()});p=true;}}}}}};T.prototype.onsapenter=function(e){this._launchTileViaKeyboard(e);if(!this.getTileActionModeActive()){this._announceLoadingApplication();}};T.prototype.onsapspace=function(e){this._launchTileViaKeyboard(e);if(!this.getTileActionModeActive()){this._announceLoadingApplication();}};T.prototype.onfocusin=function(e){var c=this.getDomRef().getAttribute("class"),p;p=c?c.indexOf("sapUshellPlusTile")!==-1:false;if(!p){var j=jQuery(this.getDomRef()).prevUntil("h3"),a,s="",t,n,b;if(j.length>0){a=j[j.length-1].previousSibling;}else{a=this.getDomRef().previousSibling;}if(a){s=a.getAttribute('id');}b=this.getDomRef().querySelector(".sapUshellTileInner");var d=this.getDomRef().querySelector(".sapUshellTileDeleteClickArea .sapUiIcon");var f=d?d.id:"";if(b&&b.children&&b.children[0]){var g=(s&&s!=="")?"sapUshellCatalogAccessibilityTileText":"sapUshellDashboardAccessibilityTileText";t=b.children[0].getAttribute('id');var L=[g,t,f,s];n=this.getId()+"_navigationMode";var N=document.getElementById(n);if(N==null){var h=this.getNavigationMode();if(h){N=document.createElement("div");var i=document.createAttribute("id");i.value=n;N.setAttributeNode(i);N.style.display="none";var k=sap.ushell.resources.i18n.getText(h+"NavigationMode");if(k){N.innerHTML=k;}else{jQuery.sap.log.warning("could not get the navigation mode text of this tile to be added on the aria-labelledBby attribute");}b.appendChild(N);L.splice(1,0,n);}}else{L.splice(1,0,n);}this.getDomRef().setAttribute("aria-labelledby",L.join(" "));}}};T.prototype.onclick=function(e){if(this.getTileActionModeActive()){var s=e.originalEvent.srcElement;if(jQuery(s).closest('.sapUshellTileDeleteClickArea').length>0){this.fireDeletePress();}else{this.fireCoverDivPress({id:this.getId()});}}else{this._announceLoadingApplication();}};T.prototype._announceLoadingApplication=function(){var a=document.getElementById("sapUshellLoadingAccessibilityHelper-appInfo"),L=sap.ushell.resources.i18n.getText("screenReaderNavigationLoading");if(a){a.setAttribute("role","alert");a.innerHTML=L;setTimeout(function(){a.removeAttribute("role");a.innerHTML="";},0);}};T.prototype._initDeleteAction=function(){var t=this;if(!this.deleteIcon){this.deleteIcon=new sap.ui.core.Icon({src:"sap-icon://decline",tooltip:sap.ushell.resources.i18n.getText("removeButtonTItle")});this.deleteIcon.addEventDelegate({onclick:function(e){t.fireDeletePress();e.stopPropagation();}});this.deleteIcon.addStyleClass("sapUshellTileDeleteIconInnerClass");this.deleteIcon.addCustomData(new A({key:"aria-label",value:sap.ushell.resources.i18n.getText("removeButtonLabel"),writeToDom:true}));}return this.deleteIcon;};T.prototype.setShowActionsIcon=function(s){var t=this,i;if(s){i=new sap.ui.core.Icon({size:"1rem",src:"sap-icon://overflow",press:function(e){t.fireShowActions();t.addStyleClass('showTileActionsIcon');var E=sap.ui.getCore().getEventBus(),a=function(n,b,c){c.removeStyleClass('showTileActionsIcon');E.unsubscribe("dashboard","actionSheetClose",a);};E.subscribe("dashboard","actionSheetClose",a);}});i.addStyleClass("sapUshellTileActionsIconClass");this.actionIcon=i;}else if(this.actionIcon){this.actionIcon.destroy(true);}this.setProperty("showActionsIcon",s);};T.prototype.setIsDraggedInTabBarToSourceGroup=function(d){this.setProperty('isDraggedInTabBarToSourceGroup',d,true);this.setVisible(!d);};T.prototype.setVisible=function(v){this.setProperty("visible",v,true);return this.toggleStyleClass("sapUshellHidden",!v);};T.prototype.setTarget=function(v){this.setProperty("target",v,true);this.$().find(".sapUshellTileInner").attr("href",v);};T.prototype.setRgba=function(v){this.setProperty("rgba",v,true);this._redrawRGBA(arguments);};T.prototype.setAnimationRendered=function(v){this.setProperty('animationRendered',v,true);};T.prototype.setNavigationMode=function(v){this.setProperty('navigationMode',v,true);};T.prototype._handleTileShadow=function(j,a){if(j.length){j.unbind('mouseenter mouseleave');var u,t=j.css("border").split("px")[0],m=this.getModel();if(t>0){u=j.css("border-color");}else{u=this.getRgba();}j.hover(function(){if(!m.getProperty('/tileActionModeActive')){var O=jQuery(j).css('box-shadow'),s=O?O.split(') ')[1]:null,U;if(s){U=s+" "+u;jQuery(this).css('box-shadow',U);}}},function(){jQuery(this).css('box-shadow','');});}};T.prototype._redrawRGBA=function(a){var r=this.getRgba(),j,i;if(r){j=jQuery.sap.byId(this.getId());i=(jQuery.browser.msie&&(parseInt(jQuery.browser.version,9)===9));if(!j){return;}if(!this.getModel().getProperty('/animationRendered')){if(i){j.animate({backgroundColor:r},2000);}else{j.css('transition','background-color 2s');j.css('background-color',r);}}else{j.css('background-color',r);}this._handleTileShadow(j,a);}};T.prototype.setLong=function(L){this.setProperty("long",L,true);return this.toggleStyleClass("sapUshellLong",!!L);};T.prototype.setUuid=function(u){this.setProperty("uuid",u,true);return this;};return T;});
