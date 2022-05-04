import React, { useState } from 'react'

const BabiesList = ({ names }) => {
  const [genderFilter, setGenderFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])

  const handleNameClick = (babyName) => {
    console.log(babyName.name)
    if (favorites.includes(babyName)) {
      favorites.splice(favorites.indexOf(babyName), 1)
      setFavorites([...favorites])
    } else setFavorites([...favorites, babyName])
  }

  const NameContainer = ({ data, handleClick }) => {
    return (
      <div className="favorites">
        {data.map((babyName) => (
          <MakeName baby={babyName} handleClick={handleClick} />
        ))}
      </div>
    )
  }

  const MakeName = ({ baby, handleClick }) => {
    const { name, sex } = baby
    return (
      <span
        className={sex === 'f' ? 'girl' : 'boy'}
        onClick={() => handleNameClick(baby)}
      >
        {name}
      </span>
    )
  }

  const filteredNames = names
    .sort((a, z) => {
      const nameA = a.name
      const nameZ = z.name
      if (nameA > nameZ) return 1
      else if (nameA < nameZ) return -1
      return 0
    })
    .filter((nameObject) => {
      const { name, id, sex } = nameObject
      const searchTermIsInName = name
        .toLowerCase()
        .includes(search.toLowerCase())

      const favoriteIds = favorites.map((name) => name.id)
      const isSelectedAsFavorite = favoriteIds.includes(id)

      const sexMatchesSelectedSex =
        genderFilter === 'all' || genderFilter === sex

      return (
        searchTermIsInName && !isSelectedAsFavorite && sexMatchesSelectedSex
      )
    })

  return (
    <>
      <div className="input-group">
        <input
          className="form-control m-2"
          type="text"
          placeholder="Search for a name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          className={genderFilter === 'all' ? 'line-bottom' : ''}
          src="./img/baby-name-all.png"
          alt="baby name all"
          onClick={() => setGenderFilter('all')}
        />

        <img
          className={genderFilter === 'f' ? 'line-bottom' : ''}
          src="./img/baby-name-girl.png"
          alt="baby name girl"
          onClick={() => setGenderFilter('f')}
        />

        <img
          className={genderFilter === 'm' ? 'line-bottom' : ''}
          src="./img/baby-name-boy.png"
          alt="baby name boy"
          onClick={() => setGenderFilter('m')}
        />
      </div>
      <div className="favorites">
        Favorites :
        <NameContainer data={favorites} handleClick={handleNameClick} />
      </div>
      <hr />
      <div className="content">
        <NameContainer data={filteredNames} handleClick={handleNameClick} />
      </div>
    </>
  )
}

export default BabiesList
