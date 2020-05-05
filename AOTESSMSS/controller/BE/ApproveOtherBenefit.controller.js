sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveOtherBenefit", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			
			var pernr;
			var user;
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var userm = user;
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var docData;
			var docHead;
			
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
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
	        	async: false,
	        	success: function(data){
	        		docData = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			docHead = docData;
			user = docData.tblDocheader.userch;
			
			if(user == "" || user == null || user == " " || user.includes("NULL") == true || user.includes("null") == true ){
				user = userm;
			}
			
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
	        
	        var vename = this.getView().byId("ENAME_APP");
			
	        if(titel == " " || titel == "0"){
	        	titel = t522g.T522G.atext;
	        }
			
			var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
			
			vename.setValue(cStr);
			
			var pernrpad = pernr.toString().padStart(8,'0');
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/"+pernrpad,
	        	async: false,
	        	success: function(data){
	        		pa = data;
	        		
	        	},
	        	error: function(){
	        		pa = "X";
	        	}
	        });
			
			if(pa != ""){
				this.getView().byId("PLANS_DESC_APP").setValue(pa.paPos.pos_l);
			}
			
			var dctask;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/"+docno+"/"+user,
	        	async: false,
	        	success: function(data){
	        		dctask = data.tblDoctask;
	        		
	        	},
	        	error: function(){
	        		dctask = "X";
	        	}
	        });
			if(dctask != "X"){
				this.getView().byId("avlv1").setValue(dctask.del_flag);
			}
			
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
			
			var arrayLength = pa9706_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9706_arr[i].split(":");
				var field = fieldar[0];
			    
			    if(field.includes("selectType") == true){ var selectType = pa9706_arr[i].split(":").pop(); }
			}
			
			if(user != userm){
				
				this.byId("lvup1").setVisible(true);
				this.byId("lvup2").setVisible(true);
				this.byId("lvup3").setVisible(true);
				this.byId("lvup4").setVisible(true);
				this.byId("lvup5").setVisible(true);
				this.byId("lvup6").setVisible(true);
				
				this.byId("appvup").setVisible(true);
				this.byId("appv1").setVisible(false);
				this.byId("sellv1").setSelectedKey("อนุมัติ");
				this.byId("sellv1").setEnabled(false);
				this.byId("canvup").setVisible(true);
				this.byId("canv1").setVisible(false);
				this.byId("avup1").setVisible(true);
				
				this.byId("approveDateup").setVisible(true);
				this.byId("selvup").setVisible(true);
				this.byId("ENAME_APPUP").setVisible(true);
				this.byId("PLANS_DESC_APPUP").setVisible(true);
				this.byId("PLANS_DESC_APPUPNEXT").setVisible(true);
				
				this.byId("lblv1").setVisible(false);
				this.byId("sellv1").setVisible(false);
				this.byId("avlv1").setVisible(false);
				this.byId("approveDate").setVisible(false);
				this.byId("ENAME_APP").setVisible(false);
				this.byId("PLANS_DESC_APP").setVisible(false);
				this.byId("PLANS_DESC_APPNEXT").setVisible(false);
				
				user = userm;
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
		        
		        var vename = this.getView().byId("ENAME_APPUP");
				
		        if(titel == " " || titel == "0"){
		        	titel = t522g.T522G.atext;
		        }
				
				var cStr = titel + " " + pa0002.PA0002.vorna + " " + pa0002.PA0002.nachn;
				
				vename.setValue(cStr);
				
				var pernrpad = pernr.toString().padStart(8,'0');
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa/"+pernrpad,
		        	async: false,
		        	success: function(data){
		        		pa = data;
		        		
		        	},
		        	error: function(){
		        		pa = "X";
		        	}
		        });
				if(pa != "" && pa != "X"){
					this.getView().byId("PLANS_DESC_APPUP").setValue(pa.paPos.pos_l);
					this.getView().byId("PLANS_DESC_APPNEXT").setValue(pa.paPos.pos_l);
					
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
					
					if(selectType == "ค่าเช่าบ้าน"){
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/10",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}else if(selectType == "ค่าภัยพิบัติ"){
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/13",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}else {
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/9",
				        	async: false,
				        	success: function(data){
				        		wf = data;
				        		
				        	},
				        	error: function(){
				        		
				        	}
				        });
					}
					
					var objid;
					if(pa0001.PA0001.orgeh == wf.List[0].org1){
						objid = wf.List[0].wfkey.level2;
					}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
						objid = wf.List[0].wfkey.level3;
					}
					
					var hrp1000;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+objid,
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        		
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
					if(hrp1000 != "X" && hrp1000 != ""){
						this.getView().byId("PLANS_DESC_APPUPNEXT").setValue(hrp1000.HRP1000.stext);
					}else{
						this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
					}
					
					if(selectType == "ค่าภัยพิบัติ"){
						var objid;
						if(docHead.tblDocheader.pernr == parseInt(pa.paPos.manag).toString()){
							this.getView().byId("PLANS_DESC_APPUPNEXT").setValue(pa.paPos.up_l);
						}else{
							
							if(docHead.tblDocheader.orgeh == ""){
								objid = wf.List[0].org1;
							}else if(pa0001.PA0001.orgeh == wf.List[0].org1){
								if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
									
								}else{
									objid = wf.List[0].org2;
								}
							}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
								if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
									
								}else{
									objid = wf.List[0].org3;
								}
							}else if(pa0001.PA0001.orgeh == wf.List[0].org3){
								
							}else {
								
							}
							
							var hrp1000;
							
							$.ajax({
					        	type: "GET",
					        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+objid,
					        	async: false,
					        	success: function(data){
					        		hrp1000 = data;
					        		
					        	},
					        	error: function(){
					        		hrp1000 = "X";
					        	}
					        });
							
							if(hrp1000 != "X" && hrp1000 != ""){
								this.getView().byId("PLANS_DESC_APPUPNEXT").setValue(hrp1000.HRP1000.stext);
							}else{
								this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
							}
							
						}
					}
					
					
				}
				if(pa == "X" || pa == ""){
					this.getView().byId("PLANS_DESC_APPUP").setValue("กอญ.");
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("กอญ.");
					this.getView().byId("PLANS_DESC_APPUPNEXT").setValue("");
				}
			}else{
				
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

				if(selectType == "ค่าเช่าบ้าน"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/10",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}else if(selectType == "ค่าภัยพิบัติ"){
					
					var pernrpad = docHead.tblDocheader.userad.toString().padStart(8,'0');
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
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/13",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
				}else {
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/9",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
				}
				
				var objid;
				if(pa0001.PA0001.orgeh == wf.List[0].org1){
					objid = wf.List[0].wfkey.level2;
				}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
					objid = wf.List[0].wfkey.level3;
				}
				
				var hrp1000;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+objid,
		        	async: false,
		        	success: function(data){
		        		hrp1000 = data;
		        		
		        	},
		        	error: function(){
		        		hrp1000 = "X";
		        	}
		        });
				if(hrp1000 != "X" && hrp1000 != ""){
					this.getView().byId("PLANS_DESC_APPNEXT").setValue(hrp1000.HRP1000.stext);
				}else{
					this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
				}
				if(selectType == "ค่าภัยพิบัติ"){
					var objid;
					if(docHead.tblDocheader.pernr == parseInt(pa.paPos.manag).toString()){
						this.getView().byId("PLANS_DESC_APPNEXT").setValue(pa.paPos.up_l);
					}else{
						
						if(docHead.tblDocheader.orgeh == ""){
							objid = wf.List[0].org1;
						}else if(pa0001.PA0001.orgeh == wf.List[0].org1){
							if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
								
							}else{
								objid = wf.List[0].org2;
							}
						}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
							if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
								
							}else{
								objid = wf.List[0].org3;
							}
						}else if(pa0001.PA0001.orgeh == wf.List[0].org3){
							
						}else {
							
						}
						
						var hrp1000;
						
						$.ajax({
				        	type: "GET",
				        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+objid,
				        	async: false,
				        	success: function(data){
				        		hrp1000 = data;
				        		
				        	},
				        	error: function(){
				        		hrp1000 = "X";
				        	}
				        });
						
						if(hrp1000 != "X" && hrp1000 != ""){
							this.getView().byId("PLANS_DESC_APPNEXT").setValue(hrp1000.HRP1000.stext);
						}else{
							this.getView().byId("PLANS_DESC_APPNEXT").setValue("");
						}
						
					}
				}
				
			}
			
			var date = new Date();
			var d = date.getDate();
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = (date.getFullYear()).toString().padStart(2,'0');
			this.getView().byId("approveDate").setValue([d,m,y].join("/"));
			this.getView().byId("approveDateup").setValue([d,m,y].join("/"));
			
			var dchead = new JSONModel();
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
	        	async: false,
	        	success: function(data){
	        		dchead = data.tblDocheader;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			this.byId("recieveNoLabel").setVisible(false);
			this.byId("recieveNoInput").setVisible(false);
			this.byId("airportLabel").setVisible(false);
			this.byId("monthLabel").setVisible(false);
			this.byId("monthInput").setVisible(false);
			this.byId("airportInput").setVisible(false);
			this.byId("claimQuota").setValue("0.00");
			this.byId("ADDRESS").setVisible(false);
			this.byId("desc2Text").setVisible(false);
			this.byId("desc3Text").setVisible(false);
			this.byId("EffectiveDateInput").setVisible(false);
			this.byId("descTextBoxLabel").setVisible(false);
			this.byId("desc1Text").setVisible(false);
			this.byId("startDateLabel").setVisible(false);
			this.byId("startDateInput").setVisible(false);
			
			this.byId("yearLabel").setVisible(false);
			this.byId("yearInput").setVisible(false);
			this.byId("claimAmtLabel").setVisible(false);
			this.byId("claimAmtInput").setVisible(false);
			this.byId("claimAllInput").setVisible(false);
			this.byId("descLabel").setVisible(false);
			this.byId("descInput").setVisible(false);
			
			
			// show/hide attachFile tab
			this.byId("attachFile1").setVisible(false);
			this.byId("attachFile2").setVisible(false);
			this.byId("attachFile3").setVisible(false);
			
			var docData = new JSONModel();
			
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
			
			var arrayLength = pa9706_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9706_arr[i].split(":");
				var field = fieldar[0];
			    if(field.includes("pernr") == true){ var pernr = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("rqust") == true){ var rqust = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("rqdat") == true){ var rqdat = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("selectType") == true){ var selectType = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("address") == true){ var address = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("desc1Text") == true){ var desc1Text = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("desc2Text") == true){ var desc2Text = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("desc3Text") == true){ var desc3Text = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("airportInput") == true){ var airportInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("startDateInput") == true){ var startDateInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("EffectiveDateInput") == true){ var EffectiveDateInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("recieveNoInput") == true){ var recieveNoInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("monthInput") == true){ var monthInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("yearInput") == true){ var yearInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("descInput") == true){ var descInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("claimAmtInput") == true){ var claimAmtInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("claimAllInput") == true){ var claimAllInput = pa9706_arr[i].split(":").pop(); }
			    if(field.includes("claimQuota") == true){ var claimQuota = pa9706_arr[i].split(":").pop(); }
			    	
			}
			
			
			if(dchead.status == "1"){
				this.getView().byId("btnSend").setVisible(true);
				if(dchead.userad == pernr){
					this.getView().byId("btnEdit").setVisible(true);
				}
				this.getView().byId("approveSection").setVisible(false);
			}else if(dchead.status == "3"){
				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("btnEdit").setVisible(false);
				this.getView().byId("approveSection").setVisible(false);
			}else if(dchead.status == "4"){
				if(dchead.userad == pernr){
					this.getView().byId("btnEdit").setVisible(true);
				}
			}else{
				
				if(user == pernr){
					this.getView().byId("approveSection").setVisible(false);
					this.getView().byId("claimAllInput").setEnabled(false);
				}
				
				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("approveSection").setVisible(true);
			}
			
			if(dchead.userad == user){
				this.getView().byId("approveSection").setVisible(false);
			}
			
			user = pernr;
			var selected = selectType;
			
			var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0008"
			
			if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)"){
					this.byId("claimQuota").setValue(this.onValue(claimQuota));
				}else{
					this.byId("claimQuota").setValue(this.onValue(claimQuota));
				}
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				// show/hide attachFile tab
				this.byId("attachFile1").setVisible(true);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+user+"/1",
					async: false,
					success: function(data){
							pa0006 = data.List;
						},
							error: function(){
							pa0006 = "X";
						}
				});
				var space = " ";
				if(pa0006 != "X"){
					var adStr = pa0006[0].bldng+space+pa0006[0].floor+space+pa0006[0].hsnmr+space+pa0006[0].adr03+space+pa0006[0].stras+space+pa0006[0].locat+space+pa0006[0].conkk+space+pa0006[0].ort02+space+pa0006[0].ort01+space+pa0006[0].ort04+space+pa0006[0].ort03;
						adStr = space+pa0006[0].posta+space+pa0006[0].pstlz;
					this.byId("ADDRESS").setValue(adStr);
				}
				
				
			}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)"){
					this.byId("claimQuota").setValue(this.onValue(claimQuota));
				}else{
					this.byId("claimQuota").setValue(this.onValue(claimQuota));
				}
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				// show/hide attachFile tab
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(true);
				
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+user+"/1",
					async: false,
					success: function(data){
							pa0006 = data.List;
						},
							error: function(){
							pa0006 = "X";
						}
				});
				var space = " ";
				if(pa0006 != "X"){
					var adStr = pa0006[0].bldng+space+pa0006[0].floor+space+pa0006[0].hsnmr+space+pa0006[0].adr03+space+pa0006[0].stras+space+pa0006[0].locat+space+pa0006[0].conkk+space+pa0006[0].ort02+space+pa0006[0].ort01+space+pa0006[0].ort04+space+pa0006[0].ort03;
						adStr = space+pa0006[0].posta+space+pa0006[0].pstlz;
					this.byId("ADDRESS").setValue(adStr);
				}
				
			}else if(selected == "ค่าเช่าบ้าน"){
				
				url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0006"
				
				this.byId("recieveNoLabel").setVisible(true);
				this.byId("recieveNoInput").setVisible(true);
				this.byId("airportLabel").setVisible(true);
				this.byId("monthLabel").setVisible(true);
				this.byId("monthInput").setVisible(true);
				this.byId("airportInput").setVisible(true);
				this.byId("startDateLabel").setVisible(true);
				this.byId("startDateInput").setVisible(true);
				this.byId("descTextBoxLabel").setVisible(false);
				this.byId("desc1Text").setVisible(false);
				
				this.byId("claimQuota").setValue(this.onValue(claimQuota));
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(false);
				this.byId("desc3Text").setVisible(false);
				this.byId("EffectiveDateInput").setVisible(true);
				
				this.byId("yearLabel").setVisible(true);
				this.byId("yearInput").setVisible(true);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(true);
				this.byId("descInput").setVisible(true);
				
				// show/hide attachFile tab
				this.byId("attachFile2").setVisible(true);
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				
			}else{
				// hide attachFile tab
				
				url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0009"
				
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("claimAllInput").setVisible(true);
				
				if(dchead.status == "1"){
					this.byId("claimAllInput").setEnabled(false);
				}else{
					if(userm == pernr){
						this.byId("claimAllInput").setEnabled(false);
					}else{
						this.byId("claimAllInput").setEnabled(true);
					}
				}
				
				
				
				this.byId("claimQuota").setValue(this.onValue(claimQuota));
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(true);
				
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0006/l/"+user+"/1",
					async: false,
					success: function(data){
							pa0006 = data.List;
						},
							error: function(){
							pa0006 = "X";
						}
				});
				var space = " ";
				if(pa0006 != "X"){
					var adStr = pa0006[0].bldng+space+pa0006[0].floor+space+pa0006[0].hsnmr+space+pa0006[0].adr03+space+pa0006[0].stras+space+pa0006[0].locat+space+pa0006[0].conkk+space+pa0006[0].ort02+space+pa0006[0].ort01+space+pa0006[0].ort04+space+pa0006[0].ort03;
						adStr = space+pa0006[0].posta+space+pa0006[0].pstlz;
					this.byId("ADDRESS").setValue(adStr);
				}
				
			}
			var pa9701;
			var t001p;
			$.ajax({
				type: "GET",
				url: url,
				async: false,
				success: function(data){
						pa9701 = data.List;
					},
				error: function(){
						pa9701 = "X";
					}
			});
			if(selected == "ค่าเช่าบ้าน"){
				
				$.ajax({
					type: "GET",
					url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/T001P/"+pa9701[0].locat+"/"+pa9701[0].locat,
					async: false,
					success: function(data){
							t001p = data;
						},
					error: function(){
							t001p = "X";
						}
				});
				
				var date = new Date(pa9701[0].pa9701key.begda);
					date = date.getDate().toString().padStart(2,'0')+"/"+(date.getMonth() + 1).toString().padStart(2,'0')+"/"+date.getFullYear();
				this.byId("airportInput").setValue(t001p.T001P.btext);
				adStr = pa9701[0].ladd1+" "+pa9701[0].ladd2;
				this.byId("ADDRESS").setValue(adStr);
				this.byId("claimQuota").setValue(this.onValue(pa9701[0].elamt));
				this.byId("startDateInput").setValue(date);
				
				var thisyear = new Date().getFullYear();
				
				this.byId("yearInput").setSelectedKey(thisyear.toString());
				
			}
			
			var thisyear = new Date().getFullYear();
			var data = {"List":[]};
			var year = {"List":[{"text":"","key":""},{"text":"","key":""}]};
			var cur = -1;
			for(var x= 0;x<year.List.length;x++){
				year.List[x].text = (thisyear + cur).toString();
				year.List[x].key = (thisyear + cur).toString();
				cur++;
				data.List[x] = year.List[x];
			}
			
			var thismonth = (new Date().getMonth() +1);
			
			this.getView().setModel(new JSONModel(year),"yearItem");
			
			this.getView().byId("RQUST").setValue(rqust);
			this.getView().byId("RQDAT").setValue(rqdat);
			this.getView().byId("selectType").setSelectedKey(selectType);
			this.getView().byId("ADDRESS").setValue(address);
			
			this.getView().byId("desc1Text").setValue(desc1Text);
			this.getView().byId("desc2Text").setValue(desc2Text);
			this.getView().byId("desc3Text").setValue(desc3Text);
			if(this.getView().byId("airportInput").getVisible() == true){
				this.getView().byId("airportInput").setSelectedKey(airportInput);
			}else{
				var airportInput;
			}
			this.getView().byId("startDateInput").setValue(startDateInput);
			this.getView().byId("EffectiveDateInput").setValue(EffectiveDateInput);
			
			this.getView().byId("recieveNoInput").setValue(recieveNoInput);
			if(this.getView().byId("monthInput").getVisible() == true){
				this.getView().byId("monthInput").setSelectedKey(monthInput);
			}else{
				var monthInput;
			}
			if(this.getView().byId("yearInput").getVisible() == true){
				this.getView().byId("yearInput").setSelectedKey(yearInput);
			}else{
				var yearInput;
			}
			
			this.getView().byId("descInput").setValue(descInput);
			
			 this.getView().byId("claimAmtInput").setValue(this.onValue(claimAmtInput));
			 this.getView().byId("claimAllInput").setValue(this.onValue(claimAllInput));
			
