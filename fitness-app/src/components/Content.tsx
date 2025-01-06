import Card from "./Card";

interface Props {
  data: object;
}

const Content = ({ data }: Props) => {
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        {Object.entries(data).map(([title, data]) => (
          <div className="col mt-5" key={title}>
            <Card name={title} description={data[0]} weight={data[1]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
