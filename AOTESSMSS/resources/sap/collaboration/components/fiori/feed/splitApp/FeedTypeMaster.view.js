/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.jsview("sap.collaboration.components.fiori.feed.splitApp.FeedTypeMaster",{getControllerName:function(){return"sap.collaboration.components.fiori.feed.splitApp.FeedTypeMaster";},createContent:function(c){this.oLangBundle=this.getViewData().langBundle;this.sPrefixId=this.getViewData().controlId;return new sap.m.Page(this.sPrefixId+"feedTypePage",{title:this.oLangBundle.getText("FEED_MASTER_PAGE_TITLE"),content:[new sap.m.List(this.sPrefixId+"FeedTypes",{inset:true,items:[new sap.m.StandardListItem({title:this.oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_FOLLOWS"),type:sap.m.ListType.Active,selected:true,press:function(){c.listItemPress("follows");}}),new sap.m.StandardListItem({title:this.oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_COMPANY"),type:sap.m.ListType.Active,press:function(){c.listItemPress("company");}}),new sap.m.StandardListItem({title:this.oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_GROUP"),type:sap.m.ListType.Active,press:function(){c.listItemPress("group");}}),new sap.m.StandardListItem({title:this.oLangBundle.getText("FRV_DOMAIN_DATA_FEED_TYPES_BO"),type:sap.m.ListType.Active,press:function(){c.listItemPress("context");}})]})]});}});
