import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Studio from "./pages/Studio";

function App() {
  return (
    // The "Routes" container looks at the URL and decides which component to show
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/studio" element={<Studio />} />
    </Routes>
  );
}

export default App;
