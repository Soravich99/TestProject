define("tinymce/imagetoolsplugin/ImagePanel",["global!tinymce.ui.Control","global!tinymce.ui.DragHelper","global!tinymce.geom.Rect","global!tinymce.util.Tools","global!tinymce.util.Promise","tinymce/imagetoolsplugin/CropRect"],function(C,D,R,T,P,a){function l(i){return new P(function(r){function b(){i.removeEventListener('load',b);r(i);}if(i.complete){r(i);}else{i.addEventListener('load',b);}});}return C.extend({Defaults:{classes:"imagepanel"},selection:function(r){if(arguments.length){this.state.set('rect',r);return this;}return this.state.get('rect');},imageSize:function(){var v=this.state.get('viewRect');return{w:v.w,h:v.h};},toggleCropRect:function(s){this.state.set('cropEnabled',s);},imageSrc:function(u){var s=this,i=new Image();i.src=u;l(i).then(function(){var r,$,b=s.state.get('viewRect');$=s.$el.find('img');if($[0]){$.replaceWith(i);}else{s.getEl().appendChild(i);}r={x:0,y:0,w:i.naturalWidth,h:i.naturalHeight};s.state.set('viewRect',r);s.state.set('rect',R.inflate(r,-20,-20));if(!b||b.w!=r.w||b.h!=r.h){s.zoomFit();}s.repaintImage();s.fire('load');});},zoom:function(v){if(arguments.length){this.state.set('zoom',v);return this;}return this.state.get('zoom');},postRender:function(){this.imageSrc(this.settings.imageSrc);return this._super();},zoomFit:function(){var s=this,$,p,b,w,h,z,c;c=10;$=s.$el.find('img');p=s.getEl().clientWidth;b=s.getEl().clientHeight;w=$[0].naturalWidth;h=$[0].naturalHeight;z=Math.min((p-c)/w,(b-c)/h);if(z>=1){z=1;}s.zoom(z);},repaintImage:function(){var x,y,w,h,p,b,$,z,r,e;e=this.getEl();z=this.zoom();r=this.state.get('rect');$=this.$el.find('img');p=e.offsetWidth;b=e.offsetHeight;w=$[0].naturalWidth*z;h=$[0].naturalHeight*z;x=Math.max(0,p/2-w/2);y=Math.max(0,b/2-h/2);$.css({left:x,top:y,width:w,height:h});if(this.cropRect){this.cropRect.setRect({x:r.x*z+x,y:r.y*z+y,w:r.w*z,h:r.h*z});this.cropRect.setClampRect({x:x,y:y,w:w,h:h});this.cropRect.setViewPortRect({x:0,y:0,w:p,h:b});}},bindStates:function(){var s=this;function b(r){s.cropRect=new a(r,s.state.get('viewRect'),s.state.get('viewRect'),s.getEl(),function(){s.fire('crop');});s.cropRect.on('updateRect',function(e){var r=e.rect,z=s.zoom();r={x:Math.round(r.x/z),y:Math.round(r.y/z),w:Math.round(r.w/z),h:Math.round(r.h/z)};s.state.set('rect',r);});s.on('remove',s.cropRect.destroy);}s.state.on('change:cropEnabled',function(e){s.cropRect.toggleVisibility(e.value);s.repaintImage();});s.state.on('change:zoom',function(){s.repaintImage();});s.state.on('change:rect',function(e){var r=e.value;if(!s.cropRect){b(r);}s.cropRect.setRect(r);});}});});
