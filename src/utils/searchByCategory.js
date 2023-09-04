export const searchByCategory = (data, category) => {
  return data.filter((data) => data.category === category);
};

export const searchIfIsBookmarked = (data) => {
  return data.filter((data) => data.isBookmarked);
};
