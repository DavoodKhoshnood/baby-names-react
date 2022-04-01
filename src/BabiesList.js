import React, { useState } from 'react'

const BabiesList = ({names}) => {
 console.log(names)
  const [state, setState] = useState("all")
  const [babyNames, setFilter] = useState(names.sort((a, b) => a.name.localeCompare(b.name)));
  const filter = (inputValue) => {
    state === "all" ? setFilter(names.filter(baby => baby.name.toLowerCase().includes(inputValue.toLowerCase()))) :
      setFilter(names.filter(baby => baby.name.toLowerCase().includes(inputValue.toLowerCase()) && baby.sex === state ));
  };
  return (
    <>
    <div className="content">
    <input
      className="form-control"
      type="text"
      placeholder="Search..."
      onChange={(e)=>filter(e.target.value)}
    />
  </div>
    <div className="content">
      {babyNames.map((baby, index) => (
        <span key={index} className={baby.sex === 'f' ? 'girl' : 'boy'}>
          {baby.name}
        </span>
      ))}
    </div>
    </>
  )
}

export default BabiesList