//			var user = jQuery.sap.getUriParameters().get("user");
//			var pernr = user;
			
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
			this.byId("selectType").setEnabled(false);
			//this.byId("recieveNoLabel").setEnabled(false);
			this.byId("recieveNoInput").setEnabled(false);
			//this.byId("airportLabel").setEnabled(false);
			//this.byId("monthLabel").setEnabled(false);
			this.byId("monthInput").setEnabled(false);
			this.byId("airportInput").setEnabled(false);
//			this.byId("claimQuota").setValue("0.00");
			this.byId("ADDRESS").setEnabled(false);
			this.byId("desc2Text").setEnabled(false);
			this.byId("desc3Text").setEnabled(false);
			this.byId("EffectiveDateInput").setEnabled(false);
			//this.byId("descTextBoxLabel").setEnabled(false);
			this.byId("desc1Text").setEnabled(false);
			//this.byId("startDateLabel").setEnabled(false);
			this.byId("startDateInput").setEnabled(false);
			
			//this.byId("yearLabel").setEnabled(false);
			this.byId("yearInput").setEnabled(false);
			//this.byId("claimAmtLabel").setEnabled(false);
			this.byId("claimAmtInput").setEnabled(false);
			//this.byId("descLabel").setEnabled(false);
			this.byId("descInput").setEnabled(false);
			
			var selected = this.byId("selectType").getSelectedItem().getText();
			if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
				for(var c = 1; c<=4; c++){
					var attach;
					var link = "file0"+c.toString();
					
					var indx = "000"+c.toString();
					
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tbl_Docattach/"+docno+"/"+y+"/"+indx;
			    	
			    	$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		attach = data;
			        	},
			        	error: function(){
			        		attach = "X";
			        	}
			        });
			        
			    	if(attach != "X"){
				        var byteCharacters = window.atob(attach.tbl_Docattach.xdata);
			    		console.log(byteCharacters);
					    var byteNumbers = new Array(byteCharacters.length);
					    for (var i = 0; i < byteCharacters.length; i++) {
					        byteNumbers[i] = byteCharacters.charCodeAt(i);
					    }
					    var byteArray = new Uint8Array(byteNumbers);
					    
					    var xtype = attach.tbl_Docattach.xtype.toString().toUpperCase();
					    var apptype;
					    if( xtype == 'PDF'){
					    	apptype = 'application/pdf'
					    }
					    else if(xtype == "JPG"){
					    	apptype = 'image/jpeg'
					    }
					    else{
					    	apptype = 'image/'+xtype.toString().toLowerCase();
					    }
					    
					    var blob = new Blob([byteArray], {type: apptype});
						
						var fileUrl = URL.createObjectURL(blob);
						console.log(fileUrl);
				        this.byId(link).setText(attach.tbl_Docattach.xname);
				        this.byId(link).setHref(fileUrl);
			    	}
			    	
				}
			}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
				var l = 1;
				for(var c = 7; c<=10; c++){
					var attach;
					var link = "file"+c.toString().padStart(2,'0');
					
					var indx = "000"+l.toString();
					l = l +1;
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tbl_Docattach/"+docno+"/"+y+"/"+indx;
			    	
			    	$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		attach = data;
			        	},
			        	error: function(){
			        		attach = "X";
			        	}
			        });
			        
			    	if(attach != "X"){
				        var byteCharacters = window.atob(attach.tbl_Docattach.xdata);
			    		console.log(byteCharacters);
					    var byteNumbers = new Array(byteCharacters.length);
					    for (var i = 0; i < byteCharacters.length; i++) {
					        byteNumbers[i] = byteCharacters.charCodeAt(i);
					    }
					    var byteArray = new Uint8Array(byteNumbers);
					    
					    var xtype = attach.tbl_Docattach.xtype.toString().toUpperCase();
					    var apptype;
					    if( xtype == 'PDF'){
					    	apptype = 'application/pdf'
					    }
					    else if(xtype == "JPG"){
					    	apptype = 'image/jpeg'
					    }
					    else{
					    	apptype = 'image/'+xtype.toString().toLowerCase();
					    }
					    
					    var blob = new Blob([byteArray], {type: apptype});
						
						var fileUrl = URL.createObjectURL(blob);
						console.log(fileUrl);
				        this.byId(link).setText(attach.tbl_Docattach.xname);
				        this.byId(link).setHref(fileUrl);
			    	}
			    	
				}
			}else if(selected == "ค่าเช่าบ้าน"){
				var l = 1;
				for(var c = 5; c<=6; c++){
					var attach;
					var link = "file0"+c.toString();
					
					var indx = "000"+l.toString();
					l = l +1;
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tbl_Docattach/"+docno+"/"+y+"/"+indx;
			    	
			    	$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		attach = data;
			        	},
			        	error: function(){
			        		attach = "X";
			        	}
			        });
			        
			    	if(attach != "X"){
				        var byteCharacters = window.atob(attach.tbl_Docattach.xdata);
			    		console.log(byteCharacters);
					    var byteNumbers = new Array(byteCharacters.length);
					    for (var i = 0; i < byteCharacters.length; i++) {
					        byteNumbers[i] = byteCharacters.charCodeAt(i);
					    }
					    var byteArray = new Uint8Array(byteNumbers);
					    
					    var xtype = attach.tbl_Docattach.xtype.toString().toUpperCase();
					    var apptype;
					    if( xtype == 'PDF'){
					    	apptype = 'application/pdf'
					    }
					    else if(xtype == "JPG"){
					    	apptype = 'image/jpeg'
					    }
					    else{
					    	apptype = 'image/'+xtype.toString().toLowerCase();
					    }
					    
					    var blob = new Blob([byteArray], {type: apptype});
						
						var fileUrl = URL.createObjectURL(blob);
						console.log(fileUrl);
				        this.byId(link).setText(attach.tbl_Docattach.xname);
				        this.byId(link).setHref(fileUrl);
			    	}
			    	
				}				
			}else{
				var l = 1;
				for(var c = 7; c<=10; c++){
					var attach;
					var link = "file"+c.toString().padStart(2,'0');
					
					var indx = "000"+l.toString();
					l = l +1;
					
					var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tbl_Docattach/"+docno+"/"+y+"/"+indx;
			    	
			    	$.ajax({
			        	type: "GET",
			        	url: url,
			        	async: false,
			        	success: function(data){
			        		attach = data;
			        	},
			        	error: function(){
			        		attach = "X";
			        	}
			        });
			        
			    	if(attach != "X"){
				        var byteCharacters = window.atob(attach.tbl_Docattach.xdata);
			    		console.log(byteCharacters);
					    var byteNumbers = new Array(byteCharacters.length);
					    for (var i = 0; i < byteCharacters.length; i++) {
					        byteNumbers[i] = byteCharacters.charCodeAt(i);
					    }
					    var byteArray = new Uint8Array(byteNumbers);
					    
					    var xtype = attach.tbl_Docattach.xtype.toString().toUpperCase();
					    var apptype;
					    if( xtype == 'PDF'){
					    	apptype = 'application/pdf'
					    }
					    else if(xtype == "JPG"){
					    	apptype = 'image/jpeg'
					    }
					    else{
					    	apptype = 'image/'+xtype.toString().toLowerCase();
					    }
					    
					    var blob = new Blob([byteArray], {type: apptype});
						
						var fileUrl = URL.createObjectURL(blob);
						console.log(fileUrl);
				        this.byId(link).setText(attach.tbl_Docattach.xname);
				        this.byId(link).setHref(fileUrl);
			    	}
			    	
				}
				
			}
			
			//this.getView().byId("KZTIM").setText(manag.PA0001.ename);
			
