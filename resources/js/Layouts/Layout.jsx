import { Link } from "@inertiajs/react";
import Theam from "../components/Theam";

export default function Layout ( { children } )
{
  return (
    <>
      <header className="relative z-50">
        <div className="navbar bg-base-100 px-5">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost">
            <Theam />
            </button>
          </div>
          <div className="flex-none">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */ }
                <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu !z-50 bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */ }
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="#">Products</Link></li>
                  <li><Link href="#">Team</Link></li>
                  <li><Link href="#">Our Work</Link></li>
                  <li><Link href="#">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        { children }
      </main>
    </>
  );
}