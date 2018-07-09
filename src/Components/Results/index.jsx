import React, { Component } from "react";
import PropTypes from "prop-types";

import DatePickerContainer from "../../Containers/DatePickerContainer";
import Result from "./components/result";
import { ResultsWrapper, Content } from "./style";
import { ResultsTitle } from "./components/style";

class Results extends Component {
  render() {
    console.log(this.props);
    // const { availableCottages } = this.props;
    const availableCottages = ["12047603", "17604337", "17605474", "17588819"];

    const results = availableCottages.map(cottage => (
      <Result key={cottage} cottage={cottage} />
    ));
    return (
      <React.Fragment>
        <ResultsWrapper>
          <Content>
            <ResultsTitle>Results</ResultsTitle>
            {results}
          </Content>
        </ResultsWrapper>
      </React.Fragment>
    );
  }
}

export default Results;
