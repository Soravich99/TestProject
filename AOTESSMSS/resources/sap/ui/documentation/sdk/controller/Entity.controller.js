/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/documentation/sdk/controller/BaseController","sap/ui/documentation/sdk/controller/util/ControlsInfo","sap/ui/documentation/sdk/controller/util/EntityInfo","sap/ui/documentation/sdk/util/ToggleFullScreenHandler","sap/ui/documentation/sdk/controller/util/JSDocUtil"],function(J,B,C,E,T,a){"use strict";return B.extend("sap.ui.documentation.sdk.controller.Entity",{onInit:function(){this.router=this.getRouter();this.router.getRoute("entity").attachPatternMatched(this.onRouteMatched,this);this._oObjectPage=this.getView().byId("ObjectPageLayout");this.getView().setModel(new J());},onTypeLinkPress:function(e){var t=e.getSource().data("type");this.getRouter().navTo("entity",{id:t},false);},onAPIRefPress:function(e){var s=e.getSource().data("name");this.getRouter().navTo("apiId",{id:s},false);},onTabSelect:function(e){var t=e.getParameter("key");this.router.navTo("entity",{id:this._sId,part:t},true);},onNavBack:function(e){this.router.myNavBack("home",{});},onNavToSample:function(e){var p=e.getSource().getBindingContext().getPath();var s=this.getView().getModel().getProperty(p);this.router.navTo("sample",{id:s.id});},_wrapInSpanTag:function(t){var f=a.formatTextBlock(t,{linkFormatter:function(s,t){var r="entity",b,m,p;t=t||s;if(s.match("://")){return'<a target="_blank" href="'+s+'">'+t+'</a>';}s=s.trim().replace(/\.prototype\./g,"#");p=s.indexOf("#");if(p===0){return"<code>"+s.slice(1)+"</code>";}else if(p>0){s=s.slice(0,p);}m=s.match(/^topic:(\w{32})$/);if(m){s=m[1];r="topic";}b=s.split('/');if(b.length>1&&["methods","events"].indexOf(b[1].toLowerCase())!==-1){r="api";}return'<a class="jsdoclink" href="#/'+r+'/'+s+'">'+t+'</a>';}});return'<span class="sapUiDocumentationJsDoc">'+f+'</span>';},_TAB_KEYS:["samples","about"],_loadSample:function(c){var n=this._sNewId;var f=c.entities.filter(function(b){return b.id===n;});var e=f.length?f[0]:undefined;function u(){if(this._TAB_KEYS.indexOf(this._sNewTab)===-1){this._sNewTab="samples";}if(!d.show[this._sNewTab]){this._sNewTab="samples";}this._switchPageTab();jQuery.sap.delayedCall(0,this,function(){this._oObjectPage.setBusy(false);});}var d;if(this._sId!==n){E.getEntityDocuAsync(n,e&&e.library).then(function(D){if(!e&&!D){this.router.myNavToWithoutHash("sap.ui.documentation.sdk.view.NotFound","XML",false);return;}d=this._getViewData(n,D,e,c);this.getView().getModel().setData(d,false);this._sId=n;u.call(this);}.bind(this));}else{d=this.getView().getModel().getData();u.call(this);}},onRouteMatched:function(e){this._oObjectPage.setBusy(true);this._sNewId=e.getParameter("arguments").id;this._sNewTab=e.getParameter("arguments").sectionTab;C.loadData().then(function(d){this._loadSample(d);}.bind(this));this.searchResultsButtonVisibilitySwitch(this.getView().byId("entityBackToSearch"));},onToggleFullScreen:function(e){T.updateMode(e,this.getView(),this);},_getViewData:function(i,d,e,c){var D=this._convertEntityInfo(i,d,c),s=false,S=0;if(e){if(!D.shortDescription&&e.description){D.shortDescription=e.description;}if(e.docuLink){D.show.introLink=true;D.docuLink=e.docuLink.replace("docs/guide","topic").replace(/\.html$/,"");}else{D.show.introLink=false;}if(!D.baseName){D.baseName=e.name;}s=e.samples.length>0;S=e.samples.length;}D.show.samples=s;D.count.samples=S;D.entity=e;return D;},_convertEntityInfo:function(i,d,c){var D={name:i,deprecated:(d)?this._formatDeprecated(d.deprecation):null,deprecatedMark:(d)?this._createDeprecatedMark(d.deprecation):null,baseType:(d)?this._formatType(d.baseType):null,baseTypeText:(d)?this._formatTypeText(d.baseType):"-",baseTypeNav:(d)?this._formatTypeNav(d.baseType):null,shortDescription:(d)?this._formatDeprecatedDescription(d.deprecation):null,description:(d)?this._wrapInSpanTag(d.doc):null,docuLink:null,values:d?d.values:[],show:{baseType:(d)?!!d.baseType:false,about:!!d,values:false,introActive:false},count:{samples:0},appComponent:this._getControlComponent(i,c)};if(!d){return D;}D.show.values=Array.isArray(D.values)&&D.values.length>0;return D;},_formatDeprecated:function(d){return(d&&d.length>0)?"true":"false";},_formatDeprecatedDescription:function(d){return(d&&d.length>0)?(this._createDeprecatedMark(d)+": "+d):null;},_formatType:function(t){if(!t){return null;}else{return t.replace("[]","");}},_formatTypeText:function(t){if(!t){return null;}else{t=t.replace("sap.ui.core.","");var i=t.lastIndexOf(".");return(i!==-1)?t.substr(i+1):t;}},_createDeprecatedMark:function(d){return(d)?"Deprecated":"";},_switchPageTab:function(){var s=this.getView().byId(this._sNewTab);if(!s){return;}if(this._oObjectPage){this._oObjectPage.attachEvent("onAfterRenderingDOMReady",function(){this._oObjectPage.setSelectedSection(s.getId());},this);}},backToSearch:function(){this.onNavBack();},_baseTypes:["sap.ui.core.any","sap.ui.core.object","sap.ui.core.function","sap.ui.core.number","sap.ui.core.float","sap.ui.core.int","sap.ui.core.boolean","sap.ui.core.string","sap.ui.core.URI","sap.ui.core.ID","sap.ui.core.void","sap.ui.core.CSSSize","any","object","function","float","int","boolean","string"],_formatTypeNav:function(t){return this._baseTypes.indexOf(t)===-1;}});});
