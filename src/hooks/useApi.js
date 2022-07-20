import { useEffect, useState } from "react";


export const useApi = () => {
  const [endpoint, setEndpoint] = useState('blogpost');
  const [data, setData] = useState('');
  const [apiLoading, setApiLoading] = useState(true);
  const serverUrl = process.env.REACT_APP_AUTH0_SERVER_URL;

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/${endpoint}`);
      const responseData = await response.json();
      setApiLoading(false);
      setData(responseData.payload);
    }catch (error) {
      console.error(error.message);
    }

  }
  
  useEffect(() => {
    callApi();
  }, [endpoint]);

  return { data, apiLoading, setEndpoint }
}
