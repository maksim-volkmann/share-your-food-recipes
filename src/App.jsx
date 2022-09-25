import './App.scss'

import { LoggedInChecker } from './context/LoggedInChecker.jsx'
import NavRouter from './components/router/NavRouter'

function App() {
  return (
    <LoggedInChecker>
      <NavRouter />
    </LoggedInChecker>
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
