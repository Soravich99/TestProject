/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/ManagedObject','sap/ui/model/json/JSONModel','sap/ui/comp/personalization/Util'],function(q,M,J,P){"use strict";var c=J.extend("sap.ui.mdc.experimental.P13nInternalModel",{constructor:function(i,s){J.apply(this,arguments);this._initialize();}});c.prototype._initialize=function(){var m=this.getProperty("/tableItems").map(function(p){if(typeof p==="string"){p=sap.ui.getCore().byId(p);}return{columnKey:p.getColumnKey(),selected:p.getSelected(),position:p.getPosition(),text:p.getText()};});this._sortBySelectedAndPosition(m);this.setData({items:m});this.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);this.setSizeLimit(1000);};c.prototype.getModelItemByColumnKey=function(C){var m=this.getProperty("/items").filter(function(o){return o.columnKey===C;});return m[0];};c.prototype.getIndexOfModelItem=function(m){return this.getProperty("/items").indexOf(m);};c.prototype.selectModelItem=function(m,i){m.selected=i;var a=this.getProperty("/items");var b=this._getSelectedModelItemsBetween(m,a[0]);if(b.length&&b[0].position>m.position){this.moveModelItemPosition(m,b[0]);}else{b=this._getSelectedModelItemsBetween(m,a[a.length-1]);if(b.length&&b[0].position<m.position){this.moveModelItemPosition(m,b[0]);}}};c.prototype.moveModelItem=function(m,o){if(!m||!o){return;}var a=this.getProperty("/items");var i=a.indexOf(m);var I=a.indexOf(o);if(i<0||I<0||i>a.length-1||I>a.length-1){return;}var b=a.splice(i,1)[0];a.splice(I,0,b);this.setProperty("/items",a);};c.prototype.moveModelItemPosition=function(m,o){var s=this._getSelectedModelItemsBetween(m,o);if(!s.length){return;}var d=this.getProperty("/items");var i=d.indexOf(m);var I=d.indexOf(o);if(i<I){o=s[s.length-1];}else{o=s[s.length-1];}var e=q.extend(true,[],d);e.sort(function(a,b){if(a.position<b.position){return-1;}else if(a.position>b.position){return 1;}else{return 0;}});var f=e.splice(m.position,1)[0];e.forEach(function(a,b){a.position=b;});e.splice(o.position,0,f);e.forEach(function(a,b){a.position=b;});d.forEach(function(a,b){var g=P.getArrayElementByKey("columnKey",a.columnKey,e);this.setProperty("/items/"+b+"/position",g.position);},this);};c.prototype._getSelectedModelItemsBetween=function(m,o){var a=this.getProperty("/items");var i=a.indexOf(m);var I=a.indexOf(o);if(i===I){return[];}var b=[];if(i<I){b=a.slice(i+1,I+1);return b.filter(function(d){return!!d.selected;});}b=a.slice(I,i).reverse();return b.filter(function(d){return!!d.selected;});};c.prototype._sortBySelectedAndPosition=function(m){m.sort(function(a,b){if(a.selected===true&&(b.selected===false||b.selected===undefined)){return-1;}else if((a.selected===false||a.selected===undefined)&&b.selected===true){return 1;}else if(a.selected===true&&b.selected===true){if(a.position<b.position){return-1;}else if(a.position>b.position){return 1;}else{return 0;}}else if((a.selected===false||a.selected===undefined)&&(b.selected===false||b.selected===undefined)){if(a.text<b.text){return-1;}else if(a.text>b.text){return 1;}else{return 0;}}});};return c;},true);
