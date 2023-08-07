type User = {
  id: number;
  name: string;
  email: string;
};

const usersUrl = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  const res = await fetch(usersUrl);
  const users: User[] = await res.json();
  return users;
};

const UserList = async () => {
  console.log(usersUrl);
  // const option = "文字列";
  // const { data, error, isLoading } = useSWR(usersUrl, getUsers);
  const users: User[] = await getUsers();
  return <ul>{users?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
};

export default UserList;
