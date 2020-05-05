/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Renderer','./FormLayoutRenderer'],function(q,R,F){"use strict";var G=R.extend(F);G.renderForm=function(r,l,f){var s=l.getSingleColumn();var c=16;var S=false;var C=0;var a=f.getFormContainers();var b=a.length;var i=0;var o;var d;var t=f.getToolbar();var T=f.getTitle();if(s){c=c/2;C=c;}else{C=c/2;for(i=0;i<b;i++){d=this.getContainerData(l,a[i]);if(d&&d.getHalfGrid()){S=true;break;}}}r.write("<table role=\"presentation\"");r.writeControlData(l);r.write(" cellpadding=\"0\" cellspacing=\"0\"");r.addStyle("border-collapse","collapse");r.addStyle("table-layout","fixed");r.addStyle("width","100%");r.addClass("sapUiGrid");this.addBackgroundClass(r,l);if(t){r.addClass("sapUiFormToolbar");}r.writeStyles();r.writeClasses();r.write(">");r.write("<colgroup>");r.write("<col span="+C+">");if(S){r.write("<col class = \"sapUiGridSpace\"span=1>");}if(!s){r.write("<col span="+C+">");}r.write("</colgroup><tbody>");if(t||T){var e=c;if(S){e++;}r.write("<tr class=\"sapUiGridTitle\"><th colspan="+e+">");if(t){r.renderControl(t);}else{var g=sap.ui.core.theming.Parameters.get('sap.ui.layout.FormLayout:_sap_ui_layout_FormLayout_FormTitleSize');this.renderTitle(r,T,undefined,false,g,f.getId());}r.write("</th></tr>");}i=0;var h;var j;while(i<b){o=a[i];o._checkProperties();if(o.isVisible()){d=this.getContainerData(l,o);if(d&&d.getHalfGrid()&&!s){h=a[i+1];j=undefined;if(h&&h.isVisible()){j=this.getContainerData(l,h);}if(j&&j.getHalfGrid()){h._checkProperties();this.renderContainerHalfSize(r,l,o,h,c);i++;}else{this.renderContainerHalfSize(r,l,o,undefined,c);}}else{this.renderContainerFullSize(r,l,o,c,S);}}i++;}r.write("</tbody></table>");};G.renderContainerFullSize=function(r,l,c,C,s){var e=c.getExpandable();var t=c.getTooltip_AsString();var T=c.getToolbar();var o=c.getTitle();if(T||o){var a=C;if(s){a++;}r.write("<tr class=\"sapUiGridConteinerFirstRow sapUiGridConteinerHeaderRow\"><td colspan="+a);r.addClass("sapUiGridHeader");if(t){r.writeAttributeEscaped('title',t);}if(T){r.addClass("sapUiFormContainerToolbar");}else if(o){r.addClass("sapUiFormContainerTitle");}r.writeClasses();r.write(">");if(T){r.renderControl(T);}else{this.renderTitle(r,c.getTitle(),c._oExpandButton,e,false,c.getId());}r.write("</td></tr>");}if(!e||c.getExpanded()){var E=c.getFormElements();var b;var d=[];var f;var g=false;for(var j=0,h=E.length;j<h;j++){b=E[j];if(b.isVisible()){f=d[0]&&(d[0][0]==C);r.write("<tr");if(!g){g=true;if(!T&&!o){r.addClass("sapUiGridConteinerFirstRow");}}if(!this.checkFullSizeElement(l,b)&&d[0]!="full"&&!f){r.writeElementData(b);r.addClass("sapUiFormElement");}r.writeClasses();r.write(">");if(!f){d=this.renderElement(r,l,b,false,C,s,d);}else{d.splice(0,1);}r.write("</tr>");if(d[0]=="full"||f){j=j-1;}}}if(d.length>0){for(var i=0;i<d.length;i++){r.write("<tr></tr>");}}}};G.renderContainerHalfSize=function(r,l,c,C,a){var b=a/2;var e=c.getExpandable();var t=c.getTooltip_AsString();var T;var o=c.getTitle();var d;var f=c.getToolbar();var g;var E=[];if(!e||c.getExpanded()){E=c.getFormElements();}var L=E.length;var h=[];var j=0;var k=false;if(C){k=C.getExpandable();T=C.getTooltip_AsString();d=C.getTitle();g=C.getToolbar();if(!k||C.getExpanded()){h=C.getFormElements();}j=h.length;}if(o||d||f||g){r.write("<tr class=\"sapUiGridConteinerFirstRow sapUiGridConteinerHeaderRow\"><td colspan="+b);r.addClass("sapUiGridHeader");if(t){r.writeAttributeEscaped('title',t);}if(f){r.addClass("sapUiFormContainerToolbar");}else if(o){r.addClass("sapUiFormContainerTitle");}r.writeClasses();r.write(">");if(f){r.renderControl(f);}else if(o){this.renderTitle(r,o,c._oExpandButton,e,false,c.getId());}r.write("</td><td></td><td colspan="+b);r.addClass("sapUiGridHeader");if(T){r.writeAttributeEscaped('title',T);}if(g){r.addClass("sapUiFormContainerToolbar");}else if(d){r.addClass("sapUiFormContainerTitle");}r.writeClasses();r.write(">");if(g){r.renderControl(g);}else if(d){this.renderTitle(r,d,C._oExpandButton,k,false,C.getId());}r.write("</td></tr>");}if((!e||c.getExpanded())||(!k||C.getExpanded())){var m=[],n=[];var p=0,s=0;var u;var v;var w;var x;var y=false;while(p<L||s<j){u=E[p];v=h[s];w=m[0]&&(m[0][0]==b);x=n[0]&&(n[0][0]==b);if((u&&u.isVisible())||(v&&v.isVisible())||w||x){r.write("<tr");if(!y){y=true;if(!f&&!o&&!g&&!d){r.addClass("sapUiGridConteinerFirstRow");}}r.writeClasses();r.write(">");if(!w){if(u&&u.isVisible()&&(!e||c.getExpanded())){m=this.renderElement(r,l,u,true,b,false,m);}else{r.write("<td colspan="+b+"></td>");}if(m[0]!="full"){p++;}}else{if(m[0][2]>0){r.write("<td colspan="+m[0][2]+"></td>");}m.splice(0,1);}r.write("<td></td>");if(!x){if(v&&v.isVisible()&&(!k||C.getExpanded())){n=this.renderElement(r,l,v,true,b,false,n);}else{r.write("<td colspan="+b+"></td>");}if(n[0]!="full"){s++;}}else{if(n[0][2]>0){r.write("<td colspan="+n[0][2]+"></td>");}n.splice(0,1);}r.write("</tr>");}else{p++;s++;}}if(m.length>0||n.length>0){for(var i=0;i<m.length||i<n.length;i++){r.write("<tr></tr>");}}}};G.renderElement=function(r,l,e,h,c,s,a){var L=e.getLabelControl();var b=0;var f=e.getFields();var C=0;var A=0;var m=false;var d=1;var g=1;var x=0;if(this.checkFullSizeElement(l,e)){if(a.length>0&&a[0]!="full"){q.sap.log.error("Element \""+e.getId()+"\" - Too much fields for one row!","Renderer","GridLayout");return a;}if(s){c=c+1;}if(L&&a[0]!="full"){r.write("<td colspan="+c+" class=\"sapUiFormElementLbl sapUiGridLabelFull\">");r.renderControl(L);r.write("</td>");return["full"];}else{a.splice(0,1);g=this.getElementData(l,f[0]).getVCells();r.write("<td colspan="+c);if(g>1&&h){r.write(" rowspan="+g);for(x=0;x<g-1;x++){a.push([c,undefined,false]);}}r.write(" >");r.renderControl(f[0]);r.write("</td>");return a;}}if(a.length>0&&a[0][0]>0){c=c-a[0][0]+a[0][2];m=a[0][1];b=a[0][2];a.splice(0,1);}var j=b;var E;var k="";if(L||b>0){j=3;if(L&&b==0){E=this.getElementData(l,L);if(E){k=E.getHCells();if(k!="auto"&&k!="full"){j=parseInt(k,10);}}}r.write("<td colspan="+j+" class=\"sapUiFormElementLbl\">");if(L){r.renderControl(L);}c=c-j;r.write("</td>");}if(f&&f.length>0){var n=c;var o=f.length;var p;var i=0;var t=0;for(i=0,t=f.length;i<t;i++){p=f[i];E=this.getElementData(l,p);if(E&&E.getHCells()!="auto"){n=n-parseInt(E.getHCells(),10);o=o-1;}}var u=0;for(i=0,u=0,t=f.length;i<t;i++){p=f[i];E=this.getElementData(l,p);k="auto";d=1;g=1;if(E){k=E.getHCells();g=E.getVCells();}if(k=="auto"){if(n>0){d=Math.floor(n/o);if(d<1){d=1;}u++;A=A+d;if((u==o)&&(n>A)){d=d+(n-A);}}else{d=1;}}else{d=parseInt(k,10);}C=C+d;if(C>c){q.sap.log.error("Element \""+e.getId()+"\" - Too much fields for one row!","Renderer","GridLayout");C=C-d;break;}if(g>1){for(x=0;x<g-1;x++){if(L){b=j;}if(a.length>x){a[x][0]=a[x][0]+d;a[x][2]=b;}else{a.push([j+d,undefined,b]);}}}if(s&&C>=Math.floor(c/2)&&!m){d=d+1;m=true;if(g>1){for(x=0;x<g-1;x++){a[x][1]=true;}}}r.write("<td");if(d>1){r.write(" colspan="+d);}if(g>1){r.write(" rowspan="+g);}r.write(" >");r.renderControl(p);r.write("</td>");}}if(C<c){var v=c-C;if(!h&&s&&!m){v++;}r.write("<td colspan="+v+" ></td>");}return a;};G.checkFullSizeElement=function(l,e){var f=e.getFields();if(f.length==1&&this.getElementData(l,f[0])&&this.getElementData(l,f[0]).getHCells()=="full"){return true;}else{return false;}};G.getContainerData=function(l,c){return l.getLayoutDataForElement(c,"sap.ui.layout.form.GridContainerData");};G.getElementData=function(l,c){return l.getLayoutDataForElement(c,"sap.ui.layout.form.GridElementData");};return G;},true);
