sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageBox',
], function (BaseController, MessageToast, JSONModel,MessageBox) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.CreateUniform", {

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
			
			var day = new Date().getDate().toString().padStart(2,'0');
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var year = new Date().getFullYear();
			var vrqdat = [day,month,year].join("/");
			this.getView().byId("RQDAT").setValue(vrqdat);
			
			this.setModel(oViewModel, "view");
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
			
			if(aItems.length > 2 || total > 2 ){
				
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
	//			this.getView().setModel(new JSONModel(uflist2),"ufData2");
				
				
				
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
	//						}),new sap.m.Select({
	//							items: { 
	//								path: "ufData2>/List", 
	//								template: new sap.ui.core.ListItem({
	//								      key: '{ufData2>usftyp}',
	//								      text: '{ufData2>usftxt}'
	//								})
	//							},
	//							change: [this.onGetvalue, this]
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
			var err;
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/03';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var aedtm = new Date();
				aedtm = aedtm.getDate().toString().padStart(2,'0')+"/"+(aedtm.getMonth()+1).toString().padStart(2,'0')+"/"+(aedtm.getFullYear());
			
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
			
				if(dcid == ""){
				
					var dataPA = $.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		dcrun = data;
			        		
			        	},
			        	error: function(){
			        		err = "X";
			        	}
			        });
					
					if(err == "X"){
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/';
						
						var data = {
								dockey : {
									dotyp : '03',
									module : 'BE'+year+month
								},
								curid : "",
								curno : 0,
								maxno : 999999,
								minno : 1,
						};
						
						data = JSON.stringify(data);
						
						var putdcrun = {
								  "async": false,
								  "crossDomain": true,
								  "url": url,
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
								  "data": data
								}
						
						$.ajax(putdcrun).done(function (response) {
							console.log(response);
							dcrun = response;
						});
					}
					
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
					
					var docid = dcrun.curid;
					
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
					
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอเบิกเครื่องแบบ";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.pernr = "";
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
					
					var rqust = docid;
					var rqdat = this.getView().byId("RQDAT").getValue();
					
					var datax = window.atob(itemList);
					
					var total = this.getView().byId("MAXUNIT").getValue().replace(/,/g,"");
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",itemList:"+itemList+",total:"+total;
					
		
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
					
					this.getView().byId("RQUST").setValue(docid);
						
				}
				
			}
			
		},

		onCancelPressed: function () {
			this.getRouter().navTo("myInfo");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		},
		
		addMore:function(){
          
          
          var content = this.getView().byId("form1").getContent();
          this.getView().byId("form1").addContent(content[0]);
          this.getView().byId("form1").addContent(content[1]);
          this.getView().byId("form1").addContent(content[2]);
          this.getView().byId("form1").addContent(content[3]);
          this.getView().byId("form1").addContent(content[4]);
          this.getView().byId("form1").addContent(content[5]);
          this.getView().byId("form1").addContent(content[6]);

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
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var err;
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/03';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var aedtm = new Date();
				aedtm = aedtm.getDate().toString().padStart(2,'0')+"/"+(aedtm.getMonth()+1).toString().padStart(2,'0')+"/"+(aedtm.getFullYear());
			
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
			
				if(dcid == ""){
				
					var dataPA = $.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		dcrun = data;
			        		
			        	},
			        	error: function(){
			        		err = "X";
			        	}
			        });
					
					if(err == "X"){
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/';
						
						var data = {
								dockey : {
									dotyp : '03',
									module : 'BE'+year+month
								},
								curid : "",
								curno : 0,
								maxno : 999999,
								minno : 1,
						};
						
						data = JSON.stringify(data);
						
						var putdcrun = {
								  "async": false,
								  "crossDomain": true,
								  "url": url,
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
								  "data": data
								}
						
						$.ajax(putdcrun).done(function (response) {
							console.log(response);
							dcrun = response;
						});
					}
					
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
					
					var docid = dcrun.curid;
					
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
					
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอเบิกเครื่องแบบ";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.pernr = "";
					json.userad = pernr;
					json.status = "2";
					json.sttext = "รอรับทราบ";
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
					
					var rqust = docid;
					var rqdat = this.getView().byId("RQDAT").getValue();
					
					var datax = window.atob(itemList);
					
					var total = this.getView().byId("MAXUNIT").getValue().replace(/,/g,"");
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",itemList:"+itemList+",total:"+total;
					
		
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
					
				}else{
					var docid = dcid;
					
					var rqust = docid;
					var rqdat = this.getView().byId("RQDAT").getValue();
					
					var datax = window.atob(itemList);
					
					var total = this.getView().byId("MAXUNIT").getValue().replace(/,/g,"");
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",itemList:"+itemList+",total:"+total;
					
		
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
					
					var json = dchead;
		
					json.status = "2";
					json.sttext = "รอรับทราบ";
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
					
					
					MessageToast.show("Saved");
					
					this.getRouter().navTo("myInfo");
					
				}
			}
		}

	});
});