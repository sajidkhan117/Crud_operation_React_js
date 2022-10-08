import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(
        `https://633d8ff5f2b0e623dc76b727.mockapi.io/crud-operations/Crud-ReactJS/${id}`,
        {
          name: name,
          email: email,
        }
      )
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <form>
        <h2>Update</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="d-flex">
          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={handleUpdate}
          >
            Update
          </button>

          <Link to="/read">
            <button className="btn btn-secondary mx-2  ">Back</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Update;
