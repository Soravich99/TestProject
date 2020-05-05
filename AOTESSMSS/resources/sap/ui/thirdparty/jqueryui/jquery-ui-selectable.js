/*!
 * jQuery UI Selectable 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function($,u){$.widget("ui.selectable",$.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var s,t=this;this.element.addClass("ui-selectable");this.dragged=false;this.refresh=function(){s=$(t.options.filter,t.element[0]);s.addClass("ui-selectee");s.each(function(){var a=$(this),p=a.offset();$.data(this,"selectable-item",{element:this,$element:a,left:p.left,top:p.top,right:p.left+a.outerWidth(),bottom:p.top+a.outerHeight(),startselected:false,selected:a.hasClass("ui-selected"),selecting:a.hasClass("ui-selecting"),unselecting:a.hasClass("ui-unselecting")});});};this.refresh();this.selectees=s.addClass("ui-selectee");this._mouseInit();this.helper=$("<div class='ui-selectable-helper'></div>");},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy();},_mouseStart:function(e){var t=this,o=this.options;this.opos=[e.pageX,e.pageY];if(this.options.disabled){return;}this.selectees=$(o.filter,this.element[0]);this._trigger("start",e);$(o.appendTo).append(this.helper);this.helper.css({"left":e.pageX,"top":e.pageY,"width":0,"height":0});if(o.autoRefresh){this.refresh();}this.selectees.filter(".ui-selected").each(function(){var s=$.data(this,"selectable-item");s.startselected=true;if(!e.metaKey&&!e.ctrlKey){s.$element.removeClass("ui-selected");s.selected=false;s.$element.addClass("ui-unselecting");s.unselecting=true;t._trigger("unselecting",e,{unselecting:s.element});}});$(e.target).parents().addBack().each(function(){var d,s=$.data(this,"selectable-item");if(s){d=(!e.metaKey&&!e.ctrlKey)||!s.$element.hasClass("ui-selected");s.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting");s.unselecting=!d;s.selecting=d;s.selected=d;if(d){t._trigger("selecting",e,{selecting:s.element});}else{t._trigger("unselecting",e,{unselecting:s.element});}return false;}});},_mouseDrag:function(e){this.dragged=true;if(this.options.disabled){return;}var t,a=this,o=this.options,x=this.opos[0],y=this.opos[1],b=e.pageX,c=e.pageY;if(x>b){t=b;b=x;x=t;}if(y>c){t=c;c=y;y=t;}this.helper.css({left:x,top:y,width:b-x,height:c-y});this.selectees.each(function(){var s=$.data(this,"selectable-item"),h=false;if(!s||s.element===a.element[0]){return;}if(o.tolerance==="touch"){h=(!(s.left>b||s.right<x||s.top>c||s.bottom<y));}else if(o.tolerance==="fit"){h=(s.left>x&&s.right<b&&s.top>y&&s.bottom<c);}if(h){if(s.selected){s.$element.removeClass("ui-selected");s.selected=false;}if(s.unselecting){s.$element.removeClass("ui-unselecting");s.unselecting=false;}if(!s.selecting){s.$element.addClass("ui-selecting");s.selecting=true;a._trigger("selecting",e,{selecting:s.element});}}else{if(s.selecting){if((e.metaKey||e.ctrlKey)&&s.startselected){s.$element.removeClass("ui-selecting");s.selecting=false;s.$element.addClass("ui-selected");s.selected=true;}else{s.$element.removeClass("ui-selecting");s.selecting=false;if(s.startselected){s.$element.addClass("ui-unselecting");s.unselecting=true;}a._trigger("unselecting",e,{unselecting:s.element});}}if(s.selected){if(!e.metaKey&&!e.ctrlKey&&!s.startselected){s.$element.removeClass("ui-selected");s.selected=false;s.$element.addClass("ui-unselecting");s.unselecting=true;a._trigger("unselecting",e,{unselecting:s.element});}}}});return false;},_mouseStop:function(e){var t=this;this.dragged=false;$(".ui-unselecting",this.element[0]).each(function(){var s=$.data(this,"selectable-item");s.$element.removeClass("ui-unselecting");s.unselecting=false;s.startselected=false;t._trigger("unselected",e,{unselected:s.element});});$(".ui-selecting",this.element[0]).each(function(){var s=$.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected");s.selecting=false;s.selected=true;s.startselected=true;t._trigger("selected",e,{selected:s.element});});this._trigger("stop",e);this.helper.remove();return false;}});})(jQuery);
