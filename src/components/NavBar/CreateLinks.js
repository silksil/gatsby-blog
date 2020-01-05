import React from "react";

const CreateLinks = (LinkComponent, links) =>
  links.map(link => <LinkComponent  activeClassName={"active"} to={link.path}>{link.text}</LinkComponent>);

export default CreateLinks;
