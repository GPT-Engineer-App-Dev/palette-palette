import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorPalette from './ColorPalette';
import PaletteOptions from './PaletteOptions';

const ColorPaletteGenerator = () => {
  const [currentPalette, setCurrentPalette] = useState([
    '#F7CAC9', '#92A8D1', '#F4E1D2', '#B37D66', '#5B9AA0', '#2F3640'
  ]);

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Color Palette Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <ColorPalette name="Current Palette" colors={currentPalette} />
            <PaletteOptions />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ColorPaletteGenerator;