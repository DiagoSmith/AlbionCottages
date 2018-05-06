import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

class DatePicker extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  };

  getInitialState = () => {
    return { from: undefined, to: undefined };
  };

  state = this.getInitialState();
  handleDayChange = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };
  resetDays = () => {
    this.setState(this.getInitialState);
  };
  render() {
    const { selectedDay, from, to } = this.state;
    const { numberOfMonths } = this.props;
    return (
      <DayPickerInput
        onDayChange={this.handleDayChange}
        dayPickerProps={{
          numberofMonths: numberOfMonths,
          selectedDays: [from, { from, to }]
        }}
      />
    );
  }
}

export default DatePicker;
