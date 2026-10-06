/**
 * Base oficial de veículos com marcas e especificações técnicas (BEV e PHEV)
 * Homologação padronizada conforme ciclo Inmetro (PBEV) brasileiro.
 */
function obterListaVeiculos() {
  return [
    // BMW
    { id: "bmw_ix_50", type: "BEV", brand: "BMW", model: "iX xDrive50", battery: 111.5, maxAc: 11.0, maxDc: 195.0, range: 528 },
    { id: "bmw_ix3_50_xdrive", type: "BEV", brand: "BMW", model: "iX3 50 xDrive", battery: 108.7, maxAc: 11.0, maxDc: 150.0, range: 565 },

    // BYD
    { id: "byd_atto_2_dm_i_flex_gl_phev", type: "PHEV", brand: "BYD", model: "Atto 2 DM-i Flex GL", battery: 7.85, maxAc: 3.3, maxDc: 0.0, range: 38 },
    { id: "byd_atto_2_dm_i_flex_gs_phev", type: "PHEV", brand: "BYD", model: "Atto 2 DM-i Flex GS", battery: 18.03, maxAc: 6.6, maxDc: 0.0, range: 75 },
    { id: "byd_atto_8", type: "BEV", brand: "BYD", model: "ATTO 8", battery: 35.6, maxAc: 6.6, maxDc: 50.0, range: 185 },
    { id: "byd_atto_8_phev", type: "PHEV", brand: "BYD", model: "ATTO 8 (PHEV)", battery: 35.6, maxAc: 6.6, maxDc: 40.0, range: 110 },
    { id: "byd_dolphin_gs", type: "BEV", brand: "BYD", model: "Dolphin GS", battery: 44.9, maxAc: 6.6, maxDc: 60.0, range: 291 },
    { id: "byd_dolphin_mini", type: "BEV", brand: "BYD", model: "Dolphin Mini", battery: 38.0, maxAc: 6.6, maxDc: 40.0, range: 280 },
    { id: "byd_dolphin_plus_ev", type: "BEV", brand: "BYD", model: "Dolphin Plus EV", battery: 60.48, maxAc: 7.0, maxDc: 80.0, range: 330 },
    { id: "byd_dolphin_se", type: "BEV", brand: "BYD", model: "Dolphin SE", battery: 45.12, maxAc: 6.6, maxDc: 60.0, range: 295 },
    { id: "byd_han_ev", type: "BEV", brand: "BYD", model: "Han EV", battery: 85.4, maxAc: 6.6, maxDc: 120.0, range: 349 },
    { id: "byd_king_gl_phev", type: "PHEV", brand: "BYD", model: "King GL (PHEV)", battery: 8.3, maxAc: 3.3, maxDc: 0.0, range: 36 },
    { id: "byd_king_gs_phev", type: "PHEV", brand: "BYD", model: "King GS (PHEV)", battery: 18.3, maxAc: 6.6, maxDc: 0.0, range: 80 },
    { id: "byd_seal_ev", type: "BEV", brand: "BYD", model: "Seal EV", battery: 82.5, maxAc: 7.4, maxDc: 150.0, range: 372 },
    { id: "byd_sealion_7", type: "BEV", brand: "BYD", model: "Sealion 7", battery: 82.56, maxAc: 11.0, maxDc: 150.0, range: 429 },
    { id: "byd_shark_gs_phev", type: "PHEV", brand: "BYD", model: "Shark GS (PHEV)", battery: 29.6, maxAc: 6.6, maxDc: 40.0, range: 100 },
    { id: "byd_song_plus_dm_i_phev", type: "PHEV", brand: "BYD", model: "Song Plus DM-i", battery: 18.3, maxAc: 6.6, maxDc: 18.0, range: 68 },
    { id: "byd_song_plus_premium_dm_i_phev", type: "PHEV", brand: "BYD", model: "Song Plus Premium DM-i", battery: 26.6, maxAc: 6.6, maxDc: 18.0, range: 105 },
    { id: "byd_song_pro_gl_phev", type: "PHEV", brand: "BYD", model: "Song Pro GL (PHEV)", battery: 13.1, maxAc: 3.3, maxDc: 0.0, range: 49 },
    { id: "byd_song_pro_gs_phev", type: "PHEV", brand: "BYD", model: "Song Pro GS (PHEV)", battery: 18.3, maxAc: 6.6, maxDc: 0.0, range: 68 },
    { id: "byd_tan_ev", type: "BEV", brand: "BYD", model: "Tan EV", battery: 108.8, maxAc: 11.0, maxDc: 170.0, range: 437 },
    { id: "byd_yuan_plus", type: "BEV", brand: "BYD", model: "Yuan Plus", battery: 60.48, maxAc: 7.0, maxDc: 80.0, range: 294 },
    { id: "byd_yuan_pro_ev", type: "BEV", brand: "BYD", model: "Yuan Pro EV", battery: 45.1, maxAc: 6.6, maxDc: 65.0, range: 250 },

    // Caoa Chery
    { id: "caoa_chery_icar", type: "BEV", brand: "Caoa Chery", model: "iCar", battery: 30.8, maxAc: 6.6, maxDc: 0.0, range: 160 },
    { id: "caoa_chery_tiggo_5x_pro_phev", type: "PHEV", brand: "Caoa Chery", model: "Tiggo 5X Pro (PHEV)", battery: 19.3, maxAc: 6.6, maxDc: 0.0, range: 54 },
    { id: "caoa_chery_tiggo_7_pro_phev", type: "PHEV", brand: "Caoa Chery", model: "Tiggo 7 Pro PHEV", battery: 18.4, maxAc: 6.6, maxDc: 50.0, range: 54 },
    { id: "caoa_chery_tiggo_8_pro_phev", type: "PHEV", brand: "Caoa Chery", model: "Tiggo 8 Pro PHEV", battery: 18.4, maxAc: 6.6, maxDc: 50.0, range: 54 },

    // Chevrolet
    { id: "chevrolet_blazer_ev_rs", type: "BEV", brand: "Chevrolet", model: "Blazer EV RS", battery: 102.0, maxAc: 22.0, maxDc: 190.0, range: 530 },
    { id: "chevrolet_bolt_euv", type: "BEV", brand: "Chevrolet", model: "Bolt EUV", battery: 66.0, maxAc: 11.0, maxDc: 55.0, range: 343 },
    { id: "chevrolet_captiva_ev_premier_60_kwh", type: "BEV", brand: "Chevrolet", model: "Captiva EV Premier 60 kWh", battery: 60.0, maxAc: 6.6, maxDc: 80.0, range: 312 },

    // Fiat
    { id: "fiat_500e", type: "BEV", brand: "Fiat", model: "500e", battery: 42.0, maxAc: 11.0, maxDc: 85.0, range: 218 },

    // GAC
    { id: "gac_aion_es_plus", type: "BEV", brand: "GAC", model: "Aion ES Plus", battery: 55.2, maxAc: 6.6, maxDc: 60.0, range: 314 },
    { id: "gac_aion_ut_elite", type: "BEV", brand: "GAC", model: "Aion UT Elite", battery: 60.0, maxAc: 6.6, maxDc: 87.0, range: 310 },
    { id: "gac_aion_ut_premium", type: "BEV", brand: "GAC", model: "Aion UT Premium", battery: 44.12, maxAc: 6.6, maxDc: 64.0, range: 253 },
    { id: "gac_aion_v_elite", type: "BEV", brand: "GAC", model: "Aion V Elite", battery: 75.3, maxAc: 11.0, maxDc: 180.0, range: 389 },

    // Geely
    { id: "geely_ex2", type: "BEV", brand: "Geely", model: "EX2", battery: 30.0, maxAc: 6.6, maxDc: 30.0, range: 156 },
    { id: "geely_ex5_em_i_max_184_kwh_phev", type: "PHEV", brand: "Geely", model: "EX5 EM-i MAX 18.4 kWh (PHEV)", battery: 18.4, maxAc: 6.6, maxDc: 30.0, range: 85 },
    { id: "geely_ex5_em_i_pro_184_kwh_phev", type: "PHEV", brand: "Geely", model: "EX5 EM-i PRO 18.4 kWh (PHEV)", battery: 18.4, maxAc: 6.6, maxDc: 30.0, range: 85 },
    { id: "geely_ex5_em_i_ultra_298_kwh_phev", type: "PHEV", brand: "Geely", model: "EX5 EM-i ULTRA 29.8 kWh (PHEV)", battery: 29.8, maxAc: 6.6, maxDc: 30.0, range: 130 },
    { id: "geely_ex5_max_6022_kwh", type: "BEV", brand: "Geely", model: "EX5 MAX 60.22 kWh", battery: 60.22, maxAc: 11.0, maxDc: 100.0, range: 430 },
    { id: "geely_ex5_pro_6022_kwh", type: "BEV", brand: "Geely", model: "EX5 PRO 60.22 kWh", battery: 60.22, maxAc: 11.0, maxDc: 100.0, range: 430 },

    // GWM
    { id: "gwm_h6_gt_phev", type: "PHEV", brand: "GWM", model: "H6 GT PHEV", battery: 34.0, maxAc: 6.6, maxDc: 33.0, range: 113 },
    { id: "gwm_h6_phev19_phev", type: "PHEV", brand: "GWM", model: "H6 PHEV19", battery: 19.0, maxAc: 6.6, maxDc: 33.0, range: 74 },
    { id: "gwm_h6_phev35_phev", type: "PHEV", brand: "GWM", model: "H6 PHEV35", battery: 34.0, maxAc: 6.6, maxDc: 33.0, range: 113 },
    { id: "gwm_ora_03_bev58", type: "BEV", brand: "GWM", model: "Ora 03 BEV58", battery: 58.0, maxAc: 11.0, maxDc: 67.0, range: 315 },
    { id: "gwm_ora_5", type: "BEV", brand: "GWM", model: "Ora 5", battery: 58.3, maxAc: 11.0, maxDc: 120.0, range: 349 },
    { id: "gwm_tank_300_phev", type: "PHEV", brand: "GWM", model: "Tank 300 (PHEV)", battery: 37.1, maxAc: 6.6, maxDc: 50.0, range: 110 },
    { id: "gwm_wey_07_phev", type: "PHEV", brand: "GWM", model: "Wey 07 (PHEV)", battery: 42.5, maxAc: 6.6, maxDc: 50.0, range: 130 },

    // Hyundai
    { id: "hyundai_ioniq_5", type: "BEV", brand: "Hyundai", model: "IONIQ 5", battery: 84.0, maxAc: 11.0, maxDc: 230.0, range: 437 },

    // JAC
    { id: "jac_e_js1", type: "BEV", brand: "JAC", model: "E-JS1", battery: 30.2, maxAc: 6.6, maxDc: 30.0, range: 157 },
    { id: "jac_e_js4", type: "BEV", brand: "JAC", model: "E-JS4", battery: 55.1, maxAc: 6.6, maxDc: 50.0, range: 287 },

    // Jaecoo
    { id: "jaecoo_7_elite_2026", type: "PHEV", brand: "Jaecoo", model: "7 Elite 2026", battery: 18.3, maxAc: 6.6, maxDc: 40.0, range: 79 },
    { id: "jaecoo_7_shs_luxury_2026", type: "PHEV", brand: "Jaecoo", model: "7 SHS Luxury 2026", battery: 18.3, maxAc: 6.6, maxDc: 40.0, range: 79 },
    { id: "jaecoo_7_shs_prestige_2026", type: "PHEV", brand: "Jaecoo", model: "7 SHS Prestige 2026", battery: 18.3, maxAc: 6.6, maxDc: 40.0, range: 79 },

    // Jeep
    { id: "jeep_compass_4xe_phev", type: "PHEV", brand: "Jeep", model: "Compass 4xe", battery: 11.4, maxAc: 7.4, maxDc: 0.0, range: 44 },

    // Jetour
    { id: "jetour_t1_phev", type: "PHEV", brand: "Jetour", model: "T1 PHEV", battery: 26.7, maxAc: 6.6, maxDc: 30.0, range: 90 },
    { id: "jetour_t2_phev", type: "PHEV", brand: "Jetour", model: "T2 PHEV", battery: 26.7, maxAc: 6.6, maxDc: 30.0, range: 90 },

    // Kia
    { id: "kia_ev5_land", type: "BEV", brand: "Kia", model: "EV5 Land", battery: 88.16, maxAc: 11.0, maxDc: 102.0, range: 402 },
    { id: "kia_ev9_gtl", type: "BEV", brand: "Kia", model: "EV9 GTL", battery: 99.0, maxAc: 11.0, maxDc: 210.0, range: 440 },

    // Leapmotor
    { id: "leapmotor_b10_bev", type: "BEV", brand: "Leapmotor", model: "B10 BEV", battery: 56.2, maxAc: 11.0, maxDc: 70.0, range: 292 },
    { id: "leapmotor_c10_eletrico_bev_699_kwh", type: "BEV", brand: "Leapmotor", model: "C10 Elétrico - BEV 69.9 kWh", battery: 69.9, maxAc: 11.0, maxDc: 84.0, range: 362 },
    { id: "leapmotor_c10_ultra_hibrido_reev_15_plug_in_phev", type: "PHEV", brand: "Leapmotor", model: "C10 Ultra Híbrido - REEV 1.5 Plug-in", battery: 28.4, maxAc: 6.6, maxDc: 30.0, range: 140 },

    // Lexus
    { id: "lexus_rz_500e", type: "BEV", brand: "Lexus", model: "RZ 500e", battery: 77.0, maxAc: 11.0, maxDc: 150.0, range: 380 },

    // MG
    { id: "mg_mg4_luxury", type: "BEV", brand: "MG", model: "MG4 Luxury", battery: 64.0, maxAc: 11.0, maxDc: 135.0, range: 333 },
    { id: "mg_mg4_urban_comfort", type: "BEV", brand: "MG", model: "MG4 Urban Comfort", battery: 43.0, maxAc: 6.6, maxDc: 88.0, range: 224 },
    { id: "mg_mg4_urban_luxury_43_kwh", type: "BEV", brand: "MG", model: "MG4 Urban Luxury 43 kWh", battery: 43.0, maxAc: 6.6, maxDc: 88.0, range: 224 },
    { id: "mg_mg4_urban_luxury_54_kwh", type: "BEV", brand: "MG", model: "MG4 Urban Luxury 54 kWh", battery: 54.0, maxAc: 6.6, maxDc: 88.0, range: 281 },

    // Mitsubishi
    { id: "mitsubishi_outlander_phev", type: "PHEV", brand: "Mitsubishi", model: "Outlander PHEV", battery: 20.0, maxAc: 3.7, maxDc: 22.0, range: 67 },

    // Omoda
    { id: "omoda_7_phev", type: "PHEV", brand: "Omoda", model: "Omoda 7 PHEV", battery: 18.4, maxAc: 6.6, maxDc: 50.0, range: 75 },
    { id: "omoda_e5_bev", type: "BEV", brand: "Omoda", model: "Omoda E5", battery: 61.1, maxAc: 11.0, maxDc: 80.0, range: 318 },

    // Peugeot
    { id: "peugeot_e_2008", type: "BEV", brand: "Peugeot", model: "e-2008", battery: 54.0, maxAc: 11.0, maxDc: 100.0, range: 261 },

    // Renault
    { id: "renault_kwid_e_tech", type: "BEV", brand: "Renault", model: "Kwid E-Tech", battery: 26.8, maxAc: 6.6, maxDc: 30.0, range: 139 },
    { id: "renault_megane_e_tech", type: "BEV", brand: "Renault", model: "Megane E-Tech", battery: 60.0, maxAc: 22.0, maxDc: 130.0, range: 312 },

    // Suzuki
    { id: "suzuki_e_vitara", type: "BEV", brand: "Suzuki", model: "e-Vitara", battery: 61.0, maxAc: 11.0, maxDc: 150.0, range: 317 },

    // Toyota
    { id: "toyota_bz4x_awd", type: "BEV", brand: "Toyota", model: "bZ4X AWD", battery: 73.1, maxAc: 11.0, maxDc: 150.0, range: 380 },

    // Volvo
    { id: "volvo_ex30_cross_country", type: "BEV", brand: "Volvo", model: "EX30 Cross Country", battery: 69.0, maxAc: 7.4, maxDc: 153.0, range: 338 },
    { id: "volvo_ex30_plus", type: "BEV", brand: "Volvo", model: "EX30 Plus", battery: 51.0, maxAc: 7.4, maxDc: 150.0, range: 250 },
    { id: "volvo_ex30_ultra_twin_motor", type: "BEV", brand: "Volvo", model: "EX30 Ultra Twin Motor", battery: 69.0, maxAc: 11.0, maxDc: 153.0, range: 338 },
    { id: "volvo_xc60_recharge_phev", type: "PHEV", brand: "Volvo", model: "XC60 Recharge (PHEV)", battery: 18.8, maxAc: 6.4, maxDc: 0.0, range: 55 },

    // Zeekr
    { id: "zeekr_7x", type: "BEV", brand: "Zeekr", model: "7X", battery: 75.0, maxAc: 22.0, maxDc: 250.0, range: 390 },
    { id: "zeekr_x", type: "BEV", brand: "Zeekr", model: "X", battery: 66.0, maxAc: 22.0, maxDc: 150.0, range: 343 },
    { id: "zeekr_x_flagship", type: "BEV", brand: "Zeekr", model: "X Flagship", battery: 66.0, maxAc: 22.0, maxDc: 150.0, range: 343 },
  ];
}
