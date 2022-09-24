import "./newRecipeForm.scss";
import { useState } from "react";

const NewRecipeForm = ({ optionTitle, option1, option2, option3, option4 }) => {
  const [newRecipe, setNewRecipe] = useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  console.log("NEw", newRecipe);

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <>
      <form onSubmit={handleSubmit} action="" method="post">
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
        <input
          onChange={handleChange}
          type="text"
          name="description1"
          placeholder="Summary"
          value={description1}
        />
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
        <input
          onChange={handleChange}
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={ingredients}
        />
        <input
          onChange={handleChange}
          type="text"
          name="description2"
          placeholder="Instructions"
          value={description2}
        />
        <input type="submit" value="Submit" />
      </form>
      <div>{JSON.stringify(newRecipe)}</div>
    </>
  );
};

export default NewRecipeForm;
