export const dynamic = "force-dynamic";

import WebSearchResults from "@/app/components/WebSearchResults";
import Link from "next/link";

export default async function WebSearchPage({searchParams}) {
  const startIndex = searchParams.start || "1";

  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.SEARCH_ENGINE_ID}&q=${searchParams.searchTerm}&start=${startIndex}`
  );

  console.log(response);

  if (!response.ok) {    
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">Try searching for something else or go back to <Link href="/" className="text-[#993366]">homepage</Link>.</p>
      </div>
    )
  }

  return (
    <>
      {results && <WebSearchResults results={data} />}
    </>
  )
}
