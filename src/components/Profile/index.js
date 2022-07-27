import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { usePrivateApi } from "../../hooks/usePrivateApi";


const Profile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const { data, apiLoading } = usePrivateApi();

  // in case of slow connections
  if (isLoading) {
    return <div>Loading Profile Information</div>
  }

  return (
    isAuthenticated && (
      <>
        <section>
          <h2>Profile</h2>
          <img src={user.picture} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <h3>Database information in private route</h3>
          <p>Information is unique to this user only</p>
          <div>{apiLoading ? <p>Data is loading..</p> : (
            <>
              <p>You have created, {data.posts.length} posts</p>
              <p>You have made, {data.comments.length} comments</p>
            </>
          )}</div>
        </section>
      </>
    )
  )
}

export default Profile;
