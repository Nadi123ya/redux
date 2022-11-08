import {connect}  from "react-redux";
import {selectedOptionsSelector} from "./options.selectors.js"
import Options from "./Options.jsx"
import {toggleOption} from "./options.action"



const mapState = state => {
  return{
    options: selectedOptionsSelector(state),
  }
}

const mapDispatch= {
  moveOption: toggleOption
}

export default connect(mapState,mapDispatch )(Options);

