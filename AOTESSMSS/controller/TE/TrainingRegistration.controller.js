sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/m/MessageBox',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast,MessageBox, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TE.TrainingRegistration", {

		onInit: function () {
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
			var pa0804;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0804/"+pernr,
	        	async: false,
	        	success: function(data){
	        		pa0804 = data.PA0804;
	        		
	        	},
	        	error: function(){
	        		pa0804 = "X";
	        	}
	        });
			var smark = this.getView().byId("SMARK");
			if(pa0804 != "X"){
	        	smark.setText(pa0804.smark);
	        }
			
			var pa0002 = "";
			var titel = "";
			var t522g = "";
			var t535n = "";
			
			var pa0001 = "";
			var manag;
			var t501;
			var t503k;
			var pa;
			
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
			
			var managp = parseInt(pa.paPos.manag).toString();
			
			if(managp == pernr){
				managp = parseInt(pa.paPos.upman).toString();
			}
			
			var manag;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+managp,
	        	async: false,
	        	success: function(data){
	        		manag = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T522G/"+manag.PA0002.anred,
	        	async: false,
	        	success: function(data){
	        		t522g = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
	        
	        if(manag.PA0002.namzu != "" && manag.PA0002.namzu != " ")
	        {
		        $.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N/"+manag.PA0002.namzu,
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
			
	        if(titel == " " || titel == "0"){
	        	titel = t522g.T522G.atext;
	        }
			
			var cStr = titel + " " + manag.PA0002.vorna + " " + manag.PA0002.nachn;
	        
			this.getView().byId("KZTIM").setText(cStr);
			
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
			
			this.byId("pernr").setText(pernr);
			this.byId("fullname").setText(cStr);

			
			var tedetail;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_detail/"+docno,
	        	async: false,
	        	success: function(data){
	        		tedetail = data;
	        	},
	        	error: function(){
	        		tedetail = "X";
	        	}
	        });
			
			if(tedetail != "X"){
				
				var output = tedetail.List[0];
				
				this.getView().byId("c_text").setValue(output.c_name);
				this.getView().byId("c_desc").setValue(output.c_name);
				this.getView().byId("c_beg").setValue(this.dateFormat(output.tekey.begda));
				this.getView().byId("c_end").setValue(this.dateFormat(output.tekey.endda));
				this.getView().byId("c_loc").setValue(output.loc);
				this.getView().byId("c_req").setValue(output.req_id);
				
				var d1 = new Date(output.tekey.endda);
				var d2 = new Date(output.tekey.begda);
				var difd = d1-d2;
				
				var total = Math.round(difd/(1000*60*60*24));
				var oTable = this.getView().byId("trainSche");
				var dis = new Date(output.tekey.begda);
				var count = 0;
				for(var i=0;i<=total;i++){
					
					var tim = output.schedu.split("-");
					dis.setDate(dis.getDate()+count);
					if(count == 0){count = 1;}
					var oItem = new sap.m.ColumnListItem({
						cells : [
							new sap.m.Text({text : this.dateFormat2(dis)}),
							new sap.m.Text({text : tim[0]}),
							new sap.m.Text({text : tim[1]}),
						]
					});
					
					oTable.addItem(oItem);
				}
			}
			
			
			var oModel = new JSONModel("model/Tree.json");
			this.getView().setModel(oModel);
			
		},
		dateFormat: function(value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2, '0');
			var m = (date.getMonth() +1).toString().padStart(2, '0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		dateFormat2: function(date){
			var d = date.getDate().toString().padStart(2, '0');
			var m = (date.getMonth() +1).toString().padStart(2, '0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		onBeforeRendering: function() {
			//this.byId('ins').setModel(this.jModel);	
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
			MessageToast.show("Save was pressed");
		},

		onSendPressed: function () {
//			MessageToast.show("ท่านได้ลงทะเบียนเรียบร้อยแล้ว ท่านต้องได้รับการอนุมัติจากผู้บังคับบัญชาก่อนรับการฝึกอบรม");
			
			var qt = '"';
			var pa9703 = new JSONModel();
			var pa9704 = new JSONModel();
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var err;
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TE' + year + month + '/01';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var pernr = this.byId("pernr").getText();
			
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
							dotyp : '01',
							module : 'TE'+year+month
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
			json.curid = 'TE' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
			
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TE' + year + month + '/01';
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
			
			var managp = parseInt(pa.paPos.manag).toString();
			if(managp == pernr){
				managp = parseInt(pa.paPos.upman).toString();
			}
			
			var docid = dcrun.curid;
			json = dchead;
			json.docid = docid;
			json.module = 'TE';
			json.header = "ลงทะเบียนฝึกอบรม";
			json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
			json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
			json.pernr = managp;
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
			
			var complete_url = window.location.href;
			var c_id = complete_url.split("/").pop();
			
			var script = "pernr:"+pernr+",c_id:"+c_id;
			
			json = '{"docid":"'+docid+'","script":"'+script+'","stable":"te_data"}';
			
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
			
			this.getView().byId("regisBtn").setText("ลงทะเบียนแล้ว").setEnabled(false);
			
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.success(
				"ท่านได้ลงทะเบียนเรียบร้อยแล้ว ท่านต้องได้รับการอนุมัติจากผู้บังคับบัญชาก่อนรับการฝึกอบรม",
				{
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
			
			this.getRouter().navTo("myinfo");
		},
		
		onCancelPressed: function () {
			MessageToast.show("Cancel was pressed");
		},
		onMenuAction: function(oEvent) {
			var oItem = oEvent.getParameter("item"),
				sItemPath = "";
			while (oItem instanceof sap.m.MenuItem) {
				sItemPath = oItem.getText() + " > " + sItemPath;
				oItem = oItem.getParent();
			}

			sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

			sap.m.MessageToast.show("Action triggered on item: " + sItemPath);
			
			if(sItemPath === "สับเปลี่ยนเวร"){
				this.getView().byId("changerDate").setVisible(true);
			}else if(sItemPath === "แทนเวร"){
				this.getView().byId("changerDate").setVisible(false);
			}
		}

	});
});