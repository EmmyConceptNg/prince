import { ToastContainer } from 'react-toastify'
import { Routes } from './router/Index'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from './api/axios';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get("/api/sessions", {
          credentials: "include",
        });
        const { data } = response;
        const sessionToken = data.token;

        // Parse the current URL
        const urlParams = new URLSearchParams(location.search);

        // Update URL only if the token is missing or incorrect
        if (urlParams.get("token") !== sessionToken) {
          urlParams.set("token", sessionToken);
          // Use `navigate` only if the token is not set or incorrect
          navigate(`${location.pathname}?${urlParams.toString()}`, {
            replace: true,
          });
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    // Call `fetchSession` only if the URL doesn't have a valid token
    const urlParams = new URLSearchParams(location.search);
    if (!urlParams.get("token")) {
      fetchSession();
    }
  }, [location, navigate]);

  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  )
}

export default App
