
import { useEffect } from "react";
import { useBeforeUnload } from "react-use";

export const useLeavePageConfirm = (isConfirm = true, message = "Are you sure want to leave this page? You will be kicked out of your table and your entries will be lost.") => {
    useBeforeUnload(isConfirm, message);

    useEffect(() => {
        const handler = (event) => {
          const alert = "Are you sure want to leave this page? You will be kicked out of your table and your entries will be lost.";
          event.preventDefault();
          event.returnValue = alert;
            console.log("running handler from browser refresh")
            if (isConfirm && !window.confirm(message)) {
                throw "Route Canceled";
            }
          return alert
        }

        window.addEventListener("beforeunload", handler);

        return () => {
            window.removeEventListener("beforeunload", handler);
        };
    }, [isConfirm, message]);
};