(function(){var a=tinymce.explode("id,name,style,align,class,hspace,vspace,bgcolor,type"),c=tinymce.makeMap(a.join(",")),d=a.concat(tinymce.explode("width, height")),b=tinymce.makeMap(d.join(",")),h=tinymce.html.Node,g,j,i=tinymce.util.JSON;g=[["Flash","d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash","http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"],["ShockWave","166b1bca-3f9c-11cf-8075-444553540000","application/x-director","http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=8,5,1,0"],["WindowsMedia","6bf52a52-394a-11d3-b153-00c04f79faa6,22d6f312-b0f6-11d0-94ab-0080c74c7e95,05589fa1-c356-11ce-bf01-00aa0055595a","application/x-mplayer2","http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701"],["QuickTime","02bf25d5-8c17-4b23-bc80-d3488abddc6b","video/quicktime","http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0"],["RealMedia","cfcdaa03-8be4-11cf-b84b-0020afbbccfa","audio/x-pn-realaudio-plugin","http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"],["Java","8ad9c840-044e-11d1-b3e9-00805f499d93","application/x-java-applet","http://java.sun.com/products/plugin/autodl/jinstall-1_5_0-windows-i586.cab#Version=1,5,0,0"],["Silverlight","dfeaf541-f3e1-4c24-acac-99c30715084a","application/x-silverlight-2"],["Iframe"],["Video"],["EmbeddedAudio"],["Audio"],["Object"]];function f(k){return typeof(k)=="string"?k.replace(/[^0-9%]/g,""):k}function e(m){var k,l;if(m&&!m.splice){k=[];for(l=0;true;l++){if(m[l]){k[l]=m[l]}else{break}}return k}return m}tinymce.create("tinymce.plugins.MediaPlugin",{init:function(o,k){var s=this,m={},n,q,r,l;function p(t){return t&&t.nodeName==="IMG"&&o.dom.hasClass(t,"mceItemMedia")}s.editor=o;s.url=k;j="";for(n=0;n<g.length;n++){l=g[n][0];r={name:l,clsids:tinymce.explode(g[n][1]||""),mimes:tinymce.explode(g[n][2]||""),codebase:g[n][3]};for(q=0;q<r.clsids.length;q++){m["clsid:"+r.clsids[q]]=r}for(q=0;q<r.mimes.length;q++){m[r.mimes[q]]=r}m["mceItem"+l]=r;m[l.toLowerCase()]=r;j+=(j?"|":"")+l}tinymce.each(o.getParam("media_types","video=mp4,m4v,ogv,webm;silverlight=xap;flash=swf,flv;shockwave=dcr;quicktime=mov,qt,mpg,mpeg;shockwave=dcr;windowsmedia=avi,wmv,wm,asf,asx,wmx,wvx;realmedia=rm,ra,ram;java=jar;audio=mp3,ogg").split(";"),function(w){var t,v,u;w=w.split(/=/);v=tinymce.explode(w[1].toLowerCase());for(t=0;t<v.length;t++){u=m[w[0].toLowerCase()];if(u){m[v[t]]=u}}});j=new RegExp("write("+j+")\\(([^)]+)\\)");s.lookup=m;o.onPreInit.add(function(){o.schema.addValidElements("object[id|style|width|height|classid|codebase|*],param[name|value],embed[id|style|width|height|type|src|*],video[*],audio[*],source[*]");o.parser.addNodeFilter("object,embed,video,audio,script,iframe",function(t){var u=t.length;while(u--){s.objectToImg(t[u])}});o.serializer.addNodeFilter("img",function(t,v,u){var w=t.length,x;while(w--){x=t[w];if((x.attr("class")||"").indexOf("mceItemMedia")!==-1){s.imgToObject(x,u)}}})});o.onInit.add(function(){if(o.theme&&o.theme.onResolveName){o.theme.onResolveName.add(function(t,u){if(u.name==="img"&&o.dom.hasClass(u.node,"mceItemMedia")){u.name="media"}})}if(o&&o.plugins.contextmenu){o.plugins.contextmenu.onContextMenu.add(function(u,v,t){if(t.nodeName==="IMG"&&t.className.indexOf("mceItemMedia")!==-1){v.add({title:"media.edit",icon:"media",cmd:"mceMedia"})}})}});o.addCommand("mceMedia",function(){var u,t;t=o.selection.getNode();if(p(t)){u=o.dom.getAttrib(t,"data-mce-json");if(u){u=i.parse(u);tinymce.each(d,function(v){var w=o.dom.getAttrib(t,v);if(w){u[v]=w}});u.type=s.getType(t.className).name.toLowerCase()}}if(!u){u={type:"flash",video:{sources:[]},params:{}}}o.windowManager.open({file:k+"/media.htm",width:430+parseInt(o.getLang("media.delta_width",0)),height:500+parseInt(o.getLang("media.delta_height",0)),inline:1},{plugin_url:k,data:u})});o.addButton("media",{title:"media.desc",cmd:"mceMedia"});o.onNodeChange.add(function(u,t,v){t.setActive("media",p(v))})},convertUrl:function(m,p){var l=this,o=l.editor,n=o.settings,q=n.url_converter,k=n.url_converter_scope||l;if(!m){return m}if(p){return o.documentBaseURI.toAbsolute(m)}return q.call(k,m,"src","object")},getInfo:function(){return{longname:"Media",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/media",version:tinymce.majorVersion+"."+tinymce.minorVersion}},dataToImg:function(p,q){var l=this,n,m,k,o;p.params.src=l.convertUrl(p.params.src,q);m=p.video.attrs;if(m){m.src=l.convertUrl(m.src,q)}if(m){m.poster=l.convertUrl(m.poster,q)}n=e(p.video.sources);if(n){for(o=0;o<n.length;o++){n[o].src=l.convertUrl(n[o].src,q)}}k=l.editor.dom.create("img",{id:p.id,style:p.style,align:p.align,hspace:p.hspace,vspace:p.vspace,src:l.editor.theme.url+"/img/trans.gif","class":"mceItemMedia mceItem"+l.getType(p.type).name,"data-mce-json":i.serialize(p,"'")});k.width=p.width=f(p.width||(p.type=="audio"?"300":"320"));k.height=p.height=f(p.height||(p.type=="audio"?"32":"240"));return k},dataToHtml:function(k,l){return this.editor.serializer.serialize(this.dataToImg(k,l),{forced_root_block:"",force_absolute:l})},htmlToData:function(m){var l,k,n;n={type:"flash",video:{sources:[]},params:{}};l=this.editor.parser.parse(m);k=l.getAll("img")[0];if(k){n=i.parse(k.attr("data-mce-json"));n.type=this.getType(k.attr("class")).name.toLowerCase();tinymce.each(d,function(o){var p=k.attr(o);if(p){n[o]=p}})}return n},getType:function(n){var l,k,m;k=tinymce.explode(n," ");for(l=0;l<k.length;l++){m=this.lookup[k[l]];if(m){return m}}},imgToObject:function(z,p){var u=this,q=u.editor,D,G,k,H,y,F,w,l,t,r,B,o,A,m,C,E;function s(n,I){var M,L,N,K,J;J=q.getParam("flash_video_player_url",u.convertUrl(u.url+"/moxieplayer.swf"));if(J){M=q.documentBaseURI;F.params.src=J;if(q.getParam("flash_video_player_absvideourl",true)){n=M.toAbsolute(n||"",true);I=M.toAbsolute(I||"",true)}N="";L=q.getParam("flash_video_player_flashvars",{url:"$url",poster:"$poster"});tinymce.each(L,function(P,O){P=P.replace(/\$url/,n||"");P=P.replace(/\$poster/,I||"");if(P.length>0){N+=(N?"&":"")+O+"="+escape(P)}});if(N.length){F.params.flashvars=N}K=q.getParam("flash_video_player_params",{allowfullscreen:true,allowscriptaccess:true});tinymce.each(K,function(P,O){F.params[O]=""+P})}}function x(K,J,I,L){G=new h("object",1).attr({id:K.attr("id"),width:f(K.attr("width")),height:f(K.attr("height")),style:J});tinymce.each(I,function(N){var O=L[N];if(N=="class"&&O){O=O.replace(/mceItem.+ ?/g,"")}if(O&&N!="type"){G.attr(N,O)}});for(var n in L.params){var M;M=new h("param",1);M.shortEnded=true;y=L.params[n];if(n==="src"&&r.name==="WindowsMedia"){n="url"}M.attr({name:n,value:y});G.append(M)}if(L.object_html){y=new h("#text",3);y.raw=true;y.value=L.object_html;G.append(y)}if(D){D.append(G)}return G}F=z.attr("data-mce-json");if(!F){return}F=i.parse(F);r=this.getType(z.attr("class"));C=z.attr("data-mce-style");if(!C){C=z.attr("style");if(C){C=q.dom.serializeStyle(q.dom.parseStyle(C,"img"))}}F.width=z.attr("width")||F.width;F.height=z.attr("height")||F.height;if(r.name==="Iframe"){A=new h("iframe",1);tinymce.each(d,function(n){var I=z.attr(n);if(n=="class"&&I){I=I.replace(/mceItem.+ ?/g,"")}if(I&&I.length>0){A.attr(n,I)}});for(H in F.params){A.attr(H,F.params[H])}A.attr({style:C,src:F.params.src});z.replace(A);return}if(this.editor.settings.media_use_script){A=new h("script",1).attr("type","text/javascript");y=new h("#text",3);y.value="write"+r.name+"("+i.serialize(tinymce.extend(F.params,{width:z.attr("width"),height:z.attr("height")}))+");";A.append(y);z.replace(A);return}if(r.name==="Video"&&F.video.sources[0]){D=new h("video",1).attr(tinymce.extend({id:z.attr("id"),width:f(z.attr("width")),height:f(z.attr("height")),style:C},F.video.attrs));if(F.video.attrs){m=F.video.attrs.poster}l=F.video.sources=e(F.video.sources);for(B=0;B<l.length;B++){if(/\.mp4$/.test(l[B].src)){o=l[B].src}}if(!l[0].type){D.attr("src",l[0].src);l.splice(0,1)}for(B=0;B<l.length;B++){w=new h("source",1).attr(l[B]);w.shortEnded=true;D.append(w)}if(o){s(o,m);r=u.getType("flash")}else{F.params.src=""}}if(r.name==="Audio"&&F.video.sources[0]){E=new h("audio",1).attr(tinymce.extend({id:z.attr("id"),width:f(z.attr("width")),height:f(z.attr("height")),style:C},F.video.attrs));if(F.video.attrs){m=F.video.attrs.poster}l=F.video.sources=e(F.video.sources);if(!l[0].type){E.attr("src",l[0].src);l.splice(0,1)}for(B=0;B<l.length;B++){w=new h("source",1).attr(l[B]);w.shortEnded=true;E.append(w)}F.params.src=""}if(r.name==="EmbeddedAudio"){k=new h("embed",1);k.shortEnded=true;k.attr({id:z.attr("id"),width:f(z.attr("width")),height:f(z.attr("height")),style:C,type:z.attr("type")});for(H in F.params){k.attr(H,F.params[H])}tinymce.each(d,function(n){if(F[n]&&n!="type"){k.attr(n,F[n])}});F.params.src=""}if(F.params.src){if(/\.flv$/i.test(F.params.src)){s(F.params.src,"")}if(p&&p.force_absolute){F.params.src=q.documentBaseURI.toAbsolute(F.params.src)}G=x(z,C,d,F,D);if(this.editor.getParam("media_strict",true)){G.attr({data:F.params.src,type:r.mimes[0]})}else{if(r.clsids[0]){G.attr({classid:"clsid:"+r.clsids[0],codebase:r.codebase})}k=new h("embed",1);k.shortEnded=true;k.attr({id:z.attr("id"),width:f(z.attr("width")),height:f(z.attr("height")),style:C,type:r.mimes[0]});for(H in F.params){k.attr(H,F.params[H])}tinymce.each(d,function(n){if(F[n]&&n!="type"){k.attr(n,F[n])}});G.append(k)}}else{if(r.name==="Object"){delete F.params.src;G=x(z,C,d,F,D)}}if(D){if(F.video_html){y=new h("#text",3);y.raw=true;y.value=F.video_html;D.append(y)}}if(E){if(F.video_html){y=new h("#text",3);y.raw=true;y.value=F.video_html;E.append(y)}}var v=D||E||G||k;if(v){z.replace(v)}else{z.remove()}},objectToImg:function(D){var M,l,G,t,N,O,z,B,y,H,F,u,r,J,C,m,L,p,I=this.lookup,n,A,w=this.editor.settings.url_converter,o=this.editor.settings.url_converter_scope,x,s,E,k;function v(P){return new tinymce.html.Serializer({inner:true,validate:false}).serialize(P)}function K(Q,P){return I[(Q.attr(P)||"").toLowerCase()]}function q(Q){var P=Q.replace(/^.*\.([^.]+)$/,"$1");return I[P.toLowerCase()||""]}if(!D.parent){return}if(D.name==="script"){if(D.firstChild){n=j.exec(D.firstChild.value)}if(!n){return}p=n[1];L={video:{},params:i.parse(n[2])};B=L.params.width;y=L.params.height}L=L||{video:{},params:{}};N=new h("img",1);N.attr({src:this.editor.theme.url+"/img/trans.gif"});O=D.name;if(O==="video"||O=="audio"){G=D;M=D.getAll("object")[0];l=D.getAll("embed")[0];B=G.attr("width");y=G.attr("height");z=G.attr("id");L.video={attrs:{},sources:[]};A=L.video.attrs;for(O in G.attributes.map){A[O]=G.attributes.map[O]}C=D.attr("src");if(C){L.video.sources.push({src:w.call(o,C,"src",D.name)})}m=G.getAll("source");for(F=0;F<m.length;F++){C=m[F].remove();L.video.sources.push({src:w.call(o,C.attr("src"),"src","source"),type:C.attr("type"),media:C.attr("media")})}if(A.poster){A.poster=w.call(o,A.poster,"poster",D.name)}}if(D.name==="object"){M=D;l=D.getAll("embed")[0]}if(D.name==="embed"){l=D}if(D.name==="iframe"){t=D;p="Iframe"}if(M){H=H||M.attr("style");z=z||M.attr("id");x=x||M.attr("hspace");s=s||M.attr("vspace");E=E||M.attr("align");k=k||M.attr("bgcolor");L.name=M.attr("name");L["class"]=M.attr("class");J=M.getAll("param");for(F=0;F<J.length;F++){r=J[F];O=r.remove().attr("name");if(!c[O]){L.params[O]=r.attr("value")}}B=B||M.attr("width")||L.params.width;y=y||M.attr("height")||L.params.height;L.params.src=L.params.src||M.attr("data")}if(l){B=B||l.attr("width");y=y||l.attr("height");H=H||l.attr("style");z=z||l.attr("id");x=x||l.attr("hspace");s=s||l.attr("vspace");E=E||l.attr("align");k=k||l.attr("bgcolor");for(O in l.attributes.map){if(!b[O]&&!L.params[O]){L.params[O]=l.attributes.map[O]}}}if(t){B=f(t.attr("width"));y=f(t.attr("height"));H=H||t.attr("style");z=t.attr("id");x=t.attr("hspace");s=t.attr("vspace");E=t.attr("align");k=t.attr("bgcolor");tinymce.each(d,function(P){N.attr(P,t.attr(P))});for(O in t.attributes.map){if(!b[O]&&!L.params[O]){L.params[O]=t.attributes.map[O]}}}if(L.params.movie){L.params.src=L.params.src||L.params.movie;delete L.params.movie}if(L.params.src){L.params.src=w.call(o,L.params.src,"src","object")}if(G){if(D.name==="video"){p=I.video.name}else{if(D.name==="audio"){p=I.audio.name}}}if(l&&!p){p=(K(l,"type")||q(L.params.src)||{}).name}if(M&&!p){p=(K(M,"clsid")||K(M,"classid")||K(M,"type")||{name:"Object"}).name}if(l&&p=="EmbeddedAudio"){L.params.type=l.attr("type")}D.replace(N);if(l){l.remove()}if(M){u=v(M.remove());if(u){L.object_html=u}}if(G){u=v(G.remove());if(u){L.video_html=u}}L.hspace=x;L.vspace=s;L.align=E;L.bgcolor=k;N.attr({id:z,"class":"mceItemMedia mceItem"+(p||"Flash"),style:H,width:B||(D.name=="audio"?"300":"320"),height:y||(D.name=="audio"?"32":"240"),hspace:x,vspace:s,align:E,bgcolor:k,"data-mce-json":i.serialize(L,"'")})}});tinymce.PluginManager.add("media",tinymce.plugins.MediaPlugin)})();
