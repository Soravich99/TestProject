sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast, JSONModel, Fragment, Controller, Filter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TM.OtRequest", {

		onInit: function () {
			
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
			
	        if(titel == " "){
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
			
			var modules = [{"ModuleId": "1","ModuleName": "อนุมัติการลา"},
			               {"ModuleId": "2","ModuleName": "อนุมัติการแทนเวร"},
			               {"ModuleId": "3","ModuleName": "อนุมัติการแทนกะ"}];
			
			// initial table
			this._data = {
					Diligator : [
					            
					            { diligator : 'อดิศักดิ์ ไกรศร' , module : modules, dateFrom : '10/09/2018', dateTo : '20/09/2018'},
					            { diligator : 'สุรชัย ตั้งจิต' , module : modules, dateFrom : '10/09/2018', dateTo : '20/09/2018'}
					            ],
		            LeaveHistory : [
						            
					            { leaveType : 'ลาป่วย' , startDate : '10/06/2018', endDate : '14/06/2018', status : 'อนุมัติ'},
					            { leaveType : 'ลาพักผ่อน' , startDate : '10/07/2018', endDate : '12/07/2018', status : 'ยกเลิก'},
					            { leaveType : 'ลาพักผ่อน' , startDate : '20/07/2018', endDate : '24/07/2018', status : 'อนุมัติ'},
					            { leaveType : 'ลาพักผ่อน' , startDate : '05/09/2018', endDate : '10/09/2018', status : 'รออนุมัติ'}
					            ]
				};
			this.jModel = new sap.ui.model.json.JSONModel();
			this.jModel.setData(this._data);
			
			var oModelTypes = new JSONModel("model/leaveTypes.json");
			
			var oViewModel = new JSONModel({
					currentUser: "Administrator",
					lastLogin: new Date(Date.now() - 86400000)
				});

			this.setModel(oViewModel, "view");
			this.getView().setModel(oModelTypes);
			
			var dcrun = new JSONModel();
			var err = "";
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TM' + year + month + '/04';
			var year_budish = (year + 0).toString().substring(2,4);
			var dataPA = $.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		dcrun = data;
	        		
	        	},
	        	error: function(){
	        		err = "X";
	        	}
	        });
			
			if(err == "X"){
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/';
				
				var data = {
						dockey : {
							dotyp : '04',
							module : 'TM'+year+month
						},
						curid : "",
						curno : 0,
						maxno : 999999,
						minno : 1,
				};
				
				data = JSON.stringify(data);
				
				var putdcrun = {
						  "async": false,
						  "crossDomain": true,
						  "url": url,
						  "method": "POST",
						  "headers": {
						    "Content-Type": "application/json",
						    
						    "Accept": "*/*",
						    "Cache-Control": "no-cache",
						    
						    "Host": "10.121.3.62:8088",
						    "accept-encoding": "gzip, deflate",
						    //"content-length": "1013",
						    "Connection": "keep-alive",
						    "cache-control": "no-cache"
						  },
						  "processData": false,
						  "data": data
						}
				
				$.ajax(putdcrun).done(function (response) {
					console.log(response);
					dcrun = response;
				});
			}
			
			var json = dcrun.tblDocrunning;
			var curid = json.curid;
			json.curno = json.curno + 1;
			json.curid = 'TM' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
			
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TM' + year + month + '/04';
			json = JSON.stringify(json);
			
			var putdcrun = {
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
					  "data": json
					}
			
			$.ajax(putdcrun).done(function (response) {
				console.log(response);
				dcrun = response.tblDocrunning;
			});
			
			this.getView().byId("docno").setValue("OTI/"+dcrun.curid);
			
