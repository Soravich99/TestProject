/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(["./base/FieldAdapter","./ODataBaseAdapter"],function(F,O){"use strict";var a=F.extend("sap.ui.mdc.experimental.provider.adapter.ODataFieldAdapter",{constructor:function(m,M,s,c){F.prototype.constructor.apply(this,[m,M,s,c,O]);}});a.prototype.allowEmptyValue=function(){return true;};a.prototype.defaultValue=function(){switch(this.ui5Type){case"sap.ui.model.odata.type.Boolean":return false;case"sap.ui.model.odata.type.Byte":case"sap.ui.model.odata.type.Decimal":case"sap.ui.model.odata.type.Double":case"sap.ui.model.odata.type.Guid":case"sap.ui.model.odata.type.Int16":case"sap.ui.model.odata.type.Int32":case"sap.ui.model.odata.type.Int64":case"sap.ui.model.odata.type.SByte":case"sap.ui.model.odata.type.Single":return 0;case"sap.ui.model.odata.type.Date":case"sap.ui.model.odata.type.DateTimeOffset":case"sap.ui.model.odata.type.TimeOfDay":return new Date();case"Edm.String":return"";default:return"";}};a.prototype.precision=function(){return this["//"]["Precision"];};a.prototype.scale=function(){return this["//"]["Scale"];};a.prototype.maximum=function(){return 0;};a.prototype.exclusiveMaximum=function(){return false;};a.prototype.minimum=function(){return 0;};a.prototype.exclusiveMinimum=function(){return false;};a.prototype.maxLength=function(){var m=this["//"]["maxLength"];return isNaN(m)?undefined:parseInt(m,10);};a.prototype.minLength=function(){var m=this["//"]["minLength"];return isNaN(m)?undefined:parseInt(m,10);};a.prototype.multipleOf=function(){return 1;};a.prototype.pattern=function(){return"/.*?/";};a.prototype.unit=function(){};a.prototype.textAlign=function(){};a.prototype.visible=function(){var h=this._isAnnotationBoolean("com.sap.vocabularies.UI.v1.Hidden");var v=h?!h:true;if(v&&this.schema._fieldControl){v=this.schema._fieldControl.visible;this.setValue("!visible",this.schema._fieldControl.hidden);}else{this.setValue("!visible",!v);}return v;};a.prototype.ui5Type=function(){if(this.oMetaModel.getUI5Type){return this.oMetaModel.getUI5Type(this.sMetaContext);}switch(this.schema.type){case"Edm.Boolean":return"sap.ui.model.odata.type.Boolean";case"Edm.Byte":return"sap.ui.model.odata.type.Byte";case"Edm.Date":return"sap.ui.model.odata.type.Date";case"Edm.DateTime":return"sap.ui.model.odata.type.DateTime";case"Edm.DateTimeOffset":return"sap.ui.model.odata.type.DateTimeOffset";case"Edm.Decimal":return"sap.ui.model.odata.type.Decimal";case"Edm.Double":return"sap.ui.model.odata.type.Double";case"Edm.Guid":return"sap.ui.model.odata.type.Guid";case"Edm.Int16":return"sap.ui.model.odata.type.Int16";case"Edm.Int32":return"sap.ui.model.odata.type.Int32";case"Edm.Int64":return"sap.ui.model.odata.type.Int64";case"Edm.SByte":return"sap.ui.model.odata.type.SByte";case"Edm.Single":return"sap.ui.model.odata.type.Single";case"Edm.String":return"sap.ui.model.odata.type.String";case"Edm.TimeOfDay":return"sap.ui.model.odata.type.TimeOfDay";default:if(this["//"]["sap:display-format"]=="Date"){return"sap.ui.model.odata.type.Date";}return"sap.ui.model.odata.type.String";}};a.prototype.formatOptions=function(){var f="";switch(this.ui5Type){case"sap.ui.model.odata.type.Boolean":break;case"sap.ui.model.odata.type.Byte":break;case"sap.ui.model.odata.type.Date":break;case"sap.ui.model.odata.type.DateTimeOffset":break;case"sap.ui.model.odata.type.Decimal":break;case"sap.ui.model.odata.type.Double":break;case"sap.ui.model.odata.type.Guid":break;case"sap.ui.model.odata.type.Int16":break;case"sap.ui.model.odata.type.Int32":break;case"sap.ui.model.odata.type.Int64":break;case"sap.ui.model.odata.type.SByte":break;case"sap.ui.model.odata.type.Single":break;case"sap.ui.model.odata.type.String":break;case"sap.ui.model.odata.type.TimeOfDay":break;default:break;}return f;};a.prototype.semantics=function(){if(this.getAnnotation("com.sap.vocabularies.Common.v1.Masked")!=null){return F.Semantics.password;}if(this.getAnnotation("com.sap.vocabularies.Communication.v1.IsEmailAddress")!=null){return F.Semantics.eMail;}if(this.getAnnotation("com.sap.vocabularies.Communication.v1.IsPhoneNumber")!=null){return F.Semantics.phoneNumber;}if(this.getAnnotation("com.sap.vocabularies.Communication.v1.IsUrl")!=null){return F.Semantics.url;}if(this.getAnnotation("Org.OData.Measures.V1.Unit")!=null){return F.Semantics.currency;}if(this.getAnnotation("Org.OData.Measures.V1.ISOCurrency")!=null){return F.Semantics.measure;}return F.Semantics.text;};a.prototype.name=function(){return this.schema.name;};a.prototype.required=function(){var r=this.getAnnotation("nullable");var R=r?r=="false":false;if(this.schema._fieldControl){R=this.schema._fieldControl.required;}else{R=R&&this.enabled;}return R;};a.prototype.filterable=function(){return(this.filterRestrictions.NonFilterableProperties.indexOf(this.schema.name)===-1);};a.prototype.requiredInFilter=function(){return(this.filterRestrictions.RequiredProperties.indexOf(this.schema.name)!==-1);};a.prototype.sortable=function(){return true;};a.prototype.valueHelp=function(){var r=null;var v=this.getAnnotation("com.sap.vocabularies.Common.v1.ValueList");if(v){r={};var e="/"+v.CollectionPath.String;r.valuesPath=this.asPath(e);r.parameters=[];var p,i,l,V,m,M;for(i=0;i<v.Parameters.length;i++){p=v.Parameters[i];l=p.LocalDataProperty?p.LocalDataProperty.PropertyPath:null;V=p.ValueListProperty.PropertyPath;m=this.oMetaModel.getMetaContext(e+"/"+V);M=m.getPath();var o=new a(this.oModel,this.sModelName,this.sContextName,M,true);r.parameters.push({targetProperty:l,sourceAdapter:o});}}return r;};a.prototype.describedBy=function(){var t=this["//"]["com.sap.vocabularies.Common.v1.Text"];if(!t){return this;}return this.resolveNavi(t.Path,a);};return a;});
