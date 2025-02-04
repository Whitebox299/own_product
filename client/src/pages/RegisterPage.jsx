import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Adjust to your backend URL

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/register`, formData);
      navigate("/login");
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input name="username" placeholder="Username" className="w-full p-2 border mb-2" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" className="w-full p-2 border mb-2" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="w-full p-2 border mb-2" onChange={handleChange} />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register