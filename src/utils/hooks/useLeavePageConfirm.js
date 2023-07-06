
import { useEffect } from "react";

export const useLeavePageConfirm = () => {
  useEffect(() => {
    const handler = (event) => {
      event.preventDefault()
      const message = "Are you sure want to leave this page? You will be kicked out of your table and your entries will be lost."
      event.returnValue = message
      return event
    }

    window.addEventListener("beforeunload", handler, { capture: true })

    return () => {
      window.removeEventListener("beforeunload", handler, { capture: true })
    }
  }, [])
}