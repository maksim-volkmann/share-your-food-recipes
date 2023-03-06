import { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

function useRecipesHook() {
  const [recipesState, setRecipes] = useState([])
  const url = env.API_LINK + '/recipe/get'

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipesData = await axios.get(url)
        const recipes = recipesData.data
        setRecipes(recipes)
      } catch (error) {
        console.error(error)
      }
    }
    getRecipes()
  }, [])

  return recipesState
}

export default useRecipesHook
