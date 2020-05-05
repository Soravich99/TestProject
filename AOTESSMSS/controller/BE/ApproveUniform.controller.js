sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageBox',
], function (BaseController, MessageToast, JSONModel,MessageBox) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveUniform", {
		onBeforeRendering:function (){
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var rqust = this.getView().byId("RQUST").getValue();
			if(rqust != docno){
				var loc = location;
				location.reload();
			}
		},
		onExit:function (){
			this.getView().destroy();
		},
		onAfterRendering:function (){
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var rqust = this.getView().byId("RQUST").getValue();
			if(rqust != docno){
				var loc = location;
				location.reload();
			}
		},
		onRouteMatched: function(oEvent) {
		    this.sRouteName = oEvent.getParameters().name;
		    // Check route and reset your data
		},
		onInit: function () {
//			sap.ui.core.UIComponent.getRouterFor(this)
//	        .attachRoutePatternMatched(this.onRouteMatched, this);
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
					this.getView().byId("PLANS_DESC_APPUP").setValue("กอญ.");
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
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
			
			
			
			var pa9706 = new JSONModel();
			var docData = new JSONModel();
			
			var rqust;
			var rqdat;
			var value1;
			var value2;
			var price1;
			var price2;
			var itemList;
			
			var total;
			
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
			
			var pa9706_arr = script.split(",");
			
			var arrayLength = pa9706_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9706_arr[i].split(":");
				var field = fieldar[0];
			    if(field.includes("pernr") == true){ pernr = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("rqust") == true){ rqust = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("rqdat") == true){ rqdat = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("itemList") == true){ itemList = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("total") == true){ total = pa9706_arr[i].split(":").pop(); }
			}
			
			if(dchead.status == "1"){
				this.getView().byId("btnSend").setVisible(true);
				if(dchead.userad == user){
					this.getView().byId("btnEdit").setVisible(true);
				}
				this.getView().byId("approveSection").setVisible(false);
			}else if(dchead.status == "4"){
				if(dchead.userad == user){
					this.getView().byId("btnEdit").setVisible(true);
				}
				this.getView().byId("approveSection").setVisible(false);
			}else{
				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("approveSection").setVisible(true);
				this.getView().byId("btnEdit").setVisible(false);
			}
			
			if(dchead.userad == user){
				this.getView().byId("approveSection").setVisible(false);
			}
			
			this.getView().byId("RQUST").setValue(rqust);
			this.getView().byId("RQDAT").setValue(rqdat);
			this.getView().byId("MAXUNIT").setValue(total);
			
			var cell2 = 0;
			var cell3 = 0;
			
			var oTable = this.getView().byId("idTab01");
			var item = oTable.getItems();
			for(var d=0;d<item.length;d++){
				oTable.removeItem(item[d]);
			}
			var item_arr = window.atob(itemList).split("|");
			for(var x = 1; x < item_arr.length; x++)
			{
				var items = item_arr[x].split(",");
				var uftype = "";
				var usftyp = "";
				var unit = "";
				var price = "";
				
				
				for(var i = 0;i < items.length; i++)
				{
					var fieldar = items[i].split(":");
					var field = fieldar[0];
					
					if(field.includes("uftype") == true){ uftype = items[i].split(":").pop().replace(/,/g,""); }
					if(field.includes("usftyp") == true){ usftyp = items[i].split(":").pop().replace(/,/g,""); }
					if(field.includes("unit") == true){ unit = items[i].split(":").pop().replace(/,/g,""); }
					if(field.includes("price") == true){ price = items[i].split(":").pop().replace(/,/g,""); }
					
				}
				
				
				var uflist;
				var uflist2;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14A/",
		        	async: false,
		        	success: function(data){
		        		uflist = data;
		        	},
		        });
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14B/",
		        	async: false,
		        	success: function(data){
		        		uflist2 = data;
		        	},
		        });
				
				if(usftyp == ""){
					for(var b = 0; b <uflist.List.length; b ++){
						if(uflist.List[b].uftype == uftype){
							usftyp = uflist.List[b].uftext;
						}
					}
				}else{
					for(var b = 0; b <uflist2.List.length; b ++){
						if(uflist2.List[b].zthrbee14key.ufstyp == usftyp){
							usftyp = uflist2.List[b].usftxt;
						}
					}
				}
				
				var tempuf = {List:[{uftype:"0000",uftext:"เลือก"}]}
				for(var u = 0; u < uflist.List.length; u++){
					tempuf.List[u+1] = uflist.List[u];
				}
				uflist = tempuf;
				
				this.getView().setModel(new JSONModel(uflist),"ufData");
				this.getView().setModel(new JSONModel(uflist2),"ufData2");
				
				
				
				
				var oItem = new sap.m.ColumnListItem({
					cells : [ new sap.m.Select({
								items: { 
									path: "ufData>/List", 
									template: new sap.ui.core.ListItem({
									      key: '{ufData>uftype}',
									      text: '{ufData>uftext}'
									})
								},
								selectedKey:uftype,enabled: false
							}),new sap.m.Input({value:usftyp,enabled: false}), 
								new sap.m.Input({value:unit,enabled: false,change: [this.inputAmt, this]}), 
								new sap.m.Input({value:price,enabled: false,change: [this.inputAmt, this]}) 
					]
				});
				
				var oTable = this.getView().byId("idTab01");
				oTable.addItem(oItem);
				
			}
				
			user = pernr;
			
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
			
			var pa0041;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0041/"+user,
	        	async: false,
	        	success: function(data){
	        		pa0041 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			if(pa0041.List.length > 0){
				var dat01;
				var dat02;
					
				for(var c = 0;c < pa0041.List.length; c++){
					dat01 = this.onDateFormat(pa0041.List[c].dat01);
					dat02 = this.onDateFormat(pa0041.List[c].dat02);
				}
				this.getView().byId("DAT01").setText(dat01);
				this.getView().byId("DAT02").setText(dat02);
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
			
			var uflist;
			var uflist2;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14A/",
	        	async: false,
	        	success: function(data){
	        		uflist = data;
	        	},
	        });
					
			this.getView().setModel(new JSONModel(uflist),"ufData");
			
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
			
			this.getView().byId("avlv1").setValue("");
			this.getView().byId("sellv1").setSelectedKey("เลือก");
			
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
		onAdd : function(oEvent) {
			
			var oTable = this.getView().byId("idTab01");
			var aItems = oTable.getItems();
			var itemList = "";
			
			var cell1 = "";
			var cell2 = "";
			var cell3 = "";
			var cell4 = "";
			var total = 0;
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
						cell2 = cell2.getSelectedKey();
					}
					else if(i == 2)
					{
						cell3 = itemRow[i]
						cell3 = cell3.getValue().replace(/,/g,"");
						total = parseFloat(cell3) + total;
					}
					else if(i == 3)
					{
						cell4 = itemRow[i]
						cell4 = cell4.getValue().replace(/,/g,"");
					}
				}
				
				itemData = "seqnr:"+x+",uftype:"+cell1+",usftyp:"+cell2+",unit:"+cell3;
				itemData = itemData + ",price:"+cell4;
				itemList = itemList + "|" + itemData;
				
			}
			itemList = window.btoa(itemList);
			
			if(aItems.length > 2 || total > 2){
				
				MessageToast.show("จำนวนชุดเกินที่กำหนด");
				
			}else{
			
				var uflist;
				var uflist2;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14A/",
		        	async: false,
		        	success: function(data){
		        		uflist = data;
		        	},
		        });
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14B/",
		        	async: false,
		        	success: function(data){
		        		uflist2 = data;
		        	},
		        });
				
				var tempuf = {List:[{uftype:"0000",uftext:"เลือก"}]}
				for(var u = 0; u < uflist.List.length; u++){
					tempuf.List[u+1] = uflist.List[u];
				}
				uflist = tempuf;
				
				this.getView().setModel(new JSONModel(uflist),"ufData");
				
				var oItem = new sap.m.ColumnListItem({
					cells : [ new sap.m.Select({
								items: { 
									path: "ufData>/List", 
									template: new sap.ui.core.ListItem({
									      key: '{ufData>uftype}',
									      text: '{ufData>uftext}'
									})
								},
								change: [this.onSetusf, this]
							}),new sap.m.Select({
								change: [this.onGetvalue, this]
							}), new sap.m.Input({change: [this.inputAmt, this]}), 
								new sap.m.Input({change: [this.inputAmt, this],enabled:false}),
								new sap.m.Button({
									text : "Delete",
									press : [ this.remove, this ]
								}) 
					]
				});
				var oTable = this.getView().byId("idTab01");
				
				oTable.addItem(oItem);
			}
		},
		deleteRow : function(oEvent) {
			var oTable = this.getView().byId("idTab01");
			
			oTable.removeItem(oEvent.getParameter("listItem"));
		},
		inputAmt: function(oEvent){
			 
			var oTable = this.getView().byId("idTab01");
			var aItems = oTable.getItems();
			var itemList = "";
			var ll = aItems.length;
			var uflist2;
			var max1;
			
//			var value1 = this.getView().byId("MAXUNIT01").getValue();
//			var value2 = this.getView().byId("MAXUNIT02").getValue();
//			
//			var price1 = this.getView().byId("MAXRATE01").getValue();
//			var price2 = this.getView().byId("MAXRATE02").getValue();
//			
//			if (value1 == ""){value1 = 0;}
//			if (value2 == ""){value2 = 0;}
//			if (price1 == ""){price1 = 0;}
//			if (price2 == ""){price2 = 0;}
			
			var oSource = oEvent.getSource();
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14B/",
	        	async: false,
	        	success: function(data){
	        		uflist2 = data;
	        	},
	        });
			var key = oSource.getParent().mAggregations.cells[0].getSelectedKey();
			
			for(var x=0; x < uflist2.List.length ; x++ ){
				if(uflist2.List[x].zthrbee14key.uftype == key){
					
					max1 = uflist2.List[x].maxunit;
				}
			}
			var max = parseFloat(max1);
			var value = parseFloat(oSource.getValue().replace(/,/g,""));
			if(value > max){
				value = max;
			}
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 0,
				  minFractionDigits: 0,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			var val = oNumberFormat.format(value)
			
			oSource.setValue(val);
			
			this.onGetvalue();
			
			
			
		},
		onChange1: function(){
			
			var uflist2;
			var uftemp = {"List":[]};
			var ci = 0;
			var max;
			var rate;
			
			var cell1 = this.getView().byId("UFTYPE01").getSelectedItem();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14B/",
	        	async: false,
	        	success: function(data){
	        		uflist2 = data;
	        	},
	        });
			
			for(var x=0; x < uflist2.List.length ; x++ ){
				if(uflist2.List[x].zthrbee14key.uftype == cell1.getKey()){
					uftemp.List[ci] = uflist2.List[x];
					uftemp.usftyp = uflist2.List[x].zthrbee14key.ufstyp;
					ci = ci+ 1;
					max = uflist2.List[x].maxunit;
					rate = uflist2.List[x].ufrate;
				}
			}
			
			this.getView().setModel(new JSONModel(uftemp),"ufData2");
			
			var bin = this.getView().byId("UFSTYP01");
			
			bin = new sap.m.Select({
				items: { 
					path: "ufData2>/List", 
					template: new sap.ui.core.ListItem({
					      key: '{ufData2>usftyp}',
					      text: '{ufData2>usftxt}'
					})
				}});
			
			//this.getView().byId("MAXUNIT01").setValue(max);
			this.getView().byId("MAXRATE01").setValue(rate);
			
		},
		onChange2: function(){
			
			var uflist2;
			var uftemp = {"List":[]};
			var ci = 0;
			var max;
			var rate;
			
			var cell1 = this.getView().byId("UFTYPE02").getSelectedItem();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14B/",
	        	async: false,
	        	success: function(data){
	        		uflist2 = data;
	        	},
	        });
			
			for(var x=0; x < uflist2.List.length ; x++ ){
				if(uflist2.List[x].zthrbee14key.uftype == cell1.getKey()){
					uftemp.List[ci] = uflist2.List[x];
					uftemp.usftyp = uflist2.List[x].zthrbee14key.ufstyp;
					ci = ci+ 1;
					max = uflist2.List[x].maxunit;
					rate = uflist2.List[x].ufrate;
				}
			}
			
			this.getView().setModel(new JSONModel(uftemp),"ufData3");
			
			var bin = this.getView().byId("UFSTYP02");
			
			bin = new sap.m.Select({
				items: { 
					path: "ufData3>/List", 
					template: new sap.ui.core.ListItem({
					      key: '{ufData3>usftyp}',
					      text: '{ufData3>usftxt}'
					})
				}});
			
			//this.getView().byId("MAXUNIT02").setValue(max);
			this.getView().byId("MAXRATE02").setValue(rate);
			
		},
		onSetusf : function() {
			var oTable = this.getView().byId("idTab01");
			var aItems = oTable.getItems();
			var itemList = "";
			var ll = aItems.length;
			for(var v=0;v < aItems.length;v++){
				var itemData = "";
				var itemRow = aItems[v];
				
				var cell1 = itemRow.mAggregations.cells[0].getSelectedItem();
				var cell2 = itemRow.mAggregations.cells[1];
				if(cell1.getKey() != "X"){
					var uflist2;
					var uftemp = {"List":[{usftyp:"X",usftxt:"เลือก"}]};
					var ci = 1;
					var max;
					var rate;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14B/",
			        	async: false,
			        	success: function(data){
			        		uflist2 = data;
			        	},
			        });
					var txt = cell1.getText();
					var chk = cell2.getItems().length;
					if(chk > 0){
						var ite = cell2.getItems();
						if(ite[1].getText().includes(txt) == true){
							continue;
						}else{
							for(var g = 0;g < chk;g++){
								cell2.removeItem(ite[g]);
							}
						}
					}
					
					var newItem = new sap.ui.core.Item({ key: "X", text: "เลือก"});
					cell2.addItem(newItem);
					
					for(var x=0; x < uflist2.List.length ; x++ ){
						if(uflist2.List[x].zthrbee14key.uftype == cell1.getKey()){
							uftemp.List[ci] = uflist2.List[x];
							if(uftemp.List[ci].usftxt.length <=0){
								uftemp.List[ci].usftxt = cell1.getText();
							}
							uftemp.ufstyp = uflist2.List[x].zthrbee14key.ufstyp;
							
							var newItem = new sap.ui.core.Item({ key: uftemp.List[ci].zthrbee14key.ufstyp, text: uftemp.List[ci].usftxt});
							cell2.addItem(newItem);
							
							ci = ci+ 1;
							max = uflist2.List[x].maxunit;
							rate = uflist2.List[x].ufrate;
						}
					}
					
					var cell3 = itemRow.mAggregations.cells[2];
					var cell4 = itemRow.mAggregations.cells[3];
					
					cell3.setValue(max);
					cell4.setValue(rate);
				}
				
			}
		
			
		},
		onGetvalue : function(oEvent) {
			
			var oTable = this.getView().byId("idTab01");
			var aItems = oTable.getItems();
			var itemList = "";
			var ll = aItems.length;
			var cell3 = 0;
			var cell4 = 0;
			var total = 0;
			for(var v=0;v < aItems.length;v++){
				
				var itemRow = aItems[v];
				
				cell3 = itemRow.mAggregations.cells[2];
				cell4 = itemRow.mAggregations.cells[3];
				if(cell3.length < 1){ cell3 = 0; }
				if(cell4.length < 1){ cell4 = 0; }
				total = total + (parseInt(cell3.getValue().replace(/,/g,"")) * parseFloat(cell4.getValue().replace(/,/g,"")));
				
			}
			
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			total = oNumberFormat.format(total)
			
			this.getView().byId("MAXUNIT").setValue(total);	
			
		},
		remove : function(oEvent) {
			var oTable = this.getView().byId("idTab01");
			oTable.removeItem(oEvent.getSource().getParent());
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
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/03';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var pernr = this.byId("PERNR").getText();
			
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
			json.curid = 'BE' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
			
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/03';
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
			json.module = 'BE';
			json.header = "ขอเบิกเครื่องแบบ";
			json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
			json.aedat = "9999-12-31";
			json.pernr = "4600146";
			json.userad = pernr;
			json.status = "1";
			json.sttext = "บันทึก";
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
			
			
			var rqust = dcrun.curid;
			var rqdat = this.getView().byId("RQDAT").getValue();
			var value1 = this.getView().byId("MAXUNIT01").getValue();
			var value2 = this.getView().byId("MAXUNIT02").getValue();
			
			var price1 = this.getView().byId("MAXRATE01").getValue();
			var price2 = this.getView().byId("MAXRATE02").getValue();
			
			var total = this.getView().byId("MAXUNIT").getValue();
			var script = "pernr:"+pernr+"rqust:"+rqust+"rqdat"+rqdat+"maxunit01:"+value1+"maxunit02:"+value2+"maxrate01:"+price1+"maxrate02:"+price2+"maxunit:"+total;
			
			json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9706"}';
			
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
			
			
			MessageToast.show("Saved");
			
			this.getRouter().navTo("myInfo");
		},

		onCancelPressed: function () {
			MessageToast.show("Cancel");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		},
		
		addMore:function(){
//			this.getView().byId("form1").addContent( new sap.m.Label({ text: "" }) );
//			this.getView().byId("form1").addContent( new sap.m.Text({ text: "" }) );
//
//          this.getView().byId("form1").addContent( new sap.m.Label({ text: "ประเภทเครื่องแบบ" }) );
//          this.getView().byId("form1").addContent( new sap.m.Select({
//      	    items: {
//      	      item: new sap.ui.core.Item({ key: "เลือก", text:"A" })
//      	    }
//      	}) );
          
          
          var content = this.getView().byId("form1").getContent();
          this.getView().byId("form1").addContent(content[0]);
          this.getView().byId("form1").addContent(content[1]);
          this.getView().byId("form1").addContent(content[2]);
          this.getView().byId("form1").addContent(content[3]);
          this.getView().byId("form1").addContent(content[4]);
          this.getView().byId("form1").addContent(content[5]);
          this.getView().byId("form1").addContent(content[6]);
          
//          var oForm = this.getView().byId("form1");
//          for (var i = 0; i < content.length; i++) {
//              oForm.addContent(content[i]);
//          }
		},
		cloneContent: function(oEvent){
			var oForm = this.getView().byId("form1");
			var xForm = this.getView().byId("xx")
			if (oForm) {
				var oFormClone = oForm.clone();
				xForm.addContent(oFormClone);
			}
		},
		onSendPressed: function () {
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var dchead = new JSONModel();
			var dcdetail;
			
			
			var pernr = this.byId("PERNR").getText();
			var dcid = this.getView().byId("RQUST").getValue();
			
			var oTable = this.getView().byId("idTab01");
			var aItems = oTable.getItems();
			var itemList = "";
			
			var cell1 = "";
			var cell2 = "";
			var cell3 = "";
			var cell4 = "";
			var total = 0;
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
						cell2 = cell2.getSelectedKey();
					}
					else if(i == 2)
					{
						cell3 = itemRow[i]
						cell3 = cell3.getValue().replace(/,/g,"");
						total = parseFloat(cell3) + total;
					}
					else if(i == 3)
					{
						cell4 = itemRow[i]
						cell4 = cell4.getValue().replace(/,/g,"");
					}
				}
				
				itemData = "seqnr:"+x+",uftype:"+cell1+",usftyp:"+cell2+",unit:"+cell3;
				itemData = itemData + ",price:"+cell4;
				itemList = itemList + "|" + itemData;
				
			}
			itemList = window.btoa(itemList);
			
			if(aItems.length > 2 || total != 2){
				
				MessageToast.show("จำนวนชุดต้องเท่ากับ 2");
				
			}else{
			
				var rqust = dcid;
				var rqdat = this.getView().byId("RQDAT").getValue();
				
				var datax = window.atob(itemList);
				
				var total = this.getView().byId("MAXUNIT").getValue().replace(/,/g,"");
				var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",itemList:"+itemList+",total:"+total;
				
	
				json = '{"docid":"'+dcid+'","script":"'+script+'","stable":"pa9706"}';
				
				var postdcdetail = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+dcid,
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
				
				var json = dchead;
	
				json.status = "2";
				json.sttext = "รอรับทราบ";
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
				
				
				MessageToast.show("Saved");
				
				this.getRouter().navTo("myInfo");
			}
		},
		onAccept: function (){
			var user = jQuery.sap.getUriParameters().get("user");
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var docData = new JSONModel();
			
			var aedtm = new Date();
			aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
			
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
			
			var apptxt = this.getView().byId("sellv1").getSelectedItem().getKey();
			var appkey = this.getView().byId("sellv1").getSelectedItem().getKey();
			
			if(apptxt == "ไม่อนุมัติ"){
				appkey = "4";
				apptxt = "ไม่รับทราบ";
			}else{
				appkey = "3";
				apptxt = "รับทราบ";
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
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/7",
	        	async: false,
	        	success: function(data){
	        		wf = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			dataJ.userch = user;
			
			dataJ.status = appkey;
			dataJ.sttext = apptxt;
			dataJ.aedat = aedtm;
			
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
			
			this.getRouter().navTo("Worklist");
			
		},
		onEditPressed: function(){
			
			this.getView().byId("btnAdd").setVisible(true);
			
			var docData;
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			
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
			
			var pa9706_arr = script.split(",");
			
			var itemList;
			
			var arrayLength = pa9706_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9706_arr[i].split(":");
				var field = fieldar[0];
			    if(field.includes("itemList") == true){ itemList = pa9706_arr[i].split(":").pop(); }
			}
			
			var cell2 = 0;
			var cell3 = 0;
			
			var oTable = this.getView().byId("idTab01");
			var item = oTable.getItems();
			for(var d=0;d<item.length;d++){
				oTable.removeItem(item[d]);
			}
			var item_arr = window.atob(itemList).split("|");
			for(var x = 1; x < item_arr.length; x++)
			{
				var items = item_arr[x].split(",");
				var uftype = "";
				var usftyp = "";
				var unit = "";
				var price = "";
				
				
				for(var i = 0;i < items.length; i++)
				{
					var fieldar = items[i].split(":");
					var field = fieldar[0];
					
					if(field.includes("uftype") == true){ uftype = items[i].split(":").pop().replace(/,/g,""); }
					if(field.includes("usftyp") == true){ usftyp = items[i].split(":").pop().replace(/,/g,""); }
					if(field.includes("unit") == true){ unit = items[i].split(":").pop().replace(/,/g,""); }
					if(field.includes("price") == true){ price = items[i].split(":").pop().replace(/,/g,""); }
					
				}
				
				
				var uflist;
				var uflist2;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14A/",
		        	async: false,
		        	success: function(data){
		        		uflist = data;
		        	},
		        });
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14B/",
		        	async: false,
		        	success: function(data){
		        		uflist2 = data;
		        	},
		        });
				
				if(usftyp == ""){
					for(var b = 0; b <uflist.List.length; b ++){
						if(uflist.List[b].uftype == uftype){
							usftyp = uflist.List[b].uftext;
						}
					}
				}else{
					for(var b = 0; b <uflist2.List.length; b ++){
						if(uflist2.List[b].zthrbee14key.ufstyp == usftyp){
							usftyp = uflist2.List[b].usftxt;
						}
					}
				}
				
				var tempuf = {List:[{uftype:"0000",uftext:"เลือก"}]}
				for(var u = 0; u < uflist.List.length; u++){
					tempuf.List[u+1] = uflist.List[u];
				}
				uflist = tempuf;
				
				this.getView().setModel(new JSONModel(uflist),"ufData");
				this.getView().setModel(new JSONModel(uflist2),"ufData2");
				
				var oItem = new sap.m.ColumnListItem({
					cells : [ new sap.m.Select({
								items: { 
									path: "ufData>/List", 
									template: new sap.ui.core.ListItem({
									      key: '{ufData>uftype}',
									      text: '{ufData>uftext}'
									})
								},
								selectedKey:uftype,
								change: [this.onSetusf, this]
							}),new sap.m.Select({ selectedKey:usftyp,
								change: [this.onGetvalue, this]
							}), 
								new sap.m.Input({value:unit,change: [this.inputAmt, this]}), 
								new sap.m.Input({value:price,enabled: false,change: [this.inputAmt, this]}),
								new sap.m.Button({
									text : "Delete",
									press : [ this.remove, this ]
								}) 
					]
				});
				
				var oTable = this.getView().byId("idTab01");
				oTable.addItem(oItem);
			}
			
			this.onSetusfx();
			
		},
		onSetusfx : function() {
			
			var oTable = this.getView().byId("idTab01");
			var aItems = oTable.getItems();
			var itemList = "";
			var ll = aItems.length;
			for(var v=0;v < aItems.length;v++){
				var itemData = "";
				var itemRow = aItems[v];
				
				var cell1 = itemRow.mAggregations.cells[0].mProperties.selectedKey;
				var cell2 = itemRow.mAggregations.cells[1];
				
				var uflist;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14A/",
		        	async: false,
		        	success: function(data){
		        		uflist = data;
		        	},
		        });
				
				var uftxt = "";
				
				for(var b = 0; b <uflist.List.length; b ++){
					if(uflist.List[b].uftype == cell1){
						uftxt = uflist.List[b].uftext;
					}
				}
				
				var uflist2;
				var uftemp = {"List":[{usftyp:"X",usftxt:"เลือก"}]};
				var ci = 1;
				var max;
				var rate;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE14B/",
		        	async: false,
		        	success: function(data){
		        		uflist2 = data;
		        	},
		        });
				var txt = uftxt;
				var chk = cell2.getItems().length;
				if(chk > 0){
					var ite = cell2.getItems();
					if(ite[1].getText().includes(txt) == true){
						continue;
					}else{
						for(var g = 0;g < chk;g++){
							cell2.removeItem(ite[g]);
						}
					}
				}
				
				var newItem = new sap.ui.core.Item({ key: "X", text: "เลือก"});
				cell2.addItem(newItem);
				
				for(var x=0; x < uflist2.List.length ; x++ ){
					if(uflist2.List[x].zthrbee14key.uftype == cell1){
						uftemp.List[ci] = uflist2.List[x];
						if(uftemp.List[ci].usftxt.length <=0){
							uftemp.List[ci].usftxt = uftxt;
						}
						uftemp.ufstyp = uflist2.List[x].zthrbee14key.ufstyp;
						
						var newItem = new sap.ui.core.Item({ key: uftemp.List[ci].zthrbee14key.ufstyp, text: uftemp.List[ci].usftxt});
						cell2.addItem(newItem);
						
						ci = ci+ 1;
						max = uflist2.List[x].maxunit;
						rate = uflist2.List[x].ufrate;
					}
				}
				
				cell2.setSelectedKey(itemRow.mAggregations.cells[1].mProperties.selectedKey);
				
			}
		}

	});
});