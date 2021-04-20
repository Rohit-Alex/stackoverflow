export const getUsers = async (page) => {
  const users = await (
    await fetch(
      `https://api.stackexchange.com/2.2/search/advanced?page=${page}&order=desc&sort=activity&site=stackoverflow`
    )
  ).json();
  return users.items;
};
