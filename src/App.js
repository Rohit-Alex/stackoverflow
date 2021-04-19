import axios from "axios";
import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import HeaderRow from "./component/HeaderRow";
import Item from "./component/Item";
import Popup from "./component/Popup";

// import data from "./stack overflow.json";
function App() {
  const [obj, setObj] = useState([]);
  const [page, setpage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [curr, setCurr] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://api.stackexchange.com/2.2/search/advanced?page=${page}&order=desc&sort=activity&site=stackoverflow`
        );
        console.log(res.data);
        setObj(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [page]);

  return (
    <div className="App">
      <table>
        <HeaderRow />

        {obj?.items.map((item) => (
          <Item item={item} setCurr={setCurr} setModalOpen={setModalOpen} />
        ))}
      </table>
      <Popup curr={curr} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default App;
