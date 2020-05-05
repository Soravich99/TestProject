// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/ui/base/EventProvider"],function(E){"use strict";var S="appLoaded";function A(a,c,p,C){var o,e,v;this.getCurrentApplication=function(){return o;};this.attachAppLoaded=function(d,f,l){e.attachEvent(S,d,f,l);};this.detachAppLoaded=function(f,l){e.detachEvent(S,f,l);};e=new E();v=sap.ui.getCore().byId("viewPortContainer");if(!v||typeof v.attachAfterNavigate!=="function"){jQuery.sap.log.error("Error during instantiation of AppLifeCycle service","Could not attach to afterNavigate event","sap.ushell.services.AppLifeCycle");return;}v.attachAfterNavigate(function(b){var d,s,f,h=false;if(b.mParameters.toId.indexOf("applicationShellPage")===0){d=b.mParameters.to.getApp();}else if(b.mParameters.toId.indexOf("application")===0){d=b.mParameters.to;}if(d&&typeof d.getComponentHandle==="function"&&d.getComponentHandle()){f=d.getComponentHandle().getInstance();}if(f&&f.getId()==="application-Shell-home-component"){h=true;}s=d&&typeof d.getApplicationType==="function"&&d.getApplicationType();if((!s||s==="URL")&&f){s="UI5";}o={applicationType:s,componentInstance:f,homePage:h};setTimeout(function(){e.fireEvent(S,o);},0);});}A.hasNoAdapter=true;return A;},true);
