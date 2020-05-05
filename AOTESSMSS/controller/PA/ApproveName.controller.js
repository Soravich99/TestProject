sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
		'sap/m/MessageToast', 'sap/ui/model/json/JSONModel' ], function(
		BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend(
			"sap.ui.demo.toolpageapp.controller.PA.ApproveName", {

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
					
					var sValue = jQuery.sap.getUriParameters().get("apprlvaldoc");
					var complete_url = window.location.href;
					var docno = complete_url.split("/").pop();
					
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
					var t535ne = new JSONModel()
					var t516t = new JSONModel();
					var titel = "";
					var reli = "";
					var etitel = "";
					var docData = new JSONModel();
					
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa0002";
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
					
					var pa0002_arr = script.split(",");
					var pernr = "";
					var anred = "";
					var konfe = "";
					var namzu = "";
					var vorna = "";
					var nachn = "";
					var natio = "";
					var gbdat = "";
					var lnamr = "";
					var fnamr = "";
					var bgrup = "";
					var begda = "";
					var begda2 = "";
					var	vorsw = "";
					var blood = "";
					var titele = "";
					var reason = "";

					var arrayLength = pa0002_arr.length;
					for (var i = 0; i < arrayLength; i++) {
						var fieldar = pa0002_arr[i].split(":");
						var field = fieldar[0];
					    if(field.includes("pernr") == true){ pernr = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("anred") == true){ anred = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("konfe") == true){ konfe = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("namzu") == true){ namzu = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("vorna") == true){ vorna = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("nachn") == true){ nachn = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("natio") == true){ natio = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("gbdat") == true){ gbdat = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("lnamr") == true){ lnamr = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("fnamr") == true){ fnamr = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("bgrup") == true){ bgrup = pa0002_arr[i].split(":").pop().replace("}",""); }
					    if(field.includes("begda1") == true){ begda = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("begda2") == true){ begda2 = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("vorsw") == true){ vorsw = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("titel") == true){ titele = pa0002_arr[i].split(":").pop(); }
					    if(field.includes("reason") == true){ reason = pa0002_arr[i].split(":").pop(); }

					}
					
					if(user == pernr){
						this.getView().byId("approveSection").setVisible(false);
					}
										
			        var dataPA = $.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+pernr,
			        	async: false,
			        	success: function(data){
			        		pa0001 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
			        
			        dataPA = $.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
			        
			        dataPA = $.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+pernr,
			        	async: false,
			        	success: function(data){
			        		pa0185 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
			        
			        dataPA = $.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0077/"+pernr,
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G/"+anred,
			        	async: false,
			        	success: function(data){
			        		t522g = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
			        
			        if(namzu != "" || namzu != " ")
			        {
				        $.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N/"+namzu,
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
			        
			        if(konfe != "" || konfe != " ")
			        {
				        $.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T516T/"+konfe,
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/"+pernr,
			        	async: false,
			        	success: function(data){
			        		pa0804 = data;
			        		blood = pa0804.bgrup;
			        	},
			        	error: function(){
			        		blood = "O";
			        	}
			        });
			        
			        var vpernr = this.getView().byId("PERNR");
			        var vename = this.getView().byId("ENAME");
			        var vnamzu = this.getView().byId("NAMZU");
			        var vanred = this.getView().byId("ANRED");
					var vvorna = this.getView().byId("VORNA");
					var vnachn = this.getView().byId("NACHN");

					var vgbdat = this.getView().byId("GBDAT");
					var vlnamr = this.getView().byId("LNAMR");
					var vfnamr = this.getView().byId("FNAMR");
					var vnatio = this.getView().byId("NATIO");
					var vvorsw = this.getView().byId("VORSW");
					var vkonfe = this.getView().byId("KONFE");
					var vbgrup = this.getView().byId("BGRUP");
					var vtitel = this.getView().byId("TITEL");
					
					var vmilsa = this.getView().byId("MILSA");
					
					var vbegda = this.getView().byId("BEGDA");
					var vfamst = this.getView().byId("FAMST");
//					var vreason = this.getView().byId("REASON");
			        
					var date = new Date(pa0002.PA0002.gbdat);
					
					var ngbdat = date.getDate().toString() + "/" + date.getMonth().toString() + "/" + ( date.getFullYear()).toString();
					
					if(titel == " " || titel == "0"){
			        	titel = t522g.T522G.atext;
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
						vmilsa.setValue(milsa);
					}
					
					var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					
			        vpernr.setText(pernr);
			        vvorna.setValue(vorna);
			        vanred.setSelectedKey(anred);
			        vnamzu.setSelectedKey(titel);
			        vkonfe.setSelectedKey(reli);
			        vvorsw.setSelectedKey(vorsw);
			        vgbdat.setValue(ngbdat);
			        vnachn.setValue(nachn);
			        vename.setText(cStr);
			        var natiox = "";
			        if(natio == "TH"){
			        	natiox = "ไทย";
			        }
			        vnatio.setValue(natiox);
			        vlnamr.setValue(lnamr);
			        vfnamr.setValue(fnamr);
			        vbgrup.setSelectedKey(bgrup);
			        vtitel.setSelectedKey(titele);
			        vbegda.setValue(begda);
//			        vreason.setValue(reason);
			        
			        if(pa0002.PA0002.famst == "" || pa0002.PA0002.famst == " "){
			        	vfamst.setSelectedKey("0");
			        }else{
			        	vfamst.setSelectedKey(pa0002.PA0002.famst);
			        }
			        
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
					
			        for(var c = 1; c<=2; c++){
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
								xml = xml+'<xDocTypeName>01 - ประวัติส่วนบุคคล</xDocTypeName>';
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
					
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.getRoute("PA/editMyInfo").attachPatternMatched(this._onObjectMatched, this);
			        
				},
				onDateFormat: function (value){
					var date = new Date(value);
					var d = date.getDate().toString().padStart(2,'0');
					var m = (date.getMonth() +1).toString().padStart(2,'0');
					var y = date.getFullYear();
					return [d,m,y].join("/");
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
					
					var complete_url = window.location.href;
					var docno = complete_url.split("/").pop();
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
					
					var date = new Date();
					var d = date.getDate().toString().padStart(2,'0');
					var m = (date.getMonth()+1).toString().padStart(2,'0');
					var y = date.getFullYear();
					var hh = date.getHours().toString().padStart(2,'0');
					var mm = date.getMinutes().toString().padStart(2,'0');
					var ss = date.getSeconds().toString().padStart(2,'0');
					
					var pa0001 = new JSONModel();
					var pa0002 = new JSONModel();
					var pa0006 = new JSONModel();
					var pa0185 = new JSONModel();
					var pa0077 = new JSONModel();
					var pa0021 = new JSONModel();
					var pa0022 = new JSONModel();
					var docData = new JSONModel();
					
					var pernr = this.getView().byId("PERNR").getText();
			        var ename = this.getView().byId("ENAME").getText();
			        var namzu = this.getView().byId("NAMZU").getSelectedItem().getKey();
			        var anred = this.getView().byId("ANRED").getSelectedItem().getKey();
					var vorna = this.getView().byId("VORNA").getValue();
					var nachn = this.getView().byId("NACHN").getValue();
					var lnamr = this.getView().byId("LNAMR").getValue();
					var fnamr = this.getView().byId("FNAMR").getValue();
					var natio = this.getView().byId("NATIO").getValue();
					var bgrup = this.getView().byId("BGRUP").getSelectedItem().getKey();
					var titel = this.getView().byId("TITEL").getSelectedItem().getKey();
					var vorsw = this.getView().byId("VORSW").getSelectedItem().getKey();
					var gbdat = this.getView().byId("GBDAT").getValue();
					var natio = this.getView().byId("NATIO").getValue();
					var konfe = this.getView().byId("KONFE").getSelectedItem().getKey();
					var begda = this.getView().byId("BEGDA").getValue();
					var avlv1 = this.getView().byId("avlv1").getValue();
					
					var selapp = this.getView().byId("selApp").getSelectedItem().getText();
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
						json.aedat = [y,m,d].join("-")+"T"+[hh,mm,ss].join(":");
						json.taskkey.pernr = user;
						json.userad = dataJ.userad;
						json.del_flag = avlv1;
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
					
						var dataPA = $.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr,
				        	async: false,
				        	success: function(data){
				        		pa0002 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
										
						var json = pa0002.PA0002;
						
						var dates = begda.split("/");
						var date = [dates[2],dates[1],dates[0]].join("-");
						
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
						
//						var putpa0002 = {
//								  "async": false,
//								  "crossDomain": true,
//								  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr,
//								  "method": "PUT",
//								  "headers": {
//								    "Content-Type": "application/json",
//								    "User-Agent": "PostmanRuntime/7.13.0",
//								    "Accept": "*/*",
//								    "Cache-Control": "no-cache",
//								    
//								    "Host": "10.121.3.62:8088",
//								    "accept-encoding": "gzip, deflate",
//								    //"content-length": "1013",
//								    "Connection": "keep-alive",
//								    "cache-control": "no-cache"
//								  },
//								  "processData": false,
//								  "data": json
//								}
//	
//						$.ajax(putpa0002).done(function (response) {
//							console.log(response);
//							pa0002 = response.PA0002;
//						});
						
						
						var pa0804;
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/"+pernr;
						var method = "PUT";
						
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
						
						if(pa0804 == "X"){
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/template",
					        	async: false,
					        	success: function(data){
					        		pa0804 = data.PA0804;
					        		
					        	},
					        	error: function(){
					        		pa0804 = "X";
					        	}
					        });
							
							url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804";
							method = "POST";
							pa0804.pernr = pernr;
						}
						pa0804.bgrup = bgrup;
						
						var json = JSON.stringify(pa0804);
//						var put0804 = {
//								  "async": false,
//								  "crossDomain": true,
//								  "url": url,
//								  "method": method,
//								  "headers": {
//								    "Content-Type": "application/json",
//								    
//								    "Accept": "*/*",
//								    "Cache-Control": "no-cache",
//								    
//								    "Host": "10.121.3.62:8088",
//								    "accept-encoding": "gzip, deflate",
//								    //"content-length": "1013",
//								    "Connection": "keep-alive",
//								    "cache-control": "no-cache"
//								  },
//								  "processData": false,
//								  "data": json
//								}
//						
//						$.ajax(put0804).done(function (response) {
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
						
						json = dctask;
						json.taskkey.docid = dataJ.docid;
						json.docno = dataJ.docid;
						json.module = dataJ.module;
						json.header = dataJ.header;
						json.bedat = dataJ.bedat;
						json.aedat = [y,m,d].join("-");
						json.taskkey.pernr = user;
						json.userad = dataJ.userad;
						json.del_flag = avlv1;
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
						
						
						MessageToast.show("Saved");
					}
					this.getRouter().navTo("Worklist");
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