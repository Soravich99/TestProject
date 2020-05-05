sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.PA.ApproveMaritalStatus", {

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
			
			var d = new Date().getDate().toString().padStart(2,'0');
			var m = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var y = (new Date().getFullYear());
			var apd = [d,m,y].join("/");
			
			this.getView().byId("approveDate").setValue(apd);
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var pa0002 = "";
			var titel = "";
			var t522g = "";
			var t535n = "";
			var docData = new JSONModel();
			var attach;
			
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
				script = script.replace("}","");
			var pa0002_arr = script.split(",");
			
			
			var pernr;
			var famdt;
			var auth1;
			var isspl;
			var icnum;
			var famst;
			
			var arrayLength = pa0002_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa0002_arr[i].split(":");
				var field = fieldar[0];
			    if(field.includes("pernr") == true){ pernr = pa0002_arr[i].split(":").pop(); }
			    if(field.includes("famst") == true){ famst = pa0002_arr[i].split(":").pop(); }
			    if(field.includes("icnum") == true){ icnum = pa0002_arr[i].split(":").pop(); }
			    if(field.includes("famdt") == true){ famdt = pa0002_arr[i].split(":").pop(); }
			    if(field.includes("auth1") == true){ auth1 = pa0002_arr[i].split(":").pop(); }
			    if(field.includes("isspl") == true){ isspl = pa0002_arr[i].split(":").pop(); }
			    
			}
			
			if(user == pernr){
				this.getView().byId("approveSection").setVisible(false);
			}
			
			user = pernr;
			
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
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+user+"/06",
	        	async: false,
	        	success: function(data){
	        		pa0185 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
	        
	        /*dataPA = $.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0077/"+user,
	        	async: false,
	        	success: function(data){
	        		pa0077 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });*/
	        
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
	        
	        if(pa0002.PA0002.konfe != "" && pa0002.PA0002.konfe != " ")
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
	        		blood = pa0804.bgrup;
	        	},
	        	error: function(){
	        		blood = "O";
	        	}
	        });
	        
	        var vpernr = this.getView().byId("PERNR");
	        var vename = this.getView().byId("ENAME");
	        var vfamst = this.getView().byId("MarriageStatus");
	        var vicnum = this.getView().byId("ICNUM");
	        var vauth1 = this.getView().byId("AUTH1");
	        var visspl = this.getView().byId("ISSPL");
	        var vfamdt = this.getView().byId("FAMDT");
	        
	        
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
			
	        vfamst.setSelectedKey(famst);	
	        vfamdt.setValue(famdt);
	        vicnum.setValue(icnum);
		    vauth1.setValue(auth1);
		    visspl.setValue(isspl);
	      
		    var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tbl_Docattach/"+docno+"/"+y+"/0001";
	    	
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
	    		this.byId("fileUpload").setText(attach.tbl_Docattach.xname);
		        
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
		        this.byId("fileUpload").setText(attach.tbl_Docattach.xname);
		        this.byId("fileUpload").setHref(fileUrl);
		        this.byId("fileUpload").setTarget("_blank");
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
			/*var sKey = this.getView().byId("MarriageStatus").getSelectedKey(); 
			if(sKey == "3"){
				this.getView().byId("insigniaIdSection").setVisible(true);
			}*/
			
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
			oRouter.getRoute("PA/approvemaritalStatus").attachPatternMatched(this._onObjectMatched, this);
			
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
		onAccept: function (){
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var user = jQuery.sap.getUriParameters().get("user");
			var pa0002 = new JSONModel();
			var docData = new JSONModel();
			
			var date = new Date();
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth()+1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			var pernr = this.getView().byId("PERNR").getText();
			var ename = this.getView().byId("ENAME").getText();
			var famst = this.getView().byId("MarriageStatus").getSelectedItem().getKey();
			
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr,
		        	async: false,
		        	success: function(data){
		        		pa0002 = data;
		        		
		        	},
		        	error: function(){
		        		pa0002 = "X";
		        	}
		        });
				
				var json = pa0002.PA0002;
				
				
				json.famst = famst;
				
				json = JSON.stringify(json);
				
				var err = "X";
				
//				var settings = {
//						  "async": false,
//						  "crossDomain": true,
//						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr,
//						  "method": "PUT",
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
//						  "data": json
//						}
//				
//				$.ajax(settings).done(function (response) {
//					err = "";
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
				
				json = dctask;
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
				dataJ.aedat = [y,m,d].join("-");
				
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
			MessageToast.show("Saved");
		},
		onSendPressed: function () {
			
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
			
			var pernr = this.getView().byId("PERNR").getText();
			var famst = this.getView().byId("MarriageStatus").getSelectedItem().getKey();
			var icnum = this.getView().byId("ICNUM").getValue();
			var isspl = this.getView().byId("ISSPL").getValue();
			var auth1 = this.getView().byId("AUTH1").getValue();
			var famdt = this.getView().byId("FAMDT").getValue();
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/03';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var dataPA = $.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		dcrun = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var json = dcrun.tblDocrunning;
			var curid = json.curid;
			json.curno = json.curno + 1;
			json.curid = 'PA' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
			
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PA' + year + month + '/03';
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
			json = dchead;
			json.docid = docid;
			json.module = 'PA';
			json.header = "ขอเปลี่ยนแปลงสถานะภาพ";
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
			
			var json = {};
			
			json.pernr = pernr;
			json.famst = famst;
			json.icnum = icnum;
			json.isspl = isspl;
			json.auth1 = auth1;
			json.famdt = famdt;
			
			json = JSON.stringify(json);
			json = json.replace("}","");
			json = json.replace("{","");
			json = json.replace(/"/g,"");
			
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
			
			MessageToast.show("Send");
		},
		onCancelPressed: function () {
			this.getRouter().navTo("myInfo");
			MessageToast.show("Cancel");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		}
			
		

	});
});