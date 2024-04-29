import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
          <NavLink to="/posts" className={setActive}>
            Blog
          </NavLink>
          <NavLink to="/about" className={setActive}>
            About
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <footer style={{ marginTop: "50px" }}>2024</footer>
    </>
  );
}
export { Layout };
