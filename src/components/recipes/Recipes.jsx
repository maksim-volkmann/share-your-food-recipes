import "./recipes.scss";
import Newsletter from "../../componentHelpers/newsletter/Newsletter";
import RecipesSlider from "../../componentHelpers/recipesSlider/RecipesSlider";
import Categories from "../../componentHelpers/categories/Categories";
import DisplayNewRecipe from "../../componentHelpers/displayNewRecipe/DisplayNewRecipe";

function Recipes() {
  return (
    <>
      <DisplayNewRecipe
        titleLeft="NEW1"
        dateLeft="Date"
        authorLeft="Author"
        descriptionLeft="Short Recipe Summary"
        imageLeft="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
        titleRight="NEW2"
        dateRight="Date"
        authorRight="Author"
        descriptionRight="Short Recipe Summary"
        imageRight="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
        
      />
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
