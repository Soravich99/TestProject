// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
(function(s,q){"use strict";s.ui.define(["sap/ushell/services/Container","sap/ushell/services/AppConfiguration","sap/ushell/services/Personalization","sap/ushell/services/URLParsing","sap/ushell/services/CrossApplicationNavigation","sap/ushell/services/_SmartNavigation/complements","sap/ushell/utils"],function(c,a,p,u,C,P,b){c=s.ushell.Container;u=c.getService("URLParsing");C=c.getService("CrossApplicationNavigation");p=c.getService("Personalization");function d(o,e,f){return new S(o,e,f,P,a,p,u,C,b);}d.hasNoAdapter=true;return d;});s.ushell.services.SmartNavigation=S;function S(c,p,o,P,a,b,u,C,d){if(!S.instance){Object.defineProperty(S,"instance",{value:Object.create(null,{getLinks:{value:function(A){var e=C.getLinks(A);if(!P.isTrackingEnabled(o,d)){return q.when(e);}var f=a.getCurrentApplication();var F=f.sShellHash;var g=f.componentHandle;if(f.componentHandle){g=f.componentHandle.getInstance();}if(!F){q.sap.log.warning("Call to SmartNavigation#getLinks() simply "+"delegated to CrossApplicationNavigation#getLinks()"+" because oAppConfiguration#getCurrentApplication()#sShellHash"+" evaluates to undefined.");return e;}return q.when(e,P.getNavigationOccurrences(F,b,g,u)).then(function(l,n){if(n.length===0){return l;}return P.prepareLinksForSorting(l,n,u).sort(function(L,O){return O.clickCount-L.clickCount;});});}},toExternal:{value:function(A,e){var _=arguments;var D=P.getHashFromOArgs(A.target,u);var t=function(){return C.toExternal.apply(C,_);};if(!P.isTrackingEnabled(o,d)){return q.when(t());}var f=a.getCurrentApplication();var F=f.sShellHash;var g=f.componentHandle;if(f.componentHandle){g=f.componentHandle.getInstance();}if(!F){q.sap.log.warning("Current shell hash could not be identified. Navigation will not be tracked.",null,"sap.ushell.services.SmartNavigation");return q.when(t());}if(!D){q.sap.log.warning("Destination hash does not conform with the ushell guidelines. Navigation will not be tracked.",null,"sap.ushell.services.SmartNavigation");return q.when(t());}return P.recordNavigationOccurrences(F,D,b,g,u).then(t);}},hrefForExternal:{value:function(){var h=C.hrefForExternal.apply(C,arguments);return h;}},getPrimaryIntent:{value:function(){var e=C.getPrimaryIntent.apply(C,arguments);return e;}},trackNavigation:{value:function(A){if(!P.isTrackingEnabled(o,d)){q.sap.log.debug("Call to SmartNavigation#trackNavigation() ignored"+" because Service is not enabled via Configuration",null,"sap.ushell.services.SmartNavigation");return q.when(null);}var t=A.target;var e=a.getCurrentApplication();var f=e.sShellHash;var D;if(!f){q.sap.log.warning("Call to SmartNavigation#trackNavigation() simply ignored"+" because oAppConfiguration#getCurrentApplication()#sShellHash"+" evaluates to undefined.");return q.when(null);}D=P.getHashFromOArgs(t,u);if(!D){q.sap.log.warning("Navigation not tracked - no valid destination provided",null,"sap.ushell.services.SmartNavigation");return q.when(null);}q.sap.log.debug("Navigation to "+D+" was tracked out of "+f,null,"sap.ushell.services.SmartNavigation");return P.recordNavigationOccurrences(f,D,b,e.componentHandle.getInstance(),u);}},constructor:{value:S}})});}return S.instance;}})(sap,jQuery);
