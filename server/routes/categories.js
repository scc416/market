const express = require("express");
const router = express.Router();
const queryGenerator = require("../database/helpers/categories");
const { getCategoriesName } = require("../helpers/categories");

module.exports = (db) => {
  const { getCategories } = queryGenerator(db);

  router.get("/", async (req, res, next) => {
    try {
      const raw = await getCategories();
      const result = getCategoriesName(raw);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
