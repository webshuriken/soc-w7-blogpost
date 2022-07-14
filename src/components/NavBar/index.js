import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton"


const NavBar = () => {
  return (
    <header className="app-header">
      <nav>
        <div className="branding">SoC Blogposts</div>
        <div className="profile">
          <img src=""alt=""/>
          <LoginButton />
          <LogoutButton/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;