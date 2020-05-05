sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/m/MessageBox',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast,MessageBox, JSONModel, Fragment, Controller, Filter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TE.TrainingAssignRegistration", {

		onInit: function () {
			
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
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
//			
//			this.getView().byId("KZTIM").setText(manag.PA0001.ename);
//			
//			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+pernr;
//			$.ajax({
//	        	type: "GET",
//	        	url: url,
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
//			$.ajax({
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
//	        if(pa0002.PA0002.namzu != "" && pa0002.PA0002.namzu != " ")
//	        {
//		        $.ajax({
//		        	type: "GET",
//		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T535N/"+pa0002.PA0002.namzu,
//		        	async: false,
//		        	success: function(data){
//		        		t535n = data;
//		        		titel = t535n.T535N.ttout;
//		        	},
//		        	error: function(){
//		        		titel = " ";
//		        	}
//		        });
//	        }else{
//	        	titel = " ";
//	        }
//	        
//	        if(titel == " "){
//	        	titel = t522g.T522G.atext;
//	        }
//	        var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
//			
//			this.byId("pernr").setText(pernr);
//			this.byId("fullname").setText(cStr);

			
			var tedetail;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_detail2/"+docno,
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
			
//			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/l/"+pa0001.PA0001.orgeh;
//			$.ajax({
//	        	type: "GET",
//	        	url: url,
//	        	async: false,
//	        	success: function(data){
//	        		pa0001 = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
			
			var quata;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_quata/"+docno+"/"+pa0001.PA0001.orgeh,
	        	async: false,
	        	success: function(data){
	        		quata = data;
	        	},
	        	error: function(){
	        		quata = "X";
	        	}
	        });
			
			var li = 0;
			var temp = {"List":[]};
			for(var ei=0;ei < quata.List.length;ei++){
				this.getView().byId("quotao").setValue(quata.List[ei].quota+" ที่นั่ง");
				if(quata.List[ei].tequatakey.pernr != pernr){
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+quata.List[ei].tequatakey.pernr,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					quata.List[ei].empId = quata.List[ei].tequatakey.pernr;
					quata.List[ei].empName = pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn;
					temp.List[li] = quata.List[ei];
					li++;
				}
				
			}
			var option = {"List":[
					{text: "เลือก", key:"0"},
					{text: "ตัวจริง", key:"1"},
					{text: "ตัวสำรอง", key:"2"}
				]};
			
			this.getView().setModel(new JSONModel(option),"tretData");
			var oTable = this.getView().byId("empRegis");
			for(var x = 0; x<temp.List.length;x++){
				var btn = new sap.m.Button({
					icon: "sap-icon://search",
					press: [ this.onClickMoreInfo, this],
					text: "ดูข้อมูล"
				});
				btn.data("mydata",temp.List[x].empId);
				var sel = new sap.m.Select({
						items: { 
							path: "tretData>/List", 
							template: new sap.ui.core.ListItem({
							      key: '{tretData>key}',
							      text: '{tretData>text}'
							})
						}
					})
				var oItem = new sap.m.ColumnListItem({
					cells : [
						new sap.m.Text({text : temp.List[x].empId}),
						new sap.m.Text({text : temp.List[x].empName}),
						btn,
						sel,
					]
				});
				
				oTable.addItem(oItem);
				
			}
			
			
			this.jModel = new sap.ui.model.json.JSONModel();
			this.jModel.setData(this._data);
			
			var oModel = new JSONModel("model/EmployeeList.json");
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
			//this.byId('empAssignTable').setModel(this.jModel);	
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
////			MessageToast.show("ท่านได้ลงทะเบียนเรียบร้อยแล้ว ท่านต้องได้รับการอนุมัติจากผู้บังคับบัญชาก่อนรับการฝึกอบรม");
//			this.getView().byId("regisBtn").setText("ลงทะเบียนแล้ว").setEnabled(false);
//			
//			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
//			MessageBox.success(
//				"ท่านได้ลงทะเบียนให้พนักงานเรียบร้อยแล้ว",
//				{
//					styleClass: bCompact ? "sapUiSizeCompact" : ""
//				}
//			);
			
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
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TE' + year + month + '/02';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var pernr = jQuery.sap.getUriParameters().get("user");
			
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
			
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'TE' + year + month + '/02';
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
			
			var docid = dcrun.curid;
			json = dchead;
			json.docid = docid;
			json.module = 'TE';
			json.header = "ลงทะเบียนฝึกอบรม";
			json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
			json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
			json.pernr = pernr;
			json.userad = pernr;
			json.status = "3";
			json.sttext = "อนุมัติ";
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
			
			var oTable = this.getView().byId("empRegis");
			var aItems = oTable.getItems();
			var itemList = "";
			var cell1 = "";
			var cell2 = "";
			var cell3 = "";
			var cell4 = "";
			
			for(var x=0;x < aItems.length;x++){
				var itemData = "";
				var itemRow = aItems[x].getCells();
				for (var i = 0; i<itemRow.length; i++)
				{	
					if(i == 0){
						cell1 = itemRow[i];
						cell1 = cell1.getText();
					}
					else if(i == 3)
					{
						cell4 = itemRow[i]
						cell4 = cell4.getSelectedItem().getKey();
					}
				}
				
				itemData = "seqnr:"+x+",empid:"+cell1+",empstat:"+cell4;
				itemList = itemList + "|" + itemData;
			}
			
			itemList = window.btoa(unescape(encodeURIComponent(itemList)));
			
			var script = "pernr:"+pernr+",c_id:"+c_id+",itemList:"+itemList;
			
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
		},
		deleteRow : function(oArg){
			var deleteRecord = oArg.getSource().getBindingContext().getObject();
			for(var i=0;i<this._data.EmpAssigns.length;i++){
				if(this._data.EmpAssigns[i] == deleteRecord )
						{
						//	pop this._data.EmpAssigns[i] 
							this._data.EmpAssigns.splice(i,1); //removing 1 record from i th index.
							this.jModel.refresh();
							break;//quit the loop
						}
			}
		},
		fetchRecords : function(oArg){
			
			//data will be in this._data.EmpAssigns
			console.log(this._data.EmpAssigns);
			
		},
		addRow: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog", this);
			}

			// Multi-select if required
			this._oDialog.setMultiSelect(true);
			this._oDialog.setRememberSelections(true);

			this.getView().addDependent(this._oDialog);

			// toggle compact style
//			jQuery.sap.syncStyleClass("sacUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
		},

		handleSearch: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("empName", sap.ui.model.FilterOperator.Contains, sValue);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},

		handleClose: function(oEvent) {
			
			var selectedNames;
			
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().empName; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			
			var i;
			for (i = 0; i < selectedNames.length; i++) {
			    this._data.EmpAssigns.push({empName : selectedNames[i] ,status : 0});
			}
			
			this.jModel.refresh();//which will add the new record
			
		},
		onClickRegis: function(oEvent){
			MessageToast.show("ท่านได้ลงทะเบียนพนักงานเรียบร้อยแล้ว ขณะนี้กำลังส่งข้อมูลไปยังหน่วยงานฝึกอบรม");
			oEvent.setEnabled(false);
		},
		onClickMoreInfo:function(value){
			var to = value.getSource().data("mydata");
			this.getRouter().navTo("TE/trainingHistoryView", {from : to});
		}

	});
});