import React from "react";
import user from "../data/user";

function Links(props) {
  return (
    <div>
        <h3>Links</h3>
        <a href={props.user.links.github}>https://github.com/liza</a>
        <a href={props.user.links.linkedin}>https://www.linkedin.com/in/liza/</a>
    </div>
  );
}

export default Links;