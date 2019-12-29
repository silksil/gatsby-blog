import React from "react";
import PropTypes from "prop-types";
import { SubmitButton, TextInput, BaseForm } from "../../../../forms";
import Wrapper from "./styled";

const NewsletterIdle = ({ onSubmit, setStatus }) => (
  <BaseForm
    onSubmit={onSubmit}
    id="newsletter-form"
    onAfterSuccess={() => setStatus("success")}
  >
    <Wrapper>
      <TextInput
        type="text"
        name="name"
        placeholder="name"
        validation="required"
      />
      <TextInput
        type="email"
        name="email"
        placeholder="E-mailadres"
        validation="required|email"
      />

      <SubmitButton title="Subscribe" />
    </Wrapper>
  </BaseForm>
);

NewsletterIdle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired
};

export default NewsletterIdle;
