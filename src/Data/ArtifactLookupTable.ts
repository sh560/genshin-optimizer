import { SubstatKey } from "../Types/artifact"

export const ArtifactSubstatLookupTable: StrictDict<SubstatKey, { [numStar: number]: { [rounded: string]: number[][] } }> = {
    hp: {
        3: { "100.0": [[0]], "115.0": [[1]], "129.0": [[2]], "143.0": [[3]], "201.0": [[0, 0]], "215.0": [[0, 1]], "229.0": [[1, 1]], "244.0": [[1, 2]], "258.0": [[2, 2]], "272.0": [[2, 3]], "287.0": [[3, 3]], },
        4: { "167.0": [[0]], "191.0": [[1]], "215.0": [[2]], "239.0": [[3]], "335.0": [[0, 0]], "359.0": [[0, 1]], "382.0": [[1, 1]], "406.0": [[1, 2]], "430.0": [[2, 2]], "454.0": [[2, 3]], "478.0": [[3, 3]], "502.0": [[0, 0, 0]], "526.0": [[0, 0, 1]], "550.0": [[0, 1, 1]], "574.0": [[1, 1, 1]], "598.0": [[1, 1, 2]], "621.0": [[1, 2, 2]], "645.0": [[2, 2, 2]], "669.0": [[2, 2, 3], [0, 0, 0, 0]], "693.0": [[2, 3, 3], [0, 0, 0, 1]], "717.0": [[0, 0, 1, 1], [3, 3, 3]], "741.0": [[0, 1, 1, 1]], "765.0": [[1, 1, 1, 1]], "789.0": [[1, 1, 1, 2]], "813.0": [[1, 1, 2, 2]], "837.0": [[1, 2, 2, 2]], "860.0": [[2, 2, 2, 2]], "884.0": [[2, 2, 2, 3]], "908.0": [[2, 2, 3, 3]], "932.0": [[2, 3, 3, 3]], "956.0": [[3, 3, 3, 3]], },
        5: { "209.0": [[0]], "239.0": [[1]], "269.0": [[2]], "299.0": [[3]], "418.0": [[0, 0]], "448.0": [[0, 1]], "478.0": [[1, 1]], "508.0": [[1, 2]], "538.0": [[1, 3]], "568.0": [[2, 3]], "598.0": [[3, 3]], "627.0": [[0, 0, 0]], "657.0": [[0, 0, 1]], "687.0": [[0, 1, 1]], "717.0": [[1, 1, 1]], "747.0": [[1, 1, 2]], "777.0": [[1, 1, 3]], "807.0": [[1, 2, 3]], "837.0": [[0, 0, 0, 0], [1, 3, 3]], "866.0": [[2, 3, 3], [0, 0, 0, 1]], "896.0": [[3, 3, 3], [0, 0, 1, 1]], "926.0": [[0, 1, 1, 1]], "956.0": [[1, 1, 1, 1]], "986.0": [[1, 1, 1, 2]], "1016.0": [[1, 1, 1, 3]], "1046.0": [[0, 0, 0, 0, 0], [1, 1, 2, 3]], "1076.0": [[0, 0, 0, 0, 1], [1, 1, 3, 3]], "1105.0": [[0, 0, 0, 1, 1], [1, 2, 3, 3]], "1135.0": [[1, 3, 3, 3], [0, 0, 1, 1, 1]], "1165.0": [[0, 1, 1, 1, 1], [2, 3, 3, 3]], "1195.0": [[1, 1, 1, 1, 1], [3, 3, 3, 3]], "1225.0": [[1, 1, 1, 1, 2]], "1255.0": [[1, 1, 1, 1, 3], [0, 0, 0, 0, 0, 0]], "1285.0": [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], "1315.0": [[1, 1, 1, 3, 3], [0, 0, 0, 0, 1, 1]], "1344.0": [[0, 0, 0, 1, 1, 1], [1, 1, 2, 3, 3]], "1374.0": [[1, 1, 3, 3, 3], [0, 0, 1, 1, 1, 1]], "1404.0": [[1, 2, 3, 3, 3], [0, 1, 1, 1, 1, 1]], "1434.0": [[1, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1]], "1464.0": [[2, 3, 3, 3, 3], [1, 1, 1, 1, 1, 2]], "1494.0": [[1, 1, 1, 1, 1, 3], [3, 3, 3, 3, 3]], "1524.0": [[1, 1, 1, 1, 2, 3]], "1554.0": [[1, 1, 1, 1, 3, 3]], "1583.0": [[1, 1, 1, 2, 3, 3]], "1613.0": [[1, 1, 1, 3, 3, 3]], "1643.0": [[1, 1, 2, 3, 3, 3]], "1673.0": [[1, 1, 3, 3, 3, 3]], "1703.0": [[1, 2, 3, 3, 3, 3]], "1733.0": [[1, 3, 3, 3, 3, 3]], "1763.0": [[2, 3, 3, 3, 3, 3]], "1793.0": [[3, 3, 3, 3, 3, 3]], },
    },
    eleMas: {
        3: { "10.0": [[0]], "11.0": [[1]], "13.0": [[2]], "14.0": [[3]], "20.0": [[0, 0]], "21.0": [[0, 1]], "22.0": [[1, 1]], "24.0": [[1, 2]], "25.0": [[2, 2]], "27.0": [[2, 3]], "28.0": [[3, 3]], },
        4: { "13.0": [[0]], "15.0": [[1]], "17.0": [[2]], "19.0": [[3]], "26.0": [[0, 0]], "28.0": [[0, 1]], "30.0": [[1, 1]], "32.0": [[1, 2]], "34.0": [[1, 3]], "35.0": [[2, 3]], "37.0": [[3, 3]], "39.0": [[0, 0, 0]], "41.0": [[0, 0, 1]], "43.0": [[0, 1, 1]], "45.0": [[1, 1, 1]], "47.0": [[1, 1, 2]], "48.0": [[1, 1, 3]], "49.0": [[1, 2, 2]], "50.0": [[1, 2, 3]], "52.0": [[1, 3, 3], [0, 0, 0, 0]], "54.0": [[2, 3, 3], [0, 0, 0, 1]], "56.0": [[3, 3, 3], [0, 0, 1, 1]], "58.0": [[0, 1, 1, 1]], "60.0": [[1, 1, 1, 1]], "62.0": [[1, 1, 1, 2]], "63.0": [[1, 1, 1, 3]], "65.0": [[1, 1, 2, 3]], "67.0": [[1, 1, 3, 3]], "69.0": [[1, 2, 3, 3]], "71.0": [[1, 3, 3, 3]], "73.0": [[2, 3, 3, 3]], "75.0": [[3, 3, 3, 3]], },
        5: { "16.0": [[0]], "19.0": [[1]], "21.0": [[2]], "23.0": [[3]], "33.0": [[0, 0]], "35.0": [[0, 1]], "37.0": [[1, 1]], "40.0": [[1, 2]], "42.0": [[2, 2]], "44.0": [[2, 3]], "47.0": [[3, 3]], "49.0": [[0, 0, 0]], "51.0": [[0, 0, 1]], "54.0": [[0, 1, 1]], "56.0": [[1, 1, 1]], "58.0": [[1, 1, 2]], "61.0": [[1, 2, 2]], "63.0": [[2, 2, 2]], "65.0": [[0, 0, 0, 0], [2, 2, 3]], "68.0": [[0, 0, 0, 1], [2, 3, 3]], "70.0": [[3, 3, 3], [0, 0, 1, 1]], "72.0": [[0, 1, 1, 1]], "75.0": [[1, 1, 1, 1]], "77.0": [[1, 1, 1, 2]], "79.0": [[1, 1, 2, 2]], "82.0": [[0, 0, 0, 0, 0], [1, 2, 2, 2]], "84.0": [[0, 0, 0, 0, 1], [2, 2, 2, 2]], "86.0": [[2, 2, 2, 3], [0, 0, 0, 1, 1]], "89.0": [[2, 2, 3, 3], [0, 0, 1, 1, 1]], "91.0": [[0, 1, 1, 1, 1], [2, 3, 3, 3]], "93.0": [[3, 3, 3, 3], [1, 1, 1, 1, 1]], "96.0": [[1, 1, 1, 1, 2]], "98.0": [[1, 1, 1, 2, 2], [0, 0, 0, 0, 0, 0]], "100.0": [[1, 1, 2, 2, 2], [0, 0, 0, 0, 0, 1]], "103.0": [[0, 0, 0, 0, 1, 1], [1, 2, 2, 2, 2]], "105.0": [[0, 0, 0, 1, 1, 1], [2, 2, 2, 2, 2]], "107.0": [[2, 2, 2, 2, 3], [0, 0, 1, 1, 1, 1]], "110.0": [[2, 2, 2, 3, 3], [0, 1, 1, 1, 1, 1]], "112.0": [[2, 2, 3, 3, 3], [1, 1, 1, 1, 1, 1]], "114.0": [[2, 3, 3, 3, 3], [1, 1, 1, 1, 1, 2]], "117.0": [[3, 3, 3, 3, 3], [1, 1, 1, 1, 2, 2]], "119.0": [[1, 1, 1, 2, 2, 2]], "121.0": [[1, 1, 2, 2, 2, 2]], "124.0": [[1, 2, 2, 2, 2, 2]], "126.0": [[2, 2, 2, 2, 2, 2]], "128.0": [[2, 2, 2, 2, 2, 3]], "131.0": [[2, 2, 2, 2, 3, 3]], "133.0": [[2, 2, 2, 3, 3, 3]], "135.0": [[2, 2, 3, 3, 3, 3]], "138.0": [[2, 3, 3, 3, 3, 3]], "140.0": [[3, 3, 3, 3, 3, 3]], },
    },
    atk: {
        3: { "7.0": [[0]], "8.0": [[2]], "9.0": [[3]], "13.0": [[0, 0]], "14.0": [[0, 1]], "15.0": [[1, 1]], "16.0": [[1, 2]], "17.0": [[2, 2]], "18.0": [[2, 3]], "19.0": [[3, 3]], },
        4: { "11.0": [[0]], "12.0": [[1]], "14.0": [[2]], "16.0": [[3]], "22.0": [[0, 0]], "23.0": [[0, 1]], "25.0": [[0, 2]], "26.0": [[1, 2]], "28.0": [[2, 2]], "30.0": [[2, 3]], "31.0": [[3, 3]], "33.0": [[0, 0, 0]], "34.0": [[0, 0, 1]], "36.0": [[0, 0, 2]], "37.0": [[0, 1, 2]], "39.0": [[0, 2, 2]], "40.0": [[1, 2, 2]], "42.0": [[2, 2, 2]], "44.0": [[0, 0, 0, 0], [2, 2, 3]], "45.0": [[2, 3, 3], [0, 0, 0, 1]], "47.0": [[3, 3, 3], [0, 0, 0, 2]], "48.0": [[0, 0, 1, 2]], "50.0": [[0, 0, 2, 2]], "51.0": [[0, 1, 2, 2]], "53.0": [[0, 2, 2, 2]], "54.0": [[1, 2, 2, 2]], "56.0": [[2, 2, 2, 2]], "58.0": [[2, 2, 2, 3]], "59.0": [[2, 2, 3, 3]], "61.0": [[2, 3, 3, 3]], "62.0": [[3, 3, 3, 3]], },
        5: { "14.0": [[0]], "16.0": [[1]], "18.0": [[2]], "19.0": [[3]], "27.0": [[0, 0]], "29.0": [[0, 1]], "31.0": [[1, 1]], "33.0": [[1, 2]], "35.0": [[1, 3]], "37.0": [[2, 3]], "39.0": [[3, 3]], "41.0": [[0, 0, 0]], "43.0": [[0, 0, 1]], "45.0": [[0, 1, 1]], "47.0": [[1, 1, 1]], "49.0": [[1, 1, 2]], "51.0": [[1, 1, 3]], "53.0": [[1, 2, 3]], "54.0": [[1, 3, 3], [0, 0, 0, 0]], "56.0": [[0, 0, 0, 1], [2, 3, 3]], "58.0": [[3, 3, 3], [0, 0, 1, 1]], "60.0": [[0, 1, 1, 1]], "62.0": [[1, 1, 1, 1]], "64.0": [[1, 1, 1, 2]], "66.0": [[1, 1, 1, 3]], "68.0": [[0, 0, 0, 0, 0], [1, 1, 2, 3]], "70.0": [[0, 0, 0, 0, 1], [1, 1, 3, 3]], "72.0": [[0, 0, 0, 1, 1], [1, 2, 3, 3]], "74.0": [[0, 0, 1, 1, 1], [1, 3, 3, 3]], "76.0": [[2, 3, 3, 3], [0, 1, 1, 1, 1]], "78.0": [[1, 1, 1, 1, 1], [3, 3, 3, 3]], "80.0": [[1, 1, 1, 1, 2]], "82.0": [[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 3]], "84.0": [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], "86.0": [[0, 0, 0, 0, 1, 1], [1, 1, 1, 3, 3]], "88.0": [[1, 1, 2, 3, 3], [0, 0, 0, 1, 1, 1]], "89.0": [[0, 0, 1, 1, 1, 1], [1, 1, 3, 3, 3]], "90.0": [[0, 0, 0, 0, 2, 2]], "91.0": [[0, 1, 1, 1, 1, 1], [1, 2, 3, 3, 3]], "93.0": [[1, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1]], "95.0": [[1, 1, 1, 1, 1, 2], [2, 3, 3, 3, 3]], "97.0": [[1, 1, 1, 1, 1, 3], [3, 3, 3, 3, 3]], "99.0": [[1, 1, 1, 1, 2, 3]], "101.0": [[1, 1, 1, 1, 3, 3]], "103.0": [[1, 1, 1, 2, 3, 3]], "105.0": [[1, 1, 1, 3, 3, 3]], "107.0": [[1, 1, 2, 3, 3, 3]], "109.0": [[1, 1, 3, 3, 3, 3]], "111.0": [[1, 2, 3, 3, 3, 3]], "113.0": [[1, 3, 3, 3, 3, 3]], "115.0": [[2, 3, 3, 3, 3, 3]], "117.0": [[3, 3, 3, 3, 3, 3]], },
    },
    def: {
        3: { "8.0": [[0]], "9.0": [[1]], "10.0": [[2]], "11.0": [[3]], "16.0": [[0, 0]], "17.0": [[0, 1]], "18.0": [[1, 1]], "19.0": [[1, 2]], "20.0": [[2, 2]], "21.0": [[2, 3]], "22.0": [[3, 3]], },
        4: { "13.0": [[0]], "15.0": [[1]], "17.0": [[2]], "19.0": [[3]], "26.0": [[0, 0]], "28.0": [[0, 1]], "30.0": [[0, 2]], "31.0": [[0, 3]], "33.0": [[2, 2]], "35.0": [[2, 3]], "37.0": [[3, 3]], "39.0": [[0, 0, 0]], "41.0": [[0, 0, 1]], "43.0": [[0, 0, 2]], "44.0": [[0, 0, 3]], "46.0": [[0, 2, 2]], "48.0": [[0, 2, 3]], "50.0": [[0, 3, 3]], "52.0": [[0, 0, 0, 0], [2, 2, 3]], "54.0": [[0, 0, 0, 1], [2, 3, 3]], "56.0": [[0, 0, 0, 2], [3, 3, 3]], "57.0": [[0, 0, 0, 3]], "59.0": [[0, 0, 2, 2]], "61.0": [[0, 0, 2, 3]], "63.0": [[0, 0, 3, 3]], "65.0": [[0, 2, 2, 3]], "67.0": [[0, 2, 3, 3]], "69.0": [[0, 3, 3, 3]], "70.0": [[2, 2, 3, 3]], "72.0": [[2, 3, 3, 3]], "74.0": [[3, 3, 3, 3]], },
        5: { "16.0": [[0]], "19.0": [[1]], "21.0": [[2]], "23.0": [[3]], "32.0": [[0, 0]], "35.0": [[0, 1]], "37.0": [[0, 2]], "39.0": [[1, 2]], "42.0": [[2, 2]], "44.0": [[2, 3]], "46.0": [[3, 3]], "49.0": [[0, 0, 0]], "51.0": [[0, 0, 1]], "53.0": [[0, 0, 2]], "56.0": [[0, 1, 2]], "58.0": [[0, 2, 2]], "60.0": [[1, 2, 2]], "62.0": [[2, 2, 2]], "63.0": [[1, 2, 3]], "65.0": [[0, 0, 0, 0], [2, 2, 3]], "67.0": [[0, 0, 0, 1], [2, 3, 3]], "69.0": [[3, 3, 3], [0, 0, 0, 2]], "72.0": [[0, 0, 1, 2]], "74.0": [[0, 0, 2, 2]], "76.0": [[0, 1, 2, 2]], "79.0": [[0, 2, 2, 2]], "81.0": [[0, 0, 0, 0, 0], [1, 2, 2, 2]], "83.0": [[0, 0, 0, 0, 1], [2, 2, 2, 2]], "86.0": [[2, 2, 2, 3], [0, 0, 0, 0, 2]], "88.0": [[2, 2, 3, 3], [0, 0, 0, 1, 2]], "90.0": [[0, 0, 0, 2, 2], [2, 3, 3, 3]], "93.0": [[3, 3, 3, 3], [0, 0, 1, 2, 2]], "95.0": [[0, 0, 2, 2, 2]], "97.0": [[0, 0, 0, 0, 0, 0], [0, 1, 2, 2, 2]], "100.0": [[0, 0, 0, 0, 0, 1], [0, 2, 2, 2, 2]], "102.0": [[1, 2, 2, 2, 2], [0, 0, 0, 0, 0, 2]], "104.0": [[0, 0, 0, 0, 1, 2], [2, 2, 2, 2, 2]], "106.0": [[0, 0, 0, 0, 2, 2], [2, 2, 2, 2, 3]], "109.0": [[2, 2, 2, 3, 3], [0, 0, 0, 1, 2, 2]], "111.0": [[0, 0, 0, 2, 2, 2], [2, 2, 3, 3, 3]], "113.0": [[2, 3, 3, 3, 3], [0, 0, 1, 2, 2, 2]], "116.0": [[3, 3, 3, 3, 3], [0, 0, 2, 2, 2, 2]], "118.0": [[0, 1, 2, 2, 2, 2]], "120.0": [[0, 2, 2, 2, 2, 2]], "123.0": [[1, 2, 2, 2, 2, 2]], "125.0": [[2, 2, 2, 2, 2, 2]], "127.0": [[2, 2, 2, 2, 2, 3]], "130.0": [[2, 2, 2, 2, 3, 3]], "132.0": [[2, 2, 2, 3, 3, 3]], "134.0": [[2, 2, 3, 3, 3, 3]], "137.0": [[2, 3, 3, 3, 3, 3]], "139.0": [[3, 3, 3, 3, 3, 3]], },
    },
    def_: {
        3: { "3.1": [[0]], "3.5": [[1]], "3.9": [[2]], "4.4": [[3]], "6.1": [[0, 0]], "6.6": [[0, 1]], "7.0": [[0, 2]], "7.4": [[1, 2]], "7.9": [[2, 2]], "8.3": [[2, 3]], "8.7": [[3, 3]], },
        4: { "4.1": [[0]], "4.7": [[1]], "5.3": [[2]], "5.8": [[3]], "8.2": [[0, 0]], "8.7": [[0, 1]], "9.3": [[1, 1]], "9.9": [[1, 2]], "10.5": [[1, 3]], "11.1": [[2, 3]], "11.7": [[3, 3]], "12.2": [[0, 0, 0]], "12.8": [[0, 0, 1]], "13.4": [[0, 1, 1]], "14.0": [[1, 1, 1]], "14.6": [[1, 1, 2]], "15.2": [[1, 1, 3]], "15.7": [[1, 2, 3]], "15.8": [[2, 2, 2]], "16.3": [[0, 0, 0, 0], [1, 3, 3]], "16.9": [[0, 0, 0, 1], [2, 3, 3]], "17.5": [[0, 0, 1, 1], [3, 3, 3]], "18.1": [[0, 1, 1, 1]], "18.6": [[1, 1, 1, 1]], "18.7": [[0, 1, 1, 2]], "19.2": [[1, 1, 1, 2]], "19.8": [[1, 1, 1, 3]], "20.4": [[1, 1, 2, 3]], "21.0": [[1, 1, 3, 3]], "21.6": [[1, 2, 3, 3]], "22.2": [[1, 3, 3, 3]], "22.7": [[2, 3, 3, 3]], "23.3": [[3, 3, 3, 3]], },
        5: { "5.1": [[0]], "5.8": [[1]], "6.6": [[2]], "7.3": [[3]], "10.2": [[0, 0]], "10.9": [[0, 1]], "11.6": [[1, 1]], "11.7": [[0, 2]], "12.4": [[1, 2]], "13.1": [[1, 3]], "13.9": [[2, 3]], "14.6": [[3, 3]], "15.3": [[0, 0, 0]], "16.0": [[0, 0, 1]], "16.7": [[0, 1, 1]], "16.8": [[0, 0, 2]], "17.4": [[1, 1, 1]], "17.5": [[0, 1, 2]], "18.2": [[1, 1, 2]], "18.9": [[1, 1, 3]], "19.0": [[0, 2, 3]], "19.7": [[1, 2, 3]], "20.4": [[0, 0, 0, 0], [1, 3, 3]], "21.1": [[2, 3, 3], [0, 0, 0, 1]], "21.8": [[0, 0, 1, 1]], "21.9": [[0, 0, 0, 2], [3, 3, 3]], "22.5": [[0, 1, 1, 1]], "22.6": [[0, 0, 1, 2]], "23.2": [[1, 1, 1, 1]], "23.3": [[0, 1, 1, 2]], "24.0": [[1, 1, 1, 2]], "24.1": [[0, 0, 2, 3]], "24.7": [[1, 1, 1, 3]], "24.8": [[0, 1, 2, 3]], "25.5": [[1, 1, 2, 3], [0, 0, 0, 0, 0]], "26.2": [[1, 1, 3, 3], [0, 0, 0, 0, 1]], "26.9": [[0, 0, 0, 1, 1], [1, 2, 3, 3]], "27.0": [[0, 0, 0, 0, 2], [2, 2, 2, 3]], "27.6": [[0, 0, 1, 1, 1]], "27.7": [[1, 3, 3, 3], [0, 0, 0, 1, 2]], "28.3": [[0, 1, 1, 1, 1]], "28.4": [[2, 3, 3, 3], [0, 0, 1, 1, 2]], "29.0": [[1, 1, 1, 1, 1]], "29.1": [[0, 1, 1, 1, 2]], "29.2": [[3, 3, 3, 3], [0, 0, 0, 2, 3]], "29.8": [[1, 1, 1, 1, 2]], "29.9": [[0, 0, 1, 2, 3]], "30.5": [[1, 1, 1, 1, 3]], "30.6": [[0, 1, 1, 2, 3], [0, 0, 0, 0, 0, 0]], "31.3": [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], "32.0": [[0, 0, 0, 0, 1, 1], [1, 1, 1, 3, 3]], "32.1": [[0, 2, 2, 2, 3], [0, 0, 0, 0, 0, 2]], "32.7": [[0, 0, 0, 1, 1, 1], [1, 1, 2, 3, 3]], "32.8": [[0, 0, 0, 0, 1, 2], [1, 2, 2, 2, 3]], "33.4": [[0, 0, 1, 1, 1, 1]], "33.5": [[0, 0, 0, 1, 1, 2], [1, 1, 3, 3, 3]], "34.1": [[0, 1, 1, 1, 1, 1]], "34.2": [[1, 2, 3, 3, 3], [0, 0, 1, 1, 1, 2]], "34.3": [[0, 0, 0, 0, 2, 3], [2, 2, 2, 3, 3]], "34.8": [[1, 1, 1, 1, 1, 1]], "34.9": [[0, 1, 1, 1, 1, 2]], "35.0": [[0, 0, 0, 1, 2, 3], [1, 3, 3, 3, 3]], "35.6": [[1, 1, 1, 1, 1, 2]], "35.7": [[0, 0, 1, 1, 2, 3], [2, 3, 3, 3, 3]], "36.3": [[1, 1, 1, 1, 1, 3]], "36.4": [[0, 1, 1, 1, 2, 3]], "36.5": [[3, 3, 3, 3, 3]], "37.1": [[1, 1, 1, 1, 2, 3]], "37.2": [[0, 0, 2, 2, 2, 3]], "37.8": [[1, 1, 1, 1, 3, 3]], "37.9": [[0, 1, 2, 2, 2, 3]], "38.5": [[1, 1, 1, 2, 3, 3]], "38.6": [[1, 1, 2, 2, 2, 3]], "39.3": [[1, 1, 1, 3, 3, 3]], "39.4": [[2, 2, 2, 2, 2, 2]], "40.0": [[1, 1, 2, 3, 3, 3]], "40.1": [[1, 2, 2, 2, 3, 3]], "40.8": [[1, 1, 3, 3, 3, 3]], "41.5": [[1, 2, 3, 3, 3, 3]], "41.6": [[2, 2, 2, 3, 3, 3]], "42.3": [[1, 3, 3, 3, 3, 3]], "43.0": [[2, 3, 3, 3, 3, 3]], "43.7": [[3, 3, 3, 3, 3, 3]], },
    },
    critRate_: {
        3: { "1.6": [[0]], "1.9": [[1]], "2.1": [[2]], "2.3": [[3]], "3.3": [[0, 0]], "3.5": [[0, 1]], "3.7": [[1, 1]], "4.0": [[1, 2]], "4.2": [[1, 3]], "4.4": [[2, 3]], "4.7": [[3, 3]], },
        4: { "2.2": [[0]], "2.5": [[1]], "2.8": [[2]], "3.1": [[3]], "4.4": [[0, 0]], "4.7": [[0, 1]], "5.0": [[1, 1]], "5.3": [[1, 2]], "5.6": [[2, 2]], "5.9": [[2, 3]], "6.2": [[3, 3]], "6.5": [[0, 0, 0]], "6.9": [[0, 0, 1]], "7.2": [[0, 1, 1]], "7.5": [[1, 1, 1]], "7.8": [[1, 1, 2]], "8.1": [[1, 2, 2]], "8.4": [[2, 2, 2]], "8.7": [[0, 0, 0, 0], [2, 2, 3]], "9.0": [[2, 3, 3], [0, 0, 0, 1]], "9.3": [[3, 3, 3], [0, 0, 1, 1]], "9.7": [[0, 1, 1, 1]], "10.0": [[1, 1, 1, 1]], "10.3": [[1, 1, 1, 2]], "10.6": [[1, 1, 2, 2]], "10.9": [[1, 2, 2, 2]], "11.2": [[2, 2, 2, 2]], "11.5": [[2, 2, 2, 3]], "11.8": [[2, 2, 3, 3]], "12.1": [[2, 3, 3, 3]], "12.4": [[3, 3, 3, 3]], },
        5: { "2.7": [[0]], "3.1": [[1]], "3.5": [[2]], "3.9": [[3]], "5.4": [[0, 0]], "5.8": [[0, 1]], "6.2": [[1, 1]], "6.6": [[1, 2]], "7.0": [[2, 2]], "7.4": [[2, 3]], "7.8": [[3, 3]], "8.2": [[0, 0, 0]], "8.6": [[0, 0, 1]], "8.9": [[0, 1, 1]], "9.3": [[1, 1, 1]], "9.7": [[1, 1, 2]], "10.1": [[1, 2, 2]], "10.5": [[2, 2, 2]], "10.9": [[0, 0, 0, 0], [2, 2, 3]], "11.3": [[2, 3, 3], [0, 0, 0, 1]], "11.7": [[0, 0, 1, 1], [3, 3, 3]], "12.1": [[0, 1, 1, 1]], "12.4": [[1, 1, 1, 1]], "12.8": [[1, 1, 1, 2]], "13.2": [[1, 1, 2, 2]], "13.6": [[0, 0, 0, 0, 0], [1, 2, 2, 2]], "14.0": [[2, 2, 2, 2], [0, 0, 0, 0, 1]], "14.4": [[0, 0, 0, 1, 1], [2, 2, 2, 3]], "14.8": [[0, 0, 1, 1, 1], [2, 2, 3, 3]], "15.2": [[0, 1, 1, 1, 1], [2, 3, 3, 3]], "15.6": [[3, 3, 3, 3], [1, 1, 1, 1, 1]], "15.9": [[1, 1, 1, 1, 2]], "16.3": [[0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2]], "16.7": [[0, 0, 0, 0, 0, 1], [1, 1, 2, 2, 2]], "17.1": [[1, 2, 2, 2, 2], [0, 0, 0, 0, 1, 1]], "17.5": [[0, 0, 0, 1, 1, 1], [2, 2, 2, 2, 2]], "17.9": [[2, 2, 2, 2, 3], [0, 0, 1, 1, 1, 1]], "18.3": [[2, 2, 2, 3, 3], [0, 1, 1, 1, 1, 1]], "18.7": [[1, 1, 1, 1, 1, 1], [2, 2, 3, 3, 3]], "19.1": [[1, 1, 1, 1, 1, 2], [2, 3, 3, 3, 3]], "19.4": [[1, 1, 1, 1, 2, 2]], "19.5": [[3, 3, 3, 3, 3]], "19.8": [[1, 1, 1, 2, 2, 2]], "20.2": [[1, 1, 2, 2, 2, 2]], "20.6": [[1, 2, 2, 2, 2, 2]], "21.0": [[2, 2, 2, 2, 2, 2]], "21.4": [[2, 2, 2, 2, 2, 3]], "21.8": [[2, 2, 2, 2, 3, 3]], "22.2": [[2, 2, 2, 3, 3, 3]], "22.6": [[2, 2, 3, 3, 3, 3]], "23.0": [[2, 3, 3, 3, 3, 3]], "23.3": [[3, 3, 3, 3, 3, 3]], },
    },
    atk_: {
        3: { "2.5": [[0]], "2.8": [[1]], "3.2": [[2]], "3.5": [[3]], "4.9": [[0, 0]], "5.3": [[0, 1]], "5.6": [[1, 1]], "6.0": [[1, 2]], "6.3": [[2, 2]], "6.7": [[2, 3]], "7.0": [[3, 3]], },
        4: { "3.3": [[0]], "3.7": [[1]], "4.2": [[2]], "4.7": [[3]], "6.5": [[0, 0]], "7.0": [[0, 1]], "7.5": [[1, 1]], "7.9": [[0, 3]], "8.4": [[1, 3]], "8.9": [[2, 3]], "9.3": [[3, 3]], "9.8": [[0, 0, 0]], "10.3": [[0, 0, 1]], "10.7": [[0, 1, 1]], "11.2": [[0, 0, 3]], "11.7": [[0, 1, 3]], "12.1": [[1, 1, 3]], "12.6": [[0, 3, 3]], "13.0": [[0, 0, 0, 0]], "13.1": [[1, 3, 3]], "13.5": [[2, 3, 3], [0, 0, 0, 1]], "14.0": [[3, 3, 3], [0, 0, 1, 1]], "14.4": [[0, 0, 0, 3]], "14.5": [[0, 1, 1, 1]], "14.9": [[0, 0, 1, 3]], "15.4": [[0, 1, 1, 3]], "15.8": [[0, 0, 3, 3]], "15.9": [[1, 1, 1, 3]], "16.3": [[0, 1, 3, 3]], "16.8": [[1, 1, 3, 3]], "17.2": [[0, 3, 3, 3]], "17.3": [[1, 2, 3, 3]], "17.7": [[1, 3, 3, 3]], "18.2": [[2, 3, 3, 3]], "18.6": [[3, 3, 3, 3]], },
        5: { "4.1": [[0]], "4.7": [[1]], "5.3": [[2]], "5.8": [[3]], "8.2": [[0, 0]], "8.7": [[0, 1]], "9.3": [[1, 1]], "9.9": [[1, 2]], "10.5": [[1, 3]], "11.1": [[2, 3]], "11.7": [[3, 3]], "12.2": [[0, 0, 0]], "12.8": [[0, 0, 1]], "13.4": [[0, 1, 1]], "14.0": [[1, 1, 1]], "14.6": [[1, 1, 2]], "15.2": [[1, 1, 3]], "15.7": [[1, 2, 3]], "15.8": [[2, 2, 2]], "16.3": [[0, 0, 0, 0], [1, 3, 3]], "16.9": [[0, 0, 0, 1], [2, 3, 3]], "17.5": [[3, 3, 3], [0, 0, 1, 1]], "18.1": [[0, 1, 1, 1]], "18.6": [[1, 1, 1, 1]], "18.7": [[0, 1, 1, 2]], "19.2": [[1, 1, 1, 2]], "19.8": [[1, 1, 1, 3]], "20.4": [[0, 0, 0, 0, 0], [1, 1, 2, 3]], "21.0": [[1, 1, 3, 3], [0, 0, 0, 0, 1]], "21.6": [[0, 0, 0, 1, 1], [1, 2, 3, 3]], "22.1": [[0, 0, 1, 1, 1]], "22.2": [[0, 0, 0, 1, 2], [1, 3, 3, 3]], "22.7": [[2, 3, 3, 3], [0, 1, 1, 1, 1]], "23.3": [[1, 1, 1, 1, 1], [3, 3, 3, 3]], "23.9": [[1, 1, 1, 1, 2]], "24.5": [[1, 1, 1, 1, 3], [0, 0, 0, 0, 0, 0]], "25.1": [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], "25.6": [[0, 0, 0, 0, 1, 1], [1, 1, 1, 3, 3]], "25.7": [[1, 1, 2, 2, 3], [0, 0, 0, 0, 0, 2]], "26.2": [[1, 1, 2, 3, 3], [0, 0, 0, 1, 1, 1]], "26.3": [[2, 2, 2, 2, 2]], "26.8": [[1, 1, 3, 3, 3], [0, 0, 1, 1, 1, 1]], "27.4": [[1, 2, 3, 3, 3], [0, 1, 1, 1, 1, 1]], "28.0": [[1, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1]], "28.6": [[1, 1, 1, 1, 1, 2], [2, 3, 3, 3, 3]], "29.1": [[1, 1, 1, 1, 1, 3]], "29.2": [[3, 3, 3, 3, 3], [0, 1, 1, 2, 2, 2]], "29.7": [[1, 1, 1, 1, 2, 3]], "30.3": [[1, 1, 1, 1, 3, 3]], "30.9": [[1, 1, 1, 2, 3, 3]], "31.5": [[1, 1, 1, 3, 3, 3]], "32.1": [[1, 1, 2, 3, 3, 3]], "32.6": [[1, 1, 3, 3, 3, 3]], "32.7": [[1, 2, 2, 3, 3, 3]], "33.2": [[1, 2, 3, 3, 3, 3]], "33.8": [[1, 3, 3, 3, 3, 3]], "34.4": [[2, 3, 3, 3, 3, 3]], "35.0": [[3, 3, 3, 3, 3, 3]], },
    },
    critDMG_: {
        5: { "5.4": [[0]], "6.2": [[1]], "7.0": [[2]], "7.8": [[3]], "10.9": [[0, 0]], "11.7": [[0, 1]], "12.4": [[0, 2]], "13.2": [[1, 2]], "14.0": [[2, 2]], "14.8": [[2, 3]], "15.5": [[3, 3]], "16.3": [[0, 0, 0]], "17.1": [[0, 0, 1]], "17.9": [[0, 0, 2]], "18.7": [[0, 1, 2]], "19.4": [[0, 2, 2]], "20.2": [[1, 2, 2]], "21.0": [[2, 2, 2]], "21.8": [[0, 0, 0, 0], [2, 2, 3]], "22.5": [[2, 3, 3], [0, 0, 0, 1]], "23.3": [[3, 3, 3], [0, 0, 0, 2]], "24.1": [[0, 0, 1, 2]], "24.9": [[0, 0, 2, 2]], "25.6": [[0, 1, 2, 2]], "25.7": [[1, 1, 1, 2]], "26.4": [[0, 2, 2, 2]], "27.2": [[0, 0, 0, 0, 0], [1, 2, 2, 2]], "28.0": [[2, 2, 2, 2], [0, 0, 0, 0, 1]], "28.7": [[2, 2, 2, 3]], "28.8": [[1, 2, 3, 3], [0, 0, 0, 0, 2]], "29.5": [[0, 0, 0, 1, 2], [2, 2, 3, 3]], "30.3": [[0, 0, 0, 2, 2], [2, 3, 3, 3]], "31.1": [[3, 3, 3, 3], [0, 0, 1, 2, 2]], "31.9": [[0, 0, 2, 2, 2]], "32.6": [[0, 1, 2, 2, 2], [0, 0, 0, 0, 0, 0]], "32.7": [[1, 1, 1, 1, 3]], "33.4": [[0, 2, 2, 2, 2], [0, 0, 0, 0, 0, 1]], "34.2": [[0, 0, 0, 0, 0, 2], [1, 2, 2, 2, 2]], "35.0": [[2, 2, 2, 2, 2], [0, 0, 0, 0, 1, 2]], "35.7": [[0, 0, 0, 0, 2, 2], [2, 2, 2, 2, 3]], "35.8": [[0, 0, 0, 1, 1, 2], [1, 1, 3, 3, 3]], "36.5": [[2, 2, 2, 3, 3], [0, 0, 0, 1, 2, 2]], "37.3": [[0, 0, 0, 2, 2, 2], [2, 2, 3, 3, 3]], "38.1": [[0, 0, 1, 2, 2, 2], [2, 3, 3, 3, 3]], "38.8": [[0, 0, 2, 2, 2, 2]], "38.9": [[0, 1, 1, 2, 2, 2], [3, 3, 3, 3, 3]], "39.6": [[0, 1, 2, 2, 2, 2]], "40.4": [[0, 2, 2, 2, 2, 2]], "41.2": [[1, 2, 2, 2, 2, 2]], "41.9": [[2, 2, 2, 2, 2, 2]], "42.0": [[1, 2, 2, 2, 2, 3]], "42.7": [[2, 2, 2, 2, 2, 3]], "43.5": [[2, 2, 2, 2, 3, 3]], "44.3": [[2, 2, 2, 3, 3, 3]], "45.1": [[2, 2, 3, 3, 3, 3]], "45.8": [[2, 3, 3, 3, 3, 3]], "46.6": [[3, 3, 3, 3, 3, 3]], },
        3: { "3.3": [[0]], "3.7": [[1]], "4.2": [[2]], "4.7": [[3]], "6.5": [[0, 0]], "7.0": [[0, 1]], "7.5": [[1, 1]], "7.9": [[0, 3]], "8.4": [[1, 3]], "8.9": [[2, 3]], "9.3": [[3, 3]], },
        4: { "4.4": [[0]], "5.0": [[1]], "5.6": [[2]], "6.2": [[3]], "8.7": [[0, 0]], "9.3": [[0, 1]], "9.9": [[1, 1]], "10.0": [[0, 2]], "10.6": [[1, 2]], "11.2": [[1, 3]], "11.8": [[2, 3]], "12.4": [[3, 3]], "13.1": [[0, 0, 0]], "13.7": [[0, 0, 1]], "14.3": [[0, 1, 1]], "14.9": [[1, 1, 1]], "15.5": [[1, 1, 2]], "15.6": [[0, 2, 2]], "16.2": [[1, 1, 3]], "16.8": [[1, 2, 3]], "17.4": [[0, 0, 0, 0], [1, 3, 3]], "18.0": [[0, 0, 0, 1], [2, 3, 3]], "18.6": [[0, 0, 1, 1]], "18.7": [[3, 3, 3], [0, 0, 0, 2]], "19.3": [[0, 1, 1, 1]], "19.9": [[1, 1, 1, 1]], "20.5": [[1, 1, 1, 2]], "21.1": [[1, 1, 1, 3]], "21.2": [[0, 2, 2, 2]], "21.8": [[1, 1, 2, 3]], "22.4": [[1, 1, 3, 3]], "23.0": [[1, 2, 3, 3]], "23.6": [[1, 3, 3, 3]], "24.3": [[2, 3, 3, 3]], "24.9": [[3, 3, 3, 3]], },
    },
    hp_: {
        3: { "2.5": [[0]], "2.8": [[1]], "3.2": [[2]], "3.5": [[3]], "4.9": [[0, 0]], "5.3": [[0, 1]], "5.6": [[1, 1]], "6.0": [[1, 2]], "6.3": [[2, 2]], "6.7": [[2, 3]], "7.0": [[3, 3]], },
        4: { "3.3": [[0]], "3.7": [[1]], "4.2": [[2]], "4.7": [[3]], "6.5": [[0, 0]], "7.0": [[0, 1]], "7.5": [[1, 1]], "7.9": [[0, 3]], "8.4": [[1, 3]], "8.9": [[2, 3]], "9.3": [[3, 3]], "9.8": [[0, 0, 0]], "10.3": [[0, 0, 1]], "10.7": [[0, 1, 1]], "11.2": [[0, 0, 3]], "11.7": [[0, 1, 3]], "12.1": [[1, 1, 3]], "12.6": [[0, 3, 3]], "13.0": [[0, 0, 0, 0]], "13.1": [[1, 3, 3]], "13.5": [[2, 3, 3], [0, 0, 0, 1]], "14.0": [[3, 3, 3], [0, 0, 1, 1]], "14.4": [[0, 0, 0, 3]], "14.5": [[0, 1, 1, 1]], "14.9": [[0, 0, 1, 3]], "15.4": [[0, 1, 1, 3]], "15.8": [[0, 0, 3, 3]], "15.9": [[1, 1, 1, 3]], "16.3": [[0, 1, 3, 3]], "16.8": [[1, 1, 3, 3]], "17.2": [[0, 3, 3, 3]], "17.3": [[1, 2, 3, 3]], "17.7": [[1, 3, 3, 3]], "18.2": [[2, 3, 3, 3]], "18.6": [[3, 3, 3, 3]], },
        5: { "4.1": [[0]], "4.7": [[1]], "5.3": [[2]], "5.8": [[3]], "8.2": [[0, 0]], "8.7": [[0, 1]], "9.3": [[1, 1]], "9.9": [[1, 2]], "10.5": [[1, 3]], "11.1": [[2, 3]], "11.7": [[3, 3]], "12.2": [[0, 0, 0]], "12.8": [[0, 0, 1]], "13.4": [[0, 1, 1]], "14.0": [[1, 1, 1]], "14.6": [[1, 1, 2]], "15.2": [[1, 1, 3]], "15.7": [[1, 2, 3]], "15.8": [[2, 2, 2]], "16.3": [[1, 3, 3], [0, 0, 0, 0]], "16.9": [[2, 3, 3], [0, 0, 0, 1]], "17.5": [[3, 3, 3], [0, 0, 1, 1]], "18.1": [[0, 1, 1, 1]], "18.6": [[1, 1, 1, 1]], "18.7": [[0, 1, 1, 2]], "19.2": [[1, 1, 1, 2]], "19.8": [[1, 1, 1, 3]], "20.4": [[1, 1, 2, 3], [0, 0, 0, 0, 0]], "21.0": [[1, 1, 3, 3], [0, 0, 0, 0, 1]], "21.6": [[1, 2, 3, 3], [0, 0, 0, 1, 1]], "22.1": [[0, 0, 1, 1, 1]], "22.2": [[1, 3, 3, 3], [0, 0, 0, 1, 2]], "22.7": [[2, 3, 3, 3], [0, 1, 1, 1, 1]], "23.3": [[3, 3, 3, 3], [1, 1, 1, 1, 1]], "23.9": [[1, 1, 1, 1, 2]], "24.5": [[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 3]], "25.1": [[1, 1, 1, 2, 3], [0, 0, 0, 0, 0, 1]], "25.6": [[0, 0, 0, 0, 1, 1], [1, 1, 1, 3, 3]], "25.7": [[1, 1, 2, 2, 3], [0, 0, 0, 0, 0, 2]], "26.2": [[0, 0, 0, 1, 1, 1], [1, 1, 2, 3, 3]], "26.3": [[2, 2, 2, 2, 2]], "26.8": [[0, 0, 1, 1, 1, 1], [1, 1, 3, 3, 3]], "27.4": [[0, 1, 1, 1, 1, 1], [1, 2, 3, 3, 3]], "28.0": [[1, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1]], "28.6": [[2, 3, 3, 3, 3], [1, 1, 1, 1, 1, 2]], "29.1": [[1, 1, 1, 1, 1, 3]], "29.2": [[0, 1, 1, 2, 2, 2], [3, 3, 3, 3, 3]], "29.7": [[1, 1, 1, 1, 2, 3]], "30.3": [[1, 1, 1, 1, 3, 3]], "30.9": [[1, 1, 1, 2, 3, 3]], "31.5": [[1, 1, 1, 3, 3, 3]], "32.1": [[1, 1, 2, 3, 3, 3]], "32.6": [[1, 1, 3, 3, 3, 3]], "32.7": [[1, 2, 2, 3, 3, 3]], "33.2": [[1, 2, 3, 3, 3, 3]], "33.8": [[1, 3, 3, 3, 3, 3]], "34.4": [[2, 3, 3, 3, 3, 3]], "35.0": [[3, 3, 3, 3, 3, 3]], },
    },
    enerRech_: {
        3: { "2.7": [[0]], "3.1": [[1]], "3.5": [[2]], "3.9": [[3]], "5.4": [[0, 0]], "5.8": [[0, 1]], "6.2": [[1, 1]], "6.6": [[1, 2]], "7.0": [[2, 2]], "7.4": [[2, 3]], "7.8": [[3, 3]], },
        4: { "3.6": [[0]], "4.1": [[1]], "4.7": [[2]], "5.2": [[3]], "7.3": [[0, 0]], "7.8": [[0, 1]], "8.3": [[1, 1]], "8.8": [[1, 2]], "9.3": [[2, 2]], "9.8": [[2, 3]], "10.4": [[3, 3]], "10.9": [[0, 0, 0]], "11.4": [[0, 0, 1]], "11.9": [[0, 1, 1]], "12.4": [[1, 1, 1]], "12.9": [[1, 1, 2]], "13.0": [[0, 2, 2]], "13.5": [[1, 2, 2]], "14.0": [[2, 2, 2]], "14.5": [[0, 0, 0, 0], [2, 2, 3]], "15.0": [[2, 3, 3], [0, 0, 0, 1]], "15.5": [[3, 3, 3], [0, 0, 1, 1]], "15.6": [[0, 0, 0, 2]], "16.1": [[0, 1, 1, 1]], "16.6": [[1, 1, 1, 1]], "17.1": [[1, 1, 1, 2]], "17.6": [[1, 1, 2, 2]], "18.1": [[1, 2, 2, 2]], "18.6": [[2, 2, 2, 2]], "18.7": [[0, 2, 3, 3]], "19.2": [[2, 2, 2, 3]], "19.7": [[2, 2, 3, 3]], "20.2": [[2, 3, 3, 3]], "20.7": [[3, 3, 3, 3]], },
        5: { "4.5": [[0]], "5.2": [[1]], "5.8": [[2]], "6.5": [[3]], "9.1": [[0, 0]], "9.7": [[0, 1]], "10.4": [[1, 1]], "11.0": [[1, 2]], "11.7": [[2, 2]], "12.3": [[2, 3]], "13.0": [[3, 3]], "13.6": [[0, 0, 0]], "14.2": [[0, 0, 1]], "14.9": [[0, 1, 1]], "15.5": [[1, 1, 1]], "16.2": [[1, 1, 2]], "16.8": [[1, 2, 2]], "17.5": [[2, 2, 2]], "18.1": [[2, 2, 3], [0, 0, 0, 0]], "18.8": [[0, 0, 0, 1], [2, 3, 3]], "19.4": [[3, 3, 3], [0, 0, 1, 1]], "20.1": [[0, 1, 1, 1]], "20.7": [[1, 1, 1, 1]], "21.4": [[1, 1, 1, 2]], "22.0": [[1, 1, 2, 2]], "22.7": [[0, 0, 0, 0, 0], [1, 2, 2, 2]], "23.3": [[0, 0, 0, 0, 1], [2, 2, 2, 2]], "24.0": [[2, 2, 2, 3], [0, 0, 0, 1, 1]], "24.6": [[0, 0, 1, 1, 1], [2, 2, 3, 3]], "25.3": [[0, 1, 1, 1, 1], [2, 3, 3, 3]], "25.9": [[3, 3, 3, 3], [1, 1, 1, 1, 1]], "26.6": [[1, 1, 1, 1, 2]], "27.2": [[0, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2]], "27.8": [[0, 0, 0, 0, 0, 1]], "27.9": [[1, 1, 2, 2, 2]], "28.5": [[0, 0, 0, 0, 1, 1], [1, 2, 2, 2, 2]], "29.1": [[0, 0, 0, 1, 1, 1]], "29.2": [[2, 2, 2, 2, 2]], "29.8": [[0, 0, 1, 1, 1, 1], [2, 2, 2, 2, 3]], "30.4": [[0, 1, 1, 1, 1, 1]], "30.5": [[2, 2, 2, 3, 3]], "31.1": [[2, 2, 3, 3, 3], [1, 1, 1, 1, 1, 1]], "31.7": [[1, 1, 1, 1, 1, 2]], "31.8": [[2, 3, 3, 3, 3]], "32.4": [[3, 3, 3, 3, 3], [1, 1, 1, 1, 2, 2]], "33.0": [[1, 1, 1, 2, 2, 2]], "33.7": [[1, 1, 2, 2, 2, 2]], "34.3": [[1, 2, 2, 2, 2, 2]], "35.0": [[2, 2, 2, 2, 2, 2]], "35.6": [[2, 2, 2, 2, 2, 3]], "36.3": [[2, 2, 2, 2, 3, 3]], "36.9": [[2, 2, 2, 3, 3, 3]], "37.6": [[2, 2, 3, 3, 3, 3]], "38.2": [[2, 3, 3, 3, 3, 3]], "38.9": [[3, 3, 3, 3, 3, 3]], },
    },
}
