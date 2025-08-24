var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Dem_Nueva_Esperanza_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Dem_Nueva_Esperanza<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_0.png" /> 126<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_1.png" /> 136<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_2.png" /> 147<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_3.png" /> 157<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_4.png" /> 167<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_5.png" /> 177<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_6.png" /> 188<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_7.png" /> 197<br />\
    <img src="styles/legend/Dem_Nueva_Esperanza_1_8.png" /> 205<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Dem_Nueva_Esperanza_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8410303.382780, 969162.945518, -8408947.207757, 971125.582977]
        })
    });
var format_Nueva_Esperanza_2 = new ol.format.GeoJSON();
var features_Nueva_Esperanza_2 = format_Nueva_Esperanza_2.readFeatures(json_Nueva_Esperanza_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nueva_Esperanza_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nueva_Esperanza_2.addFeatures(features_Nueva_Esperanza_2);
var lyr_Nueva_Esperanza_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nueva_Esperanza_2, 
                style: style_Nueva_Esperanza_2,
                popuplayertitle: 'Nueva_Esperanza',
                interactive: true,
                title: '<img src="styles/legend/Nueva_Esperanza_2.png" /> Nueva_Esperanza'
            });
var format_Curvas_10m_NvaEsperanza_3 = new ol.format.GeoJSON();
var features_Curvas_10m_NvaEsperanza_3 = format_Curvas_10m_NvaEsperanza_3.readFeatures(json_Curvas_10m_NvaEsperanza_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas_10m_NvaEsperanza_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_10m_NvaEsperanza_3.addFeatures(features_Curvas_10m_NvaEsperanza_3);
var lyr_Curvas_10m_NvaEsperanza_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_10m_NvaEsperanza_3, 
                style: style_Curvas_10m_NvaEsperanza_3,
                popuplayertitle: 'Curvas_10m_NvaEsperanza',
                interactive: true,
                title: '<img src="styles/legend/Curvas_10m_NvaEsperanza_3.png" /> Curvas_10m_NvaEsperanza'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Dem_Nueva_Esperanza_1.setVisible(true);lyr_Nueva_Esperanza_2.setVisible(true);lyr_Curvas_10m_NvaEsperanza_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Dem_Nueva_Esperanza_1,lyr_Nueva_Esperanza_2,lyr_Curvas_10m_NvaEsperanza_3];
lyr_Nueva_Esperanza_2.set('fieldAliases', {'FID': 'FID', });
lyr_Curvas_10m_NvaEsperanza_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Nueva_Esperanza_2.set('fieldImages', {'FID': 'TextEdit', });
lyr_Curvas_10m_NvaEsperanza_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Nueva_Esperanza_2.set('fieldLabels', {'FID': 'hidden field', });
lyr_Curvas_10m_NvaEsperanza_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', });
lyr_Curvas_10m_NvaEsperanza_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});