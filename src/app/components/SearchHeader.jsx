import Link from "next/link";
import SearchBox from "./SearchBox";
import {RiSettings3Line} from "react-icons/ri";
import {TbGridDots} from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
        <picture>                
          <img 
            src="/logo.png" 
            alt="logo" 
            className="h-fit w-40"
          />
        </picture>        
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>

        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="btn2 ml-2">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
