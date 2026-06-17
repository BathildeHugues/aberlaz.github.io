ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([1070057.970795, 6073392.997080, 1343255.150206, 6261931.769098]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.550000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dpartement_2 = new ol.format.GeoJSON();
var features_Dpartement_2 = format_Dpartement_2.readFeatures(json_Dpartement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Dpartement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartement_2.addFeatures(features_Dpartement_2);
var lyr_Dpartement_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpartement_2, 
                style: style_Dpartement_2,
                popuplayertitle: 'Département',
                interactive: true,
                title: '<img src="styles/legend/Dpartement_2.png" /> Département'
            });
var format_Cheflieudpartement_3 = new ol.format.GeoJSON();
var features_Cheflieudpartement_3 = format_Cheflieudpartement_3.readFeatures(json_Cheflieudpartement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Cheflieudpartement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cheflieudpartement_3.addFeatures(features_Cheflieudpartement_3);
var lyr_Cheflieudpartement_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cheflieudpartement_3, 
                style: style_Cheflieudpartement_3,
                popuplayertitle: 'Chef lieu département',
                interactive: true,
                title: '<img src="styles/legend/Cheflieudpartement_3.png" /> Chef lieu département'
            });
var format_EPCI_4 = new ol.format.GeoJSON();
var features_EPCI_4 = format_EPCI_4.readFeatures(json_EPCI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_EPCI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_4.addFeatures(features_EPCI_4);
var lyr_EPCI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCI_4, 
                style: style_EPCI_4,
                popuplayertitle: 'EPCI',
                interactive: true,
                title: '<img src="styles/legend/EPCI_4.png" /> EPCI'
            });
var format_Coursdeau_5 = new ol.format.GeoJSON();
var features_Coursdeau_5 = format_Coursdeau_5.readFeatures(json_Coursdeau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Coursdeau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursdeau_5.addFeatures(features_Coursdeau_5);
var lyr_Coursdeau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursdeau_5, 
                style: style_Coursdeau_5,
                popuplayertitle: 'Cours d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Coursdeau_5.png" /> Cours d\'eau'
            });
var format_AlasubmersioncentennalHauteurdeau_6 = new ol.format.GeoJSON();
var features_AlasubmersioncentennalHauteurdeau_6 = format_AlasubmersioncentennalHauteurdeau_6.readFeatures(json_AlasubmersioncentennalHauteurdeau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_AlasubmersioncentennalHauteurdeau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlasubmersioncentennalHauteurdeau_6.addFeatures(features_AlasubmersioncentennalHauteurdeau_6);
var lyr_AlasubmersioncentennalHauteurdeau_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlasubmersioncentennalHauteurdeau_6, 
                style: style_AlasubmersioncentennalHauteurdeau_6,
                popuplayertitle: 'Aléa submersion centennal - Hauteur d\'eau ',
                interactive: true,
                title: '<img src="styles/legend/AlasubmersioncentennalHauteurdeau_6.png" /> Aléa submersion centennal - Hauteur d\'eau '
            });
var format_Alasubmersiondcennalhauteurdeau_7 = new ol.format.GeoJSON();
var features_Alasubmersiondcennalhauteurdeau_7 = format_Alasubmersiondcennalhauteurdeau_7.readFeatures(json_Alasubmersiondcennalhauteurdeau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Alasubmersiondcennalhauteurdeau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alasubmersiondcennalhauteurdeau_7.addFeatures(features_Alasubmersiondcennalhauteurdeau_7);
var lyr_Alasubmersiondcennalhauteurdeau_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alasubmersiondcennalhauteurdeau_7, 
                style: style_Alasubmersiondcennalhauteurdeau_7,
                popuplayertitle: 'Aléa submersion décennal- hauteur d\'eau',
                interactive: true,
                title: '<img src="styles/legend/Alasubmersiondcennalhauteurdeau_7.png" /> Aléa submersion décennal- hauteur d\'eau'
            });
var format_Limiteterremer_8 = new ol.format.GeoJSON();
var features_Limiteterremer_8 = format_Limiteterremer_8.readFeatures(json_Limiteterremer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Limiteterremer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limiteterremer_8.addFeatures(features_Limiteterremer_8);
var lyr_Limiteterremer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limiteterremer_8, 
                style: style_Limiteterremer_8,
                popuplayertitle: 'Limite terre mer',
                interactive: true,
                title: '<img src="styles/legend/Limiteterremer_8.png" /> Limite terre mer'
            });
var format_Zonesdestran_9 = new ol.format.GeoJSON();
var features_Zonesdestran_9 = format_Zonesdestran_9.readFeatures(json_Zonesdestran_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Zonesdestran_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesdestran_9.addFeatures(features_Zonesdestran_9);
var lyr_Zonesdestran_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesdestran_9, 
                style: style_Zonesdestran_9,
                popuplayertitle: 'Zones d\'estran',
                interactive: true,
                title: '<img src="styles/legend/Zonesdestran_9.png" /> Zones d\'estran'
            });
