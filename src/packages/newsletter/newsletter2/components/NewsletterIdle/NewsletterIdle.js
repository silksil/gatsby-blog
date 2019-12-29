import React from "react";
import PropTypes from "prop-types";
import { TextInputWithButton, BaseForm } from "../../../../forms";
import Wrapper from "./styled";

const NewsletterIdle = ({ onSubmit, setStatus }) => (
  <Wrapper>
    <BaseForm
      onSubmit={onSubmit}
      id="newsletter-form"
      onAfterSuccess={() => setStatus("success")}
    >
      <TextInputWithButton
        type="email"
        name="email"
        placeholder="E-mailadres"
        validation="required|email"
        buttonText="Subscribe"
      />
    </BaseForm>
  </Wrapper>
);

NewsletterIdle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired
};

export default NewsletterIdle;
