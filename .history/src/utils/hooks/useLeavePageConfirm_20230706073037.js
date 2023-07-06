
import { useEffect } from "react";
import { useBeforeUnload } from "react-use";

export const useLeavePageConfirm = (isConfirm = true, message = "Are you sure want to leave this page? You will be kicked out of your table and your entries will be lost.") => {
    useBeforeUnload(isConfirm, message);

    useEffect(() => {
        const handler = (event) => {
            event.preventDefault();
            console.log("running handler from browser refresh")
            if (isConfirm && !window.confirm(message)) {
                throw "Route Canceled";
            }
        }

        window.addEventListener("beforeunload", handler);

        return () => {
            window.removeEventListener("beforeunload", handler);
        };
    }, [isConfirm, message]);
};