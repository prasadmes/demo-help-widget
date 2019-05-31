import React from 'react'

export default function LiveChat() {
  return (
    <div className="panel live-chat-panel">
      <div className="chat-head">
        <p>
          Welcome user. You will be assigned a customer support user shortly.
        </p>
        <span className="time-stamp">
          {new Date().getHours() + ':' + new Date().getMinutes()}
        </span>
      </div>
    </div>
  )
}
