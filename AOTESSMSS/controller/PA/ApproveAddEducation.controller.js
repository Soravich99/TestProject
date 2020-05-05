sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
		'sap/m/MessageToast', 'sap/ui/model/json/JSONModel' ], function(
		BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend(
			"sap.ui.demo.toolpageapp.controller.PA.ApproveAddEducation", {

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
			        
			        var vename = this.getView().byId("ENAME_APP");
					
			        if(titel == " " || titel == "0"){
			        	titel = t522g.T522G.atext;
			        }
					
					var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					
					vename.setValue(cStr);
					
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
					
					this.getView().byId("PLANS_DESC_APP").setValue(pa.paPos.pos_l);
					
					var date = new Date();
					var d = date.getDate();
					var m = (date.getMonth() + 1).toString().padStart(2,'0');
					var y = (date.getFullYear()).toString().padStart(2,'0');
					this.getView().byId("approveDate").setValue([d,m,y].join("/"));
					
					var sValue = jQuery.sap.getUriParameters().get("from");
					var complete_url = window.location.href;
					var docno = complete_url.split("/").pop();
					var docData = new JSONModel();
					
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa0022";
					$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		docData = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var script = docData.tblDocdetail.script;
					var pa0022_arr = script.split(",");
					var pernr = "";
			        var slart = "";
			        var slabs = "";
			        var sltp1 = "";
			        var insti = "";
			        var begda = "";
			        var endda = "";
					
					var arrayLength = pa0022_arr.length;
					for (var i = 0; i < arrayLength; i++) {
						var fieldar = pa0022_arr[i].split(":");
						var field = fieldar[0];
					    if(field.includes("pernr") == true){ pernr = pa0022_arr[i].split(":").pop(); }
					    if(field.includes("slart") == true){ slart = pa0022_arr[i].split(":").pop(); }
					    if(field.includes("slabs") == true){ slabs = pa0022_arr[i].split(":").pop(); }
					    if(field.includes("sltp1") == true){ sltp1 = pa0022_arr[i].split(":").pop(); }
					    if(field.includes("insti") == true){ insti = pa0022_arr[i].split(":").pop(); }
					    if(field.includes("begda") == true){ begda = pa0022_arr[i].split(":").pop(); }
					    if(field.includes("endda") == true){ endda = pa0022_arr[i].split(":").pop(); }


					}
					
					if(user == pernr){
						this.getView().byId("approveSection").setVisible(false);
					}
					
					var user = pernr;
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
					
					var t503k;
					var t501;
					
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
			        
					for(var t = 0; t < t517t.List.length;t++){
						t517t.List[t].slart = t517t.List[t].t517Tkey.slart;
					}
					
			        this.getView().setModel(new JSONModel(t517t),"eduItem");
			        
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
			        
			        for(var t = 0; t < t519t.List.length;t++){
						t519t.List[t].slabs = t519t.List[t].t519Tkey.slabs;
					}
			        var lenx = t519t.List.length;
			        var cer = new JSONModel(t519t);
			        cer.setSizeLimit(lenx);
			        this.getView().setModel(cer,"cerItem");
			        
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
			        
			        var lenx = t517y.List.length;
			        var brn = new JSONModel(t517y);
			        brn.setSizeLimit(lenx);
			        this.getView().setModel(brn,"brnItem");

					this.getView().byId("SLART").setSelectedKey(slart);
					this.getView().byId("SLABS").setSelectedKey(slabs);
					this.getView().byId("SLTP1").setSelectedKey(sltp1);
					this.getView().byId("INSTI").setValue(insti);
					this.getView().byId("BEGDA").setValue(begda);
					this.getView().byId("ENDDA").setValue(endda);
					
					var d = new Date().getDate().toString().padStart(2,'0');
					var m = (new Date().getMonth() + 1).toString().padStart(2,'0');
					var y = (new Date().getFullYear());
					
					for(var c = 1; c<=3; c++){
						var attach;
						var link = "file0"+c.toString();
						
						var indx = "000"+c.toString();
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tbl_Docattach/"+docno+"/"+y+"/"+indx;
				    	
				    	$.ajax({
				        	type: "GET",
				        	url: url,
				        	async: false,
				        	success: function(data){
				        		attach = data;
				        	},
				        	error: function(){
				        		attach = "X";
				        	}
				        });
				        
				    	if(attach != "X"){
				    		var userpad = pernr.padStart(8,'0');
				    		var xml_out;
							var xxl = '<?xml version="1.0" encoding="utf-8"?>';
							var xml = xxl+'<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">';
								xml = xml+'<soap12:Body>';
								xml = xml+'<downloadEmpDoc xmlns="http://tempuri.org/">';
								xml = xml+'<xappKey>A0TESSMSS123</xappKey>';
								xml = xml+'<xEmplopyeeID>'+userpad+'</xEmplopyeeID>';
								xml = xml+'<xTypeConfident>03 Unconfidential</xTypeConfident>';
								xml = xml+'<xDocTypeName>05 - ประวัติการศึกษา</xDocTypeName>';
								xml = xml+'<xdocName>'+attach.tbl_Docattach.xname+'</xdocName>';
								xml = xml+'</downloadEmpDoc>';
								xml = xml+'</soap12:Body>';
								xml = xml+'</soap12:Envelope>';
								var settings = {
										  "async": false,
										  "crossDomain": true,
										  "url": "http://10.121.3.94/AOTWS/OTESSMSS.asmx?op=downloadEmpDoc",
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
											xml_out = response.getElementsByTagName("downloadEmpDocResult");
										});
				    		
					        var byteCharacters = window.atob(xml_out[0].innerHTML);
				    		console.log(byteCharacters);
						    var byteNumbers = new Array(byteCharacters.length);
						    for (var i = 0; i < byteCharacters.length; i++) {
						        byteNumbers[i] = byteCharacters.charCodeAt(i);
						    }
						    var byteArray = new Uint8Array(byteNumbers);
						    
						    var xtype = attach.tbl_Docattach.xtype.toString().toUpperCase();
						    var apptype;
						    if( xtype == 'PDF'){
						    	apptype = 'application/pdf'
						    }
						    else if(xtype == "JPG"){
						    	apptype = 'image/jpeg'
						    }
						    else{
						    	apptype = 'image/'+xtype.toString().toLowerCase();
						    }
						    
						    var blob = new Blob([byteArray], {type: apptype});
							
							var fileUrl = URL.createObjectURL(blob);
							console.log(fileUrl);
					        this.byId(link).setText(attach.tbl_Docattach.xname);
					        this.byId(link).setHref(fileUrl);
					        this.byId(link).setTarget("_blank");
				    	}
				    	
					}
					
					var docTask;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/l/"+docno,
			        	async: false,
			        	success: function(data){
			        		docTask = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(docTask.List.length > 0){
						var oTable = this.getView().byId("appTab01");
						var item = oTable.getItems();
						for(var d=0;d<item.length;d++){
							oTable.removeItem(item[d]);
						}
						for(var p = 0; p < docTask.List.length;p++){
							
							var pa0001;
							
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+docTask.List[p].taskkey.pernr,
					        	async: false,
					        	success: function(data){
					        		pa0001 = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
							
							var pa0002;
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+docTask.List[p].taskkey.pernr,
					        	async: false,
					        	success: function(data){
					        		pa0002 = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
							
							var hrp1000;
							
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+pa0001.PA0001.plans,
					        	async: false,
					        	success: function(data){
					        		hrp1000 = data;
					        		
					        	},
					        	error: function(){
					        		hrp1000 = "X";
					        	}
					        });
							
							var oItem = new sap.m.ColumnListItem({
								cells : [ new sap.m.Text({text:pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn}),
										  new sap.m.Text({text:hrp1000.HRP1000.stext}),
										  new sap.m.Text({text:this.onDateFormat(docTask.List[p].aedat)}),
										  new sap.m.Text({text:docTask.List[p].sttext}),
										  new sap.m.Text({text:docTask.List[p].del_flag})
										 
								]
							});
							
							oTable.addItem(oItem);
						}
					}
					
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
					$.ajax({
				       	type: "GET",
				       	url: url,
				       	async: false,
				       	success: function(data){
				       		docData = data;	
				       	},
				       	error: function(){
				        		
				       	}
				    });
					
					if(docData.tblDocheader.status != "2"){
						this.getView().byId("approveSection").setVisible(false);
					}
					
					this.setModel(oViewModel, "view");
					
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.getRoute("PA/approveAddEducation").attachPatternMatched(this._onObjectMatched, this);
				},
				_onObjectMatched: function (oEvent) {
					
					this.onInit();
					
//					if(oEvent.getParameter("arguments").from == "myTask"){
//						this.byId("approveSection").setVisible(false);
//					}else{
//						this.byId("approveSection").setVisible(true);
//					}
				},
				onDateFormat: function (value){
					var date = new Date(value);
					var d = date.getDate().toString().padStart(2,'0');
					var m = (date.getMonth() +1).toString().padStart(2,'0');
					var y = date.getFullYear();
					return [d,m,y].join("/");
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
				onAccept : function () {
					var complete_url = window.location.href;
					var docno = complete_url.split("/").pop();
					var docData;
					
					var user = jQuery.sap.getUriParameters().get("user");
					var date = new Date();
					var d = date.getDate().toString().padStart(2,'0');
					var m = (date.getMonth()+1).toString().padStart(2,'0');
					var y = date.getFullYear();
					
					var pa0022 = new JSONModel();
					
					var selapp = this.getView().byId("selApp").getSelectedItem().getText();
					var pernr = this.getView().byId("PERNR").getText();
					var slart = this.getView().byId("SLART").getSelectedItem().getKey();
					var slabs = this.getView().byId("SLABS").getSelectedItem().getKey();
					var fachr = this.getView().byId("SLTP1").getSelectedItem().getKey();
					var insti = this.getView().byId("INSTI").getValue();
					var begda = this.getView().byId("BEGDA").getValue();
					var endda = this.getView().byId("ENDDA").getValue();
					
					begda = begda.split("/");
					begda = [begda[2],begda[1].toString().padStart(2,'0'),begda[0].toString().padStart(2,'0')].join("-");
					
					endda = endda.split("/");
					endda = [endda[2],endda[1].toString().padStart(2,'0'),endda[0].toString().padStart(2,'0')].join("-");
			        
					if(selapp == "ไม่อนุมัติ"){
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
						$.ajax({
					       	type: "GET",
					       	url: url,
					       	async: false,
					       	success: function(data){
					       		docData = data;
					       		
					       	},
					       	error: function(){
					        		
					       	}
					    });
						
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/template/0",
				        	async: false,
				        	success: function(data){
				        		dctask = data.tblDoctask;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        }); 
						
						var json = dctask;
						json.taskkey.docid = dataJ.docid;
						json.docno = dataJ.docid;
						json.module = dataJ.module;
						json.header = dataJ.header;
						json.bedat = dataJ.bedat;
						json.aedat = [y,m,d].join("-");
						json.taskkey.pernr = user;
						json.userad = dataJ.userad;
						json.del_flag = this.getView().byId("avlv1").getValue();
						json.status = "4";
						json.sttext = selapp;
						json = JSON.stringify(json);
						
						var postdctask = {
								  "async": false,
								  "crossDomain": true,
								  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask",
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
						
						$.ajax(postdctask).done(function (response) {
							console.log(response);
							dctask = response.tblDoctask;
						});
						dataJ.status = "4";
						dataJ.sttext = selapp;
						dataJ.userch = user;
						
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
					}else{
					
						var mandt = "30";
						var objps = "0";
						
						var seqnr = "0";
						var sprps = "0";
						var subty = slart;
						var aedtm = endda;
						var anzeh = "";
						var anzkl = "0";
						var ausbi = "3";
						var dptmt = "";
						var emark = "";
						var faccd = "";
						var flag1 = "";
						var flag2 = "";
						var flag3 = "";
						var flag4 = "";
						var grpvl = "";
						var histo = "";
	
						var itbld = "";
						var itxex = "";
						var jbez1 = "0";
						var ksbez = "";
						var ordex = "";
						var preas = "";
						var refex = "";
						var rese1 = "";
						var rese2 = "";
						var schcd = "0";
	
						var sland = "";
						
						var slktr = "";
						var slpln = "";
						var slrzg = "";
						var sltp1 = fachr;
						var sltp2 = "";
						var tx122 = "";
						var uname = "";
						var waers = "";
						var err;
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0022/"+pernr+"/"+slart;
						$.ajax({
					       	type: "GET",
					       	url: url,
					       	async: false,
					       	success: function(data){
					       		docData = data;
					       		
					       	},
					       	error: function(){
					        	err = "X";
					       	}
					    });
						if(err != "X"){
							var l = docData.List.length;
							seqnr = l;
						}
				        var ad0022 = [{
				        		pakey : {
				        		begda :  begda,
				        		endda :  endda,
				        		mandt :  mandt,
				        		objps :  objps,
				        		pernr :  pernr,
				        		seqnr :  seqnr,
				        		sprps :  sprps,
				        		subty :  subty
				        		},
				        		aedtm :  aedtm,
				        		anzeh :  anzeh,
				        		anzkl :  anzkl,
				        		ausbi :  ausbi,
				        		dptmt :  dptmt,
				        		emark :  emark,
				        		faccd :  faccd,
				        		flag1 :  flag1,
				        		flag2 :  flag2,
				        		flag3 :  flag3,
				        		flag4 :  flag4,
				        		grpvl :  grpvl,
				        		histo :  histo,
				        		insti :  insti,
				        		itbld :  itbld,
				        		itxex :  itxex,
				        		jbez1 :  jbez1,
				        		ksbez :  ksbez,
				        		ordex :  ordex,
				        		preas :  preas,
				        		refex :  refex,
				        		rese1 :  rese1,
				        		rese2 :  rese2,
				        		schcd :  schcd,
				        		slabs :  slabs,
				        		sland :  sland,
				        		slart :  slart,
				        		slktr :  slktr,
				        		slpln :  slpln,
				        		slrzg :  slrzg,
				        		sltp1 :  sltp1,
				        		sltp2 :  sltp2,
				        		tx122 :  tx122,
				        		uname :  uname,
				        		waers :  waers
	
				        }];
						
						ad0022 = JSON.stringify(ad0022[0]);
						
//						var settings = {
//								  "async": false,
//								  "crossDomain": true,
//								  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0022/",
//								  "method": "POST",
//								  "headers": {
//								    "Content-Type": "application/json",
//								    "Accept": "*/*",
//								    "Cache-Control": "no-cache",	
//								    "Host": "10.121.0.190:8083",
//								    "accept-encoding": "gzip, deflate",
//								    "Connection": "keep-alive",
//								    "cache-control": "no-cache"
//								  },
//								  "processData": false,
//								  "data": ad0022
//								}
//						
//						$.ajax(settings).done(function (response) {
//							console.log(response);
//						});
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
						$.ajax({
					       	type: "GET",
					       	url: url,
					       	async: false,
					       	success: function(data){
					       		docData = data;
					       		
					       	},
					       	error: function(){
					        		
					       	}
					    });
						
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/template/0",
				        	async: false,
				        	success: function(data){
				        		dctask = data.tblDoctask;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        }); 
						
						var json = dctask;
						json.taskkey.docid = dataJ.docid;
						json.docno = dataJ.docid;
						json.module = dataJ.module;
						json.header = dataJ.header;
						json.bedat = dataJ.bedat;
						json.aedat = [y,m,d].join("-");
						json.taskkey.pernr = user;
						json.userad = dataJ.userad;
						json.del_flag = this.getView().byId("avlv1").getValue();
						json.status = "3";
						json.sttext = "อนุมัติ";
						json = JSON.stringify(json);
						
						var postdctask = {
								  "async": false,
								  "crossDomain": true,
								  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask",
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
						
						$.ajax(postdctask).done(function (response) {
							console.log(response);
							dctask = response.tblDoctask;
						});
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.userch = user;
						
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
					}
					this.getRouter().navTo("Worklist");
					
					
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
				}

			});
});