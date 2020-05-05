/*!
 * @copyright@
 */
sap.ui.define(["./NavError","sap/ui/base/Object","jquery.sap.global"],function(E,B,q){"use strict";var P=B.extend("sap.ui.generic.app.navigation.service.PresentationVariant",{constructor:function(p){this._sId="";if(p!==undefined){if(typeof p==="string"){this._parseFromString(p);}else if(typeof p==="object"){this._parseFromObject(p);}else{throw new E("PresentationVariant.INVALID_INPUT_TYPE");}}},getID:function(){return this._sId;},setID:function(i){this._sId=i;},setText:function(n){if(typeof n!=="string"){throw new E("PresentationVariant.INVALID_INPUT_TYPE");}this._sText=n;},getText:function(){return this._sText;},setContextUrl:function(u){if(typeof u!=="string"){throw new E("PresentationVariant.INVALID_INPUT_TYPE");}this._sCtxUrl=u;},getContextUrl:function(){return this._sCtxUrl;},isEmpty:function(){return((Object.keys(this.getTableVisualization()).length===0)&&(Object.keys(this.getChartVisualization()).length===0)&&(Object.keys(this.getProperties()).length===0));},setProperties:function(p){this._mProperties=q.extend(true,{},p);},getProperties:function(){return this._mProperties;},setTableVisualization:function(p){this._mVisTable=q.extend(true,{},p);},getTableVisualization:function(){return this._mVisTable;},setChartVisualization:function(p){this._mVisChart=q.extend(true,{},p);},getChartVisualization:function(){return this._mVisChart;},toJSONObject:function(){var e={Version:{Major:"1",Minor:"0",Patch:"0"},PresentationVariantID:this._sId};if(this._sCtxUrl){e.ContextUrl=this._sCtxUrl;}if(this._sText){e.Text=this._sText;}else{e.Text="Presentation Variant with ID "+this._sId;}this._serializeProperties(e);this._serializeVisualizations(e);return e;},toJSONString:function(){return JSON.stringify(this.toJSONObject());},_serializeProperties:function(e){if(!this.getProperties()){return;}q.extend(true,e,this.getProperties());},_serializeVisualizations:function(e){if(this.getTableVisualization()){if(!e.Visualizations){e.Visualizations=[];}e.Visualizations.push(this.getTableVisualization());}if(this.getChartVisualization()){if(!e.Visualizations){e.Visualizations=[];}e.Visualizations.push(this.getChartVisualization());}},_parseFromString:function(j){if(j===undefined){throw new E("PresentationVariant.UNABLE_TO_PARSE_INPUT");}if(typeof j!=="string"){throw new E("PresentationVariant.INVALID_INPUT_TYPE");}var i=JSON.parse(j);this._parseFromObject(i);},_parseFromObject:function(i){if(i.PresentationVariantID===undefined){q.sap.log.warning("PresentationVariantID is not defined");i.PresentationVariantID="";}var I=q.extend(true,{},i);delete I.Version;this.setID(i.PresentationVariantID);delete I.PresentationVariantID;if(i.ContextUrl!==undefined&&i.ContextUrl!==""){this.setContextUrl(i.ContextUrl);delete I.ContextUrl;}if(i.Text!==undefined){this.setText(i.Text);delete I.Text;}if(i.Visualizations){this._parseVisualizations(i.Visualizations);delete I.Visualizations;}this._parseProperties(I);},_parseProperties:function(i){var p={};q.each(i,function(k,v){p[k]=v;});this.setProperties(p);},_parseVisualizations:function(v){if(!Array.isArray(v)){throw new E("PresentationVariant.INVALID_INPUT_TYPE");}if(typeof v.length>2){throw new E("PresentationVariant.TOO_MANY_VISUALIZATIONS");}for(var i=0;i<v.length;i++){if(v[i].Type&&(v[i].Type.indexOf("Chart")>=0)){this.setChartVisualization(v[i]);}else{this.setTableVisualization(v[i]);}}}});return P;});
