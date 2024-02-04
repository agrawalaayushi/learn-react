import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
  const [status, setStatus] = useState(true); // assuming initially true

  useEffect(() => {
    // check if online
    addEventListener("online", (event) => {
        setStatus(true)
    });
    addEventListener("offline", (event) => {
        setStatus(false)
    });
    // return () => {
    //   window.removeEventListener('online');
    //   window.removeEventListener('offline');
    // };
  }, []); // call it once

  return status
};
