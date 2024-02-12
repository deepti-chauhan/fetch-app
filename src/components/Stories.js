// import BinIcon from "../assests/BinIcon";
import CrossIcon from "../assests/CrossIcon";
import { useGlobalContext } from "../context/context";
import ReactLoading from "react-loading";
function Stories() {
  const { hits, isLoading, removePost, isError } = useGlobalContext();

  return (
    <div className=" font-mono h-full m-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 relative ">
      {isLoading && (
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 text-yellow-400">
          <ReactLoading
            type={"spin"}
            color={"blue"}
            height={"50%"}
            width={"50%"}
          />
          <p>loading...</p>
        </div>
      )}
      {isError && <h2>Error</h2>}
      {hits.map((currPost) => {
        const { title, author, objectID, url, num_comments } = currPost;
        return (
          <div className="">
            <div
              className="  border-solid border-2 border-black rounded-xl vector-shadow"
              key={objectID}
            >
              <div className=" flex justify-end items-end p-2 bg-blue-700 border-solid border-b-2 border-black rounded-t-xl cursor-pointer ">
                <div onClick={() => removePost(objectID)} className="">
                  {/* <BinIcon /> */}
                  <CrossIcon />
                </div>
              </div>
              <h2 className="  text-xl font-bold h-20 p-4 ">{title}</h2>
              <p className=" pl-4  h-10 items-end mt-4 mb-4">
                By <span>{author}</span> | <span>{num_comments}</span> Comments
              </p>
              <div className="h-10  rounded-b-xl">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className=" border-black border-2 border-solid p-1 pl-4 pr-4 ml-5"
                >
                  Read More
                </a>
                <a
                  href="#"
                  id="rmv-btn"
                  onClick={() => removePost(objectID)}
                  className="  border-black border-2 border-solid p-1 ml-5 pl-4 pr-4"
                >
                  Remove
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
