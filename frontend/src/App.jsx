import { ToastContainer } from 'react-toastify'
import { Routes } from './router/Index'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from './api/axios';

function App() {

   const navigate = useNavigate();
 const [urlTokenSet, setUrlTokenSet] = useState(false);

 useEffect(() => {
   const fetchSession = async () => {
     try {
       const response = await axios.get("/api/sessions", {
         credentials: "include",
       });
       const { data } = response;
       const sessionToken = data.token;

       const url = new URL(window.location.href);
       const params = new URLSearchParams(url.search);

       // Only set the token in the URL if it's not set or doesn't match
       if (!urlTokenSet || params.get("token") !== sessionToken) {
         params.set("token", sessionToken);
         navigate(`?${params.toString()}`, { replace: true });
         setUrlTokenSet(true); // Mark the token as set in the URL
       }
     } catch (error) {
       console.error("Error fetching session:", error);
     }
   };

   fetchSession();
 }, [navigate, urlTokenSet]);

  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  )
}

export default App
