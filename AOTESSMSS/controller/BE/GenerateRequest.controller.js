sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageBox',
], function (BaseController, MessageToast, JSONModel,MessageBox) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.GenerateRequest", {

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
		},
		onAdd : function(oEvent) {
			
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
			
			
			
			this.getView().setModel(new JSONModel(uflist),"ufData");
			this.getView().setModel(new JSONModel(uflist2),"ufData2");
			
			
			
			var oItem = new sap.m.ColumnListItem({
			//cells : [ new sap.m.Select(), new sap.m.Select(), new sap.m.Input(), new sap.m.Input(), new sap.m.Button()
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
							items: { 
								path: "ufData2>/List", 
								template: new sap.ui.core.ListItem({
								      key: '{ufData2>usftyp}',
								      text: '{ufData2>usftxt}'
								})
							},
							change: [this.onGetvalue, this]
						}), new sap.m.Input({change: [this.inputAmt, this]}), new sap.m.Input({change: [this.inputAmt, this]}),
							new sap.m.Button({
								text : "Delete",
								press : [ this.remove, this ]
							}) 
				]
			});
			var oTable = this.getView().byId("idTab01");
			
			oTable.addItem(oItem);
		},
		deleteRow : function(oEvent) {
			var oTable = this.getView().byId("idTab01");
			
			oTable.removeItem(oEvent.getParameter("listItem"));
		},
		inputAmt: function(){
			 
			var value1 = this.getView().byId("MAXUNIT01").getValue();
			var value2 = this.getView().byId("MAXUNIT02").getValue();
			
			var price1 = this.getView().byId("MAXRATE01").getValue();
			var price2 = this.getView().byId("MAXRATE02").getValue();
			
			if (value1 == ""){value1 = 0;}
			if (value2 == ""){value2 = 0;}
			if (price1 == ""){price1 = 0;}
			if (price2 == ""){price2 = 0;}
			
			var total = (parseInt(value1) * parseFloat(price1)) + (parseInt(value2) * parseFloat(price2));
			
			this.getView().byId("MAXUNIT").setValue(total);
			
			
			
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
		onSetusf : function(oEvent) {
			var item = oEvent.getSource().getParent();
			var cells = item.getCells();
			var cell1 = cells[0].getSelectedItem();
			var cell2 = cells[1];
			
			var uflist2;
			var uftemp = {"List":[]};
			var ci = 0;
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
			
			cell2 = new sap.m.Select({
				items: { 
					path: "ufData2>/List", 
					template: new sap.ui.core.ListItem({
					      key: '{ufData2>usftyp}',
					      text: '{ufData2>usftxt}'
					})
				}});
			
			var cell3 = cells[2];
			var cell4 = cells[3];
			
			cell3.setValue(max);
			cell4.setValue(rate);
			
			var test;
		},
		onGetvalue : function(oEvent) {
			
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
			
			var pernr = this.byId("PERNR").getText();
			
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
			
			var uftype01 = this.getView().byId("UFTYPE01").getSelectedItem().getKey();
			var uftype02 = this.getView().byId("UFTYPE02").getSelectedItem().getKey();
			
			var uftype01t = this.getView().byId("UFTYPE01").getSelectedItem().getText();
			var uftype02t = this.getView().byId("UFTYPE02").getSelectedItem().getText();
			
			var ufstyp01 = this.getView().byId("UFSTYP01").getSelectedItem().getKey();
			var ufstyp02 = this.getView().byId("UFSTYP02").getSelectedItem().getKey();
			
			var ufstyp01t = this.getView().byId("UFSTYP01").getSelectedItem().getText();
			var ufstyp02t = this.getView().byId("UFSTYP02").getSelectedItem().getText();
			
			var value1 = this.getView().byId("MAXUNIT01").getValue();
			var value2 = this.getView().byId("MAXUNIT02").getValue();
			
			var price1 = this.getView().byId("MAXRATE01").getValue();
			var price2 = this.getView().byId("MAXRATE02").getValue();
			
			var total = this.getView().byId("MAXUNIT").getValue();
			var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",uftype01:"+uftype01+",uftype01t:"+uftype01t+",uftype02:"+uftype02+",uftype02t:"+uftype02t+",ufstyp01:"+ufstyp01+",ufstyp01t:"+ufstyp01t+",ufstyp02:"+ufstyp02+",ufstyp02t:"+ufstyp02t+",maxunit01:"+value1+",maxunit02:"+value2+",maxrate01:"+price1+",maxrate02:"+price2+",maxunit:"+total;
			
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
			
			
			this.getView().byId("RQUST").setValue(docid);
			
			MessageToast.show("Saved");
			
			
			//this.getRouter().navTo("myInfo");
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
			
			var pernr = this.byId("PERNR").getText();
			var dcid = this.getView().byId("RQUST").getValue();
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
				
			}else{
				var docid = dcid;
			}
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
			
			
			json = dchead;
			json.docid = docid;
			json.module = 'BE';
			json.header = "ขอเบิกเครื่องแบบ";
			json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
			json.aedat = "9999-12-31";
			json.pernr = "4600146";
			json.userad = pernr;
			json.status = "2";
			json.sttext = "รออนุมัติ";
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
			var uftype01 = this.getView().byId("UFTYPE01").getSelectedItem().getKey();
			var uftype02 = this.getView().byId("UFTYPE02").getSelectedItem().getKey();
			
			var uftype01t = this.getView().byId("UFTYPE01").getSelectedItem().getText();
			var uftype02t = this.getView().byId("UFTYPE02").getSelectedItem().getText();
			
			var ufstyp01 = this.getView().byId("UFSTYP01").getSelectedItem().getKey();
			var ufstyp02 = this.getView().byId("UFSTYP02").getSelectedItem().getKey();
			
			var ufstyp01t = this.getView().byId("UFSTYP01").getSelectedItem().getText();
			var ufstyp02t = this.getView().byId("UFSTYP02").getSelectedItem().getText();
			
			var value1 = this.getView().byId("MAXUNIT01").getValue();
			var value2 = this.getView().byId("MAXUNIT02").getValue();
			
			var price1 = this.getView().byId("MAXRATE01").getValue();
			var price2 = this.getView().byId("MAXRATE02").getValue();
			
			var total = this.getView().byId("MAXUNIT").getValue();
			var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",uftype01:"+uftype01+",uftype01t:"+uftype01t+",uftype02:"+uftype02+",uftype02t:"+uftype02t+",ufstyp01:"+ufstyp01+",ufstyp01t:"+ufstyp01t+",ufstyp02:"+ufstyp02+",ufstyp02t:"+ufstyp02t+",maxunit01:"+value1+",maxunit02:"+value2+",maxrate01:"+price1+",maxrate02:"+price2+",maxunit:"+total;
			

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
		onTypeChange: function(){
			var user = jQuery.sap.getUriParameters().get("user");
			var doctype = this.byId("docType").getSelectedItem().getKey();
			var docData;
			if(doctype == "1"){
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdata/"+user+"/BE/2/BE02",
		        	async: false,
		        	success: function(data){
		        		docData = data;
		        		
		        	},
		        	error: function(){
		        		docData = "X"
		        	}
		        }); 
			}
			
			this.byId("idTab01").setModel(new JSONModel(docData),"docList");
		},
		onGenerate: function(){
			
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'DOC' + year + month + '/99';
			var year_budish = (year + 0).toString().substring(2,4); 
			
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
							dotyp : '08',
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
			json.curid = 'DOC' + year_budish + month + json.curno.toString().padStart(5,'0');
			
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'DOC' + year + month + '/99';
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
			
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pa0001;
			var pa0002;
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			var doc = new jsPDF("p","pt","a4");
			var test =  doc.getFontList();
			doc.addFont('tahoma.ttf', 'Tahoma', 'normal');
			doc.addFont('tahoma.ttf', 'Tahoma', 'bold');
	        doc.setFont('Tahoma');
	        var test =  doc.getFontList();
	        doc.setFontType("bold");
	        doc.setFontSize(16);
			doc.text(260, 40, 'ใบนำส่งเอกสาร');
			var date = new Date();
			var dstr = date.getDate().toString().padStart(2,'0')+"/"+(date.getMonth() + 1).toString().padStart(2,'0')+"/"+date.getFullYear().toString();
			doc.setFontType("normal");
			doc.setFontSize(9);
			doc.text(380, 60, "วันที่ : "+dstr);
			var docgen = docid;
			doc.text(460, 60, "เลขที่ : "+docid);
			
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
			
			var enam = this.getView().byId("ENAME").getText();
			
			var cStr = "ชื่อบุคคล : "+enam+"     "+"รหัสบุคคล : "+user;
			doc.text(30, 80, cStr);
			
			doc.text(30, 100, "ลำดับ");
			doc.text(90, 100, "เลขที่คำขอ");
			doc.text(180, 100, "วันที่ ");
			doc.text(250, 100, "เรื่อง");
			doc.text(340, 100, "ผู้ใช้สิทธิ์ ");
			doc.text(440, 100, "จำนวนเงิน");
			
			var table = this.byId("idTab01");
			var items = table.getSelectedItems();
			
			for(var c=0; c<items.length;c++){
				
				var itemRow = items[c].getCells();
				var docno;
				for (var i = 0; i<itemRow.length; i++)
				{
					if(i == 0){
						var cell1 = itemRow[i];
						docno = cell1.getText();
					}
				}
				
				var doctype = this.byId("docType").getSelectedItem().getKey();
				var docData;
				if(doctype == "1"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdata/s/"+docno+"/BE/2",
			        	async: false,
			        	success: function(data){
			        		docData = data.tblDocdata;
			        		
			        	},
			        	error: function(){
			        		docData = "X"
			        	}
			        }); 
				}
				
				var date = new Date(docData.bedat);
				
				var d = date.getDate().toString().padStart(2,'0');
				var m = (date.getMonth()+1).toString().padStart(2,'0');
				var yr = date.getFullYear().toString();
				
				var script = docData.script;
				var pa9703_arr = script.split(",");
				var arrayLength = pa9703_arr.length;
				var famsa = "";
				var anzhl03 = 0;
				var totval = 0;
				for (var v = 0; v < arrayLength; v++) {
					
					var fieldar = pa9703_arr[v].split(":");
					var field = fieldar[0];
					
					if(field.includes("famsa") == true){ famsa = pa9703_arr[v].split(":").pop(); }
					if(field.includes("anzhl03") == true){ anzhl03 = pa9703_arr[v].split(":").pop().replace(",",""); }
					if(field.includes("totval") == true){ totval = pa9703_arr[v].split(":").pop().replace(",",""); }
				}
				
				var y = 100+((c+1)*20);
				
				doc.text(30, y, (c+1).toString());
				doc.text(90, y, docno);
				doc.text(180, y, [d,m,yr].join("/"));
				doc.text(250, y, "เบิกค่ารักษาพยาบาล");
				doc.text(340, y, JSON.parse(decodeURIComponent(escape(window.atob(famsa)))).ename);
				doc.text(440, y, oNumberFormat.format((parseFloat(anzhl03)+parseFloat(totval))).toString());
				
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
				
				script = script + ",srqno:"+docgen;
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
				
			}
			
			
			//var qrurl = 'http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=PERNR:'+user+'/DOCID:'+"DOC"+user+dstr+'';	
			
			var qrurl = 'http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=AOT01'+'0012'+'000000'+docid+yr+'001';	
			
			// get the qr div, then find the canvas element inside it

			//var test = this.byId("test01");
			//this.byId("qrImageId").setSrc(qrurl);
			
			var Spliturl = qrurl;
		    var split = Spliturl.slice(0, 169);
		    var Parameters = Spliturl.split("chl=");
		    var values = Parameters[1];
		    var Fianlvalues = values.split("/");
			
