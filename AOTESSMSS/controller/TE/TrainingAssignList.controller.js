sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TE.TrainingAssignList", {

		onInit: function () {
			var test;
			
			var tedetail;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_detail2",
	        	async: false,
	        	success: function(data){
	        		tedetail = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var ctid_temp = "";
			var oTable = this.getView().byId("idTab01");
			for(var u =0;u<tedetail.List.length;u++){
				var bool = true;
				if(ctid_temp != tedetail.List[u].tekey.c_t_id){
					ctid_temp = tedetail.List[u].tekey.c_t_id;
					var cur_date = new Date();
					var end_date = new Date(tedetail.List[u].tekey.endda);
					if(cur_date < end_date){
						var oItem = new sap.m.ColumnListItem({
							cells : [
								new sap.m.Text({text : tedetail.List[u].c_t_name}),
								new sap.m.Text(),
								new sap.m.Text(),
								new sap.m.Text(),
								new sap.m.Text(),
								new sap.m.Text(),
								new sap.m.Text(),
								new sap.m.Text(),
							]
						});
						oTable.addItem(oItem);
						var encode = window.btoa(tedetail.List[u].tekey.c_t_id + ":"+tedetail.List[u].tekey.c_id);
						
						var eff_date = new Date(tedetail.List[u].aedat);
						eff_date.setDate(eff_date.getDate() + 1);
						if(eff_date < cur_date){
							bool = false;
						}
						var btn = new sap.m.Button({
							icon: "sap-icon://save",
							press: [ this.onClickRegister, this],
							text: "ลงทะเบียน",
							enabled: bool,
							mydata: encode
						});
						btn.data("mydata",encode)
						var oItem = new sap.m.ColumnListItem({
							cells : [
								new sap.m.Text(),
								new sap.m.Text({text : tedetail.List[u].c_name}),
								new sap.m.Text({text : tedetail.List[u].loc}),
								new sap.m.Text({text : this.dateFormat(tedetail.List[u].tekey.begda)}),
								new sap.m.Text({text : this.dateFormat(tedetail.List[u].tekey.endda)}),
								new sap.m.Text({text : this.dateFormat(tedetail.List[u].aedat)}),
								new sap.m.Text({text : tedetail.List[u].quota}),
								btn,
							]
						});
						oTable.addItem(oItem);
					}
					
				}else{
					var encode = window.btoa(tedetail.List[u].tekey.c_t_id + ":"+tedetail.List[u].tekey.c_id);
					var cur_date = new Date();
					var end_date = new Date(tedetail.List[u].tekey.endda);
					if(cur_date < end_date){
						var eff_date = new Date(tedetail.List[u].aedat);
						eff_date.setDate(eff_date.getDate() + 1);
						if(eff_date < cur_date){
							bool = false;
						}
						var btn = new sap.m.Button({
							icon: "sap-icon://save",
							press: [ this.onClickRegister, this],
							text: "ลงทะเบียน",
							enabled: bool,
							mydata: encode
						});
						btn.data("mydata",encode)
						var oItem = new sap.m.ColumnListItem({
							cells : [
								new sap.m.Text(),
								new sap.m.Text({text : tedetail.List[u].c_name}),
								new sap.m.Text({text : tedetail.List[u].loc}),
								new sap.m.Text({text : this.dateFormat(tedetail.List[u].tekey.begda)}),
								new sap.m.Text({text : this.dateFormat(tedetail.List[u].tekey.endda)}),
								new sap.m.Text({text : this.dateFormat(tedetail.List[u].aedat)}),
								new sap.m.Text({text : tedetail.List[u].quota}),
								btn,
							]
						});
						oTable.addItem(oItem);
					}
				}
				
			}
			
			var oModel = new JSONModel("model/Tree.json");
			this.getView().setModel(oModel);
			
		},
		dateFormat: function(value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2, '0');
			var m = (date.getMonth() +1).toString().padStart(2, '0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		onMasterPressed: function (oEvent) {
			var oContext = oEvent.getParameter("listItem").getBindingContext("side");
			var sPath = oContext.getPath() + "/selected";
			oContext.getModel().setProperty(sPath, true);
			var sSelectedMasterElement = oContext.getProperty("title");
			var sKey = oContext.getProperty("key");
			switch (sSelectedMasterElement) {
				case "System Settings": {
					this.getRouter().navTo(sKey);
					break;
				}
				default: {
					MessageToast.show(sSelectedMasterElement + " was pressed");
					break;
				}
			}
		},

		onSavePressed: function () {
			MessageToast.show("Save was pressed");
		},

		onSendPressed: function () {
			MessageToast.show("บันทึกคำขอเรียบร้อยแล้ว สามารถตรวจสอบสถานะได้จากเมนู ตรวจสอบการลา");
		},
		
		onCancelPressed: function () {
			MessageToast.show("Cancel was pressed");
		},
		onMenuAction: function(oEvent) {
			var oItem = oEvent.getParameter("item"),
				sItemPath = "";
			while (oItem instanceof sap.m.MenuItem) {
				sItemPath = oItem.getText() + " > " + sItemPath;
				oItem = oItem.getParent();
			}

			sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

			sap.m.MessageToast.show("Action triggered on item: " + sItemPath);
			
			if(sItemPath === "สับเปลี่ยนเวร"){
				this.getView().byId("changerDate").setVisible(true);
			}else if(sItemPath === "แทนเวร"){
				this.getView().byId("changerDate").setVisible(false);
			}
		},
		onClickRegister: function (value) {
			var type = value.getSource().data("mydata");
			
			this.getRouter().navTo("TE/trainingAssignRegistration", {from: type });
		}

	});
});