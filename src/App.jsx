import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Studio from "./pages/Studio";

function App() {
  return (
    // The "Routes" container looks at the URL and decides which component to show
    /*
    If you just do:
    <div>
      <Home />
      <Upload />
      <Studio />
    <div>
    then react is just gonna render one page and 3 sections instead of 3 pages
     */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/studio" element={<Studio />} />
    </Routes>
  );
}

export default App;
