asynctest('browser/alien/UnlinkTest',['ephox.mcagar.api.TinyLoader','ephox.mcagar.api.TinyApis','tinymce/inlite/alien/Unlink','ephox.agar.api.Pipeline','ephox.agar.api.Step','ephox.agar.api.GeneralSteps'],function(T,a,U,P,S,G){var s=arguments[arguments.length-2];var f=arguments[arguments.length-1];var u=function(e){return S.sync(function(){U.unlinkSelection(e);});};T.setup(function(e,o,b){var t=a(e);var A=function(i,c,d,g,h,j){return G.sequence([t.sSetContent(i),t.sSetSelection(c,d,g,h),u(e),t.sAssertContent(j,'Should match expected anchor less html')]);};P.async({},[A('<p><a href="#">a</a></p>',[0,0,0],0,[0,0,0],1,'<p>a</p>'),A('<p><a href="#">a</a>b</p>',[0,0,0],0,[0,1],1,'<p>ab</p>'),A('<p><a href="#">a</a><p><a href="#">b</a>',[0,0,0],0,[0,0,0],1,'<p>a</p>\n<p><a href="#">b</a></p>'),A('<p><a href="#">a</a><p><a href="#">b</a>',[0,0,0],0,[1,0,0],1,'<p>a</p>\n<p>b</p>')],o,b);},{},s,f);});
