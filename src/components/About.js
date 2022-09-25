import React from "react";
import Links from "./Links";

function About( {user} ) {
  console.log(user)
  
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links user={user} />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
