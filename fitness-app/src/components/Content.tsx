import Card from "./Card";
import Button from "./Button";
import { useState } from "react";

interface Props {
  data: number[];
}

const Content = ({ data }: Props) => {
  const [add, setAdd] = useState(false);

  const handleAddClick = () => {
    setAdd(true);
  };

  return (
    <div className="container text-center mt-4">
      {add ? (
        <h1>Übung hinzufügen</h1>
      ) : (
        <>
          <Button color="primary" icon="plus" onClick={handleAddClick} />
          <div className="row row-cols-3">
            {data.map((eid) => (
              <div className="col mt-5" key={eid}>
                <Card eid={eid} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
