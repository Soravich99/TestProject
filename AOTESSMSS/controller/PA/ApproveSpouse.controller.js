sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
		'sap/m/MessageToast', 'sap/ui/model/json/JSONModel' ], function(
		BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.PA.ApproveSpouse", {

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
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa0021";
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
			var pa0021_arr = script.split(",");
			var pernr = "";
	        var jobtl = "";
	        var efaml = "";
	        var num01 = "";
	        var anred = "";
	        var fnmzu = "";
	        var favor = "";
	        var fanam = "";
	        var stxid = "";
	        var fgbdt = "";
	        var telnr = "";
	        var alive;
	        var aldec;
	        var endda11;
	        var aedtm;
	        var icnum;
	        var passport;
			
			var arrayLength = pa0021_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa0021_arr[i].split(":");
				var field = fieldar[0];
			    if(field.includes("pernr") == true){ pernr = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("jobtl") == true){ jobtl = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("aedtm") == true){ aedtm = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("efaml") == true){ efaml = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("num01") == true){ num01 = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("anred") == true){ anred = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("fnmzu") == true){ fnmzu = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("favor") == true){ favor = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("fanam") == true){ fanam = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("stxid") == true){ stxid = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("fgbdt") == true){ fgbdt = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("telnr") == true){ telnr = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("alive") == true){ alive = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("aldec") == true){ aldec = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("icnum") == true){ icnum = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("passport") == true){ passport = pa0021_arr[i].split(":").pop(); }
			    if(field.includes("endda11") == true){ endda11 = pa0021_arr[i].split(":").pop(); }

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
	        
	        
	        var vpernr = this.getView().byId("PERNR1");
	        var vaedtm = this.getView().byId("AEDTM");
	        var vename = this.getView().byId("ENAME1");
	        var vjobtl = this.getView().byId("JOBTL");
	        var vefaml = this.getView().byId("EFAML");
	        var vnum01 = this.getView().byId("NUM01");
	        var vanred = this.getView().byId("ANRED");
	        var vfnmzu = this.getView().byId("FNMZU");
	        var vfavor = this.getView().byId("FAVOR");
	        var vfanam = this.getView().byId("FANAM");
	        var vstxid = this.getView().byId("STXID");
	        var vfgbdt = this.getView().byId("FGBDT");
	        var vtelnr = this.getView().byId("TELNR");
	        var valive = this.getView().byId("ALIVE");
	        var valdec = this.getView().byId("ALDEC");
	        var vendda11 = this.getView().byId("ENDDA11");
	        var vicnum = this.getView().byId("icnum");
	        var vpassport = this.getView().byId("passport");
	        
	        if(titel == " " || titel == "0"){
	        	titel = t522g.T522G.atext;
	        }
			
			var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
						
			vpernr.setText(pa0001.PA0001.pernr);
			vename.setText(cStr);
			vjobtl.setSelectedKey(jobtl);
			vaedtm.setValue(aedtm);
			vnum01.setValue(num01);
			vefaml.setSelectedKey(efaml);
			vanred.setSelectedKey(anred);
			vfnmzu.setSelectedKey(fnmzu);
			vfavor.setValue(favor);
			vfanam.setValue(fanam);
			vstxid.setValue(stxid);
			vfgbdt.setValue(fgbdt);
			if(telnr != ""){
				vtelnr.setValue(telnr);
			}
			if(alive == "true"){alive = true;}else{alive = false;}
			valive.setSelected(alive);
			if(aldec == "true"){aldec = true;}else{aldec = false;}
			valdec.setSelected(aldec);
			if(icnum == "true"){icnum = true;}else{icnum = false;}
			vicnum.setSelected(icnum);
			if(passport == "true"){passport = true;}else{passport = false;}
			vpassport.setSelected(passport);
			if(endda11 != ""){
				vendda11.setValue(endda11);
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
						xml = xml+'<xDocTypeName>02 - ประวัติครอบครัว</xDocTypeName>';
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
			
			this.setModel(oViewModel, "view");
			
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
			oRouter.getRoute("PA/approveSpouse").attachPatternMatched(this._onObjectMatched, this);
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
			
//			if(oEvent.getParameter("arguments").from == "myTask"){
//				this.byId("approveSection").setVisible(false);
//			}else{
//				this.byId("approveSection").setVisible(true);
//			}
		},
		onMasterPressed : function(oEvent) {
			var oContext = oEvent.getParameter("listItem").getBindingContext(
					"side");
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
		onAccept : function () {
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			
			var user = jQuery.sap.getUriParameters().get("user");
			var date = new Date();
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth()+1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			var pa0021 = new JSONModel();
			var pa0187 = new JSONModel();
			var docData = new JSONModel();
			
			var pernr = this.getView().byId("PERNR1").getText();
			var aedtm = this.getView().byId("AEDTM").getValue();
	        var jobtl = this.getView().byId("JOBTL").getSelectedItem().getKey();
	        var efaml = this.getView().byId("EFAML").getSelectedItem().getKey();
	        var num01 = this.getView().byId("NUM01").getValue();
	        var anred = this.getView().byId("ANRED").getSelectedItem().getKey();
	        var fnmzu = this.getView().byId("FNMZU").getSelectedItem().getKey();
	        var favor = this.getView().byId("FAVOR").getValue();
	        var fanam = this.getView().byId("FANAM").getValue();
	        var stxid = this.getView().byId("STXID").getValue();
	        var fgbdt = this.getView().byId("FGBDT").getValue();
	        var telnr = this.getView().byId("TELNR").getValue();
	        var alive = this.getView().byId("ALIVE").getSelected();
	        var aldec = this.getView().byId("ALDEC").getSelected();
	        var endda11 = this.getView().byId("ENDDA11").getValue();
	        
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
	        
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+pernr+"/1",
		        	async: false,
		        	success: function(data){
		        		pa0021 = data;
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+pernr+"/1",
		        	async: false,
		        	success: function(data){
		        		pa0187 = data;
		        	},
		        	error: function(){
		        		
		        	}
		        });
		        
		        var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/";
		        var url2 = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/";
		        var method = "POST";
		        if(pa0021.List.length > 0){
		        	url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+pernr+"/1";
		        	method = "PUT";
		        }else{
		        	$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/template/90",
			        	async: false,
			        	success: function(data){
			        		pa0021 = data;
			        	},
			        	error: function(){
			        		
			        	}
			        });
		        }
		        
		        if(pa0187.List.length > 0){
		        	url2 = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+pernr+"/1";
		        	method = "PUT";
		        }else{
		        	$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/template/90",
			        	async: false,
			        	success: function(data){
			        		pa0187 = data;
			        	},
			        	error: function(){
			        		
			        	}
			        });
		        }
		        
		        var ad021 = pa0021.List[0];
		        var ad187 = pa0187.List[0];
		        
		        var fgbdts = fgbdt.split("/");
				fgbdt = [parseInt(fgbdts[2]),fgbdts[1].toString().padStart(2,'0'),fgbdts[0].toString().padStart(2,'0')].join("-");
		        
				ad021.pakey.pernr = pernr;
				ad021.pakey.subty = "1";
		        ad021.fnmzu = fnmzu;
		        ad021.favor = favor;
		        ad021.fanam = fanam;
		        ad021.fgbdt = fgbdt;
		        
		        ad187.pakey.pernr = pernr;
		        ad187.pakey.subty = "1";
				ad187.jobtl = jobtl;
				ad187.num01 = num01;
				ad187.efaml = efaml;
				ad187.anred = anred;
				ad187.stxid = stxid;
				ad187.telnr = telnr;
				if(aldec == true){
					
					var ed = new Date(endda11);
					ed = ed.getFullYear() + "-" + (ed.getMonth() +1).toString().padStart(2,'0') + "-" + ed.getDate().toString().padStart(2,'0');
					ad187.aldec = "X";
					ad187.pakey.endda = ed;
				}
				
				
				ad021 = JSON.stringify(ad021);
				ad187 = JSON.stringify(ad187);
				
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
//						  "data": ad021
//						}
//				
//				$.ajax(settings).done(function (response) {
//					console.log(response);
//				});
//				
//				var settings = {
//						  "async": false,
//						  "crossDomain": true,
//						  "url": url2,
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
//						  "data": ad187
//						}
//				
//				$.ajax(settings).done(function (response) {
//					console.log(response);
//				});
				
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