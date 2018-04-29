import React from "react";
import { string, func } from "prop-types";

import { StyledLabel, StyledInput, StyledContainer } from "../style";

const nameToType = { name: "text", email: "email", phonenumber: "number" };
const nameToLabel = {
  name: "Name",
  email: "Email",
  phonenumber: "Phone Number"
};
const nameToPlaceHolder = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  phonenumber: "+447723739..."
};

const InputWithLabel = ({ name, onChange, value }) => {
  return (
    <StyledContainer>
      <StyledLabel for={name}> {nameToLabel[name]} </StyledLabel>
      <StyledInput
        name={name}
        type={nameToType[name]}
        value={value}
        placeholder={nameToPlaceHolder[name]}
        required
        onChange={e => onChange(e, name)}
      />
    </StyledContainer>
  );
};

InputWithLabel.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  value: string.isRequired
};

export default InputWithLabel;
