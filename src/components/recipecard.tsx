import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { RecipeMetadata } from "@/app/page";

/**
 * RecipeCard
 * A card containing an image, title, and button.
 *
 * @param {Recipe} recipe the recipe object
 * @returns React.JSX.Element
 */
export function RecipeCard({ recipe }: { recipe: RecipeMetadata }) {
  const router = useRouter();

  const createQueryString = (name: string, value: string): string => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };

  return (
    <Card className="w-[90%] mx-auto md:w-[45%] lg:w-[23%] lg:mx-0">
      <CardContent className="p-0 pt-6 px-6 pb-4">
        <div className="relative w-full h-44 md:h-48 mx-auto">
          <Image
            className="rounded-md object-cover"
            src={recipe.imageURL}
            fill
            alt="image of recipe"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0 pb-4">
        <div className="w-[70%]">
          <p className="truncate">{recipe.name}</p>
        </div>

        <Button
          onClick={() => {
            router.push(`/recipe?${createQueryString("name", recipe.name)}`);
          }}
          className="overflow-hidden"
          size="sm"
        >
          Open
        </Button>
      </CardFooter>
    </Card>
  );
}
