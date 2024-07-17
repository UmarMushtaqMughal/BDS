import './App.css'
import DonarDetail from './Components/DonarDetail/DonarDetail'
import Maps from './Components/Maps/Maps'
import PersonToFind from './Components/PersonToFind/PersonToFind'

function App() {

  return (
    <div className='container'>
      <PersonToFind ></PersonToFind>
      <Maps ></Maps>
      <DonarDetail ></DonarDetail>
    </div>
  )
}

export default App