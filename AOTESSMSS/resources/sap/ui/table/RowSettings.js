/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element','./TableUtils','./library','sap/ui/core/library'],function(E,T,l,c){"use strict";var M=c.MessageType;var R=E.extend("sap.ui.table.RowSettings",{metadata:{library:"sap.ui.table",properties:{highlight:{type:"sap.ui.core.MessageType",group:"Appearance",defaultValue:"None"}}}});R.prototype.init=function(){this._oResBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");};R.prototype.setHighlight=function(h){var r;var H;this.setProperty("highlight",h,true);r=this._getRow();if(r==null){return this;}H=r.getDomRef("highlight");if(H==null){return this;}for(var m in M){H.classList.remove("sapUiTableRowHighlight"+m);}H.classList.add(this._getHighlightCSSClassName());var t=r.getParent();var a=t!=null?t._getAccExtension():null;if(a!=null){a.updateAriaStateOfRowHighlight(this);}return this;};R.prototype._getHighlightCSSClassName=function(){var h=this.getHighlight();if(h==null){h=M.None;}return"sapUiTableRowHighlight"+h;};R.prototype._getHighlightText=function(){var h=this.getHighlight();if(h==null||h===M.None){return"";}return this._oResBundle.getText("TBL_ROW_STATE_"+h.toUpperCase());};R.prototype._getRow=function(){var r=this.getParent();if(T.isInstanceOf(r,"sap/ui/table/Row")){return r;}else{return null;}};return R;});
