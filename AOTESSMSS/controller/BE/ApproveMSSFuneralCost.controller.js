sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveMSSFuneralCost", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var userm = user;
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var docData;
			
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
			
			user = docData.tblDocheader.userch;
			
			if(user == "" || user == null || user == " " || user.includes("NULL") == true || user.includes("null") == true ){
				user = userm;
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
			
			var pernrpad = user.toString().padStart(8,'0');
			
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
			
			var dctask;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/"+docno+"/"+user,
	        	async: false,
	        	success: function(data){
	        		dctask = data.tblDoctask;
	        		
	        	},
	        	error: function(){
	        		dctask = "X";
	        	}
	        });
			if(dctask != "X"){
				this.getView().byId("avlv1").setValue(dctask.del_flag);
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/4",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					var objid;
					if(pa0001.PA0001.orgeh == wf.List[0].org1){
						objid = wf.List[0].wfkey.level2;
					}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
						objid = wf.List[0].wfkey.level3;
					}
					
					var hrp1000;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+objid,
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        		
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
					if(hrp1000 != "X" && hrp1000 != ""){
						this.getView().byId("PLANS_DESC_APPUPNEXT").setValue(hrp1000.HRP1000.stext);
					}else{
						this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
					}
					
					
				}
				if(pa == "X" || pa == ""){
					this.getView().byId("PLANS_DESC_APPUP").setValue("กอญ.");
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("กอญ.");
					this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
				}
			}else if(docData.tblDocheader.userad == user){
				
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/4",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				var objid = wf.List[0].org1;
				
				var hrp1000;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+objid.padStart(8,'0'),
		        	async: false,
		        	success: function(data){
		        		hrp1000 = data;
		        		
		        	},
		        	error: function(){
		        		hrp1000 = "X";
		        	}
		        });
				if(hrp1000 != "X" && hrp1000 != "X"){
					this.getView().byId("PLANS_DESC_APPNEXT").setValue(hrp1000.HRP1000.stext);
				}else{
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
				}
				
			}else{
				
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/4",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				var objid;
				if(pa0001.PA0001.orgeh == wf.List[0].org1){
					objid = wf.List[0].wfkey.level2;
				}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
					objid = wf.List[0].wfkey.level3;
				}
				
				var hrp1000;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+objid,
		        	async: false,
		        	success: function(data){
		        		hrp1000 = data;
		        		
		        	},
		        	error: function(){
		        		hrp1000 = "X";
		        	}
		        });
				if(hrp1000 != "X" && hrp1000 != "X"){
					this.getView().byId("PLANS_DESC_APPNEXT").setValue(hrp1000.HRP1000.stext);
				}else{
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
				}
				
			}
			
			var date = new Date();
			var d = date.getDate();
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = (date.getFullYear()).toString().padStart(2,'0');
			this.getView().byId("approveDate").setValue([d,m,y].join("/"));
			this.getView().byId("approveDateup").setValue([d,m,y].join("/"));
			
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
			
			if(dchead.status == "1"){
				//this.getView().byId("btnSend").setVisible(true);
				this.getView().byId("approveSection").setVisible(false);
			}else{
				//this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("approveSection").setVisible(true);
			}
		
			var y = new Date().getFullYear();
			var pa9706 = new JSONModel();
			var docData = new JSONModel();
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9706";
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
			
			var pa9703_arr = script.split(",");
			var pernr = "";
			var rqust;
			var rqdat;
			var PERNO;
			var EMPNM;
			var ELCLP;
			var perItem;
			var FGBDT;
			var AGE;
			var RCPNO;
			var RCDAT;
			var reason;
			var amt1;
			var amt2;
			var amt3;
			var amt4;
			var relat;
			var payee;
			var rcpno;
			
			var arrayLength = pa9703_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9703_arr[i].split(":");
				var field = fieldar[0];
				if(field.includes("pernr") == true){ pernr = pa9703_arr[i].split(":").pop(); }
				if(field.includes("rqust") == true){ rqust = pa9703_arr[i].split(":").pop(); }
				if(field.includes("rqdat") == true){ rqdat = pa9703_arr[i].split(":").pop(); }
				if(field.includes("EMPNM") == true){ EMPNM = pa9703_arr[i].split(":").pop(); }
				if(field.includes("PERNO") == true){ PERNO = pa9703_arr[i].split(":").pop(); }
				if(field.includes("ELCLP") == true){ ELCLP = pa9703_arr[i].split(":").pop(); }
				if(field.includes("perItem") == true){ perItem = pa9703_arr[i].split(":").pop(); }
				if(field.includes("FGBDT") == true){ FGBDT = pa9703_arr[i].split(":").pop(); }
				if(field.includes("AGE") == true){ AGE = pa9703_arr[i].split(":").pop(); }
				
				if(field.includes("RCDAT") == true){ RCDAT = pa9703_arr[i].split(":").pop(); }
				if(field.includes("reason") == true){ reason = pa9703_arr[i].split(":").pop(); }
				if(field.includes("amt1") == true){ amt1 = pa9703_arr[i].split(":").pop(); }
				if(field.includes("amt2") == true){ amt2 = pa9703_arr[i].split(":").pop(); }
				if(field.includes("amt3") == true){ amt3 = pa9703_arr[i].split(":").pop(); }
				if(field.includes("amt4") == true){ amt4 = pa9703_arr[i].split(":").pop(); }
				if(field.includes("relat") == true){ relat = pa9703_arr[i].split(":").pop(); }
				if(field.includes("payee") == true){ payee = pa9703_arr[i].split(":").pop(); }
				if(field.includes("rcpno") == true){ rcpno = pa9703_arr[i].split(":").pop(); }
				
			}

			if(dchead.status == "1"){
				this.getView().byId("btnSend").setVisible(true);
				if(dchead.userad == pernr){
					this.getView().byId("btnEdit").setVisible(true);
				}
				this.getView().byId("approveSection").setVisible(false);
			}else if(dchead.status == "3"){
				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("btnEdit").setVisible(false);
				this.getView().byId("approveSection").setVisible(false);
			}else if(dchead.status == "4"){
				if(dchead.userad == pernr){
					this.getView().byId("btnEdit").setVisible(true);
				}
				this.getView().byId("approveSection").setVisible(false);
			}else{
				
				if(user == pernr){
					this.getView().byId("approveSection").setVisible(false);
				}
				
				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("approveSection").setVisible(true);
			}
			
			if(dchead.userad == user){
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
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/l/"+pa0001.PA0001.orgeh;
			$.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		pa0001 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var li = 0;
			var temp = {"List":[]};
			for(var ei=0;ei < pa0001.List.length;ei++){
				if(pa0001.List[ei].pernr != pernr){
					pa0001.List[ei].empId = pa0001.List[ei].pernr;
					
					var pa0002;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pa0001.List[ei].pernr,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					pa0001.List[ei].empName = pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					temp.List[li] = pa0001.List[ei];
					li++;
				}
				
			}
			
			var emp = {"Employees":[]};
			emp.Employees = temp.List;
			var mod = new JSONModel(emp);
			mod.setSizeLimit(1000);
			this.getView().setModel(mod);
			
			user = PERNO;
			
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
			
			var pa9701;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0003",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			var skip = "";
			var elclp = "";
			for(var x = 0;x<pa9701.List.length;x++){
				if(elclp != pa9701.List[x].elclp){
					elclp = pa9701.List[x].elclp;
					if(elclp != skip){
						var tt = temp.List.length;
						temp.List[tt] = pa9701.List[x];
						temp.List[tt].text = pa9701.List[x].eltxt;
						temp.List[tt].key = pa9701.List[x].elclp;
					}
				}
				
			}
			
			this.getView().setModel(new JSONModel(temp),"elclpItem");
			
			var elclp = ELCLP;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0003",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			for(var x = 0;x<pa9701.List.length;x++){
				if(pa9701.List[x].elclp == elclp){
					var tt = temp.List.length;
					temp.List[tt] = pa9701.List[x];
					temp.List[tt].text = pa9701.List[x].ename;
					temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(pa9701.List[x]))));
				}
			}
			
			this.getView().setModel(new JSONModel(temp),"perItem");
			
			this.getView().byId("rqust").setValue(rqust);
			this.getView().byId("rqdat").setValue(rqdat);
			this.getView().byId("PERNO").setValue(PERNO);
			this.getView().byId("EMPNM").setValue(EMPNM);
			this.getView().byId("ELCLP").setSelectedKey(ELCLP);
			this.getView().byId("perItem").setSelectedKey(perItem);
			this.getView().byId("FGBDT").setValue(FGBDT);
			this.getView().byId("AGE").setValue(AGE);
			this.getView().byId("RCDAT").setValue(RCDAT);
			this.getView().byId("reason").setValue(reason);
			this.getView().byId("amt1").setValue(amt1);
			this.getView().byId("amt2").setValue(amt2);
			this.getView().byId("amt3").setValue(amt3);
			this.getView().byId("amt4").setValue(amt4);
			this.getView().byId("relat").setValue(relat);
			this.getView().byId("payee").setValue(payee);
			this.getView().byId("RCPNO").setValue(rcpno);
			
			this.getView().byId("rqust").setEnabled(false);
			this.getView().byId("rqdat").setEnabled(false);
			this.getView().byId("PERNO").setEnabled(false);
			this.getView().byId("EMPNM").setEnabled(false);
			this.getView().byId("ELCLP").setEnabled(false);
			this.getView().byId("perItem").setEnabled(false);
			this.getView().byId("FGBDT").setEnabled(false);
			this.getView().byId("AGE").setEnabled(false);
			this.getView().byId("RCDAT").setEnabled(false);
			this.getView().byId("reason").setEnabled(false);
			this.getView().byId("amt1").setEnabled(false);
			this.getView().byId("amt2").setEnabled(false);
			this.getView().byId("amt3").setEnabled(false);
			this.getView().byId("amt4").setEnabled(false);
			this.getView().byId("relat").setEnabled(false);
			this.getView().byId("payee").setEnabled(false);
			this.getView().byId("RCPNO").setEnabled(false);
			
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
					var user = jQuery.sap.getUriParameters().get("user");
					if(docTask.List[p].taskkey.pernr == user){
						this.getView().byId("approveSection").setVisible(false);
					}
					
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
						cells : [ new sap.m.Text({text:(p + 1)}),
								  new sap.m.Text({text:pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn}),
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
			oRouter.getRoute("BE/approveMSSFuneralCost").attachPatternMatched(this._onObjectMatched, this);
			
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
		onEmpchange: function(){
			var pa0001;
			var user = this.getView().byId("PERNO").getValue();			
		},
		onChangeelclp: function(){
			var user = this.getView().byId("PERNO").getValue();
			var pa9701;
			var elclp = this.getView().byId("ELCLP").getSelectedItem().getKey();
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0003",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			for(var x = 0;x<pa9701.List.length;x++){
				if(pa9701.List[x].elclp == elclp){
					var tt = temp.List.length;
					temp.List[tt] = pa9701.List[x];
					temp.List[tt].text = pa9701.List[x].ename;
					temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(pa9701.List[x]))));
				}
			}
			
			this.getView().setModel(new JSONModel(temp),"perItem");
			
		},
		searchEmp: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog", this);
			}

			// Multi-select if required
//			this._oDialog.setMultiSelect(true);
//			this._oDialog.setRememberSelections(true);

			this.getView().addDependent(this._oDialog);

			// toggle compact style
//			jQuery.sap.syncStyleClass("sacUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
		},
		handleSearch: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new sap.ui.model.Filter([new sap.ui.model.Filter("empName", sap.ui.model.FilterOperator.Contains, sValue),
					new sap.ui.model.Filter("empId", sap.ui.model.FilterOperator.Contains, sValue),
				]);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},
		handleClose: function(oEvent) {
			var pa0001;
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().empName; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().empId; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			this.getView().byId("EMPNM").setValue(selectedNames);
			this.getView().byId("PERNO").setValue(selectedId);
			
			var user = selectedId;
			
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
			
			var pa9701;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0003",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			var skip = "";
			var elclp = "";
			for(var x = 0;x<pa9701.List.length;x++){
				if(elclp != pa9701.List[x].elclp){
					elclp = pa9701.List[x].elclp;
					if(elclp != skip){
						var tt = temp.List.length;
						temp.List[tt] = pa9701.List[x];
						temp.List[tt].text = pa9701.List[x].eltxt;
						temp.List[tt].key = pa9701.List[x].elclp;
					}
				}
				
			}
			
			this.getView().setModel(new JSONModel(temp),"elclpItem");
			
		},
		onDatedisplay2: function(value){
			var date = new Date(value);
			var d = value.substring(6, 8);
			var m = value.substring(4, 6);
			var y = value.substring(0, 4);
			
			return [d,m,y].join("/");
		},
		onChildage: function(value){
			
			var d = value.substring(6, 8);
			var m = value.substring(4, 6);
			var y = value.substring(0, 4);
			var ccd = [y,m,d].join("-");
			var birth = new Date(ccd);
			var cur = new Date();
			var diff = cur.getTime() - birth.getTime();
			
			return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
		},
		inputAmt: function(oEvent){
			
			var oSource = oEvent.getSource();
			var max = parseFloat(1000);
			var value = parseFloat(oSource.getValue().replace(",",""));
			if(value > max){
				value = max;
			}
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			var val = oNumberFormat.format(value)
			
			oSource.setValue(val);
			
			this.getValueamt();
			
		},
		getValueamt: function(){
			var a1 = parseFloat(this.getView().byId("amt1").getValue().replace(",",""));
			var a2 = parseFloat(this.getView().byId("amt2").getValue().replace(",",""));
			var a3 = parseFloat(this.getView().byId("amt3").getValue().replace(",",""));
			var a4 = parseFloat(this.getView().byId("amt4").getValue().replace(",",""));
			
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			var total = oNumberFormat.format(a1+a2+a3);
			
			this.getView().byId("amt4").setValue(total);
		},
		onChangeChield: function(){
			var user = this.getView().byId("PERNO").getValue();
			var pa9701;
			var elclp = this.getView().byId("ELCLP").getSelectedItem().getKey();
			var ch_sel = this.getView().byId("perItem").getSelectedKey();
			var zthrbee15;
			if(ch_sel != "X"){
				var ch_data = JSON.parse(decodeURIComponent(escape(window.atob(ch_sel))));
				
				if(elclp == "03"){
					this.getView().byId("FGBDT").setValue(this.onDatedisplay2(ch_data.fgbdt));
					this.getView().byId("AGE").setValue(this.onChildage(ch_data.fgbdt));
				}
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE15/02/"+elclp,
		        	async: false,
		        	success: function(data){
		        		zthrbee15 = data;
		        	},
		        	error: function(){
		        		
		        	}
		        });
				var total = 0;
				for(var z=0;z<zthrbee15.List.length;z++){
					total = total + parseFloat(zthrbee15.List[z].maxam);
					if(zthrbee15.List[z].zthrbee15key.betyp == "0001"){
						this.getView().byId("amt1").setValue(zthrbee15.List[z].maxam);
					}
					if(zthrbee15.List[z].zthrbee15key.betyp == "0002"){
						this.getView().byId("amt2").setValue(zthrbee15.List[z].maxam);
					}
				}
				this.getView().byId("amt4").setValue(total);
				
			}
		},
		onSendPressed: function () {
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var json;
			var spernr = "pernr:"+pernr;
			var rqdat = ",rqdat:"+this.getView().byId("rqdat").getValue();
			var ELCLP = ",ELCLP:"+this.getView().byId("ELCLP").getSelectedItem().getKey();
			var perItem = ",perItem:"+this.getView().byId("perItem").getSelectedItem().getKey();
			var FGBDT = ",FGBDT:"+this.getView().byId("FGBDT").getValue();
			var AGE = ",AGE:"+this.getView().byId("AGE").getValue();
			var RCPNO = ",RCPNO:"+this.getView().byId("RCPNO").getValue();
			var RCDAT = ",RCDAT:"+this.getView().byId("RCDAT").getValue();
			var reason = ",reason:"+this.getView().byId("reason").getValue();
			var amt1 = ",amt1:"+this.getView().byId("amt1").getValue().replace(",","");
			var amt2 = ",amt2:"+this.getView().byId("amt2").getValue().replace(",","");
			var amt3 = ",amt3:"+this.getView().byId("amt3").getValue().replace(",","");
			var amt4 = ",amt4:"+this.getView().byId("amt4").getValue().replace(",","");
			
			if(ELCLP.length == 0 || perItem.length == 0 || RCDAT.length == 0 || reason.length == 0 ){
				MessageToast.show("Please input all require field");
			}else{
			
				var err;
				var dcrun = new JSONModel();
				var dchead = new JSONModel();
				var dcdetail = new JSONModel();
				
				var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/10';
				var year_budish = (year + 0).toString().substring(2,4); 
				var script = "";
				
				var pernr = this.byId("PERNR").getText();
				var dcid = this.getView().byId("rqust").getValue();
				
				var docid = dcid;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docid,
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/11",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				
				json = dchead;
				json.orgeh = wf.List[0].org1;
				json.module = 'BE';
				json.header = "ค่าจัดการงานศพ(ผู้บังคับบัญชา)";
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
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docid,
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
				
				var spernr = "pernr:"+pernr;
				var rqust = ",rqust:"+docid;
				var rqdat = ",rqdat:"+this.getView().byId("rqdat").getValue();
				var PERNO = ",PERNO:"+this.getView().byId("PERNO").getValue();
				var EMPNM = ",EMPNM:"+this.getView().byId("EMPNM").getValue();
				var ELCLP = ",ELCLP:"+this.getView().byId("ELCLP").getSelectedItem().getKey();
				var perItem = ",perItem:"+this.getView().byId("perItem").getSelectedItem().getKey();
				var FGBDT = ",FGBDT:"+this.getView().byId("FGBDT").getValue();
				var AGE = ",AGE:"+this.getView().byId("AGE").getValue();
				var RCDAT = ",RCDAT:"+this.getView().byId("RCDAT").getValue();
				var reason = ",reason:"+this.getView().byId("reason").getValue();
				var amt1 = ",amt1:"+this.getView().byId("amt1").getValue().replace(/,/g,"");
				var amt2 = ",amt2:"+this.getView().byId("amt2").getValue().replace(/,/g,"");
				var amt3 = ",amt3:"+this.getView().byId("amt3").getValue().replace(/,/g,"");
				var amt4 = ",amt4:"+this.getView().byId("amt4").getValue().replace(/,/g,"");
				var relat = ",relat:"+this.getView().byId("relat").getValue();
				var payee = ",payee:"+this.getView().byId("payee").getValue();
				var rcpno = ",rcpno:"+this.getView().byId("RCPNO").getValue();
				
				var script = spernr+rqust+rqdat+ELCLP+perItem+FGBDT+AGE+RCDAT+amt1+amt2+amt3+amt4+reason+PERNO+EMPNM+relat+payee+rcpno;
	
				json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9706"}';
				
				var postdcdetail = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docid,
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
				
				
				var state;
				state = this.getView().byId("file01n").getVisible();
				if(state == true){
					var file = this.getView().byId("file01n").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file02n").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
				}
				
				MessageToast.show("Saved");
				
				this.getRouter().navTo("myInfo");
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
		onAccept: function(){
			
			var user = jQuery.sap.getUriParameters().get("user");
			var check = this.getView().byId("selvup");
			var visi = check.getVisible();
			var selvup = "";
			var selapp = this.getView().byId("sellv1").getSelectedItem().getText();
			if(visi == true){
				selvup = this.getView().byId("selvup").getSelectedItem().getText();
			}
			var aedtm = new Date();
			aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var docData = new JSONModel();
			
			if(selapp == "ไม่อนุมัติ" || selvup == "ไม่อนุมัติ"){
				
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
				json.aedat = aedtm;
				json.taskkey.pernr = user;
				json.userad = dataJ.userad;
				json.status = "4";
				json.sttext = "ไม่อนุมัติ";
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
				dataJ.aedat = aedtm;
				dataJ.sttext = "ไม่อนุมัติ";
				
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
				
				json = dctask;
				json.taskkey.docid = dataJ.docid;
				json.docno = dataJ.docid;
				json.module = dataJ.module;
				json.header = dataJ.header;
				json.bedat = dataJ.bedat;
				json.aedat = aedtm;
				json.taskkey.pernr = user;
				if(this.getView().byId("avup1").getVisible() == false){
					json.del_flag = this.getView().byId("avlv1").getValue();
				}else{
					json.del_flag = this.getView().byId("avup1").getValue();
				}
				json.userad = dataJ.userad;
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/11",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				dataJ.userch = user;
				
				if(pa0001.PA0001.orgeh == wf.List[0].org1){
					if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm;
					}else{
						dataJ.orgeh = wf.List[0].org2;
					}	
				}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
					if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm;
					}else{
						dataJ.orgeh = wf.List[0].org3;
					}
				}else{
					dataJ.status = "3";
					dataJ.sttext = "อนุมัติ";
					dataJ.aedat = aedtm;
				}
				
				dataJ = JSON.stringify(dataJ);
				
				url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno
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
		onSavePressed: function () {
			MessageToast.show("Saved");
		},

		onCancelPressed: function () {
			this.getRouter().navTo("Worklist");
		},
		
		onEditPressed: function () {
			
			this.getView().byId("RCDAT").setEnabled(true);
			this.getView().byId("reason").setEnabled(true);
			this.getView().byId("amt3").setEnabled(true);
			this.getView().byId("relat").setEnabled(true);
			this.getView().byId("payee").setEnabled(true);
			this.getView().byId("RCPNO").setEnabled(true);
			this.getView().byId("file01n").setVisible(true);
			this.getView().byId("file02n").setVisible(true);
			this.getView().byId("file01n").setEnabled(true);
			this.getView().byId("file02n").setEnabled(true);
		}

	});
});