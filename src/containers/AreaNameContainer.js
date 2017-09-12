// container
import { connect } from "react-redux";
import { fetchStateName } from "../action/index.js";
import TranslateListItem from "../components/TranslateListItem.js";
const mapDispatchToProps = dispatch => {
  return {
    onClick: pincode => {
      const test = "560095";
      dispatch(fetchStateName(test));
    }
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    header: "Area Name",
    subheader: state.area.name
  };
};

const AreaNameContainer = connect(mapStateToProps, mapDispatchToProps)(
  TranslateListItem
);

export default AreaNameContainer;

/*
  {
    area: {
      areaName: null
    },
    otherReducers
  }



*/
