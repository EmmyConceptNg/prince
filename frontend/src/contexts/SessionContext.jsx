
import { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  // Check session on initial page load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/session-check", {
          credentials: "include",
        });
        const data = await response.json();
        if (data.sessionId) {
          setSession(data);
        }
      } catch (err) {
        console.error("Failed to check session", err);
      }
    };

    checkSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
