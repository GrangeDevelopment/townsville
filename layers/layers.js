ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7855").setExtent([387396.747077, 7809689.003242, 535188.321546, 7910530.564301]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CharacterResidential_2 = new ol.format.GeoJSON();
var features_CharacterResidential_2 = format_CharacterResidential_2.readFeatures(json_CharacterResidential_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_CharacterResidential_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharacterResidential_2.addFeatures(features_CharacterResidential_2);
var lyr_CharacterResidential_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharacterResidential_2, 
                style: style_CharacterResidential_2,
                popuplayertitle: 'Character Residential',
                interactive: false,
                title: '<img src="styles/legend/CharacterResidential_2.png" /> Character Residential'
            });
var format_CommunityFacilities_3 = new ol.format.GeoJSON();
var features_CommunityFacilities_3 = format_CommunityFacilities_3.readFeatures(json_CommunityFacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_CommunityFacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityFacilities_3.addFeatures(features_CommunityFacilities_3);
var lyr_CommunityFacilities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityFacilities_3, 
                style: style_CommunityFacilities_3,
                popuplayertitle: 'Community Facilities',
                interactive: false,
                title: '<img src="styles/legend/CommunityFacilities_3.png" /> Community Facilities'
            });
var format_Conservation_4 = new ol.format.GeoJSON();
var features_Conservation_4 = format_Conservation_4.readFeatures(json_Conservation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Conservation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservation_4.addFeatures(features_Conservation_4);
var lyr_Conservation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conservation_4, 
                style: style_Conservation_4,
                popuplayertitle: 'Conservation',
                interactive: false,
                title: '<img src="styles/legend/Conservation_4.png" /> Conservation'
            });
var format_DistrictCentre_5 = new ol.format.GeoJSON();
var features_DistrictCentre_5 = format_DistrictCentre_5.readFeatures(json_DistrictCentre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_DistrictCentre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictCentre_5.addFeatures(features_DistrictCentre_5);
var lyr_DistrictCentre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictCentre_5, 
                style: style_DistrictCentre_5,
                popuplayertitle: 'District Centre',
                interactive: false,
                title: '<img src="styles/legend/DistrictCentre_5.png" /> District Centre'
            });
var format_EmergingCommunity_6 = new ol.format.GeoJSON();
var features_EmergingCommunity_6 = format_EmergingCommunity_6.readFeatures(json_EmergingCommunity_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_EmergingCommunity_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmergingCommunity_6.addFeatures(features_EmergingCommunity_6);
var lyr_EmergingCommunity_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmergingCommunity_6, 
                style: style_EmergingCommunity_6,
                popuplayertitle: 'Emerging Community',
                interactive: false,
                title: '<img src="styles/legend/EmergingCommunity_6.png" /> Emerging Community'
            });
var format_HighDensityResidential_7 = new ol.format.GeoJSON();
var features_HighDensityResidential_7 = format_HighDensityResidential_7.readFeatures(json_HighDensityResidential_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_HighDensityResidential_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighDensityResidential_7.addFeatures(features_HighDensityResidential_7);
var lyr_HighDensityResidential_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighDensityResidential_7, 
                style: style_HighDensityResidential_7,
                popuplayertitle: 'High Density Residential',
                interactive: false,
                title: '<img src="styles/legend/HighDensityResidential_7.png" /> High Density Residential'
            });
var format_HighImpactIndustry_8 = new ol.format.GeoJSON();
var features_HighImpactIndustry_8 = format_HighImpactIndustry_8.readFeatures(json_HighImpactIndustry_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_HighImpactIndustry_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighImpactIndustry_8.addFeatures(features_HighImpactIndustry_8);
var lyr_HighImpactIndustry_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighImpactIndustry_8, 
                style: style_HighImpactIndustry_8,
                popuplayertitle: 'High Impact Industry',
                interactive: false,
                title: '<img src="styles/legend/HighImpactIndustry_8.png" /> High Impact Industry'
            });
var format_LocalCentre_9 = new ol.format.GeoJSON();
var features_LocalCentre_9 = format_LocalCentre_9.readFeatures(json_LocalCentre_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LocalCentre_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalCentre_9.addFeatures(features_LocalCentre_9);
var lyr_LocalCentre_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalCentre_9, 
                style: style_LocalCentre_9,
                popuplayertitle: 'Local Centre',
                interactive: false,
                title: '<img src="styles/legend/LocalCentre_9.png" /> Local Centre'
            });
var format_LowDensityResidential_10 = new ol.format.GeoJSON();
var features_LowDensityResidential_10 = format_LowDensityResidential_10.readFeatures(json_LowDensityResidential_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LowDensityResidential_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowDensityResidential_10.addFeatures(features_LowDensityResidential_10);
var lyr_LowDensityResidential_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowDensityResidential_10, 
                style: style_LowDensityResidential_10,
                popuplayertitle: 'Low Density Residential',
                interactive: false,
                title: '<img src="styles/legend/LowDensityResidential_10.png" /> Low Density Residential'
            });
var format_LowImpactIndustry_11 = new ol.format.GeoJSON();
var features_LowImpactIndustry_11 = format_LowImpactIndustry_11.readFeatures(json_LowImpactIndustry_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LowImpactIndustry_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowImpactIndustry_11.addFeatures(features_LowImpactIndustry_11);
var lyr_LowImpactIndustry_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowImpactIndustry_11, 
                style: style_LowImpactIndustry_11,
                popuplayertitle: 'Low Impact Industry',
                interactive: false,
                title: '<img src="styles/legend/LowImpactIndustry_11.png" /> Low Impact Industry'
            });
var format_MajorCentre_12 = new ol.format.GeoJSON();
var features_MajorCentre_12 = format_MajorCentre_12.readFeatures(json_MajorCentre_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MajorCentre_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorCentre_12.addFeatures(features_MajorCentre_12);
var lyr_MajorCentre_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorCentre_12, 
                style: style_MajorCentre_12,
                popuplayertitle: 'Major Centre',
                interactive: false,
                title: '<img src="styles/legend/MajorCentre_12.png" /> Major Centre'
            });
var format_MediumDensityResidential_13 = new ol.format.GeoJSON();
var features_MediumDensityResidential_13 = format_MediumDensityResidential_13.readFeatures(json_MediumDensityResidential_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MediumDensityResidential_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediumDensityResidential_13.addFeatures(features_MediumDensityResidential_13);
var lyr_MediumDensityResidential_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediumDensityResidential_13, 
                style: style_MediumDensityResidential_13,
                popuplayertitle: 'Medium Density Residential',
                interactive: false,
                title: '<img src="styles/legend/MediumDensityResidential_13.png" /> Medium Density Residential'
            });
var format_MediumImpactIndustry_14 = new ol.format.GeoJSON();
var features_MediumImpactIndustry_14 = format_MediumImpactIndustry_14.readFeatures(json_MediumImpactIndustry_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MediumImpactIndustry_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediumImpactIndustry_14.addFeatures(features_MediumImpactIndustry_14);
var lyr_MediumImpactIndustry_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediumImpactIndustry_14, 
                style: style_MediumImpactIndustry_14,
                popuplayertitle: 'Medium Impact Industry',
                interactive: false,
                title: '<img src="styles/legend/MediumImpactIndustry_14.png" /> Medium Impact Industry'
            });
var format_MixedUse_15 = new ol.format.GeoJSON();
var features_MixedUse_15 = format_MixedUse_15.readFeatures(json_MixedUse_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MixedUse_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MixedUse_15.addFeatures(features_MixedUse_15);
var lyr_MixedUse_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MixedUse_15, 
                style: style_MixedUse_15,
                popuplayertitle: 'Mixed Use',
                interactive: false,
                title: '<img src="styles/legend/MixedUse_15.png" /> Mixed Use'
            });
var format_NeighbourhoodCentre_16 = new ol.format.GeoJSON();
var features_NeighbourhoodCentre_16 = format_NeighbourhoodCentre_16.readFeatures(json_NeighbourhoodCentre_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_NeighbourhoodCentre_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeighbourhoodCentre_16.addFeatures(features_NeighbourhoodCentre_16);
var lyr_NeighbourhoodCentre_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeighbourhoodCentre_16, 
                style: style_NeighbourhoodCentre_16,
                popuplayertitle: 'Neighbourhood Centre',
                interactive: false,
                title: '<img src="styles/legend/NeighbourhoodCentre_16.png" /> Neighbourhood Centre'
            });
var format_OpenSpace_17 = new ol.format.GeoJSON();
var features_OpenSpace_17 = format_OpenSpace_17.readFeatures(json_OpenSpace_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_OpenSpace_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpace_17.addFeatures(features_OpenSpace_17);
var lyr_OpenSpace_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpace_17, 
                style: style_OpenSpace_17,
                popuplayertitle: 'Open Space',
                interactive: false,
                title: '<img src="styles/legend/OpenSpace_17.png" /> Open Space'
            });
var format_PrincipalCentre_18 = new ol.format.GeoJSON();
var features_PrincipalCentre_18 = format_PrincipalCentre_18.readFeatures(json_PrincipalCentre_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_PrincipalCentre_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrincipalCentre_18.addFeatures(features_PrincipalCentre_18);
var lyr_PrincipalCentre_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrincipalCentre_18, 
                style: style_PrincipalCentre_18,
                popuplayertitle: 'Principal Centre',
                interactive: false,
                title: '<img src="styles/legend/PrincipalCentre_18.png" /> Principal Centre'
            });
var format_RuralResidential_19 = new ol.format.GeoJSON();
var features_RuralResidential_19 = format_RuralResidential_19.readFeatures(json_RuralResidential_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_RuralResidential_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralResidential_19.addFeatures(features_RuralResidential_19);
var lyr_RuralResidential_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralResidential_19, 
                style: style_RuralResidential_19,
                popuplayertitle: 'Rural Residential',
                interactive: false,
                title: '<img src="styles/legend/RuralResidential_19.png" /> Rural Residential'
            });
var format_Rural_20 = new ol.format.GeoJSON();
var features_Rural_20 = format_Rural_20.readFeatures(json_Rural_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Rural_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_20.addFeatures(features_Rural_20);
var lyr_Rural_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_20, 
                style: style_Rural_20,
                popuplayertitle: 'Rural',
                interactive: false,
                title: '<img src="styles/legend/Rural_20.png" /> Rural'
            });
