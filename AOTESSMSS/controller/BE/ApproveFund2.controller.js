sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveFund2", {
		onAfterRendering:function (){
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
//			var rqust = this.getView().byId("RQUST").getValue();
//			if(rqust != docno){
//				var loc = location;
//				location.reload();
//			}
		},
		onInit: function () {
			 var oModel = new sap.ui.model.json.JSONModel();
			 oModel.loadData("model/employee1.json");
			 this.oTable = this.byId("idProductsTable");
			 this.getView().setModel(oModel);
			 this.getView().bindElement("/SupplierCollection/0");
			 
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
						this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("กอญ.");
					}
					if(pa == "X" || pa == ""){
						this.getView().byId("PLANS_DESC_APPUP").setValue("กอญ.");
						this.getView().byId("PLANS_DESC_APPNEXT").setValue("กอญ.");
						this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
					}
				}else{
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
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
				var zzpcy;
				var emepc;
				var p1;
				var p2;
				var p3;
				var p4;
				var p5;
				var v1;
				var v2;
				var v3;
				var v4;
				var v5;
				var i1;
				var i2;
				var i3;
				var i4;
				var i5;
				var s1;
				var s2;
				var s3;
				var s4;
				var s5;
				
				
				var arrayLength = pa9703_arr.length;
				for (var i = 0; i < arrayLength; i++) {
					var fieldar = pa9703_arr[i].split(":");
					var field = fieldar[0];
					if(field.includes("pernr") == true){ pernr = pa9703_arr[i].split(":").pop(); }
					if(field.includes("zzpcy") == true){ zzpcy = pa9703_arr[i].split(":").pop(); }
					if(field.includes("emepc") == true){ emepc = pa9703_arr[i].split(":").pop(); }
					if(field.includes("p1") == true){ p1 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("p2") == true){ p2 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("p3") == true){ p3 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("p4") == true){ p4 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("p5") == true){ p5 = pa9703_arr[i].split(":").pop(); }
					
					if(field.includes("v1") == true){ v1 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("v2") == true){ v2 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("v3") == true){ v3 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("v4") == true){ v4 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("v5") == true){ v5 = pa9703_arr[i].split(":").pop(); }
					
					if(field.includes("i1") == true){ i1 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("i2") == true){ i2 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("i3") == true){ i3 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("i4") == true){ i4 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("i5") == true){ i5 = pa9703_arr[i].split(":").pop(); }
					
					if(field.includes("s1") == true){ s1 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("s2") == true){ s2 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("s3") == true){ s3 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("s4") == true){ s4 = pa9703_arr[i].split(":").pop(); }
					if(field.includes("s5") == true){ s5 = pa9703_arr[i].split(":").pop(); }
					
				}
				
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
		        
		        if(titel == " " || titel == "0"){
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
				
				this.getView().byId("empno").setValue(pernr);
				this.getView().byId("empname").setValue(cStr);
				this.getView().byId("org").setValue(pa.paPos.org_s+pa.paPos.up_s);
				this.getView().byId("plans").setValue(pa.paPos.pos_l);
				
//				var zthrbee16;
//				$.ajax({
//		        	type: "GET",
//		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE16",
//		        	async: false,
//		        	success: function(data){
//		        		zthrbee16 = data;
//		        		
//		        	},
//		        	error: function(){
//		        		
//		        	}
//		        });
//				
//				this.getView().setModel(new JSONModel(zthrbee16),"policyItem");
				
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
				
//				this.getView().byId("ZZPCY").setSelectedKey(zzpcy);
//				this.getView().byId("EMEPC").setValue(emepc);
				this.getView().byId("p1").setValue(p1);
				this.getView().byId("p2").setValue(p2);
				this.getView().byId("p3").setValue(p3);
				this.getView().byId("p4").setValue(p4);
				this.getView().byId("p5").setValue(p5);
				
				this.getView().byId("v1").setValue(v1);
				this.getView().byId("v2").setValue(v2);
				this.getView().byId("v3").setValue(v3);
				this.getView().byId("v4").setValue(v4);
				this.getView().byId("v5").setValue(v5);
				
				
				this.getView().byId("i1").setValue(i1);
				this.getView().byId("i2").setValue(i2);
				this.getView().byId("i3").setValue(i3);
				this.getView().byId("i4").setValue(i4);
				this.getView().byId("i5").setValue(i5);
				
				this.getView().byId("s1").setValue(s1);
				this.getView().byId("s2").setValue(s2);
				this.getView().byId("s3").setValue(s3);
				this.getView().byId("s4").setValue(s4);
				this.getView().byId("s5").setValue(s5);
				
				//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
				
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
				
				var TimePolicy;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundPerson",
		        	async: false,
		        	success: function(data){
		        		TimePolicy = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				this.getView().byId("policy").setValue(TimePolicy.TimePolicy.text);
				
		},
		onDateFormat: function (value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() +1).toString().padStart(2,'0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
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
				json.del_flag = this.getView().byId("avlv1").getValue();
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
				
//				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9706";
//				$.ajax({
//		        	type: "GET",
//		        	url: url,
//		        	async: false,
//		        	success: function(data){
//		        		docData = data;
//		        		
//		        	},
//		        	error: function(){
//		        		
//		        	}
//		        });
//				
//				var script = docData.tblDocdetail.script;
//				
//				var emppay = this.byId("empPay").getValue().replace(",","");
//				script = script + ",empPay:"+emppay;
//				var json = docData.tblDocdetail;
//				json.script = script;
//				json = JSON.stringify(json);
//				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno;
//				var postdctask = {
//						  "async": false,
//						  "crossDomain": true,
//						  "url": url,
//						  "method": "PUT",
//						  "headers": {
//						    "Content-Type": "application/json",
//						    "User-Agent": "PostmanRuntime/7.13.0",
//						    "Accept": "*/*",
//						    "Cache-Control": "no-cache",
//						    
//						    "Host": "10.121.3.62:8088",
//						    "accept-encoding": "gzip, deflate",
//						    //"content-length": "1013",
//						    "Connection": "keep-alive",
//						    "cache-control": "no-cache"
//						  },
//						  "processData": false,
//						  "data": json
//						}
//				
//				$.ajax(postdctask).done(function (response) {
//					console.log(response);
//					docData = response.tblDocdetail;
//				});
				
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
				json.del_flag = this.getView().byId("avlv1").getValue();
				json.userad = user;
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
				
				
				dataJ.status = "3";
				dataJ.sttext = "อนุมัติ";
				dataJ.aedat = aedtm;
				
				
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
			
		}

	});
});