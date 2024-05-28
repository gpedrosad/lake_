import './MenuComponents.css';
import MenuItem from '../menu_item/MenuItem';

const MenuComponent = () => {
  return (
    <div className="menu-container">
        <div className='menu-column menu-column1'>
            <MenuItem title='Devonshire Special'/>
        </div>
        <div className='menu-column menu-column2'>
            <div className='child-menu-column-1'>
            <MenuItem title='Breakfast'  />
            </div>
            <div className='child-menu-column-2'>
            <MenuItem title='Lunch' />

            </div>



        </div>

    </div>
  );
};

export default MenuComponent;



