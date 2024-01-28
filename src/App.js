import "./App.css";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";

function App() {
  return (
    <div className='font-serif'>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
