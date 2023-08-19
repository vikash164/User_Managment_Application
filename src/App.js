import React, { useEffect, useState } from "react";
import "./App.css";
import AddDetails from "./components/AddDetails";
import User from "./components/user";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const textStyle = {
    color: 'blue', // Change this to the desired color
  };

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email, phone) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  const onEdit = async (id, updatedData) => {
    try {
      // Make a PUT request to update the user data
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        console.log('Edit failed');
        return;
      }
  
      // Update the users array in the state with the edited data
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === id ? { ...user, ...updatedData } : user
        )
      );
    } catch (error) {
      console.error('Edit error:', error);
    }
  };
 

  console.log(users);
  return (
    <div className="App">
      <h3 style={textStyle}>User Management Application</h3>

      <br />
      <AddDetails onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

