// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(['sap/ushell/renderers/fiori2/search/SearchHelper'],function(s){"use strict";function S(a,c){this.init.apply(this,arguments);};S.prototype={init:function(a,c,p,o){this.oAdapter=a;this.oContainerInterface=c;this.oLpdService=sap.ushell.Container.getService("LaunchPage");this.optimizedAppSearch=false;if(o&&o.config&&o.config.optimizedAppSearch!==undefined){this.optimizedAppSearch=o.config.optimizedAppSearch;}},isSearchAvailable:function(){return this.oAdapter.isSearchAvailable();},getSina:function(){return this.oAdapter.getSina();},isValid:function(t){if(this.oLpdService.isTileIntentSupported){return this.oLpdService.isTileIntentSupported(t);}else{return true;}},_isTileViewNeeded:function(t){if(this.optimizedAppSearch){return false;}return!this.oLpdService.getCatalogTilePreviewTitle(t)},_getCatalogTiles:function(){var t=this;if(t.allTilesDeferred){return t.allTilesDeferred;}var c=[];t.allTilesDeferred=t.oLpdService.getCatalogs().then(function(d){var D=[];for(var i=0;i<d.length;i++){D.push(t.oLpdService.getCatalogTiles(d[i]));}var o=t._getPersonalizedGroupTiles(new jQuery.Deferred());D.push(o);return jQuery.when.apply(jQuery,D).then(function(){var T=arguments;for(var i=0;i<T.length;i++){var f=T[i];for(var j=0;j<f.length;j++){try{var g,h,k,l,m,n,p,I;g=f[j];h=null;if(t._isTileViewNeeded(g)){h=t.oLpdService.getCatalogTileView(g);}k=t.oLpdService.getCatalogTileKeywords(g);l=t.oLpdService.getCatalogTileTargetURL(g);m=t.oLpdService.getCatalogTilePreviewTitle(g)||t.oLpdService.getCatalogTileTitle(g);n=t.oLpdService.getCatalogTilePreviewSubtitle(g);p=t.oLpdService.getCatalogTileSize(g);I=t.oLpdService.getCatalogTilePreviewIcon(g)||"sap-icon://business-objects-experience";if(t.isValid(g)){c.push({tile:g,keywords:k,url:l,title:m||'',subtitle:n||"",icon:I,size:p});}if(h){h.destroy();}if(g.getContract){var q=g.getContract("preview");if(q){q.setEnabled(false);}}}catch(e){jQuery.sap.log.error(e);}}}c=t._removeDuplicateTiles(c);c.sort(function(a,b){if(a.title.toUpperCase()<b.title.toUpperCase()){return-1;}if(a.title.toUpperCase()>b.title.toUpperCase()){return 1;}return 0;});return c;});});return t.allTilesDeferred;},_getPersonalizedGroupTiles:function(d){var t=this;t.oLpdService.getGroups().then(function(g){var D=[];var G;for(var j=0;j<g.length;j++){G=t.oLpdService.getGroupTiles(g[j])||[];D=D.concat(G);}d.resolve(D);});return d.promise();},_removeDuplicateTiles:function(t){var I={},k,u=[];for(var i=0;i<t.length;++i){var T=t[i];if(!T.url){continue;}k=T.title+T.url+T.icon;if(I[k]===undefined){I[k]=T;u.push(T);}}return u;},_removeTilesWithoutURL:function(t){var T=[];for(var i=0;i<t.length;++i){var o=t[i];if(o.url){T.push(o);}}return T;},_searchTiles:function(p){var a=p.searchTerm;var c=p.aCatalogTiles;var t=p.top||10;var i=p.skip||0;var b=0;var T=new s.Tester(a);var o=new s.Tester(a,'',true);var f=function(h,H){var m=jQuery.extend({},h);m.tooltip=m.title;if(H.length>0){m.label=H;}else{m.label=h.label;}return m;};var d=function(m,h){var n=m.test(h.label);if(n.bMatch===true){b=b+1;return f(h,n.sHighlightedText);}if(h.keywords&&Array.isArray(h.keywords)){n=m.test(h.keywords.join(' '));if(n.bMatch===true){b=b+1;return f(h,'');}}return false;};var r=[];var e=[];var g=[];for(var j=0;j<c.length;j++){var h=c[j];var k='';if(h.subtitle){k=' - '+h.subtitle;}h.label=h.title+k;var l=d(T,h);if(l&&r.length<i+t){r.push(l);continue;}l=d(o,h);if(l&&e.length<i+t){e.push(l);continue;}}g=r;g=g.concat(e);g=g.slice(i,i+t);return{totalResults:b,searchTerm:a,getElements:function(){return g;}};},queryApplications:function(p){var t=this;return this._getCatalogTiles().then(function(c){p.aCatalogTiles=c;return t._searchTiles(p);});},queryApplicationsByTarget:function(a,r){this._getCatalogTiles().done(function(c){var R=[];for(var j=0,l=a&&a.length||0;j<l;j++){var o=a[j],u=sap.ushell.Container.getService("URLParsing");for(var i=0;i<c.length;i++){var t=u.parseShellHash(c[i].url);if(t&&(t.semanticObject===o.semanticObject)&&(t.action===o.action)){R.push(c[i]);break;}}}r(R);});}};S.hasNoAdapter=false;return S;},true);
