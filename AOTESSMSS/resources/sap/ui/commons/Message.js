/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./Dialog','./library','sap/ui/core/Control'],function(q,D,l,C){"use strict";var M=C.extend("sap.ui.commons.Message",{metadata:{deprecated:true,library:"sap.ui.commons",properties:{type:{type:"sap.ui.commons.MessageType",group:"Behavior",defaultValue:null},text:{type:"string",group:"Data",defaultValue:null},associatedElementId:{type:"string",group:"Data",defaultValue:null},design:{type:"string",group:"Misc",defaultValue:null}}}});M.prototype.init=function(){this.isRTL=sap.ui.getCore().getConfiguration().getRTL();this.fnCallBack=null;this.oLink=null;this.oContainer=null;this.oDetails=null;this.oBtnOK=null;};M.prototype.exit=function(){if(this.oLink){this.oLink.destroy();this.oLink=null;}if(this.oDetails){this.oDetails.destroy();this.oDetails=null;}if(this.oContainer){this.oContainer.destroy();this.oContainer=null;}if(this.oBtnOK){this.oBtnOK.destroy();this.oBtnOK=null;}};M.closeDetails=function(c){c.getSource().getParent().close();};M.prototype.closeDetails=function(){if(this.oContainer){this.oContainer.close();}};M.prototype.openDetails=function(){if(!this.oContainer){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");var O=r.getText("MSGBAR_DETAILS_DIALOG_CLOSE");var t=r.getText("MSGBAR_DETAILS_DIALOG_TITLE");var h=this.fnCallBack(this.getId());this.oDetails=new M({type:this.getType(),text:h});this.oBtnOK=new sap.ui.commons.Button({text:O,press:M.closeDetails});this.oContainer=new D();this.oContainer.addContent(this.oDetails);this.oContainer.setTitle(t);this.oContainer.addButton(this.oBtnOK);}var c=this.oContainer.getId();var o=0;var a=q('.sapUiDlg');for(var i=a.length-1;i>=0;i--){if(q(a[i]).css('visibility')!="visible"){a.splice(i,1);}else if(a[i].id==c){a.splice(i,1);}else{o=Math.max(o,q(a[i]).css('zIndex'));}}var w=this.oContainer.isOpen();this.oContainer.open();var j=this.oContainer.$();var b=j.rect();if(a.length==0){if(this.isRTL){b.left=Number(j.css('right').replace("px",""));}this.setLastOffsets(b);return;}if(w){if(o>j.css('zIndex')){j.css('zIndex',o+1);}return;}var n=this.getNextOffsets();j.css('top',(n.top-M.TOP_INCR)+"px");if(this.isRTL){j.css('right',(n.left-M.LEFT_INCR)+"px");}else{j.css('left',(n.left-M.LEFT_INCR)+"px");}var b=j.rect();var s=q(window).scrollTop();var d=q(window).scrollLeft();var e=-d;if((q(window).height()+s)<(n.top+b.height)){n.top=s;this.setLastOffsets(n);}if(this.isRTL){if((q(window).width()+e)<(n.left+b.width)){n.left=e;this.setLastOffsets(n);}j.animate({top:n.top+"px",right:n.left+"px"},200);}else{if((q(window).width()+d)<(n.left+b.width)){n.left=d;this.setLastOffsets(n);}j.animate({top:n.top+"px",left:n.left+"px"},200);}};M.TOP_INCR=20;M.LEFT_INCR=10;(function(){var L=null;M.setLastOffsets=function(o){L=o;};M.prototype.setLastOffsets=function(o){M.setLastOffsets(o);};M.getNextOffsets=function(){L.top+=M.TOP_INCR;L.left+=M.LEFT_INCR;return L;};M.prototype.getNextOffsets=function(){return M.getNextOffsets();};}());M.prototype.bindDetails=function(c){this.fnCallBack=c;};return M;},true);
