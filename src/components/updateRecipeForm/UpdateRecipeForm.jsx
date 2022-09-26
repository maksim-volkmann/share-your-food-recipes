import '../newRecipeForm/newRecipeForm.scss'
import { useCallback, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import useRecipesHook from '../../customHooks/useRecipesHook'

const UpdateRecipeForm = ({
  optionTitle,
  option1,
  option2,
  option3,
  option4,
}) => {
  let { id } = useParams()
  const recipes = useRecipesHook()
  const [recipeUpdate, setRecipeUpdate] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(
        `http://localhost:5000/recipe/update/${id}`,
        {
          ...recipeUpdate,
        },
        { withCredentials: true },
      )
      console.log(res)
      alert(`You successfuly updated your recipe!`)
    } catch (error) {
      alert("This is not your recipe. You can't update it!")
      console.error(error)
    }

    console.log('UPDATED', recipeUpdate)
  }

  const handleChange = useCallback((event) => {
    let { name, value } = event.target
    if (name === 'servings') {
      value = Number(value)
    }
    if (name === 'calories') {
      value = Number(value)
    }

    setRecipeUpdate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }, [])

  return (
    <>
      {recipes
        .filter((recipeID) => recipeID._id === id)
        .map((recipe) => {
          return (
            <>
              <div className="newRecipeFormContainer">
                <h1>UPDATING RECIPE: {recipe.name}</h1>
                <div className="newRecipeFormWrapper">
                  <form
                    onSubmit={handleSubmit}
                    action=""
                    method="put"
                    key={recipe.id}
                  >
                    <div className="newRecipeFormContent">
                      <div className="newRecipeItem1">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="name"
                          placeholder="Recipe title"
                          defaultValue={recipe.name}
                        />
                      </div>
                      <div className="newRecipeItem2">
                        <textarea
                          onChange={handleChange}
                          type="text"
                          name="description1"
                          placeholder="Summary"
                          defaultValue={recipe.description1}
                        />
                      </div>
                      <div className="newRecipeItem3">
                        <input
                          onChange={handleChange}
                          type="number"
                          name="servings"
                          placeholder="Servings"
                          defaultValue={recipe.servings}
                        />
                        <input
                          onChange={handleChange}
                          type="number"
                          name="calories"
                          placeholder="Calories"
                          defaultValue={recipe.calories}
                        />
                        <input
                          onChange={handleChange}
                          type="string"
                          name="readyIn"
                          placeholder="Ready In"
                          defaultValue={recipe.readyIn}
                        />
                        <select
                          onChange={handleChange}
                          type="text"
                          name="goodFor"
                          placeholder="Select good for"
                          defaultValue={recipe.goodFor}
                        >
                          <option>{optionTitle}</option>
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
                          defaultValue={recipe.ingredients}
                        />
                      </div>
                      <div className="newRecipeItem5">
                        <textarea
                          onChange={handleChange}
                          type="text"
                          name="description2"
                          placeholder="Instructions"
                          defaultValue={recipe.description2}
                        />
                      </div>

                      <div className="newRecipeItem6">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="mainImage"
                          placeholder="Write images URL"
                          defaultValue={recipe.mainImage}
                        />
                        <input
                          onChange={handleChange}
                          type="text"
                          name="image2"
                          placeholder="Write images URL"
                          defaultValue={recipe.image2}
                        />
                        <input
                          onChange={handleChange}
                          type="text"
                          name="image3"
                          placeholder="Write images URL"
                          defaultValue={recipe.image3}
                        />
                      </div>
                      <input id="submitBtn" type="submit" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </>
          )
        })}
    </>
  )
}

export default UpdateRecipeForm
