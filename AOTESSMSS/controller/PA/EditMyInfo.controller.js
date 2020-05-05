﻿sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
		'sap/m/MessageToast', 'sap/ui/model/json/JSONModel' ], function(
		BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend(
			"sap.ui.demo.toolpageapp.controller.PA.EditMyInfo", {

				onInit : function() {
					
//					var data = jQuery.sap.getUriParameters().get("lqex");
//					var decd = "";
//					var settings = {
//							  "async": false,
//							  "crossDomain": true,
//							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
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
//							  "data": data
//							}
//
//						$.ajax(settings).done(function (response) {
//						  console.log(response); 
//						  decd = response;
//						});
//					
//					
//					var itex = decd.split("|");
//					var user = itex[0];
					var user = jQuery.sap.getUriParameters().get("user");
					var pernr = user;
					var pa0001 = new JSONModel();
					var pa0002 = new JSONModel();
					var pa0006 = new JSONModel();
					var pa0185 = new JSONModel();
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0077/"+user,
			        	async: false,
			        	success: function(data){
			        		pa0077 = data;
			        		
			        	},
			        	error: function(){
			        		pa0077 = "X";
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
			        
			        if(pa0002.PA0002.konfe != "" || pa0002.PA0002.konfe != " ")
			        {
				        $.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T516T/"+pa0002.PA0002.konfe,
				        	async: false,
				        	success: function(data){
				        		reli = data.T516T.konfe;
				        		
				        	},
				        	error: function(){
				        		reli = "Z1";
				        	}
				        });
			        }
				    else{
				    	reli = "Z1";
			        }
			        
			        $.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/"+user,
			        	async: false,
			        	success: function(data){
			        		pa0804 = data;
			        		blood = pa0804.PA0804.bgrup;
			        	},
			        	error: function(){
			        		blood = "O";
			        	}
			        });
			        
			        var vpernr = this.getView().byId("PERNR");
			        var vename = this.getView().byId("ENAME");
			        var vnamzu = this.getView().byId("NAMZU");
			        var vvorsw = this.getView().byId("VORSW");
			        var vanred = this.getView().byId("ANRED");
					var vvorna = this.getView().byId("VORNA");
					var vnachn = this.getView().byId("NACHN");
					var vgbdat = this.getView().byId("GBDAT");
					var vlnamr = this.getView().byId("LNAMR");
					var vfnamr = this.getView().byId("FNAMR");
					var vnatio = this.getView().byId("NATIO");
					var vkonfe = this.getView().byId("ReligionEdit");
					var vbgrup = this.getView().byId("titleBloodEditEng");
					var vfamst = this.getView().byId("FAMST");
			        
					var date = new Date(pa0002.PA0002.gbdat);
					
					var gbdat = date.getDate().toString() + "/" + (date.getMonth() + 1).toString().padStart(2,'0') + "/" + ( date.getFullYear() ).toString();
					
					if(titel == " " || titel == "0"){
			        	titel = t522g.T522G.atext;
			        }
					
					var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					
			        vpernr.setText(pa0001.PA0001.pernr);
			        vvorna.setValue(pa0002.PA0002.vorna);
			        vanred.setSelectedKey(pa0002.PA0002.anred);
			        vanred.setSelectedKey(pa0002.PA0002.vorsw);
			        vnamzu.setSelectedKey(titel);
			        vkonfe.setSelectedKey(reli);
			        vnachn.setValue(pa0002.PA0002.nachn);
			        vlnamr.setValue(pa0002.PA0002.lnamr);
			        vfnamr.setValue(pa0002.PA0002.fnamr);
			        vbgrup.setSelectedKey(blood);
			        vgbdat.setValue(gbdat);
			        //vsname.setValue(pa0001.PA0001.sname);
			        
			        
			        vename.setText(cStr);
			        //vrufmn.setValue(pa0002.PA0002.rufnm);
			        var natiox = "";
			        if(pa0002.PA0002.natio == "TH"){
			        	natiox = "ไทย";
			        }
			        vnatio.setValue(natiox);
			        //visppl.setValue(pa0185.PA0185.isspl);
			        
			        if(pa0002.PA0002.famst == "" || pa0002.PA0002.famst == " "){
			        	vfamst.setSelectedKey("0");
			        }else{
			        	vfamst.setSelectedKey(pa0002.PA0002.famst);
			        }
			        
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
					
					if(pa0077 != "X"){
			        	var milsa;
			        	if(pa0077.PA0077.milsa == "1"){milsa = "สด.3";}
			        	else if(pa0077.PA0077.milsa == "2"){milsa = "สด.8";}
			        	else if(pa0077.PA0077.milsa == "3"){milsa = "สด.43";}
			        	else if(pa0077.PA0077.milsa == "4"){milsa = "บัตรข้าราชการทหาร";}
			        	else if(pa0077.PA0077.milsa == "5"){milsa = "ใบวิทยฐานะ (รด.)";}
			        	else if(pa0077.PA0077.milsa == "6"){milsa = "หนังสือยกเว้นบางพื้นที่";}
			        	else {milsa = "";}
			        	this.getView().byId("MILSA").setValue(milsa);
			        }
					
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.getRoute("PA/editMyInfo").attachPatternMatched(this._onObjectMatched, this);
					
			        //date = new Date(pa0185.PA0185.fpdat);
			        
			        //var fpdat = date.getDate().toString() + "/" + date.getMonth().toString() + "/" + ( date.getFullYear() + 0).toString();
			        
			        //vfpdat.setValue(fpdat);
			        
			        //var expid = new Date(pa0185.PA0185.fpdat);
			        
			        //expid = date.getDate().toString() + "/" + date.getMonth().toString() + "/" + ( date.getFullYear() + 0).toString();
			        
			        //vexpid.setValue(expid);
				},
				_onObjectMatched: function (oEvent) {
					this.onInit();
					
//					if(oEvent.getParameter("arguments").from == "myTask"){
//						this.byId("approveSection").setVisible(false);
//					}else{
//						this.byId("approveSection").setVisible(true);
//					}
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
					
//					var data = jQuery.sap.getUriParameters().get("lqex");
//					var decd = "";
//					var settings = {
//							  "async": false,
//							  "crossDomain": true,
//							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
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
//							  "data": data
//							}
//
//						$.ajax(settings).done(function (response) {
//						  console.log(response); 
//						  decd = response;
//						});
//					
//					
//					var itex = decd.split("|");
//					var user = itex[0];
					var user = jQuery.sap.getUriParameters().get("user");
					
					var qt = '"';
					
					var pa0001 = new JSONModel();
					var pa0002 = new JSONModel();
					var pa0006 = new JSONModel();
					var pa0185 = new JSONModel();
					var pa0077 = new JSONModel();
					var pa0021 = new JSONModel();
					var pa0022 = new JSONModel();
					var dcrun = new JSONModel();
					var dchead = new JSONModel();
					var dcdetail = new JSONModel();
					var wf;
					var pa0001;
					
					var pernr = this.getView().byId("PERNR").getText();
			        var ename = this.getView().byId("ENAME").getText();
			        var namzu = this.getView().byId("NAMZU").getSelectedItem().getKey();
			        var anred = this.getView().byId("ANRED").getSelectedItem().getKey();
					var vorna = this.getView().byId("VORNA").getValue();
					var nachn = this.getView().byId("NACHN").getValue();
					var lnamr = this.getView().byId("LNAMR").getValue();
					var fnamr = this.getView().byId("FNAMR").getValue();
					var natio = this.getView().byId("NATIO").getValue();
					var bgrup = this.getView().byId("titleBloodEditEng").getSelectedItem().getKey();
					var titel = this.getView().byId("TITEL").getSelectedItem().getKey();
					var vorsw = this.getView().byId("VORSW").getSelectedItem().getKey();
					var gbdat = this.getView().byId("GBDAT").getValue();
					var natio = this.getView().byId("NATIO").getValue();
					var konfe = this.getView().byId("ReligionEdit").getSelectedItem().getKey();
					var begda = this.getView().byId("BEGDA").getValue();
					var file = this.getView().byId("file02").oFileUpload.files;
//					var reason = this.getView().byId("REASON").getValue();
					
					if(vorna.length == 0 || nachn.length == 0 || fnamr.length == 0 || lnamr.length == 0 || vorsw.length == 0 || file.length < 1 || begda.length < 1){
						MessageToast.show("Please input all require field");
					}else{
					
						var year = new Date().getFullYear();
						var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
						var date = new Date().getDate();
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/01';
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
										dotyp : '01',
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
						
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/01';
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
						json.header = "ขอเปลี่ยนแปลงข้อมูล";
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = "";
						json.userad = pernr;
						json.status = "2";
						json.sttext = "รออนุมัติ";
						json.orgeh = wf.List[0].org1;
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
						
						var dataPA = $.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+user,
				        	async: false,
				        	success: function(data){
				        		pa0002 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
										
						var json = pa0002.PA0002;
	
						json.anred = anred;
						json.namzu = namzu;
						json.vorna = vorna;
						json.nachn = nachn;
						json.konfe = konfe;
						json.lnamr = lnamr;
						json.fnamr = fnamr;
						json.titel = titel;
						json.vorsw = vorsw;
						
						json = JSON.stringify(json);
						
						json = json.replace("{","");
						json = json.replace("}","");
						json = json+',"begda1":"'+begda+'","bgrup":"'+bgrup+'"}';
						json = json.replace(/"/g,"");
						json = json.replace("}","");
						json = '{"docid":"'+docid+'","script":"'+json+'","stable":"pa0002"}';
						
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
							this.onReadFile(file,"0001",docid,year,user,"01-002");
						}
						var file = this.getView().byId("file02").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year,user,"01-005");
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
							xml = xml+'<xDocTypeName>01 - ประวัติส่วนบุคคล</xDocTypeName>';
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

				}

			});
});