import './App.css'
import TopBar from './Components/Dashboard/TopBar'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  

  return (
    <>
            <div className='h-screen'>
        <div className='h-full overflow-hidden shadow bg-gray-50 '>
          <TopBar />
          <div className='bg-light my-10 px-50'>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}



export default App
