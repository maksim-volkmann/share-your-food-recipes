import "./recipes.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import mockData from "../../mock/mockData.js";
import { Link } from "react-router-dom";

function Recipes() {
  const [recipesState, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        // const data = await axios
        //   .get(
        //     // `https://api.spoonacular.com/recipes/random?apiKey=${env.API_KEY}&number=7`,
        //     // { mode: "no-cors" }
        //   )
        //   .then((response) => {
        //     const recipes = response.data.recipes;
        //     setRecipes(recipes);
        //     console.log("recipes", recipes);
        //   });
        const data = mockData;
        const recipes = data.recipes;
        setRecipes(recipes);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipes();
  }, []);

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
    </div>
  );
}

export default Recipes;
