sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TeamCalendar", {

		onInit: function () {
			// create model
			var oModel = new JSONModel();
			oModel.setData({
				startDate: new Date("2017", "8", "27", "8", "0"),
				people: [{
					pic: "sap-icon://employee",
					name: "สมชาย รักบ้านเกิด",
					role: "team member",
					appointments: [
						{
							start: new Date("2017", "8", "27", "08", "0"),
							end: new Date("2017", "8", "27", "17", "0"),
							title: "ลาป่วย",
							info: "อนุมัติแล้ว",
							type: "Type09",
							pic: "sap-icon://general-leave-request",
							tentative: false
						},
						{
							start: new Date("2017", "8", "28", "08", "0"),
							end: new Date("2017", "8", "29", "17", "0"),
							title: "ลากิจ",
							info: "อนุมัติแล้ว",
							type: "Type09",
							pic: "sap-icon://general-leave-request",
							tentative: false
						}
					]
				},
					{
						pic: "sap-icon://employee",
						name: "กัญญา อมรรัตน์",
						role: "team member",
						appointments: [
							{
								start: new Date("2017", "8", "30", "08", "0"),
								end: new Date("2017", "8", "30", "17", "0"),
								title: "ลาป่วย",
								info: "อนุมัติแล้ว",
								type: "Type09",
								pic: "sap-icon://general-leave-request",
								tentative: false
							}
						]
					},
					{
						pic: "sap-icon://employee",
						name: "อภิสิทธิ์ จันทรา",
						role: "team member",
						appointments: [
							{
								start: new Date("2017", "0", "15", "12", "0"),
								end: new Date("2017", "0", "15", "17", "0"),
								title: "ลาป่วย",
								info: "อนุมัติแล้ว",
								type: "Type09",
								pic: "sap-icon://general-leave-request",
								tentative: false
							}
						]
					}
				]
			});
			this.getView().setModel(oModel);

		},

		handleAppointmentSelect: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment");
			if (oAppointment) {
				MessageToast.show("Appointment selected: " + oAppointment.getTitle());
			} else {
				var aAppointments = oEvent.getParameter("appointments");
				var sValue = aAppointments.length + " Appointments selected";
				MessageToast.show(sValue);
			}
		}

	});
});