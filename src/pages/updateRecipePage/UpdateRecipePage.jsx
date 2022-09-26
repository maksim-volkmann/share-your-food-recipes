import UpdateRecipeForm from '../../components/updateTestForm/UpdateRecipeForm'

const UpdateRecipePage = () => {
  return (
    <>
      <div>UpdateTestPage</div>
      <UpdateRecipeForm
        optionTitle="Select good for:"
        option1="Breakfast"
        option2="Lunch"
        option3="Dinner"
        option4="Snack"
      />
    </>
  )
}

export default UpdateRecipePage