//			this.getView().byId("deligateTab").setVisible(false);
		},
		onBeforeRendering: function() {
//			this.byId('ins').setModel(this.jModel);	
//			this.byId('leaveHistoryTable').setModel(this.jModel);	
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
		handleChange: function(){
			var beguz = this.getView().byId("BEGUZ").getDateValue();
			var enduz = this.getView().byId("ENDUZ").getDateValue();
			if(enduz == null){enduz = beguz}
			var sDate = new Date(beguz);
	        var eDate = new Date(enduz);
	        var diff = Math.abs(eDate.getTime() - sDate.getTime());
	        var diffD = Math.ceil(diff / (1000 * 3600));
			
			this.getView().byId("totHr").setValue(diffD);
			
		},
		onSendPressed: function () {
			
			var qt = '"';
			
			var pernr = this.getView().byId("PERNR").getText();
			var date = new Date();
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			
			var pa2001 = new JSONModel();
			var p7 = new JSONModel();
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var err;

			var dtp1 = this.getView().byId("DTP1").getValue();
			var beguz = this.getView().byId("BEGUZ").getDateValue();
			var enduz = this.getView().byId("ENDUZ").getDateValue();
			var as = this.getView().byId("as").getSelected();
	        var er = this.getView().byId("er").getSelected();
	        var tothr = this.getView().byId("totHr").getValue();
	        var docno = this.getView().byId("docno").getValue();
	        var note = this.getView().byId("note").getValue();
	        if(enduz == null){enduz = beguz}
			
	        if(docno == ""){
	        	MessageToast.show("Please input all require fields");
	        }else{
		        var sdate = dtp1.split("/");
		        
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0007/"+pernr+"/"+sdate[2]+"/"+sdate[1]+"/"+sdate[0],
		        	async: false,
		        	success: function(data){
		        		p7 = data.List[0];
		        		
		        	},
		        	error: function(){
		        		p7 = "X";
		        	}
		        });
		        
		        var err_tim = "";
		        
		        var h = beguz.getHours().toString().padStart(2,'0');
		        var m = beguz.getMinutes().toString().padStart(2,'0');
		        var s = beguz.getSeconds().toString().padStart(2,'0');
		        
		        var st = parseInt(p7.sobeg);
		        var et = parseInt(p7.soend);
		        var ct = parseInt([h,m,s].join(""));
		        
		        if(ct < et && ct > st){
		        	err_tim = "X";
		        }
		        
		        
		        var h = enduz.getHours().toString().padStart(2,'0');
		        var m = enduz.getMinutes().toString().padStart(2,'0');
		        var s = enduz.getSeconds().toString().padStart(2,'0');
		        
		        var st = parseInt(p7.sobeg);
		        var et = parseInt(p7.soend);
		        var ct = parseInt([h,m,s].join(""));
		        
		        if(ct < et && ct > st){
		        	err_tim = "X";
		        }
		        
		        if(err_tim == "X"){
		        	MessageToast.show("ไม่สามารถขอล่วงเวลาในช่วงเวลาทำงานได้");
		        }else if(as == true){
		        	MessageToast.show("ขอโอทีไม่สามารถรวมเวลาพักได้");
		        }else{
		        
					var year = new Date().getFullYear();
					var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
//					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TM' + year + month + '/04';
//					var year_budish = (year + 0).toString().substring(2,4);
//					var dataPA = $.ajax({
//			        	type: "GET",
//			        	url: url,
//			        	async: false,
//			        	success: function(data){
//			        		dcrun = data;
//			        		
//			        	},
//			        	error: function(){
//			        		err = "X";
//			        	}
//			        });
//					
//					if(err == "X"){
//						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/';
//						
//						var data = {
//								dockey : {
//									dotyp : '04',
//									module : 'TM'+year+month
//								},
//								curid : "",
//								curno : 0,
//								maxno : 999999,
//								minno : 1,
//						};
//						
//						data = JSON.stringify(data);
//						
//						var putdcrun = {
//								  "async": false,
//								  "crossDomain": true,
//								  "url": url,
//								  "method": "POST",
//								  "headers": {
//								    "Content-Type": "application/json",
//								    
//								    "Accept": "*/*",
//								    "Cache-Control": "no-cache",
//								    
//								    "Host": "10.121.3.62:8088",
//								    "accept-encoding": "gzip, deflate",
//								    //"content-length": "1013",
//								    "Connection": "keep-alive",
//								    "cache-control": "no-cache"
//								  },
//								  "processData": false,
//								  "data": data
//								}
//						
//						$.ajax(putdcrun).done(function (response) {
//							console.log(response);
//							dcrun = response;
//						});
//					}
//					
//					var json = dcrun.tblDocrunning;
//					var curid = json.curid;
//					json.curno = json.curno + 1;
//					json.curid = 'TM' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
//					
//					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TM' + year + month + '/04';
//					json = JSON.stringify(json);
//					
//					var putdcrun = {
//							  "async": false,
//							  "crossDomain": true,
//							  "url": url,
//							  "method": "PUT",
//							  "headers": {
//							    "Content-Type": "application/json",
//							    "User-Agent": "PostmanRuntime/7.13.0",
//							    "Accept": "*/*",
//							    "Cache-Control": "no-cache",
//							    
//							    "Host": "10.121.3.62:8088",
//							    "accept-encoding": "gzip, deflate",
//							    //"content-length": "1013",
//							    "Connection": "keep-alive",
//							    "cache-control": "no-cache"
//							  },
//							  "processData": false,
//							  "data": json
//							}
//					
//					$.ajax(putdcrun).done(function (response) {
//						console.log(response);
//						dcrun = response.tblDocrunning;
//					});
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/template",
			        	async: false,
			        	success: function(data){
			        		dchead = data.tblDocheader;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        }); 
					
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
					
					var doc = this.getView().byId("docno").getValue().split("/");
					
					var docid = doc[doc.length - 1];
					var json = dchead;
					json.docid = docid;
					json.module = 'TM';
					json.header = 'ขออนุมัติโอที';
					json.bedat = [y,m,d].join("-");
					json.aedat = [y,m,d].join("-");
					json.pernr = parseInt(pa.paPos.manag).toString();
					json.userad = pernr;
					json.status = "2";
					json.sttext = "รออนุมัติ";
					json = JSON.stringify(json);
					
					var postdchead = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader",
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
					
					$.ajax(postdchead).done(function (response) {
						console.log(response);
						dchead = response.tblDocheader;
					});
					docno = "OTI/"+docid;
					var script = "pernr:"+pernr+",dtp1:"+dtp1+",beguz:"+beguz+",enduz:"+enduz+",as:"+as+",er:"+er+",tothr:"+tothr+",docno:"+docno+",note:"+note;
					
					json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa2010"}';
					
					var postdcdetail = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail",
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
					
					$.ajax(postdcdetail).done(function (response) {
						console.log(response);
						dcdetail = response.tblDocdetail;
					});
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docid,
			        	async: false,
			        	success: function(data){
			        		dcdetail = data.tblDocdetail;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        }); 
					
					
		//			var json = {
		//					docno : "OTI/"+pernr+"/"+m+"/"+y+"/"+d,
		//					aedtm : [y,m,d].join("-"),
		//					approved : 0,
		//					begda : [y,m,d].join("-"),
		//					beguz : "00:00:00.000",
		//					conf : "X",
		//					del : "",
		//					desc1 : "คำขอโอที",
		//					docdat : [y,m,d].join("-"),
		//					doctyp : "OTI",
		//					endda : "9999-12-31",
		//					enduz : "00:00:00.000",
		//					fictr : pernr,
		//					objid : pernr,
		//					paid : "",
		//					pending : "",
		//					ref1 : "",
		//					ref2 : "",
		//					request : "",
		//					status : "",
		//					uname : pernr,
		//					webkey : "OTI"+pernr+m+y+d,
		//					mandt : ""
		//			}
		//			
		//			json = JSON.stringify(json);
		//			
		//			var postDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRTME01_HEADER";
		//			var postOThead = {
		//					  "async": false,
		//					  "crossDomain": true,
		//					  "url": postDocurl,
		//					  "method": "POST",
		//					  "headers": {
		//					    "Content-Type": "application/json",
		//					    "User-Agent": "PostmanRuntime/7.13.0",
		//					    "Accept": "*/*",
		//					    "Cache-Control": "no-cache",
		//					    
		//					    "Host": "10.121.3.62:8088",
		//					    "accept-encoding": "gzip, deflate",
		//					    //"content-length": "1013",
		//					    "Connection": "keep-alive",
		//					    "cache-control": "no-cache"
		//					  },
		//					  "processData": false,
		//					  "data": json
		//					}
		//			
		//			$.ajax(postOThead).done(function (response) {
		//				console.log(response);
		//			});
		//			
		//			json = {
		//		            "beguz": "08:00:00.000",
		//		            "enduz": "18:00:00.000",
		//		            "pending": "0",
		//		            "fictr": pernr,
		//		            "request": "0",
		//		            "approved": "0",
		//		            "paid": "0",
		//		            "new_FICTR": "",
		//		            "zthrtmkey": {
		//		                "awart": "5000",
		//		                "docno": "OTI/"+pernr+"/"+m+"/"+y+"/"+d,
		//		                "begda": [y,m,d].join("-"),
		//		                "pernr": pernr
		//		            },
		//		            "kostl": pernr,
		//		            "webkey": "OTI"+pernr+m+y+d
		//		        }
		//			
		//			json = JSON.stringify(json);
		//			
		//			var postDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRTME01_OT/";
		//			var postOThead = {
		//					  "async": false,
		//					  "crossDomain": true,
		//					  "url": postDocurl,
		//					  "method": "POST",
		//					  "headers": {
		//					    "Content-Type": "application/json",
		//					    "User-Agent": "PostmanRuntime/7.13.0",
		//					    "Accept": "*/*",
		//					    "Cache-Control": "no-cache",
		//					    
		//					    "Host": "10.121.3.62:8088",
		//					    "accept-encoding": "gzip, deflate",
		//					    //"content-length": "1013",
		//					    "Connection": "keep-alive",
		//					    "cache-control": "no-cache"
		//					  },
		//					  "processData": false,
		//					  "data": json
		//					}
		//			
		//			$.ajax(postOThead).done(function (response) {
		//				console.log(response);
		//			});
					
					
					this.getRouter().navTo("MyInfo");
					
					
					MessageToast.show("บันทึกคำขอเรียบร้อยแล้ว สามารถตรวจสอบสถานะได้จากเมนู ตรวจสอบการลา");
		        }
	        }
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
			
			if(sItemPath === "ลาป่วย"){
				
			}
			
		},
		onChangeDate: function(oEvent){
			
			var sFrom = oEvent.getParameter("from");
			var sTo = oEvent.getParameter("to");
			var bValid = oEvent.getParameter("valid");

			this._iEvent++;

			var oDRS = oEvent.oSource;
			if (bValid) {
				oDRS.setValueState(sap.ui.core.ValueState.None);
				var diff = new Date(sTo.getTime() - sFrom.getTime());
				
				this.getView().byId("leaveAmt").setText(diff.getUTCDate() + " วัน");
			} else {
				oDRS.setValueState(sap.ui.core.ValueState.Error);
			}
		},
		deleteRow : function(oArg){
			var deleteRecord = oArg.getSource().getBindingContext().getObject();
			for(var i=0;i<this._data.Diligator.length;i++){
				if(this._data.Diligator[i] == deleteRecord )
						{
						//	pop this._data.Diligator[i] 
							this._data.Diligator.splice(i,1); //removing 1 record from i th index.
							this.jModel.refresh();
							break;//quit the loop
						}
			}
		},
		fetchRecords : function(oArg){
			
			//data will be in this._data.Diligator
			console.log(this._data.Diligator);
			
		},
		addRow: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog", this);
			}

			// Multi-select if required
			this._oDialog.setMultiSelect(true);
			this._oDialog.setRememberSelections(true);

			this.getView().addDependent(this._oDialog);

			// toggle compact style
//			jQuery.sap.syncStyleClass("sacUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
		},

		handleSearch: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("empName", sap.ui.model.FilterOperator.Contains, sValue);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},

		handleClose: function(oEvent) {
			
			var selectedNames;
			
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().empName; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			var modules = [{"ModuleId": "1","ModuleName": "อนุมัติการลา"},
			               {"ModuleId": "2","ModuleName": "อนุมัติการแทนเวร"},
			               {"ModuleId": "3","ModuleName": "อนุมัติการแทนกะ"}];
			
			var i;
			for (i = 0; i < selectedNames.length; i++) {
			    this._data.Diligator.push({diligator : selectedNames[i] ,module : modules});
			}
			
			this.jModel.refresh();//which will add the new record
			
		}

	});
});