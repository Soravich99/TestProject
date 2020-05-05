sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveBeneficiaryFuneralCost", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var userm = user;
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			
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
			
	        if(titel == " "){
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
	        		pa = "X";
	        	}
	        });
			if(pa != ""){
				this.getView().byId("PLANS_DESC_APP").setValue(pa.paPos.pos_l);
			}
			
			if(user != userm){
				
				this.byId("lvup1").setVisible(true);
				this.byId("lvup2").setVisible(true);
				this.byId("lvup3").setVisible(true);
				this.byId("lvup4").setVisible(true);
				this.byId("lvup5").setVisible(true);
				this.byId("lvup6").setVisible(true);
				
				this.byId("appvup").setVisible(true);
				this.byId("appv1").setVisible(false);
				this.byId("sellv1").setSelectedKey("อนุมัติ");
				this.byId("sellv1").setEnabled(false);
				this.byId("canvup").setVisible(true);
				this.byId("canv1").setVisible(false);
				this.byId("avup1").setVisible(true);
				
				this.byId("approveDateup").setVisible(true);
				this.byId("selvup").setVisible(true);
				this.byId("ENAME_APPUP").setVisible(true);
				this.byId("PLANS_DESC_APPUP").setVisible(true);
				this.byId("PLANS_DESC_APPUPNEXT").setVisible(true);
				
				this.byId("lblv1").setVisible(false);
				this.byId("sellv1").setVisible(false);
				this.byId("avlv1").setVisible(false);
				this.byId("approveDate").setVisible(false);
				this.byId("ENAME_APP").setVisible(false);
				this.byId("PLANS_DESC_APP").setVisible(false);
				this.byId("PLANS_DESC_APPNEXT").setVisible(false);
				
				user = userm;
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
		        
		        var vename = this.getView().byId("ENAME_APPUP");
				
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
		        		pa = "X";
		        	}
		        });
				if(pa != "" && pa != "X"){
					this.getView().byId("PLANS_DESC_APPUP").setValue(pa.paPos.pos_l);
					this.getView().byId("PLANS_DESC_APPNEXT").setValue(pa.paPos.pos_l);
					this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
				}
				if(pa == "X" || pa == ""){
					this.getView().byId("PLANS_DESC_APPUP").setValue("กอญ.");
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
					this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
				}
			}else{
				this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
			}
			
			var docData = new JSONModel();
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa0591";
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
			var date = new Date();
			var d = date.getDate();
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = (date.getFullYear()).toString().padStart(2,'0');
			this.getView().byId("approveDate").setValue([d,m,y].join("/"));
			var script = docData.tblDocdetail.script;
			
			var dchead = new JSONModel();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
	        	async: false,
	        	success: function(data){
	        		dchead = data.tblDocheader;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var pa9703_arr = script.split(",");
			var pernr = "";
			var rqust = "";
			var rqdat = "";
			var effdat = "";
			
			var name1 = "";
			var rela1 = "";
			var icnum1 = "";
			var value1 = "";
			
			var name2 = "";
			var rela2 = "";
			var icnum2 = "";
			var value2 = "";
			
			var name3 = "";
			var rela3 = "";
			var icnum3 = "";
			var value3 = "";
			
			var name4 = "";
			var rela4 = "";
			var icnum4 = "";
			var value4 = "";
			
			var name5 = "";
			var rela5 = "";
			var icnum5 = "";
			var value5 = "";
			
			var arrayLength = pa9703_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9703_arr[i].split(":");
				var field = fieldar[0];
				if(field.includes("pernr") == true){ pernr = pa9703_arr[i].split(":").pop(); }
				if(field.includes("rqust") == true){ rqust = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("rqdat") == true){ rqdat = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("effdat") == true){ effdat = pa9703_arr[i].split(":").pop(); }
			    
			    if(field.includes("name1") == true){ name1 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("rela1") == true){ rela1 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("icnum1") == true){ icnum1 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("value1") == true){ value1 = pa9703_arr[i].split(":").pop(); }
			    
			    if(field.includes("name2") == true){ name2 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("rela2") == true){ rela2 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("icnum2") == true){ icnum2 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("value2") == true){ value2 = pa9703_arr[i].split(":").pop(); }
			    
			    if(field.includes("name3") == true){ name3 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("rela3") == true){ rela3 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("icnum3") == true){ icnum3 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("value3") == true){ value3 = pa9703_arr[i].split(":").pop(); }
			    
			    if(field.includes("name4") == true){ name4 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("rela4") == true){ rela4 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("icnum4") == true){ icnum4 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("value4") == true){ value4 = pa9703_arr[i].split(":").pop(); }
			    
			    if(field.includes("name5") == true){ name5 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("rela5") == true){ rela5 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("icnum5") == true){ icnum5 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("value5") == true){ value5 = pa9703_arr[i].split(":").pop(); }
				
				
			}
			
			if(dchead.status == "1"){
				this.getView().byId("btnSend").setVisible(true);
				if(dchead.userad == pernr){
					this.getView().byId("btnEdit").setVisible(true);
				}
				this.getView().byId("approveSection").setVisible(false);
			}else if(dchead.status == "4"){
				if(dchead.userad == pernr){
					this.getView().byId("btnEdit").setVisible(true);
				}
			}else{
				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("approveSection").setVisible(true);
			}
			
			if(user == pernr){
				this.getView().byId("approveSection").setVisible(false);
			}
			
			this.byId("RQUST").setValue(rqust);
			this.byId("RQDAT").setValue(rqdat);
			this.byId("EFFDAT").setValue(effdat);
			this.byId("name1").setValue(name1);
			this.byId("rela1").setValue(rela1);
			this.byId("icnum1").setValue(icnum1);
			this.byId("value1").setValue(value1);
			this.byId("name2").setValue(name2);
			this.byId("rela2").setValue(rela2);
			this.byId("icnum2").setValue(icnum2);
			this.byId("value2").setValue(value2);

			this.byId("name3").setValue(name3);
			this.byId("rela3").setValue(rela3);
			this.byId("icnum3").setValue(icnum3);
			this.byId("value3").setValue(value3);
			this.byId("name4").setValue(name4);
			this.byId("rela4").setValue(rela4);
			this.byId("icnum4").setValue(icnum4);
			this.byId("value4").setValue(value4);

			this.byId("name5").setValue(name5);
			this.byId("rela5").setValue(rela5);
			this.byId("icnum5").setValue(icnum5);
			this.byId("value5").setValue(value5);
			
			var pa0002 = "";
			var titel = "";
			var t522g = "";
			var t535n = "";
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr;
			$.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		pa0002 = data;
	        		
	        	},
	        	error: function(){
	        		
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
	        
	        if(titel == " " || titel == "0"){
	        	titel = t522g.T522G.atext;
	        }
	        var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
	        jQuery.sap.require("sap.ui.core.format.NumberFormat");
	        var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			this.byId("PERNR").setText(pernr);
			this.byId("ENAME").setText(cStr);
			
			var pernrpad = pernr.toString().padStart(8,'0');
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/"+pernrpad,
	        	async: false,
	        	success: function(data){
	        		pa = data;
	        		
	        	},
	        	error: function(){
	        		pa = "X";
	        	}
	        });
			if(pa != ""){
				this.getView().byId("PLANS_DESC").setText(pa.paPos.pos_l);
				this.getView().byId("MAIN_PLANS_ORG-O_SHORT").setText(pa.paPos.org_s+pa.paPos.up_s);
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
			
			for(var c = 1; c<=2; c++){
				var attach;
				
				var link = "file0"+(c).toString();

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
			        var byteCharacters = window.atob(attach.tbl_Docattach.xdata);
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
		    	}
		    	
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
			oRouter.getRoute("BE/approveUniform").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.onInit();
			
//			if(oEvent.getParameter("arguments").from == "myTask"){
//				this.byId("approveSection").setVisible(false);
//			}else{
//				this.byId("approveSection").setVisible(true);
//			}
		},
		onDateFormat: function (value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() +1).toString().padStart(2,'0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
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
		onAccept: function (){
			var user = jQuery.sap.getUriParameters().get("user");
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var docData = new JSONModel();
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate().toString().padStart(2,'0');
			
			var aedtm = new Date();
			aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
			
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
	        	async: false,
	        	success: function(data){
	        		docData = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        }); 
			
			var json = "";
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
			
			var apptxt = this.getView().byId("sellv1").getSelectedItem().getText();
			var appkey = this.getView().byId("sellv1").getSelectedItem().getKey();
			
			if(apptxt == "ไม่อนุมัติ"){
				appkey = "4";
			}else{
				appkey = "3";
			}
			
			json = dctask;
			json.taskkey.docid = dataJ.docid;
			json.docno = dataJ.docid;
			json.module = dataJ.module;
			json.header = dataJ.header;
			json.bedat = dataJ.bedat;
			json.aedat = dataJ.aedat;
			json.taskkey.pernr = user;
			json.del_flag = this.getView().byId("avlv1").getValue();
			json.userad = dataJ.userad;
			json.status = appkey;
			json.sttext = apptxt;
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
			
			
			dataJ.userch = user;
			
			dataJ.status = appkey;
			dataJ.sttext = apptxt;
			dataJ.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
		
			
			
			dataJ = JSON.stringify(dataJ);
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno
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
			
			this.getRouter().navTo("Worklist");
			
		},
		onSendPressed: function () {
			
			var docno = complete_url.split("/").pop();
			
			var file1 = this.getView().byId("file01n").oFileUpload.files;
			
			var file2 = this.getView().byId("file02n").oFileUpload.files;
			
			if(file1.length < 1 || file2.length < 1){
				MessageToast.show("Please input all require field");
			}else{
			
				var oTable = this.getView().byId("tab01");
				var aItems = oTable.getItems();
				var ll = aItems.length;
				var cell4 = 0;
				var total = 0;
				for(var v=0;v < aItems.length;v++){
					
					var itemRow = aItems[v];
					
					cell4 = itemRow.mAggregations.cells[4].getValue();
					if(cell4.length < 1){ cell4 = 0; }
					total = total + (parseFloat(cell4));
					
				}
				if(total > 100 || total < 100){
					MessageToast.show(" กรุณากรอกผลรวมส่วนแบ่งผลประโยชน์ให้เท่ากับ 100");
				}else{
				
					var user = jQuery.sap.getUriParameters().get("user");
					var dcrun = new JSONModel();
					var dchead = new JSONModel();
					var dcdetail = new JSONModel();
					
					var year = new Date().getFullYear();
					var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
					var date = new Date().getDate().toString().padStart(2,'0');
					
					var year_budish = (year + 0).toString().substring(2,4); 
					var script = "";
					
					var pernr = this.byId("PERNR").getText();
					
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
			        	async: false,
			        	success: function(data){
			        		dchead = data.tblDocheader;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        }); 
					
					var docid = docno;
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/5",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					
					var json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docno;
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.status = "2";
					json.sttext = "รออนุมัติ";
					json = JSON.stringify(json);
					
					var postdchead = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
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
					
					$.ajax(postdchead).done(function (response) {
						console.log(response);
						dchead = response.tblDocheader;
					});
					
					var rqdat = this.byId("RQDAT").getValue();
					var effdat = this.byId("EFFDAT").getValue();
					var name1 = this.byId("name1").getValue();
					var rela1 = this.byId("rela1").getValue();
					var icnum1 = this.byId("icnum1").getValue();
					var value1 = this.byId("value1").getValue();
					
					var name2 = this.byId("name2").getValue();
					var rela2 = this.byId("rela2").getValue();
					var icnum2 = this.byId("icnum2").getValue();
					var value2 = this.byId("value2").getValue();
					
					var name3 = this.byId("name3").getValue();
					var rela3 = this.byId("rela3").getValue();
					var icnum3 = this.byId("icnum3").getValue();
					var value3 = this.byId("value3").getValue();
					
					var name4 = this.byId("name4").getValue();
					var rela4 = this.byId("rela4").getValue();
					var icnum4 = this.byId("icnum4").getValue();
					var value4 = this.byId("value4").getValue();
					
					var name5 = this.byId("name5").getValue();
					var rela5 = this.byId("rela5").getValue();
					var icnum5 = this.byId("icnum5").getValue();
					var value5 = this.byId("value5").getValue();
					
					
					var script = "pernr:"+pernr+",rqust:"+docid+",rqdat:"+rqdat+",effdat:"+effdat+",name1:"+name1+",rela1:"+rela1+",icnum1:"+icnum1+",value1:"+value1;
					
					script = script+",name2:"+name2+",rela2:"+rela2+",icnum2:"+icnum2+",value2:"+value2;
					script = script+",name3:"+name3+",rela3:"+rela3+",icnum3:"+icnum3+",value3:"+value3;
					script = script+",name4:"+name4+",rela4:"+rela4+",icnum4:"+icnum4+",value4:"+value4;
					script = script+",name5:"+name5+",rela5:"+rela5+",icnum5:"+icnum5+",value5:"+value5;
						
					json = '{"docid":"'+docno+'","script":"'+script+'","stable":"pa0591"}';
					
					var postdcdetail = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno,
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
					
					$.ajax(postdcdetail).done(function (response) {
						console.log(response);
						dcdetail = response.tblDocdetail;
					});
					
					var file = this.getView().byId("file01n").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file02n").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					
					MessageToast.show("Saved");
					
					this.getRouter().navTo("myInfo");
				}
			}
		},
		onReadFile: function(file,index,docid,year){
			
			var fname = file[0].name;
			var period = fname.lastIndexOf('.');
			var pluginName = fname.substring(0, period);
			var fileExtension = fname.substring(period + 1);
			var curfile = file[0];
			var indexitem = index;
			var base64;
			
			var reader = new FileReader();
		    	reader.onloadend = function () {
		    	base64 = reader.result.split(",");
		    	console.log(reader.result);
		    	
		    	var data = window.atob(base64[1]);
				
		    	
				var json = '{"attachKey":{"docid":"'+docid+'","xyear":"'+year+'","seqnr":"'+indexitem+'"},"xdata":"'+base64[1]+'","xname":"'+pluginName+'","xtype":"'+fileExtension+'"}';
				
				
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
		onSavePressed: function () {
			MessageToast.show("Saved");
		},

		onCancelPressed: function () {
			MessageToast.show("Cancel");
		},
		
		onEditPressed: function () {
			this.byId("name1").setEnabled(true);
			this.byId("rela1").setEnabled(true);
			this.byId("icnum1").setEnabled(true);
			this.byId("value1").setEnabled(true);
			
			this.byId("name2").setEnabled(true);
			this.byId("rela2").setEnabled(true);
			this.byId("icnum2").setEnabled(true);
			this.byId("value2").setEnabled(true);

			this.byId("name3").setEnabled(true);
			this.byId("rela3").setEnabled(true);
			this.byId("icnum3").setEnabled(true);
			this.byId("value3").setEnabled(true);
			
			this.byId("name4").setEnabled(true);
			this.byId("rela4").setEnabled(true);
			this.byId("icnum4").setEnabled(true);
			this.byId("value4").setEnabled(true);

			this.byId("name5").setEnabled(true);
			this.byId("rela5").setEnabled(true);
			this.byId("icnum5").setEnabled(true);
			this.byId("value5").setEnabled(true);
			
			this.byId("file01n").setVisible(true);
			this.byId("file02n").setVisible(true);
			
		}

	});
});