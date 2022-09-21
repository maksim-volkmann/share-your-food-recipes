import "./homeBody.scss";
import HomeBodySlider from "../../componentHelpers/homeBodySlider/HomeBodySlider";

const HomeBody = () => {
  return (
    <div className="homeBody">
      <div className="homeBodyWrapper">
        <HomeBodySlider />
      </div>
    </div>
  );
};

export default HomeBody;
