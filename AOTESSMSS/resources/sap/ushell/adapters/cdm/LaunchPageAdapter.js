// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/m/Text","sap/m/GenericTile","sap/m/GenericTileMode","sap/ushell/resources","sap/ushell/utils/utilsCdm"],function(T,G,g,r,u){"use strict";function L(U,p,a){var _;this._mResolvedTiles={};this._mResolvedCatalogTiles={};this._mCatalogTilePromises={};this._mFailedResolvedCatalogTiles={};this._mFailedResolvedTiles={};this._mContentProviders={};this.TileType={Tile:"tile",Link:"link"};this.getGroups=function(){var D=new jQuery.Deferred();this._assureLoaded().done(function(e){D.resolve(e);}).fail(function(){D.resolve([]);});return D.promise();};this._getTileFromHashInContextOfSite=function(R,C,I){var D=new jQuery.Deferred(),o=C[I];if(!o){o=R(I);C[I]=o;}o.done(function(e){var n={tileIntent:I,tileResolutionResult:e};D.resolve(n);}).fail(function(e){D.reject("Hash '"+I+"' could not be resolved to a tile. "+e);});return D.promise();};this._getTileFromHash=function(I){var C=sap.ushell.Container.getService("ClientSideTargetResolution");var R=C.resolveTileIntent.bind(C);return this._getTileFromHashInContextOfSite(R,this._mCatalogTilePromises,I);};this._getTileFromHashFromSite=function(s,I){var C=sap.ushell.Container.getService("ClientSideTargetResolution");var e=u.formatSite(s);var R=C.resolveTileIntentInContext.bind(C,e);var o={};return this._getTileFromHashInContextOfSite(R,o,I);};this._getTileForUrl=function(o){var s=o.indicatorDataSource?"#Shell-dynamicTile":"#Shell-staticTile";return{tileIntent:"#",tileResolutionResult:{tileComponentLoadInfo:s,isCustomTile:false}};};this._assureGroupItemsResolved=function(o){var P=[],R,e;if(o.payload&&o.payload.tiles){R=this._assureGroupTilesResolved(o.payload.tiles);Array.prototype.push.apply(P,R);}if(o.payload&&o.payload.links){e=this._assureGroupLinksResolved(o.payload.links,o.identification.id);Array.prototype.push.apply(P,e);}return P;};this._assureGroupTilesResolved=function(e){return(e||[]).map(function(o,I){return this._getResolvedTile(o,I).then(function(R){R.isLink=false;return R;});},this);};this._assureGroupLinksResolved=function(e,s){return(e||[]).map(function(o,I){return this._getResolvedTile(o,I).then(function(R){R.isLink=true;return R;});},this);};this._prepareTileHash=function(o){var e=sap.ushell.Container.getService("URLParsing"),P={},n,R;if(this._isCatalogTile(o)){return o.tileIntent;}if(this._isGroupTile(o)){R=o.target.parameters||[];R.forEach(function(q){if(q.name&&q.value){P[q.name]=[q.value];}});n={target:{semanticObject:o.target.semanticObject,action:o.target.action},params:P,appSpecificRoute:o.target.appSpecificRoute};return"#"+e.constructShellHash(n);}return undefined;};this._allPromisesDone=function(P){var D=new jQuery.Deferred(),o;if(P.length===0){D.resolve([]);}else{var n=P.map(function(e){o=new jQuery.Deferred();e.always(o.resolve.bind(o));return o.promise();});jQuery.when.apply(this,n).done(function(){var A=Array.prototype.slice.call(arguments);D.resolve(A);});}return D.promise();};this._generateDefaultGroup=function(){var s,o,D=new jQuery.Deferred(),C=sap.ushell.Container.getService("CommonDataModel");C.getSite().done(function(S){s=sap.ushell.utils.generateUniqueId(S.site.payload.groupsOrder);o={"identification":{"id":s,"namespace":"","title":"Home"},"payload":{"isDefaultGroup":true,"locked":false,"tiles":[],"links":[],"groups":[]}};_=o;S.groups[s]=o;S.site.payload.groupsOrder.unshift(s);D.resolve(o);}).fail(function(e){D.reject("Failed to access site. "+e);});return D.promise();};this._assureLoaded=function(){var e=this,C=sap.ushell.Container.getService("CommonDataModel"),D,n=[],o;if(this._assureLoadedDeferred){return this._assureLoadedDeferred.promise();}o=new jQuery.Deferred();this._assureLoadedDeferred=o;C.getSite().done(function(s){var I=[];s.site.payload.groupsOrder.forEach(function(q,v){var w=s.groups[q];if(w){w.payload=w.payload||{};if(w.payload.hasOwnProperty("isDefaultGroup")){_=w;}n.push(w);I=e._assureGroupItemsResolved(w).concat(I);}});if(_===undefined){D=e._generateDefaultGroup();I.push(D);D.done(function(q){n.unshift(q);}).fail(function(E){jQuery.sap.log.error("Delivering hompage groups failed - "+E);e._assureLoadedDeferred.resolve([]);});}e._allPromisesDone(I).done(function(){e._assureLoadedDeferred.resolve(n);delete e._assureLoadedDeferred;});}).fail(function(E){jQuery.sap.log.error("Delivering hompage groups failed - "+E);e._assureLoadedDeferred.resolve([]);delete e._assureLoadedDeferred;});return o.promise();};this.getDefaultGroup=function(){var D=new jQuery.Deferred(),A;if(!_){A=this._assureLoaded();}if(A){A.done(function(){D.resolve(_);}).fail(function(M){D.reject("Failed to access default group. "+M);});}else{D.resolve(_);}return D.promise();};this._isValidTitle=function(s){if(typeof s!=='string'||!s){return false;}return true;};this._isGroupPreset=function(o){if(!o.payload.hasOwnProperty("isPreset")){return true;}return!!o.payload.isPreset;};this._isGroupLocked=function(o){return!!o.payload.locked;};this.addGroup=function(s){var D=new jQuery.Deferred(),C=sap.ushell.Container.getService("CommonDataModel"),o,e,n,q=this;if(!this._isValidTitle(s)){return D.reject("No valid group title").promise();}n="Failed to add the group with title '"+s+"' to the homepage. ";C.getSite().done(function(S){e=sap.ushell.utils.generateUniqueId(S.site.payload.groupsOrder);o={"identification":{"id":e,"namespace":"","title":s},"payload":{"locked":false,"isPreset":false,"tiles":[],"links":[],"groups":[]}};S.groups[e]=o;S.site.payload.groupsOrder.push(o.identification.id);C.save().done(function(){delete q._assureLoadedDeferred;D.resolve(S.groups[e],e);}).fail(function(E){D.reject(E);});}).fail(function(E){D.reject(n+E);});return D.promise();};this.getGroupTitle=function(o){return o.identification.title;};this.setGroupTitle=function(o,n){var e=this,D=new jQuery.Deferred(),C=sap.ushell.Container.getService("CommonDataModel"),O,s;if(typeof o!=='object'||!o.identification||!o.identification.id){return D.reject("Unexpected group value").promise();}if(!e._isValidTitle(n)){return D.reject("Unexpected oGroup title value").promise();}s="Failed to set new title for group with id '"+o.identification.id+"'. ";O=o.identification.title;C.getSite().done(function(S){if(S.groups[o.identification.id]){S.groups[o.identification.id].identification.title=n;}C.save().done(function(){D.resolve();}).fail(function(E){jQuery.sap.log.error(E);D.reject(O);});}).fail(function(E){D.reject(O,s+E);});return D.promise();};this.getGroupId=function(o){return o.identification.id;};this.hideGroups=function(H){var D=new jQuery.Deferred(),C=sap.ushell.Container.getService("CommonDataModel"),s;if(H&&jQuery.isArray(H)){s="Failed to hide group. ";C.getSite().done(function(S){if(H.length>0){Object.keys(S.groups).forEach(function(e){if(jQuery.inArray(S.groups[e].identification.id,H)>-1){S.groups[e].identification.isVisible=false;}else{delete S.groups[e].identification.isVisible;}});}if(H.length===0){Object.keys(S.groups).forEach(function(e){delete S.groups[e].identification.isVisible;});}C.save().done(function(){D.resolve();}).fail(function(e){D.reject("Hiding of groups did not work as expected - "+e);});}).fail(function(e){D.reject(s+e);});}else{D.reject("Invalid input parameter aHiddenGroupIds. Please pass a valid input parameter.");}return D.promise();};this.isGroupVisible=function(o){if(o.identification.isVisible===undefined||o.identification.isVisible===true){return true;}else{return false;}};this.moveGroup=function(o,n){var D=new jQuery.Deferred(),C=sap.ushell.Container.getService("CommonDataModel"),e,s;if(!o||!o.identification||!o.identification.id||n<0){return D.reject("Unable to move groups - invalid parameters").promise();}s="Failed to move group with id '"+o.identification.id+"'. ";C.getSite().done(function(S){if(!S.site.payload.groupsOrder){return D.reject("groupsOrder not found - abort operation of adding a group.");}else if(S.site.payload.groupsOrder.indexOf(o.identification.id)===n){return D.resolve();}e=sap.ushell.utils.moveElementInsideOfArray(S.site.payload.groupsOrder,S.site.payload.groupsOrder.indexOf(o.identification.id),n);if(!e){return D.reject("invalid move group operation - abort.");}C.save().done(function(){D.resolve();}).fail(function(E){D.reject(E);});}).fail(function(E){D.reject(s+E);});return D.promise();};this.removeGroup=function(o){var D=new jQuery.Deferred(),C=sap.ushell.Container.getService("CommonDataModel"),s;if(!o||typeof o!=="object"||!o.identification||!o.identification.id){return D.reject("no valid input parameter for 'oGroup'").promise();}s="Failed to remove group with id '"+o.identification.id+"'. ";C.getSite().done(function(S){if(S&&S.groups&&S.groups[o.identification.id]){delete S.groups[o.identification.id];}if(S&&S.site&&S.site.payload&&S.site.payload.groupsOrder){S.site.payload.groupsOrder=jQuery.grep(S.site.payload.groupsOrder,function(e){return e!==o.identification.id;});}C.save().done(function(){D.resolve();}).fail(function(e){D.reject(e);});}).fail(function(e){D.reject(s+e);});return D.promise();};this.resetGroup=function(o){var D=new jQuery.Deferred(),C=sap.ushell.Container.getService("CommonDataModel"),s={},e=this,n;if(o&&typeof o==="object"&&o.identification&&o.identification.id){n="Failed to reset group with id '"+o.identification.id+"'. ";C.getSite().done(function(S){jQuery.extend(true,s,S.groups);if(e.isGroupRemovable(o)===false){C.getGroupFromOriginalSite(o.identification.id).done(function(q){if(S&&typeof S==="object"&&S.groups&&S.groups[o.identification.id]){S.groups[o.identification.id]=q;}C.save().done(function(){D.resolve(q);}).fail(function(E){D.reject("Group could not be reset - "+E,s);});}).fail(function(E){D.reject("Group could not be reset - "+E,s);});}else{D.reject("Group could not be reset as it was created by the user",s);}}).fail(function(E){D.reject(n+E,s);});}return D.promise();};this.getTileTitle=function(o){var R;if(o&&o.isBookmark){return o.title;}R=this._mResolvedTiles[o.id];if(R){return o.title||R.tileResolutionResult.title;}else{return"";}};this.getTileSubtitle=function(o){var R;if(o.isBookmark){return o.subTitle;}R=this._mResolvedTiles[o.id];return o.subTitle||R.tileResolutionResult.subTitle;};this.getTileIcon=function(o){var R;if(o.isBookmark){return o.icon;}R=this._mResolvedTiles[o.id];return o.icon||R.tileResolutionResult.icon;};this.getTileInfo=function(o){var R;if(o.isBookmark){return o.info;}R=this._mResolvedTiles[o.id];return o.info||R.tileResolutionResult.info;};this.getTileIndicatorDataSource=function(o){var R=this._mResolvedTiles[o.id];var e={};var n;if(o.indicatorDataSource){e.indicatorDataSource=o.indicatorDataSource;if(o.dataSource){e.dataSource=o.dataSource;}return e;}if(R){n=R.tileResolutionResult;if(n.indicatorDataSource){e.indicatorDataSource=n.indicatorDataSource;}if(n.dataSource){e.dataSource=n.dataSource;}}return e;};this.isGroupRemovable=function(o){return!this._isGroupPreset(o);};this.isGroupLocked=function(o){return this._isGroupLocked(o);};this.getGroupTiles=function(o){var e=o.payload.tiles||[];if(o.payload.links&&jQuery.isArray(o.payload.links)&&o.payload.links.length>0){e=e.concat(o.payload.links);}return e;};this.getLinkTiles=function(o){if(o.payload.links&&jQuery.isArray(o.payload.links)&&o.payload.links.length>0){return o.payload.links;}else{return[];}};this.getTileType=function(o){var R=this._mResolvedTiles[o.id];if(R&&R.isLink){return this.TileType.Link;}return this.TileType.Tile;};this.getTileId=function(o){return o.id;};this.getTileSize=function(o){var R=this._mResolvedTiles[o.id];if(R&&R.tileResolutionResult&&R.tileResolutionResult.size){return R.tileResolutionResult.size;}return"1x1";};this.getTileTarget=function(o){var R,e=this._mResolvedTiles[o.id],s;if(o.target&&o.target.url){return o.target.url;}if(e&&e.tileResolutionResult){R=e.tileResolutionResult;if(R.isCustomTile!==true){return e.tileIntent;}if(R&&typeof R.targetOutbound==="object"){s=this._toHashFromOutbound(R.targetOutbound);if(s){return s;}}}jQuery.sap.log.warning("Could not find a target for Tile with id '"+o.id+"'","sap.ushell.adapters.cdm.LaunchPageAdapter");return"";};this.isLinkPersonalizationSupported=function(o){return true;};this.isTileIntentSupported=function(o){return(this._mFailedResolvedTiles[o.id]===undefined)?true:false;};this.refreshTile=function(o){};this.setTileVisible=function(o,n){var R=this._mResolvedTiles[o.id];if(R&&R.tileComponent&&typeof R.tileComponent.tileSetVisible==="function"){if(R.visibility!==n){R.visibility=n;R.tileComponent.tileSetVisible(n);}}};this.getTileView=function(o){var A=this;return new jQuery.Deferred(function(D){return A._getTileView(o,false).then(function(e){D.resolve(e);},function(R){var e="Tile with ID '"+o.id+"' could not be initialized"+(R?":\n"+R:".");jQuery.sap.log.error(e,null,o.tileType);D.reject(e);});}).promise();};this._getResolvedTile=function(o,I){var H;var s=this._mResolvedTiles;var F=this._mFailedResolvedTiles;function e(R){s[o.id]=R;if(F[o.id]){delete F[o.id];}return R;}if(s[o.id]){return(new jQuery.Deferred()).resolve(s[o.id]).promise();}if(o.target&&o.target.url){return new jQuery.Deferred().resolve(e(this._getTileForUrl(o))).promise();}H=this._prepareTileHash(o,I);return this._getTileFromHash(H).then(e,function(E){F[o.id]=E;return E;});};this._getTileUiComponentContainer=function(o,R,I){var e=this,n,q,N,s,C;var v=sap.ushell.Container.getService("Ui5ComponentLoader");if(I===true){q=e._createTileComponentData(o,true,R);}else{q=e._createTileComponentData(o,false,R);}n=R.tileResolutionResult;if(R.isLink){N=n.navigationMode;var D=new jQuery.Deferred();D.resolve(e._createLinkInstance(o,I,N,G,r));return D.promise();}var w=this._createTileComponentProperties(q,n.tileComponentLoadInfo);if(!w.name){return new jQuery.Deferred().reject("Cannot find name of tile component for tile with id: '"+o.id+"'").promise();}if(w.manifest){q.properties=q.properties||{};q.properties.manifest=w.manifest;}return v.createComponent({loadCoreExt:true,loadDefaultDependencies:false,componentData:q,url:w.url,applicationConfiguration:{},reservedParameters:{},applicationDependencies:w,ui5ComponentName:w.name},{},[]).then(function(A){s=A.componentHandle.getInstance();C=new sap.ui.core.ComponentContainer({component:s,height:'100%'});if(I===true){e._mResolvedCatalogTiles[o.id].tileComponent=s;}else{e._mResolvedTiles[o.id].tileComponent=s;}return C;});};this._createTileComponentProperties=function(o,v){var e={};if(typeof v==="string"){if(o.properties.indicatorDataSource&&o.properties.indicatorDataSource.path){e.name="sap.ushell.components.tiles.cdm.applauncherdynamic";}else{e.name="sap.ushell.components.tiles.cdm.applauncher";}return e;}if(typeof v==="object"&&v!==null){e=v.componentProperties||{};e.name=v.componentName;}return e;};this._getTileView=function(o){var e=this,n,s,E,D=new jQuery.Deferred();if(typeof o!=="object"||!o.id){E="Invalid input parameter passed to _getTileView: "+o;jQuery.sap.log.error(E);return D.reject(E).promise();}s=this._prepareTileHash(o);n=(o.id&&this._mResolvedTiles[o.id])||this._getTileFromHash(s);return jQuery.when(n).then(function(R){if(e._mResolvedTiles.hasOwnProperty(o.id)===false){e._mResolvedTiles[o.id]=R;}return e._getTileUiComponentContainer(o,R,false);});};this._getCatalogTileView=function(C){if(typeof C!=="object"){return new jQuery.Deferred().reject(C);}return this._getTileUiComponentContainer(C,C,true);};this._createTileComponentData=function(o,I,R){var s=I?this.getCatalogTileTitle(o):this.getTileTitle(o),S=I?this.getCatalogTilePreviewSubtitle(o):this.getTileSubtitle(o),e=I?this.getCatalogTilePreviewIcon(o):this.getTileIcon(o),n=I?this.getCatalogTilePreviewInfo(o):this.getTileInfo(o),q=I?this.getCatalogTileTargetURL(o):this.getTileTarget(o),v=this.getTileIndicatorDataSource(o),C={properties:{},startupParameters:{}};if(R.tileResolutionResult.isCustomTile===true&&R.tileResolutionResult.startupParameters){C.startupParameters=R.tileResolutionResult.startupParameters;}if(s){C.properties.title=s;}if(n){C.properties.info=n;}if(S){C.properties.subtitle=S;}if(e){C.properties.icon=e;}if(q){C.properties.targetURL=q;}if(v.indicatorDataSource){C.properties.indicatorDataSource=v.indicatorDataSource;if(v.dataSource){C.properties.dataSource=v.dataSource;}}if(R.tileResolutionResult){C.properties.navigationMode=R.tileResolutionResult.navigationMode;}return C;};this._createLinkInstance=function(o,I,n,e,r){var s,q,v,w=this.getTileSubtitle(o);var G=e;if(I===true){s=this.getCatalogTileTitle(o);}else{s=this.getTileTitle(o);}q=new G({mode:g.LineMode,subheader:w,header:s,press:function(E){this._genericTilePressHandler(o,E);}.bind(this)});if(n){v=r.i18n.getText(n+"NavigationMode");q.setAriaLabel(v+" "+s+" "+w);}this._mResolvedTiles[o.id].linkTileControl=q;return q;};this._genericTilePressHandler=function(o,e){var s;if(e.getSource().getScope&&e.getSource().getScope()==="Display"){s=this.getTileTarget(o);if(s){if(s[0]==='#'){hasher.setHash(s);}else{window.open(s,'_blank');}}}};this._addTileToSite=function(P,o,n,C){var e=this,D=new jQuery.Deferred(),I=sap.ushell.Container.getService("URLParsing").parseShellHash(n.properties.targetURL),q={"id":e.getTileId(n),"target":{"semanticObject":I.semanticObject,"action":I.action,"parameters":m(I.params)}};P.groups[o.identification.id].payload.tiles.push(q);C.save().done(function(){D.resolve(q);}).fail(function(M){D.reject(M);});return D.promise();};this.addTile=function(C,o){if(!o){o=_;}var D=new jQuery.Deferred(),e=this,s;if(C.contentProviderId){if(C.externalUrl){return this.addBookmark(this._getBookmarkDataForExtensionCatalogTile(C),o);}return D.reject("Extension Tile without URL").promise();}var H=e.getCatalogTileTargetURL(C);var n=sap.ushell.Container.getService("URLParsing");var I=n.parseShellHash(H);var q=f({},l(I));s="Failed to add tile with id '"+q.id+"' to group with id '"+o.identification.id+"'. ";e._getTileFromHash(H).fail(function(E){e._mFailedResolvedTiles[q.id]=E;}).done(function(v){e._mResolvedTiles[q.id]=v;var w=sap.ushell.Container.getService("CommonDataModel");w.getSite().done(function(S){S.groups[o.identification.id].payload.tiles.push(q);w.save().done(function(){D.resolve(q);}).fail(function(R){D.reject(R);});}).fail(function(E){D.reject(s+E);});});return D.promise();};this._getBookmarkDataForExtensionCatalogTile=function(e){var B={title:e.tileResolutionResult.title,subtitle:e.tileResolutionResult.subTitle,icon:e.tileResolutionResult.icon,info:e.tileResolutionResult.info,url:e.externalUrl};if(e.tileResolutionResult.indicatorDataSource&&e.tileResolutionResult.indicatorDataSource.path){B.serviceUrl=e.tileResolutionResult.indicatorDataSource.path;B.serviceRefreshInterval=e.tileResolutionResult.indicatorDataSource.refresh;}return B;};this.removeTile=function(o,n,I){var C,s,D=new jQuery.Deferred(),q=this;if(!o||typeof o!=="object"||!o.identification||!o.identification.id||!n||typeof n!=="object"||!n.id){return D.reject({},"Failed to remove tile. No valid input parameters passed to removeTile method.").promise();}s="Failed to remove tile with id '"+n.id+"' from group with id '"+o.identification.id+"'. ";C=sap.ushell.Container.getService("CommonDataModel");C.getSite().done(function(S){var P,v;I=+I;try{P=S.groups[o.identification.id].payload;}catch(e){D.reject(S.groups[o.identification.id],s);}v=q.getTileType(n)===q.TileType.Link?"links":"tiles";if(q.getTileType(n)===q.TileType.Link){I-=P.tiles.length;}if(I>=0){P[v].splice(I,1);}else{P[v]=P[v].filter(function(w){return w.id!==n.id;});}C.save().done(function(){D.resolve();}).fail(function(E){jQuery.sap.log.error(E);D.reject(S.groups[o.identification.id],E);});}).fail(function(e){D.reject({},s+e);});return D.promise();};this.moveTile=function(o,s,e,S,n,q){var D=new jQuery.Deferred(),C=sap.ushell.Container.getService("CommonDataModel"),v=this,w;if(!o||jQuery.isEmptyObject(o)||s===undefined||s<0||e===undefined||e<0||!S||!S.identification||!S.identification.id||!n||!n.identification||!n.identification.id){return D.reject("Invalid input parameters").promise();}w="Failed to move tile with id '"+o.id+"'. ";C.getSite().done(function(x){var y,z,O=v.getTileType(o)===v.TileType.Link?"links":"tiles";if(!q){q=v._mResolvedTiles[o.id].isLink?"link":"tile";}y=q==="link"?"links":"tiles";if(O!=y&&v._mResolvedTiles[o.id]){v._mResolvedTiles[o.id].isLink=q==="link";}if(y==="links"){e-=x.groups[n.identification.id].payload.tiles.length;}if(O==="links"){s-=x.groups[S.identification.id].payload.tiles.length;}if(S.identification.id===n.identification.id){if(s!==e||O!=y){z=x.groups[n.identification.id].payload;if(O==="tiles"){e++;}z[O].splice(s,1);z[y].splice(e,0,o);}else{return D.resolve(o).promise();}}else{x.groups[S.identification.id].payload[O].splice(s,1);x.groups[n.identification.id].payload[y].splice(e,0,o);}C.save().done(function(){D.resolve(o);}).fail(function(E){jQuery.sap.log.error(w+E);D.reject(w+E);});}).fail(function(E){jQuery.sap.log.error(w+E);D.reject(w+E);});return D.promise();};this._compareCatalogs=function(A,B){if(A.identification.id>B.identification.id){return 1;}return-1;};this.getCatalogs=function(){var e=this,D=new jQuery.Deferred(),C=[],o=sap.ushell.Container.getService("CommonDataModel");function n(q,s,C,v,P,w){var x=q.catalogs[s];x.id=s;if(P&&w){x.contentProviderId=P;w.catalogsMap[s]=x;}C.push(x);v.notify(x);}window.setTimeout(function(){o.getSite().done(function(s){Object.keys(s.catalogs).forEach(function(q){n(s,q,C,D);});o.getExtensionSites().progress(function(q){var P=q.providerId;var E=q.site;var v=Promise.resolve(E);var w={sitePromise:v,site:E,catalogsMap:{}};Object.keys(E.catalogs).forEach(function(x){e._mContentProviders[P]=w;n(E,x,C,D,P,w);});}).done(function(q){q.filter(function(v){return!v.success;}).forEach(function(F,I){C.push({identification:{id:F.providerId},contentProviderId:F.providerId,error:"The following content providers could not provide catalogs: "+F.providerId+(F.error?" -> "+F.error:"")});});D.resolve(C.sort(e._compareCatalogs));});});},0);return D.promise();};this._isStartableInbound=function(I){if(!jQuery.sap.getObject("signature.parameters",undefined,I)){return true;}var R=Object.keys(I.signature.parameters).every(function(p){return!I.signature.parameters[p].filter||(p==="sap-external-url");});return R;};this._isHiddenInbound=function(I){return!!I.hideLauncher;};this._toHashFromInbound=function(I){var s,P,C;s={target:{semanticObject:I.semanticObject,action:I.action},params:{}};P=jQuery.sap.getObject("signature.parameters",undefined,I)||{};Object.keys(P).forEach(function(K){if(P[K].filter&&Object.prototype.hasOwnProperty.call(P[K].filter,"value")&&(P[K].filter.format===undefined||P[K].filter.format==="plain")){s.params[K]=[P[K].filter.value];}if(P[K].launcherValue&&Object.prototype.hasOwnProperty.call(P[K].launcherValue,"value")&&(P[K].launcherValue.format===undefined||P[K].launcherValue.format==="plain")){s.params[K]=[P[K].launcherValue.value];}});C=sap.ushell.Container.getService("URLParsing").constructShellHash(s);if(!C){return undefined;}return"#"+C;};this._getExternalUrlFromInbound=function(I){return jQuery.sap.getObject("signature.parameters.sap-external-url.launcherValue.value",undefined,I)||null;};this._toHashFromOutbound=function(o){var s,P,C;s={target:{semanticObject:o.semanticObject,action:o.action},params:{}};P=o.parameters||{};Object.keys(P).forEach(function(K){if(P.hasOwnProperty(K)&&typeof P[K].value==="object"){s.params[K]=[P[K].value.value];}});C=sap.ushell.Container.getService("URLParsing").constructShellHash(s);if(!C){return undefined;}return"#"+C;};this._isCustomTile=function(A){if(sap.ushell.utils.getMember(A,"sap|flp.type")==="tile"){return true;}return false;};this.getCatalogTiles=function(C){var e=this,D=new jQuery.Deferred();if(typeof C!=="object"||C===null){return D.reject("Invalid input parameter '"+C+"' passed to getCatalogTiles.").promise();}if(C.contentProviderId&&this._mContentProviders[C.contentProviderId]){this._mContentProviders[C.contentProviderId].sitePromise.then(function(s){c.call(e,C,s).done(D.resolve).fail(D.reject);},function(E){D.reject("Failed to get site: "+E);});}else{sap.ushell.Container.getService("CommonDataModel").getSite().done(function(s){c.call(e,C,s).done(D.resolve).fail(D.reject);}).fail(function(E){D.reject("Failed to get site: "+E);});}return D.promise();};function b(I){return Object.keys(I).map(function(K){var o=I[K];return{intent:o.semanticObject+"-"+o.action,inbound:o};}).sort(function(o,e){if(o.intent===e.intent){return 0;}return o.intent<e.intent?-1:1;}).reduce(function(e,o){var n=e.length;if(n===0){e.push(o);return e;}if(e[n-1].intent!==o.intent){e.push(o);return e;}return e;},[]).map(function(o){return o.inbound;});}function c(C,s){var e=this,D=new jQuery.Deferred(),n=[],o;C.payload=C.payload||{};(C.payload.appDescriptors||[]).forEach(function(A){var q=s.applications[A.id];var I=e._getMember(q,"sap|app.crossNavigation.inbounds")||{};var v=b(I);var R=v.filter(function(w){return e._isStartableInbound(w)&&!e._isHiddenInbound(w);}).map(function(w){var x=e._toHashFromInbound(w,q);if(e._mResolvedCatalogTiles[x]||e._mFailedResolvedCatalogTiles[x]){if(e._mResolvedCatalogTiles.hasOwnProperty(x)){return new jQuery.Deferred().resolve(e._mResolvedCatalogTiles[x]).promise();}jQuery.sap.log.error(e._mFailedResolvedCatalogTiles[x],"sap.ushell.adapters.cdm.LaunchPageAdapter");return new jQuery.Deferred().reject(e._mFailedResolvedCatalogTiles[x]).promise();}if(C.contentProviderId){o=e._getTileFromHashFromSite(s,x);}else{o=e._getTileFromHash(x);}return o.done(function(y){var E;y.id=x;if(C.contentProviderId){y.contentProviderId=C.contentProviderId;E=e._getExternalUrlFromInbound(w);if(E){y.id=E;y.externalUrl=E;e._mResolvedCatalogTiles[y.id]=y;}}e._mResolvedCatalogTiles[x]=y;}).fail(function(E){jQuery.sap.log.error(E,"sap.ushell.adapters.cdm.LaunchPageAdapter");e._mFailedResolvedCatalogTiles[x]=E;});});n=n.concat(R);});e._allPromisesDone(n).done(function(q){var S=q.filter(function(v){return typeof v!=="string";});D.resolve(S);}).fail(function(E){if(C.identification&&C.identification.id){D.reject("Failed to deliver tiles for catalog '"+C.identification.id+"'. "+E);}});return D.promise();}this.getCatalogError=function(C){if(C.error){return C.error;}return;};this.getCatalogId=function(C){return C.identification.id;};this.getCatalogTitle=function(C){return C.identification.title;};this._isGroupTile=function(o){return!!(o&&o.id&&o.target);};this._isCatalogTile=function(o){return!!(o&&o.id&&o.tileIntent&&o.tileResolutionResult);};this._isFailedGroupTile=function(o){return!!(o&&this._mFailedResolvedTiles&&this._mFailedResolvedTiles[o.id]);};this._isFailedCatalogTile=function(o){return!!(o&&this._mFailedResolvedCatalogTiles&&this._mFailedResolvedCatalogTiles[o.id]);};this.getCatalogTileId=function(o){if(this._isGroupTile(o)){if(this._isFailedGroupTile(o)){return undefined;}if(o.isBookmark&&jQuery.sap.getObject("target.url",undefined,o)){return o.target.url;}return(this._mResolvedTiles[o.id]||{}).tileIntent;}if(this._isCatalogTile(o)){return o.id;}};this.getCatalogTileTitle=function(o){if(this._isGroupTile(o)){if(this._isFailedGroupTile(o)){return"";}return this._mResolvedTiles[o.id].tileResolutionResult.title;}if(this._isCatalogTile(o)){if(this._isFailedCatalogTile(o)){return undefined;}return o.tileResolutionResult.title;}};this.getCatalogTileSize=function(C){return this.getTileSize(C);};this.getCatalogTileView=function(C){return this._getCatalogTileView(C);};this.getCatalogTileTargetURL=function(o){if(!o){throw new Error("The given tile is falsy");}return this.getCatalogTileId(o);};this.getCatalogTilePreviewTitle=function(o){if(this._isGroupTile(o)){return this.getTileTitle(o);}return(o.tileResolutionResult&&o.tileResolutionResult.title)||"";};this.getCatalogTilePreviewSubtitle=function(o){if(this._isGroupTile(o)){return this.getTileSubtitle(o);}return(o.tileResolutionResult&&o.tileResolutionResult.subTitle)||"";};this.getCatalogTilePreviewIcon=function(o){if(this._isGroupTile(o)){return this.getTileIcon(o);}return(o.tileResolutionResult&&o.tileResolutionResult.icon)||"";};this.getCatalogTilePreviewInfo=function(o){if(this._isGroupTile(o)){return this.getTileInfo(o);}return(o.tileResolutionResult&&o.tileResolutionResult.info)||"";};this.getCatalogTileKeywords=function(o){var K=[],R=o;if(!R){jQuery.sap.log.error("Could not find the Tile","sap.ushell.adapters.cdm.LaunchPageAdapter");return K;}if(this._mResolvedTiles&&this._mResolvedTiles[o.id]){R=this._mResolvedTiles[o.id];}if(R&&R.tileResolutionResult&&R.tileResolutionResult.title){K.push(R.tileResolutionResult.title);}if(R&&R.tileResolutionResult&&R.tileResolutionResult.subTitle){K.push(R.tileResolutionResult.subTitle);}return K;};this._visitBookmarks=function(s,v){var C=sap.ushell.Container;var o=C.getService("URLParsing");var e=C.getService("CommonDataModel");var R;var I=o.parseShellHash(s);if(I){R=l(I);}else{R=k(s);}return e.getSite().then(function(S){var n=S.groups;var q=Object.keys(n).filter(function(K){return!n[K].payload.locked;}).map(function(K){return n[K].payload.tiles.filter(function(w){return w.isBookmark&&i(R,w.target);});}).reduce(function(A,w){Array.prototype.push.apply(A,w);return A;},[]);if(!v){return q.length;}return jQuery.when(q.map(v)).then(function(){return q.length;});});};this.addBookmark=function(P,o){var e=this;return new jQuery.Deferred(function(D){var C=sap.ushell.Container;var n=C.getService("URLParsing");var q=C.getService("CommonDataModel");jQuery.when(o||e.getDefaultGroup(),q.getSite()).done(function(o,s){var v,w,I=n.parseShellHash(P.url),N,R,x=false;if(!I){w=k(P.url);x=true;}else{w=l(I);}v=d(P,w);if(x){R=new jQuery.Deferred();R.resolve(e._getTileForUrl(v));}else{R=e._getTileFromHash(P.url);}R.done(function(N){N.isLink=false;e._mResolvedTiles[v.id]=N;s.groups[o.identification.id].payload.tiles.push(v);q.save().done(function(){D.resolve(v);}).fail(function(y){D.reject(y);});}).fail(function(E){D.reject("Bookmark creation failed because: "+E);});}).fail(function(R){D.reject(R);});}).promise();};this.countBookmarks=function(s){return this._visitBookmarks(s);};this.updateBookmarks=function(s,P){var C=sap.ushell.Container;var o=C.getService("URLParsing");var e=C.getService("CommonDataModel");var R=this._mResolvedTiles;function n(q){return new jQuery.Deferred(function(D){var I,N;var v;var w=false;var x={};if(P.url||P.url===""){I=o.parseShellHash(P.url);if(!I){N=k(P.url);}else{N=l(I);}}if(q.icon!==P.icon){x.icon=P.icon;w=true;}if(q.title!==P.title){x.title=P.title;w=true;}if(q.subTitle!==P.subtitle){x.subtitle=P.subtitle;w=true;}if(P.url&&s!==P.url){x.targetURL=P.url;w=true;}if(q.info!==P.info){x.info=P.info;w=true;}h(q,P,N);if(w&&R[q.id]){v=R[q.id].tileComponent;v.tileSetVisualProperties(x);}D.resolve(q);}).promise();}return this._visitBookmarks(s,n).then(function(q){return e.save().then(function(){return q;});});};this.deleteBookmarks=function(s){var C=sap.ushell.Container;var o=C.getService("URLParsing");var e=C.getService("CommonDataModel");var I=o.parseShellHash(s);var R;if(I){R=l(I);}else{R=k(s);}return e.getSite().then(function(S){var n=S.groups;var D=Object.keys(n).map(function(K){var P=n[K].payload;var q=0;P.tiles=P.tiles.filter(function(v){if(v.isBookmark&&i(R,v.target)){++q;return false;}return true;});return q;}).reduce(function(q,v){q+=v;return q;},0);return e.save().then(function(){return D;});});};this.onCatalogTileAdded=function(s){};this._onTileSettingsSave=function(o,s){var D=new jQuery.Deferred(),C,e,n,N,q,O,v,w;if(o&&o.id&&s){n=s.oTitleInput.getValue();q=s.oSubTitleInput.getValue();N=s.oInfoInput.getValue();O=this.getTileTitle(o);v=this.getTileInfo(o);w=this.getTileSubtitle(o);if(O===n&&w===q&&v===N){return;}C=sap.ushell.Container.getService("CommonDataModel");var x=this;C.getSite().done(function(S){if(!S.modifiedTiles){S.modifiedTiles={};}if(!S.modifiedTiles[o.id]){S.modifiedTiles[o.id]={id:o.id};}e={};if(O!==n){e.title=n;S.modifiedTiles[o.id].title=n;o.title=n;}if(w!==q){e.subtitle=q;S.modifiedTiles[o.id].subTitle=q;o.subTitle=q;}if(v!==N){e.info=N;S.modifiedTiles[o.id].info=N;o.info=N;}if(x._mResolvedTiles[o.id].tileComponent){x._mResolvedTiles[o.id].tileComponent.tileSetVisualProperties(e);}else{if(x._mResolvedTiles[o.id].linkTileControl){if(e.title){x._mResolvedTiles[o.id].linkTileControl.setHeader(e.title);}if(e.subtitle){x._mResolvedTiles[o.id].linkTileControl.setSubheader(e.subtitle);}if((e.title)||(e.subtitle)){x._mResolvedTiles[o.id].linkTileControl.rerender();}}}C.save().fail(function(E){jQuery.sap.log.error(E);D.reject("Could not save personalization changes: "+E);}).done(function(){D.resolve();});}).fail(function(E){jQuery.sap.log.error(E);D.reject("Cannot get site: "+E);});}return D.promise();};this.getTileActions=function(o){var e=[],n,M;if(this._isGroupTile(o)&&!this._isFailedGroupTile(o)){M=new sap.ui.model.json.JSONModel({config:{display_title_text:this.getTileTitle(o),display_subtitle_text:this.getTileSubtitle(o),display_info_text:this.getTileInfo(o)}});n=sap.ushell.components.tiles.utilsRT.getTileSettingsAction(M,this._onTileSettingsSave.bind(this,o),this.getTileType(o));e.push(n);}return e;};function d(P,o){var e=f(P,o);e.isBookmark=true;return e;}function f(P,o){var e={id:sap.ushell.utils.generateUniqueId([])};h(e,P,o);return e;}function h(o,P,e){P=jQuery.extend(true,{},P);if(e){o.target=e;}if(P.title||P.title===""){o.title=P.title;}if(P.icon||P.icon===""){o.icon=P.icon;}if(P.subtitle||P.subtitle===""){o.subTitle=P.subtitle;}if(P.info||P.info===""){o.info=P.info;}if(P.dataSource){o.dataSource={};jQuery.extend(true,o.dataSource,P.dataSource);delete P.serviceUrl;}else if(P.dataSource===null){delete o.dataSource;delete o.indicatorDataSource;delete P.serviceUrl;}if((P.dataSource||o.dataSource)&&P.serviceUrlPath){o.indicatorDataSource={path:P.serviceUrlPath};}if(P.serviceUrl||P.serviceUrl===""){if(o.dataSource){jQuery.sap.log.warning("`serviceUrl` is marked for deprecation in the future."+"It is not the preferred means for defining a dynamic "+"tile's data source. Please use `oParameter.dataSource`");delete o.dataSource;}o.indicatorDataSource={path:P.serviceUrl};}else if(P.serviceUrl===null&&!o.dataSource){delete o.indicatorDataSource;}if(P.serviceRefreshInterval||P.serviceRefreshInterval===0){o.indicatorDataSource.refresh=P.serviceRefreshInterval;}}function i(o,O){if(o&&O){if(o.url){return o.url===O.url;}return o.semanticObject===O.semanticObject&&o.action===O.action&&j(o.parameters,O.parameters);}return o===O;}function j(P,o){var F,O;P=P||[];o=o||[];if(P.length===o.length){F=t(P);O=t(o);return F===O;}return false;}function t(e){return e.map(function(P){return P.name+P.value;}).sort().join();}function k(s){return{url:s};}function l(I){var o={semanticObject:I.semanticObject,action:I.action,parameters:m(I.params)};if(I.appSpecificRoute){o.appSpecificRoute=I.appSpecificRoute;}return o;}function m(I){return Object.keys(I).map(function(K){var v=I[K]&&I[K][0];return{name:K,value:v||""};});}};L.prototype._getMember=function(o,a){return sap.ushell.utils.getMember(o,a);};return L;},true);
