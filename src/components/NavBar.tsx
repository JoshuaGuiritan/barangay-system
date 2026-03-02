function NavBar() {
  return (
    <>
      <div className="fixed top-0 w-full z-10 navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-1"
                className="btn btn-ghost drawer-button btn-square"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>{" "}
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-1"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu menu-md bg-base-300 font-semibold min-h-full w-80 p-4">
                <div className="p-3 pb-8 flex gap-4 items-center">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-13 rounded-full ring-2 ring-offset-2">
                      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-xl">Joshua Guiritan</div>
                    <div className="text-xs font-light">Barangay Chairman</div>
                  </div>
                </div>
                <li>
                  <details open>
                    <summary>Dashboard</summary>
                    <ul>
                      <li className="font-normal">
                        <a>Home</a>
                      </li>
                      <li className="font-normal">
                        <a>Registration</a>
                      </li>
                      <li className="font-normal">
                        <a>Status Updates</a>
                      </li>
                      <li className="font-normal">
                        <a>Emails</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a href="https://www.facebook.com/p/Sangguniang-Barangay-of-Talisayan-61554184720883/">
            <img src="/barangay-seal.png" className="size-15" />
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
