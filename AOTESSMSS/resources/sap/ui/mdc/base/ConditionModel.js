/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/json/JSONModel','sap/ui/model/Filter','sap/ui/mdc/base/FilterOperatorConfig'],function(q,J,F,c){"use strict";var C=J.extend("sap.ui.mdc.base.ConditionModel",{constructor:function(){J.apply(this,arguments);this.setSizeLimit(1000);this._oMessageBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");sap.ui.getCore().attachLocalizationChanged(function(){this._oMessageBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");}.bind(this));if(!this.getProperty("/conditions")){this.setProperty("/conditions",[]);}if(!this.getProperty("/fieldPath")){this.setProperty("/fieldPath",{});}}});C._mModels={};C.prototype.destroy=function(){J.prototype.destroy.apply(this,arguments);delete this._mFieldPath;delete this._oMessageBundle;};C.prototype.clone=function(f){var o=new C();o._oListBinding=this._oListBinding;o.addFilterField(this.getFilterField(f));var a=this.getConditions(f);var b=[];a.forEach(function(e,i){b.push(q.extend(true,{},e));});o.setConditions(b);return o;};C.prototype.merge=function(f,o,s){this.removeAllConditions(f);var a=sap.ui.mdc.base.ConditionModel.removeEmptyConditions(o.getConditions(s));this.setConditions(a);this.checkUpdate(true,true);};C.mapConditions=function(a,t){if(t){for(var i=0;i<a.length;i++){a[i].fieldPath=t;}}return a;};C.cloneConditions=function(a){return q.extend(true,[],a);};C.removeEmptyConditions=function(a){for(var i=a.length-1;i>-1;i--){if(a[i].isEmpty){a.splice(parseInt(i,10),1);}}return a;};C.getFor=function(l,n){var k=C._createKey(l,n);var o=C._mModels[k];if(!o){o=new C();o._oListBinding=l;C._mModels[k]=o;}else if(o._oListBinding!==l){o._oListBinding=l;}return o;};C._createKey=function(l,n){return l.getModel().getId()+"--"+l.getPath()+"#"+(n===undefined?"":n);};C.prototype.setFor=function(l,n){delete C._mModels[C._createKey(this._oListBinding,n)];this._oListBinding=l;C._mModels[C._createKey(this._oListBinding,n)]=this;return this;};C.destroyCM=function(o,n){delete C._mModels[C._createKey(o._oListBinding,n)];o.destroy();};C._getAll=function(l){var o=[];var k=C._createKey(l);k=k.slice(0,k.length-1);for(var m in C._mModels){if(m.indexOf(k)===0){var a=C._mModels[m];o.push(a);}}return o;};C._getAllKeys=function(l){var o=[];var k=C._createKey(l);k=k.slice(0,k.length-1);for(var m in C._mModels){if(m.indexOf(k)===0){o.push(m);}}return o;};C.prototype.getConditions=function(f){var r=[];var a=this.getProperty("/conditions");a.forEach(function(o){if(!f||o.fieldPath===f){r.push(o);}});return r;};C.prototype.indexOf=function(o){var a=-1;var b=this.getProperty("/conditions");var s=JSON.stringify(o);var f=o.fieldPath;b.some(function(o,i){if(o.fieldPath===f){if(JSON.stringify(o)===s){a=i;return true;}}return false;});return a;};C.prototype.exist=function(o,f){return this.indexOf(o,f)>=0;};C.prototype.setConditions=function(a){for(var i=0;i<a.length;i++){this.insertCondition(-1,a[i],true);}};C.prototype.addCondition=function(o,f){return this.insertCondition(-1,o,f);};C.prototype.insertCondition=function(a,o,f){var s=o.fieldPath,b;this._checkIsEmpty(o);this._updateValues(o);if(!f){var i=this.indexOf(o);if(i>=0){return this.getConditions()[i];}}b=this.getProperty("/conditions");if(a==-1){b.push(o);}else{b.splice(a,0,o);}this.checkUpdate(true,true);this._checkMaxConditions(s);return o;};C.prototype.createItemCondition=function(f,k,d){return this.createCondition(f,"EEQ",[k,d]);};C.prototype.createCondition=function(f,o,v){var a={fieldPath:f,operator:o,values:v};this._checkIsEmpty(a);this._updateValues(a);return a;};C.prototype.removeCondition=function(f,i){if(typeof f==="object"&&i===undefined){var o=f;f=o.fieldPath;i=this.indexOf(o);}var a=this.getProperty("/conditions");if(a.some(function(p,b,a){if(p.fieldPath===f){if(i===0){a.splice(b,1);return true;}i--;return false;}return false;})){this.checkUpdate(true,true);this._checkMaxConditions(f);}};C.prototype.removeAllConditions=function(f){var I=[];var d=this.getProperty("/conditions");d.forEach(function(p,i){if(!f||p.fieldPath===f){I.push(i);}});I.sort(function(a,b){return a-b;});for(var i=I.length-1;i>-1;i--){d.splice(I[i],1);}this.checkUpdate(true,true);};C.prototype.deleteConditions=function(o,B){var f;if(!o||!B){return;}if(!q.isArray(o)){o=[o];}var d=B.oModel.getProperty(B.getPath(),B.getContext())||[];if(q.isArray(o)&&d.length>0){var I=[],e,i,n;if(Array.isArray(d)){for(i=0;i<o.length;i++){I.push(d.indexOf(o[i].getProperty()));}I.sort(function(a,b){return a-b;});e=function(a){f=d[a].fieldPath;d.splice(a,1);};}else if(typeof oData==="object"){for(n in d){var s=o[i].getPath();s=s.substring(o[i].getPath().lastIndexOf("/")+1);I.push(n);}e=function(s){delete d[s];};}for(i=I.length-1;i>-1;i--){e(I[i]);}}B.getModel().checkUpdate(true,true);this._checkMaxConditions(f);};C.prototype._checkIsEmpty=function(a){var f=this.getFilterOperatorConfig();a=a||this.getConditions();if(!Array.isArray(a)){a=[a];}a.forEach(function(o){var O=f.getOperator(o.operator);o.isEmpty=O.isEmpty(o);});};C.prototype._updateValues=function(a){var f=this.getFilterOperatorConfig();a=a||this.getConditions();if(!Array.isArray(a)){a=[a];}a.forEach(function(o){var O=f.getOperator(o.operator);if(o.operator!=="EEQ"){while(o.values.length!=O.valueTypes.length){if(o.values.length<O.valueTypes.length){o.values.push("");}if(o.values.length>O.valueTypes.length){o.values=o.values.slice(0,o.values.length-1);}}}});};C.prototype._checkRequiredConditions=function(s,f){var a=f?[f]:Object.keys(this._mFieldPath||{});var e=false;var m=this._oMessageBundle.getText("conditionmodel.REQUIRED_CONDITION_MISSING");a.forEach(function(f){if(this._mFieldPath&&this._mFieldPath[f]){var o=this._mFieldPath[f];if(o.getRequired()&&this.getConditions(f).length<=0){if(s){this.addFieldPathMessage(f,m);}e=true;}else{this.removeFieldPathMessage(f,m);}}},this);return!e;};C.prototype._checkMaxConditions=function(f){var a=f?[f]:Object.keys(this._mFieldPath||{});var e=false;a.forEach(function(f){if(this._mFieldPath&&this._mFieldPath[f]){var o=this._mFieldPath[f];var m=this._oMessageBundle.getText("conditionmodel.TOO_MANY_CONDITIONS");if(o.getMaxConditions()>=0&&this.getConditions(f).length>o.getMaxConditions()){this.addFieldPathMessage(f,m);e=true;}else{this.removeFieldPathMessage(f,m);}}},this);return!e;};C.prototype.addFilterField=function(f){var s=f.getFieldPath();if(!this._mFieldPath){this._mFieldPath={};}this._mFieldPath[s]=f;var o=this.getProperty("/fieldPath");if(!o[s]){o[s]={valueState:"None",valueStateText:"",messages:[]};}};C.prototype.getFilterField=function(f){var a=Object.keys(this._mFieldPath||{});return this._mFieldPath[f||a[0]];};C.prototype.getFilterFields=function(){var f=Object.keys(this._mFieldPath||{});var a=[];f.forEach(function(s){a.push(this._mFieldPath[s]);},this);return a;};C.prototype.removeFilterField=function(f){var s=f.getFieldPath();if(this._mFieldPath&&this._mFieldPath[s]){delete this._mFieldPath[s];}var o=this.getProperty("/fieldPath");if(o[s]){delete o[s];}};C.prototype._getFieldPathProperty=function(f){return this.getProperty("/fieldPath/")[f];};C.prototype.addFieldPathMessage=function(f,m){var o=this._getFieldPathProperty(f);if(!o.messages.some(function(I,i){if(I===m){return true;}return false;})){o.messages.push(m);}this._updateValueState(f);};C.prototype.setUIMessage=function(f,m){var o=this._getFieldPathProperty(f);o.uiMessage=m;this._updateValueState(f);};C.prototype.removeFieldPathMessage=function(f,m){var I;var o=this._getFieldPathProperty(f);if(o.messages.some(function(s,i){if(s===m){I=i;return true;}return false;})){o.messages.splice(I,1);}this._updateValueState(f);};C.prototype.removeUIMessage=function(f){var o=this._getFieldPathProperty(f);delete o.uiMessage;this._updateValueState(f);};C.prototype._updateValueState=function(f){var u=false,o=this._getFieldPathProperty(f),v="None",V="";if(o.uiMessage){v="Error";V=o.uiMessage;}else if(o.messages.length>0){v="Error";V=o.messages[o.messages.length-1];}if(o.valueState!==v){o.valueState=v;u=true;}if(o.valueStateText!==V){o.valueStateText=V;u=true;}if(u){this.checkUpdate(true,true);}};C.prototype.isValid=function(v,f){var a=f?[f]:Object.keys(this._mFieldPath||{});var V=this._checkRequiredConditions(v);a.forEach(function(f){var o=this._getFieldPathProperty(f);V=V&&o.valueState=="None";},this);return V;};C.prototype.applyFilters=function(v){if(this.isValid(v)){var f=this.getAllFilters();if(f){this._oListBinding.filter(f);}else{this._oListBinding.filter();}return true;}return false;};C.prototype.getAllFilters=function(){var o=C._getAll(this._oListBinding);var O=[];o.forEach(function(a){var f=a.getFilters();if(f){O.push(f);}});var f=null;if(O.length===1){f=O[0];}else if(O.length>1){f=new F({filters:O,and:true});}return f;};C.prototype.getFilterOperatorConfig=function(){var m=this._oListBinding&&this._oListBinding.getModel();return c.getFor(m);};C.prototype.getFilters=function(f){var i,l,o=[],a,t,s,n,p;var b=this.getFilterOperatorConfig();var d={};if(f===undefined){a=this.getConditions();}else if(typeof f==="string"){a=this.getConditions(f);}else{a=f||[];}for(i=0;i<a.length;i++){d[a[i].fieldPath]=true;}for(var e in d){l=[];t=null;for(i=0;i<a.length;i++){if(a[i].fieldPath===e){var O=b.getOperator(a[i].operator);var g=O.getModelFilter(a[i]);if(g.sPath.indexOf('*/')>-1){s=g.sPath.split('*/');if(s.length===2){n=s[0];p=s[1];g.sPath='L1/'+p;if(!t){t={path:n,operator:'Any',variable:'L1'};}l.push(g);}else{throw new Error("Not Implemented");}}else{l.push(g);}}}if(t){if(l.length===1){t.condition=l[0];}else if(l.length>1){t.condition=new F({filters:l,and:false});}l=[new F(t)];}if(l.length===1){o.push(l[0]);}else if(l.length>1){o.push(new F({filters:l,and:false}));}}if(o.length===1){return o[0];}else if(o.length>1){return new F({filters:o,and:true});}else{return null;}};C.prototype.serialize=function(){var a=q.extend(true,[],this.getData().conditions);a.forEach(function(o){delete o.isEmpty;},this);return'{"conditions":'+JSON.stringify(a)+"}";};C.prototype.serializeMeta=function(){var f=Object.keys(this._mFieldPath||{});var r="";f.forEach(function(s){if(this.getData().fieldPath[s].valueState!=="None"){r+=JSON.stringify(this.getData().fieldPath[s]);}},this);return'{"fieldPath":'+r+"}";};C.prototype.parse=function(o){var d=function(k,v){var a;if(!isNaN(parseInt(k,10))&&(typeof v==='string')){a=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/.exec(v);if(a){return new Date(v);}}return v;};var r=this.getData();r.conditions=JSON.parse(o,d).conditions;this.setData(r);};C.serialize=function(l){var o=C._getAllKeys(l);var r="";o.forEach(function(a){var b=C._mModels[a];if(b.getData().conditions&&b.getData().conditions.length>0){r+=">>>"+a+"<<<";r+=b.serialize();}});return r;};C.serializeMeta=function(l){var o=C._getAllKeys(l);var r="";o.forEach(function(a){var b=C._mModels[a];r+=b.serializeMeta();});return r;};C.parse=function(o){var a=o.split(">>>");a.forEach(function(s){var p=s.split("<<<");if(p.length>1){if(C._mModels[p[0]]){C._mModels[p[0]].parse(p[1]);}else{var b=new C();b.parse(p[1]);C._mModels[p[0]]=b;}}});};C.createControl=function(d,o,p,i){var t=d;if(o.valueTypes[i]!=="self"&&o.valueTypes[i]){t=o._createLocalType(o.valueTypes[i]);}if(t&&t.sName==="Date"){return new sap.m.DatePicker({value:{path:p,type:t,mode:'TwoWay'}});}else{return new sap.m.Input({value:{path:p,type:t,mode:'TwoWay'}});}};return C;},true);
