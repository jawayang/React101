import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const app = {
 color:'red'
}

const Home = () => {
  return (
    <div style={app}>
      <Edit/>
      <List/>
    </div>
  );
};

export default Home;

// video --> https://www.youtube.com/watch?v=zqV7NIFGDrQ&t=2475s