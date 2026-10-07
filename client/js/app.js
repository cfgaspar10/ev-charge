    let VEHICLE_DATA = [

    // Audi
    { id: "audi_a6_avant_e_tron_s_line", type: "BEV", brand: "Audi", model: "A6 Avant e-tron S Line", battery: 100, maxAc: 11, maxDc: 270, range: 474 },
    { id: "audi_a6_sportback_e_tron_s_line", type: "BEV", brand: "Audi", model: "A6 Sportback e-tron S line", battery: 100, maxAc: 11, maxDc: 270, range: 445 },
    { id: "audi_q6_e_tron_s_line_quattro", type: "BEV", brand: "Audi", model: "Q6 e-tron S line quattro", battery: 100, maxAc: 11, maxDc: 270, range: 424 },
    { id: "audi_q6_sportback_e_tron_55_quattro", type: "BEV", brand: "Audi", model: "Q6 Sportback e-tron 55 quattro", battery: 100, maxAc: 11, maxDc: 270, range: 427 },
    { id: "audi_rs_e_tron_gt_performance", type: "BEV", brand: "Audi", model: "RS e-tron GT performance", battery: 105, maxAc: 22, maxDc: 320, range: 490 },
    { id: "audi_sq6_sportback_e_tron_quattro", type: "BEV", brand: "Audi", model: "SQ6 Sportback e-tron quattro", battery: 100, maxAc: 11, maxDc: 270, range: 428 },

    // AVATR
    { id: "avatr_11_awd", type: "BEV", brand: "AVATR", model: "11 AWD", battery: 116, maxAc: 11, maxDc: 240, range: 550 },

    // BMW
    { id: "bmw_ix_50", type: "BEV", brand: "BMW", model: "iX xDrive50", battery: 111.5, maxAc: 11, maxDc: 195, range: 528 },
    { id: "bmw_ix3_50_xdrive", type: "BEV", brand: "BMW", model: "iX3 50 xDrive", battery: 108.7, maxAc: 11, maxDc: 150, range: 565 },

    // BYD
    { id: "byd_atto_2_dm_i_flex_gl_phev", type: "PHEV", brand: "BYD", model: "Atto 2 DM-i Flex GL", battery: 7.85, maxAc: 3.3, maxDc: 0, range: 38 },
    { id: "byd_atto_2_dm_i_flex_gs_phev", type: "PHEV", brand: "BYD", model: "Atto 2 DM-i Flex GS", battery: 18.03, maxAc: 6.6, maxDc: 0, range: 75 },
    { id: "byd_atto_8", type: "BEV", brand: "BYD", model: "ATTO 8", battery: 35.6, maxAc: 6.6, maxDc: 50, range: 185 },
    { id: "byd_atto_8_phev", type: "PHEV", brand: "BYD", model: "ATTO 8 (PHEV)", battery: 35.6, maxAc: 6.6, maxDc: 40, range: 110 },
    { id: "byd_dolphin_gs", type: "BEV", brand: "BYD", model: "Dolphin GS", battery: 44.9, maxAc: 6.6, maxDc: 60, range: 291 },
    { id: "byd_dolphin_mini", type: "BEV", brand: "BYD", model: "Dolphin Mini", battery: 38, maxAc: 6.6, maxDc: 40, range: 280 },
    { id: "byd_dolphin_plus_ev", type: "BEV", brand: "BYD", model: "Dolphin Plus EV", battery: 60.48, maxAc: 7, maxDc: 80, range: 330 },
    { id: "byd_dolphin_se", type: "BEV", brand: "BYD", model: "Dolphin SE", battery: 45.12, maxAc: 6.6, maxDc: 60, range: 295 },
    { id: "byd_han_ev", type: "BEV", brand: "BYD", model: "Han EV", battery: 85.4, maxAc: 6.6, maxDc: 120, range: 349 },
    { id: "byd_king_gl_phev", type: "PHEV", brand: "BYD", model: "King GL (PHEV)", battery: 8.3, maxAc: 3.3, maxDc: 0, range: 36 },
    { id: "byd_king_gs_phev", type: "PHEV", brand: "BYD", model: "King GS (PHEV)", battery: 18.3, maxAc: 6.6, maxDc: 0, range: 80 },
    { id: "byd_seal_ev", type: "BEV", brand: "BYD", model: "Seal EV", battery: 82.5, maxAc: 7.4, maxDc: 150, range: 372 },
    { id: "byd_sealion_7", type: "BEV", brand: "BYD", model: "Sealion 7", battery: 82.56, maxAc: 11, maxDc: 150, range: 429 },
    { id: "byd_shark_gs_phev", type: "PHEV", brand: "BYD", model: "Shark GS (PHEV)", battery: 29.6, maxAc: 6.6, maxDc: 40, range: 100 },
    { id: "byd_song_plus_dm_i_phev", type: "PHEV", brand: "BYD", model: "Song Plus DM-i", battery: 18.3, maxAc: 6.6, maxDc: 18, range: 68 },
    { id: "byd_song_plus_premium_dm_i_phev", type: "PHEV", brand: "BYD", model: "Song Plus Premium DM-i", battery: 26.6, maxAc: 6.6, maxDc: 18, range: 105 },
    { id: "byd_song_pro_gl_phev", type: "PHEV", brand: "BYD", model: "Song Pro GL (PHEV)", battery: 13.1, maxAc: 3.3, maxDc: 0, range: 49 },
    { id: "byd_song_pro_gs_phev", type: "PHEV", brand: "BYD", model: "Song Pro GS (PHEV)", battery: 18.3, maxAc: 6.6, maxDc: 0, range: 68 },
    { id: "byd_tan_ev", type: "BEV", brand: "BYD", model: "Tan EV", battery: 108.8, maxAc: 11, maxDc: 170, range: 437 },
    { id: "byd_yuan_plus", type: "BEV", brand: "BYD", model: "Yuan Plus", battery: 60.48, maxAc: 7, maxDc: 80, range: 294 },
    { id: "byd_yuan_pro_ev", type: "BEV", brand: "BYD", model: "Yuan Pro EV", battery: 45.1, maxAc: 6.6, maxDc: 65, range: 250 },

    // CAOA Changan
    { id: "caoa_changan_cs55_ultra_hybrid_phev_flex", type: "PHEV", brand: "CAOA Changan", model: "CS55 Ultra-Hybrid PHEV Flex", battery: 18.4, maxAc: 6.6, maxDc: 30, range: 85 },

    // Caoa Chery
    { id: "caoa_chery_icar", type: "BEV", brand: "Caoa Chery", model: "iCar", battery: 30.8, maxAc: 6.6, maxDc: 0, range: 160 },
    { id: "caoa_chery_tiggo_5x_pro_phev", type: "PHEV", brand: "Caoa Chery", model: "Tiggo 5X Pro (PHEV)", battery: 19.3, maxAc: 6.6, maxDc: 0, range: 54 },
    { id: "caoa_chery_tiggo_7_pro_phev", type: "PHEV", brand: "Caoa Chery", model: "Tiggo 7 Pro PHEV", battery: 18.4, maxAc: 6.6, maxDc: 50, range: 54 },
    { id: "caoa_chery_tiggo_8_pro_phev", type: "PHEV", brand: "Caoa Chery", model: "Tiggo 8 Pro PHEV", battery: 18.4, maxAc: 6.6, maxDc: 50, range: 54 },

    // Chery
    { id: "chery_tiggo_7_pro_phev_2027", type: "PHEV", brand: "Chery", model: "Tiggo 7 Pro PHEV 2027", battery: 18.4, maxAc: 6.6, maxDc: 50, range: 54 },
    { id: "chery_tiggo_8_pro_phev_2027", type: "PHEV", brand: "Chery", model: "Tiggo 8 Pro PHEV 2027", battery: 18.4, maxAc: 6.6, maxDc: 50, range: 54 },
    { id: "chery_tiggo_9_phev", type: "PHEV", brand: "Chery", model: "Tiggo 9 PHEV", battery: 34.46, maxAc: 6.6, maxDc: 60, range: 110 },

    // Chevrolet
    { id: "chevrolet_blazer_ev_rs", type: "BEV", brand: "Chevrolet", model: "Blazer EV RS", battery: 102, maxAc: 22, maxDc: 190, range: 530 },
    { id: "chevrolet_bolt_euv", type: "BEV", brand: "Chevrolet", model: "Bolt EUV", battery: 66, maxAc: 11, maxDc: 55, range: 343 },
    { id: "chevrolet_captiva_ev_premier_60_kwh", type: "BEV", brand: "Chevrolet", model: "Captiva EV Premier 60 kWh", battery: 60, maxAc: 6.6, maxDc: 80, range: 312 },
    { id: "chevrolet_spark_euv", type: "BEV", brand: "Chevrolet", model: "Spark EUV", battery: 41.9, maxAc: 7, maxDc: 50, range: 260 },

    // Denza
    { id: "denza_b5_phev", type: "PHEV", brand: "Denza", model: "B5 PHEV", battery: 31.8, maxAc: 6.6, maxDc: 40, range: 90 },
    { id: "denza_z9_gt", type: "BEV", brand: "Denza", model: "Z9 GT", battery: 100, maxAc: 22, maxDc: 270, range: 440 },

    // Fiat
    { id: "fiat_500e", type: "BEV", brand: "Fiat", model: "500e", battery: 42, maxAc: 11, maxDc: 85, range: 218 },

    // GAC
    { id: "gac_aion_es_plus", type: "BEV", brand: "GAC", model: "Aion ES Plus", battery: 55.2, maxAc: 6.6, maxDc: 60, range: 314 },
    { id: "gac_aion_ut_elite", type: "BEV", brand: "GAC", model: "Aion UT Elite", battery: 60, maxAc: 6.6, maxDc: 87, range: 310 },
    { id: "gac_aion_ut_premium", type: "BEV", brand: "GAC", model: "Aion UT Premium", battery: 44.12, maxAc: 6.6, maxDc: 64, range: 253 },
    { id: "gac_aion_v_elite", type: "BEV", brand: "GAC", model: "Aion V Elite", battery: 75.3, maxAc: 11, maxDc: 180, range: 389 },
    { id: "gac_gs9_phev", type: "PHEV", brand: "GAC", model: "GS9 PHEV", battery: 44.5, maxAc: 6.6, maxDc: 50, range: 115 },
    { id: "gac_hyptec_ht_elite", type: "BEV", brand: "GAC", model: "Hyptec HT Elite", battery: 72.7, maxAc: 11, maxDc: 150, range: 362 },
    { id: "gac_hyptec_ht_ultra", type: "BEV", brand: "GAC", model: "Hyptec HT Ultra", battery: 72.7, maxAc: 11, maxDc: 200, range: 362 },

    // Geely
    { id: "geely_ex2", type: "BEV", brand: "Geely", model: "EX2", battery: 30, maxAc: 6.6, maxDc: 30, range: 156 },
    { id: "geely_ex5_em_i_max_184_kwh_phev", type: "PHEV", brand: "Geely", model: "EX5 EM-i MAX 18.4 kWh (PHEV)", battery: 18.4, maxAc: 6.6, maxDc: 30, range: 85 },
    { id: "geely_ex5_em_i_pro_184_kwh_phev", type: "PHEV", brand: "Geely", model: "EX5 EM-i PRO 18.4 kWh (PHEV)", battery: 18.4, maxAc: 6.6, maxDc: 30, range: 85 },
    { id: "geely_ex5_em_i_ultra_298_kwh_phev", type: "PHEV", brand: "Geely", model: "EX5 EM-i ULTRA 29.8 kWh (PHEV)", battery: 29.8, maxAc: 6.6, maxDc: 30, range: 130 },
    { id: "geely_ex5_max_6022_kwh", type: "BEV", brand: "Geely", model: "EX5 MAX 60.22 kWh", battery: 60.22, maxAc: 11, maxDc: 100, range: 430 },
    { id: "geely_ex5_pro_6022_kwh", type: "BEV", brand: "Geely", model: "EX5 PRO 60.22 kWh", battery: 60.22, maxAc: 11, maxDc: 100, range: 430 },

    // GWM
    { id: "gwm_h6_gt_phev", type: "PHEV", brand: "GWM", model: "H6 GT PHEV", battery: 34, maxAc: 6.6, maxDc: 33, range: 113 },
    { id: "gwm_h6_phev19_phev", type: "PHEV", brand: "GWM", model: "H6 PHEV19", battery: 19, maxAc: 6.6, maxDc: 33, range: 74 },
    { id: "gwm_h6_phev35_phev", type: "PHEV", brand: "GWM", model: "H6 PHEV35", battery: 34, maxAc: 6.6, maxDc: 33, range: 113 },
    { id: "gwm_ora_03_bev58", type: "BEV", brand: "GWM", model: "Ora 03 BEV58", battery: 58, maxAc: 11, maxDc: 67, range: 315 },
    { id: "gwm_ora_5", type: "BEV", brand: "GWM", model: "Ora 5", battery: 58.3, maxAc: 11, maxDc: 120, range: 349 },
    { id: "gwm_tank_300_phev", type: "PHEV", brand: "GWM", model: "Tank 300 (PHEV)", battery: 37.1, maxAc: 6.6, maxDc: 50, range: 110 },
    { id: "gwm_wey_07_phev", type: "PHEV", brand: "GWM", model: "Wey 07 (PHEV)", battery: 42.5, maxAc: 6.6, maxDc: 50, range: 130 },
    { id: "gwm_wey_07_dark_edition_phev", type: "PHEV", brand: "GWM", model: "Wey 07 Dark Edition PHEV", battery: 42.5, maxAc: 6.6, maxDc: 50, range: 128 },

    // Hyundai
    { id: "hyundai_ioniq_5", type: "BEV", brand: "Hyundai", model: "IONIQ 5", battery: 84, maxAc: 11, maxDc: 230, range: 437 },

    // JAC
    { id: "jac_e_js1", type: "BEV", brand: "JAC", model: "E-JS1", battery: 30.2, maxAc: 6.6, maxDc: 30, range: 157 },
    { id: "jac_e_js4", type: "BEV", brand: "JAC", model: "E-JS4", battery: 55.1, maxAc: 6.6, maxDc: 50, range: 287 },

    // Jaecoo
    { id: "jaecoo_7_elite_2026", type: "PHEV", brand: "Jaecoo", model: "7 Elite 2026", battery: 18.3, maxAc: 6.6, maxDc: 40, range: 79 },
    { id: "jaecoo_7_shs_luxury_2026", type: "PHEV", brand: "Jaecoo", model: "7 SHS Luxury 2026", battery: 18.3, maxAc: 6.6, maxDc: 40, range: 79 },
    { id: "jaecoo_7_shs_prestige_2026", type: "PHEV", brand: "Jaecoo", model: "7 SHS Prestige 2026", battery: 18.3, maxAc: 6.6, maxDc: 40, range: 79 },

    // Jeep
    { id: "jeep_compass_4xe_phev", type: "PHEV", brand: "Jeep", model: "Compass 4xe", battery: 11.4, maxAc: 7.4, maxDc: 0, range: 44 },

    // Jetour
    { id: "jetour_s06_phev", type: "PHEV", brand: "Jetour", model: "S06 PHEV", battery: 19.4, maxAc: 6.6, maxDc: 30, range: 80 },
    { id: "jetour_t1_phev", type: "PHEV", brand: "Jetour", model: "T1 PHEV", battery: 26.7, maxAc: 6.6, maxDc: 30, range: 90 },
    { id: "jetour_t2_phev", type: "PHEV", brand: "Jetour", model: "T2 PHEV", battery: 26.7, maxAc: 6.6, maxDc: 30, range: 90 },
    { id: "jetour_t2_xwd_4x4_phev", type: "PHEV", brand: "Jetour", model: "T2 XWD 4x4 PHEV", battery: 43.2, maxAc: 6.6, maxDc: 50, range: 100 },

    // Kia
    { id: "kia_ev5_land", type: "BEV", brand: "Kia", model: "EV5 Land", battery: 88.16, maxAc: 11, maxDc: 102, range: 402 },
    { id: "kia_ev9_gtl", type: "BEV", brand: "Kia", model: "EV9 GTL", battery: 99, maxAc: 11, maxDc: 210, range: 440 },

    // Leapmotor
    { id: "leapmotor_b10_bev", type: "BEV", brand: "Leapmotor", model: "B10 BEV", battery: 56.2, maxAc: 11, maxDc: 70, range: 292 },
    { id: "leapmotor_c10_eletrico_bev_699_kwh", type: "BEV", brand: "Leapmotor", model: "C10 Elétrico - BEV 69.9 kWh", battery: 69.9, maxAc: 11, maxDc: 84, range: 362 },
    { id: "leapmotor_c10_ultra_hibrido_reev_15_plug_in_phev", type: "PHEV", brand: "Leapmotor", model: "C10 Ultra Híbrido - REEV 1.5 Plug-in", battery: 28.4, maxAc: 6.6, maxDc: 30, range: 140 },

    // Lexus
    { id: "lexus_rz_500e", type: "BEV", brand: "Lexus", model: "RZ 500e", battery: 77, maxAc: 11, maxDc: 150, range: 380 },

    // Mercedes-Benz
    { id: "mercedes_benz_amg_c_63_s_e_performance", type: "PHEV", brand: "Mercedes-Benz", model: "AMG C 63 S E Performance", battery: 6.1, maxAc: 3.7, maxDc: 0, range: 13 },
    { id: "mercedes_benz_amg_glc_63_s_e_performance_coupe", type: "PHEV", brand: "Mercedes-Benz", model: "AMG GLC 63 S E Performance Coupé", battery: 6.1, maxAc: 3.7, maxDc: 0, range: 12 },
    { id: "mercedes_benz_amg_gt_63_s_e_performance", type: "PHEV", brand: "Mercedes-Benz", model: "AMG GT 63 S E Performance", battery: 6.1, maxAc: 3.7, maxDc: 0, range: 12 },
    { id: "mercedes_benz_amg_s_63_e_performance", type: "PHEV", brand: "Mercedes-Benz", model: "AMG S 63 E Performance", battery: 13.1, maxAc: 3.7, maxDc: 0, range: 33 },

    // MG
    { id: "mg_cyberster_roadster", type: "BEV", brand: "MG", model: "Cyberster Roadster", battery: 77, maxAc: 11, maxDc: 144, range: 342 },
    { id: "mg_mg4_luxury", type: "BEV", brand: "MG", model: "MG4 Luxury", battery: 64, maxAc: 11, maxDc: 135, range: 333 },
    { id: "mg_mg4_urban_comfort", type: "BEV", brand: "MG", model: "MG4 Urban Comfort", battery: 43, maxAc: 6.6, maxDc: 88, range: 224 },
    { id: "mg_mg4_urban_luxury_43_kwh", type: "BEV", brand: "MG", model: "MG4 Urban Luxury 43 kWh", battery: 43, maxAc: 6.6, maxDc: 88, range: 224 },
    { id: "mg_mg4_urban_luxury_54_kwh", type: "BEV", brand: "MG", model: "MG4 Urban Luxury 54 kWh", battery: 54, maxAc: 6.6, maxDc: 88, range: 281 },
    { id: "mg_mg4_x_power", type: "BEV", brand: "MG", model: "MG4 X-Power", battery: 64, maxAc: 11, maxDc: 140, range: 279 },
    { id: "mg_s5_ev_comfort", type: "BEV", brand: "MG", model: "S5 EV Comfort", battery: 49.1, maxAc: 7, maxDc: 90, range: 320 },
    { id: "mg_s5_ev_luxury", type: "BEV", brand: "MG", model: "S5 EV Luxury", battery: 62, maxAc: 11, maxDc: 120, range: 351 },

    // Mitsubishi
    { id: "mitsubishi_outlander_phev", type: "PHEV", brand: "Mitsubishi", model: "Outlander PHEV", battery: 20, maxAc: 3.7, maxDc: 22, range: 67 },

    // Omoda
    { id: "omoda_7_shs_p_luxury_phev", type: "PHEV", brand: "Omoda", model: "7 SHS-P Luxury PHEV", battery: 18.4, maxAc: 6.6, maxDc: 30, range: 85 },
    { id: "omoda_7_phev", type: "PHEV", brand: "Omoda", model: "Omoda 7 PHEV", battery: 18.4, maxAc: 6.6, maxDc: 50, range: 75 },
    { id: "omoda_e5_bev", type: "BEV", brand: "Omoda", model: "Omoda E5", battery: 61.1, maxAc: 11, maxDc: 80, range: 318 },

    // Peugeot
    { id: "peugeot_e_2008", type: "BEV", brand: "Peugeot", model: "e-2008", battery: 54, maxAc: 11, maxDc: 100, range: 261 },

    // Porsche
    { id: "porsche_cayenne_e_hybrid", type: "PHEV", brand: "Porsche", model: "Cayenne E-Hybrid", battery: 25.9, maxAc: 11, maxDc: 0, range: 55 },
    { id: "porsche_cayenne_turbo_e_hybrid", type: "PHEV", brand: "Porsche", model: "Cayenne Turbo E-Hybrid", battery: 25.9, maxAc: 11, maxDc: 0, range: 51 },
    { id: "porsche_macan_4_electric", type: "BEV", brand: "Porsche", model: "Macan 4 Electric", battery: 100, maxAc: 11, maxDc: 270, range: 443 },
    { id: "porsche_macan_4s_electric", type: "BEV", brand: "Porsche", model: "Macan 4S Electric", battery: 100, maxAc: 11, maxDc: 270, range: 438 },
    { id: "porsche_macan_gts_electric", type: "BEV", brand: "Porsche", model: "Macan GTS Electric", battery: 100, maxAc: 11, maxDc: 270, range: 441 },
    { id: "porsche_macan_turbo_electric", type: "BEV", brand: "Porsche", model: "Macan Turbo Electric", battery: 100, maxAc: 11, maxDc: 270, range: 435 },
    { id: "porsche_panamera_4_e_hybrid", type: "PHEV", brand: "Porsche", model: "Panamera 4 E-Hybrid", battery: 25.9, maxAc: 11, maxDc: 0, range: 64 },
    { id: "porsche_panamera_turbo_e_hybrid", type: "PHEV", brand: "Porsche", model: "Panamera Turbo E-Hybrid", battery: 25.9, maxAc: 11, maxDc: 0, range: 61 },
    { id: "porsche_taycan_4s_cross_turismo", type: "BEV", brand: "Porsche", model: "Taycan 4S Cross Turismo", battery: 105, maxAc: 22, maxDc: 320, range: 452 },
    { id: "porsche_taycan_gts", type: "BEV", brand: "Porsche", model: "Taycan GTS", battery: 105, maxAc: 22, maxDc: 320, range: 460 },
    { id: "porsche_taycan_turbo_gt_weissach", type: "BEV", brand: "Porsche", model: "Taycan Turbo GT Weissach", battery: 105, maxAc: 22, maxDc: 320, range: 430 },
    { id: "porsche_taycan_turbo_s", type: "BEV", brand: "Porsche", model: "Taycan Turbo S", battery: 105, maxAc: 22, maxDc: 320, range: 440 },

    // Renault
    { id: "renault_kwid_e_tech", type: "BEV", brand: "Renault", model: "Kwid E-Tech", battery: 26.8, maxAc: 6.6, maxDc: 30, range: 139 },
    { id: "renault_megane_e_tech", type: "BEV", brand: "Renault", model: "Megane E-Tech", battery: 60, maxAc: 22, maxDc: 130, range: 312 },

    // Suzuki
    { id: "suzuki_e_vitara", type: "BEV", brand: "Suzuki", model: "e-Vitara", battery: 61, maxAc: 11, maxDc: 150, range: 317 },

    // Toyota
    { id: "toyota_bz4x_awd", type: "BEV", brand: "Toyota", model: "bZ4X AWD", battery: 73.1, maxAc: 11, maxDc: 150, range: 380 },
    { id: "toyota_rav4_xse_plug_in", type: "PHEV", brand: "Toyota", model: "RAV4 XSE Plug-in", battery: 18.1, maxAc: 6.6, maxDc: 0, range: 55 },

    // Volkswagen
    { id: "volkswagen_id_4", type: "BEV", brand: "Volkswagen", model: "ID.4", battery: 84, maxAc: 11, maxDc: 135, range: 389 },

    // Volvo
    { id: "volvo_ex30_cross_country", type: "BEV", brand: "Volvo", model: "EX30 Cross Country", battery: 69, maxAc: 7.4, maxDc: 153, range: 338 },
    { id: "volvo_ex30_plus", type: "BEV", brand: "Volvo", model: "EX30 Plus", battery: 51, maxAc: 7.4, maxDc: 150, range: 250 },
    { id: "volvo_ex30_ultra_twin_motor", type: "BEV", brand: "Volvo", model: "EX30 Ultra Twin Motor", battery: 69, maxAc: 11, maxDc: 153, range: 338 },
    { id: "volvo_xc60_recharge_phev", type: "PHEV", brand: "Volvo", model: "XC60 Recharge (PHEV)", battery: 18.8, maxAc: 6.4, maxDc: 0, range: 55 },

    // Zeekr
    { id: "zeekr_7x", type: "BEV", brand: "Zeekr", model: "7X", battery: 75, maxAc: 22, maxDc: 250, range: 390 },
    { id: "zeekr_x", type: "BEV", brand: "Zeekr", model: "X", battery: 66, maxAc: 22, maxDc: 150, range: 343 },
    { id: "zeekr_x_flagship", type: "BEV", brand: "Zeekr", model: "X Flagship", battery: 66, maxAc: 22, maxDc: 150, range: 343 },
  ];

        let currentVehicle = null;

    // Elementos DOM
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const modal = document.getElementById('vehicle-modal');
    const openModalBtn = document.getElementById('open-vehicle-modal');
    const closeModalBtn = document.getElementById('close-vehicle-modal');
    const brandPillsContainer = document.getElementById('modal-brand-pills');
    const modelsListContainer = document.getElementById('modal-models-list');
    const selectedVehicleDisplay = document.getElementById('selected-vehicle-display');
    const clearVehicleBtn = document.getElementById('clear-vehicle-btn');
    const btnReturnSavedVehicle = document.getElementById('btn-return-saved-vehicle');
    const modalSavedVehicleCard = document.getElementById('modal-saved-vehicle-card');
    const btnResetAll = document.getElementById('btn-reset-all');
    const modalResetFiltersBtn = document.getElementById('modal-reset-filters');
    const modalSearchInput = document.getElementById('modal-search-input');
    const modalSearchClear = document.getElementById('modal-search-clear');
    const modalVehicleCount = document.getElementById('modal-vehicle-count');
    const vehicleLimitInfo = document.getElementById('vehicle-limit-info');
    const chargerPresetsContainer = document.getElementById('charger-presets');

    const sliderCharger = document.getElementById('slider-charger');
    const sliderBattery = document.getElementById('slider-battery');
    const sliderStart = document.getElementById('slider-start');
    const sliderTarget = document.getElementById('slider-target');

    const inputCharger = document.getElementById('input-charger');
    const inputBattery = document.getElementById('input-battery');
    const inputStart = document.getElementById('input-start');
    const inputTarget = document.getElementById('input-target');
    const inputTariff = document.getElementById('input-tariff');

    const resEnergy = document.getElementById('res-energy');
    const resTime = document.getElementById('res-time');
    const resCost = document.getElementById('res-cost');
    const tableBody = document.getElementById('table-body');

    // Navegação por Abas Principais
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('#tab-charging, #tab-consumption');

    function switchTab(targetTabId) {
      tabButtons.forEach(btn => {
        const isActive = (btn.dataset.tab === targetTabId);
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      tabContents.forEach(content => {
        const isTarget = (content.id === targetTabId);
        content.classList.toggle('hidden', !isTarget);
      });
    }

    tabButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        switchTab(this.dataset.tab);
      });
    });

    // Elementos da Aba de Autonomia & Consumo
    const resTripConsumption = document.getElementById('res-trip-consumption');
    const resTripKmpkwh = document.getElementById('res-trip-kmpkwh');
    const resTripRemainingRange = document.getElementById('res-trip-remaining-range');
    const resTripRemainingEnergy = document.getElementById('res-trip-remaining-energy');
    const resTripTotalRange = document.getElementById('res-trip-total-range');
    const resTripRangeBadge = document.getElementById('res-trip-range-badge');
    const resTripCost = document.getElementById('res-trip-cost');
    const resTripCostPerKm = document.getElementById('res-trip-cost-per-km');
    const tripBatteryDisplay = document.getElementById('trip-battery-display');

    const inputTripDistance = document.getElementById('input-trip-distance');
    const sliderTripDistance = document.getElementById('slider-trip-distance');
    const inputTripStart = document.getElementById('input-trip-start');
    const sliderTripStart = document.getElementById('slider-trip-start');
    const inputTripCurrent = document.getElementById('input-trip-current');
    const sliderTripCurrent = document.getElementById('slider-trip-current');

    const tripBatteryInfoCard = document.getElementById('trip-battery-info-card');
    const tripBatteryControlItem = document.getElementById('trip-battery-control-item');
    const inputTripBattery = document.getElementById('input-trip-battery');
    const sliderTripBattery = document.getElementById('slider-trip-battery');

    // Alternador de Método de Consumo (Painel vs Odômetro)
    let tripCalcMode = 'dashboard';
    const btnCalcModeDashboard = document.getElementById('btn-calc-mode-dashboard');
    const btnCalcModeOdometer = document.getElementById('btn-calc-mode-odometer');
    const groupCalcDashboard = document.getElementById('group-calc-dashboard');
    const groupCalcOdometer = document.getElementById('group-calc-odometer');

    const inputDashboardConsumption = document.getElementById('input-dashboard-consumption');
    const sliderDashboardConsumption = document.getElementById('slider-dashboard-consumption');
    const inputDashboardSoc = document.getElementById('input-dashboard-soc');
    const sliderDashboardSoc = document.getElementById('slider-dashboard-soc');
    const inputDashboardDistance = document.getElementById('input-dashboard-distance');
    const sliderDashboardDistance = document.getElementById('slider-dashboard-distance');
    const dashboardKmpkwhHint = document.getElementById('dashboard-kmpkwh-hint');
    const dashboardArrivalBox = document.getElementById('dashboard-arrival-box');
    const dashboardArrivalText = document.getElementById('dashboard-arrival-text');
    const btnPresetPbev = document.getElementById('btn-preset-pbev');

    // Sub-modo de Viagem: Trecho Direto vs Viagem com Paradas
    const submodeBtnSingle = document.getElementById('submode-btn-single');
    const submodeBtnMulti = document.getElementById('submode-btn-multi');
    const containerSingleTrip = document.getElementById('container-single-trip');
    const containerMultiTrip = document.getElementById('container-multi-trip');

    // Elementos do Sub-modo de Viagem com Paradas
    const resMultiConsumption = document.getElementById('res-multi-consumption');
    const resMultiKmpkwh = document.getElementById('res-multi-kmpkwh');
    const resMultiTotalCost = document.getElementById('res-multi-total-cost');
    const resMultiCostPerKm = document.getElementById('res-multi-cost-per-km');
    const resMultiTotalEnergy = document.getElementById('res-multi-total-energy');
    const resMultiStopsInfo = document.getElementById('res-multi-stops-info');
    const resMultiFinalCost = document.getElementById('res-multi-final-cost');
    const resMultiFinalEnergy = document.getElementById('res-multi-final-energy');

    const inputMultiDistance = document.getElementById('input-multi-distance');
    const sliderMultiDistance = document.getElementById('slider-multi-distance');
    const inputMultiStartSoc = document.getElementById('input-multi-start-soc');
    const inputMultiStartTariff = document.getElementById('input-multi-start-tariff');
    const inputMultiArrivalSoc = document.getElementById('input-multi-arrival-soc');
    const inputMultiFinalTariff = document.getElementById('input-multi-final-tariff');
    const btnAddTripStop = document.getElementById('btn-add-trip-stop');
    const multiStopsList = document.getElementById('multi-stops-list');

    let tripStops = [
      { arrivalSoc: 20, departureSoc: 80, tariff: 2.40 },
      { arrivalSoc: 18, departureSoc: 80, tariff: 2.80 }
    ];

    // Gerenciamento de Tema (Light / Dark)
    function initTheme() {
      const savedTheme = localStorage.getItem('ev_calc_theme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    }

    function setTheme(theme) {
      htmlElement.setAttribute('data-theme', theme);
      const metaThemeColor = document.getElementById('meta-theme-color');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#181C14' : '#F2F7FA');
      }
      if (themeToggleBtn) {
        themeToggleBtn.textContent = (theme === 'dark') ? '🌙' : '☀️';
        themeToggleBtn.title = (theme === 'dark') ? 'Modo Escuro Ativo (Clique para Claro)' : 'Modo Claro Ativo (Clique para Escuro)';
      }
      try { localStorage.setItem('ev_calc_theme', theme); } catch (e) {}
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = htmlElement.getAttribute('data-theme') || 'dark';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    // Estado do Modal
    let selectedBrandFilter = 'ALL';
    let selectedTypeFilter = 'ALL';
    let currentSearchTerm = '';

    function getFilteredVehicles() {
      const list = VEHICLE_DATA.filter(v => {
        // Se filtro for inativos, traz somente inativos
        if (selectedTypeFilter === 'INACTIVE') {
          if (v.active !== false) return false;
        } else {
          // Nos demais filtros, só traz ativos
          if (v.active === false) return false;
          if (selectedTypeFilter !== 'ALL' && v.type !== selectedTypeFilter) return false;
        }

        const matchesBrand = (selectedBrandFilter === 'ALL') || (v.brand === selectedBrandFilter);
        
        let matchesSearch = true;
        if (currentSearchTerm) {
          const term = currentSearchTerm.toLowerCase();
          matchesSearch = v.brand.toLowerCase().includes(term) || v.model.toLowerCase().includes(term);
        }
        return matchesBrand && matchesSearch;
      });

      return list.sort((a, b) => {
        const brandCmp = a.brand.localeCompare(b.brand, 'pt-BR', { sensitivity: 'base' });
        if (brandCmp !== 0) return brandCmp;
        return a.model.localeCompare(b.model, 'pt-BR', { sensitivity: 'base', numeric: true });
      });
    }

    function initVehicleModal() {
      const ativos = VEHICLE_DATA.filter(v => v.active !== false);
      const inativos = VEHICLE_DATA.filter(v => v.active === false);

      const inativosCountEl = document.getElementById('inativos-count');
      if (inativosCountEl) inativosCountEl.textContent = inativos.length;

      if (selectedTypeFilter === 'INACTIVE') {
        modalVehicleCount.textContent = inativos.length + ' modelos desativados';
      } else {
        modalVehicleCount.textContent = ativos.length + ' modelos disponíveis';
      }

      renderBrandPills();
      renderSavedVehicleBanner();
      renderModelsList();
      updateChargerPresets(currentVehicle);
    }

    function renderBrandPills() {
      const availableVehicles = (selectedTypeFilter === 'INACTIVE')
        ? VEHICLE_DATA.filter(v => v.active === false)
        : VEHICLE_DATA.filter(v => v.active !== false && (selectedTypeFilter === 'ALL' || v.type === selectedTypeFilter));

      const brands = ['ALL', ...new Set(availableVehicles.map(v => v.brand))].sort((a, b) => {
        if (a === 'ALL') return -1;
        if (b === 'ALL') return 1;
        return a.localeCompare(b);
      });

      brandPillsContainer.innerHTML = '';

      brands.forEach(brand => {
        const pill = document.createElement('button');
        pill.type = 'button';
        pill.className = 'brand-pill' + (brand === selectedBrandFilter ? ' active' : '');
        pill.textContent = (brand === 'ALL') ? 'Todas as Marcas' : brand;
        
        pill.addEventListener('click', function() {
          selectedBrandFilter = brand;
          document.querySelectorAll('.brand-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          renderModelsList();
        });
        brandPillsContainer.appendChild(pill);
      });
    }

    function renderModelsList() {
      modelsListContainer.innerHTML = '';
      const filtered = getFilteredVehicles();

      // Card para Modo Personalizado (Zerar seleção de veículo)
      if (!currentSearchTerm) {
        const customItem = document.createElement('div');
        const isCustomActive = (currentVehicle === null);
        customItem.className = 'model-card-item model-card-custom' + (isCustomActive ? ' active-custom' : '');
        customItem.innerHTML = 
          '<div class="model-info-left">' +
            '<span class="model-brand-name">Personalizado</span>' +
            '<div class="model-card-name">🔧 Definir Valores Manualmente / Sem Veículo</div>' +
            '<div class="model-card-specs">Libera todos os presets universais e remove limites</div>' +
          '</div>' +
          '<div class="model-card-right">' +
            '<span class="custom-badge-pill' + (isCustomActive ? ' is-active' : '') + '">' + (isCustomActive ? 'Ativo' : 'Zerar') + '</span>' +
          '</div>';
        
        customItem.addEventListener('click', function() {
          clearVehicleSelection();
          closeVehicleModal();
        });
        modelsListContainer.appendChild(customItem);
      }

      if (filtered.length === 0) {
        const emptyBox = document.createElement('div');
        emptyBox.className = 'empty-search-suggest-box';
        const termoBusca = currentSearchTerm ? ` para "<strong>${escapeHtml(currentSearchTerm)}</strong>"` : '';
        emptyBox.innerHTML = 
          '<div class="empty-icon">🔎</div>' +
          '<h4>Nenhum veículo encontrado' + termoBusca + '</h4>' +
          '<p>O modelo que você procura ainda não consta na nossa base? Sugira a inclusão para nossa equipe adicioná-lo à calculadora!</p>' +
          '<button type="button" class="btn-sugerir-cta" id="btn-empty-sugerir">💡 Solicitar Inclusão de Veículo</button>';
        
        const btnEmptySug = emptyBox.querySelector('#btn-empty-sugerir');
        if (btnEmptySug) {
          btnEmptySug.addEventListener('click', function() {
            if (typeof abrirModalSugerirVeiculo === 'function') {
              abrirModalSugerirVeiculo(currentSearchTerm);
            }
          });
        }
        modelsListContainer.appendChild(emptyBox);
        return;
      }

      filtered.forEach(v => {
        const item = document.createElement('div');
        const isInativo = (v.active === false);
        item.className = 'model-card-item' + (isInativo ? ' is-inactive' : '');
        
        const typeClass = (v.type === 'BEV') ? 'bev' : 'phev';
        const typeLabel = (v.type === 'BEV') ? '100% ELÉTRICO' : 'HÍBRIDO PLUG-IN';

        let adminActionsHtml = '';
        if (isInativo) {
          adminActionsHtml = 
            '<button type="button" class="btn-card-action success btn-restore-card" title="Reativar este modelo no catálogo">♻️ Reativar</button>' +
            '<button type="button" class="btn-card-action btn-edit-card" title="Editar especificações">✏️</button>' +
            '<button type="button" class="btn-card-action danger btn-delete-card" title="Excluir definitivamente do banco de dados">🗑️</button>';
        } else {
          adminActionsHtml = 
            '<button type="button" class="btn-card-action btn-edit-card" title="Editar especificações deste modelo">✏️ Editar</button>' +
            '<button type="button" class="btn-card-action danger btn-delete-card" title="Desativar este modelo">🚫 Desativar</button>';
        }

        const saved = getSavedVehicle();
        const isFav = isVehicleSame(saved, v);

        const favBtnHtml = 
          '<button type="button" class="btn-card-fav' + (isFav ? ' is-fav' : '') + '" title="' + (isFav ? 'Seu veículo salvo (Clique para desvincular)' : 'Definir como Meu Veículo principal') + '">' +
            (isFav ? '⭐ Meu Veículo' : '☆ Salvar') +
          '</button>';

        item.innerHTML = 
          '<div class="model-info-left">' +
            '<span class="model-brand-name">' + v.brand + '</span>' +
            '<div class="model-card-name">' + 
              v.model + 
              (isInativo ? '<span class="type-badge inactive">DESATIVADO</span>' : '<span class="type-badge ' + typeClass + '">' + typeLabel + '</span>') +
            '</div>' +
            '<div class="model-card-specs">⚡ AC: ' + v.maxAc + ' kW' + (v.maxDc > 0 ? ' | 🚀 DC: ' + v.maxDc + ' kW' : '') + (v.range ? ' | 🛣️ ' + v.range + ' km' : '') + '</div>' +
          '</div>' +
          '<div class="model-card-right">' +
            '<div class="model-badge-battery">' + v.battery + ' kWh</div>' +
            favBtnHtml +
            '<div class="model-card-admin-actions">' +
              adminActionsHtml +
            '</div>' +
          '</div>';
        
        item.addEventListener('click', function() {
          selectVehicle(v);
        });

        const btnFav = item.querySelector('.btn-card-fav');
        if (btnFav) {
          btnFav.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isFav) {
              desfavoritarMeuVeiculo();
            } else {
              favoritarVeiculo(v);
            }
          });
        }

        const btnRestore = item.querySelector('.btn-restore-card');
        if (btnRestore) {
          btnRestore.addEventListener('click', function(e) {
            e.stopPropagation();
            dispararReativacaoVeiculo(v);
          });
        }

        const btnEdit = item.querySelector('.btn-edit-card');
        if (btnEdit) {
          btnEdit.addEventListener('click', function(e) {
            e.stopPropagation();
            dispararEdicaoVeiculo(v);
          });
        }

        const btnDelete = item.querySelector('.btn-delete-card');
        if (btnDelete) {
          btnDelete.addEventListener('click', function(e) {
            e.stopPropagation();
            dispararExclusaoVeiculo(v, isInativo);
          });
        }

        modelsListContainer.appendChild(item);
      });
    }

    function updateChargerPresets(v) {
      chargerPresetsContainer.innerHTML = '';
      let presets = [];

      if (v) {
        const maxAc = v.maxAc || 6.6;
        const maxDc = v.maxDc || 0;

        presets.push({ label: '2.2 kW (Tomada)', val: 2.2 });
        if (maxAc >= 6.6 && maxAc !== 3.3) {
          presets.push({ label: '3.7 kW', val: 3.7 });
        }
        presets.push({ label: maxAc + ' kW (Máx AC)', val: maxAc });

        if (maxDc > 0) {
          if (maxDc <= 22) {
            presets.push({ label: maxDc + ' kW (DC)', val: maxDc });
          } else if (maxDc <= 40) {
            presets.push({ label: '22 kW (DC)', val: 22 });
            presets.push({ label: maxDc + ' kW (Máx DC)', val: maxDc });
          } else if (maxDc <= 60) {
            presets.push({ label: '30 kW (DC)', val: 30 });
            presets.push({ label: maxDc + ' kW (Máx DC)', val: maxDc });
          } else {
            presets.push({ label: '50 kW (DC)', val: 50 });
            if (maxDc > 50) {
              presets.push({ label: Math.min(maxDc, 150) + ' kW (DC)', val: Math.min(maxDc, 150) });
            }
          }
        }
      } else {
        presets = [
          { label: '2.2 kW (Tomada)', val: 2.2 },
          { label: '7.4 kW (Wallbox)', val: 7.4 },
          { label: '11 kW', val: 11 },
          { label: '22 kW', val: 22 },
          { label: '50 kW (DC)', val: 50 }
        ];
      }

      const currentChargerVal = parsePtNumber(inputCharger.value);

      presets.forEach(p => {
        const chip = document.createElement('button');
        chip.type = 'button';
        const isActive = (Math.abs(currentChargerVal - p.val) < 0.15);
        chip.className = 'preset-chip' + (isActive ? ' active' : '');
        chip.setAttribute('data-val', p.val);
        chip.textContent = p.label;
        
        chip.addEventListener('click', function() {
          document.querySelectorAll('#charger-presets .preset-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const val = parseFloat(p.val);
          sliderCharger.value = val;
          inputCharger.value = formatPt(val, 1);
          recalculate();
        });
        chargerPresetsContainer.appendChild(chip);
      });
    }

    // Chaves de Persistência Local (Offline First)
    const STORAGE_KEY_SAVED_VEHICLE = 'kwhub_saved_vehicle';
    const STORAGE_KEY_TARIFF = 'kwhub_user_tariff';

    let toastTimeout = null;
    function showToast(mensagem, tipo = 'info') {
      const toast = document.getElementById('app-toast');
      if (!toast) return;
      toast.textContent = mensagem;
      toast.className = 'app-toast ' + tipo + ' show';
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 3200);
    }

    function getSavedVehicle() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_SAVED_VEHICLE);
        if (!raw) return null;
        const v = JSON.parse(raw);
        return (v && typeof v.battery === 'number') ? v : null;
      } catch (e) {
        return null;
      }
    }

    function setSavedVehicle(v) {
      try {
        if (v) {
          localStorage.setItem(STORAGE_KEY_SAVED_VEHICLE, JSON.stringify(v));
        } else {
          localStorage.removeItem(STORAGE_KEY_SAVED_VEHICLE);
        }
      } catch (e) {
        console.warn('Erro ao salvar veículo no localStorage:', e);
      }
    }

    function isVehicleSame(a, b) {
      if (!a || !b) return false;
      if (a.id && b.id && a.id === b.id) return true;
      return (a.brand === b.brand && a.model === b.model);
    }

    function atualizarDisplayVeiculo() {
      const saved = getSavedVehicle();
      const isSavedActive = isVehicleSame(saved, currentVehicle);

      if (currentVehicle) {
        if (isSavedActive) {
          selectedVehicleDisplay.innerHTML = '⭐ <span class="vehicle-fav-tag">Meu Veículo:</span> ' + escapeHtml(currentVehicle.brand + ' ' + currentVehicle.model) + ' (' + formatPt(currentVehicle.battery, 2) + ' kWh)';
        } else {
          selectedVehicleDisplay.textContent = '🚗 ' + currentVehicle.brand + ' ' + currentVehicle.model + ' (' + formatPt(currentVehicle.battery, 2) + ' kWh)';
        }
        if (clearVehicleBtn) clearVehicleBtn.style.display = 'inline-flex';
      } else {
        selectedVehicleDisplay.textContent = '🚗 Toque para escolher o modelo...';
        if (clearVehicleBtn) clearVehicleBtn.style.display = 'none';
      }

      // Botão de retorno rápido ao meu veículo salvo
      if (btnReturnSavedVehicle) {
        if (saved && (!currentVehicle || !isSavedActive)) {
          btnReturnSavedVehicle.style.display = 'inline-flex';
          btnReturnSavedVehicle.title = 'Voltar para seu veículo: ' + saved.brand + ' ' + saved.model;
        } else {
          btnReturnSavedVehicle.style.display = 'none';
        }
      }
    }

    function renderSavedVehicleBanner() {
      if (!modalSavedVehicleCard) return;
      const saved = getSavedVehicle();
      if (!saved || currentSearchTerm) {
        modalSavedVehicleCard.style.display = 'none';
        modalSavedVehicleCard.innerHTML = '';
        return;
      }

      modalSavedVehicleCard.style.display = 'flex';
      const isCurrentlySelected = isVehicleSame(saved, currentVehicle);

      modalSavedVehicleCard.innerHTML = 
        '<div class="saved-vehicle-card-info">' +
          '<span class="saved-vehicle-card-badge">⭐ Meu Veículo Salvo</span>' +
          '<div class="saved-vehicle-card-title">' + escapeHtml(saved.brand + ' ' + saved.model) + '</div>' +
          '<div class="saved-vehicle-card-specs">🔋 ' + formatPt(saved.battery, 2) + ' kWh | ⚡ AC: ' + saved.maxAc + ' kW' + (saved.maxDc > 0 ? ' | 🚀 DC: ' + saved.maxDc + ' kW' : '') + (saved.range ? ' | 🛣️ ' + saved.range + ' km' : '') + '</div>' +
        '</div>' +
        '<div class="saved-vehicle-card-actions">' +
          (isCurrentlySelected 
            ? '<button type="button" class="btn-saved-card-select is-active" disabled>✓ Em uso</button>' 
            : '<button type="button" class="btn-saved-card-select" id="btn-use-saved-vehicle">⚡ Usar este</button>') +
          '<button type="button" class="btn-saved-card-remove" id="btn-remove-saved-vehicle" title="Remover dos favoritos">✕ Remover</button>' +
        '</div>';

      const btnUse = modalSavedVehicleCard.querySelector('#btn-use-saved-vehicle');
      if (btnUse) {
        btnUse.addEventListener('click', function(e) {
          e.stopPropagation();
          selectVehicle(saved, true);
        });
      }

      const btnRemove = modalSavedVehicleCard.querySelector('#btn-remove-saved-vehicle');
      if (btnRemove) {
        btnRemove.addEventListener('click', function(e) {
          e.stopPropagation();
          desfavoritarMeuVeiculo();
        });
      }
    }

    function favoritarVeiculo(v) {
      setSavedVehicle(v);
      showToast('⭐ ' + v.brand + ' ' + v.model + ' definido como seu veículo padrão!');
      selectVehicle(v, false);
    }

    function desfavoritarMeuVeiculo() {
      const saved = getSavedVehicle();
      const nomeVeiculo = saved ? (saved.brand + ' ' + saved.model) : 'Veículo';
      setSavedVehicle(null);
      showToast('Veículo favorito desvinculado: ' + nomeVeiculo + '. Você pode escolher qualquer modelo.');
      atualizarDisplayVeiculo();
      renderSavedVehicleBanner();
      renderModelsList();
    }

    function selectVehicle(v, fecharModal = true) {
      currentVehicle = v;
      atualizarDisplayVeiculo();
      
      sliderBattery.value = v.battery;
      inputBattery.value = formatPt(v.battery, 2);

      const defaultChargerPower = v.maxAc;
      sliderCharger.value = defaultChargerPower;
      inputCharger.value = formatPt(defaultChargerPower, 1);

      updateChargerPresets(v);
      renderModelsList();
      renderSavedVehicleBanner();

      if (fecharModal) {
        closeVehicleModal();
      }
      recalculate();
      recalculateConsumption();
    }

    function clearVehicleSelection() {
      currentVehicle = null;
      atualizarDisplayVeiculo();
      if (vehicleLimitInfo) vehicleLimitInfo.textContent = '';
      updateChargerPresets(null);
      renderModelsList();
      renderSavedVehicleBanner();
      recalculate();
      recalculateConsumption();
    }

    function resetModalFilters() {
      selectedTypeFilter = 'ALL';
      selectedBrandFilter = 'ALL';
      currentSearchTerm = '';
      modalSearchInput.value = '';
      modalSearchClear.style.display = 'none';
      document.querySelectorAll('.filter-type-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.type === 'ALL');
      });
      renderBrandPills();
      renderModelsList();
      updateSearchState();
      updateResetFiltersBtnVisibility();
    }

    function updateResetFiltersBtnVisibility() {
      if (!modalResetFiltersBtn) return;
      const isFiltered = (selectedTypeFilter !== 'ALL') || (selectedBrandFilter !== 'ALL') || (currentSearchTerm.length > 0);
      modalResetFiltersBtn.style.display = isFiltered ? 'inline-flex' : 'none';
    }

    function resetAllSettings() {
      clearVehicleSelection();
      sliderCharger.value = 7.4;
      inputCharger.value = '7,4';
      sliderBattery.value = 60.5;
      inputBattery.value = '60,5';
      sliderStart.value = 20;
      inputStart.value = '20';
      sliderTarget.value = 80;
      inputTarget.value = '80';
      inputTariff.value = '1,79';

      document.querySelectorAll('#start-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '20');
      });
      document.querySelectorAll('#target-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '80');
      });

      // Resetar Controles de Consumo & Viagem
      sliderTripDistance.value = 183;
      inputTripDistance.value = '183';
      sliderTripStart.value = 100;
      inputTripStart.value = '100';
      sliderTripCurrent.value = 47;
      inputTripCurrent.value = '47';
      sliderTripBattery.value = 60.5;
      inputTripBattery.value = '60,5';

      document.querySelectorAll('#trip-distance-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '183');
      });
      document.querySelectorAll('#trip-start-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '100');
      });
      document.querySelectorAll('#trip-current-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '47');
      });

      // Resetar Controles do Painel (Dashboard)
      if (inputDashboardConsumption) inputDashboardConsumption.value = '16,6';
      if (sliderDashboardConsumption) sliderDashboardConsumption.value = 16.6;
      if (inputDashboardSoc) inputDashboardSoc.value = '47';
      if (sliderDashboardSoc) sliderDashboardSoc.value = 47;
      if (inputDashboardDistance) inputDashboardDistance.value = '150';
      if (sliderDashboardDistance) sliderDashboardDistance.value = 150;
      switchCalcMode('dashboard');

      document.querySelectorAll('#dashboard-consumption-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '16.6');
      });
      document.querySelectorAll('#dashboard-soc-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '47');
      });
      document.querySelectorAll('#dashboard-distance-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '150');
      });

      // Resetar Viagem com Paradas
      if (sliderMultiDistance) sliderMultiDistance.value = 800;
      if (inputMultiDistance) inputMultiDistance.value = '800';
      if (inputMultiStartSoc) inputMultiStartSoc.value = '100';
      if (inputMultiStartTariff) inputMultiStartTariff.value = '1,79';
      if (inputMultiArrivalSoc) inputMultiArrivalSoc.value = '34';
      if (inputMultiFinalTariff) inputMultiFinalTariff.value = '1,79';

      document.querySelectorAll('#multi-distance-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.val === '800');
      });

      tripStops = [
        { arrivalSoc: 20, departureSoc: 80, tariff: 2.40 },
        { arrivalSoc: 18, departureSoc: 80, tariff: 2.80 }
      ];
      renderTripStops();

      recalculate();
      recalculateConsumption();
      recalculateMultiStop();
      switchSubMode('single');
    }

    // Gerenciamento e Eventos do Modal
    function openVehicleModal() {
      modal.classList.add('active');
      updateViewportMetrics();
      updateResetFiltersBtnVisibility();
      if (window.innerWidth > 600) {
        modalSearchInput.focus();
      }
    }

    function closeVehicleModal() {
      modal.classList.remove('active', 'keyboard-open', 'has-search');
      modalSearchInput.blur();
      modal.style.top = '';
      modal.style.height = '';
    }

    function updateSearchState() {
      const hasText = currentSearchTerm.length > 0;
      if (hasText) {
        modal.classList.add('has-search');
      } else {
        modal.classList.remove('has-search');
      }
      renderSavedVehicleBanner();
      updateResetFiltersBtnVisibility();
    }

    function updateViewportMetrics() {
      if (!window.visualViewport) return;
      const vh = window.visualViewport.height;
      const offsetTop = window.visualViewport.offsetTop || 0;
      document.documentElement.style.setProperty('--vvh', `${vh}px`);
      
      const isKeyboard = vh < (window.innerHeight - 100);
      modal.classList.toggle('keyboard-open', isKeyboard);
      
      if (isKeyboard && modal.classList.contains('active')) {
        modal.style.top = `${offsetTop}px`;
        modal.style.height = `${vh}px`;
      } else {
        modal.style.top = '';
        modal.style.height = '';
      }
    }

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewportMetrics);
      window.visualViewport.addEventListener('scroll', updateViewportMetrics);
    }

    openModalBtn.addEventListener('click', openVehicleModal);
    closeModalBtn.addEventListener('click', closeVehicleModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeVehicleModal();
    });

    if (clearVehicleBtn) {
      clearVehicleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        clearVehicleSelection();
      });
    }

    if (btnReturnSavedVehicle) {
      btnReturnSavedVehicle.addEventListener('click', function(e) {
        e.stopPropagation();
        const saved = getSavedVehicle();
        if (saved) {
          selectVehicle(saved, false);
          showToast('⭐ Veículo restaurado: ' + saved.brand + ' ' + saved.model);
        }
      });
    }

    if (btnResetAll) {
      btnResetAll.addEventListener('click', function() {
        resetAllSettings();
      });
    }

    if (modalResetFiltersBtn) {
      modalResetFiltersBtn.addEventListener('click', resetModalFilters);
    }

    modalSearchInput.addEventListener('focus', function() {
      updateSearchState();
      setTimeout(updateViewportMetrics, 100);
    });

    modalSearchInput.addEventListener('blur', function() {
      updateSearchState();
      setTimeout(updateViewportMetrics, 100);
    });

    modalSearchInput.addEventListener('input', function() {
      currentSearchTerm = this.value.trim();
      modalSearchClear.style.display = currentSearchTerm ? 'block' : 'none';
      updateSearchState();
      renderModelsList();
    });

    modalSearchClear.addEventListener('click', function() {
      modalSearchInput.value = '';
      currentSearchTerm = '';
      this.style.display = 'none';
      updateSearchState();
      renderModelsList();
      modalSearchInput.focus();
    });

    modalSearchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        this.blur();
      }
    });

    modelsListContainer.addEventListener('touchmove', function() {
      if (document.activeElement === modalSearchInput) {
        modalSearchInput.blur();
      }
    }, { passive: true });

    document.querySelectorAll('.filter-type-pill').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-type-pill').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedTypeFilter = this.dataset.type;
        selectedBrandFilter = 'ALL';
        renderBrandPills();
        renderModelsList();
        updateResetFiltersBtnVisibility();
      });
    });

    document.querySelectorAll('#start-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        document.querySelectorAll('#start-presets .preset-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const val = parseInt(this.dataset.val, 10);
        sliderStart.value = val;
        inputStart.value = val;
        onSliderChange();
      });
    });

    document.querySelectorAll('#target-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        document.querySelectorAll('#target-presets .preset-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const val = parseInt(this.dataset.val, 10);
        sliderTarget.value = val;
        inputTarget.value = val;
        onSliderChange();
      });
    });

    function parsePtNumber(valStr) {
      if (typeof valStr === 'number') return valStr;
      const sanitized = valStr.toString().replace(',', '.').replace(/[^0-9.]/g, '');
      const parsed = parseFloat(sanitized);
      return isNaN(parsed) ? 0 : parsed;
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function formatPt(num, maxDecimals = 2) {
      return num.toLocaleString('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: maxDecimals
      });
    }

    function formatDuration(hoursDecimal) {
      if (hoursDecimal <= 0) return '0m';
      const totalMinutes = Math.round(hoursDecimal * 60);
      const h = Math.floor(totalMinutes / 60);
      const m = totalMinutes % 60;
      if (h === 0) return m + 'm';
      return h + 'h ' + m.toString().padStart(2, '0') + 'm';
    }

    function calcularTempoCurva(chargerPower, batteryCapacity, startSoc, targetSoc, vehicle) {
      if (startSoc >= targetSoc || chargerPower <= 0 || batteryCapacity <= 0) return 0;
      let tempoTotalHoras = 0;

      let effectiveBasePower = chargerPower;
      let isEffectiveDC = false;

      if (vehicle) {
        if (vehicle.maxDc === 0) {
          // Veículo puramente AC: travado no carregador de bordo AC (ex: 3.3 kW no King GL ou 6.6 kW no Atto 2)
          effectiveBasePower = Math.min(chargerPower, vehicle.maxAc);
          isEffectiveDC = false;
        } else {
          // Veículo com suporte DC: aceita potências até seu teto DC (ex: até 40 kW no Jaecoo 7)
          effectiveBasePower = Math.min(chargerPower, vehicle.maxDc);
          isEffectiveDC = (chargerPower > vehicle.maxAc);
        }
      }

      for (let soc = startSoc; soc < targetSoc; soc++) {
        const kwhPorPorcento = batteryCapacity / 100;
        let potenciaEfetiva = effectiveBasePower;

        if (isEffectiveDC) {
          if (soc < 60) {
            potenciaEfetiva = effectiveBasePower * 0.90;
          } else if (soc < 80) {
            potenciaEfetiva = effectiveBasePower * 0.76;
          } else {
            potenciaEfetiva = Math.min(effectiveBasePower * 0.35, 20.0);
          }
        } else {
          if (soc < 90) {
            potenciaEfetiva = effectiveBasePower * 0.90;
          } else {
            potenciaEfetiva = effectiveBasePower * 0.70;
          }
        }
        tempoTotalHoras += kwhPorPorcento / potenciaEfetiva;
      }
      return tempoTotalHoras;
    }

    function recalculate() {
      const charger = parsePtNumber(inputCharger.value);
      const battery = parsePtNumber(inputBattery.value);
      const startSoc = parsePtNumber(inputStart.value);
      const targetSoc = parsePtNumber(inputTarget.value);
      const tariff = parsePtNumber(inputTariff.value);

      if (currentVehicle) {
        if (currentVehicle.maxDc === 0) {
          // Veículo sem DC: limitado se carregador for maior que o AC aceito
          if (charger > currentVehicle.maxAc) {
            vehicleLimitInfo.innerHTML = '<span class="vehicle-limit-warning">(Limitado pelo carro a ' + formatPt(currentVehicle.maxAc, 1) + ' kW AC)</span>';
          } else {
            vehicleLimitInfo.textContent = '(Máx: ' + formatPt(currentVehicle.maxAc, 1) + ' kW AC)';
          }
        } else {
          // Veículo com suporte DC: aceita qualquer potência até o teto DC (ex: 22 kW no Jaecoo de 40 kW DC)
          if (charger > currentVehicle.maxDc) {
            vehicleLimitInfo.innerHTML = '<span class="vehicle-limit-warning">(Limitado pelo carro a ' + formatPt(currentVehicle.maxDc, 1) + ' kW DC)</span>';
          } else {
            vehicleLimitInfo.textContent = '(Máx: ' + formatPt(currentVehicle.maxAc, 1) + ' kW AC / ' + formatPt(currentVehicle.maxDc, 1) + ' kW DC)';
          }
        }
      } else {
        vehicleLimitInfo.textContent = '';
      }

      const deltaPercent = Math.max(0, targetSoc - startSoc);
      const energyNeeded = (deltaPercent / 100) * battery;
      const hours = calcularTempoCurva(charger, battery, startSoc, targetSoc, currentVehicle);
      const cost = energyNeeded * tariff;

      resEnergy.textContent = energyNeeded.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' kWh';
      resTime.textContent = formatDuration(hours);
      resCost.textContent = 'R$ ' + cost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      const steps = [25, 50, 75, 80, 100];
      let rowsHtml = '';

      steps.forEach(step => {
        let stepEnergy = 0;
        let stepHours = 0;
        let stepCost = 0;

        if (step > startSoc) {
          const stepDelta = (step - startSoc) / 100;
          stepEnergy = stepDelta * battery;
          stepHours = calcularTempoCurva(charger, battery, startSoc, step, currentVehicle);
          stepCost = stepEnergy * tariff;
        }

        const isHighlighted = (step === Math.round(targetSoc));

        rowsHtml += 
          '<tr class="' + (isHighlighted ? 'selected' : '') + '">' +
            '<td>' + step + '%' + (isHighlighted ? ' <span class="badge-target">Alvo</span>' : '') + '</td>' +
            '<td>' + stepEnergy.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' kWh</td>' +
            '<td>' + formatDuration(stepHours) + '</td>' +
            '<td>R$ ' + stepCost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '</td>' +
          '</tr>';
      });

      tableBody.innerHTML = rowsHtml;
    }

    function onSliderChange() {
      let charger = parseFloat(sliderCharger.value);
      let battery = parseFloat(sliderBattery.value);
      let startSoc = parseInt(sliderStart.value, 10);
      let targetSoc = parseInt(sliderTarget.value, 10);

      if (startSoc > targetSoc) {
        startSoc = targetSoc;
        sliderStart.value = startSoc;
      }

      inputCharger.value = formatPt(charger, 1);
      inputBattery.value = formatPt(battery, 2);
      inputStart.value = startSoc;
      inputTarget.value = targetSoc;

      if (sliderTripBattery) sliderTripBattery.value = battery;
      if (inputTripBattery) inputTripBattery.value = formatPt(battery, 2);

      recalculate();
      recalculateConsumption();
    }

    function onInputChange() {
      let charger = parsePtNumber(inputCharger.value);
      let battery = parsePtNumber(inputBattery.value);
      let startSoc = parsePtNumber(inputStart.value);
      let targetSoc = parsePtNumber(inputTarget.value);

      if (startSoc > targetSoc) {
        startSoc = targetSoc;
        inputStart.value = startSoc;
      }

      sliderCharger.value = Math.min(Math.max(charger, 1.0), 150.0);
      sliderBattery.value = Math.min(Math.max(battery, 5.0), 150.0);
      sliderStart.value = Math.min(Math.max(startSoc, 0), 100);
      sliderTarget.value = Math.min(Math.max(targetSoc, 0), 100);

      if (sliderTripBattery) sliderTripBattery.value = sliderBattery.value;
      if (inputTripBattery) inputTripBattery.value = formatPt(battery, 2);

      recalculate();
      recalculateConsumption();
    }

    // ============================================================
    // Lógica e Eventos da Aba de Autonomia & Consumo
    // ============================================================
    // ============================================================
    // Lógica e Eventos da Aba de Autonomia & Consumo
    // ============================================================
    function recalculateConsumption() {
      let battery;
      if (currentVehicle) {
        if (tripBatteryInfoCard) tripBatteryInfoCard.style.display = 'flex';
        if (tripBatteryControlItem) tripBatteryControlItem.style.display = 'none';
        battery = currentVehicle.battery;
        if (tripBatteryDisplay) tripBatteryDisplay.textContent = formatPt(battery, 2) + ' kWh (' + currentVehicle.brand + ' ' + currentVehicle.model + ')';
        if (sliderTripBattery) sliderTripBattery.value = battery;
        if (inputTripBattery) inputTripBattery.value = formatPt(battery, 2);

        // Exibe atalho PBEV no modo painel quando houver autonomia oficial cadastrada
        if (btnPresetPbev && currentVehicle.range && currentVehicle.range > 0) {
          const officialKwhPer100 = (currentVehicle.battery / currentVehicle.range) * 100;
          btnPresetPbev.style.display = 'inline-block';
          btnPresetPbev.textContent = '🏷️ PBEV: ' + formatPt(officialKwhPer100, 1);
          btnPresetPbev.dataset.val = officialKwhPer100.toFixed(1);
        }
      } else {
        if (tripBatteryInfoCard) tripBatteryInfoCard.style.display = 'none';
        if (tripBatteryControlItem) tripBatteryControlItem.style.display = 'flex';
        battery = parsePtNumber(inputTripBattery ? inputTripBattery.value : inputBattery.value) || 60.5;
        if (btnPresetPbev) btnPresetPbev.style.display = 'none';
      }

      const tariff = parsePtNumber(inputTariff.value) || 1.79;

      if (tripCalcMode === 'dashboard') {
        // ========================================================
        // MODO 1: CONSUMO INFORMADO NO PAINEL (ex: 16,6 kWh/100km)
        // ========================================================
        const kwhPer100Km = parsePtNumber(inputDashboardConsumption ? inputDashboardConsumption.value : '16,6') || 16.6;
        let currentSoc = parsePtNumber(inputDashboardSoc ? inputDashboardSoc.value : '47') || 47;
        currentSoc = Math.min(Math.max(currentSoc, 1), 100);
        const targetDist = parsePtNumber(inputDashboardDistance ? inputDashboardDistance.value : '150') || 0;

        const energyRemainingKwh = (currentSoc / 100) * battery;

        if (kwhPer100Km > 0) {
          const kmPerKwh = 100 / kwhPer100Km;
          const remainingRangeKm = energyRemainingKwh * kmPerKwh;
          const totalRangeKm = battery * kmPerKwh;
          const costPerKm = (kwhPer100Km / 100) * tariff;

          resTripConsumption.textContent = formatPt(kwhPer100Km, 2);
          resTripKmpkwh.textContent = formatPt(kmPerKwh, 2) + ' km/kWh';
          if (dashboardKmpkwhHint) {
            dashboardKmpkwhHint.textContent = `⚡ Eficiência: ~${formatPt(kmPerKwh, 2)} km/kWh`;
          }

          resTripRemainingRange.textContent = formatPt(remainingRangeKm, 1) + ' km';
          resTripRemainingEnergy.textContent = formatPt(currentSoc, 0) + '% (' + formatPt(energyRemainingKwh, 2) + ' kWh restantes)';
          resTripTotalRange.textContent = formatPt(totalRangeKm, 1) + ' km';

          if (currentVehicle && currentVehicle.range && currentVehicle.range > 0) {
            const diffPercent = ((totalRangeKm - currentVehicle.range) / currentVehicle.range) * 100;
            const sign = diffPercent >= 0 ? '+' : '';
            resTripRangeBadge.textContent = sign + formatPt(diffPercent, 1) + '% vs. ' + currentVehicle.range + ' km oficial';
            resTripRangeBadge.className = 'badge-efficiency ' + (diffPercent >= 0 ? 'positive' : 'negative');
          } else {
            resTripRangeBadge.textContent = 'Projeção para 100% de bateria';
            resTripRangeBadge.className = 'badge-efficiency neutral';
          }

          // Custo do trajeto e análise de chegada ao destino simulado
          if (targetDist > 0) {
            const energyNeededKwh = (targetDist / 100) * kwhPer100Km;
            const tripCost = energyNeededKwh * tariff;
            resTripCost.textContent = 'R$ ' + formatPt(tripCost, 2);
            resTripCostPerKm.textContent = 'R$ ' + formatPt(costPerKm, 2) + ' / km (' + targetDist + ' km)';

            const percentUsed = (energyNeededKwh / battery) * 100;
            const arrivalSoc = currentSoc - percentUsed;

            if (dashboardArrivalBox && dashboardArrivalText) {
              if (arrivalSoc >= 15) {
                dashboardArrivalBox.className = 'dashboard-sim-arrival-box';
                dashboardArrivalText.innerHTML = `Para rodar <strong>${targetDist} km</strong>: gasto de <strong>${formatPt(energyNeededKwh, 1)} kWh (${formatPt(percentUsed, 0)}%)</strong>, chegando com <strong>${formatPt(arrivalSoc, 0)}%</strong> de bateria.`;
              } else if (arrivalSoc >= 0) {
                dashboardArrivalBox.className = 'dashboard-sim-arrival-box alert-warning';
                dashboardArrivalText.innerHTML = `⚠️ Para rodar <strong>${targetDist} km</strong>: bateria chegará em nível baixo (<strong>${formatPt(arrivalSoc, 0)}%</strong>). Recomendada recarga antes do destino!`;
              } else {
                dashboardArrivalBox.className = 'dashboard-sim-arrival-box alert-danger';
                const missingKwh = energyNeededKwh - energyRemainingKwh;
                dashboardArrivalText.innerHTML = `🛑 Autonomia insuficiente para <strong>${targetDist} km</strong> sem recarregar! Faltam <strong>${formatPt(Math.abs(arrivalSoc), 0)}%</strong> (${formatPt(missingKwh, 1)} kWh).`;
              }
            }
          } else {
            resTripCost.textContent = 'R$ ' + formatPt(costPerKm * 100, 2) + ' / 100km';
            resTripCostPerKm.textContent = 'R$ ' + formatPt(costPerKm, 2) + ' / km';
            if (dashboardArrivalText) {
              dashboardArrivalText.textContent = `Informe a distância pretendida acima para simular a carga de chegada.`;
            }
          }
        } else {
          resTripConsumption.textContent = '--';
          resTripKmpkwh.textContent = '-- km/kWh';
          resTripRemainingRange.textContent = '--';
          resTripTotalRange.textContent = '--';
          resTripCost.textContent = '--';
          resTripCostPerKm.textContent = '--';
        }

      } else {
        // ========================================================
        // MODO 2: CALCULAR POR TRECHO PERCORRIDO (Odômetro)
        // ========================================================
        const distance = parsePtNumber(inputTripDistance.value);
        let startSoc = parsePtNumber(inputTripStart.value);
        let currentSoc = parsePtNumber(inputTripCurrent.value);

        if (startSoc < currentSoc) {
          startSoc = currentSoc;
          inputTripStart.value = startSoc;
          sliderTripStart.value = startSoc;
        }

        const deltaPercent = Math.max(0, startSoc - currentSoc);
        const energySpentKwh = (deltaPercent / 100) * battery;
        const energyRemainingKwh = (currentSoc / 100) * battery;

        if (distance > 0 && deltaPercent > 0) {
          const kwhPer100Km = (energySpentKwh / distance) * 100;
          const kmPerKwh = distance / energySpentKwh;
          const remainingRangeKm = energyRemainingKwh * kmPerKwh;
          const totalRangeKm = distance + remainingRangeKm;
          const tripCost = energySpentKwh * tariff;
          const costPerKm = tripCost / distance;

          resTripConsumption.textContent = formatPt(kwhPer100Km, 2);
          resTripKmpkwh.textContent = formatPt(kmPerKwh, 2) + ' km/kWh';
          resTripRemainingRange.textContent = formatPt(remainingRangeKm, 1) + ' km';
          resTripRemainingEnergy.textContent = formatPt(currentSoc, 0) + '% (' + formatPt(energyRemainingKwh, 2) + ' kWh restantes)';
          resTripTotalRange.textContent = formatPt(totalRangeKm, 1) + ' km';

          // Sincroniza valor calculado no campo do modo painel
          if (inputDashboardConsumption && sliderDashboardConsumption) {
            inputDashboardConsumption.value = formatPt(kwhPer100Km, 1);
            sliderDashboardConsumption.value = Math.min(Math.max(kwhPer100Km, 8.0), 35.0);
          }

          if (currentVehicle && currentVehicle.range && currentVehicle.range > 0) {
            const diffPercent = ((totalRangeKm - currentVehicle.range) / currentVehicle.range) * 100;
            const sign = diffPercent >= 0 ? '+' : '';
            resTripRangeBadge.textContent = sign + formatPt(diffPercent, 1) + '% vs. ' + currentVehicle.range + ' km oficial';
            resTripRangeBadge.className = 'badge-efficiency ' + (diffPercent >= 0 ? 'positive' : 'negative');
          } else {
            resTripRangeBadge.textContent = 'Projeção para 100% de bateria';
            resTripRangeBadge.className = 'badge-efficiency neutral';
          }

          resTripCost.textContent = 'R$ ' + formatPt(tripCost, 2);
          resTripCostPerKm.textContent = 'R$ ' + formatPt(costPerKm, 2) + ' / km';
        } else {
          resTripConsumption.textContent = '--';
          resTripKmpkwh.textContent = '-- km/kWh';
          resTripRemainingRange.textContent = '--';
          resTripRemainingEnergy.textContent = formatPt(currentSoc, 0) + '% (' + formatPt(energyRemainingKwh, 2) + ' kWh restantes)';
          resTripTotalRange.textContent = '--';
          resTripRangeBadge.textContent = 'Informe distância e consumo';
          resTripRangeBadge.className = 'badge-efficiency neutral';
          resTripCost.textContent = '--';
          resTripCostPerKm.textContent = '--';
        }
      }

      recalculateMultiStop();
    }

    function onTripSliderChange() {
      let distance = parseFloat(sliderTripDistance.value);
      let startSoc = parseInt(sliderTripStart.value, 10);
      let currentSoc = parseInt(sliderTripCurrent.value, 10);

      if (startSoc < currentSoc) {
        startSoc = currentSoc;
        sliderTripStart.value = startSoc;
      }

      inputTripDistance.value = distance;
      inputTripStart.value = startSoc;
      inputTripCurrent.value = currentSoc;

      recalculateConsumption();
    }

    function onTripInputChange() {
      let distance = parsePtNumber(inputTripDistance.value);
      let startSoc = parsePtNumber(inputTripStart.value);
      let currentSoc = parsePtNumber(inputTripCurrent.value);

      if (startSoc < currentSoc) {
        startSoc = currentSoc;
        inputTripStart.value = startSoc;
      }

      sliderTripDistance.value = Math.min(Math.max(distance, 1), 800);
      sliderTripStart.value = Math.min(Math.max(startSoc, 0), 100);
      sliderTripCurrent.value = Math.min(Math.max(currentSoc, 0), 100);

      recalculateConsumption();
    }

    function onTripBatterySliderChange() {
      let battery = parseFloat(sliderTripBattery.value);
      inputTripBattery.value = formatPt(battery, 2);
      sliderBattery.value = battery;
      inputBattery.value = formatPt(battery, 2);

      recalculate();
      recalculateConsumption();
    }

    function onTripBatteryInputChange() {
      let battery = parsePtNumber(inputTripBattery.value);
      sliderTripBattery.value = Math.min(Math.max(battery, 5.0), 150.0);
      sliderBattery.value = sliderTripBattery.value;
      inputBattery.value = formatPt(battery, 2);

      recalculate();
      recalculateConsumption();
    }

    if (sliderTripBattery) sliderTripBattery.addEventListener('input', onTripBatterySliderChange);
    if (inputTripBattery) inputTripBattery.addEventListener('input', onTripBatteryInputChange);

    [sliderTripDistance, sliderTripStart, sliderTripCurrent].forEach(s => s.addEventListener('input', onTripSliderChange));
    [inputTripDistance, inputTripStart, inputTripCurrent].forEach(i => i.addEventListener('input', onTripInputChange));

    // Presets de Distância (valores e incrementos)
    document.querySelectorAll('#trip-distance-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        if (this.dataset.add) {
          const add = parseInt(this.dataset.add, 10);
          const currentVal = parsePtNumber(inputTripDistance.value);
          const newVal = Math.min(currentVal + add, 800);
          inputTripDistance.value = newVal;
          sliderTripDistance.value = newVal;
          document.querySelectorAll('#trip-distance-presets .preset-chip').forEach(c => c.classList.remove('active'));
        } else if (this.dataset.val) {
          document.querySelectorAll('#trip-distance-presets .preset-chip').forEach(c => c.classList.remove('active'));
          this.classList.add('active');
          const val = parseInt(this.dataset.val, 10);
          inputTripDistance.value = val;
          sliderTripDistance.value = val;
        }
        onTripInputChange();
      });
    });

    // Presets de Carga Inicial
    document.querySelectorAll('#trip-start-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        document.querySelectorAll('#trip-start-presets .preset-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const val = parseInt(this.dataset.val, 10);
        inputTripStart.value = val;
        sliderTripStart.value = val;
        onTripInputChange();
      });
    });

    // Presets de Carga Restante
    document.querySelectorAll('#trip-current-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        document.querySelectorAll('#trip-current-presets .preset-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const val = parseInt(this.dataset.val, 10);
        inputTripCurrent.value = val;
        sliderTripCurrent.value = val;
        onTripInputChange();
      });
    });

    // Alternância de Método de Consumo (Painel vs Odômetro)
    function switchCalcMode(mode) {
      tripCalcMode = mode;
      if (mode === 'dashboard') {
        if (btnCalcModeDashboard) btnCalcModeDashboard.classList.add('active');
        if (btnCalcModeOdometer) btnCalcModeOdometer.classList.remove('active');
        if (groupCalcDashboard) groupCalcDashboard.classList.remove('hidden');
        if (groupCalcOdometer) groupCalcOdometer.classList.add('hidden');
      } else {
        if (btnCalcModeDashboard) btnCalcModeDashboard.classList.remove('active');
        if (btnCalcModeOdometer) btnCalcModeOdometer.classList.add('active');
        if (groupCalcDashboard) groupCalcDashboard.classList.add('hidden');
        if (groupCalcOdometer) groupCalcOdometer.classList.remove('hidden');
      }
      recalculateConsumption();
    }

    if (btnCalcModeDashboard) btnCalcModeDashboard.addEventListener('click', () => switchCalcMode('dashboard'));
    if (btnCalcModeOdometer) btnCalcModeOdometer.addEventListener('click', () => switchCalcMode('odometer'));

    // Eventos do Modo Consumo do Painel
    function onDashboardConsumptionChange() {
      let val = parsePtNumber(inputDashboardConsumption.value);
      val = Math.min(Math.max(val, 5.0), 60.0);
      if (sliderDashboardConsumption) sliderDashboardConsumption.value = Math.min(Math.max(val, 8.0), 35.0);
      recalculateConsumption();
    }

    function onDashboardConsumptionSliderChange() {
      let val = parseFloat(sliderDashboardConsumption.value);
      if (inputDashboardConsumption) inputDashboardConsumption.value = formatPt(val, 1);
      recalculateConsumption();
    }

    function onDashboardSocChange() {
      let val = parseInt(inputDashboardSoc.value, 10) || 0;
      val = Math.min(Math.max(val, 1), 100);
      if (sliderDashboardSoc) sliderDashboardSoc.value = val;
      if (inputTripCurrent) inputTripCurrent.value = val;
      if (sliderTripCurrent) sliderTripCurrent.value = val;
      recalculateConsumption();
    }

    function onDashboardSocSliderChange() {
      let val = parseInt(sliderDashboardSoc.value, 10);
      if (inputDashboardSoc) inputDashboardSoc.value = val;
      if (inputTripCurrent) inputTripCurrent.value = val;
      if (sliderTripCurrent) sliderTripCurrent.value = val;
      recalculateConsumption();
    }

    function onDashboardDistanceChange() {
      let val = parsePtNumber(inputDashboardDistance.value) || 0;
      val = Math.min(Math.max(val, 0), 1000);
      if (sliderDashboardDistance) sliderDashboardDistance.value = Math.min(Math.max(val, 10), 600);
      recalculateConsumption();
    }

    function onDashboardDistanceSliderChange() {
      let val = parseInt(sliderDashboardDistance.value, 10);
      if (inputDashboardDistance) inputDashboardDistance.value = val;
      recalculateConsumption();
    }

    if (inputDashboardConsumption) inputDashboardConsumption.addEventListener('input', onDashboardConsumptionChange);
    if (sliderDashboardConsumption) sliderDashboardConsumption.addEventListener('input', onDashboardConsumptionSliderChange);

    if (inputDashboardSoc) inputDashboardSoc.addEventListener('input', onDashboardSocChange);
    if (sliderDashboardSoc) sliderDashboardSoc.addEventListener('input', onDashboardSocSliderChange);

    if (inputDashboardDistance) inputDashboardDistance.addEventListener('input', onDashboardDistanceChange);
    if (sliderDashboardDistance) sliderDashboardDistance.addEventListener('input', onDashboardDistanceSliderChange);

    // Presets de Consumo Médio do Painel
    document.querySelectorAll('#dashboard-consumption-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        document.querySelectorAll('#dashboard-consumption-presets .preset-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const val = parseFloat(this.dataset.val);
        if (!isNaN(val)) {
          if (inputDashboardConsumption) inputDashboardConsumption.value = formatPt(val, 1);
          if (sliderDashboardConsumption) sliderDashboardConsumption.value = Math.min(Math.max(val, 8.0), 35.0);
          recalculateConsumption();
        }
      });
    });

    // Presets de Carga da Bateria no Painel
    document.querySelectorAll('#dashboard-soc-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        document.querySelectorAll('#dashboard-soc-presets .preset-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const val = parseInt(this.dataset.val, 10);
        if (!isNaN(val)) {
          if (inputDashboardSoc) inputDashboardSoc.value = val;
          if (sliderDashboardSoc) sliderDashboardSoc.value = val;
          if (inputTripCurrent) inputTripCurrent.value = val;
          if (sliderTripCurrent) sliderTripCurrent.value = val;
          recalculateConsumption();
        }
      });
    });

    // Presets de Distância Pretendida
    document.querySelectorAll('#dashboard-distance-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        if (this.dataset.add) {
          const add = parseInt(this.dataset.add, 10);
          const currentVal = parsePtNumber(inputDashboardDistance.value) || 0;
          const newVal = Math.min(currentVal + add, 600);
          inputDashboardDistance.value = newVal;
          sliderDashboardDistance.value = newVal;
          document.querySelectorAll('#dashboard-distance-presets .preset-chip').forEach(c => c.classList.remove('active'));
        } else if (this.dataset.val) {
          document.querySelectorAll('#dashboard-distance-presets .preset-chip').forEach(c => c.classList.remove('active'));
          this.classList.add('active');
          const val = parseInt(this.dataset.val, 10);
          inputDashboardDistance.value = val;
          sliderDashboardDistance.value = val;
        }
        recalculateConsumption();
      });
    });

    [sliderCharger, sliderBattery, sliderStart, sliderTarget].forEach(s => s.addEventListener('input', onSliderChange));
    [inputCharger, inputBattery, inputStart, inputTarget, inputTariff].forEach(i => i.addEventListener('input', onInputChange));
    inputTariff.addEventListener('input', function() {
      try {
        localStorage.setItem(STORAGE_KEY_TARIFF, inputTariff.value);
      } catch (e) {}
    });

    // ============================================================
    // Sub-modo: Viagem com Paradas de Recarga
    // ============================================================
    function switchSubMode(mode) {
      if (mode === 'single') {
        if (submodeBtnSingle) submodeBtnSingle.classList.add('active');
        if (submodeBtnMulti) submodeBtnMulti.classList.remove('active');
        if (containerSingleTrip) containerSingleTrip.classList.remove('hidden');
        if (containerMultiTrip) containerMultiTrip.classList.add('hidden');
      } else {
        if (submodeBtnSingle) submodeBtnSingle.classList.remove('active');
        if (submodeBtnMulti) submodeBtnMulti.classList.add('active');
        if (containerSingleTrip) containerSingleTrip.classList.add('hidden');
        if (containerMultiTrip) containerMultiTrip.classList.remove('hidden');
        recalculateMultiStop();
      }
    }

    if (submodeBtnSingle) submodeBtnSingle.addEventListener('click', () => switchSubMode('single'));
    if (submodeBtnMulti) submodeBtnMulti.addEventListener('click', () => switchSubMode('multi'));

    function renderTripStops() {
      if (!multiStopsList) return;
      multiStopsList.innerHTML = '';

      let currentBattery = currentVehicle ? currentVehicle.battery : (parsePtNumber(inputTripBattery ? inputTripBattery.value : inputBattery.value) || 60.5);

      tripStops.forEach((stop, index) => {
        const item = document.createElement('div');
        item.className = 'stop-item-card';

        const addedPercent = Math.max(0, stop.departureSoc - stop.arrivalSoc);
        const addedKwh = (addedPercent / 100) * currentBattery;
        const stopCost = addedKwh * stop.tariff;

        item.innerHTML = `
          <div class="stop-item-header">
            <span class="stop-item-title">⚡ Parada #${index + 1}</span>
            <button type="button" class="btn-remove-stop" data-index="${index}" title="Excluir esta parada">🗑️ Excluir</button>
          </div>
          <div class="stop-inputs-grid">
            <div class="stop-input-group">
              <label>Carga Chegada (%)</label>
              <input type="number" class="stop-mini-input stop-arrival" data-index="${index}" value="${stop.arrivalSoc}" min="0" max="100" step="1">
            </div>
            <div class="stop-input-group">
              <label>Carga Saída (%)</label>
              <input type="number" class="stop-mini-input stop-departure" data-index="${index}" value="${stop.departureSoc}" min="0" max="100" step="1">
            </div>
            <div class="stop-input-group">
              <label>Tarifa (R$/kWh)</label>
              <input type="text" class="stop-mini-input stop-tariff" data-index="${index}" value="${formatPt(stop.tariff, 2)}">
            </div>
          </div>
          <div class="stop-item-calc">
            Injetado: +${addedPercent}% (${formatPt(addedKwh, 1)} kWh) • <strong>R$ ${formatPt(stopCost, 2)}</strong>
          </div>
        `;
        multiStopsList.appendChild(item);
      });

      // Listeners de remoção
      multiStopsList.querySelectorAll('.btn-remove-stop').forEach(btn => {
        btn.addEventListener('click', function() {
          const idx = parseInt(this.dataset.index, 10);
          removeTripStop(idx);
        });
      });

      // Listeners dos campos de cada parada
      multiStopsList.querySelectorAll('.stop-arrival').forEach(input => {
        input.addEventListener('input', function() {
          const idx = parseInt(this.dataset.index, 10);
          tripStops[idx].arrivalSoc = Math.min(Math.max(parseInt(this.value, 10) || 0, 0), 100);
          recalculateMultiStop();
        });
      });

      multiStopsList.querySelectorAll('.stop-departure').forEach(input => {
        input.addEventListener('input', function() {
          const idx = parseInt(this.dataset.index, 10);
          tripStops[idx].departureSoc = Math.min(Math.max(parseInt(this.value, 10) || 0, 0), 100);
          recalculateMultiStop();
        });
      });

      multiStopsList.querySelectorAll('.stop-tariff').forEach(input => {
        input.addEventListener('input', function() {
          const idx = parseInt(this.dataset.index, 10);
          tripStops[idx].tariff = parsePtNumber(this.value) || 0;
          recalculateMultiStop();
        });
      });
    }

    function addTripStop() {
      const lastStop = tripStops[tripStops.length - 1];
      const newArrival = lastStop ? Math.max(15, lastStop.arrivalSoc) : 20;
      const newDeparture = 80;
      const newTariff = lastStop ? lastStop.tariff : 2.50;
      tripStops.push({ arrivalSoc: newArrival, departureSoc: newDeparture, tariff: newTariff });
      renderTripStops();
      recalculateMultiStop();
    }

    function removeTripStop(index) {
      if (tripStops.length > 0) {
        tripStops.splice(index, 1);
        renderTripStops();
        recalculateMultiStop();
      }
    }

    if (btnAddTripStop) {
      btnAddTripStop.addEventListener('click', addTripStop);
    }

    function recalculateMultiStop() {
      let battery;
      if (currentVehicle) {
        battery = currentVehicle.battery;
      } else {
        battery = parsePtNumber(inputTripBattery ? inputTripBattery.value : inputBattery.value) || 60.5;
      }

      const distance = parsePtNumber(inputMultiDistance ? inputMultiDistance.value : '800') || 0;
      const startSoc = Math.min(Math.max(parseInt(inputMultiStartSoc ? inputMultiStartSoc.value : '100', 10) || 0, 0), 100);
      const startTariff = parsePtNumber(inputMultiStartTariff ? inputMultiStartTariff.value : '1,79') || 0;
      const arrivalSoc = Math.min(Math.max(parseInt(inputMultiArrivalSoc ? inputMultiArrivalSoc.value : '34', 10) || 0, 0), 100);
      const finalTariff = parsePtNumber(inputMultiFinalTariff ? inputMultiFinalTariff.value : '1,79') || 0;

      // Atualiza os subtextos de cálculo nas paradas
      if (multiStopsList) {
        const cards = multiStopsList.querySelectorAll('.stop-item-card');
        tripStops.forEach((stop, idx) => {
          if (cards[idx]) {
            const addedPercent = Math.max(0, stop.departureSoc - stop.arrivalSoc);
            const addedKwh = (addedPercent / 100) * battery;
            const stopCost = addedKwh * (stop.tariff || 0);
            const calcEl = cards[idx].querySelector('.stop-item-calc');
            if (calcEl) {
              calcEl.innerHTML = `Injetado: +${addedPercent}% (${formatPt(addedKwh, 1)} kWh) • <strong>R$ ${formatPt(stopCost, 2)}</strong>`;
            }
          }
        });
      }

      // 1) Delta de energia da partida consumida (startSoc - arrivalSoc)
      const netStartPercent = Math.max(0, startSoc - arrivalSoc);
      const startEnergyKwh = (netStartPercent / 100) * battery;
      const startCost = startEnergyKwh * startTariff;

      // 2) Soma de todas as recargas nas paradas
      let totalStopsPercent = 0;
      let totalStopsCost = 0;
      tripStops.forEach(s => {
        const stopDelta = Math.max(0, s.departureSoc - s.arrivalSoc);
        totalStopsPercent += stopDelta;
        totalStopsCost += ((stopDelta / 100) * battery) * (s.tariff || 0);
      });

      const totalStopsKwh = (totalStopsPercent / 100) * battery;
      const totalEnergyKwh = startEnergyKwh + totalStopsKwh;
      const totalTripCost = startCost + totalStopsCost;

      // 3) Recarga no destino final para 100%
      const finalNeededPercent = Math.max(0, 100 - arrivalSoc);
      const finalNeededKwh = (finalNeededPercent / 100) * battery;
      const finalRechargeCost = finalNeededKwh * finalTariff;

      if (distance > 0 && totalEnergyKwh > 0) {
        const kwhPer100Km = (totalEnergyKwh / distance) * 100;
        const kmPerKwh = distance / totalEnergyKwh;
        const costPerKm = totalTripCost / distance;

        if (resMultiConsumption) resMultiConsumption.textContent = formatPt(kwhPer100Km, 2);
        if (resMultiKmpkwh) resMultiKmpkwh.textContent = formatPt(kmPerKwh, 2) + ' km/kWh';
        if (resMultiTotalCost) resMultiTotalCost.textContent = 'R$ ' + formatPt(totalTripCost, 2);
        if (resMultiCostPerKm) resMultiCostPerKm.textContent = 'R$ ' + formatPt(costPerKm, 2) + ' / km';
        if (resMultiTotalEnergy) resMultiTotalEnergy.textContent = formatPt(totalEnergyKwh, 1) + ' kWh';
        if (resMultiStopsInfo) {
          const stopsCount = tripStops.length;
          resMultiStopsInfo.textContent = stopsCount + (stopsCount === 1 ? ' parada' : ' paradas') + ' (' + formatPt(totalStopsKwh, 1) + ' kWh)';
        }
      } else {
        if (resMultiConsumption) resMultiConsumption.textContent = '--';
        if (resMultiKmpkwh) resMultiKmpkwh.textContent = '-- km/kWh';
        if (resMultiTotalCost) resMultiTotalCost.textContent = '--';
        if (resMultiCostPerKm) resMultiCostPerKm.textContent = '-- / km';
        if (resMultiTotalEnergy) resMultiTotalEnergy.textContent = '--';
        if (resMultiStopsInfo) resMultiStopsInfo.textContent = '-- paradas';
      }

      if (resMultiFinalCost) resMultiFinalCost.textContent = 'R$ ' + formatPt(finalRechargeCost, 2);
      if (resMultiFinalEnergy) resMultiFinalEnergy.textContent = formatPt(finalNeededKwh, 1) + ' kWh para 100%';
    }

    function onMultiDistanceSliderChange() {
      const val = parseFloat(sliderMultiDistance.value);
      inputMultiDistance.value = val;
      document.querySelectorAll('#multi-distance-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', parseInt(c.dataset.val, 10) === val);
      });
      recalculateMultiStop();
    }

    function onMultiDistanceInputChange() {
      const val = parsePtNumber(inputMultiDistance.value);
      sliderMultiDistance.value = Math.min(Math.max(val, 50), 2000);
      document.querySelectorAll('#multi-distance-presets .preset-chip').forEach(c => {
        c.classList.toggle('active', parseInt(c.dataset.val, 10) === val);
      });
      recalculateMultiStop();
    }

    if (sliderMultiDistance) sliderMultiDistance.addEventListener('input', onMultiDistanceSliderChange);
    if (inputMultiDistance) inputMultiDistance.addEventListener('input', onMultiDistanceInputChange);

    [inputMultiStartSoc, inputMultiStartTariff, inputMultiArrivalSoc, inputMultiFinalTariff].forEach(input => {
      if (input) input.addEventListener('input', recalculateMultiStop);
    });

    document.querySelectorAll('#multi-distance-presets .preset-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        document.querySelectorAll('#multi-distance-presets .preset-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const val = parseInt(this.dataset.val, 10);
        inputMultiDistance.value = val;
        sliderMultiDistance.value = val;
        recalculateMultiStop();
      });
    });

    // Restaurar tarifa salva do usuário
    try {
      const savedTariff = localStorage.getItem(STORAGE_KEY_TARIFF);
      if (savedTariff) {
        inputTariff.value = savedTariff;
      }
    } catch (e) {}

    initTheme();
    initVehicleModal();

    // Restaurar veículo favorito do usuário (Offline First)
    const savedVehicleOnStart = getSavedVehicle();
    if (savedVehicleOnStart) {
      selectVehicle(savedVehicleOnStart, false);
    } else {
      atualizarDisplayVeiculo();
      onSliderChange();
    }

    recalculateConsumption();
    renderTripStops();
    recalculateMultiStop();

    // ============================================================
    // Módulo Administrativo: CRUD Completo de Veículos
    // ============================================================
    const btnOpenNovoVeiculo = document.getElementById('btn-open-novo-veiculo');
    const btnAdminShortcut = document.getElementById('btn-admin-shortcut');
    const modalAdminLogin = document.getElementById('modal-admin-login');
    const closeAdminLoginModal = document.getElementById('close-admin-login-modal');
    const btnCancelAdminLogin = document.getElementById('btn-cancel-admin-login');
    const formAdminLogin = document.getElementById('form-admin-login');
    const adminInputKey = document.getElementById('admin-input-key');
    const adminLoginMsg = document.getElementById('admin-login-msg');

    const modalNovoVeiculo = document.getElementById('modal-novo-veiculo');
    const modalNovoVeiculoTitle = document.getElementById('modal-novo-veiculo-title');
    const modalNovoVeiculoDesc = document.getElementById('modal-novo-veiculo-desc');
    const closeNovoVeiculoModal = document.getElementById('close-novo-veiculo-modal');
    const btnCancelNovoVeiculo = document.getElementById('btn-cancel-novo-veiculo');
    const formNovoVeiculo = document.getElementById('form-novo-veiculo');
    const novoVeiculoId = document.getElementById('novo-veiculo-id');
    const btnSalvarNovoVeiculo = document.getElementById('btn-salvar-novo-veiculo');
    const btnExcluirVeiculo = document.getElementById('btn-excluir-veiculo');
    const novoVeiculoMsg = document.getElementById('novo-veiculo-msg');
    const marcasDatalist = document.getElementById('marcas-datalist');

    let pendingAdminAction = null;

    function populateMarcasDatalist() {
      if (!marcasDatalist) return;
      const marcasUnicas = [...new Set(VEHICLE_DATA.map(v => v.brand))].sort();
      marcasDatalist.innerHTML = marcasUnicas.map(m => `<option value="${m}">`).join('');
    }

    let solicitacaoVinculadaAoNovoVeiculo = null;

    function abrirModalNovoVeiculo(dadosPreenchidos = null, solicitacaoId = null) {
      populateMarcasDatalist();
      if (modalAdminLogin) modalAdminLogin.classList.remove('active');
      if (novoVeiculoMsg) novoVeiculoMsg.className = 'admin-msg-box hidden';
      
      solicitacaoVinculadaAoNovoVeiculo = solicitacaoId || null;

      // Modo Criação
      if (novoVeiculoId) novoVeiculoId.value = '';
      if (modalNovoVeiculoTitle) modalNovoVeiculoTitle.textContent = dadosPreenchidos ? '⚡ Cadastrar a partir de Sugestão' : '⚡ Cadastrar Novo Veículo';
      if (modalNovoVeiculoDesc) modalNovoVeiculoDesc.textContent = dadosPreenchidos ? 'Confira e complete os dados oficiais antes de salvar no catálogo' : 'Adicione um novo modelo homologado ao catálogo';
      if (btnSalvarNovoVeiculo) btnSalvarNovoVeiculo.textContent = '💾 Salvar no Catálogo';
      if (btnExcluirVeiculo) btnExcluirVeiculo.classList.add('hidden');
      if (formNovoVeiculo) formNovoVeiculo.reset();
      const activeCheck = document.getElementById('novo-veiculo-active');
      if (activeCheck) activeCheck.checked = true;

      if (dadosPreenchidos) {
        if (dadosPreenchidos.brand) document.getElementById('novo-veiculo-marca').value = dadosPreenchidos.brand;
        if (dadosPreenchidos.model) document.getElementById('novo-veiculo-modelo').value = dadosPreenchidos.model;
        if (dadosPreenchidos.type) document.getElementById('novo-veiculo-tipo').value = dadosPreenchidos.type;
        if (dadosPreenchidos.battery) document.getElementById('novo-veiculo-bateria').value = dadosPreenchidos.battery;
      }

      if (modalNovoVeiculo) modalNovoVeiculo.classList.add('active');
    }

    function abrirModalEdicao(v) {
      populateMarcasDatalist();
      if (modalAdminLogin) modalAdminLogin.classList.remove('active');
      if (novoVeiculoMsg) novoVeiculoMsg.className = 'admin-msg-box hidden';

      // Modo Edição
      if (novoVeiculoId) novoVeiculoId.value = v.id;
      if (modalNovoVeiculoTitle) modalNovoVeiculoTitle.textContent = `✏️ Editar Veículo: ${v.brand} ${v.model}`;
      if (modalNovoVeiculoDesc) modalNovoVeiculoDesc.textContent = `Altere as especificações técnicas de ${v.model}`;
      if (btnSalvarNovoVeiculo) btnSalvarNovoVeiculo.textContent = '💾 Salvar Alterações';
      if (btnExcluirVeiculo) {
        btnExcluirVeiculo.classList.remove('hidden');
        btnExcluirVeiculo.textContent = (v.active === false) ? '🗑️ Excluir Definitivo' : '🚫 Desativar Veículo';
      }

      document.getElementById('novo-veiculo-marca').value = v.brand;
      document.getElementById('novo-veiculo-modelo').value = v.model;
      document.getElementById('novo-veiculo-tipo').value = v.type;
      document.getElementById('novo-veiculo-bateria').value = v.battery;
      document.getElementById('novo-veiculo-max-ac').value = v.maxAc;
      document.getElementById('novo-veiculo-max-dc').value = v.maxDc;
      document.getElementById('novo-veiculo-range').value = v.range;
      const activeCheck = document.getElementById('novo-veiculo-active');
      if (activeCheck) activeCheck.checked = (v.active !== false);

      if (modalNovoVeiculo) modalNovoVeiculo.classList.add('active');
    }

    function abrirModalAdminLogin(onSuccessAction) {
      pendingAdminAction = onSuccessAction || null;
      if (adminLoginMsg) adminLoginMsg.className = 'admin-msg-box hidden';
      if (adminInputKey) adminInputKey.value = '';
      if (modalAdminLogin) modalAdminLogin.classList.add('active');
    }

    async function dispararAberturaNovoVeiculo() {
      if (window.EV_API && window.EV_API.hasAdminKey()) {
        try {
          await window.EV_API.verificarAdmin();
          abrirModalNovoVeiculo();
        } catch (e) {
          window.EV_API.clearAdminKey();
          abrirModalAdminLogin(() => abrirModalNovoVeiculo());
        }
      } else {
        abrirModalAdminLogin(() => abrirModalNovoVeiculo());
      }
    }

    async function dispararEdicaoVeiculo(v) {
      if (window.EV_API && window.EV_API.hasAdminKey()) {
        try {
          await window.EV_API.verificarAdmin();
          abrirModalEdicao(v);
        } catch (e) {
          window.EV_API.clearAdminKey();
          abrirModalAdminLogin(() => abrirModalEdicao(v));
        }
      } else {
        abrirModalAdminLogin(() => abrirModalEdicao(v));
      }
    }

    async function dispararReativacaoVeiculo(v) {
      if (window.EV_API && window.EV_API.hasAdminKey()) {
        try {
          await window.EV_API.verificarAdmin();
          await executarReativacao(v.id);
        } catch (e) {
          window.EV_API.clearAdminKey();
          abrirModalAdminLogin(async () => {
            await executarReativacao(v.id);
          });
        }
      } else {
        abrirModalAdminLogin(async () => {
          await executarReativacao(v.id);
        });
      }
    }

    async function executarReativacao(id) {
      try {
        await window.EV_API.atualizarVeiculo(id, { active: true });
        alert('Veículo reativado com sucesso no catálogo!');
        if (window.EV_API.listarVeiculos) {
          const listaAtualizada = await window.EV_API.listarVeiculos(true);
          if (listaAtualizada) {
            VEHICLE_DATA = listaAtualizada;
            initVehicleModal();
          }
        }
      } catch (err) {
        alert('Falha ao reativar: ' + (err.message || 'Erro desconhecido'));
      }
    }

    async function dispararExclusaoVeiculo(v, isInativo = false) {
      const confirmMsg = isInativo
        ? `⚠️ ATENÇÃO: Deseja EXCLUIR DEFINITIVAMENTE o veículo "${v.brand} ${v.model}" do banco de dados? Esta ação não pode ser desfeita.`
        : `Deseja DESATIVAR o veículo "${v.brand} ${v.model}" do catálogo? Ele ficará na aba de Desativados e poderá ser reativado quando quiser.`;

      if (!confirm(confirmMsg)) return;

      if (window.EV_API && window.EV_API.hasAdminKey()) {
        try {
          await window.EV_API.verificarAdmin();
          await executarExclusao(v.id, isInativo);
        } catch (e) {
          window.EV_API.clearAdminKey();
          abrirModalAdminLogin(async () => {
            await executarExclusao(v.id, isInativo);
          });
        }
      } else {
        abrirModalAdminLogin(async () => {
          await executarExclusao(v.id, isInativo);
        });
      }
    }

    async function executarExclusao(id, permanente = false) {
      try {
        await window.EV_API.desativarVeiculo(id, null, permanente);
        alert(permanente ? 'Veículo excluído definitivamente!' : 'Veículo desativado com sucesso!');
        
        // Recarrega lista
        if (window.EV_API.listarVeiculos) {
          const listaAtualizada = await window.EV_API.listarVeiculos(true);
          if (listaAtualizada) {
            VEHICLE_DATA = listaAtualizada;
            initVehicleModal();
          }
        }
        
        if (modalNovoVeiculo) modalNovoVeiculo.classList.remove('active');
      } catch (err) {
        alert('Falha na operação: ' + (err.message || 'Erro desconhecido'));
      }
    }

    const btnToggleAdmin = document.getElementById('btn-toggle-admin');

    function atualizarEstadoVisualAdmin() {
      const estaLogado = window.EV_API && window.EV_API.hasAdminKey();
      if (estaLogado) {
        document.body.classList.add('admin-mode-active');
        if (btnToggleAdmin) {
          btnToggleAdmin.innerHTML = '🛡️ Sair Admin';
          btnToggleAdmin.title = 'Modo Administrador Ativo (Clique para Sair)';
        }
        // Atualiza notificações de solicitações pendentes
        if (typeof atualizarContadorSolicitacoesPendentes === 'function') {
          atualizarContadorSolicitacoesPendentes();
        }
        // Carrega catálogo completo incluindo desativados
        if (window.EV_API.listarVeiculos) {
          window.EV_API.listarVeiculos(true).then(dados => {
            if (dados && dados.length > 0) {
              VEHICLE_DATA = dados;
              initVehicleModal();
            }
          }).catch(() => {});
        }
      } else {
        document.body.classList.remove('admin-mode-active');
        if (btnToggleAdmin) {
          btnToggleAdmin.innerHTML = '🔐 Admin';
          btnToggleAdmin.title = 'Acesso Administrativo (Login)';
        }
        if (typeof atualizarContadorSolicitacoesPendentes === 'function') {
          atualizarContadorSolicitacoesPendentes();
        }
        // Se filtro estava em inativos, volta para Todos
        if (selectedTypeFilter === 'INACTIVE') {
          selectedTypeFilter = 'ALL';
          document.querySelectorAll('.filter-type-pill').forEach(b => {
            b.classList.toggle('active', b.dataset.type === 'ALL');
          });
        }
        // Carrega apenas veículos ativos
        if (window.EV_API.listarVeiculos) {
          window.EV_API.listarVeiculos(false).then(dados => {
            if (dados && dados.length > 0) {
              VEHICLE_DATA = dados;
              initVehicleModal();
            }
          }).catch(() => {});
        }
      }
    }

    // Inicialização do estado visual do Admin
    atualizarEstadoVisualAdmin();
    if (window.EV_API && window.EV_API.hasAdminKey()) {
      window.EV_API.verificarAdmin().catch(() => {
        window.EV_API.clearAdminKey();
        atualizarEstadoVisualAdmin();
      });
    }

    if (btnToggleAdmin) {
      btnToggleAdmin.addEventListener('click', function() {
        if (window.EV_API && window.EV_API.hasAdminKey()) {
          if (confirm('Deseja sair do Modo Administrador e voltar à visualização limpa do cliente?')) {
            window.EV_API.clearAdminKey();
            atualizarEstadoVisualAdmin();
          }
        } else {
          abrirModalAdminLogin();
        }
      });
    }

    if (btnOpenNovoVeiculo) btnOpenNovoVeiculo.addEventListener('click', dispararAberturaNovoVeiculo);

    if (closeAdminLoginModal) closeAdminLoginModal.addEventListener('click', () => modalAdminLogin.classList.remove('active'));
    if (btnCancelAdminLogin) btnCancelAdminLogin.addEventListener('click', () => modalAdminLogin.classList.remove('active'));

    if (formAdminLogin) {
      formAdminLogin.addEventListener('submit', async function(e) {
        e.preventDefault();
        const key = adminInputKey.value.trim();
        if (!key) return;

        adminLoginMsg.className = 'admin-msg-box';
        adminLoginMsg.textContent = 'Verificando credenciais...';

        try {
          await window.EV_API.verificarAdmin(key);
          window.EV_API.setAdminKey(key, true);
          atualizarEstadoVisualAdmin();
          adminLoginMsg.className = 'admin-msg-box sucesso';
          adminLoginMsg.textContent = 'Acesso liberado!';
          
          setTimeout(() => {
            if (modalAdminLogin) modalAdminLogin.classList.remove('active');
            if (typeof pendingAdminAction === 'function') {
              const action = pendingAdminAction;
              pendingAdminAction = null;
              action();
            }
          }, 400);
        } catch (err) {
          adminLoginMsg.className = 'admin-msg-box erro';
          adminLoginMsg.textContent = 'Senha incorreta. Tente novamente.';
        }
      });
    }

    if (closeNovoVeiculoModal) closeNovoVeiculoModal.addEventListener('click', () => modalNovoVeiculo.classList.remove('active'));
    if (btnCancelNovoVeiculo) btnCancelNovoVeiculo.addEventListener('click', () => modalNovoVeiculo.classList.remove('active'));

    if (btnExcluirVeiculo) {
      btnExcluirVeiculo.addEventListener('click', async function() {
        const id = novoVeiculoId ? novoVeiculoId.value : null;
        if (!id) return;
        const veiculoAtual = VEHICLE_DATA.find(v => v.id === id);
        const isInativo = veiculoAtual ? (veiculoAtual.active === false) : false;
        await dispararExclusaoVeiculo(veiculoAtual || { id, brand: 'este', model: 'veículo' }, isInativo);
      });
    }

    if (formNovoVeiculo) {
      formNovoVeiculo.addEventListener('submit', async function(e) {
        e.preventDefault();
        const idAtual = novoVeiculoId ? novoVeiculoId.value : null;
        const brand = document.getElementById('novo-veiculo-marca').value.trim();
        const model = document.getElementById('novo-veiculo-modelo').value.trim();
        const type = document.getElementById('novo-veiculo-tipo').value;
        const battery = parseFloat(document.getElementById('novo-veiculo-bateria').value);
        const maxAc = parseFloat(document.getElementById('novo-veiculo-max-ac').value);
        const maxDc = parseFloat(document.getElementById('novo-veiculo-max-dc').value);
        const range = parseInt(document.getElementById('novo-veiculo-range').value, 10);
        const activeCheck = document.getElementById('novo-veiculo-active');
        const active = activeCheck ? activeCheck.checked : true;

        novoVeiculoMsg.className = 'admin-msg-box';
        novoVeiculoMsg.textContent = idAtual ? 'Atualizando dados...' : 'Salvando no banco de dados...';

        try {
          let res;
          if (idAtual) {
            // Operação de UPDATE (PUT)
            res = await window.EV_API.atualizarVeiculo(idAtual, {
              brand,
              model,
              type,
              battery,
              maxAc,
              maxDc,
              range,
              active
            });
            novoVeiculoMsg.className = 'admin-msg-box sucesso';
            novoVeiculoMsg.textContent = 'Veículo atualizado com sucesso!';
          } else {
            // Operação de CREATE (POST)
            res = await window.EV_API.cadastrarVeiculo({
              brand,
              model,
              type,
              battery,
              maxAc,
              maxDc,
              range,
              active
            });
            novoVeiculoMsg.className = 'admin-msg-box sucesso';
            novoVeiculoMsg.textContent = 'Veículo cadastrado com sucesso!';

            // Se o cadastro originou de uma solicitação de usuário, marca como APROVADA automaticamente
            if (solicitacaoVinculadaAoNovoVeiculo && window.EV_API && window.EV_API.atualizarStatusSolicitacao) {
              try {
                await window.EV_API.atualizarStatusSolicitacao(solicitacaoVinculadaAoNovoVeiculo, 'APROVADA', 'Cadastrado e homologado no catálogo com sucesso!');
                solicitacaoVinculadaAoNovoVeiculo = null;
                if (typeof atualizarContadorSolicitacoesPendentes === 'function') {
                  atualizarContadorSolicitacoesPendentes();
                }
              } catch (e) {
                console.warn('Falha ao atualizar status da solicitação vinculada:', e);
              }
            }
          }

          // Atualiza o catálogo local em tempo real
          if (window.EV_API.listarVeiculos) {
            const listaAtualizada = await window.EV_API.listarVeiculos(true);
            if (listaAtualizada && listaAtualizada.length > 0) {
              VEHICLE_DATA = listaAtualizada;
              initVehicleModal();
            }
          }

          if (res.veiculo && res.veiculo.active !== false) {
            selectVehicle(res.veiculo);
          }

          setTimeout(() => {
            modalNovoVeiculo.classList.remove('active');
            if (vehicleModal) vehicleModal.classList.remove('active');
            formNovoVeiculo.reset();
          }, 1000);

        } catch (err) {
          novoVeiculoMsg.className = 'admin-msg-box erro';
          novoVeiculoMsg.textContent = 'Erro ao processar: ' + (err.message || 'Falha na comunicação');
        }
      });
    }

    // Sincronização inteligente com dados atualizados do catálogo
    function sincronizarVeiculoSalvoComCatalogo(catalogo) {
      if (!Array.isArray(catalogo) || catalogo.length === 0) return;
      const saved = getSavedVehicle();
      if (saved) {
        const matched = catalogo.find(v => isVehicleSame(v, saved));
        if (matched) {
          setSavedVehicle(matched);
          if (currentVehicle && isVehicleSame(currentVehicle, saved)) {
            currentVehicle = matched;
            sliderBattery.value = matched.battery;
            inputBattery.value = formatPt(matched.battery, 2);
            updateChargerPresets(matched);
          }
        }
      }
    }

    // Carregamento inicial de veículos da API
    if (window.EV_API && window.EV_API.listarVeiculos) {
      window.EV_API.listarVeiculos()
        .then(serverData => {
          if (serverData && serverData.length > 0) {
            VEHICLE_DATA = serverData;
            sincronizarVeiculoSalvoComCatalogo(serverData);
            initVehicleModal();
            atualizarDisplayVeiculo();
            recalculate();
            recalculateConsumption();
          }
        })
        .catch(err => {
          console.warn('Usando catálogo inicial padrão:', err);
        });
    } else if (typeof google !== 'undefined' && google.script && google.script.run) {
      google.script.run.withSuccessHandler(function(serverData) {
        if (serverData && serverData.length > 0) {
          VEHICLE_DATA = serverData;
          sincronizarVeiculoSalvoComCatalogo(serverData);
          initVehicleModal();
          atualizarDisplayVeiculo();
          recalculate();
          recalculateConsumption();
        }
      }).obterListaVeiculos();
    }


    // =========================================================================
    // MÓDULO: SUGESTÃO DE VEÍCULOS (USUÁRIO / VISITANTE)
    // =========================================================================
    const modalSugerirVeiculo = document.getElementById('modal-sugerir-veiculo');
    const closeSugerirVeiculoModal = document.getElementById('close-sugerir-veiculo-modal');
    const btnCancelSugerir = document.getElementById('btn-cancel-sugerir');
    const formSugerirVeiculo = document.getElementById('form-sugerir-veiculo');
    const sugerirVeiculoMsg = document.getElementById('sugerir-veiculo-msg');
    const btnOpenSugerir = document.getElementById('btn-open-sugerir');
    const btnModalSugerirVeiculo = document.getElementById('btn-modal-sugerir-veiculo');

    function abrirModalSugerirVeiculo(termoSugerido = '') {
      if (formSugerirVeiculo) formSugerirVeiculo.reset();
      if (sugerirVeiculoMsg) sugerirVeiculoMsg.className = 'admin-msg-box hidden';

      if (termoSugerido && typeof termoSugerido === 'string') {
        const partes = termoSugerido.trim().split(' ');
        const primeiraPalavra = partes[0] || '';
        const marcasConhecidas = [...new Set(VEHICLE_DATA.map(v => v.brand.toLowerCase()))];
        if (marcasConhecidas.includes(primeiraPalavra.toLowerCase())) {
          const campoMarca = document.getElementById('sugerir-marca');
          const campoModelo = document.getElementById('sugerir-modelo');
          if (campoMarca) campoMarca.value = primeiraPalavra.toUpperCase();
          if (campoModelo) campoModelo.value = partes.slice(1).join(' ');
        } else {
          const campoModelo = document.getElementById('sugerir-modelo');
          if (campoModelo) campoModelo.value = termoSugerido.trim();
        }
      }

      if (modalSugerirVeiculo) modalSugerirVeiculo.classList.add('active');
    }

    if (btnOpenSugerir) btnOpenSugerir.addEventListener('click', () => abrirModalSugerirVeiculo(''));
    if (btnModalSugerirVeiculo) btnModalSugerirVeiculo.addEventListener('click', () => abrirModalSugerirVeiculo(currentSearchTerm));
    if (closeSugerirVeiculoModal) closeSugerirVeiculoModal.addEventListener('click', () => modalSugerirVeiculo.classList.remove('active'));
    if (btnCancelSugerir) btnCancelSugerir.addEventListener('click', () => modalSugerirVeiculo.classList.remove('active'));

    if (formSugerirVeiculo) {
      formSugerirVeiculo.addEventListener('submit', async function(e) {
        e.preventDefault();
        const brand = document.getElementById('sugerir-marca').value.trim();
        const model = document.getElementById('sugerir-modelo').value.trim();
        const type = document.getElementById('sugerir-tipo').value;
        const batteryRaw = document.getElementById('sugerir-bateria').value;
        const battery = batteryRaw ? parseFloat(batteryRaw) : null;
        const sourceUrl = document.getElementById('sugerir-url').value.trim();
        const notes = document.getElementById('sugerir-notes').value.trim();
        const userName = document.getElementById('sugerir-nome').value.trim();
        const userEmail = document.getElementById('sugerir-email').value.trim();

        if (!brand || !model) {
          sugerirVeiculoMsg.className = 'admin-msg-box erro';
          sugerirVeiculoMsg.textContent = 'Por favor, preencha a Marca e o Modelo.';
          return;
        }

        sugerirVeiculoMsg.className = 'admin-msg-box';
        sugerirVeiculoMsg.textContent = 'Enviando sua sugestão...';

        try {
          if (window.EV_API && window.EV_API.enviarSolicitacao) {
            await window.EV_API.enviarSolicitacao({
              brand,
              model,
              type: type || null,
              battery: battery || null,
              sourceUrl: sourceUrl || null,
              notes: notes || null,
              userName: userName || null,
              userEmail: userEmail || null
            });

            sugerirVeiculoMsg.className = 'admin-msg-box sucesso';
            sugerirVeiculoMsg.textContent = '🎉 Sugestão enviada com sucesso! Obrigado pela colaboração.';

            if (typeof atualizarContadorSolicitacoesPendentes === 'function') {
              atualizarContadorSolicitacoesPendentes();
            }

            setTimeout(() => {
              modalSugerirVeiculo.classList.remove('active');
              formSugerirVeiculo.reset();
            }, 1800);
          } else {
            throw new Error('API indisponível');
          }
        } catch (err) {
          sugerirVeiculoMsg.className = 'admin-msg-box erro';
          sugerirVeiculoMsg.textContent = 'Falha ao enviar sugestão: ' + (err.message || 'Erro de rede');
        }
      });
    }

    // =========================================================================
    // MÓDULO: PAINEL DE SOLICITAÇÕES (ADMINISTRADOR)
    // =========================================================================
    const modalPainelSolicitacoes = document.getElementById('modal-painel-solicitacoes');
    const closePainelSolicitacoesModal = document.getElementById('close-painel-solicitacoes-modal');
    const listaSolicitacoesAdmin = document.getElementById('lista-solicitacoes-admin');
    const btnOpenSolicitacoes = document.getElementById('btn-open-solicitacoes');
    const btnModalSolicitacoes = document.getElementById('btn-modal-solicitacoes');
    const badgeSolicitacoesCount = document.getElementById('badge-solicitacoes-count');
    const modalSolicitacoesCount = document.getElementById('modal-solicitacoes-count');

    let statusSolicitacaoFiltroAtual = '';

    async function atualizarContadorSolicitacoesPendentes() {
      if (!window.EV_API || !window.EV_API.hasAdminKey()) {
        if (badgeSolicitacoesCount) badgeSolicitacoesCount.classList.add('hidden');
        if (modalSolicitacoesCount) modalSolicitacoesCount.textContent = '0';
        return;
      }

      try {
        const res = await window.EV_API.contarSolicitacoesPendentes();
        const total = res?.pendentes || 0;
        if (badgeSolicitacoesCount) {
          badgeSolicitacoesCount.textContent = total;
          badgeSolicitacoesCount.classList.toggle('hidden', total === 0);
        }
        if (modalSolicitacoesCount) {
          modalSolicitacoesCount.textContent = total;
        }
      } catch (e) {
        console.warn('Erro ao atualizar contador de solicitações:', e);
      }
    }

    async function abrirPainelSolicitacoes() {
      if (window.EV_API && window.EV_API.hasAdminKey()) {
        try {
          await window.EV_API.verificarAdmin();
          if (modalPainelSolicitacoes) modalPainelSolicitacoes.classList.add('active');
          carregarSolicitacoesAdmin(statusSolicitacaoFiltroAtual);
        } catch (e) {
          window.EV_API.clearAdminKey();
          abrirModalAdminLogin(() => abrirPainelSolicitacoes());
        }
      } else {
        abrirModalAdminLogin(() => abrirPainelSolicitacoes());
      }
    }

    if (btnOpenSolicitacoes) btnOpenSolicitacoes.addEventListener('click', abrirPainelSolicitacoes);
    if (btnModalSolicitacoes) btnModalSolicitacoes.addEventListener('click', abrirPainelSolicitacoes);
    if (closePainelSolicitacoesModal) closePainelSolicitacoesModal.addEventListener('click', () => modalPainelSolicitacoes.classList.remove('active'));

    document.querySelectorAll('.solicitacao-tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.solicitacao-tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        statusSolicitacaoFiltroAtual = this.dataset.status || '';
        carregarSolicitacoesAdmin(statusSolicitacaoFiltroAtual);
      });
    });

    function dispararEmailSolicitante(s) {
      if (!s.userEmail) {
        alert('O solicitante não cadastrou endereço de e-mail nesta sugestão.');
        return;
      }

      const nome = s.userName ? s.userName.trim() : 'amigo(a)';
      const veiculo = `${s.brand} ${s.model}`.trim();
      const status = (s.status || 'PENDENTE').toUpperCase();
      const urlApp = window.location.origin;

      let tipoMensagem = status;

      // Se a solicitação ainda estiver PENDENTE, permite ao administrador escolher o tipo de comunicado
      if (status === 'PENDENTE') {
        const escolha = prompt(
          `A solicitação #${s.id} (${veiculo}) está com status PENDENTE.\n\n` +
          `Escolha o tipo de notificação por e-mail a ser gerada:\n` +
          `1 - ⏳ Confirmação de recebimento (Em análise técnica)\n` +
          `2 - ✅ Veículo aprovado e cadastrado no catálogo\n` +
          `3 - ℹ️ Veículo já existente no catálogo\n` +
          `4 - ❌ Sugestão rejeitada / Não homologada\n\n` +
          `Digite o número da opção (1 a 4):`,
          '1'
        );

        if (escolha === null) return; // administrador cancelou

        if (escolha === '2') tipoMensagem = 'APROVADA';
        else if (escolha === '3') tipoMensagem = 'JA_EXISTE';
        else if (escolha === '4') tipoMensagem = 'REJEITADA';
        else tipoMensagem = 'PENDENTE';
      }

      let assunto = '';
      let corpo = '';

      switch (tipoMensagem) {
        case 'APROVADA':
          assunto = `Boas notícias! O veículo que você sugeriu já está disponível no kWhub ⚡`;
          corpo = `Olá, ${nome}!\n\nTemos ótimas notícias! A sua sugestão para inclusão do veículo ${veiculo} foi analisada e ele já se encontra disponível no catálogo oficial do kWhub.\n\nAgora você já pode simular o tempo de carregamento (em tomada comum, wallbox ou recarga rápida DC), custo de energia e consumo de viagem!\n\n🔗 Acesse agora e confira:\n${urlApp}\n\nMuito obrigado por colaborar com a comunidade de mobilidade elétrica!\n\nAtenciosamente,\nEquipe kWhub\n${urlApp}`;
          break;

        case 'REJEITADA':
          assunto = `Atualização sobre sua sugestão de veículo (${veiculo}) - kWhub`;
          const motivoTexto = s.adminNotes ? `\nMotivo informado: ${s.adminNotes}\n` : '';
          corpo = `Olá, ${nome}!\n\nAgradecemos pelo envio da sugestão do modelo ${veiculo}.\n\nNo momento, não conseguimos homologar este modelo em nosso catálogo pelo seguinte motivo:${motivoTexto || '\nDados técnicos de bateria ainda não homologados oficialmente pelo Inmetro / PBEV no Brasil.'}\n\nAssim que os dados oficiais forem publicados pelas montadoras, realizaremos a inclusão.\n\nAtenciosamente,\nEquipe kWhub\n${urlApp}`;
          break;

        case 'JA_EXISTE':
          assunto = `Sobre a sua sugestão do ${veiculo} - kWhub`;
          corpo = `Olá, ${nome}!\n\nObrigado por entrar em contato e sugerir o veículo ${veiculo}.\n\nIdentificamos que este modelo (ou versão correspondente) já se encontra disponível no catálogo do kWhub!\n\nPara encontrá-lo, basta digitar o nome no campo de busca ou selecionar a montadora ${s.brand} no filtro.\n\n🔗 Acesse e faça sua simulação:\n${urlApp}\n\nCaso note qualquer divergência nas especificações técnicas cadastradas, fique à vontade para nos responder por este e-mail.\n\nAtenciosamente,\nEquipe kWhub\n${urlApp}`;
          break;

        case 'PENDENTE':
        default:
          assunto = `Recebemos sua sugestão de veículo (${veiculo}) - kWhub ⏳`;
          corpo = `Olá, ${nome}!\n\nConfirmamos o recebimento da sua sugestão para inclusão do veículo ${veiculo} no kWhub.\n\nNossa equipe técnica já está analisando as especificações oficiais de bateria e potência de recarga (AC/DC) para homologar o modelo no catálogo.\n\nAssim que o veículo for incluído, enviaremos uma nova notificação por aqui.\n\nObrigado pela sua colaboração!\n\nAtenciosamente,\nEquipe kWhub\n${urlApp}`;
          break;
      }

      const mailtoUrl = `mailto:${encodeURIComponent(s.userEmail)}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
      window.open(mailtoUrl, '_blank');
    }

    async function carregarSolicitacoesAdmin(statusFiltro = '') {
      if (!listaSolicitacoesAdmin) return;
      listaSolicitacoesAdmin.innerHTML = '<div style="text-align:center; padding: 24px; color: var(--text-muted);">Carregando solicitações...</div>';

      try {
        const solicitacoes = await window.EV_API.listarSolicitacoes(statusFiltro);
        if (!solicitacoes || solicitacoes.length === 0) {
          listaSolicitacoesAdmin.innerHTML = '<div style="text-align:center; padding: 30px; color: var(--text-muted); font-size: 13px;">Nenhuma solicitação encontrada para este filtro.</div>';
          return;
        }

        listaSolicitacoesAdmin.innerHTML = '';
        solicitacoes.forEach(s => {
          const card = document.createElement('div');
          card.className = 'solicitacao-card';

          const status = (s.status || 'PENDENTE').toUpperCase();
          let statusClass = 'status-pendente';
          let statusLabel = '⏳ Pendente';
          if (status === 'APROVADA') {
            statusClass = 'status-aprovada';
            statusLabel = '✅ Aprovada';
          } else if (status === 'REJEITADA') {
            statusClass = 'status-rejeitada';
            statusLabel = '❌ Rejeitada';
          }

          const dataFormatada = s.createdAt ? new Date(s.createdAt).toLocaleString('pt-BR') : '';

          let detailsHtml = `
            <div class="solicitacao-detail-item">
              <span class="label">Propulsão</span>
              <span class="val">${s.type ? (s.type === 'BEV' ? '⚡ 100% Elétrico (BEV)' : '🔋 Plug-in (PHEV)') : 'Não informada'}</span>
            </div>
            <div class="solicitacao-detail-item">
              <span class="label">Bateria</span>
              <span class="val">${s.battery ? s.battery + ' kWh' : 'Não informada'}</span>
            </div>
            <div class="solicitacao-detail-item">
              <span class="label">Solicitante</span>
              <span class="val">${escapeHtml(s.userName || 'Anônimo')} ${s.userEmail ? `(${escapeHtml(s.userEmail)})` : ''}</span>
            </div>
            <div class="solicitacao-detail-item">
              <span class="label">Data de Envio</span>
              <span class="val">${dataFormatada}</span>
            </div>
          `;

          if (s.sourceUrl) {
            detailsHtml += `
              <div class="solicitacao-detail-item" style="grid-column: 1 / -1;">
                <span class="label">Link / Ficha Técnica</span>
                <span class="val"><a href="${escapeHtml(s.sourceUrl)}" target="_blank" rel="noopener noreferrer">🔗 ${escapeHtml(s.sourceUrl)}</a></span>
              </div>
            `;
          }

          let notesHtml = '';
          if (s.notes) {
            notesHtml = `<div class="solicitacao-notes-box"><strong>Obs do Usuário:</strong> ${escapeHtml(s.notes)}</div>`;
          }

          let actionsHtml = '';
          actionsHtml += `
            <button type="button" class="btn-solic-action btn-cadastrar-veiculo" title="Cadastrar este veículo homologando no catálogo">
              ⚡ Cadastrar Veículo
            </button>
          `;

          if (s.userEmail) {
            actionsHtml += `
              <button type="button" class="btn-solic-action btn-email-solic" title="Enviar e-mail para ${escapeHtml(s.userEmail)}">
                ✉️ Notificar Solicitante
              </button>
            `;
          }

          if (status !== 'APROVADA') {
            actionsHtml += `
              <button type="button" class="btn-solic-action btn-aprovar-solic" title="Marcar como aprovada">
                ✅ Aprovar
              </button>
            `;
          }

          if (status !== 'REJEITADA') {
            actionsHtml += `
              <button type="button" class="btn-solic-action btn-rejeitar-solic" title="Marcar como rejeitada">
                ❌ Rejeitar
              </button>
            `;
          }

          actionsHtml += `
            <button type="button" class="btn-solic-action btn-excluir-solic" style="color: #ef4444;" title="Excluir esta solicitação">
              🗑️ Excluir
            </button>
          `;

          card.innerHTML = `
            <div class="solicitacao-card-header">
              <div class="solicitacao-title-wrap">
                <h4>${escapeHtml(s.brand)} - ${escapeHtml(s.model)}</h4>
                <div class="solicitacao-meta">ID #${s.id}</div>
              </div>
              <span class="solicitacao-status-tag ${statusClass}">${statusLabel}</span>
            </div>
            <div class="solicitacao-details-box">
              ${detailsHtml}
            </div>
            ${notesHtml}
            <div class="solicitacao-actions-row">
              ${actionsHtml}
            </div>
          `;

          // Listener Enviar E-mail ao Solicitante
          const btnEmail = card.querySelector('.btn-email-solic');
          if (btnEmail) {
            btnEmail.addEventListener('click', () => {
              if (typeof dispararEmailSolicitante === 'function') {
                dispararEmailSolicitante(s);
              }
            });
          }

          const btnCadastrar = card.querySelector('.btn-cadastrar-veiculo');
          if (btnCadastrar) {
            btnCadastrar.addEventListener('click', () => {
              if (modalPainelSolicitacoes) modalPainelSolicitacoes.classList.remove('active');
              abrirModalNovoVeiculo({
                brand: s.brand,
                model: s.model,
                type: s.type || 'BEV',
                battery: s.battery || ''
              }, s.id);
            });
          }

          const btnAprovar = card.querySelector('.btn-aprovar-solic');
          if (btnAprovar) {
            btnAprovar.addEventListener('click', async () => {
              try {
                await window.EV_API.atualizarStatusSolicitacao(s.id, 'APROVADA');
                carregarSolicitacoesAdmin(statusSolicitacaoFiltroAtual);
                atualizarContadorSolicitacoesPendentes();
              } catch (e) {
                alert('Erro ao aprovar solicitação: ' + e.message);
              }
            });
          }

          const btnRejeitar = card.querySelector('.btn-rejeitar-solic');
          if (btnRejeitar) {
            btnRejeitar.addEventListener('click', async () => {
              const motivo = prompt('Motivo da rejeição (opcional):', 'Veículo já existente ou dados incompatíveis');
              if (motivo === null) return;
              try {
                await window.EV_API.atualizarStatusSolicitacao(s.id, 'REJEITADA', motivo);
                carregarSolicitacoesAdmin(statusSolicitacaoFiltroAtual);
                atualizarContadorSolicitacoesPendentes();
              } catch (e) {
                alert('Erro ao rejeitar solicitação: ' + e.message);
              }
            });
          }

          const btnExcluir = card.querySelector('.btn-excluir-solic');
          if (btnExcluir) {
            btnExcluir.addEventListener('click', async () => {
              if (!confirm(`Deseja remover permanentemente a solicitação #${s.id} (${s.brand} ${s.model})?`)) return;
              try {
                await window.EV_API.excluirSolicitacao(s.id);
                carregarSolicitacoesAdmin(statusSolicitacaoFiltroAtual);
                atualizarContadorSolicitacoesPendentes();
              } catch (e) {
                alert('Erro ao excluir solicitação: ' + e.message);
              }
            });
          }

          listaSolicitacoesAdmin.appendChild(card);
        });

      } catch (err) {
        listaSolicitacoesAdmin.innerHTML = `<div style="text-align:center; padding: 24px; color: #ef4444;">Erro ao carregar solicitações: ${err.message || 'Falha de conexão'}</div>`;
      }
    }

    // =========================================================================
    // MÓDULO: SINCRONIZAÇÃO DE CATÁLOGO COM ELETRICOS.APP (ADMINISTRADOR)
    // =========================================================================
    const modalSyncCatalogo = document.getElementById('modal-sync-catalogo');
    const closeSyncModal = document.getElementById('close-sync-modal');
    const btnOpenSync = document.getElementById('btn-open-sync');
    const btnModalSyncCatalogo = document.getElementById('btn-modal-sync-catalogo');

    const syncViewLoading = document.getElementById('sync-view-loading');
    const syncViewUptodate = document.getElementById('sync-view-uptodate');
    const syncViewNovidades = document.getElementById('sync-view-novidades');
    const syncViewProgress = document.getElementById('sync-view-progress');

    const syncStatRemoto = document.getElementById('sync-stat-remoto');
    const syncStatLocais = document.getElementById('sync-stat-locais');
    const btnSyncFecharUptodate = document.getElementById('btn-sync-fechar-uptodate');
    const btnSyncReverificar = document.getElementById('btn-sync-reverificar');

    const syncBadgeNovosTotal = document.getElementById('sync-badge-novos-total');
    const syncCountSelecionados = document.getElementById('sync-count-selecionados');
    const syncNovosList = document.getElementById('sync-novos-list');
    const btnSyncSelectAll = document.getElementById('btn-sync-select-all');
    const btnSyncDeselectAll = document.getElementById('btn-sync-deselect-all');
    const btnSyncCancelar = document.getElementById('btn-sync-cancelar');
    const btnSyncConfirmar = document.getElementById('btn-sync-confirmar');

    const syncProgressTitle = document.getElementById('sync-progress-title');
    const syncProgressSubtitle = document.getElementById('sync-progress-subtitle');
    const syncProgressPercent = document.getElementById('sync-progress-percent');
    const syncProgressBar = document.getElementById('sync-progress-bar');
    const syncTerminalLog = document.getElementById('sync-terminal-log');
    const syncProgressFooterActions = document.getElementById('sync-progress-footer-actions');
    const btnSyncFinalizarOk = document.getElementById('btn-sync-finalizar-ok');

    let novosModelosEncontrados = [];

    function alternarVisualizacaoSync(viewAtiva) {
      [syncViewLoading, syncViewUptodate, syncViewNovidades, syncViewProgress].forEach(v => {
        if (v) {
          v.classList.add('hidden');
          v.style.setProperty('display', 'none', 'important');
        }
      });
      if (viewAtiva) {
        viewAtiva.classList.remove('hidden');
        viewAtiva.style.setProperty('display', 'flex', 'important');
      }
    }

    async function abrirModalSync() {
      if (window.EV_API && window.EV_API.hasAdminKey()) {
        try {
          await window.EV_API.verificarAdmin();
          if (modalSyncCatalogo) modalSyncCatalogo.classList.add('active');
          iniciarVerificacaoCatalogo();
        } catch (e) {
          window.EV_API.clearAdminKey();
          abrirModalAdminLogin(() => abrirModalSync());
        }
      } else {
        abrirModalAdminLogin(() => abrirModalSync());
      }
    }

    async function iniciarVerificacaoCatalogo() {
      alternarVisualizacaoSync(syncViewLoading);
      try {
        const res = await window.EV_API.verificarSync();
        if (!res.sucesso) throw new Error(res.erro || 'Falha ao verificar');

        if (res.totalNovos === 0) {
          if (syncStatRemoto) syncStatRemoto.textContent = res.totalRemoto;
          if (syncStatLocais) syncStatLocais.textContent = res.totalExistentes;
          alternarVisualizacaoSync(syncViewUptodate);
        } else {
          novosModelosEncontrados = res.novos || [];
          renderizarListaNovidades(novosModelosEncontrados);
          alternarVisualizacaoSync(syncViewNovidades);
        }
      } catch (err) {
        alert('Erro ao conectar com eletricos.app: ' + err.message);
        if (modalSyncCatalogo) modalSyncCatalogo.classList.remove('active');
      }
    }

    function renderizarListaNovidades(lista) {
      if (!syncNovosList) return;
      syncNovosList.innerHTML = '';
      if (syncBadgeNovosTotal) syncBadgeNovosTotal.textContent = lista.length;

      lista.forEach((v, index) => {
        const card = document.createElement('div');
        card.className = 'sync-veiculo-card';
        card.dataset.index = index;

        const isBev = v.type === 'BEV';
        const badgeClass = isBev ? 'bev' : 'phev';
        const badgeLabel = isBev ? '100% Elétrico (BEV)' : 'Plug-in (PHEV)';

        card.innerHTML = `
          <div class="sync-check-wrap">
            <input type="checkbox" class="sync-item-check" data-index="${index}" checked>
          </div>
          <div class="sync-veiculo-info">
            <div class="sync-veiculo-top">
              <span class="sync-veiculo-title">${escapeHtml(v.brand)} ${escapeHtml(v.model)} ${v.year ? `(${v.year})` : ''}</span>
              <span class="sync-veiculo-badge ${badgeClass}">${badgeLabel}</span>
            </div>
            <div class="sync-specs-chips">
              <span class="sync-chip">🔋 Bateria: <strong>${v.battery} kWh</strong></span>
              <span class="sync-chip">🔌 AC Máx: <strong>${v.maxAc} kW</strong></span>
              ${v.maxDc > 0 ? `<span class="sync-chip">⚡ DC Rápida: <strong>${v.maxDc} kW</strong></span>` : ''}
              <span class="sync-chip">🛣️ Autonomia: <strong>${v.range} km</strong></span>
              ${v.price ? `<span class="sync-chip">🏷️ ${escapeHtml(v.price)}</span>` : ''}
            </div>
          </div>
        `;

        const chk = card.querySelector('.sync-item-check');
        card.addEventListener('click', (e) => {
          if (e.target !== chk) {
            chk.checked = !chk.checked;
          }
          card.classList.toggle('desmarcado', !chk.checked);
          atualizarContadorSelecionados();
        });

        syncNovosList.appendChild(card);
      });

      atualizarContadorSelecionados();
    }

    function atualizarContadorSelecionados() {
      const marcados = document.querySelectorAll('.sync-item-check:checked');
      if (syncCountSelecionados) syncCountSelecionados.textContent = marcados.length;
      if (btnSyncConfirmar) btnSyncConfirmar.disabled = marcados.length === 0;
    }

    if (btnSyncSelectAll) {
      btnSyncSelectAll.addEventListener('click', () => {
        document.querySelectorAll('.sync-item-check').forEach(c => {
          c.checked = true;
          c.closest('.sync-veiculo-card')?.classList.remove('desmarcado');
        });
        atualizarContadorSelecionados();
      });
    }

    if (btnSyncDeselectAll) {
      btnSyncDeselectAll.addEventListener('click', () => {
        document.querySelectorAll('.sync-item-check').forEach(c => {
          c.checked = false;
          c.closest('.sync-veiculo-card')?.classList.add('desmarcado');
        });
        atualizarContadorSelecionados();
      });
    }

    if (btnSyncCancelar) {
      btnSyncCancelar.addEventListener('click', () => {
        if (modalSyncCatalogo) modalSyncCatalogo.classList.remove('active');
      });
    }

    if (btnSyncFecharUptodate) {
      btnSyncFecharUptodate.addEventListener('click', () => {
        if (modalSyncCatalogo) modalSyncCatalogo.classList.remove('active');
      });
    }

    if (btnSyncReverificar) {
      btnSyncReverificar.addEventListener('click', iniciarVerificacaoCatalogo);
    }

    function adicionarLinhaLog(texto, tipo = 'info') {
      if (!syncTerminalLog) return;
      const linha = document.createElement('div');
      linha.className = `sync-log-line ${tipo}`;
      linha.innerHTML = `<span>›</span> <span>${escapeHtml(texto)}</span>`;
      syncTerminalLog.appendChild(linha);
      syncTerminalLog.scrollTop = syncTerminalLog.scrollHeight;
    }

    if (btnSyncConfirmar) {
      btnSyncConfirmar.addEventListener('click', async () => {
        const checkboxes = document.querySelectorAll('.sync-item-check:checked');
        const indices = Array.from(checkboxes).map(c => parseInt(c.dataset.index, 10));
        const selecionados = indices.map(idx => novosModelosEncontrados[idx]).filter(Boolean);

        if (selecionados.length === 0) {
          alert('Selecione pelo menos um veículo para importar.');
          return;
        }

        alternarVisualizacaoSync(syncViewProgress);
        if (syncProgressBar) syncProgressBar.style.width = '0%';
        if (syncProgressPercent) syncProgressPercent.textContent = '0%';
        if (syncProgressTitle) syncProgressTitle.textContent = `Importando ${selecionados.length} veículos...`;
        if (syncProgressSubtitle) syncProgressSubtitle.textContent = 'Conectando ao banco de dados PostgreSQL...';
        if (syncTerminalLog) syncTerminalLog.innerHTML = '';
        if (syncProgressFooterActions) syncProgressFooterActions.classList.add('hidden');

        adicionarLinhaLog(`Iniciando importação em lote de ${selecionados.length} modelos...`, 'info');

        await window.EV_API.executarSyncStream(
          selecionados,
          (progresso) => {
            if (syncProgressBar) syncProgressBar.style.width = `${progresso.percent}%`;
            if (syncProgressPercent) syncProgressPercent.textContent = `${progresso.percent}%`;
            if (syncProgressTitle) syncProgressTitle.textContent = `Importando: ${progresso.veiculo}`;
            if (syncProgressSubtitle) syncProgressSubtitle.textContent = `Item ${progresso.index} de ${progresso.total} (${progresso.percent}%)`;
            adicionarLinhaLog(progresso.mensagem, progresso.status === 'sucesso' ? 'sucesso' : 'erro');
          },
          async (fim) => {
            if (syncProgressBar) syncProgressBar.style.width = '100%';
            if (syncProgressPercent) syncProgressPercent.textContent = '100%';
            if (syncProgressTitle) syncProgressTitle.textContent = '🎉 Sincronização Concluída!';
            if (syncProgressSubtitle) syncProgressSubtitle.textContent = fim.mensagem;
            adicionarLinhaLog(fim.mensagem, 'sucesso');
            if (syncProgressFooterActions) syncProgressFooterActions.classList.remove('hidden');

            // Atualiza catálogo na aplicação
            try {
              const dadosAtualizados = await window.EV_API.listarVeiculos(true);
              if (Array.isArray(dadosAtualizados) && dadosAtualizados.length > 0) {
                VEHICLE_DATA = dadosAtualizados;
                renderVehicleCards(getFilteredVehicles());
                renderBrandPills();
                atualizarContadoresModal();
              }
            } catch (e) {
              console.warn('Erro ao atualizar catálogo em memória:', e);
            }
          },
          (erro) => {
            if (syncProgressTitle) syncProgressTitle.textContent = '❌ Falha na importação';
            if (syncProgressSubtitle) syncProgressSubtitle.textContent = erro.mensagem;
            adicionarLinhaLog(`Erro: ${erro.mensagem}`, 'erro');
            if (syncProgressFooterActions) syncProgressFooterActions.classList.remove('hidden');
          }
        );
      });
    }

    if (btnSyncFinalizarOk) {
      btnSyncFinalizarOk.addEventListener('click', () => {
        if (modalSyncCatalogo) modalSyncCatalogo.classList.remove('active');
      });
    }

    if (btnOpenSync) btnOpenSync.addEventListener('click', abrirModalSync);
    if (btnModalSyncCatalogo) btnModalSyncCatalogo.addEventListener('click', abrirModalSync);
    if (closeSyncModal) closeSyncModal.addEventListener('click', () => modalSyncCatalogo.classList.remove('active'));