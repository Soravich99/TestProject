sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
		'sap/m/MessageToast', 'sap/ui/model/json/JSONModel' ], function(
		BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend(
			"sap.ui.demo.toolpageapp.controller.PA.Education", {

				onInit : function() {
					var oViewModel = new JSONModel({
						lastLogin : new Date(Date.now() - 86400000)
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
					
					var t517t = new JSONModel();
					var t519t = new JSONModel();
					var t517y = new JSONModel();
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T517T",
			        	async: false,
			        	success: function(data){
			        		t517t = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
			        
					var tempL = {"List":[{"slart":"00","stext":"กรุณาเลือก"}]};
					for(var t = 0; t < t517t.List.length;t++){
						t517t.List[t].slart = t517t.List[t].t517Tkey.slart;
						tempL.List[t+1] = t517t.List[t];
					}
					
			        this.getView().setModel(new JSONModel(tempL),"eduItem");
			        
//			        $.ajax({
//			        	type: "GET",
//			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T519T",
//			        	async: false,
//			        	success: function(data){
//			        		t519t = data;
//			        		
//			        	},
//			        	error: function(){
//			        		
//			        	}
//			        });
//			        
//			        for(var t = 0; t < t519t.List.length;t++){
//						t519t.List[t].slabs = t519t.List[t].t519Tkey.slabs;
//					}
//			        
//			        this.getView().setModel(new JSONModel(t519t),"cerItem");
			        
//			        $.ajax({
//			        	type: "GET",
//			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T517Y",
//			        	async: false,
//			        	success: function(data){
//			        		t517y = data;
//			        		
//			        	},
//			        	error: function(){
//			        		
//			        	}
//			        });
//			        
//			        var tempL = {"List":[{"fachr":"00","mandt":"กรุณาเลือก"}]};
//			        for(var t = 0; t < t517y.List.length;t++){
//						tempL.List[t+1] = t517y.List[t];
//					}
//			        
//			        this.getView().setModel(new JSONModel(tempL),"brnItem");
					
					this.setModel(oViewModel, "view");
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
					
					var user = jQuery.sap.getUriParameters().get("user");
					
					var qt = '"';
					
					var pa0022 = new JSONModel();
					var dcrun;
					var dchead;
					var dcdetail;
					
					var pernr = this.getView().byId("PERNR").getText();
					var slart = this.getView().byId("SLART").getSelectedItem().getKey();
					var slabs = this.getView().byId("SLABS").getSelectedItem().getKey();
					var sltp1 = this.getView().byId("SLTP1").getSelectedItem().getKey();
					var ksbez = this.getView().byId("KSBEZ").getValue();
					var insti = this.getView().byId("INSTI").getValue();
					var begda = this.getView().byId("BEGDA").getValue();
					var endda = this.getView().byId("ENDDA").getValue();
					
					if(insti.length == 0 || begda.length == 0 || endda.length == 0){
						MessageToast.show("Please input all require field");
					}else{
					
						var data = [{
				        	pernr : pernr,
				        	slart : slart,
				        	slabs : slabs,
				        	sltp1 : sltp1,
				        	ksbez : ksbez,
				        	insti : insti,
				        	begda : begda,
				        	endda : endda
				        }];
				        
				        data = JSON.stringify(data[0]);
				        
				        data = data.replace("}","");
						data = data.replace(/"/g,"");
						
				        var year = new Date().getFullYear();
						var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
						var date = new Date().getDate();
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/06';
						var year_budish = (year + 0).toString().substring(2,4); 
						var script = data;
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
										dotyp : '06',
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
						
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/06';
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
						json.header = "เพิ่มข้อมูลการศึกษา";
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
						
						json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa0022"}';
						
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
						
						var file = this.getView().byId("file01").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year,user,"05-002-1");
						}
						var file = this.getView().byId("file02").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year,user,"05-002-2");
						}
						
						var file = this.getView().byId("file03").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year,user,"05-002-3");
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
							xml = xml+'<xDocTypeName>05 - ประวัติการศึกษา</xDocTypeName>';
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
				onSLART : function(){
					var t517a;
					var t519t;
					var t517z;
					var t517y;
					
					var slart = this.getView().byId("SLART").getSelectedItem().getKey();
					
					$.ajax({
				       	type: "GET",
				       	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T517A",
				       	async: false,
				       	success: function(data){
				       		t517a = data;
				       		
				       	},
				       	error: function(){
				       		
				       	}
				    });
					
					
					
					$.ajax({
				       	type: "GET",
				       	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T519T",
				       	async: false,
				       	success: function(data){
				       		t519t = data;
				       		
				       	},
				       	error: function(){
				       		
				       	}
				    });
					var temp = {List:[]};
					var cur = 0;
				    for(var e = 0; e < t517a.List.length; e++){
				    	if(t517a.List[e].t517Akey.slart == slart){
				    		for(var t = 0; t < t519t.List.length;t++){
								if(t519t.List[t].t519Tkey.slabs == t517a.List[e].t517Akey.abart){
									t519t.List[t].slabs = t519t.List[t].t519Tkey.slabs;
									temp.List[cur] = t519t.List[t];
									cur++;
								}
				    			
				    		}
				    	}
				    }
				    
				    this.getView().setModel(new JSONModel(temp),"cerItem");
				    
				    $.ajax({
				       	type: "GET",
				       	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T517Z",
				       	async: false,
				       	success: function(data){
				       		t517z = data;
				       		
				       	},
				       	error: function(){
				       		
				       	}
				    });
					
					
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T517Y",
			        	async: false,
			        	success: function(data){
			        		t517y = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
			        
					var temp = {List:[]};
					var cur = 0;
				    for(var e = 0; e < t517z.List.length; e++){
				    	if(t517z.List[e].t517Zkey.slart == slart){
				    		for(var t = 0; t < t517y.List.length;t++){
				    			if(t517y.List[t].fachr == t517z.List[e].t517Zkey.faart){
									temp.List[cur] = t517y.List[t];
									cur++;
								}
				    			
				    		}
				    	}
				    }
					
			        var tempL = {"List":[{"fachr":"","mandt":"กรุณาเลือก"}]};
			        for(var v = 0; v < temp.List.length;v++){
						tempL.List[v+1] = temp.List[v];
					}
			        
			        this.getView().setModel(new JSONModel(tempL),"brnItem");
					
					
				},
				onSLABS : function (){
					
					
					
					var slart = this.getView().byId("SLART").getSelectedItem().getKey();
					
					
					
				},
				onCancelPressed : function() {
					this.getRouter().navTo("myInfo");
					MessageToast.show("ยกเลิก");
				},

				onEditPressed : function() {
					MessageToast.show("Edit");
				}

			});
});