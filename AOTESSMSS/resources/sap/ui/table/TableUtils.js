/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","sap/ui/core/ResizeHandler","sap/ui/core/library","sap/ui/model/ChangeReason","./TableGrouping","./TableColumnUtils","./TableMenuUtils","./library"],function(q,C,R,c,a,T,b,d,l){"use strict";var S=l.SelectionBehavior;var e=l.SelectionMode;var M=c.MessageType;var f=1;var g={DATACELL:1,COLUMNHEADER:2,ROWHEADER:4,ROWACTION:8,COLUMNROWHEADER:16};g.ANYCONTENTCELL=g.ROWHEADER|g.DATACELL|g.ROWACTION;g.ANYCOLUMNHEADER=g.COLUMNHEADER|g.COLUMNROWHEADER;g.ANYROWHEADER=g.ROWHEADER|g.COLUMNROWHEADER;g.ANY=g.ANYCONTENTCELL|g.ANYCOLUMNHEADER;var h={Grouping:T,Column:b,Menu:d,CELLTYPE:g,DEFAULT_ROW_HEIGHT:{sapUiSizeCondensed:24+f,sapUiSizeCompact:32+f,sapUiSizeCozy:48+f,undefined:32+f},RowsUpdateReason:(function(){var u={};for(var p in a){u[p]=a[p];}u.Render="Render";u.VerticalScroll="VerticalScroll";u.FirstVisibleRowChange="FirstVisibleRowChange";u.Unbind="Unbind";u.Animation="Animation";u.Resize="Resize";u.Unknown="Unknown";return u;})(),hasRowHeader:function(t){return(t.getSelectionMode()!==e.None&&t.getSelectionBehavior()!==S.RowOnly)||T.isGroupMode(t);},hasSelectAll:function(t){var s=t!=null?t.getSelectionMode():e.None;return(s===e.Multi||s===e.MultiToggle)&&t.getEnableSelectAll();},hasRowHighlights:function(t){if(t==null){return false;}var r=t.getRowSettingsTemplate();if(r==null){return false;}var H=r.getHighlight();return r.isBound("highlight")||(H!=null&&H!==M.None);},getRowActionCount:function(t){var o=t.getRowActionTemplate();return o?o._getCount():0;},hasRowActions:function(t){var r=t.getRowActionTemplate();return r!=null&&(r.isBound("visible")||r.getVisible())&&h.getRowActionCount(t)>0;},isRowSelectionAllowed:function(t){return t.getSelectionMode()!==e.None&&(t.getSelectionBehavior()===S.Row||t.getSelectionBehavior()===S.RowOnly);},isRowSelectorSelectionAllowed:function(t){return t.getSelectionMode()!==e.None&&h.hasRowHeader(t);},areAllRowsSelected:function(t){if(t==null){return false;}var s=t._getSelectableRowCount();return s>0&&s===t._getSelectedIndicesCount();},isNoDataVisible:function(t){if(!t.getShowNoData()){return false;}return!h.hasData(t);},hasData:function(t){var B=t.getBinding("rows"),i=t._getTotalRowCount(),H=B?!!i:false;if(B&&B.providesGrandTotal){var j=B.providesGrandTotal()&&B.hasTotaledMeasures();H=(j&&i<2)||(!j&&i===0)?false:true;}return H;},isBusyIndicatorVisible:function(t){if(t==null||t.getDomRef()==null){return false;}return t.getDomRef().querySelector(".sapUiTableCnt > .sapUiLocalBusyIndicator")!=null;},hasPendingRequests:function(t){if(t==null){return false;}if(h.canUsePendingRequestsCounter(t)){return t._iPendingRequests>0;}else{return t._bPendingRequest;}},canUsePendingRequestsCounter:function(t){var B=t!=null?t.getBinding("rows"):null;if(h.isInstanceOf(B,"sap/ui/model/analytics/AnalyticalBinding")){return B.bUseBatchRequests;}else if(h.isInstanceOf(B,"sap/ui/model/TreeBinding")){return false;}return true;},isInstanceOf:function(o,t){if(!o||!t){return false;}var i=sap.ui.require(t);return!!(i&&(o instanceof i));},toggleRowSelection:function(t,r,s,D){if(t==null||t.getBinding("rows")==null||t.getSelectionMode()===e.None||r==null){return false;}function i(A){if(!t._isRowSelectable(A)){return false;}t._iSourceRowIndex=A;var j=true;if(D){j=D(A,s);}else{if(t.isIndexSelected(A)){if(s!=null&&s){return false;}t.removeSelectionInterval(A,A);}else{if(s!=null&&!s){return false;}t.addSelectionInterval(A,A);}}delete t._iSourceRowIndex;return j;}if(typeof r==="number"){if(r<0||r>=t._getTotalRowCount()){return false;}return i(r);}else{var $=q(r);var o=h.getCellInfo($[0]);var I=h.isRowSelectionAllowed(t);if(!h.Grouping.isInGroupingRow($[0])&&((o.isOfType(h.CELLTYPE.DATACELL|h.CELLTYPE.ROWACTION)&&I)||(o.isOfType(h.CELLTYPE.ROWHEADER)&&h.isRowSelectorSelectionAllowed(t)))){var A;if(o.isOfType(h.CELLTYPE.DATACELL)){A=t.getRows()[parseInt($.closest("tr",t.getDomRef()).attr("data-sap-ui-rowindex"),10)].getIndex();}else{A=t.getRows()[parseInt($.attr("data-sap-ui-rowindex"),10)].getIndex();}return i(A);}return false;}},getNoDataText:function(t){var n=t.getNoData();if(n instanceof C){return null;}else if(typeof n==="string"||t.getNoData()instanceof String){return n;}else{return t._oResBundle.getText("TBL_NO_DATA");}},getVisibleColumnCount:function(t){return t._getVisibleColumns().length;},getHeaderRowCount:function(t){if(t._iHeaderRowCount===undefined){if(!t.getColumnHeaderVisible()){t._iHeaderRowCount=0;}else{var H=1;var j=t.getColumns();for(var i=0;i<j.length;i++){if(j[i].shouldRender()){H=Math.max(H,j[i].getMultiLabels().length);}}t._iHeaderRowCount=H;}}return t._iHeaderRowCount;},isVariableRowHeightEnabled:function(t){return t._bVariableRowHeightEnabled&&t.getFixedRowCount()<=0&&t.getFixedBottomRowCount()<=0;},getTotalRowCount:function(t,i){var r=t._getTotalRowCount();if(i){r=Math.max(r,t.getVisibleRowCount());}return r;},getNonEmptyVisibleRowCount:function(t){return Math.min(t.getVisibleRowCount(),t._getTotalRowCount());},getFocusedItemInfo:function(t){var i=t._getItemNavigation();if(!i){return null;}return{cell:i.getFocusedIndex(),columnCount:i.iColumns,cellInRow:i.getFocusedIndex()%i.iColumns,row:Math.floor(i.getFocusedIndex()/i.iColumns),cellCount:i.getItemDomRefs().length,domRef:i.getFocusedDomRef()};},getRowIndexOfFocusedCell:function(t){var i=h.getFocusedItemInfo(t);return i.row-h.getHeaderRowCount(t);},isFixedColumn:function(t,i){return i<t.getFixedColumnCount();},hasFixedColumns:function(t){return t.getFixedColumnCount()>0;},focusItem:function(t,i,E){var I=t._getItemNavigation();if(I){I.focusItem(i,E);}},getCellInfo:function(o){var i;var $=q(o);var s;var j;var r;var k;var m;i={type:0,cell:null,rowIndex:null,columnIndex:null,columnSpan:null};if($.hasClass("sapUiTableTd")){s=$.data("sap-ui-colid");j=sap.ui.getCore().byId(s);i.type=h.CELLTYPE.DATACELL;i.rowIndex=parseInt($.parent().data("sap-ui-rowindex"),10);i.columnIndex=j.getIndex();i.columnSpan=1;}else if($.hasClass("sapUiTableCol")){r=/_([\d]+)/;s=$.attr("id");k=r.exec(s);m=k==null||k[1]==null?0:parseInt(k[1],10);i.type=h.CELLTYPE.COLUMNHEADER;i.rowIndex=m;i.columnIndex=parseInt($.data("sap-ui-colindex"),10);i.columnSpan=parseInt($.attr("colspan")||1,10);}else if($.hasClass("sapUiTableRowHdr")){i.type=h.CELLTYPE.ROWHEADER;i.rowIndex=parseInt($.data("sap-ui-rowindex"),10);i.columnIndex=-1;i.columnSpan=1;}else if($.hasClass("sapUiTableRowAction")){i.type=h.CELLTYPE.ROWACTION;i.rowIndex=parseInt($.data("sap-ui-rowindex"),10);i.columnIndex=-2;i.columnSpan=1;}else if($.hasClass("sapUiTableColRowHdr")){i.type=h.CELLTYPE.COLUMNROWHEADER;i.columnIndex=-1;i.columnSpan=1;}if(i.type!==0){i.cell=$;}i.isOfType=function(n){if(n==null){return false;}return(this.type&n)>0;};return i;},getRowColCell:function(t,r,j,I){var o=r>=0&&r<t.getRows().length?t.getRows()[r]:null;var k=I?t.getColumns():t._getVisibleColumns();var m=j>=0&&j<k.length?k[j]:null;var n=null;if(o&&m){if(I){if(m.shouldRender()){var v=t._getVisibleColumns();for(var i=0;i<v.length;i++){if(v[i]===m){n=o.getCells()[i];break;}}}}else{n=o.getCells()[j];}if(n&&n.data("sap-ui-colid")!=m.getId()){var p=o.getCells();for(var i=0;i<p.length;i++){if(p[i].data("sap-ui-colid")===m.getId()){n=p[i];break;}}}}return{row:o,column:m,cell:n};},getCell:function(t,E){if(t==null||E==null){return null;}var $=q(E);var j;var o=t.getDomRef();var k=[".sapUiTableTd",".sapUiTableCol",".sapUiTableRowHdr",".sapUiTableRowAction",".sapUiTableColRowHdr"];var s;for(var i=0;i<k.length;i++){s=k[i];j=$.closest(s,o);if(j.length>0){return j;}}return null;},getParentCell:function(t,E){var $=q(E);var i=h.getCell(t,E);if(i===null||i[0]===$[0]){return null;}else{return i;}},registerResizeHandler:function(t,i,H,r){var D;if(typeof i=="string"){D=t.getDomRef(i);}else{q.sap.log.error("sIdSuffix must be a string",t);return;}if(typeof H!=="function"){q.sap.log.error("fnHandler must be a function",t);return;}h.deregisterResizeHandler(t,i);if(!t._mResizeHandlerIds){t._mResizeHandlerIds={};}if(r&&D){D=D.parentNode;}if(D){t._mResizeHandlerIds[i]=R.register(D,H);}return t._mResizeHandlerIds[i];},deregisterResizeHandler:function(t,I){var j;if(!t._mResizeHandlerIds){return;}if(typeof I=="string"){j=[I];}else if(I===undefined){j=[];for(var k in t._mResizeHandlerIds){if(typeof k=="string"&&t._mResizeHandlerIds.hasOwnProperty(k)){j.push(k);}}}else if(q.isArray(I)){j=I;}for(var i=0;i<j.length;i++){var s=j[i];if(t._mResizeHandlerIds[s]){R.deregister(t._mResizeHandlerIds[s]);t._mResizeHandlerIds[s]=undefined;}}},isFirstScrollableRow:function(t,r){if(isNaN(r)){var $=q(r);r=parseInt($.add($.parent()).filter("[data-sap-ui-rowindex]").data("sap-ui-rowindex"),10);}var F=t.getFixedRowCount()||0;return r==F;},isLastScrollableRow:function(t,r){if(isNaN(r)){var $=q(r);r=parseInt($.add($.parent()).filter("[data-sap-ui-rowindex]").data("sap-ui-rowindex"),10);}var F=t.getFixedBottomRowCount()||0;return r==t.getVisibleRowCount()-F-1;},getContentDensity:function(o){var s;var j=["sapUiSizeCompact","sapUiSizeCondensed","sapUiSizeCozy"];var G=function(F,O){if(!O[F]){return;}for(var i=0;i<j.length;i++){if(O[F](j[i])){return j[i];}}};var D=o.$();if(D.length>0){s=G("hasClass",D);}else{s=G("hasStyleClass",o);}if(s){return s;}var p=null;var P=o.getParent();if(P){do{s=G("hasStyleClass",P);if(s){return s;}if(P.getDomRef){p=P.getDomRef();}else if(P.getRootNode){p=P.getRootNode();}if(!p&&P.getParent){P=P.getParent();}else{P=null;}}while(P&&!p);}D=q(p||document.body);s=G("hasClass",D.closest("."+j.join(",.")));return s;},sanitizeSelectionMode:function(t,s){if(s===e.Multi){s=e.MultiToggle;q.sap.log.warning("The selection mode 'Multi' is deprecated and must not be used anymore. Your setting was defaulted to selection mode 'MultiToggle'");}return s;},isVariableWidth:function(w){return!w||w=="auto"||w.toString().match(/%$/);},getFirstFixedButtomRowIndex:function(t){var F=t.getFixedBottomRowCount();var B=t.getBinding("rows");var i=-1;if(B&&F>0){var v=t.getVisibleRowCount();var j=t.getFirstVisibleRow();var k=t._getTotalRowCount();if(k>=v){i=v-F;}else{var I=k-F-j;if(I>=0&&(j+I)<k){i=I;}}}return i;}};T.TableUtils=h;b.TableUtils=h;d.TableUtils=h;return h;},true);
