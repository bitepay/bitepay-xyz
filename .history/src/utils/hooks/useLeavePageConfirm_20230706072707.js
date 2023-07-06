
import { useEffect } from "react";
import { useBeforeUnload } from "react-use";

export const useLeavePageConfirm = () => {
    useBeforeUnload(isConfirm, message);

    useEffect(() => {
        const handler = (event) => {
            console.log("running handler from browser refresh")
            if (isConfirm && !window.confirm(message)) {
                throw "Route Canceled";
            }
        }

        window.addEventListener("beforeunload", handler);

        return () => {
            window.removeEventListener("beforeunload", handler);
        };
    }, []);
};