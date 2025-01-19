const express = require("express");
const { asyncHandler, APIError } = require("../middleware/errorHandler");
const router = express.Router();
let items = [
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
router.post(
  "/items",
  asyncHandler(async (req, res) => {
    if (!req.body.name) {
      throw new APIError("Item name is required", 400);
    } else {
      const newItem = {
        id: items.length + 1,
        name: req.body.name,
        price: req.body.price,
      };
      items.push(newItem);

      res.status(200).json(newItem);
    }
  }),
);

router.delete(
  "/items/:name",
  asyncHandler(async (req, res) => {
    const itemName = req.params.name;
    if (!req.params.name) {
      throw new APIError("Item name is required", 400);
    } else {
      const index = items.findIndex((items) => items.name === itemName);
      if (index === -1) {
        throw new APIError("Item name is not found", 404);
      } else {
        const deletedItem = items.splice(index, 1);
        res.status(200).json(deletedItem);
      }
    }
  }),
);

router.put(
  "/items/:id",
  asyncHandler(async (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    if (!req.params.id) {
      throw new APIError("Id is required", 400);
    } else {
      const index = items.findIndex((items) => items.id === itemId);
      if (index === -1) {
        throw new APIError("Item id is not found", 404);
      } else {
        const updatedItem = {
          id: items[index].id,
          name: req.body.name,
          price: req.body.price,
        };
        items[index] = updatedItem;
        res.status(200).json(updatedItem);
      }
    }
  }),
);
module.exports = router;
