import './allRecipes.scss'
import useRecipesHook from '../../customHooks/useRecipesHook'

const AllRecipes = ({ title, linkTitle }) => {
  const recipeState = useRecipesHook()
  const recipeUrl = 'recipe/'
  return (
    <div className="allRecipes">
      <h1>{title}</h1>
      <div className="allRecipesWrapper">
        {recipeState.map((recipe, i) => {
          return (
            <div key={i} className="allRecipes__box">
              <img src={recipe.mainImage} />
              <h3>{recipe.name}</h3>
              <a href={recipeUrl + recipe._id}>{linkTitle}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllRecipes
