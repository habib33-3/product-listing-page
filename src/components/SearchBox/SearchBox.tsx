"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchText: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchText) {
      params.set("title", searchText);
    } else {
      params.delete("title");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <label
          htmlFor="Search"
          className="sr-only"
        >
          Search
        </label>
        <input
          type="text"
          id="Search"
          placeholder="Search Here..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-full border border-gray-300 py-2.5 pe-12 shadow-md sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out placeholder-gray-400"
          defaultValue={searchParams.get("query")?.toString()}
        />
        <span className="absolute inset-y-0 end-0 flex items-center pr-3 text-gray-400">
          <FaMagnifyingGlass className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
