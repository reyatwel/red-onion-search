"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import {RxCross2} from "react-icons/rx";
import {AiOutlineSearch} from "react-icons/ai";
import {BiMicrophone} from "react-icons/bi";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!term.trim()) return;

    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
      >
        <input 
          onChange={e => setTerm(e.target.value)} 
          type="text" 
          value={term} 
          className="w-full focus:outline-none" 
        />
        <RxCross2 
          onClick={() => setTerm("")} 
          className="text-xl text-gray-500 cursor-pointer sm:m-2" 
        />        
        <AiOutlineSearch 
          onClick={handleSubmit}
          className="hidden sm:inline-flex text-4xl text-[#993366] pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer"
        />
        <BiMicrophone className="text-xl hidden sm:inline-flex text-[#993366] cursor-pointer" />
      </form>
    </div>
  )
}
