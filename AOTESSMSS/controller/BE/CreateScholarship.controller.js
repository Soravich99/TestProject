sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.CreateScholarship", {

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
			
			var pa9701;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0007",
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
			mod.setSizeLimit(1000);
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
			
			var date = new Date();
	        var d = date.getDate().toString().padStart(2,'0');
	        var m = (date.getMonth() + 1).toString().padStart(2,'0');
	        var y = date.getFullYear();
	        
	        this.getView().byId("RQDAT").setValue([d,m,y].join("/"));	
			
			//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
			
			this._data = {
					Members : [{ name: 'aa'}]
					
				};
			this.jModel = new sap.ui.model.json.JSONModel();
			this.jModel.setData(this._data);
			
//			this.getView().setModel(membersModel);
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

		onSavePressed: function () {
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
				var err;
				var dcrun = new JSONModel();
				var dchead = new JSONModel();
				var dcdetail = new JSONModel();
				
				var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/06';
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
									dotyp : '06',
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
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/06';
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

				json = dchead;
				json.orgeh = "";//wf.List[0].org1;
				json.docid = docid;
				json.module = 'BE';
				json.header = "ขอรับทุนการศึกษา";
				json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
				json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
				json.pernr = parseInt(pa.paPos.manag).toString();
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
				
				var spernr = "pernr:"+pernr;
				var rqust = ",rqust:"+docid;
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
				
				var year = new Date().getFullYear();
				
				var file = this.getView().byId("fileUpload01").oFileUpload.files;
				
				if(file.length > 0){
					this.onReadFile(file,"0001",docid,year);
				}
		
				var file = this.getView().byId("fileUpload02").oFileUpload.files;
				
				if(file.length > 0){
					this.onReadFile(file,"0002",docid,year);
				}
				
				var file = this.getView().byId("fileUpload03").oFileUpload.files;
				
				if(file.length > 0){
					this.onReadFile(file,"0003",docid,year);
				}
				
				MessageToast.show("Saved");
			}
			
			this.getView().byId("RQUST").setValue(docid);
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
				var err;
				var dcrun = new JSONModel();
				var dchead = new JSONModel();
				var dcdetail = new JSONModel();
				
				var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/06';
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
									dotyp : '06',
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
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/06';
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
					
					var wf;
					
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
					
					var spernr = "pernr:"+pernr;
					var rqust = ",rqust:"+docid;
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
					
					var year = new Date().getFullYear();
					
					var file = this.getView().byId("fileUpload01").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
			
					var file = this.getView().byId("fileUpload02").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					
					var file = this.getView().byId("fileUpload03").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0003",docid,year);
					}
					
					MessageToast.show("Saved");
					
					this.getRouter().navTo("myInfo");
					
				}else{
					var docid = dcid;
					
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
					
					var spernr = "pernr:"+pernr;
					var rqust = ",rqust:"+docid;
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
					
					var year = new Date().getFullYear();
					
					var file = this.getView().byId("fileUpload01").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
			
					var file = this.getView().byId("fileUpload02").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					
					var file = this.getView().byId("fileUpload03").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0003",docid,year);
					}
					
					MessageToast.show("Saved");
					
					this.getRouter().navTo("myInfo");
					
				}
				
			}
		},
		onReadFile: function(file,index,docid,year){
			
			var fname = file[0].name;
			var period = fname.lastIndexOf('.');
			var pluginName = fname.substring(0, period);
			var fileExtension = fname.substring(period + 1);
			var curfile = file[0];
			var indexitem = index;
			var base64;
			
			var reader = new FileReader();
		    	reader.onloadend = function () {
		    	base64 = reader.result.split(",");
		    	console.log(reader.result);
		    	
		    	var data = window.atob(base64[1]);
				
		    	
				var json = '{"attachKey":{"docid":"'+docid+'","xyear":"'+year+'","seqnr":"'+indexitem+'"},"xdata":"'+base64[1]+'","xname":"'+pluginName+'","xtype":"'+fileExtension+'"}';
				
				
				var settings = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tbl_Docattach/",
						  "method": "POST",
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

		    };
		    reader.readAsDataURL(curfile);
			
		},
		onCancelPressed: function () {
			this.getRouter().navTo("myinfo");
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