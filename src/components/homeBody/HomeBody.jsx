import "./homeBody.scss";
import HomeBodySlider from "../../componentHelpers/homeBodySlider/HomeBodySlider";

const HomeBody = () => {
  return (
    <div className="homeBody">
      <div className="homeBodyWrapper">
        <HomeBodySlider
          sliderTitle="Featured Recipes"
          author="Author"
          date="Date"
          category="Category"
          summary="Summary Of The Recipe"
          btnTitle="Make this"
        />
      </div>
    </div>
  );
};

export default HomeBody;
