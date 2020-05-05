sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveChildrenAllowanceType1", {

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
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/6",
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/6",
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
				var seltype;
				var itemList;
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
				
				var arrayLength = pa9703_arr.length;
				for (var i = 0; i < arrayLength; i++) {
					var fieldar = pa9703_arr[i].split(":");
					var field = fieldar[0];
					if(field.includes("pernr") == true){ pernr = pa9703_arr[i].split(":").pop(); }
					if(field.includes("rqust") == true){ rqust = pa9703_arr[i].split(":").pop(); }
					if(field.includes("rqdat") == true){ rqdat = pa9703_arr[i].split(":").pop(); }
					if(field.includes("seltype") == true){ seltype = pa9703_arr[i].split(":").pop(); }
					if(field.includes("itemList") == true){ itemList = pa9703_arr[i].split(":").pop(); }
					
				}
				
				this.getView().byId("rqust").setValue(rqust);
				this.getView().byId("rqdat").setValue(rqdat);
				this.getView().byId("SelType").setSelectedKey(seltype);
				
				if(dchead.status == "1"){
//					this.getView().byId("btnSend").setVisible(true);
//					if(dchead.userad == pernr){
//						this.getView().byId("btnEdit").setVisible(true);
//					}
					this.getView().byId("approveSection").setVisible(false);
				}else if(dchead.status == "3"){
//					this.getView().byId("btnSend").setVisible(false);
//					this.getView().byId("btnEdit").setVisible(false);
					this.getView().byId("approveSection").setVisible(false);
				}else if(dchead.status == "4"){
//					if(dchead.userad == pernr){
//						this.getView().byId("btnEdit").setVisible(true);
//					}
					this.getView().byId("approveSection").setVisible(false);
				}else{
					
					if(user == pernr){
						this.getView().byId("approveSection").setVisible(false);
					}
					
//					this.getView().byId("btnSend").setVisible(false);
					this.getView().byId("approveSection").setVisible(true);
				}
				
				if(dchead.userad == user){
					this.getView().byId("approveSection").setVisible(false);
				}
				
				user = pernr;	
			
				var item = seltype;
				if(item == "1"){
					this.byId("sec01").setVisible(true);
					this.byId("sec02").setVisible(false);
				}else if(item == "2"){
					this.byId("sec02").setVisible(true);
					this.byId("sec01").setVisible(false);
				}else {
					this.byId("sec01").setVisible(false);
					this.byId("sec02").setVisible(false);
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
			
			var pa9701;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0004",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var dt = new Date();
			var d = dt.getDate().toString().padStart(2,'0');
			var m = (dt.getMonth() + 1).toString().padStart(2,'0');
			var y = dt.getFullYear().toString().padStart(4,'0');
			
			var ccd = [y,m,d].join("-");
			
			var im_data = JSON.stringify({"IM_PERNR":pernrpad,"IM_DATE":[y,m,d].join("")});
			var ex_data;
	        var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
	        var settings = {
	        		  "async": false,
	        		  "crossDomain": true,
	        		  "url": "http://pocdeqapp.airportthai.co.th:51000/RESTAdapter/HRBEI23_130",
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
	        	ex_data = response;
	        });
			
	        
			
	        
			var mul = 0;
			
			
			var oTable = this.getView().byId("ChildTab01");
			
			for(var x = 0;x<pa9701.List.length;x++){
				if(pa9701.List[x].child_rep == null){
					
					var birth = new Date(pa9701.List[x].pa9701key.begda);
					var cur = new Date();
					var diff = cur.getTime() - birth.getTime();
						mul = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
					if(ex_data.EX_DATA.DUEDD < d){
						//mul = parseFloat(ex_data.EX_DATA.NXTPAY.toString().slice(4,6)) - parseFloat(m);
						mul = mul +1;
					}
					
					var oItem = new sap.m.ColumnListItem({
						cells : [ 	new sap.m.Text({text:pa9701.List[x].objps_for}),
									new sap.m.Text({text:pa9701.List[x].ename}),
									new sap.m.Text({text:this.onDatedisplay2(pa9701.List[x].fgbdt)}),
									new sap.m.Text({text:this.onChildage(pa9701.List[x].fgbdt)}),
									new sap.m.Text({text:this.onDatedisplay(pa9701.List[x].pa9701key.begda)}),
									new sap.m.Text({text:this.onDatedisplay(pa9701.List[x].pa9701key.endda)}),
									new sap.m.Text({text:pa9701.List[x].icnum}),
									new sap.m.Text({text:pa9701.List[x].elamt}),
									new sap.m.Text({text:(parseFloat(pa9701.List[x].elamt) * mul)})
						]
					});
					oTable.addItem(oItem);
				}
			}
			
			
			var pa9701;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0005",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var oTable = this.getView().byId("ChildTab02");
			
			for(var x = 0;x<pa9701.List.length;x++){
				
				var value;
				var item_arr = window.atob(itemList).split("|");
				for(var xx = 1; xx < item_arr.length; xx++)
				{
					var items = item_arr[xx].split(",");
					for(var i = 0;i < items.length; i++)
					{
						var fieldar = items[i].split(":");
						var field = fieldar[0];
						
						if(field.includes("value") == true){ value = items[i].split(":").pop().replace(",",""); }
						
					}
				}
				if(pa9701.List[x].child_rep == null){
					var oItem = new sap.m.ColumnListItem({
						cells : [ 	new sap.m.Text({text:pa9701.List[x].objps_for}),
									new sap.m.Text({text:pa9701.List[x].ename}),
									new sap.m.Text({text:this.onDatedisplay2(pa9701.List[x].fgbdt)}),
									new sap.m.Text({text:this.onChildage(pa9701.List[x].fgbdt)}),
									new sap.m.Text({text:this.onDatedisplay(pa9701.List[x].pa9701key.begda)}),
									new sap.m.Text({text:this.onDatedisplay(pa9701.List[x].pa9701key.endda)}),
									new sap.m.Text({text:pa9701.List[x].icnum}),
									new sap.m.Text({text:pa9701.List[x].elamt}),
									new sap.m.Text({text:this.onAmtinput(value)}),
									new sap.m.Text({text:(parseFloat(pa9701.List[x].elamt) - parseFloat(value))}),
									new sap.m.Text({text:""}),
									new sap.m.Text({text:""})
						]
					});
					oTable.addItem(oItem);
				}
			}
			
			//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
			
			for(var c = 1; c<=1; c++){
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
			
			this.setModel(oViewModel, "view");
		},
		onDateFormat: function (value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() +1).toString().padStart(2,'0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		onAmtinput: function(value){
			var amt = parseFloat(value.replace(",",""));
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			var val = oNumberFormat.format(parseFloat(amt));
			
			return val;
		},
		
		onDatedisplay: function(value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			return [d,m,y].join("/");
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
				if(this.getView().byId("avup1").getVisible() == false){
					json.del_flag = this.getView().byId("avlv1").getValue();
				}else{
					json.del_flag = this.getView().byId("avup1").getValue();
				}
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/6",
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
				}else if(pa0001.PA0001.orgeh == wf.List[0].org3){
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
			MessageToast.show("Cancel");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		},
		
		addText:function(){
          this.getView().byId("form1").addContent( new sap.m.Label({ text: "Phone:" }) );
          this.getView().byId("form1").addContent( new sap.m.Input({ type: sap.m.InputType.Text, placeHolder: "Enter a Phone..." }) );
		}

	});
});