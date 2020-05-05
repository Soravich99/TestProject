/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/test/_OpaLogger","sap/ui/test/_ParameterValidator","sap/ui/test/autowaiter/_utils"],function($,_,a,b){"use strict";var l=_.getLogger("sap.ui.test.autowaiter._promiseWaiter");var h=_.getLogger("sap.ui.test.autowaiter._promiseWaiter#hasPending");var c=new a({errorPrefix:"sap.ui.test.autowaiter._promiseCounter#extendConfig"});var d={maxDelay:1000};var p=[];function w(o){var O=Promise[o];Promise[o]=function(){var t=false;var P={func:o,args:b.argumentsToString(arguments),stack:b.resolveStackTrace()};var s=e(P);var T=setTimeout(function(){t=true;p.splice(p.indexOf(P),1);l.trace("Long-running promise is ignored:"+s);},d.maxDelay);var C=function(){if(t){return;}p.splice(p.indexOf(P),1);l.trace("Promise complete:"+s);clearTimeout(T);};var g=O.apply(this,arguments);p.push(P);l.trace("New pending promise:"+s);g.then(C,C);return g;};}w("resolve");w("all");w("race");w("reject");function e(P){return"\nPromise: Function: "+P.func+" Args: "+P.args+" Stack: "+P.stack;}function f(){var L="There are "+p.length+" pending promises\n";p.forEach(function(P){L+=e(P);});h.debug(L);}return{hasPending:function(){var H=p.length>0;if(H){f();}return H;},extendConfig:function(C){c.validate({inputToValidate:C,validationInfo:{maxDelay:"numeric"}});$.extend(d,C);}};},true);
