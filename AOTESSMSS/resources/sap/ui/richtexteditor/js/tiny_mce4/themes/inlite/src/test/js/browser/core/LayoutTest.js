test('browser/core/LayoutTest',['ephox/tinymce','tinymce/inlite/core/Layout'],function(t,L){var r=function(x,y,w,h){return{x:x,y:y,w:w,h:h};};var c=function(x,y,w,h){return{left:x,top:y,width:w,height:h,bottom:y+h,right:x+w};};var a=function(h,k){var l;l=L.calc(k.targetRect,k.contentAreaRect,k.panelRect);assert.eq(h,l);};var b=function(){a({rect:r(0,10,20,10),position:'bl-tl'},{contentAreaRect:r(0,0,100,100),targetRect:r(0,0,10,10),panelRect:r(0,0,20,10)});};var d=function(){a({rect:r(80,10,20,10),position:'br-tr'},{contentAreaRect:r(0,0,100,100),targetRect:r(90,0,10,10),panelRect:r(0,0,20,10)});};var e=function(){a({rect:r(0,10,20,10),position:'tl-bl'},{contentAreaRect:r(0,0,100,100),targetRect:r(0,20,10,10),panelRect:r(0,0,20,10)});};var f=function(){a({rect:r(80,10,20,10),position:'tr-br'},{contentAreaRect:r(0,0,100,100),targetRect:r(90,20,10,10),panelRect:r(0,0,20,10)});};var g=function(){a({rect:r(35,10,20,10),position:'tc-bc'},{contentAreaRect:r(0,0,100,100),targetRect:r(40,20,10,10),panelRect:r(0,0,20,10)});};var i=function(){a({rect:r(35,10,20,10),position:'bc-tc'},{contentAreaRect:r(0,0,100,100),targetRect:r(40,0,10,10),panelRect:r(0,0,20,10)});};var j=function(){var h,k,p,u,l;k=r(0,0,100,100);h=r(40,0,10,10);p=r(0,0,20,10);l=function(m){assert.eq(m.elementRect,c(40,0,10,10));assert.eq(m.contentAreaRect,c(0,0,100,100));assert.eq(m.panelRect,c(0,0,20,10));return c(1,2,3,4);};u=L.userConstrain(l,h,k,p);assert.eq(u,r(1,2,3,4));};b();d();e();f();g();i();j();});
