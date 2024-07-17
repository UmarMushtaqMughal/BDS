import React from "react";
import "./PersonToFind.css";
import UserInfo from "./UserInfo";
import UserList from "./UserList";

export default function PersonToFind() {
  return (
    <div className="PersonToFind">
      <UserInfo />
      <UserList />
    </div>
  );
}
