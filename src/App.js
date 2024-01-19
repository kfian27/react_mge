import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./view/list/list";
import PageMaster from "./view/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<PageMaster />}>
          <Route path="list" element={<List />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
