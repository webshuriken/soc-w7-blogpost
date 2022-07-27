import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export const usePrivateApi = () => {
  const [endpoint, setEndpoint] = useState('profile');
  const [apiLoading, setApiLoading] = useState(true);
  const [data, setData] = useState('');
  const serverUrl = process.env.REACT_APP_AUTH0_SERVER_URL;

  // secure the api
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();

  const callApi = async () => {
    try {
      const userId = user.sub.split('|')[1];

      // start with a silent request for the token
      const token = await getAccessTokenSilently()

      const response = await fetch(`${serverUrl}/api/private/${endpoint}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const responseData = await response.json();
      setApiLoading(false);
      setData(responseData.payload);

    }catch(error) {
      console.error("You are not supposed to be here.")
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      callApi();
    }
  }, [endpoint]);

  return { apiLoading, data, setEndpoint };
}


