import NavBar from "../components/NavbarComponent";
import { Outlet } from "react-router-dom";
import CopyrightNotice from "../components/CopyrightNotice";

function DashboardLayout() {
  return (
    <>
      <div className="relative h-screen w-screen flex" data-theme="dark">
        {/* Navigation Main*/}
        <NavBar />
        <div className="h-full w-full flex flex-col bg-base-200">
          <div className="navbar bg-base-100 h-19 shrink-0" />
          <div className="relative flex-1 flex items-center justify-center">
            <Outlet />
          </div>
        </div>
        {/* Copyright Notice */}
        <CopyrightNotice />
      </div>
    </>
  );
}

export default DashboardLayout;
