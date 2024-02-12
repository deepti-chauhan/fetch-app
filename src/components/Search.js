import React from "react";
import { useGlobalContext } from "../context/context";
import SearchIcon from "../assests/SearchIcon";
function Search() {
  const { query, searchPost } = useGlobalContext();

  return (
    <>
      <div className="text-center items-center mt-5">
        <h1 className=" text-5xl sm:text-7xl lg:text-9xl text-shadow  mb-5 font-serif">
          Newstalgia 📰
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="  w-3/4 ml-52">
          <div className="flex items-center   justify-center">
            <div className="-mr-5">
              {" "}
              <SearchIcon />
            </div>
            <div className=" -ml-5 lg:w-3/4 md:w-3/6 sm:w-3/6 p-2 rounded-xl bg-white border-black border-2  vector-shadow ">
              <input
                type="text"
                placeholder="search your topic..."
                value={query}
                onChange={(e) => searchPost(e.target.value)}
                className=" bg-transparent text-black outline-none tracking-wide "
                style={{ "font-family": "Courier New" }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
