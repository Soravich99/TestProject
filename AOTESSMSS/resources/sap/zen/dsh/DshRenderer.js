jQuery.sap.declare("sap.zen.dsh.DshRenderer");sap.zen.dsh.DshRenderer={};
sap.zen.dsh.DshRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.addClass("sapZenDshDsh");r.writeStyles();r.writeClasses();r.write(">");r.write("<div id=\""+c.getId()+"sapbi_snippet_ROOT\" ");r.write("style=\"");r.write("width:100%;");r.write("height:100%;");r.write("\">");r.write("</div>");r.write("</div>");};