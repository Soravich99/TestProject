sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveScholarship", {
		onAfterRendering:function (){
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var rqust = this.getView().byId("RQUST").getValue();
			if(rqust != docno){
				var loc = location;
				location.reload();
			}
		},
		onInit: function () {
			this.getRouter().initialize();
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
			var date = new Date();
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth()+1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
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
					this.getView().byId("PLANS_DESC_APPUP").setValue("");
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
					this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
				}
			}else{
				this.getView().byId("PLANS_DESC_APPNEXT").setValue("หน่วยงานสวัสดิการ");
			}
			
			var date = new Date();
			var d = date.getDate();
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = (date.getFullYear()).toString().padStart(2,'0');
			this.getView().byId("approveDate").setValue([d,m,y].join("/"));
			this.getView().byId("approveDateup").setValue([d,m,y].join("/"));
			
			
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
			var rqust = "";
			var rqdat = "";
			var selectedName = "";
			var birthDate = "";
			var age = "";
			var selectedGrade = "";
			var year = "";
			var selectedPlace = "";
			var mingd = "";
			var untxt = "";
			var scyear = "";
			var sclamt = "";
			var othPlace = "";
			
			var arrayLength = pa9703_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9703_arr[i].split(":");
				var field = fieldar[0];
				if(field.includes("pernr") == true){ pernr = pa9703_arr[i].split(":").pop(); }
				if(field.includes("rqust") == true){ rqust = pa9703_arr[i].split(":").pop(); }
				if(field.includes("rqdat") == true){ rqdat = pa9703_arr[i].split(":").pop(); }
				if(field.includes("selectedName") == true){ selectedName = pa9703_arr[i].split(":").pop(); }
				if(field.includes("birthDate") == true){ birthDate = pa9703_arr[i].split(":").pop(); }
				if(field.includes("age") == true){ age = pa9703_arr[i].split(":").pop(); }
				if(field.includes("selectedGrade") == true){ selectedGrade = pa9703_arr[i].split(":").pop(); }
				if(field.includes("xyear") == true){ year = pa9703_arr[i].split(":").pop(); }
				if(field.includes("selectedPlace") == true){ selectedPlace = pa9703_arr[i].split(":").pop(); }
				if(field.includes("mingd") == true){ mingd = pa9703_arr[i].split(":").pop(); }
				if(field.includes("untxt") == true){ untxt = pa9703_arr[i].split(":").pop(); }
				if(field.includes("scyear") == true){ scyear = pa9703_arr[i].split(":").pop(); }
				if(field.includes("sclamt") == true){ sclamt = pa9703_arr[i].split(":").pop(); }
				if(field.includes("othPlace") == true){ othPlace = pa9703_arr[i].split(":").pop(); }
				
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
			
			var pa9701;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+pernr+"/0007",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			for(var x = 0;x<pa9701.List.length;x++){
				var tt = x+1;
				temp.List[tt] = pa9701.List[x];
				temp.List[tt].text = pa9701.List[x].ename;
				temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(pa9701.List[x]))));
			}
			
			this.getView().setModel(new JSONModel(temp),"childItem");
			
			var eduitem;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE08",
	        	async: false,
	        	success: function(data){
	        		eduitem = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var len = eduitem.List.length;
			var mod = new JSONModel(eduitem);
			mod.setSizeLimit(len);
			this.getView().setModel(mod,"placeItem");
			
			var inti = {"Institute":[]};
			inti.Institute = eduitem.List;
			var mod = new JSONModel(inti);
			mod.setSizeLimit(len);
			this.getView().setModel(mod);
			
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE08B",
	        	async: false,
	        	success: function(data){
	        		eduitem = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			for(var x = 0;x<eduitem.List.length;x++){
				var tt = x+1;
				temp.List[tt] = eduitem.List[x];
				temp.List[tt].text = eduitem.List[x].sctxt;
				temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(eduitem.List[x]))));
			}
			
			this.getView().setModel(new JSONModel(temp),"eduItem");
			
			
			this.getView().byId("PERNR").setText(pernr);
			this.getView().byId("RQUST").setValue(docno);
			this.getView().byId("RQDAT").setValue(rqdat);
			this.getView().byId("selectedName").setSelectedKey(selectedName);
			this.getView().byId("birthDate").setValue(birthDate);
			this.getView().byId("age").setValue(age);
			this.getView().byId("selectedGrade").setSelectedKey(selectedGrade);
			this.getView().byId("year").setValue(year);
			this.getView().byId("selectedPlace").setSelectedKey(selectedPlace);
			this.getView().byId("mingd").setValue(mingd);
			this.getView().byId("untxt").setValue(untxt);
			this.getView().byId("scyear").setValue(scyear)
			this.getView().byId("sclamt").setValue(sclamt);
			this.getView().byId("othPlace").setValue(othPlace);

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
			
			for(var c = 1; c<=3; c++){
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
		onBRNget: function(){
			var level = this.getView().byId("eduLevel").getSelectedKey();
			var type = this.getView().byId("eduType").getSelectedKey();
			if(level != "X" && type != "X"){
				var brnitem;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE08A/"+type+"/"+level,
		        	async: false,
		        	success: function(data){
		        		brnitem = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				var temp = {"List":[{"text":"เลือก","key":"X"}]};
				for(var x = 0;x<brnitem.List.length;x++){
					var tt = x+1;
					temp.List[tt] = brnitem.List[x];
					if(brnitem.List[x].zthrbee08Akey.edbnc == ""){
						temp.List[tt].text = brnitem.List[x].edtxt;
					}else{
						temp.List[tt].text = brnitem.List[x].zthrbee08Akey.edbnc;
					}
					temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(brnitem.List[x]))));
				}
				
				this.getView().setModel(new JSONModel(temp),"eduBran");
			}
			
		},
		searchEmp: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog2", this);
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
			var oFilter = new sap.ui.model.Filter([new sap.ui.model.Filter("sccode", sap.ui.model.FilterOperator.Contains, sValue),
				new sap.ui.model.Filter("scnam", sap.ui.model.FilterOperator.Contains, sValue),
				]);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},
		handleClose: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().sccode; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			this.getView().byId("selectedPlace").setSelectedKey(selectedId);
			
		},
		onItemchange: function(){
			var item = this.getView().byId("selectedGrade").getSelectedKey();
			var decode = JSON.parse(decodeURIComponent(escape(window.atob(item))));
			
			this.getView().byId("untxt").setValue(decode.untxt);
			this.getView().byId("sclamt").setValue(decode.sclamt);
		},
		onChangegd: function(){
			var item = this.getView().byId("selectedGrade").getSelectedKey();
			var decode = JSON.parse(decodeURIComponent(escape(window.atob(item))));
			var gd = this.getView().byId("mingd").getValue();
			gd = parseFloat(gd);
			var min = parseFloat(decode.mingd);
			if(gd < min){
				MessageToast.show("เกรดไม่ถึงขั้นต่ำที่กำหนด : " + decode.mingd);
			}
			
		},
		onChildChange: function(){
			var ch_sel = this.getView().byId("selectedName").getSelectedKey();
			if(ch_sel != "X"){
				var ch_data = JSON.parse(decodeURIComponent(escape(window.atob(ch_sel))));
				
				this.getView().byId("birthDate").setValue(this.onDatedisplay2(ch_data.fgbdt));
				this.getView().byId("age").setValue(this.onChildage(ch_data.fgbdt));
			}
		},
		onSelbrn: function(){
			var edu = this.getView().byId("eduBran").getSelectedKey();
			var decode = JSON.parse(decodeURIComponent(escape(window.atob(edu))));
			this.getView().byId("empTotal").setValue(decode.mxamt);
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
		onAccept: function (){
			
			var user = jQuery.sap.getUriParameters().get("user");
			var check = this.getView().byId("selvup");
			var visi = check.getVisible();
			var selvup = "";
			var selapp = this.getView().byId("sellv1").getSelectedItem().getText();
			var seltxt = selapp;
			if(visi == true){
				selvup = this.getView().byId("selvup").getSelectedItem().getText();
				seltxt = selvup;
			}
			var aedtm = new Date();
			aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var docData = new JSONModel();
			
			if(selapp == "ไม่อนุมัติ" || selvup == "ไม่อนุมัติ" || selapp == "ไม่รับทราบ" || selvup == "ไม่รับทราบ"){
				
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
				json.taskkey.pernr = dataJ.pernr;
				json.userad = dataJ.userad;
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
				dataJ.aedat = aedtm;
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
			
//				var json = docData.tblDocdetail;
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
				if(this.getView().byId("avup1").getVisible() == false){
					json.del_flag = this.getView().byId("avlv1").getValue();
				}else{
					json.del_flag = this.getView().byId("avup1").getValue();
				}
				json.taskkey.pernr = user;
				json.userad = dataJ.userad;
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/12",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				dataJ.userch = user;
				dataJ.pernr = "";
				if(dataJ.orgeh == ""){
					dataJ.orgeh = wf.List[0].org1;
				}else if(pa0001.PA0001.orgeh == wf.List[0].org1){
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
					dataJ.orgeh = wf.List[0].org3;
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
		
		onSendPressed: function () {

			var item = this.getView().byId("selectedGrade").getSelectedKey();
			var decode = JSON.parse(decodeURIComponent(escape(window.atob(item))));
			var gd = this.getView().byId("mingd").getValue();
			gd = parseFloat(gd);
			var min = parseFloat(decode.mingd);
			if(gd < min){
				MessageToast.show("เกรดไม่ถึงขั้นต่ำที่กำหนด : " + decode.mingd);
			}else{
			
				var user = jQuery.sap.getUriParameters().get("user");
				var pernr = user;
				var complete_url = window.location.href;
				var docno = complete_url.split("/").pop();
				var dchead = new JSONModel();
				
				var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				
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
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/12",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				var json = dchead;
				
				
				if(parseInt(pa0001.PA0001.persk) < 9){
					json = dchead;
					json.orgeh = "";//wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอรับทุนการศึกษา";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.pernr = parseInt(pa.paPos.manag).toString();
					json.userad = pernr;
					json.status = "2";
					json.sttext = "รออนุมัติ";
					json = JSON.stringify(json);
				}else{
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอรับทุนการศึกษา";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.pernr = "";
					json.userad = pernr;
					json.status = "2";
					json.sttext = "รออนุมัติ";
					json = JSON.stringify(json);
					
				}
				
	//			json.status = "2";
	//			json.sttext = "รออนุมัติ";
	//			json = JSON.stringify(json);
				
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
				
				var spernr = "pernr:"+dchead.userad;
				var rqust = ",rqust:"+docno;
				var rqdat = ",rqdat:"+this.getView().byId("RQDAT").getValue();
				var selectedName = ",selectedName:"+this.getView().byId("selectedName").getSelectedItem().getKey();
				var birthDate = ",birthDate:"+this.getView().byId("birthDate").getValue();
				var age = ",age:"+this.getView().byId("age").getValue();
				var selectedGrade = ",selectedGrade:"+this.getView().byId("selectedGrade").getSelectedItem().getKey();
				var year = ",xyear:"+this.getView().byId("year").getValue();
				var selectedPlace = ",selectedPlace:"+this.getView().byId("selectedPlace").getSelectedItem().getKey();
				var mingd = ",mingd:"+this.getView().byId("mingd").getValue();
				var untxt = ",untxt:"+this.getView().byId("untxt").getValue();
				var scyear = ",scyear:"+this.getView().byId("scyear").getValue();
				var sclamt = ",sclamt:"+this.getView().byId("sclamt").getValue();
				var othPlace = ",othPlace:"+this.getView().byId("othPlace").getValue();
					
				var script = spernr+rqust+rqdat+selectedName+birthDate+age+selectedGrade+year+selectedPlace+mingd+untxt+scyear+sclamt+othPlace;
	
				json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9706"}';
				
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
	//				dcdetail = response.tblDocdetail;
				});
				
				var year = new Date().getFullYear();
				var state = this.getView().byId("file01n").getVisible();
				if(state == true){
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
				}
				MessageToast.show("Saved");
				
				this.getRouter().navTo("myInfo");
			}
		},
		
		onSavePressed: function () {
			MessageToast.show("Saved");
		},

		onCancelPressed: function () {
			MessageToast.show("Cancel");
		},
		
		onEditPressed: function () {
			
			this.getView().byId("selectedName").setEnabled(true);
			this.getView().byId("selectedGrade").setEnabled(true);
			this.getView().byId("year").setEnabled(true);
			this.getView().byId("selectedPlace").setEnabled(true);
			this.getView().byId("mingd").setEnabled(true);
			this.getView().byId("scyear").setEnabled(true);
			this.getView().byId("sclamt").setEnabled(false);
			this.getView().byId("othPlace").setEnabled(true);
			this.getView().byId("btnSrch").setEnabled(true);
			
			this.getView().byId("file01n").setVisible(true);
			this.getView().byId("file02n").setVisible(true);
			this.getView().byId("file03n").setVisible(true);
			
			this.getView().byId("file01n").setEnabled(true);
			this.getView().byId("file02n").setEnabled(true);
			this.getView().byId("file03n").setEnabled(true);
			
		},
		onCancel: function () {
			this.getRouter().navTo("familyBenefitPage");
		},
		addRow: function() {
		    var oList = this.getView().byId("idEducationHistoryTable");
		    var oDt = oList.getBinding("items").getModel().oData;
		}
	});
});