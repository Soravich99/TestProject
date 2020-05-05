sap.ui.define(["sap/ushell/renderers/fiori2/search/controls/SearchFacet","sap/ushell/renderers/fiori2/search/controls/SearchFacetTabBar","sap/ushell/renderers/fiori2/search/controls/SearchFacetBarChart","sap/ushell/renderers/fiori2/search/controls/SearchFacetPieChart","sap/ushell/renderers/fiori2/search/controls/SearchFacetDialog","sap/ushell/renderers/fiori2/search/SearchFacetDialogModel"],function(){"use strict";sap.ushell.renderers.fiori2.search.controls.SearchFacetTabBar.extend('my.IconTabBar',{renderer:'sap.ushell.renderers.fiori2.search.controls.SearchFacetTabBarRenderer',setEshRole:function(){var a=this.getItems();for(var i=0;i<a.length;++i){var b=a[i];var f=b.getContent()[0];f.setEshRole.apply(f,arguments);}},getEshRole:function(){var i=this.getItems();var a=i[0];var f=a.getContent()[0];return f.getEshRole.apply(f,arguments);},attachSelectionChange:function(){}});return sap.ui.core.Control.extend('sap.ushell.renderers.fiori2.search.controls.SearchFacetFilter',{metadata:{properties:{title:"string"},aggregations:{"facets":{multiple:true}}},init:function(){this.data("sap-ui-fastnavgroup","true",true);},constructor:function(o){var t=this;o=jQuery.extend({},{},o);sap.ui.core.Control.prototype.constructor.apply(this,[o]);this.bindAggregation('facets','/facets',function(){if(t.getModel().config.charts){if(arguments[1].sPath!=="/facets/0"){var b={};b.id='barChart'+arguments[0];var i=new my.IconTabBar({items:[new sap.m.IconTabFilter({text:sap.ushell.resources.i18n.getText("facetList"),icon:"sap-icon://list",key:'list'+arguments[0],content:new sap.ushell.renderers.fiori2.search.controls.SearchFacet('list'+arguments[0])}),new sap.m.IconTabFilter({text:sap.ushell.resources.i18n.getText("facetBarChart"),icon:"sap-icon://horizontal-bar-chart",key:'barChart'+arguments[0],content:new sap.ushell.renderers.fiori2.search.controls.SearchFacetBarChart(b)}),new sap.m.IconTabFilter({text:sap.ushell.resources.i18n.getText("facetPieChart"),icon:"sap-icon://pie-chart",key:'pieChart'+arguments[0],content:new sap.ushell.renderers.fiori2.search.controls.SearchFacetPieChart('pieChart'+arguments[0])})]});i.addStyleClass("sapUshellSearchFacetIconTabBar");return i;}else{return new sap.ushell.renderers.fiori2.search.controls.SearchFacet(arguments[0]);}}else{return new sap.ushell.renderers.fiori2.search.controls.SearchFacet(arguments[0]);}});},fireReset:function(){this.getModel().resetFilterConditions(false);this.getModel().setDataSource(this.getModel().allDataSource,true);},renderer:function(r,c){function a(d){return function(e){var f=sap.ui.getCore().byId($($(this.getDomRef()).closest(".sapUshellSearchFacet")[0]).attr("id"));var F=new sap.ushell.renderers.fiori2.search.SearchFacetDialogModel();F.setData(c.getModel().getData());F.prepareFacetList();var d=null;if(f&&f.getBindingContext()&&f.getBindingContext().getObject()&&f.getBindingContext().getObject().dimension){d=f.getBindingContext().getObject().dimension;}var D=new sap.ushell.renderers.fiori2.search.controls.SearchFacetDialog({selectedAttribute:d});D.setModel(F);D.setModel(c.getModel(),'searchModel');D.open();var p=c.getParent().getParent().getParent().getParent();p.oFacetDialog=D;};}r.write("<div");r.writeControlData(c);r.addClass("sapUshellSearchFacetFilter");r.writeClasses();r.write('>');for(var i=0,l=c.getFacets().length;i<l;i++){var f=c.getFacets()[i];if(i===0){f.setEshRole("datasource");}else{f.setEshRole("attribute");f.attachSelectionChange(null,function(){jQuery(c.showAllBtn.getDomRef()).hide();});if(i===1){f.setHeaderText(sap.ushell.resources.i18n.getText("filterBy"));}var s=new sap.m.Link({text:"{i18n>showMore}",press:a(),visible:{parts:[{path:'/uiFilter/dataSource'}],formatter:function(d){return d.getType().toLowerCase()!=="category";}}});s.setModel(c.getModel());if(!c.getModel().config.charts){var b=new sap.m.CustomListItem({content:s});b.addStyleClass('sapUshellSearchFacetShowMoreLink');b.addEventDelegate({onAfterRendering:function(e){var d=jQuery(jQuery(e.srcControl.getDomRef()).find(".sapMLIBSelectM:first"));d.remove();}});f.addItem(b);}}r.renderControl(f);}if(c.getFacets().length>1||c.getModel().getDataSource().type==='BusinessObject'){r.write("<div>");c.showAllBtn=new sap.m.Button({text:"{showAllFilters}",press:a(),visible:false});c.showAllBtn.setModel(c.getModel("i18n"));c.showAllBtn.addStyleClass("sapUshellSearchFacetFilterShowAllFilterBtn");r.renderControl(c.showAllBtn);r.write("</div>");}r.write("</div>");},onAfterRendering:function(){if(this.getModel().getProperty('/count')>0){if((this.showAllBtn&&this.getFacets().length>1)&&!this.getModel().isOtherCategory()&&!this.getModel().isAllCategory()&&!this.getModel().isAppCategory()){this.showAllBtn.setVisible(true);this.showAllBtn.rerender();}}var a=$('.searchFacetFilter .searchFacet').first().find('ul');var b=a.find('li');a.attr('role','tree');b.attr('role','treeitem');}});});
