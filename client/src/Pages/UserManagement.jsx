import { useState, useEffect } from "react";
import UserForm from "./../Components/UserForm";
import UserTable from "./../Components/UserTable";
import { getUsers, addUser, updateUser, deleteUser, toggleUserStatus } from "../Services/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleAddUser = async (user, resetForm) => {
    await addUser(user);
    fetchUsers();
    resetForm(); // Reset the form fields
  };
  
  const handleUpdateUser = async (user, resetForm) => {
    await updateUser(user);
    setEditingUser(null);
    fetchUsers();
    resetForm(); // Reset the form fields
  };
  
  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleToggleStatus = async (id) => {
    await toggleUserStatus(id);
    fetchUsers();
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#222831]">
      <div className="text-center font-bold text-3xl text-[#CBE4DE] mb-5"><h1>User Management System</h1></div>
      <div className="max-w-4xl mx-auto">
        <UserForm onSubmit={editingUser ? handleUpdateUser : handleAddUser} initialData={editingUser} />
      </div>
      
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto my-4">
        <input
          type="text"
          placeholder="Search users by name or email..."
          className="w-full p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <UserTable users={filteredUsers} onEdit={setEditingUser} onDelete={handleDeleteUser} onToggleStatus={handleToggleStatus} />
    </div>
  );
};

export default UserManagement;
