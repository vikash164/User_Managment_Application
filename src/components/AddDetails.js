import React from "react";

const AddDetail = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value,e.target.phone.value);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
}
const textStyle = {
    color: 'sky blue', // Change this to the desired color
  };
  const buttonStyle = {
    backgroundColor: 'light green', // Change this to the desired color
    color: 'black', // Text color (optional, adjust as needed)
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'center', }}>
    <form onSubmit={handleOnSubmit}>
      <h3>Create <span style={textStyle}> User</span></h3>
      <input style={{ marginRight: '10px' }} placeholder="Name" name="name" />
      <input style={{ marginRight: '10px' }} placeholder="Email" name="email" />
      <input style={{ marginRight: '10px' }} placeholder="Phone" name="phone" />
      <button style={buttonStyle} type="submit">Create</button>
      <hr />
    </form>
  </div>
  );
};

export default AddDetail;
