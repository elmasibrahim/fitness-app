import Sidebar from "./Sidebar";
import Content from "./Content";
import "./styles/Body.css";
import { useState } from "react";
import get from "./helpers/request";

const Body = () => {
  const [data, setData] = useState([]);

  const handleSidebarClick = async (mucscleGroup: string) => {
    const data = await get(mucscleGroup);
    setData(data);
  };

  return (
    <div className="row">
      <div className="col-2 left-col">
        <Sidebar onClick={handleSidebarClick} />
      </div>
      <div className="col">
        <Content data={data} />
      </div>
    </div>
  );
};

export default Body;
