// Moon phases are same in both hemipsheres; however, the angles are flipped.
// For example, if the current moon phase is a last quarter, the visible moon is on the right side.
// But in the southern hemisphere, the visible moon is on the left side.
// Source: https://science.nasa.gov/moon/top-moon-questions/
// Though for implementation,
// it is not possible to determine the user's hemisphere without the use of geolocation. I would not
// want to use geolocation to keep website permissions as low as possible

export enum MoonPhaseEmoji {
  NEW_MOON = "🌑",
  WAXING_CRESCENT = "🌒",
  FIRST_QUARTER = "🌓",
  WAXING_GIBBOUS = "🌔",
  FULL_MOON = "🌕",
  WANING_GIBBOUS = "🌖",
  LAST_QUARTER = "🌗",
  WANING_CRESCENT = "🌘"
}

export enum LunarAgeBounds {
  NEW_MOON = 1.84566,
  WAXING_CRESCENT = 5.53699,
  FIRST_QUARTER = 9.22831,
  WAXING_GIBBOUS = 12.91963,
  FULL_MOON = 16.61096,
  WANING_GIBBOUS = 20.30228,
  LAST_QUARTER = 23.99361,
  WANING_CRESCENT = 27.68493
}
