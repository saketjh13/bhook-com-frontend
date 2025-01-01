// import React from "react";
import type { MenuItem as MenuItemType } from "../types"; // Type-only import
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType; // Use the aliased type here
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
      ₹{(menuItem.price).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
