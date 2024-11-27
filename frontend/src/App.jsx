// App.jsx
import { ToastContainer } from "react-toastify";
import { Routes } from "./router/Index";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { setupAxiosInterceptors } from "./api/axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [sessionValidated, setSessionValidated] = useState(false);
  
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get("/api/sessions", {
          withCredentials: true,
        });
        const { token } = response.data;

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("token") !== token) {
          urlParams.set("token", token);
          navigate(`${window.location.pathname}?${urlParams.toString()}`, {
            replace: true,
          });
        }
        localStorage.setItem("sessionValidated", true);
        setSessionValidated(true);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    const validateTokenOnce = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenInURL = urlParams.get("token");

      if (!tokenInURL) {
        fetchSession();
      } else {
        try {
          await axios.get(`/api/sessions/validate?token=${tokenInURL}`, {
            withCredentials: true,
          });
          localStorage.setItem("sessionValidated", true);
          setSessionValidated(true);
        } catch (err) {
          console.error("Validation error:", err);
          const regenResponse = await axios.get("/api/sessions/regenerate", {
            withCredentials: true,
          });
          const newToken = regenResponse.data.token;

          urlParams.set("token", newToken);
          navigate(`${window.location.pathname}?${urlParams.toString()}`, {
            replace: true,
          });

          fetchSession();
        }
      }
    };

    validateTokenOnce();

    // Example of using navigate with token
    const handleNavigation = (path) => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      if (token) {
        navigate(`${path}?token=${token}`);
      } else {
        fetchSession();
      }
    };

    // Example usage of handleNavigation
    // handleNavigation('/new-path');
  }, [navigate]);

  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
