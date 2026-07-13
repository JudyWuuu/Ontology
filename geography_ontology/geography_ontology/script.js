const rawStationData590870 = {
    "station_identity":  {
                             "entity_id":  "CHN_590870",
                             "station_id":  "590870",
                             "chinese_name":  "佛冈",
                             "province":  "广东省",
                             "city":  "清远市",
                             "lat":  23.883,
                             "lon":  113.517,
                             "elevation_m":  68.0,
                             "data_quality":  "full",
                             "station_name":  "佛冈",
                             "crs":  "EPSG:4326",
                             "elevation_datum":  "EGM96",
                             "data_quality_cn":  "完整"
                         },
    "algorithm_group_station_terrain":  {
                                            "source":  "chinai_isd_output",
                                            "had_isd_protocol":  true,
                                            "terrain_metrics":  {
                                                                    "rix_5km":  0.152091,
                                                                    "sigma_h_5km":  44.147891,
                                                                    "water_frac_5km":  0.011644,
                                                                    "lc_mode_2km":  10.0,
                                                                    "elevation_m":  68.0,
                                                                    "lc_mode_2km_cn":  "林地/森林"
                                                                },
                                            "had_isd_labels":  {
                                                                   "terrain_complexity":  "mountainous",
                                                                   "terrain_complexity_cn":  "山地",
                                                                   "surface_label":  "forest",
                                                                   "surface_label_cn":  "林地/森林",
                                                                   "is_highland":  false
                                                               }
                                        },
    "station_environment_class":  {
                                      "terrain_type":  "mountainous",
                                      "surface_type":  "forest",
                                      "urban_level":  "peri_urban",
                                      "composite_label":  "mountainous_forest_peri_urban",
                                      "terrain_type_cn":  "山地",
                                      "surface_type_cn":  "林地/森林",
                                      "urban_level_cn":  "城郊",
                                      "composite_label_cn":  "山地·林地/森林·城郊"
                                  },
    "phase1_raster_ontology":  {
                                   "terrain_structure":  {
                                                             "source":  "SRTMGL1_30m",
                                                             "layers":  {
                                                                            "observed":  {
                                                                                             "point_sample":  {
                                                                                                                  "dem_elevation_m":  68.0
                                                                                                              },
                                                                                             "by_scale":  {
                                                                                                              "radius_500m":  {
                                                                                                                                  "elevation":  {
                                                                                                                                                    "mean_m":  73.4,
                                                                                                                                                    "std_m":  19.65,
                                                                                                                                                    "min_m":  47.0,
                                                                                                                                                    "max_m":  133.0
                                                                                                                                                }
                                                                                                                              },
                                                                                                              "radius_5000m":  {
                                                                                                                                   "elevation":  {
                                                                                                                                                     "mean_m":  109.91,
                                                                                                                                                     "std_m":  56.7,
                                                                                                                                                     "min_m":  34.0,
                                                                                                                                                     "max_m":  525.0
                                                                                                                                                 }
                                                                                                                               },
                                                                                                              "radius_10000m":  {
                                                                                                                                    "elevation":  {
                                                                                                                                                      "mean_m":  217.02,
                                                                                                                                                      "std_m":  169.21
                                                                                                                                                  }
                                                                                                                                }
                                                                                                          }
                                                                                         },
                                                                            "derived":  {
                                                                                            "point_sample":  {
                                                                                                                 "slope_horn_deg":  12.65,
                                                                                                                 "aspect_deg":  352.1,
                                                                                                                 "aspect_exposure":  "North",
                                                                                                                 "aspect_exposure_cn":  "北"
                                                                                                             },
                                                                                            "by_scale":  {
                                                                                                             "radius_500m":  {
                                                                                                                                 "elevation":  {
                                                                                                                                                   "range_m":  86.0
                                                                                                                                               },
                                                                                                                                 "slope":  {
                                                                                                                                               "mean_deg":  8.61,
                                                                                                                                               "std_deg":  5.56
                                                                                                                                           },
                                                                                                                                 "terrain_indices":  {
                                                                                                                                                         "tpi_m":  -5.4,
                                                                                                                                                         "rix":  0.1045
                                                                                                                                                     }
                                                                                                                             },
                                                                                                             "radius_1000m":  {
                                                                                                                                  "elevation":  {
                                                                                                                                                    "range_m":  92.0
                                                                                                                                                },
                                                                                                                                  "slope":  {
                                                                                                                                                "mean_deg":  7.83
                                                                                                                                            },
                                                                                                                                  "terrain_indices":  {
                                                                                                                                                          "tpi_m":  -3.7,
                                                                                                                                                          "rix":  0.0769
                                                                                                                                                      }
                                                                                                                              },
                                                                                                             "radius_5000m":  {
                                                                                                                                  "elevation":  {
                                                                                                                                                    "range_m":  491.0
                                                                                                                                                },
                                                                                                                                  "slope":  {
                                                                                                                                                "mean_deg":  10.81,
                                                                                                                                                "std_deg":  7.39,
                                                                                                                                                "aspect_vector_mean_deg":  33.0,
                                                                                                                                                "aspect_dominant_dir":  "Northeast",
                                                                                                                                                "aspect_dominant_dir_cn":  "东北"
                                                                                                                                            },
                                                                                                                                  "terrain_indices":  {
                                                                                                                                                          "tpi_m":  -41.9,
                                                                                                                                                          "rix":  0.2193
                                                                                                                                                      }
                                                                                                                              },
                                                                                                             "radius_10000m":  {
                                                                                                                                   "elevation":  {
                                                                                                                                                     "range_m":  1154.0
                                                                                                                                                 },
                                                                                                                                   "slope":  {
                                                                                                                                                 "mean_deg":  14.85,
                                                                                                                                                 "std_deg":  9.0
                                                                                                                                             },
                                                                                                                                   "terrain_indices":  {
                                                                                                                                                           "tpi_m":  -149.0,
                                                                                                                                                           "rix":  0.394
                                                                                                                                                       }
                                                                                                                               }
                                                                                                         }
                                                                                        }
                                                                        },
                                                             "data_year":  2000,
                                                             "extraction_status":  "ok"
                                                         },
                                   "land_surface_cover":  {
                                                              "source":  "ESRI_LULC_10m",
                                                              "layers":  {
                                                                             "observed":  {
                                                                                              "point_sample":  {
                                                                                                                   "lulc_code":  2
                                                                                                               }
                                                                                          },
                                                                             "derived":  {
                                                                                             "point_sample":  {
                                                                                                                  "lulc_name_en":  "Trees",
                                                                                                                  "lulc_name_cn":  "林地/森林",
                                                                                                                  "aerodynamic_roughness_length_m":  1.0,
                                                                                                                  "zero_plane_displacement_m":  15.0,
                                                                                                                  "matches_dominant_2km":  false
                                                                                                              },
                                                                                             "by_scale":  {
                                                                                                              "radius_500m":  {
                                                                                                                                  "fractions":  {
                                                                                                                                                    "water":  0.0035,
                                                                                                                                                    "tree_cover":  0.4468,
                                                                                                                                                    "wetland":  0.0,
                                                                                                                                                    "cropland":  0.1044,
                                                                                                                                                    "built_up":  0.445,
                                                                                                                                                    "bare_ground":  0.0,
                                                                                                                                                    "snow_ice":  0.0,
                                                                                                                                                    "grassland":  0.0003
                                                                                                                                                },
                                                                                                                                  "landscape_metrics":  {
                                                                                                                                                            "dominant_class_code":  2,
                                                                                                                                                            "dominant_class_cn":  "林地/森林",
                                                                                                                                                            "dominant_class_esa_code":  10,
                                                                                                                                                            "shannon_entropy":  0.9784,
                                                                                                                                                            "heterogeneity_label":  "medium",
                                                                                                                                                            "heterogeneity_label_cn":  "中等异质性"
                                                                                                                                                        }
                                                                                                                              },
                                                                                                              "radius_2000m":  {
                                                                                                                                   "fractions":  {
                                                                                                                                                     "water":  0.0393,
                                                                                                                                                     "tree_cover":  0.4194,
                                                                                                                                                     "wetland":  0.0001,
                                                                                                                                                     "cropland":  0.0317,
                                                                                                                                                     "built_up":  0.4776,
                                                                                                                                                     "bare_ground":  0.0006,
                                                                                                                                                     "snow_ice":  0.0,
                                                                                                                                                     "grassland":  0.0312
                                                                                                                                                 },
                                                                                                                                   "landscape_metrics":  {
                                                                                                                                                             "dominant_class_code":  7,
                                                                                                                                                             "dominant_class_cn":  "城市/建成区",
                                                                                                                                                             "dominant_class_esa_code":  50,
                                                                                                                                                             "shannon_entropy":  1.0675,
                                                                                                                                                             "heterogeneity_label":  "medium",
                                                                                                                                                             "heterogeneity_label_cn":  "中等异质性"
                                                                                                                                                         }
                                                                                                                               },
                                                                                                              "radius_5000m":  {
                                                                                                                                   "fractions":  {
                                                                                                                                                     "water":  0.0276,
                                                                                                                                                     "tree_cover":  0.6845,
                                                                                                                                                     "wetland":  0.0,
                                                                                                                                                     "cropland":  0.0316,
                                                                                                                                                     "built_up":  0.2237,
                                                                                                                                                     "bare_ground":  0.0012,
                                                                                                                                                     "snow_ice":  0.0,
                                                                                                                                                     "grassland":  0.0313
                                                                                                                                                 },
                                                                                                                                   "landscape_metrics":  {
                                                                                                                                                             "dominant_class_code":  2,
                                                                                                                                                             "dominant_class_cn":  "林地/森林",
                                                                                                                                                             "dominant_class_esa_code":  10,
                                                                                                                                                             "shannon_entropy":  0.9192,
                                                                                                                                                             "heterogeneity_label":  "medium",
                                                                                                                                                             "heterogeneity_label_cn":  "中等异质性"
                                                                                                                                                         }
                                                                                                                               }
                                                                                                          },
                                                                                             "aerodynamics":  {
                                                                                                                  "area_weighted_roughness_2km_m":  0.66303,
                                                                                                                  "wind_shear_exponent":  0.301,
                                                                                                                  "z0_derivation_method":  "point_sample",
                                                                                                                  "z0_derivation_method_cn":  "点采样类码",
                                                                                                                  "is_airport":  false
                                                                                                              }
                                                                                         }
                                                                         },
                                                              "data_year":  2024,
                                                              "extraction_status":  "ok"
                                                          },
                                   "urbanization":  {
                                                        "impervious_surface":  {
                                                                                   "source":  "GISA_new_1972_2021",
                                                                                   "layers":  {
                                                                                                  "observed":  {
                                                                                                                   "point_sample":  {
                                                                                                                                        "impervious_year_code":  0
                                                                                                                                    }
                                                                                                               },
                                                                                                  "derived":  {
                                                                                                                  "point_sample":  {
                                                                                                                                       "is_impervious":  false
                                                                                                                                   },
                                                                                                                  "by_scale":  {
                                                                                                                                   "radius_500m":  {
                                                                                                                                                       "coverage_fraction":  0.1515,
                                                                                                                                                       "mean_first_impervious_year":  1993.7
                                                                                                                                                   },
                                                                                                                                   "radius_2000m":  {
                                                                                                                                                        "coverage_fraction":  0.3058,
                                                                                                                                                        "mean_first_impervious_year":  1989.6
                                                                                                                                                    },
                                                                                                                                   "radius_5000m":  {
                                                                                                                                                        "coverage_fraction":  0.1207,
                                                                                                                                                        "mean_first_impervious_year":  1990.7
                                                                                                                                                    }
                                                                                                                               }
                                                                                                              }
                                                                                              },
                                                                                   "data_year":  2021,
                                                                                   "extraction_status":  "ok"
                                                                               },
                                                        "built_surface":  {
                                                                              "source":  "GHSL_GHS_BUILT_S",
                                                                              "layers":  {
                                                                                             "observed":  {
                                                                                                              "point_sample":  {
                                                                                                                                   "built_surface_m2":  35.0
                                                                                                                               }
                                                                                                          },
                                                                                             "derived":  {
                                                                                                             "point_sample":  {
                                                                                                                                  "built_up_fraction":  0.0044
                                                                                                                              },
                                                                                                             "by_scale":  {
                                                                                                                              "radius_500m":  {
                                                                                                                                                  "built_up_fraction":  0.0626,
                                                                                                                                                  "built_surface_label":  "low",
                                                                                                                                                  "built_surface_label_cn":  "低建成区"
                                                                                                                                              },
                                                                                                                              "radius_2000m":  {
                                                                                                                                                   "built_up_fraction":  0.1005,
                                                                                                                                                   "built_surface_label":  "medium",
                                                                                                                                                   "built_surface_label_cn":  "中建成区"
                                                                                                                                               },
                                                                                                                              "radius_5000m":  {
                                                                                                                                                   "built_up_fraction":  0.0368,
                                                                                                                                                   "built_surface_label":  "low",
                                                                                                                                                   "built_surface_label_cn":  "低建成区"
                                                                                                                                               }
                                                                                                                          }
                                                                                                         }
                                                                                         },
                                                                              "data_year":  2025,
                                                                              "extraction_status":  "ok"
                                                                          },
                                                        "urbanization_index":  0.107,
                                                        "urbanization_index_interim":  0.3058
                                                    },
                                   "thermal_environment":  {
                                                               "source":  "MODIS_LST_MOD11A2",
                                                               "layers":  {
                                                                              "observed":  {
                                                                                               "lst_climatology":  {
                                                                                                                       "annual":  {
                                                                                                                                      "mean_k":  299.99,
                                                                                                                                      "std_k":  4.04
                                                                                                                                  },
                                                                                                                       "by_season":  {
                                                                                                                                         "summer":  {
                                                                                                                                                        "daytime_mean_k":  302.98,
                                                                                                                                                        "nighttime_mean_k":  297.56,
                                                                                                                                                        "mean_k":  300.27
                                                                                                                                                    },
                                                                                                                                         "winter":  {
                                                                                                                                                        "daytime_mean_k":  294.95,
                                                                                                                                                        "nighttime_mean_k":  289.45,
                                                                                                                                                        "mean_k":  292.2
                                                                                                                                                    },
                                                                                                                                         "spring":  {
                                                                                                                                                        "mean_k":  301.87
                                                                                                                                                    },
                                                                                                                                         "autumn":  {
                                                                                                                                                        "mean_k":  300.33
                                                                                                                                                    }
                                                                                                                                     }
                                                                                                                   },
                                                                                               "surface_uhi":  {
                                                                                                                   "rural_reference":  {
                                                                                                                                           "day_k":  291.85,
                                                                                                                                           "night_k":  284.72
                                                                                                                                       }
                                                                                                               }
                                                                                           },
                                                                              "derived":  {
                                                                                              "lst_climatology":  {
                                                                                                                      "annual":  {
                                                                                                                                     "diurnal_range_k":  5.94,
                                                                                                                                     "annual_range_k":  8.03
                                                                                                                                 }
                                                                                                                  },
                                                                                              "surface_uhi":  {
                                                                                                                  "intensity_annual_mean_k":  11.98,
                                                                                                                  "intensity_summer_day_k":  11.13,
                                                                                                                  "intensity_summer_night_k":  12.83,
                                                                                                                  "uhi_category":  "high",
                                                                                                                  "uhi_category_cn":  "高度城市热岛",
                                                                                                                  "confidence_assessment":  {
                                                                                                                                                "is_confident":  true
                                                                                                                                            }
                                                                                                              }
                                                                                          }
                                                                          },
                                                               "data_year":  2023,
                                                               "extraction_status":  "complete",
                                                               "uhi_applicable":  true,
                                                               "uhi_status":  "complete"
                                                           }
                               },
    "phase2_raster_ontology":  {
                                   "water_body":  {
                                                      "source":  "GLRSED_V1.0+CRD_v11+GLWD_v2_0+HydroRIVERS_v10_as+GSriver_v1",
                                                      "layers":  {
                                                                     "observed":  {
                                                                                      "nearest_lake_entity":  {
                                                                                                                  "semantic":  {
                                                                                                                                   "nearest_hylak_id":  1387173.0,
                                                                                                                                   "nearest_lake_osm_id":  "243929403",
                                                                                                                                   "nearest_lake_name":  "Feilaixia Reservoir",
                                                                                                                                   "nearest_lake_name_source":  "CRD_v11",
                                                                                                                                   "nearest_lake_type":  2,
                                                                                                                                   "nearest_lake_type_label":  "reservoir",
                                                                                                                                   "nearest_lake_type_label_cn":  "水库"
                                                                                                                               },
                                                                                                                  "static_physics":  {
                                                                                                                                         "nearest_lake_area_km2":  0.6574,
                                                                                                                                         "nearest_lake_vol_mcm":  3.04,
                                                                                                                                         "nearest_lake_depth_avg_m":  6.2,
                                                                                                                                         "nearest_shore_length_km":  10.0116,
                                                                                                                                         "nearest_shore_dev_idx":  1.83,
                                                                                                                                         "nearest_lake_elevation_m":  99.0
                                                                                                                                     },
                                                                                                                  "spatial_topology":  {
                                                                                                                                           "distance_to_nearest_lake_km":  3.1063,
                                                                                                                                           "bearing_to_nearest_lake_deg":  10.14,
                                                                                                                                           "point_in_nearest_lake":  false,
                                                                                                                                           "station_lake_elev_diff_m":  -31.0
                                                                                                                                       },
                                                                                                                  "dynamics":  {
                                                                                                                                   "nearest_lake_freeze_flag":  null,
                                                                                                                                   "nearest_lake_res_time_days":  52.1
                                                                                                                               },
                                                                                                                  "scale_alignment":  {
                                                                                                                                          "grid_025_lake_fraction":  0.000929,
                                                                                                                                          "lake_area_to_grid_ratio":  0.000928
                                                                                                                                      }
                                                                                                              },
                                                                                      "lake_reservoir_by_scale":  {
                                                                                                                      "radius_500m":  {
                                                                                                                                          "lake_water_fraction":  0.0
                                                                                                                                      },
                                                                                                                      "radius_2000m":  {
                                                                                                                                           "lake_water_fraction":  0.0
                                                                                                                                       },
                                                                                                                      "radius_5000m":  {
                                                                                                                                           "lake_water_fraction":  0.0084,
                                                                                                                                           "lake_area_km2":  0.6605
                                                                                                                                       },
                                                                                                                      "radius_10000m":  {
                                                                                                                                            "lake_water_fraction":  0.0021
                                                                                                                                        }
                                                                                                                  },
                                                                                      "natural_wetland_by_scale":  {
                                                                                                                       "radius_500m":  {
                                                                                                                                           "wetland_fraction_glwd":  0.3425,
                                                                                                                                           "valid_pixel_fraction":  1.0,
                                                                                                                                           "z0_macro_fraction":  {
                                                                                                                                                                     "herbaceous_wetland":  0.0,
                                                                                                                                                                     "forested_wetland":  0.0,
                                                                                                                                                                     "intermittent_wetland":  0.0
                                                                                                                                                                 },
                                                                                                                                           "z0_macro_fraction_cn":  {
                                                                                                                                                                        "草本湿地":  0.0,
                                                                                                                                                                        "森林湿地":  0.0,
                                                                                                                                                                        "间歇性湿地":  0.0
                                                                                                                                                                    }
                                                                                                                                       },
                                                                                                                       "radius_2000m":  {
                                                                                                                                            "wetland_fraction_glwd":  0.2143,
                                                                                                                                            "valid_pixel_fraction":  1.0,
                                                                                                                                            "z0_macro_fraction":  {
                                                                                                                                                                      "herbaceous_wetland":  0.0,
                                                                                                                                                                      "forested_wetland":  0.0,
                                                                                                                                                                      "intermittent_wetland":  0.0446
                                                                                                                                                                  },
                                                                                                                                            "z0_macro_fraction_cn":  {
                                                                                                                                                                         "草本湿地":  0.0,
                                                                                                                                                                         "森林湿地":  0.0,
                                                                                                                                                                         "间歇性湿地":  0.0446
                                                                                                                                                                     }
                                                                                                                                        },
                                                                                                                       "radius_5000m":  {
                                                                                                                                            "wetland_fraction_glwd":  0.1321,
                                                                                                                                            "valid_pixel_fraction":  1.0,
                                                                                                                                            "z0_macro_fraction":  {
                                                                                                                                                                      "herbaceous_wetland":  0.0043,
                                                                                                                                                                      "forested_wetland":  0.0,
                                                                                                                                                                      "intermittent_wetland":  0.0537
                                                                                                                                                                  },
                                                                                                                                            "z0_macro_fraction_cn":  {
                                                                                                                                                                         "草本湿地":  0.0043,
                                                                                                                                                                         "森林湿地":  0.0,
                                                                                                                                                                         "间歇性湿地":  0.0537
                                                                                                                                                                     }
                                                                                                                                        },
                                                                                                                       "radius_10000m":  {
                                                                                                                                             "wetland_fraction_glwd":  0.0655,
                                                                                                                                             "valid_pixel_fraction":  1.0,
                                                                                                                                             "z0_macro_fraction":  {
                                                                                                                                                                       "herbaceous_wetland":  0.0025,
                                                                                                                                                                       "forested_wetland":  0.0,
                                                                                                                                                                       "intermittent_wetland":  0.0337
                                                                                                                                                                   },
                                                                                                                                             "z0_macro_fraction_cn":  {
                                                                                                                                                                          "草本湿地":  0.0025,
                                                                                                                                                                          "森林湿地":  0.0,
                                                                                                                                                                          "间歇性湿地":  0.0337
                                                                                                                                                                      }
                                                                                                                                         }
                                                                                                                   },
                                                                                      "nearest_any_river":  {
                                                                                                                "nearest_any_river_id":  41034227,
                                                                                                                "nearest_any_river_name":  "潖江",
                                                                                                                "nearest_any_river_name_source":  "GSriver_v1",
                                                                                                                "distance_to_any_river_km":  0.3134,
                                                                                                                "bearing_to_any_river_deg":  231.62,
                                                                                                                "nearest_any_river_strahler_order":  3,
                                                                                                                "nearest_any_river_discharge_cms":  2.564
                                                                                                            },
                                                                                      "nearest_major_river":  {
                                                                                                                  "nearest_river_id":  41040133,
                                                                                                                  "nearest_river_name":  "潖江",
                                                                                                                  "nearest_river_name_source":  "GSriver_v1",
                                                                                                                  "gsriver_river_class":  4.0,
                                                                                                                  "distance_to_major_river_km":  20.6421,
                                                                                                                  "bearing_to_major_river_deg":  225.22,
                                                                                                                  "nearest_river_strahler_order":  5,
                                                                                                                  "nearest_river_discharge_cms":  45.919
                                                                                                              },
                                                                                      "river_network":  {
                                                                                                            "r2km_river_length_density_km_per_km2":  0.7001,
                                                                                                            "r5km_river_length_km":  39.8728,
                                                                                                            "r5km_river_length_density_km_per_km2":  0.5077,
                                                                                                            "r5km_major_river_length_density_km_per_km2":  0.0,
                                                                                                            "r10km_river_length_density_km_per_km2":  0.3795,
                                                                                                            "is_river_influenced":  true,
                                                                                                            "is_dense_river_network":  false
                                                                                                        }
                                                                                  },
                                                                     "derived":  {
                                                                                     "semantic_labels":  {
                                                                                                             "water_body_type":  "mixed",
                                                                                                             "is_lake_influenced":  true,
                                                                                                             "is_wetland_influenced":  true,
                                                                                                             "dominant_water_body_class_5km":  "other",
                                                                                                             "is_lake_coastal_station":  false,
                                                                                                             "dominant_glwd_main_class_5km":  "class_15",
                                                                                                             "water_body_type_cn":  "湖库与湿地混合",
                                                                                                             "dominant_water_body_class_5km_cn":  "其他",
                                                                                                             "is_lake_coastal_station_cn":  "非湖库邻近站",
                                                                                                             "dominant_glwd_main_class_5km_cn":  "GLWD细类15"
                                                                                                         }
                                                                                 }
                                                                 },
                                                      "extraction_status":  {
                                                                                "hydrolakes":  "ok",
                                                                                "glwd":  "ok",
                                                                                "hydrorivers":  "ok"
                                                                            }
                                                  },
                                   "coastal_environment":  {
                                                               "source":  "S2Coast-2023",
                                                               "layers":  {
                                                                              "observed":  {
                                                                                               "distance_to_coast_km":  87.098,
                                                                                               "bearing_to_coast_deg":  184.25,
                                                                                               "coastal_orientation_deg":  302.98,
                                                                                               "coast_station_relative_aspect_deg":  118.73,
                                                                                               "coastal_sectors_within_25km":  0,
                                                                                               "coast_openness_index":  0.0
                                                                                           },
                                                                              "derived":  {
                                                                                              "distance_bands":  {
                                                                                                                     "is_coastal_50km":  false,
                                                                                                                     "is_coastal_100km":  true,
                                                                                                                     "is_coastal_200km":  true,
                                                                                                                     "coastal_exposure":  "medium",
                                                                                                                     "coastal_exposure_cn":  "中等海岸暴露"
                                                                                                                 },
                                                                                              "semantic_labels":  {
                                                                                                                      "is_coastal_by_s2coast":  false,
                                                                                                                      "is_marine_coastal":  false,
                                                                                                                      "is_lake_coastal":  false,
                                                                                                                      "is_truly_coastal":  false,
                                                                                                                      "coastal_orientation_class":  "NW-SE",
                                                                                                                      "coastal_morphology_hint":  "inland",
                                                                                                                      "coastal_morphology_confidence":  "low",
                                                                                                                      "coastal_fetch_proxy_km":  87.14,
                                                                                                                      "is_windward_coast":  false,
                                                                                                                      "coastal_orientation_class_cn":  "西北–东南向",
                                                                                                                      "coastal_morphology_hint_cn":  "内陆",
                                                                                                                      "coastal_morphology_confidence_cn":  "低",
                                                                                                                      "is_lake_coastal_cn":  "非湖库邻近"
                                                                                                                  }
                                                                                          }
                                                                          },
                                                               "extraction_status":  "ok"
                                                           },
                                   "cryosphere":  {
                                                      "source":  "MOD10A2.061+TPDC_FT_v2",
                                                      "layers":  {

                                                                 },
                                                      "applicable":  false,
                                                      "extraction_status":  "not_applicable"
                                                  }
                               }
}
;
document.addEventListener('alpine:init', () => {
    Alpine.data('ontologyApp', () => ({
        activeMenu: 'geography', // 'domain' or 'geography'
        
        // --- Domain Ontology State ---
        currentView: 'list', // 'list', 'card', 'graph'
        chartInstance: null,
        
        ontologies: [
            { id: 1, name: '新探矿行业研究与洞察 V2', domain: '地质', status: '已入库', concepts: 149, relations: 165, version: 4, creator: '-', updatedAt: '1天前' },
            { id: 2, name: '地质_领域本体', domain: '地质', status: '已入库', concepts: 406, relations: 555, version: 3, creator: '-', updatedAt: '2024/6/23' },
            { id: 3, name: '新探矿行业研究与洞察 V2_d5daf502bb26', domain: '地质', status: '草稿', concepts: 45, relations: 56, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 4, name: '新探矿行业研究与洞察 V2_4001f03d6009', domain: '地质', status: '草稿', concepts: 35, relations: 42, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 5, name: '新探矿行业研究与洞察 V2_2d6fe8ac8007', domain: '地质', status: '草稿', concepts: 71, relations: 70, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 6, name: '新探矿行业研究与洞察 V2_2d6fe8ac8007_data', domain: '地质', status: '草稿', concepts: 70, relations: 63, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 7, name: '新探矿行业研究与洞察 V2_2d6fe8ac8007_dataalgo', domain: '地质', status: '草稿', concepts: 8, relations: 7, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 8, name: '新探矿行业研究与洞察 V2_2d6fe8ac8007_algorithm', domain: '地质', status: '草稿', concepts: 1, relations: 0, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 9, name: '新探矿行业研究与洞察 V2_d5daf502bb26_algorithm', domain: '地质', status: '草稿', concepts: 5, relations: 0, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 10, name: '新探矿行业研究与洞察 V2_d5daf502bb26_dataalgo', domain: '地质', status: '草稿', concepts: 9, relations: 20, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 11, name: '新探矿行业研究与洞察 V2_d5daf502bb26_data', domain: '地质', status: '草稿', concepts: 40, relations: 36, version: 1, creator: '-', updatedAt: '2024/6/23' },
            { id: 12, name: '光伏_领域本体', domain: '光伏', status: '已入库', concepts: 149, relations: 162, version: 2, creator: '-', updatedAt: '2024/6/23' }
        ],

                // --- Geography Ontology State ---
        geoCurrentView: 'graph', // 'list', 'card', 'graph'
        regionSearchQuery: '',
        geoLayerSearchQuery: '',
        geoSearchQuery: '',
        geoCountryFilter: '中国',
        geoCountryOptions: ['中国'],
        geoProvinceFilterCode: '',
        geoCityFilterCode: '',
        geoDistrictFilterCode: '',
        geoDistrictOptionsByCity: {},
        geoOntologyTypeFilter: '全部',
        geoOntologyTypeOptions: ['全部', '地球系统', '地理地形', '海洋气候'],
        showGeoLayerSwitcher: false,
        activeGeoLayerKey: '',
        geoElevationLegendItems: [
            { label: '> 5000', min: 5000, color: '#d73027' },
            { label: '4000 - 5000', min: 4000, color: '#f46d43' },
            { label: '3000 - 4000', min: 3000, color: '#f98e09' },
            { label: '2000 - 3000', min: 2000, color: '#f7c948' },
            { label: '1000 - 2000', min: 1000, color: '#b8d94b' },
            { label: '500 - 1000', min: 500, color: '#7acb5a' },
            { label: '200 - 500', min: 200, color: '#43b5ae' },
            { label: '0 - 200', min: 0, color: '#2b7bba' },
            { label: '< 0', min: -Infinity, color: '#1d4e89' }
        ],
        geoChartInstance: null,
        chinaGeoJson: null,
        currentGeoJson: null,
        currentGeoMapName: '',
        currentGeoRegion: { code: '100000', name: '中国', label: '全国', level: 0 },
        geoBreadcrumbs: [{ code: '100000', name: '中国', label: '全国', level: 0 }],
        geoMapError: '',
        geoMapLoadToken: 0,
        isGeoFullscreen: false,
        isGeo3D: false,
        geoOntologyGraphFullscreen: false,
        geoOntologyViewMode: 'ontology',
        isGraphMode: false,
        selectedNode: null,
        activeGeoStation: null,
        
        watchActiveGeoStation(item) {
            if (this.geoChartInstance && item) {
                // Re-render map option to apply highlight color
                this.geoChartInstance.setOption(this.getGeoMapOption(this.currentGeoMapName, this.currentGeoRegion.level));
                
                // Try to highlight the marker on map
                this.geoChartInstance.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    name: item.name
                });
            }
        },
        selectedGeoElement: null,
        geoOntologyGraphInstance: null,
        activeGeoOntologyData: null,
        activeGeoOntologyPayloads: null,
        geoSystemDemoStationId: '593160',
        geoPageMode: 'main',
        geoDetailTab: 'profile',
        selectedGeoRecord: null,
        geoDetailGraphInstance: null,
        geoVersionNew: 'V4',
        geoVersionOld: 'V3',
        geoVersionHistory: [
            {
                version: 'V4',
                status: '草稿',
                statusTone: 'draft',
                title: '佛冈本体快照',
                entityId: 'CHN_590870',
                timestamp: '2026-07-03 14:28:06',
                note: '保存版本快照',
                isCurrent: true
            },
            {
                version: 'V3',
                status: '版本快照',
                statusTone: 'snapshot',
                title: '回溯全版本: D00DC34A-FB55-453B-BD96-BAFD018BADE6',
                entityId: 'CHN_590870',
                timestamp: '2026-06-23 17:36:41',
                note: '回溯全版本',
                isCurrent: false
            },
            {
                version: 'V2',
                status: '版本快照',
                statusTone: 'snapshot',
                title: '佛冈本体快照',
                entityId: 'CHN_590870',
                timestamp: '2026-06-23 17:34:17',
                note: '保存版本快照',
                isCurrent: false
            },
            {
                version: 'V1',
                status: '版本快照',
                statusTone: 'snapshot',
                title: '佛冈初始化导入',
                entityId: 'CHN_590870',
                timestamp: '2026-06-23 17:33:46',
                note: '初始入库',
                isCurrent: false
            }
        ],
        geoVersionComparisons: {
            'V4|V3': {
                changeLabel: '修改属性: 邻界特征字段',
                stats: [
                    { label: '新增概念', value: 0, tone: 'green' },
                    { label: '删除概念', value: 0, tone: 'red' },
                    { label: '新增关系', value: 0, tone: 'green' },
                    { label: '删除关系', value: 0, tone: 'red' },
                    { label: '同 KEY 修改', value: 1, tone: 'amber' },
                    { label: '删除节点（类-属性）', value: 0, tone: 'red' }
                ]
            },
            'V4|V2': {
                changeLabel: '新增节点: 地表覆盖 LULC',
                stats: [
                    { label: '新增概念', value: 1, tone: 'green' },
                    { label: '删除概念', value: 0, tone: 'red' },
                    { label: '新增关系', value: 2, tone: 'green' },
                    { label: '删除关系', value: 0, tone: 'red' },
                    { label: '同 KEY 修改', value: 3, tone: 'amber' },
                    { label: '删除节点（类-属性）', value: 0, tone: 'red' }
                ]
            },
            'V3|V2': {
                changeLabel: '补充热环境派生指标',
                stats: [
                    { label: '新增概念', value: 0, tone: 'green' },
                    { label: '删除概念', value: 0, tone: 'red' },
                    { label: '新增关系', value: 1, tone: 'green' },
                    { label: '删除关系', value: 0, tone: 'red' },
                    { label: '同 KEY 修改', value: 2, tone: 'amber' },
                    { label: '删除节点（类-属性）', value: 0, tone: 'red' }
                ]
            }
        },
        regions: [
            { code: '86', name: '中国', expanded: true, children: [
                { code: '440000', name: '广东省', expanded: true, children: [
                    { code: '440100', name: '广州市' },
                    { code: '440200', name: '韶关市' },
                    { code: '440300', name: '深圳市' },
                    { code: '440400', name: '珠海市' },
                    { code: '440500', name: '汕头市' },
                    { code: '440600', name: '佛山市' },
                    { code: '440700', name: '江门市' },
                    { code: '440800', name: '湛江市' },
                    { code: '440900', name: '茂名市' },
                    { code: '441200', name: '肇庆市' },
                    { code: '441300', name: '惠州市' },
                    { code: '441400', name: '梅州市' },
                    { code: '441500', name: '汕尾市' },
                    { code: '441600', name: '河源市' },
                    { code: '441700', name: '阳江市' },
                    { code: '441800', name: '清远市' },
                    { code: '441900', name: '东莞市' },
                    { code: '442000', name: '中山市' },
                    { code: '445100', name: '潮州市' },
                    { code: '445200', name: '揭阳市' },
                    { code: '445300', name: '云浮市' }
                ]}
            ]}
        ],
        geoLayerGroups: [
            {
                key: 'terrain',
                label: '地形地貌',
                expanded: true,
                disabled: false,
                layers: [
                    {
                        key: 'terrain_dem',
                        label: 'DEM',
                        demoAvailable: true,
                        demoLayerKey: 'terrain_dem_elevation',
                        children: [
                            { key: 'terrain_dem_elevation', label: '高程', demoAvailable: true },
                            { key: 'terrain_dem_slope', label: '坡度', demoAvailable: false, disabled: true },
                            { key: 'terrain_dem_aspect', label: '坡向', demoAvailable: false, disabled: true },
                            { key: 'terrain_dem_index', label: '地形指数', demoAvailable: false, disabled: true },
                            { key: 'terrain_dem_micro', label: '微地形', demoAvailable: false, disabled: true },
                            { key: 'terrain_dem_canyon', label: '峡谷谷地', demoAvailable: false, disabled: true },
                            { key: 'terrain_dem_radiation', label: '辐射微环境', demoAvailable: false, disabled: true }
                        ]
                    }
                ]
            },
            {
                key: 'land-cover',
                label: '地表覆盖',
                expanded: true,
                disabled: false,
                layers: [
                    {
                        key: 'land_cover',
                        label: 'Land Cover',
                        demoAvailable: false,
                        disabled: true,
                        children: [
                            { key: 'land_cover_type', label: '地类类型', demoAvailable: false, disabled: true },
                            { key: 'land_cover_roughness', label: '粗糙度', demoAvailable: false, disabled: true },
                            { key: 'land_cover_heterogeneity', label: '异质性', demoAvailable: false, disabled: true }
                        ]
                    }
                ]
            },
            {
                key: 'built-up',
                label: '建成环境',
                expanded: true,
                disabled: false,
                layers: [
                    {
                        key: 'built_up',
                        label: 'Built-up',
                        demoAvailable: false,
                        disabled: true,
                        children: [
                            { key: 'built_up_area', label: '建成区', demoAvailable: false, disabled: true },
                            { key: 'built_up_impervious', label: '不透水面', demoAvailable: false, disabled: true },
                            { key: 'built_up_index', label: '城市化指数', demoAvailable: false, disabled: true }
                        ]
                    }
                ]
            },
            { key: 'thermal', label: '热环境', expanded: false, disabled: false, layers: [] },
            { key: 'hydrology', label: '水文', expanded: false, disabled: false, layers: [] },
            { key: 'coast', label: '海岸', expanded: false, disabled: false, layers: [] },
            { key: 'cryosphere', label: '冰冻圈', expanded: false, disabled: true, layers: [] }
        ],
        geoOntologies: [
            {
                "id": "590720",
                "name": "连州",
                "latlng": "24.8°N, 112.367°E",
                "region": "广东省/清远市",
                "status": "已入库",
                "concepts": 170,
                "relations": 237,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "590820",
                "name": "韶关",
                "latlng": "24.667°N, 113.6°E",
                "region": "广东省/韶关市",
                "status": "已入库",
                "concepts": 170,
                "relations": 237,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "590870",
                "name": "佛冈",
                "latlng": "23.883°N, 113.517°E",
                "region": "广东省/清远市",
                "status": "已入库",
                "concepts": 220,
                "relations": 308,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "590960",
                "name": "连平",
                "latlng": "24.367°N, 114.483°E",
                "region": "广东省/河源市",
                "status": "已入库",
                "concepts": 210,
                "relations": 294,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "591170",
                "name": "梅县",
                "latlng": "24.283°N, 116.067°E",
                "region": "广东省/梅州市",
                "status": "已入库",
                "concepts": 220,
                "relations": 308,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "592780",
                "name": "高要",
                "latlng": "23.05°N, 112.467°E",
                "region": "广东省/肇庆市",
                "status": "已入库",
                "concepts": 230,
                "relations": 322,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "592870",
                "name": "白云国际",
                "latlng": "23.392°N, 113.299°E",
                "region": "广东省/广州市",
                "status": "已入库",
                "concepts": 220,
                "relations": 308,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "592930",
                "name": "河源",
                "latlng": "23.8°N, 114.733°E",
                "region": "广东省/河源市",
                "status": "已入库",
                "concepts": 180,
                "relations": 251,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "593160",
                "name": "汕头",
                "latlng": "23.553°N, 116.505°E",
                "region": "广东省/汕头市",
                "status": "已入库",
                "concepts": 210,
                "relations": 294,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "594560",
                "name": "信宜",
                "latlng": "22.35°N, 110.933°E",
                "region": "广东省/茂名市",
                "status": "已入库",
                "concepts": 210,
                "relations": 294,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "594930",
                "name": "宝安机场",
                "latlng": "22.639°N, 113.811°E",
                "region": "广东省/深圳市",
                "status": "已入库",
                "concepts": 180,
                "relations": 251,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "595010",
                "name": "汕尾",
                "latlng": "22.783°N, 115.367°E",
                "region": "广东省/汕尾市",
                "status": "已入库",
                "concepts": 160,
                "relations": 224,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "596580",
                "name": "湛江",
                "latlng": "21.15°N, 110.3°E",
                "region": "广东省/湛江市",
                "status": "已入库",
                "concepts": 230,
                "relations": 322,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "596630",
                "name": "阳江",
                "latlng": "21.867°N, 111.967°E",
                "region": "广东省/阳江市",
                "status": "已入库",
                "concepts": 180,
                "relations": 251,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            },
            {
                "id": "596730",
                "name": "上川岛",
                "latlng": "21.733°N, 112.767°E",
                "region": "广东省/江门市",
                "status": "已入库",
                "concepts": 180,
                "relations": 251,
                "version": 1,
                "creator": "admin",
                "updatedAt": "2024-07-03"
            }
        ].map((item) => {
            const [provinceName = '', cityName = ''] = String(item.region || '').split('/');
            return {
                ...item,
                provinceName,
                cityName,
                ontologyName: `${item.name}_地理地形`,
                ontologyType: '地理地形',
                systemRole: '陆侧子本体',
                familyColor: 'land',
                isGeoSystemDemo: item.id === '593160'
            };
        }),

        get filteredRegions() {
            if (!this.regionSearchQuery) return this.regions;
            
            const query = this.regionSearchQuery.toLowerCase();
            const filterTree = (nodes) => {
                let result = [];
                for (const node of nodes) {
                    const match = node.name.toLowerCase().includes(query) || node.code.includes(query);
                    const children = node.children ? filterTree(node.children) : [];
                    
                    if (match || children.length > 0) {
                        result.push({
                            ...node,
                            expanded: true, // Auto expand when searching
                            children: children
                        });
                    }
                }
                return result;
            };
            return filterTree(this.regions);
        },

        get geoProvinceOptions() {
            return this.regions[0]?.children || [];
        },

        get geoCityOptions() {
            const province = this.geoProvinceOptions.find((item) => item.code === this.geoProvinceFilterCode);
            return province?.children || [];
        },

        get geoDistrictOptions() {
            return this.geoDistrictOptionsByCity[this.geoCityFilterCode] || [];
        },

        get filteredGeoLayerGroups() {
            if (!this.geoLayerSearchQuery.trim()) return this.geoLayerGroups;

            const query = this.geoLayerSearchQuery.trim().toLowerCase();
            return this.geoLayerGroups
                .map((group) => {
                    const groupMatch = group.label.toLowerCase().includes(query);
                    const layers = (group.layers || [])
                        .map((layer) => {
                            const layerMatch = layer.label.toLowerCase().includes(query);
                            const children = (layer.children || []).filter((child) => child.label.toLowerCase().includes(query));
                            if (groupMatch || layerMatch || children.length > 0) {
                                return {
                                    ...layer,
                                    children: groupMatch || layerMatch ? layer.children : children
                                };
                            }
                            return null;
                        })
                        .filter(Boolean);

                    if (groupMatch || layers.length > 0) {
                        return {
                            ...group,
                            expanded: true,
                            layers: groupMatch ? group.layers : layers
                        };
                    }
                    return null;
                })
                .filter(Boolean);
        },

        getSelectedGeoEntries() {
            if (!this.selectedGeoElement) return [];
            if (this.isSelectedGeoAttributeNode()) {
                return (this.selectedGeoElement.entries || []).slice(0, 1);
            }
            return (this.selectedGeoElement.entries || []).filter((entry) => entry?.key !== '节点描述');
        },

        getSelectedGeoRelations() {
            return this.selectedGeoElement?.relations || [];
        },

        isSelectedGeoAttributeNode() {
            return this.selectedGeoElement?.nodeTypeLabel === '属性节点';
        },

        getGeoPayloadAssetAvailability(payload) {
            if (typeof payload?.assetAvailable === 'boolean') return payload.assetAvailable;

            if (payload?.nodeTypeLabel === '属性节点') {
                return payload?.categoryLabel !== '缺失占位';
            }

            const unavailablePattern = /待补充|待接入|占位示意|--|不适用|未提取/;
            const entryValues = (payload?.entries || []).map((entry) => String(entry?.value || ''));
            if (entryValues.some((value) => unavailablePattern.test(value))) return false;

            return true;
        },

        getGeoAssetPalette(available) {
            return available
                ? {
                    fill: '#0b223b',
                    border: '#38bdf8',
                    label: '#e0f2fe',
                    shadow: 'rgba(56, 189, 248, 0.35)',
                    line: 'rgba(56, 189, 248, 0.58)'
                }
                : {
                    fill: '#1f2937',
                    border: '#94a3b8',
                    label: '#e2e8f0',
                    shadow: 'rgba(148, 163, 184, 0.26)',
                    line: 'rgba(148, 163, 184, 0.46)'
                };
        },

        getGeoAssetGraphGraphics() {
            if (this.geoOntologyViewMode !== 'asset') return [];
            return [
                {
                    type: 'text',
                    left: 24,
                    top: 10,
                    style: {
                        text: '资产视图',
                        fill: '#f8fafc',
                        font: '600 12px sans-serif'
                    }
                },
                {
                    type: 'text',
                    left: 24,
                    top: 30,
                    style: {
                        text: '蓝色：有数据  灰色：缺失数据',
                        fill: '#94a3b8',
                        font: '11px sans-serif'
                    }
                }
            ];
        },

        applyGeoGraphViewStyling(nodes, links) {
            if (this.geoOntologyViewMode !== 'asset') {
                return { nodes, links };
            }

            const nodeAvailability = new Map();
            const styledNodes = nodes.map((node) => {
                const available = this.getGeoPayloadAssetAvailability(node.payload);
                const palette = this.getGeoAssetPalette(available);
                nodeAvailability.set(node.id, available);
                return {
                    ...node,
                    itemStyle: {
                        ...(node.itemStyle || {}),
                        color: palette.fill,
                        borderColor: palette.border,
                        shadowColor: palette.shadow
                    },
                    label: node.label ? {
                        ...node.label,
                        color: palette.label
                    } : node.label
                };
            });

            const styledLinks = links.map((link) => {
                const available = nodeAvailability.get(link.target) !== false;
                const palette = this.getGeoAssetPalette(available);
                return {
                    ...link,
                    lineStyle: {
                        ...(link.lineStyle || {}),
                        color: palette.line
                    }
                };
            });

            return {
                nodes: styledNodes,
                links: styledLinks
            };
        },

        setGeoOntologyViewMode(mode) {
            if (this.geoOntologyViewMode === mode) return;
            this.geoOntologyViewMode = mode;
            this.selectedGeoElement = null;
            this.resetGeoOntologyViewport();
        },

        toggleGeoLayerGroup(groupKey) {
            const target = this.geoLayerGroups.find((group) => group.key === groupKey);
            if (!target || target.disabled) return;
            target.expanded = !target.expanded;
        },

        findGeoLayerConfig(layerKey) {
            for (const group of this.geoLayerGroups) {
                if (group.key === layerKey) return group;
                for (const layer of group.layers || []) {
                    if (layer.key === layerKey) return layer;
                    const child = (layer.children || []).find((item) => item.key === layerKey);
                    if (child) return child;
                }
            }
            return null;
        },

        isGeoLayerActive(layerKey) {
            if (!this.activeGeoLayerKey) return false;
            if (this.activeGeoLayerKey === layerKey) return true;

            for (const group of this.geoLayerGroups) {
                for (const layer of group.layers || []) {
                    if (layer.key === layerKey) {
                        return (layer.children || []).some((child) => child.key === this.activeGeoLayerKey);
                    }
                }
            }
            return false;
        },

        toggleGeoLayer(layerKey, parentKey = null) {
            const layer = this.findGeoLayerConfig(layerKey);
            if (!layer || layer.disabled || layer.demoAvailable === false) return;

            const targetKey = layer.demoLayerKey || layer.key || parentKey;
            this.activeGeoLayerKey = this.activeGeoLayerKey === targetKey ? '' : targetKey;
            this.renderGeoMapOption();
        },

        async copySelectedGeoNode() {
            const payload = this.selectedGeoElement;
            if (!payload || !navigator?.clipboard?.writeText) return;

            const lines = [payload.label];
            if (payload.summary) lines.push(payload.summary);
            for (const entry of this.getSelectedGeoEntries()) {
                lines.push(`${entry.key}：${entry.value}`);
            }

            try {
                await navigator.clipboard.writeText(lines.join('\n'));
            } catch (error) {
                console.error('Failed to copy selected geo node', error);
            }
        },

        get currentGeoRecord() {
            return this.selectedGeoRecord || this.geoOntologies.find(item => item.id === '590870') || this.geoOntologies[0] || null;
        },

        get currentGeoVersionComparison() {
            return this.geoVersionComparisons[`${this.geoVersionNew}|${this.geoVersionOld}`]
                || this.geoVersionComparisons[`${this.geoVersionOld}|${this.geoVersionNew}`]
                || { changeLabel: '当前版本组合暂无差异示例', stats: [] };
        },

        get geoStats() {
            const provinces = new Set();
            let concepts = 0;
            this.geoOntologies.forEach(item => {
                if (item.region) provinces.add(item.region.split(' ')[0]);
                if (item.concepts) concepts += parseInt(item.concepts.toString().replace(/,/g, '')) || 0;
            });
            return {
                stationCount: this.geoOntologies.length,
                provinceCount: provinces.size,
                ontologyCount: this.geoOntologies.length, // assuming 1 ontology per station for now, or you can compute based on unique ontology names
                conceptCount: concepts.toLocaleString()
            };
        },

        get filteredGeoOntologies() {
            const query = this.geoSearchQuery.trim().toLowerCase();
            const selectedProvince = this.geoProvinceOptions.find((item) => item.code === this.geoProvinceFilterCode);
            const selectedCity = this.geoCityOptions.find((item) => item.code === this.geoCityFilterCode);

            return this.geoOntologies.filter((item) => {
                const matchesType = this.geoOntologyTypeFilter === '全部'
                    || this.getGeoOntologyTypeLabel(item) === this.geoOntologyTypeFilter;
                const matchesProvince = !selectedProvince || item.provinceName === selectedProvince.name;
                const matchesCity = !selectedCity || item.cityName === selectedCity.name;

                if (!matchesType) return false;
                if (!matchesProvince || !matchesCity) return false;
                if (!query) return true;

                const haystack = [
                    this.getGeoOntologyDisplayName(item),
                    this.getGeoOntologyTypeLabel(item),
                    item.name,
                    item.id,
                    item.region
                ].join(' ').toLowerCase();

                return haystack.includes(query);
            });
        },

        isGeoSystemDemoStation(station = null) {
            const target = station || this.activeGeoStation;
            return target?.id === this.geoSystemDemoStationId;
        },

        getGeoOntologyDisplayName(item) {
            return item?.ontologyName || `${item?.name || ''}_地理地形`;
        },

        getGeoOntologyTypeLabel(item) {
            return item?.ontologyType || '地理地形';
        },

        getGeoOntologySystemRole(item) {
            return item?.systemRole || '陆侧子本体';
        },

        getGeoAnalysisTitle() {
            if (!this.activeGeoStation) return '';
            return this.activeGeoStation.name;
        },

        getGeoAnalysisSubtitle() {
            if (!this.activeGeoStation) return '请选择地图点位';
            if (this.isGeoSystemDemoStation()) {
                return `${this.activeGeoStation.region} / 站点ID ${this.activeGeoStation.id} / 左陆侧真实地理本体，右海侧未来海洋气候本体占位示意`;
            }
            return `${this.activeGeoStation.region} / 站点ID ${this.activeGeoStation.id}`;
        },

        formatGeoValue(value, digits = 2) {
            if (value === null || value === undefined || value === '') return '--';
            if (typeof value === 'number') {
                if (Number.isInteger(value)) return String(value);
                return value.toFixed(digits).replace(/\.?0+$/, '');
            }
            return String(value);
        },

        formatGeoPercent(value, digits = 1) {
            if (value === null || value === undefined || Number.isNaN(Number(value))) return '--';
            return `${(Number(value) * 100).toFixed(digits)}%`;
        },

        formatGeoBoolean(value, yes = '是', no = '否', empty = '--') {
            if (value === null || value === undefined || value === '') return empty;
            return value ? yes : no;
        },

        createGeoAttributeItem(key, name, value, options = {}) {
            const fallback = options.fallback ?? '--';
            const normalizedValue = value === null || value === undefined || value === ''
                ? fallback
                : value;
            const displayValue = String(normalizedValue);
            const unavailableValues = new Set(['--', '未提取', '不适用']);

            return {
                key,
                name,
                value: displayValue,
                available: options.available ?? !unavailableValues.has(displayValue),
                source: options.source || ''
            };
        },

        isGeoOntologyMissingValue(value) {
            const normalizedValue = String(value ?? '').trim();
            if (!normalizedValue) return true;

            const missingValues = new Set([
                '--',
                '空',
                '空/不适用',
                '不适用',
                'not_applicable',
                'not applicable',
                '未提取',
                '待补充',
                '待接入',
                '占位示意',
                'null',
                'undefined',
                'N/A',
                'n/a'
            ]);

            return missingValues.has(normalizedValue);
        },

        filterGeoHierarchyForOntologyView(hierarchy) {
            if (!hierarchy) return hierarchy;

            const filteredDimensions = (hierarchy.dimensions || [])
                .map((dimension) => {
                    const visibleChildren = (dimension.children || [])
                        .map((child) => {
                            const visibleAttributes = (child.attributes || [])
                                .filter((attribute) => !this.isGeoOntologyMissingValue(attribute?.value));

                            if (visibleAttributes.length === 0) return null;

                            const visibleAttributeNames = new Set(visibleAttributes.map((attribute) => attribute.name));

                            return {
                                ...child,
                                attributes: visibleAttributes,
                                assetAvailable: visibleAttributes.length > 0 && visibleAttributes.every((attribute) => attribute.available),
                                highlights: (child.highlights || [])
                                    .filter((item) => visibleAttributeNames.has(item?.label))
                                    .slice(0, 2),
                                entries: (child.entries || [])
                                    .filter((entry) => entry?.key === '节点描述' || visibleAttributeNames.has(entry?.key)),
                                relations: (child.relations || []).map((relation) => (
                                    relation?.label === '属性节点'
                                        ? { ...relation, target: `${visibleAttributes.length} 项` }
                                        : relation
                                ))
                            };
                        })
                        .filter(Boolean);

                    if (visibleChildren.length === 0) return null;

                    return {
                        ...dimension,
                        children: visibleChildren,
                        assetAvailable: visibleChildren.length > 0 && visibleChildren.every((child) => child.assetAvailable),
                        highlights: (dimension.highlights || []).map((item) => (
                            item?.label === '三级维度数'
                                ? { ...item, value: `${visibleChildren.length} 项` }
                                : item
                        )),
                        relations: (dimension.relations || []).map((relation) => (
                            relation?.label === '第三层维度'
                                ? { ...relation, target: `${visibleChildren.length} 项` }
                                : relation
                        ))
                    };
                })
                .filter(Boolean);

            return {
                ...hierarchy,
                station: {
                    ...hierarchy.station,
                    assetAvailable: filteredDimensions.length > 0 && filteredDimensions.every((dimension) => dimension.assetAvailable),
                    relations: (hierarchy.station?.relations || []).map((relation) => (
                        relation?.label === '二层维度'
                            ? { ...relation, target: `${filteredDimensions.length} 个第二层维度节点` }
                            : relation
                    ))
                },
                dimensions: filteredDimensions
            };
        },

        buildGeoLandCompositionSummary(fractions = {}, limit = 3) {
            const labels = {
                built_up: '建成',
                tree_cover: '林地',
                water: '水体',
                cropland: '农地',
                grassland: '草地',
                wetland: '湿地',
                bare_ground: '裸地',
                snow_ice: '雪冰'
            };

            return Object.entries(labels)
                .map(([key, label]) => ({ label, value: Number(fractions[key] || 0) }))
                .filter((item) => item.value > 0)
                .sort((a, b) => b.value - a.value)
                .slice(0, limit)
                .map((item) => `${item.label} ${this.formatGeoPercent(item.value)}`)
                .join('；') || '--';
        },

        buildGeoHierarchyAttributeMap(data) {
            const stationIdentity = data.station_identity;
            const terrainObserved = data.phase1_raster_ontology.terrain_structure.layers.observed;
            const terrainDerived = data.phase1_raster_ontology.terrain_structure.layers.derived;
            const terrainLabels = data.algorithm_group_station_terrain?.had_isd_labels || {};
            const landCover = data.phase1_raster_ontology.land_surface_cover.layers.derived;
            const landCoverPoint = landCover.point_sample || {};
            const urbanization = data.phase1_raster_ontology.urbanization;
            const thermal = data.phase1_raster_ontology.thermal_environment.layers;
            const waterBody = data.phase2_raster_ontology.water_body.layers;
            const coastal = data.phase2_raster_ontology.coastal_environment.layers;
            const cryosphere = data.phase2_raster_ontology.cryosphere || {};
            const cryosphereFallback = cryosphere.applicable === false ? '不适用' : '--';

            return {
                elevation: [
                    this.createGeoAttributeItem('station_elevation', '站址海拔', `${this.formatGeoValue(stationIdentity.elevation_m, 1)} m`, { source: 'station_identity.elevation_m' }),
                    this.createGeoAttributeItem('mean_elevation_5km', '5 公里平均海拔', `${this.formatGeoValue(terrainObserved.by_scale.radius_5000m.elevation.mean_m, 2)} m`, { source: 'phase1_raster_ontology.terrain_structure.layers.observed.by_scale.radius_5000m.elevation.mean_m' }),
                    this.createGeoAttributeItem('elevation_range_10km', '10 公里高差', `${this.formatGeoValue(terrainDerived.by_scale.radius_10000m.elevation.range_m, 1)} m`, { source: 'phase1_raster_ontology.terrain_structure.layers.derived.by_scale.radius_10000m.elevation.range_m' })
                ],
                slope_aspect: [
                    this.createGeoAttributeItem('point_slope', '站址坡度', `${this.formatGeoValue(terrainDerived.point_sample.slope_horn_deg, 2)}°`, { source: 'phase1_raster_ontology.terrain_structure.layers.derived.point_sample.slope_horn_deg' }),
                    this.createGeoAttributeItem('point_aspect', '坡向（如北 / 东北）', terrainDerived.point_sample.aspect_exposure_cn || '--', { source: 'phase1_raster_ontology.terrain_structure.layers.derived.point_sample.aspect_exposure_cn' }),
                    this.createGeoAttributeItem('mean_slope_5km', '5 公里平均坡度', `${this.formatGeoValue(terrainDerived.by_scale.radius_5000m.slope.mean_deg, 2)}°`, { source: 'phase1_raster_ontology.terrain_structure.layers.derived.by_scale.radius_5000m.slope.mean_deg' })
                ],
                terrain_index: [
                    this.createGeoAttributeItem('tpi_5km', '地形位置指数 TPI', `${this.formatGeoValue(terrainDerived.by_scale.radius_5000m.terrain_indices.tpi_m, 1)} m`, { source: 'phase1_raster_ontology.terrain_structure.layers.derived.by_scale.radius_5000m.terrain_indices.tpi_m' }),
                    this.createGeoAttributeItem('rix_5km', '地形破碎度 RIX', this.formatGeoValue(terrainDerived.by_scale.radius_5000m.terrain_indices.rix, 4), { source: 'phase1_raster_ontology.terrain_structure.layers.derived.by_scale.radius_5000m.terrain_indices.rix' }),
                    this.createGeoAttributeItem('terrain_complexity', '破碎度等级', terrainLabels.terrain_complexity_cn || '--', { source: 'algorithm_group_station_terrain.had_isd_labels.terrain_complexity_cn' })
                ],
                aspect_exposure: [
                    this.createGeoAttributeItem('aspect_exposure_level', '八向地形暴露等级', terrainDerived.point_sample.aspect_exposure_cn || '--', { source: 'phase1_raster_ontology.terrain_structure.layers.derived.point_sample.aspect_exposure_cn' }),
                    this.createGeoAttributeItem('open_block_hint', '相对开阔 / 阻挡说明', terrainLabels.is_highland === false ? '非高地，局地受阻挡' : '--', { source: 'algorithm_group_station_terrain.had_isd_labels.is_highland' })
                ],
                valley_canyon: [
                    this.createGeoAttributeItem('valley_orientation', '谷走向', '--', { source: '' }),
                    this.createGeoAttributeItem('valley_type', '收缩 / 开阔类型', '--', { source: '' }),
                    this.createGeoAttributeItem('fetch_distance_max', '最大风区距离', '--', { source: '' })
                ],
                micro_topography: [
                    this.createGeoAttributeItem('micro_relief_position', '相对位置（坡上 / 坡下等）', terrainDerived.by_scale.radius_5000m.terrain_indices.tpi_m < 0 ? '坡下 / 谷地侧' : '坡上 / 岭部侧', { source: 'phase1_raster_ontology.terrain_structure.layers.derived.by_scale.radius_5000m.terrain_indices.tpi_m' }),
                    this.createGeoAttributeItem('ridge_block_level', '岭阻挡等级', terrainLabels.terrain_complexity_cn || '--', { source: 'algorithm_group_station_terrain.had_isd_labels.terrain_complexity_cn' })
                ],
                radiation_micro_env: [
                    this.createGeoAttributeItem('sky_view_factor', '天空可视因子', '--', { source: '' }),
                    this.createGeoAttributeItem('openness_level', '开阔度等级', '--', { source: '' }),
                    this.createGeoAttributeItem('slope_contrast', '阴阳坡对比', '--', { source: '' })
                ],
                point_type: [
                    this.createGeoAttributeItem('land_type', '点址土地类型', landCoverPoint.lulc_name_cn || '--', { source: 'phase1_raster_ontology.land_surface_cover.layers.derived.point_sample.lulc_name_cn' }),
                    this.createGeoAttributeItem('match_dominant_2km', '是否与 2 公里主导类一致', this.formatGeoBoolean(landCoverPoint.matches_dominant_2km), { source: 'phase1_raster_ontology.land_surface_cover.layers.derived.point_sample.matches_dominant_2km' })
                ],
                land_composition: [
                    this.createGeoAttributeItem('land_composition_2km', '2 公里林 / 城 / 水 / 农等占比（选 2~3 类）', this.buildGeoLandCompositionSummary(landCover.by_scale.radius_2000m.fractions), { source: 'phase1_raster_ontology.land_surface_cover.layers.derived.by_scale.radius_2000m.fractions' })
                ],
                heterogeneity: [
                    this.createGeoAttributeItem('shannon_entropy_2km', '香农熵', this.formatGeoValue(landCover.by_scale.radius_2000m.landscape_metrics.shannon_entropy, 4), { source: 'phase1_raster_ontology.land_surface_cover.layers.derived.by_scale.radius_2000m.landscape_metrics.shannon_entropy' }),
                    this.createGeoAttributeItem('heterogeneity_level', '异质性等级', landCover.by_scale.radius_2000m.landscape_metrics.heterogeneity_label_cn || '--', { source: 'phase1_raster_ontology.land_surface_cover.layers.derived.by_scale.radius_2000m.landscape_metrics.heterogeneity_label_cn' })
                ],
                roughness: [
                    this.createGeoAttributeItem('roughness_length', '粗糙度长度 z0', `${this.formatGeoValue(landCover.aerodynamics.area_weighted_roughness_2km_m, 3)} m`, { source: 'phase1_raster_ontology.land_surface_cover.layers.derived.aerodynamics.area_weighted_roughness_2km_m' }),
                    this.createGeoAttributeItem('wind_shear_exponent', '风切变指数', this.formatGeoValue(landCover.aerodynamics.wind_shear_exponent, 3), { source: 'phase1_raster_ontology.land_surface_cover.layers.derived.aerodynamics.wind_shear_exponent' }),
                    this.createGeoAttributeItem('is_airport', '是否机场站', this.formatGeoBoolean(landCover.aerodynamics.is_airport), { source: 'phase1_raster_ontology.land_surface_cover.layers.derived.aerodynamics.is_airport' })
                ],
                impervious_surface: [
                    this.createGeoAttributeItem('impervious_fraction_2km', '2 公里不透水占比', this.formatGeoPercent(urbanization.impervious_surface.layers.derived.by_scale.radius_2000m.coverage_fraction), { source: 'phase1_raster_ontology.urbanization.impervious_surface.layers.derived.by_scale.radius_2000m.coverage_fraction' }),
                    this.createGeoAttributeItem('first_impervious_year_2km', '平均首次不透水年份', this.formatGeoValue(urbanization.impervious_surface.layers.derived.by_scale.radius_2000m.mean_first_impervious_year, 1), { source: 'phase1_raster_ontology.urbanization.impervious_surface.layers.derived.by_scale.radius_2000m.mean_first_impervious_year' })
                ],
                built_up_area: [
                    this.createGeoAttributeItem('built_fraction_2km', '2 公里建成占比', this.formatGeoPercent(urbanization.built_surface.layers.derived.by_scale.radius_2000m.built_up_fraction), { source: 'phase1_raster_ontology.urbanization.built_surface.layers.derived.by_scale.radius_2000m.built_up_fraction' }),
                    this.createGeoAttributeItem('built_level_2km', '建成区等级', urbanization.built_surface.layers.derived.by_scale.radius_2000m.built_surface_label_cn || '--', { source: 'phase1_raster_ontology.urbanization.built_surface.layers.derived.by_scale.radius_2000m.built_surface_label_cn' })
                ],
                urbanization_index: [
                    this.createGeoAttributeItem('urbanization_index', '正式融合指数', this.formatGeoValue(urbanization.urbanization_index, 3), { source: 'phase1_raster_ontology.urbanization.urbanization_index' }),
                    this.createGeoAttributeItem('urbanization_index_interim', '过渡指数（单源）', this.formatGeoValue(urbanization.urbanization_index_interim, 4), { source: 'phase1_raster_ontology.urbanization.urbanization_index_interim' })
                ],
                lst_climatology: [
                    this.createGeoAttributeItem('annual_lst_mean', '年均地表温度', `${this.formatGeoValue(thermal.observed.lst_climatology.annual.mean_k, 2)} K`, { source: 'phase1_raster_ontology.thermal_environment.layers.observed.lst_climatology.annual.mean_k' }),
                    this.createGeoAttributeItem('diurnal_range', '日较差等级', `${this.formatGeoValue(thermal.derived.lst_climatology.annual.diurnal_range_k, 2)} K`, { source: 'phase1_raster_ontology.thermal_environment.layers.derived.lst_climatology.annual.diurnal_range_k' }),
                    this.createGeoAttributeItem('annual_range', '年变率等级', `${this.formatGeoValue(thermal.derived.lst_climatology.annual.annual_range_k, 2)} K`, { source: 'phase1_raster_ontology.thermal_environment.layers.derived.lst_climatology.annual.annual_range_k' })
                ],
                uhi_intensity: [
                    this.createGeoAttributeItem('uhi_annual_mean', '年均 / 夏昼热岛强度', `${this.formatGeoValue(thermal.derived.surface_uhi.intensity_annual_mean_k, 2)} K / ${this.formatGeoValue(thermal.derived.surface_uhi.intensity_summer_day_k, 2)} K`, { source: 'phase1_raster_ontology.thermal_environment.layers.derived.surface_uhi.intensity_annual_mean_k + intensity_summer_day_k' }),
                    this.createGeoAttributeItem('uhi_category', '热岛等级', thermal.derived.surface_uhi.uhi_category_cn || '--', { source: 'phase1_raster_ontology.thermal_environment.layers.derived.surface_uhi.uhi_category_cn' }),
                    this.createGeoAttributeItem('uhi_confidence', '结果是否可信', this.formatGeoBoolean(thermal.derived.surface_uhi.confidence_assessment.is_confident, '可信', '谨慎使用'), { source: 'phase1_raster_ontology.thermal_environment.layers.derived.surface_uhi.confidence_assessment.is_confident' })
                ],
                blh: [
                    this.createGeoAttributeItem('boundary_layer_mean', '年均边界层高度', '--', { source: '' }),
                    this.createGeoAttributeItem('boundary_layer_std', '标准差（可选）', '--', { source: '' })
                ],
                t2m_skt: [
                    this.createGeoAttributeItem('t2m_annual_mean', '2 米气温年均', '--', { source: '' }),
                    this.createGeoAttributeItem('skt_annual_mean', '地表肤温年均', `${this.formatGeoValue(thermal.observed.lst_climatology.annual.mean_k, 2)} K`, { source: 'phase1_raster_ontology.thermal_environment.layers.observed.lst_climatology.annual.mean_k' }),
                    this.createGeoAttributeItem('t2m_skt_diff', '二者温差', '--', { source: '' })
                ],
                stability: [
                    this.createGeoAttributeItem('stability_annual_mean', '年均层结', '--', { source: '' }),
                    this.createGeoAttributeItem('stability_daytime', '白天层结', '--', { source: '' }),
                    this.createGeoAttributeItem('stability_nighttime', '夜间层结', '--', { source: '' })
                ],
                lake_reservoir: [
                    this.createGeoAttributeItem('lake_name', '湖库名称', waterBody.observed.nearest_lake_entity.semantic.nearest_lake_name || '--', { source: 'phase2_raster_ontology.water_body.layers.observed.nearest_lake_entity.semantic.nearest_lake_name' }),
                    this.createGeoAttributeItem('lake_type', '类型（天然湖 / 水库）', waterBody.observed.nearest_lake_entity.semantic.nearest_lake_type_label_cn || '--', { source: 'phase2_raster_ontology.water_body.layers.observed.nearest_lake_entity.semantic.nearest_lake_type_label_cn' }),
                    this.createGeoAttributeItem('lake_distance', '距离', `${this.formatGeoValue(waterBody.observed.nearest_lake_entity.spatial_topology.distance_to_nearest_lake_km, 2)} km`, { source: 'phase2_raster_ontology.water_body.layers.observed.nearest_lake_entity.spatial_topology.distance_to_nearest_lake_km' })
                ],
                lake_fraction: [
                    this.createGeoAttributeItem('lake_fraction_5km', '5 公里湖面占比', this.formatGeoPercent(waterBody.observed.lake_reservoir_by_scale.radius_5000m.lake_water_fraction, 2), { source: 'phase2_raster_ontology.water_body.layers.observed.lake_reservoir_by_scale.radius_5000m.lake_water_fraction' }),
                    this.createGeoAttributeItem('lake_fraction_10km', '10 公里湖面占比', this.formatGeoPercent(waterBody.observed.lake_reservoir_by_scale.radius_10000m.lake_water_fraction, 2), { source: 'phase2_raster_ontology.water_body.layers.observed.lake_reservoir_by_scale.radius_10000m.lake_water_fraction' })
                ],
                wetland: [
                    this.createGeoAttributeItem('wetland_fraction_500m', '500 米湿地占比', this.formatGeoPercent(waterBody.observed.natural_wetland_by_scale.radius_500m.wetland_fraction_glwd, 2), { source: 'phase2_raster_ontology.water_body.layers.observed.natural_wetland_by_scale.radius_500m.wetland_fraction_glwd' }),
                    this.createGeoAttributeItem('wetland_fraction_5km', '5 公里湿地占比', this.formatGeoPercent(waterBody.observed.natural_wetland_by_scale.radius_5000m.wetland_fraction_glwd, 2), { source: 'phase2_raster_ontology.water_body.layers.observed.natural_wetland_by_scale.radius_5000m.wetland_fraction_glwd' })
                ],
                river: [
                    this.createGeoAttributeItem('river_name', '河名', waterBody.observed.nearest_any_river.nearest_any_river_name || '--', { source: 'phase2_raster_ontology.water_body.layers.observed.nearest_any_river.nearest_any_river_name' }),
                    this.createGeoAttributeItem('river_distance', '距离', `${this.formatGeoValue(waterBody.observed.nearest_any_river.distance_to_any_river_km, 2)} km`, { source: 'phase2_raster_ontology.water_body.layers.observed.nearest_any_river.distance_to_any_river_km' }),
                    this.createGeoAttributeItem('river_discharge', '流量（如有）', `${this.formatGeoValue(waterBody.observed.nearest_any_river.nearest_any_river_discharge_cms, 3)} m3/s`, { source: 'phase2_raster_ontology.water_body.layers.observed.nearest_any_river.nearest_any_river_discharge_cms' })
                ],
                river_network: [
                    this.createGeoAttributeItem('river_density_5km', '5 公里河网密度', this.formatGeoValue(waterBody.observed.river_network.r5km_river_length_density_km_per_km2, 4), { source: 'phase2_raster_ontology.water_body.layers.observed.river_network.r5km_river_length_density_km_per_km2' }),
                    this.createGeoAttributeItem('river_influence', '是否受河流影响', this.formatGeoBoolean(waterBody.observed.river_network.is_river_influenced), { source: 'phase2_raster_ontology.water_body.layers.observed.river_network.is_river_influenced' })
                ],
                water_semantics: [
                    this.createGeoAttributeItem('water_semantic_type', '水体类型概括', waterBody.derived.semantic_labels.water_body_type_cn || '--', { source: 'phase2_raster_ontology.water_body.layers.derived.semantic_labels.water_body_type_cn' }),
                    this.createGeoAttributeItem('lake_wetland_influence', '是否受湖 / 湿地影响', waterBody.derived.semantic_labels.is_lake_influenced || waterBody.derived.semantic_labels.is_wetland_influenced ? '是' : '否', { source: 'phase2_raster_ontology.water_body.layers.derived.semantic_labels.is_lake_influenced + is_wetland_influenced' })
                ],
                distance_orientation: [
                    this.createGeoAttributeItem('distance_to_coast', '距海距离', `${this.formatGeoValue(coastal.observed.distance_to_coast_km, 2)} km`, { source: 'phase2_raster_ontology.coastal_environment.layers.observed.distance_to_coast_km' }),
                    this.createGeoAttributeItem('coastal_orientation', '海岸方位', coastal.derived.semantic_labels.coastal_orientation_class_cn || '--', { source: 'phase2_raster_ontology.coastal_environment.layers.derived.semantic_labels.coastal_orientation_class_cn' })
                ],
                exposure_band: [
                    this.createGeoAttributeItem('coastal_band', '50/100/200 公里内是否沿海', `50km ${this.formatGeoBoolean(coastal.derived.distance_bands.is_coastal_50km)} / 100km ${this.formatGeoBoolean(coastal.derived.distance_bands.is_coastal_100km)} / 200km ${this.formatGeoBoolean(coastal.derived.distance_bands.is_coastal_200km)}`, { source: 'phase2_raster_ontology.coastal_environment.layers.derived.distance_bands' }),
                    this.createGeoAttributeItem('coastal_exposure_level', '暴露等级', coastal.derived.distance_bands.coastal_exposure_cn || '--', { source: 'phase2_raster_ontology.coastal_environment.layers.derived.distance_bands.coastal_exposure_cn' })
                ],
                coastal_semantics: [
                    this.createGeoAttributeItem('truly_coastal', '是否真正海岸站', this.formatGeoBoolean(coastal.derived.semantic_labels.is_truly_coastal), { source: 'phase2_raster_ontology.coastal_environment.layers.derived.semantic_labels.is_truly_coastal' }),
                    this.createGeoAttributeItem('coastal_morphology', '岸线形态', coastal.derived.semantic_labels.coastal_morphology_hint_cn || '--', { source: 'phase2_raster_ontology.coastal_environment.layers.derived.semantic_labels.coastal_morphology_hint_cn' }),
                    this.createGeoAttributeItem('coastal_fetch', '风区距离', `${this.formatGeoValue(coastal.derived.semantic_labels.coastal_fetch_proxy_km, 2)} km`, { source: 'phase2_raster_ontology.coastal_environment.layers.derived.semantic_labels.coastal_fetch_proxy_km' })
                ],
                applicability: [
                    this.createGeoAttributeItem('cryosphere_applicable', '本区是否适用', cryosphere.applicable === false ? '不适用' : this.formatGeoBoolean(cryosphere.applicable), { source: 'phase2_raster_ontology.cryosphere.applicable', available: cryosphere.applicable !== false }),
                    this.createGeoAttributeItem('cryosphere_status', '提取状态', cryosphere.extraction_status || '--', { source: 'phase2_raster_ontology.cryosphere.extraction_status', available: cryosphere.applicable !== false }),
                    this.createGeoAttributeItem('cryosphere_year', '数据年份', cryosphere.data_year ? String(cryosphere.data_year) : cryosphereFallback, { source: 'phase2_raster_ontology.cryosphere.data_year', available: false })
                ],
                snow_cover: [
                    this.createGeoAttributeItem('snow_days', '积雪天数', cryosphereFallback, { source: 'phase2_raster_ontology.cryosphere.layers', available: false }),
                    this.createGeoAttributeItem('snow_cover_ratio', '冬季覆盖率（仅适用区）', cryosphereFallback, { source: 'phase2_raster_ontology.cryosphere.layers', available: false })
                ],
                freeze_thaw: [
                    this.createGeoAttributeItem('freeze_thaw_days', '冻融天数（仅适用区）', cryosphereFallback, { source: 'phase2_raster_ontology.cryosphere.layers', available: false })
                ]
            };
        },

        cloneGeoSampleData(station) {
            const data = JSON.parse(JSON.stringify(rawStationData590870));
            const [province = data.station_identity.province, city = data.station_identity.city] = (station?.region || '').split('/');
            const [latText = '', lonText = ''] = (station?.latlng || '').split(',');
            const lat = parseFloat(latText);
            const lon = parseFloat(lonText);

            if (station) {
                data.station_identity.entity_id = `CHN_${station.id}`;
                data.station_identity.station_id = station.id;
                data.station_identity.chinese_name = station.name;
                data.station_identity.station_name = station.name;
                data.station_identity.province = province || data.station_identity.province;
                data.station_identity.city = city || data.station_identity.city;
                data.station_identity.lat = Number.isFinite(lat) ? lat : data.station_identity.lat;
                data.station_identity.lon = Number.isFinite(lon) ? lon : data.station_identity.lon;
            }

            return data;
        },

        buildGeoElementPayloads(data, station) {
            const terrainObserved = data.phase1_raster_ontology.terrain_structure.layers.observed;
            const terrainDerived = data.phase1_raster_ontology.terrain_structure.layers.derived;
            const landCover = data.phase1_raster_ontology.land_surface_cover.layers.derived;
            const urbanization = data.phase1_raster_ontology.urbanization;
            const thermal = data.phase1_raster_ontology.thermal_environment.layers;
            const waterBody = data.phase2_raster_ontology.water_body.layers.observed;
            const coastal = data.phase2_raster_ontology.coastal_environment.layers;
            const stationIdentity = data.station_identity;
            const environment = data.station_environment_class;

            return {
                station_identity: {
                    key: 'station_identity',
                    label: '站点身份',
                    nodeTypeLabel: '站点节点',
                    categoryLabel: '中心站点',
                    summary: `${stationIdentity.chinese_name} 站位于 ${stationIdentity.province}${stationIdentity.city}，当前以该站点作为地理要素本体示例。`,
                    highlights: [
                        { label: '站点ID', value: stationIdentity.station_id },
                        { label: '海拔', value: `${this.formatGeoValue(stationIdentity.elevation_m, 1)} m` },
                        { label: '坐标', value: `${this.formatGeoValue(stationIdentity.lat, 1)}°N / ${this.formatGeoValue(stationIdentity.lon, 1)}°E` }
                    ],
                    entries: [
                        { key: '实体ID', value: stationIdentity.entity_id },
                        { key: '区域', value: `${stationIdentity.province} / ${stationIdentity.city}` },
                        { key: '数据质量', value: stationIdentity.data_quality_cn || stationIdentity.data_quality },
                        { key: '坐标系', value: stationIdentity.crs },
                        { key: '海拔基准', value: stationIdentity.elevation_datum },
                        { key: '更新时间', value: station?.updatedAt || '2024-07-03' }
                    ]
                },
                station_environment_class: {
                    key: 'station_environment_class',
                    label: '站点环境分类',
                    nodeTypeLabel: '分类节点',
                    categoryLabel: '站点画像',
                    summary: `从地形、地表覆盖与城市化程度三维度刻画 ${stationIdentity.chinese_name} 站的综合环境标签。`,
                    highlights: [
                        { label: '地形', value: environment.terrain_type_cn },
                        { label: '下垫面', value: environment.surface_type_cn },
                        { label: '城市化', value: environment.urban_level_cn }
                    ],
                    entries: [
                        { key: '综合标签', value: environment.composite_label_cn },
                        { key: '地形类型', value: environment.terrain_type_cn },
                        { key: '地表类型', value: environment.surface_type_cn },
                        { key: '城市化等级', value: environment.urban_level_cn }
                    ]
                },
                terrain_structure: {
                    key: 'terrain_structure',
                    label: '地形高程',
                    nodeTypeLabel: '栅格要素',
                    categoryLabel: '地形结构',
                    summary: `基于 ${data.phase1_raster_ontology.terrain_structure.source} 提取多尺度高程、坡度与地形起伏指标。`,
                    highlights: [
                        { label: '500m均高', value: `${this.formatGeoValue(terrainObserved.by_scale.radius_500m.elevation.mean_m, 1)} m` },
                        { label: '5km高差', value: `${this.formatGeoValue(terrainDerived.by_scale.radius_5000m.elevation.range_m, 1)} m` },
                        { label: '坡度均值', value: `${this.formatGeoValue(terrainDerived.by_scale.radius_5000m.slope.mean_deg, 2)}°` }
                    ],
                    entries: [
                        { key: '点位高程', value: `${this.formatGeoValue(terrainObserved.point_sample.dem_elevation_m, 1)} m` },
                        { key: '500m标准差', value: `${this.formatGeoValue(terrainObserved.by_scale.radius_500m.elevation.std_m, 2)} m` },
                        { key: '5km主坡向', value: terrainDerived.by_scale.radius_5000m.slope.aspect_dominant_dir_cn },
                        { key: '10km平均坡度', value: `${this.formatGeoValue(terrainDerived.by_scale.radius_10000m.slope.mean_deg, 2)}°` },
                        { key: '5km RIX', value: this.formatGeoValue(terrainDerived.by_scale.radius_5000m.terrain_indices.rix, 4) },
                        { key: '数据年份', value: data.phase1_raster_ontology.terrain_structure.data_year }
                    ]
                },
                land_surface_cover: {
                    key: 'land_surface_cover',
                    label: '地表覆盖 LULC',
                    nodeTypeLabel: '栅格要素',
                    categoryLabel: '地表覆被',
                    summary: `以 2km 与 5km 尺度综合分析站点周边主要覆被类型，当前主导类别为 ${landCover.by_scale.radius_2000m.landscape_metrics.dominant_class_cn}。`,
                    highlights: [
                        { label: '主导覆被', value: landCover.by_scale.radius_2000m.landscape_metrics.dominant_class_cn },
                        { label: '2km建成区', value: this.formatGeoPercent(landCover.by_scale.radius_2000m.fractions.built_up) },
                        { label: '5km森林占比', value: this.formatGeoPercent(landCover.by_scale.radius_5000m.fractions.tree_cover) }
                    ],
                    entries: [
                        { key: '点位类别', value: landCover.point_sample.lulc_name_cn },
                        { key: '500m主导类别', value: landCover.by_scale.radius_500m.landscape_metrics.dominant_class_cn },
                        { key: '2km景观熵', value: this.formatGeoValue(landCover.by_scale.radius_2000m.landscape_metrics.shannon_entropy, 4) },
                        { key: '粗糙度长度', value: `${this.formatGeoValue(landCover.aerodynamics.area_weighted_roughness_2km_m, 3)} m` },
                        { key: '风切变指数', value: this.formatGeoValue(landCover.aerodynamics.wind_shear_exponent, 3) },
                        { key: '异质性', value: landCover.by_scale.radius_2000m.landscape_metrics.heterogeneity_label_cn }
                    ]
                },
                urbanization: {
                    key: 'urbanization',
                    label: '城市化环境',
                    nodeTypeLabel: '派生指标',
                    categoryLabel: '人类活动',
                    summary: `综合不透水面、建成区比例与城市化指数，用于评估站点周边人工地表影响。`,
                    highlights: [
                        { label: '城市化指数', value: this.formatGeoValue(urbanization.urbanization_index, 3) },
                        { label: '2km不透水', value: this.formatGeoPercent(urbanization.impervious_surface.layers.derived.by_scale.radius_2000m.coverage_fraction) },
                        { label: '2km建成等级', value: urbanization.built_surface.layers.derived.by_scale.radius_2000m.built_surface_label_cn }
                    ],
                    entries: [
                        { key: '500m建成比例', value: this.formatGeoPercent(urbanization.built_surface.layers.derived.by_scale.radius_500m.built_up_fraction) },
                        { key: '2km建成比例', value: this.formatGeoPercent(urbanization.built_surface.layers.derived.by_scale.radius_2000m.built_up_fraction) },
                        { key: '5km建成比例', value: this.formatGeoPercent(urbanization.built_surface.layers.derived.by_scale.radius_5000m.built_up_fraction) },
                        { key: '2km首年不透水均值', value: urbanization.impervious_surface.layers.derived.by_scale.radius_2000m.mean_first_impervious_year },
                        { key: '数据年份', value: urbanization.built_surface.data_year },
                        { key: '中间指数', value: this.formatGeoValue(urbanization.urbanization_index_interim, 4) }
                    ]
                },
                thermal_environment: {
                    key: 'thermal_environment',
                    label: '热环境',
                    nodeTypeLabel: '气候要素',
                    categoryLabel: '热力特征',
                    summary: `热环境模块汇集地表温度年内变化、昼夜温差及热岛强度指标。`,
                    highlights: [
                        { label: '年均地表温度', value: `${this.formatGeoValue(thermal.observed.lst_climatology.annual.mean_k, 2)} K` },
                        { label: '热岛强度', value: `${this.formatGeoValue(thermal.derived.surface_uhi.intensity_annual_mean_k, 2)} K` },
                        { label: '热岛等级', value: thermal.derived.surface_uhi.uhi_category_cn }
                    ],
                    entries: [
                        { key: '夏季白天地表温度', value: `${this.formatGeoValue(thermal.observed.lst_climatology.by_season.summer.daytime_mean_k, 2)} K` },
                        { key: '夏季夜间地表温度', value: `${this.formatGeoValue(thermal.observed.lst_climatology.by_season.summer.nighttime_mean_k, 2)} K` },
                        { key: '年内振幅', value: `${this.formatGeoValue(thermal.derived.lst_climatology.annual.annual_range_k, 2)} K` },
                        { key: '昼夜温差', value: `${this.formatGeoValue(thermal.derived.lst_climatology.annual.diurnal_range_k, 2)} K` },
                        { key: '可信度', value: thermal.derived.surface_uhi.confidence_assessment.is_confident ? '高' : '低' },
                        { key: '状态', value: data.phase1_raster_ontology.thermal_environment.uhi_status }
                    ]
                },
                water_body: {
                    key: 'water_body',
                    label: '水体环境',
                    nodeTypeLabel: '水文要素',
                    categoryLabel: '邻近水系',
                    summary: `展示站点周边湖库、河流与湿地拓扑关系，评估水体对站点环境的潜在影响。`,
                    highlights: [
                        { label: '最近湖库', value: waterBody.nearest_lake_entity.semantic.nearest_lake_name },
                        { label: '距湖库', value: `${this.formatGeoValue(waterBody.nearest_lake_entity.spatial_topology.distance_to_nearest_lake_km, 2)} km` },
                        { label: '距河流', value: `${this.formatGeoValue(waterBody.nearest_any_river.distance_to_any_river_km, 2)} km` }
                    ],
                    entries: [
                        { key: '水体类型', value: data.phase2_raster_ontology.water_body.layers.derived.semantic_labels.water_body_type_cn },
                        { key: '最近湖库类型', value: waterBody.nearest_lake_entity.semantic.nearest_lake_type_label_cn },
                        { key: '5km湖水占比', value: this.formatGeoPercent(waterBody.lake_reservoir_by_scale.radius_5000m.lake_water_fraction, 2) },
                        { key: '河网密度', value: this.formatGeoValue(waterBody.river_network.r5km_river_length_density_km_per_km2, 4) },
                        { key: '是否受河流影响', value: waterBody.river_network.is_river_influenced ? '是' : '否' },
                        { key: '提取状态', value: data.phase2_raster_ontology.water_body.extraction_status.hydrorivers }
                    ]
                },
                coastal_environment: {
                    key: 'coastal_environment',
                    label: '海岸暴露',
                    nodeTypeLabel: '空间关系',
                    categoryLabel: '区位特征',
                    summary: `描述站点与海岸线的距离、朝向以及海岸暴露程度，用于补充区域区位信息。`,
                    highlights: [
                        { label: '距海岸', value: `${this.formatGeoValue(coastal.observed.distance_to_coast_km, 2)} km` },
                        { label: '海岸朝向', value: coastal.derived.semantic_labels.coastal_orientation_class_cn },
                        { label: '暴露等级', value: coastal.derived.distance_bands.coastal_exposure_cn }
                    ],
                    entries: [
                        { key: '是否 100km 海岸带', value: coastal.derived.distance_bands.is_coastal_100km ? '是' : '否' },
                        { key: '海岸开放度', value: this.formatGeoValue(coastal.observed.coast_openness_index, 2) },
                        { key: '站点相对海岸方位', value: `${this.formatGeoValue(coastal.observed.coast_station_relative_aspect_deg, 2)}°` },
                        { key: '海岸形态', value: coastal.derived.semantic_labels.coastal_morphology_hint_cn },
                        { key: '可信度', value: coastal.derived.semantic_labels.coastal_morphology_confidence_cn },
                        { key: '提取状态', value: data.phase2_raster_ontology.coastal_environment.extraction_status }
                    ]
                }
            };
        },

        buildGeoHierarchyGraphData(data, station) {
            const stationIdentity = data.station_identity;
            const landCover = data.phase1_raster_ontology.land_surface_cover.layers.derived;
            const terrainObserved = data.phase1_raster_ontology.terrain_structure.layers.observed;
            const terrainDerived = data.phase1_raster_ontology.terrain_structure.layers.derived;
            const urbanization = data.phase1_raster_ontology.urbanization;
            const thermal = data.phase1_raster_ontology.thermal_environment.layers;
            const waterBody = data.phase2_raster_ontology.water_body.layers;
            const coastal = data.phase2_raster_ontology.coastal_environment.layers;
            const environment = data.station_environment_class;
            const childAttributeMap = this.buildGeoHierarchyAttributeMap(data);

            const stationPayload = {
                key: 'station',
                label: stationIdentity.chinese_name,
                nodeTypeLabel: '站点节点',
                categoryLabel: '图谱锚点',
                summary: `${stationIdentity.chinese_name} 站是当前图谱锚点节点，所有维度和三级维度均通过该站点统一挂接。`,
                highlights: [
                    { label: '站名', value: stationIdentity.chinese_name },
                    { label: '站号', value: stationIdentity.station_id },
                    { label: '站址海拔', value: `${this.formatGeoValue(stationIdentity.elevation_m, 1)} m` }
                ],
                entries: [
                    { key: '节点描述', value: '站点锚点节点，统一组织该站点的地理环境多维知识。' },
                    { key: '站名', value: stationIdentity.chinese_name },
                    { key: '站号', value: stationIdentity.station_id },
                    { key: '坐标', value: `${this.formatGeoValue(stationIdentity.lat, 3)}°N, ${this.formatGeoValue(stationIdentity.lon, 3)}°E` },
                    { key: '站址海拔', value: `${this.formatGeoValue(stationIdentity.elevation_m, 1)} m` }
                ],
                relations: [
                    { direction: '发散至', label: '二层维度', target: '8 个第二层维度节点' },
                    { direction: '示例站点', label: '区域归属', target: `${stationIdentity.province} / ${stationIdentity.city}` },
                    { direction: '映射到', label: '站点编号', target: stationIdentity.station_id }
                ]
            };

            const dimensionGroups = [
                {
                    key: 'terrain_dimension',
                    order: 'Ⅰ',
                    label: '地形结构',
                    color: '#60a5fa',
                    summary: '描述站点周边地形骨架、坡度坡向与地形暴露等地貌特征。',
                    relation: '站点具有地形结构特征',
                    dataSource: data.phase1_raster_ontology.terrain_structure.source,
                    children: [
                        { key: 'elevation', label: 'I-1 高程统计', summary: '描述站点及周边地形高程水平。', entries: [{ key: '节点描述', value: '高程维度，反映站点及邻域高程背景。' }, { key: '参考值', value: `${this.formatGeoValue(terrainObserved.point_sample.dem_elevation_m, 1)} m` }] },
                        { key: 'slope_aspect', label: 'I-2 坡度坡向', summary: '刻画坡面倾斜程度与主要坡向。', entries: [{ key: '节点描述', value: '坡度坡向维度。' }, { key: '参考值', value: `${this.formatGeoValue(terrainDerived.by_scale.radius_5000m.slope.mean_deg, 2)}° / ${terrainDerived.by_scale.radius_5000m.slope.aspect_dominant_dir_cn}` }] },
                        { key: 'terrain_index', label: 'I-3 地形指数', summary: '通过地形指数表达起伏和遮蔽程度。', entries: [{ key: '节点描述', value: '地形指数维度。' }, { key: '参考值', value: `RIX ${this.formatGeoValue(terrainDerived.by_scale.radius_5000m.terrain_indices.rix, 4)}` }] },
                        { key: 'aspect_exposure', label: 'I-4 方位暴露', summary: '描述站点地形朝向和方位暴露条件。', entries: [{ key: '节点描述', value: '方位暴露维度。' }, { key: '后续键值对', value: '待补充' }] },
                        { key: 'valley_canyon', label: 'I-5 峡谷谷地', summary: '描述站点是否受谷地、峡谷等地形约束。', entries: [{ key: '节点描述', value: '峡谷谷地维度。' }, { key: '后续键值对', value: '待补充' }] },
                        { key: 'micro_topography', label: 'I-6 微地形', summary: '表达站点周边小尺度地形单元。', entries: [{ key: '节点描述', value: '微地形维度。' }, { key: '后续键值对', value: '待补充' }] },
                        { key: 'radiation_micro_env', label: 'I-7 辐射微环境', summary: '表达地形对局地辐射环境的影响。', entries: [{ key: '节点描述', value: '辐射微环境维度。' }, { key: '后续键值对', value: '待补充' }] }
                    ]
                },
                {
                    key: 'landcover_dimension',
                    order: 'Ⅱ',
                    label: '地表覆被与粗糙度',
                    color: '#38bdf8',
                    summary: '描述站点点址下垫面组成、异质性与空气动力学粗糙度。',
                    relation: '站点具有地表覆被与粗糙度特征',
                    dataSource: data.phase1_raster_ontology.land_surface_cover.source,
                    children: [
                        { key: 'point_type', label: 'II-1 点址类型', summary: '描述站点点位所属地表类型。', entries: [{ key: '节点描述', value: '点址类型维度。' }, { key: '参考值', value: landCover.point_sample.lulc_name_cn }] },
                        { key: 'land_composition', label: 'II-2 土地构成', summary: '描述周边土地覆被构成比例。', entries: [{ key: '节点描述', value: '土地构成维度。' }, { key: '参考值', value: `建成区 ${this.formatGeoPercent(landCover.by_scale.radius_2000m.fractions.built_up)}` }] },
                        { key: 'heterogeneity', label: 'II-3 异质性', summary: '描述景观多样性与空间异质性。', entries: [{ key: '节点描述', value: '异质性维度。' }, { key: '参考值', value: landCover.by_scale.radius_2000m.landscape_metrics.heterogeneity_label_cn }] },
                        { key: 'roughness', label: 'II-4 空气动力学粗糙度', summary: '描述空气动力学粗糙度和风场阻滞程度。', entries: [{ key: '节点描述', value: '粗糙度维度。' }, { key: '参考值', value: `${this.formatGeoValue(landCover.aerodynamics.area_weighted_roughness_2km_m, 3)} m` }] }
                    ]
                },
                {
                    key: 'built_dimension',
                    order: 'Ⅲ',
                    label: '建成环境',
                    color: '#8b5cf6',
                    summary: '表达站点周边建成环境、人类活动强度与城市化水平。',
                    relation: '站点具有人类建成环境特征',
                    dataSource: data.phase1_raster_ontology.urbanization.built_surface.source,
                    children: [
                        { key: 'impervious_surface', label: 'III-1 不透水面', summary: '描述不透水覆盖比例。', entries: [{ key: '节点描述', value: '不透水面维度。' }, { key: '参考值', value: this.formatGeoPercent(urbanization.impervious_surface.layers.derived.by_scale.radius_2000m.coverage_fraction) }] },
                        { key: 'built_up_area', label: 'III-2 建成区表面', summary: '描述建成区覆盖与等级。', entries: [{ key: '节点描述', value: '建成区维度。' }, { key: '参考值', value: urbanization.built_surface.layers.derived.by_scale.radius_2000m.built_surface_label_cn }] },
                        { key: 'urbanization_index', label: 'III-3 城市化综合指数', summary: '描述综合城市化程度。', entries: [{ key: '节点描述', value: '城市化指数维度。' }, { key: '参考值', value: this.formatGeoValue(urbanization.urbanization_index, 3) }] }
                    ]
                },
                {
                    key: 'surface_thermal_dimension',
                    order: 'Ⅳ',
                    label: '地表热力环境',
                    color: '#f59e0b',
                    summary: '表达地表温度气候态及热岛强度等热力背景。',
                    relation: '站点具有地表热力环境特征',
                    dataSource: data.phase1_raster_ontology.thermal_environment.lst_source,
                    children: [
                        { key: 'lst_climatology', label: 'IV-1 地表温度气候态', summary: '描述地表温度多年平均与季节变化。', entries: [{ key: '节点描述', value: 'LST 气候态维度。' }, { key: '参考值', value: `${this.formatGeoValue(thermal.observed.lst_climatology.annual.mean_k, 2)} K` }] },
                        { key: 'uhi_intensity', label: 'IV-2 城市热岛', summary: '描述地表热岛效应强弱。', entries: [{ key: '节点描述', value: '热岛强度维度。' }, { key: '参考值', value: `${this.formatGeoValue(thermal.derived.surface_uhi.intensity_annual_mean_k, 2)} K` }] }
                    ]
                },
                {
                    key: 'boundary_layer_dimension',
                    order: 'Ⅴ',
                    label: '边界层热动力',
                    color: '#fb7185',
                    summary: '表达边界层高度、热力稳定度和近地表热动力条件。',
                    relation: '站点具有边界层热动力特征',
                    dataSource: '后续接入 ERA5 / 边界层资料',
                    children: [
                        { key: 'blh', label: 'V-1 边界层高度', summary: '描述边界层厚度变化。', entries: [{ key: '节点描述', value: '边界层高度维度。' }, { key: '后续键值对', value: '待补充' }] },
                        { key: 't2m_skt', label: 'V-2 气温与肤温', summary: '描述近地气温与皮肤温度关系。', entries: [{ key: '节点描述', value: 't2m/SKT 维度。' }, { key: '后续键值对', value: '待补充' }] },
                        { key: 'stability', label: 'V-3 稳定度层结', summary: '描述大气稳定度与层结特征。', entries: [{ key: '节点描述', value: '稳定度层结维度。' }, { key: '后续键值对', value: '待补充' }] }
                    ]
                },
                {
                    key: 'hydrology_dimension',
                    order: 'Ⅵ',
                    label: '陆地水文地理',
                    color: '#22c55e',
                    summary: '描述湖库、湿地、河流和水体语义等陆地水文背景。',
                    relation: '站点具有陆地水文地理特征',
                    dataSource: data.phase2_raster_ontology.water_body.layers.observed.nearest_lake_entity.source,
                    children: [
                        { key: 'lake_reservoir', label: 'VI-1 最近湖库', summary: '描述最近湖库实体及类型。', entries: [{ key: '节点描述', value: '湖库维度。' }, { key: '参考值', value: waterBody.observed.nearest_lake_entity.semantic.nearest_lake_name }] },
                        { key: 'lake_fraction', label: 'VI-2 湖库面占比', summary: '描述湖面水体占比。', entries: [{ key: '节点描述', value: '湖面占比维度。' }, { key: '参考值', value: this.formatGeoPercent(waterBody.observed.lake_reservoir_by_scale.radius_5000m.lake_water_fraction, 2) }] },
                        { key: 'wetland', label: 'VI-3 自然湿地', summary: '描述站点周边湿地条件。', entries: [{ key: '节点描述', value: '湿地维度。' }, { key: '后续键值对', value: '待补充' }] },
                        { key: 'river', label: 'VI-4 最近河流', summary: '描述最近河流及距离。', entries: [{ key: '节点描述', value: '河流维度。' }, { key: '参考值', value: `${this.formatGeoValue(waterBody.observed.nearest_any_river.distance_to_any_river_km, 2)} km` }] },
                        { key: 'river_network', label: 'VI-5 河网结构', summary: '描述河网密度与河流影响。', entries: [{ key: '节点描述', value: '河网维度。' }, { key: '参考值', value: this.formatGeoValue(waterBody.observed.river_network.r5km_river_length_density_km_per_km2, 4) }] },
                        { key: 'water_semantics', label: 'VI-6 水体语义', summary: '描述水体语义标签。', entries: [{ key: '节点描述', value: '水体语义维度。' }, { key: '参考值', value: data.phase2_raster_ontology.water_body.layers.derived.semantic_labels.water_body_type_cn }] }
                    ]
                },
                {
                    key: 'marine_coast_dimension',
                    order: 'Ⅶ',
                    label: '海洋海岸地理',
                    color: '#14b8a6',
                    summary: '描述站点与海岸的距离、方位和海岸暴露语义。',
                    relation: '站点具有海洋海岸地理特征',
                    dataSource: data.phase2_raster_ontology.coastal_environment.source,
                    children: [
                        { key: 'distance_orientation', label: 'VII-1 距海与方位', summary: '描述距海距离及相对海岸方位。', entries: [{ key: '节点描述', value: '距海方位维度。' }, { key: '参考值', value: `${this.formatGeoValue(coastal.observed.distance_to_coast_km, 2)} km / ${this.formatGeoValue(coastal.observed.coast_station_relative_aspect_deg, 2)}°` }] },
                        { key: 'exposure_band', label: 'VII-2 海岸暴露带', summary: '描述海岸暴露带等级。', entries: [{ key: '节点描述', value: '暴露带维度。' }, { key: '参考值', value: coastal.derived.distance_bands.coastal_exposure_cn }] },
                        { key: 'coastal_semantics', label: 'VII-3 海岸语义', summary: '描述海岸朝向和海岸语义特征。', entries: [{ key: '节点描述', value: '海岸语义维度。' }, { key: '参考值', value: coastal.derived.semantic_labels.coastal_orientation_class_cn }] }
                    ]
                },
                {
                    key: 'cryosphere_dimension',
                    order: 'Ⅷ',
                    label: '冰冻圈环境',
                    color: '#a78bfa',
                    summary: '描述站点冰冻圈环境适用性、积雪与冻融条件。',
                    relation: '站点具有冰冻圈环境特征',
                    dataSource: '后续接入雪深 / 冻融产品',
                    children: [
                        { key: 'applicability', label: 'VIII-1 适用性', summary: '描述冰冻圈要素是否适用该站点。', entries: [{ key: '节点描述', value: '适用性维度。' }, { key: '参考值', value: '华南站点通常为低适用性' }] },
                        { key: 'snow_cover', label: 'VIII-2 积雪', summary: '描述积雪存在与持续时间。', entries: [{ key: '节点描述', value: '积雪维度。' }, { key: '后续键值对', value: '待补充' }] },
                        { key: 'freeze_thaw', label: 'VIII-3 冻融', summary: '描述地表冻融循环。', entries: [{ key: '节点描述', value: '冻融维度。' }, { key: '后续键值对', value: '待补充' }] }
                    ]
                }
            ];

            const dimensions = dimensionGroups.map((group) => ({
                key: group.key,
                label: `${group.order} ${group.label}`,
                color: group.color,
                nodeTypeLabel: '第二层维度',
                categoryLabel: '维度分组',
                summary: group.summary,
                highlights: [
                    { label: '数据源', value: group.dataSource },
                    { label: '三级维度数', value: `${group.children.length} 项` }
                ],
                entries: [
                    { key: '节点描述', value: group.summary },
                    { key: '数据源', value: group.dataSource }
                ],
                relations: [
                    { direction: '隶属于', label: '中心站点', target: stationIdentity.chinese_name },
                    { direction: '包含', label: '第三层维度', target: `${group.children.length} 项` },
                    { direction: '来源于', label: '数据源', target: group.dataSource }
                ],
                children: group.children.map((child) => {
                    const attributes = childAttributeMap[child.key] || [];
                    const childAssetAvailable = attributes.length > 0 && attributes.every((attribute) => attribute.available);
                    return {
                        key: child.key,
                        label: child.label,
                        color: group.color,
                        assetAvailable: childAssetAvailable,
                        nodeTypeLabel: '第三层维度',
                        categoryLabel: group.label,
                        summary: child.summary,
                        parentLabel: group.label,
                        highlights: attributes
                            .filter((attribute) => attribute.available)
                            .slice(0, 2)
                            .map((attribute) => ({ label: attribute.name, value: attribute.value })),
                        entries: [
                            { key: '节点描述', value: child.summary },
                            ...attributes.map((attribute) => ({ key: attribute.name, value: attribute.value }))
                        ],
                        relations: [
                            { direction: '隶属于', label: '第二层维度', target: group.label },
                            { direction: '关联到', label: '站点', target: stationIdentity.chinese_name },
                            { direction: '派生出', label: '属性节点', target: `${attributes.length} 项` }
                        ],
                        attributes
                    };
                })
            })).map((dimension) => ({
                ...dimension,
                assetAvailable: dimension.children.length > 0 && dimension.children.every((child) => child.assetAvailable)
            }));

            stationPayload.assetAvailable = dimensions.length > 0 && dimensions.every((dimension) => dimension.assetAvailable);

            return {
                station: stationPayload,
                dimensions
            };
        },

        buildGeoAttributePayload(dimension, child, attribute) {
            return {
                key: `${child.key}_${attribute.key}`,
                label: attribute.name,
                assetAvailable: attribute.available,
                nodeTypeLabel: '属性节点',
                categoryLabel: attribute.available ? '属性取值' : '缺失占位',
                summary: `${dimension.label} / ${child.label} / ${attribute.name}`,
                highlights: [
                    { label: '属性值', value: attribute.value },
                    { label: '状态', value: attribute.available ? '已提取' : '缺失或不适用' },
                    { label: '来源', value: attribute.source || '当前 JSON 未提供对应字段' }
                ],
                entries: [
                    { key: attribute.name, value: attribute.value }
                ],
                relations: [
                    { direction: '取值自', label: '第三层维度', target: child.label },
                    { direction: '归属于', label: '第二层维度', target: dimension.label },
                    { direction: attribute.available ? '来源于' : '待补充', label: '字段状态', target: attribute.source || '当前 JSON 未提供对应字段' }
                ]
            };
        },

        appendGeoAttributeGraphNodes({
            nodes,
            links,
            dimension,
            child,
            childId,
            childX,
            childY,
            centerX,
            centerY,
            prefix,
            attributeDistance = 90,
            symbolSize = 32,
            fontSize = 8,
            lineWidth = 0.9
        }) {
            const attributes = Array.isArray(child.attributes) ? child.attributes : [];
            if (!attributes.length) return;

            const baseAngle = Math.atan2(childY - centerY, childX - centerX);
            const spread = attributes.length === 1
                ? [baseAngle]
                : attributes.map((_, index) => baseAngle - 0.26 + (0.52 * index / (attributes.length - 1)));

            attributes.forEach((attribute, index) => {
                const angle = spread[index];
                const radialDistance = attributeDistance + (attributes.length > 2 ? (index - 1) * 8 : 0);
                const x = childX + Math.cos(angle) * radialDistance;
                const y = childY + Math.sin(angle) * radialDistance;
                const color = attribute.available ? '#eab308' : '#6b7280';
                const borderColor = attribute.available ? '#fef08a' : '#cbd5e1';
                const labelColor = attribute.available ? '#fef3c7' : '#cbd5e1';

                nodes.push({
                    id: `${prefix}_${child.key}_${attribute.key}`,
                    name: `${attribute.name}\n${attribute.value}`,
                    x,
                    y,
                    symbol: 'diamond',
                    symbolSize: attribute.available ? symbolSize : Math.max(symbolSize - 4, 22),
                    payload: this.buildGeoAttributePayload(dimension, child, attribute),
                    itemStyle: {
                        color,
                        borderColor,
                        borderWidth: 1.15,
                        shadowBlur: attribute.available ? 16 : 10,
                        shadowColor: attribute.available ? 'rgba(234, 179, 8, 0.35)' : 'rgba(148, 163, 184, 0.22)'
                    },
                    label: {
                        show: true,
                        color: labelColor,
                        fontSize,
                        lineHeight: fontSize + 3,
                        width: 98,
                        overflow: 'break',
                        formatter: () => `${attribute.name}\n${attribute.value}`
                    }
                });

                links.push({
                    source: childId,
                    target: `${prefix}_${child.key}_${attribute.key}`,
                    lineStyle: {
                        color: attribute.available ? 'rgba(234, 179, 8, 0.62)' : 'rgba(148, 163, 184, 0.4)',
                        width: lineWidth,
                        curveness: 0.03
                    }
                });
            });
        },

        buildGeoSystemAnchorPayload(station, data) {
            return {
                key: 'earth_system_anchor',
                label: '站点地球系统本体',
                assetAvailable: false,
                nodeTypeLabel: '融合锚点',
                categoryLabel: '陆海双侧',
                summary: `${station?.name || data.station_identity.chinese_name} 站以站号为统一锚点，陆侧地理地形本体与未来海洋气候本体按同一站点关联，共同构成站点尺度的地球系统本体。`,
                highlights: [
                    { label: '站点锚点', value: station?.id || data.station_identity.station_id },
                    { label: '陆侧本体', value: '地理地形' },
                    { label: '海侧本体', value: '海洋气候（预留）' }
                ],
                entries: [
                    { key: '统一实体', value: `${station?.name || data.station_identity.chinese_name} 站` },
                    { key: '站点ID', value: station?.id || data.station_identity.station_id },
                    { key: '陆侧来源', value: 'DEM、LULC、海岸线、水体、热环境等已建模要素' },
                    { key: '海侧来源', value: '海底地形、海温、盐度、海流、潮汐等后续接入' },
                    { key: '融合关系', value: '两个子本体按站号统一挂接到站点中心节点' },
                    { key: '当前状态', value: this.isGeoSystemDemoStation(station) ? '汕头站陆海双翼示意' : '标准地理本体' }
                ],
                relations: [
                    { direction: '统一挂接', label: '陆侧本体', target: '地理地形' },
                    { direction: '统一挂接', label: '海侧本体', target: '海洋气候（预留）' },
                    { direction: '锚定到', label: '站点', target: station?.name || data.station_identity.chinese_name }
                ]
            };
        },

        buildOceanClimatePlaceholderPayloads(station) {
            return {
                submarine_topography: {
                    key: 'submarine_topography',
                    label: '海底地形',
                    assetAvailable: false,
                    nodeTypeLabel: '海洋地形',
                    categoryLabel: '海侧本体',
                    summary: `${station?.name || '示意站'}未来将接入海底高程、坡度与近岸地形起伏等海底地貌要素，用于补充站点海侧环境画像。`,
                    highlights: [
                        { label: '海盆起伏', value: '待接入' },
                        { label: '近岸坡降', value: '待接入' },
                        { label: '海底地貌', value: '陆架示意' }
                    ],
                    entries: [
                        { key: '主题定位', value: '海洋侧地形骨架' },
                        { key: '后续数据', value: '海底 DEM / 海底地貌分类' },
                        { key: '关联方式', value: '按站点近海缓冲区聚合' },
                        { key: '当前状态', value: '占位示意' }
                    ],
                    relations: [
                        { direction: '挂接到', label: '站点锚点', target: `${station?.name || '示意站'} 站` },
                        { direction: '主题定位', label: '海侧本体', target: '海底地形' }
                    ]
                },
                sea_surface_temperature: {
                    key: 'sea_surface_temperature',
                    label: '海温',
                    assetAvailable: false,
                    nodeTypeLabel: '海洋气候',
                    categoryLabel: '海侧本体',
                    summary: '未来接入站点邻近海域海表温度年均值、季节变化与异常过程，用于表达海洋热力背景。',
                    highlights: [
                        { label: '年均海温', value: '24.6°C' },
                        { label: '夏季峰值', value: '29.1°C' },
                        { label: '状态', value: '演示占位' }
                    ],
                    entries: [
                        { key: '主题定位', value: '海洋热力环境' },
                        { key: '后续数据', value: 'SST 月尺度与年际统计' },
                        { key: '关联方式', value: '站点近海像元聚合' },
                        { key: '当前状态', value: '占位示意' }
                    ],
                    relations: [
                        { direction: '挂接到', label: '站点锚点', target: `${station?.name || '示意站'} 站` },
                        { direction: '主题定位', label: '海侧本体', target: '海温' }
                    ]
                },
                salinity: {
                    key: 'salinity',
                    label: '盐度',
                    assetAvailable: false,
                    nodeTypeLabel: '海洋理化',
                    categoryLabel: '海侧本体',
                    summary: '未来通过海表/近表层盐度表达近岸海域水团特征、径流影响与季风交换过程。',
                    highlights: [
                        { label: '表层盐度', value: '31.8 PSU' },
                        { label: '季节波动', value: '中等' },
                        { label: '状态', value: '演示占位' }
                    ],
                    entries: [
                        { key: '主题定位', value: '海水理化属性' },
                        { key: '后续数据', value: '表层盐度 / 剖面盐度' },
                        { key: '关联方式', value: '海区剖面映射至站点近岸海域' },
                        { key: '当前状态', value: '占位示意' }
                    ],
                    relations: [
                        { direction: '挂接到', label: '站点锚点', target: `${station?.name || '示意站'} 站` },
                        { direction: '主题定位', label: '海侧本体', target: '盐度' }
                    ]
                },
                current: {
                    key: 'current',
                    label: '海流',
                    assetAvailable: false,
                    nodeTypeLabel: '海洋动力',
                    categoryLabel: '海侧本体',
                    summary: '未来以流速、流向与季节性海流型态描述站点海侧动力环境，支撑陆海热湿交换分析。',
                    highlights: [
                        { label: '主流向', value: '东北向' },
                        { label: '平均流速', value: '0.42 m/s' },
                        { label: '状态', value: '演示占位' }
                    ],
                    entries: [
                        { key: '主题定位', value: '海洋动力条件' },
                        { key: '后续数据', value: '表层流 / 潮流' },
                        { key: '关联方式', value: '站点近海范围流场统计' },
                        { key: '当前状态', value: '占位示意' }
                    ],
                    relations: [
                        { direction: '挂接到', label: '站点锚点', target: `${station?.name || '示意站'} 站` },
                        { direction: '主题定位', label: '海侧本体', target: '海流' }
                    ]
                },
                tide: {
                    key: 'tide',
                    label: '潮汐',
                    assetAvailable: false,
                    nodeTypeLabel: '海洋过程',
                    categoryLabel: '海侧本体',
                    summary: '未来接入潮差、潮型和高潮频次，用于表达站点近海周期性海洋过程与极值风险背景。',
                    highlights: [
                        { label: '平均潮差', value: '1.6 m' },
                        { label: '潮型', value: '不规则半日潮' },
                        { label: '状态', value: '演示占位' }
                    ],
                    entries: [
                        { key: '主题定位', value: '周期性海洋过程' },
                        { key: '后续数据', value: '潮位站 / 模式潮汐场' },
                        { key: '关联方式', value: '近海潮位特征映射' },
                        { key: '当前状态', value: '占位示意' }
                    ],
                    relations: [
                        { direction: '挂接到', label: '站点锚点', target: `${station?.name || '示意站'} 站` },
                        { direction: '主题定位', label: '海侧本体', target: '潮汐' }
                    ]
                }
            };
        },

        openGeoDetail(item, tab = 'profile') {
            this.selectedGeoRecord = item || this.currentGeoRecord;
            this.geoPageMode = 'detail';
            this.geoDetailTab = tab;
            this.geoVersionNew = 'V4';
            this.geoVersionOld = 'V3';
            this.selectedNode = null;

            if (tab === 'preview') {
                this.$nextTick(() => {
                    this.renderGeoDetailGraph();
                    this.geoDetailGraphInstance?.resize();
                });
            } else if (tab === 'profile') {
                this.$nextTick(() => {
                    this.renderGeoProfileCharts();
                });
            }
        },

        switchGeoDetailTab(tab) {
            this.geoDetailTab = tab;
            if (tab === 'preview') {
                this.$nextTick(() => {
                    this.renderGeoDetailGraph();
                    this.geoDetailGraphInstance?.resize();
                });
            } else if (tab === 'profile') {
                this.$nextTick(() => {
                    this.renderGeoProfileCharts();
                });
            }
        },

        closeGeoDetail() {
            this.geoPageMode = 'main';
            this.geoDetailTab = 'profile';
            this.selectedGeoRecord = null;
        },

        renderGeoDetailGraph() {
            const container = document.getElementById('geo-detail-graph');
            if (!container || this.geoPageMode !== 'detail' || this.geoDetailTab !== 'preview') return;

            if (!this.geoDetailGraphInstance) {
                this.geoDetailGraphInstance = echarts.init(container);
            }

            const record = this.currentGeoRecord;
            const data = this.cloneGeoSampleData(record);
            const hierarchy = this.buildGeoHierarchyGraphData(data, record);
            const centerId = data.station_identity.station_id;
            const centerX = 760;
            const centerY = 390;
            const radius = 254;
            const thirdRadius = 156;
            const nodes = [{
                id: centerId,
                name: `${data.station_identity.chinese_name}\n${data.station_identity.station_id}`,
                x: centerX,
                y: centerY,
                symbolSize: 92,
                itemStyle: {
                    color: '#0a1629',
                    borderColor: '#60a5fa',
                    borderWidth: 3,
                    shadowBlur: 28,
                    shadowColor: 'rgba(96, 165, 250, 0.55)'
                },
                label: {
                    show: true,
                    color: '#f8fafc',
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 18
                },
                payload: hierarchy.station
            }];
            const links = [];
            hierarchy.dimensions.forEach((dimension, index) => {
                const angle = (-90 + index * (360 / hierarchy.dimensions.length)) * (Math.PI / 180);
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                const dimensionId = `detail_dimension_${dimension.key}`;

                nodes.push({
                    id: dimensionId,
                    name: dimension.label,
                    x,
                    y,
                    symbolSize: 66,
                    itemStyle: {
                        color: '#10192a',
                        borderColor: dimension.color,
                        borderWidth: 2,
                        shadowBlur: 22,
                        shadowColor: `${dimension.color}55`
                    },
                    label: {
                        show: true,
                        color: '#e2e8f0',
                        fontSize: 12,
                        formatter: () => dimension.label
                    },
                    payload: dimension
                });

                links.push({
                    source: centerId,
                    target: dimensionId,
                    lineStyle: {
                        color: `${dimension.color}88`,
                        width: 1.4,
                        curveness: 0.14
                    }
                });

                const baseAngle = angle;
                const childAngles = dimension.children.length === 1
                    ? [baseAngle]
                    : dimension.children.map((_, childIndex) => baseAngle - 0.38 + (0.76 * childIndex / (dimension.children.length - 1)));

                dimension.children.forEach((child, childIndex) => {
                    const childId = `detail_child_${dimension.key}_${child.key}`;
                    const childX = x + Math.cos(childAngles[childIndex]) * thirdRadius;
                    const childY = y + Math.sin(childAngles[childIndex]) * thirdRadius;

                    nodes.push({
                        id: childId,
                        name: child.label,
                        x: childX,
                        y: childY,
                        symbolSize: 28,
                        itemStyle: {
                            color: '#141414',
                            borderColor: dimension.color,
                            borderWidth: 1
                        },
                        label: {
                            show: true,
                            color: '#cbd5e1',
                            fontSize: 9,
                            formatter: () => child.label
                        },
                        payload: child
                    });

                    links.push({
                        source: dimensionId,
                        target: childId,
                        lineStyle: {
                            color: `${dimension.color}55`,
                            width: 1,
                            curveness: 0.08
                        }
                    });

                    this.appendGeoAttributeGraphNodes({
                        nodes,
                        links,
                        dimension,
                        child,
                        childId,
                        childX,
                        childY,
                        centerX,
                        centerY,
                        prefix: 'detail_attr',
                        attributeDistance: 98,
                        symbolSize: 34,
                        fontSize: 8,
                        lineWidth: 0.8
                    });
                });
            });

            this.geoDetailGraphInstance.setOption({
                backgroundColor: 'transparent',
                animationDurationUpdate: 480,
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(6, 14, 28, 0.95)',
                    borderColor: 'rgba(96, 165, 250, 0.28)',
                    textStyle: { color: '#e2e8f0' },
                    formatter: (params) => {
                        const payload = params.data?.payload;
                        if (!payload) return params.name;
                        return `<div style="font-size:12px;color:#f8fafc;margin-bottom:4px;">${payload.label}</div><div style="font-size:11px;color:#94a3b8;">${payload.summary}</div>`;
                    }
                },
                series: [{
                    type: 'graph',
                    layout: 'none',
                    roam: true,
                    zoom: 0.72,
                    scaleLimit: {
                        min: 0.34,
                        max: 2.4
                    },
                    draggable: true,
                    data: nodes,
                    links,
                    edgeSymbol: ['none', 'arrow'],
                    edgeSymbolSize: [0, 7],
                    lineStyle: {
                        opacity: 0.85
                    },
                    emphasis: {
                        focus: 'adjacency',
                        lineStyle: {
                            width: 2.4
                        }
                    }
                }]
            });
        },

        initGraph(view) {
            if (view !== 'graph') return;
            
            // Wait for DOM to update
            setTimeout(() => {
                const container = document.getElementById('echarts-container');
                if (!container) return;

                if (!this.chartInstance) {
                    this.chartInstance = echarts.init(container);
                    
                    // Generate mock data for the graph (similar to image 3)
                    // We'll create two main clusters (left and right)
                    const nodes = [];
                    const links = [];
                    const categories = [
                        { name: 'Core', itemStyle: { color: '#3b82f6', borderColor: '#60a5fa', borderWidth: 2 } },
                        { name: 'Sub', itemStyle: { color: '#10b981', borderColor: '#34d399', borderWidth: 1 } },
                        { name: 'Leaf', itemStyle: { color: '#d97706', borderColor: '#fbbf24', borderWidth: 1 } }
                    ];

                    // Helper to generate a cluster
                    const generateCluster = (centerX, centerY, baseId) => {
                        const clusterNodes = [];
                        // Main center node
                        clusterNodes.push({
                            id: `${baseId}_0`,
                            name: `Center_${baseId}`,
                            symbolSize: 24,
                            x: centerX,
                            y: centerY,
                            category: 0,
                            symbol: 'circle'
                        });

                        // Add sub nodes
                        for(let i=1; i<=15; i++) {
                            clusterNodes.push({
                                id: `${baseId}_${i}`,
                                name: `Node_${baseId}_${i}`,
                                symbolSize: 16,
                                category: Math.random() > 0.6 ? 2 : 1,
                                symbol: Math.random() > 0.8 ? 'diamond' : 'circle'
                            });
                            
                            // Link to center
                            links.push({
                                source: `${baseId}_0`,
                                target: `${baseId}_${i}`,
                                lineStyle: { color: 'rgba(100, 116, 139, 0.4)', width: 1 }
                            });

                            // Add leaves
                            for(let j=0; j<Math.floor(Math.random() * 4); j++) {
                                const leafId = `${baseId}_${i}_leaf_${j}`;
                                clusterNodes.push({
                                    id: leafId,
                                    name: `Leaf_${leafId}`,
                                    symbolSize: 10,
                                    category: 2
                                });
                                links.push({
                                    source: `${baseId}_${i}`,
                                    target: leafId,
                                    lineStyle: { color: 'rgba(100, 116, 139, 0.2)', width: 1 }
                                });
                            }
                        }
                        
                        // Add some cross links
                        for(let i=0; i<10; i++) {
                            links.push({
                                source: `${baseId}_${Math.floor(Math.random() * 15) + 1}`,
                                target: `${baseId}_${Math.floor(Math.random() * 15) + 1}`,
                                lineStyle: { color: 'rgba(100, 116, 139, 0.3)', width: 1 }
                            });
                        }
                        
                        return clusterNodes;
                    };

                    nodes.push(...generateCluster(300, 300, 'L'));
                    nodes.push(...generateCluster(700, 300, 'R'));

                    // Cross cluster links
                    for(let i=0; i<5; i++) {
                        links.push({
                            source: `L_${Math.floor(Math.random() * 15) + 1}`,
                            target: `R_${Math.floor(Math.random() * 15) + 1}`,
                            lineStyle: { color: 'rgba(59, 130, 246, 0.3)', width: 1, curveness: 0.2 }
                        });
                    }

                    // Add an icon inside nodes using label formatter if possible, or just style them
                    nodes.forEach(n => {
                        n.label = {
                            show: false
                        };
                        // simulate the inner cube icon by using a custom symbol or shadow
                        n.itemStyle = n.itemStyle || {};
                        n.itemStyle.shadowBlur = 10;
                        n.itemStyle.shadowColor = 'rgba(0,0,0,0.5)';
                    });

                    const option = {
                        backgroundColor: 'transparent',
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}'
                        },
                        animationDurationUpdate: 1500,
                        animationEasingUpdate: 'quinticInOut',
                        series: [
                            {
                                type: 'graph',
                                layout: 'force',
                                data: nodes,
                                links: links,
                                categories: categories,
                                roam: true,
                                label: {
                                    position: 'right',
                                    formatter: '{b}'
                                },
                                lineStyle: {
                                    color: 'source',
                                    curveness: 0
                                },
                                force: {
                                    repulsion: 150,
                                    gravity: 0.1,
                                    edgeLength: [30, 80]
                                },
                                emphasis: {
                                    focus: 'adjacency',
                                    lineStyle: {
                                        width: 3
                                    }
                                }
                            }
                        ]
                    };

                    this.chartInstance.setOption(option);

                    window.addEventListener('resize', () => {
                        if (this.currentView === 'graph') {
                            this.chartInstance.resize();
                        }
                    });
                } else {
                    this.chartInstance.resize();
                }
            }, 100);
        },

        // --- Geo Map & Graph Methods ---
        async initGeoMap(view) {
            if (view !== 'graph') return;
            await this.$nextTick();

            const container = document.getElementById('geo-map-container');
            if (!container) return;

            if (!this.geoChartInstance) {
                this.geoChartInstance = echarts.init(container);

                window.addEventListener('resize', () => this.resizeGeoVisuals());
                document.addEventListener('fullscreenchange', () => {
                    this.isGeoFullscreen = document.fullscreenElement === this.$refs.geoPanel;
                    this.geoOntologyGraphFullscreen = document.fullscreenElement === this.$refs.geoOntologyViewport;
                    this.$nextTick(() => this.resizeGeoVisuals());
                });

                this.geoChartInstance.on('click', async (params) => {
                    if (params.seriesType === 'effectScatter' && params.data?.item) {
                        this.openGeoDetail(params.data.item, 'profile');
                        return;
                    }
                    if (params.componentType === 'geo' && params.name) {
                        this.drillToRegion(params.name);
                    }
                });

                this.geoChartInstance.getZr().on('click', (event) => {
                    if (!event.target && !this.activeGeoStation) this.navigateBack();
                });

            }

            await this.applyGeoRegionFilterToGraph();
            this.resizeGeoVisuals();
        },

        renderGeoProfileCharts() {
            // Profile Map
            const mapContainer = document.getElementById('geo-profile-map');
            if (mapContainer && !this.geoProfileMapInstance) {
                this.geoProfileMapInstance = echarts.init(mapContainer);
                
                // create concentric circles data
                const circles = [];
                const center = [113.517, 23.883];
                // 2km, 5km, 10km radius simulation
                circles.push({
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: [{ name: '2km', value: center }],
                    symbol: 'circle',
                    symbolSize: 80,
                    itemStyle: { color: 'transparent', borderColor: 'rgba(255,255,255,0.4)', borderWidth: 1 },
                    label: { show: true, formatter: '{b}', position: 'top', color: '#fff', fontSize: 10 }
                });
                circles.push({
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: [{ name: '5km', value: center }],
                    symbol: 'circle',
                    symbolSize: 160,
                    itemStyle: { color: 'transparent', borderColor: 'rgba(255,255,255,0.3)', borderWidth: 1 },
                    label: { show: true, formatter: '{b}', position: 'top', color: '#fff', fontSize: 10 }
                });
                circles.push({
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: [{ name: '10km', value: center }],
                    symbol: 'circle',
                    symbolSize: 260,
                    itemStyle: { color: 'transparent', borderColor: 'rgba(255,255,255,0.2)', borderWidth: 1 },
                    label: { show: true, formatter: '{b}', position: 'top', color: '#fff', fontSize: 10 }
                });

                const mapOption = {
                    backgroundColor: '#1e293b',
                    geo: {
                        map: '100000',
                        roam: false,
                        silent: true,
                        center: [113.517, 23.883],
                        zoom: 40,
                        itemStyle: {
                            areaColor: '#334155',
                            borderColor: '#475569'
                        }
                    },
                    series: [
                        ...circles,
                        {
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: [center],
                            symbolSize: 12,
                            itemStyle: {
                                color: '#60a5fa',
                                shadowBlur: 10,
                                shadowColor: '#60a5fa'
                            }
                        },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: [center],
                            symbolSize: 24,
                            showEffectOn: 'render',
                            rippleEffect: { brushType: 'stroke', scale: 2.5 },
                            itemStyle: {
                                color: '#60a5fa'
                            }
                        }
                    ]
                };
                this.geoProfileMapInstance.setOption(mapOption);
            }

            // Sparkline Line Charts
            const createSparkline = (id, data, color) => {
                const el = document.getElementById(id);
                if (!el) return;
                const chart = echarts.getInstanceByDom(el) || echarts.init(el);
                chart.setOption({
                    grid: { top: 2, bottom: 2, left: 0, right: 0 },
                    xAxis: { type: 'category', show: false },
                    yAxis: { type: 'value', show: false, min: 'dataMin', max: 'dataMax' },
                    series: [{
                        data: data,
                        type: 'line',
                        smooth: true,
                        showSymbol: false,
                        lineStyle: { color: color, width: 2 },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: color + '80' },
                                { offset: 1, color: color + '00' }
                            ])
                        }
                    }]
                });
                return chart;
            };

            const chartsToResize = [];
            
            chartsToResize.push(createSparkline('chart-rix', [0.1, 0.12, 0.11, 0.15, 0.14, 0.16, 0.152], '#3b82f6'));
            chartsToResize.push(createSparkline('chart-dh', [40, 42, 41, 45, 43, 44, 44.15], '#8b5cf6'));
            chartsToResize.push(createSparkline('chart-slope', [10, 11, 10.5, 12, 10.8, 11.2, 10.81], '#6366f1'));
            chartsToResize.push(createSparkline('chart-ele', [480, 485, 490, 488, 492, 490, 491], '#10b981'));

            chartsToResize.push(createSparkline('chart-multi-1', [105, 108, 107, 110, 109.91], '#8b5cf6'));
            chartsToResize.push(createSparkline('chart-multi-2', [55, 56, 55.5, 57, 56.70], '#3b82f6'));
            chartsToResize.push(createSparkline('chart-multi-3', [10, 10.5, 11, 10.8, 10.81], '#ec4899'));
            chartsToResize.push(createSparkline('chart-multi-4', [0.2, 0.21, 0.22, 0.215, 0.219], '#10b981'));
            chartsToResize.push(createSparkline('chart-multi-5', [-40, -41, -40.5, -42, -41.90], '#f59e0b'));

            // Donut Chart
            const lcEl = document.getElementById('chart-landcover');
            if (lcEl) {
                const lcChart = echarts.getInstanceByDom(lcEl) || echarts.init(lcEl);
                lcChart.setOption({
                    tooltip: { trigger: 'item' },
                    series: [{
                        type: 'pie',
                        radius: ['50%', '80%'],
                        center: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: { show: false },
                        itemStyle: {
                            borderColor: '#1e293b',
                            borderWidth: 2
                        },
                        data: [
                            { value: 44.7, name: '林地/森林', itemStyle: { color: '#10b981' } },
                            { value: 44.5, name: '建成区', itemStyle: { color: '#ef4444' } },
                            { value: 10.4, name: '农田', itemStyle: { color: '#f59e0b' } },
                            { value: 0.3, name: '水体', itemStyle: { color: '#3b82f6' } },
                            { value: 0.1, name: '其他', itemStyle: { color: '#64748b' } }
                        ]
                    }],
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: 'middle',
                        icon: 'circle',
                        itemWidth: 6,
                        itemHeight: 6,
                        textStyle: { fontSize: 10, color: '#94a3b8' }
                    }
                });
                chartsToResize.push(lcChart);
            }

            // Rose Chart
            const aspectEl = document.getElementById('chart-aspect');
            if (aspectEl) {
                const aspectChart = echarts.getInstanceByDom(aspectEl) || echarts.init(aspectEl);
                aspectChart.setOption({
                    angleAxis: {
                        type: 'category',
                        data: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
                        axisLine: { lineStyle: { color: '#334155' } },
                        axisLabel: { color: '#94a3b8', fontSize: 10 }
                    },
                    radiusAxis: {
                        show: false
                    },
                    polar: {
                        center: ['50%', '50%'],
                        radius: '70%'
                    },
                    series: [{
                        type: 'bar',
                        data: [
                            { value: 15, itemStyle: { color: '#1e3a8a' } },
                            { value: 45, itemStyle: { color: '#3b82f6' } },
                            { value: 25, itemStyle: { color: '#2563eb' } },
                            { value: 10, itemStyle: { color: '#1e40af' } },
                            { value: 20, itemStyle: { color: '#1e3a8a' } },
                            { value: 12, itemStyle: { color: '#1e40af' } },
                            { value: 30, itemStyle: { color: '#2563eb' } },
                            { value: 18, itemStyle: { color: '#1e3a8a' } }
                        ],
                        coordinateSystem: 'polar'
                    }]
                });
                chartsToResize.push(aspectChart);
            }

            this.geoProfileCharts = chartsToResize.filter(c => c);
        },

        renderGeoProfileCharts() {
            const ensureChart = (id) => {
                const el = document.getElementById(id);
                if (!el) return null;
                return echarts.getInstanceByDom(el) || echarts.init(el);
            };

            const areaGradient = (color) => new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: `${color}aa` },
                { offset: 1, color: `${color}00` }
            ]);

            const lineChart = (id, data, color, smooth = true) => {
                const chart = ensureChart(id);
                if (!chart) return null;
                chart.setOption({
                    animation: false,
                    grid: { top: 3, right: 0, bottom: 2, left: 0 },
                    xAxis: { type: 'category', show: false, boundaryGap: false, data: data.map((_, i) => i) },
                    yAxis: { type: 'value', show: false, scale: true },
                    series: [{
                        type: 'line',
                        data,
                        smooth,
                        showSymbol: false,
                        lineStyle: { width: 2, color },
                        areaStyle: { color: areaGradient(color) }
                    }]
                });
                return chart;
            };

            const barMiniChart = (id, data, colorList) => {
                const chart = ensureChart(id);
                if (!chart) return null;
                chart.setOption({
                    animation: false,
                    grid: { top: 6, right: 6, bottom: 6, left: 6 },
                    xAxis: { type: 'category', show: false, data: data.map((_, i) => i) },
                    yAxis: { type: 'value', show: false },
                    series: [{
                        type: 'bar',
                        barWidth: '42%',
                        data: data.map((value, index) => ({
                            value,
                            itemStyle: {
                                color: colorList[index % colorList.length],
                                borderRadius: [3, 3, 0, 0]
                            }
                        }))
                    }]
                });
                return chart;
            };

            const chartsToResize = [];

            const terrainChart = ensureChart('chart-terrain-ridges');
            if (terrainChart) {
                terrainChart.setOption({
                    animation: false,
                    grid: { top: 0, right: 0, bottom: 0, left: 0 },
                    xAxis: { type: 'category', show: false, boundaryGap: false, data: [0, 1, 2, 3, 4, 5, 6, 7] },
                    yAxis: { type: 'value', show: false },
                    series: [
                        {
                            type: 'line',
                            data: [12, 28, 18, 36, 24, 33, 20, 26],
                            smooth: true,
                            showSymbol: false,
                            lineStyle: { width: 0 },
                            areaStyle: { color: areaGradient('#60a5fa') }
                        },
                        {
                            type: 'line',
                            data: [6, 14, 10, 21, 15, 19, 11, 16],
                            smooth: true,
                            showSymbol: false,
                            lineStyle: { width: 0 },
                            areaStyle: { color: areaGradient('#a78bfa') }
                        }
                    ]
                });
                chartsToResize.push(terrainChart);
            }

            const mapChart = ensureChart('geo-profile-map');
            if (mapChart) {
                mapChart.setOption({
                    animation: false,
                    backgroundColor: '#0a101d',
                    graphic: {
                        elements: [
                            {
                                type: 'rect',
                                left: 0,
                                top: 0,
                                shape: { width: 2000, height: 1200 },
                                style: {
                                    fill: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                                        { offset: 0, color: '#20311f' },
                                        { offset: 0.35, color: '#263d29' },
                                        { offset: 0.7, color: '#1d3346' },
                                        { offset: 1, color: '#102033' }
                                    ])
                                }
                            },
                            {
                                type: 'polyline',
                                left: '3%',
                                top: '18%',
                                shape: { points: [[0, 50], [70, 28], [145, 52], [220, 20], [315, 46], [430, 8]] },
                                style: { stroke: 'rgba(226, 232, 240, 0.30)', lineWidth: 4 }
                            },
                            {
                                type: 'polyline',
                                left: '10%',
                                top: '55%',
                                shape: { points: [[0, 0], [60, 40], [110, 22], [180, 55], [250, 14], [330, 42]] },
                                style: { stroke: 'rgba(226, 232, 240, 0.22)', lineWidth: 3 }
                            },
                            {
                                type: 'polyline',
                                left: '53%',
                                top: '8%',
                                shape: { points: [[0, 0], [16, 45], [8, 92], [24, 138], [10, 188]] },
                                style: { stroke: 'rgba(109, 213, 250, 0.30)', lineWidth: 12, lineCap: 'round' }
                            },
                            {
                                type: 'circle',
                                left: '50%',
                                top: '52%',
                                shape: { r: 118 },
                                style: { stroke: 'rgba(255,255,255,0.16)', lineWidth: 2, fill: 'transparent' }
                            },
                            {
                                type: 'circle',
                                left: '50%',
                                top: '52%',
                                shape: { r: 76 },
                                style: { stroke: 'rgba(255,255,255,0.28)', lineWidth: 2, fill: 'transparent' }
                            },
                            {
                                type: 'circle',
                                left: '50%',
                                top: '52%',
                                shape: { r: 34 },
                                style: { stroke: 'rgba(255,255,255,0.42)', lineWidth: 2, fill: 'transparent' }
                            },
                            {
                                type: 'text',
                                left: '63%',
                                top: '31%',
                                style: { text: '2km', fill: 'rgba(255,255,255,0.78)', font: '12px sans-serif' }
                            },
                            {
                                type: 'text',
                                left: '72%',
                                top: '48%',
                                style: { text: '5km', fill: 'rgba(255,255,255,0.78)', font: '12px sans-serif' }
                            },
                            {
                                type: 'text',
                                left: '86%',
                                top: '46%',
                                style: { text: '10km', fill: 'rgba(255,255,255,0.78)', font: '12px sans-serif' }
                            },
                            {
                                type: 'circle',
                                left: '50%',
                                top: '52%',
                                shape: { r: 7 },
                                style: {
                                    fill: '#8b5cf6',
                                    stroke: '#dbeafe',
                                    lineWidth: 3,
                                    shadowBlur: 18,
                                    shadowColor: 'rgba(99, 102, 241, 0.75)'
                                }
                            },
                            {
                                type: 'image',
                                style: {
                                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" viewBox="0 0 26 36"><path fill="%237c3aed" d="M13 0C5.82 0 0 5.82 0 13c0 10.24 13 23 13 23s13-12.76 13-23C26 5.82 20.18 0 13 0z"/><circle cx="13" cy="13" r="5" fill="%23ffffff"/></svg>',
                                    x: 0,
                                    y: 0,
                                    width: 26,
                                    height: 36
                                },
                                left: '47.2%',
                                top: '43%'
                            }
                        ]
                    }
                });
                chartsToResize.push(mapChart);
            }

            chartsToResize.push(lineChart('chart-rix', [0.10, 0.12, 0.11, 0.15, 0.14, 0.16, 0.152], '#60a5fa'));
            chartsToResize.push(lineChart('chart-dh', [35, 38, 40, 44, 43, 45, 44.15], '#818cf8'));
            chartsToResize.push(lineChart('chart-slope', [8.5, 9.2, 10.4, 11.1, 10.7, 10.9, 10.81], '#38bdf8'));
            chartsToResize.push(lineChart('chart-ele', [420, 448, 469, 486, 474, 492, 491], '#86efac'));

            chartsToResize.push(lineChart('chart-multi-1', [92, 101, 99, 107, 109.91], '#86efac'));
            chartsToResize.push(lineChart('chart-multi-2', [48, 50, 54, 56, 56.70], '#93c5fd'));
            chartsToResize.push(lineChart('chart-multi-3', [8.8, 9.2, 10.0, 10.6, 10.81], '#fcd34d'));
            chartsToResize.push(lineChart('chart-multi-4', [0.14, 0.16, 0.19, 0.21, 0.219], '#fca5a5'));
            chartsToResize.push(lineChart('chart-multi-5', [-52, -48, -46, -43, -41.90], '#c4b5fd'));

            const landcoverChart = ensureChart('chart-landcover');
            if (landcoverChart) {
                landcoverChart.setOption({
                    animation: false,
                    tooltip: { trigger: 'item' },
                    legend: {
                        orient: 'vertical',
                        right: 2,
                        top: 'center',
                        itemWidth: 6,
                        itemHeight: 6,
                        textStyle: { color: '#94a3b8', fontSize: 10 }
                    },
                    series: [{
                        type: 'pie',
                        radius: ['52%', '82%'],
                        center: ['29%', '52%'],
                        label: {
                            show: true,
                            position: 'center',
                            formatter: '2公里地类面积占比',
                            color: '#e2e8f0',
                            fontSize: 12,
                            lineHeight: 18,
                            fontWeight: 600
                        },
                        labelLine: { show: false },
                        data: [
                            { value: 44.7, name: '林地/森林', itemStyle: { color: '#4ade80' } },
                            { value: 44.5, name: '建设区', itemStyle: { color: '#f97316' } },
                            { value: 10.4, name: '农田', itemStyle: { color: '#facc15' } },
                            { value: 0.3, name: '水体', itemStyle: { color: '#38bdf8' } },
                            { value: 0.1, name: '其他', itemStyle: { color: '#64748b' } }
                        ],
                        itemStyle: {
                            borderColor: '#101826',
                            borderWidth: 2
                        }
                    }]
                });
                chartsToResize.push(landcoverChart);
            }

            chartsToResize.push(barMiniChart('chart-urban-bars', [6, 9, 13, 16, 14, 19, 11], ['#1d4ed8', '#2563eb', '#3b82f6']));
            chartsToResize.push(barMiniChart('chart-other-bars', [12, 8, 6, 11, 4, 9], ['#818cf8', '#6366f1', '#4f46e5']));

            const aspectChart = ensureChart('chart-aspect');
            if (aspectChart) {
                aspectChart.setOption({
                    animation: false,
                    angleAxis: {
                        type: 'category',
                        data: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
                        axisLine: { lineStyle: { color: '#334155' } },
                        axisLabel: { color: '#94a3b8', fontSize: 10 }
                    },
                    radiusAxis: {
                        min: 0,
                        max: 45,
                        splitLine: { lineStyle: { color: 'rgba(148,163,184,0.14)' } },
                        axisLine: { show: false },
                        axisTick: { show: false },
                        axisLabel: { color: '#64748b', fontSize: 9 }
                    },
                    polar: { radius: '72%' },
                    series: [{
                        type: 'bar',
                        coordinateSystem: 'polar',
                        barWidth: 18,
                        data: [
                            { value: 18, itemStyle: { color: '#93c5fd' } },
                            { value: 33, itemStyle: { color: '#4ade80' } },
                            { value: 24, itemStyle: { color: '#60a5fa' } },
                            { value: 17, itemStyle: { color: '#818cf8' } },
                            { value: 11, itemStyle: { color: '#c4b5fd' } },
                            { value: 15, itemStyle: { color: '#7dd3fc' } },
                            { value: 20, itemStyle: { color: '#3b82f6' } },
                            { value: 26, itemStyle: { color: '#a78bfa' } }
                        ],
                        itemStyle: { borderRadius: 4 }
                    }]
                });
                chartsToResize.push(aspectChart);
            }

            this.geoProfileCharts = chartsToResize.filter(Boolean);
        },

        resizeGeoVisuals() {
            this.geoChartInstance?.resize();
            this.geoOntologyGraphInstance?.resize();
            this.geoDetailGraphInstance?.resize();
            this.geoProfileMapInstance?.resize();
            if (this.geoProfileCharts) {
                this.geoProfileCharts.forEach(c => c.resize());
            }
        },

        getGeoDataUrl(code) {
            if (code === '100000') return 'maps/100000_full.json';
            if (code.startsWith('44')) return `maps/guangdong/${code}_full.json`;
            return `https://geo.datav.aliyun.com/areas_v3/bound/${code}_full.json`;
        },

        async fetchGeoJson(code) {
            if (window.LOCAL_GEO_MAPS?.[code]) return window.LOCAL_GEO_MAPS[code];
            const response = await fetch(this.getGeoDataUrl(code));
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const geoJson = await response.json();
            if (!Array.isArray(geoJson.features)) throw new Error('无效的行政区边界数据');
            return geoJson;
        },

        getRegionLabel(region) {
            return region.code === '100000' ? '全国' : region.name;
        },

        async loadAdministrativeMap(region, breadcrumbs, fallbackFeature = null) {
            if (!this.geoChartInstance) return false;
            const loadToken = ++this.geoMapLoadToken;
            this.geoMapError = '';

            try {
                let geoJson;
                if (fallbackFeature) {
                    geoJson = { type: 'FeatureCollection', features: [fallbackFeature] };
                } else {
                    geoJson = await this.fetchGeoJson(region.code);
                }
                if (loadToken !== this.geoMapLoadToken) return false;

                const mapName = `geo-${region.code}`;
                echarts.registerMap(mapName, geoJson);
                this.currentGeoJson = geoJson;
                this.currentGeoMapName = mapName;
                this.currentGeoRegion = region;
                this.geoBreadcrumbs = breadcrumbs;
                await this.syncGeoRegionFiltersFromPath(breadcrumbs);
                this.isGraphMode = false;
                this.selectedNode = null;
                this.activeGeoStation = null;
                this.selectedGeoElement = null;

                this.geoChartInstance.clear();
                this.geoChartInstance.setOption(this.getGeoMapOption(mapName, region.level));
                this.$nextTick(() => this.resizeGeoVisuals());
                return true;
            } catch (error) {
                if (loadToken !== this.geoMapLoadToken) return false;
                console.error('Failed to load administrative map', error);
                this.geoMapError = `${region.name}边界加载失败，已保留当前地图`;
                return false;
            }
        },

        renderGeoMapOption() {
            if (!this.geoChartInstance || !this.currentGeoMapName) return;
            this.geoChartInstance.clear();
            this.geoChartInstance.setOption(this.getGeoMapOption(this.currentGeoMapName, this.currentGeoRegion.level));
            this.$nextTick(() => this.resizeGeoVisuals());
        },

        getGeoFeatureCenter(feature) {
            const directCenter = feature?.properties?.center
                || feature?.properties?.centroid
                || feature?.properties?.cp;
            if (Array.isArray(directCenter) && directCenter.length >= 2) {
                return { lon: Number(directCenter[0]), lat: Number(directCenter[1]) };
            }

            let minLon = Infinity;
            let maxLon = -Infinity;
            let minLat = Infinity;
            let maxLat = -Infinity;

            const visit = (coords) => {
                if (!Array.isArray(coords)) return;
                if (typeof coords[0] === 'number' && typeof coords[1] === 'number') {
                    const lon = Number(coords[0]);
                    const lat = Number(coords[1]);
                    if (Number.isFinite(lon) && Number.isFinite(lat)) {
                        minLon = Math.min(minLon, lon);
                        maxLon = Math.max(maxLon, lon);
                        minLat = Math.min(minLat, lat);
                        maxLat = Math.max(maxLat, lat);
                    }
                    return;
                }
                coords.forEach(visit);
            };

            visit(feature?.geometry?.coordinates);

            if (!Number.isFinite(minLon) || !Number.isFinite(minLat)) {
                return { lon: 105, lat: 35 };
            }

            return {
                lon: (minLon + maxLon) / 2,
                lat: (minLat + maxLat) / 2
            };
        },

        getGeoFeatureHash(text) {
            return Array.from(String(text || '')).reduce((acc, char) => acc + char.charCodeAt(0), 0);
        },

        getGeoElevationColor(value) {
            const matched = this.geoElevationLegendItems.find((item) => value >= item.min);
            return matched?.color || '#1d4e89';
        },

        buildGeoElevationSurfaceStyle() {
            if (this.activeGeoLayerKey !== 'terrain_dem_elevation' || !Array.isArray(this.currentGeoJson?.features)) {
                return [];
            }

            const features = this.currentGeoJson.features;
            const centers = features.map((feature) => ({
                feature,
                center: this.getGeoFeatureCenter(feature)
            }));
            const longitudes = centers.map((item) => item.center.lon).filter(Number.isFinite);
            const latitudes = centers.map((item) => item.center.lat).filter(Number.isFinite);
            const minLon = Math.min(...longitudes);
            const maxLon = Math.max(...longitudes);
            const minLat = Math.min(...latitudes);
            const maxLat = Math.max(...latitudes);
            const spanLon = Math.max(1, maxLon - minLon);
            const spanLat = Math.max(1, maxLat - minLat);
            const maxElevation = this.currentGeoRegion.level === 0 ? 5600 : this.currentGeoRegion.level === 1 ? 3600 : 2200;
            const baseElevation = this.currentGeoRegion.level === 0 ? -120 : 40;

            return centers.map(({ feature, center }) => {
                const westFactor = 1 - ((center.lon - minLon) / spanLon);
                const northFactor = (center.lat - minLat) / spanLat;
                const terrainFactor = Math.pow(Math.max(0, Math.min(1, westFactor)), 1.45);
                const climateFactor = Math.pow(Math.max(0, Math.min(1, northFactor)), 1.1);
                const noise = (this.getGeoFeatureHash(feature.properties?.name) % 260) - 90;
                const elevation = Math.round(baseElevation + terrainFactor * maxElevation + climateFactor * maxElevation * 0.22 + noise);
                const areaColor = this.getGeoElevationColor(elevation);

                return {
                    name: feature.properties?.name || '',
                    value: elevation,
                    itemStyle: {
                        areaColor,
                        borderColor: 'rgba(255,255,255,0.16)',
                        borderWidth: this.currentGeoRegion.level === 0 ? 1 : 0.8
                    },
                    emphasis: {
                        itemStyle: {
                            areaColor,
                            borderColor: '#f8fafc',
                            borderWidth: 1.2
                        }
                    }
                };
            });
        },

        parseGeoLatLng(latlng) {
            const [latString = '', lonString = ''] = String(latlng || '').split(',');
            const lat = parseFloat(latString);
            const lon = parseFloat(lonString);
            return { lat, lon };
        },

        getVisibleGeoStations() {
            const activeNames = this.geoBreadcrumbs
                .slice(1)
                .filter((item) => item.level <= 2)
                .map((item) => item.name);
            return this.geoOntologies
                .filter(item => activeNames.every(name => item.region.includes(name)))
                .map((item, index) => {
                    const { lat, lon } = this.parseGeoLatLng(item.latlng);
                    return { item, index, lat, lon };
                })
                .filter(point => Number.isFinite(point.lat) && Number.isFinite(point.lon));
        },

        buildActiveGeoLayerData(stations) {
            if (this.activeGeoLayerKey !== 'terrain_dem_elevation') return [];

            return stations.map(({ item, index, lat, lon }) => {
                const elevation = 120 + ((index * 67 + item.concepts) % 520);
                const hue = Math.max(0, Math.min(1, (elevation - 120) / 520));
                const color = hue > 0.72
                    ? '#fde047'
                    : hue > 0.48
                        ? '#f59e0b'
                        : hue > 0.24
                            ? '#38bdf8'
                            : '#1d4ed8';

                return {
                    name: item.name,
                    value: [lon, lat, elevation],
                    elevation,
                    item,
                    itemStyle: {
                        color,
                        shadowBlur: 16,
                        shadowColor: `${color}aa`,
                        opacity: 0.84
                    }
                };
            });
        },

        getGeoMapOption(mapName, level) {
            const visibleStations = this.getVisibleGeoStations();
            const elevationRegions = this.buildGeoElevationSurfaceStyle();
            const hasElevationLayer = elevationRegions.length > 0;
            const defaultColor = hasElevationLayer ? '#e2e8f0' : '#38bdf8';
            const defaultShadow = hasElevationLayer ? 'rgba(226, 232, 240, 0.55)' : 'rgba(56, 189, 248, 0.95)';
            const defaultBlur = hasElevationLayer ? 12 : 16;
            const defaultSymbolSize = level === 0 ? 4 : (hasElevationLayer ? 8 : 12);
            const activeSymbolSize = level === 0 ? 6 : (hasElevationLayer ? 12 : 16);

            const stationData = visibleStations.map(({ item, lat, lon }) => {
                const isActive = this.activeGeoStation && this.activeGeoStation.id === item.id;
                return {
                    name: item.name,
                    value: [lon, lat, item.concepts],
                    item,
                    symbolSize: isActive ? activeSymbolSize : defaultSymbolSize,
                    itemStyle: isActive ? { color: '#facc15', shadowBlur: 20, shadowColor: 'rgba(250, 204, 21, 0.95)' } : { color: defaultColor, shadowBlur: defaultBlur, shadowColor: defaultShadow }
                };
            });
            
            // Calculate station count per province
            const provinceCountMap = {};
            this.geoOntologies.forEach(station => {
                if (station.region) {
                    const prov = station.region.split(' ')[0];
                    provinceCountMap[prov] = (provinceCountMap[prov] || 0) + 1;
                }
            });

            const series = [
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: stationData,
                    symbolSize: level === 0 ? 4 : (hasElevationLayer ? 8 : 12),
                    silent: level === 0, // Disable marker click/hover on level 0
                    label: {
                        show: level === 1 || level === 2,
                        formatter: '{b}',
                        position: 'bottom',
                        distance: 6,
                        color: '#e2e8f0',
                        fontSize: 11,
                        textBorderColor: '#02091a',
                        textBorderWidth: 3
                    },
                    labelLayout: {
                        hideOverlap: false
                    },
                    emphasis: {
                        scale: level === 1 || level === 2,
                        itemStyle: level === 1 || level === 2
                            ? {
                                color: '#fb923c',
                                shadowBlur: 24,
                                shadowColor: 'rgba(251, 146, 60, 0.95)'
                            }
                            : undefined
                    },
                    rippleEffect: {
                        scale: level === 0 ? 1 : (hasElevationLayer ? 2.4 : 3.4),
                        brushType: 'stroke'
                    },
                    itemStyle: hasElevationLayer
                        ? { color: '#e2e8f0', shadowBlur: 12, shadowColor: 'rgba(226, 232, 240, 0.55)' }
                        : { color: '#38bdf8', shadowBlur: 16, shadowColor: 'rgba(56, 189, 248, 0.95)' },
                    tooltip: {
                        formatter: (p) => `<div class="font-medium text-blue-400 mb-1">${p.data.name}</div>
                            <div class="text-xs text-gray-400">站点ID: ${p.data.item.id}</div>
                            <div class="text-xs text-gray-400">经纬度: ${p.data.item.latlng || '未知'}</div>`
                    }
                }
            ];

            return {
                backgroundColor: '#02091a',
                animationDurationUpdate: 600,
                animationEasingUpdate: 'cubicInOut',
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(15, 23, 42, 0.94)',
                    borderColor: '#334155',
                    textStyle: { color: '#e2e8f0' },
                    formatter: (p) => {
                        if (p.componentType === 'geo' && level === 0) {
                            const provName = p.name;
                            let matchedCount = 0;
                            for (const [k, v] of Object.entries(provinceCountMap)) {
                                if (provName.includes(k) || k.includes(provName)) {
                                    matchedCount = v;
                                    break;
                                }
                            }
                            return `<div class="flex items-center gap-2 px-1">
                                        <span class="font-medium text-white">${provName}</span>
                                        <span class="text-blue-400 font-mono font-bold">${matchedCount}</span>
                                    </div>`;
                        }
                        return p.name;
                    }
                },
                geo: {
                    map: mapName,
                    roam: false,
                    layoutCenter: ['50%', '54%'],
                    layoutSize: level === 0 ? '88%' : '92%',
                    label: {
                        show: level > 0,
                        color: '#7890b6',
                        fontSize: 10
                    },
                    itemStyle: {
                        areaColor: hasElevationLayer ? '#0b1424' : '#0a1631',
                        borderColor: '#2860a8',
                        borderWidth: 1
                    },
                    emphasis: {
                        itemStyle: { areaColor: '#15396f', borderColor: '#60a5fa', borderWidth: 1.5 },
                        label: { show: true, color: '#dbeafe' }
                    },
                    select: {
                        itemStyle: { areaColor: '#173f7a', borderColor: '#93c5fd' },
                        label: { color: '#eff6ff' }
                    },
                    regions: elevationRegions
                },
                series
            };
        },

        async resetGeoMap() {
            const root = { code: '100000', name: '中国', label: '全国', level: 0 };
            return this.loadAdministrativeMap(root, [root]);
        },

        async refreshGeoMap() {
            if (this.geoCurrentView !== 'graph' || !this.geoChartInstance) return;
            await this.loadAdministrativeMap(this.currentGeoRegion, [...this.geoBreadcrumbs]);
        },

        async ensureGeoDistrictOptions(cityCode) {
            if (!cityCode) return [];
            if (this.geoDistrictOptionsByCity[cityCode]) return this.geoDistrictOptionsByCity[cityCode];

            try {
                const geoJson = await this.fetchGeoJson(cityCode);
                const districts = (geoJson?.features || [])
                    .map((feature) => ({
                        code: String(feature.properties?.adcode || ''),
                        name: feature.properties?.name || ''
                    }))
                    .filter((item) => item.code && item.name);

                this.geoDistrictOptionsByCity = {
                    ...this.geoDistrictOptionsByCity,
                    [cityCode]: districts
                };
                return districts;
            } catch (error) {
                this.geoDistrictOptionsByCity = {
                    ...this.geoDistrictOptionsByCity,
                    [cityCode]: []
                };
                return [];
            }
        },

        async syncGeoRegionFiltersFromPath(path = []) {
            const province = path.find((item) => item.level === 1);
            const city = path.find((item) => item.level === 2);
            const district = path.find((item) => item.level === 3);

            this.geoCountryFilter = '中国';
            this.geoProvinceFilterCode = province?.code || '';
            this.geoCityFilterCode = city?.code || '';
            if (city?.code) await this.ensureGeoDistrictOptions(city.code);
            this.geoDistrictFilterCode = district?.code || '';
        },

        getGeoSelectedRegionPath() {
            const root = { code: '100000', name: '中国', label: '全国', level: 0 };
            const path = [root];
            const province = this.geoProvinceOptions.find((item) => item.code === this.geoProvinceFilterCode);
            if (!province) return path;

            path.push({ code: province.code, name: province.name, label: province.name, level: 1 });

            const city = this.geoCityOptions.find((item) => item.code === this.geoCityFilterCode);
            if (!city) return path;

            path.push({ code: city.code, name: city.name, label: city.name, level: 2 });

            const district = this.geoDistrictOptions.find((item) => item.code === this.geoDistrictFilterCode);
            if (!district) return path;

            path.push({ code: district.code, name: district.name, label: district.name, level: 3 });
            return path;
        },

        getGeoSelectedRegionText() {
            const path = this.getGeoSelectedRegionPath();
            if (path.length <= 1) return '';
            return path.slice(1).map(item => item.label).join(' / ');
        },

        async applyGeoRegionFilterToGraph() {
            if (this.geoCurrentView !== 'graph' || !this.geoChartInstance) return;

            const path = this.getGeoSelectedRegionPath();
            const target = path[path.length - 1];
            if (!target || path.length === 1) {
                await this.resetGeoMap();
                return;
            }

            if (target.level === 3) {
                const cityCode = this.geoCityFilterCode;
                if (!cityCode) return;
                const cityJson = await this.fetchGeoJson(cityCode);
                const feature = cityJson?.features.find((item) => String(item.properties?.adcode) === target.code);
                if (!feature) return;
                await this.loadAdministrativeMap(target, path, feature);
                return;
            }

            if (target.code === '441900' || target.code === '442000') {
                const provinceJson = target.level === 2 ? await this.fetchGeoJson('440000') : null;
                const feature = provinceJson?.features.find((item) => String(item.properties?.adcode) === target.code);
                await this.loadAdministrativeMap(target, path, feature || null);
                return;
            }

            await this.loadAdministrativeMap(target, path);
        },

        async handleGeoCountryChange() {
            this.geoProvinceFilterCode = '';
            this.geoCityFilterCode = '';
            this.geoDistrictFilterCode = '';
            await this.applyGeoRegionFilterToGraph();
        },

        async handleGeoProvinceChange() {
            this.geoCityFilterCode = '';
            this.geoDistrictFilterCode = '';
            await this.applyGeoRegionFilterToGraph();
        },

        async handleGeoCityChange() {
            this.geoDistrictFilterCode = '';
            if (this.geoCityFilterCode) await this.ensureGeoDistrictOptions(this.geoCityFilterCode);
            await this.applyGeoRegionFilterToGraph();
        },

        async handleGeoDistrictChange() {
            await this.applyGeoRegionFilterToGraph();
        },

        async drillToRegion(name) {
            if (this.currentGeoRegion.level >= 2 || !this.currentGeoJson) return;
            const feature = this.currentGeoJson.features.find(item => item.properties?.name === name);
            const code = String(feature?.properties?.adcode || '');
            if (!feature || !code) return;

            const nextRegion = {
                code,
                name: feature.properties.name,
                label: feature.properties.name,
                level: this.currentGeoRegion.level + 1
            };
            const nextBreadcrumbs = [...this.geoBreadcrumbs, nextRegion];
            const terminalCity = code === '441900' || code === '442000';
            await this.loadAdministrativeMap(nextRegion, nextBreadcrumbs, terminalCity ? feature : null);
        },

        async navigateBack() {
            if (this.geoBreadcrumbs.length <= 1) return;
            await this.navigateToBreadcrumb(this.geoBreadcrumbs.length - 2);
        },

        async navigateToBreadcrumb(index) {
            const target = this.geoBreadcrumbs[index];
            if (!target) return;
            await this.loadAdministrativeMap(target, this.geoBreadcrumbs.slice(0, index + 1));
        },

        findRegionPath(code) {
            const normalizedCode = code === '86' ? '100000' : String(code);
            const root = { code: '100000', name: '中国', label: '全国', level: 0 };
            if (normalizedCode === '100000') return [root];
            const province = this.regions[0]?.children?.find(item => normalizedCode === item.code || item.children?.some(child => child.code === normalizedCode));
            if (!province) return null;
            const provinceEntry = { code: province.code, name: province.name, label: province.name, level: 1 };
            if (normalizedCode === province.code) return [root, provinceEntry];
            const city = province.children?.find(item => item.code === normalizedCode);
            return city ? [root, provinceEntry, { code: city.code, name: city.name, label: city.name, level: 2 }] : null;
        },

        async selectRegionFromTree(region) {
            if (this.geoCurrentView !== 'graph') return;
            const path = this.findRegionPath(region.code);
            if (!path) return;
            const target = path[path.length - 1];
            if (target.code === '441900' || target.code === '442000') {
                const provinceJson = target.level === 2 ? await this.fetchGeoJson('440000') : null;
                const feature = provinceJson?.features.find(item => String(item.properties?.adcode) === target.code);
                await this.loadAdministrativeMap(target, path, feature || null);
                return;
            }
            await this.loadAdministrativeMap(target, path);
        },

        async backToMap() {
            this.closeGeoAnalysis();
        },

        async toggleGeoFullscreen() {
            const panel = this.$refs.geoPanel;
            if (!panel) return;
            try {
                if (document.fullscreenElement === panel) await document.exitFullscreen();
                else await panel.requestFullscreen();
            } catch (error) {
                console.error('Failed to toggle fullscreen', error);
                this.geoMapError = '浏览器未允许进入全屏';
            }
        },

        toggleGeo3D() {
            this.isGeo3D = !this.isGeo3D;
            setTimeout(() => this.resizeGeoVisuals(), 430);
        },

        closeGeoAnalysis() {
            this.isGraphMode = false;
            this.selectedNode = null;
            this.activeGeoStation = null;
            this.selectedGeoElement = null;
            this.activeGeoOntologyData = null;
            this.activeGeoOntologyPayloads = null;
            this.geoOntologyViewMode = 'ontology';
            
            // Re-render map option to remove highlight color
            if (this.geoChartInstance) {
                this.geoChartInstance.setOption(this.getGeoMapOption(this.currentGeoMapName, this.currentGeoRegion.level));
            }
            
            this.$nextTick(() => this.resizeGeoVisuals());
        },

        async toggleGeoOntologyGraphFullscreen() {
            const panel = this.$refs.geoOntologyViewport;
            if (!panel) return;
            try {
                if (document.fullscreenElement === panel) await document.exitFullscreen();
                else await panel.requestFullscreen();
            } catch (error) {
                console.error('Failed to toggle ontology viewport fullscreen', error);
                this.geoMapError = '浏览器未允许图谱视口进入全屏';
            }
        },

        resetGeoOntologyViewport() {
            if (!this.activeGeoOntologyData || !this.activeGeoOntologyPayloads) return;
            this.renderOntologyGraph(this.activeGeoOntologyData, this.activeGeoOntologyPayloads);
            this.$nextTick(() => this.geoOntologyGraphInstance?.resize());
        },

        async openGeoAnalysis(station) {
            if (!station || typeof rawStationData590870 === 'undefined') return;

            const data = this.cloneGeoSampleData(station);
            const payloads = this.buildGeoElementPayloads(data, station);
            const hierarchy = this.buildGeoHierarchyGraphData(data, station);
            this.activeGeoStation = station;
            this.isGraphMode = true;
            this.activeGeoOntologyData = data;
            this.activeGeoOntologyPayloads = payloads;
            this.geoOntologyViewMode = 'ontology';
            this.selectedGeoElement = null;

            await this.$nextTick();
            this.renderOntologyGraph(data, payloads);
            this.resizeGeoVisuals();
            setTimeout(() => this.resizeGeoVisuals(), 460);
        },

        renderOntologyGraph(data, payloads) {
            const container = document.getElementById('geo-ontology-graph');
            if (!container) return;
            this.activeGeoOntologyData = data;
            this.activeGeoOntologyPayloads = payloads;

            if (!this.geoOntologyGraphInstance) {
                this.geoOntologyGraphInstance = echarts.init(container);
                this.geoOntologyGraphInstance.on('click', (params) => {
                    if (params.data?.payload) {
                        this.selectedGeoElement = params.data.payload;
                    }
                });
                this.geoOntologyGraphInstance.getZr().on('click', (params) => {
                    if (!params.target) {
                        this.selectedGeoElement = null;
                    }
                });
            }

            if (this.isGeoSystemDemoStation()) {
                const oceanPayloads = this.buildOceanClimatePlaceholderPayloads(this.activeGeoStation);
                const anchorPayload = this.buildGeoSystemAnchorPayload(this.activeGeoStation, data);
                const centerId = data.station_identity.station_id;
                const centerX = 420;
                const centerY = 186;
                const nodes = [{
                    id: centerId,
                    name: `${data.station_identity.chinese_name}\n站点锚点`,
                    x: centerX,
                    y: centerY,
                    symbolSize: 86,
                    payload: anchorPayload,
                    itemStyle: {
                        color: '#08111f',
                        borderColor: '#f8fafc',
                        borderWidth: 2.6,
                        shadowBlur: 26,
                        shadowColor: 'rgba(148, 163, 184, 0.42)'
                    },
                    label: {
                        show: true,
                        color: '#f8fafc',
                        fontSize: 15,
                        fontWeight: 700,
                        lineHeight: 18
                    }
                }];
                const links = [];
                const landConfigs = [
                    { key: 'terrain_structure', x: 164, y: 90, color: '#3b82f6', metricColor: '#93c5fd' },
                    { key: 'land_surface_cover', x: 208, y: 292, color: '#2563eb', metricColor: '#93c5fd' },
                    { key: 'coastal_environment', x: 312, y: 360, color: '#6366f1', metricColor: '#c7d2fe' },
                    { key: 'station_environment_class', x: 108, y: 214, color: '#60a5fa', metricColor: '#bfdbfe' }
                ];
                const oceanConfigs = [
                    { key: 'submarine_topography', x: 640, y: 88, color: '#06b6d4', metricColor: '#a5f3fc' },
                    { key: 'sea_surface_temperature', x: 722, y: 178, color: '#14b8a6', metricColor: '#99f6e4' },
                    { key: 'salinity', x: 658, y: 300, color: '#0ea5e9', metricColor: '#bae6fd' },
                    { key: 'current', x: 810, y: 120, color: '#22d3ee', metricColor: '#cffafe' },
                    { key: 'tide', x: 794, y: 286, color: '#2dd4bf', metricColor: '#ccfbf1' }
                ];

                const pushWing = (configList, sourcePayloads, wingType) => {
                    configList.forEach((config) => {
                        const payload = sourcePayloads[config.key];
                        if (!payload) return;

                        nodes.push({
                            id: `${wingType}_${config.key}`,
                            name: payload.label,
                            x: config.x,
                            y: config.y,
                            symbolSize: 56,
                            payload,
                            itemStyle: {
                                color: wingType === 'land' ? '#061120' : '#04151b',
                                borderColor: config.color,
                                borderWidth: 2.2,
                                shadowBlur: 22,
                                shadowColor: `${config.color}66`
                            },
                            label: {
                                show: true,
                                color: config.metricColor,
                                fontSize: 11,
                                formatter: () => payload.label
                            }
                        });

                        links.push({
                            source: centerId,
                            target: `${wingType}_${config.key}`,
                            lineStyle: {
                                color: `${config.color}99`,
                                width: wingType === 'land' ? 1.9 : 1.6,
                                curveness: wingType === 'land' ? 0.16 : -0.12
                            }
                        });

                        payload.highlights.slice(0, 2).forEach((highlight, index) => {
                            const offsetX = wingType === 'land' ? -70 : 72;
                            const offsetY = index === 0 ? -40 : 46;
                            nodes.push({
                                id: `${wingType}_${config.key}_${index}`,
                                name: highlight.label,
                                x: config.x + offsetX,
                                y: config.y + offsetY,
                                symbolSize: 22,
                                payload: {
                                    ...payload,
                                    label: `${payload.label} · ${highlight.label}`,
                                    nodeTypeLabel: '指标节点',
                                    categoryLabel: wingType === 'land' ? '陆侧指标' : '海侧指标',
                                    highlights: [highlight, ...payload.highlights.filter(item => item.label !== highlight.label)].slice(0, 3)
                                },
                                itemStyle: {
                                    color: wingType === 'land' ? '#091a33' : '#05212b',
                                    borderColor: config.color,
                                    borderWidth: 1,
                                    shadowBlur: 12,
                                    shadowColor: `${config.color}44`
                                },
                                label: {
                                    show: true,
                                    color: config.metricColor,
                                    fontSize: 9,
                                    formatter: () => highlight.label
                                }
                            });

                            links.push({
                                source: `${wingType}_${config.key}`,
                                target: `${wingType}_${config.key}_${index}`,
                                lineStyle: {
                                    color: `${config.color}80`,
                                    width: 1,
                                    curveness: wingType === 'land' ? 0.06 : -0.06
                                }
                            });
                        });
                    });
                };

                pushWing(landConfigs, payloads, 'land');
                pushWing(oceanConfigs, oceanPayloads, 'ocean');

                const styledDemoGraph = this.applyGeoGraphViewStyling(nodes, links);
                const demoGraphic = this.geoOntologyViewMode === 'asset'
                    ? this.getGeoAssetGraphGraphics()
                    : [
                        {
                            type: 'text',
                            left: 24,
                            top: 10,
                            style: {
                                text: '陆侧本体',
                                fill: '#93c5fd',
                                font: '600 12px sans-serif'
                            }
                        },
                        {
                            type: 'text',
                            right: 28,
                            top: 10,
                            style: {
                                text: '海侧本体（预留）',
                                fill: '#99f6e4',
                                font: '600 12px sans-serif'
                            }
                        }
                    ];

                this.geoOntologyGraphInstance.setOption({
                    backgroundColor: 'transparent',
                    animationDurationUpdate: 420,
                    animationEasingUpdate: 'cubicOut',
                    graphic: demoGraphic,
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: 'rgba(5, 16, 34, 0.92)',
                        borderColor: 'rgba(56, 189, 248, 0.35)',
                        textStyle: { color: '#dbeafe' },
                        formatter: (params) => params.data?.payload
                            ? `<div style="font-size:12px;color:#f8fafc;margin-bottom:4px;">${params.data.payload.label}</div><div style="font-size:11px;color:#94a3b8;">${params.data.payload.summary}</div>`
                            : params.name
                    },
                    series: [{
                        type: 'graph',
                        layout: 'none',
                        coordinateSystem: null,
                        roam: true,
                        zoom: 1,
                        scaleLimit: {
                            min: 0.55,
                            max: 2.2
                        },
                        draggable: true,
                        data: styledDemoGraph.nodes,
                        links: styledDemoGraph.links,
                        edgeSymbol: ['none', 'arrow'],
                        edgeSymbolSize: [0, 7],
                        lineStyle: {
                            opacity: 0.86
                        },
                        emphasis: {
                            focus: 'adjacency',
                            lineStyle: {
                                width: 2.8
                            }
                        }
                    }]
                });
                return;
            }

            const rawHierarchy = this.buildGeoHierarchyGraphData(data, this.activeGeoStation);
            const hierarchy = this.geoOntologyViewMode === 'ontology'
                ? this.filterGeoHierarchyForOntologyView(rawHierarchy)
                : rawHierarchy;
            const centerId = data.station_identity.station_id;
            const centerX = 620;
            const centerY = 376;
            const radius = 236;
            const thirdRadius = 144;
            const nodes = [{
                id: centerId,
                name: `${data.station_identity.chinese_name}\n${data.station_identity.station_id}`,
                x: centerX,
                y: centerY,
                symbolSize: 78,
                payload: hierarchy.station,
                itemStyle: {
                    color: '#071526',
                    borderColor: '#f43f5e',
                    borderWidth: 3,
                    shadowBlur: 28,
                    shadowColor: 'rgba(244, 63, 94, 0.6)'
                },
                label: {
                    show: true,
                    color: '#f8fafc',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 17,
                    formatter: () => `${data.station_identity.chinese_name}\n${data.station_identity.station_id}`
                }
            }];
            const links = [];

            hierarchy.dimensions.forEach((dimension, index) => {
                const angle = (-90 + index * (360 / hierarchy.dimensions.length)) * (Math.PI / 180);
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                const dimensionId = `analysis_dimension_${dimension.key}`;

                nodes.push({
                    id: dimensionId,
                    name: dimension.label,
                    x,
                    y,
                    symbolSize: 58,
                    payload: dimension,
                    itemStyle: {
                        color: '#06111e',
                        borderColor: dimension.color,
                        borderWidth: 2,
                        shadowBlur: 18,
                        shadowColor: `${dimension.color}55`
                    },
                    label: {
                        show: true,
                        color: '#dbeafe',
                        fontSize: 11,
                        formatter: () => dimension.label
                    }
                });

                links.push({
                    source: centerId,
                    target: dimensionId,
                    lineStyle: {
                        color: `${dimension.color}90`,
                        width: 1.5,
                        curveness: 0.1
                    }
                });

                const baseAngle = angle;
                const childAngles = dimension.children.length === 1
                    ? [baseAngle]
                    : dimension.children.map((_, childIndex) => baseAngle - 0.34 + (0.68 * childIndex / (dimension.children.length - 1)));

                dimension.children.forEach((child, childIndex) => {
                    const childId = `analysis_child_${dimension.key}_${child.key}`;
                    const childX = x + Math.cos(childAngles[childIndex]) * thirdRadius;
                    const childY = y + Math.sin(childAngles[childIndex]) * thirdRadius;

                    nodes.push({
                        id: childId,
                        name: child.label,
                        x: childX,
                        y: childY,
                        symbolSize: 24,
                        payload: child,
                        itemStyle: {
                            color: '#03111f',
                            borderColor: dimension.color,
                            borderWidth: 1,
                            shadowBlur: 10,
                            shadowColor: `${dimension.color}44`
                        },
                        label: {
                            show: true,
                            color: '#cbd5e1',
                            fontSize: 9,
                            formatter: () => child.label
                        }
                    });

                    links.push({
                        source: dimensionId,
                        target: childId,
                        lineStyle: {
                            color: `${dimension.color}75`,
                            width: 1,
                            curveness: 0.06
                        }
                    });

                    this.appendGeoAttributeGraphNodes({
                        nodes,
                        links,
                        dimension,
                        child,
                        childId,
                        childX,
                        childY,
                        centerX,
                        centerY,
                        prefix: 'analysis_attr',
                        attributeDistance: 88,
                        symbolSize: 28,
                        fontSize: 7,
                        lineWidth: 0.75
                    });
                });
            });

            const styledHierarchyGraph = this.applyGeoGraphViewStyling(nodes, links);

            this.geoOntologyGraphInstance.setOption({
                backgroundColor: 'transparent',
                animationDurationUpdate: 420,
                animationEasingUpdate: 'cubicOut',
                graphic: this.getGeoAssetGraphGraphics(),
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(5, 16, 34, 0.92)',
                    borderColor: 'rgba(56, 189, 248, 0.35)',
                    textStyle: { color: '#dbeafe' },
                    formatter: (params) => params.data?.payload
                        ? `<div style="font-size:12px;color:#f8fafc;margin-bottom:4px;">${params.data.payload.label}</div><div style="font-size:11px;color:#94a3b8;">${params.data.payload.summary}</div>`
                        : params.name
                },
                series: [{
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: null,
                    roam: true,
                    zoom: 0.64,
                    scaleLimit: {
                        min: 0.32,
                        max: 2.4
                    },
                    draggable: true,
                    data: styledHierarchyGraph.nodes,
                    links: styledHierarchyGraph.links,
                    edgeSymbol: ['none', 'arrow'],
                    edgeSymbolSize: [0, 7],
                    lineStyle: {
                        opacity: 0.85
                    },
                    emphasis: {
                        focus: 'adjacency',
                        lineStyle: {
                            width: 2.6
                        }
                    }
                }]
            });
        },

    }));
});
