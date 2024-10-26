import { LunarAgeBounds, MoonPhaseEmoji } from "./lunarenums";

// Guides used:
// https://jasonsturges.medium.com/moons-lunar-phase-in-javascript-a5219acbfe6e
// https://stackoverflow.com/questions/11759992/calculating-jdayjulian-day-in-javascript
// The 2nd link explains one of the constants, 2440587.5, pretty well

export const isFullMoon = (date: Date = new Date()): boolean => {
  const age = getLunarAge(date);
  return age >= LunarAgeBounds.WAXING_GIBBOUS && age < LunarAgeBounds.FULL_MOON;
};

export const getMoonPhaseEmoji = (date: Date = new Date()): string => {
  const age = getLunarAge(date);

  if (age < LunarAgeBounds.NEW_MOON) {
    return MoonPhaseEmoji.NEW_MOON;
  } else if (age < LunarAgeBounds.WAXING_CRESCENT) {
    return MoonPhaseEmoji.WAXING_CRESCENT;
  } else if (age < LunarAgeBounds.FIRST_QUARTER) {
    return MoonPhaseEmoji.FIRST_QUARTER;
  } else if (age < LunarAgeBounds.WAXING_GIBBOUS) {
    return MoonPhaseEmoji.WAXING_GIBBOUS;
  } else if (age < LunarAgeBounds.FULL_MOON) {
    return MoonPhaseEmoji.FULL_MOON;
  } else if (age < LunarAgeBounds.WANING_GIBBOUS) {
    return MoonPhaseEmoji.WANING_GIBBOUS;
  } else if (age < LunarAgeBounds.LAST_QUARTER) {
    return MoonPhaseEmoji.LAST_QUARTER;
  } else if (age < LunarAgeBounds.WANING_CRESCENT) {
    return MoonPhaseEmoji.WANING_CRESCENT;
  }
  return MoonPhaseEmoji.NEW_MOON;
};

const LUNAR_MONTH_EARTH_DAYS = 29.53059;
const MS_IN_DAY = 86400000;
const MINS_IN_DAY = 1440;
const FIRST_JULIAN_DATE = 2440587.5;
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
