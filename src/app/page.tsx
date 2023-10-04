import Image from "next/image";
import Nav from "@/components/nav";
import { SearchBar } from "@/components/searchbar";
import { RecipeCard } from "@/components/recipecard";

export default function Home() {
  return (
    <main className="p-8 md:p-20">
      <Nav />
      <section className="pt-6">
        <div>
          <SearchBar />
        </div>
        <div className="pt-6 flex flex-row gap-y-6 justify-between flex-wrap">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </section>
    </main>
  );
}
