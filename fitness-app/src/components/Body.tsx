import Sidebar from "./Sidebar";
import Content from "./Content";
import "./styles/Body.css";

const Body = () => {
  return (
    <div className="row">
      <div className="col-2 left-col">
        <Sidebar />
      </div>
      <div className="col">
        <Content />
      </div>
    </div>
  );
};

export default Body;
