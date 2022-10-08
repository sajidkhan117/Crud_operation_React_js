import axios from "axios";
import "../App.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("tension ");
    axios
      .post(
        "https://633d8ff5f2b0e623dc76b727.mockapi.io/crud-operations/Crud-ReactJS",
        {
          name: name,
          email: email,
          header,
        }
      )
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
   
      <div className="d-flex justify-content-evenly m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary"> show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            required={require}  
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            required
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
