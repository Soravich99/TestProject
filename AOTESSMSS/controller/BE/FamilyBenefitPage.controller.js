sap.ui
		.define(
				[ 'sap/ui/demo/toolpageapp/controller/BaseController',
						'sap/m/MessageToast', 'sap/ui/model/json/JSONModel',
						'sap/m/MessageBox' , 'sap/m/Dialog'],
				function(BaseController, MessageToast, JSONModel, MessageBox, Dialog) {
					"use strict";
					return BaseController
							.extend(
									"sap.ui.demo.toolpageapp.controller.BE.FamilyBenefitPage",
									{

										onInit : function() {
											var oViewModel = new JSONModel({
												lastLogin : new Date(
														Date.now() - 86400000)
											});
											
											
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
											
											var oModel = new sap.ui.model.json.JSONModel();
											 oModel.loadData("model/ProductCollection.json");
											 this.getView().setModel(oModel);
											this.setModel(oViewModel, "view");
										},

										//Dialog 
									    onCloseDialog : function() 

									    { 
									     this._getDialog().close(); 
									     this._oDialog.destroy(); 
									     this._oDialog = false; 

									    }, 

									    onExit : function() 

									    { 
									     if (this._oDialog) { 
									      this._oDialog.destroy(); 
									     } 

									    }, 

									    onOpenFDialog : function(oEvent) { 

									     this._getDialog(oEvent).open(); 

									    }, 

									    _getDialog : function(oEvent) { 

									     // check if dialog is not open at all 

									     if (!this._oDialog) { 

									      var oTable = this.byId("idEducationHistoryTable"); 

									      this._oDialog = sap.ui.xmlfragment( 
									        "sap.ui.demo.toolpageapp.view.ViewStudentTuitionfee", 
									        this.getView().getController()); 

									      this.getView().addDependent(this._oDialog);	

									      var sSelectedContext = oTable.getSelectedContexts() 
									        .toString() 

									      // binding fragment form to SelecteContext of Table 

									      sap.ui.getCore().byId("DisplayFam") 
									        .bindElement(sSelectedContext); 

									     } 
									     return this._oDialog; 

									    },
									    
									    /****************/
									    
									  /*  onOpenDialog: function() {
											var oView = this.getView();
											
											var oDialog = oView.byId("helloDialog");
											// create dialog lazily
											if (!oDialog) {
												// create dialog via fragment factory
										oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.toolpageapp.view.ViewStudentTuitionfee", this);
												oView.addDependent(oDialog);
											}
											oDialog.open();
										},
										onCloseDialog: function() {
											this.getView().byId("helloDialog").close();
										},
										
										/********************/

										handleConfirmationDeletePress : function(
												oEvent) {
											var bCompact = !!this
													.getView()
													.$()
													.closest(
															".sapUiSizeCompact").length;
											var oTable = this
													.byId('idEducationHistoryTable');
											var oDeleteColumn = oTable
													.getItems()[1]; // fetch the
																	// column
																	// you want
																	// to hide

											MessageBox
													.confirm(
															"Are you sure to delete?",
															{
																icon : sap.m.MessageBox.Icon.INFORMATION,
																title : "Confirm Delete",
																actions : [
																		sap.m.MessageBox.Action.YES,
																		sap.m.MessageBox.Action.NO ],
																onClose : function(
																		oAction) {
																	if (oAction == "YES") {
																		oDeleteColumn
																				.setVisible(false);
																	} else if (oAction == "NO") {

																	}

																}
															});
										},

										onMasterPressed : function(oEvent) {
											var oContext = oEvent.getParameter(
													"listItem")
													.getBindingContext("side");
											var sPath = oContext.getPath()
													+ "/selected";
											oContext.getModel().setProperty(
													sPath, true);
											var sSelectedMasterElement = oContext
													.getProperty("title");
											var sKey = oContext
													.getProperty("key");
											switch (sSelectedMasterElement) {
											case "System Settings": {
												this.getRouter().navTo(sKey);
												break;
											}
											default: {
												MessageToast
														.show(sSelectedMasterElement
																+ " was pressed");
												break;
											}
											}
										},

										onSavePressed : function() {
											MessageToast.show("Saved");
										},

										onCancelPressed : function() {
											MessageToast.show("Cancel");
										},

										onEditPressed : function() {
											MessageToast.show("Edit");
										},
										handleLinkPress : function() {
											this.getRouter().navTo(
													"createStudentTuitionfee");
										},
										handleEditLinkPress : function() {
											this.getRouter().navTo(
													"editStudentTuitionfee");
										}
									});
				});