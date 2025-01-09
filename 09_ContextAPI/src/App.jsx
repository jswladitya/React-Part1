import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      {/* ab yaha jo bhi component access lega ,us component ko access milega context ka */}
      <h1>React Context Learning</h1>
      {/* ye component context ka data kaise access karega wo hamne decide kardia he un components ke ander hi */}
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App

// 1. made user context , then userContextProvider
// 2. made components 
// 3. in app.jsx, wrapped the components
