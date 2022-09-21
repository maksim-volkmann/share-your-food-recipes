import "./homeBodySlider.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useRecipesHook from "../../customHooks/useRecipesHook";

const HomeBodySlider = ({
  sliderTitle,
  author,
  date,
  category,
  summary,
  btnTitle,
}) => {
  const recipesState = useRecipesHook();
  return (
    <div className="sliderContainer">
      <h1>{sliderTitle}</h1>
      <div className="sliderWrapper">
        <Splide>
          {recipesState.map((recipe) => {
            return (
              <SplideSlide>
                <div className="sliderItem" key={recipe.id}>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="slideContent">
                    <h2>{recipe.title}</h2>
                    <p>
                      {"by "}
                      <span className="author">{author}</span>
                      {" | "}
                      <span className="date">{date}</span>
                      {" | "}
                      <span className="category">{category}</span>
                    </p>
                    <h3>{summary}</h3>
                    <button>{btnTitle}</button>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default HomeBodySlider;
