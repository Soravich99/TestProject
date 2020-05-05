/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control','./lib/sapvbi'],function(q,l,C,s){"use strict";var V=C.extend("sap.ui.vbm.VBI",{metadata:{library:"sap.ui.vbm",properties:{width:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'800px'},height:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'600px'},config:{type:"object",group:"Misc",defaultValue:null},plugin:{type:"boolean",group:"Misc",defaultValue:false},rectangularSelection:{type:"boolean",group:"Misc",defaultValue:false},lassoSelection:{type:"boolean",group:"Misc",defaultValue:false},rectZoom:{type:"boolean",group:"Misc",defaultValue:false},allowKeyEventRepeat:{type:"boolean",group:"Behavior",defaultValue:true},keyEventDelay:{type:"int",group:"Behavior",defaultValue:250},enableOverlappingTest:{type:"boolean",group:"Behavior",defaultValue:true}},events:{submit:{parameters:{data:{type:"string"}}},thumbnailClick:{parameters:{pos:{type:"string"},zoomLevel:{type:"int"}}},render:{parameters:{canvas:{type:"object"}}},changeTrackingMode:{parameters:{mode:{type:"int"},bSet:{type:"boolean"}}},zoom:{parameters:{canvas:{type:"object"}}},move:{parameters:{canvas:{type:"object"}}},openWindow:{parameters:{contentarea:{type:"object"},id:{type:"string"}}},closeWindow:{parameters:{contentarea:{type:"object"},id:{type:"string"}}},containerCreated:{parameters:{contentarea:{type:"object"},id:{type:"string"}}},containerDestroyed:{parameters:{contentarea:{type:"object"},id:{type:"string"}}}}}});V.RttMap={};V.prototype.exit=function(){if(this.getPlugin()){var p=this.getPlugInControl();if(p){p.OnSubmit=null;}}else if(this.mVBIContext){this.mVBIContext.clear();}if(this.resizeID!=""){sap.ui.core.ResizeHandler.deregister(this.resizeID);this.resizeID="";}};V.prototype.resize=function(e){var c=(this.oControl!=undefined)?this.oControl:this;var a=c.mVBIContext;if(a){var b=a.GetMainScene();if(b){b.resizeCanvas(e);}if(a.m_Windows){a.m_Windows.NotifyResize();}}};V.prototype.init=function(){this.m_aLoadQueue=null;if(!this.getPlugin()){this.mVBIContext=new VBI.VBIContext(this);}this.resizeID="";this.m_renderList=[];};V.prototype.loadNative=function(d){var a=this.getId();var b=document.getElementById('VBI'+a);if(!b){return;}var c=function(f){try{var D;if((D=JSON.parse(f))){var v=D.SAPVB;var t=JSON.stringify(v,null,'  ');this.fireSubmit({data:t});}}catch(e){if(VBI.m_bTrace){VBI.Trace("Error submitting plugin event");}}};if(q.type(d)=='object'){var t=JSON.stringify(d,null,'  ');try{b.Load(t);b.OnSubmit=c.bind(this);}catch(e){}}else if(q.type(d)=='string'){try{b.Load(d);b.OnSubmit=c.bind(this);}catch(e){}}};V.prototype.loadHtml=function(d){var a=this.getId();var b=null;if(typeof d==='string'){b=JSON.parse(d.indexOf('{')?d.substr(d.indexOf('{')):d);}else if(typeof d==='object'){b=d;}if(!b){return;}if(!b["SAPVB"]){var m;if(this.mVBIContext&&(m=(new VBI.Adaptor(this.mVBIContext)).CreateLoadData(b))){this.loadHtml(m);return;}else{return;}}var M=false;var c=false;var e=false;var f=false;var g=false;var h=false;if(q.type(b)==='object'){if(b.SAPVB){if(b.SAPVB.Config){this.mVBIContext.GetConfig().load(b.SAPVB.Config,this.mVBIContext);}if(b.SAPVB.Resources){this.mVBIContext.GetResources().load(b.SAPVB.Resources,this.mVBIContext);f=true;}if(b.SAPVB.DataTypes){if(!this.mVBIContext.m_DataTypeProvider){this.mVBIContext.m_DataTypeProvider=new VBI.DataTypeProvider();}this.mVBIContext.m_DataTypeProvider.load(b.SAPVB.DataTypes,this.mVBIContext);}if(b.SAPVB.Data){if(!this.mVBIContext.m_DataProvider){this.mVBIContext.m_DataProvider=new VBI.DataProvider();}this.mVBIContext.m_DataProvider.load(b.SAPVB.Data,this.mVBIContext);M=true;}if(b.SAPVB.MapProviders){if(!this.mVBIContext.m_MapProviders){this.mVBIContext.m_MapProviders=new VBI.MapProviders();}this.mVBIContext.m_MapProviders.load(b.SAPVB.MapProviders,this.mVBIContext);h=true;}if(b.SAPVB.MapLayerStacks){if(!this.mVBIContext.m_MapLayerStackManager){this.mVBIContext.m_MapLayerStackManager=new VBI.MapLayerStackManager(this.mVBIContext);}this.mVBIContext.m_MapLayerStackManager.load(b.SAPVB.MapLayerStacks,this.mVBIContext);h=true;}if(b.SAPVB.Windows){if(!this.mVBIContext.m_Windows){this.mVBIContext.m_Windows=new VBI.Windows();}this.mVBIContext.m_Windows.load(b.SAPVB.Windows,this.mVBIContext);e=true;}if(b.SAPVB.Actions){if(!this.mVBIContext.m_Actions){this.mVBIContext.m_Actions=new VBI.Actions();}this.mVBIContext.m_Actions.load(b.SAPVB.Actions,this.mVBIContext);}if(b.SAPVB.Automation){if(!this.mVBIContext.m_Automations){this.mVBIContext.m_Automations=new VBI.Automations();}this.mVBIContext.m_Automations.load(b.SAPVB.Automation,this.mVBIContext);}if(b.SAPVB.Menus){if(!this.mVBIContext.m_Menus){this.mVBIContext.m_Menus=new VBI.Menus();}this.mVBIContext.m_Menus.load(b.SAPVB.Menus,this.mVBIContext);}if(b.SAPVB.Clustering){if(!this.mVBIContext.m_Clustering){this.mVBIContext.m_Clustering=new VBI.Clustering();}this.mVBIContext.m_Clustering.load(b.SAPVB.Clustering,this.mVBIContext);g=true;}if(b.SAPVB.Scenes){if(!this.mVBIContext.m_SceneManager){this.mVBIContext.m_SceneManager=new VBI.SceneManager();}this.mVBIContext.m_SceneManager.load(b.SAPVB.Scenes,this.mVBIContext);c=true;}else if(h){var j=this.mVBIContext.m_SceneManager.m_SceneArray;for(var i=0;i<j.length;++i){if(j[i].RefreshMapLayerStack){j[i].RefreshMapLayerStack();}}}}if(M){if(this.mVBIContext.m_Windows){this.mVBIContext.m_Windows.NotifyDataChange();}}if(c||e){if(this.mVBIContext.m_Windows){this.mVBIContext.m_Windows.Awake(a);}}if(c||M||g||f){if(this.mVBIContext.m_Windows){this.mVBIContext.m_Windows.RenderAsync();}}}};V.prototype.load=function(d){if(!this.isRendered()){if(!this.m_aLoadQueue){this.m_aLoadQueue=[];}this.m_aLoadQueue.push(d);return;}if(this.getPlugin()){this.loadNative(d);}else{this.loadHtml(d);}if(this.resizeID==""&&this.mVBIContext.GetMainScene()){this.resize();this.resizeID=sap.ui.core.ResizeHandler.register(this,this.resize);}};
/**
	 * Returns a Screenshot of the Overlay. Please note that the map cannot be included due to browser restrictions. Function returns the visible part
	 * of the Canvas excluding map, copyright info, navigation control, scaler, legend, detail windows, container elements. Analytic Maps are returned
	 * as they are not treated as "maps" internally. Modes 2 & 3 are experimental, trying to load the map (this may work on inhouse servers with
	 * adapted settings, standard configurations should fail)
	 *
	 * @param {int} [iMode] 0: Overlay only; 1 (default) and 3: include Labels; 2 and 3: try to include maps (will return "" if not possible)
	 * @returns {string} Base64 encoded picture (PNG format) on success, "" otherwise
	 * @public
	 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
	 */
V.prototype.getPicOfOverlay=function(m){var a=this.mVBIContext.GetMainScene();if(!(a&&a.GetOverlayPicture)){return"";}return a.GetOverlayPicture(m);};V.prototype.minimize=function(n,N,f,F,a,b,c,t){var v=this.mVBIContext;if(!v.moThumbnail){v.moThumbnail={bThumbnailed:false};}var d=v.moThumbnail;d.nThumbWidth=n;d.nThumbHeight=N;d.strFont=a;d.strCol=b;d.nFontPos=c;d.strText=t;if(f){d.nFullWidth=f;}if(F){d.nFullHeight=F;}var e=v.GetMainScene();if(e){v.DoMinimize(e);}};V.prototype.maximize=function(f,F){var a=this.mVBIContext.GetMainScene();if(a&&this.mVBIContext.moThumbnail){var n,b;if(f){n=String(f)+"px";}else{n=this.mVBIContext.moThumbnail.strOrgWidth?this.mVBIContext.moThumbnail.strOrgWidth:this.getWidth();}if(F){b=String(F)+"px";}else{b=this.mVBIContext.moThumbnail.strOrgHeight?this.mVBIContext.moThumbnail.strOrgHeight:this.getHeight();}this.mVBIContext.m_bThumbnail=false;this.setWidth(n);this.setHeight(b);a.m_Ctx.moThumbnail=undefined;a.resizeCanvas(0);}};V.prototype.zoomToGeoPosition=function(L,f,i){var a=null;if((a=this.mVBIContext.GetMainScene())){if(q.type(L)=='array'&&q.type(f)=='array'){if(L.length>1&&f.length>1){a.ZoomToMultiplePositions(L,f);}else{a.ZoomToGeoPosition(VBI.MathLib.DegToRad([parseFloat(L[0]),parseFloat(f[0])]),parseFloat(i));}}else{a.ZoomToGeoPosition(VBI.MathLib.DegToRad([parseFloat(L),parseFloat(f)]),parseFloat(i));}}};V.prototype.zoomToAreas=function(a,c){var b=null;if((b=this.mVBIContext.GetMainScene())){b.ZoomToAreas(a,c);}};V.prototype.getInfoForCluster=function(i,t){var a=null;if((a=this.mVBIContext.GetMainScene())){return a.getInfoForCluster(i,t);}return null;};V.prototype.setRectangularSelection=function(S){var a=this.mVBIContext.GetMainScene();if(a){if(!(S&&a.m_nInputMode==window.VBI.InputModeRectSelect)){a.endTrackingMode();if(S){this.setProperty("lassoSelection",false,true);this.setProperty("rectZoom",false,true);new a.RectSelection();a.m_Ctx.onChangeTrackingMode(VBI.InputModeRectSelect,true);}}}this.setProperty("rectangularSelection",S,true);return this;};V.prototype.setLassoSelection=function(S){var a=this.mVBIContext.GetMainScene();if(a){if(!(S&&a.m_nInputMode==window.VBI.InputModeLassoSelect)){a.endTrackingMode();if(S){this.setProperty("rectangularSelection",false,true);this.setProperty("rectZoom",false,true);new a.LassoSelection();a.m_Ctx.onChangeTrackingMode(VBI.InputModeLassoSelect,true);}}}this.setProperty("lassoSelection",S,true);return this;};V.prototype.setRectZoom=function(S){var a=this.mVBIContext.GetMainScene();if(a){if(!(S&&a.m_nInputMode==window.VBI.InputModeRectZoom)){a.endTrackingMode();if(S){this.setProperty("lassoSelection",false,true);this.setProperty("rectangularSelection",false,true);new a.RectangularZoom();a.m_Ctx.onChangeTrackingMode(VBI.InputModeRectZoom,true);}}}this.setProperty("rectZoom",S,true);return this;};V.prototype.onAfterRendering=function(){if(this.$oldContent.length>0){this.$().append(this.$oldContent);}if(this.m_aLoadQueue){var n;for(n=0;n<this.m_aLoadQueue.length;++n){this.load(this.m_aLoadQueue[n]);}this.m_aLoadQueue=null;}if(this.resizeID==""&&this.mVBIContext.GetMainScene()){this.resize();this.resizeID=sap.ui.core.ResizeHandler.register(this,this.resize);}var a=this.getId();if(this.mVBIContext.m_Windows){this.mVBIContext.m_Windows.Awake(a);}var e=q(this.getDomRef()).children(".vbi-hidden").children();for(var i=0,E;i<e.length;++i){E=e[i];var d=document.getElementById(E.attributes.getNamedItem("data").nodeValue);if(d){d.appendChild(E.firstChild);E.parentNode.removeChild(E);}}};V.prototype.onBeforeRendering=function(){this.$oldContent=sap.ui.core.RenderManager.findPreservedContent(this.getId());};V.prototype.isRendered=function(){return this.getDomRef()?true:false;};V.prototype.getPlugInControl=function(){var a=this.getId();var e=document.getElementById('VBI'+a);return e?e:null;};V.prototype.setConfig=function(c){return this.load(c);};V.prototype.setWidth=function(v){if(typeof v==='number'){this.setProperty("width",parseInt(v,10).toString()+"px");}else{this.setProperty("width",v);}};V.prototype.setHeight=function(v){if(typeof v==='number'){this.setProperty("height",parseInt(v,10).toString()+"px");}else{this.setProperty("height",v);}};V.prototype.addRenderItem=function(c,t){this.m_renderList.push({control:c,data:t});this.invalidate();};return V;});
