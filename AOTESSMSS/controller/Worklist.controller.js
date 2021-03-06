sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/Device',
	'sap/ui/model/Filter',
	'sap/ui/model/Sorter',
	"sap/ui/model/FilterOperator",
], function (BaseController, MessageToast, JSONModel,Device,Filter,Sorter,FilterOperator) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.Worklist", {

		onInit: function () {
			
			var user = jQuery.sap.getUriParameters().get("user");
			
			var docheader = new JSONModel();
			var docheadert = new JSONModel();
			var docheader2 = new JSONModel();
			var pa0002;
			var pa0001;
			var wf;
			var date;
			var oView = this.getView();
			
			oView.setModel(docheader, "docList");
			oView.setModel(docheader, "myList");
			oView.setModel(docheader, "myTask");
			
			var oModelLeave = new JSONModel("model/Worklist.json");
			this.getView().setModel(oModelLeave);
			this.byId("PERNR").setText(user);
			var pernr = this.byId("PERNR").getText();
			var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+pernr+"/2";
			$.ajax({
	        	type: "GET",
	        	url: getDocurl,
	        	async: false,
	        	success: function(data){
	        		docheader = data;
	        		
	        	},
	        	error: function(){
	        		docheader = "X";
	        	}
	        });
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+pernr;
			$.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		pa0001 = data;
	        		
	        	},
	        	error: function(){
	        		pa0001 = "X";
	        	}
	        });
			if(pa0001 != "X"){
				
				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF/"+pa0001.PA0001.plans;
				$.ajax({
		        	type: "GET",
		        	url: url,
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		wf = "X";
		        	}
		        });
				if(pa0001.PA0001.plans == "20000620"){
					wf = "SP";
				}
				if(wf != "X" && wf != ""){
					var orgeh;
					if(wf != "SP"){
						if(wf.tblWorkflow.wfkey.level1 == pa0001.PA0001.plans){
							orgeh = wf.tblWorkflow.org1;
						}
						if(wf.tblWorkflow.wfkey.level2 == pa0001.PA0001.plans){
							orgeh = wf.tblWorkflow.org2;
						}
						if(wf.tblWorkflow.wfkey.level3 == pa0001.PA0001.plans){
							orgeh = wf.tblWorkflow.org3;
						}
						if(pa0001.PA0001.plans == "20000620"){
							orgeh = "64494";
						}
						
					}else{
						orgeh = "64494";
					}
					
					
					var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/O/"+orgeh;
					$.ajax({
			        	type: "GET",
			        	url: getDocurl,
			        	async: false,
			        	success: function(data){
			        		docheadert = data;
			        		
			        	},
			        	error: function(){
			        		docheadert = "X";
			        	}
			        });
					var dlen = docheader.List.length;
					if(docheadert != "X"){
						for(var d =0; d<docheadert.List.length;d++){
							if(wf != "SP" && docheadert.List[d].docid.substring(2, 4) != "01"){
								docheader.List[dlen] = docheadert.List[d];
								dlen = dlen + 1;
							}else if(wf == "SP" && docheadert.List[d].docid.substring(2, 4) != "01"){
								docheader.List[dlen] = docheadert.List[d];
								dlen = dlen + 1;
							}else if(wf != "SP"){
								docheader.List[dlen] = docheadert.List[d];
								dlen = dlen + 1;
							}
						}
					}
				}
			}
			
			var dt = new Date();
			var y = dt.getFullYear();
			var m = (dt.getMonth() +1).toString().padStart(2,'0');
			var d = dt.getDate().toString().padStart(2,'0');
			var pa0748;
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0748/"+pa0001.PA0001.plans+"/"+y+"/"+m+"/"+d;
			$.ajax({
	        	type: "GET",
	        	url: url,
	        	async: false,
	        	success: function(data){
	        		pa0748 = data;
	        		
	        	},
	        	error: function(){
	        		pa0748 = "X";
	        	}
	        });
			if(pa0748.List.length > 0){
				
				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+pa0748.List[0].pa0748key.pernr;
				$.ajax({
		        	type: "GET",
		        	url: url,
		        	async: false,
		        	success: function(data){
		        		pa0001 = data;
		        		
		        	},
		        	error: function(){
		        		pa0001 = "X";
		        	}
		        });
				if(pa0001 != "X"){
					
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF/"+pa0001.PA0001.plans;
					$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		wf = "X";
			        	}
			        });
					if(pa0001.PA0001.plans == "20000620"){
						wf = "SP";
					}
					if(wf != "X" && wf != ""){
						var orgeh;
						if(wf != "SP"){
							if(wf.tblWorkflow.wfkey.level1 == pa0001.PA0001.plans){
								orgeh = wf.tblWorkflow.org1;
							}
							if(wf.tblWorkflow.wfkey.level2 == pa0001.PA0001.plans){
								orgeh = wf.tblWorkflow.org2;
							}
							if(wf.tblWorkflow.wfkey.level3 == pa0001.PA0001.plans){
								orgeh = wf.tblWorkflow.org3;
							}
							if(pa0001.PA0001.plans == "20000620"){
								orgeh = "64494";
							}
							
						}else{
							orgeh = "64494";
						}
						
						
						var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/O/"+orgeh;
						$.ajax({
				        	type: "GET",
				        	url: getDocurl,
				        	async: false,
				        	success: function(data){
				        		docheadert = data;
				        		
				        	},
				        	error: function(){
				        		docheadert = "X";
				        	}
				        });
						var dlen = docheader.List.length;
						if(docheadert != "X"){
							for(var d =0; d<docheadert.List.length;d++){
								if(wf != "SP" && docheadert.List[d].docid.substring(2, 4) != "01"){
									docheader.List[dlen] = docheadert.List[d];
									dlen = dlen + 1;
								}else if(wf == "SP" && docheadert.List[d].docid.substring(2, 4) != "01"){
									docheader.List[dlen] = docheadert.List[d];
									dlen = dlen + 1;
								}else if(wf != "SP"){
									docheader.List[dlen] = docheadert.List[d];
									dlen = dlen + 1;
								}
							}
						}
					}
				}
				
			}
			
			if(docheader != "X"){
				for(var i=0;i < docheader.List.length;i++){
					
					$.ajax({
			        	type: "GET",
			        	url: "http://10.121.3.62:8088/api/aot/v1/PA0002/"+docheader.List[i].userad,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					docheader.List[i].username = pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					date = new Date(docheader.List[i].bedat);
					docheader.List[i].bedat = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
				}
				
				var dcHeadx = new JSONModel(docheader);
				
				oView.setModel(dcHeadx, "docList");
			}
			oView.setModel(new JSONModel({
				filterValue: "",
				rowCount: 5
			}), "ui");
			
			var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/u/"+pernr;
			$.ajax({
	        	type: "GET",
	        	url: getDocurl,
	        	async: false,
	        	success: function(data){
	        		docheader = data;
	        		
	        	},
	        	error: function(){
	        		docheader = "X";
	        	}
	        });
			
			if(docheader != "X"){
				for(var i=0;i < docheader.List.length;i++){
					
					$.ajax({
			        	type: "GET",
			        	url: "http://10.121.3.62:8088/api/aot/v1/PA0002/"+docheader.List[i].userad,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					docheader.List[i].username = pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					date = new Date(docheader.List[i].bedat);
					docheader.List[i].bedat = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
				}
				
				var dcHeadx = new JSONModel(docheader);
				
				oView.setModel(dcHeadx, "myList");
			}
			var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/l/"+pernr+"/3";
			$.ajax({
	        	type: "GET",
	        	url: getDocurl,
	        	async: false,
	        	success: function(data){
	        		docheader = data;
	        		
	        	},
	        	error: function(){
	        		docheader = "X";
	        	}
	        });
			
			var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/l/"+pernr+"/4";
			$.ajax({
	        	type: "GET",
	        	url: getDocurl,
	        	async: false,
	        	success: function(data){
	        		docheader2 = data;
	        		
	        	},
	        	error: function(){
	        		docheader2 = "X";
	        	}
	        });
			if(docheader != "X"){
			var dxl = docheader.List.length;
				if(docheader2 != "X"){
					for(var cx=0;cx < docheader2.List.length;cx++){
						docheader.List[dxl+cx] = docheader2.List[cx];
					}
				}
				for(var i=0;i < docheader.List.length;i++){
					
					$.ajax({
			        	type: "GET",
			        	url: "http://10.121.3.62:8088/api/aot/v1/PA0002/"+docheader.List[i].userad,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					docheader.List[i].username = pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
					date = new Date(docheader.List[i].bedat);
					docheader.List[i].bedat = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
				}
				
				var dcHeadx = new JSONModel(docheader);
				
				oView.setModel(dcHeadx, "myTask");
				
				var dcHeadx = new JSONModel(docheader);
			}
			this._oTxtFilter = null;
			this._oFacetFilter = null;
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("worklist").attachPatternMatched(this._onObjectMatched, this);
			
		},
		_onObjectMatched: function (oEvent) {
			
			this.onInit();

		},
		onBeforeRendering: function() {
		},
		onTrack: function(value){
			var type = value.getSource().data("mydata");
			
			if(type == "TM"){
				this.getRouter().navTo("TM/taskDetail");
			}else if(type == "BE"){
				this.getRouter().navTo("BE/taskDetail");
			}else if(type == "TE"){
				this.getRouter().navTo("TE/taskDetail");
			}else if(type == "PA"){
				this.getRouter().navTo("PA/taskDetail");
			}
//			alert(value.getSource().data("mydata"));
		},
		onPressDocNo: function(value){
			
			var docid = value.getSource().data("mydata");
			var module = "";
			var type = value.getSource().data("mydata").substring(0, 2);
			if(type == "TM"){	
				module = docid.substring(2, 4);
				if(module == "01"){
					this.getRouter().navTo("TM/approveLeaveDetail", {from: docid });
				}else if(module == "02")
				{
					this.getRouter().navTo("TM/approveChangeShift", {from: docid});
				}else if(module == "03")
				{
					this.getRouter().navTo("TM/approveChangeTurn", {from: docid});
				}
				else if(module == "04")
				{
					this.getRouter().navTo("TM/approveOtRequest", {from: docid});
				}
			}else if(type == "BE"){
				module = docid.substring(2, 4);
				if(module == "01")
				{
					this.getRouter().navTo("BE/approveStudentTuitionfee", {from: docid});
				}else if(module == "03")
				{	this.getRouter().initialize();
					this.getRouter().navTo("BE/approveUniform", {from: docid});
				}else if(module == "04")
				{
					this.getRouter().navTo("BE/approveOtherBenefit", {from: docid});
				}else if(module == "05")
				{
					this.getRouter().navTo("BE/approvebeneficiaryFuneralCost", {from: docid});
				}else if(module == "06")
				{	this.getRouter().initialize();
					this.getRouter().navTo("BE/approveScholarship", {from: docid});
				}else if(module == "07")
				{
					this.getRouter().navTo("BE/approveFuneralCost", {from: docid});
				}else if(module == "08")
				{
					this.getRouter().navTo("BE/approveFund", {from: docid});
				}else if(module == "09")
				{
					this.getRouter().navTo("BE/approveChildrenAllowanceType1", {from: docid});
				}else if(module == "10")
				{
					this.getRouter().navTo("BE/approveMSSFuneralCost", {from: docid});
				}else if(module == "11")
				{
					this.getRouter().navTo("BE/approveFund2", {from: docid});
				}else if(module == "12")
				{
					this.getRouter().navTo("BE/approveFund3", {from: docid});
				}else if(module == "13")
				{
					this.getRouter().navTo("BE/approveChildrenAllowanceTypeO", {from: docid});
				}else if(module == "02"){
					this.getRouter().navTo("BE/approveMedicalBenefit", {from: docid});
				}
				
			}else if(type == "PY"){
				this.getRouter().navTo("PY/approvetaxBreak", {from: docid});
			}else if(type == "PA"){
				module = docid.substring(2, 4);
				if(module == "01"){
					this.getRouter().navTo("PA/approveName", {from: docid});
				}else if(module == "02")
				{
					this.getRouter().navTo("PA/approveAddress", {from: docid});
				}
				else if(module == "03")
				{
					this.getRouter().navTo("PA/approveSpouse", {from: docid});
				}
				else if(module == "04")
				{
					this.getRouter().navTo("PA/approveFather", {from: docid});
				}else if(module == "05")
				{
					this.getRouter().navTo("PA/approveMother", {from: docid});
				}else if(module == "06")
				{
					this.getRouter().navTo("PA/approveAddEducation", {from: docid});
				}else if(module == "07")
				{
					this.getRouter().navTo("PA/approveChildren", {from: docid});
				}else if(module == "08")
				{
					this.getRouter().navTo("PA/approveAddParent", {from: docid});
				}else if(module == "09")
				{
					this.getRouter().navTo("PA/approvemaritalStatus", {from: docid});
				}
				
			}else if(type == "TE"){
				this.getRouter().navTo("TE/approveTrainingRegistration", {from: docid});
			}else if(type == "TM00002"){
				this.getRouter().navTo("TM/approveChangeShift", {from: "approval"});
			}
			
		},
		onMassApprove: function(){
			
			var user = jQuery.sap.getUriParameters().get("user");
			var date = new Date();
			var hh = date.getHours().toString().padStart(2,'0');
			var mm = date.getMinutes().toString().padStart(2,'0');
			var ss = date.getSeconds().toString().padStart(2,'0');
			var aedtm = new Date();
			aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
			var docData;
			
			var oTable = this.getView().byId("onProcessTabel");
			var oItems = oTable.getSelectedIndices();
			for(var it = 0; it < oItems.length; it++){
				
				var itm = oTable.getContextByIndex(oItems[it]).getObject();
				var docno = itm.docid;
				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
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
				
				var dctask = "";
				var dataJ = docData.tblDocheader;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/template/0",
		        	async: false,
		        	success: function(data){
		        		dctask = data.tblDoctask;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        }); 
				
				var json = dctask;
				json.taskkey.docid = dataJ.docid;
				json.docno = dataJ.docid;
				json.module = dataJ.module;
				json.header = dataJ.header;
				json.bedat = dataJ.bedat;
				json.aedat = aedtm+"T"+[hh,mm,ss].join(":");
				json.taskkey.pernr = user;
				json.del_flag = "MASS APPROVE";
				json.userad = dataJ.userad;
				json.status = "3";
				json.sttext = "อนุมัติ";
				json = JSON.stringify(json);
				
				var postdctask = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask",
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
				
				$.ajax(postdctask).done(function (response) {
					console.log(response);
					dctask = response.tblDoctask;
				});
				
				var pernrpad = dataJ.userad.toString().padStart(8,'0');
				
				var docid = dataJ.docid;
				var module = "";
				var type = docid.substring(0, 2);
				
				if(type == "TM"){	
					module = docid.substring(2, 4);
					if(module == "01"){
						
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
						
						if(dataJ.pernr == parseInt(pa.paPos.manag).toString())
						{
							dataJ.userch = dataJ.pernr;
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							dataJ.pernr = parseInt(pa.paPos.upman).toString();
						}
						else
						{
							dataJ.status = "3";
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							dataJ.sttext = "อนุมัติ";
						}
						
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
					}else if(module == "02")
					{
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
						
						if(dataJ.pernr == parseInt(pa.paPos.manag).toString())
						{
							dataJ.userch = dataJ.pernr;
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							dataJ.pernr = parseInt(pa.paPos.upman).toString();
						}
						else
						{
							dataJ.status = "3";
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							dataJ.sttext = "อนุมัติ";
						}
						
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
					}else if(module == "03")
					{
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
						
						if(dataJ.pernr == parseInt(pa.paPos.manag).toString())
						{
							dataJ.userch = dataJ.pernr;
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							dataJ.pernr = parseInt(pa.paPos.upman).toString();
						}
						else
						{
							dataJ.status = "3";
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							dataJ.sttext = "อนุมัติ";
						}
						
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
					}
					else if(module == "04")
					{
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
						
						if(dataJ.pernr == parseInt(pa.paPos.manag).toString())
						{
							dataJ.userch = dataJ.pernr;
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							dataJ.pernr = parseInt(pa.paPos.upman).toString();
						}
						else
						{
							dataJ.status = "3";
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							dataJ.sttext = "อนุมัติ";
						}
						
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
					}
				}else if(type == "BE"){
					module = docid.substring(2, 4);
					if(module == "02"){
						
						var user = jQuery.sap.getUriParameters().get("user");
						
						var docData = new JSONModel();
						
						var aedtm = new Date();
						aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
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
						
						var json = "";
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+dataJ.userad,
				        	async: false,
				        	success: function(data){
				        		pa0001 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
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
				        })
				        
				        var script = docData.tblDocdetail.script;
			
						var pa9703_arr = script.split(",");
						
						var hcode = "";
						
						var arrayLength = pa9703_arr.length;
						for (var i = 0; i < arrayLength; i++) {
							var fieldar = pa9703_arr[i].split(":");
							var field = fieldar[0];
						    if(field.includes("hname") == true){ hcode = pa9703_arr[i].split(":").pop(); }

						}
						
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
						
						dataJ.userch = user;
						dataJ.pernr = "";
						var orgeh;
						if(dataJ.orgeh == wf.List[0].org1){
							if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
								dataJ.status = "3";
								dataJ.sttext = "อนุมัติ";
								dataJ.aedat = aedtm;
							}else{
								dataJ.orgeh = wf.List[0].org2;
							}
						}else if(dataJ.orgeh == wf.List[0].org2){
							if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
								dataJ.status = "3";
								dataJ.sttext = "อนุมัติ";
								dataJ.aedat = aedtm;
							}else{
								dataJ.orgeh = wf.List[0].org3;
							}
						}else if(dataJ.orgeh == wf.List[0].org3){
							orgeh = wf.List[0].org3;
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm;
						}else {
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm;
						}
						
						dataJ = JSON.stringify(dataJ);
						url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
					}
					if(module == "03"){
						
						var user = jQuery.sap.getUriParameters().get("user");
						
						var docData = new JSONModel();
						
						var aedtm = new Date();
						aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
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
						
						var json = "";
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
						
						
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
						
						dataJ.userch = user;
						
						dataJ.status = "3";
						dataJ.sttext = "รับทราบ";
						dataJ.aedat = aedtm;
						
						dataJ = JSON.stringify(dataJ);
						
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
					}
					if(module == "06"){
						
						var user = jQuery.sap.getUriParameters().get("user");
						
						var docData = new JSONModel();
						
						var aedtm = new Date();
						aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
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
						
						var json = "";
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
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
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/12",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						dataJ.userch = user;
						dataJ.pernr = "";
						if(dataJ.orgeh == ""){
							dataJ.orgeh = wf.List[0].org1;
						}else if(pa0001.PA0001.orgeh == wf.List[0].org1){
							if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
								dataJ.status = "3";
								dataJ.sttext = "อนุมัติ";
								dataJ.aedat = aedtm;
							}else{
								dataJ.orgeh = wf.List[0].org2;
							}
						}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
							if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
								dataJ.status = "3";
								dataJ.sttext = "อนุมัติ";
								dataJ.aedat = aedtm;
							}else{
								dataJ.orgeh = wf.List[0].org3;
							}
						}else if(pa0001.PA0001.orgeh == wf.List[0].org3){
							dataJ.orgeh = wf.List[0].org3;
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm;
						}else {
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm;
						}
						
						dataJ = JSON.stringify(dataJ);
						url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
					}
					if(module == "08" || module == "12" || module == "11"){
						
						var user = jQuery.sap.getUriParameters().get("user");
						
						var docData = new JSONModel();
						
						var aedtm = new Date();
						aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
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
						
						var json = "";
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
						
						var wf;
						var pa0001;
						
						
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm;
						dataJ.userch = user;
						
						
						dataJ = JSON.stringify(dataJ);
						url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
					}
					if(module == "09" || module == "13"){
						
						var user = jQuery.sap.getUriParameters().get("user");
						
						var docData = new JSONModel();
						
						var aedtm = new Date();
						aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
						
						var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno;
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
						
						var json = "";
						var dctask = "";
						var dataJ = docData.tblDocheader;
						
						
						var wf;
						var pa0001;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+dataJ.userad,
				        	async: false,
				        	success: function(data){
				        		pa0001 = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/6",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
						
						dataJ.userch = user;
						
						if(pa0001.PA0001.orgeh == wf.List[0].org1){
							if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
								dataJ.status = "3";
								dataJ.sttext = "อนุมัติ";
								dataJ.aedat = aedtm;
							}else{
								dataJ.orgeh = wf.List[0].org2;
							}	
						}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
							if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
								dataJ.status = "3";
								dataJ.sttext = "อนุมัติ";
								dataJ.aedat = aedtm;
							}else{
								dataJ.orgeh = wf.List[0].org3;
							}
						}else if(pa0001.PA0001.orgeh == wf.List[0].org3){
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm;
						}
						
						
						dataJ = JSON.stringify(dataJ);
						url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno
						var putHead = {
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
								  "data": dataJ
								}
						
						$.ajax(putHead).done(function (response) {
							console.log(response);
							docData = response.tblDocheader;
						});
						
					}
					
				}else if(type == "PY"){
					
					dataJ.status = "3";
					dataJ.sttext = "รับทราบ";
					dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
					dataJ = JSON.stringify(dataJ);
					
					var putHead = {
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
							  "data": dataJ
							}
					
					$.ajax(putHead).done(function (response) {
						console.log(response);
						docData = response.tblDocheader;
					});
					
					var pa9703 = new JSONModel();
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9706";
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
					
					var pa9706_arr = script.split(",");
					
					var pernr;
					var ename;
					var id1;
					var status;
					var childamt1;
					var childamt2;
					var disperson;
					var rmffund;
					var ltffund;
					var houseloan;
					var innsure;
					var health;
					var oldfund;
					var mainsur;
					var fainsur;
					var moinsur;
					var fasinsur;
					var mosinsur;
					var father;
					var mother;
					var fsther;
					var msther;
					var edufund;
					var donate;
					var aotdonate;
					var cycle;
					var total;
					var spouse;
					
					var arrayLength = pa9706_arr.length;
					for (var i = 0; i < arrayLength; i++) {
						var fieldar = pa9706_arr[i].split(":");
						var field = fieldar[0];
						if(field.includes("pernr") == true){ pernr = pa9706_arr[i].split(":").pop(); }
						if(field.includes("ename") == true){ ename = pa9706_arr[i].split(":").pop(); }
						if(field.includes("id1") == true){ id1 = pa9706_arr[i].split(":").pop(); }
						if(field.includes("status") == true){ status = pa9706_arr[i].split(":").pop(); }
						if(field.includes("spouse") == true){ spouse = pa9706_arr[i].split(":").pop(); }
						if(field.includes("childamt1") == true){ childamt1 = pa9706_arr[i].split(":").pop(); }
						if(field.includes("childamt2") == true){ childamt2 = pa9706_arr[i].split(":").pop(); }
						if(field.includes("disperson") == true){ disperson = pa9706_arr[i].split(":").pop(); }
						if(field.includes("rmffund") == true){ rmffund = pa9706_arr[i].split(":").pop(); }
						if(field.includes("ltffund") == true){ ltffund = pa9706_arr[i].split(":").pop(); }
						if(field.includes("houseloan") == true){ houseloan = pa9706_arr[i].split(":").pop(); }
						if(field.includes("innsure") == true){ innsure = pa9706_arr[i].split(":").pop(); }
						if(field.includes("health") == true){ health = pa9706_arr[i].split(":").pop(); }
						if(field.includes("oldfund") == true){ oldfund = pa9706_arr[i].split(":").pop(); }
						if(field.includes("mainsur") == true){ mainsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("fainsur") == true){ fainsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("moinsur") == true){ moinsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("fasinsur") == true){ fasinsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("mosinsur") == true){ mosinsur = pa9706_arr[i].split(":").pop(); }
						if(field.includes("father") == true){ father = pa9706_arr[i].split(":").pop(); }
						if(field.includes("mother") == true){ mother = pa9706_arr[i].split(":").pop(); }
						if(field.includes("fsther") == true){ fsther = pa9706_arr[i].split(":").pop(); }
						if(field.includes("msther") == true){ msther = pa9706_arr[i].split(":").pop(); }
						if(field.includes("edufund") == true){ edufund = pa9706_arr[i].split(":").pop(); }
						if(field.includes("donate") == true){ donate = pa9706_arr[i].split(":").pop(); }
						if(field.includes("aotdonate") == true){ aotdonate = pa9706_arr[i].split(":").pop(); }
						if(field.includes("cycle") == true){ cycle = pa9706_arr[i].split(":").pop(); }
						if(field.includes("total") == true){ total = pa9706_arr[i].split(":").pop(); }
					    
					}
					
					
					json = {"chamt": donate,
				            "chno1": childamt1,
				            "chno2": null,
				            "spall": status,
				            "lpcur": null,
				            "lprem": innsure,
				            "taxid": null,
				            "mgint": houseloan,
				            "mgcur": null,
				            "chcur": null,
				            "chno3": null,
				            "spins": mainsur,
				            "sfpins": fasinsur,
				            "sprcur": null,
				            "smctr": msther,
				            "fcntr": father,
				            "hhcur": null,
				            "sfpcur": null,
				            "hccur": null,
				            "mccur": null,
				            "sfcur": null,
				            "mfcur": null,
				            "pncur": null,
				            "lteqf": ltffund,
				            "chedu": edufund,
				            "hahir": null,
				            "allty": null,
				            "mprcur": null,
				            "cecur": null,
				            "fccur": null,
				            "smcur": null,
				            "smpins": mosinsur,
				            "hacsh": null,
				            "pensn": null,
				            "spcur": null,
				            "mcntr": mother,
				            "mprins": moinsur,
				            "smpcur": null,
				            "sprctr": null,
				            "mfinv": rmffund,
				            "fprins": fainsur,
				            "sfctr": fsther,
				            "ltcur": null,
				            "fprcur": null,
				            "disch": null,
				            "eetax": null,
				            "immexp": null,
				            "dino1": disperson,
				            "hicur": null,
				            "lncur": null,
				            "immcur": null,
				            "turcur": null,
				            "imdat": null,
				            "turexm": null,
				            "hiexp": health,
				            "diall": null,
				            "lpnsn": oldfund,
				            "refex": null,
				            "itbld": null,
				            "preas": null,
				            "flag1": null,
				            "flag2": null,
				            "flag3": null,
				            "flag4": null,
				            "aedtm": aedtm,
				            "itxex": null,
				            "ordex": null,
				            "uname": null,
				            "histo": null,
				            "rese2": null,
				            "rese1": null,
				            "grpvl": null,
				            pakey:{	pernr:pernr,
								subty:"0001",
								mandt:"120",
								begda:aedtm,
								endda:aedtm,
								objps:"",
								sprps:"",
								seqnr:""
				            }
					};
					
					json = JSON.stringify(json);
					
					var postpa0364 = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0364",
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
					
					$.ajax(postpa0364).done(function (response) {
						console.log(response);
						
					});
					var dat = new Date();
					var y = dat.getFullYear();
					var m = (dat.getMonth()+1).toString().padStart(2,'0');
					var d = dat.getDate().toString().padStart(2,'0');
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRPYI02/"+y+"/"+m+"/"+d;
					$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		console.log(data);
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					
				}else if(type == "PA"){
					
					dataJ.status = "3";
					dataJ.sttext = "อนุมัติ";
					dataJ.userch = user;
					dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");

					dataJ = JSON.stringify(dataJ);
					
					var putHead = {
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
							  "data": dataJ
							}
					
					$.ajax(putHead).done(function (response) {
						console.log(response);
						docData = response.tblDocheader;
					});
					
				}else if(type == "TE"){
					
				}
			}
			
			this.onInit();
		},
		onPressMytaskDocNo: function(value){
			
			var type = value.getSource().data("mydata");
			
			if(type == "TM00001"){
				this.getRouter().navTo("TM/approveLeaveDetail", {from: "myTask"});
			}else if(type == "BE00001"){
				this.getRouter().navTo("BE/approveMedicalBenefit", {from: "myTask"});
			}else if(type == "PA00001"){
				this.getRouter().navTo("PA/approveAddress", {from: "myTask"});
			}else if(type == "TE00001"){
				this.getRouter().navTo("TE/approveTrainingRegistration", {from: "myTask"});
			}else if(type == "TM00002"){
				this.getRouter().navTo("TM/approveChangeShift", {from: "myTask"});
			}
			
		},
		handleTxtFilter : function(oEvent) {
			var sQuery = oEvent ? oEvent.getParameter("query") : null;
			this._oTxtFilter = null;

			if (sQuery) {
				this._oTxtFilter = new Filter([
//					new Filter("DocType", FilterOperator.Contains, sQuery),
//					new Filter("DocName", FilterOperator.Contains, sQuery)
					new Filter("module", FilterOperator.Contains, sQuery),
					new Filter("header", FilterOperator.Contains, sQuery),
					new Filter("username", FilterOperator.Contains, sQuery),
					new Filter("docid", FilterOperator.Contains, sQuery),
					new Filter("header", FilterOperator.Contains, sQuery),
					new Filter("bedat", FilterOperator.Contains, sQuery),
					new Filter("sttext", FilterOperator.Contains, sQuery),
					new Filter("ltext1", FilterOperator.Contains, sQuery),
					new Filter("ltext2", FilterOperator.Contains, sQuery),
					new Filter("ltext3", FilterOperator.Contains, sQuery),
					new Filter("sapst", FilterOperator.Contains, sQuery),
					new Filter("saptxt", FilterOperator.Contains, sQuery)
				], false);
			}

			this.getView().getModel("ui").setProperty("/filterValue", sQuery);

			if (oEvent) {
				this._filter();
			}
		},
		clearAllFilters : function() {
			this.handleTxtFilter();
			this.handleFacetFilterReset();
			this._filter();
		},
		_getFacetFilterLists : function() {
			var oFacetFilter = this.byId("facetFilter");
			return oFacetFilter.getLists();
		},
		_filter : function () {
			var oFilter = null;

			if (this._oTxtFilter && this._oFacetFilter) {
				oFilter = new sap.ui.model.Filter([this._oTxtFilter, this._oFacetFilter], true);
			} else if (this._oTxtFilter) {
				oFilter = this._oTxtFilter;
			} else if (this._oFacetFilter) {
				oFilter = this._oFacetFilter;
			}

			this.byId("onProcessTabel").getBinding("rows").filter(oFilter, "Application");
		},
		handleListClose : function(oEvent) {
			var aFacetFilterLists = this._getFacetFilterLists().filter(function(oList) {
				return oList.getActive() && oList.getSelectedItems().length;
			});

			this._oFacetFilter = new Filter(aFacetFilterLists.map(function(oList) {
				return new Filter(oList.getSelectedItems().map(function(oItem) {
//					return new Filter(oList.getKey(), FilterOperator.EQ, oItem.getText());
					return new Filter(oList.getKey(), FilterOperator.EQ, oItem.getKey());
				}), false);
			}), true);

			this._filter();
		},
		handleFacetFilterReset : function(oEvent) {
			var aFacetFilterLists = this._getFacetFilterLists();

			for (var i = 0; i < aFacetFilterLists.length; i++) {
				aFacetFilterLists[i].setSelectedKeys();
			}
			this._oFacetFilter = null;

			if (oEvent) {
				this._filter();
			}
		},
		
		
		handleTxtFilterMyTask : function(oEvent) {
			var sQuery = oEvent ? oEvent.getParameter("query") : null;
			this._oTxtFilterMyTask = null;

			if (sQuery) {
				this._oTxtFilterMyTask = new Filter([
//					new Filter("DocType", FilterOperator.Contains, sQuery),
//					new Filter("DocName", FilterOperator.Contains, sQuery)
					new Filter("module", FilterOperator.Contains, sQuery),
					new Filter("header", FilterOperator.Contains, sQuery),
					new Filter("username", FilterOperator.Contains, sQuery),
					new Filter("docid", FilterOperator.Contains, sQuery),
					new Filter("header", FilterOperator.Contains, sQuery),
					new Filter("bedat", FilterOperator.Contains, sQuery),
					new Filter("sttext", FilterOperator.Contains, sQuery),
					new Filter("ltext1", FilterOperator.Contains, sQuery),
					new Filter("ltext2", FilterOperator.Contains, sQuery),
					new Filter("ltext3", FilterOperator.Contains, sQuery),
					new Filter("sapst", FilterOperator.Contains, sQuery),
					new Filter("saptxt", FilterOperator.Contains, sQuery)
				], false);
			}

			this.getView().getModel("ui").setProperty("/filterValue", sQuery);

			if (oEvent) {
				this._filterMyTask();
			}
		},
		clearAllFiltersMyTask : function() {
			this.handleTxtFilterMyTask();
			this.handleFacetFilterResetMyTask();
			this._filterMyTask();
		},
		_getFacetFilterListsMyTask : function() {
			var oFacetFilter = this.byId("facetFilterMyTask");
			return oFacetFilter.getLists();
		},
		_filterMyTask : function () {
			var oFilterMyTask = null;

			if (this._oTxtFilterMyTask && this._oFacetFilterMyTask) {
				oFilterMyTask = new sap.ui.model.Filter([this._oTxtFilterMyTask, this._oFacetFilterMyTask], true);
			} else if (this._oTxtFilterMyTask) {
				oFilterMyTask = this._oTxtFilterMyTask;
			} else if (this._oFacetFilterMyTask) {
				oFilterMyTask = this._oFacetFilterMyTask;
			}

			this.byId("myTaskTable").getBinding("rows").filter(oFilterMyTask, "Application");
		},
		handleListCloseMyTask : function(oEvent) {
			var aFacetFilterLists = this._getFacetFilterListsMyTask().filter(function(oList) {
				return oList.getActive() && oList.getSelectedItems().length;
			});

			this._oFacetFilterMyTask = new Filter(aFacetFilterLists.map(function(oList) {
				return new Filter(oList.getSelectedItems().map(function(oItem) {
//					return new Filter(oList.getKey(), FilterOperator.EQ, oItem.getText());
					return new Filter(oList.getKey(), FilterOperator.EQ, oItem.getKey());
				}), false);
			}), true);

			this._filterMyTask();
		},
		handleFacetFilterResetMyTask : function(oEvent) {
			var aFacetFilterLists = this._getFacetFilterListsMyTask();

			for (var i = 0; i < aFacetFilterLists.length; i++) {
				aFacetFilterLists[i].setSelectedKeys();
			}
			this._oFacetFilterMyTask = null;

			if (oEvent) {
				this._filterMyTask();
			}
		},
		
		handleTxtFilterHistory : function(oEvent) {
			var sQuery = oEvent ? oEvent.getParameter("query") : null;
			this._oTxtFilterHistory = null;

			if (sQuery) {
				this._oTxtFilterHistory = new Filter([
//					new Filter("DocType", FilterOperator.Contains, sQuery),
//					new Filter("DocName", FilterOperator.Contains, sQuery),
					new Filter("module", FilterOperator.Contains, sQuery),
					new Filter("header", FilterOperator.Contains, sQuery),
					new Filter("username", FilterOperator.Contains, sQuery),
					new Filter("docid", FilterOperator.Contains, sQuery),
					new Filter("header", FilterOperator.Contains, sQuery),
					new Filter("bedat", FilterOperator.Contains, sQuery),
					new Filter("sttext", FilterOperator.Contains, sQuery),
					new Filter("ltext1", FilterOperator.Contains, sQuery),
					new Filter("ltext2", FilterOperator.Contains, sQuery),
					new Filter("ltext3", FilterOperator.Contains, sQuery)
				], false);
			}

			this.getView().getModel("ui").setProperty("/filterValue", sQuery);

			if (oEvent) {
				this._filterHistory();
			}
		},
		clearAllFiltersHistory : function() {
			this.handleTxtFilterHistory();
			this.handleFacetFilterResetHistory();
			this._filterHistory();
		},
		_getFacetFilterListsHistory : function() {
			var oFacetFilter = this.byId("facetFilterHistory");
			return oFacetFilter.getLists();
		},
		_filterHistory : function () {
			var oFilterHistory = null;

			if (this._oTxtFilterHistory && this._oFacetFilterHistory) {
				oFilterHistory = new sap.ui.model.Filter([this._oTxtFilterHistory, this._oFacetFilterHistory], true);
			} else if (this._oTxtFilterHistory) {
				oFilterHistory = this._oTxtFilterHistory;
			} else if (this._oFacetFilterHistory) {
				oFilterHistory = this._oFacetFilterHistory;
			}

			this.byId("HistoryTable").getBinding("rows").filter(oFilterHistory, "Application");
		},
		handleListCloseHistory : function(oEvent) {
			var aFacetFilterLists = this._getFacetFilterListsHistory().filter(function(oList) {
				return oList.getActive() && oList.getSelectedItems().length;
			});

			this._oFacetFilterHistory = new Filter(aFacetFilterLists.map(function(oList) {
				return new Filter(oList.getSelectedItems().map(function(oItem) {
					return new Filter(oList.getKey(), FilterOperator.EQ, oItem.getText());
				}), false);
			}), true);

			this._filterHistory();
		},
		handleFacetFilterResetHistory : function(oEvent) {
			var aFacetFilterLists = this._getFacetFilterListsHistory();

			for (var i = 0; i < aFacetFilterLists.length; i++) {
				aFacetFilterLists[i].setSelectedKeys();
			}
			this._oFacetFilterHistory = null;

			if (oEvent) {
				this._filterHistory();
			}
		}
	});
});