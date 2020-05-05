sap.ui.define([
		'sap/ui/demo/toolpageapp/controller/BaseController',
		'sap/ui/model/json/JSONModel'
	], function (BaseController, JSONModel) {
		"use strict";
		return BaseController.extend("sap.ui.demo.toolpageapp.controller.Statistics", {

			onInit: function () {
				var oViewModel = new JSONModel({
					ColumnChartData: [{v: 5}, {v: 2}, {v: 3}, {v: 1},{v: 1}, {v: 2}, {v: 0}, {v: 0},{v: 3}, {v: 2}, {v: 3}, {v: 2}],
					ColumnChartData2: [{v: 5}, {v: 2}, {v: 3}, {v: 1},{v: 1}, {v: 2}, {v: 0}, {v: 0},{v: 3}, {v: 2}, {v: 3}, {v: 2}],
					ComparisonChartData: [{v: 120}, {v: -67}, {v: 250}, {v: -80}],
					ComparisonChartData2: [{v: -70}, {v: 170}, {v: -30}, {v: 60}, {v: 120}],
					PieChartData: [{v: 83}],
					PieChartData2: [{v: 57}]
				});
				this.setModel(oViewModel, "view");

				// Load charts for the current ennvironment (D3 = OpenUI5, MicroCharts = SAPUI5)
				/*try {
					sap.ui.require([
						"sap/suite/ui/microchart/AreaMicroChart"
					], function () {
						this.byId("statisticsContainer").addContent(sap.ui.xmlview({id: this.getView().createId("charts"), viewName : "sap.ui.demo.toolpageapp.view.StatisticsMicro"}));
					}.bind(this));
				} catch (oException) {
					// no microcharts available: use d3 view
					this.byId("statisticsContainer").addContent(sap.ui.xmlview({id: this.getView().createId("charts"), viewName : "sap.ui.demo.toolpageapp.view.StatisticsD3"}));
				}*/
				this.byId("statisticsContainer").addContent(sap.ui.xmlview({id: this.getView().createId("charts"), viewName : "sap.ui.demo.toolpageapp.view.StatisticsMicro"}));
			},

			onRefresh: function () {
				this.getView().byId("charts").byId("statisticsBlockLayout").invalidate();
				this.getView().byId("charts").byId("statisticsBlockLayout").setBusy(true);
				setTimeout(function () {
					this.getView().byId("charts").byId("statisticsBlockLayout").setBusy(false);
				}.bind(this), 2000);
			}

		});
});