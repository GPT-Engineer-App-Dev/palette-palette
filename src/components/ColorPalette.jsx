import React from 'react';
import { X } from 'lucide-react';

const ColorPalette = ({ name, colors }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <X className="w-4 h-4 cursor-pointer" />
      </div>
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full cursor-pointer"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;