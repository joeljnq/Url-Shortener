import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendURL } from "../services/longURL.js";
import Search from "../icons/Search";

type Input = {
  url: string;
};
interface FormProps {
  onNewUrl: (url: string) => void;
  onChangeError: (error: string) => void;
}
interface SendURLProps {
  url: string;
}

function useSendURL({ url }: SendURLProps) {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (url && validateURL(url) === false) {
      setError("Invalid URL");
      return;
    }

    if (url) {
      sendURL(url).then((data) => {
        if (data) {
          setData(data);
          setError("");
        } else {
          setError("Failed to shorten URL");
        }
      });
    }
  }, [url]);

  return { data, error };
}
const validateURL = (url: string) => {
  try {
    if (url.includes("localhost")) {
      return false;
    }
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
const Form: React.FC<FormProps> = ({ onNewUrl, onChangeError }) => {
  const { register, handleSubmit, reset } = useForm<Input>();
  const [url, setUrl] = useState<string>("");
  const { data, error } = useSendURL({ url });

  useEffect(() => {
    onNewUrl(data);
  }, [data, onNewUrl]);

  useEffect(() => {
    onChangeError(error);
  }, [error, onChangeError]);

  const onSubmit: SubmitHandler<Input> = (data) => {
    setUrl(data.url);
    reset();
  };

  return (
    <form
      className="flex w-5/6 max-w-full items-center  md:max-w-3xl lg:max-w-lg mx-auto mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="url" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="url"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search branch name..."
          {...register("url")}
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium  bg-blue-300 rounded-lg border border-blue-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Search />

        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default Form;
