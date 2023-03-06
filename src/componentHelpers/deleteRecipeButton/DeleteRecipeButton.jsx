import './deleteRecipeButton.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useRecipesHook from '../../customHooks/useRecipesHook'
import { useState } from 'react'
import env from 'react-dotenv'

const DeleteRecipeButton = ({ btnTitle }) => {
  let { id } = useParams()
  const recipeState = useRecipesHook()
  const navigate = useNavigate()
  const [del, setDel] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        const res = await axios.delete(
          env.API_LINK + `/recipe/delete/${id}`,
          { withCredentials: true },
          setDel([...recipeState].filter((recipe) => recipe.id !== id))
        );
        alert("Recipe successfully deleted!")
        navigate("/")
      } catch (error) {
        alert("You can't delete this recipe, its not yours!")
      }
    }
  }
  return (
    <button class="deleteBtn" onClick={handleSubmit}>
      {btnTitle}
    </button>
  )
}

export default DeleteRecipeButton
