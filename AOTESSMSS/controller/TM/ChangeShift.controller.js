sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast, JSONModel, Fragment, Controller, Filter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TM.ChangeShift", {

		onInit: function () {
			var oViewModel = new JSONModel({
					currentUser: "Administrator",
					lastLogin: new Date(Date.now() - 86400000)
				});
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var pa0002 = "";
			var titel = "";
			var t522g = "";
			var t535n = "";
			this.byId("PERNR").setText(user);
			var pa0001;
			
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
			
			var oModelTypes = new JSONModel("model/leaveTypes.json");
			var t554s = new JSONModel();
			$.ajax({
	        	type: "GET",
	        	url: 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T554S',
	        	async: false,
	        	success: function(data){
	        		t554s = data;
	        		
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
	        
	        if(titel == " "){
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
			
			this.setModel(oViewModel, "view");
			
			//var oModelTypes = new JSONModel("model/leaveTypes.json");
			
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+pernr;
			$.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		pa0001 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/l/"+pa0001.PA0001.orgeh;
			$.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		pa0001 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var li = 0;
			var temp = {"List":[]};
			for(var ei=0;ei < pa0001.List.length;ei++){
				if(pa0001.List[ei].pernr != pernr){
					
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pa0001.List[ei].pernr;
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
					
					pa0001.List[ei].empId = pa0001.List[ei].pernr;
					pa0001.List[ei].empName = pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					temp.List[li] = pa0001.List[ei];
					li++;
				}
				
			}
			
			var emp = {"Employees":[]};
			emp.Employees = temp.List;
			this.getView().setModel(new JSONModel(emp));
			
			// default, don't show tab change
			this.getView().byId("changerDate").setVisible(true);
			this.byId("changeTime").setEnabled(false);
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
		onChangeDate: function(){
			
			var dt = this.byId("DTP2").getValue().split("/");
			var pernr = this.byId("PERNR").getText();
			var date_from = new Date([dt[2],dt[1],dt[0]].join("-"));
			var y = date_from.getFullYear().toString();
			var m = (date_from.getMonth() + 1).toString().padStart(2,'0');
			var d = date_from.getDate().toString().padStart(2,'0');
			var p = this.byId("PERNR").getText();
			var p7;
			var s;
			var e;
			
			var fdate = [y,m,d].join("");
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0007/"+p+"/"+y+"/"+m+"/"+d,
	        	async: false,
	        	success: function(data){
	        		p7 = data.List[0];
	        		
	        	},
	        	error: function(){
	        		p7 = "X";
	        	}
	        });
			if(p7 != "X"){
				s = (p7.sobeg.substring(0, 2)+":"+p7.sobeg.substring(2, 4));
				e = (p7.soend.substring(0, 2)+":"+p7.soend.substring(2, 4));
			}
			
			this.byId("timper").setValue(s+" - "+e);
			this.byId("TPROG").setValue(p7.tprog);
			
			var shift;
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRTME01_SHIFT/"+fdate+"/"+fdate+"/"+pernr;
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
			
			this.getView().byId("ORDNO").setValue(shift.ZTHRTME01_SHIFT.shiftkey.docno);
			
			var s1 = this.getView().byId("a").getSelected();
			if(s1 == true){
				
				this.byId("timper2").setValue("");
				this.byId("TPROG2").setValue("");
				this.getView().byId("ORDNO2").setValue("");
				this.byId("changeTime").setValue("");
				this.byId("PERNO").setValue("");
				this.getView().byId("changer").setValue("");
			}
			
			
		},
		onChangeDate2: function(){
			
			var dt = this.byId("changeTime").getValue().split("/");
			var pernr = this.byId("PERNR").getText();
			var date_from = new Date([dt[2],dt[1],dt[0]].join("-"));
			var y = date_from.getFullYear().toString();
			var m = (date_from.getMonth() + 1).toString().padStart(2,'0');
			var d = date_from.getDate().toString().padStart(2,'0');
			var p7;
			var s;
			var e;
			
			var fdate = [y,m,d].join("");
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0007/"+pernr+"/"+y+"/"+m+"/"+d,
	        	async: false,
	        	success: function(data){
	        		p7 = data.List[0];
	        		
	        	},
	        	error: function(){
	        		p7 = "X";
	        	}
	        });
			if(p7 != "X"){
				s = (p7.sobeg.substring(0, 2)+":"+p7.sobeg.substring(2, 4));
				e = (p7.soend.substring(0, 2)+":"+p7.soend.substring(2, 4));
			}
			
			this.byId("timper2").setValue(s+" - "+e);
			this.byId("TPROG2").setValue(p7.tprog);
			
			var shift;
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRTME01_SHIFT/"+fdate+"/"+fdate+"/"+pernr;
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
			
			this.getView().byId("ORDNO2").setValue(shift.ZTHRTME01_SHIFT.shiftkey.docno);
			
		},
		onSavePressed: function () {
			MessageToast.show("Save was pressed");
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

			if(sItemPath === "สับเปลี่ยนกะ"){
				this.getView().byId("changerDate").setVisible(true);
			}else if(sItemPath === "แทนกะ"){
				this.getView().byId("changerDate").setVisible(false);
			}
		},
		onSendPressed: function () {
			
			var qt = '"';
			
			var pa2003 = new JSONModel();
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var err;
			
			var pernr = this.byId("PERNR").getText();
			var type = this.byId("type").getSelectedButton().getText();
			var dtp2 = this.byId("DTP2").getValue();
			var ordno = this.byId("ORDNO").getValue();
			var perno = this.byId("PERNO").getValue();
			var changer = this.byId("changer").getValue();
			var timper = window.btoa(this.byId("timper").getValue());
			var tprog = this.byId("TPROG").getValue();
			
			var	changeTime = this.byId("changeTime").getValue();
			var	ord2no = this.byId("ORDNO2").getValue();
			var	tim2per = window.btoa(this.byId("timper2").getValue());
			var	tp2rog = this.byId("TPROG2").getValue();
			
			var err_txt = "";
			var s1 = this.getView().byId("a").getSelected();
			if(s1 == true){
				if(tprog == tp2rog || tp2rog != "OFF" || tprog == "OFF"){
					err_txt = "ตารางการทำงานไม่ถูกต้อง";
				}
			}else{
				if(tprog == tp2rog || tp2rog == "OFF" || tprog == "OFF"){
					err_txt = "ตารางการทำงานไม่ถูกต้อง";
				}
			}
				
			
			if(dtp2.length == 0 || changeTime.length == 0 || perno.length == 0 || err_txt.length > 0){
				if(err_txt.length == 0){
					err_txt = "Please input all require field";
				}
				MessageToast.show(err_txt);
			}else{
			
				var script = "pernr:"+pernr+",type:"+type+",dtp2:"+dtp2+",ordno:"+ordno+",perno:"+perno+",changeTime:"+changeTime+",ord2no:"+ord2no+",timper:"+timper+",tim2per:"+tim2per+",tprog:"+tprog+",tp2rog:"+tp2rog+",changer:"+changer;
				
				var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TM' + year + month + '/02';
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
								dotyp : '02',
								module : 'TM'+year+month
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
				json.curid = 'TM' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
				
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TM' + year + month + '/02';
				json = JSON.stringify(json);
				
				var putdcrun = {
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
				var date = new Date();
				date = date.getFullYear() + "-" + ( date.getMonth() +1 ).toString().padStart(2,'0') + "-" + date.getDate().toString().padStart(2,'0');
				var docid = dcrun.curid;
				json = dchead;
				json.docid = docid;
				json.module = 'TM';
				json.header = type;
				json.bedat = date;
				json.aedat = date;
				json.pernr = perno;
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
				
				$.ajax(postdchead).done(function (response) {
					console.log(response);
					dchead = response.tblDocheader;
				});
				
				json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa2003"}';
				
				var postdcdetail = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail",
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
				
				$.ajax(postdcdetail).done(function (response) {
					console.log(response);
					dcdetail = response.tblDocdetail;
				});
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docid,
		        	async: false,
		        	success: function(data){
		        		dcdetail = data.tblDocdetail;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				
				this.getRouter().navTo("MyInfo");
				MessageToast.show("บันทึกคำขอเรียบร้อยแล้ว สามารถตรวจสอบสถานะได้จากเมนู ตรวจสอบการลา");
			}
		},
		searchEmp: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog", this);
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
			var oFilter = new sap.ui.model.Filter([new sap.ui.model.Filter("empName", sap.ui.model.FilterOperator.Contains, sValue),
				  new sap.ui.model.Filter("empId", sap.ui.model.FilterOperator.Contains, sValue)]);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},

		handleClose: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().empName; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().empId; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			this.getView().byId("changer").setValue(selectedNames);
			this.getView().byId("PERNO").setValue(selectedId);
			var s1 = this.getView().byId("a").getSelected();
			if(s1 == true){
				
				this.byId("timper2").setValue("");
				this.byId("TPROG2").setValue("");
				this.getView().byId("ORDNO2").setValue("");
				this.byId("changeTime").setValue("");
				
				var pernr = this.byId("PERNO").getValue();
				this.byId("changeTime").setValue(this.byId("DTP2").getValue());
				var date_from = new Date(this.byId("DTP2").getValue());
				var y = date_from.getFullYear().toString();
				var m = (date_from.getMonth() + 1).toString().padStart(2,'0');
				var d = date_from.getDate().toString().padStart(2,'0');
				var p7;
				var s;
				var e;
				
				var fdate = [y,d,m].join("");
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0007/"+pernr+"/"+y+"/"+d+"/"+m,
		        	async: false,
		        	success: function(data){
		        		p7 = data.List[0];
		        		
		        	},
		        	error: function(){
		        		p7 = "X";
		        	}
		        });
				if(p7 != "X"){
					s = (p7.sobeg.substring(0, 2)+":"+p7.sobeg.substring(2, 4));
					e = (p7.soend.substring(0, 2)+":"+p7.soend.substring(2, 4));
				}
				
				this.byId("timper2").setValue(s+" - "+e);
				this.byId("TPROG2").setValue(p7.tprog);
				
				var shift;
				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRTME01_SHIFT/"+fdate+"/"+fdate+"/"+pernr;
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
				
				this.getView().byId("ORDNO2").setValue(shift.ZTHRTME01_SHIFT.shiftkey.docno);
			}
			
		},
		handleClosex: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().empName; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().empId; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
		},
		onChangeType(){
			var test = this.byId("type").getSelectedButton();
			var sItemPath = this.byId("type").getSelectedButton().getText();
			if(sItemPath === "สับเปลี่ยนกะ"){
				this.getView().byId("changerDate").setVisible(true);
				this.byId("changeTime").setEnabled(true);
			}else if(sItemPath === "แทนกะ"){
				this.getView().byId("changerDate").setVisible(true);
				this.byId("changeTime").setEnabled(false);
			}
		},
		onChangeSwap(){
			var sItemPath = this.byId("selecteSwap").getSelected();
			if(sItemPath){
				this.byId("changeTime").setEnabled(true);
			}else{
				this.byId("changeTime").setEnabled(false);
			}
		}

	});
});