import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const useApi = (urlEndpoint = '') => {
  const url= `http://localhost:4000/api`;
  const [endpoint, setEndpoint] = useState('blogpost');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  const callApi = async () => {
    try {
      const response = await fetch(`${url}/${endpoint}`);
      const responseData = await response.json();
      setLoading(false);
      setData(responseData.payload);
    }catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    callApi();
  }, [endpoint]);

  return { data, loading, setEndpoint }
}
