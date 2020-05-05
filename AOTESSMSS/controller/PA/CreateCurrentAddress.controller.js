sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.PA.CreateCurrentAddress", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			var user = jQuery.sap.getUriParameters().get("user");
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
			
			var t005s
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T005S",
	        	async: false,
	        	success: function(data){
	        		t005s = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
	        
	        this.getView().setModel(new JSONModel(t005s),"stateItem");
			
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
			
			$.ajax({
				type: "GET",
				url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+pernr+"/2",
				async: false,
				success: function(data){
						pa0006 = data.List;
					},
						error: function(){
					 
					}
			});
			if (pa0006.length > 0){
				var aedtm = new Date(pa0006[0].aedtm);
					aedtm = aedtm.getDate().toString().padStart(2,'0')+"/"+(aedtm.getMonth()+1).toString().padStart(2,'0')+"/"+(aedtm.getFullYear())
				this.byId("BLDNG").setValue(pa0006[0].bldng);
				this.byId("HSNMR").setValue(pa0006[0].hsnmr);
				this.byId("ADR03").setValue(pa0006[0].adr03);
				this.byId("STRAS").setValue(pa0006[0].stras);
				this.byId("LOCAT").setValue(pa0006[0].locat);
				this.byId("CONKK").setValue(pa0006[0].conkk);
				this.byId("ORT02").setValue(pa0006[0].ort02);
				this.byId("STATE").setSelectedKey(pa0006[0].state);
				this.byId("ADR04").setValue(pa0006[0].adr04);
				this.byId("ADR03").setValue(pa0006[0].adr03);
				this.byId("FLOOR").setValue(pa0006[0].floor);
				this.byId("POSTA").setValue(pa0006[0].posta);
				this.byId("PSTLZ").setValue(pa0006[0].pstlz);
//				this.byId("AEDTM").setValue(aedtm);
			
			}
			
			this.setModel(oViewModel, "view");
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
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = this.getView().byId("PERNR").getText();
			var qt = '"';
			var pa0006 = new JSONModel();
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var pa0001;
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+pernr+"/2";

			var method = "";
			
			$.ajax({
				type: "GET",
				url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+pernr+"/2",
				async: false,
				success: function(data){
						pa0006 = data.List;
						method = "PUT";
					},
						error: function(){
					 
					}
			});
			
			if (pa0006.length <= 0){
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/template/1",
					async: false,
					success: function(data){
							pa0006 = data.List;
							method = "POST";
						},
							error: function(){
						 
						}
				});
			}
			
			
			var bldng = this.getView().byId("BLDNG").getValue();
			var adr03 = this.getView().byId("ADR03").getValue();
			var hsnmr = this.getView().byId("HSNMR").getValue();
			var stras = this.getView().byId("STRAS").getValue();
			var locat = this.getView().byId("LOCAT").getValue();
			var conkk = this.getView().byId("CONKK").getValue();
			var ort02 = this.getView().byId("ORT02").getValue();
			var state = this.getView().byId("STATE").getSelectedItem().getKey();
			var pstlz = this.getView().byId("PSTLZ").getValue();
			var adr04 = this.getView().byId("ADR04").getValue();
			var floor = this.getView().byId("FLOOR").getValue();
			var posta = this.getView().byId("POSTA").getValue();
			var aedtm = this.getView().byId("AEDTM").getValue();
			
			if(bldng.length == 0 || conkk.length == 0 || ort02.length == 0 || state.length == 0 || pstlz.length == 0 || aedtm.length == 0){
				MessageToast.show("Please input all require field");
			}else{
				
				var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/02';
				var year_budish = (year + 0).toString().substring(2,4); 
				var script = "";
				var err;
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
								dotyp : '02',
								module : 'PA'+year+month
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
				json.curid = 'PA' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
				
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/02';
				json = JSON.stringify(json);
				
				var putdcrun = {
						  "async": false,
						  "crossDomain": true,
						  "url": url,
						  "method": "PUT",
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_PA/"+pa0001.PA0001.werks,
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        }); 
				
				var docid = dcrun.curid;
				json = dchead;
				json.docid = docid;
				json.module = 'PA';
				json.header = "ขอเปลี่ยนแปลงที่อยู่ปัจจุบัน";
				json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
				json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
				json.pernr = "";
				json.userad = pernr;
				json.userch = pernr;
				json.status = "3";
				json.sttext = "อนุมัติ";
				json = JSON.stringify(json);
				
				var postdchead = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader",
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
						  "data": json
						}
				
				$.ajax(postdchead).done(function (response) {
					console.log(response);
					dchead = response.tblDocheader;
				});
				
				var json = pa0006[0];
				
				var begda = new Date();
				var endda = new Date(json.pakey.endda);
				var begs = [begda.getDate().toString().padStart(2,'0'),(begda.getMonth()+1).toString().padStart(2,'0'),begda.getFullYear()].join("/");
				var ends = [endda.getDate().toString().padStart(2,'0'),(endda.getMonth()+1).toString().padStart(2,'0'),endda.getFullYear()].join("/");
				if(aedtm == ""){
					aedtm = begda;
				}else{
					aedtm = aedtm.split("/");
					aedtm = [parseInt(aedtm[0]),aedtm[1],aedtm[2]].join("/");
				}
				
				json.pakey.pernr = pernr;
				json.pakey.subty = "2";
				json.pakey.begda = begs;
				json.pakey.endda = ends;
				json.bldng = bldng;
				json.hsnmr = hsnmr;
				json.stras = stras;
				json.locat = locat;
				json.conkk = conkk;
				json.ort02 = ort02;
				json.state = state;
				json.pstlz = pstlz;
				json.adr03 = adr03;
				json.adr04 = adr04;
				json.floor = floor;
				json.posta = posta;
				json.aedtm = aedtm;
				
				json = JSON.stringify(json);
				
				json = json.replace("}","");
				json = json.replace("{","");
				json = json.replace(/"/g,"");
				
				json = '{"docid":"'+docid+'","script":"'+json+'","stable":"pa0006"}';
				
				var postdcdetail = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail",
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
						  "data": json
						}
				
				$.ajax(postdcdetail).done(function (response) {
					console.log(response);
					dcdetail = response.tblDocdetail;
				});
				
				
//				if(method == "POST"){
//					url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/";
//				}else{
//					url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/"+pernr+"/";
//					url = url+json.pakey.subty;//+"/"+ends+"/"+begs+"/"+json.pakey.objps+"/"+json.pakey.sprps+"/"+json.pakey.seqnr;
//				}
//				
//				json = JSON.stringify(json);
//					
//				var settings = {
//						  "async": false,
//						  "crossDomain": true,
//						  "url": url,
//						  "method": method,
//						  "headers": {
//						    "Content-Type": "application/json",
//						    "Accept": "*/*",
//						    "Cache-Control": "no-cache",	
//						    "Host": "10.121.0.190:8083",
//						    "accept-encoding": "gzip, deflate",
//						    "Connection": "keep-alive",
//						    "cache-control": "no-cache"
//						  },
//						  "processData": false,
//						  "data": json
//						}
//				
//				$.ajax(settings).done(function (response) {
//					pa0006 = response;
//				});
				
				
				this.getRouter().navTo("myInfo");
				
				MessageToast.show("Saved");
			}
		},

		onCancelPressed: function () {
			this.getRouter().navTo("myInfo");
			MessageToast.show("ยกเลิก");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		}
			
		

	});
});