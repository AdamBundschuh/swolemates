import React from "react";
import "../styling/ChatRow.css";
import Avatar from "@mui/material/Avatar";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <div className="chatRow">
      <Avatar className="chatRow__image" alt={name} src={profilePic} />
      <div className="chatRow__chatDetails">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chatRow__timestamp">{timestamp}</p>
    </div>
  );
}

export default Chat;
