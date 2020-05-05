sap.ui.define(["jquery.sap.global","sap/ui/base/Object","sap/ui/model/Context","sap/suite/ui/generic/template/lib/MessageUtils","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(q,B,C,M,F,a){"use strict";function c(d,E,s,m,g,p){s=s||"/"+E;if(d.getDraftContext().isDraftEnabled(E)){return d.createNewDraftEntity(E,s,p).then(function(h){return h.context;});}g(true);var o=m.createEntry(s,{properties:p,batchGroupId:"Changes",changeSetId:"Changes"});return Promise.resolve(o);}function r(m,s,t){var p=new Promise(function(d,g){m.read(s,{urlParameters:{"$expand":"DraftAdministrativeData"},success:function(o){d(o);},error:function(o){g(o);}});});t.oBusyHelper.setBusy(p,true);return p;}function R(t,E,k,s,m,T){var p=new Promise(function(d,g){var i,l,P,v,h=[];if(k&&s&&m){l=k.length;for(i=0;i<l;i++){P=k[i].PropertyPath;v=s[P][0];h.push(new F(P,a.EQ,v));}if(t.getDraftController().getDraftContext().isDraftEnabled(E)){var D=new F({filters:[new F("IsActiveEntity","EQ",false),new F("SiblingEntity/IsActiveEntity","EQ",null)],and:false});h.push(D);}var o=new F(h,true);m.read("/"+E,{urlParameters:{"$expand":"DraftAdministrativeData"},filters:[o],success:function(j){var n=f(j,m,s);if(n){d(n);}else{g(j);}},error:function(j){g(j);}});}});T.oBusyHelper.setBusy(p,true);return p;}function f(o,m,s){var d,i,l,g;if(o&&o.results){l=o.results.length;if(l==0){g=null;}else if(l==1){g=o.results[0];}else if(l>=1){var D=[];var A=[];for(i=0;i<l;i++){d=o.results[i];if(d&&d.IsActiveEntity){A.push(d);}else if(d&&d.IsActiveEntity==false){D.push(d);}}if(A.length==0&&D.length>=2){var h;for(var j=0;j<D.length;j++){h=D[j];if(h.DraftUUID==s.DraftUUID){g=h;break;}}if(!g){g=D[0];}}else if(A.length==1&&D.length==1){g=A[0];}else if(A.length==1&&D.length>=2){g=A[0];}}}return g;}function e(t){var A=t.oAppComponent;var m=A.getModel();var o=m.getMetaModel();var n=A.getNavigationController();var d=A.getApplicationController();var D=d.getTransactionController().getDraftController().getDraftContext();var E=function(g){t.oApplicationProxy.getResourceBundleForEditPromise().then(function(h){M.handleError(M.operations.modifyEntity,null,null,g,{resourceBundle:h,navigationController:n,model:m});M.handleTransientMessages(t.oApplicationProxy.getDialogFragment);});};var p=function(g){var h=g.getParameter("context");if(!D.hasDraft(h)){return;}if(!o.getODataEntitySet(h.getPath().split("(")[0].substring(1))){return;}var P=g.getParameter("path");d.propertyChanged(P,h).catch(E);t.oApplicationProxy.markCurrentDraftAsModified();};m.attachPropertyChange(p);}function u(t,d,g){return new Promise(function(h,i){var U=t.oApplicationProxy.getDialogFragment("sap.suite.ui.generic.template.ObjectPage.view.fragments.UnsavedChangesDialog",{onEdit:function(){U.close();h();},onCancel:function(){U.close();i();}},"Dialog");var s=t.getText("DRAFT_LOCK_EXPIRED",[d.LastChangedByUserDescription||d.LastChangedByUser]);var o=new sap.ui.model.resource.ResourceModel({bundleName:"sap/suite/ui/generic/template/ObjectPage/i18n/i18n",async:true});U.setModel(o,"i18n");U.getModel("Dialog").setProperty("/unsavedChangesQuestion",s);(g||q.noop)();t.oBusyHelper.getUnbusy().then(function(){U.open();});});}function b(t,E,s,m,T,d,k,S){if(s===""&&k&&S){return new Promise(function(g,h){R(t,E,k,S,m,T).then(function(i){var j="/"+m.createKey(E,i);var o=new C(m,j);if(!i.DraftAdministrativeData||i.DraftAdministrativeData.DraftIsCreatedByMe){g(t.editEntity(o,false));}else if(i.DraftAdministrativeData.InProcessByUser){h({lockedByUser:i.DraftAdministrativeData.InProcessByUserDescription||i.DraftAdministrativeData.InProcessByUser});}else{u(T,i.DraftAdministrativeData,d).then(function(){g(t.editEntity(o,false));},function(){h({lockedByUser:i.DraftAdministrativeData.LastChangedByUserDescription||i.DraftAdministrativeData.LastChangedByUser});});}},function(i){h({draftAdminReadResponse:i});});});}var D=t.getDraftController().getDraftContext();var o=new C(m,s);if(D.isDraftEnabled(E)){if(true||!D.hasPreserveChanges(o)){return new Promise(function(g,h){r(m,s,T).then(function(i){if(!i.DraftAdministrativeData||i.DraftAdministrativeData.DraftIsCreatedByMe){g(t.editEntity(o,false));}else if(i.DraftAdministrativeData.InProcessByUser){h({lockedByUser:i.DraftAdministrativeData.InProcessByUserDescription||i.DraftAdministrativeData.InProcessByUser});}else{u(T,i.DraftAdministrativeData,d).then(function(){g(t.editEntity(o,false));},function(){h({lockedByUser:i.DraftAdministrativeData.LastChangedByUserDescription||i.DraftAdministrativeData.LastChangedByUser});});}},function(i){h({draftAdminReadResponse:i});});});}}else{T.oApplicationProxy.setEditableNDC(true);return Promise.resolve({context:o});}}return{create:c,edit:b,enableAutomaticDraftSaving:e};});
