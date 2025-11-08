var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_lab11_1 = new ol.format.GeoJSON();
var features_lab11_1 = format_lab11_1.readFeatures(json_lab11_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab11_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab11_1.addFeatures(features_lab11_1);
var lyr_lab11_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab11_1, 
                style: style_lab11_1,
                popuplayertitle: 'lab1.1',
                interactive: true,
                title: '<img src="styles/legend/lab11_1.png" /> lab1.1'
            });
var format_lab113_2 = new ol.format.GeoJSON();
var features_lab113_2 = format_lab113_2.readFeatures(json_lab113_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab113_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab113_2.addFeatures(features_lab113_2);
var lyr_lab113_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab113_2, 
                style: style_lab113_2,
                popuplayertitle: 'lab1.1 — 3',
                interactive: true,
                title: '<img src="styles/legend/lab113_2.png" /> lab1.1 — 3'
            });
var format_lab11_3 = new ol.format.GeoJSON();
var features_lab11_3 = format_lab11_3.readFeatures(json_lab11_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab11_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab11_3.addFeatures(features_lab11_3);
var lyr_lab11_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab11_3, 
                style: style_lab11_3,
                popuplayertitle: 'lab1.1 — строения',
                interactive: true,
                title: '<img src="styles/legend/lab11_3.png" /> lab1.1 — строения'
            });
var format_lab11_4 = new ol.format.GeoJSON();
var features_lab11_4 = format_lab11_4.readFeatures(json_lab11_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab11_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab11_4.addFeatures(features_lab11_4);
var lyr_lab11_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab11_4, 
                style: style_lab11_4,
                popuplayertitle: 'lab1.1 — строениядома',
                interactive: true,
                title: '<img src="styles/legend/lab11_4.png" /> lab1.1 — строениядома'
            });
var format_lab11_5 = new ol.format.GeoJSON();
var features_lab11_5 = format_lab11_5.readFeatures(json_lab11_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab11_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab11_5.addFeatures(features_lab11_5);
var lyr_lab11_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab11_5, 
                style: style_lab11_5,
                popuplayertitle: 'lab1.1 — дорога',
                interactive: true,
                title: '<img src="styles/legend/lab11_5.png" /> lab1.1 — дорога'
            });
var format_lab112_6 = new ol.format.GeoJSON();
var features_lab112_6 = format_lab112_6.readFeatures(json_lab112_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab112_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab112_6.addFeatures(features_lab112_6);
var lyr_lab112_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab112_6, 
                style: style_lab112_6,
                popuplayertitle: 'lab1.1 — 2',
                interactive: true,
                title: '<img src="styles/legend/lab112_6.png" /> lab1.1 — 2'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_lab11_1.setVisible(true);lyr_lab113_2.setVisible(true);lyr_lab11_3.setVisible(true);lyr_lab11_4.setVisible(true);lyr_lab11_5.setVisible(true);lyr_lab112_6.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_lab11_1,lyr_lab113_2,lyr_lab11_3,lyr_lab11_4,lyr_lab11_5,lyr_lab112_6];
lyr_lab11_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_lab113_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'building:part': 'building:part', });
lyr_lab11_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'addr:street': 'addr:street', 'description': 'description', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'waterway': 'waterway', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insulated': 'gas_insulated', 'frequency': 'frequency', 'branch': 'branch', 'building:levels': 'building:levels', 'name:ru': 'name:ru', 'amenity': 'amenity', 'shop': 'shop', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_lab11_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_lab11_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'covered': 'covered', 'surface': 'surface', 'highway': 'highway', 'foot': 'foot', 'voltage': 'voltage', 'usage': 'usage', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', });
lyr_lab112_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_lab11_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_lab113_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:postcode': '', 'addr:city': '', 'building:part': '', });
lyr_lab11_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tourism': '', 'addr:street': '', 'description': '', 'religion': '', 'training': '', 'sport': '', 'leisure': '', 'waterway': '', 'voltage': '', 'substation': '', 'power': '', 'operator': '', 'location': '', 'gas_insulated': '', 'frequency': '', 'branch': '', 'building:levels': '', 'name:ru': '', 'amenity': '', 'shop': '', 'type': '', 'name': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'address': '', });
lyr_lab11_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'address': '', });
lyr_lab11_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'covered': '', 'surface': '', 'highway': '', 'foot': '', 'voltage': '', 'usage': '', 'gauge': '', 'frequency': '', 'electrified': '', });
lyr_lab112_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_lab11_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_lab113_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'building:part': 'no label', });
lyr_lab11_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'description': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'waterway': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'frequency': 'no label', 'branch': 'no label', 'building:levels': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'shop': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_lab11_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_lab11_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'covered': 'no label', 'surface': 'no label', 'highway': 'no label', 'foot': 'no label', 'voltage': 'no label', 'usage': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrified': 'no label', });
lyr_lab112_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_lab112_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});