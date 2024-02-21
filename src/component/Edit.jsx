import axios from "axios";
import React, { useEffect, useState } from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Edit = ({ userId }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    username: "",
    userphone: "",
    useremail: "",
    avatar: File,
    gender: "",
  });
  useEffect(() => {
    fetchById();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Users/${userId}`,
        editData
      )
      .then((res) => {
        toast.success("Updated Successfully");
        navigate("/");
      })
      .catch((err) => toast.error("Error Occured"));
  };

  const fetchById = async () => {
    await axios
      .get(`https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Users/${userId}`)
      .then((res) => {
        setEditData(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container mt-2">
          <div className="mb-3">
            <label for="id" className="form-label">
              Id
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={editData.id}
              disabled
            />
          </div>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={editData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              name="userphone"
              value={editData.userphone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="useremail"
              value={editData.useremail}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="avatar" className="form-label">
              Image
            </label>
            <div className="edit-photo">
              <img
                src={editData.avatar}
                alt={editData.username}
                width={"190px"}
                height={"190px"}
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-check-label">Gender</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value={editData.gender}
                onChange={handleChange}
              />
              <label class="form-check-label" for="male">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value={editData.gender}
                onChange={handleChange}
              />
              <label class="form-check-label" for="female">
                Female
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
