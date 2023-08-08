var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_FSJDEZ_2022_1 = new ol.layer.Tile({
            'title': 'FSJ - DEZ_2022',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: './Tiles/{z}/{x}/{-y}.png'
            })
        });
var format_AAGR_2 = new ol.format.GeoJSON();
var features_AAGR_2 = format_AAGR_2.readFeatures(json_AAGR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AAGR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AAGR_2.addFeatures(features_AAGR_2);
var lyr_AAGR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AAGR_2, 
                style: style_AAGR_2,
                interactive: true,
                title: '<img src="styles/legend/AAGR_2.png" /> AAGR'
            });
var format_ACUDE_3 = new ol.format.GeoJSON();
var features_ACUDE_3 = format_ACUDE_3.readFeatures(json_ACUDE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACUDE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACUDE_3.addFeatures(features_ACUDE_3);
var lyr_ACUDE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACUDE_3, 
                style: style_ACUDE_3,
                interactive: true,
                title: '<img src="styles/legend/ACUDE_3.png" /> ACUDE'
            });
var format_ASINDS_4 = new ol.format.GeoJSON();
var features_ASINDS_4 = format_ASINDS_4.readFeatures(json_ASINDS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASINDS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASINDS_4.addFeatures(features_ASINDS_4);
var lyr_ASINDS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ASINDS_4, 
                style: style_ASINDS_4,
                interactive: true,
                title: '<img src="styles/legend/ASINDS_4.png" /> ASINDS'
            });
var format_BENFEITORIAS_5 = new ol.format.GeoJSON();
var features_BENFEITORIAS_5 = format_BENFEITORIAS_5.readFeatures(json_BENFEITORIAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENFEITORIAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENFEITORIAS_5.addFeatures(features_BENFEITORIAS_5);
var lyr_BENFEITORIAS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BENFEITORIAS_5, 
                style: style_BENFEITORIAS_5,
                interactive: true,
                title: '<img src="styles/legend/BENFEITORIAS_5.png" /> BENFEITORIAS'
            });
var format_ESTRADA_6 = new ol.format.GeoJSON();
var features_ESTRADA_6 = format_ESTRADA_6.readFeatures(json_ESTRADA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTRADA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTRADA_6.addFeatures(features_ESTRADA_6);
var lyr_ESTRADA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTRADA_6, 
                style: style_ESTRADA_6,
                interactive: true,
                title: '<img src="styles/legend/ESTRADA_6.png" /> ESTRADA'
            });
var format_ESTRADA_MUNICIPAL_7 = new ol.format.GeoJSON();
var features_ESTRADA_MUNICIPAL_7 = format_ESTRADA_MUNICIPAL_7.readFeatures(json_ESTRADA_MUNICIPAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTRADA_MUNICIPAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTRADA_MUNICIPAL_7.addFeatures(features_ESTRADA_MUNICIPAL_7);
var lyr_ESTRADA_MUNICIPAL_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTRADA_MUNICIPAL_7, 
                style: style_ESTRADA_MUNICIPAL_7,
                interactive: true,
                title: '<img src="styles/legend/ESTRADA_MUNICIPAL_7.png" /> ESTRADA_MUNICIPAL'
            });
var format_LAGOAS_8 = new ol.format.GeoJSON();
var features_LAGOAS_8 = format_LAGOAS_8.readFeatures(json_LAGOAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAGOAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAGOAS_8.addFeatures(features_LAGOAS_8);
var lyr_LAGOAS_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAGOAS_8, 
                style: style_LAGOAS_8,
                interactive: true,
                title: '<img src="styles/legend/LAGOAS_8.png" /> LAGOAS'
            });
var format_HIDROGRAFIA_9 = new ol.format.GeoJSON();
var features_HIDROGRAFIA_9 = format_HIDROGRAFIA_9.readFeatures(json_HIDROGRAFIA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDROGRAFIA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGRAFIA_9.addFeatures(features_HIDROGRAFIA_9);
var lyr_HIDROGRAFIA_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIDROGRAFIA_9, 
                style: style_HIDROGRAFIA_9,
                interactive: true,
                title: '<img src="styles/legend/HIDROGRAFIA_9.png" /> HIDROGRAFIA'
            });
