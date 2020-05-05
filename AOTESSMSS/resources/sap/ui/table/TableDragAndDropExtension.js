/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TableExtension","sap/ui/table/TableUtils"],function(T,a){"use strict";var S="sap.ui.table";var E={getSessionData:function(d,k){return d.getComplexData(S+(k==null?"":"-"+k));},setSessionData:function(d,s,k){d.setComplexData(S+(k==null?"":"-"+k),s);},getInstanceSessionData:function(d,t){return this.getSessionData(d,t.getId());},setInstanceSessionData:function(d,t,s){this.setSessionData(d,s,t.getId());}};var b={ondragstart:function(e){var d=e.dragSession;if(d==null||d.draggedControl==null){return;}var D=d.draggedControl;var s={};if(a.isInstanceOf(D,"sap/ui/table/Row")){var o=this.getContextByIndex(D.getIndex());var f=D.getDomRef();if(o==null||f.classList.contains("sapUiTableGroupHeader")||f.classList.contains("sapUiAnalyticalTableSum")){e.preventDefault();return;}else{s.draggedRowContext=o;}}if(a.isInstanceOf(D,"sap/ui/table/Column")){e.preventDefault();return;}E.setInstanceSessionData(d,this,s);},ondragenter:function(e){var d=e.dragSession;if(d==null||d.dropControl==null){return;}var s=E.getInstanceSessionData(d,this);var D=d.draggedControl;var o=d.dropControl;if(s==null){s={};}if(a.isInstanceOf(o,"sap/ui/table/Row")){var f=s.draggedRowContext;var g=this.getContextByIndex(o.getIndex());var h=o.getDomRef();var A=this._getTotalRowCount()===0;if((g==null&&!A)||(f!=null&&f===g)||h.classList.contains("sapUiTableGroupHeader")||h.classList.contains("sapUiAnalyticalTableSum")){e.preventDefault();}else{var v=this._getScrollExtension().isVerticalScrollbarVisible();var t=this.getDomRef("sapUiTableCnt").getBoundingClientRect();s.indicatorSize={width:t.width-(v?16:0),left:t.left+(this._bRtlMode&&v?16:0)};}}else if(a.isInstanceOf(o,"sap/ui/table/Column")){e.preventDefault();}else if(D===o){e.preventDefault();}else{delete s.indicatorSize;}if(s.verticalScrollEdge==null){var p=window.pageYOffset;var V=this.getDomRef("table").getBoundingClientRect();s.verticalScrollEdge={bottom:V.bottom+p,top:V.top+p};}var P=window.pageXOffset;var H=this.getDomRef("sapUiTableCtrlScr").getBoundingClientRect();s.horizontalScrollEdge={left:H.left+P,right:H.right+P};E.setInstanceSessionData(d,this,s);},ondragover:function(e){var d=e.dragSession;if(d==null){return;}var s=E.getInstanceSessionData(d,this);if(s==null){return;}var i=32;var t=50;var D=d.dropControl;var I=jQuery(d.getIndicator());var o=this._getScrollExtension();var v=o.getVerticalScrollbar();var h=o.getHorizontalScrollbar();var V=s.verticalScrollEdge;var H=s.horizontalScrollEdge;var f=s.indicatorSize;if(V!=null&&v!=null&&D!==this){var p=e.pageY;if(p>=V.top-t&&p<=V.top+t){v.scrollTop-=i;}else if(p<=V.bottom+t&&p>=V.bottom-t){v.scrollTop+=i;}}if(H!=null&&h!=null&&D!==this){var P=e.pageX;if(P>=H.left-t&&P<=H.left+t){h.scrollLeft-=i;}else if(P<=H.right+t&&P>=H.right-t){h.scrollLeft+=i;}}if(I!=null&&f!=null&&D!=null){I.css(f);}},onlongdragover:function(e){var d=e.dragSession;if(d==null){return;}var C=a.getCell(this,e.target);var r=a.getCellInfo(C).rowIndex;var R=r==null?null:this.getRows()[r];var D=d.dropControl;if(R!=null&&(D==R||D==null)){a.Grouping.toggleGroupHeader(this,R.getIndex(),true);}}};var c=T.extend("sap.ui.table.TableDragAndDropExtension",{_init:function(t,s,m){this._oDelegate=b;t.addEventDelegate(this._oDelegate,t);return"DragAndDropExtension";},_debug:function(){this._ExtensionDelegate=b;},destroy:function(){var t=this.getTable();if(t){t.removeEventDelegate(this._oDelegate);}this._oDelegate=null;T.prototype.destroy.apply(this,arguments);}});return c;});
