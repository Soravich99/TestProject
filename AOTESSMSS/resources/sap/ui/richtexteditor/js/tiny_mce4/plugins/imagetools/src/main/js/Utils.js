define("tinymce/imagetoolsplugin/Utils",["global!tinymce.util.Promise","global!tinymce.util.Tools"],function(P,T){var i=function(o){return o!==null&&o!==undefined;};var t=function(j,b){var v;v=b.reduce(function(c,k){return i(c)?c[k]:undefined;},j);return i(v)?v:null;};var r=function(u,h){return new P(function(b){var x;x=new XMLHttpRequest();x.onreadystatechange=function(){if(x.readyState===4){b({status:x.status,blob:this.response});}};x.open('GET',u,true);T.each(h,function(v,k){x.setRequestHeader(k,v);});x.responseType='blob';x.send();});};var a=function(b){return new P(function(c){var f=new FileReader();f.onload=function(e){var d=e.target;c(d.result);};f.readAsText(b);});};var p=function(b){var j;try{j=JSON.parse(b);}catch(e){}return j;};return{traverse:t,readBlob:a,requestUrlAsBlob:r,parseJson:p};});
