sap.ui.define(["sap/ui/comp/smartfilterbar/SmartFilterBar","sap/m/SegmentedButton","sap/m/SegmentedButtonItem"],function(S,a,b){"use strict";var c=S.extend("sap.suite.ui.generic.template.AnalyticalListPage.control.SmartFilterBarExt",{metadata:{events:{switchToVisualFilter:{}}},renderer:{}});c.prototype.checkSearchAllowed=function(s){if(s&&s.oSmartFilterbar){var A=s.oSmartFilterbar.determineMandatoryFilterItems(),f=s.oSmartFilterbar.getFiltersWithValues(),t=s.oController.getView().getModel("_templPriv"),I=true,d=0;if(A.length){if(!f.length||(f.length<A.length)){I=false;}else{for(var i=0;i<A.length;i++){for(var j=0;j<f.length;j++){if(f[j].getName()===A[i].getName()){d++;}}}I=(d===A.length);}}if(I){var o=S.prototype.verifySearchAllowed.apply(this,arguments);if(o.hasOwnProperty("error")||o.hasOwnProperty("mandatory")){I=false;}}t.setProperty("/alp/searchable",I);}};});
