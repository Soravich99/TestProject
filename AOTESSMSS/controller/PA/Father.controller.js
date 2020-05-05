sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.PA.Father", {

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
			var t503k
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
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/11",
	        	async: false,
	        	success: function(data){
	        		pa0021 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
	        
	        dataPA = $.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+user+"/11",
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
	        
	        var have_father;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/11",
	        	async: false,
	        	success: function(data){
	        		if(data.List.length > 0){
	        			have_father	= "X";  
	        		}else{
	        			have_father = "";
	        		}
	        		        		
	        	},
	        	error: function(){
	        		have_father = "";
	        	}
	        });
	        
			if(have_father != "X"){
	        	MessageToast.show("You not Father in System");
	        	this.getRouter().navTo("myInfo");
	        }
			
	        var vpernr = this.getView().byId("PERNR1");
	        var vename = this.getView().byId("ENAME1");
	        var vjobtl = this.getView().byId("JOBTL");
	        var vefaml = this.getView().byId("EFAML");
	        var vnum01 = this.getView().byId("NUM01");
	        var vanred = this.getView().byId("ANRED");
	        var vfnmzu = this.getView().byId("FNMZU");
	        var vfavor = this.getView().byId("FAVOR");
	        var vfanam = this.getView().byId("FANAM");
	        var vftxid = this.getView().byId("FTXID");
	        var vfgbdt = this.getView().byId("FGBDT");
	        var vtelnr = this.getView().byId("TELNR");
	        
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
			
			if(pa0021.List.length > 0){
				var fgbdt = new Date(pa0021.List[0].fgbdt);
				fgbdt = fgbdt.getDate()+"/"+(fgbdt.getMonth() +1 )+"/"+(fgbdt.getFullYear() );
				vfavor.setValue(pa0021.List[0].favor);
				vfanam.setValue(pa0021.List[0].fanam);
				vfnmzu.setSelectedKey(pa0021.List[0].fnmzu);
				vfgbdt.setValue(fgbdt);
			}
			
			if(pa0187.List.length > 0){
				vjobtl.setSelectedKey(pa0187.List[0].jobtl);
				vnum01.setValue(pa0187.List[0].num01);
				vefaml.setSelectedKey(pa0187.List[0].efaml);
				vanred.setSelectedKey(pa0187.List[0].anred);
				vftxid.setValue(pa0187.List[0].ftxid);
				if(pa0187.List[0].telnr != ""){
					vtelnr.setValue(pa0187.List[0].telnr);
				}
				if(pa0187.List[0].aldec == "X"){
					this.getView().byId("ALDEC").setSelected(true);
				}else{
					this.getView().byId("ALIVE").setSelected(true);
				}
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
			
			var qt = '"';
			
			var pa0001 = new JSONModel();
			var pa0002 = new JSONModel();
			var pa0185 = new JSONModel();
			var pa0187 = new JSONModel();
			var pa0021 = new JSONModel();
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			
			var pernr = this.getView().byId("PERNR1").getText();
			var aedtm = this.getView().byId("AEDTM").getValue();
	        var jobtl = this.getView().byId("JOBTL").getSelectedItem().getKey();
	        var efaml = this.getView().byId("EFAML").getSelectedItem().getText();
	        var num01 = this.getView().byId("NUM01").getValue();
	        var anred = this.getView().byId("ANRED").getSelectedItem().getKey();
	        var fnmzu = this.getView().byId("FNMZU").getSelectedItem().getKey();
	        var favor = this.getView().byId("FAVOR").getValue();
	        var fanam = this.getView().byId("FANAM").getValue();
	        var ftxid = this.getView().byId("FTXID").getValue();
	        var fgbdt = this.getView().byId("FGBDT").getValue();
	        var telnr = this.getView().byId("TELNR").getValue();
	        var alive = this.getView().byId("ALIVE").getSelected();
	        var aldec = this.getView().byId("ALDEC").getSelected();
	        var endda11 = this.getView().byId("ENDDA11").getValue();
	        
	        var file = this.getView().byId("file02").oFileUpload.files;
	        var deaderr = "";
	        if(aldec == true){ if(endda11.length == 0){ deaderr = "X"; } }
	        
	        if(aedtm.length == 0 || favor.length == 0 || fanam.length == 0 || ftxid.length == 0 || fgbdt.length == 0 || file.length < 1 || deaderr == "X"){
	        	MessageToast.show("Please input all require field");
	        }else{
	        
		        var datax = [{
		        	pernr : pernr,
		        	jobtl : jobtl,
		        	efaml : efaml,
		        	num01 : num01,
		        	aedtm : aedtm,
		        	anred : anred,
		        	fnmzu : fnmzu,
		        	favor : favor,
		        	fanam : fanam,
		        	ftxid : ftxid,
		        	fgbdt : fgbdt,
		        	telnr : telnr,
		        	alive : alive,
		        	aldec : aldec,
		        	endda11 : endda11
		        }];
		        
		        datax = JSON.stringify(datax[0]);
		        
		        datax = datax.replace("}","");
				datax = datax.replace(/"/g,"");
		        
		        var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/04';
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
								dotyp : '04',
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
				
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/04';
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
				json.header = "ขอเปลี่ยนแปลงข้อมูลบิดา";
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
				
				json = '{"docid":"'+docid+'","script":"'+datax+'","stable":"pa0021"}';
				
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
					this.onReadFile(file,"0003",docid,year,user,"02-005");
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
			MessageToast.show("ยกเลิก");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		}
			
		

	});
});