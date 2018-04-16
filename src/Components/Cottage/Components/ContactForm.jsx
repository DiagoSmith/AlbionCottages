import React from "react";
import { string, object } from "prop-types";
import { StyledInput } from "../style";

class ContactForm extends React.Component {
  static propTypes = {
    cottage: string.isRequired
  };
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      messsage: ""
    };
  }

  handleChange = (e, field) => {
    console.log(field);
    this.setState({ [field]: e.target.value });
  };

  handleSubmit = () => {
    window.alert("no worries");
  };

  render() {
    const nameToType = { name: "text", email: "email", phonenumber: "number" };

    const inputs = ["name", "email", "phonenumber"].map(name => (
      <StyledInput
        key={name}
        name={name}
        type={nameToType[name]}
        value={this.state[name]}
        required
        onChange={e => this.handleChange(e, name)}
      />
    ));

    return (
      <form>
        {inputs}
        <textarea name="message" />
        <button onSubmit={this.handleSubmit}> Submit </button>
      </form>
    );
  }
}

export default ContactForm;
