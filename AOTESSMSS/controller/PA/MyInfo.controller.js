sap.ui
		.define(
				[
						'sap/ui/demo/toolpageapp/controller/BaseController',
						'sap/m/MessageToast',
						'sap/ui/model/json/JSONModel',
						'sap/m/Dialog',
						'sap/m/List',
						'sap/m/StandardListItem',
						'sap/m/Text',
						'sap/m/Button',
						"sap/suite/ui/commons/networkgraph/layout/LayeredLayout",
						"sap/suite/ui/commons/networkgraph/layout/ForceBasedLayout",
						"sap/suite/ui/commons/networkgraph/ActionButton",
						"sap/suite/ui/commons/networkgraph/Node" ],
				function(BaseController, MessageToast, JSONModel, Dialog, List,
						StandardListItem, Text, Button, LayeredLayout,
						ForceBasedLayout, ActionButton, Node) {
					"use strict";
					return BaseController
							.extend(
									"sap.ui.demo.toolpageapp.controller.PA.MyInfo",
									{

										onInit : function() {
											var oViewModel = new JSONModel({
												lastLogin : new Date(
														Date.now() - 86400000)
											});
											
//											var data = jQuery.sap.getUriParameters().get("lqex");
//											var decd = "";
//											var settings = {
//													  "async": false,
//													  "crossDomain": true,
//													  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//													  "method": "POST",
//													  "headers": {
//													    "Content-Type": "application/json",
//													    "Accept": "*/*",
//													    "Cache-Control": "no-cache",
//													    "Host": "10.121.3.62:8083",
//													    "accept-encoding": "gzip, deflate",
//													    "Connection": "keep-alive",
//													    "cache-control": "no-cache"
//													  },
//													  "processData": false,
//													  "data": data
//													}
//
//												$.ajax(settings).done(function (response) {
//												  console.log(response); 
//												  decd = response;
//												});
//											
//											
//											var itex = decd.split("|");
//											var user = itex[0];
											var user = jQuery.sap.getUriParameters().get("user");
											var pernr = user;
											
											this.setModel(oViewModel, "view");
											var oModel = new JSONModel(
													"./model/employee.json");
											this.getView().setModel(oModel);
											var oModel2 = new JSONModel(
													"./model/contract.json");
											this.getView().setModel(oModel2);
											
											var pa0001 = new JSONModel();
											var pa0002 = new JSONModel();
											var pa0006 = new JSONModel();
											var pa0185 = new JSONModel();
											var pa0077 = new JSONModel();
											var pa0021 = new JSONModel();
											var pa0022 = new JSONModel();
											var pa0105;
											var pa0804;
											var t522g = new JSONModel();
											var t535n = new JSONModel();
											var t516t = new JSONModel();
											var temp = "";
											var titel = "";
											var reli = "";
											
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
														this.getView().byId("USRID0007").setText(pa0105.List[i].usrid_LONG);
														this.getView().byId("USRID_LONG").setText(pa0105.List[i].usrid_LONG);
													}
													if(pa0105.List[i].pakey.subty == "0010"){
														this.getView().byId("USRID_LONG0010").setValue(pa0105.List[i].usrid_LONG);
													}
													if(pa0105.List[i].pakey.subty == "0005"){
														this.getView().byId("USRID0005").setValue(pa0105.List[i].usrid);
														this.getView().byId("USRID1").setText(pa0105.List[i].usrid);
													}
													if(pa0105.List[i].pakey.subty == "0006"){
														this.getView().byId("USRID0006").setValue(pa0105.List[i].usrid);
													}
													if(pa0105.List[i].pakey.subty == "0002"){
														this.getView().byId("USRID0002").setValue(pa0105.List[i].usrid);
														this.getView().byId("USRID2").setText(pa0105.List[i].usrid);
													}
													if(pa0105.List[i].pakey.subty == "0003"){
														this.getView().byId("USRID0003").setValue(pa0105.List[i].usrid);
													}
													if(pa0105.List[i].pakey.subty == "0004"){
														this.getView().byId("USRID0004").setValue(pa0105.List[i].usrid);
													}
													if(pa0105.List[i].pakey.subty == "0009"){
														this.getView().byId("USRID0009").setValue(pa0105.List[i].usrid);
													}
													if(pa0105.List[i].pakey.subty == "0012"){
														this.getView().byId("USRID0012").setValue(pa0105.List[i].usrid);
													}
													if(pa0105.List[i].pakey.subty == "0008"){
														this.getView().byId("USRID0008").setValue(pa0105.List[i].usrid);
													}
													if(pa0105.List[i].pakey.subty == "0013"){
														this.getView().byId("USRID0013").setValue(pa0105.List[i].usrid);
													}
												}
												
											}
											
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
									        
									        var manag;
											var t501;
											var t503k;
											var pa;
											
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
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+user+"/1",
									        	async: false,
									        	success: function(data){
									        		pa0006 = new JSONModel(data);
									        		
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        this.byId("idAddressRigTable").setModel(pa0006,"addData");
									        
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+user+"/2",
									        	async: false,
									        	success: function(data){
									        		pa0006 = new JSONModel(data);
									        		
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        
									        this.byId("idAddressTable").setModel(pa0006,"addData1");
									        
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+user+"/01",
									        	async: false,
									        	success: function(data){
									        		pa0185 = data;
									        		
									        	},
									        	error: function(){
									        		pa0185 = "X";
									        	}
									        });
									        
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/12",
									        	async: false,
									        	success: function(data){
									        		temp = data;
									        		
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        if(temp.List.length > 0){
									        
										        dataPA = $.ajax({
										        	type: "GET",
										        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/11",
										        	async: false,
										        	success: function(data){
										        		if(data.List.length > 0){
										        			temp.List[1] = data.List[0];
										        		}
										        	},
										        	error: function(){
										        		
										        	}
										        });
									        
									        }else{
									        	dataPA = $.ajax({
										        	type: "GET",
										        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/11",
										        	async: false,
										        	success: function(data){
										        		temp = data;
										        		
										        	},
										        	error: function(){
										        		
										        	}
										        });
									        }
									        
									        if(temp.List.length > 0){
										        for(var i = 0;i < temp.List.length; i++){
										        	if(temp.List[i].pakey.subty == "11"){
										        		temp.List[i].status = "บิดา";
										        		temp.List[i].subty = temp.List[i].pakey.subty;
										        	}else if(temp.List[i].pakey.subty == "12"){
										        		temp.List[i].status = "มารดา";
										        		temp.List[i].subty = temp.List[i].pakey.subty;
										        	}
										        	
										        }
									        }
									        
									        pa0021 = new JSONModel(temp);
									        
									        this.byId("idFamilyTable").setModel(pa0021,"famData");
									        temp = "";
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/1",
									        	async: false,
									        	success: function(data){
									        		temp = data;
									        		
									        		
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        if(temp.List.length > 0){
									        
										        for(var i = 0;i < temp.List.length; i++){
										        	if(temp.List[i].pakey.subty == "1"){
										        		temp.List[i].status = "คู่สมรส";
										        		temp.List[i].subty = temp.List[i].pakey.subty;
										        	}else if(temp.List[i].pakey.subty == "12"){
										        		temp.List[i].status = "มารดา";
										        		temp.List[i].subty = temp.List[i].pakey.subty;
										        	}
										        	
										        }
									        
									        }
									        
									        pa0021 = new JSONModel(temp);
									        
									        this.byId("idSpourseTab").setModel(pa0021,"famData2");
									        
									        temp = "";
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/2",
									        	async: false,
									        	success: function(data){
									        		temp = data;
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        if(temp.List.length > 0){
									        
										        for(var i = 0;i < temp.List.length; i++){
										        	if(temp.List[i].pakey.subty == "2"){
										        		if(temp.List[i].zzcstat == "01"){
										        			temp.List[i].status = "บุตรของหญิงโสด";
										        		}else if(temp.List[i].zzcstat == "02"){
										        			temp.List[i].status = "บุตรที่เกิดจากการสมรส";
										        		}else if(temp.List[i].zzcstat == "03"){
										        			temp.List[i].status = "บุตรในความปกครองของบิดา";
										        		}else if(temp.List[i].zzcstat == "04"){
										        			temp.List[i].status = "บุตรในความปกครองของมารดา";
										        		}else if(temp.List[i].zzcstat == "05"){
										        			temp.List[i].status = "บุตรในความปกครองของบิดาและมารดา";
										        		}else if(temp.List[i].zzcstat == "06"){
										        			temp.List[i].status = "จดทะเบียนรับรองบุตร";
										        		}
										        		temp.List[i].subty = temp.List[i].pakey.subty;
										        		temp.List[i].no = temp.List[i].pakey.objps;
										        	}else if(temp.List[i].pakey.subty == "12"){
										        		temp.List[i].status = "มารดา";
										        		temp.List[i].subty = temp.List[i].pakey.subty;
										        	}
										        	
										        }
									        
									        }
									        
									        pa0021 = new JSONModel(temp);
									        
									        this.byId("idChildTable").setModel(pa0021,"famData3");
									        
									        temp = "";
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/90",
									        	async: false,
									        	success: function(data){
									        		temp = data;
									        		
									        		
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        if(temp.List.length > 0){
									        	var pa0187;
									        	$.ajax({
										        	type: "GET",
										        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+user+"/90",
										        	async: false,
										        	success: function(data){
										        		pa0187 = data;
										        		
										        		
										        	},
										        	error: function(){
										        		
										        	}
										        });
									        	
										        for(var i = 0;i < temp.List.length; i++){
										        	
										        	temp.List[i].status = "";
									        		temp.List[i].subty = temp.List[i].pakey.subty;
									        		temp.List[i].no = i+1;
									        		if(pa0187.List.length > 0){
									        			for(var t = 0;t < pa0187.List.length;t++){
									        				if(temp.List[i].pakey.objps == pa0187.List[t].pakey.objps){
									        					$.ajax({
														        	type: "GET",
														        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G/"+pa0187.List[t].anred,
														        	async: false,
														        	success: function(data){
														        		t522g = data;
														        		
														        	},
														        	error: function(){
														        		
														        	}
														        });
									        					temp.List[i].title = t522g.T522G.atext;
									        					temp.List[i].address = pa0187.List[t].stras+" "+pa0187.List[t].locat+" "+pa0187.List[t].ort02+" "+pa0187.List[t].ort01+" "+pa0187.List[t].pstlz;
									        					temp.List[i].telnr = pa0187.List[t].telnr;
									        				}
									        			}
									        		}
										        	
										        }
									        
									        }
									        
									        pa0021 = new JSONModel(temp);
									        
									        this.byId("idcontactPersonTable").setModel(pa0021,"famData4");
									        
									        temp = "";
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/91",
									        	async: false,
									        	success: function(data){
									        		temp = data;
									        		
									        		
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        if(temp.List.length > 0){
									        	
									        	var pa0187;
									        	$.ajax({
										        	type: "GET",
										        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+user+"/91",
										        	async: false,
										        	success: function(data){
										        		pa0187 = data;
										        		
										        		
										        	},
										        	error: function(){
										        		
										        	}
										        });
									        	
										        for(var i = 0;i < temp.List.length; i++){
										        	
										        	temp.List[i].status = "";
									        		temp.List[i].subty = temp.List[i].pakey.subty;
									        		temp.List[i].no = i+1;
										        	
									        		if(pa0187.List.length > 0){
									        			for(var t = 0;t < pa0187.List.length; t++){
										        			if(temp.List[i].pakey.objps == pa0187.List[t].pakey.objps){
										        				$.ajax({
														        	type: "GET",
														        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G/"+pa0187.List[t].anred,
														        	async: false,
														        	success: function(data){
														        		t522g = data;
														        		
														        	},
														        	error: function(){
														        		
														        	}
														        });
										        				temp.List[i].title = t522g.T522G.atext;
												        		temp.List[i].address = pa0187.List[t].stras+" "+pa0187.List[t].locat+" "+pa0187.List[t].ort02+" "+pa0187.List[t].ort01+" "+pa0187.List[t].pstlz;
												        		temp.List[i].telnr = pa0187.List[t].telnr;
												        		temp.List[i].perno = pa0187.List[t].num01;
												        		temp.List[i].efaml = pa0187.List[t].efaml;
										        			}
										        		}
											        	
											        }
										        	
										        }
									        
									        }
									        
									        pa0021 = new JSONModel(temp);
									        
									        this.byId("idcontactAOTPersonTable").setModel(pa0021,"famData5");
									        
									        temp = "";
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0022/"+user,
									        	async: false,
									        	success: function(data){
									        		temp = data;
									        		
									        		
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        if(temp.List.length > 0){
									        	
									        
										        for(var i = 0;i < temp.List.length; i++){
										        	
										        	if(temp.List[i].slart == "01"){
										        		temp.List[i].sltext = "ประถมศึกษา";
										        	}else if(temp.List[i].slart == "02"){
										        		temp.List[i].sltext = "มัธยมศึกษาตอนต้น";
										        	}else if(temp.List[i].slart == "03"){
										        		temp.List[i].sltext = "มัธยมศึกษาตอนปลาย";
										        	}else if(temp.List[i].slart == "04"){
										        		temp.List[i].sltext = "ปวช.";
										        	}else if(temp.List[i].slart == "06"){
										        		temp.List[i].sltext = "ปวส.";
										        	}else if(temp.List[i].slart == "07"){
										        		temp.List[i].sltext = "ปวท.";
										        	}else if(temp.List[i].slart == "08"){
										        		temp.List[i].sltext = "อนุปริญญา";
										        	}else if(temp.List[i].slart == "09"){
										        		temp.List[i].sltext = "ปริญญาตรี";
										        	}else if(temp.List[i].slart == "10"){
										        		temp.List[i].sltext = "ปริญญาโท";
										        	}else if(temp.List[i].slart == "11"){
										        		temp.List[i].sltext = "ปริญญาเอก";
										        	}else if(temp.List[i].slart == "ZZ"){
										        		temp.List[i].sltext = "ใบประกอบวิชาชีพ";
										        	}else if(temp.List[i].slart == "05"){
										        		temp.List[i].sltext = "เทียบเท่า ปวช.";
										        	}
										        	temp.List[i].status = "";
										        	var t517y;
										        	$.ajax({
											        	type: "GET",
											        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T517Y/"+temp.List[i].sltp1,
											        	async: false,
											        	success: function(data){
											        		t517y = data;
											        		
											        		
											        	},
											        	error: function(){
											        		
											        	}
											        });
										        	
										        	var t519t;
										        	$.ajax({
											        	type: "GET",
											        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T519T/"+temp.List[i].slabs+"/E",
											        	async: false,
											        	success: function(data){
											        		t519t = data;
											        		
											        		
											        	},
											        	error: function(){
											        		
											        	}
											        });
										        	
										        	var bdate = new Date(temp.List[i].pakey.begda);
										        	var edate = new Date(temp.List[i].pakey.endda);
										        	
										        	bdate = bdate.getDate().toString().padStart(2,'0')+"/"+(bdate.getMonth()+1).toString().padStart(2,'0')+"/"+bdate.getFullYear();
										        	
										        	edate = edate.getDate().toString().padStart(2,'0')+"/"+(edate.getMonth()+1).toString().padStart(2,'0')+"/"+edate.getFullYear();
										        	
										        	if(temp.List[i].sltp1 != "00000"){
										        		temp.List[i].brnch = t517y.T517Y.mandt;
										        	}
										        	temp.List[i].degree = t519t.T519T.stext;
									        		temp.List[i].subty = temp.List[i].pakey.subty;
									        		temp.List[i].begda = bdate;
									        		temp.List[i].endda = edate;
									        		temp.List[i].no = i+1;
										        	
										        }
									        
									        }
									        
									        pa0022 = new JSONModel(temp);
									        
									        this.byId("idEducationHistoryTable").setModel(pa0022,"eduData");
									        
									        temp = "";
									        dataPA = $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9202/"+user,
									        	async: false,
									        	success: function(data){
									        		temp = data;
									        		
									        		
									        	},
									        	error: function(){
									        		
									        	}
									        });
									        
									        if(temp.List.length > 0){
									        	for(var i = 0;i < temp.List.length; i++){
									        		var bdate = new Date(temp.List[i].begda);
									        		bdate = bdate.getDate().toString().padStart(2,'0')+"/"+(bdate.getMonth()+1).toString().padStart(2,'0')+"/"+bdate.getFullYear();
									        		temp.List[i].begda = bdate;
									        		temp.List[i].badge = temp.List[i].pa9202key.badge;
									        	}
									        }
									        
									        var pa9202 = new JSONModel(temp);
									        
									        this.byId("idInsigniaTable").setModel(pa9202,"badgeData");
									        
									        var hrp1001;
									        
									        $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1001/"+pernrpad,
									        	async: false,
									        	success: function(data){
									        		hrp1001 = data;
									        	},
									        	error: function(){
									        		hrp1001 = "X";
									        	}
									        });
									        
									        if(hrp1001 != "X" && hrp1001.List.length >0){
									        	var hrp1000;
									        	for(var t=0;t< hrp1001.List.length;t++){
									        		$.ajax({
											        	type: "GET",
											        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+hrp1001.List[t].sobid,
											        	async: false,
											        	success: function(data){
											        		hrp1000 = data;
											        	},
											        	error: function(){
											        		hrp1000 = "X";
											        	}
											        });
									        		if(hrp1000 != "X"){
									        			hrp1001.List[t].pos = hrp1000.HRP1000.stext;
									        			hrp1001.List[t].depart = hrp1000.HRP1000.short;
									        			hrp1001.List[t].level = "";
									        			hrp1001.List[t].begda = this.dateFormat(hrp1001.List[t].hrpkey2.begda);
									        			hrp1001.List[t].join = this.dateFormat(hrp1001.List[t].hrpkey2.begda);
									        		}
									        	}
									        }
//									        var pa9201 = {"List":[{"pos":"เจ้าหน้าที่บริหาร","level":"3","depart":"สพอ.ฝพป.","begda":"01/11/2018","join":"01/11/2018"}]};
									        
//									        var pa9201 = new JSONModel(pa9201);
									        var pa9201 = new JSONModel(hrp1001);
									        this.byId("idWorkHistoryTable").setModel(pa9201,"hisData");
									        
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
									        
									        if(pa0002.PA0002.konfe != "" || pa0002.PA0002.konfe != " ")
									        {
										        $.ajax({
										        	type: "GET",
										        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T516T/"+pa0002.PA0002.konfe,
										        	async: false,
										        	success: function(data){
										        		reli = data.T516T.ktext;
										        		
										        	},
										        	error: function(){
										        		reli = "พุทธ";
										        	}
										        });
									        }
										    else{
										    	reli = "พุทธ";
									        }
									       
									        $.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/"+pernr,
									        	async: false,
									        	success: function(data){
									        		pa0804 = data.PA0804;
									        		
									        	},
									        	error: function(){
									        		pa0804 = "X";
									        	}
									        });
									        
									        var pernr = this.getView().byId("pernr");
									        var fullname = this.getView().byId("fullname");
									        var idcard = this.getView().byId("idcard");
									        var military = this.getView().byId("military");
									        var tname = this.getView().byId("tname");
									        var ename = this.getView().byId("ename");
									        var birthdate = this.getView().byId("birthdath");
									        var tel1 = this.getView().byId("USRID0002");
									        var tel2= this.getView().byId("USRID0003");
									        var fax = this.getView().byId("USRID0004");
									        var email = this.getView().byId("USRID_LONG");
									        var religion = this.getView().byId("religion");
									        var bloodty = this.getView().byId("bloodty");
									        var smark = this.getView().byId("SMARK");
									        var marrid = this.getView().byId("marrid");
									        
									        if(pa0804 != "X"){
									        	smark.setValue(pa0804.smark);
									        	bloodty.setText(pa0804.bgrup);
									        }
									        if(pa0077 != "X"){
									        	var milsa;
									        	if(pa0077.PA0077.milsa == "1"){milsa = "สด.3";}
									        	else if(pa0077.PA0077.milsa == "2"){milsa = "สด.8";}
									        	else if(pa0077.PA0077.milsa == "3"){milsa = "สด.43";}
									        	else if(pa0077.PA0077.milsa == "4"){milsa = "บัตรข้าราชการทหาร";}
									        	else if(pa0077.PA0077.milsa == "5"){milsa = "ใบวิทยฐานะ (รด.)";}
									        	else if(pa0077.PA0077.milsa == "6"){milsa = "หนังสือยกเว้นบางพื้นที่";}
									        	else {milsa = "";}
									        	military.setText(milsa);
									        }
									        pernr.setText(pa0001.PA0001.pernr);
									        
									        if(titel == " " || titel == "0"){
									        	titel = t522g.T522G.atext;
									        }
									        var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
									        fullname.setText(cStr);
									        tname.setText(cStr);
									        ename.setText(pa0002.PA0002.vorsw + " " + pa0002.PA0002.fnamr + " " + pa0002.PA0002.lnamr);
									        if(pa0185 != "X"){
									        	idcard.setText(pa0185.PA0185.icnum);
									        }
									        
									        if(pa0002.PA0002.famst == "0"){marrid.setText("โสด");}
									        else if(pa0002.PA0002.famst == "1"){marrid.setText("สมรส");}
									        else if(pa0002.PA0002.famst == "2"){marrid.setText("หย่า");}
									        else if(pa0002.PA0002.famst == "3"){marrid.setText("หม้าย");}
									        else{marrid.setText(" ");}
									        var gdat = new Date(pa0002.PA0002.gbdat);
									        gdat = gdat.getDate().toString()+"/"+(gdat.getMonth() +1).toString()+"/"+gdat.getFullYear();
									        
									        birthdate.setText(gdat);
									        
									        religion.setText(reli);
									        
									        //var imgdata = '/9j/4AAQSkZJRgABAQEAYABgAAD/4TBIRXhpZgAATU0AKgAAAAgABgALAAIAAAAmAAAIYgESAAMAAAABAAEAAAExAAIAAAAmAAAIiAEyAAIAAAAUAAAIrodpAAQAAAABAAAIwuocAAcAAAgMAAAAVgAAEUYc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAV2luZG93cyBQaG90byBFZGl0b3IgMTAuMC4xMDAxMS4xNjM4NAAyMDE5OjA3OjI2IDEyOjQ4OjM0AAAGkAMAAgAAABQAABEckAQAAgAAABQAABEwkpEAAgAAAAM4MgAAkpIAAgAAAAM4MgAAoAEAAwAAAAEAAQAA6hwABwAACAwAAAkQAAAAABzqAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAxOTowNzoyNiAxMjozNDoyNgAyMDE5OjA3OjI2IDEyOjM0OjI2AAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAEZQBGwAFAAAAAQAAEZwBKAADAAAAAQAC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bnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+PHhtcDpDcmVhdG9yVG9vbD5XaW5kb3dzIFBob3RvIEVkaXRvciAxMC4wLjEwMDExLjE2Mzg0PC94bXA6Q3JlYXRvclRvb2w+PHhtcDpDcmVhdGVEYXRlPjIwMTktMDctMjZUMTI6MzQ6MjYuODIwPC94bXA6Q3JlYXRlRGF0ZT48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAD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';
									        									        
									        var imgdata;
									        var im_data = '{"IM_PERNR":"'+pernrpad+'"}';
									        var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
									        var settings = {
									        		  "async": false,
									        		  "crossDomain": true,
									        		  "url": "http://pocdeqapp.airportthai.co.th:51000/RESTAdapter/HRPAI08_130",
									        		  "method": "POST",
									        		  "headers": {
									        		    "Content-Type": "application/json",
									        		    "Authorization": "Basic "+ auth_logon,
									        		    "Accept": "*/*",
									        		    "Cache-Control": "no-cache",
									        		    "Host": "pocdeqapp.airportthai.co.th:51000",
									        		    "Accept-Encoding": "gzip, deflate",
									        		    'Access-Control-Allow-Origin': '*',
									        		    "Content-Length": "350",
									        		    "Connection": "keep-alive",
									        		    "cache-control": "no-cache"
									        		  },
									        		  "data": im_data
									        		}

									        $.ajax(settings).done(function (response) {
									        	console.log(response);
									        	imgdata = response.EX_BUFFER;
									        });

									        var byteCharacters = window.atob(imgdata);
										    var byteNumbers = new Array(byteCharacters.length);
										    for (var i = 0; i < byteCharacters.length; i++) {
										        byteNumbers[i] = byteCharacters.charCodeAt(i);
										    }
										    var byteArray = new Uint8Array(byteNumbers);
										    var blob = new Blob([byteArray], {type: 'image/jpeg'});
											
											var fileUrl = URL.createObjectURL(blob);
											
											//window.open(fileUrl);
									        
									        var testimg = this.getView().byId("imgProfile");
									        
									        testimg.setSrc(fileUrl);
									        
									        var breake;

										},
										dateFormat: function(value){
											var date = new Date(value);
											var d = date.getDate().toString().padStart(2, '0');
											var m = (date.getMonth() +1).toString().padStart(2, '0');
											var y = date.getFullYear();
											return [d,m,y].join("/");
										},
										onMasterPressed : function(oEvent) {
											var oContext = oEvent.getParameter(
													"listItem")
													.getBindingContext("side");
											var sPath = oContext.getPath()
													+ "/selected";
											oContext.getModel().setProperty(
													sPath, true);
											var sSelectedMasterElement = oContext
													.getProperty("title");
											var sKey = oContext
													.getProperty("key");
											switch (sSelectedMasterElement) {
											case "System Settings": {
												this.getRouter().navTo(sKey);
												break;
											}
											default: {
												MessageToast
														.show(sSelectedMasterElement
																+ " was pressed");
												break;
											}
											}
										},
										
										onSavePressed : function() {
											MessageToast.show("Saved");
										},

										onCancelPressed : function() {
											MessageToast.show("Cancel");
										},

										onEditPressed : function() {
											MessageToast.show("Edit");
										},
										onEdit : function() {
											this.getView().byId(
													"contractDisplay")
													.setVisible(false);
											this.getView().byId("contractEdit")
													.setVisible(true);
										},
										onResizableDialog : function() {
											if (!this.resizableDialog) {
												this.resizableDialog = new Dialog(
														{
															title : 'Resizable Available Products',
															contentWidth : "550px",
															contentHeight : "300px",
															resizable : true,
															content : new List(
																	{
																		items : {
																			path : '/SupplierCollection',
																			template : new StandardListItem(
																					{
																						title : "{Spouse}"
																					})
																		}
																	}),
															beginButton : new Button(
																	{
																		text : 'Close',
																		press : function() {
																			this.resizableDialog
																					.close();
																		}
																				.bind(this)
																	})
														});

												// to get access to the global
												// model
												this.getView().addDependent(
														this.resizableDialog);
											}

											this.resizableDialog.open();
										},
										_getDialog : function() {
											if (!this._oDialog) {
												this._oDialog = sap.ui
														.xmlfragment("sap.ui.demo.toolpageapp.view.PA.HelloDialog");
												this.getView().addDependent(
														this._oDialog);
											}
											return this._oDialog;
										},
										onOpenDialog : function() {
											this._getDialog().open();
										},
										onOpenFDialog : function() {
											// var oView = this.getView();
											if (!this._oDialog) {
												this._oDialog = sap.ui
														.xmlfragment(
																"sap.ui.demo.toolpageapp.view.PA.FatherDialog",
																this);
												this.getView().addDependent(
														this._oDialog);
											}
											this._oDialog.open();
										},
										onCloseDialog : function() {
											this._oDialog.close();
										},
										onDeleteDialog : function() {
											var dialog = new Dialog(
													{
														title : 'ลบข้อมูล',
														type : 'Message',
														content : new Text(
																{
																	text : 'กรุณายืนยันการลบข้อมูล'
																}),
														beginButton : new Button(
																{
																	text : 'ยืนยัน',
																	press : function() {
																		MessageToast
																				.show('ข้อมูลถูกลบแล้ว');
																		dialog
																				.close();
																	}
																}),
														endButton : new Button(
																{
																	text : 'ยกเลิก',
																	press : function() {
																		dialog
																				.close();
																	}
																}),
														afterClose : function() {
															dialog.destroy();
														}
													});

											dialog.open();
										},
										onPressButton : function() {
											this.getRouter()
													.navTo("PA/editMyInfo");
										},
										onEditCureentAdd : function() {
											this.getRouter().navTo("PA/createCurrentAddress");
										},
										onAddContact : function() {
											this.getRouter().navTo("PA/addContactPerson");
										},
										onPressButton2 : function() {
											this.getRouter().navTo("PA/address");
										},
										onPressButton3 : function() {
											this.getRouter().navTo("PA/spouse");
										},
										onPressButton4 : function(value) {
											var subty = value.getSource().data("mydata");
											if(subty == "1"){
												this.getRouter().navTo("PA/viewspouse");
											}else if(subty == "11"){
												this.getRouter().navTo("PA/viewfather");
											}else if(subty == "12"){
												this.getRouter().navTo("PA/viewmother");
											}else if(subty == "2"){
												this.getRouter().navTo("PA/viewChildren");
											}
											
										},
										onPressButton5 : function(value) {
											var subty = value.getSource().data("mydata");
											if(subty == "1"){
												this.getRouter().navTo("PA/spouse");
											}else if(subty == "11"){
												this.getRouter().navTo("PA/father");
											}else if(subty == "12"){
												this.getRouter().navTo("PA/mother");
											}else if(subty == "2"){
												this.getRouter().navTo("PA/editChildren");
											}
										},
										onPressButton6 : function() {
											this.getRouter().navTo(
													"PA/addChildren");
										},
										onPressButton7 : function() {
											this.getRouter().navTo(
													"PA/editChildren");
										},
										onPressButton8 : function() {
											this.getRouter().navTo(
													"PA/addEducation");
										},
										onPressButton9 : function() {
											this.getRouter().navTo("PA/education");
										},
										onPressButton10 : function(value) {
											var subty = value.getSource().data("mydata");
											this.getRouter().navTo("PA/editChildren",{from: subty});
										},
										onPressButton11 : function(value) {
											var subty = value.getSource().data("mydata");
											this.getRouter().navTo("PA/viewChildren",{from: subty});
										},
										onPressAddParent : function() {
//											var data = jQuery.sap.getUriParameters().get("lqex");
//											var decd = "";
//											var settings = {
//													  "async": false,
//													  "crossDomain": true,
//													  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//													  "method": "POST",
//													  "headers": {
//													    "Content-Type": "application/json",
//													    "Accept": "*/*",
//													    "Cache-Control": "no-cache",
//													    "Host": "10.121.3.62:8083",
//													    "accept-encoding": "gzip, deflate",
//													    "Connection": "keep-alive",
//													    "cache-control": "no-cache"
//													  },
//													  "processData": false,
//													  "data": data
//													}
//
//												$.ajax(settings).done(function (response) {
//												  console.log(response); 
//												  decd = response;
//												});
//											
//											
//											var itex = decd.split("|");
//											var user = itex[0];
											
											var user = jQuery.sap.getUriParameters().get("user");
											var have_father;
											var have_mother;
											
											$.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/12",
									        	async: false,
									        	success: function(data){
									        		if(data.List.length > 0){
									        			have_mother	= "X";  
									        		}else{
									        			have_mother = "";
									        		}
									        		 		
									        	},
									        	error: function(){
									        		have_mother = "";
									        	}
									        });
											
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
											if(have_father == "X" && have_mother == "X"){
												MessageToast.show("Already have Mother & Father in System");
											}else{
												this.getRouter().navTo("PA/addParent");
											}
											
										},
										onAddContact: function() {
											this.getRouter().navTo("PA/addContactPerson");
										},
										onAddRefer : function(){
											this.getRouter().navTo("PA/referee");
										},
										onSaveinfo : function (){
											
//											var data = jQuery.sap.getUriParameters().get("lqex");
//											var decd = "";
//											var settings = {
//													  "async": false,
//													  "crossDomain": true,
//													  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//													  "method": "POST",
//													  "headers": {
//													    "Content-Type": "application/json",
//													    "Accept": "*/*",
//													    "Cache-Control": "no-cache",
//													    "Host": "10.121.3.62:8083",
//													    "accept-encoding": "gzip, deflate",
//													    "Connection": "keep-alive",
//													    "cache-control": "no-cache"
//													  },
//													  "processData": false,
//													  "data": data
//													}
//
//												$.ajax(settings).done(function (response) {
//												  console.log(response); 
//												  decd = response;
//												});
//											
//											
//											var itex = decd.split("|");
//											var user = itex[0];
											var user = jQuery.sap.getUriParameters().get("user");
											var pernr = user;
											var dchead;
											var dcrun;
											var docid;
											
											var year = new Date().getFullYear();
											var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
											var date = new Date().getDate().toString().padStart(2,'0');
											
											var data = {
												pakey : {
													pernr : pernr,
													begda : [year,month,date].join("-"),
													endda : "9999-12-31",
													mandt : "120",
													objps : "",
													seqnr : 0,
													sprps : ""
												}
											}
											
											var pa0105;
											var method = "POST";
											var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0105/";
											$.ajax({
									        	type: "GET",
									        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0105/"+user,
									        	async: false,
									        	success: function(data){
									        		pa0105 = data;	
									        	},
									        	error: function(){
									        		pa0105 = "X";
									        	}
									        });
											
											for(var i = 0;i < 11;i++){
												var valdata;
												
												if( i == 0){
													valdata = this.getView().byId("USRID_LONG0010").getValue();
													data.pakey.subty = "0010";
													data.usrty = "0010";
													data.USRID_LONG0010 = valdata;
												}else if(i == 1){
													valdata = this.getView().byId("USRID0005").getValue();
													data.pakey.subty = "0005";
													data.usrty = "0005";
													data.USRID0005 = valdata;
												}else if(i == 2){
													valdata = this.getView().byId("USRID0006").getValue();
													data.pakey.subty = "0006";
													data.usrty = "0006";
													data.USRID0006 = valdata;
												}else if(i == 3){
													valdata = this.getView().byId("USRID0002").getValue();
													data.pakey.subty = "0002";
													data.usrty = "0002";
													data.USRID0002 = valdata;
												}else if(i == 4){
													valdata = this.getView().byId("USRID0003").getValue();
													data.pakey.subty = "0003";
													data.usrty = "0003";
													data.USRID0003 = valdata;
												}else if(i == 5){
													valdata = this.getView().byId("USRID0004").getValue();
													data.pakey.subty = "0004";
													data.usrty = "0004";
													data.USRID0004 = valdata;
												}else if(i == 6){
													valdata = this.getView().byId("USRID0009").getValue();
													data.pakey.subty = "0009";
													data.usrty = "0009";
													data.USRID0009 = valdata;
												}else if(i == 7){
													valdata = this.getView().byId("USRID0012").getValue();
													data.pakey.subty = "0012";
													data.usrty = "0012";
													data.USRID0012 = valdata;
												}else if(i == 8){
													valdata = this.getView().byId("USRID0008").getValue();
													data.pakey.subty = "0008";
													data.usrty = "0008";
													data.USRID0008 = valdata;
												}else if(i == 9){
													valdata = this.getView().byId("USRID0013").getValue();
													data.pakey.subty = "0013";
													data.usrty = "0013";
													data.USRID0013 = valdata;
												}else if(i == 10){
													valdata = this.getView().byId("SMARK").getValue();
													data.SMARK = valdata;
													data.BGRUP = this.getView().byId("BGRUP").getSelectedItem().getKey();
												}
												for(var d = 0;d < pa0105.List.length;d++){
													if(pa0105.List[d].pakey.subty == data.pakey.subty){
														method = "PUT";
														url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0105/"+pernr+"/"+data.usrty+"/"
														break;
													}else{
														method = "POST";
														url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0105/";
													}
												}
//												if(i < 10){
//													data.usrid_LONG = valdata;
//													data.usrid = valdata;
//													
//													var json = JSON.stringify(data);
													
//													var put0105 = {
//															  "async": false,
//															  "crossDomain": true,
//															  "url": url,
//															  "method": method,
//															  "headers": {
//															    "Content-Type": "application/json",
//															    
//															    "Accept": "*/*",
//															    "Cache-Control": "no-cache",
//															    
//															    "Host": "10.121.3.62:8088",
//															    "accept-encoding": "gzip, deflate",
//															    //"content-length": "1013",
//															    "Connection": "keep-alive",
//															    "cache-control": "no-cache"
//															  },
//															  "processData": false,
//															  "data": json
//															}
//													
//													$.ajax(put0105).done(function (response) {
//														console.log(response);
//													});
//												}else{
//													var pa0804;
//													var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/"+pernr;
//													var method = "PUT";
//													
//													$.ajax({
//											        	type: "GET",
//											        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/"+pernr,
//											        	async: false,
//											        	success: function(data){
//											        		pa0804 = data.PA0804;
//											        		
//											        	},
//											        	error: function(){
//											        		pa0804 = "X";
//											        	}
//											        });
//													
//													if(pa0804 == "X"){
//														$.ajax({
//												        	type: "GET",
//												        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/template",
//												        	async: false,
//												        	success: function(data){
//												        		pa0804 = data.PA0804;
//												        		
//												        	},
//												        	error: function(){
//												        		pa0804 = "X";
//												        	}
//												        });
//														
//														url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804";
//														method = "POST";
//														pa0804.pernr = pernr;
//													}
//													pa0804.smark = valdata;
//													pa0804.bgrup = this.getView().byId("BGRUP").getSelectedItem().getKey();
//													
//													var json = JSON.stringify(pa0804);
//													var put0804 = {
//															  "async": false,
//															  "crossDomain": true,
//															  "url": url,
//															  "method": method,
//															  "headers": {
//															    "Content-Type": "application/json",
//															    
//															    "Accept": "*/*",
//															    "Cache-Control": "no-cache",
//															    
//															    "Host": "10.121.3.62:8088",
//															    "accept-encoding": "gzip, deflate",
//															    //"content-length": "1013",
//															    "Connection": "keep-alive",
//															    "cache-control": "no-cache"
//															  },
//															  "processData": false,
//															  "data": json
//															}
//													
//													$.ajax(put0804).done(function (response) {
//														console.log(response);
//													});
//												}
											
											}
											
											var script = JSON.stringify(data);
											
											var year = new Date().getFullYear();
											var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
											var date = new Date().getDate();
											var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/10';
											var year_budish = (year + 0).toString().substring(2,4); 
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
															dotyp : '10',
															module : 'PA'+year+month
														},
														curid : "",
														curno : 0,
														maxno : 999999,
														minno : 1,
												};
												
												var data = JSON.stringify(data);
												
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
											
											var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/10';
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
											
											var docid = dcrun.curid;
											var json = dchead;
											
											json.docid = docid;
											json.module = 'PA';
											json.header = "เปลี่ยนแปลงข้อมูลการติดต่อ";
											json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
											json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
											json.pernr = "";
											json.userad = pernr;
											json.status = "0";
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
											});
											
											script = script.replace("}","");
											script = script.replace("{","");
											script = script.replace(/"/g,"");
											
											json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa0105"}';
											
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
											});
											
											MessageToast.show("Saved : " + docid);
											
											this.getRouter().navTo("myInfo");
											
										},
										onPressEditMaritalStatus : function() {
											this.getRouter().navTo("PA/maritalStatus");
										}// ,

									/*
									 * onOpenDialog2 : function() { var oView =
									 * this.getView(); // var oDialog =
									 * oView.byId("helloDialog"); // create
									 * dialog lazily if (!this._oDialog) { //
									 * create dialog via fragment // factory
									 * this._oDialog = sap.ui.xmlfragment(
									 * "sap.ui.demo.toolpageapp.view.ChildDialog",this);
									 * oView.addDependent(this._oDialog); }
									 * this._oDialog.open(); }
									 * 
									 * onOpenDialog4 : function() { var oView =
									 * this.getView(); // var oDialog =
									 * oView.byId("helloDialog"); // create
									 * dialog lazily if (!this._oDialog) { //
									 * create dialog via fragment // factory
									 * this._oDialog = sap.ui.xmlfragment(
									 * "sap.ui.demo.toolpageapp.view.MotherDialog",this);
									 * oView.addDependent(this._oDialog); }
									 * this._oDialog.open(); }
									 */

									});
				});
