"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
      <div className="relative">
        <label
          htmlFor="Search"
          className="sr-only"
        >
          {" "}
          Search{" "}
        </label>

        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          defaultValue={searchParams.get("query")?.toString()}
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-700"
          >
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
