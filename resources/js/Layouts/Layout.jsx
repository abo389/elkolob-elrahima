import { Link } from "@inertiajs/react";

export default function Layout ( { children } )
{
  return (
    <>
      <header>
        <div class="navbar bg-base-100 px-5">
          <div class="flex-1">
            <Link href="/" class="btn btn-ghost text-xl">daisyUI</Link>
          </div>
          <div class="flex-none">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */ }
                <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                  <img className="w-1/2" src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" />
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
      <main>{ children }</main>
    </>
  );
}