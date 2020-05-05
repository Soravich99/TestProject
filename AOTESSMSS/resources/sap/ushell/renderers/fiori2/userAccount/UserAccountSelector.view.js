// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(function(){"use strict";sap.ui.jsview("sap.ushell.renderers.fiori2.userAccount.UserAccountSelector",{createContent:function(c){var i=sap.ushell.resources.i18n;var f=sap.ui.Device.system.phone?'Column':'Row';var F=sap.ui.Device.system.phone?'Stretch':'Center';var t=sap.ui.Device.system.phone?'Left':'Right';var l=sap.ui.Device.system.phone?"auto":"12rem";var n=new sap.m.Label({text:i.getText("UserAccountNameFld")+":",width:l,textAlign:t});var a=new sap.m.Input("userAccountuserName",{value:"{/name}",editable:false}).addAriaLabelledBy(n);a.addEventDelegate({onfocusin:function(){jQuery("#userAccountuserName input").blur();}});var b=new sap.m.FlexBox({alignItems:F,direction:f,items:[n,a]});var e=new sap.m.Label({text:i.getText("UserAccountEmailFld")+":",width:l,textAlign:t});var d=new sap.m.FlexBox({alignItems:F,direction:f,items:[e,new sap.m.Input({value:"{/mail}",editable:false}).addAriaLabelledBy(e)]});var s=new sap.m.Label({text:i.getText("UserAccountServerFld")+":",width:l,textAlign:t});var g=new sap.m.FlexBox({alignItems:F,direction:f,items:[s,new sap.m.Input({value:"{/server}",editable:false}).addAriaLabelledBy(s)]});var v=new sap.m.VBox({items:[b,d,g]});v.addStyleClass("sapUiSmallMargin");return v;},getControllerName:function(){return"sap.ushell.renderers.fiori2.userAccount.UserAccountSelector";}});},true);
