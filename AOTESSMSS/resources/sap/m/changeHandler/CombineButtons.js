/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils","jquery.sap.global"],function(F,q){"use strict";var C={};C.ADD_HELPER_FUNCTIONS={_fnFindIndexInAggregation:function(p,s,P){var o,m=false,a,A;o=p.getMetadata().getAllAggregations()[P];m=o.multiple;a=m?o.singularName:o.name;A=q.sap.charToUpperCase(a);return p["indexOf"+A](s);}};C.applyChange=function(c,o,p){if(p.modifier.targets!=="jsControlTree"){throw new Error("Combine buttons change can't be applied on XML tree");}var a=c.getDefinition(),m=p.modifier,v=F.getViewForControl(o),s=m.bySelector(a.content.combineButtonSelectors[0],p.appComponent),A=p.appComponent,P=m.getParent(s),i,b,B,I=sap.ui.getCore().getConfiguration().getRTL(),M,d,e=[];B=a.content.combineButtonSelectors.map(function(f){return m.bySelector(f,A);});b=B[0].sParentAggregationName;i=this.ADD_HELPER_FUNCTIONS._fnFindIndexInAggregation(P,s,b);M=m.createControl("sap.m.Menu",p.appComponent,v);B.forEach(function(f,g){var h,j,S=a.content.buttonsIdForSave[g],k=m.getProperty(f,"text");j=m.createControl("sap.m.MenuItem",p.appComponent,v,S);m.setProperty(j,"text",f.mProperties.text);m.setProperty(j,"icon",f.mProperties.icon);j.attachPress(function(E){return f.firePress(E);});if(k){I?e.unshift(k):e.push(k);}S.id=S.id+"-originalButtonId";h=m.createControl("sap.ui.core.CustomData",p.appComponent,v,S);m.setProperty(h,"key","originalButtonId");m.setProperty(h,"value",m.getId(f));m.removeAggregation(P,b,f);m.insertAggregation(j,"dependents",f);m.insertAggregation(j,"customData",h);m.insertAggregation(M,"items",j,g);});d=m.createControl("sap.m.MenuButton",p.appComponent,v,a.content.menuButtonIdSelector);m.setProperty(d,"text",e.join("/"));m.insertAggregation(d,"menu",M,0);m.insertAggregation(P,b,d,i);};C.completeChangeContent=function(c,s,p){var m=p.modifier,a=p.appComponent,o=c.getDefinition(),b=s.combineFieldIds;if(b&&b.length>=2){c.addDependentControl(b,"combinedButtons",p);o.content.combineButtonSelectors=b.map(function(d){return m.getSelector(d,a);});o.content.menuButtonIdSelector=m.getSelector(a.createId(q.sap.uid()),a);o.content.menuIdSelector=m.getSelector(a.createId(q.sap.uid()),a);o.content.buttonsIdForSave=b.map(function(){return m.getSelector(a.createId(q.sap.uid()),a);});}else{throw new Error("Combine buttons action cannot be completed: oSpecificChangeInfo.combineFieldIds attribute required");}};return C;},true);