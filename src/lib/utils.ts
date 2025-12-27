export const isProjectOutdated = (endDate: string): boolean => {
  const dateDiff = new Date().getTime() - new Date(endDate).getTime();
  const OUTDATED_NUMBER_OF_MONTHS = 12;
  return dateDiff > 1000 * 60 * 60 * 24 * 30 * OUTDATED_NUMBER_OF_MONTHS;
};

export const getColorSchemePreference = () => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
};
