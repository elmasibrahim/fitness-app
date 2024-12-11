import "./styles/Card.css";

interface Props {
  name: string;
  description: string;
}

const Card = ({ name, description }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