var format_SpecialPurpose_21 = new ol.format.GeoJSON();
var features_SpecialPurpose_21 = format_SpecialPurpose_21.readFeatures(json_SpecialPurpose_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_SpecialPurpose_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecialPurpose_21.addFeatures(features_SpecialPurpose_21);
var lyr_SpecialPurpose_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecialPurpose_21, 
                style: style_SpecialPurpose_21,
                popuplayertitle: 'Special Purpose',
                interactive: false,
                title: '<img src="styles/legend/SpecialPurpose_21.png" /> Special Purpose'
            });
var format_SpecialisedCentre_22 = new ol.format.GeoJSON();
var features_SpecialisedCentre_22 = format_SpecialisedCentre_22.readFeatures(json_SpecialisedCentre_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_SpecialisedCentre_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecialisedCentre_22.addFeatures(features_SpecialisedCentre_22);
var lyr_SpecialisedCentre_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpecialisedCentre_22, 
                style: style_SpecialisedCentre_22,
                popuplayertitle: 'Specialised Centre',
                interactive: false,
                title: '<img src="styles/legend/SpecialisedCentre_22.png" /> Specialised Centre'
            });
var format_SportandRecreation_23 = new ol.format.GeoJSON();
var features_SportandRecreation_23 = format_SportandRecreation_23.readFeatures(json_SportandRecreation_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_SportandRecreation_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SportandRecreation_23.addFeatures(features_SportandRecreation_23);
var lyr_SportandRecreation_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SportandRecreation_23, 
                style: style_SportandRecreation_23,
                popuplayertitle: 'Sport and Recreation',
                interactive: false,
                title: '<img src="styles/legend/SportandRecreation_23.png" /> Sport and Recreation'
            });
var format_PalumaDamCatchmentArea_24 = new ol.format.GeoJSON();
var features_PalumaDamCatchmentArea_24 = format_PalumaDamCatchmentArea_24.readFeatures(json_PalumaDamCatchmentArea_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_PalumaDamCatchmentArea_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalumaDamCatchmentArea_24.addFeatures(features_PalumaDamCatchmentArea_24);
var lyr_PalumaDamCatchmentArea_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalumaDamCatchmentArea_24, 
                style: style_PalumaDamCatchmentArea_24,
                popuplayertitle: 'Paluma Dam Catchment Area',
                interactive: false,
                title: '<img src="styles/legend/PalumaDamCatchmentArea_24.png" /> Paluma Dam Catchment Area'
            });
var format_RossRiverDamCatchmentArea_25 = new ol.format.GeoJSON();
var features_RossRiverDamCatchmentArea_25 = format_RossRiverDamCatchmentArea_25.readFeatures(json_RossRiverDamCatchmentArea_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_RossRiverDamCatchmentArea_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RossRiverDamCatchmentArea_25.addFeatures(features_RossRiverDamCatchmentArea_25);
var lyr_RossRiverDamCatchmentArea_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RossRiverDamCatchmentArea_25, 
                style: style_RossRiverDamCatchmentArea_25,
                popuplayertitle: 'Ross River Dam Catchment Area',
                interactive: false,
                title: '<img src="styles/legend/RossRiverDamCatchmentArea_25.png" /> Ross River Dam Catchment Area'
            });
var format_WaterStorageArea_26 = new ol.format.GeoJSON();
var features_WaterStorageArea_26 = format_WaterStorageArea_26.readFeatures(json_WaterStorageArea_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_WaterStorageArea_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterStorageArea_26.addFeatures(features_WaterStorageArea_26);
var lyr_WaterStorageArea_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterStorageArea_26, 
                style: style_WaterStorageArea_26,
                popuplayertitle: 'Water Storage Area',
                interactive: false,
                title: '<img src="styles/legend/WaterStorageArea_26.png" /> Water Storage Area'
            });
var format_ErosionProneArea_27 = new ol.format.GeoJSON();
var features_ErosionProneArea_27 = format_ErosionProneArea_27.readFeatures(json_ErosionProneArea_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_ErosionProneArea_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErosionProneArea_27.addFeatures(features_ErosionProneArea_27);
var lyr_ErosionProneArea_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ErosionProneArea_27, 
                style: style_ErosionProneArea_27,
                popuplayertitle: 'Erosion Prone Area',
                interactive: false,
                title: '<img src="styles/legend/ErosionProneArea_27.png" /> Erosion Prone Area'
            });
var format_FloodHazardHigh_28 = new ol.format.GeoJSON();
var features_FloodHazardHigh_28 = format_FloodHazardHigh_28.readFeatures(json_FloodHazardHigh_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_FloodHazardHigh_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodHazardHigh_28.addFeatures(features_FloodHazardHigh_28);
var lyr_FloodHazardHigh_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodHazardHigh_28, 
                style: style_FloodHazardHigh_28,
                popuplayertitle: 'Flood Hazard (High)',
                interactive: false,
                title: '<img src="styles/legend/FloodHazardHigh_28.png" /> Flood Hazard (High)'
            });
var format_FloodHazardMedium_29 = new ol.format.GeoJSON();
var features_FloodHazardMedium_29 = format_FloodHazardMedium_29.readFeatures(json_FloodHazardMedium_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_FloodHazardMedium_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodHazardMedium_29.addFeatures(features_FloodHazardMedium_29);
var lyr_FloodHazardMedium_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodHazardMedium_29, 
                style: style_FloodHazardMedium_29,
                popuplayertitle: 'Flood Hazard (Medium)',
                interactive: false,
                title: '<img src="styles/legend/FloodHazardMedium_29.png" /> Flood Hazard (Medium)'
            });
var format_HeritageAdjacentLandParcels_30 = new ol.format.GeoJSON();
var features_HeritageAdjacentLandParcels_30 = format_HeritageAdjacentLandParcels_30.readFeatures(json_HeritageAdjacentLandParcels_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_HeritageAdjacentLandParcels_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageAdjacentLandParcels_30.addFeatures(features_HeritageAdjacentLandParcels_30);
var lyr_HeritageAdjacentLandParcels_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageAdjacentLandParcels_30, 
                style: style_HeritageAdjacentLandParcels_30,
                popuplayertitle: 'Heritage Adjacent Land Parcels',
                interactive: false,
                title: '<img src="styles/legend/HeritageAdjacentLandParcels_30.png" /> Heritage Adjacent Land Parcels'
            });
var format_Heritageproperties_31 = new ol.format.GeoJSON();
var features_Heritageproperties_31 = format_Heritageproperties_31.readFeatures(json_Heritageproperties_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Heritageproperties_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heritageproperties_31.addFeatures(features_Heritageproperties_31);
var lyr_Heritageproperties_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Heritageproperties_31, 
                style: style_Heritageproperties_31,
                popuplayertitle: 'Heritage properties',
                interactive: false,
    title: 'Heritage properties<br />\
    <img src="styles/legend/Heritageproperties_31_0.png" /> Local heritage<br />\
    <img src="styles/legend/Heritageproperties_31_1.png" /> State heritage<br />'
        });
var format_WaterwaysBuffered_32 = new ol.format.GeoJSON();
var features_WaterwaysBuffered_32 = format_WaterwaysBuffered_32.readFeatures(json_WaterwaysBuffered_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_WaterwaysBuffered_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterwaysBuffered_32.addFeatures(features_WaterwaysBuffered_32);
var lyr_WaterwaysBuffered_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterwaysBuffered_32, 
                style: style_WaterwaysBuffered_32,
                popuplayertitle: 'Waterways Buffered',
                interactive: false,
                title: '<img src="styles/legend/WaterwaysBuffered_32.png" /> Waterways Buffered'
            });
var format_Easement_33 = new ol.format.GeoJSON();
var features_Easement_33 = format_Easement_33.readFeatures(json_Easement_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Easement_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Easement_33.addFeatures(features_Easement_33);
var lyr_Easement_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Easement_33, 
                style: style_Easement_33,
                popuplayertitle: 'Easement',
                interactive: false,
                title: '<img src="styles/legend/Easement_33.png" /> Easement'
            });
var format_QuarryArea_34 = new ol.format.GeoJSON();
var features_QuarryArea_34 = format_QuarryArea_34.readFeatures(json_QuarryArea_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_QuarryArea_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuarryArea_34.addFeatures(features_QuarryArea_34);
var lyr_QuarryArea_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuarryArea_34, 
                style: style_QuarryArea_34,
                popuplayertitle: 'Quarry Area',
                interactive: false,
                title: '<img src="styles/legend/QuarryArea_34.png" /> Quarry Area'
            });
var format_IndegenousLandUseAggreementsRegistered_35 = new ol.format.GeoJSON();
var features_IndegenousLandUseAggreementsRegistered_35 = format_IndegenousLandUseAggreementsRegistered_35.readFeatures(json_IndegenousLandUseAggreementsRegistered_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_IndegenousLandUseAggreementsRegistered_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndegenousLandUseAggreementsRegistered_35.addFeatures(features_IndegenousLandUseAggreementsRegistered_35);
var lyr_IndegenousLandUseAggreementsRegistered_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndegenousLandUseAggreementsRegistered_35, 
                style: style_IndegenousLandUseAggreementsRegistered_35,
                popuplayertitle: 'Indegenous Land Use Aggreements (Registered)',
                interactive: false,
                title: '<img src="styles/legend/IndegenousLandUseAggreementsRegistered_35.png" /> Indegenous Land Use Aggreements (Registered)'
            });
var format_LandslideHazardPotentialdebrisflow_36 = new ol.format.GeoJSON();
var features_LandslideHazardPotentialdebrisflow_36 = format_LandslideHazardPotentialdebrisflow_36.readFeatures(json_LandslideHazardPotentialdebrisflow_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LandslideHazardPotentialdebrisflow_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandslideHazardPotentialdebrisflow_36.addFeatures(features_LandslideHazardPotentialdebrisflow_36);
var lyr_LandslideHazardPotentialdebrisflow_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandslideHazardPotentialdebrisflow_36, 
                style: style_LandslideHazardPotentialdebrisflow_36,
                popuplayertitle: 'Landslide Hazard Potential debris flow',
                interactive: false,
                title: '<img src="styles/legend/LandslideHazardPotentialdebrisflow_36.png" /> Landslide Hazard Potential debris flow'
            });
