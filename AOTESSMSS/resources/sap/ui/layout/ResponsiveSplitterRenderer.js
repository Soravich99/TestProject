/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/IconPool'],function(I){"use strict";var R={};I.insertFontFaceStyle();R.render=function(r,c){r.write("<div ");r.addClass("sapUiResponsiveSplitter");r.writeControlData(c);r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.writeClasses();r.write(">");var p=c.getAggregation("_pages");if(p){c.getAggregation("_pages").forEach(r.renderControl);this.renderPaginator(r,c);}r.write("</div>");};R.renderPaginator=function(r,c){var b=c._getMaxPageCount(),p=c.getAggregation("_pages")||[],B=sap.ui.getCore().getLibraryResourceBundle('sap.ui.layout');r.write("<div ");r.writeAttribute("role","navigation");r.addClass("sapUiResponsiveSplitterPaginator");r.writeClasses();r.write(">");r.write("<div ");r.addClass("sapUiResponsiveSplitterPaginatorNavButton");r.addClass("sapUiResponsiveSplitterHiddenPaginatorButton");r.addClass("sapUiResponsiveSplitterPaginatorButtonBack");r.writeClasses();r.write("></div>");r.write("<div ");r.addClass("sapUiResponsiveSplitterPaginatorButtons");r.writeClasses();r.writeAttribute("role","radiogroup");r.writeAttributeEscaped("aria-label",B.getText("RESPONSIVE_SPLITTER_ARIA_PAGINATOR_LABEL"));if(p.length>0){r.writeAttribute("aria-controls",p[0].getParent().getId());}r.write(">");for(var i=0;i<b;i++){r.write("<div tabindex='0' ");r.write("page-index='"+i+"'");if(i===0){r.addClass("sapUiResponsiveSplitterPaginatorSelectedButton");}r.addClass("sapUiResponsiveSplitterHiddenElement");r.addClass("sapUiResponsiveSplitterPaginatorButton");r.writeClasses();r.writeAttribute("role","radio");r.writeAttribute("aria-checked",false);r.write("></div>");}r.write("</div>");r.write("<div ");r.addClass("sapUiResponsiveSplitterPaginatorNavButton");r.addClass("sapUiResponsiveSplitterHiddenPaginatorButton");r.addClass("sapUiResponsiveSplitterPaginatorButtonForward");r.writeClasses();r.write("></div>");r.write("</div>");};return R;},true);
