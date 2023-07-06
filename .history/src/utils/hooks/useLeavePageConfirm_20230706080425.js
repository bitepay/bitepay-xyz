
import { useEffect } from "react";

export const useLeavePageConfirm = () => {
  useEffect(() => {
    const handler = (event) => {
      event.preventDefault()
      const message = "Are you sure want to leave this page? You will be kicked out of your table and your entries will be lost."
      event.returnValue = message
      return message
    }

    window.addEventListener("beforeunload", handler)

    return () => {
      window.removeEventListener("beforeunload", handler)
    }
  }, [])
}