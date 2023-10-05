"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IconJarLogoIcon, DrawingPinIcon } from "@radix-ui/react-icons";
import recipesJSON from "../../json/recipes.json";
import Row from "@/components/row";

export interface Recipe {
  name: string;
  ingredients: {
    quantity: string;
    name: string;
    type: string;
  }[];
  steps: Array<string>;
  timers: Array<number>;
  imageURL: string;
  originalURL?: string;
}

/**
 * Recipe page
 * a detailed account of the recipe.
 *
 * @TODO handle invalid search queries
 * @TODO design
 * @returns JSX.element
 */
export default function RecipePage() {
  const searchParams = useSearchParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const queryParam = searchParams.get("name");

    const data: Recipe | undefined = recipesJSON.find(
      (recipe: Recipe) => recipe.name === queryParam
    );

    setRecipe(data);
    setLoading(false);
  }, [searchParams]);

  return (
    <section className="pt-6">
      {!isLoading && recipe ? (
        <div className="flex flex-col w-[90%] md:w-[35%] mx-auto">
          <div className="relative w-full h-40 md:h-64">
            <Image
              className="rounded-md object-cover"
              src={recipe.imageURL}
              fill
              alt="image of recipe"
            />
          </div>
          <div className="pt-1.5">
            <p className="text-center font-semibold text-xl">{recipe.name}</p>
          </div>
          <div className="pt-5">
            <p className="items-center font-medium text-lg flex flex-row">
              <IconJarLogoIcon className="h-[1.4rem] w-[1.4rem] pr-1" />{" "}
              Ingredients
            </p>
            <div className="flex flex-col pt-2 gap-y-3.5">
              {recipe.ingredients.map((item, index) => {
                return <Row key={index} option="box" text={item.name} />;
              })}
            </div>
          </div>
          <div className="pt-8">
            <p className="items-center font-medium text-lg flex flex-row">
              <DrawingPinIcon className="h-[1.4rem] w-[1.4rem] pr-1" /> Steps
            </p>
            <div className="flex flex-col pt-2 gap-y-3.5">
              {recipe.steps.map((step, index) => {
                return (
                  <Row
                    key={index}
                    index={index + 1}
                    option="number"
                    text={step}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
}
