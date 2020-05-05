sap.ui.define(['sap/ushell/renderers/fiori2/search/personalization/FLPPersonalizationStorage','sap/ushell/renderers/fiori2/search/personalization/BrowserPersonalizationStorage','sap/ushell/renderers/fiori2/search/personalization/MemoryPersonalizationStorage','sap/ushell/renderers/fiori2/search/SearchConfiguration'],function(F,B,M,S){"use strict";jQuery.sap.declare('sap.ushell.renderers.fiori2.search.personalization.PersonalizationStorage');var c=S.getInstance();sap.ushell.renderers.fiori2.search.personalization.PersonalizationStorage={instance:null,isLaunchpad:function(){try{return sap.ushell.Container.getService("Personalization")?true:false;}catch(e){return false;}},getInstance:function(){var t=this;if(this.instancePromise){return this.instancePromise;}switch(c.personalizationStorage){case'auto':if(this.isLaunchpad()){this.instancePromise=F.getInstance();}else{this.instancePromise=B.getInstance();}break;case'browser':this.instancePromise=B.getInstance();break;case'flp':this.instancePromise=F.getInstance();break;case'memory':this.instancePromise=M.getInstance();break;default:}this.instancePromise.then(function(i){t.instance=i;});return this.instancePromise;},getInstanceSync:function(){if(!this.instance){throw'No instance, call async method getInstance for getting the instance';}return this.instance;},isInitialized:function(){return!!this.instance;}};return sap.ushell.renderers.fiori2.search.personalization.PersonalizationStorage;});
