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
        <CardTitle>Color Palettes</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="fodong">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lise-mud">Lise Mud</TabsTrigger>
            <TabsTrigger value="fodong">Fodong</TabsTrigger>
            <TabsTrigger value="copy-hite-the-yow">Copy hite the Yow</TabsTrigger>
          </TabsList>
          <TabsContent value="fodong">
            <ColorPalette name="Joung Venic" colors={currentPalette} />
            <PaletteOptions />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ColorPaletteGenerator;