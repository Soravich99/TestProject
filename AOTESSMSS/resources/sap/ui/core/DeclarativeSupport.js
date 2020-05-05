/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/DataType','sap/ui/base/ManagedObject','./Control','./CustomData','./HTML','./mvc/View'],function(q,D,M,C,a,H,V){"use strict";var b={};b.attributes={"data-sap-ui-type":true,"data-sap-ui-id":true,"data-sap-ui-aggregation":true,"data-sap-ui-default-aggregation":true,"data-sap-ui-binding":function(v,s){var B=M.bindingParser(v);s.objectBindings=s.objectBindings||{};s.objectBindings[B.model||undefined]=B;},"data-tooltip":function(v,s){s["tooltip"]=v;},"tooltip":function(v,s,c){s["tooltip"]=v;q.sap.log.warning('[Deprecated] Control "'+s.id+'": The attribute "tooltip" is not prefixed with "data-*". Future version of declarative support will only suppport attributes with "data-*" prefix.');},"class":true,"style":true,"id":true};b.compile=function(e,v,i){var t=this;q(e).find("[data-sap-ui-type]").filter(function(){return q(this).parents("[data-sap-ui-type]").length===0;}).each(function(){t._compile(this,v,i);});};b._compile=function(e,v,i){var $=q(e);var t=$.attr("data-sap-ui-type");var c=[];var I=t==="sap.ui.core.UIArea";if(I){var d=this;$.children().each(function(){var o=d._createControl(this,v);if(o){c.push(o);}});}else{var o=this._createControl(e,v);if(o){c.push(o);}}$.empty();var A=[];q.each(e.attributes,function(f,g){var n=g.name;if(!I||I&&/^data-/g.test(n.toLowerCase())){A.push(n);}});if(A.length>0){$.removeAttr(A.join(" "));}c.forEach(function(o){if(o instanceof C){if(v&&!i){v.addContent(o);}else{o.placeAt(e);if(v){v.connectControl(o);}}}});};b._createControl=function(e,v){var $=q(e);var c=null;var t=$.attr("data-sap-ui-type");if(t){q.sap.require(t);var f=q.sap.getObject(t);var s={};s.id=this._getId($,v);this._addSettingsForAttributes(s,f,e,v);this._addSettingsForAggregations(s,f,e,v);var c;if(V.prototype.isPrototypeOf(f.prototype)&&typeof f._sType==="string"){c=sap.ui.view(s,undefined,f._sType);}else{c=new f(s);}if(e.className){c.addStyleClass(e.className);}$.removeAttr("data-sap-ui-type");}else{c=this._createHtmlControl(e,v);}return c;};b._createHtmlControl=function(e,v){var h=new H();h.setDOMContent(e);this.compile(e,v,true);return h;};b._addSettingsForAttributes=function(s,c,e,v){var t=this;var S=b.attributes;var B=M.bindingParser;var d=[];var r=/^data-custom-data:(.+)/i;q.each(e.attributes,function(i,A){var n=A.name;var f=A.value;if(!r.test(n)){if(typeof S[n]==="undefined"){n=t.convertAttributeToSettingName(n,s.id);var p=t._getProperty(c,n);if(p){var o=B(f,v&&v.getController(),true);if(o&&typeof o==="object"){s[n]=o;}else{s[n]=t.convertValueToType(t.getPropertyDataType(p),o||f);}}else if(t._getAssociation(c,n)){var g=t._getAssociation(c,n);if(g.multiple){f=f.replace(/\s*,\s*|\s+/g,",");s[n]=f.split(",").map(function(I){return v?v.createId(I):I;});}else{s[n]=v?v.createId(f):f;}}else if(t._getAggregation(c,n)){var h=t._getAggregation(c,n);if(h.multiple){var o=B(f,v&&v.getController());if(o){s[n]=o;}else{throw new Error("Aggregation "+n+" with cardinality 0..n only allows binding paths as attribute value");}}else if(h.altTypes){var o=B(f,v&&v.getController(),true);if(o&&typeof o==="object"){s[n]=o;}else{s[n]=t.convertValueToType(h.altTypes[0],o||f);}}else{throw new Error("Aggregation "+n+" not supported");}}else if(t._getEvent(c,n)){var j=v&&(v._oContainingView||v).getController();var k=V._resolveEventHandler(f,j);if(k){s[n]=k;}else{throw new Error('Control "'+s.id+'": The function "'+f+'" for the event "'+n+'" is not defined');}}else{}}else if(typeof S[n]==="function"){S[n](f,s,c);}}else{n=q.sap.camelCase(r.exec(n)[1]);var o=B(f,v&&v.getController());d.push(new a({key:n,value:o||f}));}});if(d.length>0){s.customData=d;}return s;};b._addSettingsForAggregations=function(s,c,e,v){var $=q(e);var d=this._getDefaultAggregation(c,e);var t=this;var A=c.getMetadata().getAllAggregations();$.children().each(function(){var f=q(this);var g=f.attr("data-sap-ui-aggregation");var T=f.attr("data-sap-ui-type");var u=false;if(!g){u=true;g=d;}if(g&&A[g]){var m=A[g].multiple;var h=function(o){var i=t._createControl(o,v);if(i){if(m){if(!s[g]){s[g]=[];}if(typeof s[g].path==="string"){s[g].template=i;}else{s[g].push(i);}}else{s[g]=i;}}};if(u||(T&&!u)){h(this);}else{f.children().each(function(){h(this);});}}f.removeAttr("data-sap-ui-aggregation");f.removeAttr("data-sap-ui-type");});return s;};b._getId=function(e,v){var $=q(e);var i=$.attr("id");if(i){if(v){i=v.createId(i);$.attr("data-sap-ui-id",i);}$.attr("id","");}return i;};b._getProperty=function(c,n){return c.getMetadata().getProperty(n);};b.convertValueToType=function(t,v){if(t instanceof D){v=t.parseValue(v);}return typeof v==="string"?M.bindingParser.escape(v):v;};b.getPropertyDataType=function(p){var t=D.getType(p.type);if(!t){throw new Error("Property "+p.name+" has no known type");}return t;};b.convertAttributeToSettingName=function(A,i,d){if(A.indexOf("data-")===0){A=A.substr(5);}else if(d){q.sap.log.warning('[Deprecated] Control "'+i+'": The attribute "'+A+'" is not prefixed with "data-*". Future version of declarative support will only suppport attributes with "data-*" prefix.');}else{throw new Error('Control "'+i+'": The attribute "'+A+'" is not prefixed with "data-*".');}return q.sap.camelCase(A);};b._getAssociation=function(c,n){return c.getMetadata().getAssociation(n);};b._getAggregation=function(c,n){return c.getMetadata().getAggregation(n);};b._getEvent=function(c,n){return c.getMetadata().getEvent(n);};b._getDefaultAggregation=function(c,e){var $=q(e);var d=$.attr("data-sap-ui-default-aggregation")||c.getMetadata().getDefaultAggregationName();$.removeAttr("data-sap-ui-default-aggregation");return d;};return b;},true);
