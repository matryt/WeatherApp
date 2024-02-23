import {fillContent} from "../services/openMeteoApi";

let data = {
    "latitude": 45.96,
    "longitude": 6.4999995,
    "generationtime_ms": 0.3999471664428711,
    "utc_offset_seconds": 3600,
    "timezone": "Europe/Paris",
    "timezone_abbreviation": "CET",
    "elevation": 1471,
    "current_units": {
    "time": "unixtime",
        "interval": "seconds",
        "temperature_2m": "°C",
        "relative_humidity_2m": "%",
        "precipitation": "mm",
        "weather_code": "wmo code",
        "surface_pressure": "hPa",
        "wind_speed_10m": "km/h",
        "wind_direction_10m": "°"
},
    "current": {
    "time": 1708701300,
        "interval": 900,
        "temperature_2m": 0.3,
        "relative_humidity_2m": 66,
        "precipitation": 0,
        "weather_code": 2,
        "surface_pressure": 835.3,
        "wind_speed_10m": 9.5,
        "wind_direction_10m": 209
},
    "hourly_units": {
    "time": "unixtime",
        "temperature_2m": "°C",
        "relative_humidity_2m": "%",
        "precipitation_probability": "%",
        "precipitation": "mm",
        "weather_code": "wmo code",
        "surface_pressure": "hPa",
        "wind_speed_10m": "km/h",
        "wind_direction_10m": "°",
        "uv_index": ""
},
    "hourly": {
    "time": [
        1708642800,
        1708646400,
        1708650000,
        1708653600,
        1708657200,
        1708660800,
        1708664400,
        1708668000,
        1708671600,
        1708675200,
        1708678800,
        1708682400,
        1708686000,
        1708689600,
        1708693200,
        1708696800,
        1708700400,
        1708704000,
        1708707600,
        1708711200,
        1708714800,
        1708718400,
        1708722000,
        1708725600,
        1708729200,
        1708732800,
        1708736400,
        1708740000,
        1708743600,
        1708747200,
        1708750800,
        1708754400,
        1708758000,
        1708761600,
        1708765200,
        1708768800,
        1708772400,
        1708776000,
        1708779600,
        1708783200,
        1708786800,
        1708790400,
        1708794000,
        1708797600,
        1708801200,
        1708804800,
        1708808400,
        1708812000,
        1708815600,
        1708819200,
        1708822800,
        1708826400,
        1708830000,
        1708833600,
        1708837200,
        1708840800,
        1708844400,
        1708848000,
        1708851600,
        1708855200,
        1708858800,
        1708862400,
        1708866000,
        1708869600,
        1708873200,
        1708876800,
        1708880400,
        1708884000,
        1708887600,
        1708891200,
        1708894800,
        1708898400,
        1708902000,
        1708905600,
        1708909200,
        1708912800,
        1708916400,
        1708920000,
        1708923600,
        1708927200,
        1708930800,
        1708934400,
        1708938000,
        1708941600,
        1708945200,
        1708948800,
        1708952400,
        1708956000,
        1708959600,
        1708963200,
        1708966800,
        1708970400,
        1708974000,
        1708977600,
        1708981200,
        1708984800,
        1708988400,
        1708992000,
        1708995600,
        1708999200,
        1709002800,
        1709006400,
        1709010000,
        1709013600,
        1709017200,
        1709020800,
        1709024400,
        1709028000,
        1709031600,
        1709035200,
        1709038800,
        1709042400,
        1709046000,
        1709049600,
        1709053200,
        1709056800,
        1709060400,
        1709064000,
        1709067600,
        1709071200,
        1709074800,
        1709078400,
        1709082000,
        1709085600,
        1709089200,
        1709092800,
        1709096400,
        1709100000,
        1709103600,
        1709107200,
        1709110800,
        1709114400,
        1709118000,
        1709121600,
        1709125200,
        1709128800,
        1709132400,
        1709136000,
        1709139600,
        1709143200,
        1709146800,
        1709150400,
        1709154000,
        1709157600,
        1709161200,
        1709164800,
        1709168400,
        1709172000,
        1709175600,
        1709179200,
        1709182800,
        1709186400,
        1709190000,
        1709193600,
        1709197200,
        1709200800,
        1709204400,
        1709208000,
        1709211600,
        1709215200,
        1709218800,
        1709222400,
        1709226000,
        1709229600,
        1709233200,
        1709236800,
        1709240400,
        1709244000
    ],
        "temperature_2m": [
        -1.2,
        -1.7,
        -1.6,
        -2.6,
        -3.8,
        -3.9,
        -4.7,
        -3.9,
        -3.7,
        -2.8,
        -1.8,
        -1,
        0.2,
        1,
        1.1,
        0.3,
        0.3,
        0.1,
        -0.6,
        -1.3,
        -1.5,
        -1.9,
        -2.1,
        -2.2,
        -2.6,
        -2.4,
        -2.6,
        -2.8,
        -3.1,
        -3.3,
        -3.2,
        -3.6,
        -3.5,
        -2.9,
        -2.4,
        -2.3,
        -1.8,
        -1.2,
        -0.9,
        -1.2,
        -1,
        -1.4,
        -1.8,
        -2.1,
        -2.3,
        -2.3,
        -2.3,
        -2.1,
        -2.3,
        -2.6,
        -2.8,
        -3.1,
        -2.9,
        -2.8,
        -2.7,
        -2.9,
        -2.6,
        -1.6,
        -0.4,
        0.6,
        1.4,
        2.6,
        4.3,
        4.5,
        4,
        3.3,
        2.5,
        2,
        1.8,
        1.7,
        1.9,
        2,
        2,
        2,
        1.7,
        1.5,
        1.4,
        1.4,
        1.4,
        1.2,
        1.3,
        1.2,
        1.4,
        2.9,
        4.5,
        4.7,
        5.3,
        5.6,
        5.4,
        4.6,
        3.5,
        2.5,
        2.1,
        2,
        1.8,
        1.4,
        1.1,
        0.8,
        0.6,
        0.5,
        0.3,
        -0.1,
        -0.5,
        -0.6,
        -0.2,
        0.4,
        1.2,
        1.9,
        2.8,
        3.3,
        3.6,
        3.5,
        3.3,
        2.8,
        2.1,
        1.5,
        1.1,
        0.7,
        0.5,
        0.3,
        0.2,
        0.1,
        0,
        -0.2,
        -0.3,
        -0.5,
        -0.6,
        -0.7,
        -0.1,
        0.2,
        0.6,
        1,
        1.4,
        1.6,
        1.7,
        1.7,
        1.6,
        1.4,
        1.1,
        0.8,
        0.5,
        0,
        -0.3,
        -0.4,
        -0.5,
        -0.6,
        -0.7,
        -0.9,
        -0.9,
        -1,
        -1.1,
        -0.8,
        -0.1,
        0.9,
        2,
        3.4,
        5,
        6.2,
        6.8,
        7,
        6.8,
        6,
        4.7,
        3.7,
        3.2,
        3.1,
        3,
        2.8
    ],
        "relative_humidity_2m": [
        100,
        96,
        99,
        93,
        98,
        93,
        95,
        86,
        72,
        54,
        64,
        67,
        62,
        55,
        52,
        63,
        66,
        66,
        73,
        81,
        87,
        98,
        100,
        99,
        100,
        90,
        90,
        92,
        100,
        96,
        90,
        91,
        93,
        86,
        85,
        86,
        82,
        74,
        73,
        89,
        86,
        93,
        97,
        97,
        97,
        87,
        82,
        79,
        81,
        78,
        75,
        72,
        62,
        56,
        54,
        55,
        52,
        51,
        50,
        51,
        47,
        43,
        32,
        31,
        35,
        40,
        49,
        52,
        60,
        63,
        63,
        65,
        67,
        70,
        75,
        78,
        79,
        76,
        73,
        71,
        68,
        69,
        77,
        72,
        53,
        53,
        50,
        49,
        52,
        61,
        74,
        82,
        80,
        74,
        70,
        72,
        77,
        80,
        77,
        72,
        69,
        70,
        74,
        77,
        78,
        79,
        80,
        81,
        82,
        82,
        81,
        80,
        81,
        86,
        92,
        97,
        99,
        100,
        100,
        100,
        100,
        100,
        100,
        99,
        99,
        99,
        99,
        99,
        98,
        97,
        96,
        94,
        91,
        89,
        89,
        91,
        92,
        93,
        94,
        95,
        96,
        98,
        99,
        99,
        98,
        97,
        97,
        98,
        97,
        94,
        91,
        87,
        84,
        81,
        78,
        72,
        66,
        62,
        63,
        68,
        74,
        82,
        91,
        98,
        100,
        100,
        99,
        97
    ],
        "precipitation_probability": [
        100,
        100,
        100,
        100,
        100,
        74,
        49,
        23,
        15,
        8,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        14,
        28,
        42,
        56,
        70,
        84,
        85,
        86,
        87,
        89,
        92,
        94,
        94,
        94,
        94,
        86,
        79,
        71,
        65,
        58,
        52,
        54,
        56,
        58,
        49,
        41,
        32,
        23,
        15,
        6,
        5,
        4,
        3,
        2,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        3,
        7,
        12,
        16,
        27,
        37,
        48,
        55,
        61,
        68,
        64,
        59,
        55,
        51,
        46,
        42,
        42,
        42,
        42,
        41,
        40,
        39,
        37,
        34,
        32,
        35,
        39,
        42,
        38,
        33,
        29,
        28,
        27,
        26,
        30,
        35,
        39,
        38,
        36,
        35,
        33,
        31,
        29,
        26,
        22,
        19,
        16,
        13,
        10,
        12,
        14,
        16,
        13,
        9,
        6,
        7,
        9,
        10,
        8,
        5,
        3,
        6,
        10,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        12,
        11,
        10,
        15,
        21,
        26,
        23,
        19,
        16,
        12,
        7,
        3,
        4,
        5,
        6,
        5,
        4,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        4,
        5,
        6,
        6,
        6,
        6,
        7,
        9,
        10,
        10
    ],
        "precipitation": [
        3.5,
        0.6,
        2.9,
        2.1,
        0.4,
        0.1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.2,
        0.7,
        0.9,
        1.3,
        1.3,
        0.1,
        0.1,
        0.2,
        0.9,
        0.5,
        0.3,
        0.1,
        0.1,
        0,
        0.1,
        0.3,
        0.1,
        0,
        0,
        0.1,
        0.1,
        0.2,
        0.2,
        0.1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.2,
        0.4,
        0.5,
        0.2,
        0.1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.9,
        0.9,
        0.9,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.3,
        0.3,
        0.3,
        0.2,
        0.2,
        0.2,
        0.5,
        0.5,
        0.5,
        1.5,
        1.5,
        1.5,
        1.7,
        1.7,
        1.7,
        0.3,
        0.3,
        0.3,
        0.1,
        0.1,
        0.1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
        "weather_code": [
        73,
        71,
        73,
        73,
        85,
        85,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        3,
        3,
        2,
        1,
        1,
        3,
        3,
        85,
        48,
        48,
        48,
        3,
        3,
        3,
        48,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        1,
        1,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        61,
        71,
        71,
        71,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        71,
        71,
        71,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        53,
        53,
        53,
        45,
        45,
        45,
        71,
        71,
        71,
        71,
        71,
        71,
        71,
        71,
        71,
        61,
        61,
        61,
        3,
        3,
        3,
        3,
        3,
        3,
        45,
        45,
        45,
        45,
        45,
        45,
        45,
        45,
        45,
        45,
        45,
        45,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        45,
        45,
        45,
        45,
        45,
        45,
        3
    ],
        "surface_pressure": [
        838.8,
        838.2,
        838.4,
        838.5,
        837,
        836.2,
        835.3,
        835.6,
        835.6,
        835.6,
        836,
        836.6,
        835.9,
        835.9,
        835.6,
        835.5,
        835.4,
        834.7,
        834.4,
        834.6,
        835.1,
        835.6,
        835.9,
        835.8,
        836,
        836.1,
        836.3,
        836.2,
        836.7,
        837,
        837.5,
        838,
        838.9,
        839.7,
        840.3,
        840.7,
        840.9,
        841,
        841,
        841,
        841.3,
        841.6,
        841.8,
        842.4,
        842.8,
        842.8,
        842.8,
        842.8,
        842.5,
        842.1,
        841.4,
        841.1,
        840.6,
        840.3,
        840.1,
        840.1,
        840.2,
        840.5,
        841.1,
        840.7,
        840.1,
        839.3,
        838.3,
        837.9,
        837.3,
        836.8,
        836.3,
        836.2,
        835.7,
        835.2,
        835.1,
        834.8,
        834.5,
        834.3,
        834.3,
        834,
        833.7,
        833.2,
        832.9,
        832.6,
        832.9,
        833.6,
        833.6,
        833.7,
        834.3,
        834.7,
        834.6,
        834.5,
        834.6,
        834.8,
        835.2,
        835.7,
        836.3,
        836.9,
        837.5,
        837.8,
        838.1,
        838.2,
        838.1,
        837.9,
        837.8,
        838.1,
        838.3,
        838.8,
        839.6,
        840.5,
        841.3,
        842,
        842.7,
        843.1,
        843.4,
        843.6,
        843.8,
        844.2,
        844.7,
        845.2,
        845.5,
        845.8,
        845.9,
        846.1,
        846.3,
        846.4,
        846.5,
        846.7,
        846.8,
        846.9,
        847,
        847.1,
        850.7,
        851.3,
        851.7,
        851.8,
        851.8,
        851.8,
        851.8,
        851.8,
        851.8,
        852,
        852.3,
        852.5,
        852.4,
        852.3,
        852.1,
        852,
        852,
        851.8,
        851.6,
        851.3,
        851,
        850.7,
        850.3,
        850.1,
        850.3,
        850.5,
        850.7,
        850.9,
        851,
        850.9,
        850.5,
        849.9,
        849.4,
        849.2,
        849,
        848.9,
        848.8,
        848.6,
        848.4,
        848.1
    ],
        "wind_speed_10m": [
        10.3,
        3.1,
        7.1,
        6.7,
        5.1,
        4,
        2.9,
        3.6,
        3.1,
        2.3,
        5,
        7.5,
        7.9,
        12.7,
        13.6,
        13.8,
        9.7,
        9.1,
        7.6,
        7.5,
        10.2,
        12,
        13.8,
        12.8,
        16.1,
        11.6,
        12.6,
        12.5,
        20,
        16.4,
        12.8,
        10,
        7.5,
        9.2,
        9.5,
        11.1,
        10,
        13.8,
        12.5,
        9.7,
        10.3,
        8,
        4.6,
        3.7,
        4.7,
        5,
        6.9,
        8.3,
        8.6,
        6.9,
        6.1,
        6.1,
        5.6,
        5.4,
        4.8,
        4.9,
        4.8,
        6.1,
        7.4,
        7.7,
        8,
        10.2,
        8.4,
        8.3,
        8.5,
        8.3,
        8.3,
        8.4,
        9.9,
        10.9,
        12.4,
        13.2,
        14.2,
        14.4,
        14.2,
        12.8,
        9.9,
        7.9,
        4.8,
        4.7,
        4.4,
        0.5,
        3.3,
        2,
        3.2,
        2.9,
        2.2,
        1.1,
        2.3,
        2.3,
        2.1,
        2.3,
        4,
        7,
        8.4,
        6.3,
        2.6,
        1.6,
        2.1,
        2.2,
        2.2,
        1.5,
        1.1,
        2.3,
        3.1,
        3.4,
        4.2,
        4.8,
        5.8,
        6.3,
        7.1,
        7.4,
        7.7,
        7.7,
        7.6,
        7.3,
        6.5,
        5.7,
        5.2,
        5.2,
        5.9,
        6.2,
        6.3,
        6.1,
        6.3,
        6.5,
        7.2,
        7.5,
        3.9,
        3.9,
        4.1,
        4.6,
        5.4,
        5.9,
        5.6,
        5.1,
        4.9,
        4.9,
        5.1,
        5.1,
        4.8,
        4.3,
        3.1,
        1.1,
        2.6,
        4.2,
        3.8,
        2.5,
        1.9,
        2.5,
        3.2,
        4,
        3.8,
        3.2,
        2.5,
        2.2,
        2.6,
        3.6,
        4.8,
        5.8,
        6,
        5.5,
        4.3,
        2.9,
        1.5,
        3.1,
        4.5,
        4.6
    ],
        "wind_direction_10m": [
        155,
        111,
        229,
        234,
        172,
        175,
        97,
        127,
        135,
        198,
        240,
        235,
        240,
        245,
        233,
        231,
        211,
        214,
        225,
        215,
        212,
        219,
        227,
        212,
        214,
        210,
        211,
        219,
        236,
        218,
        218,
        221,
        215,
        231,
        241,
        245,
        244,
        231,
        231,
        243,
        241,
        243,
        225,
        209,
        184,
        201,
        208,
        198,
        213,
        208,
        208,
        220,
        207,
        222,
        222,
        234,
        228,
        230,
        231,
        229,
        234,
        228,
        173,
        178,
        168,
        175,
        175,
        170,
        170,
        171,
        170,
        169,
        173,
        176,
        173,
        170,
        170,
        156,
        153,
        171,
        189,
        45,
        131,
        135,
        153,
        270,
        261,
        180,
        141,
        129,
        121,
        129,
        153,
        168,
        170,
        167,
        146,
        63,
        59,
        90,
        99,
        76,
        18,
        342,
        339,
        342,
        340,
        333,
        330,
        329,
        330,
        331,
        332,
        332,
        329,
        327,
        326,
        325,
        326,
        326,
        322,
        324,
        329,
        332,
        336,
        341,
        342,
        343,
        326,
        326,
        322,
        321,
        318,
        317,
        315,
        309,
        306,
        306,
        309,
        309,
        312,
        312,
        315,
        360,
        106,
        110,
        107,
        90,
        68,
        82,
        90,
        100,
        107,
        117,
        135,
        171,
        214,
        233,
        243,
        248,
        253,
        259,
        265,
        270,
        225,
        159,
        151,
        162
    ],
        "uv_index": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.05,
        0.6,
        1.55,
        2.6,
        3.4,
        3.8,
        3.65,
        3.05,
        2.1,
        1.1,
        0.25,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.05,
        0.6,
        1.45,
        2.4,
        3.1,
        3.45,
        3.5,
        2.85,
        2,
        1.05,
        0.3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.05,
        0.55,
        1.4,
        2.3,
        2.9,
        3.25,
        2.9,
        2.15,
        1.25,
        0.85,
        0.2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.05,
        0.25,
        0.85,
        2.05,
        2.05,
        3.15,
        3.1,
        3,
        0.95,
        0.45,
        0.1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.05,
        0.45,
        1.25,
        1.25,
        1.25,
        1.45,
        1.55,
        1.95,
        1.15,
        0.7,
        0.25,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.15,
        0.35,
        0.8,
        1.65,
        2.7,
        3.35,
        3.3,
        2.9,
        2.35,
        1.65,
        0.8,
        0.2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0.15,
        0.4,
        0.85,
        1.7,
        2.75,
        3.45,
        3.6,
        3.45,
        3.05,
        2.3,
        1.3,
        0.55,
        0.2,
        0.05,
        0,
        0
    ]
},
    "daily_units": {
    "time": "unixtime",
        "weather_code": "wmo code",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C",
        "sunrise": "unixtime",
        "sunset": "unixtime",
        "uv_index_max": "",
        "precipitation_sum": "mm",
        "wind_speed_10m_max": "km/h",
        "wind_direction_10m_dominant": "°"
},
    "daily": {
    "time": [
        1708642800,
        1708729200,
        1708815600,
        1708902000,
        1708988400,
        1709074800,
        1709161200
    ],
        "weather_code": [
        85,
        48,
        3,
        71,
        71,
        71,
        45
    ],
        "temperature_2m_max": [
        1.1,
        -0.9,
        4.5,
        5.6,
        3.6,
        1.7,
        7
    ],
        "temperature_2m_min": [
        -4.7,
        -3.6,
        -3.1,
        1.2,
        -0.6,
        -0.7,
        -1.1
    ],
        "sunrise": [
        1708669458,
        1708755756,
        1708842052,
        1708928348,
        1709014641,
        1709100934,
        1709187225
    ],
        "sunset": [
        1708708244,
        1708794730,
        1708881216,
        1708967701,
        1709054187,
        1709140672,
        1709227158
    ],
        "uv_index_max": [
        3.8,
        3.5,
        3.25,
        3.15,
        1.95,
        3.35,
        3.6
    ],
        "precipitation_sum": [
        12.7,
        4.8,
        0,
        2.3,
        3.8,
        11.8,
        0
    ],
        "wind_speed_10m_max": [
        13.8,
        20,
        13.2,
        14.4,
        7.7,
        7.5,
        6
    ],
        "wind_direction_10m_dominant": [
        216,
        224,
        196,
        167,
        337,
        323,
        173
    ]
}
}

export const getMockFill = (setWeatherData, setHourlyData, setDailyData) => {
    fillContent(data, setWeatherData, setHourlyData, setDailyData);
}

