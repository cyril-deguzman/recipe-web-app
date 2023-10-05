import React from "react";
import { ModeToggle } from "./modetoggle";
import { MixIcon } from "@radix-ui/react-icons";

/**
 * Nav
 * A basic navbar containing only a logo and a toggle button for
 * light and day modes
 *
 * @returns React.JSX.Element
 */
const Nav = () => {
  return (
    <header>
      <div>
        <ul className="flex flex-row flex-wrap justify-between items-center">
          <li>
            <p className="items-center flex flex-row text-md">
              <MixIcon className="h-[2rem] w-[2rem] pr-1" />
              レシピ
            </p>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
