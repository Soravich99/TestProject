/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/format/DateFormat","sap/ui/model/odata/ODataUtils","./_Helper","./_Parser"],function(D,O,_,a){"use strict";var r=/^\/Date\((\d+)\)\/$/,d=D.getDateInstance({pattern:"yyyy-MM-dd",UTC:true}),b=/^\/Date\((\d+)(?:([-+])(\d\d)(\d\d))?\)\/$/,o=D.getDateTimeInstance({pattern:"yyyy-MM-dd'T'HH:mm:ss.SSS",UTC:true}),c=D.getDateTimeInstance({pattern:"yyyy-MM-dd'T'HH:mm:ss.SSSZ"}),e=/\+/g,f=/\//g,g=/^PT(?:(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)(\.\d+)?S)?)$/i,t=D.getTimeInstance({pattern:"HH:mm:ss",UTC:true});function h(){}h.prototype.mFinalHeaders={"Content-Type":"application/json;charset=UTF-8"};h.prototype.mPredefinedPartHeaders={"Accept":"application/json"};h.prototype.mPredefinedRequestHeaders={"Accept":"application/json","MaxDataServiceVersion":"2.0","DataServiceVersion":"2.0","X-CSRF-Token":"Fetch"};h.prototype.convertBinary=function(v){return v.replace(e,"-").replace(f,"_");};h.prototype.convertDate=function(v){var i,m=r.exec(v);if(!m){throw new Error("Not a valid Edm.DateTime value '"+v+"'");}i=new Date(parseInt(m[1],10));if(Number(m[1]%(24*60*60*1000))!==0){throw new Error("Cannot convert Edm.DateTime value '"+v+"' to Edm.Date because it contains a time of day");}return d.format(i);};h.prototype.convertDateTimeOffset=function(v){var m=b.exec(v),s,i,j,k,T;if(!m){throw new Error("Not a valid Edm.DateTimeOffset value '"+v+"'");}T=parseInt(m[1],10);i=parseInt(m[3],10);j=parseInt(m[4],10);if(!m[2]||i===0&&j===0){s="Z";}else{k=m[2]==="-"?-1:1;T+=k*(i*60*60*1000+j*60*1000);s=m[2]+m[3]+":"+m[4];}return o.format(new Date(T))+s;};h.prototype.convertDoubleSingle=function(v){switch(v){case"NaN":case"INF":case"-INF":return v;default:return parseFloat(v);}};h.prototype.convertFilter=function(F,R){var i=a.parseFilter(F),m,p=i.left.value,P,T,v=i.right.value;P=this.oModelInterface.fnFetchMetadata("/"+R+"/"+p).getResult();if(!P){throw new Error("Invalid filter path: "+p);}T=P.$Type;if(T==="Edm.String"){return F;}m=_.parseLiteral(v,T,p);i.right.value=this.formatPropertyAsLiteral(m,P);return a.buildFilterString(i);};h.prototype.convertTimeOfDay=function(v){var i,m=g.exec(v),T;if(!m){throw new Error("Not a valid Edm.Time value '"+v+"'");}T=Date.UTC(1970,0,1,m[1]||0,m[2]||0,m[3]||0);i=new Date(T);return t.format(i)+(m[4]||"");};h.prototype.convertNonPrimitive=function(i){var p,P,T,s,v,j=this;if(i.results&&!i.__metadata){i.results.forEach(function(I){j.convertNonPrimitive(I);});return i.results;}if(!i.__metadata||!i.__metadata.type){throw new Error("Cannot convert complex value without type information in "+"__metadata.type: "+JSON.stringify(i));}s=i.__metadata.type;T=j.getTypeForName(s);delete i.__metadata;for(p in i){v=i[p];if(v===null){continue;}if(typeof v==="object"){if(v.__deferred){delete i[p];}else{i[p]=this.convertNonPrimitive(v);}continue;}P=T[p]&&T[p].$Type;i[p]=this.convertPrimitive(v,P,s,p);}return i;};h.prototype.convertPrimitive=function(v,p,T,P){switch(p){case"Edm.Binary":return this.convertBinary(v);case"Edm.Date":return this.convertDate(v);case"Edm.DateTimeOffset":return this.convertDateTimeOffset(v);case"Edm.Boolean":case"Edm.Byte":case"Edm.Decimal":case"Edm.Guid":case"Edm.Int16":case"Edm.Int32":case"Edm.Int64":case"Edm.SByte":case"Edm.String":return v;case"Edm.Double":case"Edm.Single":return this.convertDoubleSingle(v);case"Edm.TimeOfDay":return this.convertTimeOfDay(v);default:throw new Error("Type '"+p+"' of property '"+P+"' in type '"+T+"' is unknown; cannot convert value: "+v);}};h.prototype.doConvertResponse=function(R){var p=this.convertNonPrimitive(R.d);if(R.d.results&&!R.d.__metadata){p={value:p};if(R.d.__count){p["@odata.count"]=R.d.__count;}if(R.d.__next){p["@odata.nextLink"]=R.d.__next;}}return p;};h.prototype.doConvertSystemQueryOptions=function(R,q,i,j,s){var S=[],k=this;function l(E,m,p){if(!m||typeof m!=="object"){throw new Error("$expand must be a valid object");}Object.keys(m).forEach(function(n){var A=_.buildPath(p,n),v=m[n],u;E.push(A);if(typeof v==="object"){Object.keys(v).forEach(function(Q){switch(Q){case"$expand":l(E,v.$expand,A);break;case"$select":u=v.$select;if(!Array.isArray(u)){u=u.split(",");}u.forEach(function(w){S.push(_.buildPath(A,w));});break;default:throw new Error("Unsupported query option in $expand: "+Q);}});}if(!v.$select){S.push(A+"/*");}});return E;}Object.keys(q).forEach(function(n){var I=n[0]==='$',v=q[n];if(j&&I){return;}switch(n){case"$count":n="$inlinecount";v=v?"allpages":"none";break;case"$expand":v=l([],v,"");v=(s?v.sort():v).join(",");break;case"$orderby":break;case"$select":S.push.apply(S,Array.isArray(v)?v:v.split(","));return;case"$filter":v=k.convertFilter(v,R);break;default:if(I){throw new Error("Unsupported system query option: "+n);}}i(n,v);});if(S.length>0){if(!q.$select){S.push("*");}i("$select",(s?S.sort():S).join(","));}};h.prototype.formatPropertyAsLiteral=function(v,p){function i(j,V){var k=j.parse(V);if(!k){throw new Error("Not a valid "+p.$Type+" value: "+V);}return k;}if(v===null){return"null";}switch(p.$Type){case"Edm.Boolean":case"Edm.Byte":case"Edm.Decimal":case"Edm.Double":case"Edm.Guid":case"Edm.Int16":case"Edm.Int32":case"Edm.Int64":case"Edm.SByte":case"Edm.Single":case"Edm.String":break;case"Edm.Date":v=i(d,v);break;case"Edm.DateTimeOffset":v=i(c,v);break;case"Edm.TimeOfDay":v={__edmType:"Edm.Time",ms:i(t,v).getTime()};break;default:throw new Error("Type '"+p.$Type+"' in the key predicate is not supported");}return O.formatValue(v,p.$v2Type||p.$Type);};h.prototype.getTypeForName=function(n){var T;this.mTypesByName=this.mTypesByName||{};T=this.mTypesByName[n];if(!T){T=this.mTypesByName[n]=this.oModelInterface.fnFetchMetadata("/"+n).getResult();}return T;};h.prototype.ready=function(){return this.oModelInterface.fnFetchEntityContainer().then(function(){});};return function(i){jQuery.extend(i,h.prototype);};},false);
