import mongoose from "mongoose";

const newSchema = mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    date: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    subDesc: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const New = mongoose.model("New", newSchema);

export default New;
