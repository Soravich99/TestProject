sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.MedicalBenefit", {

		onInit: function () {
			
//			this.oModel = new JSONModel("model/BEtemplate.json");
//			this.oTable = this.byId("idTab01");
//			this.getView().setModel(this.oModel);
//			this.oReadOnlyTemplate = this.byId("idTab01").removeItem(0);
//			this.rebindTable(this.oReadOnlyTemplate, "Navigation");
//			this.oEditableTemplate = new sap.m.ColumnListItem({
//				cells: [
//					new sap.m.Input({
//						value: "{EETYP03}"
//					}), new sap.m.Input({
//						value: "{REAMT03}"
//					}), new sap.m.Input({
//						value: "{RIAMT03}"
//					}), new sap.m.Input({
//						value: "{RMRK103}"
//					})
//				]
//			});
//			
			
//			var data = jQuery.sap.getUriParameters().get("lqex");
//			var decd = "";
//			var settings = {
//					  "async": false,
//					  "crossDomain": true,
//					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//					  "method": "POST",
//					  "headers": {
//					    "Content-Type": "application/json",
//					    "Accept": "*/*",
//					    "Cache-Control": "no-cache",
//					    "Host": "10.121.3.62:8083",
//					    "accept-encoding": "gzip, deflate",
//					    "Connection": "keep-alive",
//					    "cache-control": "no-cache"
//					  },
//					  "processData": false,
//					  "data": data
//					}
//
//				$.ajax(settings).done(function (response) {
//				  console.log(response); 
//				  decd = response;
//				});
//			
//			
//			var itex = decd.split("|");
//			var user = itex[0];
			
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
			
//			var hospital = new JSONModel();
//			
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED",
//	        	async: false,
//	        	success: function(data){
//	        		hospital = data;
//	        		
//	        	},
//	        	error: function(){
//	        		
//	        	}
//	        });
//			
//			this.getView().setModel(new JSONModel(hospital),"hosItem");
			
			var dsese = new JSONModel();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED02B",
	        	async: false,
	        	success: function(data){
	        		dsese = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var lenx = dsese.List.length;
			var deitm = new JSONModel(dsese);
			deitm.setSizeLimit(lenx);
			this.getView().setModel(deitm,"dseseItem");
			
			var inti = {"Dsese":[]};
			inti.Dsese = dsese.List;
			var mod = new JSONModel(inti);
			mod.setSizeLimit(lenx);
			this.getView().setModel(mod);
		
			var y = new Date().getFullYear();
			var m = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var d = new Date().getDate();
			
			this.getView().byId("RQDAT").setValue(d+"/"+m+"/"+y);
			
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
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0002",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			var skip = "";
			var elclp = "";
			for(var x = 0;x<pa9701.List.length;x++){
				if(elclp != pa9701.List[x].elclp){
					elclp = pa9701.List[x].elclp;
					if(elclp != skip){
						var tt = temp.List.length;
						temp.List[tt] = pa9701.List[x];
						temp.List[tt].text = pa9701.List[x].eltxt;
						temp.List[tt].key = pa9701.List[x].elclp;
					}
				}
				
			}
			
			this.getView().setModel(new JSONModel(temp),"elclpItem");
			
			var oModel = new JSONModel("model/Benefit.json");
			this.getView().setModel(oModel);
			
			
		},
		searchEmp: function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog3", this);
			}

			// Multi-select if required
//			this._oDialog.setMultiSelect(true);
//			this._oDialog.setRememberSelections(true);

			this.getView().addDependent(this._oDialog);

			// toggle compact style
