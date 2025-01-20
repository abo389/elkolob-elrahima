import { Link } from "@inertiajs/react";

export default function Layout ( { children } )
{
  return (
    <>
      <header>
        <nav >
          <div className="text-white font-bold">KIND HEART</div>
          <div className="sm:flex hidden justify-between items-center">
          <menu>
            <Link className="nav-link" href="#home">Home</Link>
            <Link className="nav-link" href="#products">Products</Link>
            <Link className="nav-link" href="#team">Team</Link>
            <Link className="nav-link" href="#work">Our Work</Link>
            <Link className="nav-link" href="#contact">Contact</Link>
          </menu>
          <Link href="#contact" className="nav-link bg-blue-400">Donate Now</Link>
          </div>
        </nav>
      </header>
      <main>{ children }</main>
    </>
  );
}