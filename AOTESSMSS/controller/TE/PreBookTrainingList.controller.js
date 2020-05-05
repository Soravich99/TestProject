sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/m/MessageBox',
	'sap/ui/model/json/JSONModel',
    'sap/ui/model/Filter',
    'sap/ui/model/Sorter'
], function (BaseController, MessageToast,MessageBox, JSONModel,Filter,Sorter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.TE.PreBookTrainingList", {

		onInit: function () {
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
			var pa0002 = "";
			var titel = "";
			var t522g = "";
			var t535n = "";
			
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
	        
	        if(pa0002.PA0002.namzu != "" && pa0002.PA0002.namzu != " ")
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
			
			var oModel = new JSONModel("model/Prebook.json");
			this.getView().setModel(oModel);
			
			var tedetail;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_interest",
	        	async: false,
	        	success: function(data){
	        		tedetail = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			var ctid_temp = "";
			var oTable = this.getView().byId("idTab01");
			for(var u =0;u<tedetail.List.length;u++){
					
					var encode = window.btoa(tedetail.List[u].c_t_id);
					var btn = new sap.m.Button({
						icon: "sap-icon://save",
						press: [ this.onSendPressed, this],
						text: "สนใจหลักสูตร"
					});
					btn.data("mydata",encode)
					var oItem = new sap.m.ColumnListItem({
						cells : [
							new sap.m.Text({text : tedetail.List[u].c_t_name}),
							new sap.m.Text({text :  tedetail.List[u].c_type}),
							new sap.m.Text({text : tedetail.List[u].c_desc}),
							new sap.m.Text({text : tedetail.List[u].c_req}),
							btn,
						]
					});
					oTable.addItem(oItem);
			}
			
//			var that = this;
//	          if (!this._oResponsivePopover) {
//	            this._oResponsivePopover = sap.ui.xmlfragment("sap.ui.demo.toolpageapp.view.TE.Popover", this);
//	            this._oResponsivePopover.setModel(this.getView().getModel());
//	          }
//	          var oTable = this.getView().byId("idTab01");
//	          oTable.addEventDelegate({
//	            onAfterRendering: function() {
//	              var oHeader = this.$().find('.sapMListTblHeaderCell'); //Get hold of table header elements
//	              for (var i = 0; i < oHeader.length; i++) {
//	                var oID = oHeader[i].id;
//	                that.onClick(oID);
//	              }
//	            }
//	          }, oTable);
//			
	          
	          
		},
		onClick: function(oID) {
//          var that = this;
//          $('#' + oID).click(function(oEvent) { //Attach Table Header Element Event
//            var oTarget = oEvent.currentTarget; //Get hold of Header Element
//            var oLabelText = oTarget.childNodes[0].textContent; //Get Column Header text
//            var oIndex = oTarget.id.slice(-1); //Get the column Index
//            var oView = that.getView();
//            var oTable = oView.byId("idTab01");
//            var oModel = oTable.getModel().getProperty("/ProductCollection"); //Get Hold of Table Model Values
//            var oKeys = Object.keys(oModel[0]); //Get Hold of Model Keys to filter the value
//            oView.getModel().setProperty("/bindingValue", oKeys[oIndex]); //Save the key value to property
//            that._oResponsivePopover.openBy(oTarget);
//          });
        },

        onChange: function(oEvent) {
          var oValue = oEvent.getParameter("value");
          var oMultipleValues = oValue.split(",");
          var oTable = this.getView().byId("idTab01");
          var oBindingPath = this.getView().getModel().getProperty("/bindingValue"); //Get Hold of Model Key value that was saved
          var aFilters = [];
          for (var i = 0; i < oMultipleValues.length; i++) {
            var oFilter = new Filter(oBindingPath, "Contains", oMultipleValues[i]);
            aFilters.push(oFilter)
          }
          var oItems = oTable.getBinding("items");
          oItems.filter(aFilters, "Application");
          this._oResponsivePopover.close();
        },

        onAscending: function() {
          var oTable = this.getView().byId("idTab01");
          var oItems = oTable.getBinding("items");
          var oBindingPath = this.getView().getModel().getProperty("/bindingValue");
          var oSorter = new Sorter(oBindingPath);
          oItems.sort(oSorter);
          this._oResponsivePopover.close();
        },

        onDescending: function() {
          var oTable = this.getView().byId("idTab01");
          var oItems = oTable.getBinding("items");
          var oBindingPath = this.getView().getModel().getProperty("/bindingValue");
          var oSorter = new Sorter(oBindingPath, true);
          oItems.sort(oSorter);
          this._oResponsivePopover.close();
        },
        
        onOpen: function(oEvent){
          //On Popover open focus on Input control
          var oPopover = sap.ui.getCore().byId(oEvent.getParameter("id"));
          var oPopoverContent = oPopover.getContent()[0];
          var oCustomListItem = oPopoverContent.getItems()[1];
          var oCustomContent = oCustomListItem.getContent()[0];
          var oInput = oCustomContent.getItems()[1];
          oInput.focus();
          oInput.$().find('.sapMInputBaseInner')[0].select();
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
		dateFormat: function(value){
			var date = value;
			var d = date.getDate().toString().padStart(2, '0');
			var m = (date.getMonth() +1).toString().padStart(2, '0');
			var y = date.getFullYear();
			return [y,m,d].join("-");
		},
		onSendPressed: function (oEvent) {
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var data = oEvent.getSource().data("mydata");
			var tedetail;
//			$.ajax({
//	        	type: "GET",
//	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_detail/"+data,
//	        	async: false,
//	        	success: function(data){
//	        		tedetail = data;
//	        	},
//	        	error: function(){
//	        		tedetail = "X";
//	        	}
//	        });
			var id = window.atob(data);
			var date = this.dateFormat(new Date());
			var json = {
							teinkey:
								{
									c_id:id,
									pernr:pernr,
									regis:date
								},
							begda: date,
							endda: date
						};
			
			json = JSON.stringify(json);
			
			var postdcdetail = {
					  "async": false,
					  "crossDomain": true,
					  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/te_interrested",
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
			});
			
			var str = oEvent.getSource().getParent();
			var btn = str.mAggregations.cells[4];
			btn.setText("สนใจแล้ว");
			btn.setEnabled(false);
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.success(
				"ท่านได้แสดงความสนใจในการเข้ารับการฝึกอบรมเรียบร้อยแล้ว"
			);
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
		onClickRegister: function () {
			this.getRouter().navTo("trainingRegistration");
		}

	});
});