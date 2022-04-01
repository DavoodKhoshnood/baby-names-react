import BabiesList from './BabiesList.js'
import babyData from './data/babyNamesData.json'

import './App.css'
function App() {
  return (
    <div>
      <div className='main'>
        <BabiesList names={babyData}/>
      </div>
    </div>
  )
}

export default App