var format_AVREM_10 = new ol.format.GeoJSON();
var features_AVREM_10 = format_AVREM_10.readFeatures(json_AVREM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AVREM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AVREM_10.addFeatures(features_AVREM_10);
var lyr_AVREM_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AVREM_10, 
                style: style_AVREM_10,
                interactive: true,
                title: '<img src="styles/legend/AVREM_10.png" /> AVREM'
            });
var format_PRADE_11 = new ol.format.GeoJSON();
var features_PRADE_11 = format_PRADE_11.readFeatures(json_PRADE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRADE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRADE_11.addFeatures(features_PRADE_11);
var lyr_PRADE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PRADE_11, 
                style: style_PRADE_11,
                interactive: true,
                title: '<img src="styles/legend/PRADE_11.png" /> PRADE'
            });
var format_PRADE_ARAS_12 = new ol.format.GeoJSON();
var features_PRADE_ARAS_12 = format_PRADE_ARAS_12.readFeatures(json_PRADE_ARAS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRADE_ARAS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRADE_ARAS_12.addFeatures(features_PRADE_ARAS_12);
var lyr_PRADE_ARAS_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PRADE_ARAS_12, 
                style: style_PRADE_ARAS_12,
                interactive: true,
                title: '<img src="styles/legend/PRADE_ARAS_12.png" /> PRADE_ARAS'
            });
var format_PRADE_ARPP_13 = new ol.format.GeoJSON();
var features_PRADE_ARPP_13 = format_PRADE_ARPP_13.readFeatures(json_PRADE_ARPP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRADE_ARPP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRADE_ARPP_13.addFeatures(features_PRADE_ARPP_13);
var lyr_PRADE_ARPP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PRADE_ARPP_13, 
                style: style_PRADE_ARPP_13,
                interactive: true,
                title: '<img src="styles/legend/PRADE_ARPP_13.png" /> PRADE_ARPP'
            });
var format_APPCRH_14 = new ol.format.GeoJSON();
var features_APPCRH_14 = format_APPCRH_14.readFeatures(json_APPCRH_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APPCRH_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPCRH_14.addFeatures(features_APPCRH_14);
var lyr_APPCRH_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APPCRH_14, 
                style: style_APPCRH_14,
                interactive: true,
                title: '<img src="styles/legend/APPCRH_14.png" /> APPCRH'
            });
var format_APTAD_15 = new ol.format.GeoJSON();
var features_APTAD_15 = format_APTAD_15.readFeatures(json_APTAD_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APTAD_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APTAD_15.addFeatures(features_APTAD_15);
var lyr_APTAD_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APTAD_15, 
                style: style_APTAD_15,
                interactive: true,
                title: '<img src="styles/legend/APTAD_15.png" /> APTAD'
            });
var format_APTCR_16 = new ol.format.GeoJSON();
var features_APTCR_16 = format_APTCR_16.readFeatures(json_APTCR_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APTCR_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APTCR_16.addFeatures(features_APTCR_16);
var lyr_APTCR_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APTCR_16, 
                style: style_APTCR_16,
                interactive: true,
                title: '<img src="styles/legend/APTCR_16.png" /> APTCR'
            });
var format_RIO_17 = new ol.format.GeoJSON();
var features_RIO_17 = format_RIO_17.readFeatures(json_RIO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIO_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIO_17.addFeatures(features_RIO_17);
var lyr_RIO_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIO_17, 
                style: style_RIO_17,
                interactive: true,
                title: '<img src="styles/legend/RIO_17.png" /> RIO'
            });
