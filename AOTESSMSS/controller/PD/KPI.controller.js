sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'jquery.sap.global', 'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel',
	'sap/m/ResponsivePopover', 'sap/m/MessagePopover', 'sap/m/ActionSheet',
	'sap/m/Button', 'sap/m/Link', 'sap/m/Bar',
	'sap/ui/layout/VerticalLayout', 'sap/m/NotificationListItem',
	'sap/m/MessagePopoverItem', 'sap/ui/core/CustomData', 'sap/m/MessageBox',
	'sap/m/MessageToast',
	'sap/m/Dialog',
	'sap/m/Label',
	'sap/m/Text',
	'sap/ui/layout/HorizontalLayout',
	'sap/m/CheckBox'
], function (BaseController, jQuery, Fragment,
		Controller, JSONModel, ResponsivePopover, MessagePopover, ActionSheet,
		Button, Link, Bar, VerticalLayout, NotificationListItem,
		MessagePopoverItem, CustomData,MessageBox, MessageToast,Dialog,Label,Text,HorizontalLayout,CheckBox) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.PD.KPI", {

		onInit: function () {
			
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
			var t503k;
			var t501;
			
			var pa0105;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0105/"+user,
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
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/91",
	        	async: false,
	        	success: function(data){
	        		pa0021 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
	        
	        dataPA = $.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0187/"+user+"/91",
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
			
			var year = new Date().getFullYear();
			
			var zthrpde22;
			var out = {"List":[]};
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRPDE22/"+user+"/"+"2020",
	        	async: false,
	        	success: function(data){
	        		zthrpde22 = data;
	        	},
	        	error: function(){
	        		zthrpde22 = "X";
	        	}
	        });
			
			if(zthrpde22 != "X"){
				var bool = false;
				var status1 = true;
				var status2 = true;
				if(zthrpde22.ZTHRPDE22.status != null){
					bool = false;
				}else{
					bool = true;
				}
				if(bool == false){
					if(zthrpde22.ZTHRPDE22.status == "1"){
						status2 = false;
					}else{
						status1 = false;
					}
				}
				
				var oItem = new sap.m.ColumnListItem({
					cells : [new sap.m.Text({text : "ประจำปี "+zthrpde22.ZTHRPDE22.zthrpde22key.year}),
							 new sap.m.Text({text : zthrpde22.ZTHRPDE22.grade}),
							 new sap.ui.layout.HorizontalLayout({
								 allowWrapping: true,
									content: [
										new sap.m.Button({
											text : "ยอมรับ",
											press : [ this.onClick, this ],
											id : "btnAcc",
											type : "Accept",
											enabled : bool,
											visible : status1
										}),
										new sap.m.Button({
												text : "ไม่ยอมรับ",
												press : [ this.onClick2, this ],
												id : "btnRej",
												type : "Reject",
												enabled : bool,
												visible : status2
										}) 
									]
							 }),
							 
					]
				});
				
				
				var oTable = this.getView().byId("curApprisal");
				oTable.addItem(oItem);

			}
			
		},
		onClick: function(oEvent){
			
			var btn1 = new Button({
				text: 'ยอมรับ',
				press: function () {
					
					this.onUpdate1();
					dialog.close();
				}.bind(this)
			});

			var btn2 = new Button({
				text: 'ยกเลิก',
				press: function () {
					
					dialog.close();
				}.bind(this)
			});

			var dialog = new Dialog({
				title: 'Confirm',
				type: 'Message',
				content: [
					new HorizontalLayout({
						content: [
							new VerticalLayout({
								content: [
									new Text({ text: "ท่านได้กดยอมรับผลการประเมินเรียบร้อยแล้ว" })
									]
							})
						]
					})
				],
//				beginButton: new Button({
//					text: 'ยอมรับ',
//					press: function () {
//						dialog.close();
//					}
//				}),
				beginButton: btn1,
				endButton: btn2,
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();
			
		},
		onClick2: function(oEvent){
			
			var btn1 = new Button({
							text: 'ยอมรับ',
							press: function () {
								
								this.onUpdate2();
								dialog.close();
							}.bind(this)
						});
			
			var btn2 = new Button({
							text: 'ยกเลิก',
							press: function () {
								
								dialog.close();
							}.bind(this)
						});
						
			var dialog = new Dialog({
				title: 'Confirm',
				type: 'Message',
				content: [
					new HorizontalLayout({
						content: [
							new VerticalLayout({
								content: [
									new Text({ text: "หากท่านไม่ยอมรับ ขอให้ประสานกับผู้ประเมิน " }),
									new Text({ text: "เพื่อทำความตกลงผลการประเมินอีกครั้ง" })
									]
							})
						]
					})
				],
//				beginButton: new Button({
//					text: 'ยอมรับ',
//					press: function () {
//								
//						dialog.close();
//					}
//				}),
				beginButton: btn1,
				endButton: btn2,
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();
			
		},
		onUpdate1: function(){
			
			var oTable = this.getView().byId("curApprisal");
			var items = oTable.mAggregations.items[0].mAggregations.cells[2];
			var item = items.mAggregations.content;
			var btn1 = item[0].setEnabled(false);
			var btn2 = item[1].setEnabled(false);
			item[1].setVisible(false);
			var user = jQuery.sap.getUriParameters().get("user");
			var year = new Date().getFullYear();
			var zthrpde22;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRPDE22/"+user+"/"+year,
	        	async: false,
	        	success: function(data){
	        		zthrpde22 = data;
	        	},
	        	error: function(){
	        		zthrpde22 = "X";
	        	}
	        });
			
			var data = zthrpde22.ZTHRPDE22;
			data.status = "1";
			
			data = JSON.stringify(data);
			var settings = {
					  "async": true,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRPDE22/"+user+"/"+year,
					  "method": "PUT",
					  "headers": {
					    "Content-Type": "application/json",
					    "User-Agent": "PostmanRuntime/7.19.0",
					    "Accept": "*/*",
					    "Cache-Control": "no-cache",
					    "Postman-Token": "22bde39a-fef9-4345-805f-3338f1a7fca4,1256dc48-713a-4cad-8bfe-131902efa51a",
					    "Accept-Encoding": "gzip, deflate",
					    "Connection": "keep-alive",
					    "cache-control": "no-cache"
					  },
					  "processData": false,
					  "data": data
					}

			$.ajax(settings).done(function (response) {
				  console.log(response);
			});
			
		},
		onUpdate2: function(){
			
			var oTable = this.getView().byId("curApprisal");
			var items = oTable.mAggregations.items[0].mAggregations.cells[2];
			var item = items.mAggregations.content;
			var btn1 = item[0].setEnabled(false);
			var btn2 = item[1].setEnabled(false);
			item[0].setVisible(false);
			var user = jQuery.sap.getUriParameters().get("user");
			var year = new Date().getFullYear();
			var zthrpde22;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRPDE22/"+user+"/"+year,
	        	async: false,
	        	success: function(data){
	        		zthrpde22 = data;
	        	},
	        	error: function(){
	        		zthrpde22 = "X";
	        	}
	        });
			
			var data = zthrpde22.ZTHRPDE22;
			data.status = "2";
			
			data = JSON.stringify(data);
			var settings = {
					  "async": true,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRPDE22/"+user+"/"+year,
					  "method": "PUT",
					  "headers": {
					    "Content-Type": "application/json",
					    "User-Agent": "PostmanRuntime/7.19.0",
					    "Accept": "*/*",
					    "Cache-Control": "no-cache",
					    "Postman-Token": "22bde39a-fef9-4345-805f-3338f1a7fca4,1256dc48-713a-4cad-8bfe-131902efa51a",
					    "Accept-Encoding": "gzip, deflate",
					    "Connection": "keep-alive",
					    "cache-control": "no-cache"
					  },
					  "processData": false,
					  "data": data
					}

			$.ajax(settings).done(function (response) {
				  console.log(response);
			});
			
		},
		onBeforeRendering: function() {
			//this.byId('selectedYear').setModel(this.jModel);	
		}
	});
});