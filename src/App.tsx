import { Route, Routes } from "react-router";
import Header from "./components/Header";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Blogs } from "./pages/Blogs";
import NewHome from "./pages/NewHome";
// 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
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/island" element={<NewHome />} /> */}
      </Routes>
    </>
  );
}

export default App;
