sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.PA.ViewChildren", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			
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
			var t503k;
			var t501;
			
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
			
			var complete_url = window.location.href;
			var objps = complete_url.split("/").pop();
			
			var pa0021;
			var pa0187;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/2",
	        	async: false,
	        	success: function(data){
	        		pa0021 = data;
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+user+"/2",
	        	async: false,
	        	success: function(data){
	        		pa0187 = data;
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			for(var i=0; i< pa0021.List.length;i++){
				if(pa0021.List[i].pakey.objps == objps.toString().padStart(2,'0')){
					var p21 = pa0021.List[i];
					
					var fgbdt = new Date(p21.fgbdt);
						
//					var dobMonth= fgbdt.getMonth() + 1; 
//					var dobDay= fgbdt.getDate();
//					var dobYear= fgbdt.getFullYear();
					
					fgbdt = fgbdt.getDate().toString().padStart(2,'0')+"/"+(fgbdt.getMonth()+1).toString().padStart(2,'0')+"/"+fgbdt.getFullYear();
					var aedtm = "";
					aedtm = new Date(p21.pakey.begda);
					aedtm = aedtm.getDate().toString().padStart(2,'0')+"/"+(aedtm.getMonth()+1).toString().padStart(2,'0')+"/"+aedtm.getFullYear();
					this.getView().byId("AEDTM").setValue(aedtm);
					
					this.getView().byId("VORNA").setValue(p21.favor);
					this.getView().byId("NACHN").setValue(p21.fanam);
					this.getView().byId("FGBDT").setValue(fgbdt);
					
//					var now = new Date();
//					var nowDay= now.getDate();
//					var nowMonth = now.getMonth() + 1;  //jan = 0 so month + 1
//					var nowYear= now.getFullYear();
//					
//					var ageyear = nowYear - dobYear;
//					var agemonth = nowMonth - dobMonth;
//					var ageday = nowDay- dobDay;
//					if (agemonth <= 0) {
//					       ageyear--;
//					       agemonth = (12 + agemonth);
//					}
//					if (nowDay < dobDay) {
//					      agemonth--;
//					      ageday = 30 + ageday;
//					}
//					
//					this.getView().byId("age").setValue(ageyear);
					
					this.getView().byId("statusChildEdit").setSelectedKey(p21.zzcstat);
					
				}
			}
			
			for(var i=0; i< pa0187.List.length;i++){
				if(pa0187.List[i].pakey.objps == objps.toString().padStart(2,'0')){
					var p187 = pa0187.List[i];
					
					this.getView().byId("JOBTL").setSelectedKey(p187.jobtl);
					this.getView().byId("EFAML").setSelectedKey(p187.efaml);
					this.getView().byId("ANRED").setSelectedKey(p187.anred);
					this.getView().byId("PERID").setValue(p187.chxid);
					if(p187.aldec == "X"){
						this.getView().byId("ALDEC").setSelected(true);
					}else{
						this.getView().byId("ALIVE").setSelected(true);
					}
					
				}
			}
			
			this.getView().byId("orderChildEdit").setSelectedKey(objps);
			
			
			this.setModel(oViewModel, "view");
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("PA/viewChildren").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			
			this.onInit();
			
//			if(oEvent.getParameter("arguments").from == "myTask"){
//				this.byId("approveSection").setVisible(false);
//			}else{
//				this.byId("approveSection").setVisible(true);
//			}
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
			
			var qt = '"';
			
			var pa0001 = new JSONModel();
			var pa0002 = new JSONModel();
			var pa0185 = new JSONModel();
			var pa0187 = new JSONModel();
			var pa0021 = new JSONModel();
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			
			var pernr = this.getView().byId("PERNR").getText();
	        var jobtl = this.getView().byId("JOBTL").getSelectedItem().getKey();
	        var anred = this.getView().byId("ANRED").getSelectedItem().getKey();
	        var fnmzu = this.getView().byId("FNMZU").getSelectedItem().getKey();
	        var efaml = this.getView().byId("EFAML").getSelectedItem().getKey();
	        var childorder = this.getView().byId("orderChildEdit").getSelectedItem().getKey();
	        var childstatus = this.getView().byId("statusChildEdit").getSelectedItem().getKey();
	        var nachn = this.getView().byId("NACHN").getValue();
	        var vorna = this.getView().byId("VORNA").getValue();
	        var perid = this.getView().byId("PERID").getValue();
	        var fgbdt = this.getView().byId("FGBDT").getValue();
	        var alive = this.getView().byId("ALIVE").getSelected();
	        var aldec = this.getView().byId("ALDEC").getSelected();
	        var endda11 = this.getView().byId("ENDDA11").getValue();
	        var aedtm = this.getView().byId("AEDTM").getValue();
	        var telnr = this.getView().byId("TELNR").getValue();
	        var file = this.getView().byId("file02").oFileUpload.files;
	        var deaderr = "";
	        if(aldec == true){ if(endda11.length == 0){ deaderr = "X"; } }
	        if(vorna.length == 0 || nachn.length == 0 || perid.length == 0 || fgbdt.length == 0 || file.length == 0 || deaderr == "X"){
	        	MessageToast.show("Please input all require field");
	        }else{
			
		        var data = [{
		        	pernr : pernr,
		        	jobtl : jobtl,
		        	anred : anred,
		        	aedtm : aedtm,
		        	fnmzu : fnmzu,
		        	telnr : telnr,
		        	childorder : childorder,
		        	childstatus : childstatus,
		        	vorna : vorna,
		        	nachn : nachn,
		        	perid : perid,
		        	fgbdt : fgbdt,
		        	alive : alive,
		        	aldec : aldec,
		        	efaml : efaml,
		        	icnum : true,
		        	passport : false,
		        	endda11 : endda11
		        }];
		        
		        data = JSON.stringify(data[0]);
		        
		        data = data.replace("}","");
				data = data.replace(/"/g,"");
		        
		        var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/07';
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
								dotyp : '07',
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
				
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/07';
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
				json.orgeh = wf.List[0].org1;
				json.docid = docid;
				json.module = 'PA';
				json.header = "ขอเปลี่ยนข้อมูลบุตร";
				json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
				json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
				json.pernr = "";
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
				
				json = '{"docid":"'+docid+'","script":"'+data+'","stable":"pa0021"}';
				
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
		        
				var year = new Date();
				year = year.getFullYear();
				var file = this.getView().byId("file01").oFileUpload.files;
				
				if(file.length > 0){
					this.onReadFile(file,"0001",docid,year,user,"02-004");
				}
				var file = this.getView().byId("file02").oFileUpload.files;
				
				if(file.length > 0){
					this.onReadFile(file,"0002",docid,year,user,"02-001");
				}
				
				var file = this.getView().byId("file03").oFileUpload.files;
				
				if(file.length > 0){
					this.onReadFile(file,"0003",docid,year,user,"02-003");
				}
				
				var file = this.getView().byId("file04").oFileUpload.files;
				
				if(file.length > 0){
					this.onReadFile(file,"0004",docid,year,user,"02-005");
				}
				
				
				MessageToast.show("Saved");
	        
				this.getRouter().navTo("myInfo");
	        }
		},
		onReadFile: function(file,index,docid,year,user,type){
			
			var fname = file[0].name;
			var period = fname.lastIndexOf('.');
			var pluginName = fname.substring(0, period);
			var fileExtension = fname.substring(period + 1);
			var curfile = file[0];
			var indexitem = index;
			var base64;
			var user = user.padStart(8,'0');
			var sname = user+"_"+type+"_"+docid+"."+fileExtension;
			
			var reader = new FileReader();
		    	reader.onloadend = function () {
		    	base64 = reader.result.split(",");
		    	console.log(reader.result);
		    	
		    	var data = window.atob(base64[1]);
		    	
		    	var xml_out;
				var xxl = '<?xml version="1.0" encoding="utf-8"?>';
				var xml = xxl+'<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">';
					xml = xml+'<soap12:Body>';
					xml = xml+'<uploadEmpDoc xmlns="http://tempuri.org/">';
					
					xml = xml+'<xappKey>A0TESSMSS123</xappKey>';
					xml = xml+'<xEmplopyeeID>'+user+'</xEmplopyeeID>';
					xml = xml+'<xTypeConfident>03 Unconfidential</xTypeConfident>';
					xml = xml+'<xDocTypeName>02 - ประวัติครอบครัว</xDocTypeName>';
					xml = xml+'<xdocName>'+sname+'</xdocName>';
					xml = xml+'<xfileName>'+sname+'</xfileName>';
					xml = xml+'<xcontent>'+base64[1]+'</xcontent>';
					
					xml = xml+'</uploadEmpDoc>';
					xml = xml+'</soap12:Body>';
					xml = xml+'</soap12:Envelope>';
					var settings = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://10.121.3.94/AOTWS/OTESSMSS.asmx?op=uploadEmpDoc",
							  "method": "POST",
							  "dataType": "xml",
							  "headers": {
							    "Content-Type": "application/soap+xml",
							    "Accept": "*/*",
							    "Host": "10.121.3.94",
							    "Accept-Encoding": "gzip, deflate",
							    "Connection": "keep-alive"
							  },
							  "data": xml
							}

							$.ajax(settings).done(function (response) {
								xml_out = response;
								console.log(response);
							  
								
							});
		    	
				var json = '{"attachKey":{"docid":"'+docid+'","xyear":"'+year+'","seqnr":"'+indexitem+'"},"xdata":"'+""+'","xname":"'+sname+'","xtype":"'+fileExtension+'"}';
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
		onCancelPressed: function () {
			this.getRouter().navTo("myInfo");
			//MessageToast.show("ยกเลิก");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		}
			
		

	});
});