import React from "react";
import PropTypes from "prop-types";
import LoadingSuccess from "../../icons/AnimatedIcons/LoadingSuccess/LoadingSuccess";
import { withTheme } from "styled-components";
import { PrimaryButton } from "../../buttons";
import useFormStatus from "../BaseForm/useFormStatus";

const getStatus = (name, title) =>
  ({
    idle: title,
    loading: title,
    success: <LoadingSuccess />,
    error: title
  }[name]);

const SubmitButton = ({ title, theme, ...props }) => {
  const { status } = useFormStatus();

  return (
    <PrimaryButton type="submit" {...props}>
      {getStatus(status, title, theme)}
    </PrimaryButton>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string
};

SubmitButton.defaultProps = {
  title: "Opslaan"
};

export default withTheme(SubmitButton);
