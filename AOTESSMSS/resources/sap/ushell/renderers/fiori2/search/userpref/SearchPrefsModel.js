sap.ui.define(['sap/ui/model/json/JSONModel','sap/ushell/renderers/fiori2/search/SearchModel','sap/ushell/renderers/fiori2/search/SearchConfiguration'],function(J,S,a){"use strict";var p='sap.ushell.renderers.fiori2.search.userpref.SearchPrefsModel';return sap.ui.model.json.JSONModel.extend(p,{constructor:function(b){var t=this;sap.ui.model.json.JSONModel.prototype.constructor.apply(t,[]);t.config=a.getInstance();t.sina=t.config.getSina();this.reset();},personalizationPolicyOptOut:'Opt-Out',personalizationPolicyOptIn:'Opt-In',personalizationPolicyEnforced:'Enforced',personalizationPolicyDisabled:'Disabled',personalizationPolicies:['Opt-Out','Opt-In','Enforced','Disabled'],isSearchPrefsActive:function(){var t=this;var b=$.Deferred();var s=sap.ushell.renderers.fiori2.search.getModelSingleton();s.initBusinessObjSearch().then(function(){if(!t.config.searchBusinessObjects||!t.config.enableSearch||!s.isBusinessObjSearchEnabled()){b.fail(false);return;}t.sina.getSystem().getServerInfo().then(function(c){c=c.rawServerInfo;for(var i=0;i<c.Services.length;++i){var d=c.Services[i];if(d.Service==='PersonalizedSearch'){b.resolve(true);return;}}b.fail(false);return;},function(){b.fail(false);});});return b;},reset:function(){this.initializedDeferred=null;this.setData({searchPrefsActive:false,sessionUserActive:false,personalizationPolicy:'Enforced'});},asyncInit:function(){var t=this;if(t.initializedDeferred){return t.initializedDeferred;}t.initializedDeferred=t.isSearchPrefsActive().then(function(i){t.setProperty('/searchPrefsActive',i);if(!i){return jQuery.when(true);}return t.loadPreferences();});return t.initializedDeferred;},loadPreferences:function(){var t=this;t.searchConfiguration=t.sina.getSearchConfiguration();return t.searchConfiguration.load().then(function(c){var s=c.Data.PersonalizedSearch.SessionUserActive;t.setProperty('/sessionUserActive',s);var b=c.Data.PersonalizedSearch.PersonalizationPolicy;if(t.personalizationPolicies.indexOf(b)<0){b=this.personalizationPolicyDisabled;}t.setProperty('/personalizationPolicy',b);switch(b){case t.personalizationPolicyEnforced:t.setProperty('/explanationText',sap.ushell.resources.i18n.getText('sp.explanationPolicyEnforced'));break;case t.personalizationPolicyDisabled:t.setProperty('/explanationText',sap.ushell.resources.i18n.getText('sp.explanationPolicyDisabled'));break;default:t.setProperty('/explanationText','');}});},savePreferences:function(){var b=this.getProperty('/personalizationPolicy');var s=this.getProperty('/searchPrefsActive');if(!s||b===this.personalizationPolicyEnforced||b===this.personalizationPolicyDisabled){return jQuery.when(true);}var t=this;var d={"SearchConfiguration":{"Action":"Update","Data":{"PersonalizedSearch":{"SessionUserActive":t.getProperty('/sessionUserActive')}}}};return t.searchConfiguration.save(d);},resetProfile:function(){return this.sina.emptyUserHistory();}});});
