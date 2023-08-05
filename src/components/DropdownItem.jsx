export const DropdownItem = (props) => {
  const { item, handleItemClick, activeItem } = props;

  return (
    <li onClick={handleItemClick} 
      style={{ color: `${item === activeItem && "#5380F7"}` }}>
      <a href="#">{item}</a>
    </li>
  )
}