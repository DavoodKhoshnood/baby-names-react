import React, { useState, useEffect } from 'react'
import MakeName from './MakeName'

const BabiesList = ({ names }) => {
  const [list, setList] = useState([])
  const [genderFilter, setGenderFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setList(names.sort((a, b) => a.name.localeCompare(b.name)))
    if (search !== '')
      setList(
        list.filter((baby) =>
          baby.name.toLowerCase().includes(search.toLowerCase()),
        ),
      )
}, [search, genderFilter])

  return (
    <>
      <div className="input-group">
        <input
          className="form-control m-2"
          type="text"
          placeholder="Search for a name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className={genderFilter==='all'?'line-bottom':''}
          src="./img/baby-name-all.png"
          alt="baby name all"
          onClick={() => setGenderFilter('all')}
        />

        <img className={genderFilter==='f'?'line-bottom':''}
          src="./img/baby-name-girl.png"
          alt="baby name girl"
          onClick={() => setGenderFilter('f')}
        />

        <img className={genderFilter==='m'?'line-bottom':''}
          src="./img/baby-name-boy.png"
          alt="baby name boy"
          onClick={() => setGenderFilter('m')}
        />
      </div>
      <div className="favorites" id="favorites">
        Favorites :
      </div>
      <hr />
      <div className="content" id="list">
       {console.log('Print : '+list.length)     }
        {list.filter((baby) => 
        genderFilter === 'all' || baby.sex === genderFilter).map((baby, index) => (
          <MakeName baby={baby} index={index} />
        ))}
      </div>
    </>
  )
}


export default BabiesList
