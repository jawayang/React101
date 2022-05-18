import { useState, useEffect } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    //當 data 有變化的時候執行 useEffect 
    return ()=>{
    //取消綁定
    }  
  },[data])
  
  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;

// video --> https://www.youtube.com/watch?v=zqV7NIFGDrQ&t=2475s
