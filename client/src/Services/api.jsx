import React from 'react'
import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addUser = async (user) => {
  return await axios.post(API_URL, user);
};

export const updateUser = async (user) => {
  return await axios.put(`${API_URL}/${user._id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const toggleUserStatus = async (id) => {
  return await axios.patch(`${API_URL}/status/${id}`);
};


