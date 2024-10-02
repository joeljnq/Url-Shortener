import React, { useState } from "react";
import Copy from "../icons/Copy";
import Check from "../icons/Check";

interface ShortenerProps {
  newUrl: string;
}
const Shortener: React.FC<ShortenerProps> = ({ newUrl }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(newUrl);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
  return (
    <div className="max-w-xl w-5/6 lg:max-w-lg mx-auto mt-5 flex text-lg md:max-w-3xl ">
      <label htmlFor="copy" className="sr-only">
        Label
      </label>
      <input className="w-5/6 bg-gray-400/90 dark:bg-transparent dark:border-2 dark:border-gray-700 rounded-lg p-4" defaultValue={newUrl} disabled></input>
      <button className="ml-3 flex items-center w-3/12 justify-center cursor-pointer  bg-blue-300 rounded-lg border border-blue-300 dark:border-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
       onClick={handleCopy}>
        {isCopied ? <Check /> : <Copy />}
         {isCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default Shortener;
