sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.CreateOtherBenefit", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			
//			Email.send({
//				Host: "smtp.airportthai.co.th",
//				To : 'teardragon@gmail.com',
//				From : "no-reply@airportthai.co.th",
//				Subject : "test",
//				Body : "test",
//				}).then(
//					message => alert("mail sent successfully")
//				);
			
			this.byId("recieveNoLabel").setVisible(false);
			this.byId("recieveNoInput").setVisible(false);
			this.byId("airportLabel").setVisible(false);
			this.byId("monthLabel").setVisible(false);
			this.byId("monthInput").setVisible(false);
			this.byId("airportInput").setVisible(false);
			this.byId("claimQuota").setValue("0.00");
			this.byId("ADDRESS").setVisible(false);
			this.byId("desc2Text").setVisible(false);
			this.byId("desc3Text").setVisible(false);
			this.byId("EffectiveDateInput").setVisible(false);
			this.byId("descTextBoxLabel").setVisible(false);
			this.byId("desc1Text").setVisible(false);
			this.byId("startDateLabel").setVisible(false);
			this.byId("startDateInput").setVisible(false);
			
			this.byId("yearLabel").setVisible(false);
			this.byId("yearInput").setVisible(false);
			this.byId("claimAmtLabel").setVisible(false);
			this.byId("claimAmtInput").setVisible(false);
			this.byId("descLabel").setVisible(false);
			this.byId("descInput").setVisible(false);
			
			
			// show/hide attachFile tab
			this.byId("attachFile1").setVisible(false);
			this.byId("attachFile2").setVisible(false);
			this.byId("attachFile3").setVisible(false);
			
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
	        
	        
	        var date = new Date();
	        var d = date.getDate().toString().padStart(2,'0');
	        var m = (date.getMonth() + 1).toString().padStart(2,'0');
	        var y = date.getFullYear();
	        
	        this.getView().byId("RQDAT").setValue([d,m,y].join("/"));
	        
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
			
			//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
			
			var thisyear = new Date().getFullYear();
			var data = {"List":[]};
			var year = {"List":[{"text":"","key":""},{"text":"","key":""}]};
			var cur = -1;
			for(var x= 0;x<year.List.length;x++){
				year.List[x].text = (thisyear + cur).toString();
				year.List[x].key = (thisyear + cur).toString();
				cur++;
				data.List[x] = year.List[x];
			}
			
			var thismonth = (new Date().getMonth() +1);
			
			this.getView().setModel(new JSONModel(year),"yearItem");
			
			this.byId("recieveNoLabel").setVisible(false);
			this.byId("recieveNoInput").setVisible(false);
			this.byId("airportLabel").setVisible(false);
			this.byId("monthLabel").setVisible(false);
			this.byId("monthInput").setVisible(false);
			this.byId("airportInput").setVisible(false);
			this.byId("startDateLabel").setVisible(false);
			this.byId("startDateInput").setVisible(false);
			this.byId("claimAllInput").setVisible(false);
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
			var pernr = user;
			
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var err;
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/04';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var selected = this.byId("selectType").getSelectedItem().getText();
			var err_req = "";
			if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
				var file = this.getView().byId("file01").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file02").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file03").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				
			}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
				var file = this.getView().byId("file07").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file08").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file09").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				
			}else if(selected == "ค่าเช่าบ้าน"){
				
				var file = this.getView().byId("file05").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				
				
			}else{
				var file = this.getView().byId("file07").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file08").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file09").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				
				
			}
			
			if(err_req == "X"){
				
				MessageToast.show("Please input all require fields");
				
			}else{
			
				var pernr = this.byId("PERNR").getText();
				var dcid = this.getView().byId("RQUST").getValue();
				if(dcid == ""){
				
					var dataPA = $.ajax({
			        	type: "GET",
			        	url: 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/04',
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
									module : 'BE'+year+month
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
					json.curid = 'BE' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/04';
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
					
					var docid = dcrun.curid;
					
				}else{
					var docid = dcid;
				}
				
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
				var wf;
				var pa0001;
				
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
				
				var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
				if(selectType == "ค่าเช่าบ้าน"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/10",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอเบิกสวัสดิการอื่นๆ";
					json.ltext1 = selectType;
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.pernr = "";
					json.userad = pernr;
					json.status = "1";
					json.sttext = "บันทึก";
					json = JSON.stringify(json);
					
				}else if(selectType == "ค่าภัยพิบัติ"){
					
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
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/13",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(pernr == parseInt(pa.paPos.upman).toString()){
						json = dchead;
						json.orgeh = wf.List[0].org1;
						json.docid = docid;
						json.module = 'BE';
						json.header = "ขอเบิกสวัสดิการอื่นๆ";
						json.ltext1 = selectType;
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = "";
						json.userad = pernr;
						json.status = "1";
						json.sttext = "บันทึก";
						json = JSON.stringify(json);
					}else if(pernr == parseInt(pa.paPos.manag).toString()){
						
						var pa0001;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+parseInt(pa.paPos.manag).toString(),
				        	async: false,
				        	success: function(data){
				        		pa0001 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						

						if(parseInt(pa0001.PA0001.persk) < 9){
							json = dchead;
							json.orgeh = "";
							json.docid = docid;
							json.module = 'BE';
							json.header = "ขอเบิกสวัสดิการอื่นๆ";
							json.ltext1 = selectType;
							json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.pernr = parseInt(pa.paPos.upman).toString();
							json.userad = pernr;
							json.status = "1";
							json.sttext = "บันทึก";
							json = JSON.stringify(json);
						}else{
							
							json = dchead;
							json.orgeh = wf.List[0].org1;;
							json.docid = docid;
							json.module = 'BE';
							json.header = "ขอเบิกสวัสดิการอื่นๆ";
							json.ltext1 = selectType;
							json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.pernr = "";
							json.userad = pernr;
							json.status = "1";
							json.sttext = "บันทึก";
							json = JSON.stringify(json);
							
						}
						
						
						
					}else{
						json = dchead;
						json.orgeh = "";
						json.docid = docid;
						json.module = 'BE';
						json.header = "ขอเบิกสวัสดิการอื่นๆ";
						json.ltext1 = selectType;
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = parseInt(pa.paPos.manag).toString();
						json.userad = pernr;
						json.status = "1";
						json.sttext = "บันทึก";
						json = JSON.stringify(json);
					}
					
				}else {
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/9",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอเบิกสวัสดิการอื่นๆ";
					json.ltext1 = selectType;
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.pernr = "";
					json.userad = pernr;
					json.status = "1";
					json.sttext = "บันทึก";
					json = JSON.stringify(json);
					
				}
				
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
				
				
				var rqust = dcrun.curid;
				var rqdat = this.getView().byId("RQDAT").getValue();
				var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
				var address = this.getView().byId("ADDRESS").getValue();
				
				var desc1Text = this.getView().byId("desc1Text").getValue();
				var desc2Text = this.getView().byId("desc2Text").getValue();
				var desc3Text = this.getView().byId("desc3Text").getValue();
				if(this.getView().byId("airportInput").getVisible() == true){
					var airportInput = this.getView().byId("airportInput").getValue();
				}else{
					var airportInput;
				}
				var startDateInput = this.getView().byId("startDateInput").getValue();
				var EffectiveDateInput = this.getView().byId("EffectiveDateInput").getValue();
				
				var recieveNoInput = this.getView().byId("recieveNoInput").getValue();
				if(this.getView().byId("monthInput").getVisible() == true){
					var monthInput = this.getView().byId("monthInput").getSelectedItem().getKey();
				}else{
					var monthInput;
				}
				if(this.getView().byId("yearInput").getVisible() == true){
					var yearInput = this.getView().byId("yearInput").getSelectedItem().getKey();
				}else{
					var yearInput;
				}
				
				var descinput = this.getView().byId("descInput").getValue();
				var claimAmtInput = this.getView().byId("claimAmtInput").getValue().replace(/,/g,"");
				
				var claimQuota = this.getView().byId("claimQuota").getValue().replace(/,/g,"");
				var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",selectType:"+selectType+",address:"+address+",desc1Text:"+desc1Text+",desc2Text:"+desc2Text+",desc3Text:"+desc3Text+",airportInput:"+airportInput+",startDateInput:"+startDateInput+",recieveNoInput:"+recieveNoInput;
					script = script + ",monthInput:"+monthInput+",yearInput:"+yearInput+",EffectiveDateInput:"+EffectiveDateInput+",descInput:"+descinput+",claimAmtInput:"+claimAmtInput+",claimQuota:"+claimQuota;
				json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9706"}';
				
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
				
				
				this.getView().byId("RQUST").setValue(docid);
				var selected = this.byId("selectType").getSelectedItem().getText();
				if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
					var file = this.getView().byId("file01").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file02").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					var file = this.getView().byId("file03").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0003",docid,year);
					}
					var file = this.getView().byId("file04").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0004",docid,year);
					}
				}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
					var file = this.getView().byId("file07").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file08").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					var file = this.getView().byId("file09").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0003",docid,year);
					}
					var file = this.getView().byId("file10").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0004",docid,year);
					}
				}else if(selected == "ค่าเช่าบ้าน"){
					
					var file = this.getView().byId("file05").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file06").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					
				}else{
					var file = this.getView().byId("file07").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file08").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					var file = this.getView().byId("file09").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0003",docid,year);
					}
					var file = this.getView().byId("file10").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0004",docid,year);
					}
					
				}
				
				MessageToast.show("Saved");
				
				this.getView().byId("RQUST").setValue(docid);
				
			}
			
			
		},
		
		onSendPressed: function () {
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var err;
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/04';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var selected = this.byId("selectType").getSelectedItem().getText();
			var err_req = "";
			if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
				var file = this.getView().byId("file01").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file02").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file03").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				
			}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
				var file = this.getView().byId("file07").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file08").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file09").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				
			}else if(selected == "ค่าเช่าบ้าน"){
				
				var file = this.getView().byId("file05").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				
				
			}else{
				var file = this.getView().byId("file07").oFileUpload.files;
				
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file08").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				var file = this.getView().byId("file09").oFileUpload.files;
				if(file.length <= 0){
					err_req = "X";
				}
				
				
			}
			
			if(err_req == "X"){
				
				MessageToast.show("Please input all require fields");
				
			}else{
			
				var pernr = this.byId("PERNR").getText();
				var dcid = this.getView().byId("RQUST").getValue();
				if(dcid == ""){
				
					var dataPA = $.ajax({
			        	type: "GET",
			        	url: 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/04',
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
									module : 'BE'+year+month
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
					json.curid = 'BE' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/04';
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
					
					var docid = dcrun.curid;
					
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
					var wf;
					var pa0001;
					
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
					
					var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
					
					if(selectType == "ค่าเช่าบ้าน"){
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/10",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						json = dchead;
						json.orgeh = wf.List[0].org1;
						json.docid = docid;
						json.module = 'BE';
						json.header = "ขอเบิกสวัสดิการอื่นๆ";
						json.ltext1 = selectType;
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = "";
						json.userad = pernr;
						json.status = "2";
						json.sttext = "รออนุมัติ";
						json = JSON.stringify(json);
						
					}else if(selectType == "ค่าภัยพิบัติ"){
						
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
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/13",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						if(pernr == parseInt(pa.paPos.upman).toString()){
							json = dchead;
							json.orgeh = wf.List[0].org1;
							json.docid = docid;
							json.module = 'BE';
							json.header = "ขอเบิกสวัสดิการอื่นๆ";
							json.ltext1 = selectType;
							json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.pernr = "";
							json.userad = pernr;
							json.status = "2";
							json.sttext = "รออนุมัติ";
							json = JSON.stringify(json);
						}else if(pernr == parseInt(pa.paPos.manag).toString()){
							
							var pa0001;
							
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
							
							

							if(parseInt(pa0001.PA0001.persk) < 9){
								json = dchead;
								json.orgeh = "";
								json.docid = docid;
								json.module = 'BE';
								json.header = "ขอเบิกสวัสดิการอื่นๆ";
								json.ltext1 = selectType;
								json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
								json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
								json.pernr = parseInt(pa.paPos.upman).toString();
								json.userad = pernr;
								json.status = "2";
								json.sttext = "รออนุมัติ";
								json = JSON.stringify(json);
							}else{
								
								json = dchead;
								json.orgeh = wf.List[0].org1;;
								json.docid = docid;
								json.module = 'BE';
								json.header = "ขอเบิกสวัสดิการอื่นๆ";
								json.ltext1 = selectType;
								json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
								json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
								json.pernr = "";
								json.userad = pernr;
								json.status = "2";
								json.sttext = "รออนุมัติ";
								json = JSON.stringify(json);
								
							}
							
							
						}else{
							json = dchead;
							json.orgeh = "";
							json.docid = docid;
							json.module = 'BE';
							json.header = "ขอเบิกสวัสดิการอื่นๆ";
							json.ltext1 = selectType;
							json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.pernr = parseInt(pa.paPos.manag).toString();
							json.userad = pernr;
							json.status = "2";
							json.sttext = "รออนุมัติ";
							json = JSON.stringify(json);
						}
						
					}else {
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/9",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						
						json = dchead;
						json.orgeh = wf.List[0].org1;
						json.docid = docid;
						json.module = 'BE';
						json.header = "ขอเบิกสวัสดิการอื่นๆ";
						json.ltext1 = selectType;
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = "";
						json.userad = pernr;
						json.status = "2";
						json.sttext = "รออนุมัติ";
						json = JSON.stringify(json);
						
					}
					
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
					
					
					var rqust = dcrun.curid;
					var rqdat = this.getView().byId("RQDAT").getValue();
					var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
					var address = this.getView().byId("ADDRESS").getValue();
					
					var desc1Text = this.getView().byId("desc1Text").getValue();
					var desc2Text = this.getView().byId("desc2Text").getValue();
					var desc3Text = this.getView().byId("desc3Text").getValue();
					if(this.getView().byId("airportInput").getVisible() == true){
						var airportInput = this.getView().byId("airportInput").getValue();
					}else{
						var airportInput;
					}
					var startDateInput = this.getView().byId("startDateInput").getValue();
					var EffectiveDateInput = this.getView().byId("EffectiveDateInput").getValue();
					
					var recieveNoInput = this.getView().byId("recieveNoInput").getValue();
					if(this.getView().byId("monthInput").getVisible() == true){
						var monthInput = this.getView().byId("monthInput").getSelectedItem().getKey();
					}else{
						var monthInput;
					}
					if(this.getView().byId("yearInput").getVisible() == true){
						var yearInput = this.getView().byId("yearInput").getSelectedItem().getKey();
					}else{
						var yearInput;
					}
					
					var descinput = this.getView().byId("descInput").getValue();
					var claimAmtInput = this.getView().byId("claimAmtInput").getValue().replace(/,/g,"");
					
					var claimQuota = this.getView().byId("claimQuota").getValue().replace(/,/g,"");
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",selectType:"+selectType+",address:"+address+",desc1Text:"+desc1Text+",desc2Text:"+desc2Text+",desc3Text:"+desc3Text+",airportInput:"+airportInput+",startDateInput:"+startDateInput+",recieveNoInput:"+recieveNoInput;
						script = script + ",monthInput:"+monthInput+",yearInput:"+yearInput+",EffectiveDateInput:"+EffectiveDateInput+",descInput:"+descinput+",claimAmtInput:"+claimAmtInput+",claimQuota:"+claimQuota;
					json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9706"}';
					
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
					
					
					this.getView().byId("RQUST").setValue(docid);
					var selected = this.byId("selectType").getSelectedItem().getText();
					if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
						var file = this.getView().byId("file01").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file02").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file03").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file04").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
					}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
						var file = this.getView().byId("file07").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file08").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file09").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file10").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
					}else if(selected == "ค่าเช่าบ้าน"){
						
						var file = this.getView().byId("file05").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file06").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						
					}else{
						var file = this.getView().byId("file07").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file08").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file09").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file10").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
						
					}
					
					MessageToast.show("Saved");
					
					this.getRouter().navTo("myinfo");
					
					
				}else{
					var docid = dcid;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docid,
			        	async: false,
			        	success: function(data){
			        		dchead = data.tblDocheader;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        }); 
					
					var wf;
					var pa0001;
					
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
					
					var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
					if(selectType == "ค่าเช่าบ้าน"){
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/10",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						json = dchead;
						json.orgeh = wf.List[0].org1;
						json.module = 'BE';
						json.header = "ขอเบิกสวัสดิการอื่นๆ";
						json.ltext1 = selectType;
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = "";
						json.userad = pernr;
						json.status = "2";
						json.sttext = "รออนุมัติ";
						json = JSON.stringify(json);
						
					}else if(selectType == "ค่าภัยพิบัติ"){
						
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
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/13",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						if(pernr == parseInt(pa.paPos.manag).toString()){
							json = dchead;
							json.orgeh = wf.List[0].org1;
							json.module = 'BE';
							json.header = "ขอเบิกสวัสดิการอื่นๆ";
							json.ltext1 = selectType;
							json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.pernr = "";
							json.userad = pernr;
							json.status = "2";
							json.sttext = "รออนุมัติ";
							json = JSON.stringify(json);
						}else{
							json = dchead;
							json.orgeh = "";
							json.module = 'BE';
							json.header = "ขอเบิกสวัสดิการอื่นๆ";
							json.ltext1 = selectType;
							json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.pernr = parseInt(pa.paPos.manag).toString();
							json.userad = pernr;
							json.status = "2";
							json.sttext = "รออนุมัติ";
							json = JSON.stringify(json);
						}
						
					}else {
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/9",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						
						json = dchead;
						json.orgeh = wf.List[0].org1;
						json.module = 'BE';
						json.header = "ขอเบิกสวัสดิการอื่นๆ";
						json.ltext1 = selectType;
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = "";
						json.userad = pernr;
						json.status = "2";
						json.sttext = "รออนุมัติ";
						json = JSON.stringify(json);
						
					}
					
					var postdchead = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docid,
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
					
					$.ajax(postdchead).done(function (response) {
						console.log(response);
						dchead = response.tblDocheader;
					});
					
					
					var rqust = docid;
					var rqdat = this.getView().byId("RQDAT").getValue();
					var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
					var address = this.getView().byId("ADDRESS").getValue();
					
					var desc1Text = this.getView().byId("desc1Text").getValue();
					var desc2Text = this.getView().byId("desc2Text").getValue();
					var desc3Text = this.getView().byId("desc3Text").getValue();
					if(this.getView().byId("airportInput").getVisible() == true){
						var airportInput = this.getView().byId("airportInput").getValue();
					}else{
						var airportInput;
					}
					var startDateInput = this.getView().byId("startDateInput").getValue();
					var EffectiveDateInput = this.getView().byId("EffectiveDateInput").getValue();
					
					var recieveNoInput = this.getView().byId("recieveNoInput").getValue();
					if(this.getView().byId("monthInput").getVisible() == true){
						var monthInput = this.getView().byId("monthInput").getSelectedItem().getKey();
					}else{
						var monthInput;
					}
					if(this.getView().byId("yearInput").getVisible() == true){
						var yearInput = this.getView().byId("yearInput").getSelectedItem().getKey();
					}else{
						var yearInput;
					}
					
					var descinput = this.getView().byId("descInput").getValue();
					var claimAmtInput = this.getView().byId("claimAmtInput").getValue().replace(/,/g,"");
					
					var claimQuota = this.getView().byId("claimQuota").getValue().replace(/,/g,"");
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",selectType:"+selectType+",address:"+address+",desc1Text:"+desc1Text+",desc2Text:"+desc2Text+",desc3Text:"+desc3Text+",airportInput:"+airportInput+",startDateInput:"+startDateInput+",recieveNoInput:"+recieveNoInput;
						script = script + ",monthInput:"+monthInput+",yearInput:"+yearInput+",EffectiveDateInput:"+EffectiveDateInput+",descInput:"+descinput+",claimAmtInput:"+claimAmtInput+",claimQuota:"+claimQuota;
					json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9706"}';
					
					var postdcdetail = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docid,
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
					
					$.ajax(postdcdetail).done(function (response) {
						console.log(response);
						dcdetail = response.tblDocdetail;
					});
					
					
					this.getView().byId("RQUST").setValue(docid);
					var selected = this.byId("selectType").getSelectedItem().getText();
					if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
						var file = this.getView().byId("file01").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file02").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file03").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file04").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
					}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
						var file = this.getView().byId("file07").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file08").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file09").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file10").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
					}else if(selected == "ค่าเช่าบ้าน"){
						
						var file = this.getView().byId("file05").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file06").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						
					}else{
						var file = this.getView().byId("file07").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file08").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file09").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file10").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
						
					}
					
					MessageToast.show("Saved");
					
					this.getRouter().navTo("myinfo");
					
					
				}
				
			}
		},
		onReadFile: function(file,index,docid,year){
			
			var fname = file[0].name;
			var period = fname.lastIndexOf('.');
			var pluginName = fname.substring(0, period);
			var fileExtension = fname.substring(period + 1);
			var curfile = file[0];
			var indexitem = index;
			var base64;
			
			var reader = new FileReader();
		    	reader.onloadend = function () {
		    	base64 = reader.result.split(",");
		    	console.log(reader.result);
		    	
		    	var data = window.atob(base64[1]);
				
		    	
				var json = '{"attachKey":{"docid":"'+docid+'","xyear":"'+year+'","seqnr":"'+indexitem+'"},"xdata":"'+base64[1]+'","xname":"'+pluginName+'","xtype":"'+fileExtension+'"}';
				
				
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
		    reader.readAsDataURL(curfile);
			
		},
		onChangeamt: function(){
			var amt = parseFloat(this.getView().byId("claimAmtInput").getValue().replace(/,/g,""));
			var max = parseFloat(this.getView().byId("claimQuota").getValue().replace(/,/g,""));
			if(amt > max){
				this.getView().byId("claimAmtInput").setValue(this.getView().byId("claimQuota").getValue());
			}
			
		},
		onChangeamtX: function(){
			var amt = parseFloat(this.getView().byId("claimAmtInput").getValue().replace(/,/g,""));
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			var val = oNumberFormat.format(parseFloat(amt));
			this.getView().byId("claimAmtInput").setValue(val);
		},
		onCancelPressed: function () {
			this.getRouter().navTo("myinfo");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		},
		
		addMore:function(){
//          this.getView().byId("form1").addContent( new sap.m.Label({ text: "Label C" }) );
//          this.getView().byId("form1").addContent( new sap.m.Input({ type: sap.m.InputType.Text}) );
          var content = this.getView().byId("form1").getContent();
          this.getView().byId("form1").addContent(content);

		},
		onChangeType(){
			
			var user = jQuery.sap.getUriParameters().get("user");
			
			var selected = this.byId("selectType").getSelectedItem().getText();
			var pa0006;
			var pa9701;
			var adStr = "";
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0008"
			
			if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)"){
					this.byId("claimQuota").setValue("3000.00");
				}else{
					this.byId("claimQuota").setValue("2000.00");
				}
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				// show/hide attachFile tab
				this.byId("attachFile1").setVisible(true);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+user+"/1",
					async: false,
					success: function(data){
							pa0006 = data.List;
						},
							error: function(){
							pa0006 = "X";
						}
				});
				var space = " ";
				if(pa0006 != "X"){
					var adStr = pa0006[0].bldng+space+pa0006[0].floor+space+pa0006[0].hsnmr+space+pa0006[0].adr03+space+pa0006[0].stras+space+pa0006[0].locat+space+pa0006[0].conkk+space+pa0006[0].ort02+space+pa0006[0].ort01+space+pa0006[0].ort04+space+pa0006[0].ort03;
						adStr = adStr+space+pa0006[0].posta+space+pa0006[0].pstlz;
						adStr = adStr.replace(/null/gi,"");
						adStr = adStr.replace(/undefined/gi,"");
					this.byId("ADDRESS").setValue(adStr);
				}
				
				
			}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)"){
					this.byId("claimQuota").setValue("3000.00");
				}else{
					this.byId("claimQuota").setValue("2000.00");
				}
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				// show/hide attachFile tab
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(true);
				
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+user+"/1",
					async: false,
					success: function(data){
							pa0006 = data.List;
						},
							error: function(){
							pa0006 = "X";
						}
				});
				var space = " ";
				if(pa0006 != "X"){
					var adStr = pa0006[0].bldng+space+pa0006[0].floor+space+pa0006[0].hsnmr+space+pa0006[0].adr03+space+pa0006[0].stras+space+pa0006[0].locat+space+pa0006[0].conkk+space+pa0006[0].ort02+space+pa0006[0].ort01+space+pa0006[0].ort04+space+pa0006[0].ort03;
						adStr = adStr+space+pa0006[0].posta+space+pa0006[0].pstlz;
						adStr = adStr.replace(/null/gi,"");
						adStr = adStr.replace(/undefined/gi,"");
					this.byId("ADDRESS").setValue(adStr);
				}
				
			}else if(selected == "ค่าเช่าบ้าน"){
				
				url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0006"
				
				this.byId("recieveNoLabel").setVisible(true);
				this.byId("recieveNoInput").setVisible(true);
				this.byId("airportLabel").setVisible(true);
				this.byId("monthLabel").setVisible(true);
				this.byId("monthInput").setVisible(true);
				this.byId("airportInput").setVisible(true);
				this.byId("startDateLabel").setVisible(true);
				this.byId("startDateInput").setVisible(true);
				this.byId("descTextBoxLabel").setVisible(false);
				this.byId("desc1Text").setVisible(false);
				
				this.byId("claimQuota").setValue("4500.00");
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(false);
				this.byId("desc3Text").setVisible(false);
				this.byId("EffectiveDateInput").setVisible(true);
				
				this.byId("yearLabel").setVisible(true);
				this.byId("yearInput").setVisible(true);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(true);
				this.byId("descInput").setVisible(true);
				
				// show/hide attachFile tab
				this.byId("attachFile2").setVisible(true);
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				
			}else{
				// hide attachFile tab
				
				url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0009"
				
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("claimQuota").setValue("50,000.00");
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(true);
				
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+user+"/1",
					async: false,
					success: function(data){
							pa0006 = data.List;
						},
							error: function(){
							pa0006 = "X";
						}
				});
				var space = " ";
				if(pa0006 != "X"){
					var adStr = pa0006[0].bldng+space+pa0006[0].floor+space+pa0006[0].hsnmr+space+pa0006[0].adr03+space+pa0006[0].stras+space+pa0006[0].locat+space+pa0006[0].conkk+space+pa0006[0].ort02+space+pa0006[0].ort01+space+pa0006[0].ort04+space+pa0006[0].ort03;
						adStr = adStr+space+pa0006[0].posta+space+pa0006[0].pstlz;
						adStr = adStr.replace(/null/gi,"");
						adStr = adStr.replace(/undefined/gi,"");
					this.byId("ADDRESS").setValue(adStr);
				}
				
			}
			var pa9701;
			var t001p;
			$.ajax({
				type: "GET",
				url: url,
				async: false,
				success: function(data){
						pa9701 = data.List;
					},
				error: function(){
						pa9701 = "X";
					}
			});
			if(selected == "ค่าเช่าบ้าน"){
				
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T001P/"+pa9701[0].locat+"/"+pa9701[0].locat,
					async: false,
					success: function(data){
							t001p = data;
						},
					error: function(){
							t001p = "X";
						}
				});
				
				var date = new Date(pa9701[0].pa9701key.begda);
					date = date.getDate().toString().padStart(2,'0')+"/"+(date.getMonth() + 1).toString().padStart(2,'0')+"/"+date.getFullYear();
				this.byId("airportInput").setValue(t001p.T001P.btext);
				adStr = pa9701[0].ladd1+" "+pa9701[0].ladd2;
				adStr = adStr.replace(/null/gi,"");
				adStr = adStr.replace(/undefined/gi,"");
				this.byId("ADDRESS").setValue(adStr);
				this.byId("claimQuota").setValue(pa9701[0].elamt);
				this.byId("startDateInput").setValue(date);
				
				var thisyear = new Date().getFullYear();
				
				this.byId("yearInput").setSelectedKey(thisyear.toString());
				
			}
			
		}

	});
});