/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","../Extension"],function(q,S,a){"use strict";var b=a.extend("sap.ui.vtm.extensions.SelectionLinkingExtension",{metadata:{interfaces:["sap.ui.vtm.interfaces.ISelectionLinkingExtension"],properties:{findMatchingTreeItems:{type:"any",group:"Behavior",defaultValue:null}}},constructor:function(i,s){a.apply(this,arguments);},initialize:function(){this._handlingEvent=new Map();this.applyPanelHandler(function(p){var t=p.getTree();t.attachSelectionChanged(function(e){if(!this.getEnabled()){return;}if(this._handlingEvent.get(p)){return;}this._onSelectionChanged(t.getPanel());}.bind(this));t.attachEvent("vtmInternalSetTreeSelectionComplete",function(e){this._handlingEvent.set(p,false);}.bind(this));t.attachModelUpdated(function(e){if(!this.getEnabled()){return;}var c=this._getPrimaryPanel();if(c){this._onSelectionChanged(c);}}.bind(this));}.bind(this));this.attachEnabledChanged(function(){if(this.getEnabled()){var p=this._getPrimaryPanel();if(p){this._onSelectionChanged(p);}}});},_getPrimaryPanel:function(){var p=this._vtm.getPanels();if(!p||!p.length){return null;}return this._vtm.getActivePanel()||p[0];},_onSelectionChanged:function(s){var c=s.getTree();var d=c.getSelectedItems();var p=this._vtm.getPanels();var f=this.getFindMatchingTreeItems();if(!f){return;}p.forEach(function(t){var e=t.getTree();var g=[];if(t!==s){d.forEach(function(h){var m=f(h,c,e);Array.prototype.push.apply(g,m);});this._handlingEvent.set(t,true);e.setSelectedItems(g);}}.bind(this));return;}});return b;});
