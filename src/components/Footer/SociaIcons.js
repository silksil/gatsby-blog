import React from "react";
import Facebook from "@packages/icons/SocialIcons/Facebook";
import Instagram from "@packages/icons/SocialIcons/Instagram";
import Twitter from "@packages/icons/SocialIcons/Twitter";

import * as S from "./styled";

const SocialIcons = () => (
  <S.SocialWrapper>
    <S.IconButton>
      <Facebook color="primaryContrast" />
    </S.IconButton>
    <S.IconButton>
      <Twitter color="primaryContrast" />
    </S.IconButton>
    <S.IconButton>
      <Instagram color="primaryContrast" />
    </S.IconButton>
  </S.SocialWrapper>
);

export default SocialIcons;
