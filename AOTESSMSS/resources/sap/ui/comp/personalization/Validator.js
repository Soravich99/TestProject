/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2017 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/m/library','sap/ui/core/MessageType'],function(M,a){"use strict";var V={checkGroupAndColumns:function(t,s,p,c,P,r){if(t!==sap.ui.comp.personalization.TableType.AnalyticalTable||!s.group||!s.columns){return Promise.resolve(r);}var R=sap.ui.getCore().getLibraryResourceBundle("sap.ui.comp");for(var C in c){var b=s.columns.controller.isColumnSelected(p.columns,P.columns,C);var g=s.group.controller.isGroupSelected(p.group,P.group,C);if(g&&!b){r.push({columnKey:C,panelTypes:[sap.m.P13nPanelType.group,sap.m.P13nPanelType.columns],messageType:a.Warning,messageText:R.getText("PERSODIALOG_MSG_GROUPING_NOT_POSSIBLE_DESCRIPTION")});}}return Promise.resolve(r);},checkSaveChanges:function(t,s,p,r){if(t!==sap.ui.comp.personalization.TableType.SelectionWrapper||!s.selection||!s.selection.payload||!p||!p.selection){return Promise.resolve(r);}var m=p.selection.selectionItems.map(function(o){return{columnKey:o.columnKey,visible:o.selected};});return s.selection.payload.callbackSaveChanges(m).then(function(S){if(S){return r;}r.push({panelTypes:[sap.m.P13nPanelType.selection],messageType:a.Error,messageText:sap.ui.getCore().getLibraryResourceBundle("sap.ui.comp").getText("PERSODIALOG_MSG_CHANGES_SAVE_FAILED")});return r;});}};return V;},true);
