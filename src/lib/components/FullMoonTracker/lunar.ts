// Guides used:
// https://jasonsturges.medium.com/moons-lunar-phase-in-javascript-a5219acbfe6e
// https://stackoverflow.com/questions/11759992/calculating-jdayjulian-day-in-javascript
// The 2nd link explains one of the constants, 2440587.5, pretty well

// Boundaries for checking if current moon phase is a full moon
export const HIGHER_THRESHOLD_DAYS = 16.61095558449;
export const LOWER_THRESHOLD_DAYS = 12.91963212127;

// Moon phases are same in both hemipsheres; however, the angles are flipped.
// For example, if the current moon phase is a last quarter, the visible moon is on the right side.
// But in the southern hemisphere, the visible moon is on the left side.
// Source: https://science.nasa.gov/moon/top-moon-questions/

enum NorthernHemisphereMoonPhaseEmoji {
  NEW_MOON = "🌑",
  WAXING_CRESCENT = "🌒",
  FIRST_QUARTER = "🌓",
  WAXING_GIBBOUS = "🌔",
  FULL_MOON = "🌕",
  WANING_GIBBOUS = "🌖",
  LAST_QUARTER = "🌗",
  WANING_CRESCENT = "🌘"
}

enum SouthernHemisphereMoonPhaseEmoji {
  NEW_MOON = "🌑",
  WAXING_CRESCENT = "🌘",
  FIRST_QUARTER = "🌗",
  WAXING_GIBBOUS = "🌖",
  FULL_MOON = "🌕",
  WANING_GIBBOUS = "🌔",
  LAST_QUARTER = "🌓",
  WANING_CRESCENT = "🌒"
}

enum LunarAgeBounds {
  NEW_MOON = 1.84566,
  WAXING_CRESCENT = 5.53699,
  FIRST_QUARTER = 9.22831,
  WAXING_GIBBOUS = 12.91963,
  FULL_MOON = 16.61096,
  WANING_GIBBOUS = 20.30228,
  LAST_QUARTER = 23.99361,
  WANING_CRESCENT = 27.68493
}

export const isFullMoon = (date: Date = new Date()): boolean => {
  const age = getLunarAge(date);
  return age >= LOWER_THRESHOLD_DAYS && age < HIGHER_THRESHOLD_DAYS;
};

export const getMoonPhaseEmoji = (date: Date = new Date()): string => {
  const age = getLunarAge(date);

  if (age < LunarAgeBounds.NEW_MOON) {
    return NorthernHemisphereMoonPhaseEmoji.NEW_MOON;
  } else if (age < LunarAgeBounds.WAXING_CRESCENT) {
    return NorthernHemisphereMoonPhaseEmoji.WAXING_CRESCENT;
  } else if (age < LunarAgeBounds.FIRST_QUARTER) {
    return NorthernHemisphereMoonPhaseEmoji.FIRST_QUARTER;
  } else if (age < LunarAgeBounds.WAXING_GIBBOUS) {
    return NorthernHemisphereMoonPhaseEmoji.WAXING_GIBBOUS;
  } else if (age < LunarAgeBounds.FULL_MOON) {
    return NorthernHemisphereMoonPhaseEmoji.FULL_MOON;
  } else if (age < LunarAgeBounds.WANING_GIBBOUS) {
    return NorthernHemisphereMoonPhaseEmoji.WANING_GIBBOUS;
  } else if (age < LunarAgeBounds.LAST_QUARTER) {
    return NorthernHemisphereMoonPhaseEmoji.LAST_QUARTER;
  } else if (age < LunarAgeBounds.WANING_CRESCENT) {
    return NorthernHemisphereMoonPhaseEmoji.WANING_CRESCENT;
  }
  return NorthernHemisphereMoonPhaseEmoji.NEW_MOON;
};

const LUNAR_MONTH_EARTH_DAYS = 29.53059;
const MS_IN_DAY = 86400000;
const MINS_IN_DAY = 1440;
const FIRST_JULIAN_DATE = 2440587.5;
export const FULL_MOON_EMOJI = "🌕";
const NEW_MOON_JAN_6_2000_JULIAN_DATE = 2451550.1;

const getJulianDate = (date: Date = new Date()): number => {
  return date.getTime() / MS_IN_DAY - date.getTimezoneOffset() / MINS_IN_DAY + FIRST_JULIAN_DATE;
};

export const getLunarAge = (date: Date = new Date()): number => {
  return getLunarAgePercent(date) * LUNAR_MONTH_EARTH_DAYS;
};

export const getLunarAgePercent = (date: Date = new Date()): number => {
  // Source for info on the below constant: https://programmingpraxis.com/2010/01/22/phases-of-the-moon/
  return normalize(
    (getJulianDate(date) - NEW_MOON_JAN_6_2000_JULIAN_DATE) / LUNAR_MONTH_EARTH_DAYS
  );
};

const normalize = (value: number): number => {
  const v = value - Math.floor(value);
  return value < 0 ? v + 1 : v;
};
