sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TE.TrainingList", {

		onInit: function () {
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
			var pa0002 = "";
			var titel = "";
			var t522g = "";
			var t535n = "";
			
			var pa0105;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0105/"+user,
	        	async: false,
	        	success: function(data){
	        		pa0105 = data;
	        		
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			if(pa0105.List.length > 0){
				for(var i = 0;i < pa0105.List.length;i++){
					if(pa0105.List[i].pakey.subty == "0007"){
						this.getView().byId("USRID_LONG").setText(pa0105.List[i].usrid_LONG);
					}
					if(pa0105.List[i].pakey.subty == "0005"){
						this.getView().byId("USRID1").setText(pa0105.List[i].usrid);
					}
					if(pa0105.List[i].pakey.subty == "0002"){
						this.getView().byId("USRID2").setText(pa0105.List[i].usrid);
					}	
				}
			}
			
			var pa0804;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/"+pernr,
	        	async: false,
	        	success: function(data){
	        		pa0804 = data.PA0804;
	        		
	        	},
	        	error: function(){
	        		pa0804 = "X";
	        	}
	        });
			var smark = this.getView().byId("SMARK");
			if(pa0804 != "X"){
	        	smark.setText(pa0804.smark);
	        }
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr;
			$.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		pa0002 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var pa0001 = "";
			var manag;
			var t501;
			var t503k;
			var pa;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+pernr,
	        	async: false,
	        	success: function(data){
	        		pa0001 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var pernrpad = pernr.toString().padStart(8,'0');
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/"+pernrpad,
	        	async: false,
	        	success: function(data){
	        		pa = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			this.getView().byId("PLANS_DESC").setText(pa.paPos.pos_l);
			this.getView().byId("MAIN_PLANS_ORG-O_SHORT").setText(pa.paPos.org_s+pa.paPos.up_s);
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T503K/"+pa0001.PA0001.persk,
	        	async: false,
	        	success: function(data){
	        		t503k = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			this.getView().byId("PERSG").setText(t503k.T503K.ptext);
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T501/"+pa0001.PA0001.persg,
	        	async: false,
	        	success: function(data){
	        		t501 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			this.getView().byId("PERSK").setText(t501.T501.ptext);
			
			
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G/"+pa0002.PA0002.anred,
	        	async: false,
	        	success: function(data){
	        		t522g = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
	        if(pa0002.PA0002.namzu != "" && pa0002.PA0002.namzu != " ")
	        {
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N/"+pa0002.PA0002.namzu,
		        	async: false,
		        	success: function(data){
		        		t535n = data;
		        		titel = t535n.T535N.ttout;
		        	},
		        	error: function(){
		        		titel = " ";
		        	}
		        });
	        }else{
	        	titel = " ";
	        }
	        
	        if(titel == " "){
	        	titel = t522g.T522G.atext;
	        }
	        var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
			
			this.byId("pernr").setText(pernr);
			this.byId("fullname").setText(cStr);
			
			var managp = parseInt(pa.paPos.manag).toString();
			
			if(managp == pernr){
				managp = parseInt(pa.paPos.upman).toString();
			}
			
			var manag;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+managp,
	        	async: false,
	        	success: function(data){
	        		manag = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G/"+manag.PA0002.anred,
	        	async: false,
	        	success: function(data){
	        		t522g = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
	        
	        if(pa0002.PA0002.namzu != "" && pa0002.PA0002.namzu != " ")
	        {
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N/"+manag.PA0002.namzu,
		        	async: false,
		        	success: function(data){
		        		t535n = data;
		        		titel = t535n.T535N.titel;
		        	},
		        	error: function(){
		        		titel = "0";
		        	}
		        });
	        }else{
	        	titel = "0";
	        }
			
	        if(titel == " " || titel == "0"){
	        	titel = t522g.T522G.atext;
	        }
			
			var cStr = titel + " " + manag.PA0002.vorna + " " + manag.PA0002.nachn;
	        
			this.getView().byId("KZTIM").setText(cStr);
			
			var tedetail;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_detail",
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
						var cur_date = new Date();
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
			
			this.getRouter().navTo("TE/trainingRegistration", {from: type });
		}

	});
});