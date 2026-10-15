/**
 * Record travel scores here by two-digit prefecture code. Scores are source
 * controlled so the map always reflects the committed portfolio data.
 * The map SVG is from Geolonia's japanese-prefectures project (GFDL).
 */
export type TravelScore = 0 | 1 | 2 | 3 | 4 | 5;

export const prefectureScores: Record<string, TravelScore> = {
  // Scores transcribed from the supplied reference map.
  "01": 4, // Hokkaido
  "02": 4, // Aomori
  "03": 4, // Iwate
  "04": 4, // Miyagi
  "05": 4, // Akita
  "06": 4, // Yamagata
  "07": 4, // Fukushima
  "09": 4, // Tochigi
  "10": 4, // Gunma
  "11": 4, // Saitama
  "12": 4, // Chiba
  "13": 4, // Tokyo
  "14": 4, // Kanagawa
  "15": 3, // Niigata
  "16": 4, // Toyama
  "17": 4, // Ishikawa
  "18": 4, // Fukui
  "19": 4, // Yamanashi
  "20": 4, // Nagano
  "21": 4, // Gifu
  "22": 4, // Shizuoka
  "23": 5, // Aichi
  "24": 4, // Mie
  "25": 4, // Shiga
  "26": 4, // Kyoto
  "27": 4, // Osaka
  "28": 4, // Hyogo
  "29": 4, // Nara
  "30": 4, // Wakayama
  "31": 4, // Tottori
  "32": 4, // Shimane
  "33": 3, // Okayama
  "34": 3, // Hiroshima
  "35": 0, // Yamaguchi
  "36": 4, // Tokushima
  "37": 4, // Kagawa
  "38": 4, // Ehime
  "39": 3, // Kochi
  "40": 4, // Fukuoka
  "41": 0, // Saga
  "42": 4, // Nagasaki
  "43": 5, // Kumamoto
  "44": 4, // Oita
  "45": 0, // Miyazaki
  "46": 3, // Kagoshima
  "47": 0, // Okinawa
};

export const scoreColors: Record<TravelScore, string> = {
  5: "#f0b2c8", // Home turf — rose
  4: "#f4ad91", // Overnight — coral
  3: "#f4d46f", // Explored — yellow
  2: "#91d49a", // Quick stop — green
  1: "#8bc9e8", // In transit — blue
  0: "#d9d6e5", // On my list — lavender
};

export const scoreDescriptions: {
  score: TravelScore;
  title: string;
  detail: string;
}[] = [
  { score: 5, title: "Home turf", detail: "A place I called home" },
  { score: 4, title: "Overnight", detail: "Spent at least one night" },
  { score: 3, title: "Explored", detail: "Had time to look around" },
  { score: 2, title: "Quick stop", detail: "Set foot there briefly" },
  { score: 1, title: "In transit", detail: "Crossed through on the way" },
  { score: 0, title: "On my list", detail: "A place to visit someday" },
];

export const prefectureNames: Record<string, string> = {
  "01": "Hokkaido",
  "02": "Aomori",
  "03": "Iwate",
  "04": "Miyagi",
  "05": "Akita",
  "06": "Yamagata",
  "07": "Fukushima",
  "08": "Ibaraki",
  "09": "Tochigi",
  "10": "Gunma",
  "11": "Saitama",
  "12": "Chiba",
  "13": "Tokyo",
  "14": "Kanagawa",
  "15": "Niigata",
  "16": "Toyama",
  "17": "Ishikawa",
  "18": "Fukui",
  "19": "Yamanashi",
  "20": "Nagano",
  "21": "Gifu",
  "22": "Shizuoka",
  "23": "Aichi",
  "24": "Mie",
  "25": "Shiga",
  "26": "Kyoto",
  "27": "Osaka",
  "28": "Hyogo",
  "29": "Nara",
  "30": "Wakayama",
  "31": "Tottori",
  "32": "Shimane",
  "33": "Okayama",
  "34": "Hiroshima",
  "35": "Yamaguchi",
  "36": "Tokushima",
  "37": "Kagawa",
  "38": "Ehime",
  "39": "Kochi",
  "40": "Fukuoka",
  "41": "Saga",
  "42": "Nagasaki",
  "43": "Kumamoto",
  "44": "Oita",
  "45": "Miyazaki",
  "46": "Kagoshima",
  "47": "Okinawa",
};
