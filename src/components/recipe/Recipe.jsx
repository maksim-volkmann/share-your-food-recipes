import "./recipe.scss";
import { useState, useEffect } from "react";
import mockData from "../../mock/mockData";
import { useParams } from "react-router-dom";

function Recipe() {
  console.log("USE", useParams());
  let { id } = useParams();

  const [recipeState, setRecipe] = useState([]);

  useEffect(() => {
    const getRecipe = () => {
      try {
        const data = mockData;
        console.log("mockData ", data);
        const recipe = data.recipes.filter(
          (recipe) => recipe.id === Number(id)
        );
        console.log("recipeById ", recipe);
        setRecipe(recipe);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipe();
  }, []);

  return (
    <>
      {recipeState.map((recipe) => {
        return (
          <div className="recipeWrapper">
            <h1>{recipe.title}</h1>
            <div className="recipeIntro">
              <img src={recipe.image} alt={recipe.title} />
              <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            </div>
            <div className="recipeInfo">
              <div className="recipeIngredients">
                <h2>Ingredients</h2>
                <p>
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </p>
              </div>
              <div className="recipeInstructions">
                <h2>Instructions</h2>
                <p
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                ></p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Recipe;
