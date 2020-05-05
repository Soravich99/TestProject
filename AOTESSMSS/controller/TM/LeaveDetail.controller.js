sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter',
	'sap/m/Dialog',
	'sap/m/Button',
	'sap/m/Text'
], function (BaseController, MessageToast, JSONModel, Fragment, Controller, Filter,Dialog,Button,Text) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TM.LeaveDetail", {

		onInit: function () {
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
			
			this.getView().setModel(new JSONModel(t554s),"leaveItem");
			
			var oViewModel = new JSONModel({
					currentUser: "Administrator",
					lastLogin: new Date(Date.now() - 86400000)
				});

			this.setModel(oViewModel, "view");
			this.getView().setModel(oModelTypes);
			
			var cal = this.byId("date_from");
			
			this.getView().byId("deligateTab").setVisible(false);
		},
		onBeforeRendering: function() {
			//this.byId('ins').setModel(this.jModel);	
			//this.byId('leaveHistoryTable').setModel(this.jModel);	
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
		onDateCon(value){
			var dt = value.split("/");
			
			return [dt[2],dt[1],dt[0]].join("");
		},
		onSendPressed: function () {
			
			var qt = '"';
			
			var p7;
			var pa2001 = new JSONModel();
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var err;
			
			var pernr = this.byId("PERNR").getText();
			var leavetype = this.byId("leaveType").getSelectedItem();
			var dsr1_from = this.byId("date_from").getValue();
			var dsr1_to = this.byId("date_to").getValue();
			var reason = this.byId("lreason").getValue();
			var contact = this.byId("lcontact").getValue();
			var selectTime = this.byId("selectTime").getSelectedItem().getText();
			var leaveHalfTime = this.byId("leaveHalfTime").getValue();
			var leaveAmt = this.byId("leaveAmt").getText();
			var script = 'leavetype:'+leavetype.getKey()+',drs_from:'+dsr1_from+',drs_to:'+dsr1_to+',reason:'+reason+',contact:'+contact+',pernr:'+pernr;
				script = script + ",leaveHalfTime:"+leaveHalfTime+",selectTime:"+selectTime+",leaveAmt:"+leaveAmt;
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TM' + year + month + '/01';
			var year_budish = (year + 0).toString().substring(2,4);
			if(reason.length == 0 ){
				MessageToast.show("ไม่ระบุสาเหตุการลา");
			}
			else if(leaveHalfTime.includes("undefined") == true || leaveHalfTime == ""){
				MessageToast.show("ไม่พบตารางเวลาไม่สามารถลาได้");
			}else if(leaveAmt.includes("NaN") == true){
				MessageToast.show("ไม่พบตารางเวลาไม่สามารถลาได้");
			}else{
				
				var date_from = this.byId("date_from").getValue().split("/");
				
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0007/"+pernr+"/"+date_from[2]+"/"+date_from[1]+"/"+date_from[0],
		        	async: false,
		        	success: function(data){
		        		p7 = data.List[0];
		        		
		        	},
		        	error: function(){
		        		p7 = "X";
		        	}
		        });
				var s;
				var e;
				if(p7 != "X" && p7 != undefined){
					if(selectTime.includes("เต็ม") == true){
						s = p7.sobeg;
						e = p7.soend;
					}else if(selectTime.includes("เช้า") == true){
						s = "080000";
						e = "120000";
					}else{
						s = "130000";
						e = "170000";
					}
				}
				var user = jQuery.sap.getUriParameters().get("user").toString().padStart(8,'0');
				
				var datas = {"PERNR":user,"FROM_DATE":this.onDateCon(dsr1_from),"TO_DATE":this.onDateCon(dsr1_to),"START_TIME":s,"END_TIME":e,"LEAVE_TYPE":leavetype.getKey(),"SPPE2":this.onDateCon(dsr1_from),"ZZREASON":"ttttt","ZZCONTACT":"1112","ACTIO":"I"}
				
				var res;
				var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
				var settings = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://pocdeqapp.airportthai.co.th:51000/RESTAdapter/HRTMI03_130",
						  "method": "POST",
						  "timeout": 0,
						  "headers": {
						    "Content-Type": ["application/json", "application/json"],
						    "Authorization": "Basic UElfV1NfRVNTOkFPVGVzc0AxOQ==",
						  },
						  "data": JSON.stringify(datas),
						};
	
						$.ajax(settings).done(function (response) {
						  res = response;
						  console.log(response);
						});
				
						
				if(res.LOG.MSGTY == "E"){
					MessageToast.show(res.LOG.MSGTX);
				}else if(res.QUOTA_USED == "0.00"){
					MessageToast.show("ไม่สามารถลา 0 วัน");
				}else{	
					var date_back_err = "";
					var over_ess_err = "";
					var back_60 = "";
					if(leavetype.getKey() != "1001" && leavetype.getKey() != "1101" && leavetype.getKey() != "1004"){
						var ct = new Date();
						var cd = ct.getDate().toString().padStart(2,'0');
						var cm = (ct.getMonth()+1).toString().padStart(2,'0');
						var cy = ct.getFullYear();
						var cf = [cd,cm,cy].join("/");
						var ss = dsr1_from.split("/");
						var df = new Date(([ss[2],ss[1],ss[0]].join("-")+"T16:59:59.000"));
						if(df < ct){
							date_back_err = "X";
						}
						
					}else{
						var ct = new Date();
						
						var cf = [cd,cm,cy].join("/");
						var ss = dsr1_from.split("/");
						var df = new Date([ss[2],ss[1],ss[0]].join("-"));
						var date_diff = ct.getTime() - df.getTime();
						var total = Math.ceil(date_diff / (1000 * 3600 * 24));
						if(total > 60 ){
							back_60 = "X";
						}
						
					}
					
					if(leavetype.getKey() == "1001"){
						if(parseFloat(res.QUOTA_USED) > 60 ){
							over_ess_err = "X";
						}
					}else if(leavetype.getKey() == "1003"){
						if(parseFloat(res.QUOTA_USED) > 15 ){
							over_ess_err = "X";
						}
					}
					
					if(over_ess_err == "X"){
						MessageToast.show("จำวนวนวันเกินที่กำหนด");
					}else if(back_60 == "X"){
						MessageToast.show("ลาย้อนหลังได้ไม่เกิน 60 วัน");
					}else if(date_back_err == "X"){
						MessageToast.show("ประเภทการลาไม่สามารถลาย้อนหลังได้");
					}else{
					
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
										dotyp : '01',
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
						
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TM' + year + month + '/01';
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
						
						var docid = dcrun.curid;
						json = dchead;
						json.docid = docid;
						json.module = 'TM';
						json.header = leavetype.getText();
						
						var ndate = dsr1_from.split("/");
						var d = ndate[0];
						var m = ndate[1];
						var y = ndate[2];
						
						json.bedat = [y,m,d].join("-");
						
						var ndate = dsr1_to.split("/");
						var d = ndate[0];
						var m = ndate[1];
						var y = ndate[2];
						
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
						
						json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa2001"}';
						
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
						
						
						var file = this.getView().byId("fileUpload").oFileUpload.files;
						if(file.length > 0){
							var fname = file[0].name;
							var period = fname.lastIndexOf('.');
							var pluginName = fname.substring(0, period);
							var fileExtension = fname.substring(period + 1);
							var curfile = file[0];
							var indexitem = "0001";
							var base64;
							var reader = new FileReader();
							    reader.readAsDataURL(curfile);
							    reader.onload = function () {
							    	base64 = reader.result.split(",");
							    	console.log(reader.result);
							  
							    	var data = window.atob(base64[1]);
							    	
							    	var json = '{"attachKey":{"docid":"'+docid+'","xyear":"'+year+'","seqnr":"'+indexitem+'"},"xdata":"'+base64[1]+'","xname":"'+pluginName+'","xtype":"'+fileExtension+'"}';
									
									console.log(json);
									
									var settings = {
											  "async": false,
											  "crossDomain": true,
											  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tbl_Docattach/",
											  "method": "POST",
											  "headers": {
											    "Content-Type": "application/json",
											    "Accept": "*/*",
											    "Cache-Control": "no-cache",
											    "Host": "10.121.3.62:8083",
											    "accept-encoding": "gzip, deflate",
											    "Connection": "keep-alive",
											    "cache-control": "no-cache"
											  },
											  "processData": false,
											  "data": json
											}
				
									$.ajax(settings).done(function (response) {
									  console.log(response);
									  
									});
							    	
							    	
							    };
						}
						
						this.getRouter().navTo("MyInfo");
						MessageToast.show("บันทึกคำขอเรียบร้อยแล้ว สามารถตรวจสอบสถานะได้จากเมนู ตรวจสอบการลา");
					}
				}
			}
		},
		
		onCancelPressed: function () {
			this.getRouter().navTo("MyInfo");
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
		onChangeDate: function(){
			
			var dt = this.byId("date_from").getValue().split("/");
			var leavetype = this.byId("leaveType").getSelectedItem().getKey();
			var selectTime = this.byId("selectTime").getSelectedItem().getText();
			var date_from = new Date([dt[2],dt[1],dt[0]].join("-"));
			var y = date_from.getFullYear().toString();
			var m = (date_from.getMonth() + 1).toString().padStart(2,'0');
			var d = date_from.getDate().toString().padStart(2,'0');
			var p = this.byId("PERNR").getText();
			var p7;
			var s;
			var e;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0007/"+p+"/"+y+"/"+m+"/"+d,
	        	async: false,
	        	success: function(data){
	        		p7 = data.List[0];
	        		
	        	},
	        	error: function(){
	        		p7 = "X";
	        	}
	        });
			if(p7 != "X" && p7 != undefined){
				if(p7.tprog == "NORM"){
					if(selectTime.includes("เต็ม") == true){
						s = p7.sobeg;
						e = p7.soend;
					}else if(selectTime.includes("เช้า") == true){
						s = "080000";
						e = "120000";
					}else{
						s = "130000";
						e = "170000";
					}
					
					var sFrom = new Date(this.byId("date_from").getValue());
					var sTo = new Date(this.byId("date_to").getValue());
					
					if(sFrom.getTime() != sTo.getTime()){
						this.byId("selectTime").setSelectedKey("1");
						this.byId("selectTime").setEnabled(false);	
					}
					else{				
						this.byId("selectTime").setEnabled(true);
					}
					
				}else{
					s = p7.sobeg;
					e = p7.soend;
					this.byId("selectTime").setSelectedKey("1");
					this.byId("selectTime").setEnabled(false);	
				}
			}
			
			
			this.byId("leaveHalfTime").setValue(s+" - "+e);
			
			var user = jQuery.sap.getUriParameters().get("user").toString().padStart(8,'0');
			
			var datas = {"PERNR":user,"FROM_DATE":this.onDateCon(this.byId("date_from").getValue()),"TO_DATE":this.onDateCon(this.byId("date_to").getValue()),"START_TIME":s,"END_TIME":e,"LEAVE_TYPE":leavetype,"SPPE2":this.onDateCon(this.byId("date_from").getValue()),"ZZREASON":"ttttt","ZZCONTACT":"1112","ACTIO":"I"}
			
			var res;
			var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://pocdeqapp.airportthai.co.th:51000/RESTAdapter/HRTMI03_130",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
					    "Content-Type": ["application/json", "application/json"],
					    "Authorization": "Basic UElfV1NfRVNTOkFPVGVzc0AxOQ==",
					  },
					  "data": JSON.stringify(datas),
					};

					$.ajax(settings).done(function (response) {
					  res = response;
					  console.log(response);
					});
			
			if(p7 != "X" && p7 != undefined){
				s = (p7.sobeg.substring(0, 2)+":"+p7.sobeg.substring(2, 4));
				e = (p7.soend.substring(0, 2)+":"+p7.soend.substring(2, 4));
			}
			this._iEvent++;


			var diff = new Date(sTo.getTime() - sFrom.getTime());
				
			this.getView().byId("leaveAmt").setText(res.QUOTA_USED + " วัน");
			var ltime = this.byId("selectTime").getSelectedItem().getKey();
			if(ltime != "1"){
				this.getView().byId("leaveAmt").setText("0.5  วัน");
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
			
		},
		
		onChangeTime:function(){
//			var selected = this.getView().byId("selectTime").getSelectedItems();
//			console.log(selected.val());
			var dt = this.byId("date_from").getValue().split("/");
			var leavetype = this.byId("leaveType").getSelectedItem().getKey();
			var selectTime = this.byId("selectTime").getSelectedItem().getText();
			var date_from = new Date([dt[2],dt[1],dt[0]].join("-"));
			var y = date_from.getFullYear().toString();
			var m = (date_from.getMonth() + 1).toString().padStart(2,'0');
			var d = date_from.getDate().toString().padStart(2,'0');
			var p = this.byId("PERNR").getText();
			var p7;
			var s;
			var e;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0007/"+p+"/"+y+"/"+m+"/"+d,
	        	async: false,
	        	success: function(data){
	        		p7 = data.List[0];
	        		
	        	},
	        	error: function(){
	        		p7 = "X";
	        	}
	        });
			if(p7 != "X" && p7 != undefined){
				if(selectTime.includes("เต็ม") == true){
					s = p7.sobeg;
					e = p7.soend;
				}else if(selectTime.includes("เช้า") == true){
					s = "080000";
					e = "120000";
				}else{
					s = "130000";
					e = "170000";
				}
			}
			
			
			this.byId("leaveHalfTime").setValue(s+" - "+e);
			
			var user = jQuery.sap.getUriParameters().get("user").toString().padStart(8,'0');
			
			var datas = {"PERNR":user,"FROM_DATE":this.onDateCon(this.byId("date_from").getValue()),"TO_DATE":this.onDateCon(this.byId("date_to").getValue()),"START_TIME":s,"END_TIME":e,"LEAVE_TYPE":leavetype,"SPPE2":this.onDateCon(this.byId("date_from").getValue()),"ZZREASON":"ttttt","ZZCONTACT":"1112","ACTIO":"I"}
			
			var res;
			var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://pocdeqapp.airportthai.co.th:51000/RESTAdapter/HRTMI03_130",
					  "method": "POST",
					  "timeout": 0,
					  "headers": {
					    "Content-Type": ["application/json", "application/json"],
					    "Authorization": "Basic UElfV1NfRVNTOkFPVGVzc0AxOQ==",
					  },
					  "data": JSON.stringify(datas),
					};

					$.ajax(settings).done(function (response) {
					  res = response;
					  console.log(response);
					});
			
			if(p7 != "X" && p7 != undefined){
				s = (p7.sobeg.substring(0, 2)+":"+p7.sobeg.substring(2, 4));
				e = (p7.soend.substring(0, 2)+":"+p7.soend.substring(2, 4));
			}
			
			var sFrom = new Date(this.byId("date_from").getValue());
			var sTo = new Date(this.byId("date_to").getValue());
			
			if(sFrom.getTime() != sTo.getTime()){
				this.byId("selectTime").setSelectedKey("1");
				this.byId("selectTime").setEnabled(false);	
			}
			else{				
				this.byId("selectTime").setEnabled(true);
			}

			var diff = new Date(sTo.getTime() - sFrom.getTime());
				
			this.getView().byId("leaveAmt").setText(res.QUOTA_USED + " วัน");
			var ltime = this.byId("selectTime").getSelectedItem().getKey();
			if(ltime != "1"){
				this.getView().byId("leaveAmt").setText("0.5  วัน");
			}
			
