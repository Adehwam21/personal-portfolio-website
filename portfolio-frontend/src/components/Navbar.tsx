import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="flex justify-between items-center p-4">
    <h1 className="text-2xl font-bold">Aaron's Portfolio</h1>
    <ul className="flex gap-4">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
