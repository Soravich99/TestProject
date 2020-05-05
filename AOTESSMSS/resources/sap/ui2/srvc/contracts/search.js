// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
(function(){"use strict";if(typeof jQuery==="function"&&jQuery.sap){jQuery.sap.declare("sap.ui2.srvc.contracts.search");jQuery.sap.require("sap.ui2.srvc.chip");}sap.ui2.srvc.Chip.addContract("search",function(c){var h,k;this.setKeywords=function(n){if(!sap.ui2.srvc.isArray(n)){throw new sap.ui2.srvc.Error("Not an array: "+n,"chip.search");}k=n.slice();};this.attachHighlight=function(e){if(typeof e!=="function"){throw new sap.ui2.srvc.Error("Not a function: "+e,"chip.search");}h=e;};return{getKeywords:function(){return k?k.slice():[];},fireHighlight:function(H){if(h){h(H);}}};});}());
