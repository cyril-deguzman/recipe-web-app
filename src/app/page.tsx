"use client";

import { SearchBar } from "@/components/searchbar";
import { RecipeCard } from "@/components/recipecard";
import { useState, useEffect } from "react";
import recipesJSON from "../json/recipes.json";

export interface RecipeMetadata {
  name: string;
  imageURL: string;
}

export default function Home() {
  const [recipes, setRecipes] = useState<RecipeMetadata[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setRecipes(recipesJSON);
    setLoading(false);
  }, []);

  return (
    <section className="pt-6">
      <div>
        <SearchBar />
      </div>
      <div className="pt-6 flex flex-row gap-y-6 justify-between flex-wrap">
        {!isLoading && recipes
          ? recipes.map((recipe: RecipeMetadata, index) => {
              return <RecipeCard key={index} recipe={recipe} />;
            })
          : null}
      </div>
    </section>
  );
}
