import { useState } from "react"

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  // 新增一個 useState(預設值) 以取得 [變數,設定變數的函式]
  const [a,setA] = useState(0)
  // 設定按鈕點擊(onClick)的行為，呼叫設定變數 a 的函式,且定義該值的變化方式
  // 原本的值加上 200 後回傳,用來確保每一次的呼叫都是用最後的值去加上 200  
  const plus = ()=>{
    setA((prev)=>prev+200)
  }
  
  return (
    <div className="app">
      <button onClick={plus}>加法</button> &nbsp; 
      {a}
      <Edit/>
      <List/>
    </div>
  );
};

export default Home;

// video --> https://www.youtube.com/watch?v=zqV7NIFGDrQ&t=2475s