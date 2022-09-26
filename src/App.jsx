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

export default App
