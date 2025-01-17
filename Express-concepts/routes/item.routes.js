const express = require("express");
const { asyncHandler } = require("../middleware/errorHandler");
const router = express.Router();
const items = [
  { id: 1, name: "Air force 1", price: 10 },
  { id: 2, name: "Jordan 1", price: 20 },
  { id: 3, name: "Nike 1", price: 30 },
];

router.get(
  "/items",
  asyncHandler(async (req, res) => {
    res.json(items);
  }),
);

module.exports = router;
