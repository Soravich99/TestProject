/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils"],function(F){"use strict";var S={};var a="sourceControl";S.ADD_HELPER_FUNCTIONS={_fnFindIndexInAggregation:function(p,s,P){var o,m=false,b,A;o=p.getMetadata().getAllAggregations()[P];m=o.multiple;b=m?o.singularName:o.name;A=jQuery.sap.charToUpperCase(b);return p["indexOf"+A](s);}};S.applyChange=function(c,C,p){if(p.modifier.targets!=="jsControlTree"){throw new Error("Split change can't be applied on XML tree");}var o=c.getDefinition(),m=p.modifier,v=F.getViewForControl(C),s=c.getDependentControl(a,p),M=m.getAggregation(s,"menu"),b=m.getAggregation(M,"items"),P=s.sParentAggregationName,d=m.getParent(s),A=this.ADD_HELPER_FUNCTIONS._fnFindIndexInAggregation(d,s,P),n=o.content.newElementIds.slice();b.forEach(function(e,i){var f=m.getAggregation(e,"customData"),g=m.getAggregation(e,"dependents"),h=m.getId(e),B,j;if(f&&f.length>0){var k=h+"-originalButtonId";f.some(function(D){if(m.getId(D)===k){j=m.getProperty(D,"value");return true;}});}if(j&&g.length>0){g.some(function(C){if(j===m.getId(C)){B=C;return true;}});if(B){m.removeAggregation(e,"dependents",B);}}else{var I=n[i];B=m.createControl("sap.m.Button",p.appComponent,v,I);m.setProperty(B,"text",m.getProperty(e,"text"));m.setProperty(B,"icon",m.getProperty(e,"icon"));B.attachPress(function(E){return e.firePress(E);});}m.insertAggregation(d,P,B,A+i);});m.removeAggregation(d,P,s);m.insertAggregation(C,"dependents",s);return true;};S.completeChangeContent=function(c,s,p){var m=p.modifier,A=p.appComponent,C=c.getDefinition();if(!s.newElementIds){throw new Error("Split of MenuButton cannot be applied : oSpecificChangeInfo.newElementIds attribute required");}if(!s.sourceControlId){throw new Error("Split of MenuButton cannot be applied : oSpecificChangeInfo.sourceControlId attribute required");}C.content.newElementIds=s.newElementIds;c.addDependentControl(s.sourceControlId,a,p);C.content.sourceSelector=m.getSelector(s.sourceControlId,A);};return S;},true);
