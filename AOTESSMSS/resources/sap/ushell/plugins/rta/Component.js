sap.ui.define(["sap/ushell/plugins/BaseRTAPlugin"],function(B){"use strict";var R=B.extend("sap.ushell.plugins.rta.Component",{sType:'rta',metadata:{manifest:"json"},init:function(){var c={sComponentName:"sap.ushell.plugins.rta",layer:"CUSTOMER",developerMode:false,id:"RTA_Plugin_ActionButton",text:"RTA_BUTTON_TEXT",icon:"sap-icon://wrench",visible:true};B.prototype.init.call(this,c);}});return R;},true);
