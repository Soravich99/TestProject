/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/documentation/sdk/controller/MasterTreeBaseController","sap/m/library"],function(q,M,m){"use strict";var S=m.SplitAppMode;return M.extend("sap.ui.documentation.sdk.controller.ApiMaster",{onInit:function(){var c=this.getOwnerComponent();c.loadVersionInfo().then(c.fetchAPIIndex.bind(c)).then(function(){this._expandTreeToNode(this._topicId,this.getOwnerComponent().getModel("treeData"));}.bind(this));this._initTreeUtil("name","nodes");this.getRouter().getRoute("api").attachPatternMatched(this._onMatched,this);this.getRouter().getRoute("apiId").attachPatternMatched(this._onTopicMatched,this);this.getRouter().getRoute("deprecated").attachPatternMatched(this._onTopicMatched,this);this.getRouter().getRoute("experimental").attachPatternMatched(this._onTopicMatched,this);},_onTopicMatched:function(a){try{this.showMasterSide();}catch(e){q.sap.log.error(e);}this._topicId=a.getParameter("arguments").id||a.getParameter("name");this._expandTreeToNode(this._topicId,this.getOwnerComponent().getModel("treeData"));},_onMatched:function(){var s=this.getView().getParent().getParent(),a=this.byId('tree'),b;s.setMode(S.ShowHideMode);if(a){b=a.getSelectedItem();b&&b.setSelected(false);}},compareTreeNodes:function(n,N){if(n==="EXPERIMENTAL"){return 1;}if(N==="EXPERIMENTAL"){return-1;}if(n==="DEPRECATED"){return 1;}if(N==="DEPRECATED"){return-1;}if(n<N){return-1;}if(n>N){return 1;}if(n===N){return 0;}},onNodeSelect:function(e){var n=e.getParameter("listItem");var a=n.getCustomData()[0].getValue();if(!a){q.sap.log.warning("Missing name for entity: "+n.getId()+" - cannot navigate to API ref");return;}this.getRouter().navTo("apiId",{id:a},false);}});});