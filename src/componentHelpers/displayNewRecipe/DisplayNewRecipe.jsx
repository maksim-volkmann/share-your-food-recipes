import './displayNewRecipe.scss'

const DisplayNewRecipe = ({
  titleLeft,
  dateLeft,
  authorLeft,
  descriptionLeft,
  titleRight,
  dateRight,
  authorRight,
  descriptionRight,
  imageLeft,
  imageRight,
}) => {
  return (
    <div className="newRecipeContainer">
      <div className="newRecipeWrapper">
        <div className="newRecipe left">
          <div>
            <div>
              <h1>{titleLeft}</h1>
              <p>
                <span>{dateLeft}: </span> | <span>{authorLeft}: </span>
              </p>
            </div>
            <div>
              <img src={imageLeft} alt="" />
            </div>
          </div>
          <div className="newRecipeText">
            <p>{descriptionLeft}</p>
          </div>
        </div>
        <div className="newRecipe right">
          <div className="newRecipeText">
            <p>{descriptionRight}</p>
          </div>
          <div>
            <div>
              <h1>{titleRight}</h1>
              <p>
                <span>{dateRight}: </span> | <span>{authorRight}: </span>
              </p>
            </div>
            <div>
              <img src={imageRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayNewRecipe
