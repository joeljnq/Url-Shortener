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
    <div className="lg:max-w-lg mx-auto mt-5 flex text-lg">
      <label htmlFor="npm-install" className="sr-only">
        Label
      </label>
      <input className="w-4/6 bg-gray-400/90 dark:bg-transparent dark:border-2 dark:border-gray-700 rounded-lg p-4" defaultValue={newUrl} disabled></input>
      <p className="ml-3 flex items-center rounded-lg dark:bg-gray-700 w-2/6 py-2 justify-center cursor-pointer"
       onClick={handleCopy}>
        {isCopied ? <Check /> : <Copy />}
         {isCopied ? "Copied" : "Copy Link"}
      </p>
    </div>
  );
};

export default Shortener;
