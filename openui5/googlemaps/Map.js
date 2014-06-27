sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./MapUtils","./MapTypeId"],function(t,e,o,i,a){"use strict";var n=e.extend("openui5.googlemaps.Map",{metadata:{properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"auto"},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"10rem"},zoom:{type:"int",defaultValue:8},center:{type:"object",bindable:"bindable",defaultValue:{lat:48,lng:-121}},disableDefaultUI:{type:"boolean",defaultValue:!0},mapTypeId:{type:"string",defaultValue:a.ROADMAP},panControl:{type:"boolean",defaultValue:!1},zoomControl:{type:"boolean",defaultValue:!1},mapTypeControl:{type:"boolean",defaultValue:!1},streetViewControl:{type:"boolean",defaultValue:!1}},defaultAggregation:"markers",aggregations:{markers:{type:"openui5.googlemaps.Marker",multiple:!0,bindable:"bindable"},polylines:{type:"openui5.googlemaps.Polyline",multiple:!0,bindable:"bindable"},polygons:{type:"openui5.googlemaps.Polygon",multiple:!0,bindable:"bindable"}},events:{change:{},ready:{}}},renderer:function(t,e){t.write("<div "),t.writeControlData(e),t.addStyle("width","auto"),t.addStyle("height","auto"),t.writeClasses(),t.writeStyles(),t.write(">"),t.write("<div"),t.writeAttribute("id",e.getId()+"-map"),t.addStyle("width",e.getWidth()),t.addStyle("height",e.getHeight()),t.writeStyles(),t.write(">"),t.write("</div>")}});return n.prototype.init=function(){this._dragging=!1,this.aListeners=[],this.mapId=this.getId()+"-map"},n.prototype.setZoom=function(t){this.setProperty("zoom",t,!0),this._map&&t!==this._map.getZoom()&&this._map.setZoom(t)},n.prototype.setCenter=function(t){return null===t||i.latLngEqual(this.getCenter(),t)?!0:(this.setProperty("center",t,!0),void(this._map&&!i.latLngEqual(i.latLngToObj(this._map.getCenter()),t)&&this._map.panTo(i.objToLatLng(t))))},n.prototype.setMapTypeId=function(t){this.setProperty("mapTypeId",t,!0),this._map&&t!==this._map.getMapTypeId()&&this._map.setMapTypeId(t)},n.prototype.setZoomControl=function(t){this.setProperty("zoomControl",t,!0),this._map&&t!==this._map.getZoomControl()&&this._map.setZoomControl(t)},n.prototype._getMapOptions=function(){var t={};return t.zoom=this.getZoom(),t.center=i.objToLatLng(this.getCenter()),t.disableDefaultUi=this.getDisableDefaultUI(),t.mapTypeId=this.getMapTypeId(),t.panControl=this.getPanControl(),t.zoomControl=this.getZoomControl(),t.mapTypeControl=this.getMapTypeControl(),t.streetViewControl=this.getStreetViewControl(),t},n.prototype.onAfterRendering=function(){this._map&&this.resetMap(),this.createMap()},n.prototype.createMap=function(){return void 0===o.loaded?(void 0===this.subscribed&&(sap.ui.getCore().getEventBus().subscribe(o.notifyEvent,this.createMap,this),this.subscribed=!0),!1):(this._map=new o.Map(t.sap.byId(this.mapId)[0],this._getMapOptions()),this.addListener("drag",t.proxy(this.updateValues,this)),this.addListener("zoom_changed",t.proxy(this.updateValues,this)),this.addListener("center_changed",t.proxy(this.updateValues,this)),this.addListener("bounds_changed",t.proxy(this.updateValues,this)),this.addListener("maptypeid_changed",t.proxy(this.updateValues,this)),this.addListener("resize",t.proxy(this.updateValues,this)),this._notifyMarkers("MapRendered",this._map),this._notifyPolylines("MapRendered",this._map),this._notifyPolygons("MapRendered",this._map),void this.fireReady({map:this.map,context:this.getBindingContext(),center:this.getCenter()}))},n.prototype.addListener=function(t,e){this.aListeners.push(o.event.addListener(this._map,t,e))},n.prototype.removeListeners=function(){this.aListeners.forEach(function(t){t.remove()}),this.aListeners=[]},n.prototype.trigger=function(t){o.event.trigger(this._map,t)},n.prototype.isDragging=function(){this._dragging=!0},n.prototype.isNotDragging=function(){this._dragging=!1},n.prototype.updateValues=function(){i.latLngToObj(this._map.getCenter())!==this.getCenter()&&this.setCenter(i.latLngToObj(this._map.getCenter())),this._map.getZoom()!==this.getZoom()&&this.setZoom(this._map.getZoom()),this._map.getMapTypeId()!==this.getMapTypeId()&&this.setMapTypeId(this._map.getMapTypeId())},n.prototype.getMarkers=function(){return this.getAggregation("markers",[])},n.prototype._notifyMarkers=function(t,e){this.getMarkers().forEach(function(o){o["on"+t](e)})},n.prototype.getPolylines=function(){return this.getAggregation("polylines",[])},n.prototype._notifyPolylines=function(t,e){this.getPolylines().forEach(function(o){o["on"+t](e)})},n.prototype._notifyPolygons=function(t,e){this.getPolygons().forEach(function(o){o["on"+t](e)})},n.prototype.resetMap=function(){this.removeListeners(),this._map.set(null)},n.prototype.exit=function(){this.resetMap(),this.init()},n},!0);