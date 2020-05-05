sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/Dialog',
	'sap/m/Label',
	'sap/m/Text',
	'sap/ui/layout/HorizontalLayout',
	'sap/ui/layout/VerticalLayout',
	'sap/m/Button',
		'sap/m/MessageToast', 'sap/ui/model/json/JSONModel' ], function(
		BaseController,Dialog, Label, Text, HorizontalLayout, VerticalLayout, Button, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend(
			"sap.ui.demo.toolpageapp.controller.PY.ApproveTaxBreak", {

				onInit : function() {

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
			        
			        var vename = this.getView().byId("ENAME_APP");
					
			        if(titel == " " || titel == "0"){
			        	titel = t522g.T522G.atext;
			        }
					
					var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					
					vename.setValue(cStr);
					
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
					
					this.getView().byId("PLANS_DESC_APP").setValue(pa.paPos.pos_l);
					
					var date = new Date();
					var d = date.getDate();
					var m = (date.getMonth() + 1).toString().padStart(2,'0');
					var y = (date.getFullYear()).toString().padStart(2,'0');
					this.getView().byId("approveDate").setValue([d,m,y].join("/"));
					
					var pernr;
					var user;
					var docData;
					
					var complete_url = window.location.href;
					var docno = complete_url.split("/").pop();
					
					var pa9703 = new JSONModel();
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9706";
					$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		docData = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var script = docData.tblDocdetail.script;
					
					var pa9706_arr = script.split(",");
					
					var pernr;
					var ename;
					var id1;
					var status;
					var childamt1;
					var childamt2;
					var disperson;
					var rmffund;
					var ltffund;
					var houseloan;
					var innsure;
					var health;
					var oldfund;
					var mainsur;
					var fainsur;
					var moinsur;
					var fasinsur;
					var mosinsur;
					var father;
					var mother;
					var fsther;
					var msther;
					var edufund;
					var donate;
					var aotdonate;
					var cycle;
					var total;
					var spouse;
					
					var arrayLength = pa9706_arr.length;
					for (var i = 0; i < arrayLength; i++) {
						var fieldar = pa9706_arr[i].split(":");
						var field = fieldar[0];
						if(field.includes("pernr") == true){ pernr = pa9706_arr[i].split(":").pop(); }
						if(field.includes("ename") == true){ ename = pa9706_arr[i].split(":").pop(); }
						if(field.includes("id1") == true){ id1 = pa9706_arr[i].split(":").pop(); }
						if(field.includes("status") == true){ status = pa9706_arr[i].split(":").pop(); }
						if(field.includes("spouse") == true){ spouse = pa9706_arr[i].split(":").pop(); }
						if(field.includes("childamt1") == true){ childamt1 = pa9706_arr[i].split(":").pop(); }
						if(field.includes("childamt2") == true){ childamt2 = pa9706_arr[i].split(":").pop(); }
						if(field.includes("disperson") == true){ disperson = pa9706_arr[i].split(":").pop(); }
						if(field.includes("rmffund") == true){ rmffund = pa9706_arr[i].split(":").pop(); }
						if(field.includes("ltffund") == true){ ltffund = pa9706_arr[i].split(":").pop(); }
						if(field.includes("houseloan") == true){ houseloan = pa9706_arr[i].split(":").pop(); }
						if(field.includes("innsure") == true){ innsure = pa9706_arr[i].split(":").pop(); }
						if(field.includes("health") == true){ health = pa9706_arr[i].split(":").pop(); }
						if(field.includes("oldfund") == true){ oldfund = pa9706_arr[i].split(":").pop(); }
						if(field.includes("mainsur") == true){ mainsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("fainsur") == true){ fainsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("moinsur") == true){ moinsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("fasinsur") == true){ fasinsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("mosinsur") == true){ mosinsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("father") == true){ father = pa9706_arr[i].split(":").pop(); }
						if(field.includes("mother") == true){ mother = pa9706_arr[i].split(":").pop(); }
						if(field.includes("fsther") == true){ fsther = pa9706_arr[i].split(":").pop(); }
						if(field.includes("msther") == true){ msther = pa9706_arr[i].split(":").pop(); }
						if(field.includes("edufund") == true){ edufund = pa9706_arr[i].split(":").pop(); }
						if(field.includes("donate") == true){ donate = pa9706_arr[i].split(":").pop(); }
						if(field.includes("aotdonate") == true){ aotdonate = pa9706_arr[i].split(":").pop(); }
						if(field.includes("cycle") == true){ cycle = pa9706_arr[i].split(":").pop(); }
						if(field.includes("total") == true){ total = pa9706_arr[i].split(":").pop(); }
					    
					}
					
					if(user == pernr){
						this.getView().byId("approveSection").setVisible(false);
					}
					
					this.getView().byId("PERNR").setValue(pernr);
					this.getView().byId("ENAME").setValue(ename);
					this.getView().byId("ICNUM").setValue(id1);
					this.getView().byId("status").setSelectedKey(status);
					this.getView().byId("spouse").setValue(spouse);
					this.getView().byId("CHILDAMT1").setValue(childamt1);
					this.getView().byId("CHILDAMT2").setValue(childamt2);
					this.getView().byId("DISPERSON").setValue(disperson);
					this.getView().byId("RMFFUND").setValue(this.con_amt(rmffund));
					this.getView().byId("LTFFUND").setValue(this.con_amt(ltffund));
					this.getView().byId("HOUSELOAN").setValue(this.con_amt(houseloan));
					this.getView().byId("INNSURE").setValue(this.con_amt(innsure));
					this.getView().byId("HEALTH").setValue(this.con_amt(health));
					this.getView().byId("OLDFUND").setValue(this.con_amt(oldfund));
					this.getView().byId("MAINSUR").setValue(this.con_amt(mainsur));
					this.getView().byId("FAINSUR").setValue(this.con_amt(fainsur));
					this.getView().byId("MOINSUR").setValue(this.con_amt(moinsur));
					this.getView().byId("FASINSUR").setValue(this.con_amt(fasinsur));
					this.getView().byId("MOSINSUR").setValue(this.con_amt(mosinsur));
					this.getView().byId("FATHER").setValue(this.con_amt(father));
					this.getView().byId("MOTHER").setValue(this.con_amt(mother));
					this.getView().byId("FSTHER").setValue(this.con_amt(fsther));
					this.getView().byId("MSTHER").setValue(this.con_amt(msther));
					this.getView().byId("EDUFUND").setValue(this.con_amt(edufund));
					this.getView().byId("DONATE").setValue(this.con_amt(donate));
					this.getView().byId("AOTDONATE").setValue(this.con_amt(aotdonate));
					this.getView().byId("CYCLE").setValue(this.con_amt(cycle));
					this.getView().byId("TOTAL").setValue(this.con_amt(total));
					
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
					$.ajax({
				       	type: "GET",
				       	url: url,
				       	async: false,
				       	success: function(data){
				       		docData = data;	
				       	},
				       	error: function(){
				        		
				       	}
				    });
					
					if(docData.tblDocheader.status != "2"){
						this.getView().byId("approveSection").setVisible(false);
					}
					
				},
				convertId : function(id){
					return id.replace(/(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})/, "$1-$2-$3-$4-$5");
				},
				convertAmount: function(oEvent){
					
					var oSource = oEvent.getSource();
					var value = oSource.getValue();
					jQuery.sap.require("sap.ui.core.format.NumberFormat");
					var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
						  maxFractionDigits: 2,
						  minFractionDigits: 2,
						  groupingEnabled: true,
						  groupingSeparator: ",",
						  decimalSeparator: "."
						});
					
					var val = oNumberFormat.format(value.replace(",",""))
					
					oSource.setValue(val);
					
				},
				con_amt: function(value){

					jQuery.sap.require("sap.ui.core.format.NumberFormat");
					var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
						  maxFractionDigits: 2,
						  minFractionDigits: 2,
						  groupingEnabled: true,
						  groupingSeparator: ",",
						  decimalSeparator: "."
						});
					
					value = oNumberFormat.format(value.replace(",",""))
					
					return value;
					
				},
				onMasterPressed : function(oEvent) {
					var oContext = oEvent.getParameter("listItem")
							.getBindingContext("side");
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
						MessageToast.show(sSelectedMasterElement
								+ " was pressed");
						break;
					}
					}
				},

				onSavePressed : function() {
					MessageToast.show("Saved");
				},
				onAccept: function(){
					
					var complete_url = window.location.href;
					var docno = complete_url.split("/").pop();
					var docData = new JSONModel();
					
					var selapp = this.getView().byId("selApp").getSelectedItem().getText();
					if(selapp == "ไม่รับทราบ"){
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
						$.ajax({
					       	type: "GET",
					       	url: url,
					       	async: false,
					       	success: function(data){
					       		docData = data;
					       		
					       	},
					       	error: function(){
					        		
					       	}
					    });
						
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/template/0",
				        	async: false,
				        	success: function(data){
				        		dctask = data.tblDoctask;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        }); 
						var aedat= new Date();
						aedat = [aedat.getFullYear(),(aedat.getMonth()+1).toString().padStart(2,'0'),aedat.getDate().toString().padStart(2,'0')].join("-");
						var json = dctask;
						json.taskkey.docid = dataJ.docid;
						json.docno = dataJ.docid;
						json.module = dataJ.module;
						json.header = dataJ.header;
						json.bedat = dataJ.bedat;
						json.aedat = aedat;
						json.taskkey.pernr = dataJ.pernr;
						json.userad = dataJ.userad;
						json.status = "4";
						json.sttext = selapp;
						json = JSON.stringify(json);
						
						var postdctask = {
								  "async": false,
								  "crossDomain": true,
								  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask",
								  "method": "POST",
								  "headers": {
								    "Content-Type": "application/json",
								    "User-Agent": "PostmanRuntime/7.13.0",
								    "Accept": "*/*",
								    "Cache-Control": "no-cache",
								    
								    "Host": "10.121.3.62:8088",
								    "accept-encoding": "gzip, deflate",
								    //"content-length": "1013",
								    "Connection": "keep-alive",
								    "cache-control": "no-cache"
								  },
								  "processData": false,
								  "data": json
								}
						
						$.ajax(postdctask).done(function (response) {
							console.log(response);
							dctask = response.tblDoctask;
						});
						dataJ.status = "4";
						dataJ.sttext = selapp;
						dataJ.aedat = aedat;
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
								  "async": false,
								  "crossDomain": true,
								  "url": url,
								  "method": "PUT",
								  "headers": {
								    "Content-Type": "application/json",
								    "User-Agent": "PostmanRuntime/7.13.0",
								    "Accept": "*/*",
								    "Cache-Control": "no-cache",
								    
								    "Host": "10.121.3.62:8088",
								    "accept-encoding": "gzip, deflate",
									    //"content-length": "1013",
								    "Connection": "keep-alive",
								    "cache-control": "no-cache"
								  },
								  "processData": false,
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
					}else{
					
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
						$.ajax({
					       	type: "GET",
					       	url: url,
					       	async: false,
					       	success: function(data){
					       		docData = data;
					       		
					       	},
					       	error: function(){
					        		
					       	}
					    });
						
						var json = "";
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/template/0",
				        	async: false,
				        	success: function(data){
				        		dctask = data.tblDoctask;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        }); 
						
						var aedat= new Date();
						aedat = [aedat.getFullYear(),(aedat.getMonth()+1).toString().padStart(2,'0'),aedat.getDate().toString().padStart(2,'0')].join("-");
						json = dctask;
						json.taskkey.docid = dataJ.docid;
						json.docno = dataJ.docid;
						json.module = dataJ.module;
						json.header = dataJ.header;
						json.bedat = dataJ.bedat;
						json.aedat = aedat;
						json.taskkey.pernr = dataJ.pernr;
						json.userad = dataJ.userad;
						json.status = "3";
						json.sttext = "รับทราบ";
						json = JSON.stringify(json);
						
						var postdctask = {
								  "async": false,
								  "crossDomain": true,
								  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask",
								  "method": "POST",
								  "headers": {
								    "Content-Type": "application/json",
								    "User-Agent": "PostmanRuntime/7.13.0",
								    "Accept": "*/*",
								    "Cache-Control": "no-cache",
								    
								    "Host": "10.121.3.62:8088",
								    "accept-encoding": "gzip, deflate",
								    //"content-length": "1013",
								    "Connection": "keep-alive",
								    "cache-control": "no-cache"
								  },
								  "processData": false,
								  "data": json
								}
						
						$.ajax(postdctask).done(function (response) {
							console.log(response);
							dctask = response.tblDoctask;
						});
						
						dataJ.status = "3";
						dataJ.sttext = "รับทราบ";
						dataJ.aedat = aedat;
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
								  "async": false,
								  "crossDomain": true,
								  "url": url,
								  "method": "PUT",
								  "headers": {
								    "Content-Type": "application/json",
								    "User-Agent": "PostmanRuntime/7.13.0",
								    "Accept": "*/*",
								    "Cache-Control": "no-cache",
								    
								    "Host": "10.121.3.62:8088",
								    "accept-encoding": "gzip, deflate",
									    //"content-length": "1013",
								    "Connection": "keep-alive",
								    "cache-control": "no-cache"
								  },
								  "processData": false,
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
						var pa9703 = new JSONModel();
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9706";
						$.ajax({
				        	type: "GET",
				        	url: url,
				        	async: false,
				        	success: function(data){
				        		docData = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						var script = docData.tblDocdetail.script;
						
						var pa9706_arr = script.split(",");
						
						var pernr;
						var ename;
						var id1;
						var status;
						var childamt1;
						var childamt2;
						var disperson;
						var rmffund;
						var ltffund;
						var houseloan;
						var innsure;
						var health;
						var oldfund;
						var mainsur;
						var fainsur;
						var moinsur;
						var fasinsur;
						var mosinsur;
						var father;
						var mother;
						var fsther;
						var msther;
						var edufund;
						var donate;
						var aotdonate;
						var cycle;
						var total;
						var spouse;
						
						var arrayLength = pa9706_arr.length;
						for (var i = 0; i < arrayLength; i++) {
							var fieldar = pa9706_arr[i].split(":");
							var field = fieldar[0];
							if(field.includes("pernr") == true){ pernr = pa9706_arr[i].split(":").pop(); }
							if(field.includes("ename") == true){ ename = pa9706_arr[i].split(":").pop(); }
							if(field.includes("id1") == true){ id1 = pa9706_arr[i].split(":").pop(); }
							if(field.includes("status") == true){ status = pa9706_arr[i].split(":").pop(); }
							if(field.includes("spouse") == true){ spouse = pa9706_arr[i].split(":").pop(); }
							if(field.includes("childamt1") == true){ childamt1 = pa9706_arr[i].split(":").pop(); }
							if(field.includes("childamt2") == true){ childamt2 = pa9706_arr[i].split(":").pop(); }
							if(field.includes("disperson") == true){ disperson = pa9706_arr[i].split(":").pop(); }
							if(field.includes("rmffund") == true){ rmffund = pa9706_arr[i].split(":").pop(); }
							if(field.includes("ltffund") == true){ ltffund = pa9706_arr[i].split(":").pop(); }
							if(field.includes("houseloan") == true){ houseloan = pa9706_arr[i].split(":").pop(); }
							if(field.includes("innsure") == true){ innsure = pa9706_arr[i].split(":").pop(); }
							if(field.includes("health") == true){ health = pa9706_arr[i].split(":").pop(); }
							if(field.includes("oldfund") == true){ oldfund = pa9706_arr[i].split(":").pop(); }
							if(field.includes("mainsur") == true){ mainsur = pa9706_arr[i].split(":").pop(); }
							if(field.includes("fainsur") == true){ fainsur = pa9706_arr[i].split(":").pop(); }
							if(field.includes("moinsur") == true){ moinsur = pa9706_arr[i].split(":").pop(); }
							if(field.includes("fasinsur") == true){ fasinsur = pa9706_arr[i].split(":").pop(); }
							if(field.includes("mosinsur") == true){ mosinsur = pa9706_arr[i].split(":").pop(); }
							if(field.includes("father") == true){ father = pa9706_arr[i].split(":").pop(); }
							if(field.includes("mother") == true){ mother = pa9706_arr[i].split(":").pop(); }
							if(field.includes("fsther") == true){ fsther = pa9706_arr[i].split(":").pop(); }
							if(field.includes("msther") == true){ msther = pa9706_arr[i].split(":").pop(); }
							if(field.includes("edufund") == true){ edufund = pa9706_arr[i].split(":").pop(); }
							if(field.includes("donate") == true){ donate = pa9706_arr[i].split(":").pop(); }
							if(field.includes("aotdonate") == true){ aotdonate = pa9706_arr[i].split(":").pop(); }
							if(field.includes("cycle") == true){ cycle = pa9706_arr[i].split(":").pop(); }
							if(field.includes("total") == true){ total = pa9706_arr[i].split(":").pop(); }
						    
						}
						
						
						json = {"chamt": donate,
					            "chno1": childamt1,
					            "chno2": null,
					            "spall": status,
					            "lpcur": null,
					            "lprem": innsure,
					            "taxid": null,
					            "mgint": houseloan,
					            "mgcur": null,
					            "chcur": null,
					            "chno3": null,
					            "spins": mainsur,
					            "sfpins": fasinsur,
					            "sprcur": null,
					            "smctr": msther,
					            "fcntr": father,
					            "hhcur": null,
					            "sfpcur": null,
					            "hccur": null,
					            "mccur": null,
					            "sfcur": null,
					            "mfcur": null,
					            "pncur": null,
					            "lteqf": ltffund,
					            "chedu": edufund,
					            "hahir": null,
					            "allty": null,
					            "mprcur": null,
					            "cecur": null,
					            "fccur": null,
					            "smcur": null,
					            "smpins": mosinsur,
					            "hacsh": null,
					            "pensn": null,
					            "spcur": null,
					            "mcntr": mother,
					            "mprins": moinsur,
					            "smpcur": null,
					            "sprctr": null,
					            "mfinv": rmffund,
					            "fprins": fainsur,
					            "sfctr": fsther,
					            "ltcur": null,
					            "fprcur": null,
					            "disch": null,
					            "eetax": null,
					            "immexp": null,
					            "dino1": disperson,
					            "hicur": null,
					            "lncur": null,
					            "immcur": null,
					            "turcur": null,
					            "imdat": null,
					            "turexm": null,
					            "hiexp": health,
					            "diall": null,
					            "lpnsn": oldfund,
					            "refex": null,
					            "itbld": null,
					            "preas": null,
					            "flag1": null,
					            "flag2": null,
					            "flag3": null,
					            "flag4": null,
					            "aedtm": aedat,
					            "itxex": null,
					            "ordex": null,
					            "uname": null,
					            "histo": null,
					            "rese2": null,
					            "rese1": null,
					            "grpvl": null,
					            pakey:{	pernr:pernr,
									subty:"0001",
									mandt:"120",
									begda:aedat,
									endda:aedat,
									objps:"",
									sprps:"",
									seqnr:""
					            }
						};
						
						json = JSON.stringify(json);
						
						var postpa0364 = {
								  "async": false,
								  "crossDomain": true,
								  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0364",
								  "method": "POST",
								  "headers": {
								    "Content-Type": "application/json",
								    "User-Agent": "PostmanRuntime/7.13.0",
								    "Accept": "*/*",
								    "Cache-Control": "no-cache",
								    
								    "Host": "10.121.3.62:8088",
								    "accept-encoding": "gzip, deflate",
								    //"content-length": "1013",
								    "Connection": "keep-alive",
								    "cache-control": "no-cache"
								  },
								  "processData": false,
								  "data": json
								}
						
						$.ajax(postpa0364).done(function (response) {
							console.log(response);
							
						});
						var dat = new Date();
						var y = dat.getFullYear();
						var m = (dat.getMonth()+1).toString().padStart(2,'0');
						var d = dat.getDate().toString().padStart(2,'0');
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRPYI02/"+y+"/"+m+"/"+d;
						$.ajax({
				        	type: "GET",
				        	url: url,
				        	async: false,
				        	success: function(data){
				        		console.log(data);
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
					}
					this.getRouter().navTo("Worklist");
					
				},
				onCancelPressed : function() {

					this.getRouter().navTo("myInfo");
					MessageToast.show("ยกเลิก");
				},

				onEditPressed : function() {
					MessageToast.show("Edit");
				},
				onSelectStatus : function() {
					var selectedKey = this.getView().byId("MarriageStatus")
							.getSelectedKey();
					if (selectedKey == "3") {
						this.getView().byId("insigniaIdSection").setVisible(
								true);
					}

				},
				onSelectChild : function() {
					var selectedKey = this.getView().byId("NoChildren")
							.getSelectedKey();
					if (selectedKey != "none") {
						this.getView().byId("childSection").setVisible(true);
					}

				},
				onConfirmDialog: function () {
					var dialog = new Dialog({
						title: '',
						type: 'Message',
						content: [
							new HorizontalLayout({
								content: [
									new VerticalLayout({
										content: [
											new Text({ text: 'ขอรับรองว่ารายการที่แสดงไว้เป็นความจริงทุกประการ', textAlign: "Center"}).addStyleClass("dialog_header"),
											new Label({ text: '(หากบันทึกหลังจากวันที่ 14 ของเดือน ข้อมูลการลดหย่อนจะมีผลในการคำนวนภาษีในเดือนถัดไป)' })
										]
									})
								]
							})
						],
						beginButton: new Button({
							text: 'ยอมรับ',
							press: function () {
								var sText = sap.ui.getCore().byId('confirmDialogTextarea').getValue();
								MessageToast.show('Note is: ' + sText);
								dialog.close();
							}
						}),
						endButton: new Button({
							text: 'ไม่ยอมรับ',
							press: function () {
								dialog.close();
							}
						}),
						afterClose: function() {
							dialog.destroy();
						}
					});

					dialog.open();
				},

			});
});