import axios from "axios";
export async function getUsers(page) {
  const users = await axios.get(
    `https://api.stackexchange.com/2.2/search/advanced?page=${page}&order=desc&sort=activity&site=stackoverflow`
  );
  return users.data.items;
}
