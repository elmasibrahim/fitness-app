import Button from "./Button";
import { useState } from "react";
import post from "./helpers/post";

interface Props {
  weight: number;
  eid: number;
  setEdit: (edit: boolean) => void;
  setWeight: (weight: number) => void;
}

const Edit = ({ weight, eid, setEdit, setWeight }: Props) => {
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

  const handleSaveClick = async () => {
    const data = {
      eid: eid,
      new_weight: editWeight,
    };
    await post("update_weight", data);
    setWeight(editWeight);
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
          <Button color="success" icon="check" onClick={handleSaveClick} />
        </div>
      </div>
    </>
  );
};

export default Edit;
