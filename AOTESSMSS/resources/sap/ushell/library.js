/*!
 * Copyright (c) 2009-2017 SAP SE, All Rights Reserved
 */
sap.ui.define(['sap/m/library','sap/ui/core/Core','sap/ui/core/library','sap/ui/layout/library'],function(l,C,a,b){"use strict";sap.ui.getCore().initLibrary({name:"sap.ushell",dependencies:["sap.ui.core","sap.ui.layout","sap.m"],types:["sap.ushell.ui.launchpad.ViewPortState","sap.ushell.ui.tile.State","sap.ushell.ui.tile.StateArrow"],interfaces:[],controls:["sap.ushell.components.factsheet.controls.PictureTile","sap.ushell.components.factsheet.controls.PictureViewer","sap.ushell.components.factsheet.controls.PictureViewerItem","sap.ushell.ui.appfinder.AppBox","sap.ushell.ui.footerbar.AboutButton","sap.ushell.ui.footerbar.AddBookmarkButton","sap.ushell.ui.footerbar.ContactSupportButton","sap.ushell.ui.footerbar.EndUserFeedback","sap.ushell.ui.footerbar.HideGroupsButton","sap.ushell.ui.footerbar.JamDiscussButton","sap.ushell.ui.footerbar.JamShareButton","sap.ushell.ui.footerbar.LogoutButton","sap.ushell.ui.footerbar.SettingsButton","sap.ushell.ui.footerbar.UserPreferencesButton","sap.ushell.ui.launchpad.ActionItem","sap.ushell.ui.launchpad.AnchorItem","sap.ushell.ui.launchpad.AnchorNavigationBar","sap.ushell.ui.launchpad.DashboardGroupsContainer","sap.ushell.ui.launchpad.EmbeddedSupportErrorMessage","sap.ushell.ui.launchpad.Fiori2LoadingDialog","sap.ushell.ui.launchpad.GroupHeaderActions","sap.ushell.ui.launchpad.GroupListItem","sap.ushell.ui.launchpad.HeaderTile","sap.ushell.ui.launchpad.LinkTileWrapper","sap.ushell.ui.launchpad.LoadingDialog","sap.ushell.ui.launchpad.Panel","sap.ushell.ui.launchpad.PlusTile","sap.ushell.ui.launchpad.Tile","sap.ushell.ui.launchpad.TileContainer","sap.ushell.ui.launchpad.TileState","sap.ushell.ui.launchpad.ViewPortContainer","sap.ushell.ui.tile.DynamicTile","sap.ushell.ui.tile.ImageTile","sap.ushell.ui.tile.StaticTile","sap.ushell.ui.tile.TileBase"],elements:[],version:"1.52.20",extensions:{"sap.ui.support":{diagnosticPlugins:["sap/ushell/support/plugins/flpConfig/FlpConfigurationPlugin"]}}});sap.ushell.ui.launchpad.ViewPortState={Left:"Left",Center:"Center",Right:"Right",LeftCenter:"LeftCenter",CenterLeft:"CenterLeft",RightCenter:"RightCenter",CenterRight:"CenterRight"};sap.ushell.ui.tile.State={Neutral:"Neutral",None:"None",Negative:"Negative",Error:"Error",Positive:"Positive",Success:"Success",Critical:"Critical",Warning:"Warning"};sap.ushell.ui.tile.StateArrow={None:"None",Up:"Up",Down:"Down"};return sap.ushell;},true);
