import recipeModel from "../models/recipeModel.js";

export const createRecipe = async (req, res) => {
  try {
    console.log("Received ADD RECIPE request");
    const newRecipe = new recipeModel({
      ...req.body.recipe,
    });
    await newRecipe.save();
    res.status(201).send("New recipe is created!");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};
