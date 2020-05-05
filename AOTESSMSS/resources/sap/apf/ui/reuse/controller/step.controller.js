/*!
 * SAP APF Analysis Path Framework
 * 
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
(function(){"use strict";sap.ui.controller("sap.apf.ui.reuse.controller.step",{setActiveStep:function(i){var o=this.oCoreApi.getActiveStep();var a=this.oCoreApi.getSteps().indexOf(o);if(a===i){return;}var b=this.oCoreApi.getSteps()[i];this.oCoreApi.setActiveStep(b);this.oUiApi.getAnalysisPath().getController().drawMainChart();var s=this.oUiApi.getAnalysisPath().getCarousel().stepViews[i];s.toggleActiveStep();},bindEvts:function(){var s=this;var c=this.oUiApi.getAnalysisPath().getCarousel();var a=this.getView().oVChartTiltleLayout;a.attachBrowserEvent('click',function(){var b=c.stepViews.indexOf(s.getView());s.setActiveStep(b);s.oUiApi.getLayoutView().getController().enableDisableOpenIn();});},onAfterRendering:function(){this.bindEvts();this.oUiApi.getLayoutView().getController().enableDisableOpenIn();},onInit:function(){this.oCoreApi=this.getView().getViewData().oCoreApi;this.oUiApi=this.getView().getViewData().uiApi;this.isSwitched=false;if(sap.ui.Device.system.desktop){this.getView().addStyleClass("sapUiSizeCompact");}},drawThumbnailContent:function(d){var v=this.getView();var i=this.oUiApi.getAnalysisPath().getCarousel().stepViews.indexOf(v);if(this.representationInstance!==undefined){if(this.representationInstance!==this.oCoreApi.getSteps()[i].getSelectedRepresentation().type){this.isSwitched=true;}}this.representationInstance=this.oCoreApi.getSteps()[i].getSelectedRepresentation().type;if(this.oCoreApi.getSteps()[i].getSelectedRepresentation().toggleInstance!==undefined){this.bToggleInstanceExists=true;}if(this.isSwitched===true||d===undefined||d===true||this.bToggleInstanceExists===true){this.isSwitched=false;v.oThumbnailChartLayout.removeAllItems();var s=this.oCoreApi.getSteps()[i];var c;if(s.getSelectedRepresentation().bIsAlternateView){c=s.getSelectedRepresentation().toggleInstance.getThumbnailContent();}else{c=s.getSelectedRepresentation().getThumbnailContent();}var o=new sap.m.VBox({}).addStyleClass("overlayThumbnailWrapper");v.oThumbnailChartLayout.addItem(c);v.oThumbnailChartLayout.addItem(o);var C=this.oUiApi.getAnalysisPath().getCarousel().getController();var t=C.getThumbnailDataset(s);v.getModel().getData().thumbnail=t;v.getModel().updateBindings();v.oThumbnailChartLayout.rerender();v.oThumbnailChartLayout.setBusy(false);}else{v.oThumbnailChartLayout.setBusy(false);}}});}());
