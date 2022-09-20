import './App.scss'

import Logo from './componentHelpers/Logo/Logo'
import HomePage from './pages/homePage/HomePage'
import LoginPage from './pages/loginPage/LoginPage'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import RecipesPage from './pages/recipesPage/RecipesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recipes" element={<RecipesPage />} />
    </Routes>
  )
}

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   )
// }

export default App
