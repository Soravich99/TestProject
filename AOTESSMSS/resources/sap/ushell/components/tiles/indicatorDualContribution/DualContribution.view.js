// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(['sap/ui/core/mvc/JSView','sap/ca/ui/model/format/NumberFormat','sap/ui/model/analytics/odata4analytics','sap/ushell/components/tiles/indicatorTileUtils/smartBusinessUtil'],function(J,N,o,s){"use strict";sap.ui.getCore().loadLibrary("sap.suite.ui.commons");sap.ui.jsview("tiles.indicatorDualContribution.DualContribution",{getControllerName:function(){return"tiles.indicatorDualContribution.DualContribution";},createContent:function(c){this.setHeight('100%');this.setWidth('100%');var t=this;t.oGenericTileData={};t.oNumericContent=new sap.m.NumericContent({value:"{/value}",scale:"{/scale}",indicator:"{/indicator}",size:"{/size}",formatterValue:true,truncateValueTo:6,valueColor:"{/valueColor}"});t.oNumericTile=new sap.m.TileContent({unit:"{/unitNumeric}",size:"{/size}",footer:"{/footerNum}",content:t.oNumericContent});t.oCmprsDataTmpl=new sap.suite.ui.microchart.ComparisonMicroChartData({title:"{title}",value:"{value}",color:"{color}",displayValue:"{displayValue}"});t.oCmprsChrtTmpl=new sap.suite.ui.microchart.ComparisonMicroChart({size:"{/size}",scale:"{/scale}",data:{template:t.oCmprsDataTmpl,path:"/data"}});t.oComparisonTile=new sap.m.TileContent({unit:"{/unitContribution}",size:"{/size}",footer:"{/footerComp}",content:t.oCmprsChrtTmpl});t.oGenericTile=new sap.m.GenericTile({subheader:"{/subheader}",frameType:"{/frameType}",size:"{/size}",header:"{/header}",tileContent:[t.oNumericTile,t.oComparisonTile]});t.oGenericTileModel=new sap.ui.model.json.JSONModel();t.oGenericTileModel.setData(t.oGenericTileData);t.oGenericTile.setModel(t.oGenericTileModel);return t.oGenericTile;}});},true);
