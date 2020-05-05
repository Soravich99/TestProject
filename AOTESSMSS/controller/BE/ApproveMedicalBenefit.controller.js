sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveMedicalBenefit", {

		onInit: function () {
			
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
			var pa9701;
			
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
			
			var wf;
			var pa0001;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+docData.tblDocheader.userad,
	        	async: false,
	        	success: function(data){
	        		pa0001 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			if(docData.tblDocheader.ltext1 == "รัฐบาล"){
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/2",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
			}else {
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
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
				
				var hrp1000;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+pa0001.PA0001.plans.toString().padStart(8,'0'),
		        	async: false,
		        	success: function(data){
		        		hrp1000 = data;
		        	},
		        	error: function(){
		        		hrp1000 = "X";
		        	}
		        });
				
				vename.setValue(cStr);
				
				if(hrp1000 != undefined && hrp1000 != "X" && hrp1000 != ""){
					this.getView().byId("PLANS_DESC_APPUP").setValue(hrp1000.HRP1000.stext);
				}else{
					this.getView().byId("PLANS_DESC_APPUP").setValue("");
				}
				
				var hrp1000;
				if(docData.tblDocheader.orgeh == wf.List[0].org1){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+wf.List[0].wfkey.level2.toString().padStart(8,'0'),
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
	
				}else if(docData.tblDocheader.orgeh == wf.List[0].org2){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+wf.List[0].wfkey.level3.toString().padStart(8,'0'),
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
				}else if(docData.tblDocheader.orgeh == wf.List[0].org3){
					hrp1000 = "X";
				}else{
					hrp1000 = "X";
				}
				
				if(hrp1000 != undefined && hrp1000 != "X" && hrp1000 != ""){
					this.getView().byId("PLANS_DESC_APPUPNEXT").setValue(hrp1000.HRP1000.stext);
				}else{
					this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
				}
				
				
				
			}else{
				var hrp1000;
				if(docData.tblDocheader.orgeh == wf.List[0].org1){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+wf.List[0].wfkey.level2.toString().padStart(8,'0'),
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
	
				}else if(docData.tblDocheader.orgeh == wf.List[0].org2){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+wf.List[0].wfkey.level3.toString().padStart(8,'0'),
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
				}else if(docData.tblDocheader.orgeh == wf.List[0].org3){
					hrp1000 = "X";
				}else{
					hrp1000 = "X";
				}
				if(hrp1000 != undefined && hrp1000 != "X" && hrp1000 != ""){
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
			
			var hospital = new JSONModel();
			
			var dsese = new JSONModel();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED02B",
	        	async: false,
	        	success: function(data){
	        		dsese = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var lenx = dsese.List.length;
			var deitm = new JSONModel(dsese);
			deitm.setSizeLimit(lenx);
			this.getView().setModel(deitm,"dseseItem");
			
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
			
			var y = new Date().getFullYear();
			var pa9703 = new JSONModel();
			var docData = new JSONModel();
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9703";
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
			var rqust = "";
			var rqdat = "";
			var clmty = "";
			var subty = "";
			var elclp = "";
			var famsa = "";
			var jobtl = "";
			var fgbdt = "";
			var age = "";
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
			var anzhl_03x = "";
			var anzhl_04 = "";
			var smamt_03x = "";
			var smamt_04 = "";
			
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
			    if(field.includes("jobtl") == true){ jobtl = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("fgbdt") == true){ fgbdt = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("age") == true){ age = pa9703_arr[i].split(":").pop(); }
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
			    
			    if(field.includes("anzhl_03x") == true){ anzhl_03x = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("smamt_03x") == true){ smamt_03x = pa9703_arr[i].split(":").pop(); }
			    
			    if(field.includes("anzhl04") == true){ anzhl04 = pa9703_arr[i].split(":").pop(); }
			    if(field.includes("smamt04") == true){ smamt04 = pa9703_arr[i].split(":").pop(); }
			    
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

			}
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED",
	        	async: false,
	        	success: function(data){
	        		hospital = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var len = hospital.List.length;
			var hos = new JSONModel(hospital);
			hos.setSizeLimit(len);
			this.getView().setModel(hos,"hosItem");
			
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
				this.getView().byId("btnAdd").setVisible(false);
				this.getView().byId("btnAdd2").setVisible(false);
				this.getView().byId("btnAdd3").setVisible(false);
			}else if(dchead.status == "4"){
				if(dchead.userad == pernr){
					this.getView().byId("btnEdit").setVisible(false);
				}
				this.getView().byId("approveSection").setVisible(false);
				this.getView().byId("btnAdd").setVisible(false);
				this.getView().byId("btnAdd2").setVisible(false);
				this.getView().byId("btnAdd3").setVisible(false);
			}else{
				
				if(user == pernr){
					this.getView().byId("approveSection").setVisible(false);
				}
				
				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("btnEdit").setVisible(false);
				this.getView().byId("approveSection").setVisible(true);
			}
			
			if(dchead.userad == user){
				this.getView().byId("btnAdd").setVisible(false);
				this.getView().byId("btnAdd2").setVisible(false);
				this.getView().byId("btnAdd3").setVisible(false);
				this.getView().byId("approveSection").setVisible(false);
			}
			
			user = pernr;
			
			var pa0021 = new JSONModel();
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0002",
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
			
			
			var pa9701;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0002",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			var skip = "";
			var elclpx = "";
			for(var x = 0;x<pa9701.List.length;x++){
				if(elclpx != pa9701.List[x].elclp){
					elclpx = pa9701.List[x].elclp;
					if(elclpx != skip){
						var tt = temp.List.length;
						temp.List[tt] = pa9701.List[x];
						temp.List[tt].text = pa9701.List[x].eltxt;
						temp.List[tt].key = pa9701.List[x].elclp;
					}
				}
				
			}
			
			this.getView().setModel(new JSONModel(temp),"elclpItem");
			
			var typeKey = clmty;
			if(clmty == "1"){
				if(subty == "0001")
				{
					this.byId("tab02").setVisible(false);
					this.byId("tab04").setVisible(false);
					this.byId("tab01").setVisible(true);
					this.byId("tab03").setVisible(true);
					this.byId("tab05").setVisible(false);
					this.byId("tab06").setVisible(false);
					this.byId("tab08").setVisible(false);
				}
				else if(subty == "0002")
				{
					this.byId("tab02").setVisible(false);
					this.byId("tab04").setVisible(false);
					this.byId("tab01").setVisible(true);
					this.byId("tab03").setVisible(true);
					this.byId("tab05").setVisible(false);
					this.byId("tab06").setVisible(false);
					this.byId("tab08").setVisible(false);
				}
				else
				{
					this.byId("tab02").setVisible(false);
					this.byId("tab04").setVisible(false);
					this.byId("tab01").setVisible(false);
					this.byId("tab03").setVisible(false);
					this.byId("tab05").setVisible(true);
					this.byId("tab06").setVisible(true);
					this.byId("tab08").setVisible(false);
				}
			}else{
				this.byId("tab02").setVisible(true);
				this.byId("tab04").setVisible(true);
				this.byId("tab01").setVisible(false);
				this.byId("tab03").setVisible(false);
				this.byId("tab05").setVisible(false);
				this.byId("tab06").setVisible(false);
				this.byId("tab08").setVisible(false);
				
				if(subty == "0001"){
					var resp;
					var pernrpad = pernr.padStart(8,'0');
					var dt = new Date();
					var d = dt.getDate().toString().padStart(2,'0');
					var d = (dt.getMonth() + 1).toString().padStart(2,'0');
					var d = dt.getFullYear().toString().padStart(2,'0');
					var input = JSON.stringify({"IM_PERNR":pernrpad,"IM_KEYDATE":[y,m,d].join("")});
					var auth =  window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
					var settings = {
							  "url": "http://pocdeqapp.airportthai.co.th:51000/RESTAdapter/HRBEI05_130",
							  "method": "POST",
							  "timeout": 0,
							  "async": false,
			        		  "crossDomain": true,
							  "headers": {
							    "Content-Type": ["application/json", "application/json"],
							    "Authorization": "Basic "+auth
							  },
							  "data": input,
							};

							$.ajax(settings).done(function (response) {
							  console.log(response);
							  resp = response;
							});
					if(resp != undefined){
						this.byId("SMAMT04X").setValue(resp.data.QREMN);
					}
				}
			}
			
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
	        
	        if(titel == " "){
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
			user = pernr;
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
	        
			this.byId("PERNR").setText(pernr);
			this.byId("ENAME").setText(cStr);
			
			this.byId("RQUST").setValue(rqust);
			this.byId("RQDAT").setValue(rqdat);
			this.byId("CLMTY").setSelectedKey(clmty);
			this.byId("SUBTY").setSelectedKey(subty);
			this.byId("ELCLP").setSelectedKey(elclp);
			this.byId("FAMSA").setSelectedKey(famsa);
			this.byId("JOBTL").setValue(jobtl);
			this.byId("FGBDT").setValue(fgbdt);
			this.byId("AGE").setValue(age);
			this.byId("VSTNO").setValue(vstno);
			this.byId("HTYPE").setSelectedKey(htype);
			this.byId("HNAME").setSelectedKey(hname);
			this.byId("OTHTY").setValue(othty);
			this.byId("DSESE").setSelectedKey(dsese);
			this.byId("OTDSE").setValue(otdse);
			this.byId("DSGRP").setSelectedKey(dsgrp);
			this.byId("OTDSG").setValue(otdsg);
			this.byId("RCPT1").setValue(rcpt1);
			this.byId("RCDAT").setValue(rcdat);
			this.byId("TBDAT").setValue(tbdat);
			this.byId("TEDAT").setValue(tcdat);
			this.byId("TDAYS").setValue(tdays);
			
			var typekey = this.byId("CLMTY").getSelectedKey();
			var htype = this.byId("HTYPE").getSelectedKey();
			var hospital = new JSONModel();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED",
	        	async: false,
	        	success: function(data){
	        		hospital = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var r = 1;
			var tmp = {"List":[{"hcode":"X","hname":"เลือก"}]};
			for(var j = 0;j<hospital.List.length;j++){
				if(typekey == "1"){
					if(hospital.List[j].htype == "01" || hospital.List[j].htype == ""){
						if(hospital.List[j].hgrpg == htype || hospital.List[j].hgrpg == ""){
							tmp.List[r] = hospital.List[j];
							r++;
						}
					}
				}else if(typekey == "2"){
					if(hospital.List[j].htype == "02" || hospital.List[j].htype == ""){
						if(hospital.List[j].hgrpg == htype || hospital.List[j].hgrpg == ""){
							tmp.List[r] = hospital.List[j];
							r++;
						}
					}
				}
			}
			hospital = tmp;
			var len = hospital.List.length;
			var hos = new JSONModel(hospital);
			hos.setSizeLimit(len);
			this.getView().setModel(hos,"hosItem");
			
			
			var inti = {"Institute":[]};
			inti.Institute = hospital.List;
			var mod = new JSONModel(inti);
			mod.setSizeLimit(len);
			this.getView().setModel(mod);
			
			if(subty == "0001" || subty == "0002"){
				
				anzhl03 = oNumberFormat.format(parseFloat(anzhl03));
				smamt03 = oNumberFormat.format(parseFloat(smamt03));
				
				if(clmty == "1"){
					this.byId("ANZHL03").setValue(anzhl03);
					this.byId("SMAMT03").setValue(smamt03);
					this.byId("ANZHL03X").setValue(anzhl_03x);
					this.byId("SMAMT03X").setValue(smamt_03x);
				}else{
					if(anzhl_04 == ""){
						this.byId("ANZHL04").setValue(anzhl03);
						this.byId("SMAMT04").setValue(smamt03);
					}else{
						this.byId("ANZHL04").setValue(anzhl_04);
						this.byId("SMAMT04").setValue(smamt_04);
					}
					
				}
				
			}else if(subty == "0003"){

				this.byId("TXINV").setValue(txinv);
				this.byId("SHTXID").setValue(shtxid);
				this.byId("SHNAM").setValue(shnam);
				this.byId("SHBRNC").setValue(shbrnc);
				this.byId("SHPAD").setValue(shpad);
				this.byId("SHPAD2").setValue(shpad2);
				
				this.byId("TXDAT").setValue(txdat);
				this.byId("SHPOS").setValue(shpos);
				this.byId("SHCUT").setValue(shcut);
				
				nvamt = oNumberFormat.format(parseFloat(nvamt));
				vtamt = oNumberFormat.format(parseFloat(vtamt));
				totval = oNumberFormat.format(parseFloat(totval));
				
				this.byId("NVAMT").setValue(nvamt);
				this.byId("VTAMT").setValue(vtamt);
				this.byId("totVal").setValue(totval);
			}
			
			var emppay = 0;
			var cell2 = 0;
			var cell3 = 0;
			var cell5 = 0;
			var cell6 = 0;
			var item_arr = window.atob(itemList).split("|");
			
			if(subty == "0001" || subty == "0002"){
				if(clmty == "1") {
					var oTable = this.getView().byId("idTab01");
				}else{
					var oTable = this.getView().byId("idTab02");
				}
			}else if(subty == "0003"){
				var oTable = this.getView().byId("idTab05");
			}
			var item = oTable.getItems();
			for(var d=0;d<item.length;d++){
				oTable.removeItem(item[d]);
			}
			
			for(var x = 1; x < item_arr.length; x++)
			{
				var items = item_arr[x].split(",");
				var eetyp03 = "";
				var reamt03 = "";
				var riamt03 = "";
				var amtu03 = "";
				var cleamt03 = "";
				var cleamt103 = "";
				var bool = false;
				if(x > 1){
					bool = true;
				}
				
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
				if(reamt03 == ""){ reamt03 = 0;}
				if(riamt03 == ""){ riamt03 = 0;}
				if(cleamt03 == ""){ cleamt03 = 0;}
				if(cleamt103 == ""){ cleamt103 = 0;}
				cell2 = cell2 + parseFloat(reamt03);
				cell3 = cell3 + parseFloat(riamt03);
				cell5 = cell5 + parseFloat(cleamt03);
				cell6 = cell6 + parseFloat(cleamt103);
				reamt03 = oNumberFormat.format(parseFloat(reamt03));
				riamt03 = oNumberFormat.format(parseFloat(riamt03));
				cleamt03 = oNumberFormat.format(parseFloat(cleamt03));
				cleamt103 = oNumberFormat.format(parseFloat(cleamt103));
				var eetyp03_list = new JSONModel();
				if(subty == "0001"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}else if(subty == "0002"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/IPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}else if(subty == "0003"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}
				this.getView().setModel(new JSONModel(eetyp03_list),"tretData");
				
				if(clmty == "1"){
					var oItem = new sap.m.ColumnListItem({
						//			cells : [ new sap.m.Select(), new sap.m.Input(), new sap.m.Input({
						//			showValueHelp : true
						//
						//			}), 
										cells : [ new sap.m.Select({
													items: { 
														path: "tretData>/List", 
														template: new sap.ui.core.ListItem({
															key: '{tretData>ttype}',
														    text: '{tretData>ttypetxt}'
														})
													},
													selectedKey: eetyp03,
													enabled: false
												}), new sap.m.Input({value: reamt03,enabled: false}), 
													new sap.m.Input({value: riamt03,enabled: false}),
													new sap.m.Input({value: amtu03,enabled: bool, change: [this.inputAmt, this]}),
													new sap.m.Input({value: cleamt03,enabled: bool, change: [this.inputAmt, this]}),
													new sap.m.Input({value: cleamt103,enabled: bool, change: [this.inputAmt, this]}),
													new sap.m.Input({enabled: true}),
													new sap.m.Button({
														text : "Delete",
														press : [ this.remove, this ],visible: bool
													}) 
										]
									});
				}else{
					var oItem = new sap.m.ColumnListItem({
						//			cells : [ new sap.m.Select(), new sap.m.Input(), new sap.m.Input({
						//			showValueHelp : true
						//
						//			}), 
										cells : [ new sap.m.Select({
													items: { 
														path: "tretData>/List", 
														template: new sap.ui.core.ListItem({
															key: '{tretData>ttype}',
														    text: '{tretData>ttypetxt}'
														})
													},
													selectedKey: eetyp03,
													enabled: false
												}), new sap.m.Input({value: reamt03,enabled: false}), 
													new sap.m.Input({value: riamt03,enabled: false, change: [this.inputAmt, this]}),
													new sap.m.Input({value: amtu03,enabled: bool, change: [this.inputAmt, this]}),
													new sap.m.Input({value: cleamt03,enabled: bool, change: [this.inputAmt, this]}),
													new sap.m.Input({value: cleamt103,enabled: bool, change: [this.inputAmt, this]}),
													new sap.m.Input({enabled: true}),
													new sap.m.Button({
														text : "Delete",
														press : [ this.remove, this ],visible: bool
													}) 
										]
									});
				}
				
				if(subty == "0001" || subty == "0002"){
					if(clmty == "1") {
						var oTable = this.getView().byId("idTab01");
						oTable.addItem(oItem);
					}else{
						var oTable = this.getView().byId("idTab02");
						oTable.addItem(oItem);
					}
				}else if(subty == "0003"){
					var oTable = this.getView().byId("idTab05");
					oTable.addItem(oItem);
				}
				
				this.byId("empPaylab").setValue(oNumberFormat.format((cell5+cell6)));
			}
			
			if(clmty == "1"){
				for(var c = 1; c<=5; c++){
					var attach;
					if(subty == "0001" || subty == "0002" ){
						var link = "file0"+c.toString();
					}else if(subty == "0003"){
						if(c < 5){
							var link = "file0"+(c+5).toString();
						}else{
							var link = "file"+(c+5).toString();
						}
					}
					
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
			}else {
				for(var c = 1; c<=6; c++){
					var attach;
					var link = "file1"+c.toString();
					
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
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("BE/approveMedicalBenefit").attachPatternMatched(this._onObjectMatched, this);
		},
		onDateFormat: function (value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() +1).toString().padStart(2,'0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		onAdd : function(oEvent) {
			var elclp = this.byId("ELCLP").getSelectedKey();
			var pernr = this.byId("PERNR").getText();
			var pa0001;
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
			var typeKey = this.byId("CLMTY").getSelectedKey();
			if(typeKey == "1"){
				var subty = this.byId("SUBTY").getSelectedKey();
				var eetyp03_list = new JSONModel();
				if(subty == "0001"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var zthrbee03;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE03/OPD/"+pa0001.PA0001.persg+"/"+elclp,
			        	async: false,
			        	success: function(data){
			        		zthrbee03 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					var tmpList = {"List":[]};
					var tc = 0;
					for(var tx = 0; tx < zthrbee03.List.length; tx++ ){
						for(var ty = 0; ty < eetyp03_list.List.length; ty++){
							if(eetyp03_list.List[ty].ttype == zthrbee03.List[tx].zthrbee03key.ttype){
								tmpList.List[tc] = eetyp03_list.List[ty];
								tc++;
							}
						}
					}
					
					eetyp03_list = tmpList;
					
				}else if(subty == "0002"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/IPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var zthrbee03;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE03/IPD/"+pa0001.PA0001.persg+"/"+elclp,
			        	async: false,
			        	success: function(data){
			        		zthrbee03 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					var tmpList = {"List":[]};
					var tc = 0;
					for(var tx = 0; tx < zthrbee03.List.length; tx++ ){
						for(var ty = 0; ty < eetyp03_list.List.length; ty++){
							if(eetyp03_list.List[ty].ttype == zthrbee03.List[tx].zthrbee03key.ttype){
								tmpList.List[tc] = eetyp03_list.List[ty];
								tc++;
							}
						}
					}
					
					eetyp03_list = tmpList;
					
				}else if(subty == "0003"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
				}
				this.getView().setModel(new JSONModel(eetyp03_list),"tretData2");
				
				var oItem = new sap.m.ColumnListItem({
	//			cells : [ new sap.m.Select(), new sap.m.Input(), new sap.m.Input({
	//			showValueHelp : true
	//
	//			}), 
					cells : [ new sap.m.Select({
								items: { 
									path: "tretData2>/List", 
									template: new sap.ui.core.ListItem({
										key: '{tretData2>ttype}',
									    text: '{tretData2>ttypetxt}'
									})
								}
							}), new sap.m.Input({enabled: false}),
								new sap.m.Input({enabled: false}),
								new sap.m.Input({change: [this.inputAmt, this]}), 
								new sap.m.Input({change: [this.inputAmt, this]}), 
								new sap.m.Input({change: [this.inputAmt, this]}),
								new sap.m.Input({enabled: false}),
								new sap.m.Button({
									text : "Delete",
									press : [ this.remove, this ]
								}) 
					]
				});
				if(subty == "0001" || subty == "0002"){
					if(typeKey == "1") {
						var oTable = this.getView().byId("idTab01");
						oTable.addItem(oItem);
					}else{
						var oTable = this.getView().byId("idTab02");
						oTable.addItem(oItem);
					}
				}else if(subty == "0003"){
					var oTable = this.getView().byId("idTab05");
					oTable.addItem(oItem);
				}
			}else{
				var subty = this.byId("SUBTY").getSelectedKey();
				var eetyp03_list = new JSONModel();
				if(subty == "0001"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var zthrbee03;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE04/OPD/"+pa0001.PA0001.persg+"/"+elclp,
			        	async: false,
			        	success: function(data){
			        		zthrbee03 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					var tmpList = {"List":[]};
					var tc = 0;
					for(var tx = 0; tx < zthrbee03.List.length; tx++ ){
						for(var ty = 0; ty < eetyp03_list.List.length; ty++){
							if(eetyp03_list.List[ty].ttype == zthrbee03.List[tx].zthrbee04key.ttype){
								tmpList.List[tc] = eetyp03_list.List[ty];
								tc++;
							}
						}
					}
					
				}else if(subty == "0002"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/IPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var zthrbee03;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE04/IPD/"+pa0001.PA0001.persg+"/"+elclp,
			        	async: false,
			        	success: function(data){
			        		zthrbee03 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					var tmpList = {"List":[]};
					var tc = 0;
					for(var tx = 0; tx < zthrbee03.List.length; tx++ ){
						for(var ty = 0; ty < eetyp03_list.List.length; ty++){
							if(eetyp03_list.List[ty].ttype == zthrbee03.List[tx].zthrbee04key.ttype){
								tmpList.List[tc] = eetyp03_list.List[ty];
								tc++;
							}
						}
					}
					
				}else if(subty == "0003"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}
				this.getView().setModel(new JSONModel(tmpList),"tretData2");
				//this.getView().setModel(new JSONModel(eetyp03_list),"tretData");
				
				var oItem = new sap.m.ColumnListItem({
	//			cells : [ new sap.m.Select(), new sap.m.Input(), new sap.m.Input({
	//			showValueHelp : true
	//
	//			}), 
					cells : [ new sap.m.Select({
								items: { 
									path: "tretData2>/List", 
									template: new sap.ui.core.ListItem({
										key: '{tretData2>ttype}',
									    text: '{tretData2>ttypetxt}'
									})
								}
							}), new sap.m.Input({enabled: false}),
								new sap.m.Input({enabled: false}),
								new sap.m.Input({change: [this.inputAmt, this]}), 
								new sap.m.Input({change: [this.inputAmt, this]}), 
								new sap.m.Input({enabled: false}),
								new sap.m.Button({
									text : "Delete",
									press : [ this.remove, this ]
								}) 
					]
				});
				if(subty == "0001" || subty == "0002"){
					if(typeKey == "1") {
						var oTable = this.getView().byId("idTab01");
						oTable.addItem(oItem);
					}else{
						var oTable = this.getView().byId("idTab02");
						oTable.addItem(oItem);
					}
				}else if(subty == "0003"){
					var oTable = this.getView().byId("idTab05");
					oTable.addItem(oItem);
				}
			}
		},
		onELCLPChange: function() {
//			var data = jQuery.sap.getUriParameters().get("lqex");
//			var decd = "";
//			var settings = {
//					  "async": false,
//					  "crossDomain": true,
//					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//					  "method": "POST",
//					  "headers": {
//					    "Content-Type": "application/json",
//					    "Accept": "*/*",
//					    "Cache-Control": "no-cache",
//					    "Host": "10.121.3.62:8083",
//					    "accept-encoding": "gzip, deflate",
//					    "Connection": "keep-alive",
//					    "cache-control": "no-cache"
//					  },
//					  "processData": false,
//					  "data": data
//					}
//
//				$.ajax(settings).done(function (response) {
//				  console.log(response); 
//				  decd = response;
//				});
//			
//			
//			var itex = decd.split("|");
//			var user = itex[0];
			var user = jQuery.sap.getUriParameters().get("user");
			var pa9701;
			var elclp = this.getView().byId("ELCLP").getSelectedItem().getKey();
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0002",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var xkey = "X";
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			for(var x = 0;x<pa9701.List.length;x++){
				if(pa9701.List[x].elclp == elclp){
					var tt = temp.List.length;
					temp.List[tt] = pa9701.List[x];
					temp.List[tt].text = pa9701.List[x].ename;
					temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(pa9701.List[x]))));
					xkey = temp.List[tt].key;
				}
			}
			
			this.getView().setModel(new JSONModel(temp),"perItem");
			this.getView().byId("FAMSA").setSelectedKey("X");
			if(elclp != "03"){
				this.getView().byId("FAMSA").setSelectedKey(xkey);
			}
			this.getView().byId("FGBDT").setValue("");
			this.getView().byId("AGE").setValue("");
			this.getView().byId("JOBTL").setValue("");
		},
		inputAmt: function(){
			
			var user = this.byId("PERNR").getText();
			var typeKey = this.byId("CLMTY").getSelectedKey();
			var elclp = this.byId("ELCLP").getSelectedKey();
			
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
			
			if(typeKey == "1"){
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				if(subty == "0001" || subty == "0002"){
					if(typeKey == "1") {
						var oTable = this.getView().byId("idTab01");
					}else{
						var oTable = this.getView().byId("idTab02");
					}
				}else if(subty == "0003"){
					var oTable = this.getView().byId("idTab05");
				}
				var aItems = oTable.getItems();
				
				jQuery.sap.require("sap.ui.core.format.NumberFormat");
				var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					  maxFractionDigits: 2,
					  minFractionDigits: 2,
					  groupingEnabled: true,
					  groupingSeparator: ",",
					  decimalSeparator: "."
					});
	
				var cell2 = 0;
				var cell3 = 0;
				var cell4 = 0;
				var cell5 = 0;
				var cell6 = 0;
				
				var itemList = "";
				for(var x=0;x < aItems.length;x++){
					var itemData = "";
					var itemRow = aItems[x].getCells();
					
					var max = 0;
					var eichk = "";
					var xeinh = "";
					if(subty == "0001"){
						var itemSel = itemRow[0].getSelectedItem().getKey();
						var zthrbee03;
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE03/OPD/"+pa0001.PA0001.persg+"/"+elclp,
				        	async: false,
				        	success: function(data){
				        		zthrbee03 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						for(var tx = 0; tx < zthrbee03.List.length; tx++ ){
							if(itemSel == zthrbee03.List[tx].zthrbee03key.ttype){
								max = parseFloat(zthrbee03.List[tx].mxamt);
								eichk = zthrbee03.List[tx].eichk;
								zeinh = zthrbee03.List[tx].zeinh;
							}
						}
						
					}else if(subty == "0002"){
						var itemSel = itemRow[0].getSelectedItem().getKey();
						var zthrbee04;
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE03/IPD/"+pa0001.PA0001.persg+"/"+elclp,
				        	async: false,
				        	success: function(data){
				        		zthrbee04 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						for(var tx = 0; tx < zthrbee04.List.length; tx++ ){
							if(itemSel == zthrbee04.List[tx].zthrbee03key.ttype){
								max = parseFloat(zthrbee04.List[tx].mxamt);
								eichk = zthrbee04.List[tx].eichk;
								zeinh = zthrbee04.List[tx].zeinh;
							}
						}
						
					}
					var ext = 1;
					var chk = itemRow[1].getValue();
					if(chk != ""){
						cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
						itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
					}
					chk = itemRow[2].getValue();
					if(chk != ""){
						cell3 = cell3 + parseFloat(itemRow[2].getValue().replace(",",""));
						itemRow[2].setValue(oNumberFormat.format(itemRow[2].getValue().replace(",","")));
					}
					chk = itemRow[3].getValue();
					if(chk != ""){
						cell4 = cell4 + parseFloat(itemRow[3].getValue().replace(",",""));
						itemRow[3].setValue(oNumberFormat.format(itemRow[3].getValue().replace(",","")));
						if(itemRow[3].getValue() != ""){
							if(zeinh == "Z02"){
								if(parseFloat(itemRow[3].getValue().replace(",","")) > 0){
									ext = parseFloat(itemRow[3].getValue().replace(",",""));
								}
							}
						}
					}
					chk = itemRow[4].getValue();
					if(chk != ""){
						if(eichk == "01"){
							if(max != 0){
								if(parseFloat(itemRow[4].getValue().replace(",","")) > (max * ext)){
									cell5 = cell5 + parseFloat(max * ext);
									itemRow[4].setValue(oNumberFormat.format(max * ext))
								}else{
									cell5 = cell5 + parseFloat(itemRow[4].getValue().replace(",",""));
									itemRow[4].setValue(oNumberFormat.format(itemRow[4].getValue().replace(",","")));
								}
							}else{
								cell5 = cell5 + parseFloat(itemRow[4].getValue().replace(",",""));
								itemRow[4].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")));
							}
						}else{
							cell5 = cell5 + parseFloat(itemRow[4].getValue().replace(",",""));
							itemRow[4].setValue(oNumberFormat.format(itemRow[4].getValue().replace(",","")));
						}
					}
					chk = itemRow[5].getValue();
					if(chk != ""){
						if(eichk == "02"){
							if(max != 0){
								if(parseFloat(itemRow[5].getValue().replace(",","")) > (max * ext)){
									cell6 = cell6 + parseFloat(max * ext);
									itemRow[5].setValue(oNumberFormat.format(max * ext))
								}else{
									cell6 = cell6 + parseFloat(itemRow[5].getValue().replace(",",""));
									itemRow[5].setValue(oNumberFormat.format(itemRow[5].getValue().replace(",","")));
								}
							}else{
								cell6 = cell6 + parseFloat(itemRow[5].getValue().replace(",",""));
								itemRow[5].setValue(oNumberFormat.format(itemRow[5].getValue().replace(",","")));
							}
						}else{
							cell6 = cell6 + parseFloat(itemRow[5].getValue().replace(",",""));
							itemRow[5].setValue(oNumberFormat.format(itemRow[5].getValue().replace(",","")));
						}
					}
					
					
				}
				if(subty == "0001" || subty == "0002"){
					
					var amount = cell5+cell6;
					var diff = ((cell2+cell3)-(cell5+cell6));
						amount = oNumberFormat.format(amount);
						cell4 = oNumberFormat.format(cell4);
						cell5 = oNumberFormat.format(cell5);
						cell6 = oNumberFormat.format(cell6);
					this.byId("ANZHL03").setValue(cell5);
					this.byId("SMAMT03").setValue(cell6);
					this.byId("ANZHL03X").setValue(amount);
					this.byId("SMAMT03X").setValue(diff);
				}else if(subty == "0003"){
					
					var nvamt = parseFloat(this.byId("NVAMT").getValue().replace(",",""));
					var vtamt = parseFloat(this.byId("VTAMT").getValue().replace(",",""));
					var amount = nvamt+vtamt;
					var emppay = oNumberFormat.format(cell5+cell6);
					
					amount = oNumberFormat.format(amount);
					nvamt = oNumberFormat.format(nvamt);
					vtamt = oNumberFormat.format(vtamt);
					cell5 = oNumberFormat.format(cell5);
					
					//var selVat = this.byId("selecteSwap").getSelected();
					this.byId("NVAMT").setValue(nvamt);
					this.byId("VTAMT").setValue(vtamt);
					this.byId("totVal").setValue(amount);
					this.byId("empPaylab").setValue(emppay);
					
				}
			}else{
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				
				var oTable = this.getView().byId("idTab02");
				var aItems = oTable.getItems();
				
				jQuery.sap.require("sap.ui.core.format.NumberFormat");
				var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					  maxFractionDigits: 2,
					  minFractionDigits: 2,
					  groupingEnabled: true,
					  groupingSeparator: ",",
					  decimalSeparator: "."
					});
	
				var cell2 = 0;
				var cell3 = 0;
				var cell4 = 0;
				var cell5 = 0;
				
				var itemList = "";
				for(var x=0;x < aItems.length;x++){
					var itemData = "";
					var itemRow = aItems[x].getCells();
					
					var max = 0;
					var eichk = "";
					var zeinh = "";
					if(subty == "0001"){
						var itemSel = itemRow[0].getSelectedItem().getKey();
						var zthrbee03;
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE04/OPD/"+pa0001.PA0001.persg+"/"+elclp,
				        	async: false,
				        	success: function(data){
				        		zthrbee03 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						for(var tx = 0; tx < zthrbee03.List.length; tx++ ){
							if(itemSel == zthrbee03.List[tx].zthrbee04key.ttype){
								max = parseFloat(zthrbee03.List[tx].mxamt);
								eichk = zthrbee03.List[tx].eichk;
								zeinh = zthrbee03.List[tx].zeinh;
							}
						}
						
					}else if(subty == "0002"){
						var itemSel = itemRow[0].getSelectedItem().getKey();
						var zthrbee04;
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE04/IPD/"+pa0001.PA0001.persg+"/"+elclp,
				        	async: false,
				        	success: function(data){
				        		zthrbee04 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						for(var tx = 0; tx < zthrbee04.List.length; tx++ ){
							if(itemSel == zthrbee04.List[tx].zthrbee04key.ttype){
								max = parseFloat(zthrbee04.List[tx].mxamt);
								eichk = zthrbee04.List[tx].eichk;
								zeinh = zthrbee04.List[tx].zeinh;
							}
						}
						
					}
					var ext = 1;
					var chk = itemRow[1].getValue();
					if(chk != ""){
						cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
						itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
					}
					chk = itemRow[2].getValue();
					if(chk != ""){
						cell3 = cell3 + parseFloat(itemRow[2].getValue().replace(",",""));
						itemRow[2].setValue(oNumberFormat.format(itemRow[2].getValue().replace(",","")))
					}
					chk = itemRow[3].getValue();
					if(chk != ""){
						cell4 = cell4 + parseFloat(itemRow[3].getValue().replace(",",""));
						itemRow[3].setValue(oNumberFormat.format(itemRow[3].getValue().replace(",","")))
						if(itemRow[3].getValue() != ""){
							if(zeinh == "Z02"){
								if(parseFloat(itemRow[3].getValue().replace(",","")) > 0){
									ext = parseFloat(itemRow[3].getValue().replace(",",""));
								}
							}
						}
					}
					chk = itemRow[4].getValue();
					if(chk != ""){
						if(eichk == "01"){
							if(max != 0){
								if(parseFloat(itemRow[4].getValue().replace(",","")) > (max * ext)){
									cell5 = cell5 + parseFloat(max * ext);
									itemRow[4].setValue(oNumberFormat.format(max * ext))
								}else{
									cell5 = cell5 + parseFloat(itemRow[4].getValue().replace(",",""));
									itemRow[4].setValue(oNumberFormat.format(itemRow[4].getValue().replace(",","")));
								}
							}else{
								cell5 = cell5 + parseFloat(itemRow[4].getValue().replace(",",""));
								itemRow[4].setValue(oNumberFormat.format(itemRow[4].getValue().replace(",","")));
							}
						}else{
							cell5 = cell5 + parseFloat(itemRow[4].getValue().replace(",",""));
							itemRow[4].setValue(oNumberFormat.format(itemRow[4].getValue().replace(",","")));
						}
					}
					chk = itemRow[5].getValue();
					if(chk != ""){
						if(eichk == "02"){
							if(max != 0){
								if(parseFloat(itemRow[5].getValue().replace(",","")) > (max * ext)){
									cell6 = cell6 + parseFloat(max * ext);
									itemRow[5].setValue(oNumberFormat.format(max * ext))
								}else{
									cell6 = cell6 + parseFloat(itemRow[5].getValue().replace(",",""));
									itemRow[5].setValue(oNumberFormat.format(itemRow[5].getValue().replace(",","")));
								}
							}else{
								cell6 = cell6 + parseFloat(itemRow[5].getValue().replace(",",""));
								itemRow[5].setValue(oNumberFormat.format(itemRow[5].getValue().replace(",","")));
							}
						}else{
							cell6 = cell6 + parseFloat(itemRow[1].getValue().replace(",",""));
							itemRow[5].setValue(oNumberFormat.format(itemRow[5].getValue().replace(",","")));
						}
					}
					
				}
				if(subty == "0001" || subty == "0002"){
					
					var amount = cell2+cell3;
					
						amount = oNumberFormat.format(amount);
						cell2 = oNumberFormat.format(cell2);
						cell3 = oNumberFormat.format(cell3);
						cell4 = oNumberFormat.format(cell4);
						cell5 = oNumberFormat.format(cell5);
					this.byId("ANZHL04").setValue(cell4);
					this.byId("SMAMT04").setValue(cell5);
				}
			}
			
		},
		inputAmt2: function(){
			var user = jQuery.sap.getUriParameters().get("user");
			var typeKey = this.byId("CLMTY").getSelectedKey();
			var elclp = this.byId("ELCLP").getSelectedKey();
			
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
			
			if(typeKey == "1"){
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				if(subty == "0001" || subty == "0002"){
					var oTable = this.getView().byId("idTab01");
				}else if(subty == "0003"){
					var oTable = this.getView().byId("idTab05");
				}
				var aItems = oTable.getItems();
				
				jQuery.sap.require("sap.ui.core.format.NumberFormat");
				var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					  maxFractionDigits: 2,
					  minFractionDigits: 2,
					  groupingEnabled: true,
					  groupingSeparator: ",",
					  decimalSeparator: "."
					});
	
				var cell2 = 0;
				var cell3 = 0;
				
				var itemList = "";
				for(var x=0;x < aItems.length;x++){
					var itemData = "";
					var itemRow = aItems[x].getCells();
					var max = 0;
					
					var chk = itemRow[1].getValue();
					if(chk != ""){
						if(max != 0){
							if(parseFloat(itemRow[1].getValue().replace(",","")) > max){
								cell2 = cell2 + parseFloat(0);
								itemRow[1].setValue(oNumberFormat.format(0))
							}else{
								cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
								itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
							}
						}else{
							cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
							itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
						}
						
					}
					chk = itemRow[2].getValue();
					if(chk != ""){
						cell3 = cell3 + parseFloat(itemRow[2].getValue().replace(",",""));
						itemRow[2].setValue(oNumberFormat.format(itemRow[2].getValue().replace(",","")))
					}
					
					
				}
				if(subty == "0001" || subty == "0002"){
					
					var amount = cell2+cell3;
					
						amount = oNumberFormat.format(amount);
						cell2 = oNumberFormat.format(cell2);
					this.byId("ANZHL03").setValue(cell2);
					this.byId("SMAMT03").setValue(amount);
				}else if(subty == "0003"){
					
					var nvamt = this.byId("NVAMT").getValue().replace(",","");
					var vtamt = this.byId("VTAMT").getValue().replace(",","");
					if(nvamt.length > 0){
						nvamt = parseFloat(nvamt);
					}
					else{
						nvamt = 0;
					}
					if(vtamt.length > 0){
						vtamt = parseFloat(vtamt);
					}
					else{
						vtamt = 0;
					}
					var amount = nvamt+vtamt;
					
					amount = oNumberFormat.format(amount);
					nvamt = oNumberFormat.format(nvamt);
					vtamt = oNumberFormat.format(vtamt);
					
					var selVat = this.byId("selecteSwap").getSelected();
					this.byId("NVAMT").setValue(nvamt);
					this.byId("VTAMT").setValue(vtamt);
					this.byId("totVal").setValue(amount);
	
				}
			}else{
				
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				
				var oTable = this.getView().byId("idTab02");
				var aItems = oTable.getItems();
				
				jQuery.sap.require("sap.ui.core.format.NumberFormat");
				var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					  maxFractionDigits: 2,
					  minFractionDigits: 2,
					  groupingEnabled: true,
					  groupingSeparator: ",",
					  decimalSeparator: "."
					});
	
				var cell2 = 0;
				var cell3 = 0;
				
				var itemList = "";
				for(var x=0;x < aItems.length;x++){
					var itemData = "";
					var itemRow = aItems[x].getCells();
					var max = 0;
					
					var chk = itemRow[1].getValue();
					if(chk != ""){
						if(max != 0){
							if(parseFloat(itemRow[1].getValue().replace(",","")) > max){
								cell2 = cell2 + parseFloat(0);
								itemRow[1].setValue(oNumberFormat.format(0))
							}else{
								cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
								itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
							}
						}else{
							cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
							itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
						}
						
					}
					chk = itemRow[2].getValue();
					if(chk != ""){
						cell3 = cell3 + parseFloat(itemRow[2].getValue().replace(",",""));
						itemRow[2].setValue(oNumberFormat.format(itemRow[2].getValue().replace(",","")))
					}
				}
				if(subty == "0001" || subty == "0002"){
					
					var amount = cell2+cell3;
					
						amount = oNumberFormat.format(amount);
						cell2 = oNumberFormat.format(cell2);
					this.byId("ANZHL04").setValue(cell2);
					this.byId("SMAMT04").setValue();
				}
				
			}
			
		},
		onChangeChield: function(){
//			var data = jQuery.sap.getUriParameters().get("lqex");
//			var decd = "";
//			var settings = {
//					  "async": false,
//					  "crossDomain": true,
//					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//					  "method": "POST",
//					  "headers": {
//					    "Content-Type": "application/json",
//					    "Accept": "*/*",
//					    "Cache-Control": "no-cache",
//					    "Host": "10.121.3.62:8083",
//					    "accept-encoding": "gzip, deflate",
//					    "Connection": "keep-alive",
//					    "cache-control": "no-cache"
//					  },
//					  "processData": false,
//					  "data": data
//					}
//
//				$.ajax(settings).done(function (response) {
//				  console.log(response); 
//				  decd = response;
//				});
//			
//			
//			var itex = decd.split("|");
//			var user = itex[0];
			var user = jQuery.sap.getUriParameters().get("user");
			var pa9701;
			var elclp = this.getView().byId("ELCLP").getSelectedItem().getKey();
			var ch_sel = this.getView().byId("FAMSA").getSelectedKey();
			var zthrbee15;
			if(ch_sel != "X"){
				var ch_data = JSON.parse(decodeURIComponent(escape(window.atob(ch_sel))));
				
				if(elclp == "03"){
					this.getView().byId("FGBDT").setValue(this.onDatedisplay2(ch_data.fgbdt));
					this.getView().byId("AGE").setValue(this.onChildage(ch_data.fgbdt));
				}
				
				this.getView().byId("JOBTL").setValue(ch_data.jobtl);
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE15/01/"+elclp,
		        	async: false,
		        	success: function(data){
		        		zthrbee15 = data;
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				
			}
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
		onSendPressed: function () {
//			var data = jQuery.sap.getUriParameters().get("lqex");
//			var decd = "";
//			var settings = {
//					  "async": false,
//					  "crossDomain": true,
//					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//					  "method": "POST",
//					  "headers": {
//					    "Content-Type": "application/json",
//					    "Accept": "*/*",
//					    "Cache-Control": "no-cache",
//					    "Host": "10.121.3.62:8083",
//					    "accept-encoding": "gzip, deflate",
//					    "Connection": "keep-alive",
//					    "cache-control": "no-cache"
//					  },
//					  "processData": false,
//					  "data": data
//					}
//
//				$.ajax(settings).done(function (response) {
//				  console.log(response); 
//				  decd = response;
//				});
//			
//			
//			var itex = decd.split("|");
//			var user = itex[0];
			var err = "";
			if(this.byId("TXINV").getValue().length > 0){
				var f1 = this.byId("TXINV").getValue();
				var f2 = this.byId("SHTXID").getValue();
				var f3 = this.byId("SHNAM").getValue();
				var f4 = this.byId("SHBRNC").getValue();
				var f5 = this.byId("SHPAD").getValue();
				var f6 = this.byId("SHPAD2").getValue();
				var f7 = this.byId("TXDAT").getValue();
				var f8 = this.byId("SHPOS").getValue();
				var c1 = this.byId("SUBTY").getSelectedKey();
				var c2 = this.byId("CLMTY").getSelectedKey();
				
				var fl1;
				var fl2;
				var fl3;
				if(c2 == "1"){
					if(c1 == "0003"){
//						fl1 = this.getView().byId("file06n").oFileUpload.files;
//						fl2 = this.getView().byId("file07n").oFileUpload.files;
//						fl3 = this.getView().byId("file08n").oFileUpload.files;
						if(f1.length < 1 || f2.length < 1 || f3.length < 1 || f4.length < 1 || f5.length < 1 || f6.length < 1 || f7.length < 1 || f8.length < 1 ){
							err = "X";
						}
					}else{
						//fl1 = this.getView().byId("file01n").oFileUpload.files;
						//fl2 = this.getView().byId("file02").oFileUpload.files;
						//fl3 = this.getView().byId("file03n").oFileUpload.files;
//						if(f1.length < 1 || f2.length < 1 || f3.length < 1 || f4.length < 1 || f5.length < 1 || f6.length < 1 || f7.length < 1 || f8.length < 1 || fl1.length < 1 || fl3.length < 1){
//							err = "X";
//						}
					}
				}else{
//					fl1 = this.getView().byId("file11n").oFileUpload.files;
//					fl2 = this.getView().byId("file13n").oFileUpload.files;
//					if(fl1.length < 1 || fl2.length < 1){
//						err = "X";
//					}
				}
				
			}else{
				
//				var c1 = this.byId("SUBTY").getSelectedKey();
//				var c2 = this.byId("CLMTY").getSelectedKey();
//				
//				var fl1;
//				var fl2;
//				var fl3;
//				
//				if(c2 == "1"){
//					if(c1 == "0003"){
//						fl1 = this.getView().byId("file06n").oFileUpload.files;
//						fl2 = this.getView().byId("file07n").oFileUpload.files;
//						fl3 = this.getView().byId("file08n").oFileUpload.files;
//						if(fl1.length < 1 || fl2.length < 1 || fl3.length < 1){
//							err = "X";
//						}
//					}else{
//						fl1 = this.getView().byId("file01n").oFileUpload.files;
//						//fl2 = this.getView().byId("file02").oFileUpload.files;
//						fl3 = this.getView().byId("file03n").oFileUpload.files;
//						if(fl1.length < 1 || fl3.length < 1){
//							err = "X";
//						}
//					}
//				}else{
//					fl1 = this.getView().byId("file11n").oFileUpload.files;
//					fl2 = this.getView().byId("file13n").oFileUpload.files;
//					if(fl1.length < 1 || fl2.length < 1){
//						err = "X";
//					}
//				}
			}
			
			var clmty = this.byId("CLMTY").getSelectedKey();
			var subty = this.byId("SUBTY").getSelectedKey();
			var elclp = this.byId("ELCLP").getSelectedKey();
			var famsa = this.byId("FAMSA").getSelectedKey();
			var rcdat = this.byId("RCDAT").getValue();
			
			if((clmty != "1" && clmty != "2" ) || subty == "X" || elclp == "X" || famsa == "X" || rcdat.length == 0){
				err = "X";
			}
			
			if(err == "X"){
				MessageToast.show("Please input all require fields");
			}else{
			
				var docid = this.byId("RQUST").getValue();
				var user = this.byId("PERNR").getText();
				var typeKey = this.byId("CLMTY").getSelectedKey();
				var json;
				if(typeKey == "1"){
					var subty = this.byId("SUBTY").getSelectedKey();
					var iRowIndex = 0;
					if(subty == "0001" || subty == "0002"){
						var oTable = this.getView().byId("idTab01");
					}else if(subty == "0003"){
						var oTable = this.getView().byId("idTab05");
					}
					var aItems = oTable.getItems();
					
					var cell1 = "";
					var cell2 = "";
					var cell3 = "";
					var cell4 = "";
					var cell5 = "";
					var cell6 = "";
					
					var itemList = "";
					for(var x=0;x < aItems.length;x++){
						var itemData = "";
						var itemRow = aItems[x].getCells();
						for (var i = 0; i<itemRow.length; i++)
						{	
							if(i == 0){
								cell1 = itemRow[i];
								cell1 = cell1.getSelectedKey();
							}
							else if(i == 1)
							{
								cell2 = itemRow[i]
								cell2 = cell2.getValue().replace(",","");
							}
							else if(i == 2)
							{
								cell3 = itemRow[i]
								cell3 = cell3.getValue().replace(",","");
							}
							else if(i == 3)
							{
								cell4 = itemRow[i]
								cell4 = cell4.getValue().replace(",","");
							}
							else if(i == 4)
							{
								cell5 = itemRow[i]
								cell5 = cell5.getValue().replace(",","");
							}
							else if(i == 5)
							{
								cell6 = itemRow[i]
								cell6 = cell6.getValue().replace(",","");
							}
						}
						
						itemData = "seqnr:"+x+",eetyp03:"+cell1+",reamt03:"+cell2+",riamt03:"+cell3;
						itemData = itemData + ",cleamt03:"+cell4+",cleamt103:"+cell5+",rmrk103:"+cell6;
						itemList = itemList + "|" + itemData;
					}
					
					itemList = window.btoa(itemList);
					
					
					var datax = window.atob(itemList);
					var qt = '"';
					var pa9703 = new JSONModel();
					var pa9704 = new JSONModel();
					var dcrun = new JSONModel();
					var dchead = new JSONModel();
					var dcdetail = new JSONModel();
					
					var year = new Date().getFullYear();
					var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
					var date = new Date().getDate();
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
					var year_budish = (year + 0).toString().substring(2,4); 
					var script = "";
					
					var pernr = this.byId("PERNR").getText();
					var err;
					
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
					
					var hcode = this.byId("HNAME").getSelectedKey();
					var zthrmed;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED/"+hcode,
			        	async: false,
			        	success: function(data){
			        		zthrmed = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(typeKey == "1"){
						if(zthrmed.ZTHRMED.hspcl == "X"){
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}else{
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/2",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}
						
						
					}else {
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอเบิกค่ารักษาพยาบาล";
					json.ltext1 = "รัฐบาล";
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
					
					var rqust = docid;
					var rqdat = new Date().getDate().toString() + "/" + month + "/" + year;
					var clmty = this.byId("CLMTY").getSelectedKey();
					var subty = this.byId("SUBTY").getSelectedKey();
					var elclp = this.byId("ELCLP").getSelectedKey();
					var famsa = this.byId("FAMSA").getSelectedKey();
					var jobtl = ",jobtl:"+this.byId("JOBTL").getValue(jobtl);
					var fgbdt = ",fgbdt:"+this.byId("FGBDT").getValue(fgbdt);
					var age = ",age:"+this.byId("AGE").getValue(age);
					var vstno = this.byId("VSTNO").getValue();
					var htype = this.byId("HTYPE").getSelectedKey();
					var hname = this.byId("HNAME").getSelectedKey();
					var othty = this.byId("OTHTY").getValue();
					var dsese = this.byId("DSESE").getSelectedKey();
					var otdse = this.byId("OTDSE").getValue();
					var dsgrp = this.byId("DSGRP").getSelectedKey();
					var otdsg = this.byId("OTDSG").getValue();
					var rcpt1 = this.byId("RCPT1").getValue();
					var rcdat = this.byId("RCDAT").getValue();
					var tbdat = this.byId("TBDAT").getValue();
					var tcdat = this.byId("TEDAT").getValue();
					var tdays = this.byId("TDAYS").getValue();
					if (subty == "0001" | subty == "0002")
					{
						var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
						var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
						
						var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
					}
					else if(subty == "0003")
					{
						var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
						var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
						
						var txinv = this.byId("TXINV").getValue();
						var shtxid = this.byId("SHTXID").getValue();
						var shnam = this.byId("SHNAM").getValue();
						var shbrnc = this.byId("SHBRNC").getValue();
						var shpad = this.byId("SHPAD").getValue();
						var shpad2 = this.byId("SHPAD2").getValue();
						
						var txdat = this.byId("TXDAT").getValue();
						var shpos = this.byId("SHPOS").getValue();
						var shcut = this.byId("SHCUT").getValue();
						
						var nvamt = this.byId("NVAMT").getValue().replace(",","");
						var vtamt = this.byId("VTAMT").getValue().replace(",","");
						var totval = this.byId("totVal").getValue().replace(",","");
						
						anzhl03 = totval;
						smamt03 = totval;
						
						var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
						
						script = script + ",txinv:"+txinv+",shtxid:"+shtxid+",shnam:"+shnam+",shpad:"+shpad+",shpax:"+shpad2+",shbrnc:"+shbrnc;
						script = script + ",nvamt:"+nvamt+",vtamt:"+vtamt+",totval:"+totval;
						script = script + ",txdat:"+txdat+",shpos:"+shpos+",shcut:"+shcut;
					}
							
					script = script+jobtl+fgbdt+age;
					
					json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9703"}';
					
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
					if(subty == "0001" || subty == "0002"){
						var visi = this.getView().byId("file01n").getVisible();
						if(visi == true){
							var file = this.getView().byId("file01n").oFileUpload.files;
							
							if(file.length > 0){
								this.onReadFile(file,"0001",docid,year);
							}
							var file = this.getView().byId("file02n").oFileUpload.files;
							
							if(file.length > 0){
								this.onReadFile(file,"0002",docid,year);
							}
							var file = this.getView().byId("file03n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0003",docid,year);
							}
							var file = this.getView().byId("file04n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0004",docid,year);
							}
							var file = this.getView().byId("file05n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0005",docid,year);
							}
						}
					}
					if(subty == "0003"){
						var visi = this.getView().byId("file06n").getVisible();
						if(visi == true){
							var file = this.getView().byId("file06n").oFileUpload.files;
							
							if(file.length > 0){
								this.onReadFile(file,"0001",docid,year);
							}
							var file = this.getView().byId("file07n").oFileUpload.files;
							
							if(file.length > 0){
								this.onReadFile(file,"0002",docid,year);
							}
							var file = this.getView().byId("file08n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0003",docid,year);
							}
							var file = this.getView().byId("file09n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0004",docid,year);
							}
							var file = this.getView().byId("file10n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0005",docid,year);
							}
						}
					}
				}else if(typeKey == "2"){
					var subty = this.byId("SUBTY").getSelectedKey();
					var iRowIndex = 0;
					var oTable = this.getView().byId("idTab02");
					
					var aItems = oTable.getItems();
					
					var cell1 = "";
					var cell2 = "";
					var cell3 = "";
					var cell4 = "";
					var cell5 = "";
					var cell6 = "";
					
					var itemList = "";
					for(var x=0;x < aItems.length;x++){
						var itemData = "";
						var itemRow = aItems[x].getCells();
						for (var i = 0; i<itemRow.length; i++)
						{	
							if(i == 0){
								cell1 = itemRow[i];
								cell1 = cell1.getSelectedKey();
							}
							else if(i == 1)
							{
								cell2 = itemRow[i]
								cell2 = cell2.getValue().replace(",","");
							}
							else if(i == 2)
							{
								cell3 = itemRow[i]
								cell3 = cell3.getValue().replace(",","");
							}
							else if(i == 3)
							{
								cell4 = itemRow[i]
								cell4 = cell4.getValue().replace(",","");
							}
							else if(i == 4)
							{
								cell5 = itemRow[i]
								cell5 = cell5.getValue().replace(",","");
							}
		
						}
						
						itemData = "seqnr:"+x+",eetyp03:"+cell1+",reamt03:"+cell2+",riamt03:"+cell3;
						itemData = itemData + ",cleamt03:"+cell4+",cleamt103:"+cell5+",rmrk103:"+cell5;
						itemList = itemList + "|" + itemData;
					}
					
					itemList = window.btoa(itemList);
					
					
					var datax = window.atob(itemList);
					var qt = '"';
					var pa9703 = new JSONModel();
					var pa9704 = new JSONModel();
					var dcrun = new JSONModel();
					var dchead = new JSONModel();
					var dcdetail = new JSONModel();
					
					var year = new Date().getFullYear();
					var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
					var date = new Date().getDate();
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
					var year_budish = (year + 0).toString().substring(2,4); 
					var script = "";
					
					var pernr = this.byId("PERNR").getText();
					var err;
					
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
					
					var docid = dcrun.curid;
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
					
					var hcode = this.byId("HNAME").getSelectedKey();
					var zthrmed;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED/"+hcode,
			        	async: false,
			        	success: function(data){
			        		zthrmed = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(typeKey == "1"){
						if(zthrmed.ZTHRMED.hspcl == "X"){
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}else{
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/2",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}
						
						
					}else {
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอเบิกค่ารักษาพยาบาล";
					json.ltext1 = "เอกชน";
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
					
					var rqust = docid;
					var rqdat = new Date().getDate().toString() + "/" + month + "/" + year;
					var clmty = this.byId("CLMTY").getSelectedKey();
					var subty = this.byId("SUBTY").getSelectedKey();
					var elclp = this.byId("ELCLP").getSelectedKey();
					var famsa = this.byId("FAMSA").getSelectedKey();
					var jobtl = ",jobtl:"+this.byId("JOBTL").getValue(jobtl);
					var fgbdt = ",fgbdt:"+this.byId("FGBDT").getValue(fgbdt);
					var age = ",age:"+this.byId("AGE").getValue(age);
					var vstno = this.byId("VSTNO").getValue();
					var htype = this.byId("HTYPE").getSelectedKey();
					var hname = this.byId("HNAME").getSelectedKey();
					var othty = this.byId("OTHTY").getValue();
					var dsese = this.byId("DSESE").getSelectedKey();
					var otdse = this.byId("OTDSE").getValue();
					var dsgrp = this.byId("DSGRP").getSelectedKey();
					var otdsg = this.byId("OTDSG").getValue();
					var rcpt1 = this.byId("RCPT1").getValue();
					var rcdat = this.byId("RCDAT").getValue();
					var tbdat = this.byId("TBDAT").getValue();
					var tcdat = this.byId("TEDAT").getValue();
					var tdays = this.byId("TDAYS").getValue();
					if (subty == "0001" | subty == "0002")
					{
						var anzhl03 = this.byId("ANZHL04").getValue().replace(",","");
						var smamt03 = this.byId("SMAMT04").getValue().replace(",","");
						
						var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
					}
					else if(subty == "0003")
					{
						var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
						var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
						
						var txinv = this.byId("TXINV").getValue();
						var shtxid = this.byId("SHTXID").getValue();
						var shnam = this.byId("SHNAM").getValue();
						var shbrnc = this.byId("SHBRNC").getValue();
						var shpad = this.byId("SHPAD").getValue();
						var shpad2 = this.byId("SHPAD2").getValue();
						
						var txdat = this.byId("TXDAT").getValue();
						var shpos = this.byId("SHPOS").getValue();
						var shcut = this.byId("SHCUT").getValue();
						
						var nvamt = this.byId("NVAMT").getValue().replace(",","");
						var vtamt = this.byId("VTAMT").getValue().replace(",","");
						var totval = this.byId("totVal").getValue().replace(",","");
						
						anzhl03 = totval;
						smamt03 = totval;
						
						var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
						
						script = script + ",txinv:"+txinv+",shtxid:"+shtxid+",shnam:"+shnam+",shpad:"+shpad+",shpax:"+shpad2+",shbrnc:"+shbrnc;
						script = script + ",nvamt:"+nvamt+",vtamt:"+vtamt+",totval:"+totval;
						script = script + ",txdat:"+txdat+",shpos:"+shpos+",shcut:"+shcut;
					}
							
					script = script+jobtl+fgbdt+age;
					
					json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9703"}';
					
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
					if(subty == "0001" || subty == "0002"){
						var visi = this.getView().byId("file01n").getVisible();
						if(visi == true){
							var file = this.getView().byId("file01n").oFileUpload.files;
							
							if(file.length > 0){
								this.onReadFile(file,"0001",docid,year);
							}
							var file = this.getView().byId("file02n").oFileUpload.files;
							
							if(file.length > 0){
								this.onReadFile(file,"0002",docid,year);
							}
							var file = this.getView().byId("file03n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0003",docid,year);
							}
							var file = this.getView().byId("file04n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0004",docid,year);
							}
							var file = this.getView().byId("file05n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0005",docid,year);
							}
						}
					}else{
						var visi = this.getView().byId("file06n").getVisible();
						if(visi == true){
							var file = this.getView().byId("file06n").oFileUpload.files;
							
							if(file.length > 0){
								this.onReadFile(file,"0001",docid,year);
							}
							var file = this.getView().byId("file07n").oFileUpload.files;
							
							if(file.length > 0){
								this.onReadFile(file,"0002",docid,year);
							}
							var file = this.getView().byId("file08n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0003",docid,year);
							}
							var file = this.getView().byId("file09n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0004",docid,year);
							}
							var file = this.getView().byId("file10n").oFileUpload.files;
							if(file.length > 0){
								this.onReadFile(file,"0005",docid,year);
							}
						}
					}
				}
				MessageToast.show("บันทึกคำขอเรียบร้อยแล้ว สามารถตรวจสอบสถานะได้จากเมนู รายการคำขอ");
				
				this.getRouter().navTo("myInfo");
			}
		},
		onAccept: function (){
			var user = jQuery.sap.getUriParameters().get("user");
			var typeKey = this.byId("CLMTY").getSelectedKey();
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
				if(this.getView().byId("avup1").getVisible() == false){
					json.del_flag = this.getView().byId("avlv1").getValue();
				}else{
					json.del_flag = this.getView().byId("avup1").getValue();
				}
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
			
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				if(typeKey == "1"){
					if(subty != "0003"){
						var oTable = this.getView().byId("idTab01");
					}else{
						var oTable = this.getView().byId("idTab05");
					}
					var aItems = oTable.getItems();
					
					var cell1 = "";
					var cell2 = "";
					var cell3 = "";
					var cell4 = "";
					var cell5 = "";
					var cell6 = "";
					var cell7 = "";
					
					var itemList = "";
					for(var x=0;x < aItems.length;x++){
						var itemData = "";
						var itemRow = aItems[x].getCells();
						for (var i = 0; i<itemRow.length; i++)
						{	
							if(i == 0){
								cell1 = itemRow[i];
								cell1 = cell1.getSelectedKey();
							}
							else if(i == 1)
							{
								cell2 = itemRow[i]
								cell2 = cell2.getValue().replace(",","");
							}
							else if(i == 2)
							{
								cell3 = itemRow[i]
								cell3 = cell3.getValue().replace(",","");
							}
							else if(i == 3)
							{
								cell4 = itemRow[i]
								cell4 = cell4.getValue().replace(",","");
							}
							else if(i == 4)
							{
								cell5 = itemRow[i]
								cell5 = cell5.getValue().replace(",","");
							}
							else if(i == 5)
							{
								cell6 = itemRow[i]
								cell6 = cell6.getValue().replace(",","");
							}
						}
						
						itemData = "seqnr:"+x+",eetyp03:"+cell1+",reamt03:"+cell2+",riamt03:"+cell3;
						itemData = itemData + ",amtu03:"+cell4+",cleamt03:"+cell5+",cleamt103:"+cell6+",rmrk103:"+cell7;
						itemList = itemList + "|" + itemData;
					}
					
				}else{
					var oTable = this.getView().byId("idTab02");
					
					var aItems = oTable.getItems();
					
					var cell1 = "";
					var cell2 = "";
					var cell3 = "";
					var cell4 = "";
					var cell5 = "";
					var cell6 = "";
					var cell7 = "";
					
					var itemList = "";
					for(var x=0;x < aItems.length;x++){
						var itemData = "";
						var itemRow = aItems[x].getCells();
						for (var i = 0; i<itemRow.length; i++)
						{	
							if(i == 0){
								cell1 = itemRow[i];
								cell1 = cell1.getSelectedKey();
							}
							else if(i == 1)
							{
								cell2 = itemRow[i]
								cell2 = cell2.getValue().replace(",","");
							}
							else if(i == 2)
							{
								cell3 = itemRow[i]
								cell3 = cell3.getValue().replace(",","");
							}
							else if(i == 3)
							{
								cell4 = itemRow[i]
								cell4 = cell4.getValue().replace(",","");
							}
							else if(i == 4)
							{
								cell5 = itemRow[i]
								cell5 = cell5.getValue().replace(",","");
							}
							
						}
						
						itemData = "seqnr:"+x+",eetyp03:"+cell1+",reamt03:"+cell2+",riamt03:"+cell3;
						itemData = itemData + ",amtu03:"+cell4+",cleamt03:"+cell5+",cleamt103:"+cell6+",rmrk103:"+cell6;
						itemList = itemList + "|" + itemData;
					}
					
				}
				
				var newitemList = window.btoa(itemList);
				
				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9703";
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
				
				var arrayLength = pa9703_arr.length;
				for (var i = 0; i < arrayLength; i++) {
					var fieldar = pa9703_arr[i].split(":");
					var field = fieldar[0];
				    if(field.includes("itemList") == true){ itemList = pa9703_arr[i].split(":").pop(); }
	
				}
				var emppay = this.byId("empPaylab").getValue().replace(",","");
				var smamt_03x = ",smamt_03x:"+this.byId("SMAMT03X").getValue().replace(",","");
				var anzhl_03x = ",anzhl_03x:"+this.byId("ANZHL03X").getValue().replace(",","");
				var smamt_04 = ",smamt_04:"+this.byId("SMAMT04").getValue().replace(",","");
				var anzhl_04 = ",anzhl_04:"+this.byId("ANZHL04").getValue().replace(",","");
				script = script.replace(itemList,newitemList);
				script = script + ",emppay:"+emppay+smamt_03x+smamt_04+anzhl_03x+anzhl_04;
				var json = docData.tblDocdetail;
				json.script = script;
				json = JSON.stringify(json);
				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno;
				var postdctask = {
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
						  "data": json
						}
				
				$.ajax(postdctask).done(function (response) {
					console.log(response);
					docData = response.tblDocdetail;
				});
				
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
				json.userad = dataJ.userad;
				if(this.getView().byId("avup1").getVisible() == false){
					json.del_flag = this.getView().byId("avlv1").getValue();
				}else{
					json.del_flag = this.getView().byId("avup1").getValue();
				}
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+dataJ.userad,
		        	async: false,
		        	success: function(data){
		        		pa0001 = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				var hcode = this.byId("HNAME").getSelectedKey();
				var zthrmed;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED/"+hcode,
		        	async: false,
		        	success: function(data){
		        		zthrmed = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				if(zthrmed != undefined){
					if(typeKey == "1"){
						if(zthrmed.ZTHRMED.hspcl == "X"){
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}else{
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/2",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}
						
						
					}else {
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}
				}
				
				dataJ.userch = user;
				dataJ.pernr = "";
				var orgeh;
				if(dataJ.orgeh == wf.List[0].org1){
					if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm;
					}else{
						dataJ.orgeh = wf.List[0].org2;
					}
				}else if(dataJ.orgeh == wf.List[0].org2){
					if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm;
					}else{
						dataJ.orgeh = wf.List[0].org3;
					}
				}else if(dataJ.orgeh == wf.List[0].org3){
					orgeh = wf.List[0].org3;
					dataJ.status = "3";
					dataJ.sttext = "อนุมัติ";
					dataJ.aedat = aedtm;
				}else {
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
		remove : function(oEvent) {
			var typeKey = this.byId("CLMTY").getSelectedKey();
			var subty = this.byId("SUBTY").getSelectedKey();
			if(subty == "0001" || subty == "0002"){
				if(typeKey == "1") {
					var oTable = this.getView().byId("idTab01");
				}else{
					var oTable = this.getView().byId("idTab02");
				}
			}else if(subty == "0003"){
				var oTable = this.getView().byId("idTab05");
			}
			
			oTable.removeItem(oEvent.getSource().getParent());
		},
		onMax5: function(oEvent){
			var t = oEvent.getSource();
			var val = oEvent.mParameters.value;
			val = val.replace(/[^\d]/g, '');
			if(val.length > 5){
				val = val.substring(0,5);
			}
			oEvent.mParameters.value = val;
			t.setValue(val);
		},
		onMax13: function(oEvent){
			var t = oEvent.getSource();
			var val = oEvent.mParameters.value;
			val = val.replace(/[^\d]/g, '');
			if(val.length > 13){
				val = val.substring(0,13);
			}
			oEvent.mParameters.value = val;
			t.setValue(val);
		},
		onMax35: function(oEvent){
//			var t = oEvent.getSource();
//			var val = oEvent.mParameters.value;
//			val = val.replace(/[^\d]/g, '');
			if(val.length > 35){
				val = val.substring(0,35);
			}
			oEvent.mParameters.value = val;
			t.setValue(val);
		},
		onEditPressed: function(){
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			 jQuery.sap.require("sap.ui.core.format.NumberFormat");
		        var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					  maxFractionDigits: 2,
					  minFractionDigits: 2,
					  groupingEnabled: true,
					  groupingSeparator: ",",
					  decimalSeparator: "."
					});
			
			var clmty = this.byId("CLMTY").getSelectedKey();
			var subty = this.byId("SUBTY").getSelectedKey();
			this.byId("CLMTY").setEnabled(true);
			this.byId("SUBTY").setEnabled(true);
			this.byId("ELCLP").setEnabled(true);
			this.byId("FAMSA").setEnabled(true);
			this.byId("VSTNO").setEnabled(true);
			//this.byId("HNAME").setEnabled(true);
			//this.byId("DSESE").setEnabled(true);
			this.byId("HTYPE").setEnabled(true);
			this.byId("RCPT1").setEnabled(true);
			this.byId("RCDAT").setEnabled(true);
			this.byId("TBDAT").setEnabled(true);
			this.byId("TEDAT").setEnabled(true);
			this.byId("btnSrc1").setEnabled(true);
			this.byId("btnSrc2").setEnabled(true);
			
			var docData;
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9703";
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
			
			
			var itemList = "";
			
			
			var arrayLength = pa9703_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9703_arr[i].split(":");
				var field = fieldar[0];

			    if(field.includes("itemList") == true){ itemList = pa9703_arr[i].split(":").pop(); }

			}
			
			
			var item_arr = window.atob(itemList).split("|");
			
			if(subty == "0001" || subty == "0002"){
				if(clmty == "1") {
					var oTable = this.getView().byId("idTab01");
				}else{
					var oTable = this.getView().byId("idTab02");
				}
			}else if(subty == "0003"){
				var oTable = this.getView().byId("idTab05");
				this.byId("TXINV").setEnabled(true);
				this.byId("SHTXID").setEnabled(true);
				this.byId("SHNAM").setEnabled(true);
				this.byId("SHBRNC").setEnabled(true);
				this.byId("SHPAD").setEnabled(true);
				this.byId("SHPAD2").setEnabled(true);
				this.byId("TXDAT").setEnabled(true);
				this.byId("SHPOS").setEnabled(true);
			}
			var item = oTable.getItems();
			for(var d=0;d<item.length;d++){
				oTable.removeItem(item[d]);
			}
			
			for(var x = 1; x < item_arr.length; x++)
			{
				var items = item_arr[x].split(",");
				var eetyp03 = "";
				var reamt03 = "";
				var riamt03 = "";
				var amtu03 = "";
				var cleamt03 = "";
				var cleamt103 = "";
				var cell2;
				var cell3;
				var cell5;
				var cell6;
				
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
				if(reamt03 == ""){ reamt03 = 0;}
				if(riamt03 == ""){ riamt03 = 0;}
				if(cleamt03 == ""){ cleamt03 = 0;}
				if(cleamt103 == ""){ cleamt103 = 0;}
				cell2 = cell2 + parseFloat(reamt03);
				cell3 = cell3 + parseFloat(riamt03);
				cell5 = cell5 + parseFloat(cleamt03);
				cell6 = cell6 + parseFloat(cleamt103);
				reamt03 = oNumberFormat.format(parseFloat(reamt03));
				riamt03 = oNumberFormat.format(parseFloat(riamt03));
				cleamt03 = oNumberFormat.format(parseFloat(cleamt03));
				cleamt103 = oNumberFormat.format(parseFloat(cleamt103));
				var eetyp03_list = new JSONModel();
				if(subty == "0001"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}else if(subty == "0002"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/IPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}else if(subty == "0003"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
			        	async: false,
			        	success: function(data){
			        		eetyp03_list = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}
				this.getView().setModel(new JSONModel(eetyp03_list),"tretData");
				
				if(clmty == "1"){
					var oItem = new sap.m.ColumnListItem({
						//			cells : [ new sap.m.Select(), new sap.m.Input(), new sap.m.Input({
						//			showValueHelp : true
						//
						//			}), 
										cells : [ new sap.m.Select({
													items: { 
														path: "tretData>/List", 
														template: new sap.ui.core.ListItem({
															key: '{tretData>ttype}',
														    text: '{tretData>ttypetxt}'
														})
													},
													selectedKey: eetyp03,
													enabled: false
												}), new sap.m.Input({value: reamt03,enabled: true, change: [this.inputAmt2, this]}), 
													new sap.m.Input({value: riamt03,enabled: true, change: [this.inputAmt2, this]}),
													new sap.m.Input({value: amtu03,enabled: false, change: [this.inputAmt, this]}),
													new sap.m.Input({value: cleamt03,enabled: false, change: [this.inputAmt, this]}),
													new sap.m.Input({value: cleamt103,enabled: false, change: [this.inputAmt, this]}),
													new sap.m.Input({enabled: false}),
													new sap.m.Button({
														text : "Delete",
														press : [ this.remove, this ],visible: false
													}) 
										]
									});
				}else{
					var oItem = new sap.m.ColumnListItem({
						//			cells : [ new sap.m.Select(), new sap.m.Input(), new sap.m.Input({
						//			showValueHelp : true
						//
						//			}), 
										cells : [ new sap.m.Select({
													items: { 
														path: "tretData>/List", 
														template: new sap.ui.core.ListItem({
															key: '{tretData>ttype}',
														    text: '{tretData>ttypetxt}'
														})
													},
													selectedKey: eetyp03,
													enabled: false
												}), new sap.m.Input({value: reamt03,enabled: true, change: [this.inputAmt2, this]}), 
													new sap.m.Input({value: riamt03,enabled: true, change: [this.inputAmt2, this]}),
													new sap.m.Input({value: amtu03,enabled: false, change: [this.inputAmt, this]}),
													new sap.m.Input({value: cleamt03,enabled: false, change: [this.inputAmt, this]}),
													new sap.m.Input({value: cleamt103,enabled: false, change: [this.inputAmt, this]}),
													new sap.m.Input({enabled: false}),
													new sap.m.Button({
														text : "Delete",
														press : [ this.remove, this ],visible: false
													}) 
										]
									});
				}
				
				if(subty == "0001" || subty == "0002"){
					if(clmty == "1") {
						var oTable = this.getView().byId("idTab01");
						oTable.addItem(oItem);
						this.byId("file01n").setVisible(true);
						this.byId("file02n").setVisible(true);
						this.byId("file03n").setVisible(true);
						this.byId("file04n").setVisible(true);
						this.byId("file05n").setVisible(true);
					}else{
						var oTable = this.getView().byId("idTab02");
						oTable.addItem(oItem);
						this.byId("file11n").setVisible(true);
						this.byId("file12n").setVisible(true);
						this.byId("file13n").setVisible(true);
						this.byId("file14n").setVisible(true);
						this.byId("file15n").setVisible(true);
						this.byId("file16n").setVisible(true);
					}
					
				}else if(subty == "0003"){
					var oTable = this.getView().byId("idTab05");
					oTable.addItem(oItem);
					this.byId("file06n").setVisible(true);
					this.byId("file07n").setVisible(true);
					this.byId("file08n").setVisible(true);
					this.byId("file09n").setVisible(true);
					this.byId("file10n").setVisible(true);
				}
				
				this.byId("empPaylab").setValue(oNumberFormat.format((cell5+cell6)));
			}
			
		},
		onHgroup: function(){
			var typekey = this.byId("CLMTY").getSelectedKey();
			var htype = this.byId("HTYPE").getSelectedKey();
			var hospital = new JSONModel();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED",
	        	async: false,
	        	success: function(data){
	        		hospital = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var r = 1;
			var tmp = {"List":[{"hcode":"X","hname":"เลือก"}]};
			for(var j = 0;j<hospital.List.length;j++){
				if(typekey == "1"){
					if(hospital.List[j].htype == "01" || hospital.List[j].htype == ""){
						if(hospital.List[j].hgrpg == htype || hospital.List[j].hgrpg == ""){
							tmp.List[r] = hospital.List[j];
							r++;
						}
					}
				}else if(typekey == "2"){
					if(hospital.List[j].htype == "02" || hospital.List[j].htype == ""){
						if(hospital.List[j].hgrpg == htype || hospital.List[j].hgrpg == ""){
							tmp.List[r] = hospital.List[j];
							r++;
						}
					}
				}
			}
			hospital = tmp;
			var len = hospital.List.length;
			var hos = new JSONModel(hospital);
			hos.setSizeLimit(len);
			this.getView().setModel(hos,"hosItem");
			
			
			var inti = {"Institute":[]};
			inti.Institute = hospital.List;
			var mod = new JSONModel(inti);
			mod.setSizeLimit(len);
			this.getView().setModel(mod);
			
			this.getView().byId("HNAME").setSelectedKey("X");
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
		searchEmp: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog3", this);
			}

			// Multi-select if required
//			this._oDialog.setMultiSelect(true);
//			this._oDialog.setRememberSelections(true);

			this.getView().addDependent(this._oDialog);

			// toggle compact style
//			jQuery.sap.syncStyleClass("sacUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
		},
		searchDSG: function(oEvent) {
			if (!this._oDialog2) {
				this._oDialog2 = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog4", this);
			}

			// Multi-select if required
//			this._oDialog.setMultiSelect(true);
//			this._oDialog.setRememberSelections(true);

			this.getView().addDependent(this._oDialog2);

			// toggle compact style
//			jQuery.sap.syncStyleClass("sacUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog2.open();
		},
		handleSearch: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new sap.ui.model.Filter([new sap.ui.model.Filter("hcode", sap.ui.model.FilterOperator.Contains, sValue),
				new sap.ui.model.Filter("hname", sap.ui.model.FilterOperator.Contains, sValue),
				]);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},
		handleSearch2: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new sap.ui.model.Filter([new sap.ui.model.Filter("dsese", sap.ui.model.FilterOperator.Contains, sValue),
				new sap.ui.model.Filter("dstxt", sap.ui.model.FilterOperator.Contains, sValue),
				]);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},
		handleClose: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().hname; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().hcode; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			this.getView().byId("HNAME").setSelectedKey(selectedId);
			if(selectedId == "0000000000"){
				this.getView().byId("OTHTY").setEnabled(true);
			}else{
				this.getView().byId("OTHTY").setEnabled(false);
			}
			
		},
		handleClosex: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().hname; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().hcode; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
		},
		handleClose2: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().dstxt; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().dsese; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			this.getView().byId("DSESE").setSelectedKey(selectedId);
			
		},
		handleClosex2: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().dstxt; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().dsese; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
		},
		onCancelPressed: function () {
			this.getRouter().navTo("myInfo");
		},
		_onObjectMatched: function (oEvent) {
			
			this.onInit();
//			console.log(oEvent.getParameter("arguments").from);
//			
//			if(oEvent.getParameter("arguments").from == "myTask"){
//				this.byId("approveSection").setVisible(false);
//			}else{
//				this.byId("approveSection").setVisible(true);
//			}
		}

	});
});