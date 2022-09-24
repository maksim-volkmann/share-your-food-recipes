import "./newRecipeForm.scss";
import { useCallback, useState } from "react";
import axios from "axios";

const NewRecipeForm = ({ optionTitle, option1, option2, option3, option4 }) => {
  const [newRecipe, setNewRecipe] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/addRecipe", { recipe: newRecipe});
    console.log(res)
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = useCallback((event) => {
    let { name, value } = event.target;
    if (name === "servings") {
      value = Number(value);
    }
    if (name === "calories") {
      value = Number(value);
    }
    
    setNewRecipe((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }, []);

  const {
    author,
    recipeName,
    description1,
    servings,
    calories,
    goodFor,
    ingredients,
    description2,
  } = newRecipe;

  return (
    <div className="newRecipeFormContainer">
      <div className="newRecipeFormWrapper">
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="newRecipeFormContent">
            <div className="newRecipeItem1">
              <input
                onChange={handleChange}
                type="text"
                name="author"
                placeholder="Your name"
                value={author}
              />
              <input
                onChange={handleChange}
                type="text"
                name="recipeName"
                placeholder="Recipe title"
                value={recipeName}
              />
            </div>
            <div className="newRecipeItem2">
              <textarea
                onChange={handleChange}
                type="text"
                name="description1"
                placeholder="Summary"
                value={description1}
              />
            </div>
            <div className="newRecipeItem3">
              <input
                onChange={handleChange}
                type="number"
                name="servings"
                placeholder="Servings"
                value={servings}
              />
              <input
                onChange={handleChange}
                type="number"
                name="calories"
                placeholder="Calories"
                value={calories}
              />
              <select
                onChange={handleChange}
                type="text"
                name="goodFor"
                placeholder="Select good for"
                value={goodFor}
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
                value={ingredients}
              />
            </div>
            <div className="newRecipeItem5">
              <textarea
                onChange={handleChange}
                type="text"
                name="description2"
                placeholder="Instructions"
                value={description2}
              />
            </div>
            <input id="submitBtn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipeForm;
