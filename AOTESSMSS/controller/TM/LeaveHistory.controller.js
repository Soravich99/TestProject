sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TM.LeaveHistory", {

		onInit: function () {
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var pa0002 ="";
			var t522g = "";
			var titel = "";
			var pa0007;
			this.byId("PERNR").setText(user);
			
			var oModelTypes = new JSONModel("model/leaveTypes.json");
			
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
			
			
			var docData;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/TMhistory/"+user+"/1",
	        	async: false,
	        	success: function(data){
	        		docData = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			
			
			if(docData.List.length > 0){
				var oTable = this.getView().byId("idTab01");
				var item = oTable.getItems();
				for(var d=0;d<item.length;d++){
					oTable.removeItem(item[d]);
				}
				for(var p = 0; p < docData.List.length;p++){
					
					var pa0001;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+docData.List[p].userad,
			        	async: false,
			        	success: function(data){
			        		pa0001 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var pa0002;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+docData.List[p].userad,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var hrp1000;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+pa0001.PA0001.plans,
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        		
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
					var bool = false;
					var bools = false;
					if(docData.List[p].status != 99){
						bool = true
					}
					var btn = new sap.m.Button({
						icon: "sap-icon://search",
						press: [ this.onClickRegister, this],
						text: "",
						enabled: bools,
						mydata: docData.List[p].docid
					});
					btn.data("mydata",docData.List[p].docid);
					var btn2 = new sap.m.Button({
						icon: "sap-icon://cancel",
						press: [ this.onOpentmcan, this],
						text: "แจ้งยกเลิก",
						enabled: bool,
						mydata: docData.List[p].docid
					});
					btn2.data("mydata",docData.List[p].docid);
					var script_data = docData.List[p].script;
					var pa2003_arr = script_data.split(",");
					var arrayLength = pa2003_arr.length;
					
					var date_from = "";
					var date_to = "";
					var leavetype = "";
					
					
					for (var i = 0; i < arrayLength; i++) {
						var fieldar = pa2003_arr[i].split(":");
						var field = fieldar[0];
					    if(field.includes("leavetype") == true){ leavetype = pa2003_arr[i].split(":").pop(); }
					    if(field.includes("drs_from") == true){ date_from = pa2003_arr[i].split(":").pop(); }
					    if(field.includes("drs_to") == true){ date_to = pa2003_arr[i].split(":").pop(); }

					}
					
					
					var oItem = new sap.m.ColumnListItem({
						cells : [ new sap.m.Text({text:leavetype}),
								  new sap.m.Text({text:date_from}),
								  new sap.m.Text({text:date_to}),
								  new sap.m.Text({text:pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn}),
								  new sap.m.Text({text:docData.List[p].sttext}),
								  new sap.m.Text({text:""}),
								  btn,
								  btn2
								 
						]
					});
					
					oTable.addItem(oItem);
				}
			}
			
			var docData;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/TMhistory/"+user+"/2",
	        	async: false,
	        	success: function(data){
	        		docData = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			if(docData.List.length > 0){
				var oTable = this.getView().byId("idTab02");
				var item = oTable.getItems();
				for(var d=0;d<item.length;d++){
					oTable.removeItem(item[d]);
				}
				for(var p = 0; p < docData.List.length;p++){
					
					var pa0001;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+docData.List[p].userad,
			        	async: false,
			        	success: function(data){
			        		pa0001 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var pa0002;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+docData.List[p].userad,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var hrp1000;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+pa0001.PA0001.plans,
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        		
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
					
					var bool = false;
					var bools = false;
					if(docData.List[p].status != 99){
						bool = true
					}
					var btn = new sap.m.Button({
						icon: "sap-icon://search",
						press: [ this.onClickRegister, this],
						text: "",
						enabled: bools,
						mydata: docData.List[p].docid
					});
					btn.data("mydata",docData.List[p].docid);
					var btn2 = new sap.m.Button({
						icon: "sap-icon://cancel",
						press: [ this.onOpentmcan, this],
						text: "แจ้งยกเลิก",
						enabled: bool,
						mydata: docData.List[p].docid
					});
					btn2.data("mydata",docData.List[p].docid);
					
					var oItem = new sap.m.ColumnListItem({
						cells : [ new sap.m.Text({text:docData.List[p].header}),
								  new sap.m.Text({text:docData.List[p].header}),
								  new sap.m.Text({text:docData.List[p].header}),
								  new sap.m.Text({text:pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn}),
								  new sap.m.Text({text:docData.List[p].sttext}),
								  new sap.m.Text({text:""}),
								  btn,
								  btn2
								 
						]
					});
					
					oTable.addItem(oItem);
				}
			}
			
			var docData;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/TMhistory/"+user+"/3",
	        	async: false,
	        	success: function(data){
	        		docData = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			if(docData.List.length > 0){
				var oTable = this.getView().byId("idTab03");
				var item = oTable.getItems();
				for(var d=0;d<item.length;d++){
					oTable.removeItem(item[d]);
				}
				for(var p = 0; p < docData.List.length;p++){
					
					var pa0001;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+docData.List[p].userad,
			        	async: false,
			        	success: function(data){
			        		pa0001 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var pa0002;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+docData.List[p].userad,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var hrp1000;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+pa0001.PA0001.plans,
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        		
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
					
					var bool = false;
					var bools = false;
					if(docData.List[p].status != 99){
						bool = true
					}
					var btn = new sap.m.Button({
						icon: "sap-icon://search",
						press: [ this.onClickRegister, this],
						text: "",
						enabled: bools,
						mydata: docData.List[p].docid
					});
					btn.data("mydata",docData.List[p].docid);
					var btn2 = new sap.m.Button({
						icon: "sap-icon://cancel",
						press: [ this.onOpentmcan, this],
						text: "แจ้งยกเลิก",
						enabled: bool,
						mydata: docData.List[p].docid
					});
					btn2.data("mydata",docData.List[p].docid);
					
					var oItem = new sap.m.ColumnListItem({
						cells : [ new sap.m.Text({text:docData.List[p].header}),
								  new sap.m.Text({text:docData.List[p].header}),
								  new sap.m.Text({text:docData.List[p].header}),
								  new sap.m.Text({text:pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn}),
								  new sap.m.Text({text:docData.List[p].sttext}),
								  new sap.m.Text({text:""}),
								  btn,
								  btn2
								 
						]
					});
					
					oTable.addItem(oItem);
				}
			}
			
		},
		onOpentmcan: function (value) {
			var type = value.getSource().data("mydata");
			
			this.getRouter().navTo("TM/tmCancel", {from: type });
		},
		onBeforeRendering: function() {
			//this.byId('selectedYear').setModel(this.jModel);	
		}
	});
});