import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path = "/login" element = {<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;