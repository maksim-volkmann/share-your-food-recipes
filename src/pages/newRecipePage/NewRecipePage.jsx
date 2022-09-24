import "./newRecipePage.scss";
import NavBar from "../../components/navBar/NavBar";
import NewRecipeForm from "../../components/newRecipeForm/NewRecipeForm";
import Footer from "../../components/footer/Footer";

const NewRecipePage = () => {
  return (
    <>
      <NavBar />
      <NewRecipeForm
      optionTitle="Select good for:"
      option1="Breakfast" 
      option2="Lunch"
      option3="Dinner" 
      option4="Snack"
      />
      <Footer />
    </>
  );
};

export default NewRecipePage;
