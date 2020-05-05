sap.ui.define([ 'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/Dialog',
	'sap/m/Label',
	'sap/m/Text',
	'sap/ui/layout/HorizontalLayout',
	'sap/ui/layout/VerticalLayout',
	'sap/m/Button',
		'sap/m/MessageToast', 'sap/ui/model/json/JSONModel' ], function(
		BaseController,Dialog, Label, Text, HorizontalLayout, VerticalLayout, Button, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend(
			"sap.ui.demo.toolpageapp.controller.PY.TaxBreak", {

				onInit : function() {
					
					var user = jQuery.sap.getUriParameters().get("user");
					var pernr = user;
					var pa0001;
					var pa0002;
					var pa0185;
					
					var ptitle = this.getView().byId("shopOwnerId");
					ptitle.setTitle("แบบแจ้งรายการเพื่อการบันทึกค่าลดหย่อน ปี "+new Date().getFullYear());
					
					
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+user,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					this.getView().byId("PERNR").setValue(user);
					this.getView().byId("ENAME").setValue(pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn);
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0185/"+user+"/01",
			        	async: false,
			        	success: function(data){
			        		pa0185 = data.PA0185;
			        		
			        	},
			        	error: function(){
			        		pa0185 = "X";
			        	}
			        });
					
					if(pa0185 == "X"){
						MessageToast.show("ไม่พบข้อมูลบัตรประชาชน");
						this.getRouter().navTo("myinfo");
					}else{
						this.getView().byId("ICNUM").setValue(pa0185.icnum);
					}

					var id1 = this.getView().byId("ICNUM").getValue();
//					
					this.getView().byId("ICNUM").setValue(this.convertId(id1));
					var pa0364;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0364/"+user,
			        	async: false,
			        	success: function(data){
			        		pa0364 = data.PA0364;
			        		
			        	},
			        	error: function(){
			        		pa0364 = "X";
			        	}
			        });
					
					var year = new Date().getFullYear();
					
					var pa0014;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0014/"+user+"/"+year,
			        	async: false,
			        	success: function(data){
			        		pa0014 = data.PA0014;
			        		
			        	},
			        	error: function(){
			        		pa0014 = "X";
			        	}
			        });
					
					if(pa0364 != "X" && pa0364 != "" && pa0364 != undefined){
						this.getView().byId("status").setSelectedKey(pa0364.spall);
						this.getView().byId("spouse").setValue("");
						this.getView().byId("CHILDAMT1").setValue(pa0364.chno1);
						this.getView().byId("CHILDAMT2").setValue(pa0364.chno3);
						this.getView().byId("DISPERSON").setValue(pa0364.dino1);
						this.getView().byId("RMFFUND").setValue(this.con_amt(pa0364.mfinv));
						this.getView().byId("LTFFUND").setValue(this.con_amt(pa0364.lteqf));
						this.getView().byId("HOUSELOAN").setValue(this.con_amt(pa0364.mgint));
						this.getView().byId("INNSURE").setValue(this.con_amt(pa0364.lprem));
						this.getView().byId("HEALTH").setValue(this.con_amt(pa0364.hiexp));
						this.getView().byId("OLDFUND").setValue(this.con_amt(pa0364.lpnsn));
						this.getView().byId("MAINSUR").setValue(this.con_amt(pa0364.spins));
						this.getView().byId("FAINSUR").setValue(this.con_amt(pa0364.fprins));
						this.getView().byId("MOINSUR").setValue(this.con_amt(pa0364.mprins));
						this.getView().byId("FASINSUR").setValue(this.con_amt(pa0364.sfpins));
						this.getView().byId("MOSINSUR").setValue(this.con_amt(pa0364.smpins));
						this.getView().byId("FATHER").setValue(this.con_amt(pa0364.fcntr));
						this.getView().byId("MOTHER").setValue(this.con_amt(pa0364.mcntr));
						this.getView().byId("FSTHER").setValue(this.con_amt(pa0364.sfctr));
						this.getView().byId("MSTHER").setValue(this.con_amt(pa0364.smctr));
						this.getView().byId("EDUFUND").setValue(this.con_amt(pa0364.chedu));
						this.getView().byId("DONATE").setValue(this.con_amt(pa0364.chamt));
						
						
					}
					if(pa0014 != "X" && pa0014 != "" && pa0014 != undefined){
						this.getView().byId("AOTDONATE").setValue(this.con_amt(pa0014.amount));
						this.getView().byId("CYCLE").setValue(this.con_amt(pa0014.month));
						this.getView().byId("TOTAL").setValue(this.con_amt(pa0014.pay));
					}
					
				},
				convertId : function(id){
					return id.replace(/(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})/, "$1-$2-$3-$4-$5");
				},
				con_amt: function(value){

					jQuery.sap.require("sap.ui.core.format.NumberFormat");
					var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
						  maxFractionDigits: 2,
						  minFractionDigits: 2,
						  groupingEnabled: true,
						  groupingSeparator: ",",
						  decimalSeparator: "."
						});
					
					if(value != "" && value != null && value != "NULL"){
						value = oNumberFormat.format(value.replace(",",""))
					}else{
						value = "";
					}

					return value;
					
				},
				onSelected: function(){
					var user = jQuery.sap.getUriParameters().get("user");
					var status = this.getView().byId("status").getSelectedItem().getKey();
					if(status == "2" || status == "4" || status == "5" || status == "8" || status == "9" || status == "10" || status == "11" || status == "12" || status == "13"){
						var temp;
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0021/"+user+"/1",
				        	async: false,
				        	success: function(data){
				        		temp = data;
				        	},
				        	error: function(){
				        		
				        	}
				        });
				        
				        if(temp.List.length > 0){
				        	
				        	this.getView().byId("spouse").setValue(temp.List[0].favor+" "+temp.List[0].fanam);
				        }
					}else{
						this.getView().byId("spouse").setValue("");
					}
				},
				convertAmount: function(oEvent){
					
					var oSource = oEvent.getSource();
					var max = parseFloat(oSource.getMaxLength());
					var value = parseFloat(oSource.getValue().replace(",",""));
					if(value > max){
						value = max;
					}
					jQuery.sap.require("sap.ui.core.format.NumberFormat");
					var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
						  maxFractionDigits: 2,
						  minFractionDigits: 2,
						  groupingEnabled: true,
						  groupingSeparator: ",",
						  decimalSeparator: "."
						});
					
					var val = oNumberFormat.format(value)
					
					oSource.setValue(val);
					
					this.amount15k();
					
				},
				amount15k: function(){
					
					var fainsur = this.getView().byId("FAINSUR").getValue().replace(",","");
					var moinsur = this.getView().byId("MOINSUR").getValue().replace(",","");
					
					var fasinsur = this.getView().byId("FASINSUR").getValue().replace(",","");
					var mosinsur = this.getView().byId("MOSINSUR").getValue().replace(",","");
					
					if(fainsur.length == 0){ fainsur = 0; }
					if(moinsur.length == 0){ moinsur = 0; }
					if(fasinsur.length == 0){ fasinsur = 0; }
					if(mosinsur.length == 0){ mosinsur = 0; }
					
					var max = parseFloat(15000);
					var value = parseFloat(fainsur)+parseFloat(moinsur)+parseFloat(fasinsur)+parseFloat(mosinsur);
					
					jQuery.sap.require("sap.ui.core.format.NumberFormat");
					var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
						  maxFractionDigits: 2,
						  minFractionDigits: 2,
						  groupingEnabled: true,
						  groupingSeparator: ",",
						  decimalSeparator: "."
						});
					
					if(value > max){
						
						MessageToast.show("ผู้มีเงินได้จ่ายค่าเบี้ยประกันสุขภาพให้บิดามารดาของตน และบิดามารดาของคู่สมรสที่ไม่มีเงินต๋ให้ยกเว้นภาษีเงินใต้ตามจำนวน ที่จ่ายจริงรวมกันสูงสุดไม่เกินปีละ 15,000 บาท");
						
						value = max;
						var val = oNumberFormat.format(value)
//						this.getView().byId("FAINSUR").setValue(fainsur);
//						this.getView().byId("MOINSUR").setValue("0.00");
//						this.getView().byId("FASINSUR").setValue("0.00");
//						this.getView().byId("MOSINSUR").setValue("0.00");
					}
					
				},
				onMasterPressed : function(oEvent) {
					var oContext = oEvent.getParameter("listItem")
							.getBindingContext("side");
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
						MessageToast.show(sSelectedMasterElement
								+ " was pressed");
						break;
					}
					}
				},

				onSavePressed : function() {
					MessageToast.show("Saved");
				},

				onCancelPressed : function() {

					this.getRouter().navTo("myInfo");
					MessageToast.show("ยกเลิก");
				},

				onEditPressed : function() {
					MessageToast.show("Edit");
				},
				onSelectStatus : function() {
					var selectedKey = this.getView().byId("MarriageStatus")
							.getSelectedKey();
					if (selectedKey == "3") {
						this.getView().byId("insigniaIdSection").setVisible(
								true);
					}

				},
				onSelectChild : function() {
					var selectedKey = this.getView().byId("NoChildren")
							.getSelectedKey();
					if (selectedKey != "none") {
						this.getView().byId("childSection").setVisible(true);
					}

				},
				onSendpressed: function() {
//					var dialog = new Dialog({
//						title: '',
//						type: 'Message',
//						content: [
//							new HorizontalLayout({
//								content: [
//									new VerticalLayout({
//										content: [
//											new Text({ text: 'ขอรับรองว่ารายการที่แสดงไว้เป็นความจริงทุกประการ', textAlign: "Center"}).addStyleClass("dialog_header"),
//											new Label({ text: '(หากบันทึกหลังจากวันที่ 14 ของเดือน ข้อมูลการลดหย่อนจะมีผลในการคำนวนภาษีในเดือนถัดไป)' })
//										]
//									})
//								]
//							})
//						],
//						beginButton: new Button({
//							text: 'ยอมรับ',
//							press: function () {
//								//var sText = sap.ui.getCore().byId('`').getValue();
//								//MessageToast.show('Note is: ' + sText);
//								dialog.close();
//								
//							}
//						}),
//						endButton: new Button({
//							text: 'ไม่ยอมรับ',
//							press: function () {
//								dialog.close();
//							}
//						}),
//						afterClose: function() {
//							dialog.destroy();
//						}
//					});
//
//					dialog.open();
					
					var pernr = this.getView().byId("PERNR").getValue();
					var ename = this.getView().byId("ENAME").getValue();
					var id1 = this.getView().byId("ICNUM").getValue();
					var status = this.getView().byId("status").getSelectedItem().getKey();
					var spouse = this.getView().byId("spouse").getValue();
					var childamt1 = this.getView().byId("CHILDAMT1").getValue();
					var childamt2 = this.getView().byId("CHILDAMT2").getValue();
					var disperson = this.getView().byId("DISPERSON").getValue();
					var rmffund = this.getView().byId("RMFFUND").getValue().replace(",","");
					var ltffund = this.getView().byId("LTFFUND").getValue().replace(",","");
					var houseloan = this.getView().byId("HOUSELOAN").getValue().replace(",","");
					var innsure = this.getView().byId("INNSURE").getValue().replace(",","");
					var health = this.getView().byId("HEALTH").getValue().replace(",","");
					var oldfund = this.getView().byId("OLDFUND").getValue().replace(",","");
					var mainsur = this.getView().byId("MAINSUR").getValue().replace(",","");
					var fainsur = this.getView().byId("FAINSUR").getValue().replace(",","");
					var moinsur = this.getView().byId("MOINSUR").getValue().replace(",","");
					var fasinsur = this.getView().byId("FASINSUR").getValue().replace(",","");
					var mosinsur = this.getView().byId("MOSINSUR").getValue().replace(",","");
					var father = this.getView().byId("FATHER").getValue().replace(",","");
					var mother = this.getView().byId("MOTHER").getValue().replace(",","");
					var fsther = this.getView().byId("FSTHER").getValue().replace(",","");
					var msther = this.getView().byId("MSTHER").getValue().replace(",","");
					var edufund = this.getView().byId("EDUFUND").getValue().replace(",","");
					var donate = this.getView().byId("DONATE").getValue().replace(",","");
					var aotdonate = this.getView().byId("AOTDONATE").getValue().replace(",","");
					var cycle = this.getView().byId("CYCLE").getValue().replace(",","");
					var total = this.getView().byId("TOTAL").getValue().replace(",","");
					

					if(fainsur.length == 0){ fainsur = 0; }
					if(moinsur.length == 0){ moinsur = 0; }
					if(fasinsur.length == 0){ fasinsur = 0; }
					if(mosinsur.length == 0){ mosinsur = 0; }
					
					var max = parseFloat(15000);
					var value = parseFloat(fainsur)+parseFloat(moinsur)+parseFloat(fasinsur)+parseFloat(mosinsur);
					
					jQuery.sap.require("sap.ui.core.format.NumberFormat");
					var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
						  maxFractionDigits: 2,
						  minFractionDigits: 2,
						  groupingEnabled: true,
						  groupingSeparator: ",",
						  decimalSeparator: "."
						});
					
					if(value > max){
						
						MessageToast.show("ผู้มีเงินได้จ่ายค่าเบี้ยประกันสุขภาพให้บิดามารดาของตน และบิดามารดาของคู่สมรสที่ไม่มีเงินต๋ให้ยกเว้นภาษีเงินใต้ตามจำนวน ที่จ่ายจริงรวมกันสูงสุดไม่เกินปีละ 15,000 บาท");
						
					}else{
					
						var dcrun = new JSONModel();
						var dchead = new JSONModel();
						var dcdetail = new JSONModel();
						
						var year = new Date().getFullYear();
						var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
						var date = new Date().getDate();
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PY' + year + month + '/01';
						var year_budish = (year + 0).toString().substring(2,4); 
						var script = "";
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
										dotyp : '01',
										module : 'PY'+year+month
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
						json.curid = 'PY' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
						
						var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PY' + year + month + '/01';
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
						json = dchead;
						json.docid = docid;
						json.module = 'PY';
						json.header = "ขอส่งค่าลดหย่อน";
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = "494439";
						json.userad = pernr;
						json.status = "2";
						json.sttext = "รอรับทราบ";
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
						
						script = "pernr:"+pernr+",ename:"+ename+",status:"+status+",childamt1:"+childamt1+",childamt2:"+childamt2+",disperson:"+disperson+",rmffund:"+rmffund+",ltffund:"+ltffund+",houseloan:"+houseloan+",innsure:"+innsure+",health:"+health+",oldfund:"+oldfund+",mainsur:"+mainsur+",fainsur:"+fainsur+",moinsur:"+moinsur+",fasinsur:"+fasinsur+",mosinsur:"+mosinsur+",father:"+father+",mother:"+mother+",fsther:"+fsther+",msther:"+msther+",edufund:"+edufund+",donate:"+donate+",aotdonate:"+aotdonate+",cycle:"+cycle;
						script = script + ",total:"+total+",id1:"+id1+",spouse:"+spouse;
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
						
						MessageToast.show("Saved");
						
						
						this.getRouter().navTo("myInfo");
					}
					
				},
				onSave: function(){
					
					var pernr = this.getView().byId("PERNR").getValue();
					var ename = this.getView().byId("ENAME").getValue();
					var id1 = this.getView().byId("ICNUM").getValue();
					var status = this.getView().byId("status").getSelectedItem().getKey();
					var spouse = this.getView().byId("spouse").getValue();
					var childamt1 = this.getView().byId("CHILDAMT1").getValue();
					var childamt2 = this.getView().byId("CHILDAMT2").getValue();
					var disperson = this.getView().byId("DISPERSON").getValue();
					var rmffund = this.getView().byId("RMFFUND").getValue().replace(",","");
					var ltffund = this.getView().byId("LTFFUND").getValue().replace(",","");
					var houseloan = this.getView().byId("HOUSELOAN").getValue().replace(",","");
					var innsure = this.getView().byId("INNSURE").getValue().replace(",","");
					var health = this.getView().byId("HEALTH").getValue().replace(",","");
					var oldfund = this.getView().byId("OLDFUND").getValue().replace(",","");
					var mainsur = this.getView().byId("MAINSUR").getValue().replace(",","");
					var fainsur = this.getView().byId("FAINSUR").getValue().replace(",","");
					var moinsur = this.getView().byId("MOINSUR").getValue().replace(",","");
					var fasinsur = this.getView().byId("FASINSUR").getValue().replace(",","");
					var mosinsur = this.getView().byId("MOSINSUR").getValue().replace(",","");
					var father = this.getView().byId("FATHER").getValue().replace(",","");
					var mother = this.getView().byId("MOTHER").getValue().replace(",","");
					var fsther = this.getView().byId("FSTHER").getValue().replace(",","");
					var msther = this.getView().byId("MSTHER").getValue().replace(",","");
					var edufund = this.getView().byId("EDUFUND").getValue().replace(",","");
					var donate = this.getView().byId("DONATE").getValue().replace(",","");
					var aotdonate = this.getView().byId("AOTDONATE").getValue().replace(",","");
					var cycle = this.getView().byId("CYCLE").getValue().replace(",","");
					
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
				            "aedtm": aedat,
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
								begda:aedat,
								endda:aedat,
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
					
				},
				saveData: function(){
					
					var pernr = this.getView().byId("PERNR").getValue();
					var ename = this.getView().byId("ENAME").getValue();
					var id1 = this.getView().byId("ICNUM").getValue();
					var status = this.getView().byId("status").getSelectedItem().getKey();
					var spouse = this.getView().byId("spouse").getValue();
					var childamt1 = this.getView().byId("CHILDAMT1").getValue();
					var childamt2 = this.getView().byId("CHILDAMT2").getValue();
					var disperson = this.getView().byId("DISPERSON").getValue();
					var rmffund = this.getView().byId("RMFFUND").getValue().replace(",","");
					var ltffund = this.getView().byId("LTFFUND").getValue().replace(",","");
					var houseloan = this.getView().byId("HOUSELOAN").getValue().replace(",","");
					var innsure = this.getView().byId("INNSURE").getValue().replace(",","");
					var health = this.getView().byId("HEALTH").getValue().replace(",","");
					var oldfund = this.getView().byId("OLDFUND").getValue().replace(",","");
					var mainsur = this.getView().byId("MAINSUR").getValue().replace(",","");
					var fainsur = this.getView().byId("FAINSUR").getValue().replace(",","");
					var moinsur = this.getView().byId("MOINSUR").getValue().replace(",","");
					var fasinsur = this.getView().byId("FASINSUR").getValue().replace(",","");
					var mosinsur = this.getView().byId("MOSINSUR").getValue().replace(",","");
					var father = this.getView().byId("FATHER").getValue().replace(",","");
					var mother = this.getView().byId("MOTHER").getValue().replace(",","");
					var fsther = this.getView().byId("FSTHER").getValue().replace(",","");
					var msther = this.getView().byId("MSTHER").getValue().replace(",","");
					var edufund = this.getView().byId("EDUFUND").getValue().replace(",","");
					var donate = this.getView().byId("DONATE").getValue().replace(",","");
					var aotdonate = this.getView().byId("AOTDONATE").getValue().replace(",","");
					var cycle = this.getView().byId("CYCLE").getValue().replace(",","");
					
					var dcrun = new JSONModel();
					var dchead = new JSONModel();
					var dcdetail = new JSONModel();
					
					var year = new Date().getFullYear();
					var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
					var date = new Date().getDate();
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PY' + year + month + '/01';
					var year_budish = (year + 0).toString().substring(2,4); 
					var script = "";
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
									dotyp : '01',
									module : 'PY'+year+month
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
					json.curid = 'PY' + json.dockey.dotyp + year_budish + month + json.curno.toString().padStart(6,'0');
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'PY' + year + month + '/01';
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
					json = dchead;
					json.docid = docid;
					json.module = 'PY';
					json.header = "ขอส่งค่าลดหย่อน";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = "9999-12-31";
					json.pernr = "494439";
					json.userad = pernr;
					json.status = "1";
					json.sttext = "รอรับทราบ";
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
					
					script = "pernr:"+pernr+",ename:"+ename+",status:"+status+",childamt1:"+childamt1+",childamt2:"+childamt2+",disperson:"+disperson+",rmffund:"+rmffund+",ltffund:"+ltffund+",houseloan:"+houseloan+",innsure:"+innsure+",health:"+health+",oldfund:"+oldfund+",mainsur:"+mainsur+",fainsur:"+fainsur+",moinsur:"+moinsur+",fasinsur:"+fasinsur+",mosinsur:"+mosinsur+",father:"+father+",mother:"+mother+",fsther:"+fsther+",msther:"+msther+",edufund:"+edufund+",donate:"+donate+",aotdonate:"+aotdonate+",cycle:"+cycle;
	
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
					
					MessageToast.show("Saved");
					
					
					this.getRouter().navTo("myInfo");
					
				},
				onConfirmDialog: function () {
					var dialog = new Dialog({
						title: '',
						type: 'Message',
						content: [
							new HorizontalLayout({
								content: [
									new VerticalLayout({
										content: [
											new Text({ text: 'ขอรับรองว่ารายการที่แสดงไว้เป็นความจริงทุกประการ', textAlign: "Center"}).addStyleClass("dialog_header"),
											new Label({ text: '(หากบันทึกหลังจากวันที่ 14 ของเดือน ข้อมูลการลดหย่อนจะมีผลในการคำนวนภาษีในเดือนถัดไป)' })
										]
									})
								]
							})
						],
						beginButton: new Button({
							text: 'ยอมรับ',
							press: function () {
								var sText = sap.ui.getCore().byId('confirmDialogTextarea').getValue();
								MessageToast.show('Note is: ' + sText);
								dialog.close();
							}
						}),
						endButton: new Button({
							text: 'ไม่ยอมรับ',
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

			});
});