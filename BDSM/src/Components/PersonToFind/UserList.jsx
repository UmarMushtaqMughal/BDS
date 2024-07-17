import React from "react";
import { MdPersonSearch } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

import "./UserList.css";
function UserList() {
  return (
    <>
      <div className="UserList">
        <div className="search">
          <div className="searchBar">
            <input type="text" placeholder="Search..." />
            <MdPersonSearch className="Add" />
          </div>
        </div>

        <div className="users">
          <FaUser className="Avatar" />
          <div className="Details">
            <span>Jane Do</span>
            <p>Blood: AB+</p>
          </div>
          <IoLocation className="LocationPin" />
        </div>
        <div className="users">
          <FaUser className="Avatar" />
          <div className="Details">
            <span>Jane Do</span>
            <p>Blood: AB+</p>
          </div>
        </div>
        <div className="users">
          <FaUser className="Avatar" />
          <div className="Details">
            <span>Jane Do</span>
            <p>Blood: AB+</p>
          </div>
        </div>
        <div className="users">
          <FaUser className="Avatar" />
          <div className="Details">
            <span>Jane Do</span>
            <p>Blood: AB+</p>
          </div>
        </div>
        <div className="users">
          <FaUser className="Avatar" />
          <div className="Details">
            <span>Jane Do</span>
            <p>Blood: AB+</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
