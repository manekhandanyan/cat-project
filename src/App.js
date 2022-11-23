import { BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories";
import MainPage from "./pages/MainPage";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
export default App;
