import React, { useState } from 'react'

const favDiv = document.getElementById('favorites')
const listDiv = document.getElementById('list')

const MakeName = ({ baby, index }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const moveToFavorites = (element) => {
    favDiv.appendChild(element)
  }

  const removeFromFavorites = (element) => {
    listDiv.appendChild(element)
  }

  return (
    <span
      key={index}
      id={index}
      className={baby.sex === 'f' ? 'girl' : 'boy'}
      onClick={(event) => {
        isFavorite
          ? removeFromFavorites(event.target)
          : moveToFavorites(event.target)

        setIsFavorite(!isFavorite)
      }}
    >
      {baby.name}
    </span>
  )
}

export default MakeName
