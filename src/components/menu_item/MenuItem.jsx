import './MenuItem.css';

function MenuItem({title}) {
  return (
    <div>
      <div className="menu-item-overlay">
        <h1 className="menu-item-title">{title}</h1>
      </div>
    </div>
  );
} 

export default MenuItem;
