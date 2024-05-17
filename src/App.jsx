import { Provider } from 'react-redux'
import './App.css'
import AllTodos from './Pages/AllTodos'
import { store } from './redux/store'
import { Route, Routes } from 'react-router'
import CompletedTodos from './Pages/CompletedTodos'
import PendingTodos from './Pages/PendingTodos'
import Auth from './Components/Auth/Auth'
import Register from './Components/Auth/Register'

function App() {

  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/alltodos" element={<AllTodos />} />
        <Route path="/completed" element={<CompletedTodos />} />
        <Route path="/pending" element={<PendingTodos />} />
        <Route exact path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
      </Routes>  
    </Provider>
    </>
  )
}

export default App
