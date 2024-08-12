import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const PaletteOptions = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Also Color</h3>
      <div className="space-y-4">
        <div className="flex space-x-2">
          <Input className="flex-grow" placeholder="Larg moet" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Paner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paner">Paner</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between items-center">
          <span>Colors</span>
          <div className="flex items-center space-x-2">
            <span>Lesk</span>
            <Switch />
            <span className="text-blue-500">bNow</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>Tpes</span>
          <Switch />
        </div>
        <div className="flex justify-between items-center">
          <span>Pouck</span>
          <Switch />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline">Runhl</Button>
          <Button variant="outline">Car</Button>
          <Button variant="outline">Fheking Mai</Button>
          <Button variant="outline">Dectnoer Dare</Button>
          <Button variant="outline">Sble, SI</Button>
        </div>
      </div>
    </div>
  );
};

export default PaletteOptions;