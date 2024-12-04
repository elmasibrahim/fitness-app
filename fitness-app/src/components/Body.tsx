import Sidebar from "./Sidebar";
import "./styles/Body.css";

const Body = () => {
  return (
    <div className="row">
      <div className="col-2 left-col">
        <Sidebar />
      </div>
    </div>
  );
};

export default Body;
