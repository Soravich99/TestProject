test('browser/core/PredicateIdTest',['ephox/tinymce','tinymce/inlite/core/PredicateId'],function(t,P){var a=function(){var i=function(){return true;};var b=function(){return false;};var p=P.fromContextToolbars([{toolbar:'a b c',predicate:i,id:'a'},{toolbar:'d e',predicate:b,id:'b'}]);assert.eq([P.create('a',i),P.create('b',b)],p);};a();});
