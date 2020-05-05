// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/services/_Personalization/constants.private","sap/ushell/services/_Personalization/utils","sap/ushell/services/_Personalization/VariantSet"],function(c,u,V){"use strict";function a(C){this._oContextContainer=C;};a.prototype.save=function(){return this._oContextContainer.save();};a.prototype.getVariantSetKeys=function(){var p=this._oContextContainer._getInternalKeys(),v=[];v=p.map(function(e){return e.replace(c.S_VARIANT_PREFIX,"","");});return v;};a.prototype.containsVariantSet=function(v){return this.getVariantSetKeys().indexOf(v)>=0;};a.prototype.getVariantSet=function(v){var o=this._oContextContainer._getItemValueInternal(c.S_VARIANT_PREFIX,v);if(!o){return undefined;}return new V(v,this._oContextContainer);};a.prototype.addVariantSet=function(v){var e={},o={};if(this.containsVariantSet(v)){throw new u.Error("Container already contains a variant set with key '"+v+"': sap.ushell.services.Personalization"," ");}e={currentVariant:null,variants:{}};this._oContextContainer._setItemValueInternal(c.S_VARIANT_PREFIX,v,e);o=new V(v,this._oContextContainer);return o;};a.prototype.delVariantSet=function(v){this._oContextContainer._delItemInternal(c.S_VARIANT_PREFIX,v);};return a;});
