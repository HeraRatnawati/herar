// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on jimu/BaseWidget esri/tasks/query esri/tasks/QueryTask".split(" "),function(d,e,f,g,h,k,l,m){return d([k],{baseClass:"jimu-widget-dsp",cityService:"http://sampleserver6.arcgisonline.com/arcgis/rest/services/SampleWorldCities/MapServer/0",startup:function(){this._createFilterNodes(this.config.filters)},_createFilterNodes:function(a){g.forEach(a,function(a){this._createFilterNode(a)},this)},_createFilterNode:function(a){var b=
f.create("div",{"class":"filter",style:{cursor:"pointer"},innerHTML:"City name start with:"+a},this.filterListNode);this.own(h(b,"click",e.hitch(this,this._onFilterClick,a)))},_onFilterClick:function(a,b){var d=new m(this.cityService),c=new l;c.where="upper(CITY_NAME) like upper('"+a+"%')";c.returnGeometry=!0;c.outFields=["*"];d.execute(c,e.hitch(this,this._onFilterReturn,a));f.setStyle(b.target,{backgroundColor:"yellow"})},_onFilterReturn:function(a,b){this.updateDataSourceData("filter-"+a,{features:b.features})}})});