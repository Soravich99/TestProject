(function(){tinymce.create('tinymce.plugins.InsertDateTime',{init:function(e,u){var t=this;t.editor=e;e.addCommand('mceInsertDate',function(){var s=t._getDateTime(new Date(),e.getParam("plugin_insertdate_dateFormat",e.getLang('insertdatetime.date_fmt')));e.execCommand('mceInsertContent',false,s);});e.addCommand('mceInsertTime',function(){var s=t._getDateTime(new Date(),e.getParam("plugin_insertdate_timeFormat",e.getLang('insertdatetime.time_fmt')));e.execCommand('mceInsertContent',false,s);});e.addButton('insertdate',{title:'insertdatetime.insertdate_desc',cmd:'mceInsertDate'});e.addButton('inserttime',{title:'insertdatetime.inserttime_desc',cmd:'mceInsertTime'});},getInfo:function(){return{longname:'Insert date/time',author:'Moxiecode Systems AB',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/insertdatetime',version:tinymce.majorVersion+"."+tinymce.minorVersion};},_getDateTime:function(d,f){var e=this.editor;function a(v,l){v=""+v;if(v.length<l){for(var i=0;i<(l-v.length);i++)v="0"+v;}return v;};f=f.replace("%D","%m/%d/%y");f=f.replace("%r","%I:%M:%S %p");f=f.replace("%Y",""+d.getFullYear());f=f.replace("%y",""+d.getYear());f=f.replace("%m",a(d.getMonth()+1,2));f=f.replace("%d",a(d.getDate(),2));f=f.replace("%H",""+a(d.getHours(),2));f=f.replace("%M",""+a(d.getMinutes(),2));f=f.replace("%S",""+a(d.getSeconds(),2));f=f.replace("%I",""+((d.getHours()+11)%12+1));f=f.replace("%p",""+(d.getHours()<12?"AM":"PM"));f=f.replace("%B",""+e.getLang("insertdatetime.months_long").split(',')[d.getMonth()]);f=f.replace("%b",""+e.getLang("insertdatetime.months_short").split(',')[d.getMonth()]);f=f.replace("%A",""+e.getLang("insertdatetime.day_long").split(',')[d.getDay()]);f=f.replace("%a",""+e.getLang("insertdatetime.day_short").split(',')[d.getDay()]);f=f.replace("%%","%");return f;}});tinymce.PluginManager.add('insertdatetime',tinymce.plugins.InsertDateTime);})();
