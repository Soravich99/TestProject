/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/Device'],function(jQuery,Device){'use strict';var bNativeSupport=!!String.prototype.normalize;if(!bNativeSupport&&!Device.browser.mobile){jQuery.sap.require("sap.ui.thirdparty.unorm");jQuery.sap.require("sap.ui.thirdparty.unormdata");String.prototype.normalize=function(s){switch(s){case'NFC':return jQuery.sap.isStringNFC(this)?this:UNorm.nfc(this);case'NFD':return UNorm.nfd(this);case'NFKC':return UNorm.nfkc(this);case'NFKD':return UNorm.nfkd(this);default:return jQuery.sap.isStringNFC(this)?this:UNorm.nfc(this);}};}var mData={};(function(){var N=[[0x0340,0x0341],[0x0343,0x0344],0x374,0x037E,0x387,[0x0958,0x095F],[0x09DC,0x09DD],0x09DF,0x0A33,0x0A36,[0x0A59,0x0A5B],0x0A5E,[0x0B5C,0x0B5D],0x0F43,0x0F4D,0x0F52,0x0F57,0x0F5C,0x0F69,0x0F73,[0x0F75,0x0F76],0x0F78,0x0F81,0x0F93,0x0F9D,0x0FA2,0x0FA7,0x0FAC,0x0FB9,0x1F71,0x1F73,0x1F75,0x1F77,0x1F79,0x1F7B,0x1F7D,0x1FBB,0x1FBE,0x1FC9,0x1FCB,0x1FD3,0x1FDB,0x1FE3,0x1FEB,[0x1FEE,0x1FEF],0x1FF9,0x1FFB,0x1FFD,[0x2000,0x2001],0x2126,[0x212A,0x212B],0x2329,0x232A,0x2ADC,[0xF900,0xFA0D],0xFA10,0xFA12,[0xFA15,0xFA1E],0xFA20,0xFA22,[0xFA25,0xFA26],[0xFA2A,0xFA6D],[0xFA70,0xFAD9],0xFB1D,0xFB1F,[0xFB2A,0xFB36],[0xFB38,0xFB3C],0xFB3E,[0xFB40,0xFB41],[0xFB43,0xFB44],[0xFB46,0xFB4E],[0x1D15E,0x1D164],[0x1D1BB,0x1D1C0],[0x2F800,0x2FA1D],[0x0300,0x0304],[0x0306,0x030C],0x030F,0x311,[0x0313,0x0314],0x031B,[0x0323,0x0328],[0x032D,0x032E],[0x0330,0x0331],0x338,0x342,0x345,[0x0653,0x0655],0x093C,0x09BE,0x09D7,0x0B3E,0x0B56,0x0B57,0x0BBE,0x0BD7,0x0C56,0x0CC2,[0x0CD5,0x0CD6],0x0D3E,0x0D57,0x0DCA,0x0DCF,0x0DDF,0x102E,[0x1161,0x1175],[0x11A8,0x11C2],0x1B35,[0x3099,0x309A],0x110BA,0x11127,0x1133E,0x11357,0x114B0,0x114BA,0x114BD,0x115AF];for(var i=0;i<N.length;i++){if(typeof N[i]=="number"){mData[N[i]]=true;}else{var a=N[i][0];var b=N[i][1];while(a<=b){mData[a++]=true;}}}}());function isHighSurrogate(c){return c>=0xD800&&c<=0xDBFF;}function isLowSurrogate(c){return c>=0xDC00&&c<=0xDFFF;}function getCanonicalClass(cp){var dunit,hash;hash=cp&0xFF00;dunit=UNorm.UChar.udata[hash];if(dunit===undefined){dunit=UNorm.UChar.udata[hash]={};}else if(typeof dunit==="string"){dunit=UNorm.UChar.udata[hash]=eval("("+dunit+")");}return dunit[cp]&&!!dunit[cp][1]?(dunit[cp][1]&0xff):0;}function isNotAllowed(c){return mData[c];}function nfcQuickCheck(s){if(!/^[\u0001-\u00ff]*$/.test(s)){var l=0;for(var i=0;i<s.length;++i){var c=s.charCodeAt(i);if(isHighSurrogate(c)){var n=s.charCodeAt(i+1);if(isLowSurrogate(n)){c=(c-0xD800)*0x400+(n-0xDC00)+0x10000;++i;}}var a=getCanonicalClass(c);if(l>a&&a!==0||isNotAllowed(c)){return false;}l=a;}}return true;}function nfcNativeCheck(s){return s.normalize("NFC")===s;}jQuery.sap.isStringNFC=(bNativeSupport?nfcNativeCheck:nfcQuickCheck);return jQuery;});
