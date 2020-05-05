/*!
 * SAP APF Analysis Path Framework
 * 
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.apf.core.step");jQuery.sap.require("sap.apf.core.utils.filter");jQuery.sap.require("sap.apf.core.utils.areRequestOptionsEqual");jQuery.sap.require("sap.apf.utils.utils");jQuery.sap.require("sap.apf.core.constants");(function(){'use strict';sap.apf.core.Step=function(m,s,f,r,c){m.check(s!==undefined,"Step: step configuration is missing");m.check(s.binding!==undefined,"No binding assigned to step "+s.id+" in analytical configuration",sap.apf.core.constants.message.code.errorCheckConfiguration);var l=sap.apf.core.constants.representationMetadata.labelDisplayOptions;var t=this;var b,R,C,o;var a={responseData:[]};var A=jQuery.extend(true,{},s);this.type='step';this.title=jQuery.extend(true,{},s.title);this.longTitle=undefined;if(s.longTitle){this.longTitle=jQuery.extend(true,{},s.longTitle);}this.thumbnail=jQuery.extend(true,{},s.thumbnail);this.categories=s.categories;this.destroy=function(){if(b){b.destroy();}R=undefined;C=undefined;o=undefined;b=undefined;t=undefined;};this.getRequestConfiguration=function(){return f.getConfigurationById(s.request);};this.getAdditionalConfigurationProperties=function(){return A;};this.update=function(F,e){var g;var h=this.getFilter();var j=!F.isEqual(C);var k=b.getRequestOptions(j);var n=!sap.apf.core.utils.areRequestOptionsEqual(o,k);var p=f.getConfigurationById(s.request);c.getMetadata(p.service).then(function(q){if(!h.isEmpty()&&!s.topNSettings&&(b.getSelectedRepresentation().type==='TableRepresentation')){var u=h.getProperties()[0];var v=[u];var w=q.getPropertyMetadata(p.entityType,u)["sap:text"];if(w){v.push(w);}g={selectionFilter:h,requiredFilterProperties:v};}if(R&&(j||n)){R.sendGetInBatch(F,e,k,g);}else{e({},false);}},function(){e({},false);});};this.determineFilter=function(e,g){var n;var M;if(this.adjustCumulativeFilter){n=this.adjustCumulativeFilter(e);}if(d()&&this.getFilter().toUrlParam()){var h=f.getConfigurationById(s.filterMapping.requestForMappedFilter);h.selectProperties=s.filterMapping.target.slice();if(s.filterMapping.targetPropertyDisplayOption===l.TEXT||s.filterMapping.targetPropertyDisplayOption===l.KEY_AND_TEXT){c.getMetadata(h.service).done(function(p){var q=p.getPropertyMetadata(h.entityType,h.selectProperties[0]);if(q.text){h.selectProperties.push(q.text);}j.call(this,h);}.bind(this));}else{j.call(this,h);}}else{a.responseData=[];g(this.getFilter(),n);}function j(h){var p=f.createRequest(h);M=e.addAnd(this.getFilter());if(n){M=n.copy().addAnd(this.getFilter());}if(M.isEqual(a.mergedFilter)){g(a.mappedFilter,n);}else{sap.apf.utils.executeFilterMapping(M,p,s.filterMapping.target,k,m);}}function k(p,q,u){if(!q){if(s.filterMapping.keepSource==='true'){p=t.getFilter().addAnd(p);}a.mergedFilter=M;a.mappedFilter=p;a.responseData=u;g(p,n);}}};this.getBinding=function(){return b;};this.getFilter=function(){return b.getFilter(this.getContextInfo());};this.getContextInfo=function(){var e=f.getConfigurationById(s.request);var g={entityType:e.entityType,service:e.service};return g;};this.setData=function(D,F){var e=!F.isEqual(C);C=F.copy();o=jQuery.extend({},b.getRequestOptions(e));b.setData(D);};this.getRepresentationInfo=function(){return b.getRepresentationInfo();};this.getSelectedRepresentationInfo=function(){return b.getSelectedRepresentationInfo();};this.getSelectedRepresentation=function(){return b.getSelectedRepresentation();};this.setSelectedRepresentation=function(r){b.setSelectedRepresentation(r);};this.getFilterInformation=function(e,g){var h=jQuery.Deferred();var j;if(s.longTitle&&s.longTitle.key){j=c.getTextNotHtmlEncoded(s.longTitle.key);}else{j=c.getTextNotHtmlEncoded(s.title.key);}if(d()&&s.filterMapping.keepSource==="true"){jQuery.when(n(e,j),k(e,j)).then(function(q,u){h.resolve([q,u]);});}else if(d()){jQuery.when(k(e,j)).then(function(q){h.resolve([q]);});}else{jQuery.when(n(e,j)).then(function(q){h.resolve([q]);});}return h;function k(){var q=jQuery.Deferred();var u;if(s.filterMapping.targetPropertyLabelKey){u=c.getTextNotHtmlEncoded(s.filterMapping.targetPropertyLabelKey);}var v=s.filterMapping.target[0];var w=f.getConfigurationById(s.filterMapping.requestForMappedFilter);var x;c.getMetadata(w.service).done(function(B){var D=B.getPropertyMetadata(w.entityType,v);if(D.text){x=D.text;}});var y=[];var z=s.filterMapping.targetPropertyDisplayOption;a.responseData.forEach(function(B){if(z===l.TEXT&&x){y.push({text:B[x]});}else if(z===l.KEY_AND_TEXT&&x){y.push({text:c.getTextNotHtmlEncoded("keyAndTextSelection",[B[x],B[v]])});}else{y.push({text:B[v]});}});y=y.sort(function(B,D){return B.text.localeCompare(D.text);});p(q,v,y,u,w,true);return q;}function n(){var q=jQuery.Deferred();var u;var v;var w=f.getConfigurationById(s.binding);var x=f.getConfigurationById(s.request);if(w.requiredFilters&&w.requiredFilters.length===1){u=w.requiredFilters[0];if(w.requiredFilterOptions&&w.requiredFilterOptions.fieldDesc){v=c.getTextNotHtmlEncoded(w.requiredFilterOptions.fieldDesc.key);}}p(q,u,b.getSortedSelections(),v,x,false);return q;}function p(q,u,v,w,x,y){var z;var B;if(!w){z=c.getMetadata(x.service);}if(u){B=c.getMetadata(e.getRequestConfiguration().service);}jQuery.when(z,B).then(function(D,E){var F=false;var G;var H=e.getRequestConfiguration().entityType;var I;if(E){I=E.getFilterableProperties(H).concat(E.getParameterEntitySetKeyProperties(H));}if(!w&&D&&u){w=D.getPropertyMetadata(x.entityType,u)["sap:label"];}if(!u){F=true;G=c.getTextNotHtmlEncoded("noSelectionPossible");}else if(I.indexOf(u)===-1){F=true;G=c.getTextNotHtmlEncoded("filterNotApplicable");}else if(v.length===0){F=true;G=c.getTextNotHtmlEncoded("nothingSelected");}q.resolve({text:j,selectablePropertyLabel:w||u,filterValues:v,infoIcon:y,infoText:y?c.getTextNotHtmlEncoded("infoIconfilterMapping"):undefined,warningIcon:F,warningText:G,stepIndex:g});});}};this.serialize=function(){return{stepId:s.id,binding:b.serialize()};};this.deserialize=function(S){b.deserialize(S.binding);m.check(s.id,S.stepId,"sap.apf.core.step.deserialize inconsistent serialization data - id "+S.stepId);return this;};this.getAssignedNavigationTargets=function(){return s.navigationTargets;};i();function i(){b=f.createBinding(s.binding,undefined,undefined,r);delete A.binding;if(s.request!==undefined&&s.request!==""){R=f.createRequest(s.request);delete A.request;}}function d(){if(s.filterMapping){if(s.filterMapping.requestForMappedFilter&&s.filterMapping.target instanceof Array&&s.filterMapping.keepSource){return true;}m.putMessage(m.createMessageObject({code:"5104"}));}return false;}};}());
