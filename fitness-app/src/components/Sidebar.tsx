import ListGroup from "./ListGroup";

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

  return <ListGroup items={items} />;
};

export default Sidebar;
