import Sidebar from "./Sidebar";
import Content from "./Content";
import "./styles/Body.css";
import { useState } from "react";

const Body = () => {
  const [data, setData] = useState(null);

  const fetchData = async (path: string) => {
    const response = await fetch("http://127.0.0.1:5000/" + path);
    const result = await response.json();
    return result;
  };

  const handleSidebarClick = async (mucscleGroup: string) => {
    const data = await fetchData(mucscleGroup);
    setData(data);
  };

  return (
    <div className="row">
      <div className="col-2 left-col">
        <Sidebar onClick={handleSidebarClick} />
      </div>
      <div className="col">
        <Content />
      </div>
    </div>
  );
};

export default Body;
