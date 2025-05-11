import { useState } from "react";
import formwave from "./../assets/formwave.png";

const UserForm = ({ onSubmit, initialData }) => {
  const [user, setUser] = useState(
    initialData || { name: "", email: "", phone: "", status: "active" }
  );

  // Function to reset form fields
  const resetForm = () => {
    setUser({ name: "", email: "", phone: "", status: "active" });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="relative bg-gradient-to-b from-gray-600 to-gray-900 bg-opacity-50 p-[50px] pb-[180px] mb-[90px] mx-[200px] shadow-2xl shadow-purple space-y-3 overflow-hidden"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(user, resetForm);
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        className="w-full border p-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-inset-2 focus:ring-inset-gray-800 transition duration-200 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        className="w-full border p-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-inset-2 focus:ring-inset-gray-800 transition duration-200 rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={user.phone}
        onChange={handleChange}
        className="w-full border p-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-inset-2 focus:ring-inset-gray-800 transition duration-200 rounded"
      />
      <select
        name="status"
        value={user.status}
        onChange={handleChange}
        className="w-full border p-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-inset-2 focus:ring-inset-gray-800 transition duration-200 rounded"
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      {/* Centered Button with Bottom Space */}
      <div className="flex justify-center mb-8">
        <button
          type="submit"
          className="relative overflow-hidden px-6 py-3 text-[17px] font-extrabold text-white rounded-3xl shadow-md bg-gradient-to-r from-purple to-mint hover:bg-gradient-to-l from-purple to-mint transition-transform duration-200 ease-in-out hover:scale-105"
        >
          {initialData ? "Update User" : "Add User"}
        </button>
      </div>

      {/* Sticky Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <img src={formwave} className="w-full h-auto" alt="Form Wave" />
      </div>
    </form>
  );
};

export default UserForm;
