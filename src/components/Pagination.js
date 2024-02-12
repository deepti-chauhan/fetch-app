import React from "react";
import { useGlobalContext } from "../context/context";

function Pagination() {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className=" flex justify-center items-center mt-5 ">
        <button
          onClick={() => getPrevPage()}
          className=" outline-none border-black border-2 p-1 pl-5 pr-5 mr-4 vector-shadow"
        >
          {" "}
          PREV{" "}
        </button>
        <p className="font-mono text-shadow">
          {page + 1} of {nbPages}
        </p>
        <button
          onClick={() => getNextPage()}
          className="outline-none border-black border-2 p-1 pl-5 pr-5 ml-4 vector-shadow"
        >
          {" "}
          NEXT{" "}
        </button>
      </div>
    </>
  );
}

export default Pagination;
