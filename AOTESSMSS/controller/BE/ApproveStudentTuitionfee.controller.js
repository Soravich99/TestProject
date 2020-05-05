sap.ui.define([
	'sap/ui/demo/toolpageapp/controller/BaseController',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], function (BaseController, MessageToast, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.toolpageapp.controller.BE.ApproveStudentTuitionfee", {

		onInit: function () {
			var oViewModel = new JSONModel({
					lastLogin: new Date(Date.now() - 86400000)
				});
			
			var user = jQuery.sap.getUriParameters().get("user");
			var pernr = user;
			var userm = user;
			
			var complete_url = window.location.href;
			var docno = complete_url.split("/").pop();
			var docData;
			
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
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/1",
			        	async: false,
			        	success: function(data){
			        		wf = data;
			        		
			        	},
			        	error: function(){
			        		
			        	}
			        });
					
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
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/1",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
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
			}
			
			var date = new Date();
			var d = date.getDate();
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = (date.getFullYear()).toString().padStart(2,'0');
			this.getView().byId("approveDate").setValue([d,m,y].join("/"));
			this.getView().byId("approveDateup").setValue([d,m,y].join("/"));
			
			
			var y = new Date().getFullYear();
			var pa9706 = new JSONModel();
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
			
			var pa9703_arr = script.split(",");
			var pernr = "";
			var rqust = "";
			var rqdat = "";
			var childSel = "";
			var childBirth = "";
			var childAge = "";
			var childEdu = "";
			var eduType = "";
			var eduLevel = "";
			var eduBran = "";
			var eduCyear = "";
			var eduYear = "";
			var eduTerm = "";
			var empTotal = "";
			var empBalance = "";
			var invno = "";
			var DTP2 = "";
			var invBalance = "";
			var empPay = "";
			var othItem = "";
			
			var arrayLength = pa9703_arr.length;
			for (var i = 0; i < arrayLength; i++) {
				var fieldar = pa9703_arr[i].split(":");
				var field = fieldar[0];
				if(field.includes("pernr") == true){ pernr = pa9703_arr[i].split(":").pop(); }
				if(field.includes("rqust") == true){ rqust = pa9703_arr[i].split(":").pop(); }
				if(field.includes("rqdat") == true){ rqdat = pa9703_arr[i].split(":").pop(); }
				if(field.includes("childSel") == true){ childSel = pa9703_arr[i].split(":").pop(); }
				if(field.includes("childBirth") == true){ childBirth = pa9703_arr[i].split(":").pop(); }
				if(field.includes("childAge") == true){ childAge = pa9703_arr[i].split(":").pop(); }
				if(field.includes("childEdu") == true){ childEdu = pa9703_arr[i].split(":").pop(); }
				if(field.includes("eduType") == true){ eduType = pa9703_arr[i].split(":").pop(); }
				if(field.includes("eduLevel") == true){ eduLevel = pa9703_arr[i].split(":").pop(); }
				if(field.includes("eduBran") == true){ eduBran = pa9703_arr[i].split(":").pop(); }
				if(field.includes("eduCyear") == true){ eduCyear = pa9703_arr[i].split(":").pop(); }
				if(field.includes("eduYear") == true){ eduYear = pa9703_arr[i].split(":").pop(); }
				if(field.includes("eduTerm") == true){ eduTerm = pa9703_arr[i].split(":").pop(); }
				if(field.includes("empTotal") == true){ empTotal = pa9703_arr[i].split(":").pop(); }
				if(field.includes("empBalance") == true){ empBalance = pa9703_arr[i].split(":").pop(); }
				if(field.includes("invno") == true){ invno = pa9703_arr[i].split(":").pop(); }
				if(field.includes("DTP2") == true){ DTP2 = pa9703_arr[i].split(":").pop(); }
				if(field.includes("invBalance") == true){ invBalance = pa9703_arr[i].split(":").pop(); }				
				if(field.includes("empPay") == true){ empPay = pa9703_arr[i].split(":").pop(); }
				if(field.includes("othItem") == true){ othItem = pa9703_arr[i].split(":").pop(); }
				
			}
			
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
				this.getView().byId("approveSection").setVisible(false);
			}else{
				
				if(user == pernr){
					this.getView().byId("approveSection").setVisible(false);
				}
				
				this.getView().byId("btnSend").setVisible(false);
				this.getView().byId("approveSection").setVisible(true);
			}
			
			if(dchead.userad == user){
				this.getView().byId("approveSection").setVisible(false);
			}else{
				this.getView().byId("empPay").setEnabled(true);
			}
			
			user = pernr;
			
			var pa9701;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/PA9701/"+user+"/0001",
	        	async: false,
	        	success: function(data){
	        		pa9701 = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var temp = {"List":[{"text":"เลือก","key":"X"}]};
			for(var x = 0;x<pa9701.List.length;x++){
				var tt = x+1;
				temp.List[tt] = pa9701.List[x];
				temp.List[tt].text = pa9701.List[x].ename;
				temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(pa9701.List[x]))));
			}
			
			this.getView().setModel(new JSONModel(temp),"childItem");
			
			var eduitem;
			
			$.ajax({
	        	type: "GET",
	        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE08",
	        	async: false,
	        	success: function(data){
	        		eduitem = data;
	        		
	        	},
	        	error: function(){
	        		
	        	}
	        });
			
			var len = eduitem.List.length;
			var mod = new JSONModel(eduitem);
			mod.setSizeLimit(len);
			this.getView().setModel(mod,"eduItem");
			
			var temp = {"List":	[
									{"text":"เลือก","key":"X"},
									{"text":"รัฐบาล","key":"01"},
									{"text":"เอกชนได้รับเงินอุดหนุน","key":"02"},
									{"text":"เอกชนไม่ได้รับเงินอุดหนุน","key":"03"},
									
								]
						};
			
			
			this.getView().setModel(new JSONModel(temp),"eduType");
			
			var temp = {"List":	[
							{"text":"เลือก","key":"X"},
							{"text":"อนุบาลหรือเทียบเท่า","key":"01"},
							{"text":"ประถมศึกษาหรือเทียบเท่า","key":"02"},
							{"text":"มัธยมศึกษาตอนต้นหรือเทียบท่า","key":"03"},
							{"text":"มัธยมศึกษาตอนปลายหรือเทียบเท่า","key":"04"},
							{"text":"ประกาศนียบัตรวิชาชีพ (ปวช)","key":"05"},
							{"text":"อนุปริญญา/ปวส./ปวท.หรือเทียบเท่า","key":"06"},
							{"text":"ปริญญาตรี","key":"07"},
						]
				};
			
			
			this.getView().setModel(new JSONModel(temp),"eduLevel");
			
			
			this.getView().byId("PERNR").setText(pernr);
			this.getView().byId("rqust").setValue(docno);
			this.getView().byId("rqdat").setValue(rqdat);
			this.getView().byId("childSel").setSelectedKey(childSel);
			this.getView().byId("childBirth").setValue(childBirth);
			this.getView().byId("childAge").setValue(childAge);
			this.getView().byId("childEdu").setSelectedKey(childEdu);
			this.getView().byId("eduType").setSelectedKey(eduType);
			this.getView().byId("eduLevel").setSelectedKey(eduLevel);
			
			this.onBRNget();
			
			this.getView().byId("eduBran").setSelectedKey(eduBran);
			this.getView().byId("eduCyear").setValue(eduCyear);
			this.getView().byId("eduYear").setValue(eduYear);
			this.getView().byId("eduTerm").setSelectedKey(eduTerm);
			this.getView().byId("empTotal").setValue(empTotal);
			this.getView().byId("empBalance").setValue(empBalance);
			this.getView().byId("invno").setValue(invno);
			this.getView().byId("DTP2").setValue(DTP2);
			this.getView().byId("invBalance").setValue(invBalance);
			this.getView().byId("empPay").setValue(empPay);
			this.getView().byId("othItem").setValue(othItem);

			user = pernr;
			
			
			
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
			
			for(var c = 1; c<=2; c++){
				var attach;
				
				var link = "file0"+(c).toString();

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
			
			var dt = new Date();
			var d = dt.getDate().toString().padStart(2,'0');
			var m = (dt.getMonth() + 1).toString().padStart(2,'0');
			var y = dt.getFullYear().toString().padStart(4,'0');
			
			var im_data = JSON.stringify({"IM_PERNR":pernrpad,"IM_DATE":[y,m,d].join("")});
			var ex_data;
	        var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
	        var settings = {
	        		  "async": false,
	        		  "crossDomain": true,
	        		  "url": "http://pocdeqapp.airportthai.co.th:51000/RESTAdapter/HRBEI23_130",
	        		  "method": "POST",
	        		  "headers": {
	        		    "Content-Type": "application/json",
	        		    "Authorization": "Basic "+ auth_logon,
	        		    "Accept": "*/*",
	        		    "Cache-Control": "no-cache",
	        		    "Host": "pocdeqapp.airportthai.co.th:51000",
	        		    "Accept-Encoding": "gzip, deflate",
	        		    'Access-Control-Allow-Origin': '*',
	        		    "Content-Length": "350",
	        		    "Connection": "keep-alive",
	        		    "cache-control": "no-cache"
	        		  },
	        		  "data": im_data
	        		}			
			
			$.ajax(settings).done(function (response) {
	        	console.log(response);
	        	ex_data = response;
	        });
			
	        if(ex_data != undefined){
	        	if(ex_data.EX_DATA.DUEDD < d){
	        		this.getView().byId("payDate").setValue(ex_data.EX_DATA.NXTPAY.slice(4,6)+"/"+ex_data.EX_DATA.NXTPAY.slice(0,4));
	        	}else{
	        		this.getView().byId("payDate").setValue(ex_data.EX_DATA.DUEMM+"/"+ex_data.EX_DATA.DUEYY);
	        	}
	        }
	        
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("BE/approveStudentTuitionfee").attachPatternMatched(this._onObjectMatched, this);

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
		onBRNget: function(){
			var level = this.getView().byId("eduLevel").getSelectedKey();
			var type = this.getView().byId("eduType").getSelectedKey();
			if(level != "X" && type != "X"){
				var brnitem;
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/ZTHRBEE08A/"+type+"/"+level,
		        	async: false,
		        	success: function(data){
		        		brnitem = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				var temp = {"List":[{"text":"เลือก","key":"X"}]};
				for(var x = 0;x<brnitem.List.length;x++){
					var tt = x+1;
					temp.List[tt] = brnitem.List[x];
					if(brnitem.List[x].zthrbee08Akey.edbnc == ""){
						temp.List[tt].text = brnitem.List[x].edtxt;
					}else{
						temp.List[tt].text = brnitem.List[x].zthrbee08Akey.edbnc;
					}
					temp.List[tt].key = window.btoa(unescape(encodeURIComponent(JSON.stringify(brnitem.List[x]))));
				}
				
				this.getView().setModel(new JSONModel(temp),"eduBran");
			}
			
		},
		onChangeChield: function(){
			var ch_sel = this.getView().byId("childSel").getSelectedKey();
			if(ch_sel != "X"){
				var ch_data = JSON.parse(decodeURIComponent(escape(window.atob(ch_sel))));
				
				this.getView().byId("childBirth").setValue(this.onDatedisplay2(ch_data.fgbdt));
				this.getView().byId("childAge").setValue(this.onChildage(ch_data.fgbdt));
			}
		},
		onSelbrn: function(){
			var edu = this.getView().byId("eduBran").getSelectedKey();
			var decode = JSON.parse(decodeURIComponent(escape(window.atob(edu))));
			this.getView().byId("empTotal").setValue(decode.mxamt);
			this.onCallRFC();
		},
		onDatedisplay: function(value){
			var date = new Date(value);
			var d = date.getDate().toString().padStart(2,'0');
			var m = (date.getMonth() + 1).toString().padStart(2,'0');
			var y = date.getFullYear();
			
			return [d,m,y].join("/");
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
		onSendPressed: function () {
			
			var f1 = this.getView().byId("eduCyear").getValue();
			var f2 = this.getView().byId("eduYear").getValue();
			var f3 = this.getView().byId("eduTerm").getSelectedItem().getKey();
			var f4 = this.getView().byId("invno").getValue();
			var f5 = this.getView().byId("DTP2").getValue();
			var f6 = this.getView().byId("invBalance").getValue();
			var file = this.getView().byId("file01").oFileUpload.files;
			
			if(f1.length < 1 || f2.length < 1 || f3.length < 1 || f4.length < 1 || f5.length < 1 || f6.length < 1 || file.length < 1){
				MessageToast.show("Please input all require fields");
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
				var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/01';
				var year_budish = (year + 0).toString().substring(2,4); 
				var script = "";
				
				var pernr = this.byId("PERNR").getText();
				var dcid = this.getView().byId("rqust").getValue();
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
									dotyp : '01',
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
					
					var url = 'http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocrunning/' + 'BE' + year + month + '/01';
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/1",
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
					json.header = "ขอเบิกค่าเล่าเรียนบุตร";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = "9999-12-31";
					json.pernr = "4600146";
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
					
					var spernr = "pernr:"+pernr;
					var rqust = ",rqust:"+docid;
					var rqdat = ",rqdat:"+this.getView().byId("rqdat").getValue();
					var childSel = ",childSel:"+this.getView().byId("childSel").getSelectedItem().getKey();
					var childBirth = ",childBirth:"+this.getView().byId("childBirth").getValue();
					var childAge = ",childAge:"+this.getView().byId("childAge").getValue();
					var childEdu = ",childEdu:"+this.getView().byId("childEdu").getSelectedItem().getKey();
					var eduType = ",eduType:"+this.getView().byId("eduType").getSelectedItem().getKey();
					var eduLevel = ",eduLevel:"+this.getView().byId("eduLevel").getSelectedItem().getKey();
					var eduBran = ",eduBran:"+this.getView().byId("eduBran").getSelectedItem().getKey();
					var eduCyear = ",eduCyear:"+this.getView().byId("eduCyear").getValue();
					var eduYear = ",eduYear:"+this.getView().byId("eduYear").getValue();
					var eduTerm = ",eduTerm:"+this.getView().byId("eduTerm").getSelectedItem().getKey();
					var empTotal = ",empTotal:"+this.getView().byId("empTotal").getValue();
					var empBalance = ",empBalance:"+this.getView().byId("empBalance").getValue();
					var invno = ",invno:"+this.getView().byId("invno").getValue();
					var DTP2 = ",DTP2:"+this.getView().byId("DTP2").getValue();
					var invBalance = ",invBalance:"+this.getView().byId("invBalance").getValue();
					var othItem = ",othItem:"+this.getView().byId("othItem").getValue();
					
					var script = spernr+rqust+rqdat+childSel+childBirth+childAge+childEdu+eduType+eduLevel+eduBran+eduCyear+eduYear+eduTerm+empTotal+empBalance+invno+DTP2+invBalance+othItem;
		
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
					
					
					var year = new Date().getFullYear();
					
					var file = this.getView().byId("file01").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
			
					var file = this.getView().byId("file02").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					
					MessageToast.show("Saved");
					
					this.getRouter().navTo("myInfo");
					
				}else{
					var docid = dcid;
					
					$.ajax({
			        	type: "GET",
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docid,
			        	async: false,
			        	success: function(data){
			        		dchead = data.tblDocheader;
			        		
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
			        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/1",
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
					json.header = "ขอเบิกค่าเล่าเรียนบุตร";
					json.bedat = [year,month,date.toString().padStart(2,'0')].join("-");
					json.aedat = "9999-12-31";
					json.pernr = "4600146";
					json.userad = pernr;
					json.status = "2";
					json.sttext = "รออนุมัติ";
					json = JSON.stringify(json);
					
					var postdchead = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocheader/"+docid,
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
					
					var spernr = "pernr:"+pernr;
					var rqust = ",rqust:"+docid;
					var rqdat = ",rqdat:"+this.getView().byId("rqdat").getValue();
					var childSel = ",childSel:"+this.getView().byId("childSel").getSelectedItem().getKey();
					var childBirth = ",childBirth:"+this.getView().byId("childBirth").getValue();
					var childAge = ",childAge:"+this.getView().byId("childAge").getValue();
					var childEdu = ",childEdu:"+this.getView().byId("childEdu").getSelectedItem().getKey();
					var eduType = ",eduType:"+this.getView().byId("eduType").getSelectedItem().getKey();
					var eduLevel = ",eduLevel:"+this.getView().byId("eduLevel").getSelectedItem().getKey();
					var eduBran = ",eduBran:"+this.getView().byId("eduBran").getSelectedItem().getKey();
					var eduCyear = ",eduCyear:"+this.getView().byId("eduCyear").getValue();
					var eduYear = ",eduYear:"+this.getView().byId("eduYear").getValue();
					var eduTerm = ",eduTerm:"+this.getView().byId("eduTerm").getSelectedItem().getKey();
					var empTotal = ",empTotal:"+this.getView().byId("empTotal").getValue();
					var empBalance = ",empBalance:"+this.getView().byId("empBalance").getValue();
					var invno = ",invno:"+this.getView().byId("invno").getValue();
					var DTP2 = ",DTP2:"+this.getView().byId("DTP2").getValue();
					var invBalance = ",invBalance:"+this.getView().byId("invBalance").getValue();
					var othItem = ",othItem:"+this.getView().byId("othItem").getValue();
					
					var script = spernr+rqust+rqdat+childSel+childBirth+childAge+childEdu+eduType+eduLevel+eduBran+eduCyear+eduYear+eduTerm+empTotal+empBalance+invno+DTP2+invBalance+othItem;
		
					json = '{"docid":"'+docid+'","script":"'+script+'","stable":"pa9706"}';
					
					var postdcdetail = {
							  "async": false,
							  "crossDomain": true,
							  "url": "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docid,
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
					
					
					var year = new Date().getFullYear();
					
					var file = this.getView().byId("file01").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0001",docid,year);
					}
			
					var file = this.getView().byId("file02").oFileUpload.files;
					
					if(file.length > 0){
						this.onReadFile(file,"0002",docid,year);
					}
					
					MessageToast.show("Saved");
					
					this.getRouter().navTo("myInfo");
					
				}
				
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
		onAccept: function (){
			
			var user = jQuery.sap.getUriParameters().get("user");
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
				dataJ.aedat = aedtm;
				dataJ.sttext = "ไม่อนุมัติ";
				dataJ.userch = user;
				
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
				
			}else if(selapp == "อนุมัติ" || selvup == "อนุมัติ"){
				
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
				
				var emppay = this.byId("empPay").getValue().replace(",","");
				script = script + ",empPay:"+emppay;
				var json = docData.tblDocdetail;
				json.script = script;
				json = JSON.stringify(json);
				var url = "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/tblDocdetail/"+docno;
				var postdctask = {
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
						  "data": json
						}
				
				$.ajax(postdctask).done(function (response) {
					console.log(response);
					docData = response.tblDocdetail;
				});
				
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
				
				json = dctask;
				json.taskkey.docid = dataJ.docid;
				json.docno = dataJ.docid;
				json.module = dataJ.module;
				json.header = dataJ.header;
				json.bedat = dataJ.bedat;
				json.aedat = aedtm+"T"+[hh,mm,ss].join(":");;
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
				
				$.ajax({
		        	type: "GET",
		        	url: "http://webdeqapp.airportthai.co.th:8088/api/aot/v1/WF_BE/"+pa0001.PA0001.werks+"/1",
		        	async: false,
		        	success: function(data){
		        		wf = data;
		        		
		        	},
		        	error: function(){
		        		
		        	}
		        });
				
				dataJ.userch = user;
				
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
			this.getRouter().navTo("Worklist");
			
		},
		onSavePressed: function () {
			MessageToast.show("Saved");
		},

		onCancelPressed: function () {
			MessageToast.show("Cancel");
		},
		onCallRFC: function(){
			
			var childSel = this.getView().byId("childSel").getSelectedKey();
			var eduYear = this.getView().byId("eduYear").getValue();
			var eduType = this.getView().byId("eduType").getSelectedKey();
			var eduLevel = this.getView().byId("eduLevel").getSelectedKey();
			var eduBran = this.getView().byId("eduBran").getSelectedText();
			
			var dt = new Date();
			var y = dt.getFullYear();
			var m = (dt.getMonth() + 1 ).toString().padStart(2,'0');
			var d = dt.getDate().toString().padStart(2,'0');
			
			var pernrpad = this.getView().byId("PERNR").getText().toString().padStart(8,'0');
			
			var brn = JSON.parse(decodeURIComponent(escape(window.atob(eduBran))));
		    var childid = JSON.parse(decodeURIComponent(escape(window.atob(childSel))));
			var input = {"CHILD_ID":childid.icnum,"EDU_YEAR":eduYear,"SCH_TYPE":eduType,"EDU_LEVEL":eduLevel,"EDU_BRANCH":brn.zthrbee08Akey.edbnc,"KEYDATE":[y,m,d].join("")};
			var im_data = JSON.stringify(input);
			var ex_data;
	        var auth_logon = window.btoa("PI_WS_ESS" + ":" + "AOTess@19");
	        var settings = {
	        		  "async": false,
	        		  "crossDomain": true,
	        		  "url": "http://pocdeqapp.airportthai.co.th:51000/RESTAdapter/HRBEI03_130",
	        		  "method": "POST",
	        		  "headers": {
	        		    "Content-Type": "application/json",
	        		    "Authorization": "Basic "+ auth_logon,
	        		    "Accept": "*/*",
	        		    "Cache-Control": "no-cache",
	        		    "Host": "pocdeqapp.airportthai.co.th:51000",
	        		    "Accept-Encoding": "gzip, deflate",
	        		    'Access-Control-Allow-Origin': '*',
	        		    "Content-Length": "350",
	        		    "Connection": "keep-alive",
	        		    "cache-control": "no-cache"
	        		  },
	        		  "data": im_data
	        		}			
			
			$.ajax(settings).done(function (response) {
	        	console.log(response);
	        	ex_data = response;
	        });
			if(ex_data != undefined){
				
				this.getView().byId("empTotal").setValue(ex_data.EX_DATA.EDU_QUOTA);
				this.getView().byId("empBalance").setValue(ex_data.EX_DATA.EDU_QREMAIN);
				
			}
			
		},
		onEditPressed: function () {

			this.getView().byId("eduBran").setEnabled(true);
			this.getView().byId("eduCyear").setEnabled(true);
			this.getView().byId("eduYear").setEnabled(true);
			this.getView().byId("eduTerm").setEnabled(true);
			this.getView().byId("invno").setEnabled(true);
			this.getView().byId("DTP2").setEnabled(true);
			this.getView().byId("invBalance").setEnabled(true);
			
		},
		onCancel: function () {
			this.getRouter().navTo("familyBenefitPage");
		},
		addRow: function() {
		    var oList = this.getView().byId("idEducationHistoryTable");
		    var oDt = oList.getBinding("items").getModel().oData;
		}
	});
});