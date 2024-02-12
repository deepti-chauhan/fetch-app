import "./App.css";
import "./index.css";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";

function App() {
  return (
    <div>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
