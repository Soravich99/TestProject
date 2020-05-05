sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/m/MessageBox',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast,MessageBox, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.BenefitHistory", {

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
			
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
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
			
	        if(titel == " "){
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
			
			//this.getView().byId("PLANS_DESC").setText(pa.paPos.pos_l);
			//this.getView().byId("MAIN_PLANS_ORG-O_SHORT").setText(pa.paPos.org_s+pa.paPos.up_s);
			
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
			
			this.getView().byId("PERSG").setText(t501.T501.ptext);
			
//			var managp = parseInt(pa.paPos.manag).toString();
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+managp,
//	        	async: false,
//	        	success: function(data){
//	        		manag = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
			
			//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
			var pa9707;
			dataPA = $.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9707/"+user,
	        	async: false,
	        	success: function(data){
	        		pa9707 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			
			this.getView().setModel(new JSONModel(pa9707), "befList");
			
			var docheader = new JSONModel();
			var unilist = {"List":[]};
			var medlist = {"List":[]};
			var tuitionList = {"List":[]};
			var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdata/"+pernr+"/BE";
			$.ajax({
	        	type: "GET",
	        	url: getDocurl,
	        	async: false,
	        	success: function(data){
	        		docheader = data;        	},
	        	error: function(){
	        		
	        	}
	        });
			var rec03 = 0;
			var rec02 = 0;
			var rec04 = 0;
			for(var l=0;l < docheader.List.length;l++){
				var module = docheader.List[l].docid.substring(2, 4);
				if(module == "03"){
					
					var pa9706_arr =  docheader.List[l].script.split(",");
					
					var arrayLength = pa9706_arr.length;
					for (var i = 0; i < arrayLength; i++) {
						var fieldar = pa9706_arr[i].split(":");
						var field = fieldar[0];
					    if(field.includes("pernr") == true){ pernr = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("rqust") == true){ var rqust = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("rqdat") == true){ var rqdat = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("uftype01") == true){ var uftype01 = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("uftype02") == true){ var uftype02 = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("uftype01t") == true){ var uftype01t = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("uftype02t") == true){ var uftype02t = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("ufstyp01") == true){ var ufstyp01 = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("ufstyp02") == true){ var ufstyp02 = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("ufstyp01t") == true){ var ufstyp01t = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("ufstyp02t") == true){ var ufstyp02t = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("maxunit01") == true){ var maxunit01 = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("maxunit02") == true){ var maxunit02 = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("maxrate01") == true){ var maxrate01 = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("maxrate02") == true){ var maxrate02 = pa9706_arr[i].split(":").pop(); }
					    if(field.includes("maxunit") == true){ var maxunit = pa9706_arr[i].split(":").pop(); }
					    
					    
					}
					var date = new Date(docheader.List[l].bedat);
					var d = date.getDate().toString().padStart(2,'0');
					var m = (date.getMonth() + 1).toString().padStart(2,'0');
					var y = date.getFullYear();
					unilist.List[rec03] = docheader.List[l];
					unilist.List[rec03].uftype01t = uftype01t;
					unilist.List[rec03].maxunit01 = maxunit01;
					unilist.List[rec03].maxrate01 = maxrate01;
					unilist.List[rec03].rqdat = rqdat;
					unilist.List[rec03].bedat = [d,m,y].join("/");
					
					rec03 = rec03 + 1;
					
				}else if(module == "02"){
					
					var pa9703_arr = docheader.List[l].script.split(",");
					
					var pernr = "";
					var rqust = "";
					var rqdat = "";
					var clmty = "";
					var subty = "";
					var elclp = "";
					var famsa = "";
					var vstno = "";
					var htype = "";
					var hname = "";
					var othty = "";
					var dsese = "";
					var otdse = "";
					var dsgrp = "";
					var otdsg = "";
					var rcpt1 = "";
					var rcdat = "";
					var tbdat = "";
					var tcdat = "";
					var tdays = "";
					var itemList = "";
					var anzhl03 = "";
					var smamt03 = "";
					var txinv = "";
					var shtxid = "";
					var shnam = "";
					var shbrnc = "";
					var shpad = "";
					var shpad2 = "";
					var txdat = "";
					var shpos = "";
					var shcut = "";
					var nvamt = "";
					var vtamt = "";
					var totval = "";
					var emppay = 0;
					
					var arrayLength = pa9703_arr.length;
					for (var i = 0; i < arrayLength; i++) {
						var fieldar = pa9703_arr[i].split(":");
						var field = fieldar[0];
					    if(field.includes("pernr") == true){ pernr = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("rqust") == true){ rqust = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("rqdat") == true){ rqdat = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("clmty") == true){ clmty = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("subty") == true){ subty = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("elclp") == true){ elclp = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("famsa") == true){ famsa = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("vstno") == true){ vstno = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("htype") == true){ htype = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("hname") == true){ hname = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("othty") == true){ othty = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("dsese") == true){ dsese = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("otdse") == true){ otdse = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("dsgrp") == true){ dsgrp = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("otdsg") == true){ otdsg = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("rcpt1") == true){ rcpt1 = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("rcdat") == true){ rcdat = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("tbdat") == true){ tbdat = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("tcdat") == true){ tcdat = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("tdays") == true){ tdays = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("itemList") == true){ itemList = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("anzhl03") == true){ anzhl03 = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("smamt03") == true){ smamt03 = pa9703_arr[i].split(":").pop(); }
					    
					    if(field.includes("txinv") == true){ txinv = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("shtxid") == true){ shtxid = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("shnam") == true){ shnam = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("shbrnc") == true){ shbrnc = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("shpad") == true){ shpad = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("shpax") == true){ shpad2 = pa9703_arr[i].split(":").pop(); }
					    
					    if(field.includes("txdat") == true){ txdat = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("shpos") == true){ shpos = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("shcut") == true){ shcut = pa9703_arr[i].split(":").pop(); }
					    
					    if(field.includes("nvamt") == true){ nvamt = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("vtamt") == true){ vtamt = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("totval") == true){ totval = pa9703_arr[i].split(":").pop(); }
					    if(field.includes("emppay") == true){ emppay = pa9703_arr[i].split(":").pop(); }

					}
					
					var date = new Date(docheader.List[l].bedat);
					medlist.List[rec02] = docheader.List[l];
					var d = date.getDate().toString().padStart(2,'0');
					var m = (date.getMonth() + 1).toString().padStart(2,'0');
					var y = date.getFullYear();
					
					if(elclp == "01"){medlist.List[rec02].elclp = "พนักงาน"}
					else if(elclp == "02"){medlist.List[rec02].elclp = "คู่สมรส"}
					else if(elclp == "03"){medlist.List[rec02].elclp = "บุตร"}
					else if(elclp == "04"){medlist.List[rec02].elclp = "บิดา"}
					else if(elclp == "05"){medlist.List[rec02].elclp = "มารดา"}
					
					medlist.List[rec02].bedat = [d,m,y].join("/");
					var hospital;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED",
			        	async: false,
			        	success: function(data){
			        		hospital = data;
			        		
			        	},
			        	error: function(){
			        		hospital = {"List":[]};
			        	}
			        });
					
					for(var h = 0;h<hospital.List.length;h++){
						if(hospital.List[h].hcode == hname){ medlist.List[rec02].hname = hospital.List[h].hname;  }
					}
					
					if(clmty == "1"){ medlist.List[rec02].clmty = "รัฐบาล" }else {medlist.List[rec02].clmty = "เอกชน"}
					
					
					var cell2 = 0;
					var cell3 = 0;
					var cell5 = 0;
					var cell6 = 0;
					var item_arr = window.atob(itemList).split("|");
					for(var x = 1; x < item_arr.length; x++)
					{
						var items = item_arr[x].split(",");
						var eetyp03 = "";
						var reamt03 = "";
						var riamt03 = "";
						var amtu03 = "";
						var cleamt03 = "";
						var cleamt103 = "";
						
						
						for(var i = 0;i < items.length; i++)
						{
							var fieldar = items[i].split(":");
							var field = fieldar[0];
							
							if(field.includes("eetyp03") == true){ eetyp03 = items[i].split(":").pop().replace(",",""); }
							if(field.includes("reamt03") == true){ reamt03 = items[i].split(":").pop().replace(",",""); }
							if(field.includes("riamt03") == true){ riamt03 = items[i].split(":").pop().replace(",",""); }
							if(field.includes("amtu03") == true){ amtu03 = items[i].split(":").pop().replace(",",""); }
							if(field.includes("cleamt03") == true){ cleamt03 = items[i].split(":").pop().replace(",",""); }
							if(field.includes("cleamt103") == true){ cleamt103 = items[i].split(":").pop().replace(",",""); }
						}
						cell2 = parseFloat(cell2) + parseFloat(reamt03);
						cell3 = parseFloat(cell3) + parseFloat(riamt03);
						cell5 = parseFloat(cell5) + parseFloat(cleamt03);
						cell6 = parseFloat(cell6) + parseFloat(cleamt103);

					}
					medlist.List[rec02].affty = "เบิก";
					if(medlist.List[rec02].docid.includes("S") == true){medlist.List[rec02].docid = ""; medlist.List[rec02].affty = "คู่สัญญา";}
					if(famsa != "X" && famsa.length > 1){
						famsa = JSON.parse(decodeURIComponent(escape(window.atob(famsa))));
					}
					medlist.List[rec02].famsa = famsa.ename;
					medlist.List[rec02].rcpt1 = rcpt1;
					medlist.List[rec02].empkey = oNumberFormat.format(parseFloat(cell2+cell3));
					medlist.List[rec02].emppay = oNumberFormat.format(parseFloat(emppay));
					
					rec02 = rec02 + 1;
					
				}else if(module == "01"){
					
					
					var pa9703_arr = docheader.List[l].script.split(",");
					var pernr = "";
					var rqust = "";
					var rqdat = "";
					var childSel = "";
					var childBirth = "";
					var childAge = "";
					var childEdu = "";
					var eduType = "";
					var eduLevel = "";
					var eduBran = "";
					var eduCyear = "";
					var eduYear = "";
					var eduTerm = "";
					var empTotal = "";
					var empBalance = "";
					var invno = "";
					var DTP2 = "";
					var invBalance = "";
					var empPay = "";
					var othItem = "";
					
					var arrayLength = pa9703_arr.length;
					for (var i = 0; i < arrayLength; i++) {
						var fieldar = pa9703_arr[i].split(":");
						var field = fieldar[0];
						if(field.includes("pernr") == true){ pernr = pa9703_arr[i].split(":").pop(); }
						if(field.includes("rqust") == true){ rqust = pa9703_arr[i].split(":").pop(); }
						if(field.includes("rqdat") == true){ rqdat = pa9703_arr[i].split(":").pop(); }
						if(field.includes("childSel") == true){ childSel = pa9703_arr[i].split(":").pop(); }
						if(field.includes("childBirth") == true){ childBirth = pa9703_arr[i].split(":").pop(); }
						if(field.includes("childAge") == true){ childAge = pa9703_arr[i].split(":").pop(); }
						if(field.includes("childEdu") == true){ childEdu = pa9703_arr[i].split(":").pop(); }
						if(field.includes("eduType") == true){ eduType = pa9703_arr[i].split(":").pop(); }
						if(field.includes("eduLevel") == true){ eduLevel = pa9703_arr[i].split(":").pop(); }
						if(field.includes("eduBran") == true){ eduBran = pa9703_arr[i].split(":").pop(); }
						if(field.includes("eduCyear") == true){ eduCyear = pa9703_arr[i].split(":").pop(); }
						if(field.includes("eduYear") == true){ eduYear = pa9703_arr[i].split(":").pop(); }
						if(field.includes("eduTerm") == true){ eduTerm = pa9703_arr[i].split(":").pop(); }
						if(field.includes("empTotal") == true){ empTotal = pa9703_arr[i].split(":").pop(); }
						if(field.includes("empBalance") == true){ empBalance = pa9703_arr[i].split(":").pop(); }
						if(field.includes("invno") == true){ invno = pa9703_arr[i].split(":").pop(); }
						if(field.includes("DTP2") == true){ DTP2 = pa9703_arr[i].split(":").pop(); }
						if(field.includes("invBalance") == true){ invBalance = pa9703_arr[i].split(":").pop(); }				
						if(field.includes("empPay") == true){ empPay = pa9703_arr[i].split(":").pop(); }
						if(field.includes("othItem") == true){ othItem = pa9703_arr[i].split(":").pop(); }
						
					}
					
					var date = new Date(docheader.List[l].bedat);
					var d = date.getDate().toString().padStart(2,'0');
					var m = (date.getMonth() + 1).toString().padStart(2,'0');
					var y = date.getFullYear();
					
					if(childSel != "X" && childSel.length > 0){
						childSel = JSON.parse(decodeURIComponent(escape(window.atob(childSel))));
					}
					
					
					tuitionList.List[rec04] = docheader.List[l];
					tuitionList.List[rec04].childSel = childSel.ename;
					tuitionList.List[rec04].childEdu = childEdu;
					tuitionList.List[rec04].eduType = eduType;
					tuitionList.List[rec04].eduLevel = eduLevel;
					tuitionList.List[rec04].eduCyear = eduCyear;
					tuitionList.List[rec04].eduYear = eduYear;
					tuitionList.List[rec04].invno = invno;
					tuitionList.List[rec04].DTP2 = DTP2;
					tuitionList.List[rec04].invBalance = invBalance;
					tuitionList.List[rec04].empPay = empPay;
					
					rec04 = rec04 + 1;
					
				}
			}
			
			var dcHeadx = new JSONModel(unilist);
			
			this.getView().setModel(dcHeadx, "uniList");
			
			this.getView().setModel(new JSONModel(medlist), "medList");
			
			this.getView().setModel(new JSONModel(tuitionList), "tuitionList");
			
			
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
			MessageToast.show("Saved");
		},

		onCancelPressed: function () {
			MessageToast.show("Cancel");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		},
		
		handleLinkPress: function (evt) {
			this.getRouter().navTo("createFuneralCost");
		},
		BackhandleLinkPress: function (evt) {
			this.getRouter().navTo("funeralCost");
		}



	});
});