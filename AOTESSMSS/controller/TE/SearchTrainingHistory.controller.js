sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, MessageToast, JSONModel,Filter, FilterOperator) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TE.SearchTrainingHistory", {

		onInit: function () {
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
//			var pa0002 = "";
//			var titel = "";
//			var t522g = "";
//			var t535n = "";
//			
//			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr;
//			$.ajax({
//	        	type: "GET",
//	        	url: url,
//	        	async: false,
//	        	success: function(data){
//	        		pa0002 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			var pa0001 = "";
//			var manag;
//			var t501;
//			var t503k;
//			var pa;
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+pernr,
//	        	async: false,
//	        	success: function(data){
//	        		pa0001 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			var pernrpad = pernr.toString().padStart(8,'0');
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/"+pernrpad,
//	        	async: false,
//	        	success: function(data){
//	        		pa = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			this.getView().byId("PLANS_DESC").setText(pa.paPos.pos_l);
//			this.getView().byId("MAIN_PLANS_ORG-O_SHORT").setText(pa.paPos.org_s+pa.paPos.up_s);
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T503K/"+pa0001.PA0001.persk,
//	        	async: false,
//	        	success: function(data){
//	        		t503k = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			this.getView().byId("PERSK").setText(t503k.T503K.ptext);
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T501/"+pa0001.PA0001.persg,
//	        	async: false,
//	        	success: function(data){
//	        		t501 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			this.getView().byId("PERSG").setText(t501.T501.ptext);
//			
//			var managp = parseInt(pa.paPos.manag).toString();
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+managp,
//	        	async: false,
//	        	success: function(data){
//	        		manag = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			this.getView().byId("KZTIM").setText(manag.PA0001.ename);
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G/"+pa0002.PA0002.anred,
//	        	async: false,
//	        	success: function(data){
//	        		t522g = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        if(pa0002.PA0002.namzu != "" && pa0002.PA0002.namzu != " ")
//	        {
//		        $.ajax({
//		        	type: "GET",
//		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N/"+pa0002.PA0002.namzu,
//		        	async: false,
//		        	success: function(data){
//		        		t535n = data;
//		        		titel = t535n.T535N.ttout;
//		        	},
//		        	error: function(){
//		        		titel = " ";
//		        	}
//		        });
//	        }else{
//	        	titel = " ";
//	        }
//	        
//	        if(titel == " "){
//	        	titel = t522g.T522G.atext;
//	        }
//	        var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
//			
//			this.byId("PERNR").setText(pernr);
//			this.byId("ENAME").setText(cStr);
			
			
			this._oGlobalFilter = null;
			
			var oModelLeave = new JSONModel("model/SearchTrainingHistory.json");
			this.getView().setModel(oModelLeave);
			
//			var lData = {"List":[
//							{
//								pernr : "551359",
//								name : "นาย กอ สุขใจ",
//								pos : "ฝศร. 8",
//								ctext : "Business English Basic",
//								rtext : "Business English Basic รุ่น 1",
//								date : "20/08/2561 - 20/08/2561",
//								result : "ไม่ผ่าน",
//								cost : "500.00"
//							},
//							{
//								pernr : "551360",
//								name : "นาย บี สุขใจ",
//								pos : "ฝศร. 8",
//								ctext : "Business English Basic",
//								rtext : "Business English Basic รุ่น 1",
//								date : "20/08/2561 - 20/08/2561",
//								result : "ผ่าน",
//								cost : "500.00"
//							},
//							{
//								pernr : "342558",
//								name : "นาย วิธวิทย์  เอกชีวเศรษฐ์",
//								pos : "ช่างเทคนิตอาวุโส",
//								ctext : "การใช้งานเครื่องตรวจสอบวัตถุระเบิด",
//								rtext : "การใช้งานเครื่องตรวจสอบวัตถุระเบิด รุ่น2",
//								date : "15/05/2562 - 16/05/2562",
//								result : "ผ่าน",
//								cost : "1500.00"
//							}
//						]};
//			
//			this.getView().setModel(new JSONModel(lData),"hisItem");
//			
//			var hisTr = this.getView().byId("trHistable");
//			
//			var aItems = hisTr.getItems();
//			var cell7 = "";
//			
//			var itemList = "";
//			for(var x=0;x < aItems.length;x++){
//				var itemData = "";
//				var itemRow = aItems[x].getCells();
//				for (var i = 0; i<itemRow.length; i++)
//				{	
//					if(i == 6){
//						cell7 = itemRow[i];
//						if(cell7.getText() == "ไม่ผ่าน"){
//							cell7.addStyleClass("myStatus");
//						}
//					}
//				}
//			}
			
			
		},
		dateFormat: function(value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2, '0');
			var m = (date.getMonth() +1).toString().padStart(2, '0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		onBeforeRendering: function() {
			//this.byId('selectedYear').setModel(this.jModel);	
		},
		onSendPressed: function(){
			
			var tehis;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_history",
	        	async: false,
	        	success: function(data){
	        		tehis = data;
	        		
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var className = this.getView().byId("className");
			var empId = this.getView().byId("empId");
			var empName = this.getView().byId("empName");
			
			var oTable = this.getView().byId("trHistable");
			var item = oTable.getItems();
			for(var d=0;d<item.length;d++){
				oTable.removeItem(item[d]);
			}
			for(var i=0;i<tehis.List.length;i++){
				if(className.getValue().length > 0){
					if(tehis.List[i].c_t_name.includes(className.getValue()) == false){
						continue;
					}
				}
				if(empId.getValue().length > 0){
					if(tehis.List[i].tehiskey.pernr.includes(empId.getValue()) == false){
						continue;
					}
				}
				if(empName.getValue().length > 0){
					if(tehis.List[i].ename.includes(empName.getValue()) == false){
						continue;
					}
				}
				if(tehis.List[i].status.includes("ไม่") == true ){
					var text1 = new sap.m.Text({text : tehis.List[i].status});
					text1.addStyleClass("myStatus");
				}else{
					var text1 = new sap.m.Text({text : tehis.List[i].status});
				}
				var oItem = new sap.m.ColumnListItem({	
					cells : [
						new sap.m.Text({text : tehis.List[i].tehiskey.pernr}),
						new sap.m.Text({text : tehis.List[i].ename}),
						new sap.m.Text({text : tehis.List[i].pos}),
						new sap.m.Text({text : tehis.List[i].c_t_name}),
						new sap.m.Text({text : tehis.List[i].c_name}),
						new sap.m.Text({text : this.dateFormat(tehis.List[i].tehiskey.begda)+" - "+this.dateFormat(tehis.List[i].tehiskey.endda)}),
						text1,
						new sap.m.Text({text : this.onPrice(tehis.List[i].price)}),
						
					]
				});
				oTable.addItem(oItem);
			}
			
		},
		onClearPressed: function(){
			
			this.getView().byId("className").setValue("");
			this.getView().byId("empId").setValue("");
			this.getView().byId("empName").setValue("");
			
			var oTable = this.getView().byId("trHistable");
			var item = oTable.getItems();
			for(var d=0;d<item.length;d++){
				oTable.removeItem(item[d]);
			}
//			this.getView().setModel(new JSONModel(),"hisItem");
		},
		onPrice: function(value){
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			if(value != "" && value != null && value != "NULL"){
				value = oNumberFormat.format(value.replace(",",""))
			}else{
				value = "";
			}

			return value;
		},
		_filter : function () {
			var oFilter = this._oGlobalFilter;

			this.byId("trainingHistoryTable").getBinding("rows").filter(oFilter, "Application");
		},

		filterGlobally : function(oEvent) {
			var sQuery = oEvent.getParameter("query");
			this._oGlobalFilter = null;

			if (sQuery) {
				this._oGlobalFilter = new Filter([
					new Filter("className", FilterOperator.Contains, sQuery),
					new Filter("generation", FilterOperator.Contains, sQuery),
					new Filter("date", FilterOperator.Contains, sQuery)
					
				], false);
			}

			this._filter();
		}
	});
});