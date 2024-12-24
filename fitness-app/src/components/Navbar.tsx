import Control from "./Control";

interface Props {
  title: string;
}

const Navbar = ({ title }: Props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
        <div className="d-flex">
          <Control>Dark Mode</Control>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
