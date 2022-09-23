import "./homeBody.scss";
import HomeBodySlider from "../../componentHelpers/homeBodySlider/HomeBodySlider";
import Newsletter from "../../componentHelpers/newsletter/Newsletter";

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
        <Newsletter
          title={"Join our newletter and get the latest recipes!"}
          btnTitle={"Send"}
        />
      </div>
    </div>
  );
};

export default HomeBody;
