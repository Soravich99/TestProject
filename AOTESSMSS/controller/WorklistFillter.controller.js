/*global location history */
sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	"sap/ui/model/json/JSONModel",
	'sap/ui/demo/toolpageapp/model/formatter',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	
], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("sap.ui.demo.toolpageapp.controller.WorklistFillter", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit : function () {
			
			var oModelLeave = new JSONModel("model/Worklist.json");
			this.getView().setModel(oModelLeave);
			
		},
		onBeforeRendering: function() {
//			this.byId('table').setModel(this.jModel);	
		},
		onSearch : function (oEvent) {
			if (oEvent.getParameters().refreshButtonPressed) {
				// Search field's 'refresh' button has been pressed.
				// This is visible if you select any master list item.
				// In this case no new search is triggered, we only
				// refresh the list binding.
				this.onRefresh();
			} else {
				var aTableSearchState = [];
				var sQuery = oEvent.getParameter("query");

				if (sQuery && sQuery.length > 0) {
					aTableSearchState = [new Filter("DocType", FilterOperator.Contains, sQuery)];
				}
				this._applySearch(aTableSearchState);
			}

		},

		/**
		 * Internal helper method to apply both filter and search state together on the list binding
		 * @param {sap.ui.model.Filter[]} aTableSearchState An array of filters for the search
		 * @private
		 */
		_applySearch: function(aTableSearchState) {
			var oTable = this.byId("table");
			oTable.getBinding("items").filter(aTableSearchState, "Application");
		},
		/**
		 * Event handler when a filter tab gets pressed
		 * @param {sap.ui.base.Event} oEvent the filter tab event
		 * @public
		 */
		onQuickFilter: function(oEvent) {
			var sKey = oEvent.getParameter("selectedKey");
			//oBinding.filter(this._mFilters[sKey]);
			if(sKey == "all"){
				this._applySearch([]);
			}else{
				this._applySearch([new Filter("Status", FilterOperator.EQ, sKey)]);
			}
			
		}


	});
});