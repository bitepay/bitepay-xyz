"use client";
import { useEffect } from "react";

export const useReloadPageConfirm = () => {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const confirmationMessage = 'Are you sure you want to refresh the page? You will automatically be kicked out of your table and lost all of your entries.';
      // Check if the event is due to a page refresh
      if (window.PerformanceNavigationTiming.type === "reload") {
        event.preventDefault();
        event.returnValue = confirmationMessage; // Display a confirmation message
      }

      return confirmationMessage; // This is necessary for some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [])
};