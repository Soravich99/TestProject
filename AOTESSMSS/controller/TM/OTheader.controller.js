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
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TM.OTheader", {

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
			
			var docheader = new JSONModel();
			
			var oView = this.getView();
			
			var oModelLeave = new JSONModel("model/Worklist.json");
			this.getView().setModel(oModelLeave);
			this.byId("PERNR").setText(user);
			var pernr = this.byId("PERNR").getText();
			var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRTME01_HEADER";
			$.ajax({
	        	type: "GET",
	        	url: getDocurl,
	        	async: false,
	        	success: function(data){
	        		docheader = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			for(var x=0;x< docheader.List.length;x++){
				var wkey = window.btoa(unescape(encodeURIComponent(docheader.List[x].docno)));
				var str2 = decodeURIComponent(escape(window.atob(wkey)));
				var doc = "";
				docheader.List[x].webkey = wkey;
				
				var aedtm = new Date(docheader.List[x].aedtm);
				
				docheader.List[x].aedtm = aedtm.getDate().toString().padStart(2,'0')+"/"+(aedtm.getMonth() + 1).toString().padStart(2,'0')+"/"+aedtm.getFullYear().toString();
			}
			
			var dcHeadx = new JSONModel(docheader);
			
			oView.setModel(dcHeadx, "docList");
			oView.setModel(new JSONModel({
				filterValue: "",
				rowCount: 25
			}), "ui");
			
			
			this._oTxtFilter = null;
			this._oFacetFilter = null;
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
			var type = decodeURIComponent(escape(window.atob(docid))).substring(0, 3);
			if(type == "OTI" || type == "OTE"){
				this.getRouter().navTo("TM/OTdetail", {from: docid });
			}
			else{
				this.getRouter().navTo("TM/SHIFTdetail", {from: docid });
			}
			
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
					new Filter("DocType", FilterOperator.Contains, sQuery),
					new Filter("DocName", FilterOperator.Contains, sQuery)
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
					return new Filter(oList.getKey(), FilterOperator.EQ, oItem.getText());
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
					new Filter("DocType", FilterOperator.Contains, sQuery),
					new Filter("DocName", FilterOperator.Contains, sQuery)
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
					return new Filter(oList.getKey(), FilterOperator.EQ, oItem.getText());
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
					new Filter("DocType", FilterOperator.Contains, sQuery),
					new Filter("DocName", FilterOperator.Contains, sQuery)
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