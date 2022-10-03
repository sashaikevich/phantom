import React from "react"

interface SupportType {
  onSupportRequest: (urlAttr:string) => void
}

export const Support = ({ onSupportRequest }: SupportType) => {
  return <button onClick={() => {
    onSupportRequest("url_current_step_etc")}}>support request</button>
}
