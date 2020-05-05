sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.PA.EditIdCard", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pa0006 = new JSONModel();
			
			var pernr = user;
			var pa0002 = "";
			var pa0185;
			var titel = "";
			var t522g = "";
			var t535n = "";
			var pa0001;
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
	        
	        if(titel == " " || titel == "0"){
	        	titel = t522g.T522G.atext;
	        }
	        var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
			
			this.byId("PERNR").setText(pernr);
			this.byId("ENAME").setText(cStr);
			
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
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+user+"/01",
	        	async: false,
	        	success: function(data){
	        		pa0185 = data.PA0185;
	        		
	        	},
	        	error: function(){
	        		pa0185 = "X";
	        	}
	        });
			
			if(pa0185 != "X"){
				
				var fpdat = this.onChangeDate(pa0185.fpdat);
				var expid = this.onChangeDate(pa0185.expid);
				var aedtm = this.onChangeDate(pa0185.aedtm);
				
				this.getView().byId("ICNUM").setValue(pa0185.icnum);
				this.getView().byId("AUTH1").setValue(pa0185.auth1);
				this.getView().byId("FPDAT").setValue(fpdat);
				this.getView().byId("EXPID").setValue(expid);
				this.getView().byId("AEDTM").setValue(aedtm);
			}else{
				MessageToast.show("ไม่พบข้อมูลบัตรประชาชน");
				this.getRouter().navTo("myinfo");
			}
			
			this.setModel(oViewModel, "view");
		},
		onChangeDate: function (date){
			var con = new Date(date);
			var d = con.getDate().toString().padStart(2,'0');
			var m = (con.getMonth()+1).toString().padStart(2,'0');
			var y = con.getFullYear();
			var ret = [d,m,y].join("/");
			return ret;
		},
		onChangeDate2: function (date){
			var con = date.split("/");
			var d = con[0];
			var m = con[1];
			var y = con[2];
			var ret = [y,m,d].join("-");
			return ret;
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
			
			var qt = '"';
			
			var pa0001 = new JSONModel();
			var pa0002 = new JSONModel();
			var pa0006 = new JSONModel();
			var pa0185 = new JSONModel();
			var pa0077 = new JSONModel();
			var pa0021 = new JSONModel();
			var pa0022 = new JSONModel();
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			
			var pernr = this.getView().byId("PERNR").getText();
	        var ename = this.getView().byId("ENAME").getText();
	        var icnum = this.getView().byId("ICNUM").getValue();
			var auth1 = this.getView().byId("AUTH1").getValue();
			var fpdat = this.getView().byId("FPDAT").getValue();
			var expid = this.getView().byId("EXPID").getValue();
			var aedtm = this.getView().byId("AEDTM").getValue();
			if(auth1.length == 0 || fpdat.length == 0 || expid.length == 0 || aedtm.length == 0){
				MessageToast.show("Please input all require field");
			}else{
	        
				fpdat = this.onChangeDate2(fpdat);
				expid = this.onChangeDate2(expid);
				aedtm = this.onChangeDate2(aedtm);
		       
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+user+"/01",
		        	async: false,
		        	success: function(data){
		        		pa0185 = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
								
				var json = pa0185.PA0185;
	
				json.icnum = icnum;
				json.auth1 = auth1;
				json.fpdat = fpdat;
				json.expid = expid;
				json.aedtm = aedtm;
				
				json = JSON.stringify(json);
				
				var postdcdetail = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+user+"/01",
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
				
				
				MessageToast.show("Saved");
				
				this.getRouter().navTo("myInfo");
			}
		},

		onCancelPressed: function () {
			this.getRouter().navTo("myInfo");
			//MessageToast.show("ยกเลิก");
		},
		
		onEditPressed: function () {
			MessageToast.show("Edit");
		}
			
		

	});
});