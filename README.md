# Code&Cook

# This is a food recipes sharing website.

### **Pages:**

- [x] Main Page - Display general information. Invite to register to the site and update the recipes.
- [x] Registration Page - Registration form to register a new user. Also the registration is saved in the `database`.
- [x] Login Page - Existing users can login to the page. After logging in a user can access a **Uploade Recipe Page.**
- [x] Upload recipe page - A submit form to create a new recipe and save it to the database. Every recipe is saved with a `userID` so that the user can `update` and `delete` created recipes.
- [x] All Recipe page - Display every recipe there is. If the are more time, create a filter by the category or smth to display custom recipes. Ex.: `vegan, spicy, salad, fish`. The time to make a dish could be displayed too and used as a filter.
- [x] Single Recipe page - Display only the clicked recipe. `Title`, `Photo`, `Ingredients`, `Instuction` should be displayed in there.

### **Main functions:**

- [x] Create a project structure.
- [x] Create a simple UI for every page and add fixed information for now.
- [x] Ability to create user and save it in to the database.
- [x] Ability to Log in to the website with a exsiting user in the database.
- [ ] Recipes have tags, so you can filter them accordingly.
- [x] Only the user, who created a recipe can `update` or `delete` it.

### **Database information:**

### User:

- ID (auto generated in the mongodb).
- Name.
- Email.
- Password. (hashed)

### Recipe:

- ID (auto generated in the mongodb).
- Name.
- Products.
- Instructions.
- Time to make a dish.
- Food tags, ex.: `vegan, fish, meat, milk, no-milk`
- AuthorID (The user who created a recipe, so he can `update` and `detele` it.)
