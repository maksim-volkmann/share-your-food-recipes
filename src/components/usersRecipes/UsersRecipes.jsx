import { useState, useEffect } from 'react'
import axios from 'axios'

const UsersRecipes = () => {
  const [recipesState, setRecipes] = useState([])
  const url = 'http://localhost:5000/recipe/byuser'

  useEffect(() => {
    const getRecipesByUser = async () => {
      try {
        console.log('get recipes by user HOOK')
        const recipesData = await axios.get(url)
        console.log(recipesData)
        const recipes = recipesData.data
        setRecipes(recipes)
      } catch (error) {
        console.error(error)
      }
    }
    getRecipesByUser()
  }, [])

  return (
    <div>
      <div>There should be a recipe</div>
      <div>{recipesState}</div>
    </div>
  )
}

export default UsersRecipes
