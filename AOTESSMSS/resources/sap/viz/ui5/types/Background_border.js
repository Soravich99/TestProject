/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var a=B.extend("sap.viz.ui5.types.Background_border",{metadata:{library:"sap.viz",properties:{stroke:{type:"string",defaultValue:'#d8d8d8',deprecated:true},strokeWidth:{type:"int",defaultValue:1,deprecated:true}},aggregations:{left:{type:"sap.viz.ui5.types.Background_border_left",multiple:false},right:{type:"sap.viz.ui5.types.Background_border_right",multiple:false},top:{type:"sap.viz.ui5.types.Background_border_top",multiple:false},bottom:{type:"sap.viz.ui5.types.Background_border_bottom",multiple:false}}}});return a;});
