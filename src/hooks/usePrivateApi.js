import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export const usePrivateApi = (endpointUri) => {
  const [endpoint, setEndpoint] = useState('');
  const [apiLoading, setApiLoading] = useState(true);
  const [data, setData] = useState('');
  const serverUrl = process.env.REACT_APP_AUTH0_SERVER_URL;

  // secure the api
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();

  const callApi = async () => {
    try {
      const uri = endpoint || endpointUri;
      const userId = user.sub.split('|')[1];
      const token = await getAccessTokenSilently();
      const response = await fetch(`${serverUrl}/api/private/${uri}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const responseData = await response.json();
      setApiLoading(false);
      setData(responseData.payload);

    }catch(error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      callApi();
    }
  }, [endpoint]);

  return { apiLoading, data, setEndpoint };
}


