// Guides used:
// https://jasonsturges.medium.com/moons-lunar-phase-in-javascript-a5219acbfe6e
// https://stackoverflow.com/questions/11759992/calculating-jdayjulian-day-in-javascript
// The 2nd link explains one of the constants, 2440587.5, pretty well

export const HIGHER_THRESHOLD_DAYS = 16.61095558449;
export const LOWER_THRESHOLD_DAYS = 12.91963212127;

export const isFullMoon = (date: Date = new Date()): boolean => {
  const age = getLunarAge(date);
  return age >= LOWER_THRESHOLD_DAYS && age < HIGHER_THRESHOLD_DAYS;
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
