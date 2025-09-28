import './App.css'
import TopBar from './Components/Dashboard/TopBar'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  

  return (
    <>
            <div className='h-screen'>
        <div style={{ "background-color": "#edeff3" }} className='min-h-full overflow-hidden shadow'>
          <TopBar />
          <div className='bg-light my-10 px-5 lg:px-50'>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}



export default App
