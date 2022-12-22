import React from "react";
import "../styling/ChatList.css";
import ChatRow from "./ChatRow";

function ChatList() {
  return (
    <div className="chatLists">
      <ChatRow
        name="Mark"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://image.enjoymovie.net/4x75-Pp15a-xvtZS9pk_ClTVEN8=/256x256/smart/core/p/zDwvZP3GW8.jpg"
      />
      <ChatRow
        name="Ellen"
        message="Hey cutie"
        timestamp="12 minutes ago"
        profilePic="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397182949/02f3db51863622090f286f13c4eb8e43.jpg"
      />
      <ChatRow
        name="Carrie"
        message="You like charcoocherie?"
        timestamp="35 minutes ago"
        profilePic="https://s3.amazonaws.com/media.muckrack.com/profile/images/1475054/carrie-keagan.jpeg.256x256_q100_crop-smart.jpg"
      />
      <ChatRow
        name="Rudolph"
        message="Hey bitch, you look good"
        timestamp="2 hours ago"
        profilePic="https://apprecs.org/ios/images/app-icons/256/cd/1175152589.jpg"
      />
    </div>
  );
}

export default ChatList;
