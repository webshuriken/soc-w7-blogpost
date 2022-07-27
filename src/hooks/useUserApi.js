import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export const useUserApi = () => {
  const [userMeta, setUserMeta] = useState({ 'theme-color': 'red' });
  const { user, getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
  const serverUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`;

  // takes in an object to update the use data kept by auth0
  const updateUserMeta = async(user_metadata) => {
    try {
      const url = `${serverUrl}users/${user.sub}`;
      const opts = {
        audience: serverUrl,
        scope: 'update:current_user_metadata'
      }
      // start with a silent request for the token
      const token = await getAccessTokenSilently(opts)
      .catch((err)=> {
        console.log("You need a tat more consent.")
        return err.message;
      })
      .then(async (msg) => {
        // deal with auth0 wanting to verify first party app
        if (msg === 'Consent required') {
          return await getAccessTokenWithPopup(opts)
        }else{
          return msg
        }
      })

      // lets send that request to Auth0 to update the metadata
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_metadata: { ...user_metadata } })
      });

      // only take the stuff to personalise app
      const { email, email_verified, name, nickname, picture, user_id } = await response.json();

      setUserMeta({ email, email_verified, name, nickname, picture, user_id });

    }catch (err) {
      console.error("User metadata update did not go too well.. maybe try again. ", err);
    }
  }


  return { updateUserMeta, userMeta }
}
