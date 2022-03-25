import React from 'react'

const BabiesList = ({ list }) => {
  return (
    <div className="content">
      {list.map((baby, index) => (
        <span key={index} className={baby.sex === 'f' ? 'girl' : 'boy'}>
          {baby.name}
        </span>
      ))}
    </div>
  )
}

export default BabiesList
