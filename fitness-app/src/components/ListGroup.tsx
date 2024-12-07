interface Props {
  items: string[];
}

const ListGroup = ({ items }: Props) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
