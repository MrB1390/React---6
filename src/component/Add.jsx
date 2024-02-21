import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Add = () => {
    const navigate = useNavigate();
    const [addUser,setAddUser] = useState({
        username: "",
        userphone: "",
        useremail: "",
        avatar: File,
        gender: ""
    });
    const handleChange = (e) => {
          const {name,value} = e.target;
          setAddUser(res => ({...res, [name]: value}))
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setAddUser({ ...addUser, avatar: file });
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await addData();
        navigate("/");
    }
    const addData = async() => {
             await axios.post("https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/Users", addUser)
             .then(res => {
              toast.success("User Created")
             })
             .catch(res => {toast.error("Error Occured")})
    }
  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="id" class="form-label">
              ID
            </label>
            <input
              type="text"
              class="form-control"
              id="id"
              placeholder="Enter your ID"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              type="tel"
              class="form-control"
              name="userphone"
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              name="useremail"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="avatar" class="form-label">
              Choose Image
            </label>
            <input type="file" class="form-control" id="avatar"  onChange={handleFileChange}/>
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
                value="male"
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
                value="female"
                onChange={handleChange}
              />
              <label class="form-check-label" for="female">
                Female
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
