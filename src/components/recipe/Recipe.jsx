import './recipe.scss'
import useRecipesHook from '../../customHooks/useRecipesHook.js'
import { useParams } from 'react-router-dom'
import DeleteRecipeButton from '../../componentHelpers/deleteRecipeButton/DeleteRecipeButton'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import LoggedContext from '../../context/LoggedInChecker'

function Recipe() {
  const { isLoggedIn } = useContext(LoggedContext)
  let { id } = useParams()
  const recipeState = useRecipesHook()
  const navigate = useNavigate()

  return (
    <>
      {recipeState
        .filter((recipeID) => recipeID._id === id)
        .map((recipe) => {
          return (
            <>
              {isLoggedIn === true && (
                <>
                  <div className="update-delete-box">
                    <button
                      className="updateBtn"
                      onClick={() => navigate('/update/' + recipe._id)}
                    >
                      UPDATE
                    </button>
                    <DeleteRecipeButton btnTitle="Delete" />
                  </div>
                </>
              )}

              <div className="recipeWrapper recipeBigText">
                <h1>{recipe.name}</h1>
                <div className="textWrapper">
                  <div className="textWrap">
                    <h4>Servings:</h4>
                    <p>{recipe.servings}</p>
                  </div>
                  <div className="textWrap">
                    <h4>Ready In:</h4>
                    <p>{recipe.readyIn}</p>
                  </div>
                  <div className="textWrap">
                    <h4>Calories:</h4>
                    <p>{recipe.calories}</p>
                  </div>
                  <div className="textWrap">
                    <h4>Good For:</h4>
                    <p>{recipe.goodFor}</p>
                  </div>
                </div>
                <div className="introduction">
                  <div className="introductionWrapper intro-text">
                    <h2>{recipe.name}</h2>
                    <h4>By: {recipe.author}</h4>
                    <p>{recipe.description1}</p>
                  </div>
                  <div className="introductionWrapper">
                    <div className="intro-image">
                      <img src={recipe.mainImage} alt={recipe.name} />
                    </div>
                  </div>
                </div>
                <div className="recipeInfo">
                  <div className="recipeIngredients">
                    <h2>Ingredients</h2>
                    <ul className="ingrList">
                      {recipe.ingredients.split(',').map((ingr) => {
                        return <li>{ingr}</li>
                      })}
                    </ul>
                  </div>
                  <div className="recipeInstructions">
                    <p>{recipe.description2}</p>
                  </div>
                </div>
                <div className="images-box">
                  <div className="image-box-wrapper">
                    <div className="image-container">
                      <img src={recipe.image2} alt={recipe.name} />
                    </div>
                    <div className="image-container">
                      <img src={recipe.image3} alt={recipe.name} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
    </>
  )
}
export default Recipe
