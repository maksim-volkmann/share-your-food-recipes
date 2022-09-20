import { useState, useEffect } from "react";
import mockData from "../mock/mockData";

function useRecipesHook() {
  const [recipesState, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        // const data = await axios
        //   .get(
        //     // `https://api.spoonacular.com/recipes/random?apiKey=${env.API_KEY}&number=7`,
        //     // { mode: "no-cors" }
        //   )
        //   .then((response) => {
        //     const recipes = response.data.recipes;
        //     setRecipes(recipes);
        //     console.log("recipes", recipes);
        //   });
        const data = mockData;
        const recipes = data.recipes;
        setRecipes(recipes);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipes();
  }, []);

  return recipesState;
}

export default useRecipesHook;