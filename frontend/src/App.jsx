// App.jsx
import { ToastContainer } from "react-toastify";
import { Routes } from "./router/Index";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./api/axios";
import Swal from "sweetalert2";

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

        const urlParams = new URLSearchParams(location.search);
        if (urlParams.get("token") !== token) {
          urlParams.set("token", token);
          navigate(`${location.pathname}?${urlParams.toString()}`, {
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
      const urlParams = new URLSearchParams(location.search);
      const tokenInURL = urlParams.get("token");

      if (!tokenInURL) {
        fetchSession();
      } else {
        try {
          const res = await axios.get(
            `/api/sessions/validate?token=${tokenInURL}`,
            {
              withCredentials: true,
            }
          );
          localStorage.setItem("sessionValidated", true);
          setSessionValidated(true);
        } catch (err) {
          console.error("Validation error:", err);
          // Swal.fire({
          //   icon: "error",
          //   title: "Session Error",
          //   text: "Session invalid or expired.",
          //   showConfirmButton: true,
          // }).then(async () => {
            const regenResponse = await axios.get("/api/sessions/regenerate", {
              withCredentials: true,
            });
            const newToken = regenResponse.data.token;

            urlParams.set("token", newToken);
            navigate(`${location.pathname}?${urlParams.toString()}`, {
              replace: true,
            });

            fetchSession();
          // });
        }
      }
    };

    // if (!localStorage.getItem("sessionValidated"))
    validateTokenOnce();
  }, [sessionValidated, location.pathname]);

  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
