import './newRecipeForm.scss'
import { useCallback, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import env from 'react-dotenv'

const NewRecipeForm = ({ optionTitle, option1, option2, option3, option4 }) => {
  const [newRecipe, setNewRecipe] = useState([])
  const history = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        env.API_LINK + '/recipe/create',
        {
          recipe: newRecipe,
        },
        { withCredentials: true },
      )
      alert(`New recipe ${newRecipe.name} was successfully created!`)
      history(0)
      console.log(newRecipe)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = useCallback((event) => {
    let { name, value } = event.target
    if (name === 'servings') {
      value = Number(value)
    }
    if (name === 'calories') {
      value = Number(value)
    }

    setNewRecipe((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }, [])

  const {
    name,
    description1,
    servings,
    calories,
    readyIn,
    goodFor,
    ingredients,
    description2,
    mainImage,
    image2,
    image3,
  } = newRecipe

  return (
    <div className="newRecipeFormContainer">
      <h1>CREATE NEW RECIPE</h1>
      <div className="newRecipeFormWrapper">
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="newRecipeFormContent">
            <div className="newRecipeItem1">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Recipe title"
                value={name}
                required
              />
            </div>
            <div className="newRecipeItem2">
              <textarea
                onChange={handleChange}
                type="text"
                name="description1"
                placeholder="Summary"
                value={description1}
                required
              />
            </div>
            <div className="newRecipeItem3">
              <input
                onChange={handleChange}
                type="number"
                name="servings"
                placeholder="Servings"
                value={servings}
                required
              />
              <input
                onChange={handleChange}
                type="number"
                name="calories"
                placeholder="Calories"
                value={calories}
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="readyIn"
                placeholder="Ready In"
                value={readyIn}
                required
              />
              <select
                onChange={handleChange}
                type="text"
                name="goodFor"
                placeholder="Select good for"
                value={goodFor}
                required
              >
                <option value="">{optionTitle}</option>
                <option key="breakfast" value="breakfast">
                  {option1}
                </option>
                <option key="lunch" value="lunch">
                  {option2}
                </option>
                <option key="dinner" value="dinner">
                  {option3}
                </option>
                <option key="snack" value="snack">
                  {option4}
                </option>
              </select>
            </div>
            <div className="newRecipeItem4">
              <input
                onChange={handleChange}
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                value={ingredients}
                required
              />
            </div>
            <div className="newRecipeItem5">
              <textarea
                onChange={handleChange}
                type="text"
                name="description2"
                placeholder="Instructions"
                value={description2}
                required
              />
            </div>
            <div className="newRecipeItem6">
              <input
                onChange={handleChange}
                type="text"
                name="mainImage"
                placeholder="Main images URL"
                value={mainImage}
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="image2"
                placeholder="Second images URL"
                value={image2}
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="image3"
                placeholder="Third images URL"
                value={image3}
                required
              />
            </div>
            <input id="submitBtn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewRecipeForm
