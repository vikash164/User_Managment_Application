import React, { useState } from 'react';
import './user.css';

const User = ({ id, email, name, phone, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    if (isEditing) {
      // Save changes and call onEdit
      const updatedData = {
        name: editedName,
        email: editedEmail,
        phone: editedPhone,
      };
      onEdit(id, updatedData);

      setIsEditing(false); // Disable editing mode
    } else {
      setIsEditing(true); // Enable editing mode
    }
  };

  return (
    <div className='list'>
      {isEditing ? (
        <>
          <input
            type='text'
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type='text'
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <input
            type='text'
            value={editedPhone}
            onChange={(e) => setEditedPhone(e.target.value)}
          />
        </>
      ) : (
        <>
          <span>{name}</span>
          <span>{email}</span>
          <span>{phone}</span>
        </>
      )}
      <span>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
         <span style={{ margin: '0 5px' }}></span> 
        <button onClick={handleDelete}>Delete</button>
      </span>
    </div>
  );
};

export default User;
