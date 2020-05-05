// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/utils"],function(u){"use strict";function P(v,V,o){if(typeof v!=="string"){throw new u.Error("Parameter value of sVariantKey is not a string: sap.ushell.services.Personalization"," ");}if(typeof V!=="string"){throw new u.Error("Parameter value of sVariantName is not a string: sap.ushell.services.Personalization"," ");}if(o&&typeof o!=="object"){throw new u.Error("Parameter value of sVariantName is not a string: sap.ushell.services.Personalization"," ");}this._oVariantKey=v;this._oVariantName=V;this._oItemMap=new u.Map();this._oItemMap.entries=o||{};};P.prototype.getVariantKey=function(){return this._oVariantKey;};P.prototype.getVariantName=function(){return this._oVariantName;};P.prototype.getItemValue=function(i){if(typeof i!=="string"){return undefined;}return this._oItemMap.get(i);};P.prototype.setItemValue=function(i,I){if(typeof i!=="string"){throw new u.Error("Parameter value of sItemKey is not a string: sap.ushell.services.Personalization"," ");}return this._oItemMap.put(i,I);};P.prototype.containsItem=function(i){if(typeof i!=="string"){return undefined;}return this._oItemMap.containsKey(i);};P.prototype.getItemKeys=function(){return this._oItemMap.keys();};P.prototype.delItem=function(i){if(typeof i!=="string"){return undefined;}return this._oItemMap.remove(i);};P.prototype._serialize=function(){var i=[],v={},I={},t=this;v.name=this.getVariantName();i=this._oItemMap.keys();i.forEach(function(s){I[s]=t.getItemValue(s);});v.variantData=I;return v;};return P;});
