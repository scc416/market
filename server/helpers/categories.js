const getCategoriesName = (raw) => {
  const result = [];

  for (const { name } of raw) {
    result.push(name);
  }

  return result;
};

module.exports = { getCategoriesName };
