/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/Image','./Adaptation','../Utils'],function(I,A,U){"use strict";var F='sapUiRtaFioriHeaderInvisible';var a=A.extend("sap.ui.rta.toolbar.Fiori",{renderer:'sap.ui.rta.toolbar.BaseRenderer',type:'fiori'});a.prototype.init=function(){A.prototype.init.apply(this,arguments);this._oRenderer=U.getFiori2Renderer();this._oFioriHeader=this._oRenderer.getRootControl().getOUnifiedShell().getHeader();};a.prototype.show=function(){this._oFioriHeader.addStyleClass(F);return A.prototype.show.apply(this,arguments);};a.prototype.buildControls=function(){var c=A.prototype.buildControls.apply(this,arguments);var l=this._oFioriHeader.getLogo();if(this._oFioriHeader.getShowLogo()&&l){var $=this._oFioriHeader.$().find('#shell-header-icon');var w,h;if($.length){var n=$.get(0).naturalWidth;var N=$.get(0).naturalHeight;w=$.width();h=$.height();if(w!==n||h!==N){jQuery.sap.log.error(["sap.ui.rta: please check Fiori Launchpad logo, expected size is",w+"x"+h+",","but actual is "+n+"x"+N].join(' '));}}c.unshift(new I({src:l,width:w?w+'px':w,height:h?h+'px':h}).data('name','logo'));}return c;};a.prototype.hide=function(){return A.prototype.hide.apply(this,arguments).then(function(){this._oFioriHeader.removeStyleClass(F);}.bind(this));};return a;},true);
