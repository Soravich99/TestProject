sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast, JSONModel, Fragment, Controller, Filter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TE.TaskDetail", {

		onInit: function () {
		},
		onBeforeRendering: function() {
			//this.byId('ins').setModel(this.jModel);	
			//this.byId('leaveHistoryTable').setModel(this.jModel);	
		}

	});
});