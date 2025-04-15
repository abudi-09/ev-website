import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="Nav">
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};
export default Navbar;
