import "./recipe.scss";
import useRecipesHook from "../../customHooks/useRecipesHook";
import { useParams } from "react-router-dom";
import Newsletter from "../../componentHelpers/newsletter/Newsletter";

function Recipe() {
  let { id } = useParams();
  const recipeState = useRecipesHook();

  return (
    <>
      {recipeState
        .filter((recipe) => recipe.id === Number(id))
        .map((recipe) => {
          return (
            <div className="recipeWrapper">
              <h1>{recipe.title}</h1>
              <div className="textWrapper">
                <div className="textWrap">
                  <h4>Ready In:</h4>
                  <p>{recipe.readyInMinutes + " min"}</p>
                </div>
                <div className="textWrap">
                  <h4>Servings:</h4>
                  <p>{recipe.servings}</p>
                </div>
                <div className="textWrap">
                  <h4>Calories:</h4>
                  {/* <p>{recipe.calories}</p> */}
                </div>
              </div>
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
      <Newsletter
        title={"Join our newletter and get the latest recipes!"}
        btnTitle={"Send"}
      />
    </>
  );
}
export default Recipe;
