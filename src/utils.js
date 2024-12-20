export const isProjectOutdated = (endDate) => {
  const dateDiff = new Date() - new Date(endDate);
  // Project is out of date if the end date is more than 6 months ago
  return dateDiff > 1000 * 60 * 60 * 24 * 30 * 6;
};
