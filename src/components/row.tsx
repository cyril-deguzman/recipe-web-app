import React from "react";
import { BoxIcon } from "@radix-ui/react-icons";

/**
 * Row
 * a rounded textbox taking up the full width
 * of its container. Options to have an icon before
 * the text can be set.
 *
 * @param {string} text you want to display
 * @param {"box" | "number" | undefined} option "box" or "number" defaults to undefined
 * @param {number} index current index for the "number" option
 * @returns JSX.Element
 */
const Row = ({
  text,
  option = undefined,
  index,
}: {
  text: string;
  option?: "box" | "number" | undefined;
  index?: number;
}) => {
  return (
    <p className="flex flex-row font-medium items-center w-full p-3 pr-3.5 border-inherit border rounded-lg">
      {option == "box" ? (
        <BoxIcon className="shrink-0 h-[1.4rem] w-[1.4rem] pr-2" />
      ) : option == "number" ? (
        <div className="h-[1.6rem] w-[1.6rem] items-center shrink-0 mr-2 border rounded-full">
          <p className="flex justify-center">{index}</p>
        </div>
      ) : null}
      {text}
    </p>
  );
};

export default Row;
