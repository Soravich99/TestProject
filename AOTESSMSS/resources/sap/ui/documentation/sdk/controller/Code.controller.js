/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/documentation/sdk/controller/BaseController","sap/ui/documentation/sdk/controller/util/ControlsInfo","sap/ui/model/json/JSONModel","sap/ui/core/Component"],function(q,B,C,J){"use strict";return B.extend("sap.ui.documentation.sdk.controller.Code",{_aMockFiles:["products.json","supplier.json","img.json"],onInit:function(){this.oModel=new J();this.getView().setModel(this.oModel);this.router=this.getRouter();this.router.getRoute("code").attachPatternMatched(this.onRouteMatched,this);this.router.getRoute("code_file").attachPatternMatched(this.onRouteMatched,this);this._codeCache={};this._aFilesAvailable=[];this._bFirstLoad=true;},onRouteMatched:function(e){this.showMasterSide();this._sId=e.getParameter("arguments").id;this._sFileName=decodeURIComponent(e.getParameter("arguments").fileName);C.loadData().then(function(d){this._loadCode(d);}.bind(this));},_loadCode:function(d){var f=this._sFileName;var s=d.samples[this._sId];if(!s){this.router.myNavToWithoutHash("sap.ui.documentation.sdk.view.NotFound","XML",false);return;}if(!this._oData||s.id!==this._oData.id){var c='sampleComp-'+this._sId;var a=this._sId;var o=sap.ui.component(c);if(!o){o=sap.ui.getCore().createComponent({id:c,name:a});}var m=o.getMetadata();var b=(m)?m.getConfig():null;this._oData={id:s.id,title:"Code: "+s.name,name:s.name,stretch:b.sample?b.sample.stretch:false,files:[],iframe:b.sample.iframe,fileName:f,includeInDownload:b.sample.additionalDownloadFiles};if(b&&b.sample&&b.sample.files){var r=q.sap.getModulePath(s.id);for(var i=0;i<b.sample.files.length;i++){var F=b.sample.files[i];var e=this.fetchSourceFile(r,F);this._oData.files.push({name:F,raw:e,code:this._convertCodeToHtml(e)});this._aFilesAvailable.push(F);}}}else{this._oData.fileName=f;}this.oModel.setData(this._oData);if(f==="undefined"){f=this._getInitialFileName();}if(this._aFilesAvailable.indexOf(f)===-1){this.router.myNavToWithoutHash("sap.ui.documentation.sdk.view.NotFound","XML",false);return;}this._updateCodeEditor(f);this._getTabHeader().setSelectedKey(f);var p=this.getView().byId("page");p.scrollTo(0);},fetchSourceFile:function(r,f){var t=this;var u=r+"/"+f;var s=function(a){t._codeCache[u]=a;};var e=function(a){t._codeCache[u]="not found: '"+u+"'";};if(!(u in this._codeCache)){this._codeCache[u]="";q.ajax(u,{async:false,dataType:"text",success:s,error:e});}return t._codeCache[u];},onDownload:function(e){q.sap.require("sap.ui.thirdparty.jszip");var a=sap.ui.require("sap/ui/thirdparty/jszip");var z=new a();var d=this.oModel.getData();for(var i=0;i<d.files.length;i++){var f=d.files[i],r=f.raw;if(f.name&&(f.name===d.iframe||f.name.split(".").pop()==="html")){r=this._changeIframeBootstrapToCloud(r);}z.file(f.name,r);for(var j=0;j<this._aMockFiles.length;j++){var m=this._aMockFiles[j];if(f.raw.indexOf(m)>-1){z.file("mockdata/"+m,this.downloadMockFile(m));}}}var R=q.sap.getModulePath(this._sId),E=d.includeInDownload||[],t=this;if(!d.iframe){z.file("Component.js",this.fetchSourceFile(R,"Component.js"));z.file("index.html",this._changeIframeBootstrapToCloud(this.createIndexFile(d)));}E.forEach(function(F){z.file(F,t.fetchSourceFile(R,F));});var c=z.generate({type:"blob"});this._openGeneratedFile(c);},_openGeneratedFile:function(c){q.sap.require("sap.ui.core.util.File");var F=sap.ui.require("sap/ui/core/util/File");F.save(c,this._sId,"zip","application/zip");},createIndexFile:function(d){var h,s;var r=q.sap.getModulePath("sap.ui.documentation.sdk.tmpl");var i=this.fetchSourceFile(r,"index.html.tmpl");i=i.replace(/{{TITLE}}/g,d.name);i=i.replace(/{{SAMPLE_ID}}/g,d.id);h=d.stretch?'height : "100%", ':"";i=i.replace(/{{HEIGHT}}/g,h);s=!d.stretch;i=i.replace(/{{SCROLLING}}/g,s);return i;},downloadMockFile:function(f){var r=q.sap.getModulePath("sap.ui.demo.mock");var w="test-resources/sap/ui/documentation/sdk/images/";var c="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/";var R=new RegExp(w,"g");var m=this.fetchSourceFile(r,f);if(m){m=m.replace(R,c);}return m;},onNavBack:function(){this.router.navTo("sample",{id:this._sId},true);},_convertCodeToHtml:function(c){q.sap.require("jquery.sap.encoder");c=c.toString();c=c.replace(/^function.+{/,"");c=c.replace(/}[!}]*$/,"");c=c.replace(/^[\n\s\S]*\/\/\s*CODESNIP_START\n/,"");c=c.replace(/\/\/\s*CODESNIP_END[\n\s\S]*$/,"");c=c.replace(/\t/g,"  ");return c;},_changeIframeBootstrapToCloud:function(r){q.sap.require("sap.ui.thirdparty.URI");var U=sap.ui.require("sap/ui/thirdparty/URI");var a=/src=(?:"[^"]*\/sap-ui-core\.js"|'[^']*\/sap-ui-core\.js')/;var c=new U(window.location.href).search("");var R=new U(q.sap.getResourcePath("","/sap-ui-core.js"));var b=R.absoluteTo(c).toString();return r.replace(a,'src="'+b+'"');},handleTabSelectEvent:function(e){var f=e.getParameter("selectedKey");this._bFirstLoad=false;this.router.navTo("code_file",{id:this._sId,fileName:encodeURIComponent(f)},false);},_updateCodeEditor:function(f){var c=this._getCodeEditor(),a=c._getEditorInstance(),A=a.renderer;c.setValue(this._getCode(f));c.setType(this._getFileType(f));a.gotoLine(0,0,false);if(this._bFirstLoad){q.sap.delayedCall(0,this,function(){A.onResize();});}},_getCode:function(f){var F=this.getModel().getData().files,c="";F.forEach(function(o){if(o.name===f){c=o.raw;return true;}});return c;},_getFileType:function(f){var F=f.split('.').pop();return F==="js"?"javascript":F;},_getInitialFileName:function(){return(this._oData&&this._oData.files&&this._oData.files.length>0&&this._oData.files[0].name)||null;},_getCodeEditor:function(){if(!this.oCodeEditor){this.oCodeEditor=this.getView().byId("codeEditor");}return this.oCodeEditor;},_getTabHeader:function(){if(!this.oTabHeader){this.oTabHeader=this.getView().byId("tabHeader");}return this.oTabHeader;}});});