var format_LandslideHazardSlopeGreaterThan23degrees_37 = new ol.format.GeoJSON();
var features_LandslideHazardSlopeGreaterThan23degrees_37 = format_LandslideHazardSlopeGreaterThan23degrees_37.readFeatures(json_LandslideHazardSlopeGreaterThan23degrees_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LandslideHazardSlopeGreaterThan23degrees_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandslideHazardSlopeGreaterThan23degrees_37.addFeatures(features_LandslideHazardSlopeGreaterThan23degrees_37);
var lyr_LandslideHazardSlopeGreaterThan23degrees_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandslideHazardSlopeGreaterThan23degrees_37, 
                style: style_LandslideHazardSlopeGreaterThan23degrees_37,
                popuplayertitle: 'Landslide Hazard Slope Greater Than 23 degrees',
                interactive: false,
                title: '<img src="styles/legend/LandslideHazardSlopeGreaterThan23degrees_37.png" /> Landslide Hazard Slope Greater Than 23 degrees'
            });
var format_FloodHazardLow_38 = new ol.format.GeoJSON();
var features_FloodHazardLow_38 = format_FloodHazardLow_38.readFeatures(json_FloodHazardLow_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_FloodHazardLow_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodHazardLow_38.addFeatures(features_FloodHazardLow_38);
var lyr_FloodHazardLow_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodHazardLow_38, 
                style: style_FloodHazardLow_38,
                popuplayertitle: 'Flood Hazard (Low)',
                interactive: false,
                title: '<img src="styles/legend/FloodHazardLow_38.png" /> Flood Hazard (Low)'
            });
var format_StormtideInundation_39 = new ol.format.GeoJSON();
var features_StormtideInundation_39 = format_StormtideInundation_39.readFeatures(json_StormtideInundation_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_StormtideInundation_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StormtideInundation_39.addFeatures(features_StormtideInundation_39);
var lyr_StormtideInundation_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StormtideInundation_39, 
                style: style_StormtideInundation_39,
                popuplayertitle: 'Stormtide Inundation',
                interactive: false,
    title: 'Stormtide Inundation<br />\
    <img src="styles/legend/StormtideInundation_39_0.png" /> High hazard<br />\
    <img src="styles/legend/StormtideInundation_39_1.png" /> Medium hazard<br />'
        });
var format_NaturalAssetsEnvironmentalImportanceHigh_40 = new ol.format.GeoJSON();
var features_NaturalAssetsEnvironmentalImportanceHigh_40 = format_NaturalAssetsEnvironmentalImportanceHigh_40.readFeatures(json_NaturalAssetsEnvironmentalImportanceHigh_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_NaturalAssetsEnvironmentalImportanceHigh_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalAssetsEnvironmentalImportanceHigh_40.addFeatures(features_NaturalAssetsEnvironmentalImportanceHigh_40);
var lyr_NaturalAssetsEnvironmentalImportanceHigh_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalAssetsEnvironmentalImportanceHigh_40, 
                style: style_NaturalAssetsEnvironmentalImportanceHigh_40,
                popuplayertitle: 'Natural Assets Environmental Importance (High)',
                interactive: false,
                title: '<img src="styles/legend/NaturalAssetsEnvironmentalImportanceHigh_40.png" /> Natural Assets Environmental Importance (High)'
            });
var format_NaturalAssetsEnvironmentalImportanceMedium_41 = new ol.format.GeoJSON();
var features_NaturalAssetsEnvironmentalImportanceMedium_41 = format_NaturalAssetsEnvironmentalImportanceMedium_41.readFeatures(json_NaturalAssetsEnvironmentalImportanceMedium_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_NaturalAssetsEnvironmentalImportanceMedium_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalAssetsEnvironmentalImportanceMedium_41.addFeatures(features_NaturalAssetsEnvironmentalImportanceMedium_41);
var lyr_NaturalAssetsEnvironmentalImportanceMedium_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalAssetsEnvironmentalImportanceMedium_41, 
                style: style_NaturalAssetsEnvironmentalImportanceMedium_41,
                popuplayertitle: 'Natural Assets Environmental Importance (Medium)',
                interactive: false,
                title: '<img src="styles/legend/NaturalAssetsEnvironmentalImportanceMedium_41.png" /> Natural Assets Environmental Importance (Medium)'
            });
var format_NaturalAssetsEnvironmentalImportanceLow_42 = new ol.format.GeoJSON();
var features_NaturalAssetsEnvironmentalImportanceLow_42 = format_NaturalAssetsEnvironmentalImportanceLow_42.readFeatures(json_NaturalAssetsEnvironmentalImportanceLow_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_NaturalAssetsEnvironmentalImportanceLow_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalAssetsEnvironmentalImportanceLow_42.addFeatures(features_NaturalAssetsEnvironmentalImportanceLow_42);
var lyr_NaturalAssetsEnvironmentalImportanceLow_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalAssetsEnvironmentalImportanceLow_42, 
                style: style_NaturalAssetsEnvironmentalImportanceLow_42,
                popuplayertitle: 'Natural Assets Environmental Importance (Low)',
                interactive: false,
                title: '<img src="styles/legend/NaturalAssetsEnvironmentalImportanceLow_42.png" /> Natural Assets Environmental Importance (Low)'
            });
var format_NaturalAssetsEnvironmentalImportanceVeryHigh_43 = new ol.format.GeoJSON();
var features_NaturalAssetsEnvironmentalImportanceVeryHigh_43 = format_NaturalAssetsEnvironmentalImportanceVeryHigh_43.readFeatures(json_NaturalAssetsEnvironmentalImportanceVeryHigh_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_NaturalAssetsEnvironmentalImportanceVeryHigh_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalAssetsEnvironmentalImportanceVeryHigh_43.addFeatures(features_NaturalAssetsEnvironmentalImportanceVeryHigh_43);
var lyr_NaturalAssetsEnvironmentalImportanceVeryHigh_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalAssetsEnvironmentalImportanceVeryHigh_43, 
                style: style_NaturalAssetsEnvironmentalImportanceVeryHigh_43,
                popuplayertitle: 'Natural Assets Environmental Importance (Very High)',
                interactive: false,
                title: '<img src="styles/legend/NaturalAssetsEnvironmentalImportanceVeryHigh_43.png" /> Natural Assets Environmental Importance (Very High)'
            });
var format_BushfirehazardareaMedium_44 = new ol.format.GeoJSON();
var features_BushfirehazardareaMedium_44 = format_BushfirehazardareaMedium_44.readFeatures(json_BushfirehazardareaMedium_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_BushfirehazardareaMedium_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BushfirehazardareaMedium_44.addFeatures(features_BushfirehazardareaMedium_44);
var lyr_BushfirehazardareaMedium_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BushfirehazardareaMedium_44, 
                style: style_BushfirehazardareaMedium_44,
                popuplayertitle: 'Bushfire hazard area (Medium)',
                interactive: false,
                title: '<img src="styles/legend/BushfirehazardareaMedium_44.png" /> Bushfire hazard area (Medium)'
            });
var format_BushfirehazardareaHigh_45 = new ol.format.GeoJSON();
var features_BushfirehazardareaHigh_45 = format_BushfirehazardareaHigh_45.readFeatures(json_BushfirehazardareaHigh_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_BushfirehazardareaHigh_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BushfirehazardareaHigh_45.addFeatures(features_BushfirehazardareaHigh_45);
var lyr_BushfirehazardareaHigh_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BushfirehazardareaHigh_45, 
                style: style_BushfirehazardareaHigh_45,
                popuplayertitle: 'Bushfire hazard area (High)',
                interactive: false,
                title: '<img src="styles/legend/BushfirehazardareaHigh_45.png" /> Bushfire hazard area (High)'
            });
var format_FloodHazardMediumHazardfurtherinvestigationarea_46 = new ol.format.GeoJSON();
var features_FloodHazardMediumHazardfurtherinvestigationarea_46 = format_FloodHazardMediumHazardfurtherinvestigationarea_46.readFeatures(json_FloodHazardMediumHazardfurtherinvestigationarea_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_FloodHazardMediumHazardfurtherinvestigationarea_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodHazardMediumHazardfurtherinvestigationarea_46.addFeatures(features_FloodHazardMediumHazardfurtherinvestigationarea_46);
var lyr_FloodHazardMediumHazardfurtherinvestigationarea_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodHazardMediumHazardfurtherinvestigationarea_46, 
                style: style_FloodHazardMediumHazardfurtherinvestigationarea_46,
                popuplayertitle: 'Flood Hazard Medium Hazard - further investigation area',
                interactive: false,
                title: '<img src="styles/legend/FloodHazardMediumHazardfurtherinvestigationarea_46.png" /> Flood Hazard Medium Hazard - further investigation area'
            });
var format_ShapingTownsvilleGA_47 = new ol.format.GeoJSON();
var features_ShapingTownsvilleGA_47 = format_ShapingTownsvilleGA_47.readFeatures(json_ShapingTownsvilleGA_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_ShapingTownsvilleGA_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShapingTownsvilleGA_47.addFeatures(features_ShapingTownsvilleGA_47);
var lyr_ShapingTownsvilleGA_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShapingTownsvilleGA_47, 
                style: style_ShapingTownsvilleGA_47,
                popuplayertitle: 'Shaping Townsville GA ',
                interactive: false,
                title: '<img src="styles/legend/ShapingTownsvilleGA_47.png" /> Shaping Townsville GA '
            });
var format_ElliotSpringsRockySpringsLanduseConceptPlanGA_48 = new ol.format.GeoJSON();
var features_ElliotSpringsRockySpringsLanduseConceptPlanGA_48 = format_ElliotSpringsRockySpringsLanduseConceptPlanGA_48.readFeatures(json_ElliotSpringsRockySpringsLanduseConceptPlanGA_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_ElliotSpringsRockySpringsLanduseConceptPlanGA_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElliotSpringsRockySpringsLanduseConceptPlanGA_48.addFeatures(features_ElliotSpringsRockySpringsLanduseConceptPlanGA_48);
var lyr_ElliotSpringsRockySpringsLanduseConceptPlanGA_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElliotSpringsRockySpringsLanduseConceptPlanGA_48, 
                style: style_ElliotSpringsRockySpringsLanduseConceptPlanGA_48,
                popuplayertitle: 'Elliot Springs(Rocky Springs) Land use Concept Plan GA',
                interactive: false,
                title: '<img src="styles/legend/ElliotSpringsRockySpringsLanduseConceptPlanGA_48.png" /> Elliot Springs(Rocky Springs) Land use Concept Plan GA'
            });
