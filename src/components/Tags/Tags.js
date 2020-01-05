import React, { Fragment } from "react";
import Tag from "./styled";
import { Text } from "@packages/typography";

const Tags = ({ items }) => (
  <Fragment>
    <Text as="span" color="primaryContrastLight">
      TAGGED:
    </Text>
    {items.map((tag, index) => (
      <Tag as="span">{tag}</Tag>
    ))}
  </Fragment>
);

export default Tags;
