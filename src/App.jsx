import { Provider } from 'react-redux'
import './App.css'
import AllTodos from './Pages/AllTodos'
import { store } from './redux/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <AllTodos />
    </Provider>
    </>
  )
}

export default App
