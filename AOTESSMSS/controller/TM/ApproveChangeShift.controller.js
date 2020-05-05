sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast, JSONModel, Fragment, Controller, Filter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TM.ApproveChangeShift", {

		onInit: function () {
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var userm = user;
			
			var sValue = jQuery.sap.getUriParameters().get("from");
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
			
			var docData = new JSONModel();
			
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
				if(pa != "" && pa != "X"){
					this.getView().byId("PLANS_DESC_APPUP").setValue(pa.paPos.pos_l);
					this.getView().byId("PLANS_DESC_APPNEXT").setValue(pa.paPos.pos_l);
					
					var pa0001;
					var person = parseInt(pa.paPos.manag).toString();
					if(person == parseInt(pa.paPos.manag).toString()){
						person = parseInt(pa.paPos.upman).toString()
					}
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+person,
			        	async: false,
			        	success: function(data){
			        		pa0001 = data;
			        		
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
					if(hrp1000 != "X" && hrp1000 != ""){
						this.getView().byId("PLANS_DESC_APPUPNEXT").setValue(hrp1000.HRP1000.stext);
					}else{
						this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
					}
					
					
					
				}
				if(pa == "X" || pa == ""){
					this.getView().byId("PLANS_DESC_APPUP").setValue("");
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
					this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
				}
			}else{
				this.getView().byId("PLANS_DESC_APPNEXT").setValue("ผู้อำนวยการส่วน");
			}
			
			var date = new Date();
			var d = date.getDate();
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = (date.getFullYear()).toString().padStart(2,'0');
			this.getView().byId("approveDate").setValue([d,m,y].join("/"));
			this.getView().byId("approveDateup").setValue([d,m,y].join("/"));
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa2003";
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
			var pa2003_arr = script.split(",");
			var pernr = "";
			var type = "";
			var dtp2 = "";
			var ordno = "";
			var ord2no = "";
			var tprog = "";
			var tp2rog = "";
			var timper = "";
			var tim2per = "";
			var perno = "";
			var changeTime = "";
			var changer = "";
			
			var arrayLength = pa2003_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa2003_arr[i].split(":");
				var field = fieldar[0];
			    if(field.includes("pernr") == true){ pernr = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("type") == true){ type = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("dtp2") == true){ dtp2 = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("ordno") == true){ ordno = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("ord2no") == true){ ord2no = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("perno") == true){ perno = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("changeTime") == true){ changeTime = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("tp2rog") == true){ tp2rog = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("timper") == true){ timper = window.atob(pa2003_arr[i].split(":").pop()); }
			    if(field.includes("tim2per") == true){ tim2per = window.atob(pa2003_arr[i].split(":").pop()); }
			    if(field.includes("tprog") == true){ tprog = pa2003_arr[i].split(":").pop(); }
			    if(field.includes("changer") == true){ changer = pa2003_arr[i].split(":").pop(); }

			}
			
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
//				this.getView().byId("btnSend").setVisible(true);
//				if(dchead.userad == pernr){
//					this.getView().byId("btnEdit").setVisible(true);
//				}
				this.getView().byId("approveSection").setVisible(false);
			}else if(dchead.status == "3"){
//				this.getView().byId("btnSend").setVisible(false);
//				this.getView().byId("btnEdit").setVisible(false);
				this.getView().byId("approveSection").setVisible(false);
			}else if(dchead.status == "4"){
//				if(dchead.userad == pernr){
//					this.getView().byId("btnEdit").setVisible(true);
//				}
				this.getView().byId("approveSection").setVisible(false);
			}else{
				
				if(user == pernr){
					this.getView().byId("approveSection").setVisible(false);
				}
//				
//				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("approveSection").setVisible(true);
			}
			
			if(dchead.userad == user){
				this.getView().byId("approveSection").setVisible(false);
			}
			
			this.byId("changerDate").setVisible(true);
			
			if(user == pernr){
				this.getView().byId("approveSection").setVisible(false);
			}
			
			this.byId("PERNR").setText(pernr);
			
			if(type === "สับเปลี่ยนกะ"){
				this.byId("type").setSelectedIndex(1);
			}else if(type === "แทนกะ"){
				this.byId("type").setSelectedIndex(0);
			}
			this.byId("DTP2").setValue(dtp2);
			this.byId("ORDNO").setValue(ordno);
			this.byId("ORDNO2").setValue(ord2no);
			
			this.byId("timper").setValue(timper);
			this.byId("timper2").setValue(tim2per);
			
			this.byId("TPROG").setValue(tprog);
			this.byId("TPROG2").setValue(tp2rog);
			
			this.byId("PERNO").setValue(perno);
			this.byId("changer").setValue(changer);
			
			this.byId("changeTime").setValue(changeTime);
			
			
			var pa0001;
			var t503k;
			var t501;
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
			
			this.byId("PERNR").setText(pernr);
			this.byId("ENAME").setText(cStr);
			
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
			oRouter.getRoute("TM/approveChangeShift").attachPatternMatched(this._onObjectMatched, this);
		},
		onDateFormat: function (value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() +1).toString().padStart(2,'0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		onAccept: function (){
			
			var check = this.getView().byId("selvup");
			var visi = check.getVisible();
			var selvup = "";
			var seltxt = "";
			var selapp = "";
			if(visi == true){
				selvup = this.getView().byId("selvup").getSelectedItem().getText();
				seltxt = this.getView().byId("selvup").getSelectedItem().getText();
			}else{
				selapp = this.getView().byId("sellv1").getSelectedItem().getText();
				seltxt = this.getView().byId("sellv1").getSelectedItem().getText();
			}
			
			
			var pa2001 = new JSONModel();
			var docData = new JSONModel();
			var perno = this.byId("PERNO").getValue();
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var aedtm = new Date();
			aedtm = aedtm.getFullYear().toString()+'-'+aedtm.getMonth().toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
			
			if(selapp == "ไม่อนุมัติ" || selvup == "ไม่อนุมัติ" || selapp == "ไม่ยอมรับ" || selvup == "ไม่ยอมรับ"){
				
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
				json.aedat = dataJ.aedat;
				json.taskkey.pernr = dataJ.pernr;
				json.userad = dataJ.userad;
				if(this.getView().byId("avup1").getVisible() == false){
					json.del_flag = this.getView().byId("avlv1").getValue();
				}else{
					json.del_flag = this.getView().byId("avup1").getValue();
				}
				json.status = "4";
				json.sttext = seltxt;
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
				dataJ.sttext = seltxt;
				
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
					json.aedat = dataJ.aedat;
					json.taskkey.pernr = dataJ.pernr;
					json.userad = dataJ.userad;
					if(this.getView().byId("avup1").getVisible() == false){
						json.del_flag = this.getView().byId("avlv1").getValue();
					}else{
						json.del_flag = this.getView().byId("avup1").getValue();
					}
					json.status = "3";
					json.sttext = seltxt;
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
					
					var perno = this.byId("PERNO").getValue();
					var pernr = this.byId("PERNR").getText();
					var user = jQuery.sap.getUriParameters().get("user");
					
					var date_from = new Date(this.byId("DTP2").getValue());
					var y = date_from.getFullYear().toString();
					var m = (date_from.getMonth() + 1).toString().padStart(2,'0');
					var d = date_from.getDate().toString().padStart(2,'0');
					
					var fdate = [y,d,m].join("");
					
					var shift1;
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRTME01_SHIFT/"+fdate+"/"+fdate+"/"+pernr;
					$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		shift1 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var shift;
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRTME01_SHIFT/A/"+fdate+"/"+fdate+"/"+shift1.ZTHRTME01_SHIFT.schkz;
					$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		shift = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(perno != user){
//						if(shift.ZTHRTME01_SHIFT.SHIFTkey.pernr == user){
							var pernrpad = dataJ.userad.toString().padStart(8,'0');
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
							
							if(shift.ZTHRTME01_SHIFT.shiftkey.pernr == user){
								dataJ.userch = dataJ.pernr;
								dataJ.pernr = parseInt(pa.paPos.manag).toString();
							}
							else if(dataJ.pernr == parseInt(pa.paPos.manag).toString())
							{
								dataJ.userch = dataJ.pernr;
								dataJ.pernr = parseInt(pa.paPos.upman).toString();
							}
							else
							{
								dataJ.status = "3";
								dataJ.aedat = aedtm;
								dataJ.sttext = "อนุมัติ";
							}
//						}else{
//							
//						}
					}else{
//						var pernrpad = dataJ.userad.toString().padStart(8,'0');
//						var pa;
//						$.ajax({
//				        	type: "GET",
//				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/"+pernrpad,
//				        	async: false,
//				        	success: function(data){
//				        		pa = data;
//				        		
//				        	},
//				        	error: function(){
//				        		
//				        	}
//				        });
						
						dataJ.userch = perno;
						dataJ.pernr = shift.ZTHRTME01_SHIFT.shiftkey.pernr;
//						dataJ.pernr = parseInt(pa.paPos.manag).toString();
					}
					
					
					dataJ = JSON.stringify(dataJ);
					
					var putHead = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
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
		_onObjectMatched: function (oEvent) {
			console.log(oEvent.getParameter("arguments").from);
			this.onInit();
//			if(oEvent.getParameter("arguments").from == "myTask"){
//				this.byId("approveSection").setVisible(false);
//			}else{
//				this.byId("approveSection").setVisible(true);
//			}
		}

	});
});