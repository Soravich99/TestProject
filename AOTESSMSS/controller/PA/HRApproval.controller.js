sap.ui.define([
		'jquery.sap.global',
		'sap/m/MessageToast',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/Filter',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel) {
	"use strict";

	var CController = Controller.extend("sap.ui.demo.toolpageapp.controller.PA.MyTask", {

		onInit: function(){
			var pf = this.byId("processflow"); 
			pf.setZoomLevel("Two");
		},

		onPressNavToDetail : function(oEvent) {
			this.getSplitAppObj().to(this.createId(oEvent.getSource().data("mydata")));
		},

		onPressDetailBack : function() {
			this.getSplitAppObj().backDetail();
		},

		onPressMasterBack : function() {
			this.getSplitAppObj().backMaster();
		},

		onListItemPress : function(detailId) {
			this.getSplitAppObj().toDetail(this.createId(detailId));
		},

		onPressModeBtn : function(oEvent) {
			var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

			this.getSplitAppObj().setMode(sSplitAppMode);
			MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, {duration: 5000});
		},

		getSplitAppObj : function() {
			var result = this.byId("myTask");
			if (!result) {
				jQuery.sap.log.info("SplitApp object can't be found");
			}
			return result;
		},
		
		onSearch : function (oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("Name", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("idList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},
		onPressDetailBack : function() {
			this.getSplitAppObj().backMaster();;
		},
		onAccept : function() { 
			var result1 = this.byId("item1"); 
			result1.setProperty("info", "อนุมัติแล้ว"); 
			result1.setProperty("infoState", "Success"); 

			var result2 = this.byId("target1"); 
			result2.setProperty("state", "Positive"); 
			result2.setProperty("stateText", "อนุมัติแล้ว"); 
			result2.setProperty("focused", false); 

			var result3 = this.byId("target2"); 
			result3.setProperty("state", "Neutral"); 
			result3.setProperty("stateText", "รอการอนุมัติ"); 
			result3.setProperty("focused", true); 

			var result4 = this.byId("processflow"); 
			result4.setZoomLevel("Four"); 
			result4.setZoomLevel("Two"); 
			}

	});


	return CController;

});
