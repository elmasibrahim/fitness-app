import Card from "./Card";

interface Props {
  data: object;
}

const Content = ({ data }: Props) => {
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        {Object.entries(data).map(([title, description]) => (
          <div className="col mt-5" key={title}>
            <Card name={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
