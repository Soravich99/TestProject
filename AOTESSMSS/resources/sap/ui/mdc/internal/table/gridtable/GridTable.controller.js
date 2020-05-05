/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(["sap/ui/mdc/library","../Table.controller"],function(L,T){"use strict";var G=T.extend("sap.ui.mdc.internal.table.gridtable.GridTable.controller",{constructor:function(t){T.apply(this,arguments);this.oTable=t;}});G.prototype.setSelectionMode=function(){var t=this.getToolbarActions(this.oInnerTable.getExtension()[0].getContent());var m;var s='None';for(var i=0;i<t.length;i++){m=t[i].getMultiplicityTo();if(m>1||!m){s='MultiToggle';break;}else if(m===1){s='Single';}}this.oInnerTable.setSelectionMode(s);};G.prototype.enableDisableActions=function(){var t=this.getToolbarActions(this.oInnerTable.getExtension()[0].getContent());var s=this.oInnerTable.getSelectedIndices().length;this.enableDisableActionsUtil(s,t);};G.prototype.bindTableCount=function(){var t=this.oInnerTable.getExtension()[0].getContent()[0];this.bindTableCountUtil(t);};G.prototype.handleDataReceived=function(e){var E=e.getParameter("error");if(E){this.oInnerTable.setNoData(L.getText("table.TECHINCAL_ERROR"));this.oTable.fireShowError(e);}else{this.oInnerTable.setNoData(L.getText("table.NO_DATA_TEXT"));}if(this.oInnerTable.getVisibleRowCountMode()!="Auto"){this.oInnerTable.setVisibleRowCountMode("Auto");}this.oInnerTable.setBusy(false);};G.prototype.getListBinding=function(){return this.oInnerTable.getBinding("rows");};G.prototype.getListBindingInfo=function(){return this.oInnerTable.getBindingInfo("rows");};return G;});