//			var xtime = this.byId("selectTime").getSelectedItem();
//			
//			var sFrom = new Date(this.byId("date_from").getValue());
//			var sTo = new Date(this.byId("date_to").getValue());
//			if(sFrom != null ){
//				if(sFrom.getTime() != sTo.getTime()){
//					this.byId("selectTime").setSelectedKey("1");
//					this.byId("selectTime").setEnabled(false);	
//				}
//				else{				
//					this.byId("selectTime").setEnabled(true);
//				}
//	
//				var diff = new Date(sTo.getTime() - sFrom.getTime());
//					
//				this.getView().byId("leaveAmt").setText(diff.getUTCDate() + " วัน");
//				if(selected == "ครึ่งเช้า"){
//					this.getView().byId("leaveAmt").setText("0.5  วัน");
//				}else if(selected == "ครึ่งบ่าย"){
//					this.getView().byId("leaveAmt").setText("0.5  วัน");
//				}else{
//					this.byId("leaveHalfTime").setValue(s+" - "+e);
//				}
//
//			}
			

		},
		
		onChangeLeaveType:function(){
			
			
			//this.byId("leaveQuota").setText("14");
			
		},
		onClickSend:function(){
			
			var those = this;
			
			var dialog = new Dialog({
				title: 'ยืนยัน',
				type: 'Message',
				content: new Text({ text: 'กรุณากด ยืนยัน เพื่อส่งใบลาไปยังผู้อนุมัติ' }),
				beginButton: new Button({
					text: 'ยืนยัน',
					press: function () {
						those.getRouter().navTo("worklist");
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'ยกเลิก',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			
			var errDialog = new Dialog({
				title: 'กรอกข้อมูลไม่ครบถ้วน',
				type: 'Message',
				state: 'Error',
				content: new Text({
					text: 'กรุณากรอกข้อมูลที่มี * ให้ครบถ้วน'
				}),
				beginButton: new Button({
					text: 'ตกลง',
					press: function () {
						errDialog.close();
					}
				}),
				afterClose: function() {
					errDialog.destroy();
				}
			});
			
			if(!those.byId("DRS1").getValue()){
				errDialog.open();
			}else{
				dialog.open();
			}

			
		}

	});
});