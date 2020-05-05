sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.PD.PerformanceAppraisal", {

		onInit: function () {
		},
		onBeforeRendering: function() {
			//this.byId('selectedYear').setModel(this.jModel);	
		}
	});
});