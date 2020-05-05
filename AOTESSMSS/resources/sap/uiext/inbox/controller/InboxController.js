/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2017 SAP SE. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.controller.InboxController");sap.ui.base.Object.extend("sap.uiext.inbox.controller.InboxController",{constructor:function(){sap.ui.base.Object.apply(this);this.oView=null;this.oModel=null;},setModel:function(m){this.oModel=m;},getModel:function(m){return this.oModel;},getExpandParameters:function(){var e="";var v=this.getView();var i=(v.currentView===v.constants.rowRepeaterView)?true:false;var t=v._getComponent("INBOX_FILTER_TASK_TYPE");var I=t?v._isInitialFilterAppliedforTaskType(t):false;if(v.showTaskCategory){e="TaskDefinitionData";}if((v.showTaskDescription)&&i){if(e.length>0){e=e+",";}e=e+"Description";}if(I&&v.isCustomAttributesEnabled){if(e.length>0){e=e+",";}e=e+"CustomAttributeData";}return e;},setView:function(v){this.oView=v;},getView:function(){return this.oView;},getTaskInitiatorIconParts:function(){return[{path:"CreatedBy"}];},getTaskInitiatorIconFormatter:function(t){return function(c){var C=this.getBindingContext();var a;if(C){a=C.getProperty("TaskDefinitionData/Category");}var i;if(a!==null&&a!==""&&a!==undefined){a=a.toUpperCase();if(a===t._oBundle.getText("ALERT"))i=t.constants.iconPool.getIconURI("alert");else if(a===t._oBundle.getText("NOTIFICATION"))i=t.constants.iconPool.getIconURI("notification-2");else if(a===t._oBundle.getText("TODO"))i=t.constants.iconPool.getIconURI("activity-2");else if(a===t._oBundle.getText("TASK"))i=t.constants.iconPool.getIconURI("task");}if(!c){return i;}else{this.setVisible(false);}};},getExpandTaskDescriptionLinkParts:function(){return[{path:"Description"}];},getExpandTaskDescriptionLinkFormatter:function(t){return function(d){if(d){var m=t.getCoreModel();var c=this.getBindingContext();var T=t.getModel().getProperty(t.constants.NAVIGATION_DESCRIPTION,c);var i=t.oTcmMetadata._isPropertyAvailable("TaskDescription","DescriptionAsHtml");if(!i){if(T.Description&&T.Description!==''){if(((T.Description).search((/(<([^>]+)>)/ig))!==-1)){return'true';}}}else{if(T.DescriptionAsHtml&&T.DescriptionAsHtml!==''){if((T.DescriptionAsHtml).search((/(<([^>]+)>)/ig))!==-1){return'true';}}}}return'auto';};},isFilterOnCustomAttributesSupported:function(){return true;},isSortOnCustomAttributesSupported:function(){return true;},getCustomAttributeColumnParts:function(n){return[{path:"CustomAttributeData"}];},getCustomAttributeColumnFormatter:function(t){return function(v){var m=t.getCoreModel();var N="name";var p=t.sCollectionPath.replace(/^\//,"")+"('"+this.data(N)+"')";var r="";if(v!==undefined&&v!==""&&v!==null){var T=this.getModel().getProperty('InstanceID',this.getBindingContext());var c=t.constants.oTaskInstanceCustomAttributeValuesMap;for(var i=0;i<v.length;i++){var C=m.oData[v[i]]===undefined?m._original_data[v[i]]:m.oData[v[i]];if(C.Name===this.data(N)){var a=C.Name;var o=c[T];if(!o){var o={};o[C.Name]=C.Value;c[T]=o;}else{var b=o.sAttributeName;if(!b){c[T][a]=C.Value;}}r=C.Value;break;}}}return r;};},getTaskDetailsParts:function(){return[{path:"Description"}];},getTaskDetailsFormatter:function(t){return function(d){if(d!==null&&d!==undefined){var m=t.getCoreModel();var i=t.oTcmMetadata._isPropertyAvailable("TaskDescription","DescriptionAsHtml");var c=this.getBindingContext();var a=d[0];var b=m.oData[a];var r=/(<([^>]+)>)/ig;var e;if(b){if(i&&b.DescriptionAsHtml!==""){e=b.DescriptionAsHtml;}else{e=b.Description;}}else{if(i&&d.DescriptionAsHtml!==""){e=d.DescriptionAsHtml;}else{e=d.Description;}}if(e!==null&&e!==undefined&&e!==""){this.data('showMore',e);this.data('showLess',e.replace(r,""));return e.replace(r,"");}}return"";};},getHtmlTextParts:function(){return[{path:"Description"}];},getHtmlTextFormatter:function(t){return function(T){var i=t.oTcmMetadata._isPropertyAvailable("TaskDescription","DescriptionAsHtml");if(i){if(T.DescriptionAsHtml){return T.DescriptionAsHtml;}}return T.Description;};}});
