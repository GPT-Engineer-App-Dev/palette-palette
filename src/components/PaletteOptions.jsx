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
      <h3 className="text-lg font-semibold mb-2">Palette Options</h3>
      <div className="space-y-4">
        <div className="flex space-x-2">
          <Input className="flex-grow" placeholder="Enter a color (e.g., #FF5733)" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Color Format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hex">Hex</SelectItem>
              <SelectItem value="rgb">RGB</SelectItem>
              <SelectItem value="hsl">HSL</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between items-center">
          <span>Lock Colors</span>
          <div className="flex items-center space-x-2">
            <span>Off</span>
            <Switch />
            <span className="text-blue-500">On</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>Dark Mode</span>
          <Switch />
        </div>
        <div className="flex justify-between items-center">
          <span>Accessibility Check</span>
          <Switch />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline">Generate Random</Button>
          <Button variant="outline">Save Palette</Button>
          <Button variant="outline">Copy All Colors</Button>
          <Button variant="outline">Export Palette</Button>
          <Button variant="outline">Color Theory</Button>
        </div>
      </div>
    </div>
  );
};

export default PaletteOptions;