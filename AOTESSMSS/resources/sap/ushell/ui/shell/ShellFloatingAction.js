sap.ui.define(['jquery.sap.global','sap/m/Button','sap/ushell/library'],function(q,B){"use strict";var S=B.extend("sap.ushell.ui.shell.ShellFloatingAction");S.prototype.init=function(){this.addStyleClass("sapUshellShellFloatingAction");if(B.prototype.init){B.prototype.init.apply(this,arguments);}};S.prototype.exit=function(){B.prototype.exit.apply(this,arguments);};S.prototype.onAfterRendering=function(){if(this.data("transformY")){this.removeStyleClass('sapUshellShellFloatingActionTransition');q(this.getDomRef()).css('transform',"translateY("+this.data("transformY")+")");}else{this.addStyleClass('sapUshellShellFloatingActionTransition');}};});
