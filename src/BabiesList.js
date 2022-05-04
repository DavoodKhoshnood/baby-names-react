import React, { useState, useEffect } from 'react'

const BabiesList = ({ names }) => {
  const [list, setList] = useState([])
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

  const MakeName = ({ baby, handleClick }) => {
    return (
      <span
        className={baby.sex === 'f' ? 'girl' : 'boy'}
        onClick={() => {
          handleNameClick(baby)
        }}
      >
        {baby.name}
      </span>
    )
  }

  useEffect(() => {
    function loadList() {
    setList(
      names
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((baby) => !favorites.includes(baby)),
    )

    if (search !== '')
      setList(
        list.filter((baby) =>
          baby.name.toLowerCase().includes(search.toLowerCase()),
        ),
      )}
      loadList()
  }, [search, genderFilter, favorites])

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
      <div className="favorites" id="favorites">
        Favorites :
        {favorites
          .filter((baby) => genderFilter === 'all' || baby.sex === genderFilter)
          .map((fav) => (
            <MakeName baby={fav} handleClick={handleNameClick} />
          ))}
      </div>
      <hr />
      <div className="content" id="list">
        {list
          .filter((baby) => genderFilter === 'all' || baby.sex === genderFilter)
          .map((baby) => (
            <MakeName baby={baby} handleClick={handleNameClick} />
          ))}
      </div>
    </>
  )
}

export default BabiesList
