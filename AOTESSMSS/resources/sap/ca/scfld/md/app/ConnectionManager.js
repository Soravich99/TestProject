/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.scfld.md.app.ConnectionManager");jQuery.sap.require("sap.ca.ui.message.message");jQuery.sap.require("sap.ca.ui.utils.busydialog");jQuery.sap.require("sap.ui.model.odata.ODataUtils");sap.ui.base.ManagedObject.extend("sap.ca.scfld.md.app.ConnectionManager",{metadata:{properties:{identity:"string",configuration:"object",defaultConfiguration:"object",component:"object"}},initModels:function(){function a(P,A){(A||"").split("&").forEach(function(j){var i=j.indexOf("="),K=j,V="";if(i>=0){V=decodeURIComponent(K.slice(i+1));K=K.slice(0,i);}K=decodeURIComponent(K);if(K){P[K]=V;}});}function c(j){var x=JSON.parse(JSON.stringify(j));jQuery.each(x,function(i,y){y.fRequestFailed=j[i].fRequestFailed;});return x;}this.modelList={};this.mockServerList={};this.iRequestCount=0;var s=jQuery.isArray(this.getConfiguration().getServiceList())?c(this.getConfiguration().getServiceList()):null;var e=this.getConfiguration().getExcludedQueryStringParameters()||[];var b=this.getConfiguration().isMock();var t=this;var d=jQuery.sap.getUriParameters().get("sap-server");var f=jQuery.sap.getUriParameters().get("sap-host");var g=jQuery.sap.getUriParameters().get("sap-host-http");var h=jQuery.sap.getUriParameters().get("sap-client");var C=t.getComponent();var S=(C.getComponentData()||{}).startupParameters||{};var v=S["sap-system"]||{};var k=typeof v==="object"?v[0]:v;this.sErrorInStartMessage="";this.bIsComponentBase=!!C.setRouterSetCloseDialogs;this.bIsShowingMessage=false;if(!sap.ui.getCore().getConfiguration().getDisableCustomizing()&&C&&C.getMetadata()){var o=C.getMetadata().getConfig(),p=C.getMetadata().getParent().getName(),l=o["sap.ca.serviceConfigs"]||[];var m=function(x,E){var y,z;var A=jQuery.isArray(E)?c(E):[];for(var i=0;i<x.length;i++){y=x[i];for(var j=0;j<A.length;j++){z=A[j];if(y.name==z.name){for(var q in z){y[q]=z[q];}A.splice(j,1);j--;}}}x=x.concat(A);return x;};if(p!=="sap.ca.scfld.md.ComponentBase"){var M=C.getMetadata().getManifestEntry("sap.app");if(M&&M.dataSources){var D=M.dataSources,n=[];for(var q in D){var r=D[q],u=r.settings,w={name:q,serviceUrl:r.uri};if(u&&u.localUri){w.mockedDataSource=jQuery.sap.getModulePath(M.id)+"/"+u.localUri;}n.push(w);}if(n.length>0){l=m(l,n);}}}if(l.length>0&&s!=null){s=m(s,l);}}if(s!=null){jQuery.each(s,function(i,j){function x(G,H){var I="Cannot load meta data for service "+H.serviceUrl,J=G.getParameter("statusCode"),K=t.getIdentity()||"sap.ca.scfld.md.app.ConnectionManager";J+=" (";J+=G.getParameter("statusText");J+=") - ";J+=G.getParameter("message");J+="\n";J+=G.getParameter("responseText");jQuery.sap.log.error(I,J,K);}var U=URI(j.serviceUrl),y=(j.useV2ODataModel===true);if(d!=null&&(jQuery.inArray("sap-server",e)==-1)){U.addSearch("sap-server",d);}else if(f!=null&&(jQuery.inArray("sap-host",e)==-1)){U.addSearch("sap-host",f);}else if(g!=null&&(jQuery.inArray("sap-host-http",e)==-1)){U.addSearch("sap-host-http",g);}if(h!=null&&(jQuery.inArray("sap-client",e)==-1)){U.addSearch("sap-client",h);}var z=U.toString();if(k){z=sap.ui.model.odata.ODataUtils.setOrigin(z,k);}if(b){jQuery.sap.require("sap.ui.core.util.MockServer");var A=(z.split("?")[0]).replace(/\/?$/,"/");var B=new sap.ui.core.util.MockServer({rootUri:A});if(j.mockedDataSource){B.simulate(j.mockedDataSource,{sMockdataBaseUrl:j.mockedDataSource.replace(/[^\/]+$/,""),bGenerateMissingMockData:true});}else{B.simulate(A+"$metadata");}B.start();t.mockServerList[j.name]=B;if(j.isDefault){t.mockServerList[undefined]=B;}}var o={metadataUrlParams:{},json:true,loadMetadataAsync:j.loadMetadataAsync===true||y};a(o.metadataUrlParams,j.metadataParams);if(j.serviceUrl.indexOf("/sap/opu/")===0){var E=sap.ushell&&sap.ushell.Container?sap.ushell.Container.getUser().getLanguage():jQuery.sap.getUriParameters().get("sap-language");if(E&&e.indexOf("sap-language")<0){o.metadataUrlParams["sap-language"]=E;}}var F=y?new sap.ui.model.odata.v2.ODataModel(z,o):new sap.ui.model.odata.ODataModel(z,o);if(o.loadMetadataAsync){F.attachMetadataLoaded({oModel:F,oService:j},function(G,P){t.checkModelMetaData(P.oModel,P.oService);},this);F.attachMetadataFailed({oModel:F,oService:j},function(G,P){x(G,P.oService);t.checkModelMetaData(P.oModel,P.oService);},this);}else{F.attachMetadataFailed(j,x,this);t.checkModelMetaData(F,j);}if(j.overrideGetPropertyMetadata&&F.oMetadata){F.oMetadata._getPropertyMetadata=function(G,P){P=P.replace(/^\/|\/$|\)$|\w*\(/g,"");return sap.ui.model.odata.ODataMetadata.prototype._getPropertyMetadata.apply(this,[G,P]);};}if((j.useBatch)&&!b){F.setUseBatch(true);}if(j.countSupported){if(y){F.setDefaultCountMode(sap.ui.model.odata.CountMode.Request);}else{F.setCountSupported(true);}}else{if(y){F.setDefaultCountMode(sap.ui.model.odata.CountMode.Inline);}else{F.setCountSupported(false);}}if(j.sDefaultBindingMode){F.setDefaultBindingMode(j.sDefaultBindingMode);}if(j.fRequestFailed){F.attachRequestFailed(null,j.fRequestFailed);}else{F.attachRequestFailed(null,jQuery.proxy(t.handleRequestFailed,t));}if(j.noBusyIndicator==true){F.attachRequestSent(null,jQuery.proxy(t.handleRequestSentInner,t));F.attachRequestCompleted(null,jQuery.proxy(t.handleRequestCompletedInner,t));}else{F.attachRequestSent(null,jQuery.proxy(t.handleRequestSent,t));F.attachRequestCompleted(null,jQuery.proxy(t.handleRequestCompleted,t));}if(j.isDefault){t.modelList[undefined]=F;t.setDefaultConfiguration(j);}else{t.modelList[j.name]=F;}});}},checkModelMetaData:function(m,s){if(!m.getServiceMetadata()){var i=this.getProperty("configuration").oApplicationFacade.oApplicationImplementation.UilibI18nModel.getResourceBundle();this.sErrorInStartMessage=i.getText("ERROR_MSG_NO_METADATA",[s.name]);var S={type:sap.ca.ui.message.Type.ERROR,message:this.sErrorInStartMessage,details:i.getText("ERROR_DETAIL_NO_METADATA",[s.serviceUrl])};this.showMessageBox(S);return;}},setIdentity:function(i){var o=this.getIdentity();if(o!=i){this.setProperty("identity",i);}},getModel:function(n){return this.modelList[n];},handleRequestSent:function(e){sap.ca.ui.utils.busydialog.requireBusyDialog();this.handleRequestSentInner(e);},handleRequestSentInner:function(e){this.iRequestCount++;jQuery.sap.log.info("Connection Manager","Request sent");},handleRequestFailed:function(e){jQuery.sap.log.error("Connection Manager","Failed to load data");var r=e.getParameter("response"),s={type:sap.ca.ui.message.Type.ERROR,message:e.getParameter("message")||(r&&r.message),details:e.getParameter("responseText")||(r&&r.responseText)};this.showMessageBox(s);},handleRequestCompleted:function(e){sap.ca.ui.utils.busydialog.releaseBusyDialog();this.handleRequestCompletedInner(e);},handleRequestCompletedInner:function(e){if(e.getParameter("success")){jQuery.sap.log.info("Connection Manager","Request succesfully completed");}else{jQuery.sap.log.info("Connection Manager","Request completed with errors",e.getParameter("message"));}},showMessageBox:function(s){if(this.bIsShowingMessage){return;}this.bIsShowingMessage=true;if(this.bIsComponentBase){var c=this.getComponent();var i=c._bRouterCloseDialogs;c.setRouterSetCloseDialogs(false);}sap.ca.ui.message.showMessageBox(s,jQuery.proxy(function(){this.bIsShowingMessage=false;if(this.bIsComponentBase){c.setRouterSetCloseDialogs(i);}},this));}});
sap.ca.scfld.md.app.ConnectionManager.getNewInstance=function(i,c,d,C){var o=new sap.ca.scfld.md.app.ConnectionManager({identity:i,configuration:c,defaultConfiguration:d,component:C});o.initModels();return o;};
