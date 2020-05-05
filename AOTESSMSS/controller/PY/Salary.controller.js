﻿sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
		'sap/m/MessageToast', 'sap/ui/model/json/JSONModel', 'sap/fileviewer/FileViewer' ], function(
		BaseController, MessageToast, JSONModel, FileViewer) {
	"use strict";
	return BaseController.extend(
			"sap.ui.demo.toolpageapp.controller.PY.Salary", {

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
					
					this.getView().byId("PLANS").setText(pa.paPos.pos_l);
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
								this.getView().byId("USRID_LONG1").setText(pa0105.List[i].usrid_LONG);
							}
							if(pa0105.List[i].pakey.subty == "0005"){
								this.getView().byId("USRID1").setText(pa0105.List[i].usrid);
							}
							if(pa0105.List[i].pakey.subty == "0002"){
								this.getView().byId("USRID2").setText(pa0105.List[i].usrid);
							}	
						}
					}
					
					this.getView().byId("PERSG").setText(t501.T501.ptext);
					
					var thisyear = new Date().getFullYear();
					var data = {"List":[]};
					var year = {"List":[{"text":"","key":""},{"text":"","key":""},{"text":"","key":""},{"text":"","key":""},{"text":"","key":""}]};
					var cur = -3;
					for(var x= 0;x<year.List.length;x++){
						year.List[x].text = (thisyear + cur).toString();
						year.List[x].key = (thisyear + cur).toString();
						cur++;
						data.List[x] = year.List[x];
					}
					
					
					this.getView().setModel(new JSONModel(year),"yearItem");
					
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

				onCancelPressed : function() {

					this.getRouter().navTo("myInfo");
					MessageToast.show("ยกเลิก");
				},

				onEditPressed : function() {
					MessageToast.show("Edit");
				},
				onSearch : function() {
					var user = jQuery.sap.getUriParameters().get("user");
					var selectYear = this.getView().byId("selectYear").getSelectedKey();
					var selectMonth = this.getView().byId("selectMonth").getSelectedKey();
					if (selectYear) {
						this.getView().byId("listTable").setVisible(true);
						
						var itemlist;
//						var url = "http://webdeqapp.airportthai.co.th:8083/ecm/essmss/getPayrollDocList";
//						var json = '{"xappKey":"A0TESSMSS123","xYear":"'+"2019"+'","xMonth":"'+"11"+'","xEmployeeID":"'+"621015"+'"}';
//						var settings = {
//								  "async": false,
//								  "crossDomain": true,
//								  "url": url,
//								  "method": "POST",
//								  "headers": {
//								    "Content-Type": "application/json",
//								    "User-Agent": "PostmanRuntime/7.13.0",
//								    "Accept": "*/*",
//								    "Cache-Control": "no-cache",
//								    "Postman-Token": "071f5cfd-8636-43e1-9efe-16999cde4f23,b94acbbe-9af9-445a-b45d-02b3f0d7cd98",
//								    "Host": "10.121.3.62:8083",
//								    "accept-encoding": "gzip, deflate",
//								    "content-length": "78",
//								    "Connection": "keep-alive",
//								    "cache-control": "no-cache"
//								  },
//								  "processData": false,
//								  "data": json
//								}
//
//						$.ajax(settings).done(function (response) {
//						  console.log(response);
//						  itemlist = new JSONModel(response.getPayrollDocListResult);
//						});
						var xml_out;
						
						var xxl = '<?xml version="1.0" encoding="utf-8"?>';
						var xml = xxl+'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">';
							xml = xml+'<soap:Body>';
							xml = xml+'<getPayrollDocList xmlns="http://tempuri.org/">';
							xml = xml+'<xappKey>A0TESSMSS123</xappKey>';
							xml = xml+'<xYear>'+selectYear+'</xYear>';
							xml = xml+'<xMonth>'+selectMonth+'</xMonth>';
							xml = xml+'<xEmployeeID>'+user+'</xEmployeeID>';
							xml = xml+'</getPayrollDocList>';
							xml = xml+'</soap:Body>';
							xml = xml+'</soap:Envelope>';
							var settings = {
									  "async": false,
									  "crossDomain": true,
									  "url": "http://10.121.3.94/AOTWS/OTESSMSS.asmx?op=getPayrollDocList",
									  "method": "POST",
									  "dataType": "xml",
									  "headers": {
									    "Content-Type": "text/xml",
									    "Accept": "*/*",
									    "Host": "10.121.3.94",
									    "Accept-Encoding": "gzip, deflate",
									    "Connection": "keep-alive"
									  },
									  "data": xml
									}

									$.ajax(settings).done(function (response) {
										xml_out = response.getElementsByTagName("NodeName");
									});
						
						itemlist = {"nodeInfo":[]};
						var node;
						for(var i = 0; i < xml_out.length; i++)
						{
							node = xml_out[i];
							if(node.nodeType !== Node.TEXT_NODE){
								console.log(node.innerHTML);
								var item = {"nodeName":node.innerHTML}
								itemlist.nodeInfo[i] = item; 
							}
						}	
						this.byId("listTable").setModel(new JSONModel(itemlist),"listItem");
						//this.byId("listTable").setModel(itemlist,"listItem");

					}

				},
				onSelectChild : function() {
					var selectedKey = this.getView().byId("NoChildren")
							.getSelectedKey();
					if (selectedKey != "none") {
						this.getView().byId("childSection").setVisible(true);
					}

				},
				onDLbtnpress : function(oEvent) {
					var user = jQuery.sap.getUriParameters().get("user");
					var selectYear = this.getView().byId("selectYear").getSelectedKey();
					var selectMonth = this.getView().byId("selectMonth").getSelectedKey();
					
					var row = oEvent.getSource().getBindingContext("listItem").getObject();
					var docname = row.nodeName;
					var pdf = "";
					
					var xml_out;
					var xxl = '<?xml version="1.0" encoding="utf-8"?>';
					var xml = xxl+'<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">';
						xml = xml+'<soap12:Body>';
						xml = xml+'<downloadPayrollDoc xmlns="http://tempuri.org/">';
						xml = xml+'<xappKey>A0TESSMSS123</xappKey>';
						xml = xml+'<xYear>'+selectYear+'</xYear>';
						xml = xml+'<xMonth>'+selectMonth+'</xMonth>';
						xml = xml+'<xEmplopyeeID>'+user+'</xEmplopyeeID>';
						xml = xml+'<xdocName>'+docname+'</xdocName>';
						xml = xml+'</downloadPayrollDoc>';
						xml = xml+'</soap12:Body>';
						xml = xml+'</soap12:Envelope>';
						var settings = {
								  "async": false,
								  "crossDomain": true,
								  "url": "http://10.121.3.94/AOTWS/OTESSMSS.asmx?op=downloadPayrollDoc",
								  "method": "POST",
								  "dataType": "xml",
								  "headers": {
								    "Content-Type": "text/xml",
								    "Accept": "*/*",
								    "Host": "10.121.3.94",
								    "Accept-Encoding": "gzip, deflate",
								    "Connection": "keep-alive"
								  },
								  "data": xml
								}

								$.ajax(settings).done(function (response) {
									xml_out = response.getElementsByTagName("downloadPayrollDocResult");
								});
					
					
					
//					var url = "http://webdeqapp.airportthai.co.th:8083/ecm/essmss/downloadPayrollDoc";
//					var json = '{"xappKey":"A0TESSMSS123","xYear":"'+selectYear+'","xMonth":"'+selectMonth+'","xEmployeeID":"'+user+'","xdocName":"'+docname+'"}';
//					var oFileViewer = new sap.fileviewer.FileViewer();
//					var settings = {
//							  "async": false,
//							  "crossDomain": true,
//							  "url": url,
//							  "method": "POST",
//							  "headers": {
//							    "Content-Type": "application/json",
//							    "Accept": "*/*",
//							    "Cache-Control": "no-cache",	
//							    "Host": "10.121.3.62:8083",
//							    "accept-encoding": "gzip, deflate",
//							    "Connection": "keep-alive",
//							    "cache-control": "no-cache"
//							  },
//							  "processData": false,
//							  "data": json
//							}
//
//							$.ajax(settings).done(function (response) {
//								pdf = response.downloadPayrollDocResult;
//								
//							});
					
					var data = window.atob(xml_out[0].innerHTML);
					
					var byteCharacters = data;
				    var byteNumbers = new Array(byteCharacters.length);
				    for (var i = 0; i < byteCharacters.length; i++) {
				        byteNumbers[i] = byteCharacters.charCodeAt(i);
				    }
				    var byteArray = new Uint8Array(byteNumbers);
				    var blob = new Blob([byteArray], {type: 'application/pdf'});
					
					var fileUrl = URL.createObjectURL(blob);
					window.open(fileUrl);
					
					var test = "";
					
				}

			});
});