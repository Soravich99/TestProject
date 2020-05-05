/*!
 * SAP APF Analysis Path Framework
 * 
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.apf.core.hierarchicalStep");jQuery.sap.require("sap.apf.core.step");jQuery.sap.require("sap.apf.core.utils.uriGenerator");jQuery.sap.require("sap.ui.model.odata.v2.ODataModel");jQuery.sap.require("sap.ui.model.Sorter");(function(){'use strict';sap.apf.core.HierarchicalStep=function(m,s,f,r,c){sap.apf.core.Step.call(this,m,s,f,r,c);var a;var b;var d;this.type="hierarchicalStep";var e=f.getConfigurationById(s.request).service;var g=f.getConfigurationById(s.request).entityType;var h=c.getAnnotationsForService(e);var i=s.hierarchyProperty;var j=jQuery.Deferred();var k=f.getConfigurationById(s.binding).requiredFilters;var l=c.getStartParameterFacade().getSapSystem();if(l){e=sap.ui.model.odata.ODataUtils.setOrigin(e,{force:true,alias:l});}jQuery.when(c.getMetadata(e),c.getEntityTypeMetadata(e,g)).then(function(o,p){var q=o.getHierarchyAnnotationsForProperty(g,i);if(q.type==="messageObject"){m.putMessage(q);}else{b=n(i,q);}var t=[k[0]];var u=o.getPropertyMetadata(g,k[0])["sap:text"];if(u){t.push(u);}a=f.createRequest({service:e,entityType:g,selectProperties:t,type:"request",id:"SelectionValidationRequest"});j.resolve(o,q,p);});var M=new sap.ui.model.odata.v2.ODataModel(e,{annotationURI:h});function n(i,o){var p=[i];for(var q in o){p.push(o[q]);}p=p.concat(f.getConfigurationById(s.request).selectProperties);return sap.apf.core.utils.uriGenerator.getSelectString(p);}this.update=function(o,p){j.done(function(q,t,u){var v=o.restrictToProperties(q.getFilterablePropertiesAndParameters(g));var F=!v.isEqual(d);d=v.copy();var w="/"+sap.apf.core.utils.uriGenerator.generateOdataPath(m,q,g,o,q.getUriComponents(g).navigationProperty);var x={};x.path=w;var y=o.restrictToProperties(q.getFilterableProperties(g));if(!y.isEmpty()){x.filters=[y.mapToSapUI5FilterExpression()];}x.parameters={select:b,operationMode:sap.ui.model.odata.OperationMode.Server,useServerSideApplicationFilters:true,treeAnnotationProperties:t};x.sorter=this.getSorter();this.getBinding().updateTreetable(x,M,u,F);if(!this.getFilter().isEmpty()&&F){var z=y.removeTermsByProperty(k[0]);a.sendGetInBatch(z.addAnd(this.getFilter()),function(A){var B=A.data;var C=this.getFilter().getFilterTerms();var D=[];C.forEach(function(E){B.forEach(function(G){if(G[k[0]]===E.getValue()){D.push(G);}});});this.getBinding().setFilterValues(D);p({},true);}.bind(this));}else{p({},F);}}.bind(this));};this.getSorter=function(){var o=[];var p=this.getBinding().getRequestOptions();if(p&&p.orderby&&p.orderby.length>0){p.orderby.forEach(function(q){o.push(new sap.ui.model.Sorter(q.property,!q.ascending));});}if(o.length===0){return;}return o;};this.setData=function(){};this.adjustCumulativeFilter=function(o){if(k[0]&&!this.getFilter().isEmpty()){return o.removeTermsByProperty(k[0]);}return o;};};})();
