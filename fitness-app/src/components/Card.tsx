import { useEffect, useState } from "react";
import "./styles/Card.css";
import get from "./helpers/request";
import Button from "./Button";
import Edit from "./Edit";

interface Props {
  eid: number;
}

const Card = ({ eid }: Props) => {
  const [data, setData] = useState({ description: "", name: "", weight: 0.0 });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const path = "exercise/" + eid;
      const data = await get(path);
      setData(data);
    };
    getData();
  }, []);

  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <div className="card">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{data.name}</h5>
        {edit ? (
          <Edit weight={data.weight} />
        ) : (
          <>
            <p className="card-text flex-grow-1">{data.description}</p>
            <div className="mt-auto d-flex justify-content-between align-items-center">
              <p className="card-text">Weight: {data.weight} kg</p>
              <Button
                color="primary"
                icon="pencil-square"
                onClick={handleEditClick}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
