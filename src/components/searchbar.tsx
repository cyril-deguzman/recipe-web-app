import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <Input
      className="w-[90%] mx-auto lg:w-[30%] lg:mx-0"
      type="search"
      placeholder="Search Recipe"
    />
  );
}
