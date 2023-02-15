import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const route = useRouteElement()
  return (
    <div className='App'>
      {route}
      <ToastContainer />
    </div>
  )
}

export default App
