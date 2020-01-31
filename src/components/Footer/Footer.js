import React from "react";
import SocialIcons from "./SociaIcons";

import * as S from "./styled";

const Footer = () => (
  <S.FooterContainer>
    <S.Content>
      <SocialIcons />
      <S.Autograph></S.Autograph>
    </S.Content>
  </S.FooterContainer>
);

export default Footer;
