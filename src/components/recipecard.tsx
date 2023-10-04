import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function RecipeCard() {
  return (
    <Card className="w-[90%] mx-auto md:w-[45%] lg:w-[23%] lg:mx-0">
      <CardContent className="p-0 pt-6 px-6 pb-4">
        <div className="relative w-full h-44 md:h-48 mx-auto">
          <Image
            className="rounded-md object-cover"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80"
            fill
            alt="image of recipe"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0 pb-4">
        <div className="w-[70%]">
          <p className="truncate">Caesar Salad</p>
        </div>

        <Button className="overflow-hidden" size="sm">
          Open
        </Button>
      </CardFooter>
    </Card>
  );
}
