jQuery.sap.declare('sap.portal.ui5.externals.es5shims.functionprototypebind');if(!Function.prototype.bind){Function.prototype.bind=function bind(c){if(typeof this!=='function'){throw new TypeError('Function.prototype.bind - what is trying to be fBound is not callable');}var f=this;var b;if(arguments.length<2){b=function lightBind(){return(!arguments.length)?f.call(c):f.apply(c,arguments);};}else{var s=Array.prototype.slice;var a=(arguments.length>1)&&s.call(arguments,1);b=function heavyBind(){return(arguments.length)?f.apply(c,a.concat(s.call(arguments))):f.apply(c,a);};}b.displayName=f.displayName||f.name;return b;};}
