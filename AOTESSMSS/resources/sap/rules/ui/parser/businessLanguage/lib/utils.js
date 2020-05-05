jQuery.sap.declare("sap.rules.ui.parser.businessLanguage.lib.utils");sap.rules.ui.parser.businessLanguage.lib.utils=sap.rules.ui.parser.businessLanguage.lib.utils||{};sap.rules.ui.parser.businessLanguage.lib.utils.lib=(function(){function u(){}u.prototype.getFixedParamName=function(s){var r=null;r=s.replace(/^:/,"");return r;};u.prototype.isEmptyArray=function(a){if(a.length===undefined||a.length===null||a.length===0){return true;}return false;};u.prototype.isInArray=function(v,a){return a.indexOf(v)>-1?true:false;};u.prototype.removeInvertedCommas=function(s){var r=null;r=s.replace(/(^")|("$)/g,'');return r;};u.prototype.removeSingleQuotes=function(s){var r=null;r=s.replace(/(^')|('$)/g,'');return r;};u.prototype.removeDuplicate=function(a){var t={};var i=0;for(i=0;i<a.length;i++){t[a[i]]=true;}var r=[];var k=null;for(k in t){if(t.hasOwnProperty(k)){r.push(k);}}return r;};u.prototype.removeDupplicateByName=function(a){var t={};var i=0;for(i=0;i<a.length;i++){t[a[i].name]=a[i];}var r=[];var k=null;for(k in t){if(t.hasOwnProperty(k)){r.push(t[k]);}}return r;};u.prototype.addProperty=function(o,a,d){var n=this.capitaliseFirstLetter(a);var p=d;o["get"+n]=function(){return p;};};u.prototype.addProperties=function(a,b,p,d){var i;for(i=0;i<p.length;++i){if(b.hasOwnProperty(p[i])){this.addProperty(a,p[i],b[p[i]]);}else if(d!==undefined&&d!==null){this.addProperty(a,p[i],d[i]);}}};u.prototype.capitaliseFirstLetter=function(s){var r=null;if(s!==undefined&&s!==null){r=s[0].toUpperCase()+s.slice(1);}return r;};return u;}());
