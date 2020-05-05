/*!
 * SAP APF Analysis Path Framework
 *
 * (c) Copyright 2012-2014 SAP AG. All rights reserved
 */
sap.ui.define(['sap/apf/core/utils/checkForTimeout','sap/ui/model/odata/ODataUtils'],function(c,O){'use strict';function _(s){var m=s.instances&&s.instances.messageHandler;var a=jQuery.extend(true,{},s);if(a.functions&&a.functions.ajax){delete a.functions.ajax;}if(a.functions&&a.functions.getSapSystem){delete a.functions.getSapSystem;}if(a.instances&&a.instances.messageHandler){delete a.instances.messageHandler;}if(a.suppressSapSystem){delete a.suppressSapSystem;}var b=a.beforeSend;var S=a.success;var e=a.error;var o;var r;a.beforeSend=function(j,f){if(b){b(j,f);}};a.success=function(f,t,j){var M;try{M=sap.apf.core.utils.checkForTimeout(j);if(M){e(f,"error",undefined,M);}else{S(f,t,j);}}catch(g){d(g);}};a.error=function(j,t,f){var M;try{M=sap.apf.core.utils.checkForTimeout(j);if(M){e(j,t,f,M);}else{e(j,t,f);}}catch(g){d(g);}};if((s.functions&&s.functions.getSapSystem&&s.functions.getSapSystem())&&!s.suppressSapSystem){a.url=sap.ui.model.odata.ODataUtils.setOrigin(a.url,{force:true,alias:s.functions.getSapSystem()});}if(s.functions&&s.functions.ajax){r=s.functions.ajax(a);}else{r=jQuery.ajax(a);}if(a.async!==undefined&&a.async===false&&m&&m.isOwnException(o)){throw new Error(o&&o.message||"");}return r;function d(f){var g;var M;o=f;if(!m.isOwnException(f)){g=f&&f.message||"";M=m.createMessageObject({code:"5042",aParameters:[g]});m.putMessage(M);}}}sap.apf.core=sap.apf.core||{};sap.apf.core.ajax=_;return _;},true);
