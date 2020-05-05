sap.ui.define([
		'jquery.sap.global',
		'sap/m/MessageToast',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/Filter',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel) {
	"use strict";

	var CController = Controller.extend("sap.ui.demo.toolpageapp.controller.MyTask", {

		onInit: function(){
			var pf = this.byId("processflow"); 
			pf.setZoomLevel("Two");
			var processflowShift = this.byId("processflowShift"); 
			processflowShift.setZoomLevel("Two");
			var processflowTurn = this.byId("processflowTurn"); 
			processflowTurn.setZoomLevel("Two");
			
			// initial table
			this._data = {
					Diligator : [
					            
					            { diligator : 'อดิศักดิ์ ไกรศร' , module : 'อนุมัติการลา, อนุมัตืการเปลี่ยนเวร', dateFrom : '20/07/2018', dateTo : '21/07/2018'},
					            { diligator : 'สุรชัย ตั้งจิต' , module : 'อนุมัติการสับเปลี่ยนกะ', dateFrom : '20/07/2018', dateTo : '21/07/2018'}
					            ]	
				};
			this.jModel = new sap.ui.model.json.JSONModel();
			this.jModel.setData(this._data);
		},
		onBeforeRendering: function() {
			//this.byId('ins').setModel(this.jModel);	
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
