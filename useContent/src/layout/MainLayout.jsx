import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/nav/Nav";
import style from './MainLayout.module.scss'
export const MainLayout = () => {

  return (
    <main className={style.layoutStyle}>
      <Navigation/>
        <Outlet/>
      <Footer />
    </main>
  );
};