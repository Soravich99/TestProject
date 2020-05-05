/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(['./VoBase','./library'],function(V,l){"use strict";var A=V.extend("sap.ui.vbm.Area",{metadata:{library:"sap.ui.vbm",properties:{position:{type:"string",group:"Misc",defaultValue:null},color:{type:"string",group:"Misc",defaultValue:null},colorBorder:{type:"string",group:"Misc"},borderDash:{type:"string",group:"Misc"}},events:{edgeClick:{edge:{type:"int"}},edgeContextMenu:{edge:{type:"int"}}}}});A.prototype.openDetailWindow=function(c,o,O){this.oParent.openDetailWindow(this,{caption:c,offsetX:o,offsetY:O},true);};A.prototype.openContextMenu=function(m){this.oParent.openContextMenu("Area",this,m);};A.prototype.getDataElement=function(){var e=V.prototype.getDataElement.apply(this,arguments);var b=this.oParent.mBindInfo;if(b.C){e.C=this.getColor();}if(b.CB){var c=this.getColorBorder();if(c!=undefined&&c!=""){e.CB=c;}}if(b.BD){var a=this.getBorderDash();if(a!=undefined&&a!=""){e.BD=a;}}var p=this.getPosition();if(p.substring(0,1)==="["){p=p.replace(/\'/g,"\"");e.PM=JSON.parse(p);}else{e.P=p;}return e;};A.prototype.handleChangedData=function(e){if(e.P){this.setPosition(e.P);}if(e.PM){jQuery.sap.log.error("sap.ui.vbm.Area: Change of areas with multiple parts not supported");}};return A;});
