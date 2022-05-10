const queryGenerator = (db) => {
  const getCategories = async () => {
    const queryString = `
      SELECT name FROM categories
      ;`;

    try {
      const { rows } = await db.query(queryString);
      return rows;
    } catch (e) {
      throw e;
    }
  };

  return { getCategories };
};

module.exports = queryGenerator;
