sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, MessageToast, JSONModel,Filter, FilterOperator) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.FundReport", {

		onInit: function () {
			
//			var user = jQuery.sap.getUriParameters().get("user");
//			var pernr = user;
//			
//			var pa0001 = new JSONModel();
//			var pa0002 = new JSONModel();
//			var pa0006 = new JSONModel();
//			var pa0185 = new JSONModel();
//			var pa0187 = new JSONModel();
//			var pa0077 = new JSONModel();
//			var pa0021 = new JSONModel();
//			var pa0022 = new JSONModel();
//			var pa0804 = new JSONModel();
//			var t522g = new JSONModel();
//			var t535n = new JSONModel();
//			var t535ne = new JSONModel();
//			var t516t = new JSONModel();
//			var titel = "";
//			var reli = "";
//			var blood = "";
//			var manag;
//			var t501;
//			var t503k;
//			var pa;
//			
//	        var dataPA = $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+user,
//	        	async: false,
//	        	success: function(data){
//	        		pa0001 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        dataPA = $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+user,
//	        	async: false,
//	        	success: function(data){
//	        		pa0002 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        dataPA = $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+user,
//	        	async: false,
//	        	success: function(data){
//	        		pa0185 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        dataPA = $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/12",
//	        	async: false,
//	        	success: function(data){
//	        		pa0021 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        dataPA = $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+user+"/12",
//	        	async: false,
//	        	success: function(data){
//	        		pa0187 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G",
//	        	async: false,
//	        	success: function(data){
//	        		t522g = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        this.getView().setModel(new JSONModel(t522g),"titleItem");
//	        
//	        $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N",
//	        	async: false,
//	        	success: function(data){
//	        		t535n = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        this.getView().setModel(new JSONModel(t535n),"otitleItem");
//	        
//	        $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535NE",
//	        	async: false,
//	        	success: function(data){
//	        		t535ne = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        this.getView().setModel(new JSONModel(t535ne),"eotitleItem");
//	        
//	        $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T516T",
//	        	async: false,
//	        	success: function(data){
//	        		t516t = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        this.getView().setModel(new JSONModel(t516t),"reliItem");
//	        
//	        $.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G/"+pa0002.PA0002.anred,
//	        	async: false,
//	        	success: function(data){
//	        		t522g = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//	        
//	        if(pa0002.PA0002.namzu != "" && pa0002.PA0002.namzu != " ")
//	        {
//		        $.ajax({
//		        	type: "GET",
//		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N/"+pa0002.PA0002.namzu,
//		        	async: false,
//		        	success: function(data){
//		        		t535n = data;
//		        		titel = t535n.T535N.titel;
//		        	},
//		        	error: function(){
//		        		titel = "0";
//		        	}
//		        });
//	        }else{
//	        	titel = "0";
//	        }
//	        
//	        
//	        var vpernr = this.getView().byId("PERNR");
//	        var vename = this.getView().byId("ENAME");
//			
//	        if(titel == " "){
//	        	titel = t522g.T522G.atext;
//	        }
//			
//			var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
//			
//			vpernr.setText(pa0001.PA0001.pernr);
//			vename.setText(cStr);
//			
//			var pernrpad = pernr.toString().padStart(8,'0');
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/"+pernrpad,
//	        	async: false,
//	        	success: function(data){
//	        		pa = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			this.getView().byId("PLANS_DESC").setText(pa.paPos.pos_l);
//			this.getView().byId("MAIN_PLANS_ORG-O_SHORT").setText(pa.paPos.org_s+pa.paPos.up_s);
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T503K/"+pa0001.PA0001.persk,
//	        	async: false,
//	        	success: function(data){
//	        		t503k = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			this.getView().byId("PERSK").setText(t503k.T503K.ptext);
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T501/"+pa0001.PA0001.persg,
//	        	async: false,
//	        	success: function(data){
//	        		t501 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			this.getView().byId("PERSG").setText(t501.T501.ptext);
//			
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
			
		},
		onBeforeRendering: function() {
			//this.byId('selectedYear').setModel(this.jModel);	
		},
		onSearchPressed: function() {
			
			var oTable = this.getView().byId("fundTab");
			var item = oTable.getItems();
			for(var d=0;d<item.length;d++){
				oTable.removeItem(item[d]);
			}
			
			var d1 = this.onDateformat(this.getView().byId("DATE1X").getValue());
			var d2 = this.onDateformat(this.getView().byId("DATE2X").getValue());
			
			var fund;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/FundReport/"+d1+"/"+d2,
	        	async: false,
	        	success: function(data){
	        		fund = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var TimeScholar;
			
			for(var j = 0;j < fund.List.length;j++){
				
				var doc = fund.List[j].docid;
				var script = fund.List[j].script;
				var items = script.split(",");
				
				var zzpcy2 = "";
				var emepc2 = "";
				var pernr = "";
				
				for(var b = 0;b < items.length;b++){
					var fieldar = items[b].split(":");
					var field = fieldar[0];
				    if(field.includes("zzpcy") == true){ zzpcy2 = items[b].split(":").pop(); }
				    if(field.includes("emepc") == true){ emepc2 = items[b].split(":").pop(); }
				    if(field.includes("pernr") == true){ pernr = items[b].split(":").pop(); }
				}
				
				var no = j+1;
				var pa0002;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr,
		        	async: false,
		        	success: function(data){
		        		pa0002 = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
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
				
				var pa0366;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0366/"+pernr,
		        	async: false,
		        	success: function(data){
		        		pa0366 = data;
		        		
		        	},
		        	error: function(){
		        		pa0366 = "X";
		        	}
		        });
				var emepc = "";
				var zzpcy = "";
				if(pa0366 != "X"){
					emepc = pa0366.PA0366.emepc;
					zzpcy = pa0366.PA0366.zzpcy;
				}
				
				if(zzpcy != null | zzpcy != ""){
					var zthrbee16;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE16",
			        	async: false,
			        	success: function(data){
			        		zthrbee16 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					for(var t = 0;t < zthrbee16.List.length;t++ ){
						if(zzpcy == zthrbee16.List[t].choice){
							zzpcy = zthrbee16.List[t].chtxt;
						}
						
						if(zzpcy2 == zthrbee16.List[t].choice){
							zzpcy2 = zthrbee16.List[t].chtxt;
						}
						
					}
				}
				var oltxt1 = "";
				var oltxt2 = "";
				var hdtxt = "";
				if(doc.substring(2, 4) == "08"){
					
					$.ajax({
					      	type: "GET",
					      	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Fundx",
					      	async: false,
					      	success: function(data){
					       		TimeScholar = data;
					       		
					       	},
					       	error: function(){
					       		
					       	}
					    });
					
					
					oltxt1 = zzpcy;
					oltxt2 = zzpcy2;
					hdtxt = "เปลี่ยนแปลงกองทุน";
				}
				if(doc.substring(2, 4) == "12"){
					
					$.ajax({
				      	type: "GET",
				      	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReductx",
				      	async: false,
				      	success: function(data){
				       		TimeScholar = data;
				       		
				       	},
				       	error: function(){
				       		
				       	}
				    });
					
					oltxt1 = emepc;
					oltxt2 = emepc2;
					hdtxt = "เปลี่ยนแปลงอัตราสะสม";
				}
				var oItem = new sap.m.ColumnListItem({
					cells : [ 
						new sap.m.Text({text:no}),
						new sap.m.Text({text:this.dateConvert(fund.List[j].bedat)}),
						new sap.m.Text({text:pernr}),
						new sap.m.Text({text:pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn}),
						new sap.m.Text({text:hrp1000.HRP1000.stext}),
						new sap.m.Text({text:hdtxt}),
						new sap.m.Text({text:oltxt1}),
						new sap.m.Text({text:oltxt2}),
						new sap.m.Text({text:this.dateConvert(TimeScholar.TimeScholar.begda)})
					]
				});
				
				var oTable = this.getView().byId("fundTab");
				oTable.addItem(oItem);
				
			}
			
		},
		dateConvert: function(value){
			var c = new Date(value);
			var d = c.getDate().toString().padStart(0,'2');
			var m = (c.getMonth() + 1).toString().padStart(0,'2');
			var y = c.getFullYear().toString().padStart(0,'2');
			
			return [d,m,y].join("/");
		},
		onDateformat: function(value){
			var c = value.split("/");
			var d = c[0].toString().padStart(0,'2');
			var m = c[1].toString().padStart(0,'2');
			var y = c[2].toString().padStart(0,'2');
			
			return [y,m,d].join("");
		}

	});
});