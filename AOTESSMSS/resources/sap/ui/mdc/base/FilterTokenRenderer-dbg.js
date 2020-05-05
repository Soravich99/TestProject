/*!

* SAP UI development toolkit for HTML5 (SAPUI5)

(c) Copyright 2009-2017 SAP SE. All rights reserved

*/
sap.ui.define(['jquery.sap.global', 'sap/ui/core/Renderer'],
	function(jQuery, Renderer) {
		"use strict";


		/**
		 * Token renderer.
		 * @namespace
		 */
		var FilterTokenRenderer = Renderer.extend("sap.ui.mdc.base.FilterTokenRenderer");

		/**
		 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
		 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
		 */
		FilterTokenRenderer.render = function(oRm, oControl) {
			// write the HTML into the render manager
			oRm.write("<div tabindex=\"-1\"");
			oRm.writeControlData(oControl);
			oRm.addClass("sapMToken");
			oRm.addClass("sapMFilterToken");

			oRm.writeAttribute("role", "listitem");
			oRm.writeAttribute("aria-readonly", !oControl.getEditable());
			oRm.writeAttribute("aria-selected", oControl.getSelected());

			if (oControl.getSelected()) {
				oRm.addClass("sapMTokenSelected");
			}

			if (!oControl.getEditable()) {
				oRm.addClass("sapMTokenReadOnly");
			}

			oRm.writeClasses();

			// add tooltip if available
			var sTooltip = oControl.getTooltip_AsString();
			if (sTooltip) {
				oRm.writeAttributeEscaped("title", sTooltip);
			}

			var oAccAttributes = {}; // additional accessibility attributes

			//ARIA attributes
			oAccAttributes.describedby = {
				value: oControl._sAriaTokenLabelId,
				append: true
			};

			if (oControl.getEditable()) {
				oAccAttributes.describedby = {
					value: oControl._sAriaTokenDeletableId,
					append: true
				};
			}

			oRm.writeAccessibilityState(oControl, oAccAttributes);

			oRm.write(">");

			this._renderInnerControl(oRm, oControl);

			if (oControl.getEditable()) {
				oRm.renderControl(oControl._deleteIcon);
			}

			oRm.write("</div>");
		};

		FilterTokenRenderer._renderInnerControl = function(oRm, oControl) {
			var sTextDir = oControl.getTextDirection();

			oRm.write("<div");
			oRm.addClass("sapMTokenText");
			oRm.addClass("sapMFilterTokenText");

			oRm.writeStyles();
			oRm.writeClasses();
			// set text direction
			if (sTextDir !== sap.ui.core.TextDirection.Inherit) {
				oRm.writeAttribute("dir", sTextDir.toLowerCase());
			}
			oRm.writeAttribute("tabIndex", "-1");
			oRm.write(">");
			oRm.writeEscaped(oControl.getText());
			oRm.write("</div>");
		};


		return FilterTokenRenderer;

	}, /* bExport= */ true);