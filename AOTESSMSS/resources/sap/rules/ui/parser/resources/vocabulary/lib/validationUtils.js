jQuery.sap.declare("sap.rules.ui.parser.resources.vocabulary.lib.validationUtils");jQuery.sap.require("sap.rules.ui.parser.businessLanguage.lib.parseUtils");sap.rules.ui.parser.resources.vocabulary.lib.validationUtils=sap.rules.ui.parser.resources.vocabulary.lib.validationUtils||{};sap.rules.ui.parser.resources.vocabulary.lib.validationUtils.lib=(function(){var p=sap.rules.ui.parser.businessLanguage.lib.parseUtils.lib;var a=new p.parseUtilsLib();function v(){this.descMap=new Map();this.valueHelpBusinessDataTypeMap=new Map();this.vocaRulesArr=[];}v.prototype.isUniqueDesc=function(b,t,c){var k=t+'_'+c+'_'+b.description;var e=this.descMap.get(k);if(e){e.description=e.name;return false;}this.descMap.set(k,b);return true;};v.prototype.validateValueHelpBusinessDataType=function(V,B){var e=this.valueHelpBusinessDataTypeMap.get(V);if(e){if(B!==e){throw"";}}else{this.valueHelpBusinessDataTypeMap.set(V,B);}};v.prototype.getValueHelpBusinessDataType=function(V){return this.valueHelpBusinessDataTypeMap.get(V);};v.prototype.containsReservedWord=function(d){var s=false;var f;var r=new RegExp('^[A-Za-z_]');if(d){f=d.split(" ")[0];if(f.length>0&&!r.test(f.charAt(0))){s=true;}else if(d.indexOf("'")>-1){s=true;}else if(a.alfabetReservedWordsArr.indexOf(f.toUpperCase())!==-1){s=true;}}return s;};v.prototype.removeRedundantSpaces=function(d){var b=null;var n,i;if(d){n=d.replace("	"," ");b=n.split(" ");for(i=0;i<b.length;i){if(b[i]===""){b.splice(i,1);}else{i++;}}d=b.join(" ");}return d;};v.prototype.validateDescription=function(b,t,c){var i=true;var d;d=this.removeRedundantSpaces(b.description);if(!d||d.length===0||d===" "){i=false;}else if(this.containsReservedWord(d)){i=false;}else if(!this.isUniqueDesc(b,t,c)){i=false;}i?b.description=d:b.description=b.name;};v.prototype.isVocaRuleUnique=function(b){var r=false;var k=b.name+" "+b.description;if(this.vocaRulesArr.indexOf(k)<0){this.vocaRulesArr.push(k);r=true;}return r;};v.prototype.deleteNonUniqueVocaRule=function(b,c){var i=0;for(i;c.length>i;i++){if(c[i].hasOwnProperty("resultDataObjectId")&&c[i].name===b.name&&c[i].description===b.description){c.splice(i,1);break;}}};return{validationUtilsLib:v};}());
