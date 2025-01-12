import "./styles/Card.css";

interface Props {
  eid: number;
}

const Card = ({ eid }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{eid}</h5>
        <p className="card-text">Text</p>
        <p className="card-text">Weight</p>
      </div>
    </div>
  );
};

export default Card;
