"use client";

import { useRouter } from "next/navigation";
import React, {
  FormEvent,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import Loading from "./Loading";

const HomeSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [randomSearchInput, setRandomSearchInput] = useState<boolean>(false);

  function handleSubmit(
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
    console.log(input);
  }

  async function randomSearch() {
    try {
      setRandomSearchInput(true);
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word"
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const randomWord = data[0];
        router.push(`/search/web?searchTerm=${randomWord}`);
      }
    } catch (error) {
      console.error("Error fetching random word:", error);
    } finally {
      setRandomSearchInput(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] rounded-full border border-gray-200 px-5 py-3 hover:shadow-md focus-within:shadow-md transition-shadow  sm:max-w-xl lg:max-w-2xl items-center"
      >
        <AiOutlineSearch className="text-lg text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-40 h-10 transition-shadow"
        >
          Google Search
        </button>
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none hover:shadow-md w-40 h-10 transition-shadow "
          onClick={randomSearch}
          disabled={randomSearchInput}
        >
          {randomSearchInput ? (
            <>
              <Loading />
            </>
          ) : (
            <p>I&apos;m Feeling Lucky</p>
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
