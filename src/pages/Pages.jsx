import { Route, Routes } from "react-router-dom";
import Filtered from "./Filtered";
import MainPage from "./MainPage";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<Filtered />} />
    </Routes>
  );
}

export default Pages;
