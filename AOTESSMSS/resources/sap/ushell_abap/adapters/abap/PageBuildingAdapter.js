// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
(function(){"use strict";jQuery.sap.declare("sap.ushell_abap.adapters.abap.PageBuildingAdapter");jQuery.sap.require("sap.ui2.srvc.factory");jQuery.sap.require("sap.ushell.System");sap.ushell_abap.adapters.abap.PageBuildingAdapter=function(s,p,P){var f,S="PERS",a="/sap/opu/odata/UI2/PAGE_BUILDER_PERS/",r=P.config.remoteCatalogServices||{},c=jQuery.sap.getObject("config.services.pageBuilding.baseUrl",undefined,P);this.getFactory=function(){return f;};p=p?p.toUpperCase():"";if(p==="CONF"||p==="CUST"){S=p;a="/sap/opu/odata/UI2/PAGE_BUILDER_"+S+"/";}else if(c&&jQuery.sap.getObject("config.services.pageBuilding.relativeUrl",undefined,P)){a=c;}f=sap.ui2.srvc.createFactory(a,undefined,S==="PERS");["/sap/hba/apps/kpi/s/odata/hana_chip_catalog.xsodata/","/sap/hba/r/sb/core/odata/modeler/SMART_BUSINESS.xsodata/","/sap/hba/r/sb/core/odata/runtime/SMART_BUSINESS.xsodata/","/sap/opu/odata/sap/SM_CATALOG_SRV/"].forEach(function(b){if(!Object.prototype.hasOwnProperty.call(r,b)){r[b]="sap.ui2.srvc.RemoteCatalogService";}});Object.keys(r).forEach(function(b){var R=r[b];jQuery.sap.require(R);f.addRemoteCatalogService(b,new(jQuery.sap.getObject(R))());});};}());
