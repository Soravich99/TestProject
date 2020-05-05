/*!
 * SAP APF Analysis Path Framework
 * 
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
(function(){"use strict";sap.ui.controller("sap.apf.ui.reuse.controller.deleteAnalysisPath",{onInit:function(){this.oCoreApi=this.getView().getViewData().oInject.oCoreApi;this.oUiApi=this.getView().getViewData().oInject.uiApi;this.oSerializationMediator=this.getView().getViewData().oInject.oSerializationMediator;},openPathGallery:function(){var p=new sap.ui.model.json.JSONModel();p.setData(this.getView().getViewData().jsonData);this.oDialog=this.getView().getContent()[0];this.oDialog.getContent()[0].setModel(p);this.oDialog.setInitialFocus(this.oDialog);this.oDialog.open();},handleDeleteOfDialog:function(e){var s=this;var p=e.getParameter("listItem").getProperty('title');var l={item:e.getParameter("listItem"),list:s.getView().getContent()[0].getContent()[0],guid:s.getGuidForPath(p,this.getView().getViewData().jsonData.GalleryElements),sPathName:p};s.oUiApi.getAnalysisPath().getToolbar().getController().getConfirmDelDialog(l);},getGuidForPath:function(p,v){var i;for(i=0;i<v.length;i++){var d=v[i];if(d.AnalysisPathName===p){return d.guid;}}},deleteSavedPath:function(p,i){var s=this;var g=i.guid;var a=p;var m;var c=s.oUiApi.getAnalysisPath().oSavedPathName.getTitle();s.oSerializationMediator.deletePath(g,function(r,b,d){if(d===undefined&&(typeof r==="object")){i.list.removeItem(i.item);i.list.rerender();s.oCoreApi.readPaths(function(r,b,d){if(d===undefined&&(typeof r==="object")){var n=r.paths.length;if(n===0){jQuery(".pathText").removeClass("pathTextDontShow");jQuery(".pathText").addClass("pathTextShow");}}else{m=s.oCoreApi.createMessageObject({code:"6005",aParameters:[a]});m.setPrevious(d);s.oCoreApi.putMessage(m);}});}else{m=s.oCoreApi.createMessageObject({code:"6009",aParameters:[a]});m.setPrevious(d);s.oCoreApi.putMessage(m);}});if(s.oCoreApi.isDirty()){c=c.substring(1);}if(c===a){s.oUiApi.getAnalysisPath().getToolbar().getController().resetAnalysisPath();}}});}());
