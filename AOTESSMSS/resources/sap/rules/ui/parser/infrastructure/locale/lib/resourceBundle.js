jQuery.sap.declare("sap.rules.ui.parser.infrastructure.locale.lib.resourceBundle");jQuery.sap.require("sap.rules.ui.parser.infrastructure.locale.lib.resourceBundleContext");sap.rules.ui.parser.infrastructure.locale.lib.resourceBundle=sap.rules.ui.parser.infrastructure.locale.lib.resourceBundle||{};sap.rules.ui.parser.infrastructure.locale.lib.resourceBundle.lib=(function(){var i=null;function R(){var a=sap.rules.ui.parser.infrastructure.locale.lib.resourceBundleContext.lib;return{getString:function(m,b,f){var s=a.getString(m,b,f);return s;}};}return{getInstance:function(){if(!i){i=new R();i.constructor=null;}return i;}};}());
