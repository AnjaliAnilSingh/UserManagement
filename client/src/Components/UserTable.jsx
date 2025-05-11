import React from "react";

const UserTable = ({ users, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div className="overflow-x-auto mx-auto my-6 w-[90%]">
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border p-3 text-center">Name</th>
            <th className="border p-3 text-center">Email</th>
            <th className="border p-3 text-center">Phone</th>
            <th className="border p-3 text-center">Status</th>
            <th className="border p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border text-gray-800">
              <td className="p-3 text-center">{user.name}</td>
              <td className="p-3 text-center">{user.email}</td>
              <td className="p-3 text-center">{user.phone}</td>
              <td
                className={`p-3 text-center font-semibold capitalize ${
                  user.status === "active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.status}
              </td>
              <td className="p-3 flex justify-center gap-3">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition duration-200"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200"
                  onClick={() => onDelete(user._id)}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded transition duration-200"
                  onClick={() => onToggleStatus(user._id)}
                >
                  {user.status === "active" ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
