import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setdata] = useState([]);
  const [tabledark , setTableDark] = useState('')
  function getData() {
    axios
      .get(
        "https://633d8ff5f2b0e623dc76b727.mockapi.io/crud-operations/Crud-ReactJS"
      )
      .then((res) => {
        console.log(res);
        setdata(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(
        `https://633d8ff5f2b0e623dc76b727.mockapi.io/crud-operations/Crud-ReactJS/${id}`
      )
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={()=> {
            if(tabledark === "table-dark") setTableDark("")
            else setTableDark("table-dark")
          }}
        />
      </div>
      <div className="d-flex justify-content-evenly m-2">
        <h2>Read operation</h2>
        <Link to="/">
          <button className="btn btn-dark"> Create </button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
