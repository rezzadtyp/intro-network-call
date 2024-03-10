import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  console.log(users);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:2000/users");
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:2000/products");
      setProducts(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async () => {
    try {
      // const { data } = await axios.post("http://localhost:2000/users", { // kalau butuh data
      await axios.post("http://localhost:2000/users", {
        email: "heru@mail.com",
        password: "purwanto2",
      });

      getUsers();
      alert("create user success");
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.patch("http://localhost:2000/users/1", {
        password: "cihuy",
      });

      alert("update password succes");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete("http://localhost:2000/users/6")

      getUsers();
      alert("delete password succes");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
    getProducts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {users.map((user) => {
        return <div key={user.id}>{user.email}</div>;
      })}
      {products.map((product) => {
        return (
          <div key={product.id}>
            {product.name} {product.price}
          </div>
        );
      })}
      <h1>Products</h1>
      <button onClick={createUser}>create user</button>
      <button onClick={updateUser}>update user</button>
      <button onClick={deleteUser}>delete user</button>
    </div>
  );
};

export default Home;
