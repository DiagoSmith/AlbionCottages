import React from "react";
import { bool } from "prop-types";
import { connect } from "react-redux";
import { makeGetAvailableCottages } from "../selectors";

import Results from "../Components/Results";

class ResultsContainer extends React.Component {
  static propTypes = {
    loading: bool.isRequired
  };

  render() {
    const { loading, ...rest } = this.props;

    return (
      <div>
        {loading ? <div> loading sorry</div> : <Results {...rest}> </Results>}
      </div>
    );
  }
}

function makeMapStateToProps(state) {
  const getAvailableCottages = makeGetAvailableCottages();
  function mapStateToProps(state) {
    return {
      availableCottages: getAvailableCottages(state),
      loading: state.loading
    };
  }
  return mapStateToProps(state);
}

export default connect(makeMapStateToProps)(Results);
