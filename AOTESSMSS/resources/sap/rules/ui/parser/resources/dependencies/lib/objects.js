jQuery.sap.declare("sap.rules.ui.parser.resources.dependencies.lib.objects");jQuery.sap.require("sap.rules.ui.parser.resources.dependencies.lib.constants");sap.rules.ui.parser.resources.dependencies.lib.objects=sap.rules.ui.parser.resources.dependencies.lib.objects||{};sap.rules.ui.parser.resources.dependencies.lib.objects.lib=(function(){var d=sap.rules.ui.parser.resources.dependencies.lib.constants.lib;function V(D,v){this.category=d.CATEGORY_VOCA_DO;this.DOName=D;this.vocaName=v;}function a(D,f,v){this.category=d.CATEGORY_VOCA_DO_ATTRIBUTE;this.DOName=D;this.attribute=f;this.vocaName=v;}function b(D,f,v){this.category=d.CATEGORY_VOCA_DO_ASSOC;this.DOName=D;this.association=f;this.vocaName=v;}function c(f,v){this.category=d.CATEGORY_VOCA_ACTIONS;this.actionName=f;if(v){this.vocaName=v;}}function e(f,v){this.category=d.CATEGORY_VOCA_ALIASES;this.aliasName=f;this.vocaName=v;}return{VocaDOInfo:V,VocaDOAttributes:a,VocaDOAssociation:b,VocaAction:c,VocaAlias:e};}());
