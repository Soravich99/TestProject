/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","./library","sap/ui/base/EventProvider","./Messages"],function(q,l,E,M){"use strict";var D=E.extend("sap.ui.vk.DownloadManager",{metadata:{publicMethods:["start","attachItemSucceeded","detachItemSucceeded","attachItemFailed","detachItemFailed","attachAllItemsCompleted","detachAllItemsCompleted"],events:{itemSucceeded:{parameters:{source:{type:"any"},response:{type:"object"}}},itemProgress:{parameters:{source:{type:"any"},loaded:{type:"int"},total:{type:"int"}}},itemFailed:{parameters:{source:{type:"any"},status:{type:"any"},statusText:{type:"string"}}},allItemsCompleted:{}}},constructor:function(s,m){E.apply(this);this._maxParallelTasks=m||5;this._sourcesToProcess=s.slice();this._sourcesBeingProcessed=[];}});D.prototype.start=function(){while(this._pickAndDispatchTask()){}return this;};D.prototype.queue=function(s){this._sourcesToProcess.push(s);this._pickAndDispatchTask();return this;};D.prototype._pickAndDispatchTask=function(){if(this._sourcesToProcess.length>0&&this._sourcesBeingProcessed.length<this._maxParallelTasks){var s=this._sourcesToProcess.shift();this._sourcesBeingProcessed.push(s);this._runTask(s);return true;}return false;};D.prototype._taskFinished=function(s){var i=this._sourcesBeingProcessed.indexOf(s);if(i>=0){this._sourcesBeingProcessed.splice(i,1);}return this;};D.prototype._queueIsEmpty=function(){return this._sourcesToProcess.length===0&&this._sourcesBeingProcessed.length===0;};D.prototype._runTask=function(s){var t=this;if(typeof s==="string"){var x=new(typeof sinon==="object"&&sinon.xhr&&sinon.xhr.XMLHttpRequest||XMLHttpRequest);x.onerror=function(e){t._taskFinished(s);t._pickAndDispatchTask();t.fireItemFailed({source:s,status:x.status,statusText:x.statusText});if(t._queueIsEmpty()){t._asyncFireAllItemsCompleted();}};x.onload=function(e){t._taskFinished(s);t._pickAndDispatchTask();if(x.status===200||x.status===0){t.fireItemSucceeded({source:s,response:x.response});}else{t.fireItemFailed({source:s,status:x.status,statusText:x.statusText});}if(t._queueIsEmpty()){t._asyncFireAllItemsCompleted();}};x.onprogress=function(e){t.fireItemProgress({source:s,loaded:e.loaded,total:e.total});};x.open("GET",s,true);x.responseType="arraybuffer";x.send(null);}else if(s instanceof File){var f=new FileReader();f.onload=function(e){t._taskFinished(s);t._pickAndDispatchTask();t.fireItemSucceeded({source:s,response:f.result});if(t._queueIsEmpty()){t._asyncFireAllItemsCompleted();}};f.onerror=function(e){t._taskFinished(s);t._pickAndDispatchTask();t.fireItemFailed({source:s,status:f.error.name,statusText:f.error.message});if(t._queueIsEmpty()){t._asyncFireAllItemsCompleted();}};f.onprogress=function(e){t.fireItemProgress({source:s.name,loaded:e.loaded,total:e.total});};f.readAsArrayBuffer(s);}else{q.sap.log.error(sap.ui.vk.getResourceBundle().getText(M.VIT5.summary),M.VIT5.code,"sap.ui.vk.DownloadManager");}return this;};D.prototype._asyncFireAllItemsCompleted=function(){q.sap.delayedCall(0,this,this.fireAllItemsCompleted);};D.prototype.attachItemSucceeded=function(d,f,a){return this.attachEvent("itemSucceeded",d,f,a);};D.prototype.detachItemSucceeded=function(f,a){return this.detachEvent("itemSucceeded",f,a);};D.prototype.fireItemSucceeded=function(p,a,e){return this.fireEvent("itemSucceeded",p,a,e);};D.prototype.attachItemFailed=function(d,f,a){return this.attachEvent("itemFailed",d,f,a);};D.prototype.detachItemFailed=function(f,a){return this.detachEvent("itemFailed",f,a);};D.prototype.fireItemFailed=function(p,a,e){return this.fireEvent("itemFailed",p,a,e);};D.prototype.attachAllItemsCompleted=function(d,f,a){return this.attachEvent("allItemsCompleted",d,f,a);};D.prototype.detachAllItemsCompleted=function(f,a){return this.detachEvent("allItemsCompleted",f,a);};D.prototype.fireAllItemsCompleted=function(p,a,e){return this.fireEvent("allItemsCompleted",p,a,e);};D.prototype.attachItemProgress=function(d,f,a){return this.attachEvent("itemProgress",d,f,a);};D.prototype.detachItemProgress=function(f,a){return this.detachEvent("itemProgress",f,a);};D.prototype.fireItemProgress=function(p,a,e){return this.fireEvent("itemProgress",p,a,e);};return D;});
