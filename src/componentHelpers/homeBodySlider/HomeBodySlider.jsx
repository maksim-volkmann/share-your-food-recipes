import "./homeBodySlider.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useRecipesHook from "../../customHooks/useRecipesHook";
import { useNavigate } from "react-router-dom";

const HomeBodySlider = ({
  sliderTitle,
  author,
  date,
  category,
  summary,
  btnTitle,
}) => {
  const recipesState = useRecipesHook();
  const navigate = useNavigate();
  return (
    <div className="sliderContainer">
      <h1>{sliderTitle}</h1>
      <div className="sliderWrapper">
        <Splide>
          {recipesState.map((recipe) => {
            return (
              <SplideSlide>
                <div className="sliderItem" key={recipe.id}>
                  <div className="imgWrapper">
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
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
                    <button onClick={() => navigate("/recipe/" + recipe.id)}>{btnTitle}</button>
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
