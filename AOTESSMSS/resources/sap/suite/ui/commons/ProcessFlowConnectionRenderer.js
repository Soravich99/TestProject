/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./library'],function(l){"use strict";var P={};P.render=function(r,c){var C=c._traverseConnectionData();var z=c.getZoomLevel();r.write("<div");r.writeAttribute("id",c.getId());r.writeAttribute("role","presentation");r.writeAttributeEscaped("aria-label",c._getAriaText(C));r.write(">");if(c._isHorizontalLine(C)){this._writeHorizontalLine(r,C,z,c);}else if(c._isVerticalLine(C)){this._writeVerticalLine(r,C,z,c._getShowLabels());}else{this._writeSpecialLine(r,C,z,c);}r.write("</div>");};P._writeVerticalLine=function(r,c,z,s){r.write("<div");r.addClass("sapSuiteUiCommonsFloatLeft");if(s){r.addClass("sapSuiteUiCommonsPFWithLabel");}switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxZoom1Width");r.addClass("sapSuiteUiCommonsBoxWideZoom1Height");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxZoom3Width");r.addClass("sapSuiteUiCommonsBoxWideZoom3Height");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxZoom4Width");r.addClass("sapSuiteUiCommonsBoxWideZoom4Height");break;default:r.addClass("sapSuiteUiCommonsBoxZoom2Width");r.addClass("sapSuiteUiCommonsBoxWideZoom2Height");}r.writeClasses();r.write(">");r.write("</div>");r.write("<div");r.addClass("sapSuiteUiCommonsFloatLeft");r.addClass("sapSuiteUiCommonsBoxMiddleBorderWidth");switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxWideZoom1Height");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxWideZoom3Height");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxWideZoom4Height");break;default:r.addClass("sapSuiteUiCommonsBoxWideZoom2Height");}r.addClass("sapSuiteUiCommonsBorderLeft");if(c.top.type===l.ProcessFlowConnectionType.Planned){r.addClass("sapSuiteUiCommonsBorderLeftTypePlanned");}else{r.addClass("sapSuiteUiCommonsBorderLeftTypeNormal");}if(c.top.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderLeftStateHighlighted");r.addClass("sapSuiteUiCommonsStateHighlighted");}else if(c.top.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderLeftStateDimmed");}else if(c.top.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderLeftStateSelected");r.addClass("sapSuiteUiCommonsStateSelected");}else{r.addClass("sapSuiteUiCommonsBorderLeftStateRegular");r.addClass("sapSuiteUiCommonsStateRegular");}r.writeClasses();r.write(">");r.write("</div>");P._resetFloat(r);};P._writeHorizontalLine=function(r,c,z,C){r.write("<div");r.addClass("sapSuiteUiCommonsBoxWideWidth");switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxTopZoom1Height");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxTopZoom3Height");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxTopZoom4Height");break;default:r.addClass("sapSuiteUiCommonsBoxTopZoom2Height");}r.writeClasses();r.write(">");r.write("</div>");r.write("<div");if(c.arrow){r.addClass("sapSuiteUiCommonsParentPosition");if(C._getShowLabels()){r.addClass("sapSuiteUiCommonsPFWithLabel");}switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxWideArrowZoom1Width");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxWideArrowZoom3Width");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxWideArrowZoom4Width");break;default:r.addClass("sapSuiteUiCommonsBoxWideArrowZoom2Width");}}else{r.addClass("sapSuiteUiCommonsBoxWideWidth");}r.addClass("sapSuiteUiCommonsBoxMiddleBorderHeight");r.addClass("sapSuiteUiCommonsBorderBottom");if(c.right.type===l.ProcessFlowConnectionType.Planned){r.addClass("sapSuiteUiCommonsBorderBottomTypePlanned");}else{r.addClass("sapSuiteUiCommonsBorderBottomTypeNormal");}if(c.right.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderBottomStateHighlighted");r.addClass("sapSuiteUiCommonsStateHighlighted");}else if(c.right.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderBottomStateDimmed");}else if(c.right.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderBottomStateSelected");r.addClass("sapSuiteUiCommonsStateSelected");}else{r.addClass("sapSuiteUiCommonsBorderBottomStateRegular");r.addClass("sapSuiteUiCommonsStateRegular");}r.writeClasses();r.write(">");if(c.labels&&C._showLabels){P._renderLabel(r,C,c);}if(c.arrow){r.write("<div");r.addClass("sapSuiteUiCommonsArrowRight");if(c.right.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderLeftStateHighlighted");}else if(c.right.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderLeftStateDimmed");}else if(c.right.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderLeftStateSelected");}else{r.addClass("sapSuiteUiCommonsBorderLeftStateRegular");}r.writeClasses();r.write(">");r.write("</div>");}r.write("</div>");};P._writeSpecialLine=function(r,c,z,C){P._writeFirstRowOfSpecialLine(r,c,z,C);P._writeSecondRowOfSpecialLine(r,c,z,C);P._writeThirdRowOfSpecialLine(r,c,z,C);P._resetFloat(r);};P._writeFirstRowOfSpecialLine=function(r,c,z,C){r.write("<div");r.addClass("sapSuiteUiCommonsFloatLeft");if(C._getShowLabels()){r.addClass("sapSuiteUiCommonsPFWithLabel");}switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxZoom1Width");r.addClass("sapSuiteUiCommonsBoxTopZoom1Height");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxZoom3Width");r.addClass("sapSuiteUiCommonsBoxTopZoom3Height");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxZoom4Width");r.addClass("sapSuiteUiCommonsBoxTopZoom4Height");break;default:r.addClass("sapSuiteUiCommonsBoxZoom2Width");r.addClass("sapSuiteUiCommonsBoxTopZoom2Height");}r.writeClasses();r.write(">");r.write("</div>");r.write("<div");if(C._getShowLabels()){r.addClass("sapSuiteUiCommonsPFWithLabel");}r.addClass("sapSuiteUiCommonsFloatLeft");switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxTopZoom1Height");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxTopZoom3Height");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxTopZoom4Height");break;default:r.addClass("sapSuiteUiCommonsBoxTopZoom2Height");}if(c.hasOwnProperty("top")&&c.top.draw){r.addClass("sapSuiteUiCommonsBoxMiddleBorderWidth");r.addClass("sapSuiteUiCommonsBorderLeft");if(c.top.type===l.ProcessFlowConnectionType.Planned){r.addClass("sapSuiteUiCommonsBorderLeftTypePlanned");}else{r.addClass("sapSuiteUiCommonsBorderLeftTypeNormal");}if(c.top.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderLeftStateHighlighted");r.addClass("sapSuiteUiCommonsStateHighlighted");}else if(c.top.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderLeftStateDimmed");}else if(c.top.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderLeftStateSelected");r.addClass("sapSuiteUiCommonsStateSelected");}else{r.addClass("sapSuiteUiCommonsBorderLeftStateRegular");r.addClass("sapSuiteUiCommonsStateRegular");}}else{r.addClass("sapSuiteUiCommonsBoxMiddleWidth");}r.writeClasses();r.write(">");r.write("</div>");};P._writeSecondRowOfSpecialLine=function(r,c,z,C){P._resetFloat(r);r.write("<div");r.addClass("sapSuiteUiCommonsFloatLeft");if(C._getShowLabels()){r.addClass("sapSuiteUiCommonsPFWithLabel");}switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxZoom1Width");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxZoom3Width");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxZoom4Width");break;default:r.addClass("sapSuiteUiCommonsBoxZoom2Width");}if(c.hasOwnProperty("left")&&c.left.draw){r.addClass("sapSuiteUiCommonsBoxMiddleBorderHeight");r.addClass("sapSuiteUiCommonsBorderBottom");if(c.left.type===l.ProcessFlowConnectionType.Planned){r.addClass("sapSuiteUiCommonsBorderBottomTypePlanned");}else{r.addClass("sapSuiteUiCommonsBorderBottomTypeNormal");}if(c.left.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderBottomStateHighlighted");r.addClass("sapSuiteUiCommonsStateHighlighted");}else if(c.left.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderBottomStateDimmed");}else if(c.left.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderBottomStateSelected");r.addClass("sapSuiteUiCommonsStateSelected");}else{r.addClass("sapSuiteUiCommonsBorderBottomStateRegular");r.addClass("sapSuiteUiCommonsStateRegular");}}else{r.addClass("sapSuiteUiCommonsBoxMiddleHeight");}r.writeClasses();r.write(">");r.write("</div>");r.write("<div");r.addClass("sapSuiteUiCommonsFloatLeft");if(C._getShowLabels()){r.addClass("sapSuiteUiCommonsPFWithLabel");}r.addClass("sapSuiteUiCommonsBoxMiddleWidth");r.addClass("sapSuiteUiCommonsBoxMiddleBorderHeight");if((c.hasOwnProperty("left")&&c.left.draw)||(c.hasOwnProperty("right")&&c.right.draw)||(c.hasOwnProperty("top")&&c.top.draw)||(c.hasOwnProperty("bottom")&&c.bottom.draw)){r.addClass("sapSuiteUiCommonsBorderBottom");r.addClass("sapSuiteUiCommonsBorderBottomTypeNormal");if(c.right.state===l.ProcessFlowConnectionState.Highlighted||c.top.state===l.ProcessFlowConnectionState.Highlighted||c.left.state===l.ProcessFlowConnectionState.Highlighted||c.bottom.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderBottomStateHighlighted");r.addClass("sapSuiteUiCommonsStateHighlighted");}else if(c.right.state===l.ProcessFlowConnectionState.Selected||c.top.state===l.ProcessFlowConnectionState.Selected||c.left.state===l.ProcessFlowConnectionState.Selected||c.bottom.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderBottomStateSelected");r.addClass("sapSuiteUiCommonsStateSelected");}else if(c.right.state===l.ProcessFlowConnectionState.Dimmed||c.top.state===l.ProcessFlowConnectionState.Dimmed||c.left.state===l.ProcessFlowConnectionState.Dimmed||c.bottom.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderBottomStateDimmed");}else{r.addClass("sapSuiteUiCommonsBorderBottomStateRegular");r.addClass("sapSuiteUiCommonsStateRegular");}}r.writeClasses();r.write(">");r.write("</div>");r.write("<div");r.addClass("sapSuiteUiCommonsFloatLeft");if(C._getShowLabels()){r.addClass("sapSuiteUiCommonsPFWithLabel");}if(c.arrow){r.addClass("sapSuiteUiCommonsParentPosition");switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxArrowZoom1Width");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxArrowZoom3Width");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxArrowZoom4Width");break;default:r.addClass("sapSuiteUiCommonsBoxArrowZoom2Width");}}else if(C._getShowLabels()){switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxZoom1WidthWithLabel");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxZoom3WidthWithLabel");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxZoom4WidthWithLabel");break;default:r.addClass("sapSuiteUiCommonsBoxZoom2WidthWithLabel");}}else{switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxZoom1Width");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxZoom3Width");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxZoom4Width");break;default:r.addClass("sapSuiteUiCommonsBoxZoom2Width");}}if(c.hasOwnProperty("right")&&c.right.draw){r.addClass("sapSuiteUiCommonsBoxMiddleBorderHeight");r.addClass("sapSuiteUiCommonsBorderBottom");if(c.right.type===l.ProcessFlowConnectionType.Planned){r.addClass("sapSuiteUiCommonsBorderBottomTypePlanned");}else{r.addClass("sapSuiteUiCommonsBorderBottomTypeNormal");}if(c.right.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderBottomStateHighlighted");r.addClass("sapSuiteUiCommonsStateHighlighted");}else if(c.right.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderBottomStateDimmed");}else if(c.right.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderBottomStateSelected");r.addClass("sapSuiteUiCommonsStateSelected");}else{r.addClass("sapSuiteUiCommonsBorderBottomStateRegular");r.addClass("sapSuiteUiCommonsStateRegular");}}else{r.addClass("sapSuiteUiCommonsBoxMiddleHeight");}r.writeClasses();r.write(">");if(c.labels&&C._showLabels){P._renderLabel(r,C,c);}if(c.arrow){r.write("<div");r.addClass("sapSuiteUiCommonsArrowRight");if(c.hasOwnProperty("right")){if(c.right.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderLeftStateHighlighted");}else if(c.right.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderLeftStateDimmed");}else if(c.right.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderLeftStateSelected");}else{r.addClass("sapSuiteUiCommonsBorderLeftStateRegular");}}r.writeClasses();r.write(">");r.write("</div>");}r.write("</div>");};P._writeThirdRowOfSpecialLine=function(r,c,z,C){P._resetFloat(r);r.write("<div");r.addClass("sapSuiteUiCommonsFloatLeft");if(C._getShowLabels()){r.addClass("sapSuiteUiCommonsPFWithLabel");}switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxZoom1Width");r.addClass("sapSuiteUiCommonsBoxBottomZoom1Height");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxZoom3Width");r.addClass("sapSuiteUiCommonsBoxBottomZoom3Height");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxZoom4Width");r.addClass("sapSuiteUiCommonsBoxBottomZoom4Height");break;default:r.addClass("sapSuiteUiCommonsBoxZoom2Width");r.addClass("sapSuiteUiCommonsBoxBottomZoom2Height");}r.writeClasses();r.write(">");r.write("</div>");r.write("<div");if(C._getShowLabels()){r.addClass("sapSuiteUiCommonsPFWithLabel");}r.addClass("sapSuiteUiCommonsFloatLeft");switch(z){case l.ProcessFlowZoomLevel.One:r.addClass("sapSuiteUiCommonsBoxBottomZoom1Height");break;case l.ProcessFlowZoomLevel.Three:r.addClass("sapSuiteUiCommonsBoxBottomZoom3Height");break;case l.ProcessFlowZoomLevel.Four:r.addClass("sapSuiteUiCommonsBoxBottomZoom4Height");break;default:r.addClass("sapSuiteUiCommonsBoxBottomZoom2Height");}if(c.hasOwnProperty("bottom")&&c.bottom.draw){r.addClass("sapSuiteUiCommonsBoxMiddleBorderWidth");r.addClass("sapSuiteUiCommonsBorderLeft");if(c.bottom.type===l.ProcessFlowConnectionType.Planned){r.addClass("sapSuiteUiCommonsBorderLeftTypePlanned");}else{r.addClass("sapSuiteUiCommonsBorderLeftTypeNormal");}if(c.bottom.state===l.ProcessFlowConnectionState.Highlighted){r.addClass("sapSuiteUiCommonsBorderLeftStateHighlighted");r.addClass("sapSuiteUiCommonsStateHighlighted");}else if(c.bottom.state===l.ProcessFlowConnectionState.Dimmed){r.addClass("sapSuiteUiCommonsBorderLeftStateDimmed");}else if(c.bottom.state===l.ProcessFlowConnectionState.Selected){r.addClass("sapSuiteUiCommonsBorderLeftStateSelected");r.addClass("sapSuiteUiCommonsStateSelected");}else{r.addClass("sapSuiteUiCommonsBorderLeftStateRegular");r.addClass("sapSuiteUiCommonsStateRegular");}}else{r.addClass("sapSuiteUiCommonsBoxMiddleWidth");}r.writeClasses();r.write(">");r.write("</div>");};P._resetFloat=function(r){r.write("<div");r.addClass("sapSuiteUiCommonsFloatClear");r.writeClasses();r.write(">");r.write("</div>");};P._renderLabel=function(r,c){var L=c._getVisibleLabel();if(c.getAggregation("_labels")){var a=c.getAggregation("_labels");for(var i=0;i<a.length;i++){if(a[i]._getSelected()){L._setDimmed(false);if(a[i].getId()!==L.getId()){L._setSelected(true);a[i]._setSelected(false);}}}}if(L){r.renderControl(L);}};return P;},true);
