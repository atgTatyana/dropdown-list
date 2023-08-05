import { useState } from "react";

import { DropdownItem } from "./DropdownItem";

export const DropdownList = (props) => {
  const { list } = props;
  const [ activeItem, setActiveItem ] = useState('Profile Information')

  function handleItemClick(e){
    setActiveItem(e.target.textContent)
  }

  return (
    <ul className="dropdown">
      {list.map(item => <DropdownItem key={crypto.randomUUID()}
        item={item}
        handleItemClick={handleItemClick}
        activeItem={activeItem} />)}
    </ul>
  )
}
