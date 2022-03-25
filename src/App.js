import babyData from './data/babyNamesData.json'
import BabiesList from './BabiesList.js'
import Search from './Search.js'

import './App.css'

function App() {
  return (
    <div>
      <div className='main'>
        <Search list/>
        <BabiesList list={babyData} />
      </div>
    </div>
  )
}

export default App
