tinyMCEPopup.requireLangPack();
function init(){tinyMCEPopup.resizeToInnerSize();document.getElementById('backgroundimagebrowsercontainer').innerHTML=getBrowserHTML('backgroundimagebrowser','backgroundimage','image','table');document.getElementById('bgcolor_pickcontainer').innerHTML=getColorPickerHTML('bgcolor_pick','bgcolor');var i=tinyMCEPopup.editor;var d=i.dom;var t=d.getParent(i.selection.getStart(),"tr");var f=document.forms[0];var s=d.parseStyle(d.getAttrib(t,"style"));var r=t.parentNode.nodeName.toLowerCase();var a=d.getAttrib(t,'align');var v=d.getAttrib(t,'valign');var h=trimSize(getStyle(t,'height','height'));var c=d.getAttrib(t,'class');var b=convertRGBToHex(getStyle(t,'bgcolor','backgroundColor'));var e=getStyle(t,'background','backgroundImage').replace(new RegExp("url\\(['\"]?([^'\"]*)['\"]?\\)",'gi'),"$1");var g=d.getAttrib(t,'id');var l=d.getAttrib(t,'lang');var j=d.getAttrib(t,'dir');selectByValue(f,'rowtype',r);setActionforRowType(f,r);if(d.select('td.mceSelected,th.mceSelected',t).length==0){addClassesToList('class','table_row_styles');TinyMCE_EditableSelects.init();f.bgcolor.value=b;f.backgroundimage.value=e;f.height.value=h;f.id.value=g;f.lang.value=l;f.style.value=d.serializeStyle(s);selectByValue(f,'align',a);selectByValue(f,'valign',v);selectByValue(f,'class',c,true,true);selectByValue(f,'dir',j);if(isVisible('backgroundimagebrowser'))document.getElementById('backgroundimage').style.width='180px';updateColor('bgcolor_pick','bgcolor');}else tinyMCEPopup.dom.hide('action');}
function updateAction(){var a=tinyMCEPopup.editor,d=a.dom,t,b,f=document.forms[0];var c=getSelectValue(f,'action');if(!AutoValidator.validate(f)){tinyMCEPopup.alert(AutoValidator.getErrorMessages(f).join('. ')+'.');return false;}tinyMCEPopup.restoreSelection();t=d.getParent(a.selection.getStart(),"tr");b=d.getParent(a.selection.getStart(),"table");if(d.select('td.mceSelected,th.mceSelected',t).length>0){tinymce.each(b.rows,function(e){var i;for(i=0;i<e.cells.length;i++){if(d.hasClass(e.cells[i],'mceSelected')){updateRow(e,true);return;}}});a.addVisual();a.nodeChanged();a.execCommand('mceEndUndoLevel');tinyMCEPopup.close();return;}switch(c){case"row":updateRow(t);break;case"all":var r=b.getElementsByTagName("tr");for(var i=0;i<r.length;i++)updateRow(r[i],true);break;case"odd":case"even":var r=b.getElementsByTagName("tr");for(var i=0;i<r.length;i++){if((i%2==0&&c=="odd")||(i%2!=0&&c=="even"))updateRow(r[i],true,true);}break;}a.addVisual();a.nodeChanged();a.execCommand('mceEndUndoLevel');tinyMCEPopup.close();}
function updateRow(t,s,a){var b=tinyMCEPopup.editor;var f=document.forms[0];var d=b.dom;var c=t.parentNode.nodeName.toLowerCase();var r=getSelectValue(f,'rowtype');var e=b.getDoc();if(!s)d.setAttrib(t,'id',f.id.value);d.setAttrib(t,'align',getSelectValue(f,'align'));d.setAttrib(t,'vAlign',getSelectValue(f,'valign'));d.setAttrib(t,'lang',f.lang.value);d.setAttrib(t,'dir',getSelectValue(f,'dir'));d.setAttrib(t,'style',d.serializeStyle(d.parseStyle(f.style.value)));d.setAttrib(t,'class',getSelectValue(f,'class'));d.setAttrib(t,'background','');d.setAttrib(t,'bgColor','');d.setAttrib(t,'height','');t.style.height=getCSSSize(f.height.value);t.style.backgroundColor=f.bgcolor.value;if(f.backgroundimage.value!="")t.style.backgroundImage="url('"+f.backgroundimage.value+"')";else t.style.backgroundImage='';if(c!=r&&!a){var n=t.cloneNode(1);var g=d.getParent(t,"table");var h=r;var j=null;for(var i=0;i<g.childNodes.length;i++){if(g.childNodes[i].nodeName.toLowerCase()==h)j=g.childNodes[i];}if(j==null){j=e.createElement(h);if(g.firstChild.nodeName=='CAPTION')b.dom.insertAfter(j,g.firstChild);else g.insertBefore(j,g.firstChild);}j.appendChild(n);t.parentNode.removeChild(t);t=n;}d.setAttrib(t,'style',d.serializeStyle(d.parseStyle(t.style.cssText)));}
function changedBackgroundImage(){var f=document.forms[0],d=tinyMCEPopup.editor.dom;var s=d.parseStyle(f.style.value);s['background-image']="url('"+f.backgroundimage.value+"')";f.style.value=d.serializeStyle(s);}
function changedStyle(){var f=document.forms[0],d=tinyMCEPopup.editor.dom;var s=d.parseStyle(f.style.value);if(s['background-image'])f.backgroundimage.value=s['background-image'].replace(new RegExp("url\\('?([^']*)'?\\)",'gi'),"$1");else f.backgroundimage.value='';if(s['height'])f.height.value=trimSize(s['height']);if(s['background-color']){f.bgcolor.value=s['background-color'];updateColor('bgcolor_pick','bgcolor');}}
function changedSize(){var f=document.forms[0],d=tinyMCEPopup.editor.dom;var s=d.parseStyle(f.style.value);var h=f.height.value;if(h!="")s['height']=getCSSSize(h);else s['height']="";f.style.value=d.serializeStyle(s);}
function changedColor(){var f=document.forms[0],d=tinyMCEPopup.editor.dom;var s=d.parseStyle(f.style.value);s['background-color']=f.bgcolor.value;f.style.value=d.serializeStyle(s);}
function changedRowType(){var f=document.forms[0];var r=getSelectValue(f,'rowtype');setActionforRowType(f,r);}
function setActionforRowType(f,r){if(r==="tbody"){f.action.disabled=false;}else{selectByValue(f,'action',"row");f.action.disabled=true;}}
tinyMCEPopup.onInit.add(init);