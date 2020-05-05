// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/base/EventProvider"],function(E){"use strict";var P=E.extend("sap.ushell.components.flp.launchpad.PagingManager",{metadata:{publicMethods:["setElementClass","setContainerSize","getNumberOfAllocatedElements","moveToNextPage","getTileHeight"]},constructor:function(i,s){sap.ushell.components.flp.launchpad.getPagingManager=jQuery.sap.getter(this.getInterface());this.currentPageIndex=0;this.containerHeight=s.containerHeight||0;this.containerWidth=s.containerWidth||0;this.supportedElements=s.supportedElements||"";this.tileHeight=0;},getTileHeight:function(){return this.tileHeight;},setElementClass:function(c){this.supportedElements=c;},setContainerSize:function(n,a){var t=this.getNumberOfAllocatedElements();this.containerHeight=n;this.containerWidth=a;this._changePageSize(t);},getNumberOfAllocatedElements:function(){return this._calcElementsPerPage()*this.currentPageIndex;},_changePageSize:function(t){this.currentPageIndex=Math.ceil(t/this._calcElementsPerPage());},moveToNextPage:function(){this.currentPageIndex++;},resetCurrentPageIndex:function(){this.currentPageIndex=0;},getSizeofSupportedElementInUnits:function(t){return this.supportedElements[t].sizeInBaseUnits;},_calcElementMatrix:function(c){var e=jQuery("<div>").addClass(c);jQuery('body').append(e);var a=e.height();var b=e.width();if(a<20||b<40){b=40;a=20;}this.tileHeight=a;e.remove();return{width:b,height:a};},_calcElementsPerPage:function(){var s,b,a,m,a,c,e,d;for(s in this.supportedElements){a=this.supportedElements[s];m=this._calcElementMatrix(a.className);a.matrix=m;if(b){b.width=b.width>m.width?m.width:b.width;b.height=b.height>m.height?m.height:b.height;}else{b={width:m.width,height:m.height};}}for(s in this.supportedElements){a=this.supportedElements[s];c=a.matrix;a.sizeInBaseUnits=Math.round(c.width/b.width*c.height/b.height);}e=Math.round(this.containerWidth/b.width);d=Math.round(this.containerHeight/b.height);if(!d||!e||e===Infinity||d===Infinity||e===0||d===0){return 10;}return d*e;}});return P;});
