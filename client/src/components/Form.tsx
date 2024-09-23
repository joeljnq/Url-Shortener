import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler,  } from "react-hook-form";

type Input = {
  url: string;
};
interface FormProps{
  onNewUrl : (url:string) => void;
}
const Form: React.FC<FormProps> = ({onNewUrl}) => {
  const { register, handleSubmit, reset } = useForm<Input>();
  const [url, setUrl] = useState<string>("");
  const onSubmit: SubmitHandler<Input> = (data) => {
    setUrl(data.url)
    reset();
  };
  
  useEffect(()=>{
    const sendURL = async (longURL: string) => {
      try {
        const response = await fetch("http://127.0.0.1:1234/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ longURL }),
        });
       await response.json().then((data: Input)=> onNewUrl(data.url));
        
      } catch (error) {
        console.error(error);
      }
    }
    if(url){
      sendURL(url);
      
    }
  },[url, onNewUrl]);
 

  return (
    <form className="flex items-center max-w-lg mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="url" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="url"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search branch name..."
          {...register('url')}
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default Form;
