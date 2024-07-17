import React from "react";
import "./UserInfo.css";
import { LuActivity } from "react-icons/lu";

function UserInfo() {
  return (
    <div className="UserInfo">
      <div className="user">
        <img src="../public/Avatar.jpg" alt="Avatar" className="avatar"></img>
        <h2>
          John Doe
          <p>56A,Topi,Swabi,Kpk,pk</p>
        </h2>
        <LuActivity size={20} />
      </div>
      <div className="icons"></div>
    </div>
  );
}

export default UserInfo;
