import "./recipes.scss";

import Newsletter from "../../componentHelpers/newsletter/Newsletter";
import RecipesSlider from "../../componentHelpers/recipesSlider/RecipesSlider";

function Recipes() {
  return (
    <>
      <RecipesSlider title={"Popular Picks"} />
      <Newsletter
        title={"Join our newletter and get the latest recipes!"}
        btnTitle={"Send"}
      />
    </>
  );
}

export default Recipes;
