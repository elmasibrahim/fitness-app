import "./styles/Card.css";

interface Props {
  name: string;
  description: string;
  weight: number;
}

const Card = ({ name, description, weight }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Weight: {weight} kg</p>
      </div>
    </div>
  );
};

export default Card;