//			jQuery.sap.syncStyleClass("sacUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
		},
		searchDSG: function(oEvent) {
			if (!this._oDialog2) {
				this._oDialog2 = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.dialog.Dialog4", this);
			}

			// Multi-select if required
//			this._oDialog.setMultiSelect(true);
//			this._oDialog.setRememberSelections(true);

			this.getView().addDependent(this._oDialog2);

			// toggle compact style
//			jQuery.sap.syncStyleClass("sacUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog2.open();
		},
		handleSearch: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new sap.ui.model.Filter([new sap.ui.model.Filter("hcode", sap.ui.model.FilterOperator.Contains, sValue),
				new sap.ui.model.Filter("hname", sap.ui.model.FilterOperator.Contains, sValue),
				]);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},
		handleSearch2: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new sap.ui.model.Filter([new sap.ui.model.Filter("dsese", sap.ui.model.FilterOperator.Contains, sValue),
				new sap.ui.model.Filter("dstxt", sap.ui.model.FilterOperator.Contains, sValue),
				]);
			
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},
		handleClose: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().hname; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().hcode; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			this.getView().byId("HNAME").setSelectedKey(selectedId);
			if(selectedId == "0000000000"){
				this.getView().byId("OTHTY").setEnabled(true);
			}else{
				this.getView().byId("OTHTY").setEnabled(false);
			}
			
		},
		handleClosex: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().hname; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().hcode; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
		},
		handleClose2: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().dstxt; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().dsese; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
			this.getView().byId("DSESE").setSelectedKey(selectedId);
			
		},
		handleClosex2: function(oEvent) {
			
			var selectedNames;
			var selectedId;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				selectedNames = aContexts.map(function(oContext) { return oContext.getObject().dstxt; });
			}
			if (aContexts && aContexts.length) {
				selectedId = aContexts.map(function(oContext) { return oContext.getObject().dsese; });
			}
			oEvent.getSource().getBinding("items").filter([]);
			
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
//			var data = jQuery.sap.getUriParameters().get("lqex");
//			var decd = "";
//			var settings = {
//					  "async": false,
//					  "crossDomain": true,
//					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//					  "method": "POST",
//					  "headers": {
//					    "Content-Type": "application/json",
//					    "Accept": "*/*",
//					    "Cache-Control": "no-cache",
//					    "Host": "10.121.3.62:8083",
//					    "accept-encoding": "gzip, deflate",
//					    "Connection": "keep-alive",
//					    "cache-control": "no-cache"
//					  },
//					  "processData": false,
//					  "data": data
//					}
//
//				$.ajax(settings).done(function (response) {
//				  console.log(response); 
//				  decd = response;
//				});
//			
//			
//			var itex = decd.split("|");
//			var user = itex[0];
			var user = jQuery.sap.getUriParameters().get("user");
			var typeKey = this.byId("CLMTY").getSelectedKey();
			
			if(typeKey == "1"){
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				if(subty == "0001" || subty == "0002"){
					var oTable = this.getView().byId("idTab01");
				}else if(subty == "0003"){
					var oTable = this.getView().byId("idTab05");
				}
				var aItems = oTable.getItems();
				
				var cell1 = "";
				var cell2 = "";
				var cell3 = "";
				var cell4 = "";
				var cell5 = "";
				var cell6 = "";
				
				var itemList = "";
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
							cell2 = cell2.getValue().replace(",","");
						}
						else if(i == 2)
						{
							cell3 = itemRow[i]
							cell3 = cell3.getValue().replace(",","");
						}
						else if(i == 3)
						{
							cell4 = itemRow[i]
							cell4 = cell4.getValue().replace(",","");
						}
						else if(i == 4)
						{
							cell5 = itemRow[i]
							cell5 = cell5.getValue().replace(",","");
						}
						else if(i == 5)
						{
							cell6 = itemRow[i]
							cell6 = cell6.getValue().replace(",","");
						}
					}
					
					itemData = "seqnr:"+x+",eetyp03:"+cell1+",reamt03:"+cell2+",riamt03:"+cell3;
					itemData = itemData + ",cleamt03:"+cell4+",cleamt103:"+cell5+",rmrk103:"+cell6;
					itemList = itemList + "|" + itemData;
				}
				
				itemList = window.btoa(itemList);
				
				
				var datax = window.atob(itemList);
				var qt = '"';
				var pa9703 = new JSONModel();
				var pa9704 = new JSONModel();
				var dcrun = new JSONModel();
				var dchead = new JSONModel();
				var dcdetail = new JSONModel();
				
				var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
				var year_budish = (year + 0).toString().substring(2,4); 
				var script = "";
				
				var pernr = this.byId("PERNR").getText();
				var err;
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
				
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
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
				
				var hcode = this.byId("HNAME").getSelectedKey();
				var zthrmed;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED/"+hcode,
		        	async: false,
		        	success: function(data){
		        		zthrmed = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				if(typeKey == "1"){
					if(zthrmed.ZTHRMED.hspcl == "X"){
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}else{
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/2",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}
					
					
				}else {
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}
				
				json = dchead;
				json.orgeh = wf.List[0].org1;
				json.docid = docid;
				json.module = 'BE';
				json.header = "ขอเบิกค่ารักษาพยาบาล";
				json.ltext1 = "รัฐบาล";
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
				
				var rqust = dcrun.curid;
				var rqdat = new Date().getDate().toString() + "/" + month + "/" + year;
				var clmty = this.byId("CLMTY").getSelectedKey();
				var subty = this.byId("SUBTY").getSelectedKey();
				var elclp = this.byId("ELCLP").getSelectedKey();
				var famsa = this.byId("FAMSA").getSelectedKey();
				var jobtl = ",jobtl:"+this.byId("JOBTL").getValue(jobtl);
				var fgbdt = ",fgbdt:"+this.byId("FGBDT").getValue(fgbdt);
				var age = ",age:"+this.byId("AGE").getValue(age);
				var vstno = this.byId("VSTNO").getValue();
				var htype = this.byId("HTYPE").getSelectedKey();
				var hname = this.byId("HNAME").getSelectedKey();
				var othty = this.byId("OTHTY").getValue();
				var dsese = this.byId("DSESE").getSelectedKey();
				var otdse = this.byId("OTDSE").getValue();
				var dsgrp = this.byId("DSGRP").getSelectedKey();
				var otdsg = this.byId("OTDSG").getValue();
				var rcpt1 = this.byId("RCPT1").getValue();
				var rcdat = this.byId("RCDAT").getValue();
				var tbdat = this.byId("TBDAT").getValue();
				var tcdat = this.byId("TEDAT").getValue();
				var tdays = this.byId("TDAYS").getValue();
				if (subty == "0001" | subty == "0002")
				{
					var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
					var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
					
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
				}
				else if(subty == "0003")
				{
					var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
					var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
					
					var txinv = this.byId("TXINV").getValue();
					var shtxid = this.byId("SHTXID").getValue();
					var shnam = this.byId("SHNAM").getValue();
					var shbrnc = this.byId("SHBRNC").getValue();
					var shpad = this.byId("SHPAD").getValue();
					var shpad2 = this.byId("SHPAD2").getValue();
					
					var txdat = this.byId("TXDAT").getValue();
					var shpos = this.byId("SHPOS").getValue();
					var shcut = this.byId("SHCUT").getValue();
					
					var nvamt = this.byId("NVAMT").getValue().replace(",","");
					var vtamt = this.byId("VTAMT").getValue().replace(",","");
					var totval = this.byId("totVal").getValue().replace(",","");
					
					anzhl03 = totval;
					smamt03 = totval;
					
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
					
					script = script + ",txinv:"+txinv+",shtxid:"+shtxid+",shnam:"+shnam+",shpad:"+shpad+",shpax:"+shpad2+",shbrnc:"+shbrnc;
					script = script + ",nvamt:"+nvamt+",vtamt:"+vtamt+",totval:"+totval;
					script = script + ",txdat:"+txdat+",shpos:"+shpos+",shcut:"+shcut;
				}
						
				script = script+jobtl+fgbdt+age;
				
				json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9703"}';
				
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
				if(subty == "0001" || subty == "0002"){
					var file = this.getView().byId("file01").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file02").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					var file = this.getView().byId("file03").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0003",docid,year);
					}
					var file = this.getView().byId("file04").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0004",docid,year);
					}
					var file = this.getView().byId("file05").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0005",docid,year);
					}
				}
				if(subty == "0003"){
					var file = this.getView().byId("file06").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file07").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					var file = this.getView().byId("file08").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0003",docid,year);
					}
					var file = this.getView().byId("file09").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0004",docid,year);
					}
					var file = this.getView().byId("file10").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0005",docid,year);
					}
				}
			}else if(typeKey == "2"){
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				var oTable = this.getView().byId("idTab02");
				
				var aItems = oTable.getItems();
				
				var cell1 = "";
				var cell2 = "";
				var cell3 = "";
				var cell4 = "";
				var cell5 = "";
				var cell6 = "";
				
				var itemList = "";
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
							cell2 = cell2.getValue().replace(",","");
						}
						else if(i == 2)
						{
							cell3 = itemRow[i]
							cell3 = cell3.getValue().replace(",","");
						}
						else if(i == 3)
						{
							cell4 = itemRow[i]
							cell4 = cell4.getValue().replace(",","");
						}
						else if(i == 4)
						{
							cell5 = itemRow[i]
							cell5 = cell5.getValue().replace(",","");
						}
	
					}
					
					itemData = "seqnr:"+x+",eetyp03:"+cell1+",reamt03:"+cell2+",riamt03:"+cell3;
					itemData = itemData + ",cleamt03:"+cell4+",cleamt103:"+cell5+",rmrk103:"+cell5;
					itemList = itemList + "|" + itemData;
				}
				
				itemList = window.btoa(itemList);
				
				
				var datax = window.atob(itemList);
				var qt = '"';
				var pa9703 = new JSONModel();
				var pa9704 = new JSONModel();
				var dcrun = new JSONModel();
				var dchead = new JSONModel();
				var dcdetail = new JSONModel();
				
				var year = new Date().getFullYear();
				var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
				var date = new Date().getDate();
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
				var year_budish = (year + 0).toString().substring(2,4); 
				var script = "";
				
				var pernr = this.byId("PERNR").getText();
				var err;
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
				
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
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
				
				var hcode = this.byId("HNAME").getSelectedKey();
				var zthrmed;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED/"+hcode,
		        	async: false,
		        	success: function(data){
		        		zthrmed = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				if(typeKey == "1"){
					if(zthrmed.ZTHRMED.hspcl == "X"){
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}else{
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/2",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}
					
					
				}else {
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}
				
				json = dchead;
				json.orgeh = wf.List[0].org1;
				json.docid = docid;
				json.module = 'BE';
				json.header = "ขอเบิกค่ารักษาพยาบาล";
				json.ltext1 = "เอกชน";
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
				
				var rqust = dcrun.curid;
				var rqdat = new Date().getDate().toString() + "/" + month + "/" + year;
				var clmty = this.byId("CLMTY").getSelectedKey();
				var subty = this.byId("SUBTY").getSelectedKey();
				var elclp = this.byId("ELCLP").getSelectedKey();
				var famsa = this.byId("FAMSA").getSelectedKey();
				var jobtl = ",jobtl:"+this.byId("JOBTL").getValue(jobtl);
				var fgbdt = ",fgbdt:"+this.byId("FGBDT").getValue(fgbdt);
				var age = ",age:"+this.byId("AGE").getValue(age);
				var vstno = this.byId("VSTNO").getValue();
				var htype = this.byId("HTYPE").getSelectedKey();
				var hname = this.byId("HNAME").getSelectedKey();
				var othty = this.byId("OTHTY").getValue();
				var dsese = this.byId("DSESE").getSelectedKey();
				var otdse = this.byId("OTDSE").getValue();
				var dsgrp = this.byId("DSGRP").getSelectedKey();
				var otdsg = this.byId("OTDSG").getValue();
				var rcpt1 = this.byId("RCPT1").getValue();
				var rcdat = this.byId("RCDAT").getValue();
				var tbdat = this.byId("TBDAT").getValue();
				var tcdat = this.byId("TEDAT").getValue();
				var tdays = this.byId("TDAYS").getValue();
				if (subty == "0001" | subty == "0002")
				{
					var anzhl03 = this.byId("ANZHL04").getValue().replace(",","");
					var smamt03 = this.byId("SMAMT04").getValue().replace(",","");
					
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
				}
				else if(subty == "0003")
				{
					var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
					var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
					
					var txinv = this.byId("TXINV").getValue();
					var shtxid = this.byId("SHTXID").getValue();
					var shnam = this.byId("SHNAM").getValue();
					var shbrnc = this.byId("SHBRNC").getValue();
					var shpad = this.byId("SHPAD").getValue();
					var shpad2 = this.byId("SHPAD2").getValue();
					
					var txdat = this.byId("TXDAT").getValue();
					var shpos = this.byId("SHPOS").getValue();
					var shcut = this.byId("SHCUT").getValue();
					
					var nvamt = this.byId("NVAMT").getValue().replace(",","");
					var vtamt = this.byId("VTAMT").getValue().replace(",","");
					var totval = this.byId("totVal").getValue().replace(",","");
					
					anzhl03 = totval;
					smamt03 = totval;
					
					var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
					
					script = script + ",txinv:"+txinv+",shtxid:"+shtxid+",shnam:"+shnam+",shpad:"+shpad+",shpax:"+shpad2+",shbrnc:"+shbrnc;
					script = script + ",nvamt:"+nvamt+",vtamt:"+vtamt+",totval:"+totval;
					script = script + ",txdat:"+txdat+",shpos:"+shpos+",shcut:"+shcut;
				}
						
				script = script+jobtl+fgbdt+age;
				
				json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9703"}';
				
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
				if(subty == "0001" || subty == "0002"){
					var file = this.getView().byId("file11").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
					var file = this.getView().byId("file12").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					var file = this.getView().byId("file13").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0003",docid,year);
					}
					var file = this.getView().byId("file14").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0004",docid,year);
					}
					var file = this.getView().byId("file15").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0005",docid,year);
					}
					var file = this.getView().byId("file16").oFileUpload.files;
					if(file.length > 0){
						this.onReadFile(file,"0006",docid,year);
					}
				}
			}
			MessageToast.show("บันทึกคำขอเรียบร้อยแล้ว สามารถตรวจสอบสถานะได้จากเมนู รายการคำขอ");
			
			this.byId("RQUST").setValue(docid);
		},
		onELCLPChange: function() {
//			var data = jQuery.sap.getUriParameters().get("lqex");
//			var decd = "";
//			var settings = {
//					  "async": false,
//					  "crossDomain": true,
//					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//					  "method": "POST",
//					  "headers": {
//					    "Content-Type": "application/json",
//					    "Accept": "*/*",
//					    "Cache-Control": "no-cache",
//					    "Host": "10.121.3.62:8083",
//					    "accept-encoding": "gzip, deflate",
//					    "Connection": "keep-alive",
//					    "cache-control": "no-cache"
//					  },
//					  "processData": false,
//					  "data": data
//					}
//
//				$.ajax(settings).done(function (response) {
//				  console.log(response); 
//				  decd = response;
//				});
//			
//			
//			var itex = decd.split("|");
//			var user = itex[0];
			
			var sl = this.getView().byId("FAMSA").getSelectedKey();
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pa9701;
			var elclp = this.getView().byId("ELCLP").getSelectedItem().getKey();
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0002",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var xkey = "X";
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			for(var x = 0;x<pa9701.List.length;x++){
				if(pa9701.List[x].elclp == elclp){
					var tt = temp.List.length;
					temp.List[tt] = pa9701.List[x];
					temp.List[tt].text = pa9701.List[x].ename;
					temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(pa9701.List[x]))));
					xkey = temp.List[tt].key;
				}
			}
			
			this.getView().setModel(new JSONModel(temp),"perItem");
			this.getView().byId("FAMSA").setSelectedKey(sl);
			if(elclp != "03"){
				this.getView().byId("FAMSA").setSelectedKey(xkey);
			}
			this.getView().byId("FGBDT").setValue("");
			this.getView().byId("AGE").setValue("");
			this.getView().byId("JOBTL").setValue("");
		},
		onChangeChield: function(){
//			var data = jQuery.sap.getUriParameters().get("lqex");
//			var decd = "";
//			var settings = {
//					  "async": false,
//					  "crossDomain": true,
//					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//					  "method": "POST",
//					  "headers": {
//					    "Content-Type": "application/json",
//					    "Accept": "*/*",
//					    "Cache-Control": "no-cache",
//					    "Host": "10.121.3.62:8083",
//					    "accept-encoding": "gzip, deflate",
//					    "Connection": "keep-alive",
//					    "cache-control": "no-cache"
//					  },
//					  "processData": false,
//					  "data": data
//					}
//
//				$.ajax(settings).done(function (response) {
//				  console.log(response); 
//				  decd = response;
//				});
//			
//			
//			var itex = decd.split("|");
//			var user = itex[0];
			var user = jQuery.sap.getUriParameters().get("user");
			var pa9701;
			var elclp = this.getView().byId("ELCLP").getSelectedItem().getKey();
			var ch_sel = this.getView().byId("FAMSA").getSelectedKey();
			var zthrbee15;
			if(ch_sel != "X"){
				var ch_data = JSON.parse(decodeURIComponent(escape(window.atob(ch_sel))));
				
				if(elclp == "03"){
					this.getView().byId("FGBDT").setValue(this.onDatedisplay2(ch_data.fgbdt));
					this.getView().byId("AGE").setValue(this.onChildage(ch_data.fgbdt));
				}
				
				this.getView().byId("JOBTL").setValue(ch_data.jobtl);
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE15/01/"+elclp,
		        	async: false,
		        	success: function(data){
		        		zthrbee15 = data;
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				
			}
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
		onSendPressed: function () {
//			var data = jQuery.sap.getUriParameters().get("lqex");
//			var decd = "";
//			var settings = {
//					  "async": false,
//					  "crossDomain": true,
//					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
//					  "method": "POST",
//					  "headers": {
//					    "Content-Type": "application/json",
//					    "Accept": "*/*",
//					    "Cache-Control": "no-cache",
//					    "Host": "10.121.3.62:8083",
//					    "accept-encoding": "gzip, deflate",
//					    "Connection": "keep-alive",
//					    "cache-control": "no-cache"
//					  },
//					  "processData": false,
//					  "data": data
//					}
//
//				$.ajax(settings).done(function (response) {
//				  console.log(response); 
//				  decd = response;
//				});
//			
//			
//			var itex = decd.split("|");
//			var user = itex[0];
			var err = "";
			if(this.byId("selecteSwap").getSelected() == true){
				var f1 = this.byId("TXINV").getValue();
				var f2 = this.byId("SHTXID").getValue();
				var f3 = this.byId("SHNAM").getValue();
				var f4 = this.byId("SHBRNC").getValue();
				var f5 = this.byId("SHPAD").getValue();
				var f6 = this.byId("SHPAD2").getValue();
				var f7 = this.byId("TXDAT").getValue();
				var f8 = this.byId("SHPOS").getValue();
				var c1 = this.byId("SUBTY").getSelectedKey();
				var c2 = this.byId("CLMTY").getSelectedKey();
				
				var fl1;
				var fl2;
				var fl3;
				if(c2 == "1"){
					if(c1 == "0003"){
						fl1 = this.getView().byId("file06").oFileUpload.files;
						fl2 = this.getView().byId("file07").oFileUpload.files;
						fl3 = this.getView().byId("file08").oFileUpload.files;
						if(f1.length < 1 || f2.length < 1 || f3.length < 1 || f4.length < 1 || f5.length < 1 || f6.length < 1 || f7.length < 1 || f8.length < 1 || fl1.length < 1 || fl2.length < 1 || fl3.length < 1){
							err = "X";
						}
					}else{
						fl1 = this.getView().byId("file01").oFileUpload.files;
						//fl2 = this.getView().byId("file12").oFileUpload.files;
						fl3 = this.getView().byId("file03").oFileUpload.files;
						if(f1.length < 1 || f2.length < 1 || f3.length < 1 || f4.length < 1 || f5.length < 1 || f6.length < 1 || f7.length < 1 || f8.length < 1 || fl1.length < 1 || fl3.length < 1){
							err = "X";
						}
					}
				}else{
					fl1 = this.getView().byId("file11").oFileUpload.files;
					fl2 = this.getView().byId("file12").oFileUpload.files;
					fl3 = this.getView().byId("file13").oFileUpload.files;
					if(fl1.length < 1 || fl2.length < 1 || fl3.length < 3){
						err = "X";
					}
				}
				
			}else{
				
				var c1 = this.byId("SUBTY").getSelectedKey();
				var c2 = this.byId("CLMTY").getSelectedKey();
				
				var fl1;
				var fl2;
				var fl3;
				
				if(c2 == "1"){
					if(c1 == "0003"){
						fl1 = this.getView().byId("file06").oFileUpload.files;
						fl2 = this.getView().byId("file07").oFileUpload.files;
						fl3 = this.getView().byId("file08").oFileUpload.files;
						if(fl1.length < 1 || fl2.length < 1 || fl3.length < 1){
							err = "X";
						}
					}else{
						fl1 = this.getView().byId("file01").oFileUpload.files;
						//fl2 = this.getView().byId("file02").oFileUpload.files;
						fl3 = this.getView().byId("file03").oFileUpload.files;
						if(fl1.length < 1 || fl3.length < 1){
							err = "X";
						}
					}
				}else{
					fl1 = this.getView().byId("file11").oFileUpload.files;
					fl2 = this.getView().byId("file12").oFileUpload.files;
					fl3 = this.getView().byId("file13").oFileUpload.files;
					if(fl1.length < 1 || fl2.length < 1 || fl3.length < 3){
						err = "X";
					}
				}
			}
			
			var clmty = this.byId("CLMTY").getSelectedKey();
			var subty = this.byId("SUBTY").getSelectedKey();
			var elclp = this.byId("ELCLP").getSelectedKey();
			var famsa = this.byId("FAMSA").getSelectedKey();
			var rcdat = this.byId("RCDAT").getValue();
			
			if((clmty != "1" && clmty != "2" ) || subty == "X" || elclp == "X" || famsa == "X" || rcdat.length == 0){
				err = "X";
			}
			
			if(err == "X"){
				MessageToast.show("Please input all require fields");
			}else{
				var user = jQuery.sap.getUriParameters().get("user");
				var typeKey = this.byId("CLMTY").getSelectedKey();
				
				if(typeKey == "1"){
					var subty = this.byId("SUBTY").getSelectedKey();
					var iRowIndex = 0;
					if(subty == "0001" || subty == "0002"){
						var oTable = this.getView().byId("idTab01");
					}else if(subty == "0003"){
						var oTable = this.getView().byId("idTab05");
					}
					var aItems = oTable.getItems();
					
					var cell1 = "";
					var cell2 = "";
					var cell3 = "";
					var cell4 = "";
					var cell5 = "";
					var cell6 = "";
					
					var itemList = "";
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
								cell2 = cell2.getValue().replace(",","");
							}
							else if(i == 2)
							{
								cell3 = itemRow[i]
								cell3 = cell3.getValue().replace(",","");
							}
							else if(i == 3)
							{
								cell4 = itemRow[i]
								cell4 = cell4.getValue().replace(",","");
							}
							else if(i == 4)
							{
								cell5 = itemRow[i]
								cell5 = cell5.getValue().replace(",","");
							}
							else if(i == 5)
							{
								cell6 = itemRow[i]
								cell6 = cell6.getValue().replace(",","");
							}
						}
						
						itemData = "seqnr:"+x+",eetyp03:"+cell1+",reamt03:"+cell2+",riamt03:"+cell3;
						itemData = itemData + ",cleamt03:"+cell4+",cleamt103:"+cell5+",rmrk103:"+cell6;
						itemList = itemList + "|" + itemData;
					}
					
					itemList = window.btoa(itemList);
					
					
					var datax = window.atob(itemList);
					var qt = '"';
					var pa9703 = new JSONModel();
					var pa9704 = new JSONModel();
					var dcrun = new JSONModel();
					var dchead = new JSONModel();
					var dcdetail = new JSONModel();
					
					var year = new Date().getFullYear();
					var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
					var date = new Date().getDate();
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
					var year_budish = (year + 0).toString().substring(2,4); 
					var script = "";
					
					var pernr = this.byId("PERNR").getText();
					var err;
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
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
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
					var hcode = this.byId("HNAME").getSelectedKey();
					var zthrmed;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED/"+hcode,
			        	async: false,
			        	success: function(data){
			        		zthrmed = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(typeKey == "1"){
						if(zthrmed.ZTHRMED.hspcl == "X"){
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}else{
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/2",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}
						
						
					}else {
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอเบิกค่ารักษาพยาบาล";
					json.ltext1 = "รัฐบาล";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.pernr = "";
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
					
					var rqust = dcrun.curid;
					var rqdat = new Date().getDate().toString() + "/" + month + "/" + year;
					var clmty = this.byId("CLMTY").getSelectedKey();
					var subty = this.byId("SUBTY").getSelectedKey();
					var elclp = this.byId("ELCLP").getSelectedKey();
					var famsa = this.byId("FAMSA").getSelectedKey();
					var jobtl = ",jobtl:"+this.byId("JOBTL").getValue(jobtl);
					var fgbdt = ",fgbdt:"+this.byId("FGBDT").getValue(fgbdt);
					var age = ",age:"+this.byId("AGE").getValue(age);
					var vstno = this.byId("VSTNO").getValue();
					var htype = this.byId("HTYPE").getSelectedKey();
					var hname = this.byId("HNAME").getSelectedKey();
					var othty = this.byId("OTHTY").getValue();
					var dsese = this.byId("DSESE").getSelectedKey();
					var otdse = this.byId("OTDSE").getValue();
					var dsgrp = this.byId("DSGRP").getSelectedKey();
					var otdsg = this.byId("OTDSG").getValue();
					var rcpt1 = this.byId("RCPT1").getValue();
					var rcdat = this.byId("RCDAT").getValue();
					var tbdat = this.byId("TBDAT").getValue();
					var tcdat = this.byId("TEDAT").getValue();
					var tdays = this.byId("TDAYS").getValue();
					if (subty == "0001" | subty == "0002")
					{
						var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
						var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
						
						var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
					}
					else if(subty == "0003")
					{
						var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
						var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
						
						var txinv = this.byId("TXINV").getValue();
						var shtxid = this.byId("SHTXID").getValue();
						var shnam = this.byId("SHNAM").getValue();
						var shbrnc = this.byId("SHBRNC").getValue();
						var shpad = this.byId("SHPAD").getValue();
						var shpad2 = this.byId("SHPAD2").getValue();
						
						var txdat = this.byId("TXDAT").getValue();
						var shpos = this.byId("SHPOS").getValue();
						var shcut = this.byId("SHCUT").getValue();
						
						var nvamt = this.byId("NVAMT").getValue().replace(",","");
						var vtamt = this.byId("VTAMT").getValue().replace(",","");
						var totval = this.byId("totVal").getValue().replace(",","");
						
						anzhl03 = totval;
						smamt03 = totval;
						
						var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
						
						script = script + ",txinv:"+txinv+",shtxid:"+shtxid+",shnam:"+shnam+",shpad:"+shpad+",shpax:"+shpad2+",shbrnc:"+shbrnc;
						script = script + ",nvamt:"+nvamt+",vtamt:"+vtamt+",totval:"+totval;
						script = script + ",txdat:"+txdat+",shpos:"+shpos+",shcut:"+shcut;
					}
							
					script = script+jobtl+fgbdt+age;
					
					json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9703"}';
					
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
					if(subty == "0001" || subty == "0002"){
						var file = this.getView().byId("file01").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file02").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file03").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file04").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
						var file = this.getView().byId("file05").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0005",docid,year);
						}
					}
					if(subty == "0003"){
						var file = this.getView().byId("file06").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file07").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file08").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file09").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
						var file = this.getView().byId("file10").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0005",docid,year);
						}
					}
				}else if(typeKey == "2"){
					var subty = this.byId("SUBTY").getSelectedKey();
					var iRowIndex = 0;
					var oTable = this.getView().byId("idTab02");
					
					var aItems = oTable.getItems();
					
					var cell1 = "";
					var cell2 = "";
					var cell3 = "";
					var cell4 = "";
					var cell5 = "";
					var cell6 = "";
					
					var itemList = "";
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
								cell2 = cell2.getValue().replace(",","");
							}
							else if(i == 2)
							{
								cell3 = itemRow[i]
								cell3 = cell3.getValue().replace(",","");
							}
							else if(i == 3)
							{
								cell4 = itemRow[i]
								cell4 = cell4.getValue().replace(",","");
							}
							else if(i == 4)
							{
								cell5 = itemRow[i]
								cell5 = cell5.getValue().replace(",","");
							}
		
						}
						
						itemData = "seqnr:"+x+",eetyp03:"+cell1+",reamt03:"+cell2+",riamt03:"+cell3;
						itemData = itemData + ",cleamt03:"+cell4+",cleamt103:"+cell5+",rmrk103:"+cell5;
						itemList = itemList + "|" + itemData;
					}
					
					itemList = window.btoa(itemList);
					
					
					var datax = window.atob(itemList);
					var qt = '"';
					var pa9703 = new JSONModel();
					var pa9704 = new JSONModel();
					var dcrun = new JSONModel();
					var dchead = new JSONModel();
					var dcdetail = new JSONModel();
					
					var year = new Date().getFullYear();
					var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
					var date = new Date().getDate();
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
					var year_budish = (year + 0).toString().substring(2,4); 
					var script = "";
					
					var pernr = this.byId("PERNR").getText();
					var err;
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
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/02';
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
					
					var hcode = this.byId("HNAME").getSelectedKey();
					var zthrmed;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED/"+hcode,
			        	async: false,
			        	success: function(data){
			        		zthrmed = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(typeKey == "1"){
						if(zthrmed.ZTHRMED.hspcl == "X"){
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}else{
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/2",
					        	async: false,
					        	success: function(data){
					        		wf = data;
					        		
					        	},
					        	error: function(){
					        		
					        	}
					        });
						}
						
						
					}else {
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/3",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.docid = docid;
					json.module = 'BE';
					json.header = "ขอเบิกค่ารักษาพยาบาล";
					json.ltext1 = "เอกชน";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.pernr = "";
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
					
					var rqust = dcrun.curid;
					var rqdat = new Date().getDate().toString() + "/" + month + "/" + year;
					var clmty = this.byId("CLMTY").getSelectedKey();
					var subty = this.byId("SUBTY").getSelectedKey();
					var elclp = this.byId("ELCLP").getSelectedKey();
					var famsa = this.byId("FAMSA").getSelectedKey();
					var jobtl = ",jobtl:"+this.byId("JOBTL").getValue(jobtl);
					var fgbdt = ",fgbdt:"+this.byId("FGBDT").getValue(fgbdt);
					var age = ",age:"+this.byId("AGE").getValue(age);
					var vstno = this.byId("VSTNO").getValue();
					var htype = this.byId("HTYPE").getSelectedKey();
					var hname = this.byId("HNAME").getSelectedKey();
					var othty = this.byId("OTHTY").getValue();
					var dsese = this.byId("DSESE").getSelectedKey();
					var otdse = this.byId("OTDSE").getValue();
					var dsgrp = this.byId("DSGRP").getSelectedKey();
					var otdsg = this.byId("OTDSG").getValue();
					var rcpt1 = this.byId("RCPT1").getValue();
					var rcdat = this.byId("RCDAT").getValue();
					var tbdat = this.byId("TBDAT").getValue();
					var tcdat = this.byId("TEDAT").getValue();
					var tdays = this.byId("TDAYS").getValue();
					if (subty == "0001" | subty == "0002")
					{
						var anzhl03 = this.byId("ANZHL04").getValue().replace(",","");
						var smamt03 = this.byId("SMAMT04").getValue().replace(",","");
						
						var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
					}
					else if(subty == "0003")
					{
						var anzhl03 = this.byId("ANZHL03").getValue().replace(",","");
						var smamt03 = this.byId("SMAMT03").getValue().replace(",","");
						
						var txinv = this.byId("TXINV").getValue();
						var shtxid = this.byId("SHTXID").getValue();
						var shnam = this.byId("SHNAM").getValue();
						var shbrnc = this.byId("SHBRNC").getValue();
						var shpad = this.byId("SHPAD").getValue();
						var shpad2 = this.byId("SHPAD2").getValue();
						
						var txdat = this.byId("TXDAT").getValue();
						var shpos = this.byId("SHPOS").getValue();
						var shcut = this.byId("SHCUT").getValue();
						
						var nvamt = this.byId("NVAMT").getValue().replace(",","");
						var vtamt = this.byId("VTAMT").getValue().replace(",","");
						var totval = this.byId("totVal").getValue().replace(",","");
						
						anzhl03 = totval;
						smamt03 = totval;
						
						var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",clmty:"+clmty+",subty:"+subty+",elclp:"+elclp+",famsa:"+famsa+",vstno:"+vstno+",htype:"+htype+",hname:"+hname+",othty:"+othty+",dsese:"+dsese+",otdse:"+otdse+",dsgrp:"+dsgrp+",otdsg:"+otdsg+",rcpt1:"+rcpt1+",rcdat:"+rcdat+",tbdat:"+tbdat+",tcdat:"+tcdat+",tdays:"+tdays+",anzhl03:"+anzhl03+",smamt03:"+smamt03+",itemList:"+itemList;
						
						script = script + ",txinv:"+txinv+",shtxid:"+shtxid+",shnam:"+shnam+",shpad:"+shpad+",shpax:"+shpad2+",shbrnc:"+shbrnc;
						script = script + ",nvamt:"+nvamt+",vtamt:"+vtamt+",totval:"+totval;
						script = script + ",txdat:"+txdat+",shpos:"+shpos+",shcut:"+shcut;
					}
							
					script = script+jobtl+fgbdt+age;
					
					json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9703"}';
					
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
					if(subty == "0001" || subty == "0002"){
						var file = this.getView().byId("file11").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file12").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file13").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file14").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
						var file = this.getView().byId("file15").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0005",docid,year);
						}
						var file = this.getView().byId("file16").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0006",docid,year);
						}
					}
				}
				MessageToast.show("บันทึกคำขอเรียบร้อยแล้ว สามารถตรวจสอบสถานะได้จากเมนู รายการคำขอ");
				
				this.getRouter().navTo("myInfo");
			}
		},
		
		onCancelPressed: function () {
			this.getRouter().navTo("myInfo");
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
		onSelect: function(){
			var typekey = this.byId("CLMTY").getSelectedKey();
			var eetyp03_list = new JSONModel();
			if(typekey == "1"){
				eetyp03_list.setData({
					"List":[
						{"key":"0000","text":"เลือกประเภท"},
						{"key":"0001","text":"ผู้ป่วยนอก (OPD)"},
						{"key":"0002","text":"ผู้ป่วยใน (IPD)"},
						{"key":"0003","text":"ยาหรืออุปกรณ์ตามใบสั่งของ รพ./ทอท."},
					]
				});
			}else if(typekey == "2"){
				eetyp03_list.setData({
					"List":[
						{"key":"0000","text":"เลือกประเภท"},
						{"key":"0001","text":"ผู้ป่วยนอก (OPD)"},
						{"key":"0002","text":"ผู้ป่วยใน (IPD)"},
					]
				});
			}
			this.getView().setModel(eetyp03_list,"subtyItem");
			
		},
		onHgroup: function(){
			var typekey = this.byId("CLMTY").getSelectedKey();
			var htype = this.byId("HTYPE").getSelectedKey();
			var hospital = new JSONModel();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED",
	        	async: false,
	        	success: function(data){
	        		hospital = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var r = 1;
			var tmp = {"List":[{"hcode":"X","hname":"เลือก"}]};
			for(var j = 0;j<hospital.List.length;j++){
				if(typekey == "1"){
					if(hospital.List[j].htype == "01" || hospital.List[j].htype == ""){
						if(hospital.List[j].hgrpg == htype || hospital.List[j].hgrpg == ""){
							tmp.List[r] = hospital.List[j];
							r++;
						}
					}
				}else if(typekey == "2"){
					if(hospital.List[j].htype == "02" || hospital.List[j].htype == ""){
						if(hospital.List[j].hgrpg == htype || hospital.List[j].hgrpg == ""){
							tmp.List[r] = hospital.List[j];
							r++;
						}
					}
				}
			}
			hospital = tmp;
			var len = hospital.List.length;
			var hos = new JSONModel(hospital);
			hos.setSizeLimit(len);
			this.getView().setModel(hos,"hosItem");
			
			
			var inti = {"Institute":[]};
			inti.Institute = hospital.List;
			var mod = new JSONModel(inti);
			mod.setSizeLimit(len);
			this.getView().setModel(mod);
			
			this.getView().byId("HNAME").setSelectedKey("X");
			
		},
		onChange: function(){
			var typeKey = this.byId("CLMTY").getSelectedKey();
			var subty = this.byId("SUBTY").getSelectedKey();
			this.getView().byId("TBDAT").setEnabled(false);
			this.getView().byId("TEDAT").setEnabled(false);
			if(typeKey == "1")
			{
				if( subty != "0003"){
					this.byId("tab02").setVisible(false);
					this.byId("tab04").setVisible(false);
					this.byId("tab01").setVisible(true);
					this.byId("tab03").setVisible(true);
					this.byId("tab05").setVisible(false);
					this.byId("tab06").setVisible(false);
					if(subty == "0002"){
						this.getView().byId("TBDAT").setEnabled(true);
						this.getView().byId("TEDAT").setEnabled(true);
					}
				}
				else
				{
					this.byId("tab01").setVisible(false);
					this.byId("tab03").setVisible(false);
					this.byId("tab02").setVisible(false);
					this.byId("tab04").setVisible(false);
					this.byId("tab05").setVisible(true);
					this.byId("tab06").setVisible(true);
				}
			}
			else if(typeKey == "2")
			{
				this.byId("tab01").setVisible(false);
				this.byId("tab03").setVisible(false);
				this.byId("tab02").setVisible(true);
				this.byId("tab04").setVisible(true);
				this.byId("tab05").setVisible(false);
				this.byId("tab06").setVisible(false);
				if(subty == "0002"){
					this.getView().byId("TBDAT").setEnabled(true);
					this.getView().byId("TEDAT").setEnabled(true);
				}
			}
			
			var eetyp03_list = new JSONModel();
			if(subty == "0001"){
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
		        	async: false,
		        	success: function(data){
		        		eetyp03_list = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
			}else if(subty == "0002"){
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/IPD",
		        	async: false,
		        	success: function(data){
		        		eetyp03_list = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
			}else if(subty == "0003"){
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
		        	async: false,
		        	success: function(data){
		        		eetyp03_list = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
			}
			this.getView().setModel(new JSONModel(eetyp03_list),"tretData");
			
			if(subty == "0001" || subty == "0002"){
				if(typeKey == "1") {
					var oTable = this.getView().byId("idTab01");
					var item = oTable.getItems();
					for(var d=0;d<item.length;d++){
						oTable.removeItem(item[d]);
					}
				}else{
					var oTable = this.getView().byId("idTab02");
				}
			}else if(subty == "0003"){
				var oTable = this.getView().byId("idTab05");
				var item = oTable.getItems();
				for(var d=0;d<item.length;d++){
					oTable.removeItem(item[d]);
				}
				
			}
			
			
			var oItem = new sap.m.ColumnListItem({
//			cells : [ new sap.m.Select(), new sap.m.Input(), new sap.m.Input({
//			showValueHelp : true
//
//			}), 
				cells : [ new sap.m.Select({
							items: { 
								path: "tretData>/List", 
								template: new sap.ui.core.ListItem({
								      key: '{tretData>ttype}',
								      text: '{tretData>ttypetxt}'
								}
							)
							},
							enabled: false
						}), new sap.m.Input({change: [this.inputAmt, this]}), 
							new sap.m.Input({change: [this.inputAmt, this]}),
							new sap.m.Input({enabled: false}),
							new sap.m.Input({enabled: false}),
							new sap.m.Input({enabled: false}),
							new sap.m.Input({enabled: false}),
							new sap.m.Button({
								text : "Delete",
								visible : false,
								press : [ this.remove, this ]
							}) 
				]
			});
			if(subty == "0001" || subty == "0002"){
				if(typeKey == "1") {
					var oTable = this.getView().byId("idTab01");
					oTable.addItem(oItem);
				}else{
					var oTable = this.getView().byId("idTab02");
				}
			}else if(subty == "0003"){
				var oTable = this.getView().byId("idTab05");
				oTable.addItem(oItem);
			}
						
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
		onAdd : function(oEvent) {
			
			var typeKey = this.byId("CLMTY").getSelectedKey();
			var subty = this.byId("SUBTY").getSelectedKey();
			var eetyp03_list = new JSONModel();
			if(subty == "0001"){
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
		        	async: false,
		        	success: function(data){
		        		eetyp03_list = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
			}else if(subty == "0002"){
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/IPD",
		        	async: false,
		        	success: function(data){
		        		eetyp03_list = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
			}else if(subty == "0003"){
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRMED03/OPD",
		        	async: false,
		        	success: function(data){
		        		eetyp03_list = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
			}
			this.getView().setModel(new JSONModel(eetyp03_list),"tretData");
			
			var oItem = new sap.m.ColumnListItem({
//			cells : [ new sap.m.Select(), new sap.m.Input(), new sap.m.Input({
//			showValueHelp : true
//
//			}), 
				cells : [ new sap.m.Select({
							items: { 
								path: "tretData>/List", 
								template: new sap.ui.core.ListItem({
									key: '{tretData>ttype}',
								    text: '{tretData>ttypetxt}'
								})
							}
						}), new sap.m.Input({change: [this.inputAmt, this]}), 
							new sap.m.Input({change: [this.inputAmt, this]}),
							new sap.m.Input({enabled: false}),
							new sap.m.Input({enabled: false}),
							new sap.m.Input({enabled: false}),
							new sap.m.Input({enabled: false}),
							new sap.m.Button({
								text : "Delete",
								press : [ this.remove, this ]
							}) 
				]
			});
			if(subty == "0001" || subty == "0002"){
				if(typeKey == "1") {
					var oTable = this.getView().byId("idTab01");
					oTable.addItem(oItem);
				}else{
					var oTable = this.getView().byId("idTab02");
				}
			}else if(subty == "0003"){
				var oTable = this.getView().byId("idTab05");
				oTable.addItem(oItem);
			}
		},
		deleteRow : function(oEvent) {
			var typeKey = this.byId("CLMTY").getSelectedKey();
			var subty = this.byId("SUBTY").getSelectedKey();
			if(subty == "0001" || subty == "0002"){
				var oTable = this.getView().byId("idTab01");
			}else if(subty == "0003"){
				var oTable = this.getView().byId("idTab05");
			}
			oTable.removeItem(oEvent.getParameter("listItem"));
		},
		inputAmt: function(){
			var user = jQuery.sap.getUriParameters().get("user");
			var typeKey = this.byId("CLMTY").getSelectedKey();
			var elclp = this.byId("ELCLP").getSelectedKey();
			
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
			
			if(typeKey == "1"){
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				if(subty == "0001" || subty == "0002"){
					var oTable = this.getView().byId("idTab01");
				}else if(subty == "0003"){
					var oTable = this.getView().byId("idTab05");
				}
				var aItems = oTable.getItems();
				
				jQuery.sap.require("sap.ui.core.format.NumberFormat");
				var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					  maxFractionDigits: 2,
					  minFractionDigits: 2,
					  groupingEnabled: true,
					  groupingSeparator: ",",
					  decimalSeparator: "."
					});
	
				var cell2 = 0;
				var cell3 = 0;
				
				var itemList = "";
				for(var x=0;x < aItems.length;x++){
					var itemData = "";
					var itemRow = aItems[x].getCells();
					var max = 0;
					
					var chk = itemRow[1].getValue();
					if(chk != ""){
						if(max != 0){
							if(parseFloat(itemRow[1].getValue().replace(",","")) > max){
								cell2 = cell2 + parseFloat(0);
								itemRow[1].setValue(oNumberFormat.format(0))
							}else{
								cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
								itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
							}
						}else{
							cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
							itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
						}
						
					}
					chk = itemRow[2].getValue();
					if(chk != ""){
						cell3 = cell3 + parseFloat(itemRow[2].getValue().replace(",",""));
						itemRow[2].setValue(oNumberFormat.format(itemRow[2].getValue().replace(",","")))
					}
					
					
				}
				if(subty == "0001" || subty == "0002"){
					
					var amount = cell2+cell3;
					
						amount = oNumberFormat.format(amount);
						cell2 = oNumberFormat.format(cell2);
					this.byId("ANZHL03").setValue(cell2);
					this.byId("SMAMT03").setValue(amount);
				}else if(subty == "0003"){
					
					var nvamt = this.byId("NVAMT").getValue().replace(",","");
					var vtamt = this.byId("VTAMT").getValue().replace(",","");
					if(nvamt.length > 0){
						nvamt = parseFloat(nvamt);
					}
					else{
						nvamt = 0;
					}
					if(vtamt.length > 0){
						vtamt = parseFloat(vtamt);
					}
					else{
						vtamt = 0;
					}
					var amount = nvamt+vtamt;
					
					amount = oNumberFormat.format(amount);
					nvamt = oNumberFormat.format(nvamt);
					vtamt = oNumberFormat.format(vtamt);
					
					var selVat = this.byId("selecteSwap").getSelected();
					this.byId("NVAMT").setValue(nvamt);
					this.byId("VTAMT").setValue(vtamt);
					this.byId("totVal").setValue(amount);
	
				}
			}else{
				
				var subty = this.byId("SUBTY").getSelectedKey();
				var iRowIndex = 0;
				
				var oTable = this.getView().byId("idTab02");
				var aItems = oTable.getItems();
				
				jQuery.sap.require("sap.ui.core.format.NumberFormat");
				var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					  maxFractionDigits: 2,
					  minFractionDigits: 2,
					  groupingEnabled: true,
					  groupingSeparator: ",",
					  decimalSeparator: "."
					});
	
				var cell2 = 0;
				var cell3 = 0;
				
				var itemList = "";
				for(var x=0;x < aItems.length;x++){
					var itemData = "";
					var itemRow = aItems[x].getCells();
					var max = 0;
					
					var chk = itemRow[1].getValue();
					if(chk != ""){
						if(max != 0){
							if(parseFloat(itemRow[1].getValue().replace(",","")) > max){
								cell2 = cell2 + parseFloat(0);
								itemRow[1].setValue(oNumberFormat.format(0))
							}else{
								cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
								itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
							}
						}else{
							cell2 = cell2 + parseFloat(itemRow[1].getValue().replace(",",""));
							itemRow[1].setValue(oNumberFormat.format(itemRow[1].getValue().replace(",","")))
						}
						
					}
					chk = itemRow[2].getValue();
					if(chk != ""){
						cell3 = cell3 + parseFloat(itemRow[2].getValue().replace(",",""));
						itemRow[2].setValue(oNumberFormat.format(itemRow[2].getValue().replace(",","")))
					}
				}
				if(subty == "0001" || subty == "0002"){
					
					var amount = cell2+cell3;
					
						amount = oNumberFormat.format(amount);
						cell2 = oNumberFormat.format(cell2);
					this.byId("ANZHL04").setValue(cell2);
					this.byId("SMAMT04").setValue();
				}
				
			}
			
		},
		onMax5: function(oEvent){
			var t = oEvent.getSource();
			var val = oEvent.mParameters.value;
			val = val.replace(/[^\d]/g, '');
			if(val.length > 5){
				val = val.substring(0,5);
			}
			oEvent.mParameters.value = val;
			t.setValue(val);
		},
		onMax13: function(oEvent){
			var t = oEvent.getSource();
			var val = oEvent.mParameters.value;
			val = val.replace(/[^\d]/g, '');
			if(val.length > 13){
				val = val.substring(0,13);
			}
			oEvent.mParameters.value = val;
			t.setValue(val);
		},
		onMax35: function(oEvent){
//			var t = oEvent.getSource();
//			var val = oEvent.mParameters.value;
//			val = val.replace(/[^\d]/g, '');
			if(val.length > 35){
				val = val.substring(0,35);
			}
			oEvent.mParameters.value = val;
			t.setValue(val);
		},
		onCalData: function(){
			var typeKey = this.byId("CLMTY").getSelectedKey();
			if(typeKey == "1"){
				var oTable = this.getView().byId("idTab01");
			}else if(typeKey == "3"){
				var oTable = this.getView().byId("idTab05");
			}
			var test = "";
		},
		remove : function(oEvent) {
			var typeKey = this.byId("CLMTY").getSelectedKey();
			if(typeKey == "1"){
				var oTable = this.getView().byId("idTab01");
			}else if(typeKey == "3"){
				var oTable = this.getView().byId("idTab05");
			}
			oTable.removeItem(oEvent.getSource().getParent());
		},
		onDateChange: function(){
			var subty = this.byId("SUBTY").getSelectedItem().getKey();
			if(subty == "0002"){
				var tbdat = this.byId("TBDAT").getValue();
				var tedat = this.byId("TEDAT").getValue();
				if(tbdat == "" && tedat == "")
				{
					
				}
				else if(tbdat != "" && tedat == "")
				{
					this.byId("TEDAT").setValue(tbdat);
					var oneDay = 24*60*60*1000;
					tedat = tbdat;
					if(tedat < tbdat)
					{
						this.byId("TBDAT").setValue(tedat);
						tbdat = tedat;
					}
					tedat = tedat.split("/");
					tedat = new Date(tedat[2],tedat[1],tedat[0]);
					tbdat = tbdat.split("/");
					tbdat = new Date(tbdat[2],tbdat[1],tbdat[0]);
					var day_cal = Math.round(Math.abs((tedat.getTime() - tbdat.getTime())/oneDay))+1;
					this.byId("TDAYS").setValue(day_cal);
				}
				else if(tbdat == "" && tedat != "")
				{
					this.byId("TBDAT").setValue(tedat);
					var oneDay = 24*60*60*1000;
					tbdat = tedat;
					if(tedat < tbdat)
					{
						this.byId("TBDAT").setValue(tedat);
						tbdat = tedat;
					}
					tedat = tedat.split("/");
					tedat = new Date(tedat[2],tedat[1],tedat[0]);
					tbdat = tbdat.split("/");
					tbdat = new Date(tbdat[2],tbdat[1],tbdat[0]);
					var day_cal = Math.round(Math.abs((tedat.getTime() - tbdat.getTime())/oneDay))+1;
					this.byId("TDAYS").setValue(day_cal);
				}
				else if(tbdat != "" && tedat != "")
				{
					var oneDay = 24*60*60*1000;
					if(tedat < tbdat)
					{
						this.byId("TBDAT").setValue(tedat);
						tbdat = tedat;
					}
					tedat = tedat.split("/");
					tedat = new Date(tedat[2],tedat[1],tedat[0]);
					tbdat = tbdat.split("/");
					tbdat = new Date(tbdat[2],tbdat[1],tbdat[0]);
					var day_cal = Math.round(Math.abs((tedat.getTime() - tbdat.getTime())/oneDay))+1;
					this.byId("TDAYS").setValue(day_cal);
				}
			}
		},
		onCheckVAT: function(){
//			var sItemPath = this.byId("selecteSwap").getSelected();
//			if(sItemPath){
//				this.byId("changeTime").setEnabled(true);
//			}else{
//				this.byId("changeTime").setEnabled(false);
//			}
			var selVat = this.byId("selecteSwap").getSelected();
			var typeKey = this.byId("CLMTY").getSelectedKey();
			
			var iRowIndex = 0;
			if(typeKey == "1"){
				var oTable = this.getView().byId("idTab01");
			}else if(typeKey == "3"){
				var oTable = this.getView().byId("idTab05");
			}
			var aItems = oTable.getItems();
			

			var cell2 = 0;
			var cell3 = 0;
			
			var itemList = "";
			for(var x=0;x < aItems.length;x++){
				var itemData = "";
				var itemRow = aItems[x].getCells();
				var chk = itemRow[1].getValue();
				if(chk != ""){
					cell2 = cell2 + parseFloat(itemRow[1].getValue());
				}
				chk = itemRow[2].getValue();
				if(chk != ""){
					cell3 = cell3 + parseFloat(itemRow[2].getValue());
				}
				
				
			}
			
			if(typeKey == "1"){
				this.byId("ANZHL03").setValue(cell2+cell3);
				this.byId("SMAMT03").setValue(cell2);
			}else if(typeKey == "3"){
				var selVat = this.byId("selecteSwap").getSelected();
				
				this.byId("totVal").setValue(cell2+cell3);
//				if(selVat == true){
//					this.byId("NVAMT").setValue(((cell2+cell3)/107)*100);
//					this.byId("VTAMT").setValue((cell2+cell3)-(((cell2+cell3)/107)*100));
//				}
//				else
//				{
//					this.byId("NVAMT").setValue(cell2+cell3);
//					this.byId("VTAMT").setValue(0);
//				}
			}
			
			if(selVat == true){
				this.byId("TXINV").setEnabled(true);
				this.byId("SHTXID").setEnabled(true);
				this.byId("SHNAM").setEnabled(true);
				this.byId("SHBRNC").setEnabled(true);
				this.byId("SHPAD").setEnabled(true);
				this.byId("SHPAD2").setEnabled(true);
				this.byId("TXDAT").setEnabled(true);
				this.byId("SHPOS").setEnabled(true);
				this.byId("SHCUT").setEnabled(false);
			}else{
				this.byId("TXINV").setEnabled(false);
				this.byId("SHTXID").setEnabled(false);
				this.byId("SHNAM").setEnabled(false);
				this.byId("SHBRNC").setEnabled(false);
				this.byId("SHPAD").setEnabled(false);
				this.byId("SHPAD2").setEnabled(false);
				this.byId("TXDAT").setEnabled(false);
				this.byId("SHPOS").setEnabled(false);
				this.byId("SHCUT").setEnabled(false);
			}
			
		}
		
		

	});
});