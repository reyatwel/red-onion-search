import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <picture>                
          <img 
            src="/banner.png" 
            alt="banner logo" 
            className="h-fit w-80"
          />
        </picture>
        <HomeSearch />
      </div>
    </>
  )
}