//		    var qrcode = new QRCode(document.getElementById("__xmlview1--canvas"), {
//			    width: 128,
//			    height: 128,
//			    colorDark : "#000000",
//			    colorLight : "#ffffff"
//			});
//			
//		    values = values.replace(/[/:]/g, "");
//			var testImage = qrcode.makeCode(values);
//		      
//	        var Imagex = qrcode._oDrawing._el.children[1].currentSrc;
//	        this.getView().byId("result").setSrc(Imagex);
		    
		    var convertImgToDataURLviaCanvas = function(url, callback) {
		    	var img = new Image();
	               	img.crossOrigin = 'Anonymous';
	               	img.onload = function() {
	               		var canvas = document.createElement('CANVAS');
	               		var ctx = canvas.getContext('2d');
	               		var dataURL;
	               		canvas.height = this.height;
	               		canvas.width = this.width;
	               		ctx.drawImage(this, 0, 0);
	               		dataURL = canvas.toDataURL();
	               		callback(dataURL);
	               		canvas = null;
	               	};
	               	img.src = url;
		    };
			var imgobj;
		    convertImgToDataURLviaCanvas(split,function(base64_data){
		    	console.log(base64_data);
		    	imgobj = base64_data;
		    	doc.addImage(imgobj, 'JPEG', 2, 2, 70, 70);
		    	var fileUrl = doc.output('bloburl');
				window.open(fileUrl);
		    });
		    
		    
		    
			//doc.save("test01.pdf");
			//var fileUrl = doc.output('bloburl');
			//window.open(fileUrl);
			//doc.save("test01.pdf");
			         
			
		}
		

	});
});