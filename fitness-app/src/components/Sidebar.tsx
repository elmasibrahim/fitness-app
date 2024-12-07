import ListGroup from "./ListGroup";
import "./styles/Sidebar.css";

const Sidebar = () => {
  const items = [
    "Schulter",
    "Rücken",
    "Brust",
    "Bizeps",
    "Trizeps",
    "Beine",
    "Core",
  ];

  return (
    <div className="sidebar">
      <ListGroup items={items} />
    </div>
  );
};

export default Sidebar;
