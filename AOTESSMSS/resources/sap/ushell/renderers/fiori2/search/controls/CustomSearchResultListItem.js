sap.ui.define(['sap/ushell/renderers/fiori2/search/controls/SearchResultListItem','sap/ushell/renderers/fiori2/search/controls/CustomSearchResultListItemContent'],function(){"use strict";return sap.ushell.renderers.fiori2.search.controls.SearchResultListItem.extend("sap.ushell.renderers.fiori2.search.controls.CustomSearchResultListItem",{metadata:{properties:{content:{type:"sap.ushell.renderers.fiori2.search.controls.CustomSearchResultListItemContent"}}},init:function(){sap.ushell.renderers.fiori2.search.controls.SearchResultListItem.prototype.init.apply(this,arguments);},setupCustomContentControl:function(){var c=this.getContent();c.setTitle(this.getTitle());c.setTitleUrl(this.getTitleUrl());c.setType(this.getType());c.setImageUrl(this.getImageUrl());c.setAttributes(this.getAttributes());},renderer:function(r,c){c.setupCustomContentControl();sap.ushell.renderers.fiori2.search.controls.SearchResultListItemRenderer.render.apply(this,arguments);},onAfterRendering:function(){sap.ushell.renderers.fiori2.search.controls.SearchResultListItem.prototype.onAfterRendering.apply(this,arguments);this.getContent().getTitleVisibility();}});});
