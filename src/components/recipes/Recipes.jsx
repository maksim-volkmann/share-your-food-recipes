import "./recipes.scss";
import Newsletter from "../../componentHelpers/newsletter/Newsletter";
import RecipesSlider from "../../componentHelpers/recipesSlider/RecipesSlider";
import Categories from "../../componentHelpers/categories/Categories";

function Recipes() {
  return (
    <>
      <RecipesSlider title={"Popular Picks"} />
      <Categories
        title={"All Categories"}
        itemTitle1={"Breakfast"}
        itemTitle2={"Lunch"}
        itemTitle3={"Dinner"}
        itemTitle4={"Salad"}
        itemTitle5={"Dessert"}
        itemTitle6={"Appetizer"}
        btnTitle={"Browse all"}
      />
      <Newsletter
        title={"Join our newletter and get the latest recipes!"}
        btnTitle={"Send"}
      />
    </>
  );
}

export default Recipes;
