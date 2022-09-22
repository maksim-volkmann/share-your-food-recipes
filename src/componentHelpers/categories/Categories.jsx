import "./categories.scss";

const Categories = ({
  title,
  itemTitle1,
  itemTitle2,
  itemTitle3,
  itemTitle4,
  itemTitle5,
  itemTitle6,
  btnTitle,
}) => {
  return (
    <div className="categoriesContainer">
      <h1>{title}</h1>
      <div className="categoriesWrapper">
        <div className="categoriesItem">
          <img
            src="https://www.budgetbytes.com/wp-content/uploads/2021/08/Cheese-Grits-plate.jpg"
            alt="breakfast photo"
          />
          <h3>{itemTitle1}</h3>
        </div>
        <div className="categoriesItem">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/buffalo-chicken-wrap1-1659470768.jpg?crop=0.688xw:1.00xh;0.160xw,0&resize=640:*"
            alt="lunch photo"
          />
          <h3>{itemTitle2}</h3>
        </div>
        <div className="categoriesItem">
          <img
            src="https://www.thereciperebel.com/wp-content/uploads/2022/05/chicken-spaghetti-TRR-1200-24-of-49-568x498.jpg"
            alt="dinner photo"
          />
          <h3>{itemTitle3}</h3>
        </div>
        <div className="categoriesItem">
          <img
            src="https://resize.img.allw.mn/thumbs/i4/zt/v4sumevq5e57ecc5a168e124881220_712x712.jpg?width=1200&height=900"
            alt="salad photo"
          />
          <h3>{itemTitle4}</h3>
        </div>
        <div className="categoriesItem">
          <img
            src="https://www.brit.co/media-library/chocolate-covered-strawberry-cheesecake.jpg?id=21559969&width=980"
            alt="dessert photo"
          />
          <h3>{itemTitle5}</h3>
        </div>
        <div className="categoriesItem">
          <img
            src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/09/1519935673-delish-cheese-ball-bites.jpg"
            alt="appetizer photo"
          />
          <h3>{itemTitle6}</h3>
        </div>
      </div>
      <button>{btnTitle}</button>
    </div>
  );
};

export default Categories;
