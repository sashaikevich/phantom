import React, { useState } from "react"

interface SupportType {
  onSupportRequest: (urlAttr:string) => void
}

export const Support = ({ onSupportRequest }: SupportType) => {
  const [light, setLight] = useState(false)
  return <button onClick={() => {
    onSupportRequest("url_current_step_etc")}}>support request</button>
}
