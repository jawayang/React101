import { useState } from "react"

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data,setDate] = useState([])
  
  return (
    <div className="app">
      <Edit add={setDate}/>
      <List listData={data}/>
    </div>
  );
};

export default Home;

// video --> https://www.youtube.com/watch?v=zqV7NIFGDrQ&t=2475s