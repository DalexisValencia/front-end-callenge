import { Outlet } from "react-router-dom";
import NavSearch from "../components/navSearch/navSearch";

const Layout = () => {
    return (
        <>
            <NavSearch/>
            <Outlet/>
        </>
    )
}

export default Layout;