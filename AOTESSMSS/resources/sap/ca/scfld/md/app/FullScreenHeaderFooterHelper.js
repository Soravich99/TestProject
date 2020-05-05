/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.scfld.md.app.FullScreenHeaderFooterHelper");jQuery.sap.require("sap.ushell.ui.footerbar.JamShareButton");jQuery.sap.require("sap.ushell.ui.footerbar.JamDiscussButton");jQuery.sap.require("sap.ushell.ui.footerbar.AddBookmarkButton");jQuery.sap.require("sap.ca.scfld.md.app.ButtonListHelper");jQuery.sap.require("sap.ca.scfld.md.app.CommonHeaderFooterHelper");sap.ui.base.Object.extend("sap.ca.scfld.md.app.FullScreenHeaderFooterHelper",{constructor:function(a){this.oAppImp=a;this.oCommonHeaderFooterHelper=new sap.ca.scfld.md.app.CommonHeaderFooterHelper(a,undefined,true);},defineHeaderFooter:function(c){var o=c.getHeaderFooterOptions();this.setHeaderFooter(c,o);},setHeaderFooter:function(c,o,k){if(!o){return;}var p=this.oCommonHeaderFooterHelper.startBuild(c,o,{iSettingsPosition:0},k);this.oCommonHeaderFooterHelper.createSettingsButton(c);var h=this.needsFooter(c);this.defineHeader(c,p,h);this.defineFooter(c,p,h);this.oAppImp.oCurController.FullCtrl=c;this.oAppImp.oCurController.MasterCtrl=null;this.oAppImp.oCurController.DetailCtrl=null;this.oCommonHeaderFooterHelper.endBuild(c);},defineFooter:function(c,p,h){if(h){this.oCommonHeaderFooterHelper.defineFooterRight(c,p,1000,this.oAppImp.bIsPhone,false,true);if(!this.oAppImp.bIsPhone){if(!c._oControlStore.oLeftButtonList){c._oControlStore.oLeftButtonList=new sap.ca.scfld.md.app.ButtonListHelper(this.oAppImp,25);c._oControlStore.oLeftButtonList.oBar=c._oControlStore.oButtonListHelper.oBar;c._oControlStore.oButtonListHelper.addButtonListHelper(c._oControlStore.oLeftButtonList);}this.oCommonHeaderFooterHelper.getGenericButtons(3,c,c._oControlStore.oLeftButtonList);}}},defineHeader:function(c,p,h){var t=c._oHeaderFooterOptions.sFullscreenTitleId;this.oCommonHeaderFooterHelper.ensureHeader(c,p,true,undefined,t);if(c._oHeaderFooterOptions.oHeaderBtnSettings){this.oCommonHeaderFooterHelper.setAppHeaderBtn(c,c._oHeaderFooterOptions.oHeaderBtnSettings);}if(c._oHeaderFooterOptions.sI18NFullscreenTitle){var b=this.oAppImp.getResourceBundle();var T=b.getText(c._oHeaderFooterOptions.sI18NFullscreenTitle);}else if(c._oHeaderFooterOptions.sFullscreenTitle){var T=c._oHeaderFooterOptions.sFullscreenTitle;}else{var b=this.oAppImp.getResourceBundle();var T=b.getText("FULLSCREEN_TITLE");}c._oControlStore.oTitle.setText(T);if(c._oControlStore.oFacetFilterButton){c._oControlStore.oFacetFilterButton.setVisible(!!c._oHeaderFooterOptions.onFacetFilter);}else if(c._oHeaderFooterOptions.onFacetFilter){c._oControlStore.oFacetFilterButton=new sap.m.Button();c._oControlStore.oFacetFilterButton.setIcon("sap-icon://filter");c._oControlStore.oFacetFilterButton.attachPress(function(e){c._oHeaderFooterOptions.onFacetFilter(e);});c._oControlStore.oHeaderBar.addContentRight(c._oControlStore.oFacetFilterButton);}},needsFooter:function(c){return c._oHeaderFooterOptions.onFacetFilter||this.oCommonHeaderFooterHelper.getGenericCount(c)>0||this.oCommonHeaderFooterHelper.getActionsCount(c)>0||this.oCommonHeaderFooterHelper.hasShareButtons(c);},getFooterRightCount:function(c){var l=this.oCommonHeaderFooterHelper.getFooterRightCount(c,"S");var g=this.oCommonHeaderFooterHelper.getGenericCount(c);var a=this.oCommonHeaderFooterHelper.getActionsCount(c);if(this.oAppImp.bIsPhone&&sap.ui.Device.orientation.landscape){if(a===1&&g<4){return a+g;}if(a===0){return g;}l=this.oCommonHeaderFooterHelper.getFooterRightCount(c,"M");}else if(this.oAppImp.bIsPhone&&!sap.ui.Device.orientation.landscape){if(a===0){return g;}l=this.oCommonHeaderFooterHelper.getFooterRightCount(c,"S");}else if(this.oAppImp.bIsIPad&&!sap.ui.Device.orientation.landscape){l=this.oCommonHeaderFooterHelper.getFooterRightCount(c,"M");}else{l=this.oCommonHeaderFooterHelper.getFooterRightCount(c,"XL");}if(a===l&&g===1){return l+1;}return l;}});
