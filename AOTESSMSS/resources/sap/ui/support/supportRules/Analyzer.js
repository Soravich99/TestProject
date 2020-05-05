/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/support/supportRules/IssueManager","sap/ui/support/supportRules/Constants"],function(q,I,C){"use strict";var A=function(){this.dStartedAt=null;this.dFinishedAt=null;this.iElapsedTime=0;this._iAllowedTimeout=10000;this.reset();};A.prototype.reset=function(){this._iTotalProgress=0;this._iCompletedRules=0;this._iTotalRules=0;this._bRunning=false;this._aRulePromices=[];};A.prototype.running=function(){return this._bRunning;};A.prototype.start=function(r,c,e){var i,t=this;this.dStartedAt=new Date();this._iTotalRules=r.length;this._bRunning=true;r.forEach(function(R){t._aRulePromices.push(new Promise(function(f){try{i=I.createIssueManagerFacade(R);if(R.async){t._runAsyncRule(i,c,e,R,f);}else{R.check(i,c,e);f();t._updateProgress();}}catch(a){t._handleException(a,R.id,f);}}));});return Promise.all(this._aRulePromices).then(function(){t.reset();t.dFinishedAt=new Date();t.iElapsedTime=t.dFinishedAt.getTime()-t.dStartedAt.getTime();});};A.prototype._handleException=function(e,r,R){var t=e.message||e;var m="["+C.SUPPORT_ASSISTANT_NAME+"] Error while execution rule \""+r+"\": "+t;q.sap.log.error(m);R();this._updateProgress();};A.prototype._updateProgress=function(){this._iCompletedRules++;this._iTotalProgress=Math.ceil(this._iCompletedRules/this._iTotalRules*100);if(this.onNotifyProgress){this.onNotifyProgress(this._iTotalProgress);}};A.prototype._runAsyncRule=function(i,c,e,r,R){var t=this,T=false;var a=setTimeout(function(){T=true;t._handleException("Check function timed out",r.id,R);},this._iAllowedTimeout);new Promise(function(f){r.check(i,c,e,f);}).then(function(){if(!T){clearTimeout(a);R();t._updateProgress();}}).catch(function(b){if(!T){clearTimeout(a);t._handleException(b,r.id,R);}});};A.prototype.getElapsedTimeString=function(){if(!this.iElapsedTime){return"";}var d=new Date(null);d.setHours(0,0,0,0);d.setMilliseconds(this.iElapsedTime);var b=[(d.getHours()<10?"0":"")+d.getHours(),(d.getMinutes()<10?"0":"")+d.getMinutes(),(d.getSeconds()<10?"0":"")+d.getSeconds(),d.getMilliseconds()];return b.join(":");};return A;},false);
