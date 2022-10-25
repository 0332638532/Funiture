import express from "express";
import asyncHandler from "express-async-handler";
import New from "../Models/NewModel.js";

const newRouter = express.Router();

//get all new
newRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const news = await New.find({});
    res.json({ news });
  })
);

// get detail new
newRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const newItem = await New.findById(req.params.id);
    if (newItem) {
      res.json(newItem);
    } else {
      res.status(404);
      throw new Error("New not found");
    }
  })
);

export default newRouter;
