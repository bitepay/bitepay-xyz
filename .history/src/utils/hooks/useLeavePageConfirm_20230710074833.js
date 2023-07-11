"use client"
import { useEffect } from "react";

export const useLeavePageConfirm = () => {
  
  const message = "Are you sure want to leave this page? You will be kicked out of your table and your entries will be lost."

  useEffect(() => {

    const isChrome = () => navigator.userAgent.includes('Chrome')

    const handler = (event) => {
      event.preventDefault()
      if (!isChrome) {
        event.preventDefault()
      } else {
        // console.log('userAgent has Chrome')
  
        event.returnValue = message
  
        return event

      }
    }

    window.addEventListener("beforeunload", handler)

    return () => {
      window.removeEventListener("beforeunload", handler)
    }
  }, [])
}