import "./homeBodySlider.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useRecipesHook from "../../customHooks/useRecipesHook";

const HomeBodySlider = () => {
  const recipesState = useRecipesHook();
  return (
    <div className="sliderWrapper">
      <Splide>
        {recipesState.map((recipe) => {
          return (
            <SplideSlide>
              <div className="sliderItem" key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <h2>{recipe.title}</h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default HomeBodySlider;
