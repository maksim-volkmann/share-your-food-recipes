import './editRecipe.scss'
import { useParams } from 'react-router-dom'
import useRecipesHook from '../../customHooks/useRecipesHook.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditRecipe = () => {
  let { id } = useParams()
  const recipeState = useRecipesHook()
  const url = 'http://localhost:5000/recipe/update/632fbfc83d1a302f30dd21f7'

  const [updateInfo, setUpdateInfo] = useState()

  const onChangeHandler = (e) => {
    setUpdateInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onClickHandler = async (req, res) => {
    try {
      console.log(updateInfo)
      const response = await axios.put(url, updateInfo, {
        withCredentials: true,
      })
      // await userLoggedInInfo()
      // history('/')
      console.log(req)
      console.log(res)
      console.log(`res: `)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      alert('Wrong email or password')
    }
  }

  return (
    <>
      {recipeState
        .filter((recipeID) => recipeID._id === id)
        .map((recipe) => {
          return (
            <>
              <input
                defaultValue={recipe.name}
                type="text"
                onChange={onChangeHandler}
              />
              <input value="submit" type="submit" onClick={onClickHandler} />
            </>
          )
        })}
    </>
  )
}

export default EditRecipe
