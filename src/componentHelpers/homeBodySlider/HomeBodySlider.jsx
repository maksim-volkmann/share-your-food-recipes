import './homeBodySlider.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import useRecipesHook from '../../customHooks/useRecipesHook'
import { useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react'

const HomeBodySlider = ({ sliderTitle, summary, btnTitle }) => {
  const recipesState = useRecipesHook()
  const navigate = useNavigate()
  const [maxRecipes, setMaxRecipes] = useState(6)
  const reducedRecipes = useMemo(() => {
    return recipesState.slice(0, maxRecipes)
  }, [maxRecipes, recipesState])

  return (
    <div className="sliderContainer">
      <h1>{sliderTitle}</h1>
      <div className="sliderWrapper">
        <Splide options={{ rewind: true, type: 'fade' }}>
          {reducedRecipes.map((recipe) => {
            return (
              <SplideSlide>
                <div className="sliderItem" key={recipe.id}>
                  <div className="imgWrapper">
                    <img src={recipe.mainImage} alt={recipe.name} />
                  </div>
                  <div className="slideContent">
                    <h2>{recipe.name}</h2>
                    <p>
                      {'by '}
                      <span className="author">{recipe.author}</span>
                      {' | '}
                      <span className="category">{recipe.goodFor}</span>
                    </p>
                    <h3>{recipe.description1}</h3>
                    <button onClick={() => navigate('/recipe/' + recipe._id)}>
                      {btnTitle}
                    </button>
                  </div>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </div>
  )
}

export default HomeBodySlider
