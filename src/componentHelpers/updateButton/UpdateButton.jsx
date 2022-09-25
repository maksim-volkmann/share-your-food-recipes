import useRecipesHook from "../../customHooks/useRecipesHook";
import { useParams } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const UpdateButton = () => {
  let { id } = useParams();
  const recipeState = useRecipesHook();
  recipeState
    .filter((recipeID) => recipeID._id === id)
    .map((recipe) => {
      if (recipe.id === recipe.id) return <button>Update</button>;
    });
};

export default UpdateButton;
