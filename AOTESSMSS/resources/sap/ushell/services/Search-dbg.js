// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
/**
 * @fileOverview The Unified Shell's search service which provides Enterprise Search via SINA.
 *
 * @version 1.52.20
 */
/* global jQuery,sap */
sap.ui.define([
    'sap/ushell/renderers/fiori2/search/SearchHelper'
], function (searchhelper) {
    "use strict";
    /* eslint valid-jsdoc:0 */

    function Search(oAdapter, oContainerInterface) {
        this.init.apply(this, arguments);
    };

    Search.prototype = {

        init: function (oAdapter, oContainerInterface, sParameter, oServiceProperties) {
            // do nothing, just ensure for abap adapter to init SINA (async GetServerInfo)
            // this.aCatalogTileDescriptions;
            // this.oCatalogDeferred;
            this.oAdapter = oAdapter;
            this.oContainerInterface = oContainerInterface;
            this.oLpdService = sap.ushell.Container.getService("LaunchPage");
            this.optimizedAppSearch = false;
            if (oServiceProperties && oServiceProperties.config && oServiceProperties.config.optimizedAppSearch !== undefined) {
                this.optimizedAppSearch = oServiceProperties.config.optimizedAppSearch;
            }
        },

        isSearchAvailable: function () {
            return this.oAdapter.isSearchAvailable();
        },

        getSina: function () {
            return this.oAdapter.getSina();
        },

        isValid: function (tile) {
            if (this.oLpdService.isTileIntentSupported) {
                return this.oLpdService.isTileIntentSupported(tile);
            } else {
                return true;
            }
        },

        _isTileViewNeeded: function (tile) {          
            if (this.optimizedAppSearch) {
                return false;
            }
            return !this.oLpdService.getCatalogTilePreviewTitle(tile)
        },

        /**
         * A helper function returning all tiles contained in all available catalogs.
         * Further, once the tiles have been successfully fetched, they are cached locally in order to speed up
         * future calls. This is based on the assumption that catalog tiles will change very infrequently.
         * In case of success the promise's <code>done</code> function should be called with the results.
         *
         * @returns {object}
         *  jQuery.promise object
         * @private
         */
        _getCatalogTiles: function () {
            //return $.when([]);
            var that = this;
            if (that.allTilesDeferred) {
                return that.allTilesDeferred;
            }

            // initialize catalog tiles
            var aCatalogTileDescriptions = [];
            // this.oCatalogDeferred = oDeferred;
            that.allTilesDeferred = that.oLpdService.getCatalogs().then(function (catalogs) {
                var oDeferreds = [];

                // 1) get promises for all catalogs' tiles
                for (var i = 0; i < catalogs.length; i++) {
                    oDeferreds.push(that.oLpdService.getCatalogTiles(catalogs[i]));
                }

                // 2) append personalized group tiles 
                var oDtdResult = that._getPersonalizedGroupTiles(new jQuery.Deferred());
                oDeferreds.push(oDtdResult);

                // do not change sequence: this sequence ensures that in subroutine removeDuplicateTiles
                // for duplicate tiles, the tile in the catalog will "win" (and not the tile on the homepage)
                // for portal: the tiles on homepage do not have a chip instance and will fail later to render

                // when all promises have been resolved, merge their results together
                return jQuery.when.apply(jQuery, oDeferreds).then(function () {
                    var aTilesCollection = arguments;
                    for (var i = 0; i < aTilesCollection.length; i++) {
                        var aTiles = aTilesCollection[i];
                        for (var j = 0; j < aTiles.length; j++) {
                            try {

                                var oTile, oTileView, aKeywords, sTargetURL, sTitle, sSubTitle, sSize, sIcon;

                                oTile = aTiles[j];

                                oTileView = null;
                                if (that._isTileViewNeeded(oTile)) {
                                    oTileView = that.oLpdService.getCatalogTileView(oTile);
                                }

                                aKeywords = that.oLpdService.getCatalogTileKeywords(oTile);
                                sTargetURL = that.oLpdService.getCatalogTileTargetURL(oTile);
                                sTitle = that.oLpdService.getCatalogTilePreviewTitle(oTile) || that.oLpdService.getCatalogTileTitle(oTile);
                                sSubTitle = that.oLpdService.getCatalogTilePreviewSubtitle(oTile);
                                sSize = that.oLpdService.getCatalogTileSize(oTile);
                                sIcon = that.oLpdService.getCatalogTilePreviewIcon(oTile) || "sap-icon://business-objects-experience";

                                if (that.isValid(oTile)) {
                                    aCatalogTileDescriptions.push({
                                        tile: oTile,
                                        keywords: aKeywords,
                                        url: sTargetURL,
                                        title: sTitle || '',
                                        subtitle: sSubTitle || "",
                                        icon: sIcon,
                                        size: sSize
                                    });
                                }

                                if (oTileView) {
                                    oTileView.destroy();
                                }

                                if (oTile.getContract) {
                                    var previewContract = oTile.getContract("preview");
                                    if (previewContract) {
                                        previewContract.setEnabled(false);
                                    }
                                }

                            } catch (e) {
                                jQuery.sap.log.error(e);
                            }
                        }
                    }

                    // It's actually necessary to remove duplicate tiles because we gather the tiles from both
                    // the tiles catalog and the home screen. If a tile exists on the home screen, we'd end up
                    // with a duplicate.
                    aCatalogTileDescriptions = that._removeDuplicateTiles(aCatalogTileDescriptions);

                    // this function is included in that._removeDuplicateTiles()-call
                    // aCatalogTileDescriptions = that._removeTilesWithoutURL(aCatalogTileDescriptions);

                    aCatalogTileDescriptions.sort(function (a, b) {
                        if (a.title.toUpperCase() < b.title.toUpperCase()) {
                            return -1;
                        }
                        if (a.title.toUpperCase() > b.title.toUpperCase()) {
                            return 1;
                        }
                        return 0;
                    });
                    // resolve the promise
                    return aCatalogTileDescriptions;
                });
            });
            return that.allTilesDeferred;

        },

        _getPersonalizedGroupTiles: function (oDeferred) {
            var that = this;

            that.oLpdService.getGroups().then(function (aGroups) {
                var aDeffered = [];
                var aGroupTiles;
                for (var j = 0; j < aGroups.length; j++) {
                    aGroupTiles = that.oLpdService.getGroupTiles(aGroups[j]) || [];
                    aDeffered = aDeffered.concat(aGroupTiles);
                }
                oDeferred.resolve(aDeffered);
            });

            return oDeferred.promise();
        },

        _removeDuplicateTiles: function (aTiles) {
            var oItemsDict = {},
                key,
                aUniqueTiles = [];

            for (var i = 0; i < aTiles.length; ++i) {
                var oTile = aTiles[i];
                if (!oTile.url) {
                    continue;
                }
                /*
                removed because of tiles with intent displayFactSheet
                for instance #MaintenanceNotification-displayFactSheet
                var factSheetTest = new RegExp('DisplayFactSheet', 'i');
                if (factSheetTest.test(oTile.url)) {
                    continue;
                }*/
                key = oTile.title + oTile.url + oTile.icon;
                if (oItemsDict[key] === undefined) {
                    oItemsDict[key] = oTile;
                    aUniqueTiles.push(oTile);
                }
            }
            return aUniqueTiles;
        },

        _removeTilesWithoutURL: function (aTiles) {
            var aTilesWithUrls = [];
            for (var i = 0; i < aTiles.length; ++i) {
                var oTile = aTiles[i];
                if (oTile.url) {
                    aTilesWithUrls.push(oTile);
                }
            }
            return aTilesWithUrls;
        },

        /**
         * Search for tiles in all backend catalogs.
         * @param {object}
         *  properties configuration object which knows the attributes:
         *   searchTerm: search for this term in apps/tiles
         *   top: return that many apps/tiles, default is 10
         *   searchInKeywords: also search in app keywords and not only in titles

         * @returns {array}
         *  found tiles

         * @private
         */
        _searchTiles: function (properties) {
            var sSearchTerms = properties.searchTerm;
            var aCatalogTiles = properties.aCatalogTiles;
            var iTop = properties.top || 10;
            var iSkip = properties.skip || 0;
            var totalCount = 0;

            // instantiate Tester with search terms
            var oTesterBeginWith = new searchhelper.Tester(sSearchTerms);
            var oTesterContains = new searchhelper.Tester(sSearchTerms, '', true);

            var formatTile = function (oTile, sHighlightedTitle) {
                // copy tile
                var resultTile = jQuery.extend({}, oTile);
                resultTile.tooltip = resultTile.title;

                if (sHighlightedTitle.length > 0) {
                    resultTile.label = sHighlightedTitle;
                } else {
                    resultTile.label = oTile.label;
                }

                // append to result list
                return resultTile;
            };

            var testTile = function (oTester, oTile) {
                // test label
                var oTestResult = oTester.test(oTile.label);
                if (oTestResult.bMatch === true) {
                    totalCount = totalCount + 1;
                    return formatTile(oTile, oTestResult.sHighlightedText);
                }

                // test keywords
                if (oTile.keywords && Array.isArray(oTile.keywords)) {
                    oTestResult = oTester.test(oTile.keywords.join(' '));
                    if (oTestResult.bMatch === true) {
                        totalCount = totalCount + 1;
                        // not relevant for highlighting in title
                        return formatTile(oTile, '');
                    }
                }
                return false;
            }

            
            var resultsBeginWith = [];
            var resultsContains = [];
            var resultsAll = [];
            for (var j = 0; j < aCatalogTiles.length; j++) {
                var oTile = aCatalogTiles[j];

                // Assemble label from title and sutitle
                var sTmpSubtitle = '';
                if (oTile.subtitle) {
                    sTmpSubtitle = ' - ' + oTile.subtitle;
                }
                oTile.label = oTile.title + sTmpSubtitle;

                // test whether title text contains all search terms
                // if case of match, sHighlightedText contains text with highlighted search terms
                // if not, it contains space
               
                //Strict check for beginWith(word boundary), the results have higher ranking
                var formattedTile = testTile(oTesterBeginWith, oTile);
                if (formattedTile && resultsBeginWith.length < iSkip + iTop) {
                    resultsBeginWith.push(formattedTile);
                    continue;
                } 
                
                //Weak check for contains, lower ranking
                formattedTile = testTile(oTesterContains, oTile);
                if (formattedTile && resultsContains.length < iSkip + iTop) {
                    resultsContains.push(formattedTile);
                    continue;
                } 
            }

            resultsAll = resultsBeginWith;
            resultsAll = resultsAll.concat(resultsContains);
            resultsAll = resultsAll.slice(iSkip, iSkip + iTop);

            return {
                totalResults: totalCount,
                searchTerm: sSearchTerms,
                getElements: function () {
                    return resultsAll;
                }
            };
        },

        /**
         * Search for Apps (Tiles) in all backend catalogs.
         *
         * @param  {object}
         *  properties configuration object which knows the attributes:
         *   searchTerm: search for this term in apps/tiles
         *   top: return that many apps/tiles, default is 10
         *   searchInKeywords: also search in app keywords and not only in titles
         *
         * @returns {object}
         *  jQuery.promise object
         *
         * @public
         */
        queryApplications: function (properties) {
            var that = this;
            return this._getCatalogTiles().then(function (aCatalogTiles) {
                properties.aCatalogTiles = aCatalogTiles;
                return that._searchTiles(properties);
            });

        },

        /**
         * Search all catalog tiles by their Semantic Object - Action pair
         * The given callback is called on success. This does not touch the respective search adapters.
         *
         * @param {array} aSemObjects
         *     an array of semantic object + action objects
         * @param {function} resultCallback
         *     the callback that will be called
         * @public
         */
        queryApplicationsByTarget: function (aSemObjects, resultCallback) {
            this._getCatalogTiles().done(function (aCatalogTileDescriptions) {
                var aResults = [];
                // loop through Semantic Objects, thus result is in same order as input SOs
                for (var j = 0, jL = aSemObjects && aSemObjects.length || 0; j < jL; j++) {
                    var oSemO = aSemObjects[j],
                        oURLParsingSrvc = sap.ushell.Container.getService("URLParsing");
                    for (var i = 0; i < aCatalogTileDescriptions.length; i++) {
                        var oTarget = oURLParsingSrvc.parseShellHash(aCatalogTileDescriptions[i].url);
                        if (oTarget && (oTarget.semanticObject === oSemO.semanticObject) && (oTarget.action === oSemO.action)) {
                            aResults.push(aCatalogTileDescriptions[i]);
                            // only take first match
                            break;
                        }
                    }
                }
                resultCallback(aResults);
            });
        }
    };


    Search.hasNoAdapter = false;
    return Search;

}, true /* bExport */);
