// container
import { connect } from "react-redux";
import { savePincode } from "../action/index.js";
import SearchBar from "../components/search-bar.js";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      dispatch(savePincode(pincode));
    }
  };
};

const SearchBarContainer = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
