import React from "react";
import { Link } from 'react-router-dom';
import AuthenticationButton from "../AuthenticationButton";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="app-header">
      <nav>
        <div className="branding">SoC Blogposts</div>
        <nav>
          <Link to="/">Home</Link>
          {isAuthenticated && <Link to="/profile">Profile</Link>}
          <AuthenticationButton />
        </nav>
      </nav>
    </header>
  )
}

export default NavBar;