import { ToastContainer } from 'react-toastify'
import { Routes } from './router/Index'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from './api/axios';

function App() {

   const navigate = useNavigate();

   useEffect(() => {
     const fetchSession = async () => {
       try {
         const response = await axios.get("/api/sessions", {
           credentials: "include",
         });
         const { data } = response;
         const sessionToken = data.token;

         // Check if the URL already has the same token
         const url = new URL(window.location.href);
         const params = new URLSearchParams(url.search);

         if (params.get("token") !== sessionToken) {
           // Update the token in the URL
           params.set("token", sessionToken);
           navigate(`?${params.toString()}`, { replace: true });
         }
       } catch (error) {
         console.error("Error fetching session:", error);
       }
     };

     // Call fetchSession once only if the URL doesn't match the session token
     if (!new URLSearchParams(window.location.search).get("token")) {
       fetchSession();
     }
   }, [navigate]);


  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  )
}

export default App
