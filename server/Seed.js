import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import products from "./data/products.js";
import Product from "./Models/ProductModel.js";
import news from "./data/news.js";
import New from "./Models/NewModel.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});

    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});

    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

ImportData.post(
  "/news",
  asyncHandler(async (req, res) => {
    await New.remove({});

    const importNews = await New.insertMany(news);
    res.send({ importNews });
  })
);

export default ImportData;
