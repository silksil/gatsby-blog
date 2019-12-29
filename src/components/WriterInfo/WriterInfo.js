import React from "react";
import { string } from "prop-types";
import * as S from "./styled";
import { Text } from "../../packages/typography";

const WriterInfo = ({ imageSrc, personName, text }) => (
  <S.Wrapper>
    <S.Image alt={`Profiel picture ${personName}`} src={imageSrc} />
    <Text as="p" color="primaryContrastSecondary">
      {text}
    </Text>
  </S.Wrapper>
);

WriterInfo.propTypes = {
  imageSrc: string,
  personName: string,
  text: string
};

export default WriterInfo;
