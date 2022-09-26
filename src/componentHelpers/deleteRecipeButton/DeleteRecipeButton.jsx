import './deleteRecipeButton.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useRecipesHook from '../../customHooks/useRecipesHook'
import { useState } from 'react'

const DeleteRecipeButton = ({ btnTitle }) => {
  let { id } = useParams()
  const recipeState = useRecipesHook()
  const navigate = useNavigate()
  const [del, setDel] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.delete(
        `http://localhost:5000/recipe/delete/${id}`,
        { withCredentials: true },
        setDel([...recipeState].filter((recipe) => recipe.id !== id)),
      )

      let areYouSureToDelete = prompt(
        'If you realy want to delete this recipe, please type: confirm',
      )
      if (areYouSureToDelete === 'confirm') {
        alert('Recipe successfully deleted!')
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <button class="deleteBtn" onClick={handleSubmit}>
      {btnTitle}
    </button>
  )
}

export default DeleteRecipeButton
