import React from "react";
import { string, func, instanceOf } from "prop-types";
import { connect } from "react-redux";
import { addStartDate, addEndDate, fetchCalendar } from "../Actions/actions";
import DatePicker from "../Components/Home/components/DatePicker";
// import { getBlockedDates } from "../selectors";

class DatePickerContainer extends React.Component {
  static propTypes = {
    fetchCalendar: func.isRequired,
    addStartDate: func.isRequired,
    addEndDate: func.isRequired,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date),
    cottage: string.isRequired
  };
  fetchAvailability = () => {
    const { startDate, endDate, cottage } = this.props;
    this.props.fetchCalendar(cottage, startDate, endDate);
  };

  render() {
    return (
      <DatePicker fetchAvailability={this.fetchAvailability} {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    startDate: state.startDate,
    endDate: state.endDate,
    cottage: state.selectedCottage
  };
}

const mapDispatchToProps = {
  addStartDate,
  addEndDate,
  fetchCalendar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePickerContainer);