var format_FSJSIGEF_18 = new ol.format.GeoJSON();
var features_FSJSIGEF_18 = format_FSJSIGEF_18.readFeatures(json_FSJSIGEF_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FSJSIGEF_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSJSIGEF_18.addFeatures(features_FSJSIGEF_18);
var lyr_FSJSIGEF_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FSJSIGEF_18, 
                style: style_FSJSIGEF_18,
                interactive: true,
                title: '<img src="styles/legend/FSJSIGEF_18.png" /> FSJ - SIGEF'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_FSJDEZ_2022_1.setVisible(true);lyr_AAGR_2.setVisible(true);lyr_ACUDE_3.setVisible(true);lyr_ASINDS_4.setVisible(true);lyr_BENFEITORIAS_5.setVisible(true);lyr_ESTRADA_6.setVisible(true);lyr_ESTRADA_MUNICIPAL_7.setVisible(true);lyr_LAGOAS_8.setVisible(true);lyr_HIDROGRAFIA_9.setVisible(true);lyr_AVREM_10.setVisible(true);lyr_PRADE_11.setVisible(true);lyr_PRADE_ARAS_12.setVisible(true);lyr_PRADE_ARPP_13.setVisible(true);lyr_APPCRH_14.setVisible(true);lyr_APTAD_15.setVisible(true);lyr_APTCR_16.setVisible(true);lyr_RIO_17.setVisible(true);lyr_FSJSIGEF_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FSJDEZ_2022_1,lyr_AAGR_2,lyr_ACUDE_3,lyr_ASINDS_4,lyr_BENFEITORIAS_5,lyr_ESTRADA_6,lyr_ESTRADA_MUNICIPAL_7,lyr_LAGOAS_8,lyr_HIDROGRAFIA_9,lyr_AVREM_10,lyr_PRADE_11,lyr_PRADE_ARAS_12,lyr_PRADE_ARPP_13,lyr_APPCRH_14,lyr_APTAD_15,lyr_APTCR_16,lyr_RIO_17,lyr_FSJSIGEF_18];
lyr_AAGR_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ACUDE_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ASINDS_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_BENFEITORIAS_5.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ESTRADA_6.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ESTRADA_MUNICIPAL_7.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_LAGOAS_8.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_HIDROGRAFIA_9.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_AVREM_10.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PRADE_11.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PRADE_ARAS_12.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PRADE_ARPP_13.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_APPCRH_14.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_APTAD_15.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_APTCR_16.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_RIO_17.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_FSJSIGEF_18.set('fieldAliases', {'fid': 'fid', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', 'AREA_SIGEF': 'AREA_SIGEF', });
lyr_AAGR_2.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ACUDE_3.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ASINDS_4.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_BENFEITORIAS_5.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ESTRADA_6.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ESTRADA_MUNICIPAL_7.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_LAGOAS_8.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_HIDROGRAFIA_9.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_AVREM_10.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PRADE_11.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PRADE_ARAS_12.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PRADE_ARPP_13.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_APPCRH_14.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_APTAD_15.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_APTCR_16.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_RIO_17.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_FSJSIGEF_18.set('fieldImages', {'fid': '', 'parcela_co': '', 'rt': '', 'art': '', 'situacao_i': '', 'codigo_imo': '', 'data_submi': '', 'data_aprov': '', 'status': '', 'nome_area': '', 'registro_m': '', 'registro_d': '', 'municipio_': '', 'uf_id': '', 'AREA_SIGEF': '', });
lyr_AAGR_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ACUDE_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ASINDS_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_BENFEITORIAS_5.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ESTRADA_6.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ESTRADA_MUNICIPAL_7.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_LAGOAS_8.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_HIDROGRAFIA_9.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_AVREM_10.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PRADE_11.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PRADE_ARAS_12.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PRADE_ARPP_13.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_APPCRH_14.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_APTAD_15.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_APTCR_16.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_RIO_17.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_FSJSIGEF_18.set('fieldLabels', {'fid': 'no label', 'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', 'AREA_SIGEF': 'no label', });
lyr_FSJSIGEF_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});