sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/m/MessageBox',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast,MessageBox, JSONModel, Fragment, Controller, Filter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.MainPageFund", {

		onInit: function () {
			
			 var oModel = new sap.ui.model.json.JSONModel();
			 oModel.loadData("model/employee1.json");
			 this.oTable = this.byId("idProductsTable");
			 this.getView().setModel(oModel);
			 this.getView().bindElement("/SupplierCollection/0");
			 
			 var user = jQuery.sap.getUriParameters().get("user");
				var pernr = user;
				
				var pa0001 = new JSONModel();
				var pa0002 = new JSONModel();
				var pa0006 = new JSONModel();
				var pa0185 = new JSONModel();
				var pa0187 = new JSONModel();
				var pa0077 = new JSONModel();
				var pa0021 = new JSONModel();
				var pa0022 = new JSONModel();
				var pa0804 = new JSONModel();
				var t522g = new JSONModel();
				var t535n = new JSONModel();
				var t535ne = new JSONModel();
				var t516t = new JSONModel();
				var titel = "";
				var reli = "";
				var blood = "";
				var manag;
				var t501;
				var t503k;
				var pa;
				
		        var dataPA = $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+user,
		        	async: false,
		        	success: function(data){
		        		pa0001 = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        dataPA = $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+user,
		        	async: false,
		        	success: function(data){
		        		pa0002 = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        dataPA = $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+user,
		        	async: false,
		        	success: function(data){
		        		pa0185 = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        dataPA = $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/12",
		        	async: false,
		        	success: function(data){
		        		pa0021 = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        dataPA = $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+user+"/12",
		        	async: false,
		        	success: function(data){
		        		pa0187 = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G",
		        	async: false,
		        	success: function(data){
		        		t522g = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        this.getView().setModel(new JSONModel(t522g),"titleItem");
		        
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N",
		        	async: false,
		        	success: function(data){
		        		t535n = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        this.getView().setModel(new JSONModel(t535n),"otitleItem");
		        
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535NE",
		        	async: false,
		        	success: function(data){
		        		t535ne = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        this.getView().setModel(new JSONModel(t535ne),"eotitleItem");
		        
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T516T",
		        	async: false,
		        	success: function(data){
		        		t516t = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        this.getView().setModel(new JSONModel(t516t),"reliItem");
		        
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
			        		titel = t535n.T535N.titel;
			        	},
			        	error: function(){
			        		titel = "0";
			        	}
			        });
		        }else{
		        	titel = "0";
		        }
		        
		        
		        var vpernr = this.getView().byId("PERNR");
		        var vename = this.getView().byId("ENAME");
				
		        if(titel == " " || titel == "0"){
		        	titel = t522g.T522G.atext;
		        }
				
				var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
				
				vpernr.setText(pa0001.PA0001.pernr);
				vename.setText(cStr);
				
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
				
				this.getView().byId("empno").setText(pernr);
				this.getView().byId("empname").setText(cStr);
				this.getView().byId("org").setText(pa.paPos.org_s+pa.paPos.up_s);
				this.getView().byId("plans").setText(pa.paPos.pos_l);
				
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
				
				this.getView().byId("PERSK").setText(t503k.T503K.ptext);
				
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
				
				this.getView().byId("PERSG").setText(t501.T501.ptext);
				
				var managp = parseInt(pa.paPos.manag).toString();
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+managp,
		        	async: false,
		        	success: function(data){
		        		manag = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				var TimePolicy;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/Fund",
		        	async: false,
		        	success: function(data){
		        		TimePolicy = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				this.getView().byId("txt1").setText(TimePolicy.TimePolicy.text);
				
				var TimePolicy;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundPerson",
		        	async: false,
		        	success: function(data){
		        		TimePolicy = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				this.getView().byId("txt3").setText(TimePolicy.TimePolicy.text);
				
				var TimePolicy;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundReduct",
		        	async: false,
		        	success: function(data){
		        		TimePolicy = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				this.getView().byId("txt2").setText(TimePolicy.TimePolicy.text);
				
				//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
			
		},
		onBeforeRendering: function() {
			//this.byId('empAssignTable').setModel(this.jModel);	
		},
		onCreate : function () {
			var oList = this.byId("peopleList");
			var	oBinding = oList.getBindingContext("items");
				// Create a new entry through the table's list binding
				oContext = oBinding.create({
					"Order" : "",
					"GetBenefitName" : "",
					"GetBenefitPercent" : "",
				});

			oContext.created().then(function () {
				oBinding.refresh();
			});

			this._setUIChanges(true);
			this.getView().getModel("appView").setProperty("/usernameEmpty", true);

			// Select and focus the table row that contains the newly created entry
			oList.getItems().some(function (oItem) {
				if (oItem.getBindingContext() === oContext) {
					oItem.focus();
					oItem.setSelected(true);
					return true;
				}
			});
		},
		onClickEditFund :function(){
			var TimeScholar;
			 $.ajax({
		       	type: "GET",
		       	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Fund",
		       	async: false,
		       	success: function(data){
		       		TimeScholar = data;
		       		
		       	},
		       	error: function(){
		       		
		       	}
		     });
			 var cur_date = new Date();
			 var begda = new Date(TimeScholar.TimeScholar.begda);
			 var endda = new Date(TimeScholar.TimeScholar.endda);
			 if(cur_date < begda || cur_date > endda){
				 MessageToast.show("ไม่อยู่ในระยะเวลาเปิดให้ทำการเปลี่ยนกองทุุน");
			 }else{
			
			this.getRouter().navTo(
			"BE/changeFund");
			 }
		},
		onClickEditFund2 :function(){
			var TimeScholar;
			 $.ajax({
		       	type: "GET",
		       	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPerson",
		       	async: false,
		       	success: function(data){
		       		TimeScholar = data;
		       		
		       	},
		       	error: function(){
		       		
		       	}
		     });
			 var cur_date = new Date();
			 var begda = new Date(TimeScholar.TimeScholar.begda);
			 var endda = new Date(TimeScholar.TimeScholar.endda);
			 if(cur_date < begda || cur_date > endda){
				 MessageToast.show("ไม่อยู่ในระยะเวลาเปิดให้ทำการเปลี่ยนผู้รับผลประโยชน์กองทุุน");
			 }else{
			
			this.getRouter().navTo(
			"BE/changeFund2");
			 }
		},
		onClickEditFund3 :function(){
			var TimeScholar;
			 $.ajax({
		       	type: "GET",
		       	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReduct",
		       	async: false,
		       	success: function(data){
		       		TimeScholar = data;
		       		
		       	},
		       	error: function(){
		       		
		       	}
		     });
			 var cur_date = new Date();
			 var begda = new Date(TimeScholar.TimeScholar.begda);
			 var endda = new Date(TimeScholar.TimeScholar.endda);
			 if(cur_date < begda || cur_date > endda){
				 MessageToast.show("ไม่อยู่ในระยะเวลาเปิดให้ทำการเปลี่ยนอัตราสะสม");
			 }else{
			
			this.getRouter().navTo(
			"BE/changeFund3");
			 }
		}
	});
});
