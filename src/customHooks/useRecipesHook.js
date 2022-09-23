import { useState, useEffect } from 'react'
import mockData from '../mock/mockData.js'

function useRecipesHook() {
  const [recipesState, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        console.log('recipe hook')
        console.log(mockData)
        const data = mockData
        const recipes = data.recipes
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
