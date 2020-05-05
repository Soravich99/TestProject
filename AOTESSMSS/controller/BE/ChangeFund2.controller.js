sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ChangeFund2", {

		onInit: function () {
			 var oModel = new sap.ui.model.json.JSONModel();
			 oModel.loadData("model/employee1.json");
			 this.oTable = this.byId("idProductsTable");
			 this.getView().setModel(oModel);
			 this.getView().bindElement("/SupplierCollection/0");
			 
			 var TimeScholar;
			 $.ajax({
		       	type: "GET",
		       	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimeScholar/FundPerson",
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
				 MessageToast.show("ไม่อยู่ในระยะเวลาเปิดให้ทำการเปลี่ยนผู้รับผลประโยชน์กองทุุน");
				 this.getRouter().navTo("myInfo");
			 }
			 
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
				
				this.getView().byId("empno").setValue(pernr);
				this.getView().byId("empname").setValue(cStr);
				this.getView().byId("org").setValue(pa.paPos.org_s+pa.paPos.up_s);
				this.getView().byId("plans").setValue(pa.paPos.pos_l);
				
//				var zthrbee16;
//				$.ajax({
//		        	type: "GET",
//		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE16",
//		        	async: false,
//		        	success: function(data){
//		        		zthrbee16 = data;
//		        		
//		        	},
//		        	error: function(){
//		        		
//		        	}
//		        });
//				
//				this.getView().setModel(new JSONModel(zthrbee16),"policyItem");
				
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
			
				
				var TimePolicy;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1//TimePolicy/FundPerson",
		        	async: false,
		        	success: function(data){
		        		TimePolicy = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				this.getView().byId("policy").setValue(TimePolicy.TimePolicy.text);
				//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
		},
		onMax3: function(oEvent){
			var t = oEvent.getSource();
			var val = oEvent.mParameters.value;
			val = val.replace(/[^\d]/g, '');
			var cval = parseFloat(val);
			if(val.length > 2){
				if(val != "100")
				{
					val = val.substring(0,2);
				}
			}else if(cval > 100){
				val = "100";
			}
			oEvent.mParameters.value = val;
			t.setValue(val);
			this.onTotal();
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
		onTotal: function(){
			var oTable = this.getView().byId("idProductsTable2");
			var aItems = oTable.getItems();
			var ll = aItems.length;
			var cell4 = 0;
			var total = 0;
			for(var v=0;v < aItems.length;v++){
				
				var itemRow = aItems[v];
				
				cell4 = itemRow.mAggregations.cells[3].getValue();
				if(cell4.length < 1){ cell4 = 0; }
				total = total + (parseFloat(cell4));
				
			}
			if(total > 100 || total < 100){
				MessageToast.show("รุณากรอกผลรวมส่วนแบ่งผลประโยชน์ให้เท่ากับ 100");
			}
			
		},
		onSendPress: function(){
			
			var oTable = this.getView().byId("idProductsTable2");
			var aItems = oTable.getItems();
			var ll = aItems.length;
			var cell4 = 0;
			var total = 0;
			for(var v=0;v < aItems.length;v++){
				
				var itemRow = aItems[v];
				
				cell4 = itemRow.mAggregations.cells[4].getValue();
				if(cell4.length < 1){ cell4 = 0; }
				total = total + (parseFloat(cell4));
				
			}
			if(total > 100 || total < 100){
				MessageToast.show("กรุณากรอกผลรวมส่วนแบ่งผลประโยชน์ให้เท่ากับ 100");
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
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/11';
				var year_budish = (year + 0).toString().substring(2,4); 
				var script = "";
				
				var pernr = this.byId("PERNR").getText();
				var dcid = "";//this.getView().byId("RQUST").getValue();
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
									dotyp : '11',
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
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/11';
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/8",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				
				json = dchead;
				json.orgeh = wf.List[0].org1;
				json.docid = docid;
				json.module = 'BE';
				json.header = "เปลี่ยนแปลงข้อมูลกองทุน";
				json.ltext1 = "เปลี่ยนผู้รับผลประโยชน์";
				json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
				json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
				json.pernr = "";
				json.userad = user;
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
				
				var spernr = "pernr:"+pernr;
	//			var zzpcy = ",zzpcy:"+this.getView().byId("ZZPCY").getSelectedItem().getKey();
	//			var emepc = ",emepc:"+this.getView().byId("EMEPC").getValue();
				var p1 = ",p1:"+this.getView().byId("p1").getValue();
				var p2 = ",p2:"+this.getView().byId("p2").getValue();
				var p3 = ",p3:"+this.getView().byId("p3").getValue();
				var p4 = ",p4:"+this.getView().byId("p4").getValue();
				var p5 = ",p5:"+this.getView().byId("p5").getValue();
				
				var v1 = ",v1:"+this.getView().byId("v1").getValue();
				var v2 = ",v2:"+this.getView().byId("v2").getValue();
				var v3 = ",v3:"+this.getView().byId("v3").getValue();
				var v4 = ",v4:"+this.getView().byId("v4").getValue();
				var v5 = ",v5:"+this.getView().byId("v5").getValue();
				
				var i1 = ",i1:"+this.getView().byId("i1").getValue();
				var i2 = ",i2:"+this.getView().byId("i2").getValue();
				var i3 = ",i3:"+this.getView().byId("i3").getValue();
				var i4 = ",i4:"+this.getView().byId("i4").getValue();
				var i5 = ",i5:"+this.getView().byId("i5").getValue();
				
				var s1 = ",s1:"+this.getView().byId("s1").getValue();
				var s2 = ",s2:"+this.getView().byId("s2").getValue();
				var s3 = ",s3:"+this.getView().byId("s3").getValue();
				var s4 = ",s4:"+this.getView().byId("s4").getValue();
				var s5 = ",s5:"+this.getView().byId("s5").getValue();
				
					
				var script = spernr+p1+p2+p3+p4+p5+v1+v2+v3+v4+v5+i1+i2+i3+i4+i5+s1+s2+s3+s4+s5;
	
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
		onCancelPressed: function () {
			this.getRouter().navTo("myInfo");
		}

	});
});