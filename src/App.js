import axios from "axios";
import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import HeaderRow from "./component/HeaderRow";
import styled from "styled-components";
import Item from "./component/Item";
import Popup from "./component/Popup";
import { getUsers } from "./API";
// import data from "./stack overflow.json";
function App() {
  const [obj, setObj] = useState([]);
  const [page, setpage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [curr, setCurr] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleScroll = (e) => {
    console.log(e);
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
      setLoading(true);
      const newUsers = await getUsers(page);
      setObj((prev) => [...prev, ...newUsers]);
      setLoading(false);
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
const Content = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  
  height: 800px;
  margin: 0 auto;
  overflow: auto; */
`;
