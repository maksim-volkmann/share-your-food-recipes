import './allRecipes.scss'
import useRecipesHook from '../../customHooks/useRecipesHook'

const AllRecipes = () => {
  const recipeState = useRecipesHook()
  const recipeUrl = 'recipe/'
  return (
    <div className="allRecipes">
      <h1>ALL YOUR FAVORITE RECIPES</h1>
      <div className="allRecipesWrapper">
        {recipeState.map((recipe) => {
          return (
            <div className="allRecipes__box">
              <img src={recipe.mainImage} />
              <h3>{recipe.name}</h3>
              <a href={recipeUrl + recipe._id}>Make This</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllRecipes
