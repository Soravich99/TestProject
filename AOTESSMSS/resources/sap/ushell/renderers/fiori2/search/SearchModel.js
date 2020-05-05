(function(g){"use strict";sap.ui.define(['sap/ushell/renderers/fiori2/search/SearchHelper','sap/ushell/renderers/fiori2/search/SearchResultListFormatter','sap/ushell/renderers/fiori2/search/SearchFacetsFormatter','sap/ushell/renderers/fiori2/search/SearchTabStripsFormatter','sap/ushell/renderers/fiori2/search/FacetItem','sap/ushell/renderers/fiori2/search/suggestions/SuggestionHandler','sap/ushell/renderers/fiori2/search/SearchIntentsResolver','sap/ushell/renderers/fiori2/search/SearchConfiguration','sap/ushell/renderers/fiori2/search/personalization/PersonalizationStorage','sap/ushell/renderers/fiori2/search/SearchNavigationObject','sap/ushell/renderers/fiori2/search/eventlogging/EventLogger'],function(S,a,b,c,F,d,f,h,P,l,E){sap.ushell.renderers.fiori2.search.getModelSingleton=function(){if(!sap.ushell.renderers.fiori2.search.oModel){sap.ushell.renderers.fiori2.search.oModel=new sap.ushell.renderers.fiori2.search.SearchModel();}return sap.ushell.renderers.fiori2.search.oModel;};var m;var n=sap.ui.model.json.JSONModel.extend("sap.ushell.renderers.fiori2.search.SearchModel",{constructor:function(p){var t=this;p=p||{};sap.ui.model.json.JSONModel.prototype.constructor.apply(t,[]);t.config=h.getInstance();t.setSizeLimit(1000);t.sina=t.config.getSina();this.suggestionQuery=this.sina.createSuggestionQuery();t.suggestionHandler=new d({model:this});t.query=t.sina.createPerspectiveQuery({templateFactsheet:true});if(t.config.multiSelect){t.query.setIncludeFacetsWithFilters(true);}t.setProperty('/uiFilter',t.sina.createFilter());t.resetFilterConditions(false);t.createAllAndAppDataSource();t.query.getResultSet=S.refuseOutdatedRequests(t.query.getResultSet,'search');t.searchApplications=S.refuseOutdatedRequests(t.searchApplications,'search');t.oFacetFormatter=new sap.ushell.renderers.fiori2.search.SearchFacetsFormatter();t.tabStripFormatter=new c.Formatter(t.allDataSource);t.dataSourceTree=t.tabStripFormatter.tree;t.pageSize=10;t.appTopDefault=20;t.boTopDefault=t.pageSize;t.setProperty('/isQueryInvalidated',true);t.setProperty('/isBusy',false);t.setProperty('/tableColumns',[]);t.setProperty('/tableSortableColumns',[]);t.setProperty('/tableResults',[]);t.setProperty('/results',[]);t.setProperty('/appResults',[]);t.setProperty('/boResults',[]);t.setProperty('/origBoResults',[]);t.setProperty('/count',0);t.setProperty('/boCount',0);t.setProperty('/appCount',0);t.setProperty('/facets',[]);t.setProperty('/dataSources',[t.allDataSource,t.appDataSource]);t.setProperty('/currentPersoServiceProvider',null);t.setProperty('/businessObjSearchEnabled',true);t.setProperty('/initializingObjSearch',false);t.setProperty('/suggestions',[]);t.setProperty('/resultToDisplay',S.loadResultViewType());t.setProperty('/displaySwitchVisibility',false);t.setProperty('/documentTitle','Search');t.setProperty('/top',t.boTopDefault);t.setProperty('/orderBy',{});t.setProperty('/facetVisibility',false);t.setProperty('/focusIndex',0);t.setProperty('/fuzzy',false);t.setProperty('/errors',[]);t.setProperty('/isErrorPopovered',false);t.setProperty('/defaultDataSource',t.allDataSource);t.resetDataSource(false);t.setProperty('/multiSelectionAvailable',false);t.setProperty('/multiSelectionEnabled',false);t.setProperty('/multiSelection/actions',[]);t.initBusinessObjSearch();t.eventLogger=E.newInstance({sina:t.sina});},initBusinessObjSearch:function(){var t=this;if(t._initBusinessObjSearchProm){return t._initBusinessObjSearchProm;}t._initBusinessObjSearchProm=$.Deferred();if(!t.config.searchBusinessObjects){t._disableBOSearchAndSetAppSearchAsDefault(t._initBusinessObjSearchProm);}t.setProperty("/initializingObjSearch",true);var e={labelPlural:sap.ushell.resources.i18n.getText("genericLoading"),enabled:false,key:t.getProperty("/uiFilter/dataSource/key"),equals:function(){return true;}};t.setProperty("/dataSource",e);t.setProperty("/dataSources",[e]);t.sina.sinaSystem().getServerInfo().done(function(s){t.serverInfo=s;if(t._isBusinessObjSearchEnabledOnBackend(s)){t.loadDataSources().done(function(){t.setProperty("/initializingObjSearch",false);m=sap.ui.require("sap/ushell/renderers/fiori2/search/SearchShellHelper");m.focusInputField();t.config.loadCustomModulesAsync();t._initBusinessObjSearchProm.resolve();}).fail(function(){t._disableBOSearchAndSetAppSearchAsDefault(t._initBusinessObjSearchProm);});}else{t._disableBOSearchAndSetAppSearchAsDefault(t._initBusinessObjSearchProm);}}).fail(function(){t._disableBOSearchAndSetAppSearchAsDefault(t._initBusinessObjSearchProm);});return t._initBusinessObjSearchProm;},_disableBOSearchAndSetAppSearchAsDefault:function(p){var t=this;t.setDataSource(t.appDataSource,false);t.setProperty('/businessObjSearchEnabled',false);t.setProperty('/facetVisibility',false);t.setProperty('/defaultDataSource',t.appDataSource);if(t.getProperty("/initializingObjSearch")){t.setProperty("/initializingObjSearch",false);}t.config.searchBusinessObjects=false;p.resolve();},_isBusinessObjSearchEnabledOnBackend:function(s){s=s.rawServerInfo;for(var i=0;i<s.Services.length;++i){var e=s.Services[i];if(e.Service.toLowerCase()=='search'){return true;}}return false;},initPersonalization:function(){var t=this;if(this.initPersonalizationPromise){return this.initPersonalizationPromise;}this.initPersonalizationPromise=P.getInstance().then(function(p){var i=false;try{i=p.getItem('search-facet-panel-button-state');}catch(e){}t.setFacetVisibility(i,false);},function(){return jQuery.Deferred().resolve(true);});return this.initPersonalizationPromise;},isBusinessObjSearchConfigured:function(){try{var i=window['sap-ushell-config'].renderers.fiori2.componentData.config;return i.searchBusinessObjects!=='hidden';}catch(e){return true;}},isBusinessObjSearchEnabled:function(){return this.getProperty('/businessObjSearchEnabled');},setProperty:function(e,v,C,A){var t=this;var r=sap.ui.model.json.JSONModel.prototype.setProperty.apply(this,arguments);switch(e){case'/boResults':case'/appResults':t.calculateResultList();break;case'/appCount':case'/boCount':r=t.setProperty('/count',t.getProperty('/appCount')+t.getProperty('/boCount'));break;default:break;}return r;},setFuzzy:function(e){if(e===true){this.query.addOption(g.sinabase.QueryOptions.FUZZY);}else{this.query.removeOption(g.sinabase.QueryOptions.FUZZY);}this.setProperty("/fuzzy",e);},getPersonalizationStorageInstance:function(){return P.getInstanceSync();},getSearchBoxTerm:function(){return this.getProperty('/uiFilter/searchTerms');},setSearchBoxTerm:function(s,e){var t=this;var i=s.replace(/^\s+/,"");this.setProperty('/uiFilter/searchTerms',i);this.calculateSearchButtonStatus();if(i.length===0){return;}if(e||e===undefined){t._firePerspectiveQuery();}},getLastSearchTerm:function(){return this.query.getSearchTerms();},setFacetVisibility:function(v,i){if(sap.ui.Device.system.phone){v=false;}this.setProperty('/facetVisibility',v);try{this.getPersonalizationStorageInstance().setItem('search-facet-panel-button-state',v);}catch(e){}if((i||i===undefined)){this._firePerspectiveQuery({preserveFormerResults:true});}},getFacetVisibility:function(){return this.getProperty('/facetVisibility');},getTop:function(){return this.getProperty('/top');},setTop:function(t,e){this.setProperty('/top',t);if(e||e===undefined){this._firePerspectiveQuery({preserveFormerResults:true});}},resetTop:function(){this.setProperty('/focusIndex',0);if(this.isAppCategory()){this.setTop(this.appTopDefault,false);}else{this.setTop(this.boTopDefault,false);}},getOrderBy:function(){return this.getProperty('/orderBy');},setOrderBy:function(o,e){this.setProperty('/orderBy',o);if(e||e===undefined){this._firePerspectiveQuery({preserveFormerResults:true});}},resetOrderBy:function(e){this.setProperty('/orderBy',{});if(e||e===undefined){this._firePerspectiveQuery({preserveFormerResults:true});}},isEqualOrderBy:function(o,e){if(jQuery.isEmptyObject(o)&&jQuery.isEmptyObject(e)){return true;}else if(o.orderBy===e.orderBy&&o.sortOrder===e.sortOrder){return true;}else{return false;}},getDocumentTitle:function(){var s=this.getSearchBoxTerm();var e=this.getDataSource().label;var t;if(this.getDataSource().equals(this.allDataSource)){t=sap.ushell.resources.i18n.getText('searchTileTitleProposalAll',[s]);}else{t=sap.ushell.resources.i18n.getText('searchTileTitleProposal',[s,e]);}return t;},resetQuery:function(){S.hasher.reset();this.resetTop();this.setSearchBoxTerm('');this.resetDataSource(false);this.resetFilterConditions(false);this.query.resetFilterConditions();this.query.setSearchTerms('random-jgfhfdskjghrtekjhg');this.setProperty('/facets',[]);this.setProperty('/results',[]);this.setProperty('/appResults',[]);this.setProperty('/boResults',[]);this.setProperty('/origBoResults',[]);this.setProperty('/count',0);this.setProperty('/boCount',0);this.setProperty('/appCount',0);},createAllAndAppDataSource:function(){this.allDataSource=this.sina.getRootDataSource();this.allDataSource.label=sap.ushell.resources.i18n.getText("label_all");this.allDataSource.labelPlural=sap.ushell.resources.i18n.getText("label_all");this.appDataSource=this.sina.createDataSource({objectName:"$$APPS$$",label:sap.ushell.resources.i18n.getText("label_apps"),labelPlural:sap.ushell.resources.i18n.getText("label_apps"),type:'Apps',name:'Apps',sina:this.sina});},loadDataSources:function(){var t=this;var p=$.Deferred();t.getServerDataSources().done(function(e){if(!jQuery.isArray(e)||e.length==0){p.reject();}else{e=e.slice();if(!t.config.odataProvider&&t.config.isLaunchpad()){e.splice(0,0,t.appDataSource);e.splice(0,0,t.allDataSource);}else if(e.length==1){t.setDataSource(e[0],false);}else{e.splice(0,0,t.allDataSource);}t.setProperty("/dataSources",e);t.updateDataSourceList(t.getDataSource());t.setProperty("/searchTermPlaceholder",t.calculatePlaceholder());var i=t.getProperty('/uiFilter/dataSource/key');t.setProperty('/uiFilter/dataSource/key','');t.setProperty('/uiFilter/dataSource/key',i);p.resolve();}}).fail(function(){p.reject();});return p;},resetDataSource:function(e){this.setDataSource(this.getDefaultDataSource(),e);},isAllCategory:function(){var e=this.getProperty("/uiFilter/dataSource");return e.equals(this.allDataSource);},isOtherCategory:function(){var e=this.getProperty("/uiFilter/dataSource");return e.getType().toLowerCase()==="category"&&!this.isAllCategory();},isAppCategory:function(){var e=this.getProperty("/uiFilter/dataSource");return e.equals(this.appDataSource);},getDataSource:function(){return this.getProperty("/uiFilter/dataSource");},getDefaultDataSource:function(){return this.getProperty("/defaultDataSource");},setDataSource:function(e,i){this.updateDataSourceList(e);this.getProperty("/uiFilter").setDataSource(e);this.setProperty("/searchTermPlaceholder",this.calculatePlaceholder());this.resetTop();this.calculateSearchButtonStatus();if(i||i===undefined){this._firePerspectiveQuery();}},getServerDataSources:function(){var t=this;if(t.getDataSourcesDeffered){return t.getDataSourcesDeffered;}t.getDataSourcesDeffered=t.sina.getDataSources().then(function(e){return jQuery.grep(e,function(i){return i.getType()!=='Category';});});return t.getDataSourcesDeffered;},notifyFilterChanged:function(){jQuery.each(this.aBindings,function(i,e){if(e.sPath==='/uiFilter/defaultConditionGroup'){e.checkUpdate(true);}});},addFilterCondition:function(e,i){if(e.attribute||e.conditions){this.getProperty("/uiFilter").addFilterCondition(e);}else{this.setDataSource(e,false);}if(i||i===undefined){this._firePerspectiveQuery({preserveFormerResults:false});}this.notifyFilterChanged();},removeFilterCondition:function(e,i){if(e.attribute||e.conditions){this.getProperty("/uiFilter").removeFilterCondition(e);}else{this.setDataSource(e,false);}if(i||i===undefined){this._firePerspectiveQuery({preserveFormerResults:true});}this.notifyFilterChanged();},resetFilterConditions:function(e){this.getProperty("/uiFilter").resetFilterConditions();if(e||e===undefined){this._firePerspectiveQuery();}this.notifyFilterChanged();},doSuggestion:function(){this.suggestionQuery.setFilter(this.getProperty('/uiFilter').clone());this.suggestionHandler.doSuggestion();},abortSuggestions:function(){this.suggestionHandler.abortSuggestions();},_firePerspectiveQuery:function(e,p){var t=this;this.setProperty('/isBusy',true);this.initBusinessObjSearch().then(function(){var i=function(){return t._doFirePerspectiveQuery(e,p);};t.initPersonalization().then(i).always(function(){t.setProperty('/isBusy',false);});});},_doFirePerspectiveQuery:function(e,p){var t=this;var i,j;if(jQuery.isPlainObject(e)){i=e.deserialization;j=e.preserveFormerResults;}else{i=e?e:undefined;j=p?p:undefined;}var u=this.getProperty('/uiFilter');if(u.equals(this.query.getFilter())&&this.getTop()===this.query.getTop()&&this.isEqualOrderBy(this.getOrderBy(),this.query.getOrderBy())&&this.calculateRequestsEntities().length===this.query.requestedEntities.length&&!this.getProperty('/isQueryInvalidated')){return(new jQuery.Deferred()).resolve();}if((this.query.getFilter().getDataSource()&&!u.getDataSource().equals(this.query.getFilter().getDataSource()))||(this.query.getFilter().getSearchTerms()&&u.getSearchTerms()!==this.query.getFilter().getSearchTerms())){this.resetOrderBy(false);}if(!i){if(u.getSearchTerms()!==this.query.getFilter().getSearchTerms()||!u.defaultConditionGroup.equals(this.query.getFilter().defaultConditionGroup)||!u.getDataSource().equals(this.query.getFilter().getDataSource())){this.resetTop();}}if(u.getSearchTerms()!==this.query.getFilter().getSearchTerms()||!u.defaultConditionGroup.equals(this.query.getFilter().defaultConditionGroup)){this.tabStripFormatter.invalidate(this.getDataSource());}if(this.getProperty('/isQueryInvalidated')===true){this.query.resetResultSet();this.setProperty('/isQueryInvalidated',false);}this.query.setFilter(this.getProperty('/uiFilter').clone());this.query.setTop(this.getTop());this.query.setOrderBy(this.getOrderBy());this.query.setRequestedEntities(this.calculateRequestsEntities());this.cleanErrors();this.setProperty("/queryFilter",this.query.getFilter());sap.ui.getCore().getEventBus().publish("allSearchStarted");this.abortSuggestions();S.abortRequests('search');this.calculateVisibility();if(!i){this.updateSearchURLSilently();}this.eventLogger.logEvent({type:this.eventLogger.SEARCH_REQUEST,searchTerm:this.getProperty('/uiFilter/searchTerms'),dataSourceKey:this.getProperty('/uiFilter/dataSource').key});var k=this.getDataSource();return jQuery.when.apply(null,[this.normalSearch(j),this.appSearch()]).then(function(){t.setProperty('/tabStrips',t.tabStripFormatter.format(k,t.perspective,t));return t.oFacetFormatter.getFacets(k,t.perspective,t).then(function(o){if(o&&o.length>0){o[0].change=jQuery.sap.now();t.setProperty('/facets',o);}});}).always(function(){document.title=t.getDocumentTitle();sap.ui.getCore().getEventBus().publish("allSearchFinished");});},calculateRequestsEntities:function(){if(this.getDataSource().getType()==='Category'||this.getFacetVisibility()){return['SearchResults','Facets','TotalCount'];}else{return['SearchResults','TotalCount'];}},appSearch:function(){var t=this;this.setProperty("/appResults",[]);this.setProperty("/appCount",0);if(!this.isAllCategory()&&!this.isAppCategory()){return jQuery.when(true);}var e=this.query.getFilter().getDataSource().equals(this.allDataSource)?this.appTopDefault:this.query.getTop();return this.searchApplications(this.query.getFilter().getSearchTerms(),e,0).then(function(r){t.setProperty("/appCount",r.totalResults);t.setProperty("/appResults",r.getElements());},function(){return jQuery.when(true);});},searchApplications:function(s,t,e){return sap.ushell.Container.getService("Search").queryApplications({searchTerm:s,searchInKeywords:true,top:t,skip:e});},normalSearch:function(p){var t=this;if(!p){t.resetAndDisableMultiSelection();}if(!t.isBusinessObjSearchEnabled()||t.isAppCategory()){this.setProperty("/boResults",[]);this.setProperty('/origBoResults',[]);this.setProperty("/boCount",0);return jQuery.when(true);}t.setFuzzy(false);return this.query.getResultSet().then(function(e){if(e.getSearchResultSet().totalcount<1&&t.serverInfo.services.Search.capabilities.OptionFuzzy&&t.query.getFilter().getSearchTerms()!=='*'){t.setProperty("/boResults",[]);t.setProperty('/origBoResults',[]);t.setProperty("/boCount",0);t.setFuzzy(true);return t.query.getResultSet().then(function(i){t.perspective=i;return t._afterSearchPrepareResultList(t.perspective,p);},function(i){t.normalSearchErrorHandling(i);t.perspective=null;return jQuery.when(true);});}t.perspective=e;return t._afterSearchPrepareResultList(t.perspective,p);},function(e){t.normalSearchErrorHandling(e);t.perspective=null;return jQuery.when(true);});},_prepareTableResults:function(r){var t=this;var e=r;var i,j,o;for(i=0;i<e.length;i++){var p=e[i].itemattributes;if(p.length>0){o=1;for(j=0;j<e[i].itemattributes.length;j++){if(j<=11){e[i].itemattributes[j].indexInTable=o;o++;}}if(!p[0].isTitle){e[i].itemattributes.unshift({name:e[i].dataSourceName,value:e[i].$$Name$$,key:"DATASOURCE_AS_COLUMN_KEY",isTitle:true,isSortable:false,uri:e[i].uri,titleNavigation:e[i].titleNavigation,onlyUsedInTable:true,indexInTable:0});}if(e[i].navigationObjects!==undefined&&e[i].navigationObjects.length>0&&!p[p.length-1].hasIntents){e[i].itemattributes.splice(o,0,{name:sap.ushell.resources.i18n.getText("intents"),navigationObjects:e[i].navigationObjects,key:"RELATED_OBJECTS",isNavigationObjects:true,isSortable:false,onlyUsedInTable:true,indexInTable:o});}}}t.setProperty("/tableResults",e);var q=[];var s=[];var u=e[0];var v="";if(u){var w=u.itemattributes;for(i=0;i<w.length;i++){if(w[i].indexInTable!==undefined&&w[i].key!==undefined){v=w[i].key;q.push({"name":w[i].name,"key":"columnKey"+i,"originalKey":v,"index":w[i].indexInTable});if(w[i].isSortable){s.push({"name":w[i].name,"key":"normalColumn"+i,"originalKey":v,"selected":t.getProperty("/orderBy").orderBy===v});}}}t.setProperty("/tableColumns",q);var x=u.titleattributes;for(var k=x.length-1;k>=0;k--){if(x[k].key!==undefined){v=x[k].key;if(x[k].isSortable){s.unshift({"name":u.dataSourceName===x[k].name?u.dataSourceName:u.dataSourceName+" / "+x[k].name,"key":"titleColumn"+i,"originalKey":v,"selected":t.getProperty("/orderBy").orderBy===v});}}}s.unshift({"name":sap.ushell.resources.i18n.getText("defaultRank"),"key":"ushellSearchDefaultSortItem","originalKey":"ushellSearchDefaultSortItem","selected":jQuery.isEmptyObject(t.getProperty("/orderBy"))});t.setProperty("/tableSortableColumns",s);}},_afterSearchPrepareResultList:function(p,e){var t=this;var i;var k=[];if(e){var _=t.getProperty("/boResults");for(i=0;i<_.length;i++){if(_[i].expanded||_[i].selected){k.push(_[i]);}}}t.setProperty("/boResults",[]);t.setProperty("/origBoResults",p.getSearchResultSet());t.setProperty("/boCount",0);var o=new a();var q=o.format(p.getSearchResultSet(),this.query.filter.searchTerms);var r;var s=[];var u=[];for(i=0;i<q.length;i++){r=q[i];if(r.uri){r.titleNavigation=new l({href:r.uri,positionInList:i});r.titleNavigationIsOldURL=true;}if(!r.navigationObjects){r.navigationObjects=[];}if(r.suvlink&&r.suvlink.value){var v=new l({text:r.suvlink.label,href:r.suvlink.value,target:"_blank",positionInList:i});r.navigationObjects.push(v);}s.push(r.dataSource);u.push({isDocumentConnector:r.isDocumentConnector});}var w=new sap.ushell.renderers.fiori2.search.SearchIntentsResolver(t);var x=w.resolveIntents(q);var y=t.config.loadCustomModulesForDataSourcesAsync(s,u);if(k&&k.length>0){var R=t.sina.ResultElementKeyStatus;var z=[];for(i=0;i<q.length;i++){r=q[i];if(r.keystatus===R.OK){for(var j=0;j<k.length;j++){var A=k[j];if(A.keystatus===R.OK&&A.key===r.key){r.selected=A.selected;r.expanded=A.expanded;k.splice(j,1);break;}}}else{z.push(r);}}if(z.length>0){var B=[];var C="";for(i=0;i<z.length;i++){var D=z[i].dataSource.key;if(jQuery.inArray(D,B)<0){B.push(D);C+=D+"\n";}}t.pushError({type:"warning",title:sap.ushell.resources.i18n.getText("preserveFormerResultErrorTitle"),description:sap.ushell.resources.i18n.getText("preserveFormerResultErrorDetails",C)});}}var G=$.Deferred();Promise.all([x,y]).then(function(){if(!t.isAllCategory()&&!t.isOtherCategory()&&!t.isAppCategory()){t._prepareTableResults(q);}var H=t.getDataSource();if(H.getType().toLowerCase()==="businessobject"){var I=[];for(i=0;i<q.length;i++){var J=q[i];var K=J.semanticObjectType;if(!K){I=[];break;}if(jQuery.inArray(K,I)==-1){I.push(K);}}if(I.length==1){H.semanticObjectType=I[0];}else if(I.length>1){H.semanticObjectTypes=I;}}t.setProperty("/boCount",p.getSearchResultSet().totalcount);t.setProperty("/boResults",q);t.enableOrDisableMultiSelection();G.resolve();});return G.promise();},resetAndDisableMultiSelection:function(){this.setProperty("/multiSelectionAvailable",false);this.setProperty("/multiSelectionEnabled",false);},enableOrDisableMultiSelection:function(){var e=this.getDataSource();var i=this.config.getDataSourceConfig(e);var s=new i.searchResultListSelectionHandlerControl();if(s){this.setProperty("/multiSelectionAvailable",s.isMultiSelectionAvailable());}else{this.setProperty("/multiSelectionAvailable",false);}},_endWith:function(s,e){return s.indexOf(e,s.length-e.length)!==-1;},calculatePlaceholder:function(){var t=this;if(t.isAllCategory()){return sap.ushell.resources.i18n.getText("search");}else{return sap.ushell.resources.i18n.getText("searchInPlaceholder",t.getDataSource().labelPlural);}},updateDataSourceList:function(e){var j=this.getProperty('/dataSources');while(j.length>0&&!j[0].equals(this.allDataSource)){j.shift();}if(e.equals(this.allDataSource)||e.equals(this.appDataSource)){return;}if(e&&e.key){if(e.key.indexOf('~')>=0){return;}}for(var i=0;i<j.length;++i){var k=j[i];if(k.equals(e)){return;}}j.unshift(e);this.setProperty('/dataSources',j);},invalidateQuery:function(){this.setProperty('/isQueryInvalidated',true);},autoStartApp:function(){var t=this;if(t.getProperty("/appCount")&&t.getProperty("/appCount")===1&&t.getProperty("/count")&&t.getProperty("/count")===1){var A=t.getProperty("/appResults");if(A&&A.length>0&&A[0]&&A[0].url&&t.getProperty('/uiFilter/searchTerms')&&A[0].tooltip&&t.getProperty('/uiFilter/searchTerms').toLowerCase().trim()===A[0].tooltip.toLowerCase().trim()){if(A[0].url[0]==='#'){window.location.href=A[0].url;}else{window.open(A[0].url,'_blank');}}}},getResultToDisplay:function(){return this.getProperty('/resultToDisplay');},setResultToDisplay:function(t){this.setProperty('/resultToDisplay',t);S.saveResultViewType(t);},calculateVisibility:function(){var t=this;if(t.isAppCategory()){t.setResultToDisplay("appSearchResult");t.setProperty('/displaySwitchVisibility',false);}else if(t.isAllCategory()||t.isOtherCategory()){t.setResultToDisplay("searchResultList");t.setProperty('/displaySwitchVisibility',false);}else{var r=t.getResultToDisplay();if(!(r==="searchResultList"||r==="searchResultTable"||r==="searchResultMap")){t.setResultToDisplay("searchResultList");}t.setProperty('/displaySwitchVisibility',true);}},calculateSearchButtonStatus:function(){if(this.getDataSource().equals(this.getProperty('/defaultDataSource'))&&this.getSearchBoxTerm().length===0){this.setProperty('/searchButtonStatus','close');}else{this.setProperty('/searchButtonStatus','search');}},calculateResultList:function(){var t=this;var r=[];var e=t.getProperty('/boResults');if(e&&e.length){r.push.apply(r,e);}var i=t.getProperty('/appResults');if(i&&i.length>0){var j={type:'appcontainer',tiles:i};if(r.length>0){if(r.length>3){r.splice(3,0,j);}else{r.push(j);}}else{r=[j];}}sap.ui.model.json.JSONModel.prototype.setProperty.apply(this,['/results',r]);},getDebugInfo:function(){var t=['\n'];if(this.serverInfo){t.push('Search Backend System:');t.push('System:'+this.serverInfo.systemid);t.push('Client:'+this.serverInfo.sapclient);t.push('');}t.push('See also Enterprise Search Setup Documentation:');t.push('http://help.sap.com/saphelp_uiaddon10/helpdata/en/57/7d77c891954c21a19c242694e83177/frameset.htm');return t.join('\n');},getErrors:function(){return this.getProperty('/errors');},cleanErrors:function(){this.setProperty('/errors',jQuery.grep(this.getProperty('/errors'),function(e){return e.keep;}));},pushError:function(e){var t=this;e.title=e.title==="[object Object]"?sap.ushell.resources.i18n.getText('searchError'):e.title;var i=this.getProperty('/errors');i.push(e);t.setProperty('/errors',i);},isInaError:function(i){var j;try{j=jQuery.parseJSON(i.responseText);}catch(e){return false;}if(j&&j.Error){return j;}else{return false;}},normalSearchErrorHandling:function(e){var k=[{errorCode:"ESH_FED_MSG016",ignoreJustForAllConnector:false,resetResultListForAllButAllConnector:true}];if(!e){return;}if(e.status===500){jQuery.sap.log.error(e.responseText);this.pushError({type:"error",title:e.statusText,description:e.responseText+this.getDebugInfo(),keep:e.keep});return;}var o=this.isInaError(e);if(o){var s=true;var p='';var q='';if(e.message){p+=e.message+' ';}if(o.Error){if(o.Error.Message){p+=''+o.Error.Message;}if(o.Error.Code){p+=' (Code '+o.Error.Code+').';}}if(o.ErrorDetails){q+='';for(var i=0;i<o.ErrorDetails.length;i++){q+=o.ErrorDetails[i].Message+' (Code '+o.ErrorDetails[i].Code+')';for(var j=0;j<k.length;j++){if(k[j].errorCode==o.ErrorDetails[i].Code){if(!k[j].ignoreJustForAllConnector||this.isAllCategory()){s=false;}if(k[j].resetResultListForAllButAllConnector){this.setProperty("/boResults",[]);this.setProperty("/boCount",0);}break;}}}}jQuery.sap.log.error(p+' Details: '+q);if(s){this.pushError({type:e.type||"error",title:p,description:q+this.getDebugInfo(),keep:e.keep});}return;}this.pushError({type:"error",title:e.toString(),description:e.toString()+this.getDebugInfo(),keep:e.keep});},createSearchURL:function(){var H="#Action-search";var u=this.getProperty('/uiFilter').getJson();H+="&/searchterm="+encodeURIComponent(u.searchTerms);H+="&datasource="+encodeURIComponent(JSON.stringify(u.dataSource));H+="&top="+this.getTop();H+="&filter="+encodeURIComponent(JSON.stringify(u.defaultConditionGroup));return H;},updateSearchURLSilently:function(){var H=this.createSearchURL();S.hasher.setHash(H);},deserializeURL:function(){if(S.getHashFromUrl().indexOf('#Action-search')!==0){return;}if(!S.hasher.hasChanged()){return;}var p=S.getUrlParameters();if($.isEmptyObject(p)){return;}var u={};if(p.searchterm){u.searchTerms=p.searchterm;}if(p.datasource){u.dataSource=JSON.parse(p.datasource);}else{this.resetDataSource(false);}if(p.top){var t=parseInt(p.top,10);this.setTop(t,false);}this.resetFilterConditions(false);if(p.filter){u.defaultConditionGroup=JSON.parse(p.filter);}this.getProperty("/uiFilter").setJson(u);this.setProperty("/searchTermPlaceholder",this.calculatePlaceholder());if(u.dataSource&&u.dataSource.name&&u.dataSource.name==='Apps'){this.setDataSource(this.appDataSource,false);}this.calculateSearchButtonStatus();this._firePerspectiveQuery(true);}});n.injectSearchShellHelper=function(_){m=m||_;};return n;});})(window);