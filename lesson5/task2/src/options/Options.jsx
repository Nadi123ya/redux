import propTypes from "prop-types";
import React from "react";

const Options = ({ title, options, moveOption }) => {
  console.log(options)
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map(option => 
          <li key={option.id}>
            <button className="options__list-item"
            onClick={()=> moveOption(option.id)}
            >
            {option.name}
            </button>
            </li>
        )}
      </ul>
    </div>
  );
};

Options.propTypes = {
    title: propTypes.string,
    options: propTypes.arrayOf(propTypes.shape()),
    moveOption: propTypes.func,
}



export default Options;