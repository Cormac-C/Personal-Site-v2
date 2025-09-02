export const isProjectOutdated = (endDate: string): boolean => {
  const dateDiff = new Date().getTime() - new Date(endDate).getTime();
  // Project is out of date if the end date is more than 6 months ago
  return dateDiff > 1000 * 60 * 60 * 24 * 30 * 6;
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
