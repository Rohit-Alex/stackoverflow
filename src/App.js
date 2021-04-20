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
    console.log(e);
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.offsetHeight);
    if (
      document.documentElement.scrollTop + window.innerHeight + 100 >=
      document.documentElement.offsetHeight
    ) {
      setpage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    async function getData() {
      // const newUsers = await getUsers(page);
      const users = await axios.get(
        `https://api.stackexchange.com/2.2/search/advanced?page=${page}&order=desc&sort=activity&site=stackoverflow`
      );
      setObj((prev) => [...prev, ...users.data.items]);
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
      <table>
        <HeaderRow />

        <div>
          {obj?.map((item) => (
            <Item item={item} setCurr={setCurr} setModalOpen={setModalOpen} />
          ))}
        </div>
      </table>
      <Popup curr={curr} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default App;
