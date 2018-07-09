import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { func, instanceOf, typeOf, obj } from "prop-types";
import { withRouter } from "react-router";

class DatePicker extends React.Component {
  static propTypes = {
    fetchAvailability: func.isRequired,
    addStartDate: func.isRequired,
    addEndDate: func.isRequired,
    startDate: instanceOf(Date),
    endDate: instanceOf(Date)
    // history: typeOf(obj)
  };
  getInitialState = () => {
    return { startDate: undefined, endDate: undefined };
  };

  state = this.getInitialState();

  resetDays = () => {
    this.setState(this.getInitialState);
  };
  isDayBlocked = () => {
    // this.props.blockedDates
  };

  submitDays = () => {
    const { fetchAvailability, history } = this.props;
    fetchAvailability();
    // this should only happen on successful calendar fetching
    history.push("/results");
  };
  handleDatesChange = dates => {
    const { addStartDate, addEndDate } = this.props;
    addStartDate(dates.startDate);
    addEndDate(dates.endDate);
  };
  render() {
    const { startDate, endDate } = this.props;

    return (
      <React.Fragment>
        <DateRangePicker
          startDate={startDate} // momentPropTypes.momentObj or null,
          startDatePlaceholderText="Check-In"
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={endDate} // momentPropTypes.momentObj or null,
          endDatePlaceholderText="Check-Out"
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.handleDatesChange({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          showClearDates
          minimumNights={2}
          isDayBlocked={this.isDayBlocked()}
          small
        />
        <button onClick={this.submitDays}> Check Availability </button>
      </React.Fragment>
    );
  }
}

export default withRouter(DatePicker);