var format_ElliotSpringsRockySpringsGA_49 = new ol.format.GeoJSON();
var features_ElliotSpringsRockySpringsGA_49 = format_ElliotSpringsRockySpringsGA_49.readFeatures(json_ElliotSpringsRockySpringsGA_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_ElliotSpringsRockySpringsGA_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElliotSpringsRockySpringsGA_49.addFeatures(features_ElliotSpringsRockySpringsGA_49);
var lyr_ElliotSpringsRockySpringsGA_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElliotSpringsRockySpringsGA_49, 
                style: style_ElliotSpringsRockySpringsGA_49,
                popuplayertitle: 'Elliot Springs (Rocky Springs) GA ',
                interactive: false,
                title: '<img src="styles/legend/ElliotSpringsRockySpringsGA_49.png" /> Elliot Springs (Rocky Springs) GA '
            });
var format_OonabaUDAStructurePlanGA_50 = new ol.format.GeoJSON();
var features_OonabaUDAStructurePlanGA_50 = format_OonabaUDAStructurePlanGA_50.readFeatures(json_OonabaUDAStructurePlanGA_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_OonabaUDAStructurePlanGA_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OonabaUDAStructurePlanGA_50.addFeatures(features_OonabaUDAStructurePlanGA_50);
var lyr_OonabaUDAStructurePlanGA_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OonabaUDAStructurePlanGA_50, 
                style: style_OonabaUDAStructurePlanGA_50,
                popuplayertitle: 'Oonaba UDA Structure Plan GA',
                interactive: false,
                title: '<img src="styles/legend/OonabaUDAStructurePlanGA_50.png" /> Oonaba UDA Structure Plan GA'
            });
var format_NorthShorePlanofDevelopmentGA_51 = new ol.format.GeoJSON();
var features_NorthShorePlanofDevelopmentGA_51 = format_NorthShorePlanofDevelopmentGA_51.readFeatures(json_NorthShorePlanofDevelopmentGA_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_NorthShorePlanofDevelopmentGA_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthShorePlanofDevelopmentGA_51.addFeatures(features_NorthShorePlanofDevelopmentGA_51);
var lyr_NorthShorePlanofDevelopmentGA_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthShorePlanofDevelopmentGA_51, 
                style: style_NorthShorePlanofDevelopmentGA_51,
                popuplayertitle: 'North Shore Plan of Development GA',
                interactive: false,
                title: '<img src="styles/legend/NorthShorePlanofDevelopmentGA_51.png" /> North Shore Plan of Development GA'
            });
var lyr_ShapingTownsville_52 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Shaping Townsville',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ShapingTownsville_52.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16325361.734125, -2202786.684570, 16353340.945193, -2176688.400025]
                            })
                        });
var lyr_NorthShorePlanofDevelopment_53 = new ol.layer.Image({
                            opacity: 1,
                            title: 'North Shore Plan of Development',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/NorthShorePlanofDevelopment_53.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16328263.440465, -2185817.998601, 16332222.488878, -2179869.245316]
                            })
                        });
var lyr_OonabaUDAStructurePlan_54 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Oonaba UDA Structure Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/OonabaUDAStructurePlan_54.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16342053.231332, -2189538.681856, 16343521.226281, -2188458.453002]
                            })
                        });
var lyr_ElliotSpringsRockySprings_55 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Elliot Springs (Rocky Springs)',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ElliotSpringsRockySprings_55.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16351393.920828, -2200031.334094, 16353103.123198, -2197266.832450]
                            })
                        });
var lyr_ElliotSpringsRockySpringsLanduseConceptPlan_56 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Elliot Springs(Rocky Springs) Land use Concept Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ElliotSpringsRockySpringsLanduseConceptPlan_56.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16348707.981513, -2202663.744516, 16353117.548254, -2196838.237820]
                            })
                        });
var format_Suburb_57 = new ol.format.GeoJSON();
var features_Suburb_57 = format_Suburb_57.readFeatures(json_Suburb_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Suburb_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_57.addFeatures(features_Suburb_57);
var lyr_Suburb_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_57, 
                style: style_Suburb_57,
                popuplayertitle: 'Suburb',
                interactive: false,
                title: '<img src="styles/legend/Suburb_57.png" /> Suburb'
            });
var format_LGA_58 = new ol.format.GeoJSON();
var features_LGA_58 = format_LGA_58.readFeatures(json_LGA_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_LGA_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_58.addFeatures(features_LGA_58);
var lyr_LGA_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_58, 
                style: style_LGA_58,
                popuplayertitle: 'LGA',
                interactive: false,
                title: '<img src="styles/legend/LGA_58.png" /> LGA'
            });
var format_Estate_59 = new ol.format.GeoJSON();
var features_Estate_59 = format_Estate_59.readFeatures(json_Estate_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_Estate_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estate_59.addFeatures(features_Estate_59);
var lyr_Estate_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estate_59, 
                style: style_Estate_59,
                popuplayertitle: 'Estate',
                interactive: true,
                title: '<img src="styles/legend/Estate_59.png" /> Estate'
            });
var format_MajorLandOwner_60 = new ol.format.GeoJSON();
var features_MajorLandOwner_60 = format_MajorLandOwner_60.readFeatures(json_MajorLandOwner_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_MajorLandOwner_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorLandOwner_60.addFeatures(features_MajorLandOwner_60);
var lyr_MajorLandOwner_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorLandOwner_60, 
                style: style_MajorLandOwner_60,
                popuplayertitle: 'Major Land Owner',
                interactive: true,
                title: '<img src="styles/legend/MajorLandOwner_60.png" /> Major Land Owner'
            });
var format_ZonedParcel_61 = new ol.format.GeoJSON();
var features_ZonedParcel_61 = format_ZonedParcel_61.readFeatures(json_ZonedParcel_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_ZonedParcel_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedParcel_61.addFeatures(features_ZonedParcel_61);
var lyr_ZonedParcel_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedParcel_61, 
                style: style_ZonedParcel_61,
                popuplayertitle: 'Zoned Parcel',
                interactive: true,
                title: '<img src="styles/legend/ZonedParcel_61.png" /> Zoned Parcel'
            });
var format_UnzonedParcel_62 = new ol.format.GeoJSON();
var features_UnzonedParcel_62 = format_UnzonedParcel_62.readFeatures(json_UnzonedParcel_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_UnzonedParcel_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnzonedParcel_62.addFeatures(features_UnzonedParcel_62);
var lyr_UnzonedParcel_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnzonedParcel_62, 
                style: style_UnzonedParcel_62,
                popuplayertitle: 'Unzoned Parcel ',
                interactive: true,
                title: '<img src="styles/legend/UnzonedParcel_62.png" /> Unzoned Parcel '
            });
var format_RezoneParcel_63 = new ol.format.GeoJSON();
var features_RezoneParcel_63 = format_RezoneParcel_63.readFeatures(json_RezoneParcel_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_RezoneParcel_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RezoneParcel_63.addFeatures(features_RezoneParcel_63);
var lyr_RezoneParcel_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RezoneParcel_63, 
                style: style_RezoneParcel_63,
                popuplayertitle: 'Rezone Parcel',
                interactive: false,
                title: '<img src="styles/legend/RezoneParcel_63.png" /> Rezone Parcel'
            });
var format_EstateLabel_64 = new ol.format.GeoJSON();
var features_EstateLabel_64 = format_EstateLabel_64.readFeatures(json_EstateLabel_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_EstateLabel_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstateLabel_64.addFeatures(features_EstateLabel_64);
var lyr_EstateLabel_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstateLabel_64, 
                style: style_EstateLabel_64,
                popuplayertitle: 'Estate Label',
                interactive: false,
                title: '<img src="styles/legend/EstateLabel_64.png" /> Estate Label'
            });
var format_ParcelAttributesLabel_65 = new ol.format.GeoJSON();
var features_ParcelAttributesLabel_65 = format_ParcelAttributesLabel_65.readFeatures(json_ParcelAttributesLabel_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7855'});
var jsonSource_ParcelAttributesLabel_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributesLabel_65.addFeatures(features_ParcelAttributesLabel_65);
var lyr_ParcelAttributesLabel_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributesLabel_65, 
                style: style_ParcelAttributesLabel_65,
                popuplayertitle: 'Parcel Attributes Label',
                interactive: false,
                title: '<img src="styles/legend/ParcelAttributesLabel_65.png" /> Parcel Attributes Label'
            });
var group_LabelSwitch = new ol.layer.Group({
                                layers: [lyr_EstateLabel_64,lyr_ParcelAttributesLabel_65,],
                                fold: "open",
                                title: 'Label Switch'});
var group_ParcelAttributes = new ol.layer.Group({
                                layers: [lyr_ZonedParcel_61,lyr_UnzonedParcel_62,lyr_RezoneParcel_63,],
                                fold: "open",
                                title: 'Parcel Attributes'});
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_57,lyr_LGA_58,lyr_Estate_59,lyr_MajorLandOwner_60,],
                                fold: "open",
                                title: 'Administrative'});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_ShapingTownsville_52,lyr_NorthShorePlanofDevelopment_53,lyr_OonabaUDAStructurePlan_54,lyr_ElliotSpringsRockySprings_55,lyr_ElliotSpringsRockySpringsLanduseConceptPlan_56,],
                                fold: "open",
                                title: 'PSP'});
var group_PSPGrowthArea = new ol.layer.Group({
                                layers: [lyr_ShapingTownsvilleGA_47,lyr_ElliotSpringsRockySpringsLanduseConceptPlanGA_48,lyr_ElliotSpringsRockySpringsGA_49,lyr_OonabaUDAStructurePlanGA_50,lyr_NorthShorePlanofDevelopmentGA_51,],
                                fold: "open",
                                title: 'PSP / Growth Area'});
var group_NotetoDueDiligence = new ol.layer.Group({
                                layers: [lyr_LandslideHazardPotentialdebrisflow_36,lyr_LandslideHazardSlopeGreaterThan23degrees_37,lyr_FloodHazardLow_38,lyr_StormtideInundation_39,lyr_NaturalAssetsEnvironmentalImportanceHigh_40,lyr_NaturalAssetsEnvironmentalImportanceMedium_41,lyr_NaturalAssetsEnvironmentalImportanceLow_42,lyr_NaturalAssetsEnvironmentalImportanceVeryHigh_43,lyr_BushfirehazardareaMedium_44,lyr_BushfirehazardareaHigh_45,lyr_FloodHazardMediumHazardfurtherinvestigationarea_46,],
                                fold: "open",
                                title: 'Note to Due Diligence'});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_WaterStorageArea_26,lyr_ErosionProneArea_27,lyr_FloodHazardHigh_28,lyr_FloodHazardMedium_29,lyr_HeritageAdjacentLandParcels_30,lyr_Heritageproperties_31,lyr_WaterwaysBuffered_32,lyr_Easement_33,lyr_QuarryArea_34,lyr_IndegenousLandUseAggreementsRegistered_35,],
                                fold: "open",
                                title: 'NDH Deducted Overlays'});
