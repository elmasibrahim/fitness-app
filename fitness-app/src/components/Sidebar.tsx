import ListGroup from "./ListGroup";
import "./styles/Sidebar.css";

interface Props {
  onClick: (mucscleGroup: string) => void;
}

const Sidebar = ({ onClick }: Props) => {
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
      <ListGroup items={items} onClick={onClick} />
    </div>
  );
};

export default Sidebar;
