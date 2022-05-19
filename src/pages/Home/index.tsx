import { useState, useEffect } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import {API_GET_DATA} from '../../global/constants'

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async ()=>{
    const res = await fetch(API_GET_DATA)
    const data = await res.json()
    console.log(data)
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;

// video --> https://www.youtube.com/watch?v=zqV7NIFGDrQ&t=2475s
