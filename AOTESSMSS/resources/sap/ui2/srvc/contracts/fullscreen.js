// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
(function(){"use strict";if(typeof jQuery==="function"&&jQuery.sap){jQuery.sap.declare("sap.ui2.srvc.contracts.fullscreen");jQuery.sap.require("sap.ui2.srvc.chip");}sap.ui2.srvc.Chip.addContract("fullscreen",function(c){this.getFullscreen=function(){return c.getFullscreen();};this.setFullscreen=function(o){c.setFullscreen(o);};this.attachFullscreen=function(e){c.attachFullscreen(e);};});}());
