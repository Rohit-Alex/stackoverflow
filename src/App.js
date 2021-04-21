import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import HeaderRow from "./component/HeaderRow";
import Item from "./component/Item";
import Popup from "./component/Popup";

function App() {
  const [obj, setObj] = useState([]);
  const [page, setpage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [curr, setCurr] = useState(null);

  const handleScroll = (e) => {
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.offsetHeight);
    if (
      document.documentElement.scrollTop + window.innerHeight + 50 >=
      document.documentElement.offsetHeight
    ) {
      setpage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://api.stackexchange.com/2.2/search/advanced?page=${page}&order=desc&sort=activity&site=stackoverflow`
      );
      setObj((prev) => [...prev, ...res.data.items]);
    }
    getData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);
  console.log(obj);
  return (
    <div className="App">
      <h2
        style={{ display: "grid", placeItems: "center", paddingBottom: "40px" }}
      >
        Stack Overflow
      </h2>
      <div style={{ overflowX: "hidden" }}>
        <HeaderRow />
        <hr />
        <table>
          {obj.map((item) => (
            <>
              <Item
                key={item.question_id}
                item={item}
                setCurr={setCurr}
                setModalOpen={setModalOpen}
              />
              <hr />
            </>
          ))}
        </table>
      </div>
      <Popup curr={curr} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default App;
