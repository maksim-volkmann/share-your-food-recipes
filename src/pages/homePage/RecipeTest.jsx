import { useEffect, useState } from 'react'
import axios from 'axios'

const RecipeTest = () => {
  const [dataState, setDataState] = useState(0)
  const url = 'http://localhost:5000/recipe/get'

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(url)
        console.log(data)
        setDataState(data)
      } catch (error) {
        console.log(error)
      }
    }
    response()
    console.log('RECIPE TEST')
  }, [])
  return
}

export default RecipeTest
