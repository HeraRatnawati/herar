var wms_layers = [];

        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });var lyr_Batas_Desa_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Batas_Desa",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Batas_Desa",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Batas_Desa_1, 0]);var format_slemanBatas_Desa_2 = new ol.format.GeoJSON();
var jsonSource_slemanBatas_Desa_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
    format: format_slemanBatas_Desa_2
});var lyr_slemanBatas_Desa_2 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_slemanBatas_Desa_2, 
    style: style_slemanBatas_Desa_2,
    title: "sleman:Batas_Desa"
});

function getslemanBatas_Desa_2Json(geojson) {
    var features_slemanBatas_Desa_2 = format_slemanBatas_Desa_2.readFeatures(geojson);
    jsonSource_slemanBatas_Desa_2.addFeatures(features_slemanBatas_Desa_2);
}

lyr_ESRISatellite_0.setVisible(true);lyr_Batas_Desa_1.setVisible(true);lyr_slemanBatas_Desa_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Batas_Desa_1,lyr_slemanBatas_Desa_2];
lyr_slemanBatas_Desa_2.set('fieldAliases', {'STATUS_KOT': 'STATUS_KOT', 'KODE_2008': 'KODE_2008', 'DESA_2008': 'DESA_2008', 'KEC_2008': 'KEC_2008', 'KAB_2008': 'KAB_2008', 'PROP_2008': 'PROP_2008', });
lyr_slemanBatas_Desa_2.set('fieldImages', {'STATUS_KOT': '', 'KODE_2008': '', 'DESA_2008': '', 'KEC_2008': '', 'KAB_2008': '', 'PROP_2008': '', });
lyr_slemanBatas_Desa_2.set('fieldLabels', {'STATUS_KOT': 'no label', 'KODE_2008': 'no label', 'DESA_2008': 'no label', 'KEC_2008': 'no label', 'KAB_2008': 'no label', 'PROP_2008': 'no label', });
lyr_slemanBatas_Desa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});