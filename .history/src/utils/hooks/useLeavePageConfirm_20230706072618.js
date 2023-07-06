
import { useEffect } from "react";


export const useLeavePageConfirm = () => {


  useEffect(() => {
    const handler = (event) => {
      console.log("running handler from browser refresh")
      event.preventDefault();

      const message = "Are you sure you want to leave the table? You will automatically be removed from the bill and your entries will be lost."

      event.returnValue = message;

      return message;
    }

    window.addEventListener("beforeunload", handler);

    return () => {
        window.removeEventListener("beforeunload", handler);
    };
  }, []);
};