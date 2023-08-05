import { useState } from "react";
import { DropdownList } from "./DropdownList";

const list = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out'
];

export const Dropdown = () => {
  const [ show, setShow ] = useState(false);

  function showDropdownList() {
    setShow(show => !show);
  }

  return (
    <div className="container">
      <div className="dropdown-wrapper open">
        <button className="btn" onClick={showDropdownList}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        {show === true ? <DropdownList list={list} /> : <></>}
      </div>
    </div>
  )
}
