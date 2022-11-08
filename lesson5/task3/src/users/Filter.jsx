import React from "react";

const Filter = ({filterText,count, onChange}) => {
  return(
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input 
      type="text" 
      onChange={onChange}
      className="filter__input" 
      value={filterText}
      />
    </div>
  )  
}

export default Filter;