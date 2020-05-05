sap.ui.define([
    "sap/ui/fl/changeHandler/BaseRename",
    "sap/ovp/changeHandler/HideCardContainer",
    "sap/ovp/changeHandler/UnhideCardContainer",
    "sap/ovp/changeHandler/UnhideControl"
], function (BaseRename, HideCardContainer, UnhideCardContainer, UnhideControl) {
    "use strict";
    return {
        "moveControls": {
            "changeHandler": "default",
            "layers": {
                "CUSTOMER_BASE": false,
                "CUSTOMER": false,
                "USER": false
            }
        },
        "unhideControl": UnhideControl,
        "unhideCardContainer": UnhideCardContainer,
        "hideCardContainer": HideCardContainer,
        /**
         * Personalization change handlers
         */
        "manageCardsForDashboardLayout": {
        	changeHandler: {
        		applyChange : function(oChange, oPanel, mPropertyBag){
            		//store the incoming change to the main controller for user before rendering
            		var oMainController = mPropertyBag.appComponent.getRootControl().getController();
            		oMainController.storeIncomingDeltaChanges(oChange.getContent());
                    return true;
                },
                completeChangeContent : function(oChange, oSpecificChangeInfo, mPropertyBag) {
                	oChange.setContent(oSpecificChangeInfo.content);
                	return;
                }
        	},
        	layers: {
                "USER": true  // enables personalization which is by default disabled
            }
        },
        "viewSwitch": {
            changeHandler: {
                applyChange: function (oChange, oPanel, mPropertyBag) {
                    var oMainController = mPropertyBag.appComponent.getRootControl().getController();
                    oMainController.appendIncomingDeltaChange(oChange);
                    return true;
                },
                completeChangeContent: function (oChange, oSpecificChangeInfo, mPropertyBag) {
                    return;
                }
            },
            layers: {
                "USER": true  // enables personalization which is by default disabled
            }
        },
        "visibility": {
            changeHandler: {
                applyChange: function (oChange, oPanel, mPropertyBag) {
                    var oMainController = mPropertyBag.appComponent.getRootControl().getController();
                    oMainController.appendIncomingDeltaChange(oChange);
                    return true;
                },
                completeChangeContent: function (oChange, oSpecificChangeInfo, mPropertyBag) {
                    return;
                }
            },
            layers: {
                "USER": true  // enables personalization which is by default disabled
            }
        },
        "dragOrResize": {
            changeHandler: {
                applyChange: function (oChange, oPanel, mPropertyBag) {
                    var oMainController = mPropertyBag.appComponent.getRootControl().getController();
                    oMainController.appendIncomingDeltaChange(oChange);
                    return true;
                },
                completeChangeContent: function (oChange, oSpecificChangeInfo, mPropertyBag) {
                    return;
                }
            },
            layers: {
                "USER": true  // enables personalization which is by default disabled
            }
        },
        /**
         *  Scenario:- When you have full array delta change from fixed layout with
         *  changeType "manageCardsForEasyScanLayout"
         *
         *  Issue:- New personalization changes are not being applied because resizable layout
         *  does not have changeType "manageCardsForEasyScanLayout"
         *
         *  Temporary Solution:- Added changeType "manageCardsForEasyScanLayout" which ignores
         *  all the changes which are of this type
         *
         *  TODO: Remove and save it as delta changes in rel-1.58 release
         */
        "manageCardsForEasyScanLayout": {
            changeHandler: {
                applyChange : function(oChange, oPanel, mPropertyBag){
                    return true;
                },
                completeChangeContent : function(oChange, oSpecificChangeInfo, mPropertyBag) {
                    oChange.setContent(oSpecificChangeInfo.content);
                    return;
                }
            },
            layers: {
                "USER": true  // enables personalization which is by default disabled
            }
        }
    };
}, /* bExport= */true);