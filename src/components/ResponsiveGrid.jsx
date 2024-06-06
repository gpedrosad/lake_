import React from 'react';

const ResponsiveGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
        Columna 1
      </div>
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
        Columna 2
      </div>
    </div>
  );
};

export default ResponsiveGrid;