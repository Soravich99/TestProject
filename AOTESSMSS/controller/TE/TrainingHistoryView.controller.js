sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, MessageToast, JSONModel,Filter, FilterOperator) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TE.TrainingHistoryView", {

		onInit: function () {
			
			var complete_url = window.location.href;
			var user = complete_url.split("/").pop();
			var pa0006 = new JSONModel();
			
			var pernr = user;
			var pa0002 = "";
			var titel = "";
			var t522g = "";
			var t535n = "";
			var pa0001;
			var t503k;
			var t501;
			
			
			var pa0105;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0105/"+pernr,
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
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+user,
	        	async: false,
	        	success: function(data){
	        		pa0001 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
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
			
			this.byId("PERNR").setText(pernr);
			this.byId("ENAME").setText(cStr);
			
			var pernrpad = pernr.toString().padStart(8,'0');
			var pa;
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
			
			var tehis;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_history/"+pernr,
	        	async: false,
	        	success: function(data){
	        		tehis = data;
	        		
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var oTable = this.getView().byId("trainingHistoryTable");
			for(var i=0;i<tehis.List.length;i++){
				if(tehis.List[i].status.includes("ไม่") == true ){
					var text1 = new sap.m.Text({text : tehis.List[i].status});
					text1.addStyleClass("myStatus");
				}else{
					var text1 = new sap.m.Text({text : tehis.List[i].status});
				}
				var oItem = new sap.m.ColumnListItem({	
					cells : [
						new sap.m.Text({text : tehis.List[i].c_t_name}),
						new sap.m.Text({text : tehis.List[i].c_name}),
						new sap.m.Text({text : this.dateFormat(tehis.List[i].tehiskey.begda)}),
						new sap.m.Text({text : this.dateFormat(tehis.List[i].tehiskey.endda)}),
//						new sap.m.Text({text : tehis.List[i].price}),
						text1,
					]
				});
				oTable.addItem(oItem);
			}
			
//			this.byId("trainingHistoryTable").setModel(new JSONModel(tehis),"hisData");
			
			this._oGlobalFilter = null;
			
			var oModelLeave = new JSONModel("model/TrainingHistory.json");
			this.getView().setModel(oModelLeave);
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TE/trainingHistoryView").attachPatternMatched(this._onObjectMatched, this);
			
		},
		_onObjectMatched: function (oEvent) {
			console.log(oEvent.getParameter("arguments").from);
			this.onInit();
//			if(oEvent.getParameter("arguments").from == "myTask"){
//				this.byId("approveSection").setVisible(false);
//			}else{
//				this.byId("approveSection").setVisible(true);
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
		_filter : function () {
			var oFilter = this._oGlobalFilter;

			this.byId("trainingHistoryTable").getBinding("items").filter(oFilter, "Application");
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
		},
		goBack : function(){
			this.getRouter().navTo("TE/TrainingList");
			//window.history.back();
		}
	});
});