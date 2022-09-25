import './recipe.scss'
import useRecipesHook from '../../customHooks/useRecipesHook.js'
import { useParams } from 'react-router-dom'
import Newsletter from '../../componentHelpers/newsletter/Newsletter'

function Recipe() {
  let { id } = useParams()
  const recipeState = useRecipesHook()
  console.log('SINGLE RECIPE')
  // console.log(id)
  console.log(recipeState)

  const test1 = recipeState
    .filter((recipeID) => recipeID._id === id)
    .map((recipe) => {
      return (
        <>
          <div className="recipeWrapper">
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
              <div className="introductionWrapper">
                <h2>{recipe.name}</h2>
                <h4>By: {recipe.author}</h4>
                <p>{recipe.description1}</p>
              </div>
              <div className="introductionWrapper">
                <img src={recipe.mainImage} alt={recipe.name} />
              </div>
            </div>
          </div>
        </>
      )
    })

  return (
    <>
      <div>{test1}</div>
      {recipeState
        .filter((recipeID) => recipeID._id === Number(id))
        .map((recipe) => {
          return (
            <div className="recipeWrapper">
              <h1>{recipe.name}</h1>
              <div className="textWrapper">
                <div className="textWrap">
                  <h4>Ready In:</h4>
                  <p>{recipe.readyInMinutes + ' min'}</p>
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
          )
        })}
      <Newsletter
        title={'Join our newletter and get the latest recipes!'}
        btnTitle={'Send'}
      />
    </>
  )
}
export default Recipe
