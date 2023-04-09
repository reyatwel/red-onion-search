"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {AiOutlineSearch} from "react-icons/ai";
import {BiMicrophone} from "react-icons/bi";

export default function HomeSearch() {
    const router = useRouter();

    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    function handleSubmit (e) {
      e.preventDefault();

      if (!input.trim()) return;

      router.push(`/search/web?searchTerm=${input}`);
    }

    async function randomSearch () {
      setRandomSearchLoading(true);

      const response = await fetch(`https://random-word-api.herokuapp.com/word`)
        .then(res => res.json())
        .then(data => data[0]); 

      if (!response) return;

      await new Promise(resolve => setTimeout(resolve, 2000));

      router.push(`/search/web?searchTerm=${response}`);

      setRandomSearchLoading(false);
    }
    
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl items-center"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input 
            onChange={e => setInput(e.target.value)} 
            value={input}
            type="text" 
            className="flex-grow focus:outline-none"   
        />
        <BiMicrophone className="text-xl text-gray-500" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button 
          onClick={handleSubmit} 
          className="btn"
        >
          RedOnion Search
        </button>
        <button 
          disabled={randomSearchLoading}
          onClick={randomSearch} 
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <Image 
              src="/spinner.svg"              
              width="30"  
              height="30"        
              alt="loader"
            />            
          ) : "Surprise Me"}          
        </button>
      </div>
    </>
  )
}
