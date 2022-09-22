import "./recipesSlider.scss";
import useRecipesHook from "../../customHooks/useRecipesHook";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const RecipesSlider = ({ title }) => {
  const recipesState = useRecipesHook();
  return (
    <div className="recipesSliderContainer">
      <h1>{title}</h1>
      <div className="recipesWrapper">
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            rewind: true,
            pagination: false,
            gap: "0.5rem",
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
      </div>
    </div>
  );
};

export default RecipesSlider;