var group_Hydrographieetmaritime = new ol.layer.Group({
                                layers: [lyr_Coursdeau_5,lyr_AlasubmersioncentennalHauteurdeau_6,lyr_Alasubmersiondcennalhauteurdeau_7,lyr_Limiteterremer_8,lyr_Zonesdestran_9,],
                                fold: 'open',
                                title: 'Hydrographie et maritime'});
var group_PrimtresAdministratifs = new ol.layer.Group({
                                layers: [lyr_Dpartement_2,lyr_Cheflieudpartement_3,lyr_EPCI_4,],
                                fold: 'open',
                                title: 'Périmètres Administratifs'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Dpartement_2.setVisible(true);lyr_Cheflieudpartement_3.setVisible(true);lyr_EPCI_4.setVisible(true);lyr_Coursdeau_5.setVisible(true);lyr_AlasubmersioncentennalHauteurdeau_6.setVisible(true);lyr_Alasubmersiondcennalhauteurdeau_7.setVisible(true);lyr_Limiteterremer_8.setVisible(true);lyr_Zonesdestran_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,group_PrimtresAdministratifs,group_Hydrographieetmaritime];
lyr_Dpartement_2.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nom_officiel': 'nom_officiel', 'nom_officiel_en_majuscules': 'nom_officiel_en_majuscules', 'code_insee': 'code_insee', 'code_insee_de_la_region': 'code_insee_de_la_region', 'code_siren': 'code_siren', });
lyr_Cheflieudpartement_3.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nom_officiel': 'nom_officiel', 'nom_officiel_en_majuscules': 'nom_officiel_en_majuscules', 'nom_du_chef_lieu': 'nom_du_chef_lieu', 'nom_du_chef_lieu_en_majuscules': 'nom_du_chef_lieu_en_majuscules', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_commune_siege': 'code_insee_de_la_commune_siege', 'code_siren': 'code_siren', 'lien_vers_le_departement': 'lien_vers_le_departement', });
lyr_EPCI_4.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nom_officiel': 'nom_officiel', 'nom_officiel_en_majuscules': 'nom_officiel_en_majuscules', 'nature': 'nature', 'codes_insee_des_communes_membres': 'codes_insee_des_communes_membres', 'codes_insee_des_departements_membres': 'codes_insee_des_departements_membres', 'code_siren': 'code_siren', });
lyr_Coursdeau_5.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_hydrographique': 'code_hydrographique', 'statut': 'statut', 'toponyme': 'toponyme', 'statut_du_toponyme': 'statut_du_toponyme', 'influence_de_la_maree': 'influence_de_la_maree', 'caractere_permanent': 'caractere_permanent', });
lyr_AlasubmersioncentennalHauteurdeau_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'id_zone': 'id_zone', 'id_s_inond': 'id_s_inond', 'typ_inond': 'typ_inond', 'typ_inond2': 'typ_inond2', 'scenario': 'scenario', 'datentree': 'datentree', 'datsortie': 'datsortie', 'ht_min': 'ht_min', 'ht_max': 'ht_max', 'est_ref': 'est_ref', 'cours_deau': 'cours_deau', 'id_tri': 'id_tri', });
lyr_Alasubmersiondcennalhauteurdeau_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'id_zone': 'id_zone', 'id_s_inond': 'id_s_inond', 'typ_inond': 'typ_inond', 'typ_inond2': 'typ_inond2', 'scenario': 'scenario', 'datentree': 'datentree', 'datsortie': 'datsortie', 'ht_min': 'ht_min', 'ht_max': 'ht_max', 'est_ref': 'est_ref', 'cours_deau': 'cours_deau', 'id_tri': 'id_tri', });
lyr_Limiteterremer_8.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_hydrographique': 'code_hydrographique', 'code_du_pays': 'code_du_pays', 'type_de_limite': 'type_de_limite', 'niveau': 'niveau', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'mode_d_obtention_des_coordonnees': 'mode_d_obtention_des_coordonnees', 'statut': 'statut', 'origine': 'origine', 'commentaire_sur_l_objet_hydro': 'commentaire_sur_l_objet_hydro', });
lyr_Zonesdestran_9.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', });
lyr_Dpartement_2.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nom_officiel': 'TextEdit', 'nom_officiel_en_majuscules': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'code_siren': 'TextEdit', });
lyr_Cheflieudpartement_3.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nom_officiel': 'TextEdit', 'nom_officiel_en_majuscules': 'TextEdit', 'nom_du_chef_lieu': 'TextEdit', 'nom_du_chef_lieu_en_majuscules': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_commune_siege': 'TextEdit', 'code_siren': 'TextEdit', 'lien_vers_le_departement': 'TextEdit', });
lyr_EPCI_4.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nom_officiel': 'TextEdit', 'nom_officiel_en_majuscules': 'TextEdit', 'nature': 'TextEdit', 'codes_insee_des_communes_membres': 'TextEdit', 'codes_insee_des_departements_membres': 'TextEdit', 'code_siren': 'TextEdit', });
lyr_Coursdeau_5.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_hydrographique': 'TextEdit', 'statut': 'TextEdit', 'toponyme': 'TextEdit', 'statut_du_toponyme': 'TextEdit', 'influence_de_la_maree': 'CheckBox', 'caractere_permanent': 'CheckBox', });
lyr_AlasubmersioncentennalHauteurdeau_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'id_zone': 'TextEdit', 'id_s_inond': 'TextEdit', 'typ_inond': 'TextEdit', 'typ_inond2': 'TextEdit', 'scenario': 'TextEdit', 'datentree': 'TextEdit', 'datsortie': 'TextEdit', 'ht_min': 'TextEdit', 'ht_max': 'TextEdit', 'est_ref': 'TextEdit', 'cours_deau': 'TextEdit', 'id_tri': 'TextEdit', });
lyr_Alasubmersiondcennalhauteurdeau_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'id_zone': 'TextEdit', 'id_s_inond': 'TextEdit', 'typ_inond': 'TextEdit', 'typ_inond2': 'TextEdit', 'scenario': 'TextEdit', 'datentree': 'TextEdit', 'datsortie': 'TextEdit', 'ht_min': 'TextEdit', 'ht_max': 'TextEdit', 'est_ref': 'TextEdit', 'cours_deau': 'TextEdit', 'id_tri': 'TextEdit', });
lyr_Limiteterremer_8.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_hydrographique': 'TextEdit', 'code_du_pays': 'TextEdit', 'type_de_limite': 'TextEdit', 'niveau': 'TextEdit', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'mode_d_obtention_des_coordonnees': 'TextEdit', 'statut': 'TextEdit', 'origine': 'TextEdit', 'commentaire_sur_l_objet_hydro': 'TextEdit', });
lyr_Zonesdestran_9.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nature': 'TextEdit', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', });
lyr_Dpartement_2.set('fieldLabels', {'fid': 'no label', 'cleabs': 'header label - visible with data', 'nom_officiel': 'inline label - visible with data', 'nom_officiel_en_majuscules': 'no label', 'code_insee': 'no label', 'code_insee_de_la_region': 'no label', 'code_siren': 'no label', });
lyr_Cheflieudpartement_3.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'nom_officiel': 'no label', 'nom_officiel_en_majuscules': 'no label', 'nom_du_chef_lieu': 'no label', 'nom_du_chef_lieu_en_majuscules': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_commune_siege': 'no label', 'code_siren': 'no label', 'lien_vers_le_departement': 'no label', });
lyr_EPCI_4.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'nom_officiel': 'inline label - visible with data', 'nom_officiel_en_majuscules': 'no label', 'nature': 'no label', 'codes_insee_des_communes_membres': 'no label', 'codes_insee_des_departements_membres': 'no label', 'code_siren': 'no label', });
lyr_Coursdeau_5.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_hydrographique': 'inline label - visible with data', 'statut': 'inline label - visible with data', 'toponyme': 'inline label - visible with data', 'statut_du_toponyme': 'no label', 'influence_de_la_maree': 'no label', 'caractere_permanent': 'no label', });
lyr_AlasubmersioncentennalHauteurdeau_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'id_zone': 'no label', 'id_s_inond': 'no label', 'typ_inond': 'no label', 'typ_inond2': 'no label', 'scenario': 'no label', 'datentree': 'no label', 'datsortie': 'no label', 'ht_min': 'inline label - visible with data', 'ht_max': 'inline label - visible with data', 'est_ref': 'no label', 'cours_deau': 'no label', 'id_tri': 'no label', });
lyr_Alasubmersiondcennalhauteurdeau_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'id_zone': 'no label', 'id_s_inond': 'no label', 'typ_inond': 'no label', 'typ_inond2': 'no label', 'scenario': 'no label', 'datentree': 'no label', 'datsortie': 'no label', 'ht_min': 'inline label - visible with data', 'ht_max': 'inline label - visible with data', 'est_ref': 'no label', 'cours_deau': 'no label', 'id_tri': 'no label', });
lyr_Limiteterremer_8.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_hydrographique': 'inline label - visible with data', 'code_du_pays': 'no label', 'type_de_limite': 'no label', 'niveau': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'mode_d_obtention_des_coordonnees': 'no label', 'statut': 'no label', 'origine': 'no label', 'commentaire_sur_l_objet_hydro': 'no label', });
lyr_Zonesdestran_9.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'nature': 'inline label - visible with data', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', });
lyr_Zonesdestran_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});