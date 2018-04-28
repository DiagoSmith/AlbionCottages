import React from "react";
import { string, object } from "prop-types";
import { StyledForm } from "../style";

import InputWithLabel from "./InputWithLabel";

class ContactForm extends React.Component {
  static propTypes = {
    cottage: string.isRequired
  };

  state = {
    name: "",
    email: "",
    phonenumber: 0
  };

  handleChange = (e, field) => {
    console.log(field);
    this.setState({ [field]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    window.alert("submitted succesfully");
  };

  render() {
    const nameToType = { name: "text", email: "email", phonenumber: "number" };

    const inputs = ["name", "email", "phonenumber"].map(name => (
      <InputWithLabel
        key={name}
        name={name}
        type={nameToType[name]}
        value={this.state[name]}
        onChange={e => this.handleChange(e, name)}
      />
    ));

    return (
      <React.Fragment>
        <StyledForm onSubmit={e => this.handleSubmit(e)}>
          <h2>Request Information: {this.props.cottage}</h2>
          {inputs}
          {/* <textarea name="message" /> */}
          <button> Submit </button>
        </StyledForm>
      </React.Fragment>
    );
  }
}

export default ContactForm;
