asynctest('browser/alien/BookmarkTest',['ephox/tinymce','ephox.agar.api.Pipeline','ephox.agar.api.Chain','ephox.agar.api.Cursors','ephox.agar.api.Assertions','ephox.mcagar.api.TinyDom','tinymce/inlite/alien/Bookmark'],function(t,P,C,a,A,T,B){var s=arguments[arguments.length-2];var f=arguments[arguments.length-1];var b=function(g){var h=document.createRange();h.setStart(g.start().dom(),g.soffset());h.setEnd(g.finish().dom(),g.foffset());return h;};var r=function(g){return function(h){return B.create(g,h);};};var c=function(g){return function(h){return B.resolve(g,h);};};var d=function(g){return C.op(function(h){A.assertEq('Not equal startContainer',g.start().dom(),h.startContainer);A.assertEq('Not equal startOffset',g.soffset(),h.startOffset);A.assertEq('Not equal endContainer',g.finish().dom(),h.endContainer);A.assertEq('Not equal endOffset',g.foffset(),h.endOffset);});};var e=function(h,p){var g=t.DOM;var i=T.fromDom(g.create('div',{},h));return C.asStep(i,[a.cFollowPath(a.pathFrom(p)),C.mapper(b),C.mapper(r(g)),C.mapper(c(g)),d(a.calculate(i,a.pathFrom(p)))]);};P.async({},[e('abc',{element:[0],offset:0}),e('abc',{element:[0],offset:1}),e('abc',{start:{element:[0],offset:0},finish:{element:[0],offset:1}}),e('<b>a</b>',{element:[0,0],offset:0}),e('<b>a</b>',{element:[0,0],offset:0}),e('<b>a</b>',{start:{element:[0,0],offset:0},finish:{element:[0,0],offset:1}}),e('<b>a</b><b>b</b>',{start:{element:[0,0],offset:0},finish:{element:[1,0],offset:1}})],function(){s();},f);});
