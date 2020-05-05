sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TM.Timesheet", {

		onInit: function () {
			
			var oModelLeave = new JSONModel("model/Timesheet.json");
			this.getView().setModel(oModelLeave);
			
			this.byId("multiheaderShiftTurn").setHeaderSpan([2,1]);
			this.byId("multiheaderOT").setHeaderSpan([3,1]);
		},
		onBeforeRendering: function() {
		}
	});
});