import { Input } from "@/components/ui/input";

/**
 * SearchBar
 * A basic search bar.
 *
 * @TODO add functionality lol
 * @TODO add search icon
 * @returns React.JSX.Element
 */
export function SearchBar() {
  return (
    <Input
      className="w-[90%] mx-auto lg:w-[30%] lg:mx-0"
      type="search"
      placeholder="Search Recipe"
    />
  );
}
