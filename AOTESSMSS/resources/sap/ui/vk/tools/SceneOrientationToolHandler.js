/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/EventProvider"],function(q,E){"use strict";var S=E.extend("sap.ui.vk.tools.SceneOrientationToolHandler",{metadata:{publicMethods:["hover","beginGesture","move","endGesture","click","doubleClick","contextMenu"]},constructor:function(t){this._tool=t;this._rect=null;this._mouse=new THREE.Vector2();}});S.prototype.destroy=function(){this._tool=null;this._rect=null;};S.prototype.hover=function(e){};S.prototype.beginGesture=function(e){};S.prototype.move=function(e){};S.prototype.endGesture=function(e){};S.prototype.click=function(e){};S.prototype.doubleClick=function(e){};S.prototype.contextMenu=function(e){};S.prototype.getViewport=function(){return this._tool._viewport;};S.prototype._getOffset=function(o){var r=o.getBoundingClientRect();var p={x:r.left+window.pageXOffset,y:r.top+window.pageYOffset};return p;};S.prototype._inside=function(e){var i=this._tool._viewport.getIdForLabel();var d=document.getElementById(i);if(d==null){return false;}var o=this._getOffset(d);this._rect={x:o.x,y:o.y,w:d.offsetWidth,h:d.offsetHeight};return(e.x>=this._rect.x&&e.x<=this._rect.x+this._rect.w&&e.y>=this._rect.y&&e.y<=this._rect.y+this._rect.h);};return S;},true);
