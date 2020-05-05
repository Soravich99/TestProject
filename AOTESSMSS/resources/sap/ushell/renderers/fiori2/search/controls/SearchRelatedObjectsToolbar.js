sap.ui.define([],function(){"use strict";return sap.ui.core.Control.extend("sap.ushell.renderers.fiori2.search.controls.SearchRelatedObjectsToolbar",{metadata:{properties:{navigationObjects:{type:"object",multiple:true}}},init:function(){var t=this;if(typeof sap!=='undefined'&&sap.ui&&sap.ui.getCore){sap.ui.getCore().getEventBus().subscribe("searchLayoutChanged",t._layoutToolbarElements,t);}},exit:function(){var t=this;if(typeof sap!=='undefined'&&sap.ui&&sap.ui.getCore){sap.ui.getCore().getEventBus().unsubscribe("searchLayoutChanged",t._layoutToolbarElements,t);}},renderer:function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUshellSearchResultListItem-RelatedObjectsToolbar");r.writeClasses();r.write(">");c._renderToolbar(r);r.write("</div>");},_renderToolbar:function(r){var t=this;var i;var c=function(b){return function(){b.trackNavigation();};};var n=t.getNavigationObjects();if(n.length>0){var a=[];for(i=0;i<n.length;i++){var b=n[i];var l=new sap.m.Link({text:b.getText(),href:b.getHref(),layoutData:new sap.m.ToolbarLayoutData({shrinkable:false}),press:c(b)});var d=b.getTarget();if(d){l.setTarget(d);}l.addStyleClass("sapUshellSearchResultListItem-RelatedObjectsToolbar-Element");a.push(l);}var e=[];var f=new sap.m.ToolbarSpacer();e.push(f);for(i=0;i<a.length;i++){e.push(a[i]);}t.overFlowButton=new sap.m.Button({icon:sap.ui.core.IconPool.getIconURI("overflow")});t.overFlowButton.addStyleClass("sapUshellSearchResultListItem-RelatedObjectsToolbar-OverFlowButton");e.push(t.overFlowButton);t.overFlowSheet=new sap.m.ActionSheet({placement:sap.m.PlacementType.Top});t.overFlowButton.attachPress(function(){t.overFlowSheet.openBy(t.overFlowButton);});t.relatedObjectActionsToolbar=new sap.m.Toolbar({design:sap.m.ToolbarDesign.Solid,content:e});t.relatedObjectActionsToolbar.data("sap-ui-fastnavgroup","false",true);t.relatedObjectActionsToolbar.addStyleClass("sapUshellSearchResultListItem-RelatedObjectsToolbar-Toolbar");r.renderControl(t.relatedObjectActionsToolbar);}},onAfterRendering:function(){var t=this;if(t.overFlowButton){var a=$(t.overFlowButton.getDomRef());a.css("display","none");}$(window).on("resize",function(){t._layoutToolbarElements();});t._layoutToolbarElements();},_layoutToolbarElements:function(){var t=this;if(!(t.getDomRef()&&t.relatedObjectActionsToolbar.getDomRef())){return;}var a=$(t.relatedObjectActionsToolbar.getDomRef());var b=a.innerWidth();if(b===0||(t.toolbarWidth&&t.toolbarWidth===b)){return;}if($(t.getDomRef()).css("display")==="none"||a.css("display")==="none"){return;}t.toolbarWidth=b;var c=$(t.overFlowButton.getDomRef());c.css("display","none");var d=0;var p=function(j,k){k.performNavigation();};var e=a.find(".sapUshellSearchResultListItem-RelatedObjectsToolbar-Element");for(var i=0;i<e.length;i++){var f=$(e[i]);f.css("display","");var _=d+f.outerWidth(true);if(_>b){if(i<e.length){c.css("display","");var o=c.outerWidth(true);for(;i>=0;i--){f=$(e[i]);_-=f.outerWidth(true);if(_+o<=b){break;}}}var n=t.getNavigationObjects();t.overFlowSheet.destroyButtons();for(;i<e.length;i++){f=$(e[i]);f.css("display","none");var g=n[i];var h=new sap.m.Button({text:g.getText()});h.attachPress(g,p);t.overFlowSheet.addButton(h);}break;}d=_;}t._setupItemNavigation();},_setupItemNavigation:function(){var t=this;if(!t.theItemNavigation){t.theItemNavigation=new sap.ui.core.delegate.ItemNavigation();t.addDelegate(t.theItemNavigation);}t.theItemNavigation.setCycling(false);t.theItemNavigation.setRootDomRef(t.getDomRef());var a=[];var c=t.relatedObjectActionsToolbar.getContent();for(var i=0;i<c.length;i++){if(!c[i].hasStyleClass("sapUshellSearchResultListItem-RelatedObjectsToolbar-Element")){continue;}if(!$(c[i].getDomRef()).attr("tabindex")){var b="-1";if(c[i].getPressed&&c[i].getPressed()){b="0";}$(c[i].getDomRef()).attr("tabindex",b);}a.push(c[i].getDomRef());}var _=t.overFlowButton.getDomRef();a.push(_);$(_).attr("tabindex","-1");t.theItemNavigation.setItemDomRefs(a);}});});
