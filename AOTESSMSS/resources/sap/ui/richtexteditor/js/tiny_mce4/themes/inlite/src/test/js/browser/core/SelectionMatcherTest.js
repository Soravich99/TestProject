asynctest('browser/core/SelectionMatcherTest',['ephox.mcagar.api.TinyLoader','ephox.mcagar.api.TinyApis','ephox.agar.api.Step','ephox.agar.api.Assertions','tinymce/inlite/core/SelectionMatcher','tinymce/inlite/core/PredicateId','ephox.agar.api.GeneralSteps','ephox.agar.api.Pipeline'],function(T,a,S,A,b,P,G,c){var s=arguments[arguments.length-2];var f=arguments[arguments.length-1];var d=function(h,r){A.assertEq('Should not be null',r!==null,h);if(h===true){A.assertEq('Should be matching a',r.id,'a');A.assertEq('Should be have width',r.rect.w>0,true);}};var t=function(h,i,j,k,l,m,n,o){var p=S.sync(function(){var r=b.textSelection('a')(i);d(o,r);});return G.sequence([h.sSetContent(j),h.sSetSelection(k,l,m,n),p]);};var e=function(h,i){return G.sequence([t(h,i,'<p>a</p>',[0],0,[0],1,true),t(h,i,'<p>a</p>',[0],0,[0],0,false)]);};var E=function(h,i,j,k,l,m,n,o){var p=S.sync(function(){var q=i.dom.getParents(i.selection.getStart());var r=b.emptyTextBlock(q,'a')(i);d(o,r);});return G.sequence([h.sSetContent(j),h.sSetSelection(k,l,m,n),p]);};var g=function(h,i){return G.sequence([E(h,i,'<p>a</p>',[0],0,[0],0,false),E(h,i,'<p>a</p>',[0],0,[0],1,false),E(h,i,'<p><br></p>',[0],0,[0],0,true),E(h,i,'<p><em><br></em></p>',[0,0],0,[0,0],0,true)]);};T.setup(function(h,o,i){var j=a(h);c.async({},[e(j,h),g(j,h)],o,i);},{inline:true},s,f);});
