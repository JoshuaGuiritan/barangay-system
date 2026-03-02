import NavBar from "../components/NavBar";
import CopyrightNotice from "../components/CopyrightNotice";

function DashboardLayout() {
  return (
    <>
      <div className="relative h-screen w-screen flex" data-theme="dark">
        {/* Navigation Bar */}
        <NavBar />
        <div className="h-full w-full flex flex-col bg-base-200">
          <div className="navbar bg-base-100 h-19"></div>
        </div>
        {/* Copyright Notice */}
        <CopyrightNotice />
      </div>
    </>
  );
}

export default DashboardLayout;
