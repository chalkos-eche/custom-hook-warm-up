import { useFetch } from '../hooks/useFetch';

const baseUrl = 'http://jsonplaceholder.typicode.com';
export const FetchHook = () => {
  const { data: usersData, fetchData: userFetchData } = useFetch(
    baseUrl,
    'users'
  );
  const { data: postsData, fetchData: postFetchData } = useFetch(
    baseUrl,
    'posts'
  );
  const { data: todosData, fetchData: todosFetchData } = useFetch(
    baseUrl,
    'todos'
  );

  return (
    <>
      <h1>useFetch!</h1>
      <button onClick={() => userFetchData}>Users</button>
      <button onClick={() => postFetchData}>Posts</button>
      <button onClick={() => todosFetchData}>Todos</button>
      {todosData && <pre>{JSON.stringify(todosData, null, 2)}</pre>}
    </>
  );
};
