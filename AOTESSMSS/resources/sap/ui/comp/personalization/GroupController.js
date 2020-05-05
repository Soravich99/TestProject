/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2017 SAP SE. All rights reserved
	
 */
sap.ui.define(['jquery.sap.global','./BaseController','sap/m/library','./Util','sap/m/P13nConditionPanel'],function(q,B,l,U,P){"use strict";var G=B.extend("sap.ui.comp.personalization.GroupController",{constructor:function(i,s){B.apply(this,arguments);this.setType(sap.m.P13nPanelType.group);},metadata:{events:{afterGroupModelDataChange:{}}}});G.prototype.setTable=function(t){B.prototype.setTable.apply(this,arguments);if(U.getTableBaseType(t)===sap.ui.comp.personalization.TableType.Table){t.detachGroup(this._onGroup,this);t.attachGroup(this._onGroup,this);}};G.prototype._getTable2Json=function(){var j=this.createPersistentStructure();this._addPersistentData(this._mapTable2Json(this.getTable()),j);return j;};G.prototype._getDataSuiteFormat2Json=function(d){var j=this.createPersistentStructure();this._addPersistentData(this._mapDataSuiteFormat2Json(d),j);return j;};G.prototype._addPersistentData=function(s,d){var c=this.getColumnMap(true);s.group.groupItems.forEach(function(S){if(!S.isGrouped||!c[S.columnKey]){return;}d.group.groupItems.push({columnKey:S.columnKey,operation:S.operation,showIfGrouped:S.showIfGrouped});});};G.prototype._mapTable2Json=function(t){var c=[];if(U.getTableBaseType(t)===sap.ui.comp.personalization.TableType.Table&&t.getGroupBy){c=t.getGroupBy()||[];if(typeof c==="string"){c=[c];}}if(U.getTableType(t)===sap.ui.comp.personalization.TableType.AnalyticalTable&&t.getGroupedColumns){c=t.getGroupedColumns()||[];}var j=this.createPersistentStructure();j.group.groupItems=c.map(function(C){if(typeof C==="string"){C=sap.ui.getCore().byId(C);}return{columnKey:U.getColumnKey(C),isGrouped:C.getGrouped(),operation:C.getSortOrder&&C.getSortOrder()===sap.ui.table.SortOrder.Ascending?sap.m.P13nConditionOperation.GroupAscending:sap.m.P13nConditionOperation.GroupDescending,showIfGrouped:C.getShowIfGrouped?C.getShowIfGrouped():false};});return j;};G.prototype._mapDataSuiteFormat2Json=function(d){var j=this.createPersistentStructure();if(!d.GroupBy||!d.GroupBy.length){return j;}j.group.groupItems=d.GroupBy.map(function(g){return{columnKey:g,isGrouped:true,operation:sap.m.P13nConditionOperation.GroupAscending,showIfGrouped:false};});return j;};G.prototype.syncTable2TransientModel=function(){var t=this.getTable();var i=[];var c;var C;var o=this.getColumnMap(true);if(t){if(U.getTableBaseType(t)===sap.ui.comp.personalization.TableType.Table){for(C in o){c=o[C];if(U.isGroupable(c)){i.push({columnKey:C,text:c.getLabel().getText(),tooltip:(c.getTooltip()instanceof sap.ui.core.TooltipBase)?c.getTooltip().getTooltip_Text():c.getTooltip_Text()});}}}if(U.getTableType(t)===sap.ui.comp.personalization.TableType.ResponsiveTable){for(C in o){c=o[C];if(U.isGroupable(c)){i.push({columnKey:C,text:c.getHeader().getText(),tooltip:(c.getHeader().getTooltip()instanceof sap.ui.core.TooltipBase)?c.getHeader().getTooltip().getTooltip_Text():c.getHeader().getTooltip_Text()});}}}}U.sortItemsByText(i,"text");var g=this.getModel("$sapuicomppersonalizationBaseController").getData().transientData.group.items;if(q(i).not(g).length!==0||q(g).not(i).length!==0){this.getModel("$sapuicomppersonalizationBaseController").getData().transientData.group.items=i;}};G.prototype._onGroup=function(e){var t=this.getTable();var g=e.mParameters.groupedColumns;this.fireBeforePotentialTableChange();var d=this.getModel("$sapuicomppersonalizationBaseController").getData();d.persistentData.group.groupItems=[];g.forEach(function(c,i){if(typeof c==="string"){c=sap.ui.getCore().byId(c);}if(U.getTableType(t)===sap.ui.comp.personalization.TableType.AnalyticalTable){if(c.getGrouped()){d.persistentData.group.groupItems.push({columnKey:U.getColumnKey(c),showIfGrouped:c.getShowIfGrouped?c.getShowIfGrouped():false});}}else if(U.getTableBaseType(t)===sap.ui.comp.personalization.TableType.Table){d.persistentData.group.groupItems.push({columnKey:U.getColumnKey(c),showIfGrouped:false});}},this);this.fireAfterPotentialTableChange();this.fireAfterGroupModelDataChange();};G.prototype._hasTableGroupableColumns=function(){var t=this.getTable();if(!t){return false;}var h=false;t.getColumns().some(function(c){if(U.isGroupable(c)){h=true;return true;}});return h;};G.prototype.getPanel=function(){sap.ui.getCore().loadLibrary("sap.m");q.sap.require("sap/m/P13nGroupPanel");q.sap.require("sap/m/P13nItem");q.sap.require("sap/m/P13nGroupItem");if(!this._hasTableGroupableColumns()){return null;}var t=this;var p=new sap.m.P13nGroupPanel({maxGroups:U.getTableType(this.getTable())===sap.ui.comp.personalization.TableType.AnalyticalTable?"-1":"1",containerQuery:true,items:{path:"$sapmP13nPanel>/transientData/group/items",template:new sap.m.P13nItem({columnKey:"{$sapmP13nPanel>columnKey}",text:"{$sapmP13nPanel>text}",tooltip:"{$sapmP13nPanel>tooltip}"})},groupItems:{path:"$sapmP13nPanel>/persistentData/group/groupItems",template:new sap.m.P13nGroupItem({columnKey:"{$sapmP13nPanel>columnKey}",operation:"{$sapmP13nPanel>operation}",showIfGrouped:"{$sapmP13nPanel>showIfGrouped}"})},beforeNavigationTo:t.setModelFunction()});p.attachAddGroupItem(function(e){var d=this.getModel("$sapuicomppersonalizationBaseController").getData();var a=e.getParameters();var g={columnKey:a.groupItemData.getColumnKey(),operation:a.groupItemData.getOperation(),showIfGrouped:a.groupItemData.getShowIfGrouped()};if(a.index>-1){d.persistentData.group.groupItems.splice(a.index,0,g);}else{d.persistentData.group.groupItems.push(g);}this.getModel("$sapuicomppersonalizationBaseController").setData(d,true);},this);p.attachRemoveGroupItem(function(e){var a=e.getParameters();var d=this.getModel("$sapuicomppersonalizationBaseController").getData();if(a.index>-1){d.persistentData.group.groupItems.splice(a.index,1);this.getModel("$sapuicomppersonalizationBaseController").setData(d,true);}},this);return p;};G.prototype.syncJsonModel2Table=function(j){var t=this.getTable();var c;var C=this.getColumnMap();this.fireBeforePotentialTableChange();if(U.getTableType(t)===sap.ui.comp.personalization.TableType.TreeTable){return;}else if(U.getTableType(t)===sap.ui.comp.personalization.TableType.AnalyticalTable){for(var s in C){c=C[s];if(c&&c.getGrouped()){c.setGrouped(false);c.setShowIfGrouped(false);}}j.group.groupItems.forEach(function(g){c=C[g.columnKey];if(!c){return;}c.setGrouped(true);c.setShowIfGrouped(g.showIfGrouped);});}else if(U.getTableBaseType(t)===sap.ui.comp.personalization.TableType.Table){if(j.group.groupItems.length>0){j.group.groupItems.some(function(g){c=C[g.columnKey];if(c){t.setGroupBy(c);return true;}},this);}else{t.setGroupBy(null);}}this.fireAfterPotentialTableChange();};G.prototype.getChangeType=function(p,o){if(!o||!o.group||!o.group.groupItems){return sap.ui.comp.personalization.ChangeType.Unchanged;}var i=JSON.stringify(p.group.groupItems)!==JSON.stringify(o.group.groupItems);return i?sap.ui.comp.personalization.ChangeType.ModelChanged:sap.ui.comp.personalization.ChangeType.Unchanged;};G.prototype.getChangeData=function(p,o){if(!p||!p.group||!p.group.groupItems){return this.createPersistentStructure();}if(!o||!o.group||!o.group.groupItems){return{group:U.copy(p.group)};}if(JSON.stringify(p.group.groupItems)!==JSON.stringify(o.group.groupItems)){return{group:U.copy(p.group)};}return null;};G.prototype.getUnionData=function(p,o){if(!o||!o.group||!o.group.groupItems){return{group:U.copy(p.group)};}return{group:U.copy(o.group)};};G.prototype.isGroupSelected=function(p,o,c){var i;if(!p){o.groupItems.some(function(g,I){if(g.columnKey===c){i=I;return true;}});return i>-1;}if(!p.selectedColumnKeys){return false;}if(p.selectedColumnKeys){p.selectedColumnKeys.some(function(s,I){if(s===c){i=I;return true;}});}return i>-1;};G.prototype.getDataSuiteFormatSnapshot=function(d){var p=this.getUnionData(this.getPersistentDataRestore(),this.getPersistentData());if(!p.group||!p.group.groupItems||!p.group.groupItems.length){return;}d.GroupBy=p.group.groupItems.map(function(g){return g.columnKey;});};G.prototype.exit=function(){B.prototype.exit.apply(this,arguments);var t=this.getTable();if(U.getTableBaseType(t)===sap.ui.comp.personalization.TableType.Table){t.detachGroup(this._onGroup,this);}};return G;},true);
