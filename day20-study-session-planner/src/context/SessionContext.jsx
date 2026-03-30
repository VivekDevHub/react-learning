import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();
// yeh apna consumer ban gaya hai or consumer baad provider banate hai

// provider means data dena
export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState(() => {
    const stored = localStorage.getItem("sessions");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  //Add Session
  const addSession = (data) => {
    setSessions((prev) => [...prev, { id: Date.now(), ...data }]);
  };

  //Delete Session
  const deleteSession = (id) => {
    setSessions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <SessionContext.Provider value={{ sessions, addSession, deleteSession }}>
      {children}
    </SessionContext.Provider>
  );
};
