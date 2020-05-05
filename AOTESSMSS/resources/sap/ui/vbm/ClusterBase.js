/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(['sap/ui/core/Element','./library','sap/ui/core/theming/Parameters'],function(E,l,P){"use strict";var C=E.extend("sap.ui.vbm.ClusterBase",{metadata:{library:"sap.ui.vbm",properties:{areaAlwaysVisible:{type:"boolean",group:"Appearance",defaultValue:false},areaColor:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:"rgba(200,0,0,0.2)"},areaColorBorder:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:"rgba(220,220,220,0.5)"},textProperty:{type:"string",group:"Misc",defaultValue:"text"},textSettings:{type:"object",group:"Appearance"},rule:{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"vizTemplate",aggregations:{vizTemplate:{type:"sap.ui.core.Control",multiple:false},vizVo:{type:"sap.ui.vbm.Spot",multiple:false},clusterVos:{type:"sap.ui.core.Control",multiple:true,visiblity:"hidden",singularName:"clusterVo"},clusterContainers:{type:"sap.ui.vbm.ClusterContainer",multiple:true,visiblity:"hidden",singularName:"clusterContainer"}},events:{click:{parameters:{clusterID:{type:"string"}}},contextMenu:{parameters:{clusterID:{type:"string"},menu:{type:"sap.ui.unified.Menu"}}}}}});C.prototype.openDetailWindow=function(s,p){var o=this.getParent();o.mDTWindowCxt.bUseClickPos=true;o.mDTWindowCxt.open=true;o.mDTWindowCxt.src=s;o.mDTWindowCxt.key=s.getKey();o.mDTWindowCxt.params=p;o.m_bWindowsDirty=true;o.invalidate();};C.prototype.openContextMenu=function(t,c,m){this.oParent.openContextMenu(t,c,m);};C.prototype.init=function(){this.mVizObjMap={};this.mContObjMap={};var d=P.get("sapUiFontFamily");this.setProperty("textSettings",{textcolor:"#000000",textfont:(d)?d:"Arial, Helvetica, sans-serif",textfontsize:"10"},true);};C.prototype.exit=function(){this.mVizObjMap=null;this.mContObjMap=null;if(this.oSpotAggr){this.oSpotAggr.destroy();this.oSpotAggr=null;}};C.prototype.setTextSettings=function(s){var n=this.getTextSettings();jQuery.extend(n,s);return this.setProperty("textSettings",n);};C.prototype.getTemplateObject=function(){var t={};var i=this.getId();if(this.getVizTemplate()){t={id:i,type:"{00100000-2012-0004-B001-2297943F0CE6}",datasource:i};}else if(this.getVizVo()){this.oSpotAggr=new sap.ui.vbm.Spots({items:{path:"/",template:this.getVizVo()}});t=this.oSpotAggr.getTemplateObject();t.id=i;}else{jQuery.sap.log.error("No visualization object given for cluster");}return t;};C.prototype.getActionArray=function(){if(this.oSpotAggr){var a=this.oSpotAggr.getActionArray(true);for(var i=0;i<a.length;++i){a[i].refVO=this.getId();}return a;}else{return[];}};C.prototype.getClusterDefinition=function(){return jQuery.extend(this.getTextSettings(),{id:this.getId(),VO:this.getId(),rule:this.getRule(),areapermanent:this.getAreaAlwaysVisible().toString(),areabordersize:"2",areafillcol:this.getAreaColor(),areabordercol:this.getAreaColorBorder()});};C.prototype.handleContainerCreated=function(e){var c=e.mParameters.id;var i=this._getVizObjInst(c);if(i){var n=this.getParent().getInfoForCluster(c,sap.ui.vbm.ClusterInfoType.NodeInfo);if(!i.getBindingInfo("text")){i.setProperty(this.getTextProperty(),n.cnt.toString(),true);}if(!this.oDOMHandler){this.oDOMHander=new C._DOMHandler(this);}var d=e.getParameter("contentarea");d.addEventListener("click",this.oDOMHander,false);d.addEventListener("contextmenu",this.oDOMHander,false);var p;if((p=this.getParent())){var a=d.id;p.addRenderItem(i,a);}}};C.prototype.handleContainerDestroyed=function(e){var d=e.getParameter("contentarea");d.removeEventListener("click",this.oDOMHander,false);d.removeEventListener("contextmenu",this.oDOMHander,false);this._removeVizObjInst(e.mParameters.id);};C.prototype.handleEvent=function(e){var n=e.Action.name;var f="fire"+n[0].toUpperCase()+n.slice(1);var v;if((v=this.getVizVo())){var a={data:e};var b=this.getParent().getInfoForCluster(e.Action.instance,sap.ui.vbm.ClusterInfoType.NodeInfo);v.setProperty("key",e.Action.instance,true);v.setProperty("position",b.pos[0]+";"+b.pos[1]+";0",true);switch(n){case"click":v.mClickGeoPos=e.Action.AddActionProperties.AddActionProperty[0]['#'];break;case"contextMenu":v.mClickPos=[e.Action.Params.Param[0]['#'],e.Action.Params.Param[1]['#']];sap.ui.getCore().loadLibrary("sap.ui.unified");if(this.oParent.mVBIContext.m_Menus){this.oParent.mVBIContext.m_Menus.deleteMenu("DynContextMenu");}var m=new sap.ui.unified.Menu();m.vbi_data={};m.vbi_data.menuRef="CTM";m.vbi_data.VBIName="DynContextMenu";a.menu=m;break;case"drop":var s=e.Action.Params.Param[0]['#'].split("|");var c=s[1];var i=s[2].split(".")[1];var d=this.getParent().getAggregatorContainer(c).findInstanceByKey(i);a.oDragSource=d;break;default:break;}v[f](a);a.instance=v;this[f](a);}else{jQuery.sap.log.error("Instance for event not found");}};C.prototype.findInstance=function(k){if(this.oSpotAggr){return this.getVizVo();}else{return this._getContainer(k);}};C.prototype._getVizObjInst=function(k){var r=this.mVizObjMap[k];if(!r){var v=this.getVizTemplate();if(v){r=this.mVizObjMap[k]=v.clone();r.mClusterId=k;this.addAggregation("clusterVos",r,true);}}return r;};C.prototype._removeVizObjInst=function(k){var r=this.mVizObjMap[k];if(r){this.removeAggregation("clusterVos",r,true);this.mVizObjMap[k]=null;}};C.prototype._getContainer=function(k){var r=this.mContObjMap[k];if(!r){r=this.mContObjMap[k]=new sap.ui.vbm.ClusterContainer({key:k});if(!this.oSpotAggr){r.setItem(this._getVizObjInst(k));}this.addAggregation("clusterContainers",r,true);}return r;};C.prototype._removeContainer=function(k){var r=this.mContObjMap[k];if(r){this.removeAggregation("clusterContainers",r,true);this.mContObjMap[k]=null;}};C.prototype._handleDOMEvent=function(o){var c=o.currentTarget.m_Key;var a=this.parent._getContainer(c);switch(o.type){case"click":this.parent.fireClick({instance:a});break;case"contextmenu":var b={};var m=this.parent.oParent.getDomRef();a.mClickPos=[o.clientX-m.offsetLeft,o.clientY-m.offsetTop];sap.ui.getCore().loadLibrary("sap.ui.unified");try{if(this.parent.oParent.mVBIContext.m_Menus){this.parent.oParent.mVBIContext.m_Menus.deleteMenu("DynContextMenu");}var M=new sap.ui.unified.Menu();M.vbi_data={};M.vbi_data.menuRef="CTM";M.vbi_data.VBIName="DynContextMenu";b.menu=M;o.preventDefault();b.instance=a;this.parent.fireContextMenu(b);}catch(e){}break;default:break;}};C._DOMHandler=function(p){this.parent=p;this.handleEvent=p._handleDOMEvent;return this;};return C;});
