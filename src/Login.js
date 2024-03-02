import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({handleUserName}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const updateField = (e) => {
    setUserName(e.target.value);
  };
  const nextPage = () => {
    console.log("navigate");
    handleUserName(userName)
    navigate("/welcome");
  };
  return (
    <div>
      <form onSubmit={nextPage}>
        <div>
          <label htmlFor="userName">
            Username:
            <input value={userName} name="userName" onChange={updateField} />
          </label>
        </div>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default Login;
