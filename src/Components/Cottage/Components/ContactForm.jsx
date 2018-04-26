import React from "react";
import { string, object } from "prop-types";
import { StyledInput } from "../style";

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
      <StyledInput
        key={name}
        name={name}
        type={nameToType[name]}
        value={this.state[name]}
        // required
        onChange={e => this.handleChange(e, name)}
      />
    ));

    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        {inputs}
        {/* <textarea name="message" /> */}
        <button> Submit </button>
      </form>
    );
  }
}

export default ContactForm;
