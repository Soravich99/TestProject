/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Element","../threejs/thirdparty/three"],function(q,E,t){"use strict";var C=E.extend("sap.ui.vk.helpers.CameraControllerThree",{metadata:{publicMethods:["rotate"]},constructor:function(a,i){var g=new THREE.Vector3();var b=new THREE.Vector2();var o=false;var A=0.001;var M=-Math.PI/2+A;var c=Math.PI/2-A;var s=new THREE.Spherical();var d=new THREE.Vector3();this.isTurnTableMode=i||true;function e(r){var m=new THREE.Vector3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);var k=new THREE.Vector3(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE);r.traverse(function(n){if(n instanceof THREE.Mesh){var p=new THREE.Vector3();p.applyMatrix4(n.matrixWorld);m.x=Math.min(m.x,p.x);m.y=Math.min(m.y,p.y);m.z=Math.min(m.z,p.z);k.x=Math.max(k.x,p.x);k.y=Math.max(k.y,p.y);k.z=Math.max(k.z,p.z);}});return m.add(k).multiplyScalar(0.5);}this.beginGesture=function(x,y){var k=a.getRenderer().domElement;var m=a.getScene().getSceneRef();var n=a.getCamera().getCameraRef();var p=(x-k.offsetLeft)/k.width*2-1;var r=(k.offsetTop-y)/k.height*2+1;b.x=p;b.y=r;var u=a.hitTest(x,y,m,n);if(u){g.copy(u.point);o=true;}else{g=e(m);o=false;}};this.endGesture=function(){o=false;};function f(k,m){var v=new THREE.Vector3();v.setFromMatrixColumn(m,0);v.multiplyScalar(-k);return v;}function h(k,m){var v=new THREE.Vector3();v.setFromMatrixColumn(m,1);v.multiplyScalar(k);return v;}this.pan=function(m,n){if(m===0&&n===0){return;}var p=a.getCamera().getCameraRef();var r=new THREE.Vector3().copy(g);var u=a.getRenderer().domElement;var v=u.height/2;if(p.isPerspectiveCamera){var w=new THREE.Vector3().subVectors(p.position,r).length();var x=p.fov/180*Math.PI/2;var k=v/Math.tan(x);m=m*w/k;n=n*w/k;}else if(p.isOrthographicCamera){m=m/p.zoom;n=n/p.zoom;}else{q.sap.log.error("threejs.ViewportGestureHandler: unsupported camera type");}d.add(f(m,p.matrix));d.add(h(n,p.matrix));};this.rotate=function(k,m){if(k===0&&m===0){return;}s.theta-=(k*0.01);s.phi+=(m*0.01);};this.zoom=function(z){if(z===0||z===1){return;}var k=a.getCamera().getCameraRef();var m=new THREE.Vector3();var n,p;if(k.isPerspectiveCamera){if(o){n=new THREE.Vector3(b.x,b.y,-1).unproject(k);p=new THREE.Vector3(b.x,b.y,1).unproject(k);p.sub(n);m.copy(p);}else{m.copy(k.getWorldDirection());}var r=new THREE.Vector3().copy(g).sub(k.position);var u=r.length();m.normalize();m.multiplyScalar(u);m.multiplyScalar(1-1/z);}else if(k.isOrthographicCamera){if(o){n=new THREE.Vector3(0,0,1).unproject(k);p=new THREE.Vector3(b.x,b.y,1).unproject(k);p.sub(n);m.copy(p);}m.multiplyScalar(1-1/z);k.zoom*=z;k.updateProjectionMatrix();}else{q.sap.log.error("threejs.ViewportGestureHandler: unsupported camera type");}d.add(m);};function j(k,p){var m=Math.sin(k);var n=Math.cos(k);var r=Math.sin(p);var u=Math.cos(p);var z=n*u;var x=m*u;var y=r;return new THREE.Vector3(x,y,z);}function l(n,m,k){return Math.max(m,Math.min(n,k));}this.update=function(){var k=a.getCamera().getCameraRef();if(k){var r=new THREE.Vector3().copy(g);var m=new THREE.Vector3().copy(k.position);m.sub(r);var n=k.getWorldDirection();n.normalize();var p=new THREE.Vector3().copy(k.up);if(this.isTurnTableMode){var y=new THREE.Vector3(0,1,0);var u=Math.atan2(n.x,n.z)+Math.PI/2;var v=j(u,0);v.normalize();var w=Math.atan2(n.y,Math.sqrt(n.x*n.x+n.z*n.z));var x=new THREE.Quaternion();x.setFromAxisAngle(y,s.theta);var z=new THREE.Quaternion();z.setFromAxisAngle(v,l(s.phi,M+w,c+w));p.copy(n).cross(v);p.normalize();x.multiply(z);m.applyQuaternion(x);n.applyQuaternion(x);p.applyQuaternion(x);}else{var B=new THREE.Vector3().crossVectors(p,n);B.normalize();var D=new THREE.Quaternion();D.setFromAxisAngle(p,s.theta);var F=new THREE.Quaternion();F.setFromAxisAngle(B,s.phi);D.multiply(F);m.applyQuaternion(D);n.applyQuaternion(D);p.applyQuaternion(D);n.normalize();p.normalize();}m.add(r);var G=m.clone();G.add(n);k.position.copy(m);k.up.copy(p);k.lookAt(G);k.position.add(d);s.set(0,0,0);d.set(0,0,0);k.updateMatrix();k.updateProjectionMatrix();}};}});return C;},true);
