sap.ui.define([ 
'jquery.sap.global', 
'sap/m/MessageToast', 
'sap/ui/core/Fragment', 
'sap/ui/core/mvc/Controller', 
'sap/ui/model/Filter', 
'sap/ui/model/json/JSONModel' 
], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel) { 
"use strict"; 

var CController = Controller.extend("sap.ui.demo.toolpageapp.controller.TM.MyLeave", { 

onInit: function(){ 

}, 

onPressNavToDetail : function(oEvent) { 
this.getSplitAppObj().to(this.createId(oEvent.getSource().data("mydata"))); 
}, 

onPressDetailBack : function() { 
this.getSplitAppObj().backDetail(); 
}, 

onPressMasterBack : function() { 
this.getSplitAppObj().backMaster(); 
}, 

onListItemPress : function(detailId) { 
this.getSplitAppObj().toDetail(this.createId(detailId)); 
}, 

onPressModeBtn : function(oEvent) { 
var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue(); 

this.getSplitAppObj().setMode(sSplitAppMode); 
MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, {duration: 5000}); 
}, 

getSplitAppObj : function() { 
var result = this.byId("myLeave"); 
if (!result) { 
jQuery.sap.log.info("SplitApp object can't be found"); 
} 
return result; 
},

onSearch : function (oEvt) {

	// add filter for search
	var aFilters = [];
	var sQuery = oEvt.getSource().getValue();
	if (sQuery && sQuery.length > 0) {
		var filter = new Filter("Name", sap.ui.model.FilterOperator.Contains, sQuery);
		aFilters.push(filter);
	}

	// update list binding
	var list = this.getView().byId("idList");
	var binding = list.getBinding("items");
	binding.filter(aFilters, "Application");
},
onPressDetailBack : function() {
	this.getSplitAppObj().backMaster();;
}

}); 


return CController; 

});