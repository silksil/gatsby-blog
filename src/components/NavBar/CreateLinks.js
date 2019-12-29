import React from "react";

const CreateLinks = (LinkComponent, links) =>
  links.map(link => <LinkComponent to={link.path}>{link.text}</LinkComponent>);

export default CreateLinks;
