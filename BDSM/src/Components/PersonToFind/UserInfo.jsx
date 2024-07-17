import React from "react";
import "./UserInfo.css";

function UserInfo() {
  return (
    <div className="UserInfo">
      <div className="user">
        <img src="../public/Avatar.jpg" alt="Avatar" className="avatar"></img>
        <h2>
          John Doe
          <p>56A,Topi,Swabi,Kpk,pk</p>
        </h2>
      </div>
      <div className="icons"></div>
    </div>
  );
}

export default UserInfo;
