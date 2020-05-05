/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2017 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/ui/comp/library","./JSONControlFactory","./ODataControlFactory","./BindingUtil","./SideEffectUtil","./ODataHelper","sap/ui/core/Control","sap/ui/model/ParseException","sap/ui/model/ValidateException","sap/ui/model/json/JSONModel","sap/ui/core/ValueState","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(q,l,J,O,B,S,a,C,P,V,b,c,F,d){"use strict";var T=l.smartfield.TextInEditModeSource;var e=C.extend("sap.ui.comp.smartfield.SmartField",{metadata:{interfaces:["sap.ui.core.IFormContent"],library:"sap.ui.comp",designTime:true,properties:{value:{type:"any",group:"Misc",defaultValue:null},enabled:{type:"boolean",group:"Misc",defaultValue:true},entitySet:{type:"string",group:"Misc",defaultValue:""},editable:{type:"boolean",group:"Misc",defaultValue:true},contextEditable:{type:"boolean",group:"Misc",defaultValue:true},width:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:""},textAlign:{type:"sap.ui.core.TextAlign",group:"Misc",defaultValue:sap.ui.core.TextAlign.Initial},placeholder:{type:"string",group:"Misc",defaultValue:""},name:{type:"string",group:"Misc",defaultValue:""},valueState:{type:"sap.ui.core.ValueState",group:"Appearance",defaultValue:c.None},valueStateText:{type:"string",group:"Appearance",defaultValue:""},showValueStateMessage:{type:"boolean",group:"Appearance",defaultValue:true},jsontype:{type:"sap.ui.comp.smartfield.JSONType",group:"Misc",defaultValue:null},mandatory:{type:"boolean",group:"Misc",defaultValue:false},maxLength:{type:"int",group:"Misc",defaultValue:0},showSuggestion:{type:"boolean",group:"Misc",defaultValue:true},showValueHelp:{type:"boolean",group:"Misc",defaultValue:true},showLabel:{type:"boolean",group:"Appearance",defaultValue:true},textLabel:{type:"string",group:"Misc",defaultValue:""},tooltipLabel:{type:"string",group:"Misc",defaultValue:""},uomVisible:{type:"boolean",group:"Misc",defaultValue:true},uomEditable:{type:"boolean",group:"Misc",defaultValue:true},uomEnabled:{type:"boolean",group:"Misc",defaultValue:true},url:{type:"string",group:"Misc",defaultValue:""},uomEditState:{type:"int",group:"Misc",defaultValue:-1},controlContext:{type:"sap.ui.comp.smartfield.ControlContextType",group:"Misc",defaultValue:sap.ui.comp.smartfield.ControlContextType.None},proposedControl:{type:"sap.ui.comp.smartfield.ControlProposalType",group:"Misc",defaultValue:sap.ui.comp.smartfield.ControlProposalType.None},wrapping:{type:"boolean",group:"Misc",defaultValue:true},clientSideMandatoryCheck:{type:"boolean",group:"Misc",defaultValue:true},fetchValueListReadOnly:{type:"boolean",group:"Misc",defaultValue:true},expandNavigationProperties:{type:"boolean",group:"Behavior",defaultValue:false},textInEditModeSource:{type:"sap.ui.comp.smartfield.TextInEditModeSource",group:"Behavior",defaultValue:T.None}},aggregations:{_content:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},configuration:{type:"sap.ui.comp.smartfield.Configuration",multiple:false},controlProposal:{type:"sap.ui.comp.smartfield.ControlProposal",multiple:false},_ariaLabelInvisibleText:{type:"sap.ui.core.InvisibleText",multiple:true,visibility:"hidden"},semanticObjectController:{type:"sap.ui.comp.navpopover.SemanticObjectController",multiple:false}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{entitySetFound:{parameters:{entitySet:{type:"string"}}},change:{parameters:{value:{type:"string"},newValue:{type:"string"}}},initialise:{},visibleChanged:{parameters:{visible:{type:"boolean"}}},editableChanged:{parameters:{editable:{type:"boolean"}}},contextEditableChanged:{parameters:{editable:{type:"boolean"}}},innerControlsCreated:{},valueListChanged:{parameters:{changes:{type:"sap.ui.core.Control[]"}}},press:{}}},renderer:function(r,o){r.write("<div ");r.writeControlData(o);r.addClass("sapUiCompSmartField");r.writeClasses();r.write(">");r.renderControl(o.getContent());if(o.getAggregation("_ariaLabelInvisibleText")){o.getAggregation("_ariaLabelInvisibleText").forEach(function(i){r.renderControl(i);});}r.write("</div>");}});e.prototype.init=function(){this._bInDestroy=false;this._oSideEffects=new S(this);this._oFactory=null;this._oControl={display:null,"display_uom":null,edit:null,current:null};this._oValue={display:null,edit:null,uom:null,uomset:null};this._oError={bComplex:false,bFirst:false,bSecond:false};this._sBindingContextPath="";this._oValueBind=null;this._oUtil=new B();this._bSuppressToggleControl=false;this.bWaitingForValueValidation=false;this.attachEvent("innerControlsCreated",e.prototype._setOnInnerControl,this);};e.prototype.setVisible=function(v,s){var o=this.getVisible();C.prototype.setVisible.apply(this,arguments);v=this.getVisible();if(v!==o){this.fireVisibleChanged({visible:v});}return this;};e.prototype.setEditable=function(E){var o=this.getEditable();this.setProperty("editable",E,true);E=this.getEditable();this._bPendingEditableState=false;this._toggleControl();if(E!==o){this.fireEditableChanged({editable:E});}return this;};e.prototype.setContextEditable=function(f){var o=this.getContextEditable();this.setProperty("contextEditable",f,true);f=this.getContextEditable();this._bPendingEditableState=false;this._toggleControl();if(f!==o){this.fireContextEditableChanged({editable:f});}return this;};e.prototype.setMandatory=function(m){this.setProperty("mandatory",m,false);this._setOnInnerControl();return this;};e.prototype.setWidth=function(w){this.setProperty("width",w,true);this._setOnInnerControl();return this;};e.prototype.setWrapping=function(w){this.setProperty("wrapping",w,true);this._setOnInnerControl();return this;};e.prototype.setTextAlign=function(t){this.setProperty("textAlign",t,true);this._setOnInnerControl();return this;};e.prototype.setPlaceholder=function(p){this.setProperty("placeholder",p,true);this._setOnInnerControl();return this;};e.prototype.setName=function(n){this.setProperty("name",n,true);this._setOnInnerControl();return this;};e.prototype.setMaxLength=function(m){this.setProperty("maxLength",m,true);this._setOnInnerControl();return this;};e.prototype.setShowValueHelp=function(v){var p=this.getShowValueHelp();this.setProperty("showValueHelp",v,true);var o=this.getContent();if(o&&(typeof o.setShowValueHelp==="function")){v=this.getShowValueHelp();var f=v!==p,h=this._oFactory;if(f&&h){if(v){if(h.shouldCreateValueHelpForControl(o)){h._createValueHelp();}}else{h.destroyValueHelp();}}o.setShowValueHelp(v);}return this;};e.prototype.setShowSuggestion=function(s){var p=this.getShowSuggestion();this.setProperty("showSuggestion",s,true);var o=this.getContent();if(o&&(typeof o.setShowSuggestion==="function")){s=this.getShowSuggestion();var f=s!==p,h=this._oFactory;if(f&&h){if(s){if(h.shouldCreateValueHelpForControl(o)){h._createValueHelp();}}else{h.destroyValueHelp();}}o.setShowSuggestion(s);}return this;};e.prototype.setTextInEditModeSource=function(t){var o=this.getTextInEditModeSource();this.setProperty("textInEditModeSource",t,false);t=this.getTextInEditModeSource();if(t!==o){this._destroyChildControls();this._toggleControl();}return this;};e.prototype.setTooltip=function(t){this._refreshTooltipBaseDelegate(t);this.setAggregation("tooltip",t,true);var o=this.getFirstChildControl();if(o){o.setTooltip(t);}return this;};e.prototype._setOnInnerControl=function(){var o=this.getContent();if(o){if(typeof o.setWidth==="function"){var w=this.getWidth();if(w){o.setWidth(w);}}if(typeof o.setWrapping==="function"){o.setWrapping(this._getWrappingForInnerControl(o));}if(typeof o.setName==="function"){o.setName(this.getName());}if(typeof o.setPlaceholder==="function"){o.setPlaceholder(this.getPlaceholder());}if(typeof o.setTextAlign==="function"){o.setTextAlign(this.getTextAlign());}if(this.isInEditMode()){this._setPropertyOnInnerControls("required",this.getMandatory(),this.getInnerControls());}}return this;};e.prototype._setPropertyOnInnerControls=function(p,v,f){f=f||this.getInnerControls();f.forEach(function(o){var m="set"+p.charAt(0).toUpperCase()+p.slice(1);if(typeof o[m]==="function"){o[m](v);}},this);};e.prototype._getWrappingForInnerControl=function(o){var w=this.getWrapping(),p;o=o||this.getContent();if(o){p=o.getMetadata().getProperty("wrapping");}if(p){switch(p.type){case"boolean":return w;case"sap.ui.core.Wrapping":var W=sap.ui.core.Wrapping;if(w){return W.Soft;}return W.None;}}return w;};e.prototype.setUrl=function(v){this.setProperty("url",v,true);return this;};e.prototype.setEntitySet=function(v){this.setProperty("entitySet",v,true);this.fireEntitySetFound({entitySet:v});return this;};e.prototype._setPendingEditState=function(D){this.data("pendingEditableState",!D);};e.prototype.applySettings=function(s){if(s&&s.customData){for(var i=0;i<s.customData.length;i++){var o=s.customData[i];if(o&&o.mProperties&&o.mProperties.key==="pendingEditableState"){this._bPendingEditableState=o.mProperties.value;}}}return C.prototype.applySettings.apply(this,arguments);};e.prototype.setEnabled=function(v){this.setProperty("enabled",v,true);this._toggleControl();return this;};e.prototype.setContent=function(v){return this.setAggregation("_content",v);};e.prototype.getContent=function(){return this.getAggregation("_content");};e.prototype.getControlFactory=function(){return this._oFactory;};e.prototype.getValue=function(){var p=this.getInnerValueFunction();if(p){return p();}return this.getProperty("value");};e.prototype.getInnerValueFunction=function(){if(this._oValue&&(typeof this._oValue[this.getMode()]==="function")){return this._oValue[this.getMode()];}return null;};e.prototype.getValueState=function(){var f=this.getInnerControls(),i=this._getMaxSeverity(f);if(i>-1){return f[i].getValueState();}return c.None;};e.prototype.setValueState=function(v){var f=this.getInnerControls(),o,m="setSimpleClientError";if(f&&f.length){o=f[0];if(f.length>1){m="setComplexClientErrorFirstOperand";}}if(o&&o.setValueState){o.setValueState(v);this[m](v===c.Error);}return this;};e.prototype.getValueStateText=function(){var f=this.getInnerControls(),i=this._getMaxSeverity(f);if(i>-1){return f[i].getValueStateText();}return this.getProperty("valueStateText");};e.prototype.setValueStateText=function(t){var f=this.getInnerControls(),o;if(f&&f.length){o=f[0];}if(o&&o.setValueStateText){o.setValueStateText(t);}return this;};e.prototype._getMaxSeverity=function(f){var s,o,i,h,j=0,I=-1,m={"Error":3,"Warning":2,"Success":1,"None":0};h=f.length;for(i=0;i<h;i++){o=f[i];if(o.getValueState){s=o.getValueState();if(s&&m[s]>j){j=m[s];I=i;}}}return I;};e.prototype.getFocusDomRef=function(){var f=this.getInnerControls(),o,h=f.length;if(h>0){o=f[0];}if(o&&o.getFocusDomRef){return o.getFocusDomRef();}return C.prototype.getFocusDomRef.apply(this,arguments);};e.prototype.getIdForLabel=function(){var f=this.getInnerControls(),o,L=f.length;if(L>0){o=f[0];}if(o&&(typeof o.getIdForLabel==="function")){return o.getIdForLabel();}return this.getId();};e.prototype.updateBindingContext=function(s,m,u){if(this._bInDestroy){return;}this._init(m);if(this._oFactory){if(this.getBindingContext()){this._sBindingContextPath=this.getBindingContext().getPath();}if(this._oFactory.bind){this._oFactory.bind();this._checkFieldGroups();}else{this._toggleControl();}}C.prototype.updateBindingContext.apply(this,arguments);};e.prototype.getMode=function(){var E=this.getEditable(),f=this.getEnabled(),h=this.getContextEditable();if(this.getControlContext()==="responsiveTable"&&this.data("suppressUnit")!=="true"){if(!E||!h||!f||(this.getUomEditState()===0)){return"display_uom";}}if(h&&this.data("configdata")&&this.data("configdata").configdata.isUOM&&this.data("configdata").configdata.isInnerControl&&this.data("configdata").configdata.getContextEditable){h=this.data("configdata").configdata.getContextEditable();}return E&&f&&h?"edit":"display";};e.prototype.isInEditMode=function(){return this.getMode()==="edit";};e.prototype._toggleControl=function(){var m,v,o,f=true;if(this._bPendingEditableState||this._bSuppressToggleControl){return;}if(!this._oFactory||this._oFactory.bPending){return;}m=this.getMode();if(m==="edit"||m==="display_uom"){this._createControl(m);}else{v=this.getProperty("value");o=this.data("configdata");if(o&&o.configdata&&!o.configdata.isUOM){if(v===null||v===""){f=false;}}if(f){this._createControl(m);}else{this.setContent(null);this._oControl.current="display";}}this._setOnInnerControl();};e.prototype.setValue=function(v){var o=this.getProperty("value");this.setProperty("value",v,true);var f=this._oFactory;if(f&&!f.bPending){this._toggleControl();}v=this.getProperty("value");var m=this.isBound("value")&&this.getBindingInfo("value").skipModelUpdate;if(this.isTextInEditModeSourceValid()&&(v!==o)&&!m){var h=this._oControl;h=h[h.current];var i=h&&h.getBinding("value");if(i){h.updateModelProperty("value",v,i.getValue());}}return this;};e.prototype.isTextInEditModeSourceValid=function(){return(this.getTextInEditModeSource()!==T.None);};e.prototype._createControl=function(m){if(this._oFactory){if((m!==this._oControl.current)||!this._oControl[m]){if(!this._oControl[m]){var o=this._oFactory.createControl();if(o){this._oControl[m]=o.control;this._placeCallBacks(o,m);}}this._oControl.current=m;this.setContent(this._oControl[m]);this.fireInnerControlsCreated(this.getInnerControls());}else if(!this.getContent()){this.setContent(this._oControl[m]);}}};e.prototype._placeCallBacks=function(o,m){if(o.params&&o.params.getValue){this._oValue[m]=o.params.getValue;}if(o.params&&o.params.uom){this._oValue.uom=o.params.uom;}if(o.params&&o.params.uomset){this._oValue.uomset=o.params.uomset;}};e.prototype._init=function(m){var M,o,f;if(this._oFactory&&this._sBindingContextPath&&this.getBindingContext()&&(this._sBindingContextPath!==this.getBindingContext().getPath())){this._destroyFactory();}if(!this._oFactory){f=this.data("configdata");if(!f){M=this.getModel(m);}o=this._getBindingInfo(m,"value");if(o){if(f||M){this._oFactory=this._createFactory(m,M,o,f);}}else if(M&&!(M instanceof b)){if(this.getBindingInfo("url")||this.getUrl()){if(f||M){this._oFactory=this._createFactory(m,M,o,f);}}}}};e.prototype._destroyFactory=function(){this._bSuppressToggleControl=true;this._bSideEffects=false;if(this._oFactory){this._oFactory.destroy();}this._oFactory=null;this._bSuppressToggleControl=false;this._destroyChildControls();};e.prototype._destroyChildControls=function(){if(this._oControl){if(this._oControl.display){this._oControl.display.destroy();}if(this._oControl["display_uom"]){this._oControl["display_uom"].destroy();}if(this._oControl.edit){this._oControl.edit.destroy();}this._oControl.display=null;this._oControl["display_uom"]=null;this._oControl.edit=null;this._oControl.current=null;}this._oValue={display:null,edit:null,uom:null,uomset:null};this.destroyAggregation("_content");};e.prototype._createFactory=function(m,M,o,f){var E,p;if(M&&M instanceof b){return new J(M,this,{model:m,path:o.path});}if(!f){E=this._getEntitySet(m);}if(E||f){if(f){p=f.configdata;}else{p={entitySet:E,model:m,path:(o&&o.path)?o.path:""};}return new O(M,this,p);}return null;};e.prototype._getEntitySet=function(m){var E=this.getEntitySet();if(E&&!m){return E;}var o=this.getBindingContext(m);if(o){if(!o.sPath||(o.sPath==="/undefined")){return"";}E=this._oUtil.correctPath(o.sPath);this.fireEntitySetFound({entitySet:E});return E;}return"";};e.prototype._getBindingInfo=function(m,n){if(!this._oValueBind){this._oValueBind=this.getBindingInfo(n);try{this._oValueBind=this._oValueBind.parts[0];}catch(f){}}if(this._oValueBind){if(!this._oValueBind.model&&!m){return this._oValueBind;}if(this._oValueBind.model===m){return this._oValueBind;}}return null;};e.prototype.getDataType=function(){var p;if(this._oFactory){if(this._oFactory.getDataProperty){p=this._oFactory.getDataProperty();if(p){return p.property.type;}}return this.getJsonType();}return null;};e.prototype.getDataProperty=function(){if(this._oFactory){if(this._oFactory.getDataProperty){return this._oFactory.getDataProperty();}return null;}return null;};e.prototype.getUnitOfMeasure=function(){if(this._oValue.uom){return this._oValue.uom();}return null;};e.prototype.setUnitOfMeasure=function(u){if(u&&this._oValue.uomset){this._oValue.uomset(u);}};e.prototype.setSimpleClientError=function(E){this._oError.bFirst=E;};e.prototype.setComplexClientErrorFirstOperand=function(E){this._oError.bComplex=true;this._oError.bFirst=E;};e.prototype.setComplexClientErrorSecondOperand=function(E){this._oError.bComplex=true;this._oError.bSecond=E;};e.prototype.setComplexClientErrorSecondOperandNested=function(E){var p=this.getParent().getParent();p.setComplexClientErrorSecondOperand(E);};e.prototype._hasClientError=function(){if(this._oError.bComplex){return this._oError.bFirst||this._oError.bSecond;}return this._oError.bFirst;};e.prototype.checkClientError=function(){var f,h;if(this.getMode()==="display"){return false;}if(this._hasClientError()){return true;}f=this.getInnerControls();h=f.length;for(var i=0;i<h;i++){this._checkClientError(f[i]);}return this._hasClientError();};e.prototype._checkClientError=function(o){var f,p,m={"sap.m.Input":"value","sap.m.DatePicker":"value","sap.m.ComboBox":"selectedKey","sap.m.TextArea":"value"};if(o){p=m[o.getMetadata().getName()];}if(p){f=o.getBinding(p);}if(f){try{var M="get"+p.substring(0,1).toUpperCase()+p.substring(1),v=o[M](),t=f.getType();if(f.sInternalType&&t&&!t.bValueValidated){var s=t.parseValue(v,f.sInternalType);t.validateValue(s);}}catch(E){if(E instanceof P){o.fireParseError({exception:E});}else if(E instanceof V){o.fireValidationError({exception:E});}else{throw E;}}}};e.prototype.isContextTable=function(){return(this.getControlContext()==="responsiveTable"||this.getControlContext()==="table");};e.prototype.isFormContextType=function(){var s=this.getControlContext(),m=l.smartfield.ControlContextType;return(s===m.Form)||(s===m.SmartFormGrid);};e.prototype.getInnerControls=function(){var o,f,m={"sap.m.HBox":function(h){var i,I,j=0;I=h.getItems();if(I){j=I.length;}if(j===0){return[];}if(j===1){return[I[0]];}i=I[1].getContent();if(i){return[I[0],i];}return[I[0]];},"sap.ui.comp.navpopover.SmartLink":function(h){var i=h.getAggregation("innerControl");if(i){return[i];}return[h];}};o=this.getContent();if(o){f=m[o.getMetadata()._sClassName];}if(f){return f(o);}if(o){return[o];}return[];};e.prototype._getEmbeddedSmartField=function(){var f=this.getContent();if(f){if(f instanceof sap.m.HBox){var h=f.getItems();if(h){for(var j=0;j<h.length;j++){if(h[j]instanceof e){return h[j];}}}}}return null;};e.prototype.onAfterRendering=function(){if(C.prototype.onAfterRendering){C.prototype.onAfterRendering.apply(this);}this._checkFieldGroups();};e.prototype.onBeforeRendering=function(){var f=this.getInnerControls();var t=this;if(this.getAriaLabelledBy().length>0){f.forEach(function(o){if(o.addAriaLabelledBy&&o.getAriaLabelledBy){if(o.getAriaLabelledBy().length===0){o.addAriaLabelledBy(t.getAriaLabelledBy()[0]);}}});}};e.prototype.onBeforeValidateValue=function(v){var m=this.getModel(),o=this._oControl.edit,f=o&&o.getBinding("value"),h=this.getControlFactory().getDataProperty().valueListAnnotation;m.read("/"+h.valueListEntitySetName,{filters:g(v,{keyFieldPath:h.keyField,descriptionFieldPath:h.descriptionField}),success:this.onRequestValueListDataSuccess.bind(this,{value:v,oldValue:f.getValue()}),error:this.onRequestValueListDataError.bind(this)});o.setBusyIndicatorDelay(300);o.setBusy(true);};e.prototype.onRequestValueListDataSuccess=function(s,D,r){var o=this._oControl.edit,f=o&&o.getBinding("value"),t=f&&f.getType();if(t){t.bNewDataLoaded=true;t.oSettings.data=D.results;}if(o&&f){o.updateModelProperty("value",s.value,s.oldValue);o.setBusyIndicatorDelay(0);o.setBusy(false);}};e.prototype.onRequestValueListDataError=function(E){var o=this._oControl.edit,f=o&&o.getBinding("value"),t=f&&f.getType();if(t){t.bNewDataLoaded=true;t.oSettings.data=[];}if(o){o.setBusyIndicatorDelay(0);o.setBusy(false);}};e.prototype.onAfterValidateValue=function(v){if(this.bWaitingForValueValidation){this.fireChange({value:v});}this.bWaitingForValueValidation=false;};e.prototype.getFirstChildControl=function(){var f=this.getInnerControls();if(f.length){return f[0]||null;}return null;};function g(v,s){return[new F({and:false,filters:[new F({path:s.keyFieldPath,operator:d.EQ,value1:v}),new F({path:s.descriptionFieldPath,operator:d.Contains,value1:v})]})];}e.prototype._checkFieldGroups=function(){var v,m,M=this.getMode();if(this.getBindingContext()&&this._oFactory&&this._oFactory.getMetaData&&(M==="edit")&&!this._bSideEffects){m=this._oFactory.getMetaData();if(m&&!m.property||(m.property&&!m.property.property)){return;}v=this._getView();if(v&&m){this._setFieldGroup(m,v);}}};e.prototype._setFieldGroup=function(m,v){var f,i=this._oSideEffects.getFieldGroupIDs(m,v);if(i){f=this.getInnerControls();if(f.length){this._bSideEffects=true;f[0].setFieldGroupIds(i);}}};e.prototype._getView=function(){var o=this.getParent();while(o){if(o instanceof sap.ui.core.mvc.View){return o;}o=o.getParent();}return null;};e.prototype.refreshDataState=function(n,D){var o,f;if(n==="value"){if(D.isLaundering()){if(this.getEditable()){o=this.getBindingContext();if(o&&o.getObject){f=o.getObject();if(f&&f.__metadata&&f.__metadata.created){this._checkCreated=true;return;}}}}if(this._checkCreated&&!D.isLaundering()&&!D.isDirty()){this._oFactory.rebindOnCreated();delete this._checkCreated;}}};e.prototype.exit=function(){this._bInDestroy=true;var i=null;if(this._oSideEffects){this._oSideEffects.destroy();}if(this._oUtil){this._oUtil.destroy();}if(this._oFactory){this._oFactory.destroy();}var o=this._oControl;if(o){if(o.current==="edit"){i=o["display"]||o["display_uom"];}else{i=o["edit"];}if(o[o.current]&&!o[o.current].getParent()){o[o.current].destroy();}}if(i&&(typeof i.destroy==="function")){i.destroy();}this._oUtil=null;this._oError=null;this._oValue=null;this._oFactory=null;this._oControl=null;this._oValueBind=null;this._oSideEffects=null;this._sBindingContextPath="";this.detachEvent("innerControlsCreated",e.prototype._setOnInnerControl,this);};e.getSupportedAnnotationPaths=function(m,E,v,n){var o,u,r=[],M;if(m&&E&&v){M={entitySet:E,entityType:m.getODataEntityType(E.entityType),path:v};o={helper:new a(null,null,m)};if(n){o.navigationPathOnly=n;}o.helper.getProperty(M);e._getFromEntitySet(r,M,o);e._getFromProperty(r,M,o);u=o.helper.getUnitOfMeasure2(M);if(u){e._getFromProperty(r,u,o);}o.helper.destroy();}return r;};e._getFromEntitySet=function(r,m,o){var p;if(m.entitySet){p=o.helper.oAnnotation.getUpdateEntitySetPath(m.entitySet);e._push(p,r,m,o);}};e._push=function(p,r,m,o){var f,s,h,i,R={};if(p){if(o.navigationPathOnly){f=p.split("/");h=f.length;R.entityType=m.entityType;while(h--){s=f.shift();if(s===""){continue;}R=o.helper.getNavigationProperty(R.entityType,s);if(!R.entitySet){break;}if(i){i=i+"/"+s;}else{i=s;}}}else{i=p;}}if(i){if(m.navigationPath){r.push(m.navigationPath+"/"+i);}else{r.push(i);}}};e._getFromProperty=function(r,m,o){var p;if(m.property.property){p=o.helper.oAnnotation.getText(m.property.property);e._push(p,r,m,o);p=o.helper.oAnnotation.getUnit(m.property.property);e._push(p,r,m,o);p=o.helper.oAnnotation.getFieldControlPath(m.property.property);e._push(p,r,m,o);}};e.prototype.addAssociation=function(A,i,s){if(A==="ariaLabelledBy"){this.getInnerControls().forEach(function(o){if(o.addAriaLabelledBy){o.addAriaLabelledBy(i);}});}return C.prototype.addAssociation.apply(this,arguments);};e.prototype.removeAssociation=function(A,o,s){var i=C.prototype.removeAssociation.apply(this,arguments);if(A==="ariaLabelledBy"&&i){this.getInnerControls().forEach(function(f){if(f.removeAriaLabelledBy){f.removeAriaLabelledBy(i);}});}return i;};e.prototype.getAccessibilityInfo=function(){var o=this.getContent();return o&&o.getAccessibilityInfo?o.getAccessibilityInfo():null;};e.prototype.enhanceAccessibilityState=function(E,A){var p=this.getParent();if(p&&p.enhanceAccessibilityState){p.enhanceAccessibilityState(this,A);}};e.prototype.getRequired=function(){if(this.getContextEditable()&&this.getEditable()){return this.getMandatory();}else{return false;}};return e;},true);