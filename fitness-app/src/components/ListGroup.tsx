interface Props {
  items: string[];
  onClick: (mucscleGroup: string) => void;
}

const ListGroup = ({ items, onClick }: Props) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item}
          className="list-group-item"
          onClick={() => onClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
