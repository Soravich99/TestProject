/*!
* SAP APF Analysis Path Framework
*
* (c) Copyright 2012-2014 SAP SE. All rights reserved
*/
jQuery.sap.require('sap.apf.ui.utils.formatter');jQuery.sap.require('sap.ui.layout.HorizontalLayout');jQuery.sap.require('sap.m.Text');jQuery.sap.require("sap.apf.ui.representations.utils.chartDataSetHelper");jQuery.sap.require("sap.apf.ui.representations.utils.representationFilterHandler");jQuery.sap.require("sap.apf.ui.representations.utils.vizFrameSelectionHandler");jQuery.sap.require("sap.apf.ui.representations.utils.timeAxisDateConverter");jQuery.sap.declare("sap.apf.ui.representations.BaseUI5ChartRepresentation");(function(){'use strict';function _(r,a){if(!a){return undefined;}var m=r.getMetaData();if(!m){return null;}var p=m.getPropertyMetadata(a);if(!p){return null;}var f=p.label||p.name;return f!==undefined?f:null;}sap.apf.ui.representations.BaseUI5ChartRepresentation=function(a,p){this.oMessageObject="";this.aDataResponse=undefined;this.dataset={};this.parameter=p;this.orderby=p.orderby;this.dimension=p.dimensions;this.measure=p.measures;this.alternateRepresentation=p.alternateRepresentationType;this.requiredFilters=p.requiredFilters;this.oVizFrameSelectionHandler=new sap.apf.ui.representations.utils.VizFrameSelectionHandler(this.parameter,a);this.oTimeAxisDateConverter=new sap.apf.ui.representations.utils.TimeAxisDateConverter();this.oRepresentationFilterHandler=new sap.apf.ui.representations.utils.RepresentationFilterHandler(a,this.parameter,this.oTimeAxisDateConverter);this.chartInstance={};this.chartParam="";this.thumbnailChartParam="";this.oApi=a;this.axisType=sap.apf.ui.utils.CONSTANTS.axisTypes.AXIS;this.topN=p.top;};sap.apf.ui.representations.BaseUI5ChartRepresentation.prototype={getParameter:function(){return this.parameter;},setData:function(d,m){if(this.bIsAlternateView&&this.toggleInstance&&jQuery.isFunction(this.toggleInstance.setData)){this.toggleInstance.setData(d,m);}else{this.formatter=new sap.apf.ui.utils.formatter({getEventCallback:this.oApi.getEventCallback.bind(this.oApi),getTextNotHtmlEncoded:this.oApi.getTextNotHtmlEncoded,getExits:this.oApi.getExits()},m,d);this.oRepresentationFilterHandler.setMetadata(m);this.oChartDataSetHelper=new sap.apf.ui.representations.utils.ChartDataSetHelper(this.formatter,this.oTimeAxisDateConverter);this.oChartDataSetHelper.createFlattenDataSet(this.parameter,m,d,this.oApi);this.aDataResponse=d||[];this.oRepresentationFilterHandler.validateFiltersAgainstDataset(this.aDataResponse);this.metadata=m;if(!this.metadata){this.oMessageObject=this.oApi.createMessageObject({code:"6004",aParameters:[this.oApi.getTextNotHtmlEncoded("step")]});this.oApi.putMessage(this.oMessageObject);}}},attachSelectionAndFormatValue:function(s){var a=this;if(!s){this.oMessageObject=this.oApi.createMessageObject({code:"6002",aParameters:["title",this.oApi.getTextNotHtmlEncoded("step")]});this.oApi.putMessage(this.oMessageObject);}if(this.dimension.length===0){this.oMessageObject=this.oApi.createMessageObject({code:"6002",aParameters:["dimensions",s]});this.oApi.putMessage(this.oMessageObject);}if(this.measure.length===0){this.oMessageObject=this.oApi.createMessageObject({code:"6002",aParameters:["measures",s]});this.oApi.putMessage(this.oMessageObject);}if(!this.aDataResponse||this.aDataResponse.length===0){this.oMessageObject=this.oApi.createMessageObject({code:"6000",aParameters:[s]});this.oApi.putMessage(this.oMessageObject);}this.fnHandleSelection=this.handleSelection.bind(a);this.chart.attachSelectData(this.fnHandleSelection);this.fnHandleDeselection=this.handleDeselection.bind(a);this.chart.attachDeselectData(this.fnHandleDeselection);},getFormatStringForMeasure:function(m){var f=this.formatter.getFormatString(m);return f;},getFormatStringForMeasureTooltip:function(m){var f=this.formatter.getFormatStringTooltip(m);return f;},getSelectionFilterLabel:function(){var r=this.getParameter().requiredFilters[0];var s=this.getSelectedFilterPropertyLabel(r);if(this.getParameter().requiredFilterOptions&&this.getParameter().requiredFilterOptions.fieldDesc){s=this.oApi.getTextNotHtmlEncoded(this.getParameter().requiredFilterOptions.fieldDesc);}return s;},getSelectedFilterPropertyLabel:function(r){return _(this,r);},getIsAllMeasureSameUnit:function(){var a=true;var s=this;var f=this.metadata.getPropertyMetadata(this.measure[0].fieldName).unit?this.metadata.getPropertyMetadata(this.metadata.getPropertyMetadata(this.measure[0].fieldName).unit).semantics:undefined;var m;this.measure.forEach(function(b,i){m=s.metadata.getPropertyMetadata(s.measure[i].fieldName).unit?s.metadata.getPropertyMetadata(s.metadata.getPropertyMetadata(b.fieldName).unit).semantics:undefined;if(a&&f!==undefined&&m&&(f!==m)){a=false;}});return a;},createThumbnailLayout:function(){this.thumbnailLayout=new sap.ui.layout.HorizontalLayout().addStyleClass('thumbnailLayout');this.thumbnailLayout.removeAllContent();if(this.aDataResponse!==undefined&&this.aDataResponse.length!==0){this.thumbnailChart.setModel(this.oModel);this.thumbnailLayout.addContent(this.thumbnailChart);this.thumbnailChart.removeStyleClass('thumbnailNoData');}else{var n=new sap.m.Text({text:this.oApi.getTextNotHtmlEncoded("noDataText")}).addStyleClass('noDataText');this.thumbnailLayout.addContent(n);this.thumbnailLayout.addContent(this.thumbnailChart);this.thumbnailChart.addStyleClass('thumbnailNoData');}},getAlternateRepresentation:function(){return this.alternateRepresentation;},getMetaData:function(){return this.metadata;},getData:function(){return this.aDataResponse;},getRequestOptions:function(f){if(this.bIsAlternateView&&this.toggleInstance&&jQuery.isFunction(this.toggleInstance.getRequestOptions)){return this.toggleInstance.getRequestOptions(f,this.bIsAlternateView);}var o={paging:{},orderby:[]};if(this.orderby&&this.orderby.length){var O=this.orderby.map(function(a){return{property:a.property,ascending:a.ascending};});o.orderby=O;}if(this.topN&&this.topN>0){o.paging.top=this.topN;}return o;},createDataset:function(){this.dataset=this.oChartDataSetHelper.getFlattenDataSet();this.oModel=this.oChartDataSetHelper.getModel();},drawSelectionOnMainChart:function(){var f=this.oRepresentationFilterHandler.getFilterValues();if(f.length>0){var s=this.oVizFrameSelectionHandler.getSelectionInfoFromFilter(f,this.aDataResponse);this.setSelectionOnMainChart(s);}},drawSelectionOnThumbnailChart:function(){var f=this.oRepresentationFilterHandler.getFilterValues();if(f.length>0){var s=this.oVizFrameSelectionHandler.getSelectionInfoFromFilter(f,this.aDataResponse);this.setSelectionOnThumbnailChart(s,false);}},handleSelection:function(e){this.manageSelectionsOnChart(e,false,this.parameter);},handleDeselection:function(e){this.manageSelectionsOnChart(e,true,this.parameter);},getSelections:function(){return this.oRepresentationFilterHandler.getDisplayInfoForFilters(this.metadata,this.oModel.getData().data);},getSortedSelections:function(){var s=this.getSelections();s=s.sort(function(v,a){return v.text.localeCompare(a.text);});return s;},getSelectionCount:function(){return this.oRepresentationFilterHandler.getFilterValues().length;},removeAllSelection:function(){this.setSelectionOnThumbnailChart([],false);this.setSelectionOnMainChart([],true);},getFilterMethodType:function(){return sap.apf.core.constants.filterMethodTypes.filter;},getFilter:function(){this.filter=this.oRepresentationFilterHandler.createFilterFromSelectedValues();return this.filter;},setFilter:function(f){this.filter=f;},adoptSelection:function(s){if(s&&s.getFilter){var a=s.getFilter().getInternalFilter().getFilterTerms().map(function(t){return t.getValue();});this.oRepresentationFilterHandler.updateFilterFromSelection(a);}},serialize:function(){var o=this.parameter.orderby;if(this.toggleInstance){o=this.toggleInstance.orderby;}return{oFilter:this.oRepresentationFilterHandler.getFilterValues(),bIsAlternateView:this.bIsAlternateView,orderby:o};},deserialize:function(s){this.oRepresentationFilterHandler.updateFilterFromSelection(s.oFilter);this.bIsAlternateView=s.bIsAlternateView;if(this.bIsAlternateView){this.toggleInstance=this.oApi.getUiApi().getStepContainer().getController().createToggleRepresentationInstance(this,s.orderby);}},getPrintContent:function(){},onChartSwitch:function(){},destroy:function(){this.dataset=null;if(this.formatter){this.formatter=null;}if(this.oRepresentationFilterHandler){this.oRepresentationFilterHandler.filterValues=[];this.oRepresentationFilterHandler=null;}if(this.chart){this.chart.detachSelectData(this.fnHandleSelection);this.fnHandleSelection=null;this.chart.detachDeselectData(this.fnHandleDeselection);this.fnHandleDeselection=null;this.chart.destroy();this.chart=null;}if(this.thumbnailChart){this.thumbnailChart.destroy();this.thumbnailChart=null;}if(this.thumbnailLayout){this.thumbnailLayout.removeAllContent();}}};}());