//			this.byId("recieveNoLabel").setVisible(false);
//			this.byId("recieveNoInput").setVisible(false);
//			this.byId("airportLabel").setVisible(false);
//			this.byId("monthLabel").setVisible(false);
//			this.byId("monthInput").setVisible(false);
//			this.byId("airportInput").setVisible(false);
//			this.byId("startDateLabel").setVisible(false);
//			this.byId("startDateInput").setVisible(false);
			this.setModel(oViewModel, "view");
			
			var docTask;
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/l/"+docno,
	        	async: false,
	        	success: function(data){
	        		docTask = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			if(docTask.List.length > 0){
				var oTable = this.getView().byId("appTab01");
				var item = oTable.getItems();
				for(var d=0;d<item.length;d++){
					oTable.removeItem(item[d]);
				}
				for(var p = 0; p < docTask.List.length;p++){
					var user = jQuery.sap.getUriParameters().get("user");
					if(docTask.List[p].taskkey.pernr == user){
						this.getView().byId("approveSection").setVisible(false);
					}
					
					var pa0001;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/pa0001/"+docTask.List[p].taskkey.pernr,
			        	async: false,
			        	success: function(data){
			        		pa0001 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var pa0002;
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA0002/"+docTask.List[p].taskkey.pernr,
			        	async: false,
			        	success: function(data){
			        		pa0002 = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					var hrp1000;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/HRP1000/"+pa0001.PA0001.plans,
			        	async: false,
			        	success: function(data){
			        		hrp1000 = data;
			        		
			        	},
			        	error: function(){
			        		hrp1000 = "X";
			        	}
			        });
					
					var oItem = new sap.m.ColumnListItem({
						cells : [ new sap.m.Text({text:(p + 1)}),
								  new sap.m.Text({text:pa0002.PA0002.vorna+" "+pa0002.PA0002.nachn}),
								  new sap.m.Text({text:hrp1000.HRP1000.stext}),
								  new sap.m.Text({text:this.onDateFormat(docTask.List[p].aedat)}),
								  new sap.m.Text({text:docTask.List[p].sttext}),
								  new sap.m.Text({text:docTask.List[p].del_flag})
								 
						]
					});
					
					oTable.addItem(oItem);
				}
			}
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("BE/approveOtherBenefit").attachPatternMatched(this._onObjectMatched, this);
			
		},
		onChangeamt: function(){
			var amt = parseFloat(this.getView().byId("claimAllInput").getValue().replace(/,/g,""));
			var max = parseFloat(this.getView().byId("claimQuota").getValue().replace(/,/g,""));
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			
			if(amt > max){
				var val = oNumberFormat.format(max);
				
			}else{
				var val = oNumberFormat.format(amt);
			}
			
			this.getView().byId("claimAllInput").setValue(val);
			
		},
		onValue: function(value){
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			return oNumberFormat.format(value);
			
		},
		onDateFormat: function (value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() +1).toString().padStart(2,'0');
			var y = date.getFullYear();
			return [d,m,y].join("/");
		},
		_onObjectMatched: function (oEvent) {
			this.onInit();
			
//			if(oEvent.getParameter("arguments").from == "myTask"){
//				this.byId("approveSection").setVisible(false);
//			}else{
//				this.byId("approveSection").setVisible(true);
//			}
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
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var err;
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/04';
			var year_budish = (year + 0).toString().substring(2,4); 
			var script = "";
			
			var pernr = this.byId("PERNR").getText();
			
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
							dotyp : '04',
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
			
			var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/04';
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
			json.module = 'BE';
			json.header = "ขอเบิกสวัสดิการอื่นๆ";
			json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
			json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
			json.pernr = "4600146";
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
			var rqdat = this.getView().byId("RQDAT").getValue();
			var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
			var address = this.getView().byId("ADDRESS").getValue();
			
			var desc1Text = this.getView().byId("desc1Text").getValue();
			var desc2Text = this.getView().byId("desc2Text").getValue();
			var desc3Text = this.getView().byId("desc3Text").getValue();
			if(this.getView().byId("airportInput").getVisible() == true){
				var airportInput = this.getView().byId("airportInput").getSelectedItem().getKey();
			}else{
				var airportInput;
			}
			var startDateInput = this.getView().byId("startDateInput").getValue();
			var EffectiveDateInput = this.getView().byId("EffectiveDateInput").getValue();
			
			var recieveNoInput = this.getView().byId("recieveNoInput").getValue();
			if(this.getView().byId("monthInput").getVisible == true){
				var monthInput = this.getView().byId("monthInput").getSelectedItem().getKey();
			}else{
				var monthInput;
			}
			if(this.getView().byId("yearInput").getVisible() == true){
				var yearInput = this.getView().byId("yearInput").getSelectedItem().getKey();
			}else{
				var yearInput;
			}
			
			var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",selectType:"+selectType+",address:"+address+",desc1Text:"+desc1Text+",desc2Text:"+desc2Text+",desc3Text:"+desc3Text+",airportInput:"+airportInput+",startDateInput:"+startDateInput+",recieveNoInput:"+recieveNoInput;
				script = script + ",monthInput:"+monthInput+",yearInput:"+yearInput+",EffectiveDateInput:"+EffectiveDateInput;
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
			
			
			this.getView().byId("RQUST").setValue(docid);
			
			MessageToast.show("Saved");
		},
		
		onSendPressed: function () {
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			
			var dcrun = new JSONModel();
			var dchead = new JSONModel();
			var dcdetail = new JSONModel();
			var err;
			
			var year = new Date().getFullYear();
			var month = (new Date().getMonth() + 1).toString().padStart(2,'0');
			var date = new Date().getDate();
			
			var script = "";
			
			var selected = this.byId("selectType").getSelectedItem().getText();
			var err_req = "";
			
			if(err_req == "X"){
				
				MessageToast.show("Please input all require fields");
				
			}else{
			
				var pernr = this.byId("PERNR").getText();
				var dcid = this.getView().byId("RQUST").getValue();
				
				var docid = dcid;
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
		        	async: false,
		        	success: function(data){
		        		dchead = data.tblDocheader;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        }); 
				
				user = dchead.userad;
				pernr = dchead.userad;
				
				var wf;
				var pa0001;
				var json;
				
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
				
				var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
				if(selectType == "ค่าเช่าบ้าน"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/10",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.status = "2";
					json.sttext = "รออนุมัติ";
					json = JSON.stringify(json);
					
				}else if(selectType == "ค่าภัยพิบัติ"){
					
					var pernrpad = user.toString().padStart(8,'0');
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
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/13",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(pernr == parseInt(pa.paPos.manag).toString()){
						
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
						
						

						if(parseInt(pa0001.PA0001.persk) < 9){
							json = dchead;
							json.orgeh = "";
							json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.pernr = parseInt(pa.paPos.manag).toString();
							json.status = "2";
							json.sttext = "รออนุมัติ";
							json = JSON.stringify(json);
						}else{
							json = dchead;
							json.orgeh = wf.List[0].org1;
							json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
							json.pernr = "";
							json.status = "2";
							json.sttext = "รออนุมัติ";
							json = JSON.stringify(json);
						}
						
						
						
					}else{
						json = dchead;
						json.orgeh = ""
						json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
						json.pernr = parseInt(pa.paPos.manag).toString();
						json.status = "2";
						json.sttext = "รออนุมัติ";
						json = JSON.stringify(json);
					}
					
				}else {
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/9",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					json = dchead;
					json.orgeh = wf.List[0].org1;
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.status = "2";
					json.sttext = "รออนุมัติ";
					json = JSON.stringify(json);
					
				}
				
				var postdchead = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docno,
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
				
				var rqust = docno;
				var rqdat = this.getView().byId("RQDAT").getValue();
				var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
				var address = this.getView().byId("ADDRESS").getValue();
				
				var desc1Text = this.getView().byId("desc1Text").getValue();
				var desc2Text = this.getView().byId("desc2Text").getValue();
				var desc3Text = this.getView().byId("desc3Text").getValue();
				if(this.getView().byId("airportInput").getVisible() == true){
					var airportInput = this.getView().byId("airportInput").getValue();
				}else{
					var airportInput;
				}
				var startDateInput = this.getView().byId("startDateInput").getValue();
				var EffectiveDateInput = this.getView().byId("EffectiveDateInput").getValue();
				
				var recieveNoInput = this.getView().byId("recieveNoInput").getValue();
				if(this.getView().byId("monthInput").getVisible() == true){
					var monthInput = this.getView().byId("monthInput").getSelectedItem().getKey();
				}else{
					var monthInput;
				}
				if(this.getView().byId("yearInput").getVisible() == true){
					var yearInput = this.getView().byId("yearInput").getSelectedItem().getKey();
				}else{
					var yearInput;
				}
				
				var descinput = this.getView().byId("descInput").getValue();
				var claimAmtInput = this.getView().byId("claimAmtInput").getValue().replace(/,/g,"");
				var claimQuota = this.getView().byId("claimQuota").getValue().replace(/,/g,"");
				
				var script = "pernr:"+pernr+",rqust:"+rqust+",rqdat:"+rqdat+",selectType:"+selectType+",address:"+address+",desc1Text:"+desc1Text+",desc2Text:"+desc2Text+",desc3Text:"+desc3Text+",airportInput:"+airportInput+",startDateInput:"+startDateInput+",recieveNoInput:"+recieveNoInput;
					script = script + ",monthInput:"+monthInput+",yearInput:"+yearInput+",EffectiveDateInput:"+EffectiveDateInput+",descInput:"+descinput+",claimAmtInput:"+claimAmtInput+",claimQuota:"+claimQuota;
				json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9706"}';
				
				var postdcdetail = {
						  "async": false,
						  "crossDomain": true,
						  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno,
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
				
				
				this.getView().byId("RQUST").setValue(docid);
				var selected = this.byId("selectType").getSelectedItem().getText();
				var state;
				if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
					state = this.getView().byId("file01n").getVisible();
					if(state == true){
						var file = this.getView().byId("file01n").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file02n").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file03n").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file04n").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
					}
				}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
					state = this.getView().byId("file07n").getVisible();
					if(state == true){
						var file = this.getView().byId("file07n").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file08n").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file09n").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file10n").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
					}
				}else if(selected == "ค่าเช่าบ้าน"){
					state = this.getView().byId("file05n").getVisible();
					if(state == true){
						var file = this.getView().byId("file05n").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file06n").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
					}
				}else{
					state = this.getView().byId("file07n").getVisible();
					if(state == true){
						var file = this.getView().byId("file07n").oFileUpload.files;
						
						if(file.length > 0){
							this.onReadFile(file,"0001",docid,year);
						}
						var file = this.getView().byId("file08n").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0002",docid,year);
						}
						var file = this.getView().byId("file09n").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0003",docid,year);
						}
						var file = this.getView().byId("file10n").oFileUpload.files;
						if(file.length > 0){
							this.onReadFile(file,"0004",docid,year);
						}
					}
				}
				
				MessageToast.show("Saved");
				
				this.getRouter().navTo("myinfo");
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
		onChangeamtX: function(){
			var amt = parseFloat(this.getView().byId("claimAmtInput").getValue().replace(/,/g,""));
			jQuery.sap.require("sap.ui.core.format.NumberFormat");
			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				  maxFractionDigits: 2,
				  minFractionDigits: 2,
				  groupingEnabled: true,
				  groupingSeparator: ",",
				  decimalSeparator: "."
				});
			
			var val = oNumberFormat.format(parseFloat(amt));
			this.getView().byId("claimAmtInput").setValue(val);
		},
		onCancelPressed: function () {
			MessageToast.show("Cancel");
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
		onAccept: function (){
			
			var check = this.getView().byId("selvup");
			var visi = check.getVisible();
			var selvup = "";
			var selapp = this.getView().byId("sellv1").getSelectedItem().getText();
			if(visi == true){
				selvup = this.getView().byId("selvup").getSelectedItem().getText();
			}
			var date = new Date();
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth()+1).toString().padStart(2,'0');
			var y = date.getFullYear();
			var hh = date.getHours().toString().padStart(2,'0');
			var mm = date.getMinutes().toString().padStart(2,'0');
			var ss = date.getSeconds().toString().padStart(2,'0');
			var aedtm = new Date();
			aedtm = aedtm.getFullYear().toString()+'-'+(aedtm.getMonth()+1).toString().padStart(2,'0')+'-'+aedtm.getDate().toString().padStart(2,'0');
			
			var user = jQuery.sap.getUriParameters().get("user");
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var docData = new JSONModel();
			
			if(selapp == "ไม่อนุมัติ" || selvup == "ไม่อนุมัติ"){
				
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
				if(this.getView().byId("avup1").getVisible() == false){
					json.del_flag = this.getView().byId("avlv1").getValue();
				}else{
					json.del_flag = this.getView().byId("avup1").getValue();
				}
				json.taskkey.pernr = user;
				json.userad = dataJ.userad;
				json.status = "4";
				json.sttext = "ไม่อนุมัติ";
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
				dataJ.status = "4";
				dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
				dataJ.sttext = "ไม่อนุมัติ";
				
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
				
				this.getRouter().navTo("Worklist");
				
			}else if(selapp == "อนุมัติ" || selvup == "อนุมัติ"){
			
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
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDoctask/template/0",
		        	async: false,
		        	success: function(data){
		        		dctask = data.tblDoctask;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        }); 
				
				var apptxt = this.getView().byId("sellv1").getSelectedItem().getText();
				
				json = dctask;
				json.taskkey.docid = dataJ.docid;
				json.docno = dataJ.docid;
				json.module = dataJ.module;
				json.header = dataJ.header;
				json.bedat = dataJ.bedat;
				json.aedat = aedtm+"T"+[hh,mm,ss].join(":");
				if(this.getView().byId("avup1").getVisible() == false){
					json.del_flag = this.getView().byId("avlv1").getValue();
				}else{
					json.del_flag = this.getView().byId("avup1").getValue();
				}
				json.taskkey.pernr = user;
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
				
				dataJ.userch = user;
				
				var selectType = this.getView().byId("selectType").getSelectedItem().getKey();
				if(selectType == "ค่าเช่าบ้าน"){
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/10",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
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
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
						}else{
							dataJ.orgeh = wf.List[0].org3;
						}
					}else if(pa0001.PA0001.orgeh == wf.List[0].org3){
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
					}else {
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
					}
					
