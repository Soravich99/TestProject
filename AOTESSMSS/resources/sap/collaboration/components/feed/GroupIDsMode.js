/*
* ! SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2017 SAP SE. All rights reserved
*/
sap.ui.define(["./Mode","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/collaboration/components/utils/PendingRequestsUtil"],function(M,F,a,P){var G=M.extend("sap.collaboration.components.feed.GroupIDsMode",{constructor:function(f){M.apply(this,[f]);this._oPendingRequestsUtil=new P();this._iOpenGroupRequests;this._aGroupsToLoad;this.oResult;this._oList.setModel(this._oViewDataModel);}});G.prototype.start=function(f){if(!this._oCommonUtil.isArrayOfStrings(f)){var e="The feedSources' data object is invalid.";this._oFeedController.logError(e);throw new Error(e);}if(f.length===0){this._oFeedController.disableGroupFeed();return;}f=f.filter(function(g,i){return f.indexOf(g)===i&&g.trim()!=="";});this._oViewDataModel.setProperty("/groups",[]);this._oViewDataModel.setProperty("/groupSelected/Id",undefined);this._iOpenGroupRequests=0;this._aGroupsToLoad=jQuery.merge([],f);this._oList.bindItems({path:"/groups",template:this._oListItemTemplate});this._oGroupSelectPopover.setBusyIndicatorDelay(0).setBusy(true);this._fillGroupInfo();};G.prototype.onBatchCompleted=function(e){this._oJamModel.setUseBatch(false);if(this._iOpenGroupRequests===0){if(this._oGroupSelectPopover!==undefined){this._oGroupSelectPopover.setBusy(false);}}};G.prototype.stop=function(){this._oPendingRequestsUtil.abortAll();};G.prototype.getAddPostPath=function(){var g=this._oViewDataModel.getProperty("/groupSelected/Id");return"/Groups('"+g+"')/FeedEntries";};G.prototype.displayFeedSourceSelectorPopover=function(c){this._oGroupSelectPopover.openBy(c);};G.prototype.onGroupSelected=function(e){var g=e.getSource().getSelectedItem().getBindingContext().getObject();this._oViewDataModel.setProperty("/groupSelected",g);this._oViewDataModel.setProperty("/feedEndpoint","/Groups('"+g.Id+"')/FeedEntries");this._oGroupSelectPopover.close();};G.prototype._fillGroupInfo=function(){var b=10;var B=0;var i=0;var g=0;var c=20;this._oJamModel.setUseBatch(true);var f="$filter=Id eq '";for(var l=0,d=this._aGroupsToLoad.length;l<d;l++){if(!(l%c==0)){f=f.concat(" or Id eq '"+this._aGroupsToLoad[l].replace(/'/g,"''")+"'");}else{f=f.concat(this._aGroupsToLoad[l].replace(/'/g,"''")+"'");};g++;if(g===c||l+1===d){this._iOpenGroupRequests++;var r=undefined;this._loadGroups(f,B).done((function(D,R){r=this._oCommonUtil.getODataResult(D);if(!jQuery.isEmptyObject(r)){if(r.length!=undefined){var I=this._aGroupsToLoad.indexOf(r[0].Id);for(var C=0,o=r.length;C<o;C++){this._oViewDataModel.setProperty("/groups/"+I,r[C]);I++;};}else{this._oViewDataModel.setProperty("/groups/"+this._aGroupsToLoad.indexOf(r.Id),r);}};this._iOpenGroupRequests--;if(this._iOpenGroupRequests===0){if(this._oViewDataModel.getProperty("/groups/").length===0){this._oFeedController.disableGroupFeed();jQuery.sap.log.warning("No group information was retrieved for the current user.");}else{this._oFeedController.enableGroupFeed();var e=this._oViewDataModel.getProperty("/groups/");e=e.filter(function(h){return h!==undefined&&h!==null});this._oViewDataModel.setProperty("/groups/",e);this._oViewDataModel.setProperty("/groupSelected",e[0]);this._oViewDataModel.setProperty("/feedEndpoint","/Groups('"+e[0].Id+"')/FeedEntries");}};}).bind(this));i++;g=0;f="$filter=Id eq '";};if(i==b){B++;i=0;}};};G.prototype._loadGroups=function(f,b){if(!this.isJamServiceAvailable()){return;}var t=this;var l=jQuery.Deferred();var p="/Groups/";var m={"urlParameters":f+"&$select=Id,Name,WebURL","success":function(d,c){l.resolveWith(t,[d,c]);},"error":function(e){l.rejectWith(t,[e]);t._oFeedController.logError("The group information was not retrieved.");},"batchGroupId":b};var r=this._oJamModel.read(p,m);this._oPendingRequestsUtil.add(r);var o=l.promise(r);o.always(function(){this._oPendingRequestsUtil.remove(r);});return o;};return G;},true);
