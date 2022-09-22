import "./recipes.scss";
import useRecipesHook from "../../customHooks/useRecipesHook";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Newsletter from "../../componentHelpers/newsletter/Newsletter";

function Recipes() {
  const recipesState = useRecipesHook();

  return (
    <div className="recipesWrapper">
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {recipesState.map((recipe) => {
          return (
            <SplideSlide>
              <div className="recipe" key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <Newsletter
        title={"Join our newletter and get the latest recipes!"}
        btnTitle={"Send"}
      />
    </div>
  );
}

export default Recipes;