//					var docData;
//					var urlx = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9706";
//					$.ajax({
//			        	type: "GET",
//			        	url: urlx,
//			        	async: false,
//			        	success: function(data){
//			        		docData = data;
//			        		
//			        	},
//			        	error: function(){
//			        		
//			        	}
//			        });
					
					var im_data = JSON.stringify({"IM_PERNR":+dataJ.userad.padStart(8,'0'),"IM_DATE":+[y,m,d].join("")});
				    var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
					var ex_data;
					var settings = {
							  "url": "http://pocdeqapp.airportthai.co.th:52000/RESTAdapter/HRBEI23_040",
							  "method": "POST",
							  "timeout": 0,
							  "headers": {
							    "Content-Type": ["application/json", "application/json"],
							    "Authorization": "Basic "+ auth_logon
							  },
							  "data": im_data,
							};

							$.ajax(settings).done(function (response) {
							  console.log(response);
							  ex_data = response;
							});
					
					this.byId("EffectiveDateInput").setValue(ex_data.EX_DATA.NXTPAY.slice(4,6)+"/"+ex_data.EX_DATA.NXTPAY.slice(0,4));
							
//							
//					var script = docData.tblDocdetail.script;
//					var EffectiveDateInput = ex_data.EX_DATA.NXTPAY.slice(4,6)+"/"+ex_data.EX_DATA.NXTPAY.slice(0,4);
//					script = script + ",EffectiveDateInput:"+EffectiveDateInput;
//					var jsonx = docData.tblDocdetail;
//					jsonx.script = script;
//					
//					jsonx = JSON.stringify(jsonx);
//					var url2 = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno;
//					var postdctask = {
//							  "async": false,
//							  "crossDomain": true,
//							  "url": url2,
//							  "method": "PUT",
//							  "headers": {
//							    "Content-Type": "application/json",
//							    "User-Agent": "PostmanRuntime/7.13.0",
//							    "Accept": "*/*",
//							    "Cache-Control": "no-cache",
//							    
//							    "Host": "10.121.3.62:8088",
//							    "accept-encoding": "gzip, deflate",
//							    //"content-length": "1013",
//							    "Connection": "keep-alive",
//							    "cache-control": "no-cache"
//							  },
//							  "processData": false,
//							  "data": jsonx
//							}
//					
//					$.ajax(postdctask).done(function (response) {
//						console.log(response);
//						docData = response.tblDocdetail;
//					});
					
				}else if(selectType == "ค่าภัยพิบัติ"){
					
					var pernrpad = dataJ.userad.toString().padStart(8,'0');
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
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/13",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					dataJ.userch = user;
					if(dataJ.pernr == parseInt(pa.paPos.manag).toString()){
						dataJ.pernr = parseInt(pa.paPos.upman).toString();
					}else{
						dataJ.pernr = "";
						if(dataJ.orgeh == ""){
							dataJ.orgeh = wf.List[0].org1;
						}else if(pa0001.PA0001.orgeh == wf.List[0].org1){
							if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
								dataJ.status = "3";
								dataJ.sttext = "อนุมัติ";
								dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							}else{
								dataJ.orgeh = wf.List[0].org2;
							}
						}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
							if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
								dataJ.status = "3";
								dataJ.sttext = "อนุมัติ";
								dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
							}else{
								dataJ.orgeh = wf.List[0].org3;
							}
						}else if(pa0001.PA0001.orgeh == wf.List[0].org3){
							dataJ.orgeh = wf.List[0].org3;
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
						}else {
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
						}
					}
					var docData;
					var urlx = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9706";
					$.ajax({
			        	type: "GET",
			        	url: urlx,
			        	async: false,
			        	success: function(data){
			        		docData = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					
//					var im_data = JSON.stringify({"IM_PERNR":+dataJ.userad.padStart(8,'0'),"IM_DATE":+[y,m,d].join("")});
//				    var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
//					var ex_data;
//					var settings = {
//							  "url": "http://pocdeqapp.airportthai.co.th:52000/RESTAdapter/HRBEI23_040",
//							  "method": "POST",
//							  "timeout": 0,
//							  "headers": {
//							    "Content-Type": ["application/json", "application/json"],
//							    "Authorization": "Basic "+ auth_logon
//							  },
//							  "data": im_data,
//							};
//
//							$.ajax(settings).done(function (response) {
//							  console.log(response);
//							  ex_data = response;
//							});
//							
					var script = docData.tblDocdetail.script;
					script = script + ",claimAllInput:"+this.getView().byId("claimAllInput").getValue().replace(/,/g,"");
//					var EffectiveDateInput = ex_data.EX_DATA.NXTPAY.slice(4,6)+"/"+ex_data.EX_DATA.NXTPAY.slice(0,4);
//					script = script + ",EffectiveDateInput:"+EffectiveDateInput;
					var jsonx = docData.tblDocdetail;
					jsonx.script = script;
					
					jsonx = JSON.stringify(jsonx);
					var url2 = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno;
					var postdctask = {
							  "async": false,
							  "crossDomain": true,
							  "url": url2,
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
							  "data": jsonx
							}
					
					$.ajax(postdctask).done(function (response) {
						console.log(response);
						docData = response.tblDocdetail;
					});
					
				}else {
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/9",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
					if(pa0001.PA0001.orgeh == wf.List[0].org1){
						if(wf.List[0].org2 == "" || wf.List[0].org2 == null || wf.List[0].org2 == " "){
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
						}else{
							dataJ.orgeh = wf.List[0].org2;
						}	
					}else if(pa0001.PA0001.orgeh == wf.List[0].org2){
						if(wf.List[0].org3 == "" || wf.List[0].org3 == null || wf.List[0].org3 == " "){
							dataJ.status = "3";
							dataJ.sttext = "อนุมัติ";
							dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
						}else{
							dataJ.orgeh = wf.List[0].org3;
						}
					}else if(pa0001.PA0001.orgeh == "64494"){
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
					}else {
						dataJ.status = "3";
						dataJ.sttext = "อนุมัติ";
						dataJ.aedat = aedtm+"T"+[hh,mm,ss].join(":");
					}
					
//					var docData;
//					var urlx = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno+"/pa9706";
//					$.ajax({
//			        	type: "GET",
//			        	url: urlx,
//			        	async: false,
//			        	success: function(data){
//			        		docData = data;
//			        		
//			        	},
//			        	error: function(){
//			        		
//			        	}
//			        });
					
//					var im_data = JSON.stringify({"IM_PERNR":+dataJ.userad.padStart(8,'0'),"IM_DATE":+[y,m,d].join("")});
//				    var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
//					var ex_data;
//					var settings = {
//							  "url": "http://pocdeqapp.airportthai.co.th:52000/RESTAdapter/HRBEI23_040",
//							  "method": "POST",
//							  "timeout": 0,
//							  "headers": {
//								
//							    "Content-Type": ["application/json", "application/json"],
//							    "Authorization": "Basic "+ auth_logon,
//							    "Accept": "*/*",
//			        		    "Cache-Control": "no-cache",
//			        		    "Host": "pocdeqapp.airportthai.co.th:51000",
//			        		    "Accept-Encoding": "gzip, deflate",
//			        		    'Access-Control-Allow-Origin': '*',
//			        		    "Connection": "keep-alive",
//			        		    "cache-control": "no-cache"
//							  },
//							  "data": im_data,
//							};
//
//							$.ajax(settings).done(function (response) {
//							  console.log(response);
//							  ex_data = response;
//							});
//							
//					var script = docData.tblDocdetail.script;
//					var EffectiveDateInput = ex_data.EX_DATA.NXTPAY.slice(4,6)+"/"+ex_data.EX_DATA.NXTPAY.slice(0,4);
//					script = script + ",EffectiveDateInput:"+EffectiveDateInput;
//					var jsonx = docData.tblDocdetail;
//					jsonx.script = script;
//					
//					jsonx = JSON.stringify(jsonx);
//					var url2 = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno;
//					var postdctask = {
//							  "async": false,
//							  "crossDomain": true,
//							  "url": url2,
//							  "method": "PUT",
//							  "headers": {
//							    "Content-Type": "application/json",
//							    "User-Agent": "PostmanRuntime/7.13.0",
//							    "Accept": "*/*",
//							    "Cache-Control": "no-cache",
//							    
//							    "Host": "10.121.3.62:8088",
//							    "accept-encoding": "gzip, deflate",
//							    //"content-length": "1013",
//							    "Connection": "keep-alive",
//							    "cache-control": "no-cache"
//							  },
//							  "processData": false,
//							  "data": jsonx
//							}
//					
//					$.ajax(postdctask).done(function (response) {
//						console.log(response);
//						docData = response.tblDocdetail;
//					});
					
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
				
				this.getRouter().navTo("Worklist");
				
			}
			
		},
		onChangeType(){
			var selected = this.byId("selectType").getSelectedItem().getText();
			
			if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
//				if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)"){
//					this.byId("claimQuota").setValue("3000.00");
//				}else{
//					this.byId("claimQuota").setValue("2000.00");
//				}
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(false);
				this.byId("claimAmtInput").setVisible(false);
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(true);
				
				// show/hide attachFile tab
				this.byId("attachFile1").setVisible(true);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				
				this.byId("recieveNoInput").setEnabled(false);
				this.byId("monthInput").setEnabled(false);
				this.byId("airportInput").setEnabled(false);
				this.byId("desc1Text").setEnabled(true);
				this.byId("startDateInput").setEnabled(false);
				
				this.byId("yearInput").setEnabled(false);
				this.byId("claimAmtInput").setEnabled(false);
				this.byId("descInput").setEnabled(false);
				
				this.byId("ADDRESS").setEnabled(true);
				this.byId("desc2Text").setEnabled(true);
				this.byId("desc3Text").setEnabled(true);
				this.byId("EffectiveDateInput").setEnabled(true);
				
				this.getView().byId("file01n").setEnabled(true);
				this.getView().byId("file02n").setEnabled(true);
				this.getView().byId("file03n").setEnabled(true);
				this.getView().byId("file04n").setEnabled(true);
				
			}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
//				if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)"){
//					this.byId("claimQuota").setValue("3000.00");
//				}else{
//					this.byId("claimQuota").setValue("2000.00");
//				}
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(false);
				this.byId("claimAmtInput").setVisible(false);
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(true);
				
				// show/hide attachFile tab
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(true);
				
				
				this.byId("recieveNoInput").setEnabled(false);
				this.byId("monthInput").setEnabled(false);
				this.byId("airportInput").setEnabled(false);
				
				this.byId("desc1Text").setEnabled(true);
				this.byId("startDateInput").setEnabled(false);
				
				this.byId("yearInput").setEnabled(false);
				this.byId("claimAmtInput").setEnabled(false);
				this.byId("descInput").setEnabled(false);
				
				this.byId("ADDRESS").setEnabled(true);
				this.byId("desc2Text").setEnabled(true);
				this.byId("desc3Text").setEnabled(true);
				this.byId("EffectiveDateInput").setEnabled(true);
				
				this.getView().byId("file07n").setEnabled(true);
				this.getView().byId("file08n").setEnabled(true);
				this.getView().byId("file09n").setEnabled(true);
				this.getView().byId("file10n").setEnabled(true);
				
			}else if(selected == "ค่าเช่าบ้าน"){
				this.byId("recieveNoLabel").setVisible(true);
				this.byId("recieveNoInput").setVisible(true);
				this.byId("airportLabel").setVisible(true);
				this.byId("monthLabel").setVisible(true);
				this.byId("monthInput").setVisible(true);
				this.byId("airportInput").setVisible(true);
				this.byId("startDateLabel").setVisible(true);
				this.byId("startDateInput").setVisible(true);
				this.byId("descTextBoxLabel").setVisible(false);
				this.byId("desc1Text").setVisible(false);
				
//				this.byId("claimQuota").setValue("4500.00");
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(false);
				this.byId("desc3Text").setVisible(false);
				this.byId("EffectiveDateInput").setVisible(true);
				
				this.byId("descLabel").setVisible(true);
				this.byId("descInput").setVisible(true);
				
				// show/hide attachFile tab
				this.byId("attachFile2").setVisible(true);
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				this.byId("recieveNoInput").setEnabled(true);
				this.byId("monthInput").setEnabled(true);
				this.byId("airportInput").setEnabled(true);
				this.byId("startDateInput").setEnabled(true);
				this.byId("desc1Text").setEnabled(false);
				
				this.byId("ADDRESS").setEnabled(true);
				this.byId("desc2Text").setEnabled(true);
				this.byId("desc3Text").setEnabled(true);
				this.byId("EffectiveDateInput").setEnabled(true);
				
				this.byId("descInput").setEnabled(true);
				
				this.getView().byId("file05n").setEnabled(true);
				this.getView().byId("file06n").setEnabled(true);
				
			}else{
				// hide attachFile tab
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
//				this.byId("claimQuota").setValue("50000.00");
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				this.byId("recieveNoInput").setEnabled(false);
				this.byId("monthInput").setEnabled(false);
				this.byId("airportInput").setEnabled(false);
				this.byId("desc1Text").setEnabled(true);
				this.byId("startDateInput").setEnabled(false);
				
				
				this.byId("ADDRESS").setEnabled(true);
				this.byId("desc2Text").setEnabled(true);
				this.byId("desc3Text").setEnabled(true);
				this.byId("EffectiveDateInput").setEnabled(false);
				
				
				this.getView().byId("file07n").setEnabled(true);
				this.getView().byId("file08n").setEnabled(true);
				this.getView().byId("file09n").setEnabled(true);
				this.getView().byId("file10n").setEnabled(true);
				
			}
		},
		onEditPressed: function () {
			
			var selected = this.byId("selectType").getSelectedItem().getText();
			
			if(selected == "ค่าอุทกภัยและอื่นๆ (เจ้าบ้าน)" || selected == "ค่าอุทกภัยและอื่นๆ (ผู้อาศัย)"){
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				// show/hide attachFile tab
				this.byId("attachFile1").setVisible(true);
				this.byId("file01n").setVisible(true);
				this.byId("file02n").setVisible(true);
				this.byId("file03n").setVisible(true);
				this.byId("file04n").setVisible(true);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				this.byId("recieveNoInput").setEnabled(false);
				this.byId("monthInput").setEnabled(false);
				this.byId("airportInput").setEnabled(false);
				this.byId("desc1Text").setEnabled(true);
				this.byId("startDateInput").setEnabled(false);
				
				this.byId("yearInput").setEnabled(false);
				this.byId("claimAmtInput").setEnabled(true);
				this.byId("descInput").setEnabled(false);
				
				this.byId("ADDRESS").setEnabled(false);
				this.byId("desc2Text").setEnabled(true);
				this.byId("desc3Text").setEnabled(true);
				this.byId("EffectiveDateInput").setEnabled(false);
				
				this.getView().byId("file01n").setEnabled(true);
				this.getView().byId("file02n").setEnabled(true);
				this.getView().byId("file03n").setEnabled(true);
				this.getView().byId("file04n").setEnabled(true);
				
			}else if(selected == "ค่าอุทกภัยและอื่นๆ (ผู้เช่า)"){
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				// show/hide attachFile tab
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(true);
				this.byId("file07n").setVisible(true);
				this.byId("file08n").setVisible(true);
				this.byId("file09n").setVisible(true);
				this.byId("file10n").setVisible(true);
				
				
				this.byId("recieveNoInput").setEnabled(false);
				this.byId("monthInput").setEnabled(false);
				this.byId("airportInput").setEnabled(false);
				
				this.byId("desc1Text").setEnabled(true);
				this.byId("startDateInput").setEnabled(false);
				
				this.byId("yearInput").setEnabled(false);
				this.byId("claimAmtInput").setEnabled(true);
				this.byId("descInput").setEnabled(false);
				
				this.byId("ADDRESS").setEnabled(false);
				this.byId("desc2Text").setEnabled(true);
				this.byId("desc3Text").setEnabled(true);
				this.byId("EffectiveDateInput").setEnabled(false);
				
				this.getView().byId("file07n").setEnabled(true);
				this.getView().byId("file08n").setEnabled(true);
				this.getView().byId("file09n").setEnabled(true);
				this.getView().byId("file10n").setEnabled(true);
				
			}else if(selected == "ค่าเช่าบ้าน"){
				this.byId("recieveNoLabel").setVisible(true);
				this.byId("recieveNoInput").setVisible(true);
				this.byId("airportLabel").setVisible(true);
				this.byId("monthLabel").setVisible(true);
				this.byId("monthInput").setVisible(true);
				this.byId("airportInput").setVisible(true);
				this.byId("startDateLabel").setVisible(true);
				this.byId("startDateInput").setVisible(true);
				this.byId("descTextBoxLabel").setVisible(false);
				this.byId("desc1Text").setVisible(false);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(false);
				this.byId("desc3Text").setVisible(false);
				this.byId("EffectiveDateInput").setVisible(true);
				
				this.byId("yearLabel").setVisible(true);
				this.byId("yearInput").setVisible(true);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				this.byId("descLabel").setVisible(true);
				this.byId("descInput").setVisible(true);
				
				// show/hide attachFile tab
				this.byId("attachFile2").setVisible(true);
				this.byId("file05n").setVisible(true);
				this.byId("file06n").setVisible(true);
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile3").setVisible(false);
				
				this.byId("recieveNoInput").setEnabled(true);
				this.byId("monthInput").setEnabled(true);
				this.byId("airportInput").setEnabled(false);
				this.byId("startDateInput").setEnabled(false);
				this.byId("desc1Text").setEnabled(false);
				
				this.byId("ADDRESS").setEnabled(false);
				this.byId("desc2Text").setEnabled(false);
				this.byId("desc3Text").setEnabled(false);
				this.byId("EffectiveDateInput").setEnabled(false);
				
				this.byId("yearInput").setEnabled(true);
				this.byId("claimAmtInput").setEnabled(true);
				this.byId("descInput").setEnabled(true);
				
				this.getView().byId("file05n").setEnabled(true);
				this.getView().byId("file06n").setEnabled(true);
				
				
			}else{
				// hide attachFile tab
				
				this.byId("recieveNoLabel").setVisible(false);
				this.byId("recieveNoInput").setVisible(false);
				this.byId("airportLabel").setVisible(false);
				this.byId("monthLabel").setVisible(false);
				this.byId("monthInput").setVisible(false);
				this.byId("airportInput").setVisible(false);
				this.byId("descTextBoxLabel").setVisible(true);
				this.byId("desc1Text").setVisible(true);
				this.byId("startDateLabel").setVisible(false);
				this.byId("startDateInput").setVisible(false);
				this.byId("yearLabel").setVisible(false);
				this.byId("yearInput").setVisible(false);
				this.byId("claimAmtLabel").setVisible(true);
				this.byId("claimAmtInput").setVisible(true);
				
				this.byId("ADDRESS").setVisible(true);
				this.byId("desc2Text").setVisible(true);
				this.byId("desc3Text").setVisible(true);
				this.byId("EffectiveDateInput").setVisible(false);
				
				this.byId("descLabel").setVisible(false);
				this.byId("descInput").setVisible(false);
				
				this.byId("attachFile1").setVisible(false);
				this.byId("attachFile2").setVisible(false);
				this.byId("attachFile3").setVisible(true);
				this.byId("file07n").setVisible(true);
				this.byId("file08n").setVisible(true);
				this.byId("file09n").setVisible(true);
				this.byId("file10n").setVisible(true);
				
				this.byId("recieveNoInput").setEnabled(false);
				this.byId("monthInput").setEnabled(false);
				this.byId("airportInput").setEnabled(false);
				this.byId("desc1Text").setEnabled(true);
				this.byId("startDateInput").setEnabled(false);
				this.byId("yearInput").setEnabled(false);
				this.byId("claimAmtInput").setEnabled(true);
				this.byId("claimAllInput").setEnabled(false);
				
				this.byId("ADDRESS").setEnabled(false);
				this.byId("desc2Text").setEnabled(true);
				this.byId("desc3Text").setEnabled(true);
				this.byId("EffectiveDateInput").setEnabled(false);
				
				
				this.getView().byId("file07n").setEnabled(true);
				this.getView().byId("file08n").setEnabled(true);
				this.getView().byId("file09n").setEnabled(true);
				this.getView().byId("file10n").setEnabled(true);
				
			}
			
		}

	});
});