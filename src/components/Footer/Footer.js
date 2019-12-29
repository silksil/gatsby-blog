import React from "react";
import SocialIcons from "./SociaIcons";

import * as S from "./styled";

const Footer = () => (
  <S.FooterContainer>
    <S.Content>
      <S.Heading bold element="h4">
        Follow Me
      </S.Heading>
      <SocialIcons />
      <S.Autograph></S.Autograph>
    </S.Content>
  </S.FooterContainer>
);

export default Footer;
