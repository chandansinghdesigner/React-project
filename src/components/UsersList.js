import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

function UsersList(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);
  const [name, setName] = useState();
  const [posts, setPosts] = useState();
 

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000); // 2 seconds artificial delay
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  }, []);

  useEffect( () => {
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then((res) => res.json())
     .then((data) => {
        setPosts (data);
        setTimeout(() => {
            setLoading(false);
        },2000);
    })
        .catch((err) => {
         console.error('Faild to Error pst user', err);
         setLoading (false);
        } );
     },
    []);
  //  Early return when loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-600 text-white text-xl font-bold">
        Loading users...
      </div>
    );
  }

  //  Actual UI render after loading is false
  return (
    <div className="container-fuild h-full px-8 mt-20">
      <h2 className="text-blue-800 mb-2 text-3xl font-bold">
        {props.name} User List
      </h2>
      
     <div className="grid xl:grid-cols-3 md:grid-cols-3 container-fuild gap-10 mx-auto items-start mb-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white text-red-600 shadow-md p-4 rounded-xl"
          >
            <strong>{post.id}</strong>
            <p className="text-md font-bold text-blue-500 truncate mb-2">{post.title}</p>
            <p className="text-sm font-semibold text-gray-500">{post.body}</p>
            

          </div>
        ))}
      </div>


      <div className="grid xl:grid-cols-4 md:grid-cols-4 container-fuild gap-10 mx-auto items-start mb-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white text-gray-700 shadow-md p-4 rounded-xl"
          >
            <strong>{user.id}</strong>
            <p className="text-md font-bold text-blue-500">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.phone}</p>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h2 className="text-xl mb-2">Count: {count}</h2>
        <button
          className="bg-green-400 px-4 py-2 rounded text-white mr-4"
          onClick={() => setCount(count + 1)}
        >
          Add Number
        </button>
        <button
          className="bg-red-600 px-4 py-2 rounded text-white mr-4"
          onClick={() => setCount(count - 1)}
        >
          Decrease No
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded text-blue-600"
          onClick={() => setCount(0)}
        >
          Clear Number
        </button>
      </div>

      <div className="mb-5">
        <h3 className="text-3xl font-bold text-blue-800">
          LikeDislike <strong>{like}</strong>
        </h3>
        <button
          className="bg-green-400 p-4 text-white mr-3 rounded"
          onClick={() => setLike(like + 1)}
        >
          Like +
        </button>
        <button
          className="bg-red-400 p-4 text-white rounded"
          onClick={() => setLike(like - 1)}
        >
          Dislike -
        </button>
      </div>

      <div className="mb-5">
        <h1 className="text-3xl font-bold text-blue-800">{name}</h1>
        <input
          type="text"
          className="border px-4 py-2 w-80 mb-4"
          placeholder="Type Your Name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default UsersList;
