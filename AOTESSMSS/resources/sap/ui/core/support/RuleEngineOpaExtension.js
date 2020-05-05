/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/Object'],function(q,U){"use strict";var E=U.extend("sap.ui.core.support.RuleEngineOpaExtension",{metadata:{publicMethods:["getAssertions"]},getAssertions:function(){var s=function(){return q.sap.getUriParameters().get('sap-skip-rules-issues')=='true';};return{noRuleFailures:function(o){var r=q.Deferred(),f=o[0]&&o[0]["failOnAnyIssues"],a=o[0]&&o[0]["failOnHighIssues"],b=o[0]&&o[0].rules,e=o[0]&&o[0].executionScope;q.sap.support.analyze(e,b).then(function(){var c=q.sap.support.getAnalysisHistory(),l={issues:[]};if(c.length){l=c[c.length-1];}var i=l.issues.reduce(function(g,h){g[h.severity.toLowerCase()]+=1;return g;},{high:0,medium:0,low:0});var d=l.issues.length===0;if(a){d=i.high===0;}else if(f===false||a===false){d=true;}if(s()){d=true;}r.resolve({result:d,message:"Support Assistant issues found: [High: "+i.high+", Medium: "+i.medium+", Low: "+i.low+"]",expected:"0 high 0 medium 0 low",actual:i.high+" high "+i.medium+" medium "+i.low+" low"});});return r.promise();},getFinalReport:function(){var r=q.Deferred();q.sap.support.getFormattedAnalysisHistory().then(function(h){var a=q.sap.support.getAnalysisHistory(),t=a.reduce(function(d,e){return d+e.issues.length;},0),b=t===0,m="Support Assistant Analysis History",c=m;if(b){m+=" - no issues found";}else if(s()){b=true;m+=' - issues are found. To see them remove the "sap-skip-rules-issues=true" URI parameter';}r.resolve({result:b,message:m,actual:c,expected:h});});return r.promise();}};}});return E;});
