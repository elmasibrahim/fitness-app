import { useEffect, useState } from "react";
import "./styles/Card.css";
import get from "./helpers/request";

interface Props {
  eid: number;
}

const Card = ({ eid }: Props) => {
  const [data, setData] = useState({ description: "", name: "", weight: 0.0 });

  useEffect(() => {
    const getData = async () => {
      const path = "exercise/" + eid;
      const data = await get(path);
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
        <p className="card-text">Weight: {data.weight} kg</p>
      </div>
    </div>
  );
};

export default Card;
