/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(['sap/ui/mdc/model/GenericType','sap/ui/mdc/experimental/provider/ProviderHook','sap/ui/core/XMLComposite','sap/ui/core/util/XMLPreprocessor'],function(G,P,X,a){"use strict";sap.ui.getCore().initLibrary({version:"1.52.20",name:"sap.ui.mdc",dependencies:["sap.ui.core","sap.m"],types:["sap.ui.mdc.FieldDisplay","sap.ui.mdc.EditMode"],interfaces:[],controls:["sap.ui.mdc.Table","sap.ui.mdc.FilterBar","sap.ui.mdc.experimental.Field","sap.ui.mdc.base.FilterField","sap.ui.mdc.base.FilterToken"],elements:["sap.ui.mdc.experimental.FieldHelpBase","sap.ui.mdc.experimental.CustomFieldHelp","sap.ui.mdc.experimental.ListFieldHelp","sap.ui.mdc.experimental.TableFieldHelp"],extensions:{flChangeHandlers:{"sap.ui.mdc.Table":"sap/ui/mdc/internal/table/Table"}},noLibraryCSS:false});sap.ui.mdc.FieldDisplay={Value:"Value",Description:"Description",ValueDescription:"ValueDescription",DescriptionValue:"DescriptionValue"};sap.ui.mdc.EditMode={Display:"Display",Editable:"Editable",ReadOnly:"ReadOnly",Disabled:"Disabled"};P.apply();function v(n,V){var b=n.getAttribute('metadataContexts');if(b){n.removeAttribute('metadataContexts');}V.visitAttributes(n);if(b){if(b.indexOf('sap.fe.deviceModel')<0){b+=",{model: 'sap.fe.deviceModel', path: '/', name: 'sap.fe.deviceModel'}";}n.setAttribute('metadataContexts',b);}}function r(n,V){v(n,V);X.initialTemplating(n,V,this);n.removeAttribute('metadataContexts');}a.plugIn(r.bind("sap.ui.mdc.Table"),"sap.ui.mdc","Table");a.plugIn(r.bind("sap.ui.mdc.Field"),"sap.ui.mdc","Field");a.plugIn(r.bind("sap.ui.mdc.FilterField"),"sap.ui.mdc","FilterField");a.plugIn(r.bind("sap.ui.mdc.FilterBar"),"sap.ui.mdc","FilterBar");var R=new sap.ui.model.resource.ResourceModel({bundleName:"sap.ui.mdc.messageBundle",async:true});var o=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");sap.ui.mdc.getResourceModel=function(){return R;};sap.ui.mdc.getText=function(t,p){return o.getText(t,p);};return sap.ui.mdc;});
