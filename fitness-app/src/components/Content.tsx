import Card from "./Card";

const Content = () => {
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        <div className="col mt-5">
          <Card name="NameÜbung" description="DescriptionÜbung" />
        </div>
      </div>
    </div>
  );
};

export default Content;
