// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(function(){"use strict";sap.ui.jsview("sap.ushell.components.tiles.cdm.applauncher.StaticTile",{getControllerName:function(){return"sap.ushell.components.tiles.cdm.applauncher.StaticTile";},createContent:function(c){this.setHeight('100%');this.setWidth('100%');jQuery.sap.require('sap.m.GenericTile');jQuery.sap.require('sap.m.ImageContent');var c=this.getController();return new sap.m.GenericTile({header:'{/properties/title}',subheader:'{/properties/subtitle}',size:'Auto',tileContent:new sap.m.TileContent({size:"Auto",footer:'{/properties/info}',content:new sap.m.ImageContent({src:'{/properties/icon}',width:"100%"})}),press:[c.onPress,c]});}});},true);
