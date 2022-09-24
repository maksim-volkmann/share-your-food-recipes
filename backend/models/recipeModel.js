import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: true,
    },
    // mainImage: {
    //   type: String,
    //   required: true,
    // },
    // image2: {
    //   type: String,
    //   required: true,
    // },
    // image3: {
    //   type: String,
    //   required: true,
    // },
    servings: {
      type: Number,
      required: true,
    },
    // readyin: {
    //   type: String,
    //   required: true,
    // },
    calories: {
      type: Number,
      required: true,
    },
    goodFor: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    // ingredients: {
    //   type: [{ quantity: String, product: String }],
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("recipe", recipeSchema);
