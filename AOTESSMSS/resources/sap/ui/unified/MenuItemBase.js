/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element','./library'],function(E,l){"use strict";var M=E.extend("sap.ui.unified.MenuItemBase",{metadata:{library:"sap.ui.unified",properties:{enabled:{type:"boolean",group:"Behavior",defaultValue:true},visible:{type:"boolean",group:"Behavior",defaultValue:true},startsSection:{type:"boolean",group:"Behavior",defaultValue:false}},defaultAggregation:"submenu",aggregations:{submenu:{type:"sap.ui.unified.Menu",multiple:false}},events:{select:{parameters:{item:{type:"sap.ui.unified.MenuItemBase"}}}}}});M.prototype.init=function(){};M.prototype.render=function(r,i,m){var a=r;a.write("<li");a.writeElementData(i);a.write("><div style=\"white-space:nowrap;display:inline-block;padding:1px;color:black;\" id=\""+this.getId()+"-txt\">");a.write(i.getId());if(this.getSubmenu()){a.write("&nbsp;&nbsp;->");}a.write("</div></li>");};M.prototype.hover=function(h,m){this.$("txt").attr("style",h?"white-space:nowrap;display:inline-block;padding:1px;color:red;":"white-space:nowrap;display:inline-block;padding:1px;color:black;");};M.prototype.onSubmenuToggle=function(o){this.$().toggleClass("sapUiMnuItmSubMnuOpen",o);};M.prototype.onAfterRendering=function(){};M.prototype.onmouseover=function(e){var p=this.getParent();if(p&&p instanceof sap.ui.unified.Menu&&this.getTooltip()instanceof sap.ui.core.TooltipBase){p.onmouseover(e);}};return M;});
