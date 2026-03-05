import NavBar from "../components/NavbarComponent";
import { Outlet } from "react-router-dom";
import CopyrightNotice from "../components/CopyrightNotice";

function DashboardLayout() {
  return (
    <>
      <div
        className="relative bg-base-100 min-h-screen w-full flex"
        data-theme="corporate"
      >
        {/* Navigation Main */}
        <NavBar />
        <div className="w-full flex flex-col bg-base-200">
          <div className="navbar h-19 shrink-0" />
          <div className="flex-1 p-10">
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
