import React from "react";
import { string, func, bool, instanceOf } from "prop-types";
import { connect } from "react-redux";
// import { addStartDate, addEndDate, fetchCalendar } from "../Actions/actions";
// import DatePicker from "../Components/Home/components/DatePicker";
import { makeGetBlockedDates, makeGetAvailableCottages } from "../selectors";

class ResultsContainer extends React.Component {
  static propTypes = {
    // fetchCalendar: func.isRequired,
    // addStartDate: func.isRequired,
    // addEndDate: func.isRequired,
    // startDate: instanceOf(Date),
    // endDate: instanceOf(Date),
    // cottage: string.isRequired,
    loading: bool.isRequired
    // availableCottages: one
  };

  render() {
    const { loading, blockedDates, availableCottages } = this.props;

    const cottagesAvail = availableCottages.map(cottage => (
      <li key={cottage}>{cottage}</li>
    ));

    return (
      <div>
        {loading ? <div> loading sorry</div> : <div> {cottagesAvail} </div>}
      </div>
    );
  }
}

function makeMapStateToProps(state) {
  const getBlockedDates = makeGetBlockedDates();
  const getAvailableCottages = makeGetAvailableCottages();
  function mapStateToProps(state) {
    return {
      blockedDates: getBlockedDates(state),
      availableCottages: getAvailableCottages(state),
      loading: state.loading
    };
  }
  return mapStateToProps(state);
}

// const mapDispatchToProps = {
//   addStartDate,
//   addEndDate,
//   fetchCalendar
// };

export default connect(
  makeMapStateToProps
  //   mapDispatchToProps
)(ResultsContainer);
