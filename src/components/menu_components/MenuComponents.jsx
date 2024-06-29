import './MenuComponents.css';
import MenuItem from '../menu_item/MenuItem';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  return (
    <div className="menu-container">
      <Link to='/contact' className='menu-column menu-column1'>
        <MenuItem title='Devonshire Special' style={{ zIndex: 2 }} />
      </Link>
      <div className='menu-column menu-column2'>
        <Link to='/contact' className='child-menu-column child-menu-column-1'>
          <MenuItem title='Breakfast' style={{ zIndex: 2 }} />
        </Link> 
        <Link to='/contact' className='child-menu-column child-menu-column-2'>
          <MenuItem title='Lunch' style={{ zIndex: 2 }} />
        </Link>
      </div>
    </div>
  );
};

export default MenuComponent;





