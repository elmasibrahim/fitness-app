import Button from "./Button";
import { useState } from "react";

interface Props {
  weight: number;
  setEdit: (edit: boolean) => void;
}

const Edit = ({ weight, setEdit }: Props) => {
  const [editWeight, setEditWeight] = useState(weight);

  const handleMinusClick = () => {
    setEditWeight(editWeight - 0.5);
  };

  const handlePlusClick = () => {
    setEditWeight(editWeight + 0.5);
  };

  const handleExitClick = () => {
    setEdit(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-1">
        <Button color="secondary" icon="dash" onClick={handleMinusClick} />
        <p className="card-text mx-4">{editWeight} kg</p>
        <Button color="secondary" icon="plus" onClick={handlePlusClick} />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <div className="mx-2">
          <Button color="danger" icon="x" onClick={handleExitClick} />
        </div>
        <div className="mx-2">
          <Button
            color="success"
            icon="check"
            onClick={() => console.log("Clicked save")}
          />
        </div>
      </div>
    </>
  );
};

export default Edit;
