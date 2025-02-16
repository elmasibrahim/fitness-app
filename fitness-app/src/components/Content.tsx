import Card from "./Card";
import Button from "./Button";

interface Props {
  data: number[];
}

const Content = ({ data }: Props) => {
  return (
    <div className="container text-center mt-4">
      <Button color="primary" icon="plus" onClick={() => console.log("Clicked")} />
      <div className="row row-cols-3">
        {data.map((eid) => (
          <div className="col mt-5" key={eid}>
            <Card eid={eid} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
