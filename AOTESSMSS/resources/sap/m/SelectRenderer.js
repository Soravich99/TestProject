/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./Select','sap/ui/core/IconPool','sap/ui/core/InvisibleText','sap/m/library','sap/ui/Device','sap/ui/core/library'],function(R,S,I,a,l,D,c){"use strict";var T=c.TextDirection;var V=c.ValueState;var b=l.SelectType;var d={};d.CSS_CLASS="sapMSlt";d.render=function(r,s){var t=s.getTooltip_AsString(),e=s.getType(),A=s.getAutoAdjustWidth(),E=s.getEnabled(),C=s.getWidth(),w=C.indexOf("%")>-1,f=A||C==="auto"||w,g=d.CSS_CLASS;r.write("<div");this.addClass(r,s);r.addClass(g);r.addClass(g+s.getType());if(!E){r.addClass(g+"Disabled");}if(f&&(e===b.Default)){r.addClass(g+"MinWidth");}if(A){r.addClass(g+"AutoAdjustedWidth");}else{r.addStyle("width",C);}if(s.getIcon()){r.addClass(g+"WithIcon");}if(E&&D.system.desktop){r.addClass(g+"Hoverable");}r.addClass(g+"WithArrow");if(s.getValueState()!==V.None){this.addValueStateClasses(r,s);}r.addStyle("max-width",s.getMaxWidth());r.writeControlData(s);r.writeStyles();r.writeClasses();this.writeAccessibilityState(r,s);if(t){r.writeAttributeEscaped("title",t);}else if(e===b.IconOnly){var i=I.getIconInfo(s.getIcon());if(i){r.writeAttributeEscaped("title",i.text);}}if(E){r.writeAttribute("tabindex","0");}r.write(">");this.renderLabel(r,s);switch(e){case b.Default:this.renderArrow(r,s);break;case b.IconOnly:this.renderIcon(r,s);break;}var L=s.getList();if(s._isShadowListRequired()&&L){this.renderShadowList(r,L);}if(s.getName()){this.renderInput(r,s);}r.write("</div>");};d.renderLabel=function(r,s){var o=s.getSelectedItem(),t=s.getTextDirection(),e=R.getTextAlign(s.getTextAlign(),t),C=d.CSS_CLASS;r.write("<label");r.writeAttribute("id",s.getId()+"-label");r.writeAttribute("for",s.getId());r.writeAttribute("aria-live","polite");r.addClass(C+"Label");if(s.getValueState()!==V.None){r.addClass(C+"LabelState");r.addClass(C+"Label"+s.getValueState());}if(s.getType()===b.IconOnly){r.addClass("sapUiPseudoInvisibleText");}if(t!==T.Inherit){r.writeAttribute("dir",t.toLowerCase());}if(e){r.addStyle("text-align",e);}r.writeStyles();r.writeClasses();r.write(">");r.writeEscaped((o&&o.getParent())?o.getText():"");r.write("</label>");};d.renderArrow=function(r,s){var C=d.CSS_CLASS;r.write("<span");r.addClass(C+"Arrow");if(s.getValueState()!==V.None){r.addClass(C+"ArrowState");}r.writeAttribute("id",s.getId()+"-arrow");r.writeClasses();r.write("></span>");};d.renderIcon=function(r,s){r.writeIcon(s.getIcon(),d.CSS_CLASS+"Icon",{id:s.getId()+"-icon",title:null});};d.renderInput=function(r,s){r.write("<input hidden");r.writeAttribute("id",s.getId()+"-input");r.addClass(d.CSS_CLASS+"Input");r.writeAttribute("aria-hidden","true");r.writeAttribute("tabindex","-1");if(!s.getEnabled()){r.write("disabled");}r.writeClasses();r.writeAttributeEscaped("name",s.getName());r.writeAttributeEscaped("value",s.getSelectedKey());r.write("/>");};d.renderShadowList=function(r,L){var o=L.getRenderer();o.writeOpenListTag(r,L,{elementData:false});this.renderShadowItems(r,L);o.writeCloseListTag(r,L);};d.renderShadowItems=function(r,L){var o=L.getRenderer(),s=L.getItems().length,e=L.getSelectedItem();for(var i=0,f=L.getItems();i<f.length;i++){o.renderItem(r,L,f[i],{selected:e===f[i],setsize:s,posinset:i+1,elementData:false});}};d.addClass=function(r,s){};d.addValueStateClasses=function(r,s){r.addClass(d.CSS_CLASS+"State");r.addClass(d.CSS_CLASS+s.getValueState());};d.getAriaRole=function(s){switch(s.getType()){case b.Default:return"combobox";case b.IconOnly:return"button";}};d._getValueStateString=function(s){var V=c.ValueState;switch(s.getValueState()){case V.Success:return S._oStaticSuccessText.getId();case V.Warning:return S._oStaticWarningText.getId();case V.Error:return S._oStaticErrorText.getId();}return"";};d.writeAccessibilityState=function(r,s){var v=this._getValueStateString(s);if(v){v=" "+v;}r.writeAccessibilityState(s,{role:this.getAriaRole(s),expanded:s.isOpen(),invalid:(s.getValueState()===V.Error)?true:undefined,labelledby:{value:s.getId()+"-label"+v,append:true},haspopup:(s.getType()===b.IconOnly)?true:undefined});};return d;},true);
