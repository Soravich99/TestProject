sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.TimeMainPageFund", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			
			// initial table
			
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
			
			//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
			
			this._data = {
					Members : [{ name: 'aa'}]
					
				};
			this.jModel = new sap.ui.model.json.JSONModel();
			this.jModel.setData(this._data);
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPerson",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var date = new Date(TimeScholar.TimeScholar.begda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("begda3").setValue([d,m,y].join("/"));
			
			var date = new Date(TimeScholar.TimeScholar.endda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("endda3").setValue([d,m,y].join("/"));
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPersonX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var date = new Date(TimeScholar.TimeScholar.begda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("efdat3").setValue([d,m,y].join("/"));
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Fund",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var date = new Date(TimeScholar.TimeScholar.begda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("begda1").setValue([d,m,y].join("/"));
			
			var date = new Date(TimeScholar.TimeScholar.endda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("endda1").setValue([d,m,y].join("/"));
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var date = new Date(TimeScholar.TimeScholar.begda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("efdat1").setValue([d,m,y].join("/"));
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReduct",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var date = new Date(TimeScholar.TimeScholar.begda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("begda2").setValue([d,m,y].join("/"));
			
			var date = new Date(TimeScholar.TimeScholar.endda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("endda2").setValue([d,m,y].join("/"));
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReductX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var date = new Date(TimeScholar.TimeScholar.begda);
			var d = date.getDate().toString().padStart(2,'0');;
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			this.getView().byId("efdat2").setValue([d,m,y].join("/"));
			
			var TimePolicy;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/Fund",
	        	async: false,
	        	success: function(data){
	        		TimePolicy = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			this.getView().byId("text1").setValue(TimePolicy.TimePolicy.text);
			
			var TimePolicy;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundReduct",
	        	async: false,
	        	success: function(data){
	        		TimePolicy = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			this.getView().byId("text2").setValue(TimePolicy.TimePolicy.text);
			
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
			
			this.getView().byId("text3").setValue(TimePolicy.TimePolicy.text);
			
			
//			this.getView().setModel(membersModel);
		},
		onBeforeRendering: function() {
			//this.byId('ins').setModel(this.jModel);	
			//this.byId('leaveHistoryTable').setModel(this.jModel);	
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
		
		onSavePressed1: function () {
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Fund",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave2(this.getView().byId("begda1").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("endda1").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Fund",
					  "method": "PUT",
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
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave(this.getView().byId("efdat1").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("efdat1").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundX",
					  "method": "PUT",
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
			
			var TimePolicy;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/Fund",
	        	async: false,
	        	success: function(data){
	        		TimePolicy = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimePolicy.TimePolicy.text = this.getView().byId("text1").getValue();
			
			var json = JSON.stringify(TimePolicy.TimePolicy);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/Fund",
					  "method": "PUT",
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
			
			MessageToast.show("Saved");
			this.getRouter().navTo("myInfo");
		},
		
		onSavePressed2: function () {
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReduct",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave2(this.getView().byId("begda2").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("endda2").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReduct",
					  "method": "PUT",
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
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReductX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave(this.getView().byId("efdat2").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("efdat2").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReductX",
					  "method": "PUT",
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
			
			var TimePolicy;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundReduct",
	        	async: false,
	        	success: function(data){
	        		TimePolicy = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimePolicy.TimePolicy.text = this.getView().byId("text2").getValue();
			
			var json = JSON.stringify(TimePolicy.TimePolicy);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundReduct",
					  "method": "PUT",
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
			
			MessageToast.show("Saved");
			this.getRouter().navTo("myInfo");
		},
		
		onSavePressed3: function () {
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPerson",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave2(this.getView().byId("begda3").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("endda3").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPerson",
					  "method": "PUT",
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
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPersonX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave(this.getView().byId("efdat3").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("efdat3").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPersonX",
					  "method": "PUT",
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
			
			TimePolicy.TimePolicy.text = this.getView().byId("text3").getValue();
			
			var json = JSON.stringify(TimePolicy.TimePolicy);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundPerson",
					  "method": "PUT",
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
			
			MessageToast.show("Saved");
			this.getRouter().navTo("myInfo");
		},
		onSavePressed4: function () {
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Fund",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave2(this.getView().byId("begda1").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("endda1").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Fund",
					  "method": "PUT",
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
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave(this.getView().byId("efdat1").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("efdat1").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundX",
					  "method": "PUT",
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
			
			var TimePolicy;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/Fund",
	        	async: false,
	        	success: function(data){
	        		TimePolicy = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimePolicy.TimePolicy.text = this.getView().byId("text1").getValue();
			
			var json = JSON.stringify(TimePolicy.TimePolicy);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/Fund",
					  "method": "PUT",
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
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReduct",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave2(this.getView().byId("begda2").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("endda2").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReduct",
					  "method": "PUT",
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
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReductX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave(this.getView().byId("efdat2").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("efdat2").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundReductX",
					  "method": "PUT",
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
			
			var TimePolicy;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundReduct",
	        	async: false,
	        	success: function(data){
	        		TimePolicy = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimePolicy.TimePolicy.text = this.getView().byId("text2").getValue();
			
			var json = JSON.stringify(TimePolicy.TimePolicy);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundReduct",
					  "method": "PUT",
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
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPerson",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave2(this.getView().byId("begda3").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("endda3").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPerson",
					  "method": "PUT",
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
			
			var TimeScholar;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPersonX",
	        	async: false,
	        	success: function(data){
	        		TimeScholar = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			TimeScholar.TimeScholar.begda = this.onDateTosave(this.getView().byId("efdat3").getValue());
			TimeScholar.TimeScholar.endda = this.onDateTosave(this.getView().byId("efdat3").getValue());
			
			var json = JSON.stringify(TimeScholar.TimeScholar);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPersonX",
					  "method": "PUT",
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
			
			TimePolicy.TimePolicy.text = this.getView().byId("text3").getValue();
			
			var json = JSON.stringify(TimePolicy.TimePolicy);
			
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundPerson",
					  "method": "PUT",
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
			
			MessageToast.show("Saved");
			this.getRouter().navTo("myInfo");
		},
		onDateTosave: function(value){
			var date = value.split("/");
			var d = date[0];
			var m = date[1];
			var y = date[2];
			var to = [y,m,d].join("-");
			var go = to+"T16:59:59.000";
			return go;
		},
		onDateTosave2: function(value){
			var date = value.split("/");
			var d = date[0];
			var m = date[1];
			var y = date[2];
			var to = [y,m,d].join("-");
			var go = [to,"T00:00:00.000"].join("");
			return go;
		},
		onCancelPressed: function () {
			MessageToast.show("Cancel");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		},
		
		addMore:function(){
//          this.getView().byId("form1").addContent( new sap.m.Label({ text: "Label C" }) );
//          this.getView().byId("form1").addContent( new sap.m.Input({ type: sap.m.InputType.Text}) );
          var content = this.getView().byId("form1").getContent();
          this.getView().byId("form1").addContent(content);

		},
		
		cloneContentX: function(oEvent){
		    var oForm = this.getView().byId("form1");
		    if (oForm) {
		        oFormClone = oForm.clone();
		        oFormClone.setTitle("");
		        var oHolder = this.getView().byId("contentHolder");
		        if (oHolder) {              
		            //oHolder.removeAllItems();//if you want to remove all the previous added item you can uncomment this line
		            oHolder.addItem(oFormClone);
		        }
		    }
		},
		addRow: function(){
			var name = this.byId("selectedName")._getSelectedItemText();
			var birthDate = this.byId("birthDate").getValue();
			this._data.Members.push({
									name:name,
									birthDate : birthDate});
			this.jModel.refresh();
		},
		cloneContent: function(oEvent){
			var oForm = this.getView().byId("formX");
			if (oForm) {
				var oFormClone = oForm.clone();
				oFormClone.setTitle("");
				var oHolder = this.getView().byId("contentHolder");
				if (oHolder) {
					//oHolder.removeAllItem();
					oHolder.addItem(oFormClone);
				}
			}
		}

	});
});