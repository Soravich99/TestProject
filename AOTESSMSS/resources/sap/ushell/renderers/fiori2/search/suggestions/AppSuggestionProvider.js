sap.ui.define(['sap/ushell/renderers/fiori2/search/SearchHelper','sap/ushell/renderers/fiori2/search/suggestions/SuggestionProvider','sap/ushell/renderers/fiori2/search/suggestions/SuggestionTypeProps'],function(S,a,b){"use strict";jQuery.sap.declare('sap.ushell.renderers.fiori2.search.suggestions.AppSuggestionProvider');var m=sap.ushell.renderers.fiori2.search.suggestions.AppSuggestionProvider=function(){this.init.apply(this,arguments);};m.prototype=jQuery.extend(new a(),{init:function(p){a.prototype.init.apply(this,arguments);this.suggestApplications=S.refuseOutdatedRequests(this.suggestApplications);},abortSuggestions:function(){this.suggestApplications.abort();},combineSuggestionsWithIdenticalTitle:function(s){function J(k,v){if(k==="sina"){return undefined;}return v;}var c;var d={};for(var i=0;i<s.length;i++){c=s[i];var f=d[c.title+c.subtitle];if(f){if(!f.combinedSuggestionExists){var e={title:'combinedAppSuggestion'+i,subtitle:c.subtitle,sortIndex:f.sortIndex,url:"#Action-search&/searchterm="+c.title+"&datasource="+JSON.stringify(this.model.appDataSource,J),label:sap.ushell.resources.i18n.getText("suggestion_in_apps",c.label),icon:""};var g=sap.ushell.resources.i18n.getText("suggestion_in_apps",[""]);e.label=e.label.replace(g,"<i>"+g+"</i>");d[e.title+e.subtitle]=e;f.combinedSuggestionExists=true;}}else{c.sortIndex=i;d[c.title+c.subtitle]=c;}}s=[];for(var h in d){if(d.hasOwnProperty(h)){c=d[h];if(!c.combinedSuggestionExists){s.push(c);}}}s.sort(function(j,k){return j.sortIndex-k.sortIndex;});return s;},addAsterisk4ShowAllApps:function(s){var n=s;s=s.match(/\S+/g);if(s.length>0){var c;var d=[];for(var i=0;i<s.length;i++){c=s[i];if(c&&c.lastIndexOf('*')!==c.length-1){d.push(c+'*');}else{d.push(c);}}n=d.join(' ')}return n;},createShowMoreSuggestion:function(t){var c=sap.ushell.resources.i18n.getText("showAllNApps",t);c=c.replace(/"/g,"");var d=c;var l="<i>"+c+"</i>";return{title:c,tooltip:d,label:l,dataSource:this.model.appDataSource,labelRaw:this.model.getProperty("/uiFilter/searchTerms"),type:window.sinabase.SuggestionType.OBJECTDATA};},getSuggestions:function(){var t=this;var d=t.model.getDataSource();if(!d.equals(t.model.allDataSource)&&!d.equals(t.model.appDataSource)){return jQuery.when([]);}var s=t.model.getProperty('/uiFilter/searchTerms');return t.suggestApplications(s).then(function(r){var c=r.getElements();c=t.combineSuggestionsWithIdenticalTitle(c);jQuery.each(c,function(i,f){f.type=window.sinabase.SuggestionType.APPS;f.dataSource=t.model.appDataSource;f.position=b[window.sinabase.SuggestionType.APPS].position;});var e;if(t.model.isAllCategory()){e=b[window.sinabase.SuggestionType.APPS].limitDsAll;}else{e=b[window.sinabase.SuggestionType.APPS].limitDsApps;}c=c.slice(0,e);if(r.totalResults>e&&d.equals(t.model.appDataSource)){c.push(t.createShowMoreSuggestion(r.totalResults));}return c;});},suggestApplications:function(s){return sap.ushell.Container.getService("Search").queryApplications({searchTerm:s,searchInKeywords:true,bSuggestion:true});}});return m;});
