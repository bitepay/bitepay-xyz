
// import { useEffect } from "react";
// import Router from "next/router";
// import { useBeforeUnload } from "react-use";

// const useLeavePageConfirm = (isConfirm = true, message = "Are you sure want to leave this page? You will be kicked out of your table and your entries will be lost.") => {
//     useBeforeUnload(isConfirm, message);

//     useEffect(() => {
//         const handler = () => {
//             if (isConfirm && !window.confirm(message)) {
//                 throw "Route Canceled";
//             }
//         };

//         Router.events.on("beforeHistoryChange", handler);

//         return () => {
//             Router.events.off("beforeHistoryChange", handler);
//         };
//     }, [isConfirm, message]);
// };

// export default useLeavePageConfirm