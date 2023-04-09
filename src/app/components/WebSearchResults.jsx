import Link from "next/link"
import Parser from "html-react-parser";
import Pagination from "./Pagination";

export default function WebSearchResults({results}) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-sm mb-5 mt-3">
            About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>

        {results.items?.map(result => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link 
                href={result.link}
                className="text-sm truncate"
            >
                {result.formattedUrl}
            </Link>
            <Link
                href={result.link}
                className="group-hover:underline decoration-[#993366] text-xl truncate font-medium text-[#993366]"
            >
                {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <Pagination />
    </div>
  )
}
