(function(){function f(n){do{if(n.className&&n.className.indexOf('mceItemLayer')!=-1){return n;}}while(n=n.parentNode);};tinymce.create('tinymce.plugins.Layer',{init:function(a,u){var t=this;t.editor=a;a.addCommand('mceInsertLayer',t._insertLayer,t);a.addCommand('mceMoveForward',function(){t._move(1);});a.addCommand('mceMoveBackward',function(){t._move(-1);});a.addCommand('mceMakeAbsolute',function(){t._toggleAbsolute();});a.addButton('moveforward',{title:'layer.forward_desc',cmd:'mceMoveForward'});a.addButton('movebackward',{title:'layer.backward_desc',cmd:'mceMoveBackward'});a.addButton('absolute',{title:'layer.absolute_desc',cmd:'mceMakeAbsolute'});a.addButton('insertlayer',{title:'layer.insertlayer_desc',cmd:'mceInsertLayer'});a.onInit.add(function(){var d=a.dom;if(tinymce.isIE)a.getDoc().execCommand('2D-Position',false,true);});a.onMouseUp.add(function(a,e){var l=f(e.target);if(l){a.dom.setAttrib(l,'data-mce-style','');}});a.onMouseDown.add(function(a,e){var n=e.target,d=a.getDoc(),p;if(tinymce.isGecko){if(f(n)){if(d.designMode!=='on'){d.designMode='on';n=d.body;p=n.parentNode;p.removeChild(n);p.appendChild(n);}}else if(d.designMode=='on'){d.designMode='off';}}});a.onNodeChange.add(t._nodeChange,t);a.onVisualAid.add(t._visualAid,t);},getInfo:function(){return{longname:'Layer',author:'Moxiecode Systems AB',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/layer',version:tinymce.majorVersion+"."+tinymce.minorVersion};},_nodeChange:function(e,c,n){var l,p;l=this._getParentLayer(n);p=e.dom.getParent(n,'DIV,P,IMG');if(!p){c.setDisabled('absolute',1);c.setDisabled('moveforward',1);c.setDisabled('movebackward',1);}else{c.setDisabled('absolute',0);c.setDisabled('moveforward',!l);c.setDisabled('movebackward',!l);c.setActive('absolute',l&&l.style.position.toLowerCase()=="absolute");}},_visualAid:function(a,e,s){var d=a.dom;tinymce.each(d.select('div,p',e),function(e){if(/^(absolute|relative|fixed)$/i.test(e.style.position)){if(s)d.addClass(e,'mceItemVisualAid');else d.removeClass(e,'mceItemVisualAid');d.addClass(e,'mceItemLayer');}});},_move:function(d){var e=this.editor,i,z=[],l=this._getParentLayer(e.selection.getNode()),c=-1,a=-1,b;b=[];tinymce.walk(e.getBody(),function(n){if(n.nodeType==1&&/^(absolute|relative|static)$/i.test(n.style.position))b.push(n);},'childNodes');for(i=0;i<b.length;i++){z[i]=b[i].style.zIndex?parseInt(b[i].style.zIndex):0;if(c<0&&b[i]==l)c=i;}if(d<0){for(i=0;i<z.length;i++){if(z[i]<z[c]){a=i;break;}}if(a>-1){b[c].style.zIndex=z[a];b[a].style.zIndex=z[c];}else{if(z[c]>0)b[c].style.zIndex=z[c]-1;}}else{for(i=0;i<z.length;i++){if(z[i]>z[c]){a=i;break;}}if(a>-1){b[c].style.zIndex=z[a];b[a].style.zIndex=z[c];}else b[c].style.zIndex=z[c]+1;}e.execCommand('mceRepaint');},_getParentLayer:function(n){return this.editor.dom.getParent(n,function(n){return n.nodeType==1&&/^(absolute|relative|static)$/i.test(n.style.position);});},_insertLayer:function(){var e=this.editor,d=e.dom,p=d.getPos(d.getParent(e.selection.getNode(),'*')),b=e.getBody();e.dom.add(b,'div',{style:{position:'absolute',left:p.x,top:(p.y>20?p.y:20),width:100,height:100},'class':'mceItemVisualAid mceItemLayer'},e.selection.getContent()||e.getLang('layer.content'));if(tinymce.isIE)d.setHTML(b,b.innerHTML);},_toggleAbsolute:function(){var e=this.editor,l=this._getParentLayer(e.selection.getNode());if(!l)l=e.dom.getParent(e.selection.getNode(),'DIV,P,IMG');if(l){if(l.style.position.toLowerCase()=="absolute"){e.dom.setStyles(l,{position:'',left:'',top:'',width:'',height:''});e.dom.removeClass(l,'mceItemVisualAid');e.dom.removeClass(l,'mceItemLayer');}else{if(l.style.left=="")l.style.left=20+'px';if(l.style.top=="")l.style.top=20+'px';if(l.style.width=="")l.style.width=l.width?(l.width+'px'):'100px';if(l.style.height=="")l.style.height=l.height?(l.height+'px'):'100px';l.style.position="absolute";e.dom.setAttrib(l,'data-mce-style','');e.addVisual(e.getBody());}e.execCommand('mceRepaint');e.nodeChanged();}}});tinymce.PluginManager.add('layer',tinymce.plugins.Layer);})();