var group_OtherLayers = new ol.layer.Group({
                                layers: [lyr_PalumaDamCatchmentArea_24,lyr_RossRiverDamCatchmentArea_25,],
                                fold: "open",
                                title: 'Other Layers'});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_CharacterResidential_2,lyr_CommunityFacilities_3,lyr_Conservation_4,lyr_DistrictCentre_5,lyr_EmergingCommunity_6,lyr_HighDensityResidential_7,lyr_HighImpactIndustry_8,lyr_LocalCentre_9,lyr_LowDensityResidential_10,lyr_LowImpactIndustry_11,lyr_MajorCentre_12,lyr_MediumDensityResidential_13,lyr_MediumImpactIndustry_14,lyr_MixedUse_15,lyr_NeighbourhoodCentre_16,lyr_OpenSpace_17,lyr_PrincipalCentre_18,lyr_RuralResidential_19,lyr_Rural_20,lyr_SpecialPurpose_21,lyr_SpecialisedCentre_22,lyr_SportandRecreation_23,],
                                fold: "open",
                                title: 'Zoning'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_CharacterResidential_2.setVisible(false);lyr_CommunityFacilities_3.setVisible(false);lyr_Conservation_4.setVisible(false);lyr_DistrictCentre_5.setVisible(false);lyr_EmergingCommunity_6.setVisible(false);lyr_HighDensityResidential_7.setVisible(false);lyr_HighImpactIndustry_8.setVisible(false);lyr_LocalCentre_9.setVisible(false);lyr_LowDensityResidential_10.setVisible(false);lyr_LowImpactIndustry_11.setVisible(false);lyr_MajorCentre_12.setVisible(false);lyr_MediumDensityResidential_13.setVisible(false);lyr_MediumImpactIndustry_14.setVisible(false);lyr_MixedUse_15.setVisible(false);lyr_NeighbourhoodCentre_16.setVisible(false);lyr_OpenSpace_17.setVisible(false);lyr_PrincipalCentre_18.setVisible(false);lyr_RuralResidential_19.setVisible(false);lyr_Rural_20.setVisible(false);lyr_SpecialPurpose_21.setVisible(false);lyr_SpecialisedCentre_22.setVisible(false);lyr_SportandRecreation_23.setVisible(false);lyr_PalumaDamCatchmentArea_24.setVisible(false);lyr_RossRiverDamCatchmentArea_25.setVisible(false);lyr_WaterStorageArea_26.setVisible(false);lyr_ErosionProneArea_27.setVisible(false);lyr_FloodHazardHigh_28.setVisible(false);lyr_FloodHazardMedium_29.setVisible(false);lyr_HeritageAdjacentLandParcels_30.setVisible(false);lyr_Heritageproperties_31.setVisible(false);lyr_WaterwaysBuffered_32.setVisible(false);lyr_Easement_33.setVisible(false);lyr_QuarryArea_34.setVisible(false);lyr_IndegenousLandUseAggreementsRegistered_35.setVisible(false);lyr_LandslideHazardPotentialdebrisflow_36.setVisible(false);lyr_LandslideHazardSlopeGreaterThan23degrees_37.setVisible(false);lyr_FloodHazardLow_38.setVisible(false);lyr_StormtideInundation_39.setVisible(false);lyr_NaturalAssetsEnvironmentalImportanceHigh_40.setVisible(false);lyr_NaturalAssetsEnvironmentalImportanceMedium_41.setVisible(false);lyr_NaturalAssetsEnvironmentalImportanceLow_42.setVisible(false);lyr_NaturalAssetsEnvironmentalImportanceVeryHigh_43.setVisible(false);lyr_BushfirehazardareaMedium_44.setVisible(false);lyr_BushfirehazardareaHigh_45.setVisible(false);lyr_FloodHazardMediumHazardfurtherinvestigationarea_46.setVisible(false);lyr_ShapingTownsvilleGA_47.setVisible(false);lyr_ElliotSpringsRockySpringsLanduseConceptPlanGA_48.setVisible(true);lyr_ElliotSpringsRockySpringsGA_49.setVisible(true);lyr_OonabaUDAStructurePlanGA_50.setVisible(true);lyr_NorthShorePlanofDevelopmentGA_51.setVisible(true);lyr_ShapingTownsville_52.setVisible(false);lyr_NorthShorePlanofDevelopment_53.setVisible(true);lyr_OonabaUDAStructurePlan_54.setVisible(true);lyr_ElliotSpringsRockySprings_55.setVisible(true);lyr_ElliotSpringsRockySpringsLanduseConceptPlan_56.setVisible(true);lyr_Suburb_57.setVisible(true);lyr_LGA_58.setVisible(true);lyr_Estate_59.setVisible(false);lyr_MajorLandOwner_60.setVisible(false);lyr_ZonedParcel_61.setVisible(true);lyr_UnzonedParcel_62.setVisible(true);lyr_RezoneParcel_63.setVisible(true);lyr_EstateLabel_64.setVisible(false);lyr_ParcelAttributesLabel_65.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_OtherLayers,group_NDHDeductedOverlays,group_NotetoDueDiligence,group_PSPGrowthArea,group_PSP,group_Administrative,group_ParcelAttributes,group_LabelSwitch];
