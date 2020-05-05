sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
		'jquery.sap.global', 'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel',
		'sap/m/ResponsivePopover', 'sap/m/MessagePopover', 'sap/m/ActionSheet',
		'sap/m/Button', 'sap/m/Link', 'sap/m/Bar',
		'sap/ui/layout/VerticalLayout', 'sap/m/NotificationListItem',
		'sap/m/MessagePopoverItem', 'sap/ui/core/CustomData', 'sap/m/MessageBox',
		'sap/m/MessageToast',
		'sap/m/Dialog',
		'sap/m/Label',
		'sap/m/Text',
		'sap/ui/layout/HorizontalLayout',
		'sap/m/CheckBox'], function(BaseController, jQuery, Fragment,
		Controller, JSONModel, ResponsivePopover, MessagePopover, ActionSheet,
		Button, Link, Bar, VerticalLayout, NotificationListItem,
		MessagePopoverItem, CustomData,MessageBox, MessageToast,Dialog,Label,Text,HorizontalLayout,CheckBox) {
	"use strict";

	return BaseController.extend("sap.ui.demo.toolpageapp.controller.App", {

		onInit : function() {
			
			var oViewModel = new JSONModel({
				lastLogin: new Date(Date.now() - 86400000)
			});
						
			var data = jQuery.sap.getUriParameters().get("lqex");
			var decd = "";
			var settings = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/UNHASH/",
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
					  "data": data
					}

				$.ajax(settings).done(function (response) {
				  console.log(response); 
				  decd = response;
				});
			
			
			var itex = decd.split("|");
			var user = itex[0];
			var user = jQuery.sap.getUriParameters().get("user");
			
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
	        
	        var userbtn = this.getView().byId("userButton");
			
	        if(titel == " " || titel  == "0"){
	        	titel = t522g.T522G.atext;
	        }
			
			var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
        
			userbtn.setText(cStr);
			
			var pernr = user;
			
			
			this.getView().addStyleClass(
					this.getOwnerComponent().getContentDensityClass());
			
			
			
			
		},
		onAfterRendering: function(){
			this.byId("notificationButton").firePress();
			
			window.setInterval(this.byId("notificationButton").firePress(),60000);
		},
			/**
			 * Convenience method for accessing the router.
			 * @public
			 * @param {sap.ui.base.Event} oEvent The item select event
			 */
			onItemSelect: function(oEvent) {
				var oItem = oEvent.getParameter('item');
				var sKey = oItem.getKey();
				var user = jQuery.sap.getUriParameters().get("user");
				var oThis = this;
//				if (sKey !== "home" && sKey !== "systemSettings" && sKey !== "statistics" && sKey !== "leaveDetail"
//					&& sKey !== "myInfo" && sKey !== "myLeave" && sKey !== "myTask" && sKey !== "paySlip" && sKey !== "teamCalendar"
//					&& sKey !== "changeShift" && sKey !== "changeTurn" && sKey !== "trainingList" && sKey !== "spouse" && sKey !== "children"
//						&& sKey !== "father" && sKey !== "mother" && sKey !== "address" && sKey !== "education" && sKey !== "hello" && sKey !== "hrApproval" && sKey !== "editMyInfo"
//							&& sKey !== "trainingAssignList" && sKey !== "trainingHistory" && sKey !== "searchTrainingHistory") {
//					MessageToast.show(sKey);
//				} else {
				if(sKey == "PA/father"){
					 var have_father;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/11",
				        	async: false,
				        	success: function(data){
				        		if(data.List.length > 0){
				        			have_father	= "X";  
				        		}else{
				        			have_father = "";
				        		}
				        		        		
				        	},
				        	error: function(){
				        		have_father = "";
				        	}
				        });
				        
						if(have_father != "X"){
							sKey = "home";
				        	MessageToast.show("You not Father in System");
				        }else{
				        	oThis.getRouter().navTo(sKey);
				        }
						
				}
				if(sKey == "PA/mother"){
					var have_mother;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/12",
			        	async: false,
			        	success: function(data){
			        		if(data.List.length > 0){
			        			have_mother	= "X";  
			        		}else{
			        			have_mother = "";
			        		}
			        		 		
			        	},
			        	error: function(){
			        		have_mother = "";
			        	}
			        });
			        
					if(have_mother != "X"){
						sKey = "home";
			        	MessageToast.show("You not Mother in System");
			        	
			        }else{
			        	oThis.getRouter().navTo(sKey);
			        }
				}
				if(sKey == "BE/createScholarship"){
					var TimeScholar;
					$.ajax({
				     	type: "GET",
				      	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Scholar",
				       	async: false,
				       	success: function(data){
				       		TimeScholar = data;
				       		
				       	},
				       	error: function(){
				       		
				       	}
				    });
					var cur_date = new Date();
					var begda = new Date(TimeScholar.TimeScholar.begda);
					var endda = new Date(TimeScholar.TimeScholar.endda);
					if(cur_date < begda || cur_date > endda){
						sKey = "home";
						MessageToast.show("ไม่อยู่ในระยะเวลาเปิดให้ทำการขอทุุนการศึกษา");
					}else{
						oThis.getRouter().navTo(sKey);
					}
				}
				if(sKey == "BE/createUniform"){
					
					var err = "";
					
					var TimeScholar;
					$.ajax({
				     	type: "GET",
				      	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Uniform",
				       	async: false,
				       	success: function(data){
				       		TimeScholar = data;
				       		
				       	},
				       	error: function(){
				       		
				       	}
				    });
					var cur_date = new Date();
					var begda = new Date(TimeScholar.TimeScholar.begda);
					var endda = new Date(TimeScholar.TimeScholar.endda);
					if(cur_date < begda || cur_date > endda){
						err = "X";
						sKey = "home";
						MessageToast.show("ไม่อยู่ในระยะเวลาเปิดให้ทำการสำรวจเครื่องแบบ");
					}else{
						err = "";
					}
					
					var TimeScholar;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/Uniforml",
			        	async: false,
			        	success: function(data){
			        		TimeScholar = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var date = new Date(TimeScholar.TimeScholar.begda);
					
					var pa0041;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0041/"+user,
			        	async: false,
			        	success: function(data){
			        		pa0041 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(pa0041.List.length > 0){
						if(pa0041.List[0].dat01 > TimeScholar.TimeScholar.begda){
							err = "X";
							sKey = "home";
							MessageToast.show("วันที่จ้างงานไม่มีสิทธิให้ทำการสำรวจเครื่องแบบ");
						}else{
							err = "";
						}
					}
					
					if(err != "X"){
						oThis.getRouter().navTo(sKey);
					}
					
				}
				if(sKey == "BE/medicalBenefit"){
//					MessageBox.information(
//							"ให้พนักงานกรอกข้อมูลจริง ตามที่ปรากฏในใบเสร็จ และเตรียมอกสารที่เกี่ยวข้อง เพื่อแนบไปพร้อมกับการเบิกครั้งนี้ด้วย",
//							{
//								actions: [sap.m.MessageBox.Action.OK],
//								onClose: function(sAction) {
//									oThis.getRouter().navTo(sKey);
//								}
//							}
//						);
					
					
					var dialog = new Dialog({
						title: 'Confirm',
						type: 'Message',
						content: [
							new HorizontalLayout({
								content: [
									new VerticalLayout({
										content: [
											new Text({ text: 'ให้พนักงานกรอกข้อมูลจริง ตามที่ปรากฏในใบเสร็จ และเตรียมอกสารที่เกี่ยวข้อง เพื่อแนบไปพร้อมกับการเบิกครั้งนี้ด้วย' }),
											new Text({ text: 'สำหรับเอกสารที่มีภาษีมูลค่าเพิ่ม ให้ติดต่อหน่วยการเงินของแต่ละท่า' }),
											new Text({ text: 'หากตรวจสอบพบว่า ข้อมูลที่ท่านกรอกไม่เป็นความจริง อาจถูกพิจารณาให้มีโทษทางวินัย' }),
											new CheckBox({
												text: 'ยอมรับ',
												select: function(){
													oThis.getRouter().navTo(sKey);
													dialog.close();
												}
											})
											]
									})
								]
							})
						],
//						beginButton: new Button({
//							text: 'ยอมรับ',
//							press: function () {
//								oThis.getRouter().navTo(sKey);
//								dialog.close();
//							}
//						}),
						afterClose: function() {
							dialog.destroy();
						}
					});

					dialog.open();
				}else{
					oThis.getRouter().navTo(sKey);
				}
				
				

				

				
//				}
			},
			
			onConfirmDialog: function () {
				var dialog = new Dialog({
					title: 'Confirm',
					type: 'Message',
					content: [
						new HorizontalLayout({
							content: [
								new VerticalLayout({
									width: '120px',
									content: [
										new Text({ text: 'ให้พนักงานกรอกข้อมูลจริง ตามที่ปรากฏในใบเสร็จ และเตรียมอกสารที่เกี่ยวข้อง เพื่อแนบไปพร้อมกับการเบิกครั้งนี้ด้วย ' }),
										new Text({ text: 'สำหรับเอกสารที่มีภาษีมูลค่าเพิ่ม ให้ติดต่อหน่วยการเงินของแต่ละท่า' }),
										new Text({ text: 'หากตรวจสอบพบว่า ข้อมูลที่ท่านกรอกไม่เป็นความจริง อาจถูกพิจารณาให้มีโทษทางวินัย' })
									]
								})
							]
						}),
						new CheckBox({
							text: 'ยอมรับ'
						})
					],
					beginButton: new Button({
						text: 'Submit',
						press: function () {
							var sText = sap.ui.getCore().byId('confirmDialogTextarea').getValue();
							MessageToast.show('Note is: ' + sText);
							dialog.close();
						}
					}),
					endButton: new Button({
						text: 'Cancel',
						press: function () {
							dialog.close();
						}
					}),
					afterClose: function() {
						dialog.destroy();
					}
				});

				dialog.open();
			},
		onTimerTest : function() {
			MessageToast.show(new Date());
			var that = document.getElementById("__xmlview0--notificationButton-inner");
			var btn = that.click();
		},
		onUserNamePress : function(oEvent) {
			var oBundle = this.getModel("i18n").getResourceBundle();
			// close message popover
			var oMessagePopover = this.getView().byId("errorMessagePopover");
			if (oMessagePopover && oMessagePopover.isOpen()) {
				oMessagePopover.destroy();
			}
			var fnHandleUserMenuItemPress = function(oEvent) {
				MessageToast
						.show(oEvent.getSource().getText() + " was pressed");
				
				var data =  oEvent.getSource().getText();
				if( data == "Logout"){
					window.location.href = "login.html";
				}
				
			};
			var oActionSheet = new ActionSheet(this.getView().createId(
					"userMessageActionSheet"), {
				title : oBundle.getText("userHeaderTitle"),
				showCancelButton : false,
//				buttons : [ new Button({
//					text : 'User Settings',
//					type : sap.m.ButtonType.Transparent,
//					press : fnHandleUserMenuItemPress
//				}), new Button({
//					text : "Online Guide",
//					type : sap.m.ButtonType.Transparent,
//					press : fnHandleUserMenuItemPress
//				}), new Button({
//					text : 'Feedback',
//					type : sap.m.ButtonType.Transparent,
//					press : fnHandleUserMenuItemPress
//				}), new Button({
//					text : 'Help',
//					type : sap.m.ButtonType.Transparent,
//					press : fnHandleUserMenuItemPress
//				}), new Button({
//					text : 'Logout',
//					type : sap.m.ButtonType.Transparent,
//					press : fnHandleUserMenuItemPress
//				}) ],
				buttons : [ new Button({
					text : 'Logout',
					type : sap.m.ButtonType.Transparent,
					press : fnHandleUserMenuItemPress
				}) ],
				afterClose : function() {
					oActionSheet.destroy();
				}
			});
			// forward compact/cozy style into dialog
			jQuery.sap.syncStyleClass(this.getView().getController()
					.getOwnerComponent().getContentDensityClass(), this
					.getView(), oActionSheet);
			oActionSheet.openBy(oEvent.getSource());
		},

		onSideNavButtonPress : function() {
			var oToolPage = this.getView().byId("app");
			var bSideExpanded = oToolPage.getSideExpanded();
			this._setToggleButtonTooltip(bSideExpanded);
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},

		_setToggleButtonTooltip : function(bSideExpanded) {
			var oToggleButton = this.getView().byId(
					'sideNavigationToggleButton');
			if (bSideExpanded) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		},

		// Errors Pressed
		onMessagePopoverPress : function(oEvent) {
			if (!this.getView().byId("errorMessagePopover")) {
				var oMessagePopover = new MessagePopover(this.getView()
						.createId("errorMessagePopover"), {
					placement : sap.m.VerticalPlacementType.Bottom,
					items : {
						path : 'alerts>/List/errors',
						factory : this._createError
					},
					afterClose : function() {
						oMessagePopover.destroy();
					}
				});
				this.getView().byId("app").addDependent(oMessagePopover);
				// forward compact/cozy style into dialog
				jQuery.sap.syncStyleClass(this.getView().getController()
						.getOwnerComponent().getContentDensityClass(), this
						.getView(), oMessagePopover);
				oMessagePopover.openBy(oEvent.getSource());
			}
		},

		/**
		 * Event handler for the notification button
		 * 
		 * @param {sap.ui.base.Event}
		 *            oEvent the button press event
		 * @public
		 */
		onNotificationPress : function(oEvent) {
			var test = oEvent;
			//var oBundle = this.getModel("i18n").getResourceBundle();
			// close message popover
			var oMessagePopover = this.getView().byId("errorMessagePopover");
			if (oMessagePopover && oMessagePopover.isOpen()) {
				oMessagePopover.destroy();
			}
			var oButton = new Button({
				text : "Show all Notifications",//oBundle.getText("notificationButtonText"),
				press : function() {
					MessageToast.show("Show all Notifications was pressed");
				}
			});
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var docheader;
			var docheader2;
			var docheader3;
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
			
			
			var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/l/"+pernr+"/3";
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
			
			var getDocurl = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/l/"+pernr+"/4";
			$.ajax({
	        	type: "GET",
	        	url: getDocurl,
	        	async: false,
	        	success: function(data){
	        		docheader3 = data;
	        		
	        	},
	        	error: function(){
	        		docheader3 = "X";
	        	}
	        });
			
			var dxl = docheader.List.length;
			if(docheader2 != "X"){
				for(var cx=0;cx < docheader2.List.length;cx++){
					docheader.List[dxl+cx] = docheader2.List[cx];
				}
			}
			var dxl = docheader.List.length;
			if(docheader3 != "X"){
				for(var cx=0;cx < docheader3.List.length;cx++){
					docheader.List[dxl+cx] = docheader3.List[cx];
				}
			}
			
			var pa0002;
			var date;
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
			
			this.getView().setModel(new JSONModel(docheader),"myNoti");
			
			var oNotificationPopover = new ResponsivePopover(this.getView()
					.createId("notificationMessagePopover"), {
				title : "Notifications",//oBundle.getText("notificationTitle"),
				contentWidth : "300px",
				endButton : oButton,
				placement : sap.m.PlacementType.Bottom,
				content : {
					path : 'myNoti>/List',
					factory : this._createNotification
				},
				afterClose : function() {
					oNotificationPopover.destroy();
				}
			});
			
//			var oNotificationPopover = new ResponsivePopover(this.getView()
//					.createId("notificationMessagePopover"), {
//				title : oBundle.getText("notificationTitle"),
//				contentWidth : "300px",
//				endButton : oButton,
//				placement : sap.m.PlacementType.Bottom,
//				content : {
//					path : 'alerts>/List/notifications',
//					factory : this._createNotification
//				},
//				afterClose : function() {
//					oNotificationPopover.destroy();
//				}
//			});
			this.getView().byId("app").addDependent(oNotificationPopover);
			// forward compact/cozy style into dialog
			jQuery.sap.syncStyleClass(this.getView().getController()
					.getOwnerComponent().getContentDensityClass(), this
					.getView(), oNotificationPopover);
			oNotificationPopover.openBy(oEvent.getSource());
		},
		
		/**
		 * Factory function for the notification items
		 * 
		 * @param {string}
		 *            sId The id for the item
		 * @param {sap.ui.model.Context}
		 *            oBindingContext The binding context for the item
		 * @returns {sap.m.NotificationListItem} The new notification list item
		 * @private
		 */
		_createNotification : function(sId, oBindingContext) {
			var oBindingObject = oBindingContext.getObject();
			
			var prior;
			var prefix;
			if(oBindingObject.status !=3 ){
				prior = "Medium";
				prefix = "ใบคำขอ : ";
			}else{
				prior = "Low";
				prefix = "ใบคำขอ :  ได้รับการ";
			}
			
			
			
			var oNotificationItem = new NotificationListItem({
				title : "ใบคำขอ"+oBindingObject.header,
				description : prefix+oBindingObject.sttext,
				priority : prior,
//				title : oBindingObject.title,
//				description : oBindingObject.description,
//				priority : oBindingObject.priority,
				close : function(oEvent) {
					var sBindingPath = oEvent.getSource().getCustomData()[0]
							.getValue();
					var sIndex = sBindingPath.split("/").pop();
					var aItems = oEvent.getSource().getModel("alerts")
							.getProperty("/alerts/notifications");
					aItems.splice(sIndex, 1);
					oEvent.getSource().getModel("alerts").setProperty(
							"/alerts/notifications", aItems);
					oEvent.getSource().getModel("alerts").updateBindings(
							"/alerts/notifications");
					sap.m.MessageToast.show("Notification has been deleted.");
				},
				datetime : oBindingObject.date,
				authorPicture : oBindingObject.icon,
				press : function() {
				},
				customData : [ new CustomData({
					key : "path",
					value : oBindingContext.getPath()
				}) ]
			});
			return oNotificationItem;
		},

		_createError : function(sId, oBindingContext) {
			var oBindingObject = oBindingContext.getObject();
			var oLink = new Link("moreDetailsLink", {
				text : "More Details",
				press : function() {
					MessageToast.show("More Details was pressed");
				}
			});
			var oMessageItem = new MessagePopoverItem({
				title : oBindingObject.title,
				subtitle : oBindingObject.subTitle,
				description : oBindingObject.description,
				counter : oBindingObject.counter,
				link : oLink
			});
			return oMessageItem;
		}

	});
});
