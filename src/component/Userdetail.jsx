import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Userdetail = ({ setUserId }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [deleteId, setDeleteId] = useState([]);
  const handleDelete = async (id) => {
    await axios
      .delete(`https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Users/${id}`)
      .then((res) => {
        toast.success("Deleted Successfully");
        setDeleteId(res.data);
      })
      .catch((err) => {
        toast.error("Error Occured", err);
      });
  };
  const handleEdit = (id) => {
    setUserId(id);
    navigate("/edit");
  };
  useEffect(() => {
    fetchData();
  }, [deleteId]);
  const fetchData = async () => {
    await axios
      .get("https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div class="container">
        <div class="table-responsive">
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>
                        <div class="d-flex align-items-center">
                          <img
                            src={item.avatar}
                            alt={item.username}
                            style={{
                              width: "45px",
                              height: "45px",
                              borderRadius: "20px",
                            }}
                          />
                          <div class="ms-3">
                            <p class="fw-bold mb-1">{item.username}</p>
                            <p class="text-muted mb-0">{item.useremail}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="fw-normal mb-1">{item.gender}</p>
                      </td>
                      <td>{item.userphone}</td>
                      <td>
                        <div className="d-flex me-3">
                          <button
                            type="button"
                            class="btn btn-primary rounded-4 btn-sm"
                            onClick={() => {
                              handleEdit(item.id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger rounded-4 btn-sm mx-2"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userdetail;
