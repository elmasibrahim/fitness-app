import Button from "./Button";

interface Props {
  weight: number;
}

const Edit = ({ weight }: Props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-1">
        <Button
          color="secondary"
          icon="dash"
          onClick={() => console.log("Clicked minus")}
        />
        <p className="card-text mx-4">{weight} kg</p>
        <Button
          color="secondary"
          icon="plus"
          onClick={() => console.log("Clicked plus")}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <div className="mx-2">
          <Button
            color="danger"
            icon="x"
            onClick={() => console.log("Clicked exit")}
          />
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
