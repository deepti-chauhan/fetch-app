import React from "react";
import { useGlobalContext } from "../context/context";
import "tailwindcss/tailwind.css";
function Search() {
  const { query, searchPost } = useGlobalContext();

  return (
    <>
      <div className="rounded-xl">
        <h1 className="text-3xl font-bold underline">Newstalgia</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search your topic..."
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
