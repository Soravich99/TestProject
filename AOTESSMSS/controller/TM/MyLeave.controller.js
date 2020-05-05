sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TM.MyLeave", {

		onInit: function () {
//			var yearData = {	Years:[
//			                	      {"year": "2556"},
//			                	      {"year": "2557"},
//			                	      {"year": "2558"},
//			                	      {"year": "2559"},
//			                	      {"year": "2560"},
//			                	      {"year": "2561"}
//			                	      ]
//							};
//			
//			this.jModel = new sap.ui.model.json.JSONModel();
//			this.jModel.setData(yearData);
			
//			var data = [   {"LeaveType": "ลาพักผ่อน",
//							"startDate": "01/01/2561",
//							"endDate": "31/12/2561",
//							"quota": "10",
//							"used": "2",
//							"balance": "5",
//							"approvingAmt": "3",
//							"remark": ""},
//							{"LeaveType": "ลาป่วย",
//							"startDate": "01/01/2561",
//							"endDate": "31/12/2561",
//							"quota": "10",
//							"used": "2",
//							"balance": "5",
//							"approvingAmt": "3",
//							"remark": ""}];
//			this._data = {
//					LeaveTypes : data	
//				};
			
//			var oModelLeave = new JSONModel("model/LeaveData.json");
//			this.getView().setModel(oModelLeave);
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var pa0002 ="";
			var t522g = "";
			var titel = "";
			var pa0007;
			this.byId("PERNR").setText(user);
			
			var oModelTypes = new JSONModel("model/leaveTypes.json");
			var t554s = new JSONModel();
			$.ajax({
	        	type: "GET",
	        	url: 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T554S',
	        	async: false,
	        	success: function(data){
	        		t554s = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			for(var l=0;l<t554s.List.length;l++){
				t554s.List[l].subty = t554s.List[l].t554Skey.subty;
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
			
			var pa2006;
			
			$.ajax({
	        	type: "GET",
	        	url: 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA2006/'+pernr,
	        	async: false,
	        	success: function(data){
	        		pa2006 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 1,
				  minFractionDigits: 0,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			for(var i=0;i<pa2006.List.length;i++){
				if(pa2006.List[i].ktart == "01" || pa2006.List[i].ktart == "1"){
					pa2006.List[i].ktart = "หยุดพักผ่อน";
				}
				if(pa2006.List[i].ktart == "02" || pa2006.List[i].ktart == "2"){
					pa2006.List[i].ktart = "ลาป่วย";
				}
				if(pa2006.List[i].ktart == "03" || pa2006.List[i].ktart == "3"){
					pa2006.List[i].ktart = "ลาป่วย(ไม่จ่าย)";
				}
				if(pa2006.List[i].ktart == "04" || pa2006.List[i].ktart == "4"){
					pa2006.List[i].ktart = "ลาป่วยในหน้าที่";
				}
				if(pa2006.List[i].ktart == "05" || pa2006.List[i].ktart == "5"){
					pa2006.List[i].ktart = "ลาป่วยในหน้าที่(จ่าย 50%)";
				}
				if(pa2006.List[i].ktart == "06" || pa2006.List[i].ktart == "6"){
					pa2006.List[i].ktart = "ลากิจ";
				}
				if(pa2006.List[i].ktart == "11"){
					pa2006.List[i].ktart = "ลาช่วยภริยาที่คลอด";
				}
				if(pa2006.List[i].ktart == "12"){
					pa2006.List[i].ktart = "ลาอุปสมบทหรือลาพิธีฮัจญ์";
				}
				pa2006.List[i].balance = oNumberFormat.format(pa2006.List[i].anzhl - pa2006.List[i].kverb);
				pa2006.List[i].anzhl = oNumberFormat.format(pa2006.List[i].anzhl);
				pa2006.List[i].kverb = oNumberFormat.format(pa2006.List[i].kverb);
				pa2006.List[i].pernr = pa2006.List[i].pakey.pernr;
				pa2006.List[i].begda = this.dateFormat(pa2006.List[i].pakey.begda);
				pa2006.List[i].endda = this.dateFormat(pa2006.List[i].pakey.endda);
				
			}
			
			this.getView().setModel(new JSONModel(pa2006),"leaveList");
			
			var oModelLeave = new JSONModel("model/LeaveData.json");
			this.getView().setModel(oModelLeave);
		},
		dateFormat: function(value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth()+1).toString().padStart(2,'0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		onBeforeRendering: function() {
//			this.byId('selectedYear').setModel(this.jModel);	
		}
	});
});