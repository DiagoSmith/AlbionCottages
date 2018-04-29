import React from "react";
import { string, object } from "prop-types";
import { StyledForm, StyledTextArea } from "../style";
import { sendEmail } from "../../../Api/api";

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
    this.setState({ [field]: e.target.value });
  };

  sendMail = async formData => {
    try {
      const result = await sendEmail(formData);
      console.log(`hello`, result);
      // do something with response
    } catch (error) {
      // do something with error
      this.setState({});
      console.log("error==", error);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phonenumber } = this.state;
    const formData = { name: name, email: email, phonenumber: phonenumber };
    this.sendMail(formData);
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
          <StyledTextArea
            name="message"
            placeholder="Write your message here..."
          />
          <button> Submit </button>
        </StyledForm>
      </React.Fragment>
    );
  }
}

export default ContactForm;
