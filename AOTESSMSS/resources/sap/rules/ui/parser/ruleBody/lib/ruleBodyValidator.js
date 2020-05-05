jQuery.sap.declare("sap.rules.ui.parser.ruleBody.lib.ruleBodyValidator");jQuery.sap.require("sap.rules.ui.parser.ruleBody.lib.ruleBody");jQuery.sap.require("sap.rules.ui.parser.ruleBody.lib.constants");jQuery.sap.require("sap.rules.ui.parser.businessLanguage.lib.constants");jQuery.sap.require("sap.rules.ui.parser.resources.dependencies.lib.objects");jQuery.sap.require("sap.rules.ui.parser.ruleBody.lib.dependenciesHandler");jQuery.sap.require("sap.rules.ui.parser.resources.vocabulary.lib.constants");jQuery.sap.require("sap.rules.ui.parser.infrastructure.messageHandling.lib.responseCollector");jQuery.sap.require("sap.rules.ui.parser.infrastructure.util.utilsBase");jQuery.sap.require("sap.rules.ui.parser.infrastructure.util.constants");jQuery.sap.require("sap.rules.ui.parser.ruleBody.lib.decisionTableCell");jQuery.sap.require("sap.rules.ui.parser.resources.dependencies.lib.constants");sap.rules.ui.parser.ruleBody.lib.ruleBodyValidator=sap.rules.ui.parser.ruleBody.lib.ruleBodyValidator||{};sap.rules.ui.parser.ruleBody.lib.ruleBodyValidator.lib=(function(){var r=sap.rules.ui.parser.ruleBody.lib.ruleBody.lib;var a=sap.rules.ui.parser.ruleBody.lib.constants.lib;var R=sap.rules.ui.parser.businessLanguage.lib.constants.lib;var d=sap.rules.ui.parser.resources.dependencies.lib.objects.lib;var b=sap.rules.ui.parser.ruleBody.lib.dependenciesHandler.lib;var v=sap.rules.ui.parser.resources.vocabulary.lib.constants.lib;var c=sap.rules.ui.parser.infrastructure.messageHandling.lib.responseCollector.lib.ResponseCollector;var u=sap.rules.ui.parser.infrastructure.util.utilsBase.lib;var e=new u.utilsBaseLib();var f=sap.rules.ui.parser.infrastructure.util.constants.lib;var g=sap.rules.ui.parser.ruleBody.lib.decisionTableCell.lib;var h=sap.rules.ui.parser.resources.dependencies.lib.constants.lib;function j(){jQuery.sap.log.debug("CTOR - Rule Validator");r.RuleBody.call(this);this.initValidation();this.invalidRuleBody=null;this.mode=a.RULE_MODE_VALIDATION;this.aliasOutputBusinessDataType=null;this.rootObjectContext={};this.rootObjectContext.name=null;this.rootObjectContext.keysMap={};this.haveSameRootObject=true;this.vocaRulesRootObjectMap=null;this.dependenciesByFlags=false;}j.prototype=Object.create(r.RuleBody.prototype);j.prototype.constructor=j;j.prototype.initValidation=function initValidation(){this.invalidHeaders=[];this.headersOfInvalidCells={};this.actionMap={};this.status=a.RULE_SUCCESS;this.ruleBody={};this.ruleBody.type="";this.ruleBody.content={};this.flags={};this.flags[a.outputFlagsEnum.dependenciesOutput]=false;this.flags[a.outputFlagsEnum.validationOutput]=true;this.flags[a.outputFlagsEnum.unknownTokensOutput]=false;this.flags[a.outputFlagsEnum.isAlias]=false;this.depHandler=null;this.unknownTokens={};this.rowOutputParamsCnt=0;this.conditionColumnsCnt=0;this.currentParserResult=null;};j.prototype.isParserReturnedErrorMessage=function isParserReturnedErrorMessage(){if(this.currentParserResult.hasOwnProperty('status')&&this.currentParserResult.status===a.RULE_ERROR){return true;}return false;};j.prototype.updateValidateResult=function updateValidateResult(o){if(this.currentParserResult.hasOwnProperty('status')&&this.currentParserResult.status===a.RULE_ERROR){o.errorDetails=this.currentParserResult.errorDetails;o.status=this.currentParserResult.status;o.cursorPosition=this.currentParserResult.cursorPosition;return o;}return null;};j.prototype.handleMessages=function handleMessages(p,i,k,l,m){if(p!==null&&p!==undefined){var n=m||{'cursorPosition':p.cursorPosition};c.getInstance().addMessage(p.errorID,undefined,i,n,p.errorDetails);}else{if(m){i=null;}c.getInstance().addMessage(k,l,i,m);}};j.prototype.handleMessages4OdataFormatOutput=function handleMessages4OdataFormatOutput(p,t,i,k,l,m,n){var o=null;if(p){if(this.flags[a.ODATA_FORMAT_PAYLOAD]){o={};o.type=t;o.ruleId=this.flags[a.ODATA_FORMAT_PAYLOAD][a.RULE_ID];o.colId=i;o.cursorPosition=p.cursorPosition;if(k){o.rowId=k;}this.handleMessages(p,n,p.errorID,null,o);}}else{if(this.flags[a.ODATA_FORMAT_PAYLOAD]){o={};o.type=t;o.ruleId=this.flags[a.ODATA_FORMAT_PAYLOAD][a.RULE_ID];if(i){o.colId=i;}if(k){o.rowId=k;}}this.handleMessages(null,n,l,m,o);}};j.prototype.updateRootObjectContext=function updateRootObjectContext(k){var l,m=null;var i,p=[];if(this.rootObjectContext.name&&k.name&&this.rootObjectContext.name!==k.name){this.haveSameRootObject=false;this.status=a.RULE_ERROR;p=[this.rootObjectContext.name];l="rule_body_validator_expressions_need_to_have_same_root_object";m=c.getInstance().getMessage(l,p);this.handleMessages4OdataFormatOutput(null,a.additionalInfoTypeEnum.ruleResult,null,null,l,p,null);}else{if(k.associations){for(i=0;i<k.associations.length;i++){this.rootObjectContext.keysMap[k.associations[i]]=true;}}if(k.keys){for(i=0;i<k.keys.length;i++){this.rootObjectContext.keysMap[k.keys[i]]=true;}}if(!this.rootObjectContext.name&&k.name){this.rootObjectContext.name=k.name;}}return m;};j.prototype.updateRootObjectContextFromParser=function updateRootObjectContextFromParser(){var i,k=null;if(this.currentParserResult.hasOwnProperty(R.propertiesEnum.rootObjectContext)&&this.currentParserResult.status===R.statusEnum.SUCCESS&&this.haveSameRootObject){i=this.currentParserResult[R.propertiesEnum.rootObjectContext];k=this.updateRootObjectContext(i);}return k;};j.prototype.validateRootObjectContextAgainstVocaRules=function validateRootObjectContextAgainstVocaRules(){var i=null;var k;var l;if(this.vocaRulesRootObjectMap){var m=this.depHandler.getDependencies();if(m){for(k in m){if(m.hasOwnProperty(k)){if(m[k][h.PROPERTY_NAME_CATEGORY]===h.CATEGORY_VOCA_DO&&this.vocaRulesRootObjectMap.hasOwnProperty(m[k].DOName)){l=this.vocaRulesRootObjectMap[m[k].DOName];i=this.updateRootObjectContext(l);}}}}}return i;};j.prototype.updateDependnciesFromParser=function updateDependnciesFromParser(){if(this.currentParserResult.hasOwnProperty(a.outputFlagsEnum.dependenciesOutput)&&this.status===a.RULE_SUCCESS){this.depHandler.addDependencies(this.currentParserResult[a.outputFlagsEnum.dependenciesOutput]);}};j.prototype.updateUnknownTokensFromParser=function updateUnknownTokensFromParser(){var k="";if(this.currentParserResult.hasOwnProperty('unknownTokens')){for(k in this.currentParserResult.unknownTokens){if(this.currentParserResult.unknownTokens.hasOwnProperty(k)){if(this.unknownTokens.hasOwnProperty(k)===false){this.unknownTokens[k]=1;}else{this.unknownTokens[k]++;}}}}};j.prototype.valiadteCollectionInfoOnOutputParameter=function valiadteCollectionInfoOnOutputParameter(p,i,k){var l=[];var m=null;var n=null;if(p!==null){if(!this.outputInfo&&this.flags[a.outputFlagsEnum.isAlias]){if(this.isOutputParameterCollection(p)){this.status=a.RULE_ERROR;l=[i];n="rule_body_validator_alias_output_parameter_cannot_be_collection";m=c.getInstance().getMessage(n,l);this.handleMessages(null,k,n,l);}}}return m;};j.prototype.handleTextCondition=function handleTextCondition(i,k,p){jQuery.sap.log.debug("Validate Condition");this.currentParserResult=this.getParserAST(i,R.VALIDATE_MODE,null,R.TYPE_BOOLEAN,this.flags);if(this.isParserReturnedErrorMessage()){this.status=a.RULE_ERROR;this.handleMessages(this.currentParserResult,p);if(this.flags[a.outputFlagsEnum.unknownTokensOutput]){this.updateUnknownTokensFromParser();}}if(this.flags[a.outputFlagsEnum.dependenciesOutput]){this.updateDependnciesFromParser();}};j.prototype.initTextOutputsResult=function initTextOutputsResult(){this.ruleBody.content.outputs=[];};j.prototype.getOutputParamBusinessDataType=function getOutputParamBusinessDataType(p,s){var i=null;if(this.outputInfo===null){if(s!==null){i=s;}else{if(this.flags[a.outputFlagsEnum.isAlias]&&this.aliasOutputBusinessDataType!==null){i=this.aliasOutputBusinessDataType;}else{i=R.TYPE_ALL;}}}else{var k;var l=this.outputInfo.requiredParams;for(k=0;k<l.length;k++){if(p===l[k].name){i=l[k].businessDataType;break;}}}return i;};j.prototype.getOutputParamFromOutputRTInfo=function getOutputParamFromOutputRTInfo(p){var i;var k;if(this.outputInfo!==null){k=this.outputInfo.requiredParams;for(i=0;i<k.length;i++){if(p===k[i].name){return k[i];}}}return null;};j.prototype.updateParserIsCollectionFlag=function updateParserIsCollectionFlag(p){var i=this.flags;var o=this.getOutputParamFromOutputRTInfo(p);if(o!==null&&o.hasOwnProperty(v.PROPERTY_NAME_IS_COLLECTION)&&o[v.PROPERTY_NAME_IS_COLLECTION]===true){i=JSON.parse(JSON.stringify(this.flags));i[a.outputPropertiesEnum.isCollection]=true;}return i;};j.prototype.isValidOutputName=function isValidOutputName(p){if(this.outputInfo===null){return true;}var i;var k=this.outputInfo.requiredParams;for(i=0;i<k.length;i++){if(p===k[i].name){return true;}}return false;};j.prototype.isOutputParameterCollection=function isOutputParameterCollection(p){if(p.hasOwnProperty(R.propertiesEnum.isCollection)&&p[R.propertiesEnum.isCollection]===true){return true;}return false;};j.prototype.handleTextOutputParameter=function handleTextOutputParameter(i,k,p){var l;var m;var n;var o;this.rowOutputParamsCnt++;l=this.isValidOutputName(i.name);if(l===false){this.status=a.RULE_ERROR;n=e.buildJsonPath(p,a.RULE_OUTPUT_PARAM_NAME);m=[i.name,this.outputInfo.name];this.handleMessages(null,n,"rule_body_validator_parameter_not_exists_in_output",m);return;}var s=null;if(i.hasOwnProperty(a.RULE_PARAM_BUSINESS_DATA_TYPE)){s=i[a.RULE_PARAM_BUSINESS_DATA_TYPE];}var q=this.getOutputParamBusinessDataType(i.name,s);if(q!==null){o=this.updateParserIsCollectionFlag(i.name);this.currentParserResult=this.getParserAST(i.content,R.VALIDATE_MODE,null,q,o);if(this.isParserReturnedErrorMessage()){this.status=a.RULE_ERROR;n=e.buildJsonPath(p,a.RULE_CONTENT);this.handleMessages(this.currentParserResult,n);if(this.flags[a.outputFlagsEnum.unknownTokensOutput]){this.updateUnknownTokensFromParser();}}else{n=e.buildJsonPath(p,a.RULE_CONTENT);this.valiadteCollectionInfoOnOutputParameter(this.currentParserResult,i.name,n);}if(this.flags[a.outputFlagsEnum.dependenciesOutput]){this.updateDependnciesFromParser();}}};j.prototype.initTextParametersResult=function initTextParametersResult(){this.ruleBody.content.parameters=[];};j.prototype.initTextActionsResult=function initTextActionsResult(){this.ruleBody.content.actions=[];};j.prototype.handleTextActionParameter=function handleTextActionParameter(k,l,m,p){var i;var n;var o;this.handleActionParameterForText(k.actionReference,k.name,m,p);var q=this.getActionParamBusinessDataArray({"colID":m});for(i=0;i<q.length;i++){n=q[i];this.currentParserResult=this.getParserAST(k.content,R.VALIDATE_MODE,null,n,this.flags);if(this.isParserReturnedErrorMessage()){this.status=a.RULE_ERROR;o=e.buildJsonPath(p,a.RULE_CONTENT);this.handleMessages(this.currentParserResult,o);if(this.flags[a.outputFlagsEnum.unknownTokensOutput]){this.updateUnknownTokensFromParser();}}if(this.flags[a.outputFlagsEnum.dependenciesOutput]){this.updateDependnciesFromParser();}}};j.prototype.isActionExists=function isActionExists(i){var k=null;if(this.actionsMap.hasOwnProperty(i)===false){k=this.vocabularyDataProvider.getAction(this.vocabulary,i,null);if(k===null){return false;}this.actionsMap[i]={"paramMap":{}};}return true;};j.prototype.handleTextAction=function handleTextAction(i,k,p){var l={};var m=i.name;var n=this.isActionExists(m);if(n===false){var o=e.buildJsonPath(p,a.RULE_ACTION_NAME);var q=[m];this.handleMessages(null,o,"rule_body_validator_action_not_exists",q);this.status=a.RULE_ERROR;}if(this.flags[a.outputFlagsEnum.dependenciesOutput]&&this.status===a.RULE_SUCCESS){if(i.hasOwnProperty(a.RULE_ACTION_NAME)){var s=this.vocabularyDataProvider.getAction(this.vocabulary,m,null);var t=null;if(s!==null){t=s.vocaName;}var w=v.PROPERTY_NAME_ACTIONS.concat("."+m);l[w]=new d.VocaAction(m,t);this.depHandler.addDependencies(l);}}};j.prototype.setActionInfoInActionMap=function setActionInfoInActionMap(i){var k=null;if(this.actionsMap.hasOwnProperty(i)===false){k=this.vocabularyDataProvider.getAction(this.vocabulary,i,null);if(k===null){return false;}this.actionsMap[i]={"paramMap":{},"vocabulary":k.vocaName};var p;var l;var m;for(p=0;p<k.requiredParams.length;p++){l=k.requiredParams[p].name;m=k.requiredParams[p].businessDataType;this.actionsMap[i].paramMap[l]={"bdType":m,"isExists":false,"colID":null};}}return true;};j.prototype.isParameterExistsInActionMap=function isParameterExistsInActionMap(p,i,k){if(this.actionsMap.hasOwnProperty(i)===false){return false;}var l=this.actionsMap[i];if(l.paramMap.hasOwnProperty(p)===false){return false;}l.paramMap[p].isExists=true;l.paramMap[p].colID=k;return true;};j.prototype.handleActionParameterForText=function handleActionParameterForText(i,p,k,l){var m;var n;var o;var q;var s;for(m=0;m<i.length;m++){n=i[m];o=this.setActionInfoInActionMap(n);if(o===false){s=e.buildJsonPath(l,a.RULE_ACTION_REFERENCE);q=[n];this.handleMessages(null,s,"rule_body_validator_action_ref_not_exists",q);this.status=a.RULE_ERROR;}else if(this.isParameterExistsInActionMap(p,n,k)===false){s=e.buildJsonPath(l,a.RULE_ACTION_PARAM_NAME);q=[p,n];this.handleMessages(null,s,"rule_body_validator_param_name_not_exists",q);this.status=a.RULE_ERROR;}}};j.prototype.handleActionParameterForDecisionTable=function handleActionParameteForDecisionTable(i,p,k){var l;var m;var n;var o;var q;var s;for(l=0;l<i.length;l++){m=i[l];n=this.setActionInfoInActionMap(m);if(n===false){q=[m];o=c.getInstance().getMessage("rule_body_validator_action_ref_not_exists",q);this.handleMessages(null,undefined,"rule_body_validator_action_ref_not_exists",q);s={};s.colID=k;s.status=a.RULE_ERROR;s.errorDetails=o;this.status=a.RULE_ERROR;if(this.flags[a.outputFlagsEnum.validationOutput]){this.ruleBody.content.headers.push(s);}this.invalidHeaders[k]=true;}else if(this.isParameterExistsInActionMap(p,m,k)===false){q=[p,m];o=c.getInstance().getMessage("rule_body_validator_param_name_not_exists",q);this.handleMessages(null,undefined,"rule_body_validator_param_name_not_exists",q);s={};s.colID=k;s.status=a.RULE_ERROR;s.errorDetails=o;this.status=a.RULE_ERROR;if(this.flags[a.outputFlagsEnum.validationOutput]){this.ruleBody.content.headers.push(s);}this.invalidHeaders[k]=true;}}};j.prototype.handleOutputParameterHeader=function handleOutputParameterHeader(p,i,k){var l=this.isValidOutputName(p);var m="";var n;this.rowOutputParamsCnt++;if(l===false||(this.flags[a.outputFlagsEnum.isAlias]&&this.rowOutputParamsCnt>1)){if(l===false){n=[p,this.outputInfo.name];m="rule_body_validator_parameter_not_exists_in_output";}else if(this.flags[a.outputFlagsEnum.isAlias]&&this.rowOutputParamsCnt>1){m="rule_body_validator_one_alias_output_param_allowed";}var o=c.getInstance().getMessage(m,n);this.handleMessages4OdataFormatOutput(null,a.additionalInfoTypeEnum.column,k,null,m,n,null);var q={};q.colID=k;q.name=p;q.type=i;q.status=a.RULE_ERROR;q.errorDetails=o;this.status=a.RULE_ERROR;if(this.flags[a.outputFlagsEnum.validationOutput]){this.ruleBody.content.headers.push(q);}this.invalidHeaders[k]=true;}};j.prototype.updateHeaderValidationResult=function updateHeaderValidationResult(i){var k={};k.expression=i.expression;k.colID=i.colID;k.type=i.type;k=this.updateValidateResult(k);return k;};j.prototype.handleConditionHeader=function handleConditionHeader(i){var k={};var p=[];var l;var m;this.conditionColumnsCnt++;if(this.ruleType===a.RULE_SET&&this.conditionColumnsCnt>1){l="rule_body_validator_one_condition_column_allowed";m=c.getInstance().getMessage(l,p);this.handleMessages(null,undefined,l,p);this.status=a.RULE_ERROR;if(this.flags[a.outputFlagsEnum.validationOutput]){k.expression=i.expression;k.colID=i.colID;k.type=i.type;k.status=a.RULE_ERROR;k.errorDetails=m;this.ruleBody.content.headers.push(k);}this.invalidHeaders[i.colID]=true;}else{this.currentParserResult=this.getParserAST(i.expression,R.VALIDATE_MODE,null,R.TYPE_SINGLE_EXPRESSION,this.flags);if(i.expression!==null&&i.expression!==undefined&&i.expression!==""){k=this.updateHeaderValidationResult(i);if(k!==null){this.handleMessages4OdataFormatOutput(this.currentParserResult,a.additionalInfoTypeEnum.column,i.colID,null,null,null,null);this.status=a.RULE_ERROR;if(!this.ruleBody.content.hasOwnProperty("headers")){this.ruleBody.content.headers=[];}if(this.flags[a.outputFlagsEnum.validationOutput]){this.ruleBody.content.headers.push(k);}this.invalidHeaders[i.colID]=true;if(this.flags[a.outputFlagsEnum.unknownTokensOutput]){this.updateUnknownTokensFromParser();}}if(this.flags[a.outputFlagsEnum.dependenciesOutput]){this.updateDependnciesFromParser();}if(this.flags[a.outputFlagsEnum.rootObjectContextOutput]){this.updateRootObjectContextFromParser();}}}};j.prototype.validateHeader=function validateHeader(i){jQuery.sap.log.debug("validate header");if(i.hasOwnProperty(a.RULE_CELL_TYPE)){this.invalidHeaders[i.colID]=false;if(i.type===a.CONDITION&&i.hasOwnProperty(a.RULE_DT_EXPRESSION)){this.handleConditionHeader(i);}else if(i.type===a.PARAM){this.handleActionParameterForDecisionTable(i.actionReference,i.name,i.colID);}else if(i.type===a.OUTPUT_PARAM){this.handleOutputParameterHeader(i.name,i.type,i.colID);}}};j.prototype.initRow=function initRow(i){var k={};k.rowID=i;k.row=[];return k;};j.prototype.handleHeaders=function handleHeaders(i){var k=this;this.conditionColumnsCnt=0;this.traverseDecisionTableHeaders(i,function(m){k.validateHeader(m);});var l=this.buildHeadersMap(i);return l;};j.prototype.handleDecisionTableCondition=function handleDecisionTableCondition(i,k,l,m){var n=m;var o=null;r.RuleBody.prototype.handleDecisionTableCondition.call(this,i,k,l,m);if(i!==null&&i.hasOwnProperty(a.RULE_DT_EXPRESSION)&&k.row[l].hasOwnProperty(a.RULE_CONTENT)){if(this.flags[a.outputFlagsEnum.unknownTokensOutput]||this.invalidHeaders[i.colID]!==true){o=this.concatToDecisionTableCondition(i.expression,k.row[l].content);this.currentParserResult=this.getParserAST(o,R.VALIDATE_MODE,null,R.TYPE_BOOLEAN_ENHANCED,this.flags);var p={};p.expression=o;p.colID=k.row[l].colID;p.content=k.row[l].content;p=this.updateValidateResult(p);if(p!==null){this.status=a.RULE_ERROR;this.handleMessages4OdataFormatOutput(this.currentParserResult,a.additionalInfoTypeEnum.cell,i.colID,k.rowID,null,null,null);if(this.flags[a.outputFlagsEnum.validationOutput]){if(n===null){n=this.initRow(k.rowID);}n.row.push(p);}if(this.flags[a.outputFlagsEnum.unknownTokensOutput]){this.updateUnknownTokensFromParser();if(this.invalidHeaders[i.colID]!==true){this.headersOfInvalidCells[i.colID]=i;}}}if(this.flags[a.outputFlagsEnum.dependenciesOutput]){this.updateDependnciesFromParser();}if(this.flags[a.outputFlagsEnum.rootObjectContextOutput]){this.updateRootObjectContextFromParser();}}}return n;};j.prototype.getActionParamBusinessDataArray=function getActionParamBusinessDataArray(p){var i=null;var k=null;var l=null;var m=null;var n=[];for(m in this.actionsMap){if(this.actionsMap.hasOwnProperty(m)){i=this.actionsMap[m];for(l in i.paramMap){if(i.paramMap.hasOwnProperty(l)){k=i.paramMap[l];if(k.colID!==null&&k.colID===p.colID){n.push(k.bdType);}}}}}return n;};j.prototype.handleDecisionTableActionParameter=function handleDecisionTableActionParameter(i,k,l,m){var n;var o=this.getActionParamBusinessDataArray({"colID":k.row[l].colID});n=this.validateParameter(i,k,l,m,o,this.flags);if(n.hasOwnProperty(a.ROW_RESULT)){return n[a.ROW_RESULT];}};j.prototype.handleDecisionTableOutputParameter=function handleDecisionTableOutputParameter(i,k,l,m){var p=i.name;var s=null;var n=m;var o={};var q;var t;var w;r.RuleBody.prototype.handleDecisionTableOutputParameter.call(this,i,k,l,m);if(k.row[l].hasOwnProperty(a.RULE_PARAM_BUSINESS_DATA_TYPE)){s=k.row[l][a.RULE_PARAM_BUSINESS_DATA_TYPE];}else if(i.hasOwnProperty(a.RULE_PARAM_BUSINESS_DATA_TYPE)){s=i[a.RULE_PARAM_BUSINESS_DATA_TYPE];}t=this.getOutputParamBusinessDataType(p,s);if(t===null){o={};o.colID=i.colID;this.status=a.RULE_ERROR;if(this.flags[a.outputFlagsEnum.validationOutput]){if(m===null){m=this.initRow(k.rowID);}m.row.push(o);}}q=this.updateParserIsCollectionFlag(i.name);n=this.validateParameter(i,k,l,m,[t],q);if(n.hasOwnProperty(a.ROW_RESULT)){m=n[a.ROW_RESULT];}if(n.hasOwnProperty(a.PARSER_RESULT)&&this.isParserReturnedErrorMessage(n[a.PARSER_RESULT])===false){var x=n[a.PARSER_RESULT];w=this.valiadteCollectionInfoOnOutputParameter(x,p,undefined);if(w!==null&&this.flags[a.outputFlagsEnum.validationOutput]){o={};o.colID=i.colID;o.status=a.RULE_ERROR;o.errorDetails=w;o.expression=k.row[l].content;o.content=k.row[l].content;this.status=a.RULE_ERROR;if(m===null){m=this.initRow(k.rowID);}m.row.push(o);}}return m;};j.prototype.handleDecisionTableAction=function handleDecisionTableAction(i,k,l,m){var n={};var o=k.row[l].content;if(o===undefined||o===null||o===""){return m;}var p=this.isActionExists(o);if(p===false){var q=[o];var s=c.getInstance().getMessage("rule_body_validator_action_not_exists",q);this.handleMessages(null,undefined,"rule_body_validator_action_not_exists",q);var t={};t.colID=i.colID;t.status=a.RULE_ERROR;t.errorDetails=s;this.status=a.RULE_ERROR;if(m===null){m=this.initRow(k.rowID);}m.row.push(t);}if(this.flags[a.outputFlagsEnum.dependenciesOutput]&&this.status===a.RULE_SUCCESS){if(k.row[l].hasOwnProperty(a.RULE_CONTENT)){var w=null;if(this.actionsMap.hasOwnProperty(o)===true){w=this.actionsMap[o].vocabulary;}var x=v.PROPERTY_NAME_ACTIONS.concat("."+o);n[x]=new d.VocaAction(o,w);}this.depHandler.addDependencies(n);}return m;};j.prototype.initResult=function initResult(){this.rowOutputParamsCnt=0;if((this.ruleType===a.DECISION_TABLE||this.ruleType===a.RULE_SET)&&this.flags[a.outputFlagsEnum.validationOutput]){this.ruleBody.content.rows=[];this.ruleBody.content.headers=[];}};j.prototype.initRowResult=function initRowResult(i,k){return null;};j.prototype.addRowResult=function addRowResult(i){if(this.ruleType===a.DECISION_TABLE||this.ruleType===a.RULE_SET){if(this.flags[a.outputFlagsEnum.validationOutput]&&i!==null){this.ruleBody.content.rows.push(i);}}};j.prototype.validateParameter=function validateParameter(i,k,l,m,n,o){var p={};var q=null;var s="";var t="";p.rowResult=m;p.parserResult=null;if(k.row[l].hasOwnProperty(a.RULE_CONTENT)){var w;var x;if(n!==null&&n!==undefined){for(w=0;w<n.length;w++){this.currentParserResult=this.getParserAST(k.row[l].content,R.VALIDATE_MODE,null,n[w],o);p.parserResult=this.currentParserResult;x={};x.expression=k.row[l].content;x.colID=i.colID;x.content=k.row[l].content;x=this.updateValidateResult(x);if(this.flags[a.outputFlagsEnum.isAlias]){if((!i.hasOwnProperty(a.RULE_PARAM_BUSINESS_DATA_TYPE)||i.businessDataType===R.TYPE_ALL)&&this.currentParserResult.hasOwnProperty('actualReturnType')){if(x===null){if(this.aliasOutputBusinessDataType===null){this.aliasOutputBusinessDataType=this.currentParserResult.actualReturnType;}}else{if(this.aliasOutputBusinessDataType!==null&&this.aliasOutputBusinessDataType!==this.currentParserResult.actualReturnType){q=[i.name];s="rule_body_validator_alias_output_params_should_have_same_type";t=c.getInstance().getMessage(s,q);this.handleMessages(null,undefined,s,q);x={};x.expression=k.row[l].content;x.colID=i.colID;x.content=k.row[l].content;x.errorDetails=t;}}}else{this.aliasOutputBusinessDataType=i.businessDataType;}}else{i.businessDataType=n[w];}if(x!==null){this.status=a.RULE_ERROR;this.handleMessages4OdataFormatOutput(this.currentParserResult,a.additionalInfoTypeEnum.cell,x.colID,k.rowID,null,null,null);if(this.flags[a.outputFlagsEnum.validationOutput]){if(p.rowResult===null){p.rowResult=this.initRow(k.rowID);}p.rowResult.row.push(x);}if(this.flags[a.outputFlagsEnum.unknownTokensOutput]){this.updateUnknownTokensFromParser();if(this.invalidHeaders[i.colID]!==true){this.headersOfInvalidCells[i.colID]=i;}}}if(this.flags[a.outputFlagsEnum.dependenciesOutput]){this.updateDependnciesFromParser();}if(this.flags[a.outputFlagsEnum.rootObjectContextOutput]){this.updateRootObjectContextFromParser();}}}}return p;};j.prototype.initPathPrefix=function initPathPrefix(p){if(p!==null&&p!==undefined){if(p.hasOwnProperty(a.RULE_BODY)){this.ruleBodyPathPrefix=p[a.pathPrefixKeysEnum.ruleBody];}else{this.ruleBodyPathPrefix=f.JSON_PATH_ROOT;}if(p.hasOwnProperty(a.EXPLICIT_OUTPUT)){this.outputPathPrefix=p[a.pathPrefixKeysEnum.explicitOutput];}else{this.outputPathPrefix=f.JSON_PATH_ROOT;}}else{this.ruleBodyPathPrefix=f.JSON_PATH_ROOT;this.outputPathPrefix=f.JSON_PATH_ROOT;}};j.prototype.initFlags=function initFlags(i){if(i!==null&&i!==undefined){if(i.hasOwnProperty(a.ODATA_FORMAT_PAYLOAD)){this.flags[a.ODATA_FORMAT_PAYLOAD]=i[a.ODATA_FORMAT_PAYLOAD];}if(i.hasOwnProperty(a.outputFlagsEnum.validationOutput)){this.flags[a.outputFlagsEnum.validationOutput]=i[a.outputFlagsEnum.validationOutput];}if(i[a.outputFlagsEnum.unknownTokensOutput]){this.flags[a.outputFlagsEnum.unknownTokensOutput]=i[a.outputFlagsEnum.unknownTokensOutput];}if(i[a.outputFlagsEnum.isAlias]){this.flags[a.outputFlagsEnum.isAlias]=i[a.outputFlagsEnum.isAlias];}if(i.hasOwnProperty(a.outputFlagsEnum.dependenciesOutput)){this.flags[a.outputFlagsEnum.dependenciesOutput]=i[a.outputFlagsEnum.dependenciesOutput];this.dependenciesByFlags=i[a.outputFlagsEnum.dependenciesOutput];}if(i.hasOwnProperty(a.outputFlagsEnum.rootObjectContextOutput)){if(i.hasOwnProperty(a.outputFlagsEnum.rootObjectContextOutput)){this.flags[a.outputFlagsEnum.rootObjectContextOutput]=i[a.outputFlagsEnum.rootObjectContextOutput];}}if(this.vocaRulesRootObjectMap&&this.flags[a.outputFlagsEnum.rootObjectContextOutput]===true){this.flags[a.outputFlagsEnum.dependenciesOutput]=true;}if(this.flags[a.outputFlagsEnum.dependenciesOutput]){this.depHandler=new b.DependeciesHandler();}}};j.prototype.validateOutput=function validateOutput(o,i){var k,l;if(o===null){return o;}l=this.vocabularyDataProvider.getOutput(i,o,null);if(l===null){l=this.vocabularyDataProvider.getVocaRuleOutput(i,o,null);}if(l===null){var p=[o];k="rule_body_validator_output_not_exists";this.handleMessages4OdataFormatOutput(null,a.additionalInfoTypeEnum.ruleResult,null,null,k,p,this.outputPathPrefix);this.status=a.RULE_ERROR;}return l;};j.prototype.getIsCollection=function getIsCollection(){var i=true;if(this.hasOwnProperty(a.HIT_POLICY_PROPERTY)){if(this.hitPolicy===a.FIRST_MATCH){i=false;}else if(this.hitPolicy===a.ALL_MATCH){i=true;}}return i;};j.prototype.getRootObjectContext=function getRootObjectContext(){var i={};i.keys=[];i.name=this.rootObjectContext.name;Object.keys(this.rootObjectContext.keysMap).forEach(function(k){i.keys.push(k);});return i;};j.prototype.updateInvalidRuleBodyHeaders=function updateInvalidRuleBodyHeaders(){var k=null;if(!this.invalidRuleBody.content.hasOwnProperty('headers')){this.invalidRuleBody.content.headers=[];}for(k in this.headersOfInvalidCells){if(this.headersOfInvalidCells.hasOwnProperty(k)){this.invalidRuleBody.content.headers.push(this.headersOfInvalidCells[k]);}}};j.prototype.deactivateParserMessages=function deactivateParserMessages(i){if((i.hasOwnProperty(a.RULE_BODY_TYPE)&&i[a.RULE_BODY_TYPE]===a.SINGLE_TEXT)||this.flags[a.ODATA_FORMAT_PAYLOAD]){this.flags[R.propertiesEnum.raiseError]=false;}};j.prototype.reValidateBusinessRule=function reValidateBusinessRule(i,k,l,o){var m={};this.mode=a.RULE_MODE_RE_VALIDATION;this.initValidation();this.initFlags(l);if(this.flags[a.outputFlagsEnum.unknownTokensOutput]&&this.invalidRuleBody!==null){m=this.validateBusinessRule(this.invalidRuleBody,i,k,l,o,null,null);}return m;};j.prototype.validateBusinessRule=function validateBusinessRule(i,k,l,m,o,p,t){var n={};jQuery.sap.log.debug("flags "+JSON.stringify(m));this.needDeserializeInput=g.needDeserializeInput(m,i.relVersion,l);this.vocaRulesRootObjectMap=(m&&m.vocaRules)?m.vocaRules.rootObjectMap:null;this.initPathPrefix(p);this.initFlags(m);this.aliasOutputBusinessDataType=null;this.vocabularyDataProvider=l;this.outputInfo=this.validateOutput(o,k,n);this.actionsMap={};this.deactivateParserMessages(i);this.traverse(i,k,l,t,this.ruleBodyPathPrefix);this.validateRootObjectContextAgainstVocaRules();this.ruleBody.type=this.ruleType;this.ruleBody.hitPolicy=this.hitPolicy;if(this.flags[a.outputFlagsEnum.unknownTokensOutput]){n[a.outputPropertiesEnum.unknownTokens]=this.unknownTokens;this.invalidRuleBody=JSON.parse(JSON.stringify(this.ruleBody));this.updateInvalidRuleBodyHeaders();}if(this.flags[a.outputFlagsEnum.isAlias]){n.isCollection=this.getIsCollection();n.businessDataType=this.aliasOutputBusinessDataType;}if(this.flags[a.outputFlagsEnum.validationOutput]){n.status=this.status;if(this.ruleType===a.DECISION_TABLE||this.ruleType===a.RULE_SET){n.ruleBody=this.ruleBody;}n.output=this.output;}else{n.status=this.status;}if(this.flags[a.outputFlagsEnum.dependenciesOutput]&&this.status===a.RULE_SUCCESS&&this.dependenciesByFlags){n.dependencies=this.depHandler.getDependencies();jQuery.sap.log.debug("getDependencies");}if(this.flags[a.outputFlagsEnum.rootObjectContextOutput]&&this.status===a.RULE_SUCCESS){n[a.outputPropertiesEnum.rootObjectContext]=this.getRootObjectContext();jQuery.sap.log.debug("getRootObjectContext");}return n;};return{RuleBodyValidator:j};}());
