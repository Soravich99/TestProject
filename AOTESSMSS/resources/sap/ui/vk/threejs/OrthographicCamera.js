/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","../OrthographicCamera","./thirdparty/three"],function(q,O,t){"use strict";var T=O.extend("sap.ui.vk.threejs.OrthographicCamera",{metadata:{publicMethods:["update"],properties:{}}});var b=O.getMetadata().getParent().getClass().prototype;T.prototype.init=function(){if(b.init){b.init.call(this);}var n=1;var f=200000;var d=1;var a=1;this._nativeCamera=new THREE.OrthographicCamera(d/-2,d/2,a/2,a/-2,n,f);this._nativeCamera.position.set(0,0,10000);this._nativeCamera.zoom=10;this.setUsingDefaultClipPlanes(true);};T.prototype.update=function(w,h){this.setLeft(w/-2);this.setRight(w/2);this.setTop(h/2);this.setBottom(h/-2);this._nativeCamera.updateProjectionMatrix();};T.prototype.exit=function(){if(b.exit){b.exit.call(this);}this._nativeCamera=null;};T.prototype.getLeft=function(){return this._nativeCamera.left;};T.prototype.setLeft=function(v){this._nativeCamera.left=v;return this;};T.prototype.getRight=function(){return this._nativeCamera.right;};T.prototype.setRight=function(v){this._nativeCamera.right=v;return this;};T.prototype.getTop=function(){return this._nativeCamera.top;};T.prototype.setTop=function(v){this._nativeCamera.top=v;return this;};T.prototype.getBottom=function(){return this._nativeCamera.bottom;};T.prototype.setBottom=function(v){this._nativeCamera.bottom=v;return this;};T.prototype.getZoomFactor=function(){return this._nativeCamera.zoom;};T.prototype.setZoomFactor=function(v){this._nativeCamera.zoom=v;return this;};T.prototype.getCameraRef=function(){return this._nativeCamera;};T.prototype.setCameraRef=function(c){this._nativeCamera=c;return this;};T.prototype.getNearClipPlane=function(){return this._nativeCamera.near;};T.prototype.setNearClipPlane=function(v){this._nativeCamera.near=v;this.setUsingDefaultClipPlanes(false);return this;};T.prototype.getFarClipPlane=function(){return this._nativeCamera.far;};T.prototype.setFarClipPlane=function(v){this._nativeCamera.far=v;this.setUsingDefaultClipPlanes(false);return this;};T.prototype.getPosition=function(){return this._nativeCamera.position.toArray();};T.prototype.setPosition=function(v){this._nativeCamera.position.fromArray(v);return this;};T.prototype.getUpDirection=function(){return this._nativeCamera.up.toArray();};T.prototype.setUpDirection=function(v){this._nativeCamera.up.fromArray(v);return this;};T.prototype.getTargetDirection=function(){return this._nativeCamera.getWorldDirection().toArray();};T.prototype.setTargetDirection=function(v){var a=new THREE.Vector3().fromArray(v);a.add(this._nativeCamera.position);this._nativeCamera.lookAt(a);return this;};T.prototype.setUsingDefaultClipPlanes=function(v){this._nativeCamera.userData.usingDefaultClipPlanes=v;return this;};T.prototype.getUsingDefaultClipPlanes=function(){return this._nativeCamera.userData.usingDefaultClipPlanes;};T.prototype.adjustClipPlanes=function(a){var c=this._nativeCamera;c.updateMatrixWorld();c.matrixWorldInverse.getInverse(c.matrixWorld);a=a.clone().applyMatrix4(c.matrixWorldInverse);c.near=-a.max.z;c.far=-a.min.z;var e=Math.max((c.far-c.near)*0.0025,0.001);c.near-=e;c.far+=e;var p=1.0/(c.far-c.near);var z=(c.far+c.near)*p;c.projectionMatrix.elements[10]=-2*p;c.projectionMatrix.elements[14]=-z;return this;};T.prototype.getZoomNeedRecalculate=function(){if(this._nativeCamera.userData){return this._nativeCamera.userData.zoomNeedRecalculate;}};T.prototype.setZoomNeedRecalculate=function(v){this._nativeCamera.userData.zoomNeedRecalculate=v;};T.prototype.adjustZoom=function(a){var c=this._nativeCamera;c.updateMatrixWorld();c.matrixWorldInverse.getInverse(c.matrixWorld);a=a.clone().applyMatrix4(c.matrixWorldInverse);c.zoom=1/Math.max(a.min.x/c.left,a.max.y/c.top,a.max.x/c.right,a.min.y/c.bottom);c.updateProjectionMatrix();this.setZoomNeedRecalculate(false);return this;};return O;});
