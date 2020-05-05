sap.ui.define(["jquery.sap.global","./library","sap/ui/core/Item",'sap/ui/core/Icon','./NavigationList','sap/ui/core/Renderer','sap/ui/core/IconPool'],function(q,l,I,a,N,R,b){"use strict";var c=I.extend("sap.tnt.NavigationListItem",{metadata:{library:"sap.tnt",properties:{icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:''},expanded:{type:"boolean",group:"Misc",defaultValue:true},hasExpander:{type:"boolean",group:"Misc",defaultValue:true},visible:{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"items",aggregations:{items:{type:"sap.tnt.NavigationListItem",multiple:true,singularName:"item"},_expandIconControl:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"}},events:{select:{parameters:{item:{type:"sap.ui.core.Item"}}}}}});c.expandIcon='sap-icon://navigation-right-arrow';c.collapseIcon='sap-icon://navigation-down-arrow';c.prototype._getExpandIconControl=function(){var e=this.getAggregation('_expandIconControl');if(!e){var d=this.getExpanded();e=new a({src:d?c.collapseIcon:c.expandIcon,visible:this.getItems().length>0&&this.getHasExpander(),useIconTooltip:false,tooltip:this._getExpandIconTooltip(!d)}).addStyleClass('sapTntNavLIExpandIcon');this.setAggregation("_expandIconControl",e,true);}return e;};c.prototype._getExpandIconTooltip=function(e){if(!this.getEnabled()){return'';}var t=e?'Icon.expand':'Icon.collapse';return this.getNavigationList()._resourceBundle.getText(t);};c.prototype.getLevel=function(){var d=0;var p=this.getParent();if(p.getMetadata().getName()=='sap.tnt.NavigationListItem'){return p.getLevel()+1;}return d;};c.prototype.getNavigationList=function(){var p=this.getParent();while(p&&p.getMetadata().getName()!='sap.tnt.NavigationList'){p=p.getParent();}return p;};c.prototype.createPopupList=function(){var n=[],d=this.getNavigationList(),s=d.getSelectedItem(),p,e,f,g=this.getItems();for(var i=0;i<g.length;i++){e=g[i];if(e.getVisible()){f=new c({key:e.getId(),text:e.getText(),textDirection:e.getTextDirection(),enabled:e.getEnabled()});n.push(f);if(s==e){p=f;}}}var h=new c({expanded:true,hasExpander:false,key:this.getId(),text:this.getText(),enabled:this.getEnabled(),textDirection:this.getTextDirection(),items:n});var j=new N({itemSelect:this.onPopupItemSelect.bind(this),items:[h]}).addStyleClass('sapTntNavLIPopup');if(s==this){p=h;j.isGroupSelected=true;}j.setSelectedItem(p);return j;};c.prototype.onPopupItemSelect=function(e){var i=e.getParameter('item');i=sap.ui.getCore().byId(i.getKey());i._selectItem(e);};c.prototype._selectItem=function(e){var p={item:this};this.fireSelect(p);var n=this.getNavigationList();n._selectItem(p);};c.prototype.onkeydown=function(e){if(e.isMarked('subItem')){return;}e.setMarked('subItem');if(this.getLevel()>0){return;}var i=sap.ui.getCore().getConfiguration().getRTL();if((e.shiftKey&&e.which==189)||e.which==q.sap.KeyCodes.NUMPAD_MINUS||(e.which==q.sap.KeyCodes.ARROW_RIGHT&&i)||(e.which==q.sap.KeyCodes.ARROW_LEFT&&!i)){if(this.collapse()){e.preventDefault();e.target=null;}}else if(e.which==q.sap.KeyCodes.NUMPAD_PLUS||(e.shiftKey&&e.which==q.sap.KeyCodes.PLUS)||e.which==q.sap.KeyCodes.ARROW_LEFT&&i||e.which==q.sap.KeyCodes.ARROW_RIGHT&&!i){if(this.expand()){e.preventDefault();e.target=null;}}};c.prototype.expand=function(d){if(this.getExpanded()||!this.getHasExpander()||this.getItems().length==0||this.getLevel()>0){return;}this.setProperty('expanded',true,true);this.$().find('.sapTntNavLIGroup').attr('aria-expanded',true);var e=this._getExpandIconControl();e.setSrc(c.collapseIcon);e.setTooltip(this._getExpandIconTooltip(false));var $=this.$().find('.sapTntNavLIGroupItems');$.stop(true,true).slideDown(d||'fast',function(){$.toggleClass('sapTntNavLIHiddenGroupItems');});this.getNavigationList()._updateNavItems();return true;};c.prototype.collapse=function(d){if(!this.getExpanded()||!this.getHasExpander()||this.getItems().length==0||this.getLevel()>0){return;}this.setProperty('expanded',false,true);this.$().find('.sapTntNavLIGroup').attr('aria-expanded',false);var e=this._getExpandIconControl();e.setSrc(c.expandIcon);e.setTooltip(this._getExpandIconTooltip(true));var $=this.$().find('.sapTntNavLIGroupItems');$.stop(true,true).slideUp(d||'fast',function(){$.toggleClass('sapTntNavLIHiddenGroupItems');});this.getNavigationList()._updateNavItems();return true;};c.prototype.ontap=function(e){if(e.isMarked('subItem')||!this.getEnabled()){return;}e.setMarked('subItem');e.preventDefault();var n=this.getNavigationList();var s=sap.ui.getCore().byId(e.target.id);var d=this.getLevel();if(d==1){var p=this.getParent();if(this.getEnabled()&&p.getEnabled()){this._selectItem(e);}return;}if(n.getExpanded()||this.getItems().length==0){if(!s||s.getMetadata().getName()!='sap.ui.core.Icon'||!s.$().hasClass('sapTntNavLIExpandIcon')){this._selectItem(e);return;}if(this.getExpanded()){this.collapse();}else{this.expand();}}else{var f=this.createPopupList();n._openPopover(this,f);}};c.prototype.onsapenter=c.prototype.ontap;c.prototype.onsapspace=c.prototype.ontap;c.prototype.render=function(r,d,i,e){if(!this.getVisible()){return;}if(this.getLevel()===0){this.renderFirstLevelNavItem(r,d,i,e);}else{this.renderSecondLevelNavItem(r,d,i,e);}};c.prototype.renderGroupItem=function(r,d,i,e){var f=d.getExpanded(),g=this.getExpanded(),t=this.getText(),h,j={level:'1',posinset:i+1,setsize:this._getVisibleItems(d).length};if(f&&this.getItems().length!==0){j.expanded=g;}r.write('<div');r.addClass("sapTntNavLIItem");r.addClass("sapTntNavLIGroup");if(!this.getEnabled()){r.addClass("sapTntNavLIItemDisabled");}else if(d.getExpanded()){r.write(' tabindex="-1"');}if(!f){h=this.getTooltip_AsString()||t;if(h){r.writeAttributeEscaped("title",h);}j.label=t;j.role='button';j.haspopup=true;}else{j.role='treeitem';}r.writeAccessibilityState(j);if(d.getExpanded()){h=this.getTooltip_AsString()||t;if(h){r.writeAttributeEscaped("title",h);}r.writeAttributeEscaped("aria-label",t);}r.writeClasses();r.write(">");this._renderIcon(r);if(d.getExpanded()){var k=this._getExpandIconControl();k.setVisible(this.getItems().length>0&&this.getHasExpander());k.setSrc(this.getExpanded()?c.collapseIcon:c.expandIcon);k.setTooltip(this._getExpandIconTooltip(!this.getExpanded()));this._renderText(r);r.renderControl(k);}r.write("</div>");};c.prototype.renderFirstLevelNavItem=function(r,d,e,f){var g,h=this._getVisibleItems(this),j=h.length,k=this.getExpanded(),m=d.getExpanded();r.write('<li aria-hidden="true" ');r.writeElementData(this);if(this.getEnabled()&&!m){r.write(' tabindex="-1"');}r.write(">");this.renderGroupItem(r,d,e);if(m){r.write('<ul aria-hidden="true" ');r.writeAttribute("role","group");r.addClass("sapTntNavLIGroupItems");if(!k){r.addClass("sapTntNavLIHiddenGroupItems");}r.writeClasses();r.write(">");for(var i=0;i<j;i++){g=h[i];g.render(r,d,i,j);}r.write("</ul>");}r.write("</li>");};c.prototype.renderSecondLevelNavItem=function(r,d,i,e){var g=this.getParent();r.write('<li');r.writeElementData(this);r.addClass("sapTntNavLIItem");r.addClass("sapTntNavLIGroupItem");if(!this.getEnabled()||!g.getEnabled()){r.addClass("sapTntNavLIItemDisabled");}else{r.write(' tabindex="-1"');}var t=this.getText();var f=this.getTooltip_AsString()||t;if(f){r.writeAttributeEscaped("title",f);}r.writeAccessibilityState({role:'treeitem',level:'2',posinset:i+1,setsize:e});r.writeClasses();r.write(">");this._renderText(r);r.write("</li>");};c.prototype._renderIcon=function(r){var i=this.getIcon(),d=b.getIconInfo(i);if(i){r.write('<span');r.addClass("sapUiIcon");r.addClass("sapTntNavLIGroupIcon");r.writeAttribute("aria-hidden",true);if(d&&!d.suppressMirroring){r.addClass("sapUiIconMirrorInRTL");}if(d){r.writeAttribute("data-sap-ui-icon-content",d.content);r.addStyle("font-family","'"+d.fontFamily+"'");}r.writeClasses();r.writeStyles();r.write("></span>");}else{r.write('<span class="sapUiIcon sapTntNavLIGroupIcon" aria-hidden="true"></span>');}};c.prototype._renderText=function(r){r.write('<span');r.addClass("sapMText");r.addClass("sapTntNavLIText");r.addClass("sapMTextNoWrap");r.writeClasses();var t=this.getTextDirection();if(t!==sap.ui.core.TextDirection.Inherit){r.writeAttribute("dir",t.toLowerCase());}var d=R.getTextAlign(sap.ui.core.TextAlign.Begin,t);if(d){r.addStyle("text-align",d);r.writeStyles();}r.write(">");r.writeEscaped(this.getText());r.write("</span>");};c.prototype._unselect=function(){var $=this.$(),n=this.getNavigationList();if(!n){return;}$.removeClass('sapTntNavLIItemSelected');if(n.getExpanded()){if(this.getLevel()==0){$=$.find('.sapTntNavLIGroup');}$.removeAttr('aria-selected');}else{$.removeAttr('aria-pressed');}};c.prototype._select=function(){var $=this.$(),n=this.getNavigationList();if(!n){return;}$.addClass('sapTntNavLIItemSelected');if(n.getExpanded()){if(this.getLevel()==0){$=$.find('.sapTntNavLIGroup');}$.attr('aria-selected',true);}else{$.attr('aria-pressed',true);n._closePopover();}};c.prototype._getDomRefs=function(){var d=[];if(!this.getEnabled()){return d;}var $=this.$();d.push($.find('.sapTntNavLIGroup')[0]);if(this.getExpanded()){var s=$.find('.sapTntNavLIGroupItem');for(var i=0;i<s.length;i++){d.push(s[i]);}}return d;};c.prototype._getVisibleItems=function(d){var v=[];var i=d.getItems();var e;for(var f=0;f<i.length;f++){e=i[f];if(e.getVisible()){v.push(e);}}return v;};return c;},true);
/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
