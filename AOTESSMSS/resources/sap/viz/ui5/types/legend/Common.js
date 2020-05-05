/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var C=B.extend("sap.viz.ui5.types.legend.Common",{metadata:{library:"sap.viz",properties:{visible:{type:"boolean",defaultValue:true},formatString:{type:"string",defaultValue:null,deprecated:true},isHierarchical:{type:"boolean",defaultValue:false},isScrollable:{type:"boolean",defaultValue:false},position:{type:"sap.viz.ui5.types.legend.Common_position",defaultValue:sap.viz.ui5.types.legend.Common_position.right,deprecated:true},type:{type:"sap.viz.ui5.types.legend.Common_type",defaultValue:sap.viz.ui5.types.legend.Common_type.ColorLegend,deprecated:true},alignment:{type:"sap.viz.ui5.types.legend.Common_alignment",defaultValue:sap.viz.ui5.types.legend.Common_alignment.start,deprecated:true},drawingEffect:{type:"sap.viz.ui5.types.legend.Common_drawingEffect",defaultValue:sap.viz.ui5.types.legend.Common_drawingEffect.normal}},aggregations:{title:{type:"sap.viz.ui5.types.legend.Common_title",multiple:false}}}});return C;});
