(function(){var e=tinymce.each,N=tinymce.html.Node;tinymce.create('tinymce.plugins.FullPagePlugin',{init:function(a,u){var t=this;t.editor=a;a.addCommand('mceFullPageProperties',function(){a.windowManager.open({file:u+'/fullpage.htm',width:430+parseInt(a.getLang('fullpage.delta_width',0)),height:495+parseInt(a.getLang('fullpage.delta_height',0)),inline:1},{plugin_url:u,data:t._htmlToData()});});a.addButton('fullpage',{title:'fullpage.desc',cmd:'mceFullPageProperties'});a.onBeforeSetContent.add(t._setContent,t);a.onGetContent.add(t._getContent,t);},getInfo:function(){return{longname:'Fullpage',author:'Moxiecode Systems AB',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/fullpage',version:tinymce.majorVersion+"."+tinymce.minorVersion};},_htmlToData:function(){var h=this._parseHeader(),d={},a,m,b=this.editor;function g(a,n){var v=a.attr(n);return v||'';}d.fontface=b.getParam("fullpage_default_fontface","");d.fontsize=b.getParam("fullpage_default_fontsize","");a=h.firstChild;if(a.type==7){d.xml_pi=true;m=/encoding="([^"]+)"/.exec(a.value);if(m){d.docencoding=m[1];}}a=h.getAll('#doctype')[0];if(a){d.doctype='<!DOCTYPE'+a.value+">";}a=h.getAll('title')[0];if(a&&a.firstChild){d.metatitle=a.firstChild.value;}e(h.getAll('meta'),function(c){var n=c.attr('name'),f=c.attr('http-equiv'),m;if(n){d['meta'+n.toLowerCase()]=c.attr('content');}else if(f=="Content-Type"){m=/charset\s*=\s*(.*)\s*/gi.exec(c.attr('content'));if(m){d.docencoding=m[1];}}});a=h.getAll('html')[0];if(a){d.langcode=g(a,'lang')||g(a,'xml:lang');}a=h.getAll('link')[0];if(a&&a.attr('rel')=='stylesheet'){d.stylesheet=a.attr('href');}a=h.getAll('body')[0];if(a){d.langdir=g(a,'dir');d.style=g(a,'style');d.visited_color=g(a,'vlink');d.link_color=g(a,'link');d.active_color=g(a,'alink');}return d;},_dataToHtml:function(d){var h,a,b,c,v,f=this.editor.dom;function s(c,n,v){c.attr(n,v?v:undefined);}function g(n){if(a.firstChild){a.insert(n,a.firstChild);}else{a.append(n);}}h=this._parseHeader();a=h.getAll('head')[0];if(!a){c=h.getAll('html')[0];a=new N('head',1);if(c.firstChild){c.insert(a,c.firstChild,true);}else{c.append(a);}}c=h.firstChild;if(d.xml_pi){v='version="1.0"';if(d.docencoding){v+=' encoding="'+d.docencoding+'"';}if(c.type!=7){c=new N('xml',7);h.insert(c,h.firstChild,true);}c.value=v;}else if(c&&c.type==7){c.remove();}c=h.getAll('#doctype')[0];if(d.doctype){if(!c){c=new N('#doctype',10);if(d.xml_pi){h.insert(c,h.firstChild);}else{g(c);}}c.value=d.doctype.substring(9,d.doctype.length-1);}else if(c){c.remove();}c=h.getAll('title')[0];if(d.metatitle){if(!c){c=new N('title',1);c.append(new N('#text',3)).value=d.metatitle;g(c);}}if(d.docencoding){c=null;e(h.getAll('meta'),function(m){if(m.attr('http-equiv')=='Content-Type'){c=m;}});if(!c){c=new N('meta',1);c.attr('http-equiv','Content-Type');c.shortEnded=true;g(c);}c.attr('content','text/html; charset='+d.docencoding);}e('keywords,description,author,copyright,robots'.split(','),function(n){var j=h.getAll('meta'),i,m,v=d['meta'+n];for(i=0;i<j.length;i++){m=j[i];if(m.attr('name')==n){if(v){m.attr('content',v);}else{m.remove();}return;}}if(v){c=new N('meta',1);c.attr('name',n);c.attr('content',v);c.shortEnded=true;g(c);}});c=h.getAll('link')[0];if(c&&c.attr('rel')=='stylesheet'){if(d.stylesheet){c.attr('href',d.stylesheet);}else{c.remove();}}else if(d.stylesheet){c=new N('link',1);c.attr({rel:'stylesheet',text:'text/css',href:d.stylesheet});c.shortEnded=true;g(c);}c=h.getAll('body')[0];if(c){s(c,'dir',d.langdir);s(c,'style',d.style);s(c,'vlink',d.visited_color);s(c,'link',d.link_color);s(c,'alink',d.active_color);f.setAttribs(this.editor.getBody(),{style:d.style,dir:d.dir,vLink:d.visited_color,link:d.link_color,aLink:d.active_color});}c=h.getAll('html')[0];if(c){s(c,'lang',d.langcode);s(c,'xml:lang',d.langcode);}b=new tinymce.html.Serializer({validate:false,indent:true,apply_source_formatting:true,indent_before:'head,html,body,meta,title,script,link,style',indent_after:'head,html,body,meta,title,script,link,style'}).serialize(h);this.head=b.substring(0,b.indexOf('</body>'));},_parseHeader:function(){return new tinymce.html.DomParser({validate:false,root_name:'#document'}).parse(this.head);},_setContent:function(b,o){var c=this,d,f,g=o.content,h,i='',j=c.editor.dom,k;function l(s){return s.replace(/<\/?[A-Z]+/g,function(a){return a.toLowerCase();});}if(o.format=='raw'&&c.head){return;}if(o.source_view&&b.getParam('fullpage_hide_in_source_view')){return;}g=g.replace(/<(\/?)BODY/gi,'<$1body');d=g.indexOf('<body');if(d!=-1){d=g.indexOf('>',d);c.head=l(g.substring(0,d+1));f=g.indexOf('</body',d);if(f==-1){f=g.length;}o.content=g.substring(d+1,f);c.foot=l(g.substring(f));}else{c.head=this._getDefaultHeader();c.foot='\n</body>\n</html>';}h=c._parseHeader();e(h.getAll('style'),function(n){if(n.firstChild){i+=n.firstChild.value;}});k=h.getAll('body')[0];if(k){j.setAttribs(c.editor.getBody(),{style:k.attr('style')||'',dir:k.attr('dir')||'',vLink:k.attr('vlink')||'',link:k.attr('link')||'',aLink:k.attr('alink')||''});}j.remove('fullpage_styles');if(i){j.add(c.editor.getDoc().getElementsByTagName('head')[0],'style',{id:'fullpage_styles'},i);k=j.get('fullpage_styles');if(k.styleSheet){k.styleSheet.cssText=i;}}},_getDefaultHeader:function(){var h='',a=this.editor,v,s='';if(a.getParam('fullpage_default_xml_pi')){h+='<?xml version="1.0" encoding="'+a.getParam('fullpage_default_encoding','ISO-8859-1')+'" ?>\n';}h+=a.getParam('fullpage_default_doctype','<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');h+='\n<html>\n<head>\n';if(v=a.getParam('fullpage_default_title')){h+='<title>'+v+'</title>\n';}if(v=a.getParam('fullpage_default_encoding')){h+='<meta http-equiv="Content-Type" content="text/html; charset='+v+'" />\n';}if(v=a.getParam('fullpage_default_font_family')){s+='font-family: '+v+';';}if(v=a.getParam('fullpage_default_font_size')){s+='font-size: '+v+';';}if(v=a.getParam('fullpage_default_text_color')){s+='color: '+v+';';}h+='</head>\n<body'+(s?' style="'+s+'"':'')+'>\n';return h;},_getContent:function(a,o){var s=this;if(!o.source_view||!a.getParam('fullpage_hide_in_source_view')){o.content=tinymce.trim(s.head)+'\n'+tinymce.trim(o.content)+'\n'+tinymce.trim(s.foot);}}});tinymce.PluginManager.add('fullpage',tinymce.plugins.FullPagePlugin);})();
