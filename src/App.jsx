import { Provider } from 'react-redux'
import './App.css'
import AllTodos from './Pages/AllTodos'
import { store } from './redux/store'
import { Route, Routes } from 'react-router'
import CompletedTodos from './Pages/CompletedTodos'
import PendingTodos from './Pages/PendingTodos'

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<AllTodos />} />
        <Route path="/completed" element={<CompletedTodos />} />
        <Route path="/pending" element={<PendingTodos />} />
      </Routes>  
    </Provider>
    </>
  )
}

export default App
