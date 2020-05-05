/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/fl/Persistence","sap/ui/fl/registry/ChangeRegistry","sap/ui/fl/Utils","sap/ui/fl/LrepConnector","sap/ui/fl/Change","sap/ui/fl/Variant","sap/ui/fl/Cache","sap/ui/fl/registry/Settings","sap/ui/fl/ChangePersistenceFactory","sap/ui/core/mvc/View","sap/ui/fl/changeHandler/JsControlTreeModifier","sap/ui/fl/changeHandler/XmlTreeModifier","sap/ui/fl/context/ContextManager"],function(q,P,C,U,L,a,V,b,F,c,d,J,X,f){"use strict";var g=function(s,A){this._oChangePersistence=undefined;this._sComponentName=s||"";this._sAppVersion=A||U.DEFAULT_APP_VERSION;if(this._sComponentName&&this._sAppVersion){this._createChangePersistence();}};g.appliedChangesCustomDataKey="sap.ui.fl.appliedChanges";g.failedChangesCustomDataKeyJs="sap.ui.fl.failedChanges.js";g.failedChangesCustomDataKeyXml="sap.ui.fl.failedChanges.xml";g.PENDING="sap.ui.fl:PendingChange";g.PROCESSING="sap.ui.fl:ProcessingChange";g.prototype.setComponentName=function(s){this._sComponentName=s;this._createChangePersistence();};g.prototype.getComponentName=function(){return this._sComponentName;};g.prototype.getAppVersion=function(){return this._sAppVersion;};g.prototype.getVariantModelData=function(){var D;if(this._oChangePersistence&&this._oChangePersistence._oVariantController._mVariantManagement&&Object.keys(this._oChangePersistence._oVariantController._mVariantManagement).length>0){D=this._oChangePersistence._oVariantController._fillVariantModel();}return D;};g.prototype.createBaseChange=function(o,A){var e,h;var i=f._getContextIdsFromUrl();if(i.length>1){throw new Error("More than one DesignTime Context is currently active.");}if(!A){throw new Error("No Application Component found - to offer flexibility. Valid relation to its owning application component must be present.");}o.reference=this.getComponentName();o.packageName="$TMP";o.context=i.length===1?i[0]:"";var s=this.getAppVersion();var v={creation:s,from:s};if(s&&o.developerMode){v.to=s;}o.validAppVersions=v;e=a.createInitialFileContent(o);h=new a(e);if(o.variantReference){h.setVariantReference(o.variantReference);}return h;};g.prototype.createChange=function(o,e){var h,i;if(!e){throw new Error("A flexibility change cannot be created without a targeted control.");}var s=e.id||e.getId();if(!o.selector){o.selector={};}var A=e.appComponent||U.getAppComponentForControl(e);if(!A){throw new Error("No Application Component found - to offer flexibility the control with the id '"+s+"' has to have a valid relation to its owning application component.");}if(U.hasLocalIdSuffix(s,A)){var l=A.getLocalId(s);if(!l){throw new Error("Generated ID attribute found ('"+s+"'); provide a stable ID for the control as required by flexibility for assigning the changes.");}o.selector.id=l;o.selector.idIsLocal=true;}else{o.selector.id=s;o.selector.idIsLocal=false;}h=this.createBaseChange(o,A);var j=e.controlType||U.getControlType(e);if(!j){throw new Error("No control type found - the change handler can not be retrieved.");}i=this._getChangeHandler(h,j);if(i){i.completeChangeContent(h,o,{modifier:J,appComponent:A});}else{throw new Error("Change handler could not be retrieved for change "+JSON.stringify(o)+".");}return h;};g.prototype.createVariant=function(v,A){var o;var e=f._getContextIdsFromUrl();if(e.length>1){throw new Error("More than one DesignTime Context is currently active.");}if(!A){throw new Error("No Application Component found - to offer flexibility the variant has to have a valid relation to its owning application component.");}v.reference=this.getComponentName();v.packageName="$TMP";v.context=e.length===1?e[0]:"";v.isVariant=true;var s=this.getAppVersion();var h={creation:s,from:s};if(s&&v.developerMode){h.to=s;}v.validAppVersions=h;v.content=V.createInitialFileContent(v.content);o=new V(v);return o;};g.prototype.addChange=function(o,e){var h=this.createChange(o,e);var i=U.getAppComponentForControl(e);this.addPreparedChange(h,i);return h;};g.prototype.addPreparedChange=function(o,A){if(o.getVariantReference()){var m=A.getModel("$FlexVariants");if(!m.bStandardVariantExists){var v=m.getVariant(o.getVariantReference());var e=this.createVariant(v,A);m.bStandardVariantExists=true;this._oChangePersistence.addChange(e,A);}m._addChange(o);}this._oChangePersistence.addChange(o,A);return o;};g.prototype.deleteChange=function(o,A){this._oChangePersistence.deleteChange(o);if(o.getVariantReference()){A.getModel("$FlexVariants")._removeChange(o);}};g.prototype.createAndApplyChange=function(o,e){var h=this.addChange(o,e);var p={modifier:J,appComponent:U.getAppComponentForControl(e)};return this.checkTargetAndApplyChange(h,e,p).catch(function(E){this._oChangePersistence.deleteChange(h);throw E;}.bind(this));};g.prototype._checkDependencies=function(o,D,m,A,r){var R=this._checkChange(o,A);if(!R){return[];}r.push(o);var s=o.getId();var e=D[s]&&D[s].dependencies||[];for(var i=0,n=e.length;i<n;i++){var h=U.getChangeFromChangesMap(m,e[i]);R=this._checkDependencies(h,D,m,A,r);if(R.length===0){r=[];break;}delete D[s];}return r;};g.prototype._checkChange=function(o,A){var s;var S=o.getSelector();if(S.idIsLocal){s=A.createId(S.id);}else{s=S.id;}var e=sap.ui.getCore().byId(s);if(!e){return false;}var h=this._getFailedCustomDataJs(o,e,J).customDataEntries;if(h.indexOf(o.getId())>-1){return false;}return true;};g.prototype.waitForChangesToBeApplied=function(o){var m=this._oChangePersistence.getChangesMapForComponent();var p=[];var D=q.extend({},m.mDependencies);var e=m.mChanges;var h=e[o.getId()]||[];var A=this._getAppliedCustomData(undefined,o,J).customDataEntries;var i=U.getAppComponentForControl(o);var n=h.filter(function(j){return A.indexOf(j.getId())===-1;});var r=[];n.forEach(function(j){var k=this._checkDependencies(j,D,m.mChanges,i,[]);r=r.concat(k);},this);r=r.filter(function(j,k,l){return l.indexOf(j)===k;});r.forEach(function(w){if(!w.aPromiseFn){w.aPromiseFn=[];}p.push(new Promise(function(j,k){w.aPromiseFn.push({resolve:j,reject:k});}).catch(function(j){var k=j.getId&&m.mDependentChangesOnMe[j.getId()]||[];k.forEach(function(s){var l=U.getChangeFromChangesMap(e,s);if(l.aPromiseFn){l.aPromiseFn.forEach(function(t){t.reject(l);});}});Promise.resolve();}));},this);return Promise.all(p);};g.prototype.saveAll=function(){return this._oChangePersistence.saveDirtyChanges();};g.prototype.saveAs=function(r){return this._oChangePersistence.saveAsDirtyChanges(r);};g.prototype.processXmlView=function(v,p){var o=sap.ui.getCore().getComponent(p.componentId);var A=U.getAppComponentForControl(o);var m=o.getManifest();p.appComponent=A;p.appDescriptor=m;p.modifier=X;p.view=v;return this.processViewByModifier(p);};g.prototype.processViewByModifier=function(p){p.siteId=U.getSiteId(p.appComponent);return this._oChangePersistence.getChangesForView(p.viewId,p).then(this._resolveGetChangesForView.bind(this,p),this._handlePromiseChainError.bind(this,p.view));};g.prototype._resolveGetChangesForView=function(p,e){var h=[];if(!Array.isArray(e)){var E="No list of changes was passed for processing the flexibility on view: "+p.view+".";U.log.error(E,undefined,"sap.ui.fl.FlexController");return[];}e.forEach(function(o){try{var s=this._getSelectorOfChange(o);if(!s||!s.id){throw new Error("No selector in change found or no selector ID.");}var i=p.modifier.bySelector(s,p.appComponent,p.view);if(!i){throw new Error("A flexibility change tries to change a nonexistent control.");}h.push(function(){return this.checkTargetAndApplyChange(o,i,p).catch(function(j){this._logApplyChangeError(j,o);}.bind(this));}.bind(this));}catch(j){this._logApplyChangeError(j,o);}}.bind(this));return U.execPromiseQueueSequentially(h).then(function(){return p.view;});};g.prototype._logApplyChangeError=function(e,o){var D=o.getDefinition();var s=D.changeType;var t=D.selector.id;var h=D.namespace+D.fileName+"."+D.fileType;var w="A flexibility change could not be applied.";w+="\nThe displayed UI might not be displayed as intedend.";if(e.message){w+="\n   occurred error message: '"+e.message+"'";}w+="\n   type of change: '"+s+"'";w+="\n   LRep location of the change: "+h;w+="\n   id of targeted control: '"+t+"'.";U.log.warning(w,undefined,"sap.ui.fl.FlexController");};g.prototype.checkTargetAndApplyChange=function(o,h,p){var m=p.modifier;var s=m.getControlType(h);var i=this._getChangeHandler(o,s);if(!i){U.log.warning("Change handler implementation for change not found or change type not enabled for current layer - Change ignored");return new U.FakePromise();}var A=this._getAppliedCustomData(o,h,m);var j=A.customDataValue;var k=A.customData;if(!this._isChangeCurrentlyApplied(h,o,m,A)){o.PROCESSING=o.PROCESSING?o.PROCESSING:true;var r;var E;try{r=i.applyChange(o,h,p);}catch(e){E=e;}return new U.FakePromise(r,E).then(function(){var l=o.getId();var v=j?j+","+l:l;this._writeAppliedChangesCustomData(k,v,p,h);if(o.aPromiseFn){o.aPromiseFn.forEach(function(n){n.resolve(o);});}delete o.PROCESSING;o.APPLIED=true;return true;}.bind(this)).catch(function(l){var x=p.modifier.targets==="xmlTree";var n;this._setMergeError(true);var t="Change ''{0}'' could not be applied. Merge error detected while "+"processing the {1}.";if(x){n=this._getFailedCustomDataXml(o,h,m);t=q.sap.formatMessage(t,[o.getId(),"XML tree"]);q.sap.log.warning(t,l.stack||"");}else{n=this._getFailedCustomDataJs(o,h,m);t=q.sap.formatMessage(t,[o.getId(),"JS control tree"]);q.sap.log.error(t,l.stack||"");}var u=n.customData;n.customDataEntries.push(o.getId());var v=n.customDataEntries.join(",");if(x){this._writeFailedChangesCustomDataXml(u,v,p,h);}else{this._writeFailedChangesCustomDataJs(u,v,p,h);}if(o.aPromiseFn){o.aPromiseFn.forEach(function(w){w.reject(o);});}delete o.PROCESSING;return false;}.bind(this));}return new U.FakePromise(true);};g.prototype._removeFromAppliedChangesAndMaybeRevert=function(o,e,p,r){var A,h,i;var m=p.modifier;var s=m.getControlType(e);var j=this._getChangeHandler(o,s);var R;if(r&&!j){U.log.warning("Change handler implementation for change not found or change type not enabled for current layer - Change ignored");return new U.FakePromise();}var k=o.getId();var l=this._getAppliedCustomData(o,e,m);A=l.customDataEntries;h=l.customData;i=A.indexOf(k);if(i===-1&&(o.PROCESSING||o.QUEUED)){R=new Promise(function(n,t){o.aPromiseFn=o.aPromiseFn||[];o.aPromiseFn.push({resolve:n,reject:t});}).then(function(v){return true;});}else{R=new U.FakePromise(false);}return R.then(function(n){if(r&&(n||(!n&&i>-1))){return j.revertChange(o,e,p);}}).then(function(){l=this._getAppliedCustomData(o,e,m);A=l.customDataEntries;h=l.customData;i=A.indexOf(k);if(i>-1&&h){A.splice(i,1);this._writeAppliedChangesCustomData(h,A.join(),p,e);}}.bind(this)).catch(function(E){U.log.error("Change could not be reverted:",E);});};g.prototype._writeAppliedChangesCustomData=function(o,v,p,e){this._writeCustomData(o,v,p,e,g.appliedChangesCustomDataKey);};g.prototype._writeFailedChangesCustomDataXml=function(o,v,p,e){this._writeCustomData(o,v,p,e,g.failedChangesCustomDataKeyXml);};g.prototype._writeFailedChangesCustomDataJs=function(o,v,p,e){this._writeCustomData(o,v,p,e,g.failedChangesCustomDataKeyJs);};g.prototype._writeCustomData=function(o,v,p,e,s){var m=p.modifier;if(o){m.setProperty(o,"value",v);}else{var A=p.appComponent;var h=p.view;o=m.createControl("sap.ui.core.CustomData",A,h);m.setProperty(o,"key",s);m.setProperty(o,"value",v);m.insertAggregation(e,"customData",o,0,h);}};g.prototype._getAppliedCustomData=function(o,e,m){return this._getCustomData(o,e,m,g.appliedChangesCustomDataKey);};g.prototype._getFailedCustomDataXml=function(o,e,m){return this._getCustomData(o,e,m,g.failedChangesCustomDataKeyXml);};g.prototype._getFailedCustomDataJs=function(o,e,m){return this._getCustomData(o,e,m,g.failedChangesCustomDataKeyJs);};g.prototype._getCustomData=function(o,e,m,s){var h=m.getAggregation(e,"customData")||[];var r={customDataEntries:[]};h.some(function(i){var k=m.getProperty(i,"key");if(k===s){r.customData=i;r.customDataValue=m.getProperty(i,"value");r.customDataEntries=r.customDataValue.split(",");return true;}});return r;};g.prototype._handlePromiseChainError=function(v,e){U.log.error("Error processing view "+e+".");return v;};g.prototype._getSelectorOfChange=function(o){if(!o||!o.getSelector){return undefined;}return o.getSelector();};g.prototype._getChangeHandler=function(o,s){var e,h;e=this._getChangeTypeMetadata(o,s);if(!e){return undefined;}h=e.getChangeHandler();return h;};g.prototype._getChangeTypeMetadata=function(o,s){var e,h;e=this._getChangeRegistryItem(o,s);if(!e||!e.getChangeTypeMetadata){return undefined;}h=e.getChangeTypeMetadata();return h;};g.prototype._getChangeRegistryItem=function(o,s){var e,h,l;if(!o||!s){return undefined;}e=o.getChangeType();if(!e||!s){return undefined;}l=o.getLayer();h=this._getChangeRegistry().getRegistryItems({"changeTypeName":e,"controlType":s,"layer":l});if(h&&h[s]&&h[s][e]){return h[s][e];}else if(h&&h[s]){return h[s];}else{return h;}};g.prototype._getChangeRegistry=function(){var i=C.getInstance();i.initSettings();return i;};g.prototype.getComponentChanges=function(p){return this._oChangePersistence.getChangesForComponent(p);};g.prototype.isPersonalized=function(p){p=p||{};p.includeVariants=true;return this.getComponentChanges(p).then(function(e){var i=e.some(function(o){return o.isUserDependent();});return!!i;});};g.prototype._createChangePersistence=function(){this._oChangePersistence=c.getChangePersistenceForComponent(this.getComponentName(),this.getAppVersion());return this._oChangePersistence;};g.prototype.discardChanges=function(e,D){var A=U.getCurrentLayer(!!D);var i=0;var l;var o;l=e.length;while(i<e.length){o=e[i];if(o&&o.getLayer&&o.getLayer()===A){this._oChangePersistence.deleteChange(o);}if(l===e.length){i++;}else{l=e.length;}}return this._oChangePersistence.saveDirtyChanges();};g.prototype.discardChangesForId=function(i,D){if(!i){return Promise.resolve();}var o=this._oChangePersistence.getChangesMapForComponent();var e=o.mChanges[i]||[];return this.discardChanges(e,D);};g.prototype._setMergeError=function(){return F.getInstance().then(function(s){s.setMergeErrorOccured(true);});};g.prototype._isChangeCurrentlyApplied=function(o,e,m,h){if(!h){h=this._getAppliedCustomData(e,o,J);}var A=h.customDataEntries;var s=e.getId();return A.indexOf(s)>-1;};g.prototype._checkIfDependencyIsStillValid=function(A,s){var o=U.getChangeFromChangesMap(this._oChangePersistence._mChanges.mChanges,s);if(!o.APPLIED){return true;}var e=J.bySelector(o.getSelector(),A);if(!this._isChangeCurrentlyApplied(e,o,J)){return true;}return false;};g.prototype._applyChangesOnControl=function(G,A,o){var p=[];var m=G();var e=m.mChanges;var D=m.mDependencies;var h=m.mDependentChangesOnMe;var i=e[o.getId()]||[];i.forEach(function(j){if(j.APPLIED&&!this._isChangeCurrentlyApplied(o,j)){m=this._oChangePersistence.copyDependenciesFromInitialChangesMap(j,this._checkIfDependencyIsStillValid.bind(this,A));D=m.mDependencies;h=m.mDependentChangesOnMe;delete j.APPLIED;}if(!D[j.getId()]){j.QUEUED=true;p.push(function(){return this.checkTargetAndApplyChange(j,o,{modifier:J,appComponent:A}).then(function(u){if(u){this._updateDependencies(D,h,j.getId());}delete j.QUEUED;}.bind(this));}.bind(this));}else{D[j.getId()][g.PENDING]=this.checkTargetAndApplyChange.bind(this,j,o,{modifier:J,appComponent:A});}}.bind(this));return U.execPromiseQueueSequentially(p).then(function(){return this._processDependentQueue(D,h);}.bind(this));};g.prototype.getBoundApplyChangesOnControl=function(G,o){var B=this._applyChangesOnControl.bind(this,G,o);B._bIsSapUiFlFlexControllerApplyChangesOnControl=true;return B;};g.prototype.revertChangesOnControl=function(e,A){var p=[];e.forEach(function(o){p.push(function(){var m={modifier:J,appComponent:A};var s=this._getSelectorOfChange(o);var h=m.modifier.bySelector(s,m.appComponent);return this._removeFromAppliedChangesAndMaybeRevert(o,h,{modifier:J,appComponent:A},true).then(function(){this._oChangePersistence._deleteChangeInMap(o);}.bind(this));}.bind(this));}.bind(this));return U.execPromiseQueueSequentially(p);};g.prototype.applyVariantChanges=function(e,o){var A=U.getAppComponentForControl(o);var p=[];e.forEach(function(h){var m=this._oChangePersistence.getChangesMapForComponent().mChanges;var i=Object.keys(m).reduce(function(e,s){return e.concat(m[s]);},[]);this._oChangePersistence._addChangeAndUpdateDependencies(o,h,i.length,i);p.push(function(){var j={modifier:J,appComponent:A};var s=this._getSelectorOfChange(h);var k=j.modifier.bySelector(s,j.appComponent);if(!k){U.log.error("A flexibility change tries to change a nonexistent control.");return new U.FakePromise();}return this._applyChangesOnControl(this._oChangePersistence.getChangesMapForComponent.bind(this._oChangePersistence),A,k);}.bind(this));}.bind(this));return U.execPromiseQueueSequentially(p);};g.prototype.removeFromAppliedChangesOnControl=function(o,A,e){return this._removeFromAppliedChangesAndMaybeRevert(o,e,{modifier:J,appComponent:A},false);};g.prototype._updateControlsDependencies=function(D){var o;Object.keys(D).forEach(function(s){var e=D[s];if(e.controlsDependencies&&e.controlsDependencies.length>0){var l=e.controlsDependencies.length;while(l--){var i=e.controlsDependencies[l];o=sap.ui.getCore().byId(i);if(o){e.controlsDependencies.splice(l,1);}}}});};g.prototype._updateDependencies=function(D,m,s){if(m[s]){m[s].forEach(function(k){var o=D[k];var i=o.dependencies.indexOf(s);if(i>-1){o.dependencies.splice(i,1);}});delete m[s];}};g.prototype._iterateDependentQueue=function(D,m){var A=[],e=[],p=[];this._updateControlsDependencies(D);Object.keys(D).forEach(function(s){var o=D[s];if(o[g.PENDING]&&o.dependencies.length===0&&!(o.controlsDependencies&&o.controlsDependencies.length>0)&&!o[g.PROCESSING]){o[g.PROCESSING]=true;p.push(function(){return o[g.PENDING]().then(function(){e.push(s);A.push(o.changeObject.getId());});});}});return U.execPromiseQueueSequentially(p).then(function(){for(var j=0;j<e.length;j++){delete D[e[j]];}for(var k=0;k<A.length;k++){this._updateDependencies(D,m,A[k]);}return A;}.bind(this));};g.prototype._processDependentQueue=function(D,m){return this._iterateDependentQueue(D,m).then(function(A){if(A.length>0){return this._processDependentQueue(D,m);}}.bind(this));};return g;},true);
