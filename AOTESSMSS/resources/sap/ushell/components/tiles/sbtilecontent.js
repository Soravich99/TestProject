jQuery.sap.declare("sap.ushell.components.tiles.sbtilecontent");sap.ui.define(["sap/m/TileContent","sap/m/TileContentRenderer","sap/ui/core/Control"],function(T,R,C){"use strict";var t=C.extend("numeric.TileContent_Timestamp",{ontap:function(e){if(this.getParent().getRefreshOption()){e.preventDefault();e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}this.getParent().fireRefresh();}},renderer:function(r,c){r.write("<div");r.writeElementData(c);r.addClass("sapMTileCntFtrTxt");if(c.getParent().getRefreshOption()){r.addClass("sapMLnk");}r.writeClasses();r.addStyle("position","absolute");r.addStyle("z-index","2");r.addStyle(r.getConfiguration().getRTL()?"left":"right","auto");r.writeStyles();r.write(">");var a=c.getParent().getTimestamp();if(a){if(!c.getParent().getRefreshOption()){r.writeEscaped(a);}else if(r.getConfiguration().getRTL()){r.writeEscaped(a+"\u2009");r.writeIcon("sap-icon://refresh","sapMCmpTileUnitInner");}else{r.writeIcon("sap-icon://refresh","sapMCmpTileUnitInner");r.writeEscaped("\u2009"+a);}}r.write("</div>");}});return T.extend("sap.ushell.components.tiles.sbtilecontent",{metadata:{properties:{timestamp:{type:"string"},refreshOption:{type:"boolean"}},events:{refresh:{}}},init:function(){this.addDependent(this._oTimestamp=new t());},getAltText:function(){var a=T.prototype.getAltText.apply(this,arguments);if(this.getTimestamp()){a+=(a===""?"":"\n")+this.getTimestamp();}return a;},renderer:{_renderFooter:function(r,c){R._renderFooter.apply(this,arguments);r.renderControl(c._oTimestamp);}}});},true);