lyr_CharacterResidential_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_CommunityFacilities_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Conservation_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_DistrictCentre_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_EmergingCommunity_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_HighDensityResidential_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_HighImpactIndustry_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_LocalCentre_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_LowDensityResidential_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_LowImpactIndustry_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_MajorCentre_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_MediumDensityResidential_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_MediumImpactIndustry_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_MixedUse_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_NeighbourhoodCentre_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_OpenSpace_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_PrincipalCentre_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_RuralResidential_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Rural_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_SpecialPurpose_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_SpecialisedCentre_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_SportandRecreation_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'OLD_ZONE': 'OLD_ZONE', 'Checked': 'Checked', 'Comment': 'Comment', 'AmendDate': 'AmendDate', 'AmendBy': 'AmendBy', 'AmendFrom': 'AmendFrom', 'AmendComment': 'AmendComment', 'ParcelPart': 'ParcelPart', 'LGA_CODE': 'LGA_CODE', 'LP': 'LP', 'LP_PREC': 'LP_PREC', 'ZONE_PREC': 'ZONE_PREC', 'LVL1_ZONE': 'LVL1_ZONE', 'LVL2_ZONE': 'LVL2_ZONE', 'LOT_PLAN': 'LOT_PLAN', 'GAZ_DATE': 'GAZ_DATE', 'CAD_DATE': 'CAD_DATE', 'PAR_SPLIT': 'PAR_SPLIT', 'TCC_CODE': 'TCC_CODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_PalumaDamCatchmentArea_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DAM_NAME': 'DAM_NAME', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_RossRiverDamCatchmentArea_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CATCHMENT': 'CATCHMENT', 'SUB_CATCHM': 'SUB_CATCHM', 'AREA': 'sde_planning.TCC.CP14_G_Catchment_Ross_River_Dam_2013.AREA', 'SLOPE': 'SLOPE', 'FRAC_IMP': 'FRAC_IMP', 'PERN_PER': 'PERN_PER', 'PERN_IMP': 'PERN_IMP', 'MODEL': 'MODEL', 'MIN_LOSS_P': 'MIN_LOSS_P', 'MAJ_LOSS_P': 'MAJ_LOSS_P', 'MIN_LOSS_I': 'MIN_LOSS_I', 'MAJ_LOSS_I': 'MAJ_LOSS_I', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'PLUVDEC10': 'PLUVDEC10', 'Rn_DEC2010': 'Rn_DEC2010', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_WaterStorageArea_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'CLASS': 'CLASS', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_ErosionProneArea_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_FloodHazardHigh_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Flood_Study': 'Flood_Study', 'Classification': 'Classification', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_FloodHazardMedium_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Flood_Study': 'Flood_Study', 'Classification': 'Classification', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_HeritageAdjacentLandParcels_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'LANDNO': 'LAND NUMBER', 'ACTIVESTATUS': 'STATUS', 'PARCELTYPE': 'PARCEL TYPE', 'LOTNO': 'LOT NUMBER', 'PLANTYPE': 'PLAN TYPE', 'PLANNO': 'PLAN NUMBER', 'PARTLOT': 'PART LOT', 'COUNTY': 'COUNTY', 'PARISH': 'PARISH', 'AREA_LEGAL': 'LEGAL AREA', 'AREAUNITS': 'AREA UNITS', 'LAND_COM_1': 'LANDCOM1', 'PRECINCTCODE': 'PRECINCT CODE', 'PRECINCT': 'PRECINCT', 'LOTPLAN': 'LOT PLAN', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Heritageproperties_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Source': 'DESCRIPTION', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_WaterwaysBuffered_32.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Easement_33.set('fieldAliases', {'fid': 'fid', 'LOT': 'LOT', 'PLAN': 'PLAN', 'ACC_CODE': 'ACC_CODE', 'O_SHAPE_Le': 'O_SHAPE_Le', 'O_SHAPE_Ar': 'O_SHAPE_Ar', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', });
lyr_QuarryArea_34.set('fieldAliases', {'objectid': 'objectid', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'muid': 'muid', 'status': 'status', 'quarry_nam': 'quarry_nam', 'sale_per_n': 'sale_per_n', 'globalid': 'globalid', 'status_dat': 'status_dat', });
lyr_IndegenousLandUseAggreementsRegistered_35.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Tribunal_I': 'Tribunal_I', 'Name': 'Name', 'Agreement_': 'Agreement_', 'Date_Lodge': 'Date_Lodge', 'Date_Notif': 'Date_Notif', 'Date_Regis': 'Date_Regis', 'Agreemen_1': 'Agreemen_1', 'Applicant': 'Applicant', 'Area_Sqkm': 'Area_Sqkm', 'Date_Curre': 'Date_Curre', 'NNTT_Seq_N': 'NNTT_Seq_N', 'Jurisdicti': 'Jurisdicti', 'Overlap': 'Overlap', 'Date_extra': 'Date_extra', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_LandslideHazardPotentialdebrisflow_36.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Study': 'Study', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_LandslideHazardSlopeGreaterThan23degrees_37.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'GRIDCODE': 'GRIDCODE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_FloodHazardLow_38.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Flood_Study': 'Flood_Study', 'Classification': 'Classification', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_StormtideInundation_39.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Category': 'Category', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_NaturalAssetsEnvironmentalImportanceHigh_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Score': 'Score', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_NaturalAssetsEnvironmentalImportanceMedium_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Score': 'Score', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_NaturalAssetsEnvironmentalImportanceLow_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Score': 'Score', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_NaturalAssetsEnvironmentalImportanceVeryHigh_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Score': 'Score', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_BushfirehazardareaMedium_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Rank': 'Rank', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_BushfirehazardareaHigh_45.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Rank': 'Rank', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_FloodHazardMediumHazardfurtherinvestigationarea_46.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_ShapingTownsvilleGA_47.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_ElliotSpringsRockySpringsLanduseConceptPlanGA_48.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Estate': 'Estate', 'Developer': 'Developer', 'Total lots': 'Total lots', 'LGA': 'LGA', });
lyr_ElliotSpringsRockySpringsGA_49.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_OonabaUDAStructurePlanGA_50.set('fieldAliases', {'id': 'id', });
lyr_NorthShorePlanofDevelopmentGA_51.set('fieldAliases', {'id': 'id', });
lyr_Suburb_57.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LGA_58.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_Estate_59.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Estate': 'Estate', 'Developer': 'Developer', 'Total lots': 'Total lots', 'LGA': 'LGA', 'Status': 'Status', 'layer': 'layer', 'path': 'path', });
lyr_MajorLandOwner_60.set('fieldAliases', {'fid': 'fid', ' PARCEL': ' PARCEL', ' Address': ' Address', ' Strategy': ' Strategy', ' Strategy Link': ' Strategy Link', ' Zoned / Rezone': ' Zoned / Rezone', ' Gross HA': ' Gross HA', ' NDH': ' NDH', ' Current Zone': ' Current Zone', ' Overlays': ' Overlays', ' VALUE @ 467m2': ' VALUE @ 467m2', ' Current RLP': ' Current RLP', ' Current OPC': ' Current OPC', ' Market Value (20%DM)': ' Market Value (20%DM)', ' Market Value (30%DM)': ' Market Value (30%DM)', ' Market Value (25%DM)': ' Market Value (25%DM)', ' Market Value (15%DM)': ' Market Value (15%DM)', ' Market Value (12%DM)': ' Market Value (12%DM)', ' Market Value (10%DM)': ' Market Value (10%DM)', ' Lot Yield @ 15Dw/Ha': ' Lot Yield @ 15Dw/Ha', ' Development Contributions per Lot': ' Development Contributions per Lot', ' Last Sold Price': ' Last Sold Price', ' Last Sold Date': ' Last Sold Date', ' OWNERSHIP': ' OWNERSHIP', ' Estate Status': ' Estate Status', ' Developer': ' Developer', ' Vendor Company': ' Vendor Company', ' Vendor Names': ' Vendor Names', ' Vendor Mobiles': ' Vendor Mobiles', ' Vendor Emails': ' Vendor Emails', ' Vendor Addresses': ' Vendor Addresses', ' Major Landowner': ' Major Landowner', ' Lead Link': ' Lead Link', });
lyr_ZonedParcel_61.set('fieldAliases', {'fid': 'fid', ' PARCEL': ' PARCEL', ' Address': ' Address', ' Strategy': ' Strategy', ' Strategy Link': ' Strategy Link', ' Zoned / Rezone': ' Zoned / Rezone', ' Gross HA': ' Gross HA', ' NDH': ' NDH', ' Current Zone': ' Current Zone', ' Overlays': ' Overlays', ' VALUE @ 467m2': ' VALUE @ 467m2', ' Current RLP': ' Current RLP', ' Current OPC': ' Current OPC', ' Market Value (20%DM)': ' Market Value (20%DM)', ' Market Value (30%DM)': ' Market Value (30%DM)', ' Market Value (25%DM)': ' Market Value (25%DM)', ' Market Value (15%DM)': ' Market Value (15%DM)', ' Market Value (12%DM)': ' Market Value (12%DM)', ' Market Value (10%DM)': ' Market Value (10%DM)', ' Lot Yield @ 15Dw/Ha': ' Lot Yield @ 15Dw/Ha', ' Development Contributions per Lot': ' Development Contributions per Lot', ' Last Sold Price': ' Last Sold Price', ' Last Sold Date': ' Last Sold Date', ' OWNERSHIP': ' OWNERSHIP', ' Estate Status': ' Estate Status', ' Developer': ' Developer', ' Vendor Company': ' Vendor Company', ' Vendor Names': ' Vendor Names', ' Vendor Mobiles': ' Vendor Mobiles', ' Vendor Emails': ' Vendor Emails', ' Vendor Addresses': ' Vendor Addresses', ' Major Landowner': ' Major Landowner', ' Lead Link': ' Lead Link', });
lyr_UnzonedParcel_62.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'propertyno': 'PROPERTY NUMBER', 'assessmentno': 'ASSESSMENT NUMBER', 'propertytype': 'PROPERTY TYPE', 'propertyname': 'PROPERTY NAME', 'houseno': 'HOUSE NO', 'housenosuffix': 'HOUSE NUMBER SUFFIX', 'housenoto': 'HOUSE NUMBER TO', 'streetname': 'STREET NAME', 'locality': 'SUBURB', 'overridelegaldescription': 'OVER RIDE LEGAL DESCRIPTION', 'property_no': 'PROPERTY ID', 'parent_property_no': 'PARENT PROPERTY ID', 'status': 'status', 'housenotosuffix': 'housenotosuffix', 'streetid': 'streetid', 'postcode': 'postcode', 'unitno': 'unitno', 'unitnosuffix': 'unitnosuffix', 'unitnoto': 'unitnoto', 'unitnotosuffix': 'unitnotosuffix', 'censusdistrict': 'censusdistrict', 'housenumbering': 'House Numbering', 'houseaddress': 'House Address', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', 'Gross HA': 'Gross HA', 'Zoning': 'Zoning', 'Zoned_HA': 'Zoned_HA', 'NDH': 'NDH', });
lyr_RezoneParcel_63.set('fieldAliases', {'id': 'id', });
lyr_EstateLabel_64.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Estate': 'Estate', 'Developer': 'Developer', 'Total lots': 'Total lots', 'LGA': 'LGA', 'Status': 'Status', 'layer': 'layer', 'path': 'path', });
lyr_ParcelAttributesLabel_65.set('fieldAliases', {'fid': 'fid', ' PARCEL': ' PARCEL', ' Address': ' Address', ' Strategy': ' Strategy', ' Strategy Link': ' Strategy Link', ' Zoned / Rezone': ' Zoned / Rezone', ' Gross HA': ' Gross HA', ' NDH': ' NDH', ' Current Zone': ' Current Zone', ' Overlays': ' Overlays', ' VALUE @ 467m2': ' VALUE @ 467m2', ' Current RLP': ' Current RLP', ' Current OPC': ' Current OPC', ' Market Value (20%DM)': ' Market Value (20%DM)', ' Market Value (30%DM)': ' Market Value (30%DM)', ' Market Value (25%DM)': ' Market Value (25%DM)', ' Market Value (15%DM)': ' Market Value (15%DM)', ' Market Value (12%DM)': ' Market Value (12%DM)', ' Market Value (10%DM)': ' Market Value (10%DM)', ' Lot Yield @ 15Dw/Ha': ' Lot Yield @ 15Dw/Ha', ' Development Contributions per Lot': ' Development Contributions per Lot', ' Last Sold Price': ' Last Sold Price', ' Last Sold Date': ' Last Sold Date', ' OWNERSHIP': ' OWNERSHIP', ' Estate Status': ' Estate Status', ' Developer': ' Developer', ' Vendor Company': ' Vendor Company', ' Vendor Names': ' Vendor Names', ' Vendor Mobiles': ' Vendor Mobiles', ' Vendor Emails': ' Vendor Emails', ' Vendor Addresses': ' Vendor Addresses', ' Major Landowner': ' Major Landowner', ' Lead Link': ' Lead Link', });
lyr_CharacterResidential_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_CommunityFacilities_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Conservation_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_DistrictCentre_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_EmergingCommunity_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_HighDensityResidential_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_HighImpactIndustry_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_LocalCentre_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_LowDensityResidential_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_LowImpactIndustry_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_MajorCentre_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_MediumDensityResidential_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_MediumImpactIndustry_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_MixedUse_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NeighbourhoodCentre_16.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_OpenSpace_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_PrincipalCentre_18.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_RuralResidential_19.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Rural_20.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_SpecialPurpose_21.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_SpecialisedCentre_22.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_SportandRecreation_23.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'OLD_ZONE': 'TextEdit', 'Checked': 'TextEdit', 'Comment': 'TextEdit', 'AmendDate': 'DateTime', 'AmendBy': 'TextEdit', 'AmendFrom': 'TextEdit', 'AmendComment': 'TextEdit', 'ParcelPart': 'Range', 'LGA_CODE': 'TextEdit', 'LP': 'TextEdit', 'LP_PREC': 'TextEdit', 'ZONE_PREC': 'TextEdit', 'LVL1_ZONE': 'TextEdit', 'LVL2_ZONE': 'TextEdit', 'LOT_PLAN': 'TextEdit', 'GAZ_DATE': 'DateTime', 'CAD_DATE': 'DateTime', 'PAR_SPLIT': 'Range', 'TCC_CODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_PalumaDamCatchmentArea_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'DAM_NAME': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_RossRiverDamCatchmentArea_25.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'CATCHMENT': 'TextEdit', 'SUB_CATCHM': 'TextEdit', 'AREA': 'TextEdit', 'SLOPE': 'TextEdit', 'FRAC_IMP': 'TextEdit', 'PERN_PER': 'TextEdit', 'PERN_IMP': 'TextEdit', 'MODEL': 'TextEdit', 'MIN_LOSS_P': 'TextEdit', 'MAJ_LOSS_P': 'TextEdit', 'MIN_LOSS_I': 'TextEdit', 'MAJ_LOSS_I': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', 'PLUVDEC10': 'TextEdit', 'Rn_DEC2010': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_WaterStorageArea_26.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'CLASS': 'Range', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_ErosionProneArea_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_FloodHazardHigh_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Flood_Study': 'TextEdit', 'Classification': 'Range', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_FloodHazardMedium_29.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Flood_Study': 'TextEdit', 'Classification': 'Range', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_HeritageAdjacentLandParcels_30.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'LANDNO': 'TextEdit', 'ACTIVESTATUS': 'TextEdit', 'PARCELTYPE': 'TextEdit', 'LOTNO': 'TextEdit', 'PLANTYPE': 'TextEdit', 'PLANNO': 'TextEdit', 'PARTLOT': 'TextEdit', 'COUNTY': 'TextEdit', 'PARISH': 'TextEdit', 'AREA_LEGAL': 'TextEdit', 'AREAUNITS': 'TextEdit', 'LAND_COM_1': 'TextEdit', 'PRECINCTCODE': 'TextEdit', 'PRECINCT': 'TextEdit', 'LOTPLAN': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Heritageproperties_31.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Source': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_WaterwaysBuffered_32.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Easement_33.set('fieldImages', {'fid': 'TextEdit', 'LOT': 'TextEdit', 'PLAN': 'TextEdit', 'ACC_CODE': 'TextEdit', 'O_SHAPE_Le': 'TextEdit', 'O_SHAPE_Ar': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', });
lyr_QuarryArea_34.set('fieldImages', {'objectid': '', 'Shape__Are': '', 'Shape__Len': '', 'muid': '', 'status': '', 'quarry_nam': '', 'sale_per_n': '', 'globalid': '', 'status_dat': '', });
lyr_IndegenousLandUseAggreementsRegistered_35.set('fieldImages', {'OBJECTID': 'TextEdit', 'Tribunal_I': 'TextEdit', 'Name': 'TextEdit', 'Agreement_': 'TextEdit', 'Date_Lodge': 'TextEdit', 'Date_Notif': 'TextEdit', 'Date_Regis': 'TextEdit', 'Agreemen_1': 'TextEdit', 'Applicant': 'TextEdit', 'Area_Sqkm': 'TextEdit', 'Date_Curre': 'TextEdit', 'NNTT_Seq_N': 'TextEdit', 'Jurisdicti': 'TextEdit', 'Overlap': 'TextEdit', 'Date_extra': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_LandslideHazardPotentialdebrisflow_36.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Study': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_LandslideHazardSlopeGreaterThan23degrees_37.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_FloodHazardLow_38.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Flood_Study': 'TextEdit', 'Classification': 'Range', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_StormtideInundation_39.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Category': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NaturalAssetsEnvironmentalImportanceHigh_40.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Score': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NaturalAssetsEnvironmentalImportanceMedium_41.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Score': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NaturalAssetsEnvironmentalImportanceLow_42.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Score': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NaturalAssetsEnvironmentalImportanceVeryHigh_43.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Score': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_BushfirehazardareaMedium_44.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Rank': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_BushfirehazardareaHigh_45.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Rank': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_FloodHazardMediumHazardfurtherinvestigationarea_46.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_ShapingTownsvilleGA_47.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_ElliotSpringsRockySpringsLanduseConceptPlanGA_48.set('fieldImages', {'fid': '', 'id': '', 'Estate': '', 'Developer': '', 'Total lots': '', 'LGA': '', });
lyr_ElliotSpringsRockySpringsGA_49.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_OonabaUDAStructurePlanGA_50.set('fieldImages', {'id': 'TextEdit', });
lyr_NorthShorePlanofDevelopmentGA_51.set('fieldImages', {'id': 'TextEdit', });
lyr_Suburb_57.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LGA_58.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_Estate_59.set('fieldImages', {'fid': '', 'id': '', 'Estate': '', 'Developer': '', 'Total lots': '', 'LGA': '', 'Status': '', 'layer': '', 'path': '', });
lyr_MajorLandOwner_60.set('fieldImages', {'fid': '', ' PARCEL': '', ' Address': '', ' Strategy': '', ' Strategy Link': '', ' Zoned / Rezone': '', ' Gross HA': '', ' NDH': '', ' Current Zone': '', ' Overlays': '', ' VALUE @ 467m2': '', ' Current RLP': '', ' Current OPC': '', ' Market Value (20%DM)': '', ' Market Value (30%DM)': '', ' Market Value (25%DM)': '', ' Market Value (15%DM)': '', ' Market Value (12%DM)': '', ' Market Value (10%DM)': '', ' Lot Yield @ 15Dw/Ha': '', ' Development Contributions per Lot': '', ' Last Sold Price': '', ' Last Sold Date': '', ' OWNERSHIP': '', ' Estate Status': '', ' Developer': '', ' Vendor Company': '', ' Vendor Names': '', ' Vendor Mobiles': '', ' Vendor Emails': '', ' Vendor Addresses': '', ' Major Landowner': '', ' Lead Link': '', });
lyr_ZonedParcel_61.set('fieldImages', {'fid': '', ' PARCEL': '', ' Address': '', ' Strategy': '', ' Strategy Link': '', ' Zoned / Rezone': '', ' Gross HA': '', ' NDH': '', ' Current Zone': '', ' Overlays': '', ' VALUE @ 467m2': '', ' Current RLP': '', ' Current OPC': '', ' Market Value (20%DM)': '', ' Market Value (30%DM)': '', ' Market Value (25%DM)': '', ' Market Value (15%DM)': '', ' Market Value (12%DM)': '', ' Market Value (10%DM)': '', ' Lot Yield @ 15Dw/Ha': '', ' Development Contributions per Lot': '', ' Last Sold Price': '', ' Last Sold Date': '', ' OWNERSHIP': '', ' Estate Status': '', ' Developer': '', ' Vendor Company': '', ' Vendor Names': '', ' Vendor Mobiles': '', ' Vendor Emails': '', ' Vendor Addresses': '', ' Major Landowner': '', ' Lead Link': '', });
lyr_UnzonedParcel_62.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'propertyno': 'TextEdit', 'assessmentno': 'TextEdit', 'propertytype': 'TextEdit', 'propertyname': 'TextEdit', 'houseno': 'TextEdit', 'housenosuffix': 'TextEdit', 'housenoto': 'TextEdit', 'streetname': 'TextEdit', 'locality': 'TextEdit', 'overridelegaldescription': 'TextEdit', 'property_no': 'TextEdit', 'parent_property_no': 'TextEdit', 'status': 'TextEdit', 'housenotosuffix': 'TextEdit', 'streetid': 'TextEdit', 'postcode': 'TextEdit', 'unitno': 'TextEdit', 'unitnosuffix': 'TextEdit', 'unitnoto': 'TextEdit', 'unitnotosuffix': 'TextEdit', 'censusdistrict': 'TextEdit', 'housenumbering': 'TextEdit', 'houseaddress': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', 'Gross HA': 'TextEdit', 'Zoning': 'TextEdit', 'Zoned_HA': 'TextEdit', 'NDH': 'TextEdit', });
lyr_RezoneParcel_63.set('fieldImages', {'id': 'TextEdit', });
lyr_EstateLabel_64.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Estate': 'TextEdit', 'Developer': 'TextEdit', 'Total lots': 'TextEdit', 'LGA': 'TextEdit', 'Status': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParcelAttributesLabel_65.set('fieldImages', {'fid': 'TextEdit', ' PARCEL': 'TextEdit', ' Address': 'TextEdit', ' Strategy': 'TextEdit', ' Strategy Link': 'TextEdit', ' Zoned / Rezone': 'TextEdit', ' Gross HA': 'TextEdit', ' NDH': 'TextEdit', ' Current Zone': 'TextEdit', ' Overlays': 'TextEdit', ' VALUE @ 467m2': 'TextEdit', ' Current RLP': 'Range', ' Current OPC': 'Range', ' Market Value (20%DM)': 'Range', ' Market Value (30%DM)': 'Range', ' Market Value (25%DM)': 'Range', ' Market Value (15%DM)': 'Range', ' Market Value (12%DM)': 'Range', ' Market Value (10%DM)': 'Range', ' Lot Yield @ 15Dw/Ha': 'TextEdit', ' Development Contributions per Lot': 'Range', ' Last Sold Price': 'TextEdit', ' Last Sold Date': 'TextEdit', ' OWNERSHIP': 'TextEdit', ' Estate Status': 'TextEdit', ' Developer': 'TextEdit', ' Vendor Company': 'TextEdit', ' Vendor Names': 'TextEdit', ' Vendor Mobiles': 'TextEdit', ' Vendor Emails': 'TextEdit', ' Vendor Addresses': 'TextEdit', ' Major Landowner': 'TextEdit', ' Lead Link': 'TextEdit', });
lyr_CharacterResidential_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_CommunityFacilities_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_Conservation_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_DistrictCentre_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_EmergingCommunity_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_HighDensityResidential_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_HighImpactIndustry_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_LocalCentre_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_LowDensityResidential_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_LowImpactIndustry_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_MajorCentre_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_MediumDensityResidential_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_MediumImpactIndustry_14.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_MixedUse_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NeighbourhoodCentre_16.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_OpenSpace_17.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_PrincipalCentre_18.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_RuralResidential_19.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_Rural_20.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_SpecialPurpose_21.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_SpecialisedCentre_22.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_SportandRecreation_23.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'OLD_ZONE': 'hidden field', 'Checked': 'hidden field', 'Comment': 'hidden field', 'AmendDate': 'hidden field', 'AmendBy': 'hidden field', 'AmendFrom': 'hidden field', 'AmendComment': 'hidden field', 'ParcelPart': 'hidden field', 'LGA_CODE': 'hidden field', 'LP': 'hidden field', 'LP_PREC': 'hidden field', 'ZONE_PREC': 'hidden field', 'LVL1_ZONE': 'hidden field', 'LVL2_ZONE': 'hidden field', 'LOT_PLAN': 'hidden field', 'GAZ_DATE': 'hidden field', 'CAD_DATE': 'hidden field', 'PAR_SPLIT': 'hidden field', 'TCC_CODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_PalumaDamCatchmentArea_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'DAM_NAME': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_RossRiverDamCatchmentArea_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CATCHMENT': 'hidden field', 'SUB_CATCHM': 'hidden field', 'AREA': 'hidden field', 'SLOPE': 'hidden field', 'FRAC_IMP': 'hidden field', 'PERN_PER': 'hidden field', 'PERN_IMP': 'hidden field', 'MODEL': 'hidden field', 'MIN_LOSS_P': 'hidden field', 'MAJ_LOSS_P': 'hidden field', 'MIN_LOSS_I': 'hidden field', 'MAJ_LOSS_I': 'hidden field', 'EASTING': 'hidden field', 'NORTHING': 'hidden field', 'PLUVDEC10': 'hidden field', 'Rn_DEC2010': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_WaterStorageArea_26.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'CLASS': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_ErosionProneArea_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Id': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_FloodHazardHigh_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Flood_Study': 'hidden field', 'Classification': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_FloodHazardMedium_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Flood_Study': 'hidden field', 'Classification': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_HeritageAdjacentLandParcels_30.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'LANDNO': 'hidden field', 'ACTIVESTATUS': 'hidden field', 'PARCELTYPE': 'hidden field', 'LOTNO': 'hidden field', 'PLANTYPE': 'hidden field', 'PLANNO': 'hidden field', 'PARTLOT': 'hidden field', 'COUNTY': 'hidden field', 'PARISH': 'hidden field', 'AREA_LEGAL': 'hidden field', 'AREAUNITS': 'hidden field', 'LAND_COM_1': 'hidden field', 'PRECINCTCODE': 'hidden field', 'PRECINCT': 'hidden field', 'LOTPLAN': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_Heritageproperties_31.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Source': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_WaterwaysBuffered_32.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_Easement_33.set('fieldLabels', {'fid': 'hidden field', 'LOT': 'hidden field', 'PLAN': 'hidden field', 'ACC_CODE': 'hidden field', 'O_SHAPE_Le': 'hidden field', 'O_SHAPE_Ar': 'hidden field', 'LOTPLAN': 'hidden field', 'area_ha': 'hidden field', 'locality': 'hidden field', 'local_auth': 'hidden field', 'address': 'hidden field', });
lyr_QuarryArea_34.set('fieldLabels', {'objectid': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'muid': 'hidden field', 'status': 'hidden field', 'quarry_nam': 'hidden field', 'sale_per_n': 'hidden field', 'globalid': 'hidden field', 'status_dat': 'hidden field', });
lyr_IndegenousLandUseAggreementsRegistered_35.set('fieldLabels', {'OBJECTID': 'hidden field', 'Tribunal_I': 'hidden field', 'Name': 'hidden field', 'Agreement_': 'hidden field', 'Date_Lodge': 'hidden field', 'Date_Notif': 'hidden field', 'Date_Regis': 'hidden field', 'Agreemen_1': 'hidden field', 'Applicant': 'hidden field', 'Area_Sqkm': 'hidden field', 'Date_Curre': 'hidden field', 'NNTT_Seq_N': 'hidden field', 'Jurisdicti': 'hidden field', 'Overlap': 'hidden field', 'Date_extra': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', });
lyr_LandslideHazardPotentialdebrisflow_36.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Study': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_LandslideHazardSlopeGreaterThan23degrees_37.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'GRIDCODE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_FloodHazardLow_38.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Flood_Study': 'hidden field', 'Classification': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_StormtideInundation_39.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Category': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NaturalAssetsEnvironmentalImportanceHigh_40.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Score': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NaturalAssetsEnvironmentalImportanceMedium_41.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Score': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NaturalAssetsEnvironmentalImportanceLow_42.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Score': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NaturalAssetsEnvironmentalImportanceVeryHigh_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Score': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_BushfirehazardareaMedium_44.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Rank': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_BushfirehazardareaHigh_45.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'hidden field', 'Rank': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_FloodHazardMediumHazardfurtherinvestigationarea_46.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Id': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_ShapingTownsvilleGA_47.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_ElliotSpringsRockySpringsLanduseConceptPlanGA_48.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Estate': 'hidden field', 'Developer': 'hidden field', 'Total lots': 'hidden field', 'LGA': 'hidden field', });
lyr_ElliotSpringsRockySpringsGA_49.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_OonabaUDAStructurePlanGA_50.set('fieldLabels', {'id': 'hidden field', });
lyr_NorthShorePlanofDevelopmentGA_51.set('fieldLabels', {'id': 'hidden field', });
lyr_Suburb_57.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_LGA_58.set('fieldLabels', {'fid': 'hidden field', 'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_Estate_59.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Estate': 'inline label - always visible', 'Developer': 'inline label - always visible', 'Total lots': 'inline label - always visible', 'LGA': 'inline label - always visible', 'Status': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_MajorLandOwner_60.set('fieldLabels', {'fid': 'hidden field', ' PARCEL': 'header label - always visible', ' Address': 'inline label - always visible', ' Strategy': 'inline label - always visible', ' Strategy Link': 'inline label - always visible', ' Zoned / Rezone': 'inline label - always visible', ' Gross HA': 'inline label - always visible', ' NDH': 'inline label - always visible', ' Current Zone': 'inline label - always visible', ' Overlays': 'inline label - always visible', ' VALUE @ 467m2': 'header label - always visible', ' Current RLP': 'inline label - always visible', ' Current OPC': 'inline label - always visible', ' Market Value (20%DM)': 'inline label - always visible', ' Market Value (30%DM)': 'inline label - always visible', ' Market Value (25%DM)': 'inline label - always visible', ' Market Value (15%DM)': 'inline label - always visible', ' Market Value (12%DM)': 'inline label - always visible', ' Market Value (10%DM)': 'inline label - always visible', ' Lot Yield @ 15Dw/Ha': 'inline label - always visible', ' Development Contributions per Lot': 'inline label - always visible', ' Last Sold Price': 'inline label - always visible', ' Last Sold Date': 'inline label - always visible', ' OWNERSHIP': 'header label - always visible', ' Estate Status': 'inline label - always visible', ' Developer': 'inline label - always visible', ' Vendor Company': 'inline label - always visible', ' Vendor Names': 'inline label - always visible', ' Vendor Mobiles': 'inline label - always visible', ' Vendor Emails': 'inline label - always visible', ' Vendor Addresses': 'inline label - always visible', ' Major Landowner': 'inline label - always visible', ' Lead Link': 'inline label - always visible', });
lyr_ZonedParcel_61.set('fieldLabels', {'fid': 'hidden field', ' PARCEL': 'header label - always visible', ' Address': 'inline label - always visible', ' Strategy': 'inline label - always visible', ' Strategy Link': 'inline label - always visible', ' Zoned / Rezone': 'inline label - always visible', ' Gross HA': 'inline label - always visible', ' NDH': 'inline label - always visible', ' Current Zone': 'inline label - always visible', ' Overlays': 'hidden field', ' VALUE @ 467m2': 'header label - always visible', ' Current RLP': 'inline label - always visible', ' Current OPC': 'hidden field', ' Market Value (20%DM)': 'hidden field', ' Market Value (30%DM)': 'hidden field', ' Market Value (25%DM)': 'hidden field', ' Market Value (15%DM)': 'hidden field', ' Market Value (12%DM)': 'hidden field', ' Market Value (10%DM)': 'hidden field', ' Lot Yield @ 15Dw/Ha': 'inline label - always visible', ' Development Contributions per Lot': 'hidden field', ' Last Sold Price': 'hidden field', ' Last Sold Date': 'hidden field', ' OWNERSHIP': 'header label - always visible', ' Estate Status': 'inline label - always visible', ' Developer': 'hidden field', ' Vendor Company': 'hidden field', ' Vendor Names': 'hidden field', ' Vendor Mobiles': 'hidden field', ' Vendor Emails': 'hidden field', ' Vendor Addresses': 'hidden field', ' Major Landowner': 'hidden field', ' Lead Link': 'inline label - always visible', });
lyr_UnzonedParcel_62.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'propertyno': 'hidden field', 'assessmentno': 'hidden field', 'propertytype': 'hidden field', 'propertyname': 'hidden field', 'houseno': 'hidden field', 'housenosuffix': 'hidden field', 'housenoto': 'hidden field', 'streetname': 'hidden field', 'locality': 'hidden field', 'overridelegaldescription': 'hidden field', 'property_no': 'hidden field', 'parent_property_no': 'hidden field', 'status': 'hidden field', 'housenotosuffix': 'hidden field', 'streetid': 'hidden field', 'postcode': 'hidden field', 'unitno': 'hidden field', 'unitnosuffix': 'hidden field', 'unitnoto': 'hidden field', 'unitnotosuffix': 'hidden field', 'censusdistrict': 'hidden field', 'housenumbering': 'hidden field', 'houseaddress': 'inline label - always visible', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', 'Gross HA': 'inline label - always visible', 'Zoning': 'inline label - always visible', 'Zoned_HA': 'hidden field', 'NDH': 'hidden field', });
lyr_RezoneParcel_63.set('fieldLabels', {'id': 'hidden field', });
lyr_EstateLabel_64.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Estate': 'hidden field', 'Developer': 'hidden field', 'Total lots': 'hidden field', 'LGA': 'hidden field', 'Status': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParcelAttributesLabel_65.set('fieldLabels', {'fid': 'hidden field', ' PARCEL': 'hidden field', ' Address': 'hidden field', ' Strategy': 'hidden field', ' Strategy Link': 'hidden field', ' Zoned / Rezone': 'hidden field', ' Gross HA': 'hidden field', ' NDH': 'hidden field', ' Current Zone': 'hidden field', ' Overlays': 'hidden field', ' VALUE @ 467m2': 'hidden field', ' Current RLP': 'hidden field', ' Current OPC': 'hidden field', ' Market Value (20%DM)': 'hidden field', ' Market Value (30%DM)': 'hidden field', ' Market Value (25%DM)': 'hidden field', ' Market Value (15%DM)': 'hidden field', ' Market Value (12%DM)': 'hidden field', ' Market Value (10%DM)': 'hidden field', ' Lot Yield @ 15Dw/Ha': 'hidden field', ' Development Contributions per Lot': 'hidden field', ' Last Sold Price': 'hidden field', ' Last Sold Date': 'hidden field', ' OWNERSHIP': 'hidden field', ' Estate Status': 'hidden field', ' Developer': 'hidden field', ' Vendor Company': 'hidden field', ' Vendor Names': 'hidden field', ' Vendor Mobiles': 'hidden field', ' Vendor Emails': 'hidden field', ' Vendor Addresses': 'hidden field', ' Major Landowner': 'hidden field', ' Lead Link': 'hidden field', });
lyr_ParcelAttributesLabel_65.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});