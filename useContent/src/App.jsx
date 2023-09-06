import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Login } from "./components/login/Login";
import { UserPostsPage } from "./pages/UserPostsPage";
import { UserContextProvider } from "./context/UserContext";
import { UserPage } from "./pages/UserPage";

//login til komponent - post til en server og få en bruger tilbage
//user komponent - se brugerens emial og navn

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/user" element={<UserPage title="User" />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userposts" element={<UserPostsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
